import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {
        path:'home', component: HomepageComponent
      },
	   {
        path: "ms-demo", loadChildren: () =>
          import("./voila2sample-ms-demo-fe/ms-demo.module").then((m) => m.MsDemoModule),
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
