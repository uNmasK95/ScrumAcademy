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
  post(id: number,description: string,Iday: Date, Dday: Date){
      console.log('/project/'+id+'/sprints');
    return this.http.post(this.httpUtil.url('/projects/'+id+'/sprints'),
                JSON.stringify({description: description,startDate: Iday , endDate: Dday }),this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }
  update(id:number, description: string, sprintid: number){
    return this.http.put(this.httpUtil.url('/projects/'+id+'/sprints/'+sprintid),JSON.stringify({description: description }),this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }
  getById(id: number,sprintid: number){
    return this.http.get(this.httpUtil.url('/projects/'+id+'/sprints/'+sprintid),this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }

  deleteSprintUserStorie(id: number,sprintid: number, userstories: number){
    return this.http.delete(this.httpUtil.url('/projects/'+id+'/sprints/'+sprintid+'/userstories/'+userstories),this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }

  postSprintUserStorie(id: number, sprintid:number, userstoriesid: number,deferred: number){
    return this.http.post(this.httpUtil.url('/projects/'+id+'/sprints/'+sprintid+'/userstories'),
                JSON.stringify({userstorie_id: userstoriesid, deferred: deferred}),this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }
}