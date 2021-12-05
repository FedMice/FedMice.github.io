import { Component } from '@angular/core';
import { BzIconService } from 'blazing';

@Component({
  selector: 'app-pages',
  template: `<app-layout>
             <router-outlet></router-outlet>
            </app-layout>`,
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent  {

  constructor(private iconService: BzIconService) {}

  ngOnInit(): void {
    this.iconService.registerSvgPack({ name:'bzDoc', href: '../../assets/icon.svg#'});
    this.iconService.setDefaultPack('bzDoc'); 
  }
 
}
