import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'questions-detail',
  templateUrl: './questions-detail.component.html',
  styleUrls: ['./questions-detail.component.css']
})
export class QuestionsDetailComponent implements OnInit {
  questionIndex: number;
  que = "aqui pergunta?";
  private subscription: Subscription;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.questionIndex = params['id'];
      });
  }

}
