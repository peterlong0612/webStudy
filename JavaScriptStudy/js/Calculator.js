var inp = document.getElementById("result");
function getCh(th){
    // th即为this的对象
    var ss = th.innerText;
    if(ss == "C"){
        //清除
        inp.value = "";
    }else if(ss == "="){
        //计算  eval
        inp.value = eval(inp.value);
    }else{
        // 输入累积到屏幕
        inp.value += ss;
    }
    console.log(inp.value);
}