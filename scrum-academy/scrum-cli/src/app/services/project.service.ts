import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '.././profile/user';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
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


}