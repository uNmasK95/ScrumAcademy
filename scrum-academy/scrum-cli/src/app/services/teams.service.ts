import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class TeamsService {

  constructor(private http: Http, private httpUtil: HttpUtilService) { }

  get(){
    return this.http.get(this.httpUtil.url('/teams'), this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }
  getById(id : number){
    return this.http.get(this.httpUtil.url('/teams/'+id), this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }
}
