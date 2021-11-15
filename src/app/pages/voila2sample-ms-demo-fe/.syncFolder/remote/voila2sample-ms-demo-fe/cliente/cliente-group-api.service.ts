
 import { Injectable, Injector} from "@angular/core";
 import { ClienteApiService } from './cliente-api.service';
    import { UserEntityApiService } from '../../voila2sample-ms-security-fe/user-entity/user-entity-api.service'

@Injectable() 
export class ClienteGroupApiService {

     private clienteApiService !: ClienteApiService;
    	private	userEntityApiService !: UserEntityApiService

    constructor(private injector: Injector){}

     get cliente(): ClienteApiService {
        if(!this.clienteApiService)
           this.clienteApiService = this.injector.get(ClienteApiService);
        return this.clienteApiService;
     }


        get userEntity() : UserEntityApiService {
           if(!this.userEntityApiService)
               this.userEntityApiService = this.injector.get(UserEntityApiService);
           return this.userEntityApiService;
        }
   
}

