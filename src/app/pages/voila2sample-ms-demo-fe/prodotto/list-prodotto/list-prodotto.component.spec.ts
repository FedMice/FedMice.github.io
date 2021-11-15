
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdottoComponent } from './list-prodotto.component';

describe('ListProdottoComponent', () => {
  let component: ListProdottoComponent;
  let fixture: ComponentFixture<ListProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:  [  ListProdottoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


