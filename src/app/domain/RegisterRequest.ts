export class RegisterRequest{
    
    email:string;
    password:string;
    role:string;

    constructor(){
        this.email = '';
        this.password = '';
        this.role = '';
    }
}