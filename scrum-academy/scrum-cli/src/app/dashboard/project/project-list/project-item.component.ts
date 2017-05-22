import { Component, Input } from '@angular/core';
import { Project } from '../project';
import { Router } from "@angular/router";
import { UserTeam } from "app/models/userteam";
import { TeamsService } from "app/services/teams.service";


@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project: Project;
  @Input() projectId: number;
  @Input() teamFunction: UserTeam;

  constructor(private router: Router, private teamService: TeamsService){
	}

  selectRoute(){
    //ver consoante id utilizador ver que tipo é neste projeto

    if(localStorage.getItem('userOn')){
      let userOn = JSON.parse(localStorage.getItem('userOn'))
      console.log("sou o type :  "+userOn.type);
      if(userOn.type==1){
        localStorage.setItem('projectId',''+this.projectId);
        this.router.navigate(['projects',this.projectId, 'userstories']);
      }else if(userOn.type==2){
          localStorage.setItem('projectOn',JSON.stringify(this.project));
          localStorage.setItem('teamUser',JSON.stringify(this.teamFunction));
          localStorage.setItem('projectId',''+this.projectId);
          this.router.navigate(['projects',this.projectId,'sprints']);
        }
        else{
          this.router.navigate(['projects',this.projectId]);
        }
      }
  }
}
