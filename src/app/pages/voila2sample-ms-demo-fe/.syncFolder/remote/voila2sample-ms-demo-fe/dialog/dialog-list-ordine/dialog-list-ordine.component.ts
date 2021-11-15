
import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { BzDialogService, CardSize, PaginationUtils } from 'blazing';
import { IOrdine, IOrdineDto } from '../../ordine/ordine.interface';
import { OrdineApiService } from '../../ordine/ordine-api.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ButtonService } from 'src/app/utilities/services/buttons.service';
import { extractResponse, extractTotalPages } from 'voila2-runtime-ng';

const PROVIDERS = [
  OrdineApiService,
  ButtonService
]

@Component({
  selector: 'app-dialog-list-ordine',
  templateUrl: './dialog-list-ordine.component.html',
  styleUrls: ['./dialog-list-ordine.component.scss'],
  providers: [...PROVIDERS]
})
export class DialogListOrdineComponent extends BaseComponent<IOrdine, IOrdineDto>  {

  public ordineList: IOrdine[] = [];
  public totalPages: number = 0;
  public spinner = true;
  public pageSize = 5;
  public cardSize= CardSize.LARGE

 constructor(
    private ordineApiService: OrdineApiService,
    public buttonsService: ButtonService,
    private dialogService: BzDialogService
    ) { super()}

 
 public paginateTable(object: any, criteria?: any): void {
   const options: HttpParams = PaginationUtils.setOptionsForSpring(object, criteria);
   this.ordineApiService.getOrdineByCriteria(options).subscribe(
     (data:any) => {
       this.ordineList = extractResponse('ordine', data);
       this.totalPages = extractTotalPages(data);
       this.spinner = false;
     },
     () => {
       this.spinner = false;
     }
   )

 }


 public selectElement( ordine: IOrdine) : void {
   this.dialogService.closeDialog(ordine);
 }

}




