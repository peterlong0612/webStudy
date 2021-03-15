// 不区分单双引号
// 声明全用var
// 类型：数字number、字符串string、布尔Boolean、object


var a = 1;
var b = true;
var a = "hello!";   /*覆盖*/
var d = new Date();
alert(typeof a);
alert(typeof d);    /*object*/
alert("<\/script>");

var uu;  // 只声明不赋值初始化，类型为：undefined未定义的

// var ss = "123";
var ss = "123a";    // 类型输出为number，但是输出内容为NaN
alert(typeof Number(ss));
alert(Number(ss));

// 空对象 数据类型为object
var nu = null;  
alert(typeof nu)

// 不像强类型语言java，js是弱类型的，没有那些异常
