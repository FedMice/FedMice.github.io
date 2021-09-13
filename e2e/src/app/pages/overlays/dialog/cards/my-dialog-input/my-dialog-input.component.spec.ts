import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogInputComponent } from './my-dialog-input.component';

describe('MyDialogInputComponent', () => {
  let component: MyDialogInputComponent;
  let fixture: ComponentFixture<MyDialogInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDialogInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
