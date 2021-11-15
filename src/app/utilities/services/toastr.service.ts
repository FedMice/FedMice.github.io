import { Injectable } from "@angular/core";
import { BzToastrConfig, BzToastrService } from "blazing";


@Injectable({
    providedIn:'root'
})
export class ToastrService {

    private _DANGER_DURATION : number = 500000;


    constructor(private toastrService: BzToastrService) {}

    public showDanger(message: string) : void {
        this.toastrService.showDanger(message, {duration: this. _DANGER_DURATION});
    }

    public showSuccess(message:string) : void {
        this.toastrService.showSuccess(message);
    }

    public showInfo(message: string) : void {
        this.toastrService.showInfo(message);
    }

    public showWarning(message: string ) : void {
        this.toastrService.showWarning(message);
    }

    public showToast(message: string, config?: BzToastrConfig) : void {
        this.toastrService.showToast(message, config);
    } 

    /**
     * Show tosat by severity.
     * 
     * @param message 
     * @param severity 
     */
    public showToastBySeverity(message: string, severity: string) : void {
        switch(severity) {
            case 'FATAL':
            case 'ERROR': {
                this.showDanger(message);
                break;
            }
            case 'INFO': {
                this.showSuccess(message);
                break;
            }
            case 'WARING': {
                this.showWarning(message);
                break;
            }
            default: {
                this.showInfo(message);
                break;
            }
        }
    }

}
