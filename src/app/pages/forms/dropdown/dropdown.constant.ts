export const DropdownConstant = {
    INSTALLATION:
    `import {BzDropdownModule} from 'blazing';

@NgModule({
    imports: [
        BzDropdownModule,
              ...
     ],
          ...
    })
export class YourModule { }
  `,

  USAGE_HTML:
  ` <bz-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name">
</bz-dropdown>`,

USAGE_TS:
`@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdwon.component.html',
    styleUrls: ['./dropdown.component.scss']
  })
export class DropdownComponent  {
  
    public countries: Country[] = [];
  
    public selectedCountry!: Country;
   
      ngOnInit() : void {
        this.countries = [
          {name: 'Italy', capital: 'Rome'},
          {name: 'France', capital: 'Paris'},
          {name: 'United Kingdom', capital: 'London'},
          {name: 'USA', capital: 'Washington'},
          {name: 'Spain', capital: 'Madrid'}
      ];
}
  

  }
  
  interface Country {
    name: string,
    capital: string
  }
  `,

ERROR_MESSAGE_HTML:
  `<form [formGroup]="form" >
  <bz-dropdown [options]="countries" formControlName="country" optionLabel="name" 
       placeholder="country" label="County:">
    <bz-error>Error</bz-error>
  </bz-dropdown>

  <button bzButton status="primary" class="fk-r-mt-4">Submit</button>
</form>`,

ERROR_MESSAGE_TS:
`@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class ErrorMessageComponent extends FormsComponent {

  
  constructor(private formBuilder: FormBuilder){}

  public form = this.formBuilder.group(
   { 'country': ['', Validators.required]}
  )

  public countries: Country[] = [];

    ngOnInit() : void {
      this.countries = [
        {name: 'Italy', capital: 'Rome'},
        {name: 'France', capital: 'Paris'},
        {name: 'United Kingdom', capital: 'London'},
        {name: 'USA', capital: 'Washington'},
        {name: 'Spain', capital: 'Madrid'}
    ];
    }


}


interface Country {
  name: string,
  capital: string
}
  `,

VALUE_BINDING_HTML:
  `<form [formGroup]="form" >
  <bz-dropdown [options]="countries" formControlName="country" optionLabel="name" 
       placeholder="country" label="County:" optionValue="capital">
  </bz-dropdown>
</form>`,

STATUS_HTML:
  `<div>
  <bz-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" 
      label="Basic:" status="basic"></bz-dropdown>
 
  <bz-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" 
      label="Primary:" status="primary"></bz-dropdown>
 
  <bz-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" 
      label="Danger:" status="danger"></bz-dropdown>
</div>`,


MULTIPLE_HTML:
  `<div>
    <bz-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name"
     label="County:" placeholder="Country" multi></bz-dropdown>
</div>`,

}


