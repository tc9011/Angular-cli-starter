import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

import { StorageService } from '../storage/storage.service';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector,
              private storageService: StorageService) {
  }

  get msg(): NzMessageService {
    return this.injector.get(NzMessageService);
  }

  private goTo(url: string): void {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  private handleData(
    event: HttpResponse<any> | HttpErrorResponse,
  ): Observable<any> {
    this.injector.get(LoadingService).end();
    console.log(event);
    // 业务处理：一些通用操作
    switch (event.status) {
      case 200:
        // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
        // 例如响应内容：
        //  错误内容：{ status: 1, message: '非法参数' }
        //  正确内容：{ status: 0, response: {  } }
        // 则以下代码片断可直接适用
        if (event instanceof HttpResponse) {
          const body: any = event.body;
          if (!event.url.includes('api')) {
            return of(event);
          } else if (body && body.status !== 0) {
            this.msg.error(body.message);
            // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
            // this.http.get('/').subscribe() 并不会触发
            return throwError({});
          } else {
            // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
            return of(new HttpResponse(Object.assign(event, {body: body.response})));
            // 或者依然保持完整的格式
            // return of(event);
          }
        }
        break;
      case 400:   // 请求地址不存在或包含不支持参数
        if (event instanceof HttpErrorResponse) {
          this.msg.error(event.error.message);
        }
        break;
      case 401: // 未登录状态码
        if (event instanceof HttpErrorResponse) {
          this.msg.error(event.error.message);
        }
        this.goTo('/passport/login');
        break;
      case 403: // 被禁止访问
        this.goTo(`/${event.status}`);
        break;
      case 404: // 请求的资源不存在
        this.goTo(`/${event.status}`);
        break;
      case 409: // 用户已存在
        if (event instanceof HttpErrorResponse) {
          this.msg.error(event.error.message);
        }
        break;
      case 500: // 内部错误
        this.goTo(`/${event.status}`);
        break;
      default:
        if (event instanceof HttpErrorResponse) {
          console.warn(
            '未可知错误，大部分是由于后端不支持CORS或无效配置引起',
            event,
          );
          this.msg.error(event.error.message);
        }
        break;
    }
    return of(event);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<| HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>> {
    const url = req.url;
    const currentUser = JSON.parse(this.storageService.getLocalStorage('currentUser'));
    let newReq = req.clone({
      url: url,
    });
    if (currentUser && currentUser.token) {
      newReq = newReq.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(newReq).pipe(
      mergeMap((event: any) => {
        // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
        if (event instanceof HttpResponse && event.status === 200) {
          return this.handleData(event);
        }
        // 若一切都正常，则后续操作
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err)),
    );
  }
}
