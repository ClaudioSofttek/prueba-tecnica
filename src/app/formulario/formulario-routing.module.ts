import { NgModule } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'formulario', component: FormularioComponent },


      { path: '**', redirectTo: 'formulario' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
