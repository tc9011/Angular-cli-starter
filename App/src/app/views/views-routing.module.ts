import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GlobalComponent } from '../layout/global/global.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule {
}
