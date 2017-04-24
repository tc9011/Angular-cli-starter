import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { AlertModule,CarouselModule,ButtonsModule,ModalModule,TimepickerModule,TabsModule,SortableModule,RatingModule,PopoverModule,PaginationModule,BsDropdownModule,DatepickerModule,CollapseModule } from 'ngx-bootstrap';
import {MdAutocompleteModule,MdButtonModule, MdCheckboxModule,MdTabsModule,MdInputModule,MdRadioModule,MdSelectModule,MdSliderModule,MdSlideToggleModule,MdMenuModule,MdSidenavModule,MdToolbarModule,MdListModule,MdGridListModule,MdCardModule,MdButtonToggleModule,MdChipsModule,MdIconModule,MdProgressSpinnerModule,MdProgressBarModule,MdDialogModule,MdTooltipModule,MdSnackBarModule} from '@angular/material';

import {HomepageComponent} from "./homepage.component";
import {homepageRoutes} from "./homepage.routes";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(homepageRoutes),
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
    MdButtonModule,
    MdCheckboxModule,
    MdAutocompleteModule,
    MdTabsModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdButtonToggleModule,
    MdChipsModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule
  ],
  declarations: [HomepageComponent],
  providers: []
})
export class HomepageModule { }
