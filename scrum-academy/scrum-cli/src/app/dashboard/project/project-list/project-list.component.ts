import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from "app/services/project.service";
import { AlertService } from "app/services/alert.service";
import { TeamsService } from "app/services/teams.service";
import { UserTeam } from "app/models/userteam";


@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
    projectsRetiradosBool: boolean = false;
    projects: Project[] = [];
    userTeamProject : UserTeam[] = []
  constructor(private projectService: ProjectService,
              private teamService: TeamsService, 
              private alertService: AlertService, 
              private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
  }
  
  ngAfterViewChecked()
  {
    this.projectsRetiradosBool = this.projectsRetiradosBool ;
    this.cdRef.detectChanges();
  }

  projectsRetirados(){
    return this.projectsRetiradosBool;
  }

  statementOrProject(){
    this.projectsRetiradosBool = true;
    if(localStorage.getItem('userOn')){
      let userOn =JSON.parse(localStorage.getItem('userOn'))
      console.log(this.projectsRetiradosBool);
      if(userOn.type==1){
          //get statements
          
          this.projectService.getStatementsById(userOn.id).subscribe(
            resultado =>{
              for (let project of resultado) {
                
                let projectnovo: Project = new Project(project.id,project.name,project.description,project.startDate,project.endDate);
                this.projects.push(projectnovo);
              }
              return true;
            },
            error =>{
              console.log("error");
              return false;
            }
          );
          
          /*
          this.projectService.getStatements().subscribe(
            resultado =>{
              for (let project of resultado) {
                if(project.user.id == userOn.id){
                  let projectnovo: Project = new Project(project.id,project.name,project.description,project.startDate,project.endDate);
                  this.projects.push(projectnovo);
                }
              }
              console.log(this.projectsRetiradosBool);
              return true;
              
            },
            error =>{
              console.log("error");
              return false;
            }
          );*/
      }
      else{
        if(userOn.type==2){
          // utilizador Dev/Scrum buscar projetos que esta envolvido
          return this.getProjectsUser(userOn);
          
        }
      }
    } 
    else{
      this.projectsRetiradosBool = false;
      return false;
    }
  }
  getTeamFunction(id: number){
    for(var i = 0; i< this.userTeamProject.length; i++){
      if(this.userTeamProject[i].project == id) return this.userTeamProject[i];
    }
  }

  getProjectsUser(userOn){
      let erro=false;
      this.projectService.getProjectsByUserId(userOn.id).subscribe(
            resultado=>{
              let projetostodos = resultado;
              for(let project of projetostodos){
                this.teamService.getById(project.team.id).subscribe(
                  resultado =>{
                    for(let teamUser of resultado.team_users){
                      if(teamUser.user_id == userOn.id){
                        let userteam : UserTeam = new UserTeam(project.team.id,teamUser.function_id,project.id);
                        let projectnovo: Project = new Project(project.id,project.name,project.description,project.startDate,project.endDate);
                        this.userTeamProject.push(userteam);
                        this.projects.push(projectnovo);
                        erro=true;
                        localStorage.setItem('UserTeamProject', JSON.stringify(this.userTeamProject))
                      }
                    }
                  },
                  error =>{
                    console.log(error);
                  }
                );
              }
          },
            error=>{
              console.log(error);
            }
          )
          return erro;
  }
  /*
  getPojectUser1(userOn){
    let erro=false;
      this.projectService.getProjects().subscribe(
            resultado=>{
              let projetostodos = resultado;
              //vamos procurar as equipas todas do utilizador on
              this.teamService.get().subscribe(
                resultado =>{
                  for (let team of resultado) {
                    for(let team_user of team.team_users){
                      if(team_user.user_id==userOn.id){
                        for(let project of projetostodos){
                          if(project.team.id == team.id){
                            let userteam : UserTeam = new UserTeam(team.id,team_user.function_id,project.id);
                            let projectnovo: Project = new Project(project.id,project.name,project.description,project.startDate,project.endDate);
                            this.userTeamProject.push(userteam);
                            this.projects.push(projectnovo);
                            //ver se faço ou nao break, pois se fizer break só vai aparecer um projeto daqueles.
                            //break;
                          }
                        }
                      }
                    }
                  }
                  erro=true;
                  localStorage.setItem('UserTeamProject', JSON.stringify(this.userTeamProject))
                  console.log(localStorage.getItem('UserTeamProject'));
                },
                error=>{
                }
              )
            },
            error=>{

            }
          )
          return erro;
  }*/

  

}
