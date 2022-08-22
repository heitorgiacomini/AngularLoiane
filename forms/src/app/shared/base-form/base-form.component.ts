import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>' 
})
export abstract class BaseFormComponent implements OnInit {

  public formulario!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
  
  abstract submit():void;

  onSubmit() {
    if(this.formulario.valid) {
      this.submit();
    }else {
      this.verificaValidacoesForm(this.formulario);
    }
  }


  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      controle?.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetaForm() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string): boolean {
    return (
      !this.formulario.get(campo)!.valid &&
      (this.formulario.get(campo)!.touched || this.formulario.get(campo)!.dirty)
    );
  }

  verificaEmailinvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors!['email'] && campoEmail.touched;
    }
  }

  aplicaCSSErro(campo: string) {
    return {
      'tem-erro': this.verificaValidTouched(campo),
    };
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

}
