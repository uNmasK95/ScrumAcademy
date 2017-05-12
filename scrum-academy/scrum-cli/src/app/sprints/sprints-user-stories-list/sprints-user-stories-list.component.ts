import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'sprints-user-stories-list',
  templateUrl: './sprints-user-stories-list.component.html',
  styleUrls: ['./sprints-user-stories-list.component.css' , '../../../assets/css/dragula.min.css', '../../../assets/css/example.css']
})
export class SprintsUserStoriesListComponent {

  public userStoriesToAss:Array<string> = ['UserS1', 'UserS2', 'UserS3', 'UserS4', 'UserS5', 'UserS6'];

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


}
