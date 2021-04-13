   
https://www.cnblogs.com/echoyya/p/14577243.html#commonjs%E8%A7%84%E8%8C%83%EF%BC%88%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E6%A8%A1%E5%9D%97%EF%BC%89
#  commonjs
    同步加载方式，适用于服务端，因为模块都放在服务器端，对于服务端来说模块加载较快，不适合在浏览器环境中使用，因为同步意味着阻塞加载。
    所有代码都运行在模块作用域，不会污染全局作用域。
    模块可以多次加载，但只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。
    模块加载的顺序，按照其在代码中出现的顺序。

   npm install -g browserify
   browserify ./main.js -o ./dist/index.js
   在index.html内 引入打包后的js
   **Browserify **，也称为Commonjs的浏览器的打包工具

   Node.js 为每个模块提供一个 exports 变量，指向 module.exports。相对于在每个模块头部，有一行这样的命令：var exports = module.exports;
    exports对象 和 module.exports对象，指同一个内存空间， module.exports对象才是真正的暴露对象
    而exports对象 是 module.exports对象的引用，不能改变指向，只能添加属性和方法，若直接改变exports 的指向，等于切断了 exports 与 module.exports 的联系，返回空对象
    console.log(module.exports === exports); // true

   也可以 nodemon main.js
   
   # AMD 与 CMD 的区别
   amd asynchronous module definition
   cmd common module definition
   AMD 是提前执行，CMD 是延迟执行。
   AMD 是依赖前置，CMD 是依赖就近。 
   // AMD 
    define(['./a', './b'], function(a, b) {  // 在定义模块时 就要声明其依赖的模块
        a.doSomething()
        // ....
        b.doSomething()
        // ....
    })

   // CMD
    define(function(require, exports, module) {
        var a = require('./a')
        a.doSomething()
        // ... 
        
        var b = require('./b') // 可以在用到某个模块时 再去require
        b.doSomething()
        // ... 
    })

   # UMD（Universal Module Definition）

   amd + commonjs

   UMD的实现很简单：
    先判断是否支持Node.js模块（exports是否存在），存在则使用Node.js模块模式。
    再判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。
    前两个都不存在，则将模块公开到全局（window或global）
    (function (window, factory) {
        if (typeof exports === 'object') {
                module.exports = factory();
        } else if (typeof define === 'function' && define.amd) {
            define([],factory);
        } else {
            window.eventUtil = factory();
        }
    })(this, function () {
        return {};
    })
#   es6模块化
    ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。
    ES6 中，import引用模块，使用export导出模块。
    默认情况下，Node.js默认是不支持import语法的，通过babel项目将 ES6 模块 编译为 ES5 的 CommonJS。
    因此Babel实际上是将import/export翻译成Node.js支持的require/exports。

    安装必要包，babel，及browserify
    npm install babel-cli -g
    npm install babel-preset-es2015 --save-dev
    npm install browserify -g
    创建.babelrc文件，并设置编译格式为es2015
    自定义一个模块，导出数据，并在主模块中加载执行
    babel ./src -d ./build 命令将import编译为require
    browserify ./build/main.js -o ./dist/main.js 编译为浏览器识别语法，最终引入index.html文件中



    