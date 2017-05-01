import { Component, OnInit } from '@angular/core';
import { Team } from './team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  t1: Team = new Team("Team1","Project2");
  t2: Team = new Team("Team2","Project6");
  t3: Team = new Team("Team3","Project");
  t4: Team = new Team("Team4","Project2");
  t5: Team = new Team("Team5","Project2");
  t6: Team = new Team("Team6","Project09876");
  teams: Team[] =  [this.t1,this.t2,this.t3,this.t4,this.t5,this.t6];
  constructor() { }

  ngOnInit() {
  }

}
