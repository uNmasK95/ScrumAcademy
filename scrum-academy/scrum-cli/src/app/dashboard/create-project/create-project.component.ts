import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  projCreated: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.projCreated=true;
  }
}
