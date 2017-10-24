import { Directive, Input, ElementRef } from '@angular/core';
import { answeredQuestion } from '../../models/answeredQuestion.model';

@Directive({
  selector: '[appMarkAnswer]'
})
export class MarkAnswerDirective {
  @Input() answeredQuestion: answeredQuestion;

  constructor(private _el: ElementRef) { }

  ngOnInit() {
    if (this.answeredQuestion.question.correctAnswer === this.answeredQuestion.selectedAnswer) {
      this._el.nativeElement.style.color = '#0BCF55';
    } else {
      this._el.nativeElement.style.color = '#EB4F4F';
    }
  }

}
