import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from "app/services/user.service";
import { AlertService } from "app/services/alert.service";
import { IsAuthenticatedService } from "app/services/is-authenticated.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  model :any = {};
  userLogged: User;
  editSelected: boolean = false;

  constructor(private userService: UserService,private alertService: AlertService, private isAuthenticatedService: IsAuthenticatedService) { }

  ngOnInit() {
    this.userLogged = JSON.parse(localStorage.getItem('userOn'));
    this.model = JSON.parse(localStorage.getItem('userOn'));
  }
 
  edit(){
    this.editSelected = true;
    if(this.userLogged.name != this.model.name){
      if(this.model.password && this.model.newpassword == this.model.newconfpassword){
        
        this.userService.userconfirm(this.model.email,this.model.password).subscribe(
          resultado => {
            //localStorage.setItem('currentUser',resultado.token);
            this.userService.update(this.userLogged.id,this.model.name,this.model.newpassword).subscribe(
              resultado => {
                this.userLogged.name = this.model.name;
                localStorage.setItem('userOn',JSON.stringify(this.userLogged));
                this.model = JSON.parse(localStorage.getItem('userOn'));
                this.alertService.success("Data change with success!!");
                this.logout();
                this.alertService.success("Data change with success!!");
              },
              error => {
                this.editSelected = false;
              })
          },
          error => {
            this.editSelected = false
            this.alertService.error("Wrong Password!");
          }
        )
        
      }
      else{
        //mandar pedido alterar apenas o nome
        this.userService.updateName(this.userLogged.id,this.model.name).subscribe(
          resultado =>{
            this.userLogged.name = this.model.name;
            localStorage.setItem('userOn',JSON.stringify(this.userLogged));
            this.model = JSON.parse(localStorage.getItem('userOn'));
            this.alertService.success("Data change with success!!");
          },
          error => {
            this.editSelected = false; 
          }
        );
      }
    }
    else{
      if(this.model.password && this.model.newpassword == this.model.newconfpassword){
        this.userService.userconfirm(this.model.email,this.model.password).subscribe(
            resultado => {
              this.userService.update(this.userLogged.id,this.model.name,this.model.newpassword).subscribe(
                resultado => {
                  this.userLogged.name = this.model.name;
                  localStorage.setItem('userOn',JSON.stringify(this.userLogged));
                  this.model = JSON.parse(localStorage.getItem('userOn'));
                  this.alertService.success("Data change with success!!");
                  this.logout();
                  this.alertService.success("Data change with success!!");
                },
                error => {
                  this.editSelected = false;
                })
            },
            error => {
              this.editSelected = false
              this.alertService.error("Wrong Password!");
            }
          )
      }
      else{
        this.alertService.error("You need to put the Password!!");
      }
    }
  }

  logout(){
    this.isAuthenticatedService.logout();
    delete localStorage['token'];
    delete localStorage['userOn'];
    location.reload();
  }
} 