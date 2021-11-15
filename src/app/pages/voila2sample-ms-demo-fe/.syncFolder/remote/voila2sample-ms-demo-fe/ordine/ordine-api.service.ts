
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DateService } from "blazing";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "../../../shared/base/base-api.service";
import { ApiListResponse, ApiResponse } from "voila2-runtime-ng";
import { IOrdine, IOrdineDto } from "./ordine.interface";


@Injectable()
export class OrdineApiService extends BaseApiService<IOrdine, IOrdineDto>{


  private url: string = "demo/ordine";
  

  constructor(httpClient: HttpClient, dateService: DateService) { super(httpClient, dateService) }

  public getOrdineByCriteria(options?: HttpParams): Observable<ApiListResponse<IOrdine,IOrdineDto>> {
    return this.getEntityListByCriteria(this.url, options);
  }

  public addOrdine(ordine: IOrdine) : Observable<ApiResponse<IOrdine>> {
    return this.addEntityInstance(ordine, this.url);
  }

  public getOrdineById(id: string) : Observable<ApiResponse<IOrdine>> {
    return this.getEntityInstanceById(id, this.url);
  }

  public updateOrdine(ordine: IOrdine) : Observable<ApiResponse<IOrdine>> {
    return this.updateEntityInstance(ordine, this.url);
  }

  public deleteOrdine(id: string) : Observable<ApiResponse<IOrdine>> {
    return this.deleteEntityInstance(id,this.url);
  }


  public getListOrdineByLink(link: string, options?: HttpParams): Observable<any> {
    return this.getEntityListByLink(link, options );
  }

  public printPdfReport(id: string): any {
        window.open(this.baseUrl + "/" + this.url + '/pdf/' + id);
    }

}


