import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Sprint } from "app/sprints/sprint";
import { SprintService } from "app/services/sprint.service";
import { Project } from "app/dashboard/project/project";

@Component({
  selector: 'sprints-list',
  templateUrl: './sprints-list.component.html',
  styleUrls: ['./sprints-list.component.css']
})
export class SprintsListComponent implements OnInit {
/*
  s1: Sprint = new Sprint(1,"Sprint1",new Date(), new Date());
  s2: Sprint = new Sprint(2,"Sprint2",new Date(), new Date());
  s3: Sprint = new Sprint(3,"Sprint3",new Date(), new Date());*/
  sprints: Sprint[] //=  [this.s1,this.s2,this.s3];
  project : Project;

  constructor(private router: Router, private sprintService: SprintService) { }

  ngOnInit() {
    this.project = JSON.parse(localStorage.getItem('projectOn'));
    this.getSprints();
  }

  //falta fazer a filtragem das sprints que nao interessam.
  getSprints(){
    this.sprintService.get(this.project.id).subscribe(
      resultado =>{
        this.sprints=resultado;
        console.log(this.sprints);
      },
      error =>{
        console.log(error);
      } 
    );
  }

}
