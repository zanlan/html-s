
export function foo(){
    console.log('执行 foo 函数')
}
export function bar(){
    console.log('执行 bar 函数')
}

export default ()=>{
    console.log('通过默认暴露的箭头函数')
}