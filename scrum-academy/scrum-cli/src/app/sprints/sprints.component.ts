import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem('teamUser'));
  }

}
