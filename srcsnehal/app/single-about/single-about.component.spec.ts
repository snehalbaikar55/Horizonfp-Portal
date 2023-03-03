import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAboutComponent } from './single-about.component';

describe('SingleAboutComponent', () => {
  let component: SingleAboutComponent;
  let fixture: ComponentFixture<SingleAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
