  // private int ratingId;
  // private int rating;
  // private String review;


  // private int doctorId;
  // private String doctorName;
  // private int appointmentId;

  // @JsonFormat(pattern = "yyyy-MM-dd")
  // @JsonDeserialize(using = LocalDateDeserializer.class)
  // private LocalDate appointmentDate;

  // private int userId;

  export class Rating{

    ratingId:number;
    rating:number;
    review:string;

    doctorId:number;
    doctorName:string;
    doctorSpecialization:string;
    doctorLocation:string;

    appointmentId:number;
    appointmentDate:string;
    appointmentTime:string;

    userId:number;

    constructor(){

        this.ratingId=0;
        this.rating=0;
        this.review='';

        this.doctorId=0;
        this.doctorName='';
        this.doctorSpecialization='';
        this.doctorLocation='';

        this.appointmentId=0;
        this.appointmentTime=''
        this.appointmentDate='';

        this.userId=0;
        
    }

  }