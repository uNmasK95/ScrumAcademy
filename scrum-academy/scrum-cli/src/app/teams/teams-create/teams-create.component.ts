import { Component, OnInit } from '@angular/core';
import { Project } from "app/dashboard/project/project";
import { Subject } from "rxjs/Subject";
import { FilterPipe } from './FilterPipe'
import { AlertService } from "app/services/alert.service";
import { TeamsService } from "app/services/teams.service";
import { UserService } from "app/services/user.service";

@Component({
  selector: 'teams-create',
  templateUrl: './teams-create.component.html',
  styleUrls: ['./teams-create.component.css']
})
export class TeamsCreateComponent implements OnInit {

  p1: Project = new Project("Project1","desc", new Date(), new Date());
  p2: Project = new Project("Project2","desc", new Date(), new Date());
  p3: Project = new Project("Project3","desc", new Date(), new Date());
  p4: Project = new Project("Project4","desc", new Date(), new Date());
  p5: Project = new Project("Project5","desc", new Date(), new Date());
  p6: Project = new Project("Project6","desc", new Date(), new Date());
  projects: Project[] =  [this.p1,this.p2,this.p3,this.p4,this.p5,this.p6];
  
  model: any = {};
  users:any;
  usersNames: string[] = [];
  usersSelected: string[] = [];

  constructor(
    private alertService: AlertService,
     private userService: UserService){
      this.userService.get()
        .subscribe(
                resultado => {
                  console.log("res");
                  console.log(resultado);
                  this.users = resultado;
                  for(let i=0;i<this.users.length;i++){
                    this.usersNames[i]=this.users[i].name;
                  }
                }
        );
  }

  ngOnInit() {
  }

  addUser(u){
    console.log("ADD USER");
    let aux = this.users.find();//ver no outro
    this.usersSelected.push(u);
    for(let i=0; i<this.usersSelected.length;i++){
      console.log(this.usersSelected[i]);
    }
  }

  addTeam(){
    console.log(this.model.name);
    console.log(this.model.descrip);
    console.log(this.model.projSelected);

    //Post Teams


    //Get Teams, se calhar se o post retornar o id nao preciso disto


    //Post Team_user


  }

}
