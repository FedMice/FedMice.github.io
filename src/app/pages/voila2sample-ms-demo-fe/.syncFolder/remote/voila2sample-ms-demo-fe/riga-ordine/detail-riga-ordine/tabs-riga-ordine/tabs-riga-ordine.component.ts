
import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IRigaOrdine } from '../../riga-ordine.interface';
import { getPrivileges, getPrivilegesEnum } from 'voila2-runtime-ng';


@Component({
  selector: 'app-tabs-riga-ordine',
  templateUrl: './tabs-riga-ordine.component.html',
  styleUrls: ['./tabs-riga-ordine.component.scss']
})
export class TabsRigaOrdineComponent implements OnChanges {

 public privileges: string[] = getPrivileges();

  @Input()
  public formGroup !: FormGroup;

  @Input()
  public entity !: IRigaOrdine;

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



