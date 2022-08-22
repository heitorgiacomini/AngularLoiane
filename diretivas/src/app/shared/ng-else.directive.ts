import { Directive, Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgElse]'
})
export class NgElseDirective {
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }
  
  @Input() set appNgElse(condition: boolean){
    if(!condition){
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }else{
      this._viewContainerRef.clear();
    }
  }


}
