



import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { getAuthGuards } from "src/app/security/security.config";
import { AuthGuard, getPrivilegesEnum } from 'voila2-runtime-ng';
import { DetailClienteComponent } from "./detail-cliente/detail-cliente.component";
import { ListClienteComponent } from "./list-cliente/list-cliente.component";

const Privileges = getPrivilegesEnum();

const routes: Routes = [
    {
      path: '',
      children: [
        {
            path:'list-cliente', 
            component: ListClienteComponent,
            canActivate: getAuthGuards(), 
            data: {privileges: [ Privileges.CLIENTE_FIND_PAGINATED ]}
        },
        {
           path: 'detail-cliente/new', 
           component: DetailClienteComponent,
           canActivate: getAuthGuards(),
           data: {pageSatus: 'new', privileges: [ Privileges.CLIENTE_CREATE ]}
        },
        {
          path: 'detail-cliente/:id/view', 
          component: DetailClienteComponent,
          canActivate: getAuthGuards(), 
          data: {pageSatus: 'view', privileges: [ Privileges.CLIENTE_FIND_BY_ID ]}
        },
        {
          path: 'detail-cliente/:id/edit', 
          component: DetailClienteComponent,
          canActivate: getAuthGuards(), 
          data: {pageSatus: 'edit', privileges: [ Privileges.CLIENTE_UPDATE ]}
        }
      ]
    }
   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ClienteRoutingModule { }


