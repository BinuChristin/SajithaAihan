import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  userObj;

  constructor(public employeeservice:EmployeeService) { }

  ngOnInit(): void { //when you access this component,it will come to ngOnInint and prints this statement.

    this.userObj={
      userId:10
    }
    console.log("Debugging in angular application");
    console.log(this.userObj);
  }
    onSubmit(form: NgForm) {
      let addId = this.employeeservice.formData.EmployeeId;
  
      if(addId==0 || addId==null){
        console.log(form.value);
        this.insertRecord(form);
      }
      else{
        console.log(form.value);
        this.updateRecord(form);
      }
    }

       //Insert an Employee
  insertRecord(form: NgForm){
    console.log("Inserting");
    this.employeeservice.insertEmployee(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form);
        //alert("Added Successfully");
       // this.toastr.success('Added Successfully','EmployeeManagementSystem2021');
        //this.router.navigate(['emp-list']);
      }
    );
  }
  updateRecord(form: NgForm){
    console.log("Updating...");
    this.employeeservice.updateEmployee(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form);
        //this.toastr.success('Updated Successfully', 'EMS App2022');
        //this.router.navigate(['emp-list']);
      }
    );
  }

  //Reset form
  resetForm(form: NgForm){
    if(form!=null){
      form.resetForm();
    }
  }

  //for checking and setting the IsActive field true or false
  onCheckBoxChange(e){
    if(e.target.checked){
      this.employeeservice.formData.IsActive=true;
      console.log(this.employeeservice.formData.IsActive);
    }
    else{
      this.employeeservice.formData.IsActive=false;
      console.log(this.employeeservice.formData.IsActive);
    }
  }

}
