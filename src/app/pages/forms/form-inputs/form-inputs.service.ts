import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';


import 'rxjs/add/operator/map';


@Injectable()
export class RegistroService { 
    
    constructor( private http: Http){

    }

     registrar(ficho : number, nombre : string, apellido : string, identif : number,
        responsable : string, apartamento : string, tieneVehi: boolean, fechaSalida : Date): Observable<any>{
     return this.http.get('http://localhost:9090/WSUnidadResidencial/rest/Cliente/InsertarCliente?ficho='+ ficho +
     '&tipo=Visitante&nombre=' + nombre + '&apellido=' + apellido +
     '&identificacion=' + identif + '&apto=' + apartamento + '&tel=0&cel=0&mail=&vehi=' + tieneVehi + '&resp=' + responsable + 
     '&fsalida=' + fechaSalida)
        .map(response =>{
            return response.text();})
        ;

     
    }


}
