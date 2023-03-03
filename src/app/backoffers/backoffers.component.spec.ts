import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackoffersComponent } from './backoffers.component';

describe('BackoffersComponent', () => {
  let component: BackoffersComponent;
  let fixture: ComponentFixture<BackoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackoffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
