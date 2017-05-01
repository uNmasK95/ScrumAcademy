import { Component, OnInit } from '@angular/core';

import { Project } from '../project';


@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  p1: Project = new Project("Project1","desc", new Date(), new Date());
  p2: Project = new Project("Project1","desc", new Date(), new Date());
  p3: Project = new Project("Project1","desc", new Date(), new Date());
  p4: Project = new Project("Project1","desc", new Date(), new Date());
  p5: Project = new Project("Project1","desc", new Date(), new Date());
  p6: Project = new Project("Project1","desc", new Date(), new Date());
  projects: Project[] =  [this.p1,this.p2,this.p3,this.p4,this.p5,this.p6];
  constructor() { }

  ngOnInit() {
  }

}
