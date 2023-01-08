import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';

import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    ProductsComponent,
    AddproductComponent,
    UpdateproductComponent,
    DeleteproductComponent,
   
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
   
  ]
})
export class ProductsModule { }
