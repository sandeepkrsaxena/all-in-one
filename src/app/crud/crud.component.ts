import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from './crud.service';
import { USER_DATA } from './userinterface.module';

console.log("Lazy module is loading...")

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})

export class CrudComponent implements OnInit {
  
  postSuccess: boolean = false;
  errorMessage: string = "";
  getUserData: any = [];
  dataLoadMode: boolean = false;
  noData: boolean = false;
  editMode: boolean = false;
  editUserId: any;

  constructor(private postService: CrudService) { 
  }

  ngOnInit(): void {
    this.dataList()
    
  }
  userPostDetails = new FormGroup({
  
    name: new FormControl("", [Validators.required]),
    profile: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required])

  })

  usersPostDetailsSumit(formData: USER_DATA){
    if(this.editMode){
      this.postService.editUserData(this.editUserId, formData).subscribe(
        resData => {
          console.log(resData);
          this.dataList()
        }
      )
      this.userPostDetails.reset() 
    }
    else{
      this.postService.userPostData(formData).subscribe(
        res => {
          this.postSuccess = true
          setTimeout(() => {
            this.postSuccess = false;
  
          },3000)
          this.dataList()
  
        },
        error => {
          this.errorMessage = error;
          console.log(error)
  
        }
      )
      this.userPostDetails.reset() 
      
    }
   
  }

  dataList(){
    this.dataLoadMode = true;
    this.postService.getUserData().subscribe(
      userData => {
       this.getUserData = userData;
       this.dataLoadMode = false;
       if(userData.length === 0){
        this.noData = true;
       }
       else{
        this.noData = false
       }
      }
      
    )
    
  }

  removeData(userID: any){
    this.postService.removeUser(userID).subscribe(
      resposDATA => {
        console.log(resposDATA)
        this.dataList()

      }
    )

  }

  updateUser(getUserId: any, index: any){
    this.editUserId = getUserId;
    this.editMode = true;
    this.userPostDetails.setValue({
      name:this.getUserData[index].name,
      profile:this.getUserData[index].profile,
      city:this.getUserData[index].city,
      address:this.getUserData[index].address,

    })

  }


}

