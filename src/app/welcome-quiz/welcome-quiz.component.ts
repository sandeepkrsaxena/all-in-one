import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogQuizComponent } from '../quiz-app/dialog-quiz/dialog-quiz.component';
@Component({
  selector: 'app-welcome-quiz',
  templateUrl: './welcome-quiz.component.html',
  styles: [
  ]
})
export class WelcomeQuizComponent implements OnInit {
  name: string = "";
  constructor( private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  welcomeQuizPopup(){
    if(localStorage.getItem("userName")){
      this.router.navigate(["/quiz-test"]);
    }
    else{
      const modelDialog = this.dialog.open(DialogQuizComponent, {
        data: this.name,
        disableClose: true
      });
  
      modelDialog.afterClosed().subscribe(
        response => {
          this.name = response;
          localStorage.setItem("userName", this.name);
          this.router.navigate(["/quiz-test"])
  
        }
      )

    }
   

  }

}
