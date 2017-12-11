import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesDetailRoutingModule } from './employees-detail-routing.module';
import { EmployeesDetailComponent } from './employees-detail.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesDetailRoutingModule
  ],
  declarations: [EmployeesDetailComponent]
})
export class EmployeesDetailModule { }
