import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  @Input() userLogged: User;
  constructor() { }

  ngOnInit() {
  }

}
