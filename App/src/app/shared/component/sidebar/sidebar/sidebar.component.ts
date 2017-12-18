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
  /*
  *
  * 使用方法：
  * <app-sidebar [data]="menuData">
  *   <li class="zte-aside-title">人脸识别</li>
  * </app-sidebar>
  *
  * menuData = [
  *  {
  *   title: '人脸库',
  *   routeLink: 'faceDataBase',
  *   icon: 'icon font-paletx px-icon-user_20',
  *   children: [
  *       {
  *         title: '摄像头设置',
  *         routeLink: 'cameraSettings',
  *         icon: 'icon font-paletx px-icon-webcam_20'
  *       }
  *     ]
  *   },
  *   {
  *     title: '摄像头设置',
  *     routeLink: 'cameraSettings',
  *     icon: 'icon font-paletx px-icon-webcam_20'
  *   },
  *   {
  *     title: '识别结果查询',
  *     routeLink: 'resultInquiries',
  *     icon: 'icon font-paletx px-icon-overview_20'
  *   },
  *   {
  *     title: '群组管理',
  *     routeLink: 'groupManage',
  *     icon: 'icon font-paletx px-icon-project_member_20'
  *   }
  * ];
  *
  * */

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
