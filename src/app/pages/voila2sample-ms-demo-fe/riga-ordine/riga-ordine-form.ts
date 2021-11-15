
import { FormBuilder, Validators } from "@angular/forms";

export function rigaOrdineForm(formBuilder: FormBuilder) {
     return formBuilder.group({ 
          rigaOrdineKey : formBuilder.group({
	              idOrdine : [null],
	              anno : [null],
              theOrdineObjectKey: [null, Validators.required],
                  idProdotto: [null],
          	      theProdottoObjectKey: [null, Validators.required],
          }),
		      quantita :  [null],
      

     })
 }
 
