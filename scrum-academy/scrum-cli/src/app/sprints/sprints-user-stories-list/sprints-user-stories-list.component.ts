import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Project } from "app/dashboard/project/project";
import { AlertService } from "app/services/alert.service";
import { UserStorieService } from "app/services/userstorie.service";
import { UserStorieProject } from "app/user-stories/userstorieproject";
import { SprintService } from "app/services/sprint.service";

@Component({
  selector: 'sprints-user-stories-list',
  templateUrl: './sprints-user-stories-list.component.html',
  styleUrls: ['./sprints-user-stories-list.component.css' , '../../../assets/css/dragula.min.css', '../../../assets/css/example.css']
})
export class SprintsUserStoriesListComponent {

  public userStoriesToAss:Array<UserStorieProject> = []//= ['UserS1', 'UserS2', 'UserS3', 'UserS4', 'UserS5', 'UserS6'];
  project : Project;
  positionuserstorieselect : number;
  scoreeditok : boolean = false;
  userstorieselect : UserStorieProject;
  model: any = {}

  public constructor(private dragulaService:DragulaService,
                      private userStorieService: UserStorieService, 
                      private alertService: AlertService,
                      private sprintService: SprintService) {
    dragulaService.removeModel;
    if(dragulaService.find('second.bad')){
      dragulaService.destroy('second-bag');
    }
    dragulaService.dropModel.subscribe((value:any) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value:any) => {
      this.onRemoveModel(value.slice(1));
    });
    this.getUserStories();
  }

  ngOnInit() {
    console.log(this.dragulaService.find('second.bad'));
    if(this.dragulaService.find('second.bad')){
      this.dragulaService.destroy('second-bag');
    }
  }
  

  private onDropModel(args:any):void {
    let [el, target, source] = args;
    //console.log("vim para aqui")
    //console.log('onDropModel:');
    //console.log(el);
    //console.log(target);
    //console.log(source);
    //console.log(el.getAttribute('item-id'));
  }

  private onRemoveModel(args:any):void {
    let [el, source] = args;
    console.log('onRemoveModel:');
    //console.log(el);
    //console.log(source);
  }

  getUserStories(){
    this.project = JSON.parse(localStorage.getItem('projectOn'));
    this.userStorieService.getUserStoriesByProjectId(this.project.id).subscribe(
      resultado1 => {
          this.sprintService.get(this.project.id).subscribe(
            resultado =>{
              this.userStoriesToAss = resultado1
              for(let sprint of resultado){
                for(let sprintUserstorie of sprint.userstorie){
                  for(var i =0;i<this.userStoriesToAss.length;i++){
                  //  console.log(sprintUserstorie.id);
                   // console.log(this.userStoriesToAss[i].id)
                    if(sprintUserstorie.id ==this.userStoriesToAss[i].id){
                      this.userStoriesToAss.splice(i,1);
                      break;
                    }
                  }
                }
              }
            },
            error =>{
              console.log(error);
            } 
          );
      },
      error =>{
        console.log(error);
      }
    );
  }

  apresentaUserStory(usp : UserStorieProject){
    return ' Score: '+ usp.score+' Priority: '+usp.priority+' Description: ' + usp.description;
  }
  scoreEdit(us,id){
    if(this.scoreeditok){
      this.scoreeditok = false;
    }
    else{
      this.scoreeditok = true;
      this.userstorieselect = us;
      this.positionuserstorieselect = id;
    }
  }

  saveScoreEdit(){
    this.scoreeditok = false;
    this.userStorieService.updateScore(this.project.id,this.userstorieselect.id,this.model.score).subscribe(
      resultado =>{
        this.userStoriesToAss[this.positionuserstorieselect].score = this.model.score;
      },
      error =>{
        console.log(error);
      }
    );
  }


}
