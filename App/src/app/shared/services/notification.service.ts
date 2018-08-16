import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface NotificationEntity {
  act: number | string;
  data: any;
}

@Injectable()
export class NotificationService {
  private notificationSource: Subject<any>;
  private notification: Observable<any>;

  constructor() {
    this.initNotification();
  }

  /**
   * 初始化主题和观察者
   */
  public initNotification(): void {
    if (!this.notificationSource) {
      this.notificationSource = new Subject();
      this.notification = this.notificationSource.asObservable();
    }
  }

  /**
   * 获取观察者
   * @returns {Observable<any>}
   */
  public getNotification(): Observable<any> {
    return this.notification;
  }

  /**
   * 发布消息
   * @param message
   */
  public publish(message: NotificationEntity): void {
    if (typeof this.notificationSource !== 'undefined') {
      this.notificationSource.next(message);
    }
  }

  public clearMessage() {
    this.notificationSource.next();
  }

}
