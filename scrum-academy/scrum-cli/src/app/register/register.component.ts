import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from "app/services/alert.service";
import { IsAuthenticatedService } from "app/services/is-authenticated.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loading = false;
  model : any = {};
  entries = [{
        id: 1,
        description: 'entry 1'
    },
    {
        id: 2,
        description: 'entry 2'
    }];

  selectedEntry;
  onSelectionChange(entry) {
        this.selectedEntry = entry;
  }

  constructor(private router: Router, private isauthenticationService: IsAuthenticatedService,  private alertService: AlertService) { }

  register() {
        this.loading = true;
        if(this.model.password == this.model.confirmpassword){
            this.isauthenticationService.register(this.model.username,this.model.email,this.model.password,this.model.type)
                .subscribe(
                    data => {
                        this.router.navigate(['']);
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });
        }
        else{
            this.loading = false;
            this.alertService.error("Password e Confirm Password Diferentes");
        }   
    }

}
