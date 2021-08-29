import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackDropClickComponent } from './back-drop-click.component';

describe('BackDropClickComponent', () => {
  let component: BackDropClickComponent;
  let fixture: ComponentFixture<BackDropClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackDropClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackDropClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
