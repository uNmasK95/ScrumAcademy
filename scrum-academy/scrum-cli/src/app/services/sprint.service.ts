import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class SprintService {

  constructor(private http: Http, private httpUtil: HttpUtilService) { }


  get(id: number){
    return this.http.get(this.httpUtil.url('/projects/'+id+'/sprints'),this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }
  post(id: number,Iday: Date, Dday: Date){
      console.log('/project/'+id+'/sprints');
    return this.http.post(this.httpUtil.url('/projects/'+id+'/sprints'),
                JSON.stringify({description: 'sprint',startDate: Iday , endDate: Dday }),this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }
}