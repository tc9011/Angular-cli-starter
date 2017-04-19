# Angular-cli-starter

node版本 7.9.0

npm版本 4.2.0

***
已经引入了Angular Material、ngx-bootstrap、bootstrap、karma-firefox-launcher、fontawesome、echarts、jQuery、moment.js。

使用：
1. `npm install @angular/cli@latest`（或者按照参考文章1中，使用`npm link @angular/cli`，此方法未验证）

2. `npm install`

3. `ng serve --open`

***
command not found: ng的解决办法

1. 在安装node的文件夹下找到/lib/node_modules/angular-cli/bin/
2. 然后在终端中pwd输出路径，
3. 在root目录下找到~/bash_profile文件，用vim打开，把下面路径两个字换成刚刚得到的路径，然后写入文件中
`alias ng="路径/ng"`
***
关于AOT和摇树优化

打开命令行，进入NiceFish根目录，执行以下命令：
`ng build --prod --aot`
加上--prod参数之后，angular-cli会自动启用TreeShaking（摇树）特性，简而言之，就是把用不到的包全部剔除掉，就像从树上把枯叶子摇下来一样，加上--aot参数是让angular-cli启动预编译特性。
【请注意】最新版本的angular-cli已经内置了对AOT和TreeShaking的支持，只要像上面这样在build的时候加上--prod和--aot参数就可以了，不需要再做任何其它任何配置工作，官方网站上的那一篇指南有点过时了。

***
参考文章：

1. [command not found: ng的解决办法](https://github.com/angular/angular-cli/issues/503)

2. [Angular 2 升级 Angular 4](http://www.jianshu.com/p/75c19d67d7f8)

3. [如何利用angular-cli组织项目结构](https://segmentfault.com/a/1190000008623106)
4. [预 (AOT) 编译器
](https://angular.cn/docs/ts/latest/cookbook/aot-compiler.html)
5. [【重要】启用AOT+TreeShaking+Gzip大幅度压缩Angular2应用的体积 ](https://my.oschina.net/mumu/blog/830742)和[大漠穷秋Angular4完整案例](http://git.oschina.net/mumu-osc/NiceFish)
6. [anuglar-2-animate.css-example](https://github.com/CanKattwinkel/anuglar-2-animate.css-example)和[Angular 2 Animate.css Tutorial – How to use Animate.CSS in NG2 Application?](https://blog.thecodecampus.de/angular-2-animate-css-tutorial-use-animate-css-ng2-application/)
