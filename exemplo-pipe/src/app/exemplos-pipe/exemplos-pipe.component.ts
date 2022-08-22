import { Component, OnInit} from '@angular/core';
import { Observable , interval} from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-exemplos-pipe',
  templateUrl: './exemplos-pipe.component.html',
  styleUrls: ['./exemplos-pipe.component.scss']
})
export class ExemplosPipeComponent implements OnInit {

  livro : any = {
    titulo: 'Learning Javascript Data Structures and Algorithms 2nd ',
    rating: 4.54321,
    numeropaginas: 314,
    preco: 44.99,  
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'

  }
  filtro: string  = '';
  livros: string[] = ['Java','Angular']

  
  valorAsync = new Promise((resolve, reject)=>{
    setTimeout(() => resolve('Valor assincrono '), 2000)
  });

  valorAsyncB = interval(2000).pipe(map(valor => 'Valor assíncrono B'));
 

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(curso:string){
    this.livros.push(curso);
    console.log(this.livros);
  }

  obterCursos (){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }
    
    let filter = this.filtro.toLocaleString().toLowerCase(); 
    return this.livros.filter((v:string) => v.toLowerCase().includes(filter));
  }

}
