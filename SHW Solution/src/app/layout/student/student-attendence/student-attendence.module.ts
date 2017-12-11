import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAttendenceRoutingModule } from './student-attendence-routing.module';
import { StudentAttendenceComponent } from './student-attendence.component';

@NgModule({
  imports: [
    CommonModule,
    StudentAttendenceRoutingModule
  ],
  declarations: [StudentAttendenceComponent]
})
export class StudentAttendenceModule { }
