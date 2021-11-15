import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DateService } from "blazing";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiListResponse, ApiRequest, ApiResponse } from "voila2-runtime-ng";



@Injectable(
  {providedIn: 'root'}
)
export class BaseApiService<T, V> {

  public baseUrl: string = environment.baseUrl;
 

  constructor(protected httpClient: HttpClient, private dateService: DateService) { }

  protected getEntityListByCriteria( url: string, options?: HttpParams,): Observable<ApiListResponse<T,V>> {
    return this.httpClient.get<any>(this.baseUrl + '/' +url, { params: options });
  }

  protected addEntityInstance(entity: T, url: string): Observable<ApiResponse<T>> {
    return this.httpClient.post<ApiResponse<T>>(this.baseUrl + '/' + url, this.wrapInApiRequest(entity));
  }

  protected getEntityInstanceById(id: string, url: string): Observable<ApiResponse<T>>  {
    return this.httpClient.get<ApiResponse<T>>(this.baseUrl + '/' + url + '/' + id);
  }

  protected updateEntityInstance(entity: T, url: string): Observable<ApiResponse<T>> {
    return this.httpClient.put<ApiResponse<T>>(this.baseUrl + '/' + url, this.wrapInApiRequest(entity));
  }

  protected deleteEntityInstance(id: string, url: string): Observable<ApiResponse<T>> {
    return this.httpClient.delete<ApiResponse<T>>(this.baseUrl + '/' + url + '/' + id);
  }

  public getEntityListByLink(link: string, options?: HttpParams): Observable<ApiListResponse<T,V>> {
    return this.httpClient.get<any>(link, { params: options });
  }


  protected convertIntoDate(result: any, property: string): any  {
    return this.dateService.convertIntoDate(result, property);
  }

  protected stringifyDate(entity: any, property: string) : any {
   return this.dateService.stringifyDate(entity, property);
  }

  private wrapInApiRequest(entity: T) : ApiRequest<T> {
     return {data: entity};
  }

}
