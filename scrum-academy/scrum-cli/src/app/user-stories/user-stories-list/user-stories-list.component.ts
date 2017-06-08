import { Component, OnInit } from '@angular/core';
import { UserStorie } from '../userstorie';
import { UserStorieService } from "app/services/userstorie.service";

@Component({
  selector: 'user-stories-list',
  templateUrl: './user-stories-list.component.html'
})
export class UserStoriesListComponent implements OnInit {

  userStories: UserStorie[];

  projectIdSelected : number;
  userStorieSelected: UserStorie;
  userStorieIdSelected: number;

  constructor(private userStorieService: UserStorieService) { }

  onSelect(us: UserStorie){
    this.userStorieSelected = us;
    this.userStorieIdSelected = us.id;
  }

  // ao iniciar vai buscar todos as userstories daquele projecto
  ngOnInit() {
    this.projectIdSelected = +localStorage.getItem('projectId');
    this.userStorieService.getFeatures(this.projectIdSelected).subscribe(
      response =>{
        this.userStories=response;
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    );
  }




}
