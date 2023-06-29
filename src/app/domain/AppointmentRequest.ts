export class AppointmentRequest{

    appointmentDate:string; 
    appointmentTime:string;
    doctorId:number;

    constructor(){
        this.appointmentDate='';
        this.appointmentTime='';
        this.doctorId=0;
    }
}