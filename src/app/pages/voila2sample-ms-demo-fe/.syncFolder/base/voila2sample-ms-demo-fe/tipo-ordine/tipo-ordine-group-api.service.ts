
 import { Injectable, Injector} from "@angular/core";
 import { TipoOrdineApiService } from './tipo-ordine-api.service';

@Injectable() 
export class TipoOrdineGroupApiService {

     private tipoOrdineApiService !: TipoOrdineApiService;

    constructor(private injector: Injector){}

     get tipoOrdine(): TipoOrdineApiService {
        if(!this.tipoOrdineApiService)
           this.tipoOrdineApiService = this.injector.get(TipoOrdineApiService);
        return this.tipoOrdineApiService;
     }


   
}

