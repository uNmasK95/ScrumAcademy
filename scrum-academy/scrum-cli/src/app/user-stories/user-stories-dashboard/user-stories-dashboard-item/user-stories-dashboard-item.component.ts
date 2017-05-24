import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DragulaService } from "ng2-dragula";
import { Task } from "app/models/task";
import { TasksService } from "app/services/tasks.service";
import { UserStorieUser } from "app/models/userStorieUser";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'user-stories-dashboard-item',
  templateUrl: './user-stories-dashboard-item.component.html',
  styleUrls: ['./user-stories-dashboard-item.component.css', '../../../../assets/css/dragula.min.css', '../../../../assets/css/example.css']
})
export class UserStoriesDashboardItemComponent implements OnInit {
    
  @Input() userstorie: UserStorieUser;

  private subscription: Subscription;
  private projectId: number = 0;
  public tasksToAss: Task[] = [new Task(1,"TaskToAss1",3,0),new Task(2,"TaskToAss2",3,0)]; //Get com UID, PROjID, SprinID, USId
  public tasksInProgress: Task[] = [new Task(3,"TaskIn3",3,1),new Task(4,"TaskIn4",3,1)];
  public tasksDone: Task[] = [new Task(5,"TaskD5",3,2),new Task(6,"TaskD6",3,2)];
  public allTasks: Task[] = this.tasksToAss.concat(this.tasksInProgress.concat(this.tasksDone));  //Todas tasks

  public constructor(
    private dragulaService:DragulaService, 
    private tasksService: TasksService,
    private route: ActivatedRoute) {
      dragulaService.dropModel.subscribe((value:any) => {
        console.log("TOU DO DROP:");
        console.log(value);
        this.onDropModel(value.slice(1));
      });
      dragulaService.removeModel.subscribe((value:any) => {
        this.onRemoveModel(value.slice(1));
      });
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.projectId = params['id'];
      });
  }

  private onDropModel(args:any):void {
    let [el, target, source] = args;
    console.log('onDropModel:');
    console.log(el);
    console.log(target);
    console.log(source);

    console.log("Teste Attr:"+target.getAttribute('bagnr'));
    console.log(target.id);

    var textNode = el.childNodes[0];
    var textInput = textNode.nodeValue;
    console.log(textNode);
    console.log(textInput);

    let newState = 0;
    this.changeState(textInput, newState);
  }

  private onRemoveModel(args:any):void {
    let [el, source] = args;
    console.log('onRemoveModel:');
    console.log(el);
    console.log(source);
  }

  concate(){
    return "third-bag";
  }

  changeState(taskName, newState){
    let taskToChangeAux = this.allTasks.find(x => x.description == taskName);
    let taskToChange = new Task(taskToChangeAux.id,taskToChangeAux.description,taskToChangeAux.userId,newState);
    console.log("TOU CHANGESTATE");
    console.log(taskToChange.id,taskToChange.description);
   /*this.tasksService.update(this.projectId,this.userstorie.id, taskToChange)
      .subscribe();*/


  }

}
