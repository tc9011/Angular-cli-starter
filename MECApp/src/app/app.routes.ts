import { RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";

export const appRoutes=[
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomepageComponent
  }
];
