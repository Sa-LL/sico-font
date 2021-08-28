import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginLayoutComponent } from './login-layout.component';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
  },
  {
    path: 'lobby',
    component: LobbyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginLayoutRoutingComponent {}
