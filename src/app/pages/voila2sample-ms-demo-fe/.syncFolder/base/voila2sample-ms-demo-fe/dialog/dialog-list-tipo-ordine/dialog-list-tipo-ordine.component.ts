
import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { BzDialogService, CardSize, PaginationUtils } from 'blazing';
import { ITipoOrdine, ITipoOrdineDto } from '../../tipo-ordine/tipo-ordine.interface';
import { TipoOrdineApiService } from '../../tipo-ordine/tipo-ordine-api.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ButtonService } from 'src/app/utilities/services/buttons.service';
import { extractResponse, extractTotalPages } from 'voila2-runtime-ng';

const PROVIDERS = [
  TipoOrdineApiService,
  ButtonService
]

@Component({
  selector: 'app-dialog-list-tipo-ordine',
  templateUrl: './dialog-list-tipo-ordine.component.html',
  styleUrls: ['./dialog-list-tipo-ordine.component.scss'],
  providers: [...PROVIDERS]
})
export class DialogListTipoOrdineComponent extends BaseComponent<ITipoOrdine, ITipoOrdineDto>  {

  public tipoOrdineList: ITipoOrdine[] = [];
  public totalPages: number = 0;
  public spinner = true;
  public pageSize = 5;
  public cardSize= CardSize.LARGE

 constructor(
    private tipoOrdineApiService: TipoOrdineApiService,
    public buttonsService: ButtonService,
    private dialogService: BzDialogService
    ) { super()}

 
 public paginateTable(object: any, criteria?: any): void {
   const options: HttpParams = PaginationUtils.setOptionsForSpring(object, criteria);
   this.tipoOrdineApiService.getTipoOrdineByCriteria(options).subscribe(
     (data:any) => {
       this.tipoOrdineList = extractResponse('tipoOrdine', data);
       this.totalPages = extractTotalPages(data);
       this.spinner = false;
     },
     () => {
       this.spinner = false;
     }
   )

 }


 public selectElement( tipoOrdine: ITipoOrdine) : void {
   this.dialogService.closeDialog(tipoOrdine);
 }

}




