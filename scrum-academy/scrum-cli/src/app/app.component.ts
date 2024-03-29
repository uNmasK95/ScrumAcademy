import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IsAuthenticatedService } from './services/is-authenticated.service';
import { LoginGuardService } from './services/login-guard.service';
import { UserService } from "./services/user.service";
import { User } from "app/models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  type: string;
  user: User;

  constructor(
    private isAuthenticatedService: IsAuthenticatedService,
    private router: Router,
    private loginGuardService: LoginGuardService,
    private userService: UserService) { 
    }

  ngOnInit() {
      
  }
  haveUser(){
    if(this.user){
      return true;
    }
    return false;
  }

  logout(){
    this.isAuthenticatedService.logout();
    delete localStorage['token'];
    delete localStorage['userOn'];
    location.reload();
  }

  isLogged(){
     this.user = JSON.parse(localStorage.getItem('userOn'));
    return this.isAuthenticatedService.getLoginStatus();
  }

  getId(){
     if(localStorage.getItem('userOn')){
    let p =JSON.parse(localStorage.getItem('userOn')).type
    if(p>0){
      return p;
    }
     }
    return 0;
  }


  getType(){
    if(localStorage.getItem('userOn')){
      let p =JSON.parse(localStorage.getItem('userOn')).type
      if(p==1 || p==2){
        return p;
      }
    }
    return false;
  }

}
