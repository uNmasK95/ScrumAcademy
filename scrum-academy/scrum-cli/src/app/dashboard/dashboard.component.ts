import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService) { 
      this.userService.getById(+localStorage.getItem('id')).subscribe(
        resultado => {
          console.log(resultado);
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit() {
  }

  isLogged(){
    //console.log("das:" + localStorage['token']);
    if(localStorage['currentUser']){
      return true;
    }
    return false;
  }

  getType(){ //estas funcoes se calhar vao pra um service que faça sempre isto que for preciso
    /*this.userService.getType().subscribe(
                resultado => {
                   console.log(resultado)
                });*/
    /*console.log(this.userService.getType());
    console.log("crl fodasse");*/
    return localStorage['type'];
  }
}
