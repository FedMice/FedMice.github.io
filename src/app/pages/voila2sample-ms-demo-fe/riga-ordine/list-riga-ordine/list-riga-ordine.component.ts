import { HttpParams } from '@angular/common/http';
import {  Component, ViewChild } from '@angular/core';
import { PageObject, PaginationUtils } from 'blazing';
import { BaseComponent } from '../../../../shared/base/base.component';
import { IRigaOrdine , IRigaOrdineDto } from '../riga-ordine.interface';
import { RigaOrdineApiService } from '../riga-ordine-api.service';
import { ButtonService } from '../../../../utilities/services/buttons.service';
import { SearchRigaOrdineComponent } from './search-riga-ordine/search-riga-ordine.component';
import { Router } from '@angular/router';
import { extractResponse, extractTotalPages, navigateToPath, getPrivilegesEnum, getPrivileges } from 'voila2-runtime-ng';


@Component({
  selector: 'app-list-riga-ordine',
  templateUrl: './list-riga-ordine.component.html',
  styleUrls: ['./list-riga-ordine.component.scss'],
  providers:  [RigaOrdineApiService, ButtonService]
})
export class ListRigaOrdineComponent extends BaseComponent<IRigaOrdine,IRigaOrdineDto>  {


  public rigaOrdineList: IRigaOrdine [] =  [];
  public rigaOrdine!: IRigaOrdine;
  public totalPages: number = 0;
  public spinner: boolean = true;
  public rigaOrdineCriteria !: any;
  public pageSize: number = 5;

  public privileges: string[] = getPrivileges();
  
  public get Privileges(): any {
    return  getPrivilegesEnum(); 
  }
 

  @ViewChild(SearchRigaOrdineComponent)  searchRigaOrdine !: SearchRigaOrdineComponent;
  

  constructor(
    private rigaOrdineApiService: RigaOrdineApiService,
    public router: Router,
  ) { super() }

  
  public paginateTable(object: any, criteria?: any): void {
    const options: HttpParams = PaginationUtils.setOptionsForSpring(object, criteria);
    this.rigaOrdineApiService.getRigaOrdineByCriteria(options).subscribe(
      (data) => {
        this.rigaOrdineList = extractResponse('rigaOrdine', data);
        this.totalPages = extractTotalPages(data);
        this.spinner = false;
      },
      () => {
        this.spinner = false;
      }
    )

  }

  public searchWithCriteria() : void {	this.rigaOrdineCriteria = this.searchRigaOrdine.search();
     const object: PageObject  = { page: 0, pageSize: this.pageSize};
     this.paginateTable(object, this.rigaOrdineCriteria);
  }


  public navigateToView(id: number) : void {
   navigateToPath('/pages/ms-demo/riga-ordine/detail-riga-ordine/' + id + '/view', this.router);
  }

	

}

