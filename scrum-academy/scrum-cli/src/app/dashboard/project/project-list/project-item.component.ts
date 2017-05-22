import { Component, Input } from '@angular/core';
import { Project } from '../project';
import { Router } from "@angular/router";
import { UserTeam } from "app/models/userteam";


@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project: Project;
  @Input() projectId: number;
  @Input() teamFunction: UserTeam;

  constructor(private router: Router){
	}

  selectRoute(){
    //ver consoante id utilizador ver que tipo é neste projeto

    if(localStorage.getItem('userOn')){
      let type = JSON.parse(localStorage.getItem('userOn')).type
      console.log("sou o type :  "+type);
      if(type==1){
        this.router.navigate(['projects',this.projectId, 'userstories']);
      }else if(type==2){
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
