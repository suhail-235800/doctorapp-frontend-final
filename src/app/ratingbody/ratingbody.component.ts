import { Component } from '@angular/core';
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

  ratings:any;
  rating:Rating = new Rating();
  ratingrequest:RatingRequest = new RatingRequest();
  reviewText:string='';
  ratedAppointments: boolean[] = [];

  constructor(private service: ServiceService) {
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
      if (error.status === 404) {
        alert('No Doctors Found');
        
        window.location.reload();
        
      } else {
        // Handle other error cases here
      }
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
        // Handle the API response
        console.log('Rating added Succesfully!');  
      },
      error => {
        alert("already rated")
      }
    );
  }
}
