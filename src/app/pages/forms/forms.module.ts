import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BzAffixModule, BzButtonModule, BzCardModule, BzCodeBoxModule, 
  BzErrorModule, 
    BzIconModule, BzInputModule, BzTabsetModule, BzDatePickerModule, BzDropdownModule } from "blazing";
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
import { PrefixSuffixComponent } from './input/cards/prefix-suffix/prefix-suffix.component';
import { StatusComponent } from './input/cards/status/status.component';
import { DisabledInputComponent } from './input/cards/disabled-input/disabled-input.component';
import { InputButtonComponent } from './input/cards/input-button/input-button.component';
import { UsageComponent } from './dropdown/cards/usage/usage.component';
import { ErrorMessageComponent } from './dropdown/cards/error-message/error-message.component';
import { ValueBindingComponent } from './dropdown/cards/value-binding/value-binding.component';
import { StatusDropdownComponent } from './dropdown/cards/status-dropdown/status-dropdown.component';
import { DisabledDropdownComponent } from './dropdown/cards/disabled-dropdown/disabled-dropdown.component';
import { MultiDropdownComponent } from "./dropdown/cards/multi-dropdown/multi-dropdown.component";


const COMPONENTS = [
    FormsComponent, 
    InputComponent, 
    DropdownComponent, 
    CheckboxComponent, 
    RadioComponent, 
    SwitchComponent, 
    DatePickerComponent, 
    TextareaComponent,
    UsageInputComponent,
    PrefixSuffixComponent,
    ValidationComponent,
    StatusComponent,
    DisabledInputComponent,
    InputButtonComponent,
    UsageComponent,
    ErrorMessageComponent,
    ValueBindingComponent, 
    StatusDropdownComponent,
    DisabledDropdownComponent,
    MultiDropdownComponent
  ]
  
  @NgModule({
    declarations: [...COMPONENTS],
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
      BzIconModule,
      BzErrorModule,
      ReactiveFormsModule,
      BzDatePickerModule,
      BzDropdownModule,
    ],
    exports: [...COMPONENTS]
  })
  export class FormssModule { }
  