import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employeeService/employee.service';
import { AddEmployeeRequest } from '../../Models/addEmployeeRequest';
import { AddEmployeeResponse } from '../../Models/addEmployeeResponse';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  firstName: string;
  lastName: string;
  email: string;
  password: string;

  ngOnInit(): void {
  }

  submit() {
    let addEmployeeRequest = new AddEmployeeRequest();
    addEmployeeRequest.firstName = this.firstName;
    addEmployeeRequest.lastName = this.lastName;
    addEmployeeRequest.email = this.email;
    addEmployeeRequest.password = this.password;
    this.employeeService.addEmployee(addEmployeeRequest).subscribe(
      response => {
        console.log(response);
      }
    )
  }

}
