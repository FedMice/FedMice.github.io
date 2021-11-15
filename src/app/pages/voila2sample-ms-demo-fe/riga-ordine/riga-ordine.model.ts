
import { BaseModel } from "../../../shared/base/base.model";
import { BzAutoMapper, BzStringBuilder } from "blazing";
import { IRigaOrdineLinks, IRigaOrdine, 
 IRigaOrdineKey } from "./riga-ordine.interface";


export class RigaOrdine extends BaseModel {
       rigaOrdineKey !: IRigaOrdineKey
		  quantita !: number
    		theOrdineObjectKey!: string;
            theOrdineObjectTitle!: string;
    		theProdottoObjectKey!: string;
            theProdottoObjectTitle!: string;
   _links !: IRigaOrdineLinks;
    
   constructor(rigaordine: IRigaOrdine) {super(); this.mapEntity(rigaordine)}

    /**
     * Get RigaOrdine objectKey.
     * 
     * @returns 
     */
    public getObjectKey() : string {
      const bzStringBuilder: BzStringBuilder = new BzStringBuilder();
      const builder = bzStringBuilder
      .append(this.rigaOrdineKey.theOrdineObjectKey)
      .append("~")
      .append(this.rigaOrdineKey.theProdottoObjectKey)

       return builder.value;
    }
    
    /**
     * Map entity to model.
     * 
     * @param prodotto 
     */
     private mapEntity(rigaordine: IRigaOrdine) : void {
        if(rigaordine) {
            const bzAutoMapper: BzAutoMapper = BzAutoMapper.getInstance();
            bzAutoMapper.map('RigaOrdine', 'IRigaOrdine', rigaordine, this);
        }
     }
}


