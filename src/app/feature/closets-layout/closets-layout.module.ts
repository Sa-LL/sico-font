import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClosetsLayoutComponent } from './closets-layout.component';
import { ClosetsLayoutRoutingModule } from './closets-layout-routing.module';

@NgModule({
  declarations: [ClosetsLayoutComponent],
  imports: [CommonModule, ClosetsLayoutRoutingModule, ReactiveFormsModule],
})
export class ClosetsLayoutModule {}
