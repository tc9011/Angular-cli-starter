import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AlertModule,CarouselModule,ButtonsModule,ModalModule,TimepickerModule,TabsModule,SortableModule,RatingModule,PopoverModule,PaginationModule,BsDropdownModule,DatepickerModule,CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {appRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    SharedModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    TimepickerModule.forRoot(),
    TabsModule.forRoot(),
    SortableModule.forRoot(),
    RatingModule.forRoot(),
    PopoverModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    DatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
