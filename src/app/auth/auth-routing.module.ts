import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './pages/login/login-component.component';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponentComponent
      }
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )

  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
