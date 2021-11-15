
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTipoOrdineComponent } from './list-tipo-ordine/list-tipo-ordine.component';
import { BzButtonModule, BzCardModule, BzDatePickerModule, BzDropdownModule, 
  BzErrorModule, BzEventModule, BzIconModule,
  BzInputModule,
 BzSwitchModule, BzTableModule, BzTabsetModule, BzToastrModule, BzTooltipModule } from 'blazing';
import { TipoOrdineRoutingModule } from './tipo-ordine-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchTipoOrdineComponent } from './list-tipo-ordine/search-tipo-ordine/search-tipo-ordine.component';
import { DetailTipoOrdineComponent } from './detail-tipo-ordine/detail-tipo-ordine.component';
import { RouterModule } from '@angular/router';
import { UtilityPipeModule } from '../../../utilities/pipe/utility-pipe.module';
import { BzDialogModule } from 'blazing';
import { TranslateModule } from 'translate-ng';
import { TabsTipoOrdineComponent } from './detail-tipo-ordine/tabs-tipo-ordine/tabs-tipo-ordine.component';
import { DialogListTipoOrdineComponent } from '../dialog/dialog-list-tipo-ordine/dialog-list-tipo-ordine.component';
import { TabOrdineComponent } from './detail-tipo-ordine/tabs-tipo-ordine/ordine/tab-ordine.component';
import { OrdineModule } from '../ordine/ordine.module';

const COMPONENTS = [
  ListTipoOrdineComponent, 
  SearchTipoOrdineComponent,
  DetailTipoOrdineComponent,
  TabsTipoOrdineComponent,
    DialogListTipoOrdineComponent,
  TabOrdineComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    BzCardModule,
    BzTableModule,
    TipoOrdineRoutingModule,
    BzButtonModule,
    BzInputModule,
    ReactiveFormsModule,
    BzDatePickerModule,
    BzSwitchModule,
    FormsModule,
    RouterModule,
	BzTooltipModule,
    BzDropdownModule,
    BzToastrModule,
    BzErrorModule,
    UtilityPipeModule,
    BzDialogModule,
    BzTabsetModule,
    BzEventModule,
	TranslateModule,
	BzIconModule
  ]
})
export class TipoOrdineModule { }


