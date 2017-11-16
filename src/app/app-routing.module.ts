import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RequestPasswordComponent } from './auth/request-password/request.password.component';
import { RegistroComponent } from './registros/registro.component';
import { FormInputsComponent } from './registros/form-inputs/form-inputs.component';

const routes: Routes = [
  {
    path: 'registros', 
    component: RegistroComponent,
    children: [
      {
        path: 'registrar-visitante',
        component: FormInputsComponent,
      },
    ],
  },  
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'reg-actividades', loadChildren: 'app/reg-actividades/reg-actividades.module#RegistroActividadesModule' },
  {
    path: 'auth-ra', 
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent,
      },

      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ]
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
