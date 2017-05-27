import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Sprint } from "app/sprints/sprint";
import { SprintService } from "app/services/sprint.service";
import { Project } from "app/dashboard/project/project";
import { TasksService } from "app/services/tasks.service";

@Component({
  selector: 'sprints-list',
  templateUrl: './sprints-list.component.html',
  styleUrls: ['./sprints-list.component.css']
})
export class SprintsListComponent implements OnInit {
/*
  s1: Sprint = new Sprint(1,"Sprint1",new Date(), new Date());
  s2: Sprint = new Sprint(2,"Sprint2",new Date(), new Date());
  s3: Sprint = new Sprint(3,"Sprint3",new Date(), new Date());*/
  sprints: Sprint[] //=  [this.s1,this.s2,this.s3];
  project : Project;

  constructor(private router: Router, private sprintService: SprintService,
              private tasksService: TasksService) { }

  ngOnInit() {
    this.project = JSON.parse(localStorage.getItem('projectOn'));
    this.getSprints();
  }


  getSprints(){
    this.sprintService.get(this.project.id).subscribe(
      resultado =>{
        let timenow = new Date();
        let previousprint;
        let allsprints : Sprint[] = resultado;
        let i = 0;
        console.log(resultado);
        for(let sprint of resultado){
          console.log(sprint);
          let timeEnd = new Date(sprint.endDate);
          //console.log(i);
          if( timeEnd.getTime() > timenow.getTime()){
            //console.log(previousprint)
            //console.log(sprint)
                //se tem sprint antes desta ver se esta tudo direito;
            if(i!=0){
              //ver userStorys de sprint e ver as tasks se estao todas com o estado acabado se sim nao faz nada 
              // se nao estiverem fazer um postSprintUserStorie com a sprint em que estamos
              for(let userStorie of previousprint){
                //console.log("userstorie");
                //console.log(userStorie);
                this.tasksService.getByUserStory(this.project.id,userStorie.id).subscribe(
                  resultado =>{
                    for(let task of resultado){
                      if(task.state != 2){
                        //colocar a US na proxima sprint
                        this.sprintService.postSprintUserStorie(this.project.id,sprint.id,userStorie.id,0).subscribe(
                        );
                        break;
                      }
                    }
                  }
                );
              }
            }
            this.sprints=allsprints;
            break;
          } 
          else{
            if(timeEnd.getDay()==timenow.getDay() && timeEnd.getMonth() == timenow.getMonth() && timeEnd.getFullYear() == timenow.getFullYear()){
              if(i!=0){
                //ver userStorys de sprint e ver as tasks se estao todas com o estado acabado se sim nao faz nada 
                // se nao estiverem fazer um postSprintUserStorie com a sprint em que estamos
                for(let userStorie of previousprint){
                  //console.log("userstorie");
                  //console.log(userStorie);
                  this.tasksService.getByUserStory(this.project.id,userStorie.id).subscribe(
                    resultado =>{
                      for(let task of resultado){
                        if(task.state != 2){
                          //colocar a US na proxima sprint
                          this.sprintService.postSprintUserStorie(this.project.id,sprint.id,userStorie.id,0).subscribe(
                          );
                          break;
                        }
                      }
                    }
                  );
                }
              }
              this.sprints=allsprints;
              break;
            }
            previousprint = sprint;
            allsprints.splice(sprint,1);
          }
          i++;
        }
        console.log(this.sprints);
      },
      error =>{
        console.log(error);
      } 
    );
  }

}
