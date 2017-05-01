import { Component, Input } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'teams-item',
  templateUrl: './teams-item.component.html',
  styleUrls: ['./teams-item.component.css']
})
export class TeamsItemComponent  {
  @Input() team: Team;
  @Input() teamId: number;

}
