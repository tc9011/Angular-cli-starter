import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { AboutComponent } from './about/about.component';
import { HomepageModule } from './homepage/homepage.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    HomepageModule,
    LayoutModule,
  ],
  declarations: [AboutComponent]
})
export class ViewsModule { }
