import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { DetalleCursosComponent } from './detalles-cursos/detalle-cursos.component';

const routes: Routes = [{
  path: '',
  component: CursosComponent,
      children: [{
        path: 'detalles-cursos',
        component: DetalleCursosComponent,
      },{
        path: '',
        redirectTo: 'detalles-cursos',
        pathMatch: 'full',
      }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule { }

export const routedComponents = [
  CursosComponent,
  DetalleCursosComponent,
];
