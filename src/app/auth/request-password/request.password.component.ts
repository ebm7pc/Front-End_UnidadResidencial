import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { UsuarioService } from '../../services/usuario.service';
import {RequestService} from './request.password.service';

@Component({
  selector: 'ra-request',
  templateUrl: './request.password.component.html',
})
export class RequestPasswordComponent {

  usuario: any = {};
  submitted: boolean;
  errors = [];
  messages = [];
  errorMessage= String; 
  constructor(//private usuarioService: UsuarioService,
              private router: Router,private request: RequestService) {
    this.submitted = false;
  }
  
  requestPass(){
    this.request.login(this.usuario.nombreUsuario).subscribe(result =>{
        if(result == "valido"){      
          
          this.router.navigate(['/auth-ra/login']);
        }
        else{
          this.errorMessage = result;   
         }
      });   
    /*this.errors = [];
    this.messages = [];
    this.submitted = true; 
    this.usuarioService.requestPassword(this.usuario).subscribe(
        data => {
            if (data.status == 1) {
                this.messages[0] = data.message;
                //this.router.navigate(['auth/login']);
            }
            if (data.status == 0) {
                this.errors[0] = data.message;
            }
            this.submitted = false;
        },
        error => {
            alert("Error de comunicación con los servicios ");
            console.log("LOGIN "+error)
        }
    );*/
  }
}
