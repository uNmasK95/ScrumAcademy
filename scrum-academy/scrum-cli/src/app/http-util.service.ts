import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class HttpUtilService {
    
  headers() {
    let headersParams = { 'Content-Type': 'application/json' };
    if (localStorage['token']) {
      headersParams['Authorization'] = localStorage['token'];
    }
    let headers = new Headers(headersParams);
    let options = new RequestOptions({ headers: headers });
    return options;
  }
 
  extrairDados(response: Response) {
    console.log("Tou no extrair dados, ver o que é o responde:");
    console.log("Response:"+response);
      let data = response.json();
      console.log(data);
      return data || {};
    }
 
   processarErros(erro: any) {
      return Observable.throw('Erro acessando servidor remoto.');
  }
}