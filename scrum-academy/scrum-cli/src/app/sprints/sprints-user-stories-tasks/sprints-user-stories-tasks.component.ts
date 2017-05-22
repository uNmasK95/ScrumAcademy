import { Component, OnInit, Input } from '@angular/core';
import { Sprint } from "app/sprints/sprint";

@Component({
  selector: 'sprints-user-stories-tasks',
  templateUrl: './sprints-user-stories-tasks.component.html',
  styleUrls: ['./sprints-user-stories-tasks.component.css']
})
export class SprintsUserStoriesTasksComponent implements OnInit {

  sprint : Sprint;
  descriptiontext = false;
  model: any = {}
  constructor() { }

  ngOnInit() {
    this.sprint = JSON.parse(localStorage.getItem('springOn'));
  }

  sprintDescription(){
    this.descriptiontext = true;
  }
  sprintDescriptionSave(){
    this.descriptiontext = false;
  }

}
