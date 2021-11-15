
import {  Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ButtonService } from '../../../../utilities/services/buttons.service';
import { IProdotto , IProdottoDto } from '../prodotto.interface';
import { ProdottoApiService } from '../prodotto-api.service';
import { ProdottoGroupApiService } from '../prodotto-group-api.service';
import { prodottoForm} from '../prodotto-form';
import { Location } from '@angular/common';
import { ToastrService } from '../../../../utilities/services/toastr.service';
import { RouteService } from '../../../../utilities/services/route.service';
import { ConfirmDialogService } from '../../../../utilities/dialog/confirm-dialog.service';
import { BaseComponent } from '../../../../shared/base/base.component';
import { PageStatus } from '../../../../utilities/enum/page-status.enum';
import { OverlaysService } from '../../../../utilities/services/overlays.service';
import { prodotto_ } from '../prodotto.constant';
import { Data } from '@angular/router';
import { ApiResponse, getIdFromPath,  isInViewEditMode,  navigateToPath, getListForDropdown,
  getPrivilegesEnum, getPrivileges, extractResponse, isInNewMode} from "voila2-runtime-ng";
import { setTabObjectKey } from 'src/app/shared/base/base.helper';
import { TranslatePipe } from 'translate-ng';
import { Prodotto } from '../prodotto.model';

const PROVIDERS = [
  ProdottoApiService, 
  ButtonService,  
  OverlaysService, 
  RouteService, 
  ConfirmDialogService,
  ProdottoGroupApiService,
]

@Component({
  selector: 'app-detail-prodotto',
  templateUrl: './detail-prodotto.component.html',
  styleUrls: ['./detail-prodotto.component.scss'],
  providers: [...PROVIDERS ]
})
export class DetailProdottoComponent extends BaseComponent<IProdotto, IProdottoDto> implements OnInit {

  public prodottoForm !: FormGroup;
  public prodotto !: IProdotto;
  public spinner: boolean = true;

   public privileges: string[] = getPrivileges();
  
   public get Privileges(): any {
    return  getPrivilegesEnum(); 
   }

  constructor(
    public buttonsService: ButtonService,
    private formBuilder: FormBuilder,
    private routeService: RouteService,
    private overlaysService: OverlaysService,
    private injector: Injector,
    private prodottoGroupApiService : ProdottoGroupApiService
  ) { super()}

  ngOnInit(): void {
    this.prodottoForm = prodottoForm(this.formBuilder);
    this.routeService.route.data.subscribe(
      (data: Data) => {
        this.pageStatus = data.pageSatus;
      }
    )
    this.getProdottoById();
    this.setTabPageStatusOnInit();
    if(isInNewMode(this.pageStatus))
          this.spinner = false;
  }


  public insertProdotto(): void {
    const prodotto: IProdotto = this.prodottoForm.value;
	   setTabObjectKey( prodotto, new Prodotto(prodotto), 'theRigaOrdine', 'rigaOrdineKey.theProdottoObjectKey');
	this.prodottoGroupApiService.prodotto.addProdotto(prodotto).subscribe(
      (prodottoResult: ApiResponse<IProdotto>) => {
         const toast: ToastrService = this.overlaysService.toast;
        this.prodotto = this.manageResponse(prodottoResult, toast, new TranslatePipe(this.injector));
        if(this.prodotto)
          navigateToPath('/pages/ms-demo/prodotto/detail-prodotto/' + this.prodotto.objectKey + '/view', this.routeService.router);
      }
    )
  }

  public getProdottoById(): void {
    if (isInViewEditMode(this.pageStatus)) {
      const id = getIdFromPath(this.routeService.route);
      if (id) {
        this.prodottoGroupApiService.prodotto.getProdottoById(id).subscribe(
          (prodottoResult: ApiResponse<IProdotto>) => {
            this.prodotto = prodottoResult.response;
            this.setTabPageStatus(this.pageStatus);
            this.fillForm();
            this.spinner = false;
          },
           () => {
               this.spinner = false;
          }
        )
      }
    }
  }

  public fillForm(): void {
    this.prodottoForm.patchValue({
               idProdotto : this.prodotto.idProdotto,
               descrizioneProdotto : this.prodotto.descrizioneProdotto,
               prezzoUnitario : this.prodotto.prezzoUnitario,
               dataScadenza : this.prodotto.dataScadenza,
               limitedEdition : this.prodotto.limitedEdition,
               createdBy : this.prodotto.createdBy,
               lastModifiedBy : this.prodotto.lastModifiedBy,
               createdDate : this.prodotto.createdDate,
               lastModifiedDate : this.prodotto.lastModifiedDate,
	
      });
  }


  public editProdotto(): void {
    this.setStatusPage(PageStatus.EDIT, this.routeService.location);
    this.getProdottoById();
  }


  public updateProdotto(): void {
    const prodotto: IProdotto = this.prodottoForm.value;
    this.prodottoGroupApiService.prodotto.updateProdotto(prodotto).subscribe(
      (prodottoResult: ApiResponse<IProdotto>) => {
        const toast: ToastrService = this.overlaysService.toast;
        this.prodotto = this.manageResponse(prodottoResult,toast, new TranslatePipe(this.injector));
        if(this.prodotto)
          navigateToPath('/pages/ms-demo/prodotto/detail-prodotto/' + this.prodotto.objectKey + '/view', this.routeService.router);
      }
    )
  }


  /**
   * Delete prodotto by id.
   */
  public deleteProdottoById(): void {
	 this.prodottoGroupApiService.prodotto.deleteProdotto(this.prodotto.objectKey).subscribe(
      () => {
        this.overlaysService.toast.showSuccess(prodotto_.detail.toast.SUCCESS_DELETE);
        navigateToPath(prodotto_.detail.path.LIST, this.routeService.router);
        this.overlaysService.dialog.closeDialog();
      }
    )
  }

  /**
   * Confirm delete prodotto.
   */
  public confirmDeleteProdotto() : void {
    const message: string = prodotto_.detail.dialog.DELETE_MESSAGE;
    this.overlaysService.confirmDialog.openConfirmDialog(message).subscribe(
      (isTrue: boolean) => {
        if(isTrue)
         this.deleteProdottoById();
      }
    )
  }

 


  
}



