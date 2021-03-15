/*********函数********** */
function myfunc1(){
    alert("函数定义一");
}
var myfunc2 = function(){
    alert("函数定义二");
};  //这里有分号

let a3=12,b3=13;  //let 没有提升，所以需要放在函数定义前面
// var myfunc3 = new Function("alert('函数定义三')");/**双引号建议加上 ,否则刷新时即使不调用也每次都会执行*/
var myfunc3 = new Function("a","b","alert('函数3： '+a+','+b)");
/**F大写，调用构造函数 ，每个参数都要双引号，最后的参数会被当做函数体  解释两次影响性能，不推荐*/

// myfunc1();
// myfunc2();
// myfunc3(a3,b3);

function myfunc4(a,b,c){
    alert(a+'--'+b+'--'+c);
}
function myfunc4(a,b){  /**覆盖之前的myfunc4 */
    alert(a+'--'+b);
    console.log("log:hello")
}
// myfunc4(1,"hello",true);    // 函数覆盖后，true被忽略
// myfunc4(2,"hello");     
// myfunc4("hello");      // hello--undefined

function myfunc5(y){
    alert(y);
}
// var p6 = ()=>{alert("hello,arrow5")};  //打印整个函数 ()=>{alert("hello,arrow5")}
var p6 = function(){
    alert("func5");
};  //

myfunc5(p6);

/**JS中的函数没有重载一说，方法名相同，即使参数数量不同，也只会覆盖旧的 
 * 形参和实参个数可以不一致
 * 函数没有书写返回值，返回为undefined    
 * 任何函数任何时候都可以return终止函数执行
 * 函数名表引用指针，带括号才会执行，func()
*/