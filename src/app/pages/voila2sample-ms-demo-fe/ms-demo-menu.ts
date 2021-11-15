
import { MenuElement } from "blazing/lib/components/menu/menu-element";
import {getPrivilegesEnum } from 'voila2-runtime-ng';

const Privileges = getPrivilegesEnum();

export const MENU_MS_DEMO: MenuElement[] = [

			{
				label:"Cliente",
				expectedPrivilege:Privileges.CLIENTE_FIND_PAGINATED,
				path:"/pages/ms-demo/cliente/list-cliente",
				basePath:"/pages/ms-demo/cliente/"
    		},
			{
				label:"Prodotto",
				expectedPrivilege:Privileges.PRODOTTO_FIND_PAGINATED,
				path:"/pages/ms-demo/prodotto/list-prodotto",
				basePath:"/pages/ms-demo/prodotto/"
    		},
			{
				label:"Ordine",
				expectedPrivilege:Privileges.ORDINE_FIND_PAGINATED,
				path:"/pages/ms-demo/ordine/list-ordine",
				basePath:"/pages/ms-demo/ordine/"
    		},
			{
				label:"Riga Ordine",
				expectedPrivilege:Privileges.RIGA_ORDINE_FIND_PAGINATED,
				path:"/pages/ms-demo/riga-ordine/list-riga-ordine",
				basePath:"/pages/ms-demo/riga-ordine/"
    		},
			{
				label:"Tipo Ordine",
				expectedPrivilege:Privileges.TIPO_ORDINE_FIND_PAGINATED,
				path:"/pages/ms-demo/tipo-ordine/list-tipo-ordine",
				basePath:"/pages/ms-demo/tipo-ordine/"
    		},
]

