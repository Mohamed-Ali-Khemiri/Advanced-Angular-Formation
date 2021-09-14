import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  @Input() public user$ : Observable<User> = of();
}
