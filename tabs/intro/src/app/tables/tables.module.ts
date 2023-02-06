import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesHomeComponent } from './tables-home/tables-home.component';


@NgModule({
  declarations: [
    TablesHomeComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
