import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpReceiptVoucherRoutingModule } from './emp-receipt-voucher-routing.module';
import { EmpReceiptVoucherComponent } from './emp-receipt-voucher.component';

@NgModule({
  imports: [
    CommonModule,
    EmpReceiptVoucherRoutingModule
  ],
  declarations: [EmpReceiptVoucherComponent]
})
export class EmpReceiptVoucherModule { }
