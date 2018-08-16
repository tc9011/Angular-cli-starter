import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './shared/services/Storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public translate: TranslateService, private ss: StorageService) {
    translate.addLangs(['zh-CN', 'en']);
    translate.setDefaultLang('zh-CN');
    translate.use('zh-CN');
    this.ss.setLocalStorage('name', 'tc');
  }

  ngOnInit() {
  }

}
