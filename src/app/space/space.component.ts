import { Component, OnInit } from '@angular/core';
import { Space } from '../space.model';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  testSpace: Space[] = [];
  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  result = false;

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.testSpace = this.spaceService.getQuestions();

  }
  onAnswer(option: boolean) {
    console.log(option);
    this.answerSelected = true;
    setTimeout(() => {
      this.currentQuiz++;

      this.answerSelected = false;
    }, 1500);

    if (option) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }

  }
  showResult() {
    this.result = true;
  }
}
