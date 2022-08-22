import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    children: [
      {
        path: 'novo',
        component: AlunosFormComponent,
        // resolve:{aluno: AlunoDetalheResolver}
      },
      { path: ':id', component: AlunoDetalheComponent },
      {
        path: ':id/editar',
        component: AlunosFormComponent,
        resolve: { aluno: AlunoDetalheResolver },
        // canDeactivate: [AlunosDeactivateGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
