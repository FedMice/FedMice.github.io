
import { FormBuilder, Validators } from "@angular/forms";

export function prodottoForm(formBuilder: FormBuilder) {
     return formBuilder.group({ 
               idProdotto :  [null, Validators.required],
               descrizioneProdotto :  [null],
               prezzoUnitario :  [null],
               dataScadenza :  [null],
               limitedEdition :  [null],
               createdBy :  [null],
               lastModifiedBy :  [null],
               createdDate :  [null],
               lastModifiedDate :  [null],
    	theRigaOrdine: [[]],
      

     })
 }
 
