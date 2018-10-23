import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { AboutComponent } from './about/about.component';
import { HomepageModule } from './homepage/homepage.module';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    HomepageModule,
    LayoutModule,
  ],
  declarations: [AboutComponent]
})
export class ViewsModule { }
