import { Component } from '@angular/core';
import { UsageComponent } from '../usage/usage.component';




@Component({
  selector: 'app-value-binding',
  templateUrl: './value-binding.component.html',
  styleUrls: ['./value-binding.component.scss',
  '../../dropdown.component.scss']
})
export class ValueBindingComponent extends UsageComponent {

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





