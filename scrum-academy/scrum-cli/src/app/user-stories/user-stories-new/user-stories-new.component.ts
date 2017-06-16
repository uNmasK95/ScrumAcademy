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
  userStories: UserStorie[];

  userStorieSelected: UserStorie;
  userStorieIdSelected: number;

  model : any ={}
  projectOn: Project;
  projectIdSelected : number ;

  constructor(private userStorieService: UserStorieService, private alertService: AlertService) { }

  ngOnInit() {
      this.projectOn = JSON.parse(localStorage.getItem('projectOn'));
      // ver se isto funciona senão colocar em baixo
       this.projectIdSelected = +localStorage.getItem('projectId');
        this.userStorieService.getFeatures(this.projectIdSelected).subscribe(
          response =>{
            this.userStories=response;
          },
          error =>{
            console.log(error);
          }
        );
  }

  //Create Features
  createUserStorie(){
    if(this.model.priorityUS>0 && this.model.priorityUS<=10){
      //this.projectIdSelected = 2;
      this.userstorie = new UserStorie(0,this.model.descriptionUS,this.model.priorityUS);
      this.userStorieService.createFeatures(this.projectIdSelected,this.userstorie).subscribe(
        resultado =>{
          this.atualizar();
          let userstorie = resultado;
          this.alertService.success("UserStorie Criada");
        },
        error =>{
          console.log(error);
        }
      )
    }
    else{
      // mandar alerta
    }
  }

  prioriodade(){
    if(this.model.priorityUS>0 && this.model.priorityUS<=10){
      return true;
    }
    else{
      return false;
    }
  }

  atualizar(){
    this.userStorieService.getFeatures(this.projectIdSelected).subscribe(
      response =>{
        this.userStories=response;
      },
      error =>{
        console.log(error);
      }
    );
  }

  onSelect(userstorie: UserStorie){
    this.userStorieSelected = userstorie;
  }

  editUserStorie(){
    let userstorieedit = JSON.parse(localStorage.getItem('userStorieEdit')).userStorie;
    let storie = this.userStories.find(x => x.id == userstorieedit.id);
    let i = this.userStories.indexOf(storie);
    this.userStories.splice(i,1,userstorieedit);

  }

  

}
