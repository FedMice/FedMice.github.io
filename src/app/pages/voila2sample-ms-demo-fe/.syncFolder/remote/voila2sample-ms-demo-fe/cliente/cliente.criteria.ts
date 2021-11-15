
import {
 StringFilter,
} from 'voila2-runtime-ng';


export interface ClienteCriteria {
	ragioneSociale?: StringFilter
	referenteAziendale?: StringFilter
	email?: StringFilter
	telefono?: StringFilter
	piva?: StringFilter
	codiceFiscale?: StringFilter
	sitoInternet?: StringFilter
	fax?: StringFilter
	organizzazionePadre?: StringFilter
	theUserEntityObjectKey?: string;
}


