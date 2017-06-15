import { Component, OnInit } from '@angular/core';
import { SprintService } from "app/services/sprint.service";
import { Subscription } from "rxjs/Rx";
import { ActivatedRoute } from "@angular/router";
import { Sprint } from "app/sprints/sprint";
import { TasksService } from "app/services/tasks.service";

@Component({
  selector: 'user-stories-dashboard',
  templateUrl: './user-stories-dashboard.component.html',
  styleUrls: ['./user-stories-dashboard.component.css']
})
export class UserStoriesDashboardComponent implements OnInit {

  private subscription: Subscription;
  public projectId: number = 0;

  private sprints: Sprint[] = [];


  constructor(
    private sprintService : SprintService,
    private route: ActivatedRoute,
    private tasksService: TasksService){ 

    }

  ngOnInit() {
    //Buscar id do Project
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.projectId = params['id'];
      });
    //Buscar sprint
    this.getSprints();
  }

  getSprints(){
    /*this.sprintService.get(this.projectId).subscribe(
      resultado =>{
        let timenow = new Date();
        let previousprint;
        let allsprints : Sprint[] = resultado;
        let i = 0;
        for(let sprint of resultado){
          let timeEnd = new Date(sprint.endDate);
          if( timeEnd.getTime() > timenow.getTime()){
            if(i!=0){
              for(let userStorie of previousprint){
                this.tasksService.getByUserStory(this.projectId,userStorie.id).subscribe(
                  resultado =>{
                    for(let task of resultado){
                      if(task.state != 2){
                        this.sprintService.postSprintUserStorie(this.projectId,sprint.id,userStorie.id,0).subscribe(
                        );
                        break;
                      }
                    }
                  }
                );
              }
            }
            this.sprints=allsprints; // Aqui fazes a tua alteração
            break;
          } 
          else{
            if(timeEnd.getDay()==timenow.getDay() && timeEnd.getMonth() == timenow.getMonth() && timeEnd.getFullYear() == timenow.getFullYear()){
              if(i!=0){
                for(let userStorie of previousprint){
                  this.tasksService.getByUserStory(this.projectId,userStorie.id).subscribe(
                    resultado =>{
                      for(let task of resultado){
                        if(task.state != 2){
                          this.sprintService.postSprintUserStorie(this.projectId,sprint.id,userStorie.id,0).subscribe(
                          );
                          break;
                        }
                      }
                    }
                  );
                }
              }
              this.sprints=allsprints;// Aqui fazes a tua alteração
              break;
            }
            previousprint = sprint;
            allsprints.splice(sprint,1);
          }
          i++;
        }
      },
      error =>{
        console.log(error);
      } 
    );*/
  }
}
