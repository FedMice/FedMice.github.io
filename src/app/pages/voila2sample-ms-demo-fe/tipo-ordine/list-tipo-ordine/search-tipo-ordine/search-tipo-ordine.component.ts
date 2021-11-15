import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateService } from 'blazing';
import { TipoOrdineGroupApiService } from '../../tipo-ordine-group-api.service';
import {
 IntegerFilter
, StringFilter
, extractResponse
} from 'voila2-runtime-ng';

import { TipoOrdineCriteria } from '../../tipo-ordine.criteria';

const PROVIDERS = [
  TipoOrdineGroupApiService,
  
]

@Component({
  selector: 'app-search-tipo-ordine',
  templateUrl: './search-tipo-ordine.component.html',
  styleUrls: ['./search-tipo-ordine.component.scss'],
  providers: [...PROVIDERS ]
})
export class SearchTipoOrdineComponent implements OnInit {

  public searchTipoOrdineForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dateService: DateService,
    private tipoOrdineGroupApiService : TipoOrdineGroupApiService,
	
    ) { }

  ngOnInit(): void {
    this.inizialize();
  }

  public search(): any {
    let tipoOrdineCriteria: TipoOrdineCriteria = Object.assign({});

    if (this.searchTipoOrdineForm.value) {

		const idTipoOrdineFrom : number = this.searchTipoOrdineForm.value.idTipoOrdineFrom;
		const idTipoOrdineTo : number =  this.searchTipoOrdineForm.value.idTipoOrdineTo;
		
		//idTipoOrdine
		if(idTipoOrdineFrom || idTipoOrdineTo ){
			tipoOrdineCriteria.idTipoOrdine = new IntegerFilter;
		    tipoOrdineCriteria.idTipoOrdine.setGreaterOrEqualThan(idTipoOrdineFrom);
		    tipoOrdineCriteria.idTipoOrdine.setLessOrEqualThan(idTipoOrdineTo);
		}
		
		
		
		
		const nomeTipoOrdine : string = this.searchTipoOrdineForm.value.nomeTipoOrdine;
		
		//nomeTipoOrdine
		if(nomeTipoOrdine){
		tipoOrdineCriteria.nomeTipoOrdine = new StringFilter;
		tipoOrdineCriteria.nomeTipoOrdine.setContains(this.searchTipoOrdineForm.value.nomeTipoOrdine);
		}
		
		
    }

    return tipoOrdineCriteria;
  }

  public inizialize(): void {
    this.searchTipoOrdineForm = this.formBuilder.group(
      {
			'idTipoOrdineFrom' : [null],
			'idTipoOrdineTo' : [null],
			'nomeTipoOrdine' : [null],

      }
    )
  }




}

