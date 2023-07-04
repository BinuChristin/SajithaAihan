import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  //declare variables
  empId: number;
  employee: Employee = new Employee();

  constructor(private route: ActivatedRoute,
    private empService: EmployeeService) { }

  ngOnInit(): void {

    this.empId = this.route.snapshot.params['empId'];   //getting the id passed from the brower URL 
    // -- http://localhost:4200/editemployee/1

    this.empService.getEmployee(this.empId)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
        //To change the date format from' 15-Jan-2022' to '15-01-2022'
        //var datePipe = new DatePipe("en-UK");
        //let formatedyear: any = datePipe.transform(data.DateOfJoining, 'yyyy-MM-dd');
        //data.DateOfJoining = formatedyear;

        this.empService.formData = Object.assign({}, data);

      }, error => console.log(error));

  }

}
