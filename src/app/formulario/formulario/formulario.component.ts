import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  mostrar() { };
  ngOnInit(): void { }

  constructor(private fb: FormBuilder) { this.iniciarFormulario(); }

  formulario = new FormGroup({})
  iniciarFormulario() {


    this.formulario = this.fb.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)

    });
  }




}




