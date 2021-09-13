import { Component} from '@angular/core';
import { UsageComponent } from '../usage/usage.component';

@Component({
  selector: 'app-disabled-dropdown',
  templateUrl: './disabled-dropdown.component.html',
  styleUrls: ['./disabled-dropdown.component.scss']
})
export class DisabledDropdownComponent extends UsageComponent {

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
