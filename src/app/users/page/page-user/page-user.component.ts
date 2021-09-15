import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model';
import { UsersFacade } from '../../users.facade';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  list : Observable<User[]> = of([]);

  constructor(private usersFacade : UsersFacade) {}

  ngOnInit(): void {
    this.list = this.usersFacade.getUsers();
  }

  deleteUser(user:  User) {
    this.usersFacade.deleteUser(user);
  }

}
