import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsForRent } from './apartments-for-rent';

describe('ApartmentsForRent', () => {
  let component: ApartmentsForRent;
  let fixture: ComponentFixture<ApartmentsForRent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentsForRent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentsForRent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
