import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer2: Renderer2
  ) { 
  }

  @Input() defaultColor: string = 'white';
  @Input('appHighlight') highlightColor: string = 'yellow';

  @HostListener('mouseenter') 
  onMouseOver(){
    // this._renderer2.setStyle(this._elementRef.nativeElement,'background-color','yellow');
    this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') 
  onMouseLeave(){
    // this._renderer2.setStyle(this._elementRef.nativeElement,'background-color','white');
    this.backgroundColor = this.defaultColor;
  }
  
  // @HostBinding('style.backgroundColor') 
  // private backgroundColor: string = '';
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  private backgroundColor: string = '';
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.backgroundColor = this.defaultColor;
  }


}
