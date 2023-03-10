import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../service/auth-service.service';
import { tap } from 'rxjs/operators';
import { Usuario, Address } from '../interface/Usuario.interface';

@Injectable({
  providedIn: 'root'
})



export class ValidacionGuardGuard implements CanLoad, CanActivate {

  constructor(private authServiceService: AuthServiceService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authServiceService.verificaAutenticacion()
      .pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado) {
            this.router.navigate(['./auth/login']);
          }
        })
      )

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {



    return this.authServiceService.verificaAutenticacion()
      .pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado) {
            this.router.navigate(['./auth/login']);
          }
        })
      );

  }
}
