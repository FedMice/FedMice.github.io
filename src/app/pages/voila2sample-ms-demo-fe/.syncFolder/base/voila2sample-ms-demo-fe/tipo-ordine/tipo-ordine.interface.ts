
import { BaseEntity } from "../../../shared/base/base.interface";

export interface ITipoOrdine extends BaseEntity {
idTipoOrdine: number
       
             
nomeTipoOrdine: string
       
             
   _links: ITipoOrdineLinks;
}

export interface ITipoOrdineLinks {
    	theOrdine : Path;
}

export interface ITipoOrdineDto {
    tipoOrdineDto: ITipoOrdine
}

export interface Path {
    href: string
}



