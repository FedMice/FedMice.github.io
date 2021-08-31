import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';
import { OverlaysComponent } from '../../../overlays.component';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';

@Component({
  selector: 'app-back-drop-click',
  templateUrl: './back-drop-click.component.html',
  styleUrls: ['./back-drop-click.component.scss']
})
export class BackDropClickComponent extends OverlaysComponent {


  constructor(private dialogService: BzDialogService) { super()}


  public showDialog() : void {
    this.dialogService.showDialog(TestDialogComponent, {closeOnBackdropClick: false})
  }

}
