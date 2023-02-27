import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManejoPipesComponent } from './manejo-pipes/manejo-pipes.component';




const routes: Routes = [
  {
    path: '',
    
    children: [
      { path: 'manejoPipes', component: ManejoPipesComponent },


      { path: '**', redirectTo: 'manejoPipes' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
