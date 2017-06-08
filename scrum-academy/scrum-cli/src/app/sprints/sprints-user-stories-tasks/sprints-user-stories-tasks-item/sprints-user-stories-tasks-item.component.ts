import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { UserStorie } from "app/user-stories/userstorie";
import { UserStorieProject } from "app/user-stories/userstorieproject";
import { TasksService } from "app/services/tasks.service";
import { TeamsService } from "app/services/teams.service";
import { UserService } from "app/services/user.service";
import { User } from "app/models/user";
import { Task } from "app/models/task";
import { TaskUser } from "app/models/taskuser";

@Component({
  selector: 'sprints-user-stories-tasks-item',
  templateUrl: './sprints-user-stories-tasks-item.component.html',
  styleUrls: ['./sprints-user-stories-tasks-item.component.css', '../../../../assets/css/dragula.min.css', '../../../../assets/css/example.css']
})
export class SprintsUserStoriesTasksItemComponent {

  //@Input() userstorie: UserStorie;
  @Input() userstorie: UserStorieProject;
  @Input() users: Array<User>;

  addD: boolean = false;
  addT: boolean = false;

  public tasks:Array<TaskUser> = []; //Get com UID, PROjID, SprinID, USId
  //tasksatrib:Array<string>; //para apagar

  teamId: number;
  projectId: number;
  taskSelected: TaskUser;

  modelNewTask: any = {};

  public constructor(private tasksService: TasksService, private teamsService:TeamsService, private userService:UserService) {
    this.projectId = JSON.parse(localStorage.getItem('projectOn')).id;
    this.teamId = JSON.parse(localStorage.getItem('teamUser')).team;
  }

  ngOnInit(){
    this.getTasks();
  }
  
  getTasks(){
    this.tasksService.getByUserStory(this.projectId,this.userstorie.id).subscribe(
      resultado =>{
        for(let task of resultado){
          let novatask : TaskUser = new TaskUser(task.id, task.description,task.user.id,task.user.email,task.state);
          this.tasks.push(novatask);
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

  haveuser(t: Task){
    if(t.userId){
      return true;
    }
    return false;
  }

  addUser(t){
    this.taskSelected = t;
    this.addD = true;
    this.addT = false;
    return this.addD;
  }

  addtask(){
    this.addT = true;
    this.addD = false;
    return this.addT;
  }

  //Submit User
  addU(){
      if(this.taskSelected.userId!=+this.modelNewTask.newUser){
        let novouser = this.users.find(x => x.id == this.modelNewTask.newUser);
        let task: Task = new Task(this.taskSelected.id,this.taskSelected.description,this.modelNewTask.newUser,novouser.email, this.taskSelected.state);
        this.tasksService.update(this.projectId,this.userstorie.id,task).subscribe(
          resultado =>{
            console.log(resultado);
          },
          error =>{
            console.log(error);
          }
        );
        let taskantiga = this.tasks.find(x => x.id == this.taskSelected.id);
        let i = this.tasks.indexOf(taskantiga);
        taskantiga.userEmail = novouser.email;
        taskantiga.userId = novouser.id;
        let tasknova = taskantiga;
        this.tasks.splice(i,1,tasknova);
      }
     this.addD = false;
  }
  //Submit Task
  addTask(){ //Aqui fazer um new Task etc 
    //
    this.tasksService.create(this.projectId,this.userstorie.id,this.modelNewTask.newtask,this.modelNewTask.newTaskUser).subscribe(
      resultado =>{
        console.log("adicionei task");
      },
      error =>{
        console.log(error);
      }
    );
    this.tasks.push(this.modelNewTask.newtask);// AQUI MUDAR DEPOIS PARA TASK
    this.addT = false;
  }

  removeTask(t){
    this.tasksService.delete(this.projectId,this.userstorie.id,t.id).subscribe();
    this.tasks.splice(t,1);//remover
  }


  hasUserAss(t){
    /*if(){ //Se task tem user associado retorna true

    }*/
    
    return true;
  }
}
