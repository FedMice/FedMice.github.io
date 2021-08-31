import { Component } from '@angular/core';
import { FormsComponent } from '../../../forms.component';

@Component({
  selector: 'app-usage-input',
  templateUrl: './usage-input.component.html',
  styleUrls: ['./usage-input.component.scss']
})
export class UsageInputComponent extends FormsComponent {

    public name: string = '';

}
