import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { appointmententity } from './app/appointment/appointmententity';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { doctorentity } from './app/appointment/doctorentity';

@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {

  constructor(private http:HttpClient) {}
  baseurl="http://localhost:8000/admin/find";

saveAppointment(entity:appointmententity):Observable<Object>{
  return this.http.post("http://localhost:8200/appointment/create",entity).pipe(map((res:any)=>{
    return res;
  }));

}

getdoctor(){
  return this.http.get<any>("http://localhost:8000/admin/findall").pipe(map((res:any)=>{return res;}))
}
getdoctorbyid(id:number){
  return this.http.get<doctorentity[]>(`http://localhost:8000/admin/find/${id}`).pipe(map((res:any)=>
  {return res;}));

}
updatedoctor(entity:doctorentity):Observable<Object>{
  return this.http.put<doctorentity[]>('',entity).pipe(map((res:any)=>{return res;}))
}
getDoctorsByName(doctorName:string){
  return this.http.get<doctorentity[]>(`http://localhost:8000/admin/${doctorName}`).pipe(map((res:any)=>{return res;}));
}
getDoctorByDepartment(department:string){
  return this.http.get<doctorentity[]>(`http://localhost:8000/admin/${department}`).pipe(map((res:any)=>{return res;}));
}
getDoctorByNameDepartment(doctorName:string,department:string){
  return this.http.get<doctorentity[]>('http').pipe(map((res:any)=>{return res;}));
}
}
