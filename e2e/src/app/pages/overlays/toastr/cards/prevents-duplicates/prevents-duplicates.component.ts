import { Component} from '@angular/core';
import { BzToastrService } from 'blazing';
import { OverlaysComponent } from '../../../overlays.component';


@Component({
  selector: 'app-prevents-duplicates',
  templateUrl: './prevents-duplicates.component.html',
  styleUrls: ['./prevents-duplicates.component.scss']
})
export class PreventsDuplicatesComponent extends OverlaysComponent {

  constructor(public toastrService: BzToastrService) {super() }


}
