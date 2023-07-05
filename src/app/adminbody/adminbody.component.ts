import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Doctor } from '../domain/Doctor';
import { ServiceService } from '../service/service.service';
import { AlertComponent, AlertConfig } from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-adminbody',
  templateUrl: './adminbody.component.html',
  styleUrls: ['./adminbody.component.css']
})
export class AdminbodyComponent {
  doctors: Doctor[];
  posts: any;
  doctor: Doctor = new Doctor();
  newDoctor: Doctor = new Doctor();
  isEditing: { [key: string]: boolean } = {};

  adminForm: FormGroup;

  successMessage: string='';
  errorMessage: string='';

  constructor(private service: ServiceService,private alertConfig: AlertConfig) {
    this.alertConfig.dismissible = true;
    this.doctors = [];
    this.adminForm = new FormGroup({
      doctorName: new FormControl(),
      doctorSpecialization: new FormControl(),
      doctorLocation: new FormControl()
    });
  }

  ngOnInit(): void {
    this.service.getDoctors().subscribe(response => {
      this.posts = response;
      for (let i = 0; i < this.posts.length; i++) {
        this.doctor = new Doctor();
        this.doctor.doctorId = this.posts[i]['doctorId'];
        this.doctor.doctorName = this.posts[i]['doctorName'];
        this.doctor.doctorSpecialization = this.posts[i]['doctorSpecialization'];
        this.doctor.doctorLocation = this.posts[i]['doctorLocation'];
        this.doctor.doctorRating = this.posts[i]['doctorRating'];
        this.doctors.push(this.doctor);
        console.log(this.doctors);
      }
    });
  }
  clickAddDoctor(){

  }

  createDoctor(doctorForm: NgForm) {
    if (doctorForm.valid) {
      this.newDoctor.doctorName = this.newDoctor.doctorName;
      this.newDoctor.doctorSpecialization = this.newDoctor.doctorSpecialization;
      this.newDoctor.doctorLocation = this.newDoctor.doctorLocation;
      this.newDoctor.doctorRating = this.newDoctor.doctorRating;


      this.service.addDoctorgateway(this.newDoctor).subscribe(data => {
        console.log(data);
        doctorForm.resetForm();
        this.successMessage = 'Doctor added successfully'; // Set success message
        this.errorMessage = '';

      },
      error => {
        console.error(error);
        this.successMessage = ''; // Clear success message
        this.errorMessage = 'Failed to add doctor'; // Set error message
      }
      );
    }
    
  }
  

  EditDoctor(doctor: Doctor, doctorIndex: number) {
    
    doctor.doctorName = doctor.doctorName;
    doctor.doctorSpecialization = doctor.doctorSpecialization
    doctor.doctorLocation = doctor.doctorLocation
  
    this.service.updateDoctor(doctor.doctorId, doctor).subscribe(data => {
      console.log(data);
      this.successMessage = 'Doctor updated successfully'; // Set success message
      this.errorMessage = '';
    },
    error => {
      console.error(error);
      this.successMessage = ''; // Clear success message
      this.errorMessage = 'Failed to update doctor'; // Set error message
    }
    );

    this.isEditing[doctorIndex] = false;
  }
  


  deleteDoctor(index: number) {
    const deletedDoctor = this.doctors[index];
  
    this.service.deleteDoctor(deletedDoctor.doctorId).subscribe(() => {
      this.doctors.splice(index, 1);
      this.successMessage = 'Doctor deleted successfully'; // Set success message
      this.errorMessage = '';
    },
    error => {
      console.error(error);
      this.successMessage = ''; // Clear success message
      this.errorMessage = 'Failed to delete doctor'; // Set error message
    }
    );
  }
}
