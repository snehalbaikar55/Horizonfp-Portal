import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropByDeveloperComponent } from './list-prop-by-developer.component';

describe('ListPropByDeveloperComponent', () => {
  let component: ListPropByDeveloperComponent;
  let fixture: ComponentFixture<ListPropByDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPropByDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPropByDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
