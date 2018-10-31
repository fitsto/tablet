import { Directive, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { RutProvider } from '../../providers/rut/rut';

/**
 * Generated class for the FormatoRutDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[formato-rut]', // Attribute selector
  host: {
    '(blur)': 'onBlur($event.target.value)',
    '(focus)': 'onFocus($event.target.value)',
    '(keydown)': 'onKeydown($event)',
    '(input)': 'onChange($event.target.value)'
  }
})
export class FormatoRutDirective {
  @Output() rutChange = new EventEmitter();
  regExp:string = '^[0-9kK]';//'^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)';
  constructor(
    private el:ElementRef,
    private renderer: Renderer2,
    public rutService: RutProvider
  ) {
    console.log('Hello FormatoRutDirective Directive');
    //this.rutChange = new EventEmitter();
  }

  public onFocus(value:string):void{
    if(!value) return;
    let cleanRut: string = this.rutService.quitarFormato(value);
    this.renderer.setProperty(this.el.nativeElement, 'value', cleanRut);
    this.rutChange.emit(cleanRut);
  }

  public onBlur(value:string):void{
    if(!value) return;
    let formattedRut: string = this.rutService.formatear(value) || '';
    this.renderer.setProperty(this.el.nativeElement, 'value', formattedRut);
    this.rutChange.emit(formattedRut);
  }

  public onChange(value:string):void{
    this.rutChange.emit(this.rutService.quitarFormato(value));
  }

  public onKeydown(event:any){
    return ((event.keyCode >=48 && event.keyCode <=57)||(event.keyCode >=96 && event.keyCode <=105) || event.keyCode ==75 || event.keyCode ==8);
  }
}
