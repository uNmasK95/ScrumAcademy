import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('teamUser')).job);
    console.log(localStorage.getItem('projectOn'));
  }

}
