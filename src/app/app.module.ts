import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { FormsModule} from '@angular/forms';
import { CountryPipe} from './country/country.pipe';
import {ISOCountry} from './country/ISOCountry.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryPipe,
    ISOCountry
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
