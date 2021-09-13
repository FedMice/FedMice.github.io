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
		children: [
            {
				label: "Input",
				path: "/pages/forms/input",
			},
			{
				label: "Dropdown",
				path: "/pages/forms/dropdown",
			},
			{
				label: "Checkbox",
				path: "/pages/forms/checkbox",
			},
			{
				label: "Switch",
				path: "/pages/forms/switch",
			},
			{
				label: "Radio",
				path: "/pages/forms/radio",
			},
			{
				label: "Date-picker",
				path: "/pages/forms/date-picker",
			},
			{
				label: "Textarea",
				path: "/pages/forms/textarea",
			}
		]
	}

]
