import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IsAuthenticatedService } from './services/is-authenticated.service';
import { LoginGuardService } from './services/login-guard.service';

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
    private loginGuardService: LoginGuardService) { }

  ngOnInit() {
  }

  //LOGIN and LOGOUT
  login(username: string, pass: string){
    this.isAuthenticatedService.login(username,pass);
    
    localStorage['token'] = 77;
    localStorage['type'] = 2; //1-PO,2-SM ou Dev
    console.log("aqui ctl");
        this.loginGuardService.getAll()
        .subscribe(
            resultado => console.log(resultado)
        );

    //console.log(localStorage['token']);
  }

  logout(){
    this.isAuthenticatedService.logout();
    delete localStorage['token'];
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
