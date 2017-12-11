import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsDetailRoutingModule } from './students-detail-routing.module';
import { StudentsDetailComponent } from './students-detail.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsDetailRoutingModule
  ],
  declarations: [StudentsDetailComponent]
})
export class StudentsDetailModule { }
