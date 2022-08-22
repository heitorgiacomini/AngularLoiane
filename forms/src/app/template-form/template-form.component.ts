import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null,
  };
  constructor(
    private _http: HttpClient,
    private _consultaCepService : ConsultaCepService) {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    console.log(form);

    this._http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .pipe(map (x => x))
    .subscribe((x) => console.log(x));


  }

  MostraErro(campo: any) {
    return !campo.valid && campo.touched;
  }

  consultaCEP(cep: string, form: any) {
    cep = cep.replace(/\D/g, '');
    this._consultaCepService.consultaCEP(cep).subscribe((x) => this.populaDadosForm(x, form));
    
  }

  populaDadosForm(dados: any, formulario: any) {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf,
    //   },
    // });

    formulario.form.patchValue({

      endereco: {
        cep: dados.cep, 
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }

    });

  }

  resetaDadosForm(formulario: any){
    formulario.form.patchValue({

      endereco: {
        cep: null, 
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      }

    });
  }






















}
