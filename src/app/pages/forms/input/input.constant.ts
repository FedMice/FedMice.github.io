export const InputConstant = {
    INSTALLATION:
    `import {BzInputModule} from 'blazing';

@NgModule({
    imports: [
        BzInputModule,
              ...
     ],
          ...
    })
export class YourModule { }
  `,

USAGE_HTML:
  ` <bz-input label="Write your name:" [(ngModel)]="name" placeholder="Name"></bz-input>
<div class="fk-r-mt-10 fk-r-ml-3">{{name}}</div>
`,

USAGE_TS:
` 
import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';

@Component({
selector: 'app-input',
templateUrl: './input.component.html',
styleUrls: ['./input.component.scss']
})
export class InputComponent  {

  public name: string = '';


}

`,

PREFIX_SUFFIX_HTML:
  `  <!-- Prefix -->
<bz-input label="Prefix:">
  <bz-icon bzInputPrefix iconName="fa fa-user"></bz-icon>
</bz-input>

<!-- Suffix -->
<bz-input label="Suffix:"  type="password">
   <bz-icon bzInputSuffix iconName="fa fa-eye" class="fk-pointer" ></bz-icon>
</bz-input>
`,

VALIDATION_HTML:
  `<form [formGroup]="form">
  <bz-input label="Error:" formControlName="email">
    <bz-error> Error</bz-error>
  </bz-input>

  <button bzButton status="primary" >Submit</button>
</form>
`,

VALIDATION_TS:
` 
import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';

@Component({
selector: 'app-input',
templateUrl: './input.component.html',
styleUrls: ['./input.component.scss']
})
export class InputComponent  {

  constructor(private _formBuilder: FormBuilder){}

  public form = this._formBuilder.group(
   { 'email': ['', Validators.required]}
  )


}

`,

DISABLED_HTML:
  ` <bz-input label="Input disabled:" disableAttr></bz-input>
`,

STATUS_HTML:
  ` <bz-input label="Basic:" status="basic"></bz-input>

  <bz-input label="Primary:" status="primary" ></bz-input>

  <bz-input label="Danger:" status="danger" ></bz-input>
`,

BUTTON_HTML:
  `<bz-input label="Input with button">
  <button bzInputButton status="primary">
      <bz-icon iconName="fa fa-window-maximize"></bz-icon>
  </button>
</bz-input>
`,


}