import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'ngx-modals',
  styleUrls: ['./modals.component.scss'],
  templateUrl: './modals.component.html',
})
export class ModalsComponent {

  constructor(private modalService: NgbModal) { }

  showLargeModal(ficho: number, nombre: string, apellido: string, identif: number,
    responsable: string, apartamento: string, tieneVehi: boolean, fechaSalida: Date) {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      keyboard: false,
      container: 'nb-layout',

    });

    activeModal.componentInstance.modalHeader = 'REGISTRAR VEHÍCULO';
    activeModal.componentInstance.ficho = ficho;
    activeModal.componentInstance.nombre = nombre;
    activeModal.componentInstance.apellido = apellido;
    activeModal.componentInstance.identif = identif;
    activeModal.componentInstance.responsable = responsable;
    activeModal.componentInstance.apartamento = apartamento;
    activeModal.componentInstance.tieneVehi = tieneVehi;
    activeModal.componentInstance.fechaSalida = fechaSalida;

  }
  showSmallModal() {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout'
    });

    activeModal.componentInstance.modalHeader = 'REGISTRAR VEHÍCULO';
  }

  showStaticModal() {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Registrar Vehículo';
    // activeModal.componentInstance.modalContent = `nada`;
  }

  registrarConVehiculo() {

  }

}
