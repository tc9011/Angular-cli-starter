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
