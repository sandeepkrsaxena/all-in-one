import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionAPI = "https://quiz-app-20f5e-default-rtdb.firebaseio.com/questions.json";
  constructor( private http : HttpClient) { }

  getQuestions(){
    return this.http.get(this.questionAPI);
}

}
