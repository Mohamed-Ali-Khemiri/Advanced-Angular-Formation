import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCocktailsComponent } from './page-cocktails.component';

describe('PageCocktailsComponent', () => {
  let component: PageCocktailsComponent;
  let fixture: ComponentFixture<PageCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCocktailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
