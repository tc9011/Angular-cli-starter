import { Component,AfterViewInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from "./shared/services/Storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{

  constructor(public translate: TranslateService, private ss: StorageService){
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('zh');
    translate.use('zh');
    this.ss.setLocalStorage('name', 'tc');
  }

  ngAfterViewInit(){
  }

}
