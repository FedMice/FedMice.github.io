import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import {  HomeComponent} from './home/home.component';
import {   BzAffixModule, BzButtonModule, BzCardModule, BzCodeBoxModule, BzIconModule } from 'blazing';
import { UtilityDirectiveModule } from '../utilities/pipe/utility-directive.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [PagesComponent, HomeComponent, NotFoundComponent ],
  imports: [
    CommonModule,
    LayoutModule,
    PagesRoutingModule,
    BzCardModule,
    BzCodeBoxModule,
    BzButtonModule,
    UtilityDirectiveModule,
    BzAffixModule,
    BzIconModule,
    RouterModule
  ],
  exports:[PagesComponent]
})
export class PagesModule { }
