import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { MenuModule } from './menu/menu.module';
import { MenuComponent } from './menu/menu.component';
import { ValidacionGuardGuard } from './auth/guard/validacion-guard.guard';


const routes: Routes = [
  {
    path: 'usuarios',

    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule),

     canLoad: [ ValidacionGuardGuard ],
    canActivate: [ ValidacionGuardGuard ]

  },
  {
    path: 'home',

    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [ ValidacionGuardGuard ],
    canActivate: [ ValidacionGuardGuard ]
  },
  {
    path: 'menu',
    component: MenuComponent,
    canLoad: [ ValidacionGuardGuard ],
    canActivate: [ ValidacionGuardGuard ]
  },

  {
    path: 'formulario',

    loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule)
    ,
    canLoad: [ ValidacionGuardGuard ],
    canActivate: [ ValidacionGuardGuard ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module.module').then( m => m.AuthModuleModule ),
    
  },
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
