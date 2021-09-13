import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledDropdownComponent } from './disabled-dropdown.component';

describe('DisabledDropdownComponent', () => {
  let component: DisabledDropdownComponent;
  let fixture: ComponentFixture<DisabledDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
