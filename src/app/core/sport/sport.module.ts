import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportRoutingModule } from './sport-routing.module';
import { ListjoueursComponent } from './listjoueurs/listjoueurs.component';


@NgModule({
  declarations: [
    ListjoueursComponent
  ],
  imports: [
    CommonModule,
    SportRoutingModule
  ]
})
export class SportModule { }
