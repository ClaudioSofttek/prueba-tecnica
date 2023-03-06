import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuarios.interface';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }
  termino: string = '';
  usuarios: Usuario[] = [];
  buscar() {
    
    console.log(this.termino)
    this.usuarioService.buscarUsuario().subscribe(usuarios => {
      console.log(usuarios);
      this.usuarios = usuarios;
    })
  }




}