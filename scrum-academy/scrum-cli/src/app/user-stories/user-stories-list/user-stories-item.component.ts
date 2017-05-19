import { Component, OnInit, Input } from '@angular/core';
import { UserStorie } from '../userstorie';

@Component({
  selector: 'user-stories-item',
  templateUrl: './user-stories-item.component.html',
  styleUrls: ['./user-stories-item.component.css']
})
export class UserStoriesItemComponent  {
  @Input() userStorie: UserStorie;
  @Input() userStorieId: number;
}
