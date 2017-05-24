import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { UserStorieService } from "app/services/userstorie.service";
import { UserStorieProject } from "app/user-stories/userstorieproject";
import { SprintService } from "app/services/sprint.service";
import { Project } from "app/dashboard/project/project";

@Component({
  selector: 'sprint-dashboard',
  templateUrl: './sprint-dashboard.component.html',
  styleUrls: ['./sprint-dashboard.component.css' , '../../../assets/css/dragula.min.css', '../../../assets/css/example.css']
})
export class SprintDashboardComponent {

  @Input() sprintId: number;
  project: Project;
  model : any = {};
  scoreeditok : boolean = false;
  userstorieselect : UserStorieProject;
  positionuserstorieselect : number;
  public userStoriesAss:Array<UserStorieProject> = [];

  public constructor(private dragulaService:DragulaService,
                     private userStorieService: UserStorieService,
                     private sprinService: SprintService) {
    dragulaService.dropModel.subscribe((value:any) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value:any) => {
      this.onRemoveModel(value.slice(1));
    });
    this.project = JSON.parse(localStorage.getItem('projectOn'));
  }
  ngOnInit() {
    this.getUserStoriesSpring();
  }

  private onDropModel(args:any):void {
    console.log("Estou aqui");
    let [el, target, source] = args;
    if(target.id == "iddragula2"){
      this.sprinService.postSprintUserStorie(this.project.id,this.sprintId,el.getAttribute('item-id'),0).subscribe(
      );
    }
    else{
      this.sprinService.deleteSprintUserStorie(this.project.id,this.sprintId,el.getAttribute('item-id')).subscribe(
      );
    }
    console.log(el.getAttribute('item-id'));
    console.log('onDropModel:');
  }

  private onRemoveModel(args:any):void {
    let [el, source] = args;
    console.log('onRemoveModel:');
    //console.log(el);
    //console.log(source);
  }

   apresentaUserStory(usp : UserStorieProject){
      return ' Score: '+ usp.score+' Priority: '+usp.priority+' Description: ' + usp.description;
    }
  
  getUserStoriesSpring(){
    if(this.sprintId){
      this.sprinService.getById(this.project.id,this.sprintId).subscribe(
        resultado => {
          this.userStoriesAss = resultado.userstorie;
        },
        error =>{
          console.log(error);
        }
      );
    }
  }

  scoreEdit(us,id){
    this.scoreeditok = true;
    this.userstorieselect = us;
    this.positionuserstorieselect = id;
  }

  saveScoreEdit(){
    this.scoreeditok = false;
    this.userStorieService.updateScore(this.project.id,this.userstorieselect.id,this.model.score).subscribe(
      resultado =>{
        this.userStoriesAss[this.positionuserstorieselect].score = this.model.score;
      },
      error =>{
        console.log(error);
      }
    );
  }
  getid(us){
    return us.id;
  }
}
