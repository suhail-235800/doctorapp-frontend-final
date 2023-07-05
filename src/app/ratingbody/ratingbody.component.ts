import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Appointment } from '../domain/Appointment';
import { Rating } from '../domain/Rating';
import { RatingRequest } from '../domain/RatingRequest';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-ratingbody',
  templateUrl: './ratingbody.component.html',
  styleUrls: ['./ratingbody.component.css']
})
export class RatingbodyComponent {

  appointments: any;
  userId: number=0;
  doctorName: string='';
  appointment:Appointment = new Appointment();
  searchDoctorName: string='';

  successMessage: string='';
  errorMessage: string='';

  ratings:any;
  rating:Rating = new Rating();
  ratingrequest:RatingRequest = new RatingRequest();
  reviewText:string='';
  ratedAppointments: boolean[] = [];

  constructor(private service: ServiceService,private alertConfig: AlertConfig,private router: Router) {
    this.alertConfig.dismissible = true;
   }

  ngOnInit(): void {

    this.service.getAppointmentByUserId(this.userId).subscribe(response => {
      console.log("1");
      this.appointments = response;
      this.ratedAppointments = new Array(this.appointments.length).fill(false);
    });
  }
  
  searchDoctors() {
    this.service.getAppointmentByDoctorName(this.searchDoctorName).subscribe(response => {
      this.appointments = response;
    },
    error => {
      console.error(error);
      this.successMessage = ''; 
      this.errorMessage = 'No Doctors found'; 
    });
  }
  
  show: boolean[] = [];
  selectedAppointmentIndex: number[] = [];
  selectedRating: number[] = [];
  
  clickopenpopup(index: number) {
    this.selectedAppointmentIndex[index] = index;
    this.show[index] = true;
    this.selectedRating[index] = 5;
    
  }
  
  closepopup(index: number) {
    this.selectedAppointmentIndex[index] = -1;
    this.ratedAppointments[index] = true;
  }

  submitrating(appointment: any,i:number) {
    // Access the rating value and review text from the rating object
    console.log(this.selectedRating);
    console.log(this.reviewText);
    const index = this.appointments.indexOf(appointment);
    this.ratedAppointments[index] = true; // Mark the appointment as rated
    this.appointments[index].rated = true;
  
    this.ratingrequest = new RatingRequest();
    this.ratingrequest.rating= Number(this.selectedRating);
    this.ratingrequest.review= this.reviewText;
    this.ratingrequest.appointmentId = appointment.appointmentId;
  
    console.log(this.ratingrequest);

    this.service.addRating(this.ratingrequest)
    .subscribe(
      response => {
        this.router.navigateByUrl('/myratings').then(() => {
          location.reload();
        });
      },

      error => {
        this.successMessage = ''; 
        this.errorMessage = 'Already rated';
      }
    );
  }
}
