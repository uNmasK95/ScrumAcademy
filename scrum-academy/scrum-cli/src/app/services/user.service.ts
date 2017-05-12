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

    getByEmail(email: string) {
        return this.http.get('/users', this.httpUtil.headers()).map(this.httpUtil.extrairDados);
    }

    informcacoesUser(mail: string){
        let data = this.getByEmail(mail).catch(this.httpUtil.processarErros);
      //  this.user.email = da.email;
       // this.user.id = da.id;
       // this.user.type = da.type.id;
       // this.user.name = da.name;
    }

    getType(): Observable<String[]>{
        return this.http.get(this.httpUtil.url('/types'))
               .map(this.httpUtil.extrairDados)
               .catch(this.httpUtil.processarErros);
    }

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