import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglefloorPlanComponent } from './singlefloor-plan.component';

describe('SinglefloorPlanComponent', () => {
  let component: SinglefloorPlanComponent;
  let fixture: ComponentFixture<SinglefloorPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglefloorPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglefloorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
