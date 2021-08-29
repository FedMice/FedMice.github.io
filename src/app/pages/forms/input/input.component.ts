import { Component } from '@angular/core';
import { FormsComponent } from '../forms.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends FormsComponent {

   public name : string = '';

}
