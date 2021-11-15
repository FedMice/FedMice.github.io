
import { BaseEntity } from "../../../shared/base/base.interface";

export interface ICliente extends BaseEntity {
ragioneSociale: string
       
             
referenteAziendale: string
       
             
email: string
       
             
telefono: string
       
             
piva: string
       
             
codiceFiscale: string
       
             
sitoInternet: string
       
             
fax: string
       
             
organizzazionePadre: string
       
             
    		theUserEntityObjectKey: string;
            theUserEntityObjectTitle: string;
   _links: IClienteLinks;
}

export interface IClienteLinks {
    	theOrdine : Path;
}

export interface IClienteDto {
    clienteDto: ICliente
}

export interface Path {
    href: string
}



