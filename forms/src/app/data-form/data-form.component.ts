import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EMPTY, empty, Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { FormValidations } from '../shared/form-validation';
import { Cidade } from '../shared/models/cidade';
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { VerificaEmailService } from './services/verifica-email.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent extends BaseFormComponent implements OnInit {
  // public formulario!: FormGroup;

  // estados!: Observable<EstadoBr[]>;
  estados!: EstadoBr[];
  cidades!: Cidade[];
  cargos!: any[];
  tecnologias!: any[];
  newsletter!: any[];
  frameworks: any[] = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _dropdownService: DropdownService,
    private _consultaCepService: ConsultaCepService,
    private _verificaEmailService: VerificaEmailService
  ) {
    super();
  }

  override ngOnInit(): void {
    this._verificaEmailService.verificaEmail('email1@email.com').subscribe();

    // this.estados = this._dropdownService.getEstadosBr();

    this._dropdownService
      .getEstadosBr()
      .subscribe((dados) => (this.estados = dados));

    this.cargos = this._dropdownService.getCargos();

    this.tecnologias = this._dropdownService.getTecnologias();

    this.newsletter = this._dropdownService.getNewsletter();

    this.formulario = this._formBuilder.group({
      nome: [
        null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(8)],
      ],
      email: [
        null,
        [Validators.required, Validators.email],
        [this.validarEmail.bind(this)],
      ],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],
      endereco: this._formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['n'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks(),
    });

    this.formulario
      .get('endereco.cep')
      ?.statusChanges.pipe(
        distinctUntilChanged(),
        // tap(value => console.log(value))
        switchMap((value) =>
          value === 'VALID'
            ? this._consultaCepService.consultaCEP(
                this.formulario.get('endereco.cep')?.value
              )
            : []
        )
      )
      .subscribe((status) => (status ? this.populaDadosForm(status) : {}));

    this.formulario
      .get('endereco.estado')
      ?.valueChanges.pipe(
        tap((estado) => console.log('Novo estado: ', estado)),
        map((estado) => this.estados.filter((e) => e.sigla === estado)),
        map((estados: any[]) =>
          estados && estados.length > 0 ? estados[0].id : empty()
        ),
        switchMap((estadoId: number) =>
          this._dropdownService.getCidades(estadoId)
        ),
        tap(console.log)
      )
      .subscribe((cidades) => (this.cidades = cidades));
  }

  buildFrameworks() {
    const values = this.frameworks.map((x) => new FormControl(false));
    return this._formBuilder.array(
      values,
      FormValidations.requiredMinCheckbox(1)
    );
  }

  formData() {
    return <FormArray>this.formulario.get('frameworks');
  }

  submit(): void {
    console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: any, i: number) => (v ? this.frameworks[i] : null))
        .filter((v: any) => v !== null),
    });

    this._http
      .post('https://httpbin.org/post', JSON.stringify(valueSubmit))
      .pipe(map((x) => x))
      .subscribe(
        (x) => {
          console.log(x);
          this.resetaForm();
        },
        (error: any) => alert('erro')
      );
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep')?.value;
    this._consultaCepService
      .consultaCEP(cep)
      .subscribe((x) => this.populaDadosForm(x));
  }

  populaDadosForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }

  compararCargos(obj1: any, obj2: any) {
    return obj1 && obj2 ? obj1.nivel === obj2.nivel : obj1 === obj2;
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' };
    this.formulario.get('cargo')?.setValue(cargo);
  }
  setarTecnologias() {
    this.formulario.get('tecnologias')?.setValue(['java', 'javascript', 'php']);
  }

  validarEmail(formControl: FormControl) {
    return this._verificaEmailService
      .verificaEmail(formControl.value)
      .pipe(
        map((emailExiste) => (emailExiste ? { emailInvalido: true } : null))
      );
  }
}
