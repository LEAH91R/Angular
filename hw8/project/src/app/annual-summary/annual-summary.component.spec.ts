import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualSummaryComponent } from './annual-summary.component';

describe('AnnualSummaryComponent', () => {
  let component: AnnualSummaryComponent;
  let fixture: ComponentFixture<AnnualSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnualSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnualSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
