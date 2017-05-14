import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IsAuthenticatedService } from './services/is-authenticated.service';
import { LoginGuardService } from './services/login-guard.service';
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  type: string;
  constructor(
    private isAuthenticatedService: IsAuthenticatedService,
    private router: Router,
    private loginGuardService: LoginGuardService,
    private userService: UserService) { 
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
    return localStorage['type'];
  }

 /* home(){
    if(this.isAuthenticatedService.getLoginStatus()){
      this.router.navigate(["/"]);
    }
  }*/
}
