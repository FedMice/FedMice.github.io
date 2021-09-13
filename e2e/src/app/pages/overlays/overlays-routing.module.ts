import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContextMenuComponent } from "./context-menu/context-menu.component";
import { DialogComponent } from "./dialog/dialog.component";
import { OverlaysComponent } from "./overlays.component";
import { ToastrComponent } from "./toastr/toastr.component";
import { TooltipComponent } from "./tooltip/tooltip.component";

const routes: Routes = [
    {
      path: '', component: OverlaysComponent,
      children: [
        {
          path: 'tooltip', component: TooltipComponent
        },
        {
          path: 'toastr', component: ToastrComponent
        },
        {
          path: 'dialog', component: DialogComponent
        },
        {
          path: 'context-menu', component: ContextMenuComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class OverlaysRoutingModule { }