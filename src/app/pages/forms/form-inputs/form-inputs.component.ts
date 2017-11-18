import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalsComponent } from '../../ui-features/modals/modals.component';
import { RegistroService } from './form-inputs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})

export class FormInputsComponent {

  user: any = {};
  returnUrl: string;
  errors = [];
  messages = [];



  constructor(public emergente: ModalsComponent, private router: Router,
    private route: ActivatedRoute,
    public registros: RegistroService, ) {
    this.user.tieneVehi = false;
  }

  registrar() {
    if (this.user.tieneVehi == false) {
      this.registros.registrar(this.user.ficho,
        this.user.nombre, this.user.apellido, this.user.identif,
        this.user.responsable, this.user.apartamento, this.user.tieneVehi, this.user.fechaSalida).subscribe(result => {
          if (result == "Se guardó el cliente") {
            this.messages[1] = "El usuario  con ficho " + this.user.ficho + " se registró";
            this.errors = [];
          }
          else {
            this.errors[1] = result;
            this.messages = [];
          }
        });
    } else {
      this.emergente.showLargeModal(this.user.ficho,
        this.user.nombre, this.user.apellido, this.user.identif,
        this.user.responsable, this.user.apartamento, this.user.tieneVehi, this.user.fechaSalida
      );
    }
  }

  formatoFecha() {
    var datePipe = new DatePipe("en-US");
    this.user.fechaSalida = datePipe.transform(this.user.fechaSalida, 'yyyy-MM-dd');
  }

}
