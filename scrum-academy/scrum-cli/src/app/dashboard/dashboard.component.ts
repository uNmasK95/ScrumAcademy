import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

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
    return localStorage['type'];
  }
}
