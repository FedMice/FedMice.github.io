import { Component } from '@angular/core';
import { BzDialogService } from 'blazing';
import { OverlaysComponent } from '../../../overlays.component';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent extends OverlaysComponent {

  constructor(public dialogService: BzDialogService) {super() }

 
}
