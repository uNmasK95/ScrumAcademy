import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-stories-dashboard',
  templateUrl: './user-stories-dashboard.component.html',
  styleUrls: ['./user-stories-dashboard.component.css']
})
export class UserStoriesDashboardComponent implements OnInit {

  sprint:string = "Sprint1";
  constructor() { }

  ngOnInit() {
  }

}
