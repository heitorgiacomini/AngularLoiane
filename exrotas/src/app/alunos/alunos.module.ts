import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';


@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  exports:[],
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunoDetalheComponent
  ],
  providers:[
    AlunosService,
    AlunosDeactivateGuard,
    AlunoDetalheResolver
  ]
})
export class AlunosModule { }
