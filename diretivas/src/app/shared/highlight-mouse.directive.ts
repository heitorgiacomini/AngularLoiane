import { Directive, HostListener, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {
  constructor(
    // private _elementRef: ElementRef,
    // private _renderer2: Renderer2
  ) { 
  }

  @HostListener('mouseenter') 
  onMouseOver(){
    // this._renderer2.setStyle(this._elementRef.nativeElement,'background-color','yellow');
    this.backgroundColor = 'yellow';
  }
  
  // @HostBinding('style.backgroundColor') 
  // private backgroundColor: string = '';
  
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  private backgroundColor: string = '';


  @HostListener('mouseleave') 
  onMouseLeave(){
    // this._renderer2.setStyle(this._elementRef.nativeElement,'background-color','white');
    this.backgroundColor = 'white';
  }


}
