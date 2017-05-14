import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from "ng2-dragula";

@Component({
  selector: 'user-stories-dashboard-item',
  templateUrl: './user-stories-dashboard-item.component.html',
  styleUrls: ['./user-stories-dashboard-item.component.css', '../../../../assets/css/dragula.min.css', '../../../../assets/css/example.css']
})
export class UserStoriesDashboardItemComponent {

   //@Input() userstorie: UserStorie;
  @Input() userstorie: string;
  @Input() userstorieId: number;

  public tasksToAss:Array<string> = ["task1","task2"]; //Get com UID, PROjID, SprinID, USId
  public tasksInProgress:Array<string> = ["taskIn1","taskIn2"];
  public tasksDone:Array<string> = ["taskD1","taskD2"];

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

  concate(){
    return "third-bag";
  }

}
