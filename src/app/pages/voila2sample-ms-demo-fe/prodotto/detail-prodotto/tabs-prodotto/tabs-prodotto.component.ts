
import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IProdotto } from '../../prodotto.interface';
import { getPrivileges, getPrivilegesEnum } from 'voila2-runtime-ng';


@Component({
  selector: 'app-tabs-prodotto',
  templateUrl: './tabs-prodotto.component.html',
  styleUrls: ['./tabs-prodotto.component.scss']
})
export class TabsProdottoComponent implements OnChanges {

 public privileges: string[] = getPrivileges();

  @Input()
  public formGroup !: FormGroup;

  @Input()
  public entity !: IProdotto;

  @Input()
  public pageStatus !: string;

 

  public get Privileges(): any {
        return getPrivilegesEnum();
    }
   


  public ngOnChanges(changes: SimpleChanges) {
    this.manageEntityChanges(changes);
    this.managePageSatutusChanges(changes);
  }


  private managePageSatutusChanges(changes: SimpleChanges) : void {
    const pageStatusChanges: SimpleChange = changes.pageStatus;
    if(pageStatusChanges)
      this.pageStatus = pageStatusChanges?.currentValue;
  }

  private manageEntityChanges(changes: SimpleChanges): void {
    const entityChanges: SimpleChange = changes.entity;
    if(entityChanges?.currentValue) {
      this.entity = entityChanges.currentValue;
    }
  }
 

}



