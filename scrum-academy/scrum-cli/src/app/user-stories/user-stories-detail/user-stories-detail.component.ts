import { Component, OnInit, Input } from '@angular/core';
import { UserStorie } from '../userstorie';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'user-stories-detail',
  templateUrl: './user-stories-detail.component.html',
  styleUrls: ['./user-stories-detail.component.css']
})
export class UserStoriesDetailComponent implements OnInit {
  private subscription: Subscription;

  //
  @Input() userStorie: UserStorie;
  @Input() userStorieId: number;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
