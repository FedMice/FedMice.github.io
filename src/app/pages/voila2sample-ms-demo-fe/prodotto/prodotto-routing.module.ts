



import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { getAuthGuards } from "src/app/security/security.config";
import { AuthGuard, getPrivilegesEnum } from 'voila2-runtime-ng';
import { DetailProdottoComponent } from "./detail-prodotto/detail-prodotto.component";
import { ListProdottoComponent } from "./list-prodotto/list-prodotto.component";

const Privileges = getPrivilegesEnum();

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path:'list-prodotto', 
            component: ListProdottoComponent,
            canActivate: getAuthGuards(), 
            data: {privileges: [ Privileges.PRODOTTO_FIND_PAGINATED ]}
        },
        {
           path: 'detail-prodotto/new', 
           component: DetailProdottoComponent,
           canActivate: getAuthGuards(),
           data: {pageSatus: 'new', privileges: [ Privileges.PRODOTTO_CREATE ]}
        },
        {
          path: 'detail-prodotto/:id/view', 
          component: DetailProdottoComponent,
          canActivate: getAuthGuards(), 
          data: {pageSatus: 'view', privileges: [ Privileges.PRODOTTO_FIND_BY_ID ]}
        },
        {
          path: 'detail-prodotto/:id/edit', 
          component: DetailProdottoComponent,
          canActivate: getAuthGuards(), 
          data: {pageSatus: 'edit', privileges: [ Privileges.PRODOTTO_UPDATE ]}
        }
      ]
    }
   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProdottoRoutingModule { }


