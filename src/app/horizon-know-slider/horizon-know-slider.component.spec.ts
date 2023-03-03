import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizonKnowSliderComponent } from './horizon-know-slider.component';

describe('HorizonKnowSliderComponent', () => {
  let component: HorizonKnowSliderComponent;
  let fixture: ComponentFixture<HorizonKnowSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizonKnowSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizonKnowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
