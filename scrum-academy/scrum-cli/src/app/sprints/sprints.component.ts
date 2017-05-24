import { Component, OnInit } from '@angular/core';
import { Project } from "app/dashboard/project/project";
import { UserStorieService } from "app/services/userstorie.service";

@Component({
  selector: 'sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  project: Project;
  typeofpage: number = 5;
  constructor(private userStorieService: UserStorieService) { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('teamUser')).job);
    this.project = JSON.parse(localStorage.getItem('projectOn'));
    this.haveSprints();
  }

  haveSprints(){
    let timenow = new Date();
    let projectdate = new Date(this.project.endD);
    if(this.project){
      if((projectdate.getTime())> (timenow.getTime())){
         this.getUserStories();
      }
      else{
        if(projectdate.getDay()==timenow.getDay() && projectdate.getMonth() == timenow.getMonth() && projectdate.getFullYear() == timenow.getFullYear()){
           this.getUserStories();
        }
        else if((new Date(this.project.initialD).getTime()) > timenow.getTime()){
          this.typeofpage = 2;
        }
      }
    }
  }

  getUserStories(){
      this.userStorieService.getUserStoriesByProjectId(this.project.id).subscribe(
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
