import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsForSale } from './apartments-for-sale';

describe('ApartmentsForSale', () => {
  let component: ApartmentsForSale;
  let fixture: ComponentFixture<ApartmentsForSale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApartmentsForSale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentsForSale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
