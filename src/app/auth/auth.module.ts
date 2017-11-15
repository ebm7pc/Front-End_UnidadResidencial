import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RequestPasswordComponent } from './request-password/request.password.component';
import {ServiciosService} from './login/login.service';
import {RequestService} from './request-password/request.password.service';



//import { AuthenticationService } from '../services/authentication.service';
//import { UsuarioService } from '../services/usuario.service';

const AUTH_COMPONENTS = [
  AuthComponent,
  LoginComponent,
  RequestPasswordComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    AuthRoutingModule,
  ],
  declarations: [
    ...AUTH_COMPONENTS,
  ],
  providers: [
    ServiciosService,
    RequestService,
    //AuthenticationService,
    //UsuarioService,
  ],
})
export class AuthModule { }
