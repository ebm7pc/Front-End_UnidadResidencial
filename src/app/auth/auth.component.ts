import { Component } from '@angular/core';

@Component({
  selector: 'cc-auth',
  template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-body class="col-xl-4 col-lg-6 col-md-8 col-sm-12" style="display: inline-block; margin: 0 auto">
            <router-outlet></router-outlet>
          </nb-card-body>    
        </nb-card>
      </nb-layout-column>
    </nb-layout>
    `,
})
export class AuthComponent {
}
