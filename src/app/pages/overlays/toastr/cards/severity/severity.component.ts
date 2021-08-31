import { Component} from '@angular/core';
import { BzToastrService } from 'blazing';
import { OverlaysComponent } from '../../../overlays.component';


@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.scss']
})
export class SeverityComponent extends OverlaysComponent {

  constructor(public toastrService: BzToastrService) { super()}

}
