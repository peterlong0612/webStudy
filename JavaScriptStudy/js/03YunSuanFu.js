// 大多数运算符都是通用的，但是要注意一些特殊情况
var a = 12
var b = 10

alert(a/b);  // 1.2

var c = "123";

alert(a+b+c); // 22123，左边加号为加法，右边为连接（number + string）
alert(a+c+b); // 1212310

var t = true;
alert(t+a); // 13
// 如果boolean参与算术运算(不包括比较)，自动转化为0/1，但是1/0 != boolean

var s1 = 1;     // 
var s2 = "1";
var s3 = "true";    // 转成number，为NaN，两个NaN比较没有意义，并不是相等，是错误的

// == 等值符  先比较类型，类型一致比较内容，不一致则统一转化成number，再比较内容
// === 等同符  类型、值同时相等时才为true
// js中没有java中的equals方法