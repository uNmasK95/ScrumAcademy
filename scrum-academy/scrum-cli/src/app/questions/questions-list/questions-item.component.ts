import { Component, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'questions-item',
  templateUrl: './questions-item.component.html',
  styleUrls: ['./questions-item.component.css']
})
export class QuestionsItemComponent {
  @Input() question: Question;
  @Input() questionId: number;

}
