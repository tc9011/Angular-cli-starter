import { Component,AfterViewInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocalStorageService} from "./shared/services/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{

  constructor(public translate: TranslateService, private ls: LocalStorageService){
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('zh');
    translate.use('zh');
    this.ls.set('name', 'tc');
  }

  ngAfterViewInit(){
  }

}
