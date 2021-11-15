



import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { getAuthGuards } from "src/app/security/security.config";
import { AuthGuard, getPrivilegesEnum } from 'voila2-runtime-ng';
import { DetailRigaOrdineComponent } from "./detail-riga-ordine/detail-riga-ordine.component";
import { ListRigaOrdineComponent } from "./list-riga-ordine/list-riga-ordine.component";

const Privileges = getPrivilegesEnum();

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path:'list-riga-ordine', 
            component: ListRigaOrdineComponent,
            canActivate: getAuthGuards(), 
            data: {privileges: [ Privileges.RIGA_ORDINE_FIND_PAGINATED ]}
        },
        {
           path: 'detail-riga-ordine/new', 
           component: DetailRigaOrdineComponent,
           canActivate: getAuthGuards(),
           data: {pageSatus: 'new', privileges: [ Privileges.RIGA_ORDINE_CREATE ]}
        },
        {
          path: 'detail-riga-ordine/:id/view', 
          component: DetailRigaOrdineComponent,
          canActivate: getAuthGuards(), 
          data: {pageSatus: 'view', privileges: [ Privileges.RIGA_ORDINE_FIND_BY_ID ]}
        },
        {
          path: 'detail-riga-ordine/:id/edit', 
          component: DetailRigaOrdineComponent,
          canActivate: getAuthGuards(), 
          data: {pageSatus: 'edit', privileges: [ Privileges.RIGA_ORDINE_UPDATE ]}
        }
      ]
    }
   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RigaOrdineRoutingModule { }


