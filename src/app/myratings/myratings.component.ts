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
   }

  ngOnInit(): void {
    this.service.getRatingByUserId(this.userId).subscribe(response => {
      this.ratings = response;
    });
  }
  getStars(rating: number): number[] {  
    return Array(rating).fill(0);
  }

}
