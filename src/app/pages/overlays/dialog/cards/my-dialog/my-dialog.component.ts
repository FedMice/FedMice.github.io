import { Component } from '@angular/core';
import {BzDialogService} from 'blazing';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent  {

 constructor(public dialogService: BzDialogService){}

 public name: string = '';


}
