import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Usuario, Address } from '../interface/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com/users/1';
  private _usuario: Usuario | undefined;

  get auth(): Usuario {
    return { ...this._usuario! }
  }
     
  constructor( private http: HttpClient ) { }


  verificaAutenticacion(): Observable<boolean> {

    if ( !localStorage.getItem('token') ) {
      return of(false);
    }

    return this.http.get<Usuario>(this.baseUrl)
              .pipe(
                map( usuario => {
                  this._usuario = usuario;
                  return true;
                })
              );

  }


  login() {
    return this.http.get<Usuario>(this.baseUrl)
              .pipe(
                tap( usuario => this._usuario = usuario ),
                tap( usuario => localStorage.setItem('token', usuario.name) ),
              );
  }

  logout() {
    this._usuario = undefined;
  }

}
