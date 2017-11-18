import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class ModalService { 
    
    constructor( private http: Http){
    }
     registrar(placa: string, marca: string, id_cliente: number): Observable<any>{
     return this.http.get('http://localhost:9090/WSUnidadResidencial/rest/Vehiculo/InsertarVehiculo?placa='+ placa +
     '&marca=' + marca + '&cliente=' + id_cliente)
        .map(response =>{
            return response.text();})
        ;
    }
}
