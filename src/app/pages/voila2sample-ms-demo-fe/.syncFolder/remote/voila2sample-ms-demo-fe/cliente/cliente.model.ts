
import { BaseModel } from "../../../shared/base/base.model";
import { BzAutoMapper, BzStringBuilder } from "blazing";


import { IClienteLinks, ICliente, 
  } from "./cliente.interface";

export class Cliente extends BaseModel {
ragioneSociale !: string
referenteAziendale !: string
email !: string
telefono !: string
piva !: string
codiceFiscale !: string
sitoInternet !: string
fax !: string
organizzazionePadre !: string
    		theUserEntityObjectKey!: string;
            theUserEntityObjectTitle!: string;
   _links !: IClienteLinks;
    
   constructor(cliente: ICliente) {super(); this.mapEntity(cliente)}

    /**
     * Get Cliente objectKey.
     * 
     * @returns 
     */
    public getObjectKey() : string {
      const bzStringBuilder: BzStringBuilder = new BzStringBuilder();
      const builder = bzStringBuilder
 .append(this.ragioneSociale)
       return builder.value;
    }
    
    /**
     * Map entity to model.
     * 
     * @param prodotto 
     */
     private mapEntity(cliente: ICliente) : void {
        if(cliente) {
            const bzAutoMapper: BzAutoMapper = BzAutoMapper.getInstance();
            bzAutoMapper.map('Cliente', 'ICliente', cliente, this);
        }
     }
}


