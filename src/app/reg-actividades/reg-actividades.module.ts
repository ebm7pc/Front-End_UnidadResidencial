import { NgModule } from '@angular/core';

import { RegistroActividadesComponent } from './reg-actividades.component';
import { RegistroActividadesRoutingModule } from './reg-actividades-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const REG_ACTIVIDADES_COMPONENTS = [
  RegistroActividadesComponent,
];

@NgModule({
  imports: [
    RegistroActividadesRoutingModule,
    ThemeModule,
  ],
  declarations: [
    ...REG_ACTIVIDADES_COMPONENTS,
  ],
})
export class RegistroActividadesModule {
}
