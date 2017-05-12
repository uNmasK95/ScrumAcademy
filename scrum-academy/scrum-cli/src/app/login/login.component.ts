import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { IsAuthenticatedService } from '../services/is-authenticated.service'
import { AlertService } from "app/services/alert.service";

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
     private isauthenticationService: IsAuthenticatedService,
     private alertService: AlertService) { }

  ngOnInit() {
      // reset login status
      //this.isauthenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
      this.loading = true;
      this.isauthenticationService.login(this.model.email, this.model.password)
          .subscribe(
                resultado => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log("ERROR:"+error);
                    this.alertService.error("Email ou Password incorretos!");
                    this.loading = false;
                }
            );
    }

    /*
    this.loading = true;
    //this.router.navigate([this.returnUrl]);
    console.log("aqui")
    this.router.navigate(["projects"]);
  }*/

}
