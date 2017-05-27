import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { Question } from '../question';

@Component({
  selector: 'questions-detail',
  templateUrl: './questions-detail.component.html',
  styleUrls: ['./questions-detail.component.css']
})
export class QuestionsDetailComponent implements OnInit {
  private subscription: Subscription;

  //
  @Input() question: Question;
  @Input() questionId: number;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    /*this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.questionIndex = params['id'];
      });*/
  }

}
