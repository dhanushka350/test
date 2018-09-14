import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import {DepartmentService} from '../../shared/department.service';
import {NotificationService} from '../../shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService, public departmentService: DepartmentService, public notificationService: NotificationService) {
  }

  // static array for department drop down
  // departments = [
  //   {id: 1, value: 'Dep 1'},
  //   {id: 2, value: 'Dep 2'},
  //   {id: 3, value: 'Dep 3'},
  // ];

  ngOnInit() {
    this.service.getEmployees();
  }

  //
  // onClear() {
  //
  //   // this.service.form.reset();
  //   // this.service.initializeFormFroup();
  //    }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      //   this.service.initializeFormFroup();
      this.notificationService.success(':: Submitted Successfully');
    }
  }
}
