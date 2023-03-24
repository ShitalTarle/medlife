// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { CartRoutingModule } from './cart-routing.module';
// import { CartComponent } from './cart.component';


// @NgModule({
//   declarations: [
//     CartComponent
//   ],
//   imports: [
//     CommonModule,
//     CartRoutingModule
//   ]
// })
// export class CartModule { }



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
// import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsComponent } from '../components/booking-details/booking-details.component';
import { ConfirmOrderComponent } from '../components/confirm-order/confirm-order.component';
// import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';


@NgModule({
  declarations: [
    CartComponent,
    BookingDetailsComponent,
    ConfirmOrderComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }