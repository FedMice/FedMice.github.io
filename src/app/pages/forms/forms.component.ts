import { Component } from '@angular/core';
import { CheckboxConstant } from './checkbox/checkbox.constant';
import { DropdownConstant } from './dropdown/dropdown.constant';
import { InputConstant } from './input/input.constant';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent  {

  public get InputConstant(): any {
    return InputConstant;
  }

  public get CheckboxConstant(): any {
    return CheckboxConstant;
  }

  public get DropdownConstant(): any {
    return DropdownConstant;
  }

}
