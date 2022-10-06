import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.scss']
})
export class DataDetailsComponent implements OnInit {
  userid: any;
  uniqueUser: any = [];
  constructor(private activatedRoute: ActivatedRoute, private postservice: CrudService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.userid = params.get("userId")
        this.loadUniqueData(this.userid);

      }
    )
  }

  
  loadUniqueData(userid: any){
  this.postservice.getUniqueUser(userid).subscribe(
    res => {
      this.uniqueUser = res;
    }
  )
    
  }

  

}
