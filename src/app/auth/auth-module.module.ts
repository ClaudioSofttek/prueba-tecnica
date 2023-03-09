import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from './service/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponentComponent } from './pages/login/login-component.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    LoginComponentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    
    
  ],
  providers:[
    AuthServiceService
  ]
})
export class AuthModuleModule { }
