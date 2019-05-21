import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { NotificationEntity, NotificationService } from '../../core/notification/notification.service';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from '../../shared/utils/autoUnsubscribe';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
@AutoUnsubscribe()
export class AboutComponent implements OnInit, OnDestroy {
  _subscription: Subscription;
  menuData = [
    {
      title: 'table',
      routeLink: '/about/table',
      icon: 'fa fa-address-book-o'
    },
    {
      title: 'title2',
      routeLink: 'about',
      icon: 'fa fa-user-o'
    }
  ];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this._subscription = this.notificationService.getNotification().subscribe((data: NotificationEntity) => {
      switch (data.act) {
        case 'test':
          console.log(data);
          console.log('this is about component in homepage module');
          break;
      }
    });
  }

  ngOnDestroy() {
  }
}
