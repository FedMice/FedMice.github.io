import { Component } from '@angular/core';
import { BzToastrService } from 'blazing';
import { OverlaysComponent } from '../../../overlays.component';


@Component({
  selector: 'app-destroy-by-click',
  templateUrl: './destroy-by-click.component.html',
  styleUrls: ['./destroy-by-click.component.scss']
})
export class DestroyByClickComponent extends OverlaysComponent {

  constructor(public toastrService: BzToastrService) { super()}

}
