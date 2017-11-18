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
    const activeModal = this.modalService.open(ModalComponent, { 
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      container: 'nb-layout' ,
    });

    activeModal.componentInstance.modalHeader = 'REGISTRAR VEHÍCULO';
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

}
