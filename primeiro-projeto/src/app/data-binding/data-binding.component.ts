import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  nomeDoCurso: string = 'Angular';

  url:any = 'loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg';
  valorAtual: string = '';
  valorSalvo: string = '';
  
  isMouseOver: boolean= false;

  nome:string = 'abc';

  pessoa: any ={
    nome: 'def',
    idade: 20
  }
  onMudouValor(event:any){
    console.log(event);
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver; 
  }
  
  salvarValor(event:any){
    // this.valorSalvo = event?.isTrusted ? event.target.value : event ;  
    this.valorSalvo = event ;  
  }

  onKeyUp(event: KeyboardEvent ){
    // console.log(event.key);
    // console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value;
  } 

  botaoClicado(){
    alert('clicado');
  }
  getValor(){
    return 3;
  }


  getCurtirCurso(){
    return true;
  }


  constructor() {  
  }

  ngOnInit(): void {
  }

}
