import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { MenuModule } from './menu/menu.module';
import { MenuComponent } from './menu/menu.component';



const routes: Routes = [
  {
    path: 'usuarios',

    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'home',

    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'menu',
    component: MenuComponent

  },


  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: 'usuarios'
  }
]

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes),
    MenuModule

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
