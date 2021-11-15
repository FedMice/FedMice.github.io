import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ToastrService } from "src/app/utilities/services/toastr.service";
import { SecurityService } from "voila2-runtime-ng";

@Injectable()
export class WebInterceptor implements HttpInterceptor {
  constructor(private toasterService: ToastrService, private securityService: SecurityService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem("token")
      })
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.securityService.logOut();
        }
        console.error("Error.....", error.error);
        this.toasterService.showDanger(error.message);
        return throwError(error);
      })
    );
  }
}
