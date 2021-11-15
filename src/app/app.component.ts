import { registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import it from "@angular/common/locales/it";
import { SecurityService } from 'voila2-runtime-ng';
import {buildPrivilegesEnum} from './security/privilege';
import { environment } from 'src/environments/environment';
import { configureMapper } from './mapper.config';
import { NavigationEnd, Router } from '@angular/router';
registerLocaleData(it);


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private securityService: SecurityService, private router: Router) { }

  ngOnInit() {
    configureMapper();
    buildPrivilegesEnum();
    if (environment.securityOn) {
      this.securityService.manageToken();
      this.securityService.setPrivilages();
    }
  }


  


  
}
