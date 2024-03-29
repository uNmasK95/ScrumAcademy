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
  ngOnInit(){
      // aqui é preciso ver o length primeiro e só depois aplicar isso
      this.project.description = this.project.description.substring(0,14) +"...";
  }

  selectRoute(){
    //ver consoante id utilizador ver que tipo é neste projeto
    if(localStorage.getItem('userOn')){
      let type = JSON.parse(localStorage.getItem('userOn')).type
      if(type==1){ //PO
        localStorage.setItem('projectOn',JSON.stringify(this.project));
        localStorage.setItem('projectId',''+this.projectId);
        this.router.navigate(['projects',this.projectId, 'userstories']);
      }else{ //SM ou Dev
          let funct = JSON.parse(localStorage.getItem('UserTeamProject'))[0].job;
          if(funct==1){ //Scrum Master neste projeto
            localStorage.setItem('projectOn',JSON.stringify(this.project));
            localStorage.setItem('teamUser',JSON.stringify(this.teamFunction));
            localStorage.setItem('projectId',''+this.projectId);
            this.router.navigate(['projects',this.projectId,'sprints']);
          }else if(funct==2){ //Developer neste projeto
            this.router.navigate(['projects',this.projectId]);
          }
      }
    }
  }
}
