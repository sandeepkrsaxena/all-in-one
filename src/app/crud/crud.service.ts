import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { USER_DATA } from './userinterface.module';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  postAPI = "https://capgemini-48e11-default-rtdb.europe-west1.firebasedatabase.app/userpostAPI.json";
  constructor(private http: HttpClient) { }
  userPostData(userData: USER_DATA){
   return this.http.post(this.postAPI, userData).pipe(catchError(this.errorHander))
   }

   errorHander(err: HttpErrorResponse){
    return throwError(err.message || 'server Error');

   }

   getUserData(){
    return this.http.get<any>(this.postAPI).pipe(map((datachange) => {
      const newuserArray: any = [];
      for(let key in datachange){
        newuserArray.splice(0, 0, {userId: key, ...datachange[key]})
      }
      return newuserArray;
    }))
   }

   removeUser(userID: any){
    return this.http.delete(`https://capgemini-48e11-default-rtdb.europe-west1.firebasedatabase.app/userpostAPI/${userID}.json`)

   }

   getUniqueUser(id: any){
    return this.http.get(`https://capgemini-48e11-default-rtdb.europe-west1.firebasedatabase.app/userpostAPI/${id}.json`)

   }

   editUserData(userId: any, userData: USER_DATA){
    return this.http.put(`https://capgemini-48e11-default-rtdb.europe-west1.firebasedatabase.app/userpostAPI/${userId}.json`, userData)

   }




}
