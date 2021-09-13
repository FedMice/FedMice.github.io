import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventsDuplicatesComponent } from './prevents-duplicates.component';

describe('PreventsDuplicatesComponent', () => {
  let component: PreventsDuplicatesComponent;
  let fixture: ComponentFixture<PreventsDuplicatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventsDuplicatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventsDuplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
