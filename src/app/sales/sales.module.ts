import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrimeNgModule} from "../prime-ng/prime-ng.module";

import {NumbersComponent} from './pages/numbers/numbers.component';
import {NoCommonsComponent} from './pages/no-commons/no-commons.component';
import {BasicsComponent} from './pages/basics/basics.component';
import {OrderComponent} from './pages/order/order.component';

import {UpperPipe} from "./pipes/upper.pipe";
import { FliesPipe } from './pipes/flies.pipe';
import { OrderPipe } from './pipes/order.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent,
    UpperPipe,
    FliesPipe,
    OrderPipe
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule {
}
