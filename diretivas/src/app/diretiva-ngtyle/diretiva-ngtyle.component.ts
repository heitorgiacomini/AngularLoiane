import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-diretiva-ngtyle',
  templateUrl: './diretiva-ngtyle.component.html',
  styleUrls: ['./diretiva-ngtyle.component.scss']
})
export class DiretivaNgtyleComponent implements OnInit {
  
  ativo: boolean = false;
  tamanhoFonte: number = 30;

  mudarAtivo(){
    this.ativo = !this.ativo;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
