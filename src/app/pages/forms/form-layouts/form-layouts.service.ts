import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';


import 'rxjs/add/operator/map';


@Injectable()
export class ServiciosService { 

    constructor( private http: Http){

    }

     verificar(userName: string): Observable<any>{
     return this.http.get('http://localhost:9090/WSUnidadResidencial/rest/Cliente/Acceso?ficho='+userName)
        .map(response =>{
            return response.text();})
        ;

     

    }


}
