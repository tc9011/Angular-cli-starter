import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalComponent } from './global/global.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

const LAYOUTCOMPONENT = [
  FooterComponent,
  GlobalComponent,
  SidebarComponent,
  NavbarComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [...LAYOUTCOMPONENT],
  exports: [...LAYOUTCOMPONENT]
})
export class LayoutModule { }
