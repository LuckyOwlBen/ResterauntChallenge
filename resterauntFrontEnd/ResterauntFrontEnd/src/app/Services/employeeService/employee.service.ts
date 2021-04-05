import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddEmployeeRequest } from '../../Models/addEmployeeRequest';
import { AddEmployeeResponse } from '../../Models/addEmployeeResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient ) { }

  private apiUrl = "http://localhost:8080/auth/register";

  public addEmployee(addEmployeeRequest: AddEmployeeRequest): Observable<AddEmployeeResponse> {
    return this.http.post<AddEmployeeResponse>(this.apiUrl, addEmployeeRequest);
  }
}
