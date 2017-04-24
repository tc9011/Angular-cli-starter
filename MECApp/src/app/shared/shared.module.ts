import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import 'hammerjs';

const sharedModule = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];


@NgModule({
  imports: sharedModule,
  declarations: [],
  exports: sharedModule
})
export class SharedModule { }
