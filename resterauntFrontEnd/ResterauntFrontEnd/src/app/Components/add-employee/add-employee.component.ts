import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
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

  ngOnInit(): void {
  }

  submit(addEmployeeForm: NgForm) {
    if(addEmployeeForm.invalid){
      console.log(addEmployeeForm);
      return;
    } 
    let addEmployeeRequest = new AddEmployeeRequest();
    
    addEmployeeRequest.firstName = addEmployeeForm.value.firstName;
    addEmployeeRequest.lastName = addEmployeeForm.value.lastName;
    addEmployeeRequest.email = addEmployeeForm.value.email;
    addEmployeeRequest.password = addEmployeeForm.value.password;
    console.log(addEmployeeRequest);
    this.employeeService.addEmployee(addEmployeeRequest).subscribe(
      response => {
        console.log(response);
      }
    )
  }

}
