import { PaginationUtils, BzAutoMapper, ObjectUtils } from "blazing";
import { HttpParams } from "@angular/common/http";
import { isInViewMode } from "voila2-runtime-ng";




/**
 * Fill options.
 * 
 * @author Federico Gambardella<federico.gambardella@micegroup.it>
 * @param pageStatus 
 * @param object 
 */
export function fillOptions(pageStatus: string, object: any) : HttpParams | undefined {
   let options: HttpParams | undefined;
    if(isInViewMode(pageStatus)) {
       options = PaginationUtils.setOptionsForSpring(object);
    }
    else options = undefined;
   return options;
}

/**
 * Inizilize mapper.
 * 
 * @returns 
 */
export function inizializeMapper() : BzAutoMapper {
   return  new BzAutoMapper();
}


/**
 * Set tab objectKey.
 * 
 * @author Federico Gambardella<federico.gambardella@micegroup.it>
 * @param source
 * @param instance
 * @param prop
 * @param modelName
 */
 export function setTabObjectKey(source: any, instance: any, prop: string, modelName: string): void {
   for (let child of ObjectUtils.resolveProps(source, prop)) {
     ObjectUtils.resolveProps(child,  modelName, instance.getObjectKey()) 
   }
 }

 /**
  * Use BzAutoMapper.
  * 
  * @author Federico Gambardella<federico.gambardella@micegroup.it>
  * @param firstKey 
  * @param secondKey 
  * @param sourceObject 
  * @param destObject 
  * @returns 
  */
 export function useMapper(firstKey: string, secondKey: string, sourceObject: any, destObject ?: any) {
     const mapper: BzAutoMapper = BzAutoMapper.getInstance();
     return mapper.map(firstKey, secondKey, sourceObject, destObject);
 }

