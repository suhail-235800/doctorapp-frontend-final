import { RatereviwComponent } from './ratereviw/ratereviw.component';
import { AdminhomrComponent } from './adminhomr/adminhomr.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RatingComponent } from './rating/rating.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { ServicesComponent } from './services/services.component';
import { MyappointmentsComponent } from './myappointments/myappointments.component';
import { MyratingsComponent } from './myratings/myratings.component';

const routes: Routes = [
  {path:'',redirectTo:'/landing',pathMatch:'full'},
  { path: 'userhome', component: UserhomeComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adminhome', component: AdminhomrComponent },
  { path: 'ratereview', component: RatereviwComponent },
  { path: 'myappointment', component: MyappointmentsComponent},
  { path: 'myratings', component: MyratingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
