
// 定义
var arr1 = new Array();  //对象，类似于java中的集合,python中的列表
// 数组长度
var arr2 = new Array(5);
// 数组元素
var arr3 = new Array(1, 1.2, true, 'sxt', new Date());

// alert(arr3);
// document.write(arr3);
// console.log(arr3);
 
// var arr4 = [];
// var arr5 = [2,3.2,'BIT'];

function func1(){
    var arr=[];
    arr[0] = 1;
    arr[1] ='Beijing';
    arr[4] = new Date();    //下标可以不连续，中间没有值会补充empty x 2（具体看浏览器） ， 跨空
    console.log(arr);
}
// func1();

function func2(){
    var arr=[1,1.2,'beijing',true];
    console.log(arr);
    arr.length=8;
    console.log(arr);
    arr.length=2;   //数据丢失
    console.log(arr);
    arr.length=6;
    console.log(arr);
}
// func2();

/**数组遍历 */
function func3(){
    var arr = [1,2.1,true, 'beijing'];
    // for(var i=0; i<arr.length; i++){
    //     console.log(arr[i]);
    // }
    // 这里 i 仍然代表下标，而不是元素
    for( var i in arr){
        console.log(arr[i]);
    }  
}
// func3();

/**数组中的方法 */
/**length, shift, pop, push, join, reverse, */
/***https://www.w3school.com.cn/jsref/jsref_obj_array.asp */
function func4(){
    var arr=[1,1.2,'beijing',true];
    var date = new Date();
    console.log(date.toLocaleDateString());
}
