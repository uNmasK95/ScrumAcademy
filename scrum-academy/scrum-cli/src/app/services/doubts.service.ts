import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class DoubtsService {

  constructor(private http: Http, private httpUtil: HttpUtilService) { }

 get(taskId: number){
    console.log("Get duvidas:"+taskId);
    let headersParams = { 'Content-Type': 'application/json' };
        if (localStorage['currentUser']) {
            headersParams['Authorization'] = localStorage['currentUser'];
        }
        var search1 = new URLSearchParams();
        search1.set('task', ''+taskId);
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers, search:search1});
        console.log(options);
        return this.http.get(this.httpUtil.url('/doubts?task='+taskId),options )
                   .map(this.httpUtil.extrairDados);
  }
  

  create(description: string, userId: number,taskId: number){
    console.log("Create comments");
    return this.http.post(this.httpUtil.url('/doubts'),
            JSON.stringify({ description: description, answer: null , task_id: taskId, user_id: userId}),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

  update(description: string, answer: string, userId: number,taskId: number, doubtId: number){
    console.log("update comments");
    return this.http.post(this.httpUtil.url('/doubts/'+doubtId),
            JSON.stringify({ description: description, answer: answer , task_id: taskId, user_id: userId}),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

  remove(doubtId: number){
    console.log("Remove comment");
    return this.http.delete(this.httpUtil.url('/doubts/'+doubtId),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

}
