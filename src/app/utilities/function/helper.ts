 /**
  * Convert value into date object.
  * 
  * @author Federico Gambardella<federico.gambardella@micegroup.it>
  * @param value 
  * @returns 
  */
  export function convertIntoDate(value: string) : any {
    if(value) 
       return new Date(value)
    return value
 }