import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'all-in-one';

  constructor( private authService: UsersService){

  }

  ngOnInit(){
    this.authService.autoLoginUser();
  }


}
