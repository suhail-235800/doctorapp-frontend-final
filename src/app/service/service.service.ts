import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../domain/Appointment';
import { AppointmentRequest } from '../domain/AppointmentRequest';
import { Doctor } from '../domain/Doctor';
import { LoginRequest } from '../domain/LoginRequest';
import { Rating } from '../domain/Rating';
import { RatingRequest } from '../domain/RatingRequest';
import { RegisterRequest } from '../domain/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
 

export class ServiceService {

  
  private headers: HttpHeaders;
  

  constructor(private Httpclient: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  private getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  private createAuthorizationHeader(): HttpHeaders {
    const token = this.getToken();
    if (token) {
      return this.headers.set('Authorization', 'Bearer ' + token);
    }
    return this.headers;
  }


  //security-service

  login(loginRequest:LoginRequest):Observable<any>{
    const url= `http://localhost:8300/api/auth/authenticate`;
    return this.Httpclient.post(url,loginRequest);
  }
  register(registerRequest:RegisterRequest):Observable<any>{
    const url= `http://localhost:8300/api/auth/register`;
    return this.Httpclient.post(url,registerRequest);
  }


  //admin-service
  getDoctors(): Observable<any>{
    return this.Httpclient.get<Doctor[]>(`http://localhost:8000/api/v1/admin`);
  }

  addDoctor(doctor:Doctor):Observable<any>{
    const url = `http://localhost:8000/api/v1/admin`;
    return this.Httpclient.post(url,doctor);
  }
  addDoctorgateway(doctor: Doctor): Observable<any> {
    const url = 'http://localhost:8080/doctorapp/api/v1/admin';
    const headersWithAuthorization = this.createAuthorizationHeader();
      
    return this.Httpclient.post(url, doctor, { headers: headersWithAuthorization });
  }
  
  updateDoctor(doctorId:number,doctor:Doctor):Observable<any>{
    const url = `http://localhost:8000/api/v1/admin/id/${doctorId}`;
    return this.Httpclient.put(url, doctor);
  }
  deleteDoctor(doctorId: number) {
    return this.Httpclient.delete(`http://localhost:8000/api/v1/admin/${doctorId}`);
  }

  getDoctorBySpecialization(doctorSpecialization:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/specializations/${doctorSpecialization}`);
  }
  getDoctorByName(doctorName:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/doctorname/${doctorName}`);
  }
  getDoctorByLocation(doctorLocation:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/doctorlocation/${doctorLocation}`);
  }
  getDoctorByNameandSpec(doctorName:string,doctorSpecialization:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/searchnamespec/${doctorName}/${doctorSpecialization}`);
  }
  getDoctorByNameandLoc(doctorName:string,doctorLocation:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/searchnameloc/${doctorName}/${doctorLocation}`);
  }
  getDoctorByLocandSpec(doctorLocation:string,doctorSpecialization:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/searchlocspec/${doctorLocation}/${doctorSpecialization}`);
  }
  getDoctorByNameandLocandspec(doctorName:string,doctorLocation:string,doctorSpecialization:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/searchnamelocspec/${doctorName}/${doctorLocation}/${doctorSpecialization}`);
  }

  getDoctorByKeyword(searchkeyword:string){
    return this.Httpclient.get(`http://localhost:8000/api/v1/admin/searchkeyword/${searchkeyword}`);
  }
  //appointment-service

  addAppointment(appointment:AppointmentRequest):Observable<any>{
    const url = `http://localhost:8100/api/v1/appointments`;
    return this.Httpclient.post(url,appointment); 
  }

  getAppointment():Observable<any>{
    return this.Httpclient.get<Appointment[]>(`http://localhost:8100/api/v1/appointments`);
  }

  getAppointmentByUserId(userId:number){
    return this.Httpclient.get(`http://localhost:8100/api/v1/appointments/userId/${userId}`);
  }
  getAppointmentByDoctorName(doctorName:string){
    return this.Httpclient.get(`http://localhost:8100/api/v1/appointments/doctorName/${doctorName}`);
  }



  //rating-service


  addRating(ratingrequest:RatingRequest):Observable<any>{
    const url = `http://localhost:8200/api/v1/ratings`;
    return this.Httpclient.post(url,ratingrequest);
  }

  getRating():Observable<any>{
    return this.Httpclient.get<Rating[]>(`http://localhost:8200/api/v1/ratings`);
  }

  getRatingByUserId(userId:number):Observable<any>{
    return this.Httpclient.get<Rating[]>(`http://localhost:8200/api/v1/ratings/userid/${userId}`);
  }
}


    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IlJPTEVfQURNSU4iLCJzdWIiOiJzdWhhaWxhaG1lZDIyM0BnbWFpbC5jb20iLCJpYXQiOjE2ODgyMDQ2NTQsImV4cCI6MTY4ODIwNjA5NH0.-7ib33I8TLOw-g94gxErijWLGcfwQb-DZemEVGBxSy0',
    //   'Content-Type': 'application/json'
    // });
  
    // console.log(headers);