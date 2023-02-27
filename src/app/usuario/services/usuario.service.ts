import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private baseUrl: string = 'https://jsonplaceholder.typicode.com/users';



  constructor( private http: HttpClient) { }

  buscarUsuario(): Observable<Usuario[]>{
//const url =`${}/name/${}`
  return this.http.get<Usuario[]>(this.baseUrl);
  }
}
