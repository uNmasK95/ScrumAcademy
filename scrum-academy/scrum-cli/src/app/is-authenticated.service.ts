import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './profile/user';
import { HttpUtilService } from './http-util.service';
import { Router } from '@angular/router';

@Injectable()
export class IsAuthenticatedService {

  userLoggedIn : boolean = false;
  userLogged : User; //User logado

  constructor(private router: Router){
	}

  //call this function when login status changes
  changeLoginStatus(status: boolean){
      this.userLoggedIn = status;
      console.log("in changeLoginStatus: ", status);
  }

  getLoginStatus(){
    //return this.userLoggedIn;
    return localStorage['token'];
  }

  //LOGIN and LOGOUT -- este login logout depois vao para login service
  login(username: string, pass: string){
    this.changeLoginStatus(true);
    this.userLogged = new User('UsernameLogged','logged@hotmail.com','pass');
  }

  logout(){
    this.changeLoginStatus(false);
    this.userLogged = null;
  }

  //
  canActivate() {
  		if (this.getLoginStatus()) {
  			return true;
  		}
  		this.router.navigate(['/']);
  	}
}
