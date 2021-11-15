import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateService } from 'blazing';
import { RigaOrdineGroupApiService } from '../../riga-ordine-group-api.service';
import {
 BigDecimalFilter
, IntegerFilter
, StringFilter
, getListForDropdown
} from 'voila2-runtime-ng';

import { RigaOrdineCriteria } from '../../riga-ordine.criteria';

import { IOrdine } from '../../../ordine/ordine.interface';
import { OrdineApiService } from '../../../ordine/ordine-api.service';
import { IProdotto } from '../../../prodotto/prodotto.interface';
import { ProdottoApiService } from '../../../prodotto/prodotto-api.service';
const PROVIDERS = [
  RigaOrdineGroupApiService,
  
  OrdineApiService,
  ProdottoApiService,
]

@Component({
  selector: 'app-search-riga-ordine',
  templateUrl: './search-riga-ordine.component.html',
  styleUrls: ['./search-riga-ordine.component.scss'],
  providers: [...PROVIDERS ]
})
export class SearchRigaOrdineComponent implements OnInit {

  public searchRigaOrdineForm !: FormGroup;
  public ordineList : IOrdine[] = [];
  public prodottoList : IProdotto[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private dateService: DateService,
    private rigaOrdineGroupApiService : RigaOrdineGroupApiService,
	
    ) { }

  ngOnInit(): void {
    this.inizialize();
       this.getParentsList();
  }

  public search(): any {
    let rigaOrdineCriteria: RigaOrdineCriteria = Object.assign({});

    if (this.searchRigaOrdineForm.value) {

		const quantitaFrom : number = this.searchRigaOrdineForm.value.quantitaFrom;
		const quantitaTo : number =  this.searchRigaOrdineForm.value.quantitaTo;
		
		//quantita
		if(quantitaFrom || quantitaTo ){
			rigaOrdineCriteria.quantita = new BigDecimalFilter;
		    rigaOrdineCriteria.quantita.setGreaterOrEqualThan(quantitaFrom);
		    rigaOrdineCriteria.quantita.setLessOrEqualThan(quantitaTo);
		}
		
		
		
		// theOrdineObjectKey
		if(this.searchRigaOrdineForm.value.theOrdineObjectKey)
		{
			rigaOrdineCriteria.theOrdineObjectKey = this.searchRigaOrdineForm.value.theOrdineObjectKey;
		}
		// theProdottoObjectKey
		if(this.searchRigaOrdineForm.value.theProdottoObjectKey)
		{
			rigaOrdineCriteria.theProdottoObjectKey = this.searchRigaOrdineForm.value.theProdottoObjectKey;
		}
    }

    return rigaOrdineCriteria;
  }

  public inizialize(): void {
    this.searchRigaOrdineForm = this.formBuilder.group(
      {
			'quantitaFrom' : [null],
			'quantitaTo' : [null],
			'theOrdineObjectKey' : [null]
,			'theProdottoObjectKey' : [null]

      }
    )
  }

   public getOrdineList() : void {
      this.rigaOrdineGroupApiService.ordine.getOrdineByCriteria().subscribe(
         (data) => {
              this.ordineList = getListForDropdown('ordine', data);
           }
         )
       }
   public getProdottoList() : void {
      this.rigaOrdineGroupApiService.prodotto.getProdottoByCriteria().subscribe(
         (data) => {
              this.prodottoList = getListForDropdown('prodotto', data);
           }
         )
       }

     private getParentsList() : void {
        this.getOrdineList();
        this.getProdottoList();
     }


}

