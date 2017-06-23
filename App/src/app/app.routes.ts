import {AboutComponent} from "./about/about.component";

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
    path: 'about',
    component: AboutComponent,
  },
  {
    path:'**',//fallback router must in the last
    loadChildren: './homepage/homepage.module#HomepageModule'
  }
];
