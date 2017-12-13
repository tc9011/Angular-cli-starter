import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AlertModule,CarouselModule,ButtonsModule,ModalModule,TimepickerModule,TabsModule,SortableModule,RatingModule,PopoverModule,PaginationModule,BsDropdownModule,DatepickerModule,CollapseModule } from 'ngx-bootstrap';

import {MatAutocompleteModule,MatButtonModule, MatCheckboxModule,MatTabsModule,MatInputModule,MatRadioModule,MatSelectModule,MatSliderModule,MatSlideToggleModule,MatMenuModule,MatSidenavModule,MatToolbarModule,MatListModule,MatGridListModule,MatCardModule,MatButtonToggleModule,MatChipsModule,MatIconModule,MatProgressSpinnerModule,MatProgressBarModule,MatDialogModule,MatTooltipModule,MatSnackBarModule} from '@angular/material';

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
  MatButtonModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule
];


@NgModule({
  imports: sharedModule,
  declarations: [],
  exports: sharedModule
})
export class SharedModule { }
