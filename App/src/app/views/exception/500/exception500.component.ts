import { Component, OnInit } from '@angular/core';

import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-exception500',
  templateUrl: './exception500.component.html',
  styleUrls: ['./exception500.component.scss']
})
export class Exception500Component implements OnInit {

  constructor(modalSrv: NzModalService) {
    modalSrv.closeAll();
  }

  ngOnInit() {
  }

}
