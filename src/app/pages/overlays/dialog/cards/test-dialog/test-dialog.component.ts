import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent  {

   constructor(public dialogService: BzDialogService) {}
}
