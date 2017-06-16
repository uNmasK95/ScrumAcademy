import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { URLSearchParams,Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class DoubtsService {

  constructor(private http: Http, private httpUtil: HttpUtilService) { }

 get(taskId: number){
    let headersParams = { 'Content-Type': 'application/json' };
        if (localStorage['currentUser']) {
            headersParams['Authorization'] = localStorage['currentUser'];
        }
        var search = new URLSearchParams();
        search.set('task', ''+taskId);
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers, search:search});
        return this.http.get(this.httpUtil.url('/doubts?task='+taskId),options )
                   .map(this.httpUtil.extrairDados);
  }
   getByUser(userId: number){
    let headersParams = { 'Content-Type': 'application/json' };
    if (localStorage['currentUser']) {
        headersParams['Authorization'] = localStorage['currentUser'];
    }
    var search = new URLSearchParams();
    search.set('user', ''+userId);
    let headers = new Headers(headersParams);
    let options = new RequestOptions({ headers: headers, search:search});
    return this.http.get(this.httpUtil.url('/doubts'),options )
                .map(this.httpUtil.extrairDados);
  }

  create(description: string, userId: number,taskId: number){
    return this.http.post(this.httpUtil.url('/doubts'),
            JSON.stringify({ description: description, answer: null , task_id: taskId, user_id: userId}),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

  update(description: string, answer: string, userId: number,taskId: number, doubtId: number){
    return this.http.post(this.httpUtil.url('/doubts/'+doubtId),
            JSON.stringify({ description: description, answer: answer , task_id: taskId, user_id: userId}),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

  updateAnswer(doubtId: number ,answer: string){
    return this.http.put(this.httpUtil.url('/doubts/'+doubtId),JSON.stringify({answer: answer}),this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }

  remove(doubtId: number){
    return this.http.delete(this.httpUtil.url('/doubts/'+doubtId),
            this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }

}
