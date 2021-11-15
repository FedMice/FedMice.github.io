import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateService } from 'blazing';
import { ProdottoGroupApiService } from '../../prodotto-group-api.service';
import {
 IntegerFilter
, StringFilter
, BigDecimalFilter
, LocalDateTimeFilter
, BooleanFilter
, getListForDropdown
} from 'voila2-runtime-ng';

import { ProdottoCriteria } from '../../prodotto.criteria';

const PROVIDERS = [
  ProdottoGroupApiService,
  
]

@Component({
  selector: 'app-search-prodotto',
  templateUrl: './search-prodotto.component.html',
  styleUrls: ['./search-prodotto.component.scss'],
  providers: [...PROVIDERS ]
})
export class SearchProdottoComponent implements OnInit {

  public searchProdottoForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dateService: DateService,
    private prodottoGroupApiService : ProdottoGroupApiService,
	
    ) { }

  ngOnInit(): void {
    this.inizialize();
  }

  public search(): any {
    let prodottoCriteria: ProdottoCriteria = Object.assign({});

    if (this.searchProdottoForm.value) {

		const idProdottoFrom : number = this.searchProdottoForm.value.idProdottoFrom;
		const idProdottoTo : number =  this.searchProdottoForm.value.idProdottoTo;
		
		//idProdotto
		if(idProdottoFrom || idProdottoTo ){
			prodottoCriteria.idProdotto = new IntegerFilter;
		    prodottoCriteria.idProdotto.setGreaterOrEqualThan(idProdottoFrom);
		    prodottoCriteria.idProdotto.setLessOrEqualThan(idProdottoTo);
		}
		
		
		
		
		const descrizioneProdotto : string = this.searchProdottoForm.value.descrizioneProdotto;
		
		//descrizioneProdotto
		if(descrizioneProdotto){
		prodottoCriteria.descrizioneProdotto = new StringFilter;
		prodottoCriteria.descrizioneProdotto.setContains(this.searchProdottoForm.value.descrizioneProdotto);
		}
		
		
		const prezzoUnitarioFrom : number = this.searchProdottoForm.value.prezzoUnitarioFrom;
		const prezzoUnitarioTo : number =  this.searchProdottoForm.value.prezzoUnitarioTo;
		
		//prezzoUnitario
		if(prezzoUnitarioFrom || prezzoUnitarioTo ){
			prodottoCriteria.prezzoUnitario = new BigDecimalFilter;
		    prodottoCriteria.prezzoUnitario.setGreaterOrEqualThan(prezzoUnitarioFrom);
		    prodottoCriteria.prezzoUnitario.setLessOrEqualThan(prezzoUnitarioTo);
		}
		
		
		
		const dataScadenzaFrom : Date = this.searchProdottoForm.value.dataScadenzaFrom;
		const dataScadenzaTo : Date =  this.searchProdottoForm.value.dataScadenzaTo;
		
		//dataScadenza
		if(dataScadenzaFrom || dataScadenzaTo ){
			prodottoCriteria.dataScadenza = new LocalDateTimeFilter;
		    prodottoCriteria.dataScadenza.setGreaterOrEqualThan(dataScadenzaFrom);
		    prodottoCriteria.dataScadenza.setLessOrEqualThan(dataScadenzaTo);
		}
		
		
		
		
		
		const limitedEdition : boolean = this.searchProdottoForm.value.limitedEdition;
		
		//limitedEdition
		if(limitedEdition){
			prodottoCriteria.limitedEdition = new BooleanFilter();
			prodottoCriteria.limitedEdition.setSpecified(limitedEdition);
		}
		
		
		const createdBy : string = this.searchProdottoForm.value.createdBy;
		
		//createdBy
		if(createdBy){
		prodottoCriteria.createdBy = new StringFilter;
		prodottoCriteria.createdBy.setContains(this.searchProdottoForm.value.createdBy);
		}
		
		
		
		const lastModifiedBy : string = this.searchProdottoForm.value.lastModifiedBy;
		
		//lastModifiedBy
		if(lastModifiedBy){
		prodottoCriteria.lastModifiedBy = new StringFilter;
		prodottoCriteria.lastModifiedBy.setContains(this.searchProdottoForm.value.lastModifiedBy);
		}
		
		
		const createdDateFrom : Date = this.searchProdottoForm.value.createdDateFrom;
		const createdDateTo : Date =  this.searchProdottoForm.value.createdDateTo;
		
		//createdDate
		if(createdDateFrom || createdDateTo ){
			prodottoCriteria.createdDate = new LocalDateTimeFilter;
		    prodottoCriteria.createdDate.setGreaterOrEqualThan(createdDateFrom);
		    prodottoCriteria.createdDate.setLessOrEqualThan(createdDateTo);
		}
		
		
		
		const lastModifiedDateFrom : Date = this.searchProdottoForm.value.lastModifiedDateFrom;
		const lastModifiedDateTo : Date =  this.searchProdottoForm.value.lastModifiedDateTo;
		
		//lastModifiedDate
		if(lastModifiedDateFrom || lastModifiedDateTo ){
			prodottoCriteria.lastModifiedDate = new LocalDateTimeFilter;
		    prodottoCriteria.lastModifiedDate.setGreaterOrEqualThan(lastModifiedDateFrom);
		    prodottoCriteria.lastModifiedDate.setLessOrEqualThan(lastModifiedDateTo);
		}
		
		
		
    }

    return prodottoCriteria;
  }

  public inizialize(): void {
    this.searchProdottoForm = this.formBuilder.group(
      {
			'idProdottoFrom' : [null],
			'idProdottoTo' : [null],
			'descrizioneProdotto' : [null],
			'prezzoUnitarioFrom' : [null],
			'prezzoUnitarioTo' : [null],
			'dataScadenzaFrom' : [null],
			'dataScadenzaTo' : [null],
			'limitedEdition' : [null],
			'createdBy' : [null],
			'lastModifiedBy' : [null],
			'createdDateFrom' : [null],
			'createdDateTo' : [null],
			'lastModifiedDateFrom' : [null],
			'lastModifiedDateTo' : [null],

      }
    )
  }




}

