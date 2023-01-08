import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';

import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    component: UsersComponent
  }, {
    path:'deleteuser',
    component: DeleteuserComponent
  }, {
    path:'updateuser',
    component: UpdateuserComponent
  },{
    path:'adduser',
    component: AdduserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
