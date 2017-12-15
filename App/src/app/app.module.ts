import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {HttpClient} from "@angular/common/http";

import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {appRoutes} from './app.routes';
import { AboutComponent } from './about/about.component';
import {HttpService} from "./shared/services/http.service";
import {SidebarModule} from "./shared/component/sidebar/sidebar.module";
import {LocalStorageService} from "./shared/services/local-storage.service";
import {RepeatValidatorDirective} from "./shared/directive/password-match.directive";
import {NavbarModule} from "./shared/component/navbar/navbar.module";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepeatValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavbarModule,
    BrowserAnimationsModule,
    SharedModule,
    SidebarModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [HttpService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
