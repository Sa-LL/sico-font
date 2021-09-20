import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import { HomeLayoutRoutingModule } from './home-layout-routing.module';

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [CommonModule, HomeLayoutRoutingModule],
})
export class HomeLayoutModule {}
