import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../domain/LoginRequest';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';
  loginRequest: LoginRequest = { email: '', password: '' };
  constructor(private service:ServiceService,private router: Router) {}

  ngOnInit(): void {}

  
  login() {
      this.loginRequest = new LoginRequest();
      this.loginRequest.email=this.email;
      this.loginRequest.password=this.password;
      console.log(this.loginRequest);
      
      this.service.login(this.loginRequest).subscribe(
        response => {
            console.log(response);
            const token = response.token;
            const roles = response.role;
            const userId = response.UserId;
            
            sessionStorage.setItem('userId', userId); 
            sessionStorage.setItem('roles', roles);
            sessionStorage.setItem('token',token);

            if (roles === 'ADMIN') {
  
              this.router.navigate(['/adminhome']);
        
            } else{
              this.router.navigate(['/userhome']);
            }
        },
      );
    }
}
