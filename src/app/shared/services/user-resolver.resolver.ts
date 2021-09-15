import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserApiService } from 'src/app/users/api/user-api.service';
import { User } from 'src/app/users/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserResolverResolver implements Resolve<Observable<User>> {
  constructor(private api: UserApiService) {}

  async resolve(route: ActivatedRouteSnapshot) {
    const {id = null} = route.params;
    const item = await this.api.getSingleUser(id);
    return item;
  }
}
