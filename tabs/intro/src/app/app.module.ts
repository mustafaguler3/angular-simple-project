import { TablesModule } from './tables/tables.module';
import { PlaceholdersModule } from './placeholders/placeholders.module';
import { PlaceholdersHomeComponent } from './placeholders/placeholders-home/placeholders-home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaceholdersModule,
    TablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
