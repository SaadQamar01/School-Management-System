import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'school-registration', loadChildren: './super-admin/school-registration/school-registration.module#SchoolRegistrationModule' },
            { path: 'view-school', loadChildren: './super-admin/view-school/view-school.module#ViewSchoolModule' },
            { path: 'employee-registration', loadChildren: './admin/employee-registration/employee-registration.module#EmployeeRegistrationModule' },
            { path: 'employees-detail', loadChildren: './admin/employees-detail/employees-detail.module#EmployeesDetailModule' },
            { path: 'student-registration', loadChildren: './admin/student-registration/student-registration.module#StudentRegistrationModule' },
            { path: 'students-detail', loadChildren: './admin/students-detail/students-detail.module#StudentsDetailModule' },
            { path: 'employee-attendence', loadChildren: './employee/employee-attendence/employee-attendence.module#EmployeeAttendenceModule' },
            { path: 'employee-salary', loadChildren: './employee/employee-salary/employee-salary.module#EmployeeSalaryModule' },
            { path: 'emp-receipt-voucher', loadChildren: './employee/emp-receipt-voucher/emp-receipt-voucher.module#EmpReceiptVoucherModule' },
            { path: 'employee-query', loadChildren: './employee/employee-query/employee-query.module#EmployeeQueryModule' },
            { path: 'student-attendence', loadChildren: './student/student-attendence/student-attendence.module#StudentAttendenceModule' },
            { path: 'student-fee', loadChildren: './student/student-fee/student-fee.module#StudentFeeModule' },
            { path: 'student-receipt-voucher', loadChildren: './student/student-receipt-voucher/student-receipt-voucher.module#StudentReceiptVoucherModule' },
            { path: 'student-query', loadChildren: './student/student-query/student-query.module#StudentQueryModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
