import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';
import { OverlaysComponent } from '../../../overlays.component';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent extends OverlaysComponent {

  constructor(private dialogService: BzDialogService){super()}

 public name: string = '';

 public showDialog() : void {
   this.dialogService.showDialog(MyDialogComponent).subscribe(
     (name: string) => {
         this.name =  name;
     }
   )
 }

}
