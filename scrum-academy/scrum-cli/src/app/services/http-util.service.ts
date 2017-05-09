import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class HttpUtilService {
    
  headers() {
    //let headersParams = { 'Content-Type': 'application/json' };
    //if (localStorage['token']) {
    //headersParams['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0OTQxNzkwMjN9.AaQfQVuOF7mixz7y_6nKx2rfiEErzGewbY5okW01zmY';
    //}

    //headersParams['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    //headersParams['Access-Control-Request-Method'] = '*'
    //headersParams['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    //let headers = new Headers(headersParams);
    let headersParams = { 'Content-Type': 'application/json'};
   // headersParams['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE0OTQzNDkxNTF9.77b1I0eemJqj7naihmFVEuE1pyjMoTt7BFDzy12rinQ'
     let headers = new Headers(headersParams);
     
     
     //headers['Access-Control-Allow-Origin'] = '*';
    // headers.append('Content-Type', 'application/json');
     //headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });
    return options;
  }
 
  extrairDados(response: Response) {
    console.log("Tou no extrair dados, ver o que é o responde:");
    console.log(response);
      let data = response.json();
      console.log(data);
      return data || {};
    }
 
   processarErros(erro: any) {
      return Observable.throw('Erro acessando servidor remoto.');
  }
}
