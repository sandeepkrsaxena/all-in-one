import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-quiz',
  templateUrl: './dialog-quiz.component.html',
  styleUrls: ['./dialog-quiz.component.scss']
})
export class DialogQuizComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
