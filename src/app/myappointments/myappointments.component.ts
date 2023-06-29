import { Component } from '@angular/core';
import { Appointment } from '../domain/Appointment';
import { Rating } from '../domain/Rating';
import { RatingRequest } from '../domain/RatingRequest';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-myappointments',
  templateUrl: './myappointments.component.html',
  styleUrls: ['./myappointments.component.css']
})
export class MyappointmentsComponent {
  appointments: any;
  userId: number=0;
  doctorName: string='';
  appointment:Appointment = new Appointment();
  searchDoctorName: string='';
  ratings:any;
  rating:Rating = new Rating();
  ratingrequest:RatingRequest = new RatingRequest();
  constructor(private service: ServiceService) {
    // this.modalOptions = {
    //   backdrop:'static',
    //   backdropClass:'customBackdrop'
    // }
   }

  ngOnInit(): void {

    this.service.getAppointmentByUserId(this.userId).subscribe(response => {
      console.log("1");
      this.appointments = response;
    });
  }


  searchDoctors() {
    this.service.getDoctorByKeyword(this.searchDoctorName).subscribe(response => {
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
}
