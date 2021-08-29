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

}