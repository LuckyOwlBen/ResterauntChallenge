import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../Models/authenticationRequest';
import { AuthService } from '../../Services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  email: string;
  password: string;

  submit(){
    let authRequest = new AuthenticationRequest();

    authRequest.email = this.email;
    authRequest.password = this.password;
    
    this.authService.apiLogin(authRequest).subscribe(
      resp  => {
        console.log(resp);
        if (resp.registered) {
          sessionStorage.setItem('currentUser', resp.jwt);
          console.log(sessionStorage.getItem('currentUser'));
          this.router.navigate(['managerHub']);
        }
      },
      err => console.log(err)
    );
  }
}
