



import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { getAuthGuards } from "src/app/security/security.config";
import { AuthGuard, getPrivilegesEnum } from 'voila2-runtime-ng';
import { DetailOrdineComponent } from "./detail-ordine/detail-ordine.component";
import { ListOrdineComponent } from "./list-ordine/list-ordine.component";

const Privileges = getPrivilegesEnum();

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path:'list-ordine', 
            component: ListOrdineComponent,
            canActivate: getAuthGuards(), 
            data: {privileges: [ Privileges.ORDINE_FIND_PAGINATED ]}
        },
        {
           path: 'detail-ordine/new', 
           component: DetailOrdineComponent,
           canActivate: getAuthGuards(),
           data: {pageSatus: 'new', privileges: [ Privileges.ORDINE_CREATE ]}
        },
        {
          path: 'detail-ordine/:id/view', 
          component: DetailOrdineComponent,
          canActivate: getAuthGuards(), 
          data: {pageSatus: 'view', privileges: [ Privileges.ORDINE_FIND_BY_ID ]}
        },
        {
          path: 'detail-ordine/:id/edit', 
          component: DetailOrdineComponent,
          canActivate: getAuthGuards(), 
          data: {pageSatus: 'edit', privileges: [ Privileges.ORDINE_UPDATE ]}
        }
      ]
    }
   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class OrdineRoutingModule { }


