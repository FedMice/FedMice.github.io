import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyByClickComponent } from './destroy-by-click.component';

describe('DestroyByClickComponent', () => {
  let component: DestroyByClickComponent;
  let fixture: ComponentFixture<DestroyByClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestroyByClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyByClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
