import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UsuarioService],

})
export class UsuarioModule { }
