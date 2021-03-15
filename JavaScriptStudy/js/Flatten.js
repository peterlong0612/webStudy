// flatten() 多维数组扁平化

var arr0 = [[1,2],3,[4,[5]]]; 

/** 1 循环递归 */
function flatten1(arr){
    var result=[];
    for(var i = 0, len = arr.length; i<len; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatten1(arr[i])); //concat方法用于连接两个或多个数组
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}

/** 2 利用apply */
// 原理
// var a = [1,[2,3,[4]]];
// var temp = [].concat.apply([],a);
// alert(temp);    // 1,2,3,4
// console.log(temp); // [1,2,3,[4]] 
// console.log(typeof temp); // object

// some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
// some() 方法会依次执行数组的每个元素：
// 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
// 如果没有满足条件的元素，则返回false。
// 注意： some() 不会对空数组进行检测。
// 注意： some() 不会改变原始数组。
function flatten2(arr){
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat.apply([],arr)
        // console.log(arr);
    }    
    return arr;
}
// console.log(flatten2(arr0));
/** 3 reduce()方法    对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值*/
var arr = [1, [2, 3, [4]]];
var flattened = arr.reduce(function(prev, cur){
    return prev.concat(cur)
},[])
// console.log(flattened); // [1,2,3,[4]]
function flatten3(arr){
    return arr.reduce(function(prev, cur){
        return prev.concat(Array.isArray(cur)?flatten3(cur):cur)
    },[]);
}
// console.log(flatten3(arr0));

/** 4 ES6 展开运算符 */
var arr = [1,[2, 3, [4]]];
// console.log(...arr); // 1,[2, 3, [4]]

function flatten4(arr){
    // 这里的箭头函数不能加花括号
    while(arr.some(item => /*{*/ Array.isArray(item) /*}*/ )){
        arr = [].concat(...arr)
    };
    return arr;
}
console.log(flatten4(arr));//

/** 5 toString方法  仅适用于数组元素为数字 */
function flatten5(){
    // console.log(arr.toString()); // "1,2,3,4"
    return arr.toString().split(',').map(function(item){
        return parseInt(item);
    })
}
console.log(flatten5());
