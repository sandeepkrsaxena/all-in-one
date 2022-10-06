import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  

  constructor(private http: HttpClient) { }
  userID: number | undefined;

  

  ngOnInit(): void {
    this.getData().subscribe(
      (res: any) => {
        console.log(res)
      }
    )
  }


  getData(){
    const httpheaders = new HttpHeaders({
      "content-type" : "applicatio/json",
      "auth" : "sandeep"
    })
   return this.http.get<any>("https://jsonplaceholder.typicode.com/users", {
    headers: httpheaders
  }).pipe(map( dataValue => {
     const newArray:any = [];
     for(let key in dataValue){
        newArray.push({userID:parseInt(key), ...dataValue[key]})
     }
     return newArray;
   }))
  }
}
