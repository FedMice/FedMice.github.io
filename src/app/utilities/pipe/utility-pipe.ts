import {  Pipe,  } from "@angular/core";
import { IsEqualPipe, isEquals } from "blazing";
import { environment } from "src/environments/environment";
import { PageStatus } from "voila2-runtime-ng";

@Pipe({

    name: 'hasPageStatus'
})
export class PageStatusPipe extends IsEqualPipe {
}

@Pipe({
    name: 'hasPermission'
})
export class PermissionPipe  {

    public transform(element: any, expectedElementList: any[] | any): boolean {
        if(environment.securityOn)
           return isEquals(element, expectedElementList);
        return true;
    }
}


@Pipe({
    name: 'isReadOnly'
})
export class ReadOnlyPipe  {

    public transform(pageSatus: string, isReadOnly: boolean): boolean {
         if(isEquals(pageSatus, PageStatus.NEW) && isReadOnly) 
             return false;
         return true;
    }
}





