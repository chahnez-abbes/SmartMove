import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layaout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layaout/auth-admin-layout/auth-admin-layout.component';
import { FrontLayoutComponent } from './layaout/front-layout/front-layout.component';
import { SellerLayoutComponent } from './layaout/seller-layout/seller-layout.component';
import { UserLayoutComponent } from './layaout/user-layout/user-layout.component';

const routes: Routes = [
{
  path:'',
  component: FrontLayoutComponent,
  children:[
    {
      // home
      path:'',
      loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)
    },{
      path:'loginuser',
      loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)
    },{
      path:'shop',
      loadChildren:()=>import('./views/front/shop/shop.module').then(m=>m.ShopModule)
    },{
      path:'contact',
      loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)
    },{
      path:'cart',
      loadChildren:()=>import('./views/front/cart/cart.module').then(m=>m.CartModule)
    },{
      path:'signup',
      loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)
    },{
      path:'details/:id',
      loadChildren:()=>import('./views/front/details/details.module').then(m=>m.DetailsModule)
    }
  ]
},
{
  path: 'admin',
  component: AdminLayoutComponent,
  children:[
    {
      path:'',
      loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)
    },
    {
      path:'dashboard',
      loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)
    },
    {
      path:'loginadmin',
      loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)
    },
    {
      path:'allproducts',
      loadChildren:()=>import('./views/admin/products/products.module').then(m=>m.ProductsModule)
    },
    {
      path:'allusers',
      loadChildren:()=>import('./views/admin/users/users.module').then(m=>m.UsersModule)
    },
    {
      path:'command',
      loadChildren:()=>import('./views/admin/command/command.module').then(m=>m.CommandModule)
    },
    {
      path:'messages',
      loadChildren:()=>import('./views/admin/messages/messages.module').then(m=>m.MessagesModule)
    },
    {
      path:'notification',
      loadChildren:()=>import('./views/admin/notification/notification/notification.module').then(m=>m.NotificationModule)
    }
  ]
},
{
  path:'user',
  component: UserLayoutComponent
},
{
  path:'seller',
  component: SellerLayoutComponent
  
},{
 path:'admin/login',
 component : AuthAdminLayoutComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
