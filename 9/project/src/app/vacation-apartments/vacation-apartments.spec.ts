import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationApartments } from './vacation-apartments';

describe('VacationApartments', () => {
  let component: VacationApartments;
  let fixture: ComponentFixture<VacationApartments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationApartments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationApartments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
