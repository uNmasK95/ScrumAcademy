import { Component, OnInit } from '@angular/core';
import { Sprint } from "app/sprints/sprint";

@Component({
  selector: 'sprints-list',
  templateUrl: './sprints-list.component.html',
  styleUrls: ['./sprints-list.component.css']
})
export class SprintsListComponent implements OnInit {

  s1: Sprint = new Sprint("Sprint1",new Date(), new Date());
  s2: Sprint = new Sprint("Sprint2",new Date(), new Date());
  s3: Sprint = new Sprint("Sprint3",new Date(), new Date());
  sprints: Sprint[] =  [this.s1,this.s2,this.s3];

  constructor() { }

  ngOnInit() {
  }

}
