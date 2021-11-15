import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from './shared/base/base.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BzButtonModule, BzCardModule, BzThemeModule, BzHttpProgressBarInterceptor} from 'blazing';
import { ConfirmDialogComponent } from './utilities/dialog/confirm-dialog/confirm-dialog.component'
import { WebInterceptor } from './shared/interceptor/error.interceptor';
import {TranslateModule, TranslateLoader} from 'translate-ng'
import {  manageSecurityConfig,  } from './security/security.config';
import { LazyTranslateLoader } from './translate.config';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BzCardModule,
    BzButtonModule,
    BzThemeModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useClass: LazyTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BzHttpProgressBarInterceptor, multi: true},
    manageSecurityConfig()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

