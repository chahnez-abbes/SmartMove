import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressComponent } from './adress/adress.component';
import { ArchiveComponent } from './archive/archive.component';
import { CommandComponent } from './command/command.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {
    path:'',
    component: CommandComponent
  }, {
    path:'invoice',
    component: InvoiceComponent
  }, {
    path:'archive',
    component: ArchiveComponent
  }, {
    path:'adress',
    component: AdressComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandRoutingModule { }
