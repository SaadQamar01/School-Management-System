import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeAttendenceRoutingModule } from './employee-attendence-routing.module';
import { EmployeeAttendenceComponent } from './employee-attendence.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeAttendenceRoutingModule
  ],
  declarations: [EmployeeAttendenceComponent]
})
export class EmployeeAttendenceModule { }
