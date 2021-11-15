
import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { BzDialogService, CardSize, PaginationUtils } from 'blazing';
import { ICliente, IClienteDto } from '../../cliente/cliente.interface';
import { ClienteApiService } from '../../cliente/cliente-api.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ButtonService } from 'src/app/utilities/services/buttons.service';
import { extractResponse, extractTotalPages } from 'voila2-runtime-ng';

const PROVIDERS = [
  ClienteApiService,
  ButtonService
]

@Component({
  selector: 'app-dialog-list-cliente',
  templateUrl: './dialog-list-cliente.component.html',
  styleUrls: ['./dialog-list-cliente.component.scss'],
  providers: [...PROVIDERS]
})
export class DialogListClienteComponent extends BaseComponent<ICliente, IClienteDto>  {

  public clienteList: ICliente[] = [];
  public totalPages: number = 0;
  public spinner = true;
  public pageSize = 5;
  public cardSize= CardSize.LARGE

 constructor(
    private clienteApiService: ClienteApiService,
    public buttonsService: ButtonService,
    private dialogService: BzDialogService
    ) { super()}

 
 public paginateTable(object: any, criteria?: any): void {
   const options: HttpParams = PaginationUtils.setOptionsForSpring(object, criteria);
   this.clienteApiService.getClienteByCriteria(options).subscribe(
     (data:any) => {
       this.clienteList = extractResponse('cliente', data);
       this.totalPages = extractTotalPages(data);
       this.spinner = false;
     },
     () => {
       this.spinner = false;
     }
   )

 }


 public selectElement( cliente: ICliente) : void {
   this.dialogService.closeDialog(cliente);
 }

}




