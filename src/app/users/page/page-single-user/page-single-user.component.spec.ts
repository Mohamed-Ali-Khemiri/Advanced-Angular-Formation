import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSingleUserComponent } from './page-single-user.component';

describe('PageSingleUserComponent', () => {
  let component: PageSingleUserComponent;
  let fixture: ComponentFixture<PageSingleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSingleUserComponent ]
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
