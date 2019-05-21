import { Component, OnDestroy, OnInit } from '@angular/core';

import * as moment from 'moment';
import { Subscription } from 'rxjs';

import { fadeIn } from '../../shared/animations/fade-in';
import { flyIn } from '../../shared/animations/fly-in';
import { NotificationEntity, NotificationService } from '../../core/notification/notification.service';
import { AutoUnsubscribe } from '../../shared/utils/autoUnsubscribe';
import { HttpService } from '../../core/http/http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [fadeIn, flyIn]
})
@AutoUnsubscribe()
export class HomepageComponent implements OnInit, OnDestroy {
  animation: any;
  time: any;
  demoValue: number;

  _subscription: Subscription;

  constructor(private http: HttpService, private notificationService: NotificationService) {
    this.demoValue = 1;
  }

  ngOnInit() {
    this.animation = 'void';

    this.time = moment().format();

    this._subscription = this.notificationService.getNotification().subscribe((data: NotificationEntity) => {
      switch (data.act) {
        case 'test':
          console.log(data);
          console.log('this is homepage component in homepage module');
          break;
      }
    });
  }

  ngOnDestroy() {
  }

  toggleState() {
    this.animation = (this.animation === 'void' ? '*' : 'void');
  }

  postData() {
    const api = '/api/hero';
    const heroes = [
      {id: 0, name: 'Zero'},
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    this.http.postData(api, heroes).subscribe(() => {
      console.log('post data');
    });
  }
}
