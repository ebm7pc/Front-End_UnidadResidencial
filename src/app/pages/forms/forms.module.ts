import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import {ServiciosService} from './form-layouts/form-layouts.service';
import { ModalsComponent } from '../ui-features/modals/modals.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],


  providers: [
    ServiciosService,   
    ModalsComponent,
  ],

})
export class FormsModule { }
