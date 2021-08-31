import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BzAffixModule, BzButtonModule, BzCardModule, BzCodeBoxModule, 
    BzIconModule, BzInputModule, BzTabsetModule } from "blazing";
import { UtilityDirectiveModule } from "src/app/utilities/pipe/utility-directive.module";
import { FormsRoutingModule } from "./forms-routing.module";
import { FormsComponent } from "./forms.component";
import { InputComponent } from './input/input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SwitchComponent } from './switch/switch.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TextareaComponent } from './textarea/textarea.component';
import { UsageInputComponent } from './input/cards/usage-input/usage-input.component';
import { ValidationComponent } from './input/cards/validation/validation.component';

const COMPONENTS = [
    FormsComponent, 
    InputComponent, 
    DropdownComponent, 
    CheckboxComponent, 
    RadioComponent, 
    SwitchComponent, 
    DatePickerComponent, 
    TextareaComponent,
    UsageInputComponent
  ]
  
  @NgModule({
    declarations: [...COMPONENTS, ValidationComponent],
    imports: [
      CommonModule,
      FormsRoutingModule,
      BzCardModule,
      BzAffixModule,
      UtilityDirectiveModule,
      BzCodeBoxModule,
      BzTabsetModule,
      BzButtonModule,
      BzInputModule,
      FormsModule,
      BzIconModule
    ],
    exports: [...COMPONENTS]
  })
  export class FormssModule { }
  