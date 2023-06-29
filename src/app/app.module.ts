import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminbodyComponent } from './adminbody/adminbody.component';
import { AdminhomrComponent } from './adminhomr/adminhomr.component';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MyappointmentsComponent } from './myappointments/myappointments.component';
import { MyratingsComponent } from './myratings/myratings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { RatereviwComponent } from './ratereviw/ratereviw.component';
import { RatingComponent } from './rating/rating.component';
import { RatingbodyComponent } from './ratingbody/ratingbody.component';
import { RegisterComponent } from './register/register.component';

import { ServicesComponent } from './services/services.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';
import { UserbodyComponent } from './userbody/userbody.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    AppComponent,

    AboutusComponent,
    AdminbodyComponent,
    AdminhomrComponent,
  
    LandingComponent,
    LoginComponent,
    MyappointmentsComponent,
    MyratingsComponent,
    NavbarComponent,
    NavbaradminComponent,
    RatereviwComponent,
    RatingComponent,
    RatingbodyComponent,
    RegisterComponent,
  
    ServicesComponent,
    SidebarComponent,
    SidebaradminComponent,
    UserbodyComponent,
    UserhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot()
 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
