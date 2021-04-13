define(['math'], function (math) {
    function doSomething() {
        let result = math.add(2, 9);
        console.log(result);
    }
    return {
        doSomething
    };
});