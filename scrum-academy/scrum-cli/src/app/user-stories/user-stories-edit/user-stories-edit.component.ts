import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { UserStorieService } from "app/services/userstorie.service";
import { AlertService } from "app/services/alert.service";
import { UserStorie } from "app/user-stories/userstorie";

@Component({
  selector: 'user-stories-edit',
  templateUrl: './user-stories-edit.component.html',
  styleUrls: ['./user-stories-edit.component.css']
})
export class UserStoriesEditComponent implements OnInit {
  @Input() userStorie: UserStorie;
  @Output() editUserStorie  = new EventEmitter()
  
  model : any ={};
  projectIdSelected : number;

  constructor(private userStorieService: UserStorieService, private alertService: AlertService) { }

  ngOnInit() {
    this.model.newdescroptionUS = this.userStorie.description;
    this.model.newpriorityUS = this.userStorie.priority;
    this.projectIdSelected = +localStorage.getItem('projectId');
  }

  ngOnChanges(changes: SimpleChanges){
    this.model.newdescroptionUS = this.userStorie.description;
    this.model.newpriorityUS = this.userStorie.priority;
  }

  edit(){
    //caso que ele mudou o priority
    this.userStorie.description = this.model.newdescroptionUS;
    this.userStorie.priority = this.model.newpriorityUS;
    if(this.model.newpriorityUS != this.userStorie.description && this.model.newdescroptionUS != this.userStorie.priority){
      if(this.model.newpriorityUS>0 && this.model.newpriorityUS<=10){
        this.editServiceFeatureAll(this.model.newdescroptionUS,this.model.newpriorityUS);
      }
      else{
        // mandar alerta
        this.alertService.error("Choose priority between 1 and 10!");
      }
    }
    else{
      if(this.model.newdescroptionUS != this.userStorie.description){
        this.editServiceFeatureDescription(this.model.newdescroptionUS);
      }
      else{
        if(this.model.newpriorityUS!= this.userStorie.priority){
          if(this.model.newpriorityUS>0 && this.model.newpriorityUS<=10){
            this.editServiceFeaturePriority(this.model.newpriorityUS);
          }
          else{
            // mandar alerta
            this.alertService.error("Choose priority between 1 and 10!");
          }
        }
      }
    }
  }

  // edit all feature
  editServiceFeatureAll(description: string, priority: string){
    this.userStorieService.updateFeatures(this.projectIdSelected,description,priority,this.userStorie.id).subscribe(
        resultado =>{
          localStorage.setItem('userStorieEdit',JSON.stringify({userStorie:this.userStorie}));
          this.editUserStorie.emit("mudei")
          let feature = resultado;
        },
        error =>{
          console.log(error);
        }
      )
  }
  editServiceFeaturePriority(priority: string){
    this.userStorieService.updateFeaturePriority(this.projectIdSelected,priority,this.userStorie.id).subscribe(
      resultado =>{
        localStorage.setItem('userStorieEdit',JSON.stringify({userStorie:this.userStorie}));
        this.editUserStorie.emit("mudei")
        let feature = resultado;
      },
      error =>{
        console.log(error);
      }
    )
  }
   editServiceFeatureDescription(description: string){
    this.userStorieService.updateFeatureDescription(this.projectIdSelected,description,this.userStorie.id).subscribe(
      resultado =>{
        localStorage.setItem('userStorieEdit',JSON.stringify({userStorie:this.userStorie}));
        this.editUserStorie.emit("mudei")
        let feature = resultado;
      },
      error =>{
        console.log(error);
      }
    )
  }
}
