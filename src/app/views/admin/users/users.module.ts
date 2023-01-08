import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    UsersComponent,
    AdduserComponent,
    DeleteuserComponent,
    UpdateuserComponent,
 
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
    
  ]
})
export class UsersModule { }
