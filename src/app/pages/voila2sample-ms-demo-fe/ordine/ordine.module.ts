
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrdineComponent } from './list-ordine/list-ordine.component';
import { BzButtonModule, BzCardModule, BzDatePickerModule, BzDropdownModule, 
  BzErrorModule, BzEventModule, BzIconModule,
  BzInputModule,
 BzSwitchModule, BzTableModule, BzTabsetModule, BzToastrModule, BzTooltipModule } from 'blazing';
import { OrdineRoutingModule } from './ordine-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchOrdineComponent } from './list-ordine/search-ordine/search-ordine.component';
import { DetailOrdineComponent } from './detail-ordine/detail-ordine.component';
import { RouterModule } from '@angular/router';
import { UtilityPipeModule } from '../../../utilities/pipe/utility-pipe.module';
import { BzDialogModule } from 'blazing';
import { TranslateModule } from 'translate-ng';
import { TabsOrdineComponent } from './detail-ordine/tabs-ordine/tabs-ordine.component';
import { DialogListOrdineComponent } from '../dialog/dialog-list-ordine/dialog-list-ordine.component';
import { TabRigaOrdineComponent } from './detail-ordine/tabs-ordine/riga-ordine/tab-riga-ordine.component';
import { RigaOrdineModule } from '../riga-ordine/riga-ordine.module';
import { TabOrdineFigliComponent } from './detail-ordine/tabs-ordine/ordine-figli/tab-ordine-figli.component';

const COMPONENTS = [
  ListOrdineComponent, 
  SearchOrdineComponent,
  DetailOrdineComponent,
  TabsOrdineComponent,
    DialogListOrdineComponent,
  TabRigaOrdineComponent,
  TabOrdineFigliComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    BzCardModule,
    BzTableModule,
    OrdineRoutingModule,
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
export class OrdineModule { }


