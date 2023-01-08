import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPrintModule } from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayaoutModule } from './layaout/layaout.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayaoutModule,
    Ng2SearchPipeModule,
    NgxPrintModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
