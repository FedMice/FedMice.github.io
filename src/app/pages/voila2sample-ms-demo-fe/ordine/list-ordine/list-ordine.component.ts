import { HttpParams } from '@angular/common/http';
import {  Component, ViewChild } from '@angular/core';
import { PageObject, PaginationUtils } from 'blazing';
import { BaseComponent } from '../../../../shared/base/base.component';
import { IOrdine , IOrdineDto } from '../ordine.interface';
import { OrdineApiService } from '../ordine-api.service';
import { ButtonService } from '../../../../utilities/services/buttons.service';
import { SearchOrdineComponent } from './search-ordine/search-ordine.component';
import { Router } from '@angular/router';
import { extractResponse, extractTotalPages, navigateToPath, getPrivilegesEnum, getPrivileges } from 'voila2-runtime-ng';


@Component({
  selector: 'app-list-ordine',
  templateUrl: './list-ordine.component.html',
  styleUrls: ['./list-ordine.component.scss'],
  providers:  [OrdineApiService, ButtonService]
})
export class ListOrdineComponent extends BaseComponent<IOrdine,IOrdineDto>  {


  public ordineList: any [] =  [];
  public ordine!: IOrdine;
  public totalPages: number = 0;
  public spinner: boolean = true;
  public ordineCriteria !: any;
  public pageSize: number = 5;

  public privileges: string[] = getPrivileges();
  
  public get Privileges(): any {
    return  getPrivilegesEnum(); 
  }
 

  @ViewChild(SearchOrdineComponent)  searchOrdine !: SearchOrdineComponent;
  

  constructor(
    private ordineApiService: OrdineApiService,
    public router: Router,
  ) { super() }

  
  public paginateTable(object: any, criteria?: any): void {
    this.ordineApiService.getOrdineByCriteria().subscribe(
      (data) => {
        this.ordineList = [
          {
            "objectKey":"1~2020",
            "objectTitle":"1~2020",
              idOrdine:1,
            "anno":2020,
            "urgente":true,
            "ragioneSociale":"dottore",
            "idTipoOrdine":null,
            "theClienteObjectTitle":"dottore",
            "theClienteObjectKey":"dottore",
            "theTipoOrdineObjectTitle": "",
            "theTipoOrdineObjectKey":"",
            "theOrdinePadreObjectTitle":"",
            "theOrdinePadreObjectKey":"",
            "ordineKey":{
               "idOrdine":1,
               "anno":2020,
            },
           
         }
        ]
        this.totalPages = extractTotalPages(data);
        this.spinner = false;
      },
      () => {
        this.spinner = false;
      }
    )

  }

  public searchWithCriteria() : void {
	this.ordineCriteria = this.searchOrdine.search();
     const object: PageObject  = { page: 0, pageSize: this.pageSize};
     this.paginateTable(object, this.ordineCriteria);
  }


  public navigateToView(id: number) : void {
   navigateToPath('/pages/ms-demo/ordine/detail-ordine/' + id + '/view', this.router);
  }

	

}

