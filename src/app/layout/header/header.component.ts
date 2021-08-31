import { Component } from '@angular/core';
import { BzLayoutService } from 'blazing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private layoutService: BzLayoutService) { }

  public toggleSidebar(): void {
    this.layoutService.toggleMenuSidebar();
  }

}


export const LANGUAGE = [
  { language: 'it' },
  { language: 'en' },
  { language: 'es' },
  { language: 'de' }
]
