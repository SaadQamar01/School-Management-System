import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeSalaryComponent } from './employee-salary.component';

const routes: Routes = [
    { path: '', component: EmployeeSalaryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeSalaryRoutingModule { }
