import { Component} from '@angular/core';
import { BzToastrService } from 'blazing';
import { OverlaysComponent } from '../../../overlays.component';


@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss']
})
export class UsageComponent extends OverlaysComponent {

  constructor(public toastrService: BzToastrService) {super() }


 public showToast() : void {
  this.toastrService.showToast('This is a toast')
}

}
