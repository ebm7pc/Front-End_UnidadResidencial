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

  showLargeModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
  }
  showSmallModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Small Modal';
  }

  showStaticModal() {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Registrar Vehículo';
    activeModal.componentInstance.modalContent = `<table>
    <tr>
        <td>Nombre: </td>
        <td><input type="text" name="Nombre" placeholder="Ingrese el nombre" size="35" required></td>
    </tr>
    <tr>
        <td>Edad: </td>
        <td><input type="number" name="Edad" placeholder="Ingrese la edad" size="20" required></td>
    </tr>
    <tr>
        <td>Correo Electrónico: </td>
        <td><input type="email" name="Correo" placeholder="Ingrese el nombre" size="50" required></td>
    </tr>
</table>`;
  }

}
