import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSingleUserComponent } from './page-single-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { UserDetailsComponent } from '../../components/user-details/user-details.component';

describe('PageSingleUserComponent', () => {
  let component: PageSingleUserComponent;
  let fixture: ComponentFixture<PageSingleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSingleUserComponent, UserDetailsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSingleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
