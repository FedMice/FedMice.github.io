import { Component } from '@angular/core';
import { UsageComponent } from '../usage/usage.component';



@Component({
  selector: 'app-multi-dropdown',
  templateUrl: './multi-dropdown.component.html',
  styleUrls: ['./multi-dropdown.component.scss',
  '../../dropdown.component.scss']
})
export class MultiDropdownComponent extends UsageComponent {

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
