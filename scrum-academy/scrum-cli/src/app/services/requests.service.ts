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
      console.log("Vou criar request");
      return this.http.post(this.httpUtil.url('/requests'),
                  JSON.stringify({ team_id: teamId, statement_id: statementID, accept: accept}) , this.httpUtil.headers())
                .map(this.httpUtil.extrairDados);
  }
}
