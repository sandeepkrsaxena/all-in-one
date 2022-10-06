import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-quiz-app',
  templateUrl: './quiz-app.component.html',
  styleUrls: ['./quiz-app.component.scss']
})
export class QuizAppComponent implements OnInit {

  userName: string = "";
  questionList: any = [];
  options: any = [];
  currentQuestion: number = 0;
  disabled: boolean = false;
  score: number = 0;
  currectAnswer: number = 0;
  inCurrectAnswer: number = 0;
  quizIsCompleted: boolean = false;

  constructor(private questionservice: QuestionService) { }

  ngOnInit(): void {
     this.userName = localStorage.getItem("userName")!; 
    this.questionservice.getQuestions().subscribe(
      res => {
        this.questionList = res;
        this.options = res;
      }
    )
  }

  nextQuestion(){
      this.currentQuestion++;
  }
  previusQuestion(){

      this.currentQuestion--;
  }

  answer(currentQno: number, opt: any){
    if(currentQno === this.questionList.length){
      this.quizIsCompleted = true;
    }
    if(opt.correct){
      this.score += 10;
      this.currentQuestion++;
      this.currectAnswer++;
    }
    else{
      this.score -= 10;
      this.currentQuestion++;
      this.inCurrectAnswer--;

    }

  }

}
