import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ValidatorPersonalizadoService } from '../service/validator-personalizado.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  mostrar() { console.log(this.formulario.value)};
  ngOnInit(): void { }


  constructor(private fb: FormBuilder, private validatorPersonalizadoService:  ValidatorPersonalizadoService ) { this.iniciarFormulario(); }

  formulario = new FormGroup({})
  iniciarFormulario() {


    this.formulario = this.fb.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      
    });
    
  }




}




