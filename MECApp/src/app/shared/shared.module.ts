import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import {MdAutocompleteModule,MdButtonModule, MdCheckboxModule,MdTabsModule,MdInputModule,MdRadioModule,MdSelectModule,MdSliderModule,MdSlideToggleModule,MdMenuModule,MdSidenavModule,MdToolbarModule,MdListModule,MdGridListModule,MdCardModule,MdButtonToggleModule,MdChipsModule,MdIconModule,MdProgressSpinnerModule,MdProgressBarModule,MdDialogModule,MdTooltipModule,MdSnackBarModule} from '@angular/material';
import 'hammerjs';




const sharedModule = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
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
