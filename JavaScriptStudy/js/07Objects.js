// Date
function func1(){
    var date = new Date();
    console.log(date.toLocaleDateString());
}


// Math
function func2(){
    console.log(Math.random());
    console.log(Math.ceil(2.4));
    console.log(Math.floor(2.4));
    console.log(Math.round(3.5));
    // 4位随机整数
    console.log(Math.floor(Math.random()*9000+1000));
}

// String
function func3(){
    var str = "星-期-六";
    console.log(str.substr(2)); 
    console.log(str.substr(2,3)); // 长度为3
    console.log(str.substring(2)); // 相同
    console.log(str.substring(2,3)); // startindex,endindex, 第二个参数表示结尾的下标，不包含

    // console.log(str.sub());   //<sub>星-期-六</sub>

    console.log(str.split('-'));
}
// func3();

/**Global */
// 全局函数
function func4(){
    var a = "var y='beijing'";
    alert(a);
    // eval(a);    // 把串转成可运行的JS代码
    // alert(y);
    var b = '123a';
    // alert(Number(b)); // NaN
    // alert(isNaN(b)); // true
    // alert(parseFloat(" 40 years "));

    alert(typeof String(123));
}
func4();