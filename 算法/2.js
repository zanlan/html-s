


var obj ={
    a:{
        b:{
            c:1
        },
        e:2
    },
    f:{
        g:{
            f:1
        }
    }
}
var f = (obj) => {
    if(typeof obj === 'object'){
        var cbj = {}
        var arr = Object.keys(obj)
        arr.forEach(item=>{
            if(typeof item === 'object'){
                f(item)   
            }else{
                
            }
        })
    }else{

    }
}