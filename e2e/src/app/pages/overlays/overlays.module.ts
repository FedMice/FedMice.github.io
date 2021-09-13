import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlaysComponent } from './overlays.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { OverlaysRoutingModule } from './overlays-routing.module';
import { ToastrComponent } from './toastr/toastr.component';
import { DialogComponent } from './dialog/dialog.component';
import { BzAffixModule, BzInputModule,
  BzButtonModule, BzCardModule, BzCodeBoxModule, BzTabsetModule, BzTooltipModule, BzContextMenuModule, BzIconModule } from 'blazing';
import { UtilityDirectiveModule } from 'src/app/utilities/pipe/utility-directive.module';
import { PositionComponent } from './toastr/cards/position/position.component';
import { SeverityComponent } from './toastr/cards/severity/severity.component';
import { DurationComponent } from './toastr/cards/duration/duration.component';
import { UsageComponent } from './toastr/cards/usage/usage.component';
import { DestroyByClickComponent } from './toastr/cards/destroy-by-click/destroy-by-click.component';
import { PreventsDuplicatesComponent } from './toastr/cards/prevents-duplicates/prevents-duplicates.component';
import { IconComponent } from './toastr/cards/icon/icon.component';
import { UsageDialogComponent } from './dialog/cards/usage/usage.component';
import { TestDialogComponent } from './dialog/cards/test-dialog/test-dialog.component';
import { ResultComponent } from './dialog/cards/result/result.component';
import { MyDialogComponent } from './dialog/cards/my-dialog/my-dialog.component';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './dialog/cards/template/template.component';
import { BackDropClickComponent } from './dialog/cards/back-drop-click/back-drop-click.component';
import { ConfigurationComponent } from './dialog/cards/configuration/configuration.component';
import { PropertiesComponent } from './dialog/cards/properties/properties.component';
import { MyDialogInputComponent } from './dialog/cards/my-dialog-input/my-dialog-input.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';

const COMPONENTS = [
  OverlaysComponent, 
  TooltipComponent,
  ToastrComponent, 
  DialogComponent,
  PositionComponent,
  DurationComponent,
  SeverityComponent,
  UsageComponent, 
  DestroyByClickComponent,
  PreventsDuplicatesComponent,
  IconComponent,
  UsageDialogComponent,
  TestDialogComponent,
  ResultComponent,
  MyDialogComponent, 
  TemplateComponent,
  BackDropClickComponent, 
  ConfigurationComponent,
  PropertiesComponent,
  MyDialogInputComponent,
  ContextMenuComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    OverlaysRoutingModule,
    BzCardModule,
    BzAffixModule,
    UtilityDirectiveModule,
    BzCodeBoxModule,
    BzTabsetModule,
    BzTooltipModule,
    BzButtonModule,
    BzInputModule,
    FormsModule,
    BzContextMenuModule,
    BzIconModule
  ],
  exports: [...COMPONENTS]
})
export class OverlaysModule { }
