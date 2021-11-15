import { NgModule } from "@angular/core";
import {PageStatusPipe, PermissionPipe, ReadOnlyPipe} from './utility-pipe';


const PIPE = [
    PageStatusPipe,
    PermissionPipe,
    ReadOnlyPipe
]

@NgModule({
    declarations: [...PIPE],
    imports: [
    ],
    exports:[...PIPE]
  })
  export class UtilityPipeModule { }
  