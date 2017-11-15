import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RequestPasswordComponent } from './request-password/request.password.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [{
    path: '',
    component: AuthComponent,
    children: [
        {
            path: 'login',
            component: LoginComponent,
        },
        {
            path: 'request-password',
            component: RequestPasswordComponent,
        },
        {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full',
        }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }

