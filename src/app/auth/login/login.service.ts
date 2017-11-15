import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class ServiciosService { 

    constructor( private http: Http){

    }

     login(userName: string, pws :string): Observable<any>{
     return this.http.get('http://localhost:9090/WSUnidadResidencial/rest/Usuario/LoginUsuario?nombre='+userName+'&pwd='+pws)
        .map(response =>{
            return response.text();})
        ;

     

    }


}
