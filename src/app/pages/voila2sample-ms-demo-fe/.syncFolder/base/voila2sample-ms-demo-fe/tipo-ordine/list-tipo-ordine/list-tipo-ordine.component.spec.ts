
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoOrdineComponent } from './list-tipoOrdine.component';

describe('ListTipoOrdineComponent', () => {
  let component: ListTipoOrdineComponent;
  let fixture: ComponentFixture<ListTipoOrdineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:  [  ListTipoOrdineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


