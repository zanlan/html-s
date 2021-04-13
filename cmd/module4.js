define(function(require,exports,module){
    let module2 = require('./module2')
    console.log(module2)
    require.async('./module3',function(module3){
        module3.three()
    })
    function four(){
        console.log('这是module 4');
    }
    exports.module4 = {four}
})