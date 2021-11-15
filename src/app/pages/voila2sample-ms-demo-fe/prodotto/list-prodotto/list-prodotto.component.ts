import { HttpParams } from '@angular/common/http';
import {  Component, ViewChild } from '@angular/core';
import { PageObject, PaginationUtils } from 'blazing';
import { BaseComponent } from '../../../../shared/base/base.component';
import { IProdotto , IProdottoDto } from '../prodotto.interface';
import { ProdottoApiService } from '../prodotto-api.service';
import { ButtonService } from '../../../../utilities/services/buttons.service';
import { SearchProdottoComponent } from './search-prodotto/search-prodotto.component';
import { Router } from '@angular/router';
import { extractResponse, extractTotalPages, navigateToPath, getPrivilegesEnum, getPrivileges } from 'voila2-runtime-ng';


@Component({
  selector: 'app-list-prodotto',
  templateUrl: './list-prodotto.component.html',
  styleUrls: ['./list-prodotto.component.scss'],
  providers:  [ProdottoApiService, ButtonService]
})
export class ListProdottoComponent extends BaseComponent<IProdotto,IProdottoDto>  {


  public prodottoList: IProdotto [] =  [];
  public prodotto!: IProdotto;
  public totalPages: number = 0;
  public spinner: boolean = true;
  public prodottoCriteria !: any;
  public pageSize: number = 5;

  public privileges: string[] = getPrivileges();
  
  public get Privileges(): any {
    return  getPrivilegesEnum(); 
  }
 

  @ViewChild(SearchProdottoComponent)  searchProdotto !: SearchProdottoComponent;
  

  constructor(
    private prodottoApiService: ProdottoApiService,
    public router: Router,
  ) { super() }

  
  public paginateTable(object: any, criteria?: any): void {
    const options: HttpParams = PaginationUtils.setOptionsForSpring(object, criteria);
    this.prodottoApiService.getProdottoByCriteria(options).subscribe(
      (data) => {
        this.prodottoList = extractResponse('prodotto', data);
        this.totalPages = extractTotalPages(data);
        this.spinner = false;
      },
      () => {
        this.spinner = false;
      }
    )

  }

  public searchWithCriteria() : void {
	this.prodottoCriteria = this.searchProdotto.search();
     const object: PageObject  = { page: 0, pageSize: this.pageSize};
     this.paginateTable(object, this.prodottoCriteria);
  }


  public navigateToView(id: number) : void {
   navigateToPath('/pages/ms-demo/prodotto/detail-prodotto/' + id + '/view', this.router);
  }

	

}

