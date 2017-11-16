import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroComponent } from './registro.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';

const routes: Routes = [{
  path: '',
  component: RegistroComponent,
  children: [{
    path: 'inputs',
    component: FormInputsComponent,
  }, {
    path: 'layouts',
    component: FormLayoutsComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
  RegistroComponent,
  FormInputsComponent,
  FormLayoutsComponent,
];