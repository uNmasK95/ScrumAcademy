import { Component, Input } from '@angular/core';
import { Project } from '../project';
import { Router } from "@angular/router";


@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project: Project;
  @Input() projectId: number;

  constructor(private router: Router){
	}

  selectRoute(){
    //ver consoante id utilizador ver que tipo é neste projeto
    let op = 1;
    if(op==1){//Prod Owner
      this.router.navigate(['projects',this.projectId, 'userstories']);
    }else if(op==2){ //SMaster
      this.router.navigate(['projects',this.projectId,'sprints']);
    }else{ //dev
      this.router.navigate(['projects',this.projectId]);
    }
  }
}
