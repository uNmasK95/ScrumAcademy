import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { URLSearchParams,Http, Headers, Response, RequestOptions } from '@angular/http';
import { Task } from "app/models/task";

@Injectable()
export class TasksService {

  constructor(private http: Http, private httpUtil: HttpUtilService) { }

  //Get all task
  get(projectId: number, userStorieId: number) {
    return this.http.get(this.httpUtil.url('/projects/'+projectId+'/userstories/'+userStorieId+'/tasks/'),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

  //Get by User
  getByUser(projectId: number, userStorieId: number, userId: number){
    let headersParams = { 'Content-Type': 'application/json' };
    if (localStorage['currentUser']) {
        headersParams['Authorization'] = localStorage['currentUser'];
    }
    var search = new URLSearchParams();
    search.set('user', ''+userId);
    let headers = new Headers(headersParams);
    let options = new RequestOptions({ headers: headers, search:search});
    return this.http.get(this.httpUtil.url('/projects/'+projectId+'/userstories/'+userStorieId+'/tasks'),options )
                .map(this.httpUtil.extrairDados);
  }

  //update task
  update(projectId: number, userStorieId: number, task: Task) {
    return this.http.put(this.httpUtil.url('/projects/'+projectId+'/userstories/'+userStorieId+'/tasks/'+task.id),
            JSON.stringify({description: task.description, user_id: task.userId, state: task.state}),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

  create(projectId: number, userStorieId: number, description: string, user:number){
    return this.http.post(this.httpUtil.url('/projects/'+projectId+'/userstories/'+userStorieId+'/tasks'),
               JSON.stringify({description: description, user_id:user}), this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }

  getByUserStory(projectId: number, userStorieId: number){
    return this.http.get(this.httpUtil.url('/projects/'+projectId+'/userstories/'+userStorieId+'/tasks'),this.httpUtil.headers())
                .map(this.httpUtil.extrairDados);
  }

  delete(projectId: number, userStorieId: number, taskid: number) {
    return this.http.delete(this.httpUtil.url('/projects/'+projectId+'/userstories/'+userStorieId+'/tasks/'+taskid),this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }

}