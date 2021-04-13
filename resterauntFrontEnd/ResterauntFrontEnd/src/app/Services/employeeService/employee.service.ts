import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddEmployeeRequest } from '../../Models/addEmployeeRequest';
import { AddEmployeeResponse } from '../../Models/addEmployeeResponse';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:8080/register";

  public addEmployee(addEmployeeRequest: AddEmployeeRequest): Observable<AddEmployeeResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization' : sessionStorage.getItem("currentUser")
      })
    }
    return this.http.post<AddEmployeeResponse>(this.apiUrl, addEmployeeRequest, httpOptions);
  }
}
