import { Component, OnInit } from '@angular/core';
import { Project } from "app/dashboard/project/project";
import { UserStorieService } from "app/services/userstorie.service";
import { SprintService } from "app/services/sprint.service";

@Component({
  selector: 'sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  project: Project;
  typeofpage: number = 5;
  constructor(private userStorieService: UserStorieService, private sprintService: SprintService) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('teamUser')).job);
    this.project = JSON.parse(localStorage.getItem('projectOn'));
    this.haveSprints();
  }

  haveSprints(){
    let timenow = new Date();
    let projectdate = new Date(this.project.endD);
    console.log(this.project);
    if(this.project){
      console.log(this.project);
      if((projectdate.getTime())> (timenow.getTime())){
         this.getSprints();
      }
      else{
        if(projectdate.getDay()==timenow.getDay() && projectdate.getMonth() == timenow.getMonth() && projectdate.getFullYear() == timenow.getFullYear()){
           this.getSprints();
        }
        else if((new Date(this.project.initialD).getTime()) > timenow.getTime()){
          this.typeofpage = 2;
        }
      }
    }
  }

  getSprints(){
      this.sprintService.get(this.project.id).subscribe(
        resultado => {
          if(resultado.length == 0){
            this.typeofpage=0;
          }else{
          this.typeofpage=1;
          }
        },
        error =>{
          console.log(error);
        }
      );
    }

}
