import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],
  declarations: [AboutComponent]
})
export class ViewsModule { }
