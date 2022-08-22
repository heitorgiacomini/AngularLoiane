import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }


  getCursos(){
    return [
      {id : 1 , nome: 'Angular'},
      {id : 2 , nome: 'Java'}
    ]
  }

  getCursoPorId(id:number){
    var curso = this.getCursos();
    return curso.find(x => x.id == id); 
  }

}
