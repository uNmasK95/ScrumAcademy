import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from "app/services/user.service";
import { AlertService } from "app/services/alert.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  model :any = {};
  userLogged: User;
  editSelected: boolean = false;

  constructor(private userService: UserService,private alertService: AlertService) { }

  ngOnInit() {
    this.userLogged = JSON.parse(localStorage.getItem('userOn'));
    this.model = JSON.parse(localStorage.getItem('userOn'));
  }

  edit(){
    this.editSelected = true;
    if(this.userLogged.name != this.model.name){
      if(this.model.password && this.model.newpassword == this.model.newconfpassword){
        /*
        this.userService.userconfirm(this.model.email,this.model.password).subscribe(
          resultado => {
            this.userService.update(this.model.nome,this.model.newpassword).subscribe(
              resultado => {
                this.userLogged.name = this.model.name;
                localStorage.setItem('userOn',JSON.stringify(this.userLogged));
                this.model = JSON.parse(localStorage.getItem('userOn'));
                this.alertService.error("Campos Alerados com sucesso");
              },
              error => {
                this.editSelected = false;
                console.log(error);
              })
          },
          error => {
            this.alertService.error("Password Errada!");
          }
        )*/
        
      }
      else{
        //mandar pedido alterar apenas o nome
        /*
        this.userService.updateName(this.model.nome).subscribe(
          resultado =>{
            this.userLogged.name = this.model.name;
            localStorage.setItem('userOn',JSON.stringify(this.userLogged));
            this.model = JSON.parse(localStorage.getItem('userOn'));
            this.alertService.error("Campos Alerados com sucesso");
          },
          error => {
            this.editSelected = false;
            console.log(error);
          }
        );*/
      }
    }
    /*
    if(this.model.password && this.model.newpassword == this.model.newconfpassword){
      this.userService.userconfirm(this.model.email,this.model.password).subscribe(
          resultado => {
            this.userService.update(this.model.nome,this.model.newpassword).subscribe(
              resultado => {
                this.userLogged.name = this.model.name;
                localStorage.setItem('userOn',JSON.stringify(this.userLogged));
                this.model = JSON.parse(localStorage.getItem('userOn'));
                this.alertService.error("Campos Alerados com sucesso");
              },
              error => {
                this.editSelected = false;
                console.log(error);
              })
          },
          error => {
            this.alertService.error("Password Errada!");
          }
        )
    }*/
  }

} 