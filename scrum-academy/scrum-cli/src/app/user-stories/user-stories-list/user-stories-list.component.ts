import { Component, OnInit } from '@angular/core';
import { UserStorie } from '../userstorie';

@Component({
  selector: 'user-stories-list',
  templateUrl: './user-stories-list.component.html'
})
export class UserStoriesListComponent implements OnInit {

  u1: UserStorie = new UserStorie("UserStorie 1",10);
  u2: UserStorie = new UserStorie("UserStorie 2",20);
  u3: UserStorie = new UserStorie("UserStorie 3",30);
  userStories: UserStorie[] =  [this.u1,this.u2,this.u3];

 
  userStorieSelected: UserStorie;
  userStorieIdSelected: number;

  onSelect(us: UserStorie, i: number){
    this.userStorieSelected = us;
    this.userStorieIdSelected = i;
  }

  ngOnInit() {
  }

}
