
import { BzAutoMapper, IMapOperation } from "blazing";
import { inizializeMapper } from "../../shared/base/base.helper";
import { convertIntoDate } from "src/app/utilities/function/helper";


export function mapperDemoConfig() : void {

    const bzAutoMapper: BzAutoMapper = inizializeMapper();

        bzAutoMapper.createMap('Cliente', 'ICliente');
          
          .forMember('telefono', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('piva', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('codiceFiscale', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('fax', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('sitoInternet', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('ragioneSociale', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('referenteAziendale', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('email', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('organizzazionePadre', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
        bzAutoMapper.createMap('Prodotto', 'IProdotto');
          
          .forMember('descrizioneProdotto', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('schedaTecnica', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('dataScadenza', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('prezzoUnitario', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('limitedEdition', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('idProdotto', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
        bzAutoMapper.createMap('Ordine', 'IOrdine');
          
          .forMember('idOrdine', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('anno', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('dataOrdine', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('urgente', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
        bzAutoMapper.createMap('RigaOrdine', 'IRigaOrdine');
          
          .forMember('quantita', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
        bzAutoMapper.createMap('TipoOrdine', 'ITipoOrdine');
          
          .forMember('nomeTipoOrdine', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          
          
          .forMember('idTipoOrdine', { value: convertIntoDate, operation: IMapOperation.CHANGE})
          

}

