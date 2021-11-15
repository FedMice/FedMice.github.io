
import { Component, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BzDialogService, PageObject } from 'blazing';
import { RigaOrdineApiService } from 'src/app/pages/voila2sample-ms-demo-fe/riga-ordine/riga-ordine-api.service';
import { rigaOrdineForm } from 'src/app/pages/voila2sample-ms-demo-fe/riga-ordine/riga-ordine-form';
import { IRigaOrdine } from 'src/app/pages/voila2sample-ms-demo-fe/riga-ordine/riga-ordine.interface';
import { DialogListProdottoComponent } from 'src/app/pages/voila2sample-ms-demo-fe/dialog/dialog-list-prodotto/dialog-list-prodotto.component';
import { BaseTabComponent } from 'src/app/shared/base/base-tab.component';
import { fillOptions } from 'src/app/shared/base/base.helper';
import { extractResponse, extractTotalPages, setControl } from 'voila2-runtime-ng';
import { IOrdine } from '../../../ordine.interface';

@Component({
  selector: 'app-tab-riga-ordine',
  templateUrl: './tab-riga-ordine.component.html',
  styleUrls: ['./tab-riga-ordine.component.scss'],
  providers: [RigaOrdineApiService]
})
export class TabRigaOrdineComponent extends BaseTabComponent<IOrdine> implements OnChanges {


  public theRigaOrdine !: FormArray;
  public theRigaOrdineList !: AbstractControl[];
  public rigaOrdineList: IRigaOrdine[] = []
  public form: FormGroup = rigaOrdineForm(this.formBuilder);
  public smartFormGroup: FormGroup = this.formBuilder.group({});



  constructor(
    private formBuilder: FormBuilder,
    private rigaOrdineApiService: 
     RigaOrdineApiService,
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
      this.rigaOrdineApiService.getListRigaOrdineByLink(this.theEntitylink, options).subscribe(
        (data: any) => {
          this.rigaOrdineList = extractResponse('rigaOrdine', data);
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
      setControl(this.formGroup,'theRigaOrdine', smartArray);
    }
  }


  public showProdottoListDialog(index: number): void {
    this.dialogService.showDialog(DialogListProdottoComponent).subscribe(
      (data) => {
        if (data) {
		  
          this.setSmartControlByIndex(this.smartFormGroup, index, data, 'objectKey', 'rigaOrdineKey.theProdottoObjectKey');
          
        }

      }
    )
  }


  private managePageStatusChanges(changes: SimpleChanges): void {
    const pageStatusChanges: SimpleChange = changes.pageStatus;
    if (pageStatusChanges?.currentValue) {
      this.rigaOrdineList = [];
      const object: PageObject = this.managePageStatus(pageStatusChanges, this.smartFormGroup);
      this.paginateTable(object);
    }
  }

  private manageEntityChanges(changes: SimpleChanges): void {
    const entityChanges: SimpleChange = changes.entity;
    if (entityChanges) {
      this.entity = entityChanges.currentValue;
      setControl(this.form,'rigaOrdineKey.theOrdineObjectKey', this.entity?.objectKey);
      this.theEntitylink = this.entity?._links.theRigaOrdine?.href;
    }
  }
}







