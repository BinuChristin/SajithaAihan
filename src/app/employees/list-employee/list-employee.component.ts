import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    //life cycle hook
    console.log("Welcome to life cycle hook");
    this.employeeService.BindListEmployees();
  }

  // DeleteEmployee(id: number){
  //   if(confirm('Are you syre to Delete this record?')){
  //     this.employeeService.deleteEmployee(id)
  //     .subscribe(response => {
  //       this.employeeService.BindListEmployees();
  //       //this.toastr.success('Deleted Successfully','Employee App V2022');
  //     },
  //     err =>{
  //       console.log(err)
  //     });
  //   }
  //   //window.location.reload();
  // }

  // //update Employee - and passing the Id through the URL
  // updateEmployee(empId: number){
  //   console.log(empId);
  //   this.router.navigate(['editemployee', empId]);
  // }

    

}
