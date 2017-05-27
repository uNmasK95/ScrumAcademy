import { Component, OnInit, Input } from '@angular/core';
import { Sprint } from "app/sprints/sprint";
import { SprintService } from "app/services/sprint.service";
import { Project } from "app/dashboard/project/project";
import { TeamsService } from "app/services/teams.service";
import { UserService } from "app/services/user.service";
import { User } from "app/models/user";

@Component({
  selector: 'sprints-user-stories-tasks',
  templateUrl: './sprints-user-stories-tasks.component.html',
  styleUrls: ['./sprints-user-stories-tasks.component.css']
})
export class SprintsUserStoriesTasksComponent implements OnInit {

  project : Project;
  sprint : Sprint;
  descriptiontext = false;
  model: any = {};

  constructor(private sprintService: SprintService) { }

  ngOnInit() {
    this.project = JSON.parse(localStorage.getItem('projectOn'));
    this.sprint = JSON.parse(localStorage.getItem('springOn'));
  }

  sprintDescription(){
    this.model.descriptionS = this.sprint.description; 
    this.descriptiontext = true;
  }

  sprintDescriptionSave(){
    this.sprintService.update(this.project.id,this.model.descriptionS, this.sprint.id).subscribe(
      resultado =>{
        console.log(resultado);
        this.sprint.description = this.model.descriptionS;
      },
      error =>{
        console.log(error);
      }
    );
    this.descriptiontext = false;
    
  }



}
