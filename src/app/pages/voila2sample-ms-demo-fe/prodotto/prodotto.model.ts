
import { BaseModel } from "../../../shared/base/base.model";
import { BzAutoMapper, BzStringBuilder } from "blazing";


import { IProdottoLinks, IProdotto, 
  } from "./prodotto.interface";

export class Prodotto extends BaseModel {
idProdotto !: number
descrizioneProdotto !: string
prezzoUnitario !: number
dataScadenza !: Date
limitedEdition !: boolean
createdBy !: string
lastModifiedBy !: string
createdDate !: Date
lastModifiedDate !: Date
   _links !: IProdottoLinks;
    
   constructor(prodotto: IProdotto) {super(); this.mapEntity(prodotto)}

    /**
     * Get Prodotto objectKey.
     * 
     * @returns 
     */
    public getObjectKey() : string {
      const bzStringBuilder: BzStringBuilder = new BzStringBuilder();
      const builder = bzStringBuilder

 .append(this.idProdotto)
       return builder.value;
    }
    
    /**
     * Map entity to model.
     * 
     * @param prodotto 
     */
     private mapEntity(prodotto: IProdotto) : void {
        if(prodotto) {
            const bzAutoMapper: BzAutoMapper = BzAutoMapper.getInstance();
            bzAutoMapper.map('Prodotto', 'IProdotto', prodotto, this);
        }
     }
}


