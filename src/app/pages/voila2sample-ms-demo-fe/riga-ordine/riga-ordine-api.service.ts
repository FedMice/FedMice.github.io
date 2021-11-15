
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DateService } from "blazing";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "../../../shared/base/base-api.service";
import { ApiListResponse, ApiResponse } from "voila2-runtime-ng";
import { IRigaOrdine, IRigaOrdineDto } from "./riga-ordine.interface";


@Injectable()
export class RigaOrdineApiService extends BaseApiService<IRigaOrdine, IRigaOrdineDto>{


  private url: string = "demo/riga-ordine";
  

  constructor(httpClient: HttpClient, dateService: DateService) { super(httpClient, dateService) }

  public getRigaOrdineByCriteria(options?: HttpParams): Observable<ApiListResponse<IRigaOrdine,IRigaOrdineDto>> {
    return this.getEntityListByCriteria(this.url, options);
  }

  public addRigaOrdine(rigaOrdine: IRigaOrdine) : Observable<ApiResponse<IRigaOrdine>> {
    const fixedRigaOrdine: IRigaOrdine = this.stringifyDate(rigaOrdine, 'dataRigaOrdine');
    return this.addEntityInstance(fixedRigaOrdine, this.url);
  }

  public getRigaOrdineById(id: string) : Observable<ApiResponse<IRigaOrdine>> {
    return this.getEntityInstanceById(id, this.url).pipe(
      map( (rigaOrdineResult: ApiResponse<IRigaOrdine>) => {return this.convertIntoDate(rigaOrdineResult,'dataRigaOrdine')}))
  }

  public updateRigaOrdine(rigaOrdine: IRigaOrdine) : Observable<ApiResponse<IRigaOrdine>> {
    const fixedRigaOrdine: IRigaOrdine = this.stringifyDate(rigaOrdine, 'dataRigaOrdine');
    return this.updateEntityInstance(fixedRigaOrdine, this.url);
  }

  public deleteRigaOrdine(id: string) : Observable<ApiResponse<IRigaOrdine>> {
    return this.deleteEntityInstance(id,this.url);
  }


  public getListRigaOrdineByLink(link: string, options?: HttpParams): Observable<any> {
    return this.getEntityListByLink(link, options );
  }

  public printPdfReport(id: string): any {
        window.open(this.baseUrl + "/" + this.url + '/pdf/' + id);
    }

}


