import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewTicketComponent } from './page-new-ticket.component';

describe('PageNewTicketComponent', () => {
  let component: PageNewTicketComponent;
  let fixture: ComponentFixture<PageNewTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNewTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
