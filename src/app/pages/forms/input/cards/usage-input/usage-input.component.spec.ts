import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageInputComponent } from './usage-input.component';

describe('UsageInputComponent', () => {
  let component: UsageInputComponent;
  let fixture: ComponentFixture<UsageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsageInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
