import { Component, Input } from '@angular/core';
import { Request } from "../request";
import { RequestsService } from "app/services/requests.service";

@Component({
  selector: 'teams-item',
  templateUrl: './teams-item.component.html',
  styleUrls: ['./teams-item.component.css']
})
export class TeamsItemComponent  {
  @Input() request: Request;
  //@Input() requestId: number;

  constructor(
    private requestsService: RequestsService
  ) { }

  decision(dec: boolean){
    if(dec==true){
      this.requestsService.update(this.request.id,this.request.teamId, this.request.projectId, dec)
        .subscribe();
    }else{
      this.requestsService.remove(this.request.id)
        .subscribe();
    }
  }

}
