import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPagesBannerComponent } from './sub-pages-banner.component';

describe('SubPagesBannerComponent', () => {
  let component: SubPagesBannerComponent;
  let fixture: ComponentFixture<SubPagesBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPagesBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPagesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
