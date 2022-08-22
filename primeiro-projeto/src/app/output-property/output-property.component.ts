import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {
  @Input() 
  valor: number = 0;

  @Output()
  mudouValor = new EventEmitter();

  @ViewChild('campoInput', {static: false}) 
  // campoValorInput: HTMLElement;
  campoValorInput!: ElementRef;

  decrementa(){
    // this.valor--; 
    
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
    // console.log(this.campoValorInput.nativeElement.value);
  }
  
  incrementa(){
    // this.valor++; 
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
