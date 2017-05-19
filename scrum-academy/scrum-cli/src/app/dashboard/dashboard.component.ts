import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user.service";
import { User } from 'app/models/user'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userOn : any;

  constructor(private userService: UserService) { 
      
  }

  ngOnInit() {
    this.userOn = JSON.parse(localStorage.getItem('userOn'));
  }


  isLogged(){
    //console.log("das:" + localStorage['token']);
    if(localStorage['currentUser']){
      return true;
    }
    return false;
  }

  getType(){ 
      if(localStorage.getItem('userOn')){
      let type =JSON.parse(localStorage.getItem('userOn')).type
      if(type==1 || type==2){
        //console.log(localStorage.getItem('userOn'));
        return type;
      }
      }
      return 0;
  }
}
