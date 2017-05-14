import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { UserStorie } from "app/user-stories/userstorie";
import { User } from "app/profile/user";

@Component({
  selector: 'sprints-user-stories-tasks-item',
  templateUrl: './sprints-user-stories-tasks-item.component.html',
  styleUrls: ['./sprints-user-stories-tasks-item.component.css', '../../../../assets/css/dragula.min.css', '../../../../assets/css/example.css']
})
export class SprintsUserStoriesTasksItemComponent {

  //@Input() userstorie: UserStorie;
  @Input() userstorie: string;
  @Input() userstorieId: number;

  addD: boolean = false;
  addT: boolean = false;

  u1: User = new User('Zeca','motarafa@hotmail.com');
  u2: User = new User('Tira Cafes','motarafa@hotmail.com');
  u3: User = new User('Manel','motarafa@hotmail.com');
  users: User[] = [this.u1, this.u2, this.u3];

  public tasks:Array<string> = ["task1","task2"]; //Get com UID, PROjID, SprinID, USId

  taskSelected: string;

  modelNewTask: any = {};

  public constructor(private dragulaService:DragulaService) {
    dragulaService.dropModel.subscribe((value:any) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value:any) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  private onDropModel(args:any):void {
    let [el, target, source] = args;
    console.log('onDropModel:');
    console.log(el);
    console.log(target);
    console.log(source);
  }

  private onRemoveModel(args:any):void {
    let [el, source] = args;
    console.log('onRemoveModel:');
    console.log(el);
    console.log(source);
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

  addU(){
    //this.tasks.push("Task NEw");
  }

  addTask(){ //Aqui fazer um new Task etc 
    this.tasks.push(this.modelNewTask.newtask);
  }

  hasUserAss(t){
    /*if(){ //Se task tem user associado retorna true

    }*/
    
    return true;
  }
}
