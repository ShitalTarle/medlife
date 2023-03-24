// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { CartComponent } from './cart.component';

// const routes: Routes = [{ path: '', component: CartComponent }];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CartRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsComponent } from '../components/booking-details/booking-details.component';
import { ConfirmOrderComponent } from '../components/confirm-order/confirm-order.component';
// import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { CartComponent } from './cart.component';
// import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';

const routes: Routes = [
  { path: '', component: CartComponent },
  {path:"booking-details",component:BookingDetailsComponent},
  {path:"confirm-order",component:ConfirmOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
