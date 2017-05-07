import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-stories-edit',
  templateUrl: './user-stories-edit.component.html',
  styleUrls: ['./user-stories-edit.component.css']
})
export class UserStoriesEditComponent implements OnInit {

  @Input() userStorieId: number;
  
  constructor() { }

  ngOnInit() {
  }

}
