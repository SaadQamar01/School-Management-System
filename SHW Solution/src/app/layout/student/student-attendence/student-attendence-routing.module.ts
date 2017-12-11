import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentAttendenceComponent } from './student-attendence.component';

const routes: Routes = [
    { path: '', component: StudentAttendenceComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentAttendenceRoutingModule { }
