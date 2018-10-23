import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { homepageRoutes } from './homepage.routes';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(homepageRoutes)
  ],
  declarations: [HomepageComponent],
  providers: []
})
export class HomepageModule {
}
