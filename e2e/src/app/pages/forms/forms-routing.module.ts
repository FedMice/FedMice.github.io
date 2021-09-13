import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsComponent } from './forms.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { SwitchComponent } from './switch/switch.component';
import { TextareaComponent } from './textarea/textarea.component';


const routes: Routes = [
    {
      path: '', component: FormsComponent,
      children: [
        { path:'input', component: InputComponent},
        { path:'dropdown', component: DropdownComponent},
        { path:'checkbox', component: CheckboxComponent},
        { path:'radio', component: RadioComponent},
        { path:'switch', component: SwitchComponent},
        { path:'textarea', component: TextareaComponent},
        { path:'date-picker', component: DatePickerComponent},
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FormsRoutingModule { }