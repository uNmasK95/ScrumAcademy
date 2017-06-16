import { Component, OnInit } from '@angular/core';
import { Project } from "app/dashboard/project/project";
import { UserStorieService } from "app/services/userstorie.service";
import { SprintService } from "app/services/sprint.service";
import { Router } from "@angular/router";

@Component({
  selector: 'sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  project: Project;
  typeofpage: number = 5;
  constructor(private userStorieService: UserStorieService,private router: Router, private sprintService: SprintService) { }

  ngOnInit() {
    this.project = JSON.parse(localStorage.getItem('projectOn'));
    this.haveSprints();
  }

  haveSprints(){
    let timenow = new Date();
    let projectdate = new Date(this.project.endD);
    if(this.project){
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

  dashboard(){
    this.router.navigate(['projects',this.project.id]);
  }

  criadas(){
    this.typeofpage=1;
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
