
import { BaseEntity } from "../../../shared/base/base.interface";

export interface IOrdine extends BaseEntity {
	ordineKey: IOrdineKey
	dataOrdine: Date
	urgente: boolean
	theClienteObjectKey: string;
	theClienteObjectTitle: string;
	theTipoOrdineObjectKey: string;
	theTipoOrdineObjectTitle: string;
	theOrdinePadreObjectKey: string;
	theOrdinePadreObjectTitle: string;
	_links: IOrdineLinks;
}

export interface IOrdineLinks {
	theRigaOrdine: Path;
	theOrdineFigli: Path;
}

export interface IOrdineDto {
	ordineDto: IOrdine
}

export interface Path {
	href: string
}

export interface IOrdineKey {
	idOrdine: number
	anno: number
}


