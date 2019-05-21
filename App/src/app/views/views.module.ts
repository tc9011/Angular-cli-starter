import { NgModule } from '@angular/core';

import { ViewsRoutingModule } from './views-routing.module';
import { AboutComponent } from './about/about.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../shared/shared.module';
import { Exception403Component } from './exception/403/exception403.component';
import { Exception404Component } from './exception/404/exception404.component';
import { ExceptionComponent } from './exception/exception/exception.component';
import { Exception500Component } from './exception/500/exception500.component';
import { EchartsComponent } from './echarts/echarts.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    ViewsRoutingModule,
    SharedModule,
    LayoutModule,
  ],
  declarations: [
    AboutComponent,
    ExceptionComponent,
    Exception403Component,
    Exception404Component,
    Exception500Component,
    EchartsComponent,
    TableComponent,
  ]
})
export class ViewsModule { }
