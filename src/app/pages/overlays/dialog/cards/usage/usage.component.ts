import { Component} from '@angular/core';
import { BzDialogService } from 'blazing';
import { DialogConstant } from '../../dialog.constant';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';

@Component({
  selector: 'app-dialog-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageDialogComponent {

  constructor(private dialogService: BzDialogService){}

  public get DialogConstant() : any {
    return  DialogConstant;
 }


  public showDialog() : void {
    this.dialogService.showDialog(TestDialogComponent)
  }

}
