import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorPersonalizadoService {

  constructor() { }
validar(control:FormControl){

  const valor: string=control.value;
if(valor.length>8 && valor.length<12 )
{ return{validar: true}}
  else{return null;}
}

}
