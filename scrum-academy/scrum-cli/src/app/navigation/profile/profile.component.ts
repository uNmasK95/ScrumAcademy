import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  userLogged: User = new User('Rafael','motarafa@hotmail.com','pass');
  editSelected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  edit(){
    this.editSelected = true;
  }

}
