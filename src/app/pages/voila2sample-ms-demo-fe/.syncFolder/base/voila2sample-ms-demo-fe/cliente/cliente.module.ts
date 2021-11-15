
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClienteComponent } from './list-cliente/list-cliente.component';
import { BzButtonModule, BzCardModule, BzDatePickerModule, BzDropdownModule, 
  BzErrorModule, BzEventModule, BzIconModule,
  BzInputModule,
 BzSwitchModule, BzTableModule, BzTabsetModule, BzToastrModule, BzTooltipModule } from 'blazing';
import { ClienteRoutingModule } from './cliente-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchClienteComponent } from './list-cliente/search-cliente/search-cliente.component';
import { DetailClienteComponent } from './detail-cliente/detail-cliente.component';
import { RouterModule } from '@angular/router';
import { UtilityPipeModule } from '../../../utilities/pipe/utility-pipe.module';
import { BzDialogModule } from 'blazing';
import { TranslateModule } from 'translate-ng';
import { TabsClienteComponent } from './detail-cliente/tabs-cliente/tabs-cliente.component';
import { DialogListClienteComponent } from '../dialog/dialog-list-cliente/dialog-list-cliente.component';
import { TabOrdineComponent } from './detail-cliente/tabs-cliente/ordine/tab-ordine.component';
import { OrdineModule } from '../ordine/ordine.module';

const COMPONENTS = [
  ListClienteComponent, 
  SearchClienteComponent,
  DetailClienteComponent,
  TabsClienteComponent,
    DialogListClienteComponent,
  TabOrdineComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    BzCardModule,
    BzTableModule,
    ClienteRoutingModule,
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
export class ClienteModule { }


