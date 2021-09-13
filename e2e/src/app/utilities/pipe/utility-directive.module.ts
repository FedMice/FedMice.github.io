import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HighlightCodeDirective } from "./utility.directive";

@NgModule({
    declarations: [HighlightCodeDirective],
    imports: [
      CommonModule,
    ],
    exports:[HighlightCodeDirective]
  })
  export class UtilityDirectiveModule { }
  