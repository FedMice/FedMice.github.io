import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';
import { OverlaysComponent } from '../../../overlays.component';
import { MyDialogInputComponent } from '../my-dialog-input/my-dialog-input.component';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent extends OverlaysComponent {

  constructor(private dialogService: BzDialogService) { super() }

  public showDialog() : void {
    this.dialogService.showDialog(MyDialogInputComponent, {properties: {name:'Federico'}})
  }
}
