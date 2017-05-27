import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { RequestsService } from "app/services/requests.service";
import { Project } from "app/dashboard/project/project";
import { Request } from "../request";
import { ProjectService } from "app/services/project.service";
import { AlertService } from "app/services/alert.service";

@Component({
  selector: 'team-user',
  templateUrl: './teams-user.component.html',
  styleUrls: ['./teams-user.component.css']
})
export class TeamsUserComponent implements OnInit {
  @Input() teams: Request;
  adicionanovoproject :boolean = false;
  projects: Project[] = [];
  model :any = {}
  team : Request;

  constructor(    private requestsService: RequestsService,
                  private projectService: ProjectService,
                  private alertService: AlertService,
                  private cdRef:ChangeDetectorRef) { 
                    this.getProjectsUser()
  }

  ngOnInit() {
    console.log(this.teams   )
  }

   ngAfterViewChecked()
  {
    this.adicionanovoproject = this.adicionanovoproject ;
    this.cdRef.detectChanges();
  }

  adicionaproject(){
    if(this.adicionanovoproject==true){
      //this.adicionanovoprojcet = false;
    }
    else{
     this.adicionanovoproject = true;
    }
  }

  requeststate(){
    console.log(this.adicionanovoproject  );
    return this.adicionanovoproject
  }
   getProjectsUser(){
      this.projectService.getStatementsPossible().subscribe(
        resultado =>{
          console.log("statements")
          console.log(resultado)
          this.projects=resultado;
          let userOn =JSON.parse(localStorage.getItem('userOn'))
          this.projectService.getProjectsByUserId(userOn.id).subscribe(
            resultado=>{
              console.log(this.projects)
              //console.log("dadad cd")
              let projetostodos = resultado;
              for(let project of projetostodos){
                console.log(project)
                if(project.team.id == this.teams.teamId){
                  console.log("estou aqui");
                  let proj = this.projects.find(x => x.id == project.statement.id);
                  let i = this.projects.indexOf(proj);
                  this.projects.splice(i,1)
                }
              }
              console.log(this.projects);
          },
            error=>{
              console.log(error);
            }
          )
        },
        error =>{
          console.log(error);
        }
      );
  }
  request(){
    if(this.model.newProject){
      let p = this.model.newProject;
      this.requestsService.create(this.teams.teamId, p, false).subscribe(
        resultado =>{
          this.alertService.success("Sent request");
        }, erro=>{
           this.alertService.error("Dont need sent other request! Wait Product Onwner answer!");
        }
      );
    }
  }
}
