import { ChangeDetectionStrategy, Component} from '@angular/core';
import { MenuElement } from 'blazing/lib/components/menu/menu-element';
import { MENU_HOME } from '../../pages/homepage/homepage-menu';
import { getPrivileges } from 'voila2-runtime-ng';

import {MENU_MS_DEMO} from '../../pages/voila2sample-ms-demo-fe/ms-demo-menu';

const MS_MENU_ITEMS : MenuElement[] = [
	...MENU_HOME,
	...MENU_MS_DEMO

]

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarLeftComponent  {

  public privileges: string[] = getPrivileges();

  public MENU_ELEMENTS: MenuElement[] =  [...MS_MENU_ITEMS];


}



