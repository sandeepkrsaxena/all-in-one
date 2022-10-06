import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { LoginErrorhandlingService } from './login-errorhandling.service';
import { NewUser } from './newuser.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginMode: boolean = true;
  errorMessage: any;
  errorMode: boolean = false;
  globalErrMessage = this.globalErroService.globalErrorMessage;

  login = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
    ])
  })
  
  constructor(private loginServive: UsersService, private route: Router, private globalErroService: LoginErrorhandlingService) { }

  ngOnInit(): void {}

  loginForm(userLogin: NewUser){
    if(!this.loginMode){
      this.loginServive.userSignUp(userLogin).subscribe(
        (Response) => {
          console.log(Response);
          this.route.navigate(["/dashboard"]);
        },
        (Error) => {
          this.errorMode = true;
          this.errorMessage = this.globalErrMessage[Error.error.error.message];
        }
      )
      this.login.reset()
    }

    else{
      this.loginServive.userLogin(userLogin).subscribe(
        (Response) => {
          console.log(Response);
          this.route.navigate(["/dashboard"]);
        }
        ,
        (Error) => {
          this.errorMode = true;
          this.errorMessage = this.globalErrMessage[Error.error.error.message];
        }
      )
      this.login.reset()

    }
    
  }

  get e(){
    return this.login.get("email")
  }
  
  get p(){
    return this.login.get("password")
  }

  onSwitchMode(){
    this.loginMode = !this.loginMode;
  }

}
