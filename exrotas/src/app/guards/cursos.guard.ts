import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CursosGuard implements CanActivateChild {
  constructor(
    private _authService : AuthService,
    private _router : Router
  ){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('rotas filhas de cursos');
      if(this._authService.usuarioEstaAutenticado()){
        return true;
      } 
      
      this._router.navigate(['/login']);
      return true;
  }
  
}
