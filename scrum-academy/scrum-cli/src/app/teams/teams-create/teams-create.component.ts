import { Component, OnInit } from '@angular/core';
import { Project } from "app/dashboard/project/project";
import { Subject } from "rxjs/Subject";
import {FilterPipe} from './FilterPipe'

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

  names:any;
  constructor(){
      this.names = ['Prashobh','Abraham','Anil','Sam','Natasha','Marry','Zian','karan']
  }

  ngOnInit() {
  }

  addTeam(){
    console.log(this.model.name);
    console.log(this.model.descrip);
    console.log(this.model.projSelected);
  }

  isEmpty(q){
    //console.log(q);
    if(q != undefined){
      return false;
    }
    return true;
  }
}
