import { Component} from '@angular/core';
import { BzToastrService } from 'blazing';
import { OverlaysComponent } from '../overlays.component';


@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent extends OverlaysComponent {

  constructor(public toastrService: BzToastrService){super()}


}
