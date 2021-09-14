import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersFacade } from '../../users.facade';

@Component({
  selector: 'app-page-single-user',
  templateUrl: './page-single-user.component.html',
  styleUrls: ['./page-single-user.component.css']
})
export class PageSingleUserComponent implements OnInit {
  public user : User | undefined;
  constructor(private route: ActivatedRoute, private usersFacade: UsersFacade) {
    usersFacade.getUsers();
  }

  ngOnInit(): void {
    this.getUserDetails(this.route.snapshot.params.id);
  }

  getUserDetails(id: number)  {
    this.user = this.usersFacade.getSingleUserDetails(id);
  }

}
