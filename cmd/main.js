define(function (require, exports, module) {
    let module1 = require('./module1')
    let module4 = require('./module4')//加载module4时候，内部也会操作模块
    console.log(module1)
    console.log(module4)
})