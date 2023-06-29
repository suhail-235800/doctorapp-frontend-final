import { Time } from "@angular/common";

export class Appointment{

    appointmentId: number;
    appointmentDate: string;
    appointmentTime: string;
    
    doctorId:number;
    doctorName:string;
    doctorSpecialization:string;
    doctorLocation:string;
    
    isRated:boolean;
    doctorRating:number;

    userId:number=0;
    
    constructor(){

        this.doctorId=0;
        this.doctorName='';
        this.doctorSpecialization='';
        this.doctorLocation='';
        this.appointmentId=0;
        this.appointmentDate='';
        this.appointmentTime = '';
        this.userId=0;
        this.doctorRating=0;
    
        this.isRated=false;
    }

}