import { Component } from '@angular/core';
import { ContextMenuConstant } from './context-menu/context-menu.constant';
import { DialogConstant } from './dialog/dialog.constant';
import { ToasterConstant } from './toastr/toastr.constant';
import { TooltipConstant } from './tooltip/tooltip.constant';

@Component({
  selector: 'app-overlays',
  templateUrl: './overlays.component.html',
  styleUrls: ['./overlays.component.scss']
})
export class OverlaysComponent {


  public get DialogConstant(): any {
    return DialogConstant;
  }

  public get ToasterConstant(): any {
    return ToasterConstant;
  }

  public get TooltipConstant(): any {
    return TooltipConstant;
  }

  public get ContextMenuConstant() : any {
    return ContextMenuConstant;
  }

}
