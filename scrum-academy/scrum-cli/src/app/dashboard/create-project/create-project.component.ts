import { Component, OnInit } from '@angular/core';
import { ProjectService } from "app/services/project.service";
import { Project } from "app/dashboard/project/project";
import { AlertService } from "app/services/alert.service";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  loading: boolean = false;
  model: any = {};
  projCreated: boolean = false;
  project : Project;
  constructor(private projectService: ProjectService, private alertService: AlertService) { }

  ngOnInit() {
  }

  createProject(){
    if(this.validaDatas()){
      this.loading = true;
      this.project = new Project(0,this.model.nameP,this.model.descriptionP, new Date(this.model.initialD), new Date(this.model.endD));
      let user = JSON.parse(localStorage.getItem('userOn'));
      this.projectService.create(user.id,this.project).subscribe(
        resultado => {
          let statement = resultado;
          localStorage.setItem('projectId',statement.id);
          this.projCreated=true;
        },
        error => {
          this.loading = false;
          // mandar alerta
          this.alertService.error("Net Down, sorry!");
        }
      )
    }
    else{
      // mandar alerta
      this.alertService.error("Invalid date!");
    }
   }

  // Ve se as datas inseridas sao validas
  validaDatas(){
    if( (new Date(this.model.initialD)).getTime()> (new Date()).getTime()){
      if( (new Date(this.model.initialD)).getTime() < (new Date(this.model.endD)).getTime()){
        return true;
      }
    }
    else{
      if((new Date(this.model.initialD)).getDay()==(new Date()).getDay() && (new Date(this.model.initialD)).getMonth() == (new Date()).getMonth() && (new Date(this.model.initialD)).getFullYear() == (new Date()).getFullYear()){
        return true;
      }
      return false;
    }
  }
}
