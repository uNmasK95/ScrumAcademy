import { Component, Input } from '@angular/core';
import { Request } from "../request";

@Component({
  selector: 'teams-item',
  templateUrl: './teams-item.component.html',
  styleUrls: ['./teams-item.component.css']
})
export class TeamsItemComponent  {
  @Input() request: Request;
  @Input() requestId: number;
}
