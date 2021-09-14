import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model';
import { UsersFacade } from '../../users.facade';

@Component({
  selector: 'app-page-single-user',
  templateUrl: './page-single-user.component.html',
  styleUrls: ['./page-single-user.component.css']
})
export class PageSingleUserComponent implements OnInit {
  user$ : Observable<User> = of();
  constructor(private route: ActivatedRoute, private usersFacade: UsersFacade) {
  }

  ngOnInit(): void {
    this.getUserDetails(this.route.snapshot.params.id);
  }

  getUserDetails(id: number)  {
    this.user$ = this.usersFacade.getSingleUserDetails(id);
  }

}
