import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { AuthenticationService } from '../../services/authentication.service';
import {ServiciosService} from './login.service';

@Component({
  selector: 'ra-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: any = {};
  returnUrl: string;
  errors = [];
  messages = []; 
  errorMessage: string="";

  constructor(private router: Router,
              private route: ActivatedRoute,
              //private authenticationService: AuthenticationService,
              public servicios: ServiciosService,
            ) {
      
  }
  
  ngOnInit() {
    // reset login status
    //this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    //this.returnUrl = '/pages/dashboard'
    //this.router.navigate([this.returnUrl]);

    this.servicios.login(this.user.email,this.user.password).subscribe(result =>{
      if(result == "Administrador" ){        
        this.returnUrl='/pages/forms';
        this.router.navigate([this.returnUrl]);
      }
      else{
        this.errors[1] = result;   
       }
    });   


  /*  this.errors = [];
    this.messages = [];
    this.authenticationService.login(this.model)
        .subscribe(
        data => {
            if (data.status == 1) {
              this.router.navigate([this.returnUrl]);
            }
            if (data.status == 0) {
              this.errors[0] = data.message;
            }
        },
        error => {
          alert("Error de comunicación con los servicios ");
          console.log("LOGIN "+error)
        });*/
  }

}
