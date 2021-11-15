
import {  Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ButtonService } from '../../../../utilities/services/buttons.service';
import { ICliente , IClienteDto } from '../cliente.interface';
import { ClienteApiService } from '../cliente-api.service';
import { ClienteGroupApiService } from '../cliente-group-api.service';
import { clienteForm} from '../cliente-form';

import { ToastrService } from '../../../../utilities/services/toastr.service';
import { RouteService } from '../../../../utilities/services/route.service';
import { ConfirmDialogService } from '../../../../utilities/dialog/confirm-dialog.service';
import { BaseComponent } from '../../../../shared/base/base.component';
import { PageStatus } from '../../../../utilities/enum/page-status.enum';
import { OverlaysService } from '../../../../utilities/services/overlays.service';
import { cliente_ } from '../cliente.constant';
import { Data } from '@angular/router';
import { ApiResponse, getIdFromPath,  isInViewEditMode,  navigateToPath, getListForDropdown,
  getPrivilegesEnum, getPrivileges,  isInNewMode} from "voila2-runtime-ng";
import { setTabObjectKey } from 'src/app/shared/base/base.helper';
import { TranslatePipe } from 'translate-ng';
import { Cliente } from '../cliente.model';

const PROVIDERS = [
  ClienteApiService, 
  ButtonService,  
  OverlaysService, 
  RouteService, 
  ConfirmDialogService,
  ClienteGroupApiService
]

@Component({
  selector: 'app-detail-cliente',
  templateUrl: './detail-cliente.component.html',
  styleUrls: ['./detail-cliente.component.scss'],
  providers: [...PROVIDERS ]
})
export class DetailClienteComponent extends BaseComponent<ICliente, IClienteDto> implements OnInit {

  public clienteForm !: FormGroup;
  public cliente !:any;
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
    private clienteGroupApiService : ClienteGroupApiService
  ) { super()}

  ngOnInit(): void {
    this.clienteForm = clienteForm(this.formBuilder);
    this.routeService.route.data.subscribe(
      (data: Data) => {
        this.pageStatus = data.pageSatus;
      }
    )
    this.getClienteById();
    this.setTabPageStatusOnInit();
    if(isInNewMode(this.pageStatus))
          this.spinner = false;


    this.cliente = {
      "objectKey":"dottore",
      "objectTitle":"dottore",
      "ragioneSociale":"dottore",
      "referenteAziendale":"pippo",
      "email":"ciao@example.com",
      "telefono":"08113434",
      "piva":"DFO383AFA",
      "codiceFiscale":"PPPPPPP",
      "sitoInternet":"www.ciao.it",
      "fax":"08111111",
      "organizzazionePadre":"mice",
      "userId":"bakugo",
      "_links":{
         "self":[
            {
               "href":"http://localhost:8090/demo/cliente/dottore"
            },
            {
               "href":"http://localhost:8090/demo/cliente/dottore"
            }
         ],
         "theOrdine":{
            "href":"http://localhost:8090/demo/ordine/findByTheCliente/dottore"
         },
         "theUserEntity":{
            "href":"http://127.0.0.1:8090/security_model/UserEntity/bakugo"
         }
      }
   }
  }


  public insertCliente(): void {
    const cliente: ICliente = this.clienteForm.value;
 setTabObjectKey( cliente, new Cliente(cliente), 'theOrdine','theClienteObjectKey');
	this.clienteGroupApiService.cliente.addCliente(cliente).subscribe(
      (clienteResult: ApiResponse<ICliente>) => {
         const toast: ToastrService = this.overlaysService.toast;
        this.cliente = this.manageResponse(clienteResult, toast, new TranslatePipe(this.injector));
        if(this.cliente)
          navigateToPath('/pages/ms-demo/cliente/detail-cliente/' + this.cliente.objectKey + '/view', this.routeService.router);
      }
    )
  }

  public getClienteById(): void {
    if (isInViewEditMode(this.pageStatus)) {
      const id = getIdFromPath(this.routeService.route);
      if (id) {
        this.clienteGroupApiService.cliente.getClienteById(id).subscribe(
          (clienteResult: ApiResponse<ICliente>) => {
            this.cliente = clienteResult.response;
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
    this.clienteForm.patchValue({
               ragioneSociale : this.cliente.ragioneSociale,
               referenteAziendale : this.cliente.referenteAziendale,
               email : this.cliente.email,
               telefono : this.cliente.telefono,
               piva : this.cliente.piva,
               codiceFiscale : this.cliente.codiceFiscale,
               sitoInternet : this.cliente.sitoInternet,
               fax : this.cliente.fax,
               organizzazionePadre : this.cliente.organizzazionePadre,
              theUserEntityObjectKey: this.cliente.theUserEntityObjectKey,
	
      });
  }


  public editCliente(): void {
    this.setStatusPage(PageStatus.EDIT, this.routeService.location);
    this.getClienteById();
  }


  public updateCliente(): void {
    const cliente: ICliente = this.clienteForm.value;
    this.clienteGroupApiService.cliente.updateCliente(cliente).subscribe(
      (clienteResult: ApiResponse<ICliente>) => {
        const toast: ToastrService = this.overlaysService.toast;
        this.cliente = this.manageResponse(clienteResult,toast, new TranslatePipe(this.injector));
        if(this.cliente)
          navigateToPath('/pages/ms-demo/cliente/detail-cliente/' + this.cliente.objectKey + '/view', this.routeService.router);
      }
    )
  }


  /**
   * Delete cliente by id.
   */
  public deleteClienteById(): void {
	 this.clienteGroupApiService.cliente.deleteCliente(this.cliente.objectKey).subscribe(
      () => {
        this.overlaysService.toast.showSuccess(cliente_.detail.toast.SUCCESS_DELETE);
        navigateToPath(cliente_.detail.path.LIST, this.routeService.router);
        this.overlaysService.dialog.closeDialog();
      }
    )
  }

  /**
   * Confirm delete cliente.
   */
  public confirmDeleteCliente() : void {
    const message: string = cliente_.detail.dialog.DELETE_MESSAGE;
    this.overlaysService.confirmDialog.openConfirmDialog(message).subscribe(
      (isTrue: boolean) => {
        if(isTrue)
         this.deleteClienteById();
      }
    )
  }




  
}



