import { Component, OnInit } from '@angular/core';
import { Project } from '../../dashboard/project/project';
import { UserStorieService } from "app/services/userstorie.service";
import { UserStorie } from "app/user-stories/userstorie";
import { AlertService } from "app/services/alert.service";

@Component({
  selector: 'user-stories-new',
  templateUrl: './user-stories-new.component.html',
  styleUrls: ['./user-stories-new.component.css']
})
export class UserStoriesNewComponent implements OnInit {
  userstorie: UserStorie;

  p1: Project = new Project("Project1","desc", new Date(), new Date());
  p2: Project = new Project("Project2","desc", new Date(), new Date());
  p3: Project = new Project("Project3","desc", new Date(), new Date());
  p4: Project = new Project("Project4","desc", new Date(), new Date());
  p5: Project = new Project("Project5","desc", new Date(), new Date());
  p6: Project = new Project("Project6","desc", new Date(), new Date());
  projects: Project[] =  [this.p1,this.p2,this.p3,this.p4,this.p5,this.p6];

  model : any ={}
  projectIdSelected : number ;

  constructor(private userStorieService: UserStorieService, private alertService: AlertService) { }

  ngOnInit() {
  }

  //Create Features
  createUserStorie(){
    if(this.model.priorityUS>0 && this.model.priorityUS<=10){
      this.projectIdSelected = +localStorage.getItem('projectId');
      this.projectIdSelected = 2;
      this.userstorie = new UserStorie(this.model.descriptionUS,this.model.priorityUS);
      this.userStorieService.createFeatures(this.projectIdSelected,this.userstorie).subscribe(
        resultado =>{
          let userstorie = resultado;
          console.log(resultado);
        },
        error =>{
          console.log(error);
        }
      )
    }
    else{
      // mandar alerta
      this.alertService.error("Choose priority between 1 and 10!");
    }
  }
  

}
