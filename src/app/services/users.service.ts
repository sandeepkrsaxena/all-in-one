import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../contactus/customer.module';
import { AuthResponse, NewUser } from '../login/newuser.module';
import { Subject, tap } from 'rxjs';
import { UsermoduleModule } from '../login/usermodule.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userSubject = new Subject<UsermoduleModule>();

  usersListAPI = "https://jsonplaceholder.typicode.com/users";
  customersPostAPI = "https://all-in-one-12153-default-rtdb.firebaseio.com/users.json"
  constructor(private http: HttpClient) { }
  
  getUsers(id?: any){
    let loadDetails: any = {};
    if(id){
     loadDetails['id'] = id;
    }
   return this.http.get(this.usersListAPI, {
     params: loadDetails
   });
  }

  postCustomersData(customers: Customer){
    return this.http.post(this.customersPostAPI, customers)

  }

  userSignUp(userSignup: NewUser){
   return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDaxidp83uUDFCaeEEL6W91rorQQ2eAo0U", userSignup)
   .pipe(tap(
    (res) => (
      this.userAuthentication(res.email, res.idToken, res.localId, +res.expiresIn)
    )
  )
)
  }

  userLogin(userLogin: NewUser){
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDaxidp83uUDFCaeEEL6W91rorQQ2eAo0U", userLogin)
    .pipe(tap(
      (res) => (
        this.userAuthentication(res.email, res.idToken, res.localId, +res.expiresIn)
      )
    )
  )
  }

   userAuthentication(email: string, userId:any, token: string, expiresIn: any){
     const expireInDate = new Date(new Date().getTime() +expiresIn*1000)
     const newUser = new UsermoduleModule(email, userId, token, expireInDate);
     this.userSubject.next(newUser);
     localStorage.setItem("userlogin", JSON.stringify(newUser))
  }

  autoLoginUser(){
    const localUserLogin = JSON.parse(localStorage.getItem('userlogin') || "{}");
    if(!localUserLogin){
      return;
    }
    const newUserObj = new UsermoduleModule(localUserLogin.id, localUserLogin.email, localUserLogin._token, new Date(localUserLogin._tokenExpirationDate));
    if(newUserObj.token){
      this.userSubject.next(newUserObj);
    }
    
  }


}



