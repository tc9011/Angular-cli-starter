import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GlobalComponent } from '../layout/global/global.component';
import { Exception403Component } from './exception/403/exception403.component';
import { Exception404Component } from './exception/404/exception404.component';
import { Exception500Component } from './exception/500/exception500.component';
import {EchartsComponent} from "./echarts/echarts.component";

const routes: Routes = [
  {
    path: '',
    component: GlobalComponent,
    children: [
      {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full'
      },
      {
        path: 'homepage',
        loadChildren: './homepage/homepage.module#HomepageModule',    //lazy load
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'echarts',
        component: EchartsComponent,
      },
    ]
  },
  {
    path: '403',
    component: Exception403Component,
  },
  {
    path: '404',
    component: Exception404Component,
  },
  {
    path: '500',
    component: Exception500Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule {
}
