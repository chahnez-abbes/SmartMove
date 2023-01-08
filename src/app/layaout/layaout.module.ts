import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { SellerLayoutComponent } from './seller-layout/seller-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthAdminLayoutComponent } from './auth-admin-layout/auth-admin-layout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FrontLayoutComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    SellerLayoutComponent,
    AuthAdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LayaoutModule { }
