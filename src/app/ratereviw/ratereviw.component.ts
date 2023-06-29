import { Component } from '@angular/core';

@Component({
  selector: 'app-ratereviw',
  templateUrl: './ratereviw.component.html',
  styleUrls: ['./ratereviw.component.css']
})
export class RatereviwComponent {
  show = false;

  openpopup(){

    this.show=true

  }

  closepopup(){

    this.show=false

  }

  constructor(){}
  // ratingValue: string;
  // reviewValue: string;

  // updateRating(rating: number) {
  //   this.ratingValue = rating.toString();
  // }

  // submitForm() {
  //   console.log('Rating:', this.ratingValue);
  //   console.log('Review:', this.reviewValue);

  //   // Here you can perform further actions such as submitting the rating and review to a server
  // }
  // // selectedRating: number | null = null;

  // // onRatingChange(rating: number) {
  // //   console.log(rating); // This will output the selected rating as a number
  // // }
}
