import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  p1: Question = new Question("Task2","Proj2", "user1", "How to 1?");
  p2: Question = new Question("Task7","Proj22", "user5", "How to 2?");
  p3: Question = new Question("Task6","Proj23", "user3", "How to 3?");
  p4: Question = new Question("Task5","Proj253", "user2", "How to 4?");
  p5: Question = new Question("Task3","Proj6", "user1", "How to 5?");
  p6: Question = new Question("Task","Proj4", "user6", "How to 6?");
  questions: Question[] =  [this.p1,this.p2,this.p3,this.p4,this.p5,this.p6];

 
  questionSelected: Question;
  questionIdSelected: number;

  onSelect(q: Question, i: number){
    this.questionSelected = q;
    this.questionIdSelected = i;
  }
  constructor() { 

  }

  ngOnInit() {
  }

}