https://www.lodashjs.com

# 数学
_.random([lower=0], [upper=1], [floating:Boolean])

_.ceil(1632.2135323, [+-2])   floor   round

add加 subtract减  multiply乘 divide除 sum和 max  min  mean平均值

maxBy minBy  meanBy  sumBy
_.sumBy(objects, function(o) { return o.n; }) <==>  _.sumBy(objects, 'n')

# 语言
castArray clone  cloneDeep  eq gt gte lt lte  isArguments  isArray isArrayBuffer isArrayLike('abc') 
isArrayLikeObject('abc') isBoolean  isBuffer isDate isElement isEmpty  isError isFinite isFunction
isInteger isLength isNaN isNative  isMap isSet isWeakMap isWeakSet isUndefined[检测undefined]
isNil[检测undefined/null]  isNull[检测null] isNumber[检测数字] isObject[检测对象-除开null] isPlainObject[检测普通对象]
isRegExp[检测正则]  isSafeInteger  isString isSymbol isTypedArray 
toArray toFinite toInteger toLength toNumber

isMatch({ 'a': 1, 'b': 2 }, { 'b': 2 })
isMatchWith({'b': 2}, {'b': 1}, (item1,item2)=>{<!-- item1为2 item2为1 -->})

isEqual({}, {})
_.isEqualWith([], [], (item1,item2)=>{return true}) <!-- 参数为  1、数组是每一项   2、对象就是自己 -->
conformsTo({ 'b': 2 }, { b(n) { return n > 1 } })
