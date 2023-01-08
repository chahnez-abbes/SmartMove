import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';

import { ProductsComponent } from './products/products.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {
    path:'',
    component: ProductsComponent
  },{
    path:'addproduct',
    component: AddproductComponent
  },{
    path:'deleteproduct',
    component: DeleteproductComponent
  },{
    path:'updateproduct',
    component: UpdateproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
