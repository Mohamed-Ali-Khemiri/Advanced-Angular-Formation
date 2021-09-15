import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { User } from "../models/user.model";;

@Injectable({
  providedIn: 'root'
})

export class UserState {
  private listUsers$ = new BehaviorSubject<User[]>([]);

    getUsers() {
      return this.listUsers$.asObservable();
    }

    setUsers(listUser : User[]) {
      this.listUsers$.next(listUser);
    }

    addUser(user : User) {
      const currentValue = this.listUsers$.getValue();
      this.listUsers$.next([...currentValue, user]);
    }

    deleteUser(id: number) {
      const currentValue = this.listUsers$.getValue();
      this.listUsers$.next(currentValue.filter(user => user.id !== id));
    }

    checkList() {
      const currentValue = this.listUsers$.getValue();
      if ( currentValue && currentValue.length > 0) {
        return true;
      }
      return false;
    }

}
