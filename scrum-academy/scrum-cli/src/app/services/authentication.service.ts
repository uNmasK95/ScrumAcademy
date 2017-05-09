import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { HttpUtilService } from "./http-util.service";
import { User } from ".././models/user";

@Injectable()
export class AuthenticationService {
    urlPrefix
    //token
    constructor(private http: Http, private httpUtil: HttpUtilService ) { 
        this.urlPrefix = 'http://localhost:3000';
        //this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0OTQxNzkwMjN9.AaQfQVuOF7mixz7y_6nKx2rfiEErzGewbY5okW01zmY";
    }
    
    getFiles(): Observable<User[]> {
      console.log("Entrei getF do service");
   
        return this.http.get(this.urlPrefix + '/users/1', this.httpUtil.headers())
                .map(this.httpUtil.extrairDados);
    }
    login(email1: string, password1: string) {
        //let headers = new Headers({ 'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0OTQxNzQzNDl9.biGabBSg5n1ISvhLdraaIdZFQThBZKwP4rhA7WfGPhw'});
        //console.log(headers);
        //let p =this.http.get(this.urlPrefix + '/users/1', JSON.stringify({ Authorization : new RequestOptions({ headers: headers })})).map((response: Response) => response.json());
        //let p = this.http.get('/users/1').map((response: Response) => response.json());
        //console.log(JSON.stringify(p));
        //console.log(p);http.header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, If-Modified-Since, Cache-Control, Pragma");
        //let p = this.getFiles();

           /* let headers = new Headers({ 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE0OTQxNzQzNDl9.biGabBSg5n1ISvhLdraaIdZFQThBZKwP4rhA7WfGPhw' });
            console.log(new RequestOptions({ headers: headers }));
            console.log(headers);
            let options =  new RequestOptions({ headers: headers });
        let t = this.http.get(this.urlPrefix + 'users',options);
        console.log("antes do map");
        console.log(t.map((response: Response) => { 
                console.log("Tou no extrair dados, ver o que é o responde:");
                console.log(response);
                let data = response.json();
                console.log(data);}
            )
        );*/
        let method = 'GET';
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        let requestOptions: RequestOptions = new RequestOptions({headers: headers,method: method});
        let url = '/login'
        let p = this.http.request(this.urlPrefix + '/types', requestOptions)
        console.log(p);
        p.map((response: Response) => {
                console.log("estou aqui");
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user && user.auth_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
        console.log(p);


        console.log("depos do map");
        /*
        let xhrReq = new XMLHttpRequest();
        xhrReq.open('GET', this.urlPrefix + '/types');
        xhrReq.send();
        console.log(xhrReq);
        let t = this.http.get(this.urlPrefix + '/types', this.httpUtil.headers());

        /*         .map((response: Response) => {
                console.log("estou aqui");
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user && user.auth_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });*/
       // console.log(t);
        let user1 =  new User1();
        user1.email="12";
        user1.password="12";
        //console.log(t.map(this.httpUtil.extrairDados));
        return this.http.post(this.urlPrefix + '/auth/login',this.httpUtil.headers(),JSON.stringify({ email: email1, password: password1 }))
            .map((response: Response) => {
                console.log("estou aqui");
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user && user.auth_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
export class User1 {
    email: string;
    password: string;
}