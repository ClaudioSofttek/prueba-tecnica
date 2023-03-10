import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/auth/interface/Usuario.interface';
import { AuthServiceService } from 'src/app/auth/service/auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  usuario: Usuario= this.auth;
   get auth() {
    return this.authServiceService.auth;
  }

  constructor( private router: Router,
               private authServiceService: AuthServiceService ) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['./auth/login']);
  }

}
