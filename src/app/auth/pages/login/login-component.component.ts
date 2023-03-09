import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent  {


  constructor( private router: Router,
    private authServiceService: AuthServiceService ) { }

login() {

// Ir al backend
// un usuario
this.authServiceService.login()
.subscribe( resp => {
console.log(resp);

if ( resp.id ) {

this.router.navigate(['./usuarios/listado']);
console.log('el id es:'+resp.id)
}
})
}

ingresarSinLogin() {
this.authServiceService.logout();
this.router.navigate(['./home']);
}


}
