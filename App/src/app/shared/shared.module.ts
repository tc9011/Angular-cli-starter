import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AlertModule,CarouselModule,ButtonsModule,ModalModule,TimepickerModule,TabsModule,SortableModule,RatingModule,PopoverModule,PaginationModule,BsDropdownModule,DatepickerModule,CollapseModule } from 'ngx-bootstrap';

import {MdAutocompleteModule,MdButtonModule, MdCheckboxModule,MdTabsModule,MdInputModule,MdRadioModule,MdSelectModule,MdSliderModule,MdSlideToggleModule,MdMenuModule,MdSidenavModule,MdToolbarModule,MdListModule,MdGridListModule,MdCardModule,MdButtonToggleModule,MdChipsModule,MdIconModule,MdProgressSpinnerModule,MdProgressBarModule,MdDialogModule,MdTooltipModule,MdSnackBarModule} from '@angular/material';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import 'hammerjs';

const sharedModule = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
  AlertModule,
  CarouselModule,
  ButtonsModule,
  ModalModule,
  TimepickerModule,
  TabsModule,
  SortableModule,
  RatingModule,
  PopoverModule,
  PaginationModule,
  BsDropdownModule,
  DatepickerModule,
  CollapseModule,
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
];


@NgModule({
  imports: sharedModule,
  declarations: [],
  exports: sharedModule
})
export class SharedModule { }
