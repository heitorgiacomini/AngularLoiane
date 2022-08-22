import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss'],
})
export class AlunosFormComponent implements OnInit, IFormCanDeactivate {
  id: number = 0;
  inscricao!: Subscription;
  aluno: any;
  formMudou: boolean = false;

  constructor(
    private _alunoService: AlunosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // this.inscricao = this._route.params.subscribe((params: any) => {
    //   console.log(params);
    //   this.id = params['id'];
    //   this.aluno = this._alunoService.getAlunoById(this.id);
    // });

    // this.inscricao = this._route.data.subscribe(
    //   (info) => { 
    //       this.aluno = info.aluno;
    //     }
    // );

    // // // this.inscricao = this._route.data.subscribe( 
    // // //   (info : {aluno: Aluno}) => use => ({aluno}) =>{ 
    // // //     this.aluno = aluno;
    // // //   }
         
       

    // // // ); 

    this.inscricao = this._route.data.subscribe(
      (info) =>{ 
          this.aluno = info['aluno'];
        }
    );


  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair dessa página');
    }
    return true;
  }

  podeDesativar() {
    this.podeMudarRota();
  }
}
