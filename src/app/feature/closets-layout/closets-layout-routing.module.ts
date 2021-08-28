import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClosetsLayoutComponent } from './closets-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ClosetsLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosetsLayoutRoutingModule {}
