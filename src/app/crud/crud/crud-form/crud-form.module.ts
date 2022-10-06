import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from '../../crud.component';
import { CurdRoutingModule } from './curd-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CurdRoutingModule,
    RouterModule
  ],
})
export class CrudFormModule { }
