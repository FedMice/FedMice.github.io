import { Component } from '@angular/core';
import { FormsComponent } from '../../../forms.component';


@Component({
  selector: 'app-prefix-suffix',
  templateUrl: './prefix-suffix.component.html',
  styleUrls: ['./prefix-suffix.component.scss']
})
export class PrefixSuffixComponent extends FormsComponent {

     public eyeCssClass: string = "fa fa-eye-slash";
     public type: string = 'password';

     public  togglePassword() : void {
       this.eyeCssClass = this.eyeCssClass == "fa fa-eye-slash" ? "fa fa-eye" : "fa fa-eye-slash";
       this.type = this.type == 'password' ? 'text': 'password'
     }
}
