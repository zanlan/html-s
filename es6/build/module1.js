'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo = foo;
exports.bar = bar;
function foo() {
    console.log('执行 foo 函数');
}
function bar() {
    console.log('执行 bar 函数');
}

exports.default = function () {
    console.log('通过默认暴露的箭头函数');
};