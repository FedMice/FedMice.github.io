import { Injectable } from "@angular/core";
import { of as observableOf, Observable } from 'rxjs';


@Injectable({providedIn:"root"})
export class ClienteMockService {

   getClienteList(): Observable<any> {
        return observableOf(CLIENTI);
   }

   getCliente(): Observable<any> {
       return observableOf(CLIENTE);
   }

}


export const CLIENTI ={
    "messages":[
       
    ],
    "response":{
       "_embedded":{
          "clienteDtoList":[
             {
                "objectKey":"dottore",
                "objectTitle":"dottore",
                "ragioneSociale":"dottore",
                "referenteAziendale":"pippo",
                "email":"ciao@example.com",
                "telefono":"08113434",
                "piva":"DFO383AFA",
                "codiceFiscale":"PPPPPPP",
                "sitoInternet":"www.ciao.it",
                "fax":"08111111",
                "organizzazionePadre":"mice",
                "userId":"bakugo",
                "_links":{
                   "self":[
                      {
                         "href":"http://localhost:8090/demo/cliente/dottore"
                      },
                      {
                         "href":"http://localhost:8090/demo/cliente/dottore"
                      }
                   ],
                   "theOrdine":{
                      "href":"http://localhost:8090/demo/ordine/findByTheCliente/dottore"
                   },
                   "theUserEntity":{
                      "href":"http://127.0.0.1:8090/security_model/UserEntity/bakugo"
                   }
                }
             }
          ]
       },
       "_links":{
          "self":{
             "href":"http://127.0.0.1:8014/demo/cliente?page=0&size=5"
          }
       },
       "page":{
          "size":5,
          "totalElements":1,
          "totalPages":1,
          "number":0
       }
    },
    "errorDetails":null
 }


 export const CLIENTE = {
 "messages":[
    
 ],
 "response":{
    "objectKey":"dottore",
    "objectTitle":"dottore",
    "ragioneSociale":"dottore",
    "referenteAziendale":"pippo",
    "email":"ciao@example.com",
    "telefono":"08113434",
    "piva":"DFO383AFA",
    "codiceFiscale":"PPPPPPP",
    "sitoInternet":"www.ciao.it",
    "fax":"08111111",
    "organizzazionePadre":"mice",
    "userId":"bakugo",
    "_links":{
       "self":[
          {
             "href":"http://localhost:8090/demo/cliente/dottore"
          },
          {
             "href":"http://localhost:8090/demo/cliente/dottore"
          }
       ],
       "theOrdine":{
          "href":"http://localhost:8090/demo/ordine/findByTheCliente/dottore"
       },
       "theUserEntity":{
          "href":"http://127.0.0.1:8090/security_model/UserEntity/bakugo"
       }
    }
 },
 "errorDetails":null
}