import { Component, OnInit, Input } from '@angular/core';
import { Sprint } from "app/sprints/sprint";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'sprints-item',
  templateUrl: './sprints-item.component.html',
  styleUrls: ['./sprints-item.component.css']
})
export class SprintsItemComponent implements OnInit {
  
  @Input() sprint: Sprint;
  @Input() sprintId: number;

  projectId : number;
  constructor(private route: ActivatedRoute){
	}

  ngOnInit() {
    this.route
        .params
        .subscribe(params => {
            this.projectId = params['id'];
    });
  }

  onSelect(){
    localStorage.setItem('springOn',JSON.stringify(this.sprint));
  }


}
