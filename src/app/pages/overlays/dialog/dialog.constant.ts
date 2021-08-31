export const DialogConstant = {
    USAGE_TS:
         ` 
 import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class DialogComponent  {

   constructor(public dialogService: BzDialogService) {}

    public showDialog() : void {
        this.dialogService.showDialog(TestDialogComponent)
    }
    
}

   `,
     USAGE_HTML: `
     <div >
     <button bzButton status="primary" (click)="showDialog()">Show Dialog</button>
 </div>
 `,
 
 RESULT_TS:
 ` 
import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';

@Component({
selector: 'app-test-dialog',
templateUrl: './test-dialog.component.html',
styleUrls: ['./test-dialog.component.scss']
})
export class DialogComponent  {

constructor(public dialogService: BzDialogService) {}

  public showDialog() : void {
    this.dialogService.showDialog(MyDialogComponent).subscribe(
      (name: string) => {
        this.name =  name;
      }
    )
  }

}

`,

RESULT_HTML: `
<div>
  <button  bzButton status="primary" (click)="showDialog()">Show Dialog</button>
    {{name}}
</div>
`,

TEMPLATE_TS:
` 
import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';

@Component({
selector: 'app-test-dialog',
templateUrl: './test-dialog.component.html',
styleUrls: ['./test-dialog.component.scss']
})
export class DialogComponent  {

constructor(public dialogService: BzDialogService) {}


}

`,

TEMPLATE_HTML: `
<div>
  <button bzButton status="primary" 
     (click)="dialogService.showDialog(template)">Show Dialog
  </button>
</div>

<!--  template -->
<ng-template #template let-ref="ref">
  <bz-card global>
    <bz-card-header> Dialog with template </bz-card-header>
    <bz-card-content>
      <div> This is a dilaog with template </div>
    </bz-card-content>
    <bz-card-footer>
        <div >
            <button bzButton status="primary" (click)="ref.closeDialog()">Close</button>
        </div>
    </bz-card-footer>
  </bz-card>
</ng-template>
`,

PROPERTIES_TS:
` 
import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';

@Component({
selector: 'app-test-dialog',
templateUrl: './test-dialog.component.html',
styleUrls: ['./test-dialog.component.scss']
})
export class DialogComponent  {

  constructor(private dialogService: BzDialogService) {}

  /*MyDialogInputComponent has a property called name.*/
  public showDialog() : void {
    this.dialogService.showDialog(MyDialogInputComponent, {properties: {name:'Federico'}})
  }

}

`,

PROPERTIES_HTML: `
<div >
   <button bzButton status="primary" (click)="showDialog()">Show Dialog</button>
</div>
`,

BACKDROP_TS:
` 
import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';

@Component({
selector: 'app-test-dialog',
templateUrl: './test-dialog.component.html',
styleUrls: ['./test-dialog.component.scss']
})
export class DialogComponent  {

  constructor(private dialogService: BzDialogService) {}

  public showDialog() : void {
    this.dialogService.showDialog(TestDialogComponent, {closeOnBackdropClick: false})
  }


}

`,

BACKDROP_HTML: `
<div >
   <button bzButton status="primary" (click)="showDialog()">
     Show Dialog whitout backdrop click closed
   </button>
</div>
`,

 
 }
 