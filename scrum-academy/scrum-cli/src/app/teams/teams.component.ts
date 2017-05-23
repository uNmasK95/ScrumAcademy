import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { RequestsService } from "app/services/requests.service";
import { Request } from "./request";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  requests: Request[] = [];
  
  constructor(
    private requestsService: RequestsService
  ) { }

  ngOnInit() {
    console.log("vou buscar requests");
    this.requestsService.getByUser(localStorage['id'],false)
      .subscribe(
        resultado => {
          for(let r of resultado){
            console.log(r.team.description+"--"+r.statement.name);
            let req : Request = new Request(r.id, r.team.description, r.statement.name);
            this.requests.push(req);
          }
        }
      );
  }

}
