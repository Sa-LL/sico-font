import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/feature/login-layout/login-layout.module').then(
        (m) => m.LoginLayoutModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/feature/home-layout/home-layout.module').then(
        (m) => m.HomeLayoutModule
      ),
  },
  {
    path: 'closetsKitchens',
    loadChildren: () =>
      import('src/app/feature/closets-layout/closets-layout.module').then(
        (m) => m.ClosetsLayoutModule
      ),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
