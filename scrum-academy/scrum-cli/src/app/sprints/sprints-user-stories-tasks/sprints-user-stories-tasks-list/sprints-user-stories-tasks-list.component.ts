import { Component, OnInit } from '@angular/core';
import { SprintService } from "app/services/sprint.service";
import { Project } from "app/dashboard/project/project";
import { UserStorieProject } from "app/user-stories/userstorieproject";
import { TeamsService } from "app/services/teams.service";
import { UserService } from "app/services/user.service";
import { User } from "app/models/user";

@Component({
  selector: 'sprints-user-stories-tasks-list',
  templateUrl: './sprints-user-stories-tasks-list.component.html',
  styleUrls: ['./sprints-user-stories-tasks-list.component.css']
})
export class SprintsUserStoriesTasksListComponent implements OnInit {


  done :boolean = false;
  teamId: number;
  public users: Array<User> = [];
  project : Project;
  sprintId:number;
  public userstories:Array<UserStorieProject> = []; //Get

  constructor(private sprintService :SprintService, 
              private teamsService:TeamsService, 
              private userService:UserService) { 
                  this.teamId = JSON.parse(localStorage.getItem('teamUser')).team;
  }

  ngOnInit() {
    this.project = JSON.parse(localStorage.getItem('projectOn'));
    this.sprintId = JSON.parse(localStorage.getItem('springOn')).id;
    this.teamsService.getById(this.teamId).subscribe(
      resultado =>{
        for(let user of resultado.team_users){
          this.userService.getById(user.user_id).subscribe(
            resultado =>{
              let userOn = resultado;
              delete userOn.team;
              userOn.type = userOn.type.id;
              let user : User = new User(userOn.id,userOn.name, userOn.email, userOn.type);
              this.users.push(user);
              this.done = true;
            }
          );
        }
      }, 
      error =>{
        console.log(error);
      }
    );
    this.sprintService.getById(this.project.id,this.sprintId).subscribe(
      resultado => {
        this.userstories = resultado.userstorie;
      },
      error =>{
        console.log(error);
      }
    );
  }

  getUsersTeam(){
    this.teamsService.getById(this.teamId).subscribe(
      resultado =>{
        for(let user of resultado.team_users){
          console.log("um uswer")
          this.userService.getById(user.user_id).subscribe(
            resultado =>{
              let userOn = resultado;
              delete userOn.team;
              userOn.type = userOn.type.id;
              this.users.push(userOn);
            }
          );
        }
      }, 
      error =>{
        console.log(error);
      }
    );
  }

}
