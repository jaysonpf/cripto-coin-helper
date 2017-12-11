import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BitcoinStatusComponent } from './bitcoin-status/bitcoin-status.component';
import { BitcoinStatusService}  from './bitcoin-status.service';

@NgModule({
  declarations: [
    AppComponent,
    BitcoinStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ BitcoinStatusService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
