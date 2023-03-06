import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioRoutingModule } from './formulario-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
   
    CommonModule,
    FormularioRoutingModule,
    FormsModule,
    ReactiveFormsModule

    
  ]
})
export class FormularioModule { }
