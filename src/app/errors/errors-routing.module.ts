import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '404',
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '401',
    component: UnauthorizedComponent,
  },
  {
    path: '403',
    component: ForbiddenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
