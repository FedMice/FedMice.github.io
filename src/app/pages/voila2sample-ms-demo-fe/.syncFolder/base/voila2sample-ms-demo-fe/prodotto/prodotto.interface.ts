
import { BaseEntity } from "../../../shared/base/base.interface";

export interface IProdotto extends BaseEntity {
idProdotto: number
       
             
descrizioneProdotto: string
       
             
prezzoUnitario: number
       
             
dataScadenza: Date
       
             
limitedEdition: boolean
       
             
createdBy: string
       
             
lastModifiedBy: string
       
             
createdDate: Date
       
             
lastModifiedDate: Date
       
             
   _links: IProdottoLinks;
}

export interface IProdottoLinks {
    	theRigaOrdine : Path;
}

export interface IProdottoDto {
    prodottoDto: IProdotto
}

export interface Path {
    href: string
}



