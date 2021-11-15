
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdineComponent } from './list-ordine.component';

describe('ListOrdineComponent', () => {
  let component: ListOrdineComponent;
  let fixture: ComponentFixture<ListOrdineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:  [  ListOrdineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


