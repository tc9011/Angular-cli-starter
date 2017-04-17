import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/*test material*/
import {MdAutocompleteModule,MdButtonModule, MdCheckboxModule,MdTabsModule,MdInputModule,MdRadioModule,MdSelectModule,MdSliderModule,MdSlideToggleModule,MdMenuModule,MdSidenavModule,MdToolbarModule,MdListModule,MdGridListModule,MdCardModule,MdButtonToggleModule,MdChipsModule,MdIconModule,MdProgressSpinnerModule,MdProgressBarModule,MdDialogModule,MdTooltipModule,MdSnackBarModule} from '@angular/material';
/*test material*/

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    /*test material*/
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
    /*test material*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
