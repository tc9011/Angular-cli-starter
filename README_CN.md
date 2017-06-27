# Angular-cli-starter

[English Document](https://github.com/tc9011/Angular-cli-starter/blob/master/README.md)

node版本>= 6.9.x

npm版本 >=3.10.x

***

已经引入了Angular Material、ngx-bootstrap、bootstrap、bootstrap-table、karma-firefox-launcher、fontawesome、echarts、jQuery、moment.js。

## 使用
1. `git clone https://github.com/tc9011/Angular-cli-starter.git`
2. 运行`npm i @angular/cli@latest -g`
3. 在app目录下执行`npm install `（如果遇到scss文件编译问题,运行npm install node-sass）
4. `npm start`

 如果遇到`command not found: ng`，可以按照下面方法解决：

1. 在node_modules的文件夹下找到/node_modules/@angular/cli/bin/

2. 然后在终端中pwd输出路径

3. 在root目录下找到~/bash_profile文件，用vim打开，把下面路径两个字换成刚刚得到的路径，然后写入文件中

   `alias ng="路径/ng"`

4. 在终端执行'. ~/.bash_profile'(如果再遇到command not found: ng，重新运行一下这个命令)

***
## 关于Angular/CLI

```shell
ng help		#查看所有ng命令和配置项
```

### 生成组件、指令、管道和服务

可以用 `ng generate` (或者 `ng g`) 命令来生成Angular组件:

```shell
ng generate component my-new-component
ng g component my-new-component # 使用简写

# 生成组件支持相对路径
# 如果你在 src/app/feature/ 目录下，然后运行
ng g component new-cmp
# 组件将会在 src/app/feature/new-cmp 路径下生成
# 但是如果运行
ng g component ../newer-cmp
# 组件将会在 src/app/newer-cmp 路径下生成
# 如果在 src/app 路径下，运行
ng g component feature/new-cmp
# 组件将会在 src/app/feature/new-cmp 路径下生成
```

可以用下面的方法生成组件、指令、管道和服务等:

| 支持类型                                      | 用法                                |
| ---------------------------------------- | --------------------------------- |
| [Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component` |
| [Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive` |
| [Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe) | `ng g pipe my-new-pipe`           |
| [Service](https://github.com/angular/angular-cli/wiki/generate-service) | `ng g service my-new-service`     |
| [Class](https://github.com/angular/angular-cli/wiki/generate-class) | `ng g class my-new-class`         |
| [Guard](https://github.com/angular/angular-cli/wiki/generate-guard) | `ng g guard my-new-guard`         |
| [Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface` |
| [Enum](https://github.com/angular/angular-cli/wiki/generate-enum) | `ng g enum my-new-enum`           |
| [Module](https://github.com/angular/angular-cli/wiki/generate-module) | `ng g module my-module`           |

angular-cli将在`app.module.ts`中自动添加对组件，指令和管道的引用。 如果需要将此引用添加到另一个自定义模块，请按照以下步骤操作:

1. `ng g module new-module` 创建一个新模块
2. 运行 `ng g component new-module/new-component`

这会为创建的新模块添加新的组件，指令或管道的引用。

### ng 命令

- [ng new](https://github.com/angular/angular-cli/wiki/new)
- [ng serve](https://github.com/angular/angular-cli/wiki/serve)
- [ng generate](https://github.com/angular/angular-cli/wiki/generate)
- [ng lint](https://github.com/angular/angular-cli/wiki/lint)
- [ng test](https://github.com/angular/angular-cli/wiki/test)
- [ng e2e](https://github.com/angular/angular-cli/wiki/e2e)
- [ng build](https://github.com/angular/angular-cli/wiki/build)
- [ng get/ng set](https://github.com/angular/angular-cli/wiki/config)
- [ng doc](https://github.com/angular/angular-cli/wiki/doc)
- [ng eject](https://github.com/angular/angular-cli/wiki/eject)
- [ng xi18n](https://github.com/angular/angular-cli/wiki/xi18n)

### 本项目的配置说明

在`package.json`文件中的`start`已经配置为`ng serve --open --port 4200 --host 0.0.0.0 --disable-host-check --proxy-config proxy.conf.json --base-href /app`：

- `--open`：自动打开浏览器
- `--port`：端口号，默认4200
- `--host`：配置host地址
- `--disable-host-check`：不验证连接的客户端是否是合法的host，如果遇到`Invalid Host header, and do nothing`错误，需要加上这个参数，参考文章10
- `--proxy-config` ：用来转发当前链接到后端服务器，`proxy.conf.json`中配置和后端联调时的接口和地址，参考文章8，9

本项目在app目录下的`proxy.conf.json`中配置了proxy

```javascript
{
  "/my-API": {
    "target": "http://10.63.246.83:2017",		//后端API地址
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true
  }
}
```

- `--base-href`：是上真实环境的文件目录，会替换`index.html`中的`<base href="/">`，解决路径问题，参考文章11

***

## 关于AOT和摇树优化

进入App根目录，执行以下命令：
`npm run build `

在`package.json`中，指定运行`npm run build`时要执行的命令:

```json
"build": "ng build --prod --aot --base-href /app/"
```

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
组件列表及使用参考官网：[ngx-bootstrap组件](https://valor-software.com/ngx-bootstrap/#/) 或者 [ngx-bootstrap github](https://github.com/valor-software/ngx-bootstrap)

2. 引入Angular Material

打开`XXX.module.ts`，然后添加

```typescript
import { MdAutocompleteModule } from '@angular/material';
@NgModule({
  imports: [
    MdAutocompleteModule,
  ]
})
export class XXXModule { }
```
项目中已经在`.angular-cli.json`导入了`indigo-pink`主题颜色：

```json
"styles": [
  "../node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
],
```

`@angular/material`中可用的主题色如下：

- `deeppurple-amber.css`
- `indigo-pink.css`
- `pink-bluegrey.css`
- `purple-green.css`

组件列表及使用参考官网：[Angular Material](https://material.angular.io/)

3. 引入echarts、jQuery、moment.js

jQuery已经引入（在.angular.json和typings.d.ts中），直接可以用，其他两个插件需要在所需**组件**中import就行：

```typescript
import echarts from 'echarts';
import * as moment from 'moment';：
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
9. [Proxy To Backend](https://github.com/angular/angular-cli/wiki/stories-proxy)
10. [Invalid Host header after updating to 1.0.1](https://github.com/angular/angular-cli/issues/6070)
11. [CSS images with relative path not included in production build](https://github.com/angular/angular-cli/issues/4806)
