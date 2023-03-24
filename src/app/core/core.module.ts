// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FooterComponent } from './components/footer/footer.component';
// import { HeaderComponent } from './components/header/header.component';
// import { SignInComponent } from './components/sign-in/sign-in.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component';



// @NgModule({
//   declarations: [
//     FooterComponent,
//     HeaderComponent,
//     SignInComponent,
//     SignUpComponent,

//   ],
//   imports: [
//     CommonModule
//   ],
//   exports:[
//     HeaderComponent,
//     FooterComponent,
//   ]
// })
// export class CoreModule { }





import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
//  import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { TopDealsHeaderComponent } from './components/top-deals-header/top-deals-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    SignInComponent,
    SignUpComponent,
    TopDealsHeaderComponent,
    // RouterModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }