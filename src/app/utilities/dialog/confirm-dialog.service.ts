import { Injectable } from '@angular/core';
import { BzDialogService } from 'blazing';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Injectable()
export class ConfirmDialogService {

  constructor(private dialogService: BzDialogService) {}


   public openConfirmDialog( message: string, title ?:string, icon ?: string) : Observable<any> {
        const prop = { 
              message: message,
              title: title || 'Attenzione',
              icon: icon || 'fa fa-exclamation-triangle'
        }
        return this.dialogService.showDialog(ConfirmDialogComponent, {properties: prop})
   }

}
