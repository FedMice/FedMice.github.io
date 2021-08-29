export const ToasterConstant = {
   USAGE_TS:
        ` 
@Component({
    selector: 'app-toastr',
    templateUrl: './toastr.component.html',
    styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent  {
          
    constructor(private toastrService: BzToastrService){}
        
    public showToast() : void {
         this.toastrService.showToast('This is a toast')
    }
}
  `,
    USAGE_HTML: `
    <div class="fk-center showcase-container">
    <button bzButton status="primary" (click)="showToast()">Toast</button>
</div>
`,

SEVERITY_TS:
` 
@Component({
selector: 'app-toastr',
templateUrl: './toastr.component.html',
styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent  {
  
   constructor(public toastrService: BzToastrService){}

}
`,
SEVERITY_HTML: `
<div >
    <button bzButton status="primary" (click)="toastrService.showSuccess('Success Toast')" > 
       Success
    </button>
    <button bzButton status="primary" (click)="toastrService.showDanger('Danger Toast')" > 
       Danger
    </button>
    <button bzButton status="primary" (click)="toastrService.showInfo('Info Toast')" >
       Info
    </button>
    <button bzButton status="primary" (click)="toastrService.showWarning('Warning Toast')" > 
       Warning
    </button>
</div>
                          `,
POSITION_HTML:`
<div>
<!--  Top -->
<button bzButton status="primary" 
(click)="toastr.showSuccess('Right Top', {position: 'right-top'})" > 
    Right Top
  </button>
  <button bzButton status="primary" 
  (click)="toastr.showInfo('Right Center', {position: 'right-center'})" >
    Right Center
  </button>
  <button bzButton status="primary" 
  (click)="toastr.showDanger('Right Bottom', {position: 'right-bottom'})" > 
    Right Bottom
  </button>
</div>
<!--  Center -->
<div >
<button bzButton status="primary" 
  (click)="toastr.showDanger('Center Top', {position: 'center-top'})" > 
    Center Top
  </button>
  <button bzButton status="primary" 
  (click)="toastr.showSuccess('Center', {position: 'center'})" >
    Center
  </button>
  <button bzButton status="primary" 
  (click)="toastr.showInfo('Center Bottom', {position: 'center-bottom'})" > 
    Center Bottom
  </button>
</div>
<!--  Left -->
<div >
<button bzButton status="primary" 
(click)="toastr.showInfo('Left Top', {position: 'left-top'})" > 
    Left Top
  </button>
  <button bzButton status="primary" 
  (click)="toastr.showSuccess('Left Center', {position: 'left-center'})" >
    Left Center
  </button>
  <button bzButton status="primary" 
  (click)="toastr.showDanger('Left Bottom', {position: 'left-bottom'})" > 
    Left Bottom
  </button>
</div>

                          `,
POSITION_TS:
` 
@Component({
selector: 'app-toastr',
templateUrl: './toastr.component.html',
styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent  {
  
   constructor(public toastrService: BzToastrService){}

}
`,

DURATION_HTML: `
<div >
    <button bzButton status="primary" 
       (click)="toastrService.showSuccess('2000', { duration: 2000})" > 
       2000 ms
    </button>
    <button bzButton status="primary" 
      (click)="toastrService.showDanger('500', {duration: 500})" > 
      500 ms
    </button>
</div>
                          `,

DESTROY_BY_CLICK_HTML: `
<div >
    <button bzButton status="primary" 
       (click)="toastrService.showSuccess('Toast', { destroyByClick: true})" > 
       No destroy by click
    </button>
    <button bzButton status="primary" 
      (click)="toastrService.showDanger('Toast', { destroyByClick: false})" > 
      Destroy by click
    </button>
</div>
                          `,

PREVENT_DUPLICATES_HTML: `
<div >
    <button bzButton status="primary" 
       (click)="toastrService.showSuccess('Toast', {preventDuplicates: true})" > 
       No destroy by click
    </button>
    <button bzButton status="primary" 
      (click)="toastrService.showDanger('Toast', {preventDuplicates: false})" > 
      Destroy by click
    </button>
</div>
                          `,
ICON_HTML: `
<div >
    <button bzButton status="primary" 
       (click)="toastrService.showSuccess('Toast',  {icon: 'fa fa-exclamation-circle'})" > 
       Custom icon
    </button>
</div>
`
}
