
import { Component, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BzDialogService, PageObject } from 'blazing';
import { OrdineApiService } from 'src/app/pages/voila2sample-ms-demo-fe/ordine/ordine-api.service';
import { ordineForm } from 'src/app/pages/voila2sample-ms-demo-fe/ordine/ordine-form';
import { DialogListClienteComponent } from 'src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-cliente/dialog-list-cliente.component';
import { DialogListTipoOrdineComponent } from 'src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-tipo-ordine/dialog-list-tipo-ordine.component';
import { BaseTabComponent } from 'src/app/shared/base/base-tab.component';
import { fillOptions } from 'src/app/shared/base/base.helper';
import { extractResponse, extractTotalPages, setControl } from 'voila2-runtime-ng';
import { IOrdine } from '../../../ordine.interface';

@Component({
  selector: 'app-tab-ordine-figli',
  templateUrl: './tab-ordine-figli.component.html',
  styleUrls: ['./tab-ordine-figli.component.scss'],
  providers: [OrdineApiService]
})
export class TabOrdineFigliComponent extends BaseTabComponent<IOrdine> implements OnChanges {


  public theOrdineFigli !: FormArray;
  public theOrdineFigliList !: AbstractControl[];
  public ordineFigliList: IOrdine[] = []
  public form: FormGroup = ordineForm(this.formBuilder);
  public smartFormGroup: FormGroup = this.formBuilder.group({});



  constructor(
    private formBuilder: FormBuilder,
    private ordineApiService: 
     OrdineApiService,
    private dialogService: BzDialogService
  ) { super() }




  public ngOnChanges(changes: SimpleChanges) {
    this.manageEntityChanges(changes);
    this.managePageStatusChanges(changes);
  }



  /**
   * Paginate table.
   * 
   */
  public paginateTable(object: any): void {
    let options = fillOptions(this.pageStatus, object);
    if (this.theEntitylink) {
      this.ordineApiService.getListOrdineByLink(this.theEntitylink, options).subscribe(
        (data: any) => {
          this.ordineFigliList = extractResponse('ordine', data);
          this.totalPages = extractTotalPages(data);
          this.spinner = false;
        },
        () => {
          this.spinner = false;
        }
      )
    }
  }

  public getSmartArray(smartArray: any): void {
    if (this.smartFormGroup.valid || this.smartFormGroup.status === "DISABLED") {
      setControl(this.formGroup,'theOrdineFigli', smartArray);
    }
  }


  public showClienteListDialog(index: number): void {
    this.dialogService.showDialog(DialogListClienteComponent).subscribe(
      (data) => {
        if (data) {
		  
          this.setSmartControlByIndex(this.smartFormGroup, index, data, 'objectKey', 'theClienteObjectKey');
          
        }

      }
    )
  }
  public showTipoOrdineListDialog(index: number): void {
    this.dialogService.showDialog(DialogListTipoOrdineComponent).subscribe(
      (data) => {
        if (data) {
		  
          this.setSmartControlByIndex(this.smartFormGroup, index, data, 'objectKey', 'theTipoOrdineObjectKey');
          
        }

      }
    )
  }


  private managePageStatusChanges(changes: SimpleChanges): void {
    const pageStatusChanges: SimpleChange = changes.pageStatus;
    if (pageStatusChanges?.currentValue) {
      this.ordineFigliList = [];
      const object: PageObject = this.managePageStatus(pageStatusChanges, this.smartFormGroup);
      this.paginateTable(object);
    }
  }

  private manageEntityChanges(changes: SimpleChanges): void {
    const entityChanges: SimpleChange = changes.entity;
    if (entityChanges) {
      this.entity = entityChanges.currentValue;
      setControl(this.form,'theOrdineObjectKey', this.entity?.objectKey);
      this.theEntitylink = this.entity?._links.theOrdineFigli?.href;
    }
  }
}







