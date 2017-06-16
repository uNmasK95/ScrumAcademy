import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class CommentsService {

  constructor(private http: Http, private httpUtil: HttpUtilService) { }

  get(projectId: number, userStorieId: number, taskId: number){
    return this.http.get(this.httpUtil.url('/projects/'+projectId+'/userstories/'
      +userStorieId+'/tasks/'+taskId+'/comments'),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

  create(projectId: number, userStorieId: number, description: string, userId: number,taskId: number){
    return this.http.post(this.httpUtil.url('/projects/'+projectId+'/userstories/'
            +userStorieId+'/tasks/'+taskId+'/comments'),
            JSON.stringify({ description: description, user_id: userId}),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

  remove(projectId: number, userStorieId: number, taskId: number, commentId: number){
    return this.http.delete(this.httpUtil.url('/projects/'+projectId+'/userstories/'
      +userStorieId+'/tasks/'+taskId+'/comments/'+commentId),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

}
