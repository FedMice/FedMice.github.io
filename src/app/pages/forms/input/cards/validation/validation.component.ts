import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsComponent } from '../../../forms.component';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent extends FormsComponent {

  constructor(private _formBuilder: FormBuilder){super()}

  public form = this._formBuilder.group(
   { 'email': ['', Validators.required]}
  )

}
