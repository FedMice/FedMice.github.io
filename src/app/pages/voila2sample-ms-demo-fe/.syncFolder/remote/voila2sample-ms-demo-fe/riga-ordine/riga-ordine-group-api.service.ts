
 import { Injectable, Injector} from "@angular/core";
 import { RigaOrdineApiService } from './riga-ordine-api.service';
    import { OrdineApiService } from '../../voila2sample-ms-demo-fe/ordine/ordine-api.service'
    import { ProdottoApiService } from '../../voila2sample-ms-demo-fe/prodotto/prodotto-api.service'

@Injectable() 
export class RigaOrdineGroupApiService {

     private rigaOrdineApiService !: RigaOrdineApiService;
    	private	ordineApiService !: OrdineApiService
    	private	prodottoApiService !: ProdottoApiService

    constructor(private injector: Injector){}

     get rigaOrdine(): RigaOrdineApiService {
        if(!this.rigaOrdineApiService)
           this.rigaOrdineApiService = this.injector.get(RigaOrdineApiService);
        return this.rigaOrdineApiService;
     }


        get ordine() : OrdineApiService {
           if(!this.ordineApiService)
               this.ordineApiService = this.injector.get(OrdineApiService);
           return this.ordineApiService;
        }
        get prodotto() : ProdottoApiService {
           if(!this.prodottoApiService)
               this.prodottoApiService = this.injector.get(ProdottoApiService);
           return this.prodottoApiService;
        }
   
}

