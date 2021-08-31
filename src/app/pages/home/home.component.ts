import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeConstant } from './home.constant';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {


  public get HomeConstant() : any {
    return  HomeConstant;
 }

}


