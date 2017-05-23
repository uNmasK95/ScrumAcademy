import { Component, OnInit } from '@angular/core';
import { Project } from "app/dashboard/project/project";
import { Subject } from "rxjs/Subject";
import { FilterPipe } from './FilterPipe'
import { AlertService } from "app/services/alert.service";
import { TeamsService } from "app/services/teams.service";
import { UserService } from "app/services/user.service";
import { User } from "app/models/user";
import { ProjectService } from "app/services/project.service";
import { RequestsService } from "app/services/requests.service";

@Component({
  selector: 'teams-create',
  templateUrl: './teams-create.component.html',
  styleUrls: ['./teams-create.component.css']
})
export class TeamsCreateComponent implements OnInit {
/*
  p1: Project = new Project("Project1","desc", new Date(), new Date());
  p2: Project = new Project("Project2","desc", new Date(), new Date());
  p3: Project = new Project("Project3","desc", new Date(), new Date());
  p4: Project = new Project("Project4","desc", new Date(), new Date());
  p5: Project = new Project("Project5","desc", new Date(), new Date());
  p6: Project = new Project("Project6","desc", new Date(), new Date());*/
  projects: Project[] = [];//=  [this.p1,this.p2,this.p3,this.p4,this.p5,this.p6];
  
  model: any = {};
  users: User[] = [];
  usersNames: string[] = [];
  usersSelected: User[] = [];

  constructor(
    private alertService: AlertService,
     private userService: UserService,
     private teamsService: TeamsService,
     private projectService: ProjectService,
     private requestsService: RequestsService){
      this.userService.get()
        .subscribe(
                resultado => {
                  console.log("res");
                  console.log(resultado);
                  for(let i=0;i<resultado.length;i++){
                    this.users.push(new User(resultado[i].id,resultado[i].name,resultado[i].email,resultado[i].type.id));
                    this.usersNames[i] = resultado[i].name;
                  }
                  this.getStatementsAvailable();
                  //this.users = resultado;
                  /*for(let i=0;i<this.users.length;i++){
                    this.usersNames[i]=this.users[i].name;
                  }*/
                }
        );
  }

  ngOnInit() {
  }

  getStatementsAvailable(){
    //MUDAR AQUI QD TIVER A DAR O GETSTATMENTPOSSIBLE
    //this.projectService.getStatementsPossible()
    this.projectService.getStatements()
      .subscribe(
        resultado => {
          console.log("resultado dos projcts disponiveis"),
          console.log(resultado)
          for (let project of resultado) {
            let projectnovo: Project = new Project(project.id,project.name,project.description,project.startDate,project.endDate);
            this.projects.push(projectnovo);
          }
        },
        error =>{
          console.log("error");
          return false;
        }
        
      );
  }

  addUser(u){
    console.log("ADD USER");
    //Buscar object correspondente
    let aux = this.users.find(x => x.name == u);
    if(aux){
      let aux2 = this.usersSelected.find(x => x.id == aux.id);
      if(!aux2){ //Ver se já nao foi selecionado
        this.usersSelected.push(aux); 
      }
    }
    
    /*console.log("User selecionados:")
    for(let i=0; i<this.usersSelected.length;i++){
      console.log(this.usersSelected[i].name);
    }*/
  }

  removeUser(user:User){
    for(let i=0; i<this.usersSelected.length;i++){
      if(this.usersSelected[i].id==user.id){
        this.usersSelected.splice(i,1);
      }
    }
  }

  //Post teams_user
  addUserTeam(teamId, userId, funct){
    this.teamsService.postTeamUsers(teamId, userId,funct)
      .subscribe();
  }

  //Create Request
  createRequest(teamId){
    this.requestsService.create(teamId, this.model.projSelected, false )
      .subscribe();
  }

  addTeam(){
    console.log(this.model.name);
    //console.log(this.model.descrip);
    console.log(this.model.projSelected);

    let teamId: number = 0;

    //Post Teams
    this.teamsService.post(this.model.name)
      .subscribe(
        resultado => {
          teamId = resultado.id;
          console.log("RESULTADO:"),
          console.log(resultado)
          console.log(localStorage['id']);
          this.addUserTeam(teamId, localStorage['id'],1); //Post do user atual que vai ser SM neste projeto
          //Post Team_user
          for(let i=0;i<this.usersSelected.length;i++){
            this.addUserTeam(teamId, this.usersSelected[i].id,2);
          }
          //Create Request
          this.createRequest(teamId)
        }
    );

    

  }

}
