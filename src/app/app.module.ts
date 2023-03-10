import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormularioModule } from './formulario/formulario.module';
import { MenuModule } from './menu/menu.module';
import { NavComponent } from './shared/nav/nav.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DirectivasPersonalizadasDirective } from './directivas/directivas-personalizadas.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DirectivasPersonalizadasDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    FormularioModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
