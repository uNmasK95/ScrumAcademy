import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from "app/services/alert.service";
import { IsAuthenticatedService } from "app/services/is-authenticated.service";
import { UserService } from "app/services/user.service";

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

  constructor(private router: Router, private isauthenticationService: IsAuthenticatedService,  private alertService: AlertService,
            private userService : UserService) { }

  register() {
        if(this.validateEmail(this.model.email)){
            this.loading = true;
            if(this.model.type){
                if(this.model.password == this.model.confirmpassword){
                    this.isauthenticationService.register(this.model.username,this.model.email,this.model.password,this.model.type)
                        .subscribe(
                            data => {
                                this.utilizadorOn();
                                this.router.navigate(['']);
                            },
                            error => {
                                this.alertService.error("Email já esta a ser utilizado");
                                this.loading = false;
                            });
                }
                else{
                    this.loading = false;
                    this.alertService.error("Password e Confirm Password Diferentes");
                }
            }
            else{
                this.loading = false;
                this.alertService.error("Type não selecionado");
            }   
        }
        else{
            this.alertService.error("Email não existe");
        }
    }
    utilizadorOn(){
        this.userService.getById(+localStorage.getItem('id')).subscribe(
             resultado => {
                    // crio um utilizador deixando apenas o id, email, username e type.
                    let userOn = resultado;
                    delete userOn.team;
                    userOn.type = userOn.type.id;
                    localStorage.setItem('userOn',JSON.stringify(userOn));
            },
            error => {
            });
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
}
