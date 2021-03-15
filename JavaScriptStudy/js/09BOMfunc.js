/**
 *  BOM Browser Object Model
 */


/**   window对象  */

var age=21;
var sayAge = ()=>{alert(this.age)};     // 全局作用域

/**window对象的弹框 */
function demo1(){
    // window小写    window可省略
    window.alert("今天周六"); 
    // 有确定和取消 ,分别返回true、false, 用例：网站输入内容删除
    var flag = window.confirm("确定选择吗");   

    // 包含输入框，输入后出现确认取消，第二个参数是默认出现在输入框中的，返回值为输入的串
    var m = window.prompt("请输入昵称", "例如：李白"); 
}

/**window中的定时器 */
function func2(){

    var date = new Date();

    // 获得当前的时间
    var time = date.toLocaleString();

    // 输出到浏览器中
    // document.write(); // 直接打印到DOM中

    document.getElementById("sp").innerHTML = time;
    // setTimeout(() => {
        
    // }, timeout);

}
// 多次
var ti = window.setInterval("func2()",1000); // 每隔1000ms调用
// 一次 返回值实际上是一个计时器id
// var tt = window.setTimeout("func2()",1000); // 1000ms后调用一次
// 如果推迟执行的是函数，则可以直接将函数名，放入setTimeout。
// 一方面eval函数有安全顾虑，另一方面为了便于JavaScript引擎优化代码，
// setTimeout方法一般总是采用函数名的形式
/**
 * setTimeout和setInterval的运行机制是，将指定的代码移出本次执行，等到下一轮Event Loop时，
 * 再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就等到再下一轮Event Loop时
 * 重新判断。这意味着，setTimeout指定的代码，必须等到本次执行的所有代码都执行完，才会执行。
 * 
 * 每一轮Event Loop时，都会将“任务队列”中需要执行的任务，一次执行完。
 * setTimeout和setInterval都是把任务添加到“任务队列”的尾部。因此，
 * 它们实际上要等到当前脚本的所有同步任务执行完，然后再等到本次Event Loop
 * 的“任务队列”的所有任务执行完，才会开始执行。由于前面的任务到底需要多少时间执行完，
 * 是不确定的，所以没有办法保证，
 * 
 * setTimeout(someTask,100); 
 * veryLongTask();
 * 上面代码的setTimeout，指定100毫秒以后运行一个任务。
 * 但是，如果后面立即运行的任务（当前脚本的同步任务））非常耗时，
 * 过了100毫秒还无法结束，那么被推迟运行的someTask就只有等着，
 * 等到前面的veryLongTask运行结束，才轮到它执行
 * 
 * setTimeout(f,0)必须要等到当前脚本的所有同步任务结束后才会执行。
 * 0毫秒实际上达不到的。根据HTML5标准，setTimeOut推迟执行的时间，最少是4毫秒。
 * 如果小于这个值，会被自动增加到4。这是为了防止多个setTimeout(f,0)语句连续执行，造成性能问题。

 * 另一方面，浏览器内部使用32位带符号的整数，来储存推迟执行的时间。
 * 这意味着setTimeout最多只能推迟执行2147483647毫秒 （24.8天），
 * 超过这个时间会发生溢出，导致回调函数将在当前任务队列结束后立即执行，
 * 即等同于setTimeout(f,0)的效果。
 */
function timeQuque(){
    setTimeout(
        function() {
            console.log("Timeout"); 
        }, 0);

    function a(x) { 
        console.log("a() 开始运行"); 
        b(x); 
        console.log("a() 结束运行"); 
    } 
    function b(y) { 
        console.log("b() 开始运行"); 
        console.log("传入的值为" + y); 
        console.log("b() 结束运行"); 
    } 
    console.log("当前任务开始"); 
    a(42); 
    console.log("当前任务结束"); 
    // 当前任务开始 
    // a() 开始运行 
    // b() 开始运行 
    // 传入的值为42 
    // b() 结束运行 
    // a() 结束运行 
    // 当前任务结束 
    // Timeout
}


function stopTime(){
    // 清除定时器
    window.clearInterval(ti);
    // window.clearTimeout(tt);
}
// 用例：打地鼠游戏

// 输出是什么？
// for (var a = 0; a < 200; a++) {
//     setTimeout(() => console.log(a), 1000);
// }

/** window 中的open(), close() */
function func3(){
    // 关闭浏览器窗口
    // 区分浏览器
    // window.close();
    // 另起一个窗口打开指定页面
    window.open("https://www.baidu.com");
}

/** window.location */
function func4(){
    // 主机:端口号
    console.log(window.location.host);
    // 主机 127.0.0.1
    console.log(window.location.hostname);
    // 端口号 8020
    console.log(window.location.port);
    // 协议 http:
    console.log(window.location.protocol);
    // 地址
    console.log(window.location.href);
    
    // √重点
    // 替换当前URL地址
    // window.location.href = "https://www.baidu.com"; // 当前页面替换
    
    // window.open("https://www.baidu.com"); // 另起新标签页打开
    // 
    // window.location.reload(); // 刷新, 重新加载页面

}

/** window.history */
function func5(){
    // 属性
    console.log(window.history.length);

    // 方法
    // 正负整数  0代表刷新
    window.history.go(0);
}
// url历史记录中的前一个
function goBack(){
    window.history.back();
}
// url历史记录中的后一个
function goForward(){
    window.history.forward();
}




/**  window.screen */
function func6(){
    var sw = window.screen.width; // 返回显示屏幕宽度
    var sh = window.screen.height; // 返回显示屏幕高度
    console.log('宽度： '+sw+ ' , 高度：' +sh);
    // 除任务栏之外的宽高
    // screen.availWidth
    // screen.availHeight
}

/** window.navigator */
function func7(){
    console.log(window.navigator.userAgent);
}