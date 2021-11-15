
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DateService } from "blazing";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "../../../shared/base/base-api.service";
import { ApiListResponse, ApiResponse } from "voila2-runtime-ng";
import { IProdotto, IProdottoDto } from "./prodotto.interface";


@Injectable()
export class ProdottoApiService extends BaseApiService<IProdotto, IProdottoDto>{


  private url: string = "demo/prodotto";
  

  constructor(httpClient: HttpClient, dateService: DateService) { super(httpClient, dateService) }

  public getProdottoByCriteria(options?: HttpParams): Observable<ApiListResponse<IProdotto,IProdottoDto>> {
    return this.getEntityListByCriteria(this.url, options);
  }

  public addProdotto(prodotto: IProdotto) : Observable<ApiResponse<IProdotto>> {
    return this.addEntityInstance(prodotto, this.url);
  }

  public getProdottoById(id: string) : Observable<ApiResponse<IProdotto>> {
    return this.getEntityInstanceById(id, this.url)
  }

  public updateProdotto(prodotto: IProdotto) : Observable<ApiResponse<IProdotto>> {
    return this.updateEntityInstance(prodotto, this.url);
  }

  public deleteProdotto(id: string) : Observable<ApiResponse<IProdotto>> {
    return this.deleteEntityInstance(id,this.url);
  }


  public getListProdottoByLink(link: string, options?: HttpParams): Observable<any> {
    return this.getEntityListByLink(link, options );
  }

  public printPdfReport(id: string): any {
        window.open(this.baseUrl + "/" + this.url + '/pdf/' + id);
    }

}


