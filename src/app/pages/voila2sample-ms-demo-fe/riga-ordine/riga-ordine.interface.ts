
import { BaseEntity } from "../../../shared/base/base.interface";
import { IOrdineKey } from "../ordine/ordine.interface"

export interface IRigaOrdine extends BaseEntity {
    rigaOrdineKey: IRigaOrdineKey
    quantita: number
    theOrdineObjectKey: string;
    theOrdineObjectTitle: string;
    theProdottoObjectKey: string;
    theProdottoObjectTitle: string;
    _links: IRigaOrdineLinks;
}

export interface IRigaOrdineLinks {
}

export interface IRigaOrdineDto {
    rigaOrdineDto: IRigaOrdine
}

export interface Path {
    href: string
}

export interface IRigaOrdineKey {
    ordineKey: IOrdineKey
    theOrdineObjectKey: string;
    theOrdineObjectTitle: string;
    idProdotto: number
    theProdottoObjectKey: string;
    theProdottoObjectTitle: string;
}


