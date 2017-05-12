import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';

@Injectable()
export class LoginGuardService {

  constructor(private http: Http, private httpUtil: HttpUtilService) { }

  getAll() {
    console.log("Entrei getAll do service");
   
    return this.http.get('http://localhost:3000/types', this.httpUtil.headers())
                .map(this.httpUtil.extrairDados)
                .catch(this.httpUtil.processarErros);
   /* return new Observable(() => {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", 'http://localhost:3000/types', true)
        //xhr.send()
    })*/
  }
}
