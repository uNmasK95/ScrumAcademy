import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/user';
import { HttpUtilService } from "app/services/http-util.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UserService {
    user: User ;

    constructor(private http: Http, private httpUtil: HttpUtilService) { }

   /* getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }*/

    get(){
        return this.http.get(this.httpUtil.url('/users'), this.httpUtil.headers())
                   .map(this.httpUtil.extrairDados);
    }

    getById(id: number) {
        return this.http.get(this.httpUtil.url('/users/' + id), this.httpUtil.headers())
                   .map(this.httpUtil.extrairDados);
    }

    //É preciso ver qual o caminho, faz update do nome do user
    updateName(id:number,name: string){
        let headersParams = { 'Content-Type': 'application/json' };
        if (localStorage['currentUser']) {
            console.log("token")
            headersParams['Authorization'] = localStorage['currentUser'];
        }
        var search = new URLSearchParams();
        search.set('name', ''+name);
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers, search:search});
        return this.http.put(this.httpUtil.url('/users/'+id),options)
                   .map(this.httpUtil.extrairDados);
    }

    //é preciso ver o caminho, faz update do nome e da passe do user
    update(id:number,name: string, password: string){
        let headersParams = { 'Content-Type': 'application/json' };
        if (localStorage['currentUser']) {
            console.log("token")
            headersParams['Authorization'] = localStorage['currentUser'];
        }
        var search = new URLSearchParams();
        search.set('name', ''+name);
        search.set('password', ''+password);
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers, search:search});
        return this.http.put(this.httpUtil.url('/users/' + id),JSON.stringify({name: name, password: password}),this.httpUtil.headers())
                   .map(this.httpUtil.extrairDados);
    }

    userconfirm(email: string, password: string){
        return this.http.post((this.httpUtil.url('/auth/login')), JSON.stringify({email : email, password : password}) ,this.httpUtil.headers())
                .map(this.httpUtil.extrairDados);
    }
   // informcacoesUser(mail: string){
      //  let data = this.(mail).catch(this.httpUtil.processarErros);
       // this.user.email = da.email;
       // this.user.id = da.id;
       // this.user.type = da.type.id;
       // this.user.name = da.name;
    //}

    /*create(user: User) {
        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }*/

    /*update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }*/

    /*delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }*/
}