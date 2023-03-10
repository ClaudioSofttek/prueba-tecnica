import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponentComponent } from './pages/login/login-component.component';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
  declarations: [
    LoginComponentComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
    
  ]
})
export class AuthModuleModule { }
