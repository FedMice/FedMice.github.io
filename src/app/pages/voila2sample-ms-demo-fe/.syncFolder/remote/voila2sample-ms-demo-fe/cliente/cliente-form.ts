
import { FormBuilder, Validators } from "@angular/forms";

export function clienteForm(formBuilder: FormBuilder) {
     return formBuilder.group({ 
               ragioneSociale :  [null, Validators.required],
               referenteAziendale :  [null],
               email :  [null],
               telefono :  [null],
               piva :  [null],
               codiceFiscale :  [null],
               sitoInternet :  [null],
               fax :  [null],
               organizzazionePadre :  [null],
              theUserEntityObjectKey: [null],
    	theOrdine: [[]],
      

     })
 }
 
