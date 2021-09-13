import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsComponent } from '../../../forms.component';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss',
    '../../dropdown.component.scss']
})
export class ErrorMessageComponent extends FormsComponent {


  constructor(private formBuilder: FormBuilder) { super() }

  public form = this.formBuilder.group(
    { 'country': ['', Validators.required] }
  )

  public countries: Country[] = [];

  ngOnInit(): void {
    this.countries = [
      { name: 'Italy', capital: 'Rome' },
      { name: 'France', capital: 'Paris' },
      { name: 'United Kingdom', capital: 'London' },
      { name: 'USA', capital: 'Washington' },
      { name: 'Spain', capital: 'Madrid' }
    ];
  }


}


interface Country {
  name: string,
  capital: string
}
