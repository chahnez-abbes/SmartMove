import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandRoutingModule } from './command-routing.module';
import { CommandComponent } from './command/command.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ArchiveComponent } from './archive/archive.component';
import { AdressComponent } from './adress/adress.component';


@NgModule({
  declarations: [
    CommandComponent,
    InvoiceComponent,
    ArchiveComponent,
    AdressComponent
  ],
  imports: [
    CommonModule,
    CommandRoutingModule
  ]
})
export class CommandModule { }
