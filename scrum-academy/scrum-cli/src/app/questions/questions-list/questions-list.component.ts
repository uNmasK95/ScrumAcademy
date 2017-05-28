import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { DoubtsService } from "app/services/doubts.service";

@Component({
  selector: 'questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  //p1: Question = new Question("Task2","Proj2", "user1", "How to 1?");
  questions: Question[] =  [];

  userId: number;
  questionSelected: Question;
  questionIdSelected: number;
  model : any = {};

  onSelect(q: Question, i: number){
    this.questionSelected = q;
    this.questionIdSelected = i;
  }
  constructor(private doubtsService:DoubtsService) { 
  }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('userOn')).id;
    this.doubtsService.getByUser(this.userId).subscribe(
      resultado =>{
        for(let doubts of resultado){
          if(!doubts.answer){
            console.log(doubts);
            let doubt = new Question(doubts.id,doubts.description,doubts.user.name,doubts.answer);
            this.questions.push(doubt);
          }
        }
      }, 
      error =>{
        console.log(error);
      }
    );
  }
  answerDoubt(){
    if(this.model.answer){
      this.doubtsService.updateAnswer(this.questionSelected.id,this.model.answer).subscribe(
        resultado =>{
          console.log("esta");
          this.questions.splice(this.questionIdSelected,1);
        },
        error =>{
          console.log(error);
        }
      );
    }
  }

}