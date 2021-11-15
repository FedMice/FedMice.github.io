
import {  Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ButtonService } from '../../../../utilities/services/buttons.service';
import { IRigaOrdine , IRigaOrdineDto } from '../riga-ordine.interface';
import { RigaOrdineApiService } from '../riga-ordine-api.service';
import { RigaOrdineGroupApiService } from '../riga-ordine-group-api.service';
import { rigaOrdineForm} from '../riga-ordine-form';
import { Location } from '@angular/common';
import { ToastrService } from '../../../../utilities/services/toastr.service';
import { RouteService } from '../../../../utilities/services/route.service';
import { ConfirmDialogService } from '../../../../utilities/dialog/confirm-dialog.service';
import { BaseComponent } from '../../../../shared/base/base.component';
import { PageStatus } from '../../../../utilities/enum/page-status.enum';
import { OverlaysService } from '../../../../utilities/services/overlays.service';
import { rigaOrdine_ } from '../riga-ordine.constant';
import { Data } from '@angular/router';
import { ApiResponse, getIdFromPath,  isInViewEditMode,  navigateToPath, getListForDropdown,
  getPrivilegesEnum, getPrivileges, extractResponse, isInNewMode} from "voila2-runtime-ng";
import { setTabObjectKey, useMapper } from 'src/app/shared/base/base.helper';
import { IOrdine } from '../../../voila2sample-ms-demo-fe/ordine/ordine.interface';
import { OrdineApiService } from '../../../voila2sample-ms-demo-fe/ordine/ordine-api.service';
import { IProdotto } from '../../../voila2sample-ms-demo-fe/prodotto/prodotto.interface';
import { ProdottoApiService } from '../../../voila2sample-ms-demo-fe/prodotto/prodotto-api.service';
import { TranslatePipe } from 'translate-ng';
import { RigaOrdine } from '../riga-ordine.model';

const PROVIDERS = [
  RigaOrdineApiService, 
  ButtonService,  
  OverlaysService, 
  RouteService, 
  ConfirmDialogService,
  RigaOrdineGroupApiService,
  OrdineApiService,
  ProdottoApiService,
]

@Component({
  selector: 'app-detail-riga-ordine',
  templateUrl: './detail-riga-ordine.component.html',
  styleUrls: ['./detail-riga-ordine.component.scss'],
  providers: [...PROVIDERS ]
})
export class DetailRigaOrdineComponent extends BaseComponent<IRigaOrdine, IRigaOrdineDto> implements OnInit {

  public rigaOrdineForm !: FormGroup;
  public rigaOrdine !: IRigaOrdine;
  public ordineList : IOrdine[] = [];
  public prodottoList : IProdotto[] = [];
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
    private rigaOrdineGroupApiService : RigaOrdineGroupApiService
  ) { super()}

  ngOnInit(): void {
    this.rigaOrdineForm = rigaOrdineForm(this.formBuilder);
    this.routeService.route.data.subscribe(
      (data: Data) => {
        this.pageStatus = data.pageSatus;
      }
    )
    this.getRigaOrdineById();
    this.setTabPageStatusOnInit();
       this.getParentsList();
    if(isInNewMode(this.pageStatus))
          this.spinner = false;
  }


  public insertRigaOrdine(): void {
    const rigaOrdine: IRigaOrdine = this.rigaOrdineForm.value;
	this.rigaOrdineGroupApiService.rigaOrdine.addRigaOrdine(rigaOrdine).subscribe(
      (rigaOrdineResult: ApiResponse<IRigaOrdine>) => {
         const toast: ToastrService = this.overlaysService.toast;
        this.rigaOrdine = this.manageResponse(rigaOrdineResult, toast, new TranslatePipe(this.injector));
        if(this.rigaOrdine)
          navigateToPath('/pages/ms-demo/riga-ordine/detail-riga-ordine/' + this.rigaOrdine.objectKey + '/view', this.routeService.router);
      }
    )
  }

  public getRigaOrdineById(): void {
    if (isInViewEditMode(this.pageStatus)) {
      const id = getIdFromPath(this.routeService.route);
      if (id) {
        this.rigaOrdineGroupApiService.rigaOrdine.getRigaOrdineById(id).subscribe(
          (rigaOrdineResult: ApiResponse<IRigaOrdine>) => {
            this.rigaOrdine = useMapper('RigaOrdine', 'IRigaOrdine',rigaOrdineResult.response);
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
    this.rigaOrdineForm.patchValue({
          rigaOrdineKey : {
              theOrdineObjectKey: this.rigaOrdine.rigaOrdineKey.theOrdineObjectKey,
                  idProdotto:  this.rigaOrdine.rigaOrdineKey.idProdotto,
          	      theProdottoObjectKey: this.rigaOrdine.rigaOrdineKey.theProdottoObjectKey,
          },
		      quantita : this.rigaOrdine.quantita,
	
      });
  }


  public editRigaOrdine(): void {
   navigateToPath('/pages/ms-demo/riga-ordine/detail-riga-ordine/' + this.rigaOrdine.objectKey + '/edit', this.routeService.router);
  }


  public updateRigaOrdine(): void {
    const rigaOrdine: IRigaOrdine = this.rigaOrdineForm.value;
    this.rigaOrdineGroupApiService.rigaOrdine.updateRigaOrdine(rigaOrdine).subscribe(
      (rigaOrdineResult: ApiResponse<IRigaOrdine>) => {
        const toast: ToastrService = this.overlaysService.toast;
        this.rigaOrdine = this.manageResponse(rigaOrdineResult,toast, new TranslatePipe(this.injector));
        if(this.rigaOrdine)
          navigateToPath('/pages/ms-demo/riga-ordine/detail-riga-ordine/' + this.rigaOrdine.objectKey + '/view', this.routeService.router);
      }
    )
  }


  /**
   * Delete rigaOrdine by id.
   */
  public deleteRigaOrdineById(): void {
	 this.rigaOrdineGroupApiService.rigaOrdine.deleteRigaOrdine(this.rigaOrdine.objectKey).subscribe(
      () => {
        this.overlaysService.toast.showSuccess(rigaOrdine_.detail.toast.SUCCESS_DELETE);
        navigateToPath(rigaOrdine_.detail.path.LIST, this.routeService.router);
        this.overlaysService.dialog.closeDialog();
      }
    )
  }

  /**
   * Confirm delete rigaOrdine.
   */
  public confirmDeleteRigaOrdine() : void {
    const message: string = rigaOrdine_.detail.dialog.DELETE_MESSAGE;
    this.overlaysService.confirmDialog.openConfirmDialog(message).subscribe(
      (isTrue: boolean) => {
        if(isTrue)
         this.deleteRigaOrdineById();
      }
    )
  }

 
   public getOrdineList() : void {
      this.rigaOrdineGroupApiService.ordine.getOrdineByCriteria().subscribe(
         (data) => {
              this.ordineList = getListForDropdown('ordine', data);
           }
         )
       }
   public getProdottoList() : void {
      this.rigaOrdineGroupApiService.prodotto.getProdottoByCriteria().subscribe(
         (data) => {
              this.prodottoList = getListForDropdown('prodotto', data);
           }
         )
       }

     private getParentsList() : void {
        this.getOrdineList();
        this.getProdottoList();
     }

  
}



