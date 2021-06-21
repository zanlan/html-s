


var str = 'abccabcceaaaaa'
var arr = str.split('')
var obj ={}
arr.forEach(item=>{
    if(!obj[item]){
        obj[item] = 1
    }else{
        obj[item]+=1
    }
})
console.log(obj)
let maxvalue = 0
for(var item in obj){
    if(maxvalue < obj[item]){
        maxvalue = obj[item]
    }
}

console.log(maxvalue)
