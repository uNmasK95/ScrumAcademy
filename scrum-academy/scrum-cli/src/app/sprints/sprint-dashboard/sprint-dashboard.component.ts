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
  public anterioruserStoriesAss :Array<UserStorieProject> = [];
  public userStoriesAss:Array<UserStorieProject> = [];
  public controlasameSprint:Array<UserStorieProject> = [];
  usE: UserStorieProject = null;

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
    if(this.dragulaService.find('first.bad')){
      this.dragulaService.destroy('first-bag');
    }
    this.getUserStoriesSpring();
  }


  private onDropModel(args:any):void {
    let [el, target, source] = args;
    let usAqui : boolean =false;
     let p :UserStorieProject;
    for( let us of this.userStoriesAss){
        if(us.id == el.getAttribute('item-id')){
          p=us;
          usAqui = true;
        }
    }
    if(target.id == "iddragula2" && source.id=="iddragula2"){
        let posicaoparaeliminar = 0;
        for( let us of this.anterioruserStoriesAss){
            if(us.id == el.getAttribute('item-id')){
              usAqui = true;
              break;
            }
            posicaoparaeliminar++;
        }
        if(el.getAttribute('sprint-id') == this.sprintId){
           this.anterioruserStoriesAss.splice(posicaoparaeliminar,1);
           this.sprinService.deleteSprintUserStorie(this.project.id,this.sprintId,el.getAttribute('item-id')).subscribe();
        }
        else{
          for( let us of this.anterioruserStoriesAss){
            if(us.id == el.getAttribute('item-id')){
              usAqui = true;
              break;
            }
            posicaoparaeliminar++;
          }
          if(usAqui){
            if(!this.comparaarry()){
              this.anterioruserStoriesAss.push(p);
              this.sprinService.postSprintUserStorie(this.project.id,this.sprintId,el.getAttribute('item-id'),0).subscribe(
              );
            }
          }
        }
    }
    else{
      if(this.project.id == el.getAttribute('project-id') || (this.sprintId == el.getAttribute('sprint-id') && this.project.id == el.getAttribute('project-id'))){
          let posicaoparaeliminar = 0;
        for( let us of this.anterioruserStoriesAss){
            if(us.id == el.getAttribute('item-id')){
              usAqui = true;
              break;
            }
            posicaoparaeliminar++;
        }
        if(usAqui){
          if(target.id == "iddragula2"){
            if(!this.comparaarry()){
              this.anterioruserStoriesAss.push(p);
              this.sprinService.postSprintUserStorie(this.project.id,this.sprintId,el.getAttribute('item-id'),0).subscribe(
              );
            }
          }
          else{
              this.anterioruserStoriesAss.splice(posicaoparaeliminar,1);
              this.sprinService.deleteSprintUserStorie(this.project.id,this.sprintId,el.getAttribute('item-id')).subscribe(
              );
          }
        }
      }
    }
  }

  comparaarry(){
    let p = false;
    let iterator = 0;
    for( let us of this.userStoriesAss){
      for( let us1 of this.anterioruserStoriesAss){
        if(us.id == us1.id){
          p = true;
          break;
        }
      }
      if(p==false){
        return false;
      }
      p=false;
      iterator++;
    }
    if(iterator == this.anterioruserStoriesAss.length){
      return true;
    }
    return false;
  }

  private onRemoveModel(args:any):void {
    let [el, source] = args;
  }

   apresentaUserStory(usp : UserStorieProject){
      return ' Score: '+ usp.score+' Priority: '+usp.priority+' Description: ' + usp.description;
   }

   getUSandSprint(id:number){
      return id+'-'+this.sprintId;
   }
  
  getUserStoriesSpring(){
    if(this.sprintId){
      this.sprinService.getById(this.project.id,this.sprintId).subscribe(
        resultado => {
          this.userStoriesAss = resultado.userstorie;
          for(let user of resultado.userstorie){
            this.anterioruserStoriesAss.push(user);
            this.controlasameSprint.push(user);
          }
        },
        error =>{
          console.log(error);
        }
      );
    }
  }

  scoreEdit(us,id){
    this.usE=us;
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
    if(!this.model.score){
      this.model.score=0;
    }
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
