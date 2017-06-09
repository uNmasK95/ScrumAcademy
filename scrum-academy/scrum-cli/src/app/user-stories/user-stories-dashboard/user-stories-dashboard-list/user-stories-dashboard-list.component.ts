import { Component, OnInit, Input } from '@angular/core';
import { UserStorieUser } from "app/models/userStorieUser";
import { SprintService } from "app/services/sprint.service";
import { Sprint } from "app/sprints/sprint";
import { TasksService } from "app/services/tasks.service";

@Component({
  selector: 'user-stories-dashboard-list',
  templateUrl: './user-stories-dashboard-list.component.html',
  styleUrls: ['./user-stories-dashboard-list.component.css']
})
export class UserStoriesDashboardListComponent implements OnInit {

  @Input() projectId: number;
  
  public userstories: UserStorieUser[] = []; 
  public sprintNow: Sprint = new Sprint(0,"",new Date(),new Date());
  public empty: boolean = false;
  constructor(private sprintService: SprintService,private tasksService: TasksService) { }

  ngOnInit() {
      let dateNow: Date = new Date();
      console.log(dateNow);
      this.sprintService.get(this.projectId)
        .subscribe(
          resultado => {
            for(let sprint of resultado){ //Percorrer sprints
              if(dateNow > new Date(sprint.startDate) && dateNow < new Date(sprint.endDate)){ //Tou nesta sprint
                this.sprintNow = new Sprint(sprint.id, sprint.description,new Date(sprint.startDate),new Date(sprint.endDate));
                for(let ustorie of sprint.userstorie){ //Guardar as US da sprint atual
                  let userStorie: UserStorieUser = new UserStorieUser(ustorie.id,ustorie.description,
                    ustorie.priority,ustorie.score);
                  this.userstories.push(userStorie);
                  console.log("Fiz push da userStorie:");
                  console.log(userStorie);
                }
              }
            }
            if(this.userstories.length!=0)this.empty=false;
            else this.empty = true;
          });
    }
  /*ngOnInit() {
    let dateNow: Date = new Date();
    console.log(dateNow);
    this.sprintService.get(this.projectId)
      .subscribe(
        resultado => {
          let timenow = new Date();
          let previousprint;
          let allsprints : Sprint[] = resultado;
          let i = 0;
          for(let sprint of resultado){ //Percorrer sprints
            let timeEnd = new Date(sprint.endDate);
            if( timeEnd.getTime() > timenow.getTime()){
              if(i!=0){
                this.sprintNow = new Sprint(sprint.id, sprint.description,new Date(sprint.startDate),new Date(sprint.endDate));
                
                for(let ustorie of previousprint.userstorie){ //Guardar as US da sprint atual
                  this.tasksService.getByUserStory(this.projectId,ustorie.id).subscribe(
                    resultado =>{
                      for(let task of resultado){
                        if(task.state != 2){
                          let userStorie: UserStorieUser = new UserStorieUser(ustorie.id,ustorie.description,ustorie.priority,ustorie.score);
                          this.userstories.push(userStorie);
                          //colocar a US na proxima sprint
                          this.sprintService.postSprintUserStorie(this.projectId,sprint.id,userStorie.id,0).subscribe(
                          );
                          break;
                        }
                      }
                    }
                  );
                }
                for(let ustorie of sprint.userstorie){
                  let userStorie: UserStorieUser = new UserStorieUser(ustorie.id,ustorie.description,ustorie.priority,ustorie.score);
                  this.userstories.push(userStorie);
                  console.log("Fiz push da userStorie:");
                }
              }
              break;
            }
            else{
              if(timeEnd.getDay()==timenow.getDay() && timeEnd.getMonth() == timenow.getMonth() && timeEnd.getFullYear() == timenow.getFullYear()){
                if(i!=0){
                  this.sprintNow = new Sprint(sprint.id, sprint.description,new Date(sprint.startDate),new Date(sprint.endDate));
                  for(let ustorie of previousprint.userstorie){ //Guardar as US da sprint atual
                    this.tasksService.getByUserStory(this.projectId,ustorie.id).subscribe(
                      resultado =>{
                        for(let task of resultado){
                          if(task.state != 2){
                            let userStorie: UserStorieUser = new UserStorieUser(ustorie.id,ustorie.description,ustorie.priority,ustorie.score);
                            this.userstories.push(userStorie);
                            //colocar a US na proxima sprint
                            this.sprintService.postSprintUserStorie(this.projectId,sprint.id,userStorie.id,0).subscribe(
                            );
                            break;
                          }
                        }
                      }
                    );
                  }
                  for(let ustorie of sprint){
                    let userStorie: UserStorieUser = new UserStorieUser(ustorie.id,ustorie.description,ustorie.priority,ustorie.score);
                    this.userstories.push(userStorie);
                    console.log("Fiz push da userStorie:");
                  }
                }
                else{
                  console.log(sprint)
                  for(let ustorie of sprint.userstorie){
                    let userStorie: UserStorieUser = new UserStorieUser(ustorie.id,ustorie.description,ustorie.priority,ustorie.score);
                    this.userstories.push(userStorie);
                    console.log("Fiz push da userStorie:");
                  }
                }
                break;
              }
              previousprint = sprint;
            }
            i++;
          }
          if(this.userstories.length!=0)this.empty=false;
          else this.empty = true;
        });
  }*/

}
