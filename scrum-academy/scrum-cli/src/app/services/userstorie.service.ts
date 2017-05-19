import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { UserStorie } from "app/user-stories/userstorie";

@Injectable()
export class UserStorieService {

  constructor(private http: Http, private httpUtil: HttpUtilService) { }

  // create UserStory
   createFeatures(id : number, userstorie: UserStorie) {
       return this.http.post(this.httpUtil.url('/statements/'+id+'/features/'),JSON.stringify({
                  description: userstorie.description, priority : userstorie.priority}), this.httpUtil.headers())
                  .map(this.httpUtil.extrairDados);
    }
}
