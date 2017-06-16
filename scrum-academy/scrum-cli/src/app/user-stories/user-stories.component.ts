import { Component, OnInit, Input } from '@angular/core';
import { Project } from "app/dashboard/project/project";

@Component({
  selector: 'user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.css']
})
export class UserStoriesComponent implements OnInit {
  
  @Input() projectID : Project;

  constructor() { 
  }

  ngOnInit() {
  }

}
