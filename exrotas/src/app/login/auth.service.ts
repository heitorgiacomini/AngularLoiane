import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioAutenticado!: boolean;
  mostrarMenuEmitter = new EventEmitter<boolean>;

  constructor(private _router: Router) {
   }
  
  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'a'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this._router.navigate(['/']);
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }


}
