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
  private loginUrl = '/auth/login';
  constructor(private http: HttpClient) { }

  apiLogin(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(this.baseUrl + this.loginUrl, authenticationRequest);
  }
}
