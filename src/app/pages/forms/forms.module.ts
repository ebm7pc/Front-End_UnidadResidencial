import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import {ServiciosService} from './form-layouts/form-layouts.service';
import { ModalsComponent } from '../ui-features/modals/modals.component';
import { ModalComponent } from '../ui-features/modals/modal/modal.component';
import { RegistroService } from './form-inputs/form-inputs.service';
import { ModalService } from 'app/pages/ui-features/modals/modal/modal.service';

const components = [
  ModalsComponent,
  ModalComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    ...components,
  ],
  entryComponents: [
    ModalComponent,
  ],

  providers: [
    ServiciosService,   
    ModalsComponent,
    RegistroService,
    ModalService,
  ],

})
export class FormsModule { }
