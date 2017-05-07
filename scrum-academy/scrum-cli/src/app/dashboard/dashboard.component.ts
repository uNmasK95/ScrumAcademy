import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLogged(){
    //console.log("das:" + localStorage['token']);
    if(localStorage['token']){
      return true;
    }
    return false;
  }
}
