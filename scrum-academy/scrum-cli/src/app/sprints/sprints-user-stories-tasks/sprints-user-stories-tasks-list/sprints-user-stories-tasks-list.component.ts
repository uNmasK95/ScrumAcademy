import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprints-user-stories-tasks-list',
  templateUrl: './sprints-user-stories-tasks-list.component.html',
  styleUrls: ['./sprints-user-stories-tasks-list.component.css']
})
export class SprintsUserStoriesTasksListComponent implements OnInit {

  public userstories:Array<string> = ["US1",'US2']; //Get

  constructor() { }

  ngOnInit() {
  }

}
