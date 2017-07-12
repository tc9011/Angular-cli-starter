# Angular-cli-starter

[![Build Status](https://travis-ci.org/tc9011/Angular-cli-starter.svg?branch=master)](https://travis-ci.org/tc9011/Angular-cli-starter)



查看中文文档：[Angular-cli-starter](https://github.com/tc9011/Angular-cli-starter/blob/master/README_CN.md)

node version >= 6.9.X

npm  version >=3.10.X

***

The following components and libraries have been imported  in this project:

```html
Angular Material、ngx-bootstrap、bootstrap、bootstrap-table、karma-firefox-launcher、fontawesome、echarts、jQuery、moment.js  
```

## How to use

1. `git clone https://github.com/tc9011/Angular-cli-starter.git`
2. run`npm install @angular/cli@latest -g`
3. run`npm install `(If you encounter `scss` file compilation problem,run `npm install node-sass `)
4. run`npm start`
5. go to [http://0.0.0.0:4200](http://0.0.0.0:4200/) or [http://localhost:4200](http://localhost:4200/) in your browser

if you  encounter `command not found: ng` problem：

1. find file ng in path `/node_modules/@angular/cli/bin/`

2. find `~/bash_profile` file in the root directory，and add the following  command in the file(you can use  the command `pwd` to get the path).

   `alias ng="your_path/ng"`

3. run`. ~/.bash_profile` in terminal(if you  encounter `command not found: ng` problem again，just run this command)

***

## About Anuglar/CLI

```shell
ng help		#View all commands and configurations
```

### Generating Components, Directives, Pipes and Services

You can use the `ng generate` (or just `ng g`) command to generate Angular components:

```shell
ng generate component my-new-component
ng g component my-new-component # using the alias

# components support relative path generation
# if in the directory src/app/feature/ and you run
ng g component new-cmp
# your component will be generated in src/app/feature/new-cmp
# but if you were to run
ng g component ../newer-cmp
# your component will be generated in src/app/newer-cmp
# if in the directory src/app you can also run
ng g component feature/new-cmp
# and your component will be generated in src/app/feature/new-cmp
```

You can find all possible blueprints in the table below:

| Scaffold                                 | Usage                             |
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

angular-cli will add reference to `components`, `directives` and `pipes` automatically in the `app.module.ts`. If you need to add this references to another custom module, follow this steps:

1. `ng g module new-module` to create a new module
2. call `ng g component new-module/new-component`

This should add the new `component`, `directive` or `pipe` reference to the `new-module` you've created.

### Additional Commands

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

### In this project

In `package.json` file, my configuration is as follows:

```shell
"start": "ng serve --open --port 4200 --host 0.0.0.0 --disable-host-check --proxy-config proxy.conf.json --base-href /app",
```

- `--open`：Opens the url in default browser.
- `--port`：Port to listen to for serving,default value: 4200.
- `--host`：Listens only on localhost by default,default value: localhost.
- `--disable-host-check`：Don't verify connected clients are part of allowed hosts, if you You have encountered this error ` Invalid Host header, and do nothing`, this parameter may be required. you can find reference article 10 for details.
- `--proxy-config` ：Highjack certain urls and send them to a backend server, you can find reference article 8 and 9 for details.

In this project, I added a `proxy.conf.json` in the root of frontend application:

```json
{
  "/my-API": {
    "target": "http://10.63.246.83:2017",		//backend API address
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true
  }
}
```

- `--base-href`：Base url for the application being built, you can find reference article 11 for details.

***
## About AOT and TreeShaking

Just run：
`npm run build`

In `package.json`, I specified the command to be executed when running `npm run build`.

```shell
"build": "ng build --prod --aot --base-href /app/"
```

With the `--prod` parameter, the angular/cli will automatically enable the TreeShaking feature, in short, to remove all the packages that are not used, just as the leaves are shaken from the tree. The `-aot` parameter is to let the angular/cli use aot feature.

***

## How to use imported components and libraries
1. ngx-bootstrap

open `XXX.module.ts` and add：

```typescript
import { AlertModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    AlertModule.forRoot(),
  ]
})
export class XXXModule { }
```
List of components and the official website：[ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/) or [ngx-bootstrap github](https://github.com/valor-software/ngx-bootstrap)

2. Angular Material

open `XXX.module.ts` and add:

```typescript
import { MdAutocompleteModule } from '@angular/material';
@NgModule({
  imports: [
    MdAutocompleteModule,
  ]
})
export class XXXModule { }
```
This project has imported pre-built themes in `.angular-cli.json`.

```json
"styles": [
  "../node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
],
```

Available pre-built themes in `@angular/material`:

- `deeppurple-amber.css`
- `indigo-pink.css`
- `pink-bluegrey.css`
- `purple-green.css`

List of components and the official website：[Angular Material](https://material.angular.io/)

3. echarts、jQuery、moment.js

JQuery has been imported (in `.angular.json` and `typings.d.ts`), can be used directly.

echarts and moment.js need to import in the required components :

```typescript
import echarts from 'echarts';
import * as moment from 'moment';					
```
***
## Reference Article

1. [command not found: ng](https://github.com/angular/angular-cli/issues/503)
2. [update Angular 2 to Angular 4](http://www.jianshu.com/p/75c19d67d7f8)
3. [如何利用angular-cli组织项目结构](https://segmentfault.com/a/1190000008623106)
4. [预 (AOT) 编译器](https://angular.cn/docs/ts/latest/cookbook/aot-compiler.html)
5. [【重要】启用AOT+TreeShaking+Gzip大幅度压缩Angular2应用的体积 ](https://my.oschina.net/mumu/blog/830742)和[大漠穷秋Angular4完整案例](http://git.oschina.net/mumu-osc/NiceFish)
6. [anuglar-2-animate.css-example](https://github.com/CanKattwinkel/anuglar-2-animate.css-example)和[Angular 2 Animate.css Tutorial – How to use Animate.CSS in NG2 Application?](https://blog.thecodecampus.de/angular-2-animate-css-tutorial-use-animate-css-ng2-application/)
7. [Sass官网](http://www.sass.hk/)和[Sass入门](http://tc9011.com/2017/04/08/Sass%E5%85%A5%E9%97%A8/)
8. [ng serve: support for proxy urls](https://github.com/angular/angular-cli/issues/889)
9. [Proxy To Backend](https://github.com/angular/angular-cli/wiki/stories-proxy)
10. [Invalid Host header after updating to 1.0.1](https://github.com/angular/angular-cli/issues/6070)
11. [CSS images with relative path not included in production build](https://github.com/angular/angular-cli/issues/4806)
