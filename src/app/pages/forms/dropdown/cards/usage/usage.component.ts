import { Component } from '@angular/core';
import { FormsComponent } from '../../../forms.component';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss',
    '../../dropdown.component.scss']
})
export class UsageComponent extends FormsComponent {


  public countries: Country[] = [];

  public selectedCountry!: Country;


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


