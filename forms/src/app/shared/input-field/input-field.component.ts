import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
}

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputFieldComponent implements  ControlValueAccessor{

  @Input()
  classeCss: any;

  @Input()
  id!: string;

  @Input()
  label!: string;

  @Input()
  type = 'text';

  @Input()
  control: any;

  @Input()
  isReadOnly = false;

  private innerVAlue: any;

  get value(){
    return this.innerVAlue;
  }

  set value(v: any){
    if( v !== this.innerVAlue){
      this.innerVAlue = v;
      this.onChangeCb(v); 
    }
  }
  
  constructor() { }
  
  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};
  
  writeValue(obj: any): void {
     this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

  
}
