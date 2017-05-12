import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/user';
import { HttpUtilService } from "app/services/http-util.service";

@Injectable()
export class UserService {
    user: User ;

    constructor(private http: Http, private httpUtil: HttpUtilService) { }

   /* getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }*/

    getById(id: number) {
       return this.http.get(this.httpUtil.url('/users/' + id), this.httpUtil.headers()).map(this.httpUtil.extrairDados);
        //console.log(this.http.get('https://evening-anchorage-49793.herokuapp.com/types'));
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