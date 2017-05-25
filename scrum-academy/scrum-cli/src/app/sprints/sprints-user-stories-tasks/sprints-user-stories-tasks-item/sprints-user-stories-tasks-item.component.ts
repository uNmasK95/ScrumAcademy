import { Component, OnInit, Input } from '@angular/core';
import { UserStorie } from "app/user-stories/userstorie";
import { User } from "app/profile/user";
import { UserStorieProject } from "app/user-stories/userstorieproject";

@Component({
  selector: 'sprints-user-stories-tasks-item',
  templateUrl: './sprints-user-stories-tasks-item.component.html',
  styleUrls: ['./sprints-user-stories-tasks-item.component.css', '../../../../assets/css/dragula.min.css', '../../../../assets/css/example.css']
})
export class SprintsUserStoriesTasksItemComponent {

  //@Input() userstorie: UserStorie;
  @Input() userstorie: UserStorieProject;

  addD: boolean = false;
  addT: boolean = false;

  u1: User = new User('Zeca','motarafa@hotmail.com');
  u2: User = new User('Tira Cafes','motarafa@hotmail.com');
  u3: User = new User('Manel','motarafa@hotmail.com');
  users: User[] = [this.u1, this.u2, this.u3];

  public tasks:Array<string> = ["task1","task2"]; //Get com UID, PROjID, SprinID, USId
  tasksatrib:Array<string>; //para apagar

  taskSelected: string;

  modelNewTask: any = {};

  public constructor() {

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
    console.log(this.modelNewTask.newUser);
  }

  //Submit Task
  addTask(){ //Aqui fazer um new Task etc 
    this.tasks.push(this.modelNewTask.newtask);
  }

  hasUserAss(t){
    /*if(){ //Se task tem user associado retorna true

    }*/
    
    return true;
  }
}
