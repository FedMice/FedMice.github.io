import { Component } from '@angular/core';
import { BzToastrService } from 'blazing';
import { OverlaysComponent } from '../../../overlays.component';


@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent extends OverlaysComponent {

  constructor(public toastrService: BzToastrService) { super()}
  
}
