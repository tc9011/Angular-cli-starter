import { NgModule } from '@angular/core';

import { ViewsRoutingModule } from './views-routing.module';
import { AboutComponent } from './about/about.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ViewsRoutingModule,
    SharedModule,
    LayoutModule,
  ],
  declarations: [AboutComponent]
})
export class ViewsModule { }
