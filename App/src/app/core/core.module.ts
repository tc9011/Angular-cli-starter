import { NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { InterceptorService } from './http/interceptor.service';
import { HttpService } from './http/http.service';
import { StorageService } from './storage/storage.service';
import { NotificationService } from './notification/notification.service';
import { LoadingService } from './loading/loading.service';
import { throwIfAlreadyLoaded } from './module-import-guard'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    HttpService,
    StorageService,
    NotificationService,
    LoadingService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
