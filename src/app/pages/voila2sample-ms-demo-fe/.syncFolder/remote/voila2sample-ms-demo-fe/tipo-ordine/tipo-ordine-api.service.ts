
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DateService } from "blazing";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "../../../shared/base/base-api.service";
import { ApiListResponse, ApiResponse } from "voila2-runtime-ng";
import { ITipoOrdine, ITipoOrdineDto } from "./tipo-ordine.interface";


@Injectable()
export class TipoOrdineApiService extends BaseApiService<ITipoOrdine, ITipoOrdineDto>{


  private url: string = "demo/tipo-ordine";
  

  constructor(httpClient: HttpClient, dateService: DateService) { super(httpClient, dateService) }

  public getTipoOrdineByCriteria(options?: HttpParams): Observable<ApiListResponse<ITipoOrdine,ITipoOrdineDto>> {
    return this.getEntityListByCriteria(this.url, options);
  }

  public addTipoOrdine(tipoOrdine: ITipoOrdine) : Observable<ApiResponse<ITipoOrdine>> {
    return this.addEntityInstance(tipoOrdine, this.url);
  }

  public getTipoOrdineById(id: string) : Observable<ApiResponse<ITipoOrdine>> {
    return this.getEntityInstanceById(id, this.url);
  }

  public updateTipoOrdine(tipoOrdine: ITipoOrdine) : Observable<ApiResponse<ITipoOrdine>> {
    return this.updateEntityInstance(tipoOrdine, this.url);
  }

  public deleteTipoOrdine(id: string) : Observable<ApiResponse<ITipoOrdine>> {
    return this.deleteEntityInstance(id,this.url);
  }


  public getListTipoOrdineByLink(link: string, options?: HttpParams): Observable<any> {
    return this.getEntityListByLink(link, options );
  }

  public printPdfReport(id: string): any {
        window.open(this.baseUrl + "/" + this.url + '/pdf/' + id);
    }

}


