import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { UserStorie } from "app/user-stories/userstorie";

@Component({
  selector: 'sprints-user-stories-tasks-item',
  templateUrl: './sprints-user-stories-tasks-item.component.html',
  styleUrls: ['./sprints-user-stories-tasks-item.component.css', '../../../../assets/css/dragula.min.css', '../../../../assets/css/example.css']
})
export class SprintsUserStoriesTasksItemComponent {

  //@Input() userstorie: UserStorie;
  @Input() userstorie: string;
  @Input() userstorieId: number;

  public tasks:Array<string> = ["task1","task2"]; //Get com UID, PROjID, SprinID, USId

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
  
  addTask(){
    console.log("QQQQQ");
  }
}
