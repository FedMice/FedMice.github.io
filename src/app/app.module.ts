import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BzTranslateConfig, BzTranslateService} from 'blazing';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TranslateConfig extends BzTranslateConfig {
  getTranslation(lang: string): Observable<any> {
    return BzTranslateService.getTranslationsFiles([import(`../assets/${lang}.json`)]);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: BzTranslateConfig, useClass: TranslateConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
