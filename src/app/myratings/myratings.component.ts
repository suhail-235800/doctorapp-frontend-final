import { Component } from '@angular/core';
import { Rating } from '../domain/Rating';
import { RatingRequest } from '../domain/RatingRequest';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-myratings',
  templateUrl: './myratings.component.html',
  styleUrls: ['./myratings.component.css']
})
export class MyratingsComponent {
  ratings: any;
  userId: number=0;
  doctorName: string='';
  searchDoctorName: string='';
  rating:Rating = new Rating();
  ratingrequest:RatingRequest = new RatingRequest();
  constructor(private service: ServiceService) {
    // this.modalOptions = {
    //   backdrop:'static',
    //   backdropClass:'customBackdrop'
    // }
   }

  ngOnInit(): void {

    this.service.getRatingByUserId(this.userId).subscribe(response => {
      console.log("1");
      this.ratings = response;
    });
  }
  getStars(rating: number): number[] {
    console.log(rating);
  
    return Array(rating).fill(0);
  }

}
