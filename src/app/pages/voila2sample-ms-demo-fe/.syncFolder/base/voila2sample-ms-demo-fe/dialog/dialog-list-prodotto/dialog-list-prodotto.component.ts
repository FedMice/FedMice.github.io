
import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { BzDialogService, CardSize, PaginationUtils } from 'blazing';
import { IProdotto, IProdottoDto } from '../../prodotto/prodotto.interface';
import { ProdottoApiService } from '../../prodotto/prodotto-api.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ButtonService } from 'src/app/utilities/services/buttons.service';
import { extractResponse, extractTotalPages } from 'voila2-runtime-ng';

const PROVIDERS = [
  ProdottoApiService,
  ButtonService
]

@Component({
  selector: 'app-dialog-list-prodotto',
  templateUrl: './dialog-list-prodotto.component.html',
  styleUrls: ['./dialog-list-prodotto.component.scss'],
  providers: [...PROVIDERS]
})
export class DialogListProdottoComponent extends BaseComponent<IProdotto, IProdottoDto>  {

  public prodottoList: IProdotto[] = [];
  public totalPages: number = 0;
  public spinner = true;
  public pageSize = 5;
  public cardSize= CardSize.LARGE

 constructor(
    private prodottoApiService: ProdottoApiService,
    public buttonsService: ButtonService,
    private dialogService: BzDialogService
    ) { super()}

 
 public paginateTable(object: any, criteria?: any): void {
   const options: HttpParams = PaginationUtils.setOptionsForSpring(object, criteria);
   this.prodottoApiService.getProdottoByCriteria(options).subscribe(
     (data:any) => {
       this.prodottoList = extractResponse('prodotto', data);
       this.totalPages = extractTotalPages(data);
       this.spinner = false;
     },
     () => {
       this.spinner = false;
     }
   )

 }


 public selectElement( prodotto: IProdotto) : void {
   this.dialogService.closeDialog(prodotto);
 }

}




