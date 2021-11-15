
import {  Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ButtonService } from '../../../../utilities/services/buttons.service';
import { IOrdine , IOrdineDto } from '../ordine.interface';
import { OrdineApiService } from '../ordine-api.service';
import { OrdineGroupApiService } from '../ordine-group-api.service';
import { ordineForm} from '../ordine-form';
import { Location } from '@angular/common';
import { ToastrService } from '../../../../utilities/services/toastr.service';
import { RouteService } from '../../../../utilities/services/route.service';
import { ConfirmDialogService } from '../../../../utilities/dialog/confirm-dialog.service';
import { BaseComponent } from '../../../../shared/base/base.component';
import { PageStatus } from '../../../../utilities/enum/page-status.enum';
import { OverlaysService } from '../../../../utilities/services/overlays.service';
import { ordine_ } from '../ordine.constant';
import { Data } from '@angular/router';
import { ApiResponse, getIdFromPath,  isInViewEditMode,  navigateToPath, getListForDropdown,
  getPrivilegesEnum, getPrivileges, extractResponse, isInNewMode} from "voila2-runtime-ng";
import { setTabObjectKey } from 'src/app/shared/base/base.helper';
import { ICliente } from '../../../voila2sample-ms-demo-fe/cliente/cliente.interface';
import { ClienteApiService } from '../../../voila2sample-ms-demo-fe/cliente/cliente-api.service';
import { ITipoOrdine } from '../../../voila2sample-ms-demo-fe/tipo-ordine/tipo-ordine.interface';
import { TipoOrdineApiService } from '../../../voila2sample-ms-demo-fe/tipo-ordine/tipo-ordine-api.service';
import { TranslatePipe } from 'translate-ng';
import { Ordine } from '../ordine.model';

const PROVIDERS = [
  OrdineApiService, 
  ButtonService,  
  OverlaysService, 
  RouteService, 
  ConfirmDialogService,
  OrdineGroupApiService,
  ClienteApiService,
  TipoOrdineApiService,
]

@Component({
  selector: 'app-detail-ordine',
  templateUrl: './detail-ordine.component.html',
  styleUrls: ['./detail-ordine.component.scss'],
  providers: [...PROVIDERS ]
})
export class DetailOrdineComponent extends BaseComponent<IOrdine, IOrdineDto> implements OnInit {

  public ordineForm !: FormGroup;
  public ordine !: IOrdine;
  public clienteList : ICliente[] = [];
  public tipoOrdineList : ITipoOrdine[] = [];
  public ordineList : IOrdine[] = [];
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
    private ordineGroupApiService : OrdineGroupApiService
  ) { super()}

  ngOnInit(): void {
    this.ordineForm = ordineForm(this.formBuilder);
    this.routeService.route.data.subscribe(
      (data: Data) => {
        this.pageStatus = data.pageSatus;
      }
    )
    this.getOrdineById();
    this.setTabPageStatusOnInit();
       this.getParentsList();
    if(isInNewMode(this.pageStatus))
          this.spinner = false;
  }


  public insertOrdine(): void {
    const ordine: IOrdine = this.ordineForm.value;
	   setTabObjectKey( ordine, new Ordine(ordine), 'theRigaOrdine', 'rigaOrdineKey.theOrdineObjectKey');
 setTabObjectKey( ordine, new Ordine(ordine), 'theOrdineFigli','theOrdineObjectKey');
	this.ordineGroupApiService.ordine.addOrdine(ordine).subscribe(
      (ordineResult: ApiResponse<IOrdine>) => {
         const toast: ToastrService = this.overlaysService.toast;
        this.ordine = this.manageResponse(ordineResult, toast, new TranslatePipe(this.injector));
        console.log("Ordine .... ", this.ordine)
        if(this.ordine)
          navigateToPath('/pages/ms-demo/ordine/detail-ordine/' + this.ordine.objectKey + '/view', this.routeService.router);
      }
    )
  }

  public getOrdineById(): void {
    if (isInViewEditMode(this.pageStatus)) {
      const id = getIdFromPath(this.routeService.route);
      if (id) {
        this.ordineGroupApiService.ordine.getOrdineById(id).subscribe(
          (ordineResult: ApiResponse<IOrdine>) => {
            this.ordine = ordineResult.response;
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
    this.ordineForm.patchValue({
          ordineKey : {
            idOrdine:  this.ordine.ordineKey.idOrdine,
            anno:  this.ordine.ordineKey.anno,
          },
		      dataOrdine : this.ordine.dataOrdine,
		      urgente : this.ordine.urgente,
			theClienteObjectKey: this.ordine.theClienteObjectKey,
			theTipoOrdineObjectKey: this.ordine.theTipoOrdineObjectKey,
			theOrdinePadreObjectKey: this.ordine.theOrdinePadreObjectKey,
	
      });
  }


  public editOrdine(): void {
   // this.setStatusPage(PageStatus.EDIT, this.routeService.location);
   // this.getOrdineById();
   navigateToPath('/pages/ms-demo/ordine/detail-ordine/' + this.ordine.objectKey + '/edit', this.routeService.router);
  }


  public updateOrdine(): void {
    const ordine: IOrdine = this.ordineForm.value;
    this.ordineGroupApiService.ordine.updateOrdine(ordine).subscribe(
      (ordineResult: ApiResponse<IOrdine>) => {
        const toast: ToastrService = this.overlaysService.toast;
        this.ordine = this.manageResponse(ordineResult,toast, new TranslatePipe(this.injector));
        if(this.ordine)
          navigateToPath('/pages/ms-demo/ordine/detail-ordine/' + this.ordine.objectKey + '/view', this.routeService.router);
      }
    )
  }


  /**
   * Delete ordine by id.
   */
  public deleteOrdineById(): void {
	 this.ordineGroupApiService.ordine.deleteOrdine(this.ordine.objectKey).subscribe(
      () => {
        this.overlaysService.toast.showSuccess(ordine_.detail.toast.SUCCESS_DELETE);
        navigateToPath(ordine_.detail.path.LIST, this.routeService.router);
        this.overlaysService.dialog.closeDialog();
      }
    )
  }

  /**
   * Confirm delete ordine.
   */
  public confirmDeleteOrdine() : void {
    const message: string = ordine_.detail.dialog.DELETE_MESSAGE;
    this.overlaysService.confirmDialog.openConfirmDialog(message).subscribe(
      (isTrue: boolean) => {
        if(isTrue)
         this.deleteOrdineById();
      }
    )
  }

 
   public getClienteList() : void {
      this.ordineGroupApiService.cliente.getClienteByCriteria().subscribe(
         (data) => {
              this.clienteList = getListForDropdown('cliente', data);
           }
         )
       }
   public getTipoOrdineList() : void {
      this.ordineGroupApiService.tipoOrdine.getTipoOrdineByCriteria().subscribe(
         (data) => {
              this.tipoOrdineList = getListForDropdown('tipoOrdine', data);
           }
         )
       }
   public getOrdineList() : void {
      this.ordineGroupApiService.ordine.getOrdineByCriteria().subscribe(
         (data) => {
              this.ordineList = getListForDropdown('ordine', data);
           }
         )
       }

     private getParentsList() : void {
        this.getClienteList();
        this.getTipoOrdineList();
        this.getOrdineList();
     }

  
}



