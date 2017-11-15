import { Injectable } from '@angular/core';
import {Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class RequestService { 

    constructor( private http: Http){

    }

     login(userName: string): Observable<any>{
     return this.http.get('http://localhost:9999/usuario/recuperar?nombreUsuario='+userName)
        .map(response =>{
            return response.text();})
        ;

     

    }


}
