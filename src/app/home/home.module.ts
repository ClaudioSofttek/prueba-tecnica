import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManejoPipesComponent } from './manejo-pipes/manejo-pipes.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormatoFecha } from './pipes/fecha.pipe';



@NgModule({
  declarations: [
    ManejoPipesComponent,
    FormatoFecha
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
