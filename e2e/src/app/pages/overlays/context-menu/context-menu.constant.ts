export const ContextMenuConstant = {

    INSTALLATION:
    `import {BzContextMenuModule} from 'blazing';

@NgModule({
    imports: [
        BzContextMenuModule,
             ...
    ],
        ...
})
export class YourModule { }
  `,

  USAGE_HTML:
  `<div >
    <button bzButton status="primary" [bzContextMenu]="tmpl"> Show Context menu </button>
</div>

<ng-template #tmpl>

    <li class="context-menu-row">
        <bz-icon class="fa fa-user fk-r-mr-1"></bz-icon> profile
    </li>
    <li class="context-menu-row">
        <bz-icon class="fa fa-sign-out fk-r-mr-1"></bz-icon> logout
    </li>

</ng-template>

`,
}