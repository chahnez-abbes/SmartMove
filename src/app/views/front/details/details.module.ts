import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    FormsModule,
    DatePipe
  ]
})
export class DetailsModule { }
