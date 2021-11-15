import { Component } from '@angular/core';
import { GenericComponent } from 'voila2-runtime-ng';


@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent<T, V> extends GenericComponent<T,V> {

    
}
