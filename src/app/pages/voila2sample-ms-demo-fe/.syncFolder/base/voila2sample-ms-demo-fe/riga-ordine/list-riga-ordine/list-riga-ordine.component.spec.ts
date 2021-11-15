
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRigaOrdineComponent } from './list-rigaOrdine.component';

describe('ListRigaOrdineComponent', () => {
  let component: ListRigaOrdineComponent;
  let fixture: ComponentFixture<ListRigaOrdineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:  [  ListRigaOrdineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRigaOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


