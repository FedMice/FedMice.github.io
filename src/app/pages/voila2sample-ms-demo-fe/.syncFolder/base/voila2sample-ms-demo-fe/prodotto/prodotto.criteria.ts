
import {
 IntegerFilter,
 StringFilter,
 BigDecimalFilter,
 LocalDateTimeFilter,
 BooleanFilter,
} from 'voila2-runtime-ng';


export interface ProdottoCriteria {
	idProdotto?: IntegerFilter
	descrizioneProdotto?: StringFilter
	prezzoUnitario?: BigDecimalFilter
	dataScadenza?: LocalDateTimeFilter
	limitedEdition?: BooleanFilter
	createdBy?: StringFilter
	lastModifiedBy?: StringFilter
	createdDate?: LocalDateTimeFilter
	lastModifiedDate?: LocalDateTimeFilter
}


