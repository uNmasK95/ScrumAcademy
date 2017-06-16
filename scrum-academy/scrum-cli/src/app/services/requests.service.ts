import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';
import { URLSearchParams, Http, Headers, Response, RequestOptions } from '@angular/http';


@Injectable()
export class RequestsService {

  constructor(private router: Router, private http: Http, private httpUtil: HttpUtilService) { }

  //create new request :team_id, :statement_id, :accept
  create(teamId : number, statementID: number, accept: boolean ) {
      return this.http.post(this.httpUtil.url('/requests'),
                  JSON.stringify({ team_id: teamId, statement_id: statementID, accept: accept}) , this.httpUtil.headers())
                      .map(this.httpUtil.extrairDados);
  }
  getByUser(idUser : number, validate: boolean){
        let headersParams = { 'Content-Type': 'application/json' };
        if (localStorage['currentUser']) {
            headersParams['Authorization'] = localStorage['currentUser'];
        }
        var search = new URLSearchParams();
        search.set('user', ''+idUser);
        search.set('accept', ''+validate)
        let headers = new Headers(headersParams);
        let options = new RequestOptions({ headers: headers, search:search});
        return this.http.get(this.httpUtil.url('/requests'),options )
                   .map(this.httpUtil.extrairDados);
    }   

    //Update state of request
    update(requestId: number, teamId : number, statementID: number, accept: boolean ) {
      return this.http.put(this.httpUtil.url('/requests/'+requestId),
                  JSON.stringify({ team_id: teamId, statement_id: statementID, accept: accept}) , this.httpUtil.headers())
                .map(this.httpUtil.extrairDados);
    }

    //remove request
    remove(requestId: number) {
      return this.http.delete(this.httpUtil.url('/requests/'+requestId), this.httpUtil.headers())
                .map(this.httpUtil.extrairDados);
    }

}
