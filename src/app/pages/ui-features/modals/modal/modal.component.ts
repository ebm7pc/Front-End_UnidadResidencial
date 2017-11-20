import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Input } from '@angular/core/src/metadata/directives';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistroService } from '../../../forms/form-inputs/form-inputs.service';
import { FormInputsComponent } from '../../../forms/form-inputs/form-inputs.component';
import { ModalService } from './modal.service';

@Component({
  selector: 'ngx-modal',
  styleUrls: ['./modal.component.scss'],
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  errors = [];
  messages = [];

  placa: string;
  marca: string;
  ficho: number;
  nombre: string;
  apellido: string;
  identif: number;
  responsable: string;
  apartamento: string;
  tieneVehi: boolean;
  fechaSalida: Date;


  modalHeader: string;
  modalContent: String = `ingrese la placa del vehículo:`;

  constructor(private activeModal: NgbActiveModal,
    public registros: RegistroService,
    public regVehiculo: ModalService,
    private router: Router,
    private route: ActivatedRoute, ) { }

  closeModal() {
    this.registros.registrar(this.ficho,
      this.nombre, this.apellido, this.identif,
      this.responsable, this.apartamento, this.tieneVehi, this.fechaSalida).subscribe(result => {
        if (result == "Se guardó el cliente") {
          this.messages[1] = "El usuario  con ficho " + this.ficho + " se registró";
          this.errors = [];
          setTimeout(() => {
            this.regVehiculo.registrar(this.placa, this.marca, this.ficho).subscribe(result => {
              if (result == "Se guardó el vehículo correctamente") {
                this.messages[2] = "El vehículo se guardó";
                this.errors = [];
              }
              else {
                this.errors[2] = result;
                this.messages = [];
              }
            });
          }, 1500);
        }
        else {
          this.errors[1] = result;
          this.messages = [];
        }
      });

      
      setTimeout(() => {
    this.activeModal.close();
  }, 4000);
  }
}
