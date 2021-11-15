
import {  Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ButtonService } from '../../../../utilities/services/buttons.service';
import { ITipoOrdine , ITipoOrdineDto } from '../tipo-ordine.interface';
import { TipoOrdineApiService } from '../tipo-ordine-api.service';
import { TipoOrdineGroupApiService } from '../tipo-ordine-group-api.service';
import { tipoOrdineForm} from '../tipo-ordine-form';
import { Location } from '@angular/common';
import { ToastrService } from '../../../../utilities/services/toastr.service';
import { RouteService } from '../../../../utilities/services/route.service';
import { ConfirmDialogService } from '../../../../utilities/dialog/confirm-dialog.service';
import { BaseComponent } from '../../../../shared/base/base.component';
import { PageStatus } from '../../../../utilities/enum/page-status.enum';
import { OverlaysService } from '../../../../utilities/services/overlays.service';
import { tipoOrdine_ } from '../tipo-ordine.constant';
import { Data } from '@angular/router';
import { ApiResponse, getIdFromPath,  isInViewEditMode,  navigateToPath, getListForDropdown,
  getPrivilegesEnum, getPrivileges, extractResponse, isInNewMode} from "voila2-runtime-ng";
import { setTabObjectKey, useMapper } from 'src/app/shared/base/base.helper';
import { TranslatePipe } from 'translate-ng';
import { TipoOrdine } from '../tipo-ordine.model';

const PROVIDERS = [
  TipoOrdineApiService, 
  ButtonService,  
  OverlaysService, 
  RouteService, 
  ConfirmDialogService,
  TipoOrdineGroupApiService,
]

@Component({
  selector: 'app-detail-tipo-ordine',
  templateUrl: './detail-tipo-ordine.component.html',
  styleUrls: ['./detail-tipo-ordine.component.scss'],
  providers: [...PROVIDERS ]
})
export class DetailTipoOrdineComponent extends BaseComponent<ITipoOrdine, ITipoOrdineDto> implements OnInit {

  public tipoOrdineForm !: FormGroup;
  public tipoOrdine !: ITipoOrdine;
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
    private tipoOrdineGroupApiService : TipoOrdineGroupApiService
  ) { super()}

  ngOnInit(): void {
    this.tipoOrdineForm = tipoOrdineForm(this.formBuilder);
    this.routeService.route.data.subscribe(
      (data: Data) => {
        this.pageStatus = data.pageSatus;
      }
    )
    this.getTipoOrdineById();
    this.setTabPageStatusOnInit();
    if(isInNewMode(this.pageStatus))
          this.spinner = false;
  }


  public insertTipoOrdine(): void {
    const tipoOrdine: ITipoOrdine = this.tipoOrdineForm.value;
 setTabObjectKey( tipoOrdine, new TipoOrdine(tipoOrdine), 'theOrdine','theTipoOrdineObjectKey');
	this.tipoOrdineGroupApiService.tipoOrdine.addTipoOrdine(tipoOrdine).subscribe(
      (tipoOrdineResult: ApiResponse<ITipoOrdine>) => {
         const toast: ToastrService = this.overlaysService.toast;
        this.tipoOrdine = this.manageResponse(tipoOrdineResult, toast, new TranslatePipe(this.injector));
        if(this.tipoOrdine)
          navigateToPath('/pages/ms-demo/tipo-ordine/detail-tipo-ordine/' + this.tipoOrdine.objectKey + '/view', this.routeService.router);
      }
    )
  }

  public getTipoOrdineById(): void {
    if (isInViewEditMode(this.pageStatus)) {
      const id = getIdFromPath(this.routeService.route);
      if (id) {
        this.tipoOrdineGroupApiService.tipoOrdine.getTipoOrdineById(id).subscribe(
          (tipoOrdineResult: ApiResponse<ITipoOrdine>) => {
            this.tipoOrdine = useMapper('TipoOrdine', 'ITipoOrdine',tipoOrdineResult.response);
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
    this.tipoOrdineForm.patchValue({
               idTipoOrdine : this.tipoOrdine.idTipoOrdine,
               nomeTipoOrdine : this.tipoOrdine.nomeTipoOrdine,
	
      });
  }


  public editTipoOrdine(): void {
   navigateToPath('/pages/ms-demo/tipo-ordine/detail-tipo-ordine/' + this.tipoOrdine.objectKey + '/edit', this.routeService.router);
  }


  public updateTipoOrdine(): void {
    const tipoOrdine: ITipoOrdine = this.tipoOrdineForm.value;
    this.tipoOrdineGroupApiService.tipoOrdine.updateTipoOrdine(tipoOrdine).subscribe(
      (tipoOrdineResult: ApiResponse<ITipoOrdine>) => {
        const toast: ToastrService = this.overlaysService.toast;
        this.tipoOrdine = this.manageResponse(tipoOrdineResult,toast, new TranslatePipe(this.injector));
        if(this.tipoOrdine)
          navigateToPath('/pages/ms-demo/tipo-ordine/detail-tipo-ordine/' + this.tipoOrdine.objectKey + '/view', this.routeService.router);
      }
    )
  }


  /**
   * Delete tipoOrdine by id.
   */
  public deleteTipoOrdineById(): void {
	 this.tipoOrdineGroupApiService.tipoOrdine.deleteTipoOrdine(this.tipoOrdine.objectKey).subscribe(
      () => {
        this.overlaysService.toast.showSuccess(tipoOrdine_.detail.toast.SUCCESS_DELETE);
        navigateToPath(tipoOrdine_.detail.path.LIST, this.routeService.router);
        this.overlaysService.dialog.closeDialog();
      }
    )
  }

  /**
   * Confirm delete tipoOrdine.
   */
  public confirmDeleteTipoOrdine() : void {
    const message: string = tipoOrdine_.detail.dialog.DELETE_MESSAGE;
    this.overlaysService.confirmDialog.openConfirmDialog(message).subscribe(
      (isTrue: boolean) => {
        if(isTrue)
         this.deleteTipoOrdineById();
      }
    )
  }

 


  
}



