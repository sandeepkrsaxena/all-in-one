import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from '../../crud.component';
import { DataDetailsComponent } from '../../data-details/data-details.component';

const routes: Routes = [
  {path:"", component:CrudComponent},
  {path:":userId", component:DataDetailsComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CurdRoutingModule { }
