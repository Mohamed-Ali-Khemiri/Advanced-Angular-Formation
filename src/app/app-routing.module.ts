import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './deposita/pages/pages.component';
import { PageHomeComponent } from './home/page-home/page-home.component';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
import { PageSigninComponent } from './login/pages/page-signin/page-signin.component';
import { AuthGuard } from './shared/guard/auth.guard';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: PageHomeComponent},
    { path: 'login', component: PageLoginComponent},
    { path: 'signin', component: PageSigninComponent},
    {
      path:'deposit',
      component: PagesComponent,
      children: [
        {
          path:'coins', component: PagesComponent
        },
        {
          path:'notes', component: PagesComponent
        }
      ]
    },
    { path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(mod => mod.AdminRoutingModule),
    canLoad: [AuthGuard] },
    { path: 'user', loadChildren: () => import('./users/users-routing.module').then(mod => mod.UsersRoutingModule)},
    { path: 'ticket', loadChildren: () => import('./tickets/tickets-routing.module').then(mod => mod.TicketsRoutingRoutingModule)},
    { path: '', redirectTo: 'home', pathMatch: 'full'  }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
