import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { RequestsService } from "app/services/requests.service";
import { Request } from "./request";
import { TeamsService } from "app/services/teams.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  emptyRequests: boolean;// = true; //Inicio não tem request
  requests: Request[] = [];
  teams: Request [] = [];
  emptyTeams: boolean;
  adicionanovoprojcet: boolean = false;
  constructor(
    private requestsService: RequestsService, private teamsService: TeamsService
  ) { }

  ngOnInit() {
    let userId = JSON.parse(localStorage.getItem('userOn')).id;
    if(this.getType()==1){
      this.requestsService.getByUser(localStorage['id'],false)
        .subscribe(
          resultado => {
            for(let r of resultado){
              console.log(r.team.description+"--"+r.statement.name);
              let req : Request = new Request(r.id, r.team.id, r.team.description, r.statement.id, r.statement.name);
              this.requests.push(req);
            }
            if(this.requests.length!=0) this.emptyRequests=false;
            else this.emptyRequests=true;
          }
        );
    }
    else{
      this.teamsService.get().subscribe(
        resultado =>{
          for(let teamUser of resultado){
            for(let user of teamUser.team_users){
              if(user.user_id == userId && user.function_id == 1){
                let team : Request = new Request(-1,teamUser.id,teamUser.description,-1,"");
                this.teams.push(team);
              }
            }
          }
          if(this.teams.length==0){
            this.emptyTeams=true;
          }
          else this.emptyTeams=false;
          console.log(this.teams);
        }
      );
    }
  }

  getType(){
    if(localStorage.getItem('userOn')){
      let p =JSON.parse(localStorage.getItem('userOn')).type
      if(p==1 || p==2){
       // console.log(localStorage.getItem('userOn'));
        return p;
      }
    }
    return false;
  }

  elimina(decision){
    let request = this.requests.find(x => x.id == decision);
    let i = this.requests.indexOf(request);
    this.requests.splice(i,1);
  }


}