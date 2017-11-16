import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './registro-routing.module';
import { RegistroComponent } from 'app/registros/registro.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';

const REGISTRO_COMPONENTS = [
  RegistroComponent,
  FormInputsComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
  ],
  declarations: [
    ...REGISTRO_COMPONENTS,
    ...routedComponents,
  ],
})
export class RegistroModule { }
