import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '.././profile/user';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { URLSearchParams, Http, Headers, Response, RequestOptions } from '@angular/http';
import { Project } from "app/dashboard/project/project";

@Injectable()
export class ProjectService {

    constructor(private router: Router, private http: Http, private httpUtil: HttpUtilService){
	}

    create(id : number, projecto: Project) {
       return this.http.post(this.httpUtil.url('/statements'),JSON.stringify({ name: projecto.name,description: projecto.description
                  , startDate: projecto.initialD, endDate:projecto.endD, user: id}) , this.httpUtil.headers())
                  .map(this.httpUtil.extrairDados);
    }

    getStatements(){
        return this.http.get(this.httpUtil.url('/statements'),this.httpUtil.headers())
                   .map(this.httpUtil.extrairDados);
    }
    getProjects(){
         return this.http.get(this.httpUtil.url('/projects'),this.httpUtil.headers())
                   .map(this.httpUtil.extrairDados);
    }
    getProjectsById(id: number){
         return this.http.get(this.httpUtil.url('/projects/'+id),this.httpUtil.headers())
                   .map(this.httpUtil.extrairDados);
    }

    getProjectsByUserId(id : string){
         let headersParams = { 'Content-Type': 'application/json' };
        if (localStorage['currentUser']) {
            headersParams['Authorization'] = localStorage['currentUser'];
        }
        var search = new URLSearchParams()
        search.set('user', id);
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers, search:search});
        return this.http.get(this.httpUtil.url('/projects'),options)
           .map(this.httpUtil.extrairDados);
    }
    
    getStatementsById(id : string){
        let headersParams = { 'Content-Type': 'application/json' };
        if (localStorage['currentUser']) {
            headersParams['Authorization'] = localStorage['currentUser'];
        }
        var search = new URLSearchParams();
        search.set('user', id);
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers, search:search});
        return this.http.get(this.httpUtil.url('/statements'),options )
                   .map(this.httpUtil.extrairDados);
    }

    //buscar os statments que ainda nao iniciaram
    getStatementsPossible(){
        let headersParams = { 'Content-Type': 'application/json' };
        if (localStorage['currentUser']) {
            headersParams['Authorization'] = localStorage['currentUser'];
        }
        let date: Date = new Date();
        var search = new URLSearchParams();
        search.set('data', ''+date);
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers, search:search});
        return this.http.get(this.httpUtil.url('/statements'),options )
                   .map(this.httpUtil.extrairDados);
    }


}