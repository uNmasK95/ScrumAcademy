import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { UserStorieService } from "app/services/userstorie.service";
import { UserStorieProject } from "app/user-stories/userstorieproject";

@Component({
  selector: 'sprint-dashboard',
  templateUrl: './sprint-dashboard.component.html',
  styleUrls: ['./sprint-dashboard.component.css' , '../../../assets/css/dragula.min.css', '../../../assets/css/example.css']
})
export class SprintDashboardComponent {

  public userStoriesAss:Array<UserStorieProject> = [];

  public constructor(private dragulaService:DragulaService,private userStorieService: UserStorieService) {
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

   apresentaUserStory(usp : UserStorieProject){
     console.log("aquidadadadw2");
    return 'Priority: '+usp.priority+' Description: ' + usp.description+'dadawdaw dadawdadaw dawDA DAWDAAWHVBDU YAVDYAVD YUADWVYVHAB JADVBJ WUG IFBG YESACJBASHZ JNJBH    \n ';
  }
  
}
