import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path:'not-found', component: NotFoundComponent
      },
      {
        path: "overlays", loadChildren: () =>
          import("./overlays/overlays.module").then((m) => m.OverlaysModule),
      },
      {
        path: "forms", loadChildren: () =>
          import("./forms/forms.module").then((m) => m.FormssModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }