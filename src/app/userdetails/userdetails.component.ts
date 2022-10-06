import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  userID: any = '';
  uniqueUser: any = [];
  loader:boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private userlistservice: UsersService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.userID += params.get('id');
        this.loadUniqueFunc(this.userID)
      }
    )
  }

  loadUniqueFunc(userID: any){
    this.loader = true;
    this.userlistservice.getUsers(userID).subscribe(
      (Response: any) => {
        this.uniqueUser = Response[0];
        console.log(Response)
        this.loader = false;
      })
  }


}

