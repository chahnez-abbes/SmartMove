import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ShopModule { }
