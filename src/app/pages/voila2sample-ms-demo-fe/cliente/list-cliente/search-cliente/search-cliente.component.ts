import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateService } from 'blazing';
import { ClienteGroupApiService } from '../../cliente-group-api.service';
import {
	StringFilter
	, extractResponse
} from 'voila2-runtime-ng';

import { ClienteCriteria } from '../../cliente.criteria';

const PROVIDERS = [
	ClienteGroupApiService,

]

@Component({
	selector: 'app-search-cliente',
	templateUrl: './search-cliente.component.html',
	styleUrls: ['./search-cliente.component.scss'],
	providers: [...PROVIDERS]
})
export class SearchClienteComponent implements OnInit {

	public searchClienteForm !: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private dateService: DateService,
		private clienteGroupApiService: ClienteGroupApiService,

	) { }

	ngOnInit(): void {
		this.inizialize();
	}

	public search(): any {
		let clienteCriteria: ClienteCriteria = Object.assign({});

		if (this.searchClienteForm.value) {


			const ragioneSociale: string = this.searchClienteForm.value.ragioneSociale;

			//ragioneSociale
			if (ragioneSociale) {
				clienteCriteria.ragioneSociale = new StringFilter;
				clienteCriteria.ragioneSociale.setContains(this.searchClienteForm.value.ragioneSociale);
			}



			const referenteAziendale: string = this.searchClienteForm.value.referenteAziendale;

			//referenteAziendale
			if (referenteAziendale) {
				clienteCriteria.referenteAziendale = new StringFilter;
				clienteCriteria.referenteAziendale.setContains(this.searchClienteForm.value.referenteAziendale);
			}



			const email: string = this.searchClienteForm.value.email;

			//email
			if (email) {
				clienteCriteria.email = new StringFilter;
				clienteCriteria.email.setContains(this.searchClienteForm.value.email);
			}



			const telefono: string = this.searchClienteForm.value.telefono;

			//telefono
			if (telefono) {
				clienteCriteria.telefono = new StringFilter;
				clienteCriteria.telefono.setContains(this.searchClienteForm.value.telefono);
			}



			const piva: string = this.searchClienteForm.value.piva;

			//piva
			if (piva) {
				clienteCriteria.piva = new StringFilter;
				clienteCriteria.piva.setContains(this.searchClienteForm.value.piva);
			}



			const codiceFiscale: string = this.searchClienteForm.value.codiceFiscale;

			//codiceFiscale
			if (codiceFiscale) {
				clienteCriteria.codiceFiscale = new StringFilter;
				clienteCriteria.codiceFiscale.setContains(this.searchClienteForm.value.codiceFiscale);
			}



			const sitoInternet: string = this.searchClienteForm.value.sitoInternet;

			//sitoInternet
			if (sitoInternet) {
				clienteCriteria.sitoInternet = new StringFilter;
				clienteCriteria.sitoInternet.setContains(this.searchClienteForm.value.sitoInternet);
			}



			const fax: string = this.searchClienteForm.value.fax;

			//fax
			if (fax) {
				clienteCriteria.fax = new StringFilter;
				clienteCriteria.fax.setContains(this.searchClienteForm.value.fax);
			}



			const organizzazionePadre: string = this.searchClienteForm.value.organizzazionePadre;

			//organizzazionePadre
			if (organizzazionePadre) {
				clienteCriteria.organizzazionePadre = new StringFilter;
				clienteCriteria.organizzazionePadre.setContains(this.searchClienteForm.value.organizzazionePadre);
			}


		}

		return clienteCriteria;
	}

	public inizialize(): void {
		this.searchClienteForm = this.formBuilder.group(
			{
				'ragioneSociale': [null],
				'referenteAziendale': [null],
				'email': [null],
				'telefono': [null],
				'piva': [null],
				'codiceFiscale': [null],
				'sitoInternet': [null],
				'fax': [null],
				'organizzazionePadre': [null],

			}
		)
	}





}

