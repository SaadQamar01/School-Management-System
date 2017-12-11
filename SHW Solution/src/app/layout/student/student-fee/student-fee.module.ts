import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFeeRoutingModule } from './student-fee-routing.module';
import { StudentFeeComponent } from './student-fee.component';

@NgModule({
  imports: [
    CommonModule,
    StudentFeeRoutingModule
  ],
  declarations: [StudentFeeComponent]
})
export class StudentFeeModule { }
