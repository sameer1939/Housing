import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PropertyListComponent,
    PropertyCardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
