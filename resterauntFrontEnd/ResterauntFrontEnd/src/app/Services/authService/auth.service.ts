import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegistrationRequest } from '../../Models/RegistrationRequest';
import { RegistrationResponse } from '../../Models/RegistrationResponse';
import { AuthenticationRequest } from '../../Models/authenticationRequest';
import { AuthenticationResponse } from '../../Models/authenticationResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  private registerUrl = '/auth/register';
  private loginUrl = '/auth/login';
  constructor(private http: HttpClient) { }

  apiRegister(registrationRequest: RegistrationRequest): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(this.baseUrl + this.registerUrl, registrationRequest);
  }

  apiLogin(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(this.baseUrl + this.loginUrl, authenticationRequest);
  }
}
