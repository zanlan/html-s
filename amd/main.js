(function () {
    require.config({
        // baseUrl:'',    
        paths: {
            dataService: './dataService',
            math: './math'
        }
    })
    require(['dataService', 'math'], function (dataService, math) {
        console.log(dataService)
        console.log(math)
    });
})();