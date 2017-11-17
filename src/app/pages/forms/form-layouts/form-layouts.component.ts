import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ServiciosService} from './form-layouts.service';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {
  user: any = {};
  returnUrl: string;
  errors = [];
  messages = []; 

  constructor(private router: Router,
    private route: ActivatedRoute,    
    public servicios: ServiciosService,
  ) {

}

  verificar(){
    this.servicios.verificar(this.user.id).subscribe(result =>{
      if(result == "Accede" ){        
        this. messages[1]="El usuario  con ficho "+this.user.id+" tiene acceso"; 
        this.errors = [];
      }
      else{
        this.errors[1] = result; 
        this. messages=[];  
       }
    }); 
 

  }
}
