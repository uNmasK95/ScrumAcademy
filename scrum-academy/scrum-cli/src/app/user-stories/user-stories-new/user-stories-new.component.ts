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

  model : any ={}
  projectIdSelected : number ;

  constructor(private userStorieService: UserStorieService, private alertService: AlertService) { }

  ngOnInit() {
      // ver se isto funciona senão colocar em baixo
       this.projectIdSelected = +localStorage.getItem('projectId');
  }

  //Create Features
  createUserStorie(){
    if(this.model.priorityUS>0 && this.model.priorityUS<=10){
      //this.projectIdSelected = 2;
      this.userstorie = new UserStorie(0,this.model.descriptionUS,this.model.priorityUS);
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
