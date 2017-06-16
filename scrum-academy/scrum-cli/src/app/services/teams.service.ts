import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class TeamsService {

  constructor(private http: Http, private httpUtil: HttpUtilService) { }

  get() {
    return this.http.get(this.httpUtil.url('/teams'), this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }
  
  getById(id : number){
    return this.http.get(this.httpUtil.url('/teams/'+id), this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }

  post(desciption: string) { //Create team
    return this.http.post(this.httpUtil.url('/teams'), JSON.stringify({description: desciption}),
                this.httpUtil.headers())
               .map(this.httpUtil.extrairDados);
  }

  postTeamUsers(teamid: number, id: number, func: number) { //Create team_users
    return this.http.post(this.httpUtil.url('/teams/'+teamid+'/users'), 
      JSON.stringify({user: id, function: func}),
      this.httpUtil.headers())
    .map(this.httpUtil.extrairDados);
  }

  //remove team
  remove(teamId: number) {
    return this.http.delete(this.httpUtil.url('/teams/'+teamId), this.httpUtil.headers())
              .map(this.httpUtil.extrairDados);
  }
}
