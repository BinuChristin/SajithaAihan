import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import{environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

employees:Employee[];
formData :Employee=new Employee();
  constructor(private httpClient: HttpClient) { }

  //for binding employee list get all
  BindListEmployees(){
    this.httpClient.get(environment.apiUrl + "/api/employees")
      .toPromise().then(response =>
        this.employees = response as Employee[]);
        console.log(this.employees);
  }

  //insert an employee
  insertEmployee(emp: Employee): Observable<any>{
    return this.httpClient.post(environment.apiUrl + "/api/employees",emp);
  }

  //update employee
  updateEmployee(emp: Employee): Observable<any>{
    return this.httpClient.put(environment.apiUrl + "/api/employees",emp);
  }
  //Get a particular Employee
  getEmployee(empId: number): Observable<any>{
    return this.httpClient.get(environment.apiUrl + "/api/employees/" + empId);
  }
  //Delete Employee
  deleteEmployee(id: number){
    return this.httpClient.delete(environment.apiUrl + "/api/employees/" + id);
  }
}
