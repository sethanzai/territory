import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { AddressDetailsComponent } from './address-details/address-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AddressDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
