
import { FormBuilder, Validators } from "@angular/forms";

export function ordineForm(formBuilder: FormBuilder) {
     return formBuilder.group({ 
          ordineKey : formBuilder.group({
            idOrdine: [null, Validators.required],
            anno: [null, Validators.required],
          }),
		      dataOrdine :  [null],
		      urgente :  [null],
			theClienteObjectKey: [null, Validators.required],
			theTipoOrdineObjectKey: [null],
			theOrdinePadreObjectKey: [null],
    	theRigaOrdine: [[]],
    	theOrdineFigli: [[]],
      

     })
 }
 
