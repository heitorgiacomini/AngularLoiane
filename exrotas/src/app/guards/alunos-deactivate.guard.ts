import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
  canDeactivate(
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return component.podeMudarRota();

      return component.podeDesativar();
  }
  
}
