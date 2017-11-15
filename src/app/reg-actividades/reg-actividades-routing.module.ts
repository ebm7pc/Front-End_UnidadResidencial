import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegistroActividadesComponent } from './reg-actividades.component';


const routes: Routes = [{
    path: '',
    component: RegistroActividadesComponent,
    children: [
     // {
       // path: 'smart-user',
        //component: SmartUserComponent,
      //},
      {
        path: 'cursos',
        loadChildren: './cursos/cursos.module#CursosModule',
      },
      {
        path: '',
        redirectTo: 'cursos',
        pathMatch: 'full',
      }
    ]  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroActividadesRoutingModule {
}
