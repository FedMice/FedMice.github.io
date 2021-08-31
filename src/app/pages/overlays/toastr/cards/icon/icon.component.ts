import { Component} from '@angular/core';
import { BzToastrService } from 'blazing';
import { OverlaysComponent } from '../../../overlays.component';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent extends OverlaysComponent {

  constructor(public toastrService: BzToastrService) {super() }

 

}
