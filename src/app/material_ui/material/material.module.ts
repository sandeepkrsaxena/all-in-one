import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule
  ]
})
export class MaterialModule { }
