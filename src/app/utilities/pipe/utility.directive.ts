import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";


declare var hljs: any;

@Directive({
    selector: 'span[highlight]'
  })
  export class HighlightCodeDirective {
    constructor(private elRef: ElementRef) {
    }
  
    ngAfterViewInit() {
  
      setTimeout(() => {
        if (hljs)
          hljs.highlightBlock(this.elRef.nativeElement);
      });
  
    }
}



