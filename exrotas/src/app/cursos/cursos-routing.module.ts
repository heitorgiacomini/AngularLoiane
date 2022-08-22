import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';

const cursosRoutes: Routes = [
  { path: '', component: CursosComponent},
  { path: 'curso-detalhe', component: CursoDetalheComponent},
  { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent},
  { path: ':id', component: CursosComponent},
  { path: 'curso-detalhe/:id', component: CursoDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
 
export class CursosRoutingModule { 
  static  routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(cursosRoutes);
}
 
