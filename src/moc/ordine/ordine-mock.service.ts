import { Injectable } from "@angular/core";
import { of as observableOf, Observable } from 'rxjs';


@Injectable({providedIn:"root"})
export class OrdineMockService {

   getOrdineList(): Observable<any[]> {
        return observableOf(ORDINI);
   }

   getOrdine(): Observable<any> {
       return observableOf(ORDINE);
   }

}


export const ORDINI : any[] = [
    {
        "messages":[
           
        ],
        "response":{
           "_embedded":{
              "ordineDtoList":[
                 {
                    "objectKey":"1~2020",
                    "objectTitle":"1~2020",
                    "idOrdine":1,
                    "anno":2020,
                    "dataOrdine":"2020-12-13",
                    "urgente":true,
                    "ragioneSociale":"dottore",
                    "idTipoOrdine":null,
                    "theClienteObjectTitle":"dottore",
                    "theClienteObjectKey":"dottore",
                    "theTipoOrdineObjectTitle":null,
                    "theTipoOrdineObjectKey":null,
                    "theOrdinePadreObjectTitle":null,
                    "theOrdinePadreObjectKey":null,
                    "ordineKey":{
                       "entityState":"",
                       "idOrdine":1,
                       "anno":2020,
                       "updatedEntityState":false,
                       "createdEntityState":false,
                       "deletedEntityState":false
                    },
                    "_links":{
                       "self":[
                          {
                             "href":"http://localhost:8090/demo/ordine/1~2020"
                          },
                          {
                             "href":"http://localhost:8090/demo/ordine/1~2020"
                          }
                       ],
                       "theCliente":{
                          "href":"http://localhost:8090/demo/cliente/dottore"
                       },
                       "theRigaOrdine":{
                          "href":"http://localhost:8090/demo/riga-ordine/findByTheOrdine/1~2020"
                       },
                       "theOrdineFigli":{
                          "href":"http://localhost:8090/demo/ordine/findByTheOrdinePadre/1~2020"
                       }
                    }
                 }
              ]
           },
           "_links":{
              "self":{
                 "href":"http://127.0.0.1:8014/demo/ordine?page=0&size=20"
              }
           },
           "page":{
              "size":20,
              "totalElements":1,
              "totalPages":1,
              "number":0
           }
        },
        "errorDetails":null
     }
]


export const ORDINE = 
   {
      "messages":[
         
      ],
      "response":{
         "objectKey":"1~2020",
         "objectTitle":"1~2020",
         "idOrdine":1,
         "anno":2020,
         "dataOrdine":"2020-12-13",
         "urgente":true,
         "ragioneSociale":"dottore",
         "idTipoOrdine":null,
         "theClienteObjectTitle":"dottore",
         "theClienteObjectKey":"dottore",
         "theTipoOrdineObjectTitle":null,
         "theTipoOrdineObjectKey":null,
         "theOrdinePadreObjectTitle":null,
         "theOrdinePadreObjectKey":null,
         "ordineKey":{
            "entityState":"",
            "idOrdine":1,
            "anno":2020,
            "updatedEntityState":false,
            "createdEntityState":false,
            "deletedEntityState":false
         },
         "_links":{
            "self":[
               {
                  "href":"http://localhost:8090/demo/ordine/1~2020"
               },
               {
                  "href":"http://localhost:8090/demo/ordine/1~2020"
               }
            ],
            "theCliente":{
               "href":"http://localhost:8090/demo/cliente/dottore"
            },
            "theRigaOrdine":{
               "href":"http://localhost:8090/demo/riga-ordine/findByTheOrdine/1~2020"
            },
            "theOrdineFigli":{
               "href":"http://localhost:8090/demo/ordine/findByTheOrdinePadre/1~2020"
            }
         }
      },
      "errorDetails":null
}