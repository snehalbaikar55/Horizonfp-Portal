import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSliderComponent } from './partner-slider.component';

describe('PartnerSliderComponent', () => {
  let component: PartnerSliderComponent;
  let fixture: ComponentFixture<PartnerSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
