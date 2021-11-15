
import { DatePipe } from "@angular/common";
import { BzAutoMapper, IMapOperation } from "blazing";
import { convertIntoDate } from "src/app/utilities/function/helper";
import { inizializeMapper } from "../../shared/base/base.helper";


export function mapperDemoConfig() : void {

    const bzAutoMapper: BzAutoMapper = inizializeMapper();

        bzAutoMapper.createMap('Cliente', 'ICliente');

       //Basta sfruttare questa mappa, al backend si deve restituire un oggeto di tipo Date.
        bzAutoMapper.createMap('Prodotto', 'IProdotto')
        .forMember('dataScadenza', { value: convertIntoDate, operation: IMapOperation.CHANGE})
        .forMember('lastModifiedDate', { value: convertIntoDate, operation: IMapOperation.CHANGE})
        .forMember('createdDate', { value: convertIntoDate, operation: IMapOperation.CHANGE})
        



        bzAutoMapper.createMap('Ordine', 'IOrdine');
        bzAutoMapper.createMap('RigaOrdine', 'IRigaOrdine');
        bzAutoMapper.createMap('TipoOrdine', 'ITipoOrdine');


      
}





