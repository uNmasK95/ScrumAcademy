import { Component, OnInit } from '@angular/core';
import { Project } from '../../dashboard/project/project';

@Component({
  selector: 'user-stories-new',
  templateUrl: './user-stories-new.component.html',
  styleUrls: ['./user-stories-new.component.css']
})
export class UserStoriesNewComponent implements OnInit {

  p1: Project = new Project("Project1","desc", new Date(), new Date());
  p2: Project = new Project("Project2","desc", new Date(), new Date());
  p3: Project = new Project("Project3","desc", new Date(), new Date());
  p4: Project = new Project("Project4","desc", new Date(), new Date());
  p5: Project = new Project("Project5","desc", new Date(), new Date());
  p6: Project = new Project("Project6","desc", new Date(), new Date());
  projects: Project[] =  [this.p1,this.p2,this.p3,this.p4,this.p5,this.p6];

  projectIdSelected : number ;

  constructor() { }

  ngOnInit() {
  }

}
