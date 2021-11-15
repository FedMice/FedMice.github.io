import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateService } from 'blazing';
import { OrdineGroupApiService } from '../../ordine-group-api.service';
import {
 IntegerFilter
, LocalDateFilter
, BooleanFilter
, StringFilter
, extractResponse
} from 'voila2-runtime-ng';

import { OrdineCriteria } from '../../ordine.criteria';

import { ICliente } from '../../../cliente/cliente.interface';
import { ClienteApiService } from '../../../cliente/cliente-api.service';
import { ITipoOrdine } from '../../../tipo-ordine/tipo-ordine.interface';
import { TipoOrdineApiService } from '../../../tipo-ordine/tipo-ordine-api.service';
import { IOrdine } from '../../../ordine/ordine.interface';
import { OrdineApiService } from '../../../ordine/ordine-api.service';
const PROVIDERS = [
  OrdineGroupApiService,
  
  ClienteApiService,
  TipoOrdineApiService,
]

@Component({
  selector: 'app-search-ordine',
  templateUrl: './search-ordine.component.html',
  styleUrls: ['./search-ordine.component.scss'],
  providers: [...PROVIDERS ]
})
export class SearchOrdineComponent implements OnInit {

  public searchOrdineForm !: FormGroup;
  public clienteList : ICliente[] = [];
  public tipoOrdineList : ITipoOrdine[] = [];
  public ordineList : IOrdine[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private dateService: DateService,
    private ordineGroupApiService : OrdineGroupApiService,
	
    ) { }

  ngOnInit(): void {
    this.inizialize();
       this.getParentsList();
  }

  public search(): any {
    let ordineCriteria: OrdineCriteria = Object.assign({});

    if (this.searchOrdineForm.value) {

		const idOrdineFrom : number = this.searchOrdineForm.value.idOrdineFrom;
		const idOrdineTo : number =  this.searchOrdineForm.value.idOrdineTo;
		
		//idOrdine
		if(idOrdineFrom || idOrdineTo ){
			ordineCriteria.idOrdine = new IntegerFilter;
		    ordineCriteria.idOrdine.setGreaterOrEqualThan(idOrdineFrom);
		    ordineCriteria.idOrdine.setLessOrEqualThan(idOrdineTo);
		}
		
		
		
		const annoFrom : number = this.searchOrdineForm.value.annoFrom;
		const annoTo : number =  this.searchOrdineForm.value.annoTo;
		
		//anno
		if(annoFrom || annoTo ){
			ordineCriteria.anno = new IntegerFilter;
		    ordineCriteria.anno.setGreaterOrEqualThan(annoFrom);
		    ordineCriteria.anno.setLessOrEqualThan(annoTo);
		}
		
		
		
		const dataOrdineFrom : Date = this.searchOrdineForm.value.dataOrdineFrom;
		const dataOrdineTo : Date =  this.searchOrdineForm.value.dataOrdineTo;
		
		//dataOrdine
		if(dataOrdineFrom || dataOrdineTo ){
			ordineCriteria.dataOrdine = new LocalDateFilter;
		    ordineCriteria.dataOrdine.setGreaterOrEqualThan(dataOrdineFrom);
		    ordineCriteria.dataOrdine.setLessOrEqualThan(dataOrdineTo);
		}
		
		
		
		
		
		const urgente : boolean = this.searchOrdineForm.value.urgente;
		
		//urgente
		if(urgente){
			ordineCriteria.urgente = new BooleanFilter();
			ordineCriteria.urgente.setSpecified(urgente);
		}
		
		// theClienteObjectKey
		if(this.searchOrdineForm.value.theClienteObjectKey)
		{
			ordineCriteria.theClienteObjectKey = this.searchOrdineForm.value.theClienteObjectKey;
		}
		// theTipoOrdineObjectKey
		if(this.searchOrdineForm.value.theTipoOrdineObjectKey)
		{
			ordineCriteria.theTipoOrdineObjectKey = this.searchOrdineForm.value.theTipoOrdineObjectKey;
		}
		// theOrdinePadreObjectKey
		if(this.searchOrdineForm.value.theOrdinePadreObjectKey)
		{
			ordineCriteria.theOrdinePadreObjectKey = this.searchOrdineForm.value.theOrdinePadreObjectKey;
		}
    }

    return ordineCriteria;
  }

  public inizialize(): void {
    this.searchOrdineForm = this.formBuilder.group(
      {
			'idOrdineFrom' : [null],
			'idOrdineTo' : [null],
			'annoFrom' : [null],
			'annoTo' : [null],
			'dataOrdineFrom' : [null],
			'dataOrdineTo' : [null],
			'urgente' : [null],
			'theClienteObjectKey' : [null]
,			'theTipoOrdineObjectKey' : [null]
,			'theOrdinePadreObjectKey' : [null]

      }
    )
  }

   public getClienteList() : void {
      this.ordineGroupApiService.cliente.getClienteByCriteria().subscribe(
         (data) => {
              this.clienteList = getListForDropdown('cliente', data);
           }
         )
       }
   public getTipoOrdineList() : void {
      this.ordineGroupApiService.tipoOrdine.getTipoOrdineByCriteria().subscribe(
         (data) => {
              this.tipoOrdineList = getListForDropdown('tipoOrdine', data);
           }
         )
       }
   public getOrdineList() : void {
      this.ordineGroupApiService.ordine.getOrdineByCriteria().subscribe(
         (data) => {
              this.ordineList = getListForDropdown('ordine', data);
           }
         )
       }

     private getParentsList() : void {
        this.getClienteList();
        this.getTipoOrdineList();
        this.getOrdineList();
     }


}

