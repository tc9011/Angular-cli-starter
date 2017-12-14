import {Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

import {MenuData} from "./sidebar.typings";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  _items: MenuData[];

  @Input()
  public set data(items: MenuData[]) {
    this._items = items;
  }

  constructor(public el: ElementRef,
              public renderer: Renderer2,
              private router: Router) { }

  ngOnInit() {
  }

  public isActiveRoute(route: MenuData[]) : boolean {
    let isRouteActive:boolean;
    const routeName = this.router.url.split('/');

    route.some(item => {
      if (routeName[routeName.length - 1]  === item.routeLink){
        isRouteActive = true;
        return true;
      }else {
        isRouteActive = false;
      }
    });
    return isRouteActive;
  }

}
