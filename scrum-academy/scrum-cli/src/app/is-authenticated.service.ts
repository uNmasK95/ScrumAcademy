import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './profile/user';
import { HttpUtilService } from './http-util.service';

@Injectable()
export class IsAuthenticatedService {

  userLoggedIn : boolean = false;
  userLogged : User; //User logado

  //call this function when login status changes
  changeLoginStatus(status: boolean){
      this.userLoggedIn = status;
      console.log("in changeLoginStatus: ", status);
  }

  getLoginStatus(){
    return this.userLoggedIn;
  }

  //LOGIN and LOGOUT
  login(username: string, pass: string){
    this.changeLoginStatus(true);
    this.userLogged = new User('UsernameLogged','logged@hotmail.com','pass');
  }

  logout(){
    this.changeLoginStatus(false);
    this.userLogged = null;
  }
}
