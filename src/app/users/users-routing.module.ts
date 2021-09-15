import { NgModule } from '@angular/core';
import { PageUserComponent } from './page/page-user/page-user.component';
import { PageSingleUserComponent } from './page/page-single-user/page-single-user.component';
import { RouterModule } from '@angular/router';
import { UserResolverResolver } from '../shared/services/user-resolver.resolver';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PageUserComponent},
    { path: ':id', component: PageSingleUserComponent, resolve: {user : UserResolverResolver} },
  ])],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
