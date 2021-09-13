import { MenuElement } from "blazing/lib/components/menu/menu-element";


export const MENU_ELEMENTS: MenuElement[] = [
    {
        label: "Getting Started",
        iconClass: "fa fa-hourglass-start",
        path: "/pages/home",
        basePath: "/pages/home"
    },
    {
        label: "Overlays",
        iconClass: "fa fa-window-restore",
        children: [
            {
                label: "Tooltip",
                iconClass: "fa fa-comment-o",
                path: "/pages/overlays/tooltip",
            },
            {
                label: "Toastr",
                iconClass: "fa fa-bell",
                path: "/pages/overlays/toastr",
            },
            {
                label: "Dialog",
                iconClass: "fa fa-window-maximize",
                path: "/pages/overlays/dialog",
            },
            {
                label: "Context menu",
                path: "/pages/overlays/context-menu",
            }
        ]
    },
    {
        label: "Forms",
        iconClass: "form",
        svg: true,
        children: [
            {
                label: "Input",
                iconClass: "fa fa-keyboard-o",
                path: "/pages/forms/input"
            },
            {
                label: "Dropdown",
                iconClass: "fa fa-sort-desc",
                path: "/pages/forms/dropdown",
                basePath: "/pages/forms/dropdown"
            },
            {
                label: "Checkbox",
                iconClass: "fa fa-check",
                path: "/pages/forms/checkbox",
            },
            {
                label: "Switch",
                iconClass: "fa fa-toggle-on",
                path: "/pages/forms/switch",
            },
            {
                label: "Radio",
                iconClass: "radio",
                svg: true,
                path: "/pages/forms/radio",
            },
            {
                label: "Date-picker",
                iconClass: "fa fa-calendar",
                path: "/pages/forms/date-picker",
            },
            {
                label: "Textarea",
                iconClass: "textarea",
                svg:true,
                path: "/pages/forms/textarea",
            }
        ]
    }
 
]