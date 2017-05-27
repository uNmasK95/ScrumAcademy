import { Component, OnInit, Input } from '@angular/core';
import { UserStorieUser } from "app/models/userStorieUser";
import { SprintService } from "app/services/sprint.service";
import { Sprint } from "app/sprints/sprint";

@Component({
  selector: 'user-stories-dashboard-list',
  templateUrl: './user-stories-dashboard-list.component.html',
  styleUrls: ['./user-stories-dashboard-list.component.css']
})
export class UserStoriesDashboardListComponent implements OnInit {

  @Input() projectId: number;
  
  public userstories: UserStorieUser[] = []; 
  public sprintNow: Sprint = new Sprint(0,"",new Date(),new Date());

  constructor(private sprintService: SprintService) { }

  ngOnInit() {
    let dateNow: Date = new Date();
    console.log(dateNow);
    this.sprintService.get(this.projectId)
      .subscribe(
        resultado => {
          for(let sprint of resultado){ //Percorrer sprints
            if(dateNow > new Date(sprint.startDate) && dateNow < new Date(sprint.endDate)){ //Tou nesta sprint
              this.sprintNow = new Sprint(sprint.id, sprint.description,new Date(sprint.startDate),new Date(sprint.endDate));
              for(let ustorie of sprint.userstorie){ //Guardar as US da sprint atual
                let userStorie: UserStorieUser = new UserStorieUser(ustorie.id,ustorie.description,
                  ustorie.priority,ustorie.score);
                this.userstories.push(userStorie);
                console.log("Fiz push da userStorie:");
                console.log(userStorie);
              }
            }
        }
        });
  }

}
