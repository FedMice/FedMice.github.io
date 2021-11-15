import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent  {

 

  constructor(private router: Router) { }

  ngOnInit(): void {
 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        let element = document.getElementsByClassName('scrollable-container')[0] as HTMLElement;
        element.scrollTo(0,0);
      }
    });
  }
}

