import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService, private notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  useEnglish() {
    this.translate.use('en');
  }

  useChinese() {
    this.translate.use('zh-CN');
  }

  useNotification() {
    this.notificationService.publish({
      act: 'test',
      data: 'this message is from navbar module'
    })
  }

}
