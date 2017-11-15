import { Component } from '@angular/core';

import { MENU_ITEMS } from '../pages/pages-menu';

@Component({
  selector: 'reg-actividades',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class RegistroActividadesComponent {

  menu = MENU_ITEMS;
}
