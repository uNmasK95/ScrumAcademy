import { Component, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'questions-item',
  templateUrl: './questions-item.component.html'
})
export class QuestionsItemComponent {
  @Input() question: Question;
  @Input() questionId: number;

}
