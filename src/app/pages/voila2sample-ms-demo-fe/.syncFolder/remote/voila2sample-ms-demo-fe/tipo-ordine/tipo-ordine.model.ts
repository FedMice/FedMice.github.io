
import { BaseModel } from "../../../shared/base/base.model";
import { BzAutoMapper, BzStringBuilder } from "blazing";


import { ITipoOrdineLinks, ITipoOrdine, 
  } from "./tipo-ordine.interface";

export class TipoOrdine extends BaseModel {
idTipoOrdine !: number
nomeTipoOrdine !: string
   _links !: ITipoOrdineLinks;
    
   constructor(tipoordine: ITipoOrdine) {super(); this.mapEntity(tipoordine)}

    /**
     * Get TipoOrdine objectKey.
     * 
     * @returns 
     */
    public getObjectKey() : string {
      const bzStringBuilder: BzStringBuilder = new BzStringBuilder();
      const builder = bzStringBuilder
 .append(this.idTipoOrdine)
       return builder.value;
    }
    
    /**
     * Map entity to model.
     * 
     * @param prodotto 
     */
     private mapEntity(tipoordine: ITipoOrdine) : void {
        if(tipoordine) {
            const bzAutoMapper: BzAutoMapper = BzAutoMapper.getInstance();
            bzAutoMapper.map('TipoOrdine', 'ITipoOrdine', tipoordine, this);
        }
     }
}


