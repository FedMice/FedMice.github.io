
import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ITipoOrdine } from '../../tipo-ordine.interface';
import { getPrivileges, getPrivilegesEnum } from 'voila2-runtime-ng';


@Component({
  selector: 'app-tabs-tipo-ordine',
  templateUrl: './tabs-tipo-ordine.component.html',
  styleUrls: ['./tabs-tipo-ordine.component.scss']
})
export class TabsTipoOrdineComponent implements OnChanges {

 public privileges: string[] = getPrivileges();
 public readonly: boolean = true;

  @Input()
  public formGroup !: FormGroup;

  @Input()
  public entity !: ITipoOrdine;

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



