import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglaPageComponent } from './singla-page.component';

describe('SinglaPageComponent', () => {
  let component: SinglaPageComponent;
  let fixture: ComponentFixture<SinglaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
