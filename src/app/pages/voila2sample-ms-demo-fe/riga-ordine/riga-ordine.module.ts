
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRigaOrdineComponent } from './list-riga-ordine/list-riga-ordine.component';
import { BzButtonModule, BzCardModule, BzDatePickerModule, BzDropdownModule, 
  BzErrorModule, BzEventModule, BzIconModule,
  BzInputModule,
 BzSwitchModule, BzTableModule, BzTabsetModule, BzToastrModule, BzTooltipModule } from 'blazing';
import { RigaOrdineRoutingModule } from './riga-ordine-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchRigaOrdineComponent } from './list-riga-ordine/search-riga-ordine/search-riga-ordine.component';
import { DetailRigaOrdineComponent } from './detail-riga-ordine/detail-riga-ordine.component';
import { RouterModule } from '@angular/router';
import { UtilityPipeModule } from '../../../utilities/pipe/utility-pipe.module';
import { BzDialogModule } from 'blazing';
import { TranslateModule } from 'translate-ng';
import { TabsRigaOrdineComponent } from './detail-riga-ordine/tabs-riga-ordine/tabs-riga-ordine.component';

const COMPONENTS = [
  ListRigaOrdineComponent, 
  SearchRigaOrdineComponent,
  DetailRigaOrdineComponent,
  TabsRigaOrdineComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    BzCardModule,
    BzTableModule,
    RigaOrdineRoutingModule,
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
export class RigaOrdineModule { }


