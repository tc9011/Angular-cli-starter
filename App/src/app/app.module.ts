import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpService } from './shared/services/http.service';
import { StorageService } from './shared/services/Storage.service';
import { RepeatValidatorDirective } from './shared/directive/password-match.directive';
import { NotificationService } from './shared/services/notification.service';
import { LayoutModule } from './layout/layout.module';
import { ViewsModule } from './views/views.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    RepeatValidatorDirective
  ],
  imports: [
    LayoutModule,
    ViewsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [HttpService, StorageService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
