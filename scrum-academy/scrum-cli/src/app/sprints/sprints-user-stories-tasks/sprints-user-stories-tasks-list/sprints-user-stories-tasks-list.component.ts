import { Component, OnInit } from '@angular/core';
import { SprintService } from "app/services/sprint.service";
import { Project } from "app/dashboard/project/project";
import { UserStorieProject } from "app/user-stories/userstorieproject";

@Component({
  selector: 'sprints-user-stories-tasks-list',
  templateUrl: './sprints-user-stories-tasks-list.component.html',
  styleUrls: ['./sprints-user-stories-tasks-list.component.css']
})
export class SprintsUserStoriesTasksListComponent implements OnInit {

  project : Project;
  sprintId:number;
  public userstories:Array<UserStorieProject> = []; //Get

  constructor(private sprintService :SprintService) { 
  }

  ngOnInit() {
    this.project = JSON.parse(localStorage.getItem('projectOn'));
    this.sprintId = JSON.parse(localStorage.getItem('springOn')).id;
    this.sprintService.getById(this.project.id,this.sprintId).subscribe(
      resultado => {
        this.userstories = resultado.userstorie;
        console.log(this.userstories);
      },
      error =>{
        console.log(error);
      }
    );
     
  }

}
