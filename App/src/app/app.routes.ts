import { RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import { AppComponent } from './app.component';

export const appRoutes=[
  {
    path:'',
    redirectTo:'homepage',
    pathMatch:'full'
  },
  {
    path:'homepage',
    loadChildren: './homepage/homepage.module#HomepageModule',    //lazy load
  },
  {
    path:'**',//fallback router must in the last
    loadChildren: './homepage/homepage.module#HomepageModule'
  }
];
