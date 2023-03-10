import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appDirectivasPersonalizadas]'
})
export class DirectivasPersonalizadasDirective {

  constructor( private readonly elref: ElementRef) { }


@HostListener('input', ['$event'])
onChangeInput(event :Event):void{
const numbersOnly= /[^0-9]*/g

const initValue=this.elref.nativeElement.value;
this.elref.nativeElement.value=initValue.replace(numbersOnly,'')
if(initValue!==this.elref.nativeElement.value){
event.stopPropagation();


}



}





}
