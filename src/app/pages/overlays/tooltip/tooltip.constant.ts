export const TooltipConstant = {
    INSTALLATION:
        `import {BzToolTipModule} from 'blazing';

      @NgModule({
          imports: [
              BzToolTipModule
              ...
          ],
          ...
      })
      export class YourModule { }
  `,
    USAGE_HTML: `
    <div>
    <button bzButton status="primary" bzTooltip="Tooltip"> Show tooltip </button>
</div>
`,
USAGE_TS: `
@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
  })
export class TooltipComponent  {}
`,

STATUS_HTML: `
<div >
    <button bzButton status="primary" bzTooltip="Tooltip" > 
        Show tooltip 
    </button>
    <button bzButton status="primary" bzTooltip="Tooltip" bzTooltipStatus="basic" > 
        Show tooltip 
    </button>
    <button bzButton status="primary" bzTooltip="Tooltip" bzTooltipStatus="primary" >
        Show tooltip 
    </button>
    <button bzButton status="primary" bzTooltip="Tooltip" bzTooltipStatus="danger" > 
        Show tooltip 
    </button>
</div>
                          `,

POSITION_HTML: `
<div >
    <button bzButton status="primary" bzTooltip="Tooltip" bzTooltipPosition="top" > 
        Top
    </button>
    <button bzButton status="primary" bzTooltip="Tooltip" bzTooltipPosition="bottom" > 
        Bottom
    </button>
    <button bzButton status="primary" bzTooltip="Tooltip" bzTooltipPosition="left" >
        Left
    </button>
    <button bzButton status="primary" bzTooltip="Tooltip" bzTooltipPosition="right" > 
        Right
    </button>
</div>
                          `,

TRIGGERS_HTML:  `
<div >
    <button bzButton status="primary" bzTooltip="Tooltip" bzTooltipTrigger="hint" > 
        Hint
    </button>
    <button bzButton status="primary" bzTooltip="Tooltip" bzTooltipTrigger="hover" > 
        Hover
    </button>
</div>
                          `,

TOOLTIP_HTML:  `
<div >
    <button bzButton status="primary" [bzTooltip]="tooltip" > 
        I'm a tooltip whit HTML
    </button>
</div>

<ng-template #tooltip>
    <div>I'm a tooltip whith HTML</div>
    <div><button bzButton>OK</button></div>
</ng-template>
                          `,

FONT_HTML:  `
<div >
    <button bzButton status="primary" bzTooltip="tooltip" [bzTooltipFont]="{'fontSize':'10'}" > 
        Tooltip whit font setted
    </button>
</div>
                          `,
}
