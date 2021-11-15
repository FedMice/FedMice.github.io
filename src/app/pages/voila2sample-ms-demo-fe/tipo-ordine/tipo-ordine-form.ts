
import { FormBuilder, Validators } from "@angular/forms";

export function tipoOrdineForm(formBuilder: FormBuilder) {
     return formBuilder.group({ 
               idTipoOrdine :  [null],
               nomeTipoOrdine :  [null],
    	theOrdine: [[]],
      

     })
 }
 
