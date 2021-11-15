



import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { getAuthGuards } from "src/app/security/security.config";
import { AuthGuard, getPrivilegesEnum } from 'voila2-runtime-ng';
import { DetailTipoOrdineComponent } from "./detail-tipo-ordine/detail-tipo-ordine.component";
import { ListTipoOrdineComponent } from "./list-tipo-ordine/list-tipo-ordine.component";

const Privileges = getPrivilegesEnum();

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path:'list-tipo-ordine', 
            component: ListTipoOrdineComponent,
            canActivate: getAuthGuards(), 
            data: {privileges: [ Privileges.TIPO_ORDINE_FIND_PAGINATED ]}
        },
        {
           path: 'detail-tipo-ordine/new', 
           component: DetailTipoOrdineComponent,
           canActivate: getAuthGuards(),
           data: {pageSatus: 'new', privileges: [ Privileges.TIPO_ORDINE_CREATE ]}
        },
        {
          path: 'detail-tipo-ordine/:id/view', 
          component: DetailTipoOrdineComponent,
          canActivate: getAuthGuards(), 
          data: {pageSatus: 'view', privileges: [ Privileges.TIPO_ORDINE_FIND_BY_ID ]}
        },
        {
          path: 'detail-tipo-ordine/:id/edit', 
          component: DetailTipoOrdineComponent,
          canActivate: getAuthGuards(), 
          data: {pageSatus: 'edit', privileges: [ Privileges.TIPO_ORDINE_UPDATE ]}
        }
      ]
    }
   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TipoOrdineRoutingModule { }


