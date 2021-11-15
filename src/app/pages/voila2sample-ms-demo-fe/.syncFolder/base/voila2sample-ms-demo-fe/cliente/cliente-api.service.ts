
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DateService } from "blazing";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "../../../shared/base/base-api.service";
import { ApiListResponse, ApiResponse } from "voila2-runtime-ng";
import { ICliente, IClienteDto } from "./cliente.interface";


@Injectable()
export class ClienteApiService extends BaseApiService<ICliente, IClienteDto>{


  private url: string = "demo/cliente";
  

  constructor(httpClient: HttpClient, dateService: DateService) { super(httpClient, dateService) }

  public getClienteByCriteria(options?: HttpParams): Observable<ApiListResponse<ICliente,IClienteDto>> {
    return this.getEntityListByCriteria(this.url, options);
  }

  public addCliente(cliente: ICliente) : Observable<ApiResponse<ICliente>> {
    const fixedCliente: ICliente = this.stringifyDate(cliente, 'dataCliente');
    return this.addEntityInstance(fixedCliente, this.url);
  }

  public getClienteById(id: string) : Observable<ApiResponse<ICliente>> {
    return this.getEntityInstanceById(id, this.url).pipe(
      map( (clienteResult: ApiResponse<ICliente>) => {return this.convertIntoDate(clienteResult,'dataCliente')}))
  }

  public updateCliente(cliente: ICliente) : Observable<ApiResponse<ICliente>> {
    const fixedCliente: ICliente = this.stringifyDate(cliente, 'dataCliente');
    return this.updateEntityInstance(fixedCliente, this.url);
  }

  public deleteCliente(id: string) : Observable<ApiResponse<ICliente>> {
    return this.deleteEntityInstance(id,this.url);
  }


  public getListClienteByLink(link: string, options?: HttpParams): Observable<any> {
    return this.getEntityListByLink(link, options );
  }

  public printPdfReport(id: string): any {
        window.open(this.baseUrl + "/" + this.url + '/pdf/' + id);
    }

}


