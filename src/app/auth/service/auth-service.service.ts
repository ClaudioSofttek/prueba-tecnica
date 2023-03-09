import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Usuario, Address } from '../interface/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/users/1';
  private _usuario: Usuario | undefined;

  get auth(): Usuario {
    return { ...this._usuario! }
  }

  verificaAutenticacion(): Observable<boolean> {

    if (!localStorage.getItem('token')) {
      console.log('no hay token')
      return of(false);
    }

    return this.http.get<Usuario>(this.baseUrl)
      .pipe(
        map(usuario => {
          this._usuario = usuario;
          console.log(usuario.name+'verdadero')
          return true;
        })
      );
  }


  login() {
    return this.http.get<Usuario>(this.baseUrl)
              .pipe(
                tap( usuario => this._usuario = usuario  ),
                tap( usuario => localStorage.setItem('token', usuario.name ) ),
                
              );
               
            }

  logout() {
    this._usuario = undefined;
  }


}
