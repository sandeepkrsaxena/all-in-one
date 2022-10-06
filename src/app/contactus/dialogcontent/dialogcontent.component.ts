import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialogcontent',
  templateUrl: './dialogcontent.component.html',
  styleUrls: ['./dialogcontent.component.scss']
})
export class DialogcontentComponent implements OnInit {


  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

}
