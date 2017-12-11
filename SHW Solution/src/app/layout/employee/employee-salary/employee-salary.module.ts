import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeSalaryRoutingModule } from './employee-salary-routing.module';
import { EmployeeSalaryComponent } from './employee-salary.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeSalaryRoutingModule
  ],
  declarations: [EmployeeSalaryComponent]
})
export class EmployeeSalaryModule { }
