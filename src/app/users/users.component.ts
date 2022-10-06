import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  nameSearch: any = "";
  users: any = [];

  constructor(private userListService: UsersService) { }

  ngOnInit(): void {
    this.userListService.getUsers().subscribe(
      (Response) => {
        this.users = Response;
      }
    )
 
  }

}
