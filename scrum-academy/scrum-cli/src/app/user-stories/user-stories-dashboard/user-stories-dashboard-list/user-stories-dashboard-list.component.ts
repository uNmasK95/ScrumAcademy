import { Component, OnInit } from '@angular/core';
import { UserStorieUser } from "app/models/userStorieUser";

@Component({
  selector: 'user-stories-dashboard-list',
  templateUrl: './user-stories-dashboard-list.component.html',
  styleUrls: ['./user-stories-dashboard-list.component.css']
})
export class UserStoriesDashboardListComponent implements OnInit {

  us1: UserStorieUser = new UserStorieUser(1,"USerSt1");
  us2: UserStorieUser = new UserStorieUser(2,"USerSt2");
  public userstories: UserStorieUser[] = [this.us1, this.us2]; //Get
  
  constructor() { }

  ngOnInit() {
  }

}
