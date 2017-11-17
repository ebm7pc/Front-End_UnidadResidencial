import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import {ServiciosService} from './form-layouts/form-layouts.service';

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
    
  ],
})
export class FormsModule { }
