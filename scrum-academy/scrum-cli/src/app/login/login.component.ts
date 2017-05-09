import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { AlertService } from '../services/altert.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private authenticationService: AuthenticationService,
     private alertService: AlertService) { }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
      this.loading = true;
      console.log(this.model);
      this.authenticationService.login(this.model.email, this.model.password)
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              })
    }

    /*
    this.loading = true;
    //this.router.navigate([this.returnUrl]);
    console.log("aqui")
    this.router.navigate(["/app-home"]);
  }*/

}
