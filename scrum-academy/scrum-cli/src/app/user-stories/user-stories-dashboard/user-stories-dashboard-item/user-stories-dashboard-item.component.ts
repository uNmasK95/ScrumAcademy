import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from "ng2-dragula";
import { Task } from "app/models/task";

@Component({
  selector: 'user-stories-dashboard-item',
  templateUrl: './user-stories-dashboard-item.component.html',
  styleUrls: ['./user-stories-dashboard-item.component.css', '../../../../assets/css/dragula.min.css', '../../../../assets/css/example.css']
})
export class UserStoriesDashboardItemComponent {

   //@Input() userstorie: UserStorie;
  @Input() userstorie: string;

  public tasksToAss: Task[] = [new Task(1,"TaskToAss1",0),new Task(2,"TaskToAss2",0)]; //Get com UID, PROjID, SprinID, USId
  public tasksInProgress: Task[] = [new Task(3,"TaskIn3",1),new Task(4,"TaskIn4",1)];
  public tasksDone: Task[] = [new Task(5,"TaskD5",2),new Task(6,"TaskD5",2)];

  public constructor(private dragulaService:DragulaService) {
    dragulaService.dropModel.subscribe((value:any) => {
      console.log("TOU DO DROP:");
      console.log(value);
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

  concate(){
    return "third-bag";
  }

}
