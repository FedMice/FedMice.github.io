
import { BzAutoMapper } from "blazing";
import { inizializeMapper } from "../../shared/base/base.helper";


export function mapperDemoConfig() : void {

    const bzAutoMapper: BzAutoMapper = inizializeMapper();

        bzAutoMapper.createMap('Cliente', 'ICliente');
        bzAutoMapper.createMap('Prodotto', 'IProdotto');
        bzAutoMapper.createMap('Ordine', 'IOrdine');
        bzAutoMapper.createMap('RigaOrdine', 'IRigaOrdine');
        bzAutoMapper.createMap('TipoOrdine', 'ITipoOrdine');

}

