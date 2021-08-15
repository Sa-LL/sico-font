import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginLayoutComponent } from './login-layout.component';
import { LoginLayoutRoutingComponent } from './login-layout-routing.module';

@NgModule({
  declarations: [LoginLayoutComponent],
  imports: [CommonModule, LoginLayoutRoutingComponent, ReactiveFormsModule],
})
export class LoginLayoutModule {}
