import { Component,AfterViewInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{

  constructor(public translate: TranslateService){
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('zh');
    translate.use('zh');
  }

  ngAfterViewInit(){
  }

}
