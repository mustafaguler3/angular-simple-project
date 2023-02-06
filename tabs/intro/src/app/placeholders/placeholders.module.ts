import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';


@NgModule({
  declarations: [
    PlaceholdersHomeComponent
  ],
  imports: [
    CommonModule,
    PlaceholdersRoutingModule
  ],
  exports:[
    PlaceholdersHomeComponent
  ]
})
export class PlaceholdersModule { }
