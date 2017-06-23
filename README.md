# Angular-cli-starter

node版本>= 6.9.x

npm版本 >=3.10.x

***

已经引入了Angular Material、ngx-bootstrap、bootstrap、bootstrap-table、karma-firefox-launcher、fontawesome、echarts、jQuery、moment.js。

### 使用
1. 运行`npm i @angular/cli@latest -g`

2. 在app目录下执行`npm install `

3. `npm start`

注：
 如果遇到`command not found: ng`，可以按照下面方法解决：

1. 在node_modules的文件夹下找到/node_modules/@angular/cli/bin/

2. 然后在终端中pwd输出路径

3. 在root目录下找到~/bash_profile文件，用vim打开，把下面路径两个字换成刚刚得到的路径，然后写入文件中

   `alias ng="路径/ng"`

4. 在终端执行'. ~/.bash_profile'(如果再遇到command not found: ng，重新运行一下这个命令)

***
### 关于AOT和摇树优化

打开命令行，进入App根目录，执行以下命令：
`ng build --prod --aot`

加上--prod参数之后，angular-cli会自动启用TreeShaking（摇树）特性，简而言之，就是把用不到的包全部剔除掉，就像从树上把枯叶子摇下来一样，加上--aot参数是让angular-cli启动预编译特性。

【请注意】最新版本的angular-cli已经内置了对AOT和TreeShaking的支持，只要像上面这样在build的时候加上--prod和--aot参数就可以了，不需要再做任何其它任何配置工作，官方网站上的那一篇指南有点过时了。

***

### 引入包
1. 引入ngx-bootstrap

在所要引入的模块的module文件中import就行：
```typescript
import { AlertModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    AlertModule.forRoot(),
  ]
})
export class XXXModule { }
```
组件列表及使用参考官网：[ngx-bootstrap组件](https://valor-software.com/ngx-bootstrap/#/)

2. 引入Angular Material
   可以在`.angular-cli.json`的`styles`中修改Material主题颜色，暂时导入了`"../node_modules/@angular/material/prebuilt-themes/indigo-pink.css"`这个主题色，该目录下面还提供了其他主题色。

```typescript
import { MdAutocompleteModule } from '@angular/material';
@NgModule({
  imports: [
    MdAutocompleteModule,
  ]
})
export class XXXModule { }
```
组件列表及使用参考官网：[Angular Material](https://material.angular.io/)

3. 引入echarts、jQuery、moment.js
   jQuery已经引入（.angular.json和typings.d.ts），直接可以用，其他两个插件需要在所需**组件**中import就行：
```typescript
import echarts from 'echarts';
import * as moment from 'moment';
```
***

### 注意事项

在`package.json`文件中的`start`已经配置为`ng serve --open --port 4200 --host 0.0.0.0 --disable-host-check --proxy-config proxy.conf.json --base-href /app`：

* `--open`：自动打开浏览器
* `--port`：端口号
* `--host`：一般项目在虚机类，需要通过外部浏览器访问时配置，地址是小网地址
* `--disable-host-check`：一般项目在虚机类，需要通过外部浏览器访问时配置，参考文章9
* `--proxy-config` ：是指定和后端联调时的接口及地址文件，`proxy.conf.json`中配置联调接口和地址，参考文章8
* `--base-href`：是上真实环境的文件目录，会替换`index.html`中的`<base href="/">`，解决路径问题，参考文章10

如果遇到sass文件错误，可以执行下面命令：

```shell
npm install node-sass
```

***
### 参考文章：

1. [command not found: ng的解决办法](https://github.com/angular/angular-cli/issues/503)
2. [Angular 2 升级 Angular 4](http://www.jianshu.com/p/75c19d67d7f8)
3. [如何利用angular-cli组织项目结构](https://segmentfault.com/a/1190000008623106)
4. [预 (AOT) 编译器](https://angular.cn/docs/ts/latest/cookbook/aot-compiler.html)
5. [【重要】启用AOT+TreeShaking+Gzip大幅度压缩Angular2应用的体积 ](https://my.oschina.net/mumu/blog/830742)和[大漠穷秋Angular4完整案例](http://git.oschina.net/mumu-osc/NiceFish)
6. [anuglar-2-animate.css-example](https://github.com/CanKattwinkel/anuglar-2-animate.css-example)和[Angular 2 Animate.css Tutorial – How to use Animate.CSS in NG2 Application?](https://blog.thecodecampus.de/angular-2-animate-css-tutorial-use-animate-css-ng2-application/)
7. [Sass官网](http://www.sass.hk/)和[Sass入门](http://tc9011.com/2017/04/08/Sass%E5%85%A5%E9%97%A8/)
8. [ng serve: support for proxy urls](https://github.com/angular/angular-cli/issues/889)
9. [Invalid Host header after updating to 1.0.1](https://github.com/angular/angular-cli/issues/6070)
10. [CSS images with relative path not included in production build](https://github.com/angular/angular-cli/issues/4806)
