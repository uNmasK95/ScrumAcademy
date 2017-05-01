import { Component, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'questions-item',
  templateUrl: './questions-item.component.html'
})
export class QuestionsItemComponent {
  @Input() question: Question;
  @Input() questionId: number;

  @Input() answare: boolean = false;

  changeA(){
    if(this.answare==true){
      this.answare=false;
    }else{
      this.answare=true;
    }
    console.log("ficou:"+this.answare);
  }
}
