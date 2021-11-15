
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProdottoComponent } from './list-prodotto/list-prodotto.component';
import { BzButtonModule, BzCardModule, BzDatePickerModule, BzDropdownModule, 
  BzErrorModule, BzEventModule, BzIconModule,
  BzInputModule,
 BzSwitchModule, BzTableModule, BzTabsetModule, BzToastrModule, BzTooltipModule } from 'blazing';
import { ProdottoRoutingModule } from './prodotto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchProdottoComponent } from './list-prodotto/search-prodotto/search-prodotto.component';
import { DetailProdottoComponent } from './detail-prodotto/detail-prodotto.component';
import { RouterModule } from '@angular/router';
import { UtilityPipeModule } from '../../../utilities/pipe/utility-pipe.module';
import { BzDialogModule } from 'blazing';
import { TranslateModule } from 'translate-ng';
import { TabsProdottoComponent } from './detail-prodotto/tabs-prodotto/tabs-prodotto.component';
import { DialogListProdottoComponent } from '../dialog/dialog-list-prodotto/dialog-list-prodotto.component';
import { TabRigaOrdineComponent } from './detail-prodotto/tabs-prodotto/riga-ordine/tab-riga-ordine.component';
import { RigaOrdineModule } from '../riga-ordine/riga-ordine.module';

const COMPONENTS = [
  ListProdottoComponent, 
  SearchProdottoComponent,
  DetailProdottoComponent,
  TabsProdottoComponent,
    DialogListProdottoComponent,
  TabRigaOrdineComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    BzCardModule,
    BzTableModule,
    ProdottoRoutingModule,
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
export class ProdottoModule { }


