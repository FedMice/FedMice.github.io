
import { BaseModel } from "../../../shared/base/base.model";
import { BzAutoMapper, BzStringBuilder } from "blazing";


import { IOrdineLinks, IOrdine, 
  } from "./ordine.interface";
import {IOrdineKey} from "../ordine/ordine.interface"

export class Ordine extends BaseModel {
       ordineKey !: IOrdineKey
		  dataOrdine !: Date
		  urgente !: boolean
    		theClienteObjectKey!: string;
            theClienteObjectTitle!: string;
    		theTipoOrdineObjectKey!: string;
            theTipoOrdineObjectTitle!: string;
    		theOrdinePadreObjectKey!: string;
            theOrdinePadreObjectTitle!: string;
   _links !: IOrdineLinks;
    
   constructor(ordine: IOrdine) {super(); this.mapEntity(ordine)}

    /**
     * Get Ordine objectKey.
     * 
     * @returns 
     */
    public getObjectKey() : string {
      const bzStringBuilder: BzStringBuilder = new BzStringBuilder();
      const builder = bzStringBuilder
        .append(this.ordineKey.idOrdine)
.append("~")
        .append(this.ordineKey.anno)
       return builder.value;
    }
    
    /**
     * Map entity to model.
     * 
     * @param prodotto 
     */
     private mapEntity(ordine: IOrdine) : void {
        if(ordine) {
            const bzAutoMapper: BzAutoMapper = BzAutoMapper.getInstance();
            bzAutoMapper.map('Ordine', 'IOrdine', ordine, this);
        }
     }
}


