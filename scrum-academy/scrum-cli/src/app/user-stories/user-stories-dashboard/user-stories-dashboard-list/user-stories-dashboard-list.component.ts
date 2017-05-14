import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-stories-dashboard-list',
  templateUrl: './user-stories-dashboard-list.component.html',
  styleUrls: ['./user-stories-dashboard-list.component.css']
})
export class UserStoriesDashboardListComponent implements OnInit {

  public userstories:Array<string> = ["US1",'US2']; //Get
  
  constructor() { }

  ngOnInit() {
  }

}
