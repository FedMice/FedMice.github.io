
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    {
      path: '',
      children: [
		{
         path: "cliente", loadChildren: () =>
              import("./cliente/cliente.module").then((m) => m.ClienteModule),
    	},

		{
         path: "prodotto", loadChildren: () =>
              import("./prodotto/prodotto.module").then((m) => m.ProdottoModule),
    	},

		{
         path: "ordine", loadChildren: () =>
              import("./ordine/ordine.module").then((m) => m.OrdineModule),
    	},

		{
         path: "riga-ordine", loadChildren: () =>
              import("./riga-ordine/riga-ordine.module").then((m) => m.RigaOrdineModule),
    	},

		{
         path: "tipo-ordine", loadChildren: () =>
              import("./tipo-ordine/tipo-ordine.module").then((m) => m.TipoOrdineModule),
    	},

      ]
    }
   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MsDemoRoutingModule { }



