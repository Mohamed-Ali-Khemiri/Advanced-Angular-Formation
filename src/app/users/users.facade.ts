import { Injectable } from "@angular/core";
import { UserApiService } from "./api/user-api.service";
import { User } from "./models/user.model";
import { UserState } from "./state/user.state";
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersFacade {

  // private users$: Observable<User[]>;

  constructor(private userApi: UserApiService, private userState : UserState) {
  }

  getUsers() {
    return this.userApi.getUsers().pipe(tap(val => this.userState.setUsers(val)));
  }

  addUser(user: User){
    this.userApi.addUser(user).subscribe(
      () => this.userApi.getUsers(),
      (error) => console.log(error));
  }

  deleteUser(user: User) {
    this.userState.deleteUser(user.id);
    this.userApi.deleteUser(user.id).subscribe(
      () => console.log('User deleted'),
      (error) => this.userState.addUser(user)
    )
  }

}
