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
       this.user = JSON.parse(localStorage.getItem('userOn'));
    }

  ngOnInit() {
  }

  logout(){
    this.isAuthenticatedService.logout();
    delete localStorage['token'];
    delete localStorage['user'];
  }

  isLogged(){
    //console.log("Cpn isLogged"+this.isAuthenticatedService.getLoginStatus());
    return this.isAuthenticatedService.getLoginStatus();
  }

  getType(){
    return this.user.type;
  }

 /* home(){
    if(this.isAuthenticatedService.getLoginStatus()){
      this.router.navigate(["/"]);
    }
  }*/
}
