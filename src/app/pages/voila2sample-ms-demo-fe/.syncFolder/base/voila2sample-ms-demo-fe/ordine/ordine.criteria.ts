
import {
 IntegerFilter,
 LocalDateFilter,
 BooleanFilter,
 StringFilter,
} from 'voila2-runtime-ng';


export interface OrdineCriteria {
	idOrdine?: IntegerFilter
	anno?: IntegerFilter
	dataOrdine?: LocalDateFilter
	urgente?: BooleanFilter
	theClienteObjectKey?: string;
	theTipoOrdineObjectKey?: string;
	theOrdinePadreObjectKey?: string;
}


