import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-my-dialog-input',
  templateUrl: './my-dialog-input.component.html',
  styleUrls: ['./my-dialog-input.component.scss']
})
export class MyDialogInputComponent extends MyDialogComponent {

  constructor(dialogService: BzDialogService) { super(dialogService)}

 
}
