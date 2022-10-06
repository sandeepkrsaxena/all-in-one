import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Customer } from './customer.module';
import {MatDialog} from '@angular/material/dialog';
import { DialogcontentComponent } from './dialogcontent/dialogcontent.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactusComponent implements OnInit {

  contactus = new FormGroup({
    firstname: new FormControl('',[Validators.required, this.spaceNotAllowed]),
    email: new FormControl('', [Validators.required, Validators.email,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
   mobile: new FormControl('', [Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.minLength(10), Validators.maxLength(10)])
  })

  get firstname(){
    return this.contactus.get("firstname");
  }

  get email(){
    return this.contactus.get("email");
  }

  get mobile(){
    return this.contactus.get("mobile");
  }


  spaceNotAllowed(control: AbstractControl):{[key: string]: boolean} | null{
    if((control.value as string).indexOf(" ") > 0) {
      return {spaceNotAllowed: true}
    }
    return null

  }

  constructor(private userService: UsersService,
    public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  contactUsForm(customer: Customer){
    this.userService.postCustomersData(customer).subscribe(
    (Response) => {
      console.log(Response)}
  )
    this.contactus.reset()

    this.dialog.open(DialogcontentComponent);
  
}

}
