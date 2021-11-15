import { HttpParams } from '@angular/common/http';
import {  Component, ViewChild } from '@angular/core';
import { PageObject, PaginationUtils } from 'blazing';
import { BaseComponent } from '../../../../shared/base/base.component';
import { ITipoOrdine , ITipoOrdineDto } from '../tipo-ordine.interface';
import { TipoOrdineApiService } from '../tipo-ordine-api.service';
import { ButtonService } from '../../../../utilities/services/buttons.service';
import { SearchTipoOrdineComponent } from './search-tipo-ordine/search-tipo-ordine.component';
import { Router } from '@angular/router';
import { extractResponse, extractTotalPages, navigateToPath, getPrivilegesEnum, getPrivileges } from 'voila2-runtime-ng';


@Component({
  selector: 'app-list-tipo-ordine',
  templateUrl: './list-tipo-ordine.component.html',
  styleUrls: ['./list-tipo-ordine.component.scss'],
  providers:  [TipoOrdineApiService, ButtonService]
})
export class ListTipoOrdineComponent extends BaseComponent<ITipoOrdine,ITipoOrdineDto>  {


  public tipoOrdineList: ITipoOrdine [] =  [];
  public tipoOrdine!: ITipoOrdine;
  public totalPages: number = 0;
  public spinner: boolean = true;
  public tipoOrdineCriteria !: any;
  public pageSize: number = 5;

  public privileges: string[] = getPrivileges();
  
  public get Privileges(): any {
    return  getPrivilegesEnum(); 
  }
 

  @ViewChild(SearchTipoOrdineComponent)  searchTipoOrdine !: SearchTipoOrdineComponent;
  

  constructor(
    private tipoOrdineApiService: TipoOrdineApiService,
    public router: Router,
  ) { super() }

  
  public paginateTable(object: any, criteria?: any): void {
    const options: HttpParams = PaginationUtils.setOptionsForSpring(object, criteria);
    this.tipoOrdineApiService.getTipoOrdineByCriteria(options).subscribe(
      (data) => {
        this.tipoOrdineList = extractResponse('tipoOrdine', data);
        this.totalPages = extractTotalPages(data);
        this.spinner = false;
      },
      () => {
        this.spinner = false;
      }
    )

  }

  public searchWithCriteria() : void {	this.tipoOrdineCriteria = this.searchTipoOrdine.search();
     const object: PageObject  = { page: 0, pageSize: this.pageSize};
     this.paginateTable(object, this.tipoOrdineCriteria);
  }


  public navigateToView(id: number) : void {
   navigateToPath('/pages/ms-demo/tipo-ordine/detail-tipo-ordine/' + id + '/view', this.router);
  }

	

}

