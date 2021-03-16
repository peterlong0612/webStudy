/**
 * DOM  Document Object Model
 * 顶层是document对象
 */

/** 直接获得元素对象 */
function func1(){
    // 因为id是唯一的，所以这里element没有s
    var a = document.getElementById('p1');  
    console.log(a);
}

function func2(){
    var ps = document.getElementsByTagName("p"); // 数组
    console.log(ps);
}

function func3(){
    var pc = document.getElementsByClassName("pc"); // 数组
    console.log(pc);
}

function func3(){
    // name属性不是所有标签都有， 所以不推荐
    var pn = document.getElementsByName("pn"); // 数组
    console.log(pn);
}

/** 间接获得元素对象 */

function getChildren(){
    var di = document.getElementById("div1");
    // 会获得多余的text（空格、换行等）      文本节点
    var si = di.childNodes; // 子节点可能有多个，所以是nodes
    console.log(si);
}

function getParent(){
    var si = document.getElementById("s2");
    var di = si.parentNode; // 父节点只有一个，所以是node
    console.log(di);
}

function getBros(){
    var si = document.getElementById("s2");
    // 下一个节点
    // var bro = si.nextSibling;; // #text
    // 下一个元素节点
    // var bro = si.nextElementSibling; //<span>s3</span>

    // 上一个节点
    // var bro = si.previousSibling;   // #text
    // 上一个元素节点
    // var bro = si.previousElementSibling; //  <span>s1</span>
    console.log(bro);
}

// 操作节点属性
function oprateAb(){
    // 获取元素节点
    var t = document.getElementById("ipt1");
    console.log('id:'+t.id + ',type:' + t.type+',value:'+ t.value +',alt:'+ t.alt);
    // 改变节点属性
    t.value = 'I changed.';
    t.type = 'button';

}

// 双标签才存在中间的文本内容，单标签都是value值
// 特例：select（option的value）  textarea  都是双标签，但是使用value

// 操作节点中的文本（节点）
function oprateText(){
    // 获取元素节点
    var t = document.getElementById("div3");
    console.log('id:'+t.id);
    // 查看文本
    // console.log(t.innerText); //人到中年不由己，保温杯里泡枸杞 哈哈哈
    // console.log(t.innerHTML); //<span id="sp3">人到中年不由己，保温杯里泡枸杞</span>
                              //<span>哈哈哈</span>
    // 操作文本内容 i 斜体
    // 原封不动的纯文本直接输出，不识别代码
    // t.innerText = "<i>你说得对</i>"; //<i>你说得对</i>
    // 识别代码
    t.innerHTML = "<i>你说得对</i>"; //你说得对（手动斜体）

}

// 操作CSS样式
// "只有行内式才可以，也就是写在标签里面的style中"是在获得的时候
// 而修改的时候，内链是可以的，链接也可以
function opCSS(){
    var t = document.getElementById("div4");
    //新版Chrome中 -color X , Color  √
    // t.style.backgroundColor = "#0094ff";
    // t.style.width = '80px';
    // t.style.height = "80px";

    // console.log(t.style.borderRadius); 
    // console.log("width:"+t.style.width.toString());  // 链接式获取不到
    t.className = "yy"; // 没用？因为id优先级更高，类中只有没被覆盖的才会生效
    
}
// 操作元素节点
function addElemNode(){
    // 创建一个p
    var p = document.createElement("p");
    p.innerText = "照片：";
    p,innerHTML = "照片：<input type="+'file'+" name="" id="" value=""><button onclick="+'addElemNode()'+">添加</button> "


    // 创建一个input
    var i = document.createElement("input");
    i.type = "file";

    // 创建一个button
    var b = document.createElement("button");
    b.innerText = "删除";
    // 给指定节点绑定事件
    b.onclick = function(){
        if(window.confirm("确定删除该节点？"))
            p.remove(); // 直接移除
    }

    // 指定标签之间三者的关系
    p.appendChild(i);
    p.appendChild(b);

    // p.removeChild(b);
    // p.removeChild(i);

    // 把p追加到现有元素最后
    // document.body.appendChild(p); // 这样是加在最后
    var pl = document.getElementById("last_p");
    // 把p放到元素之前
    document.body.insertBefore(p,pl);
    // document.body.removeChild(p);

}



function SayYesPls(){
    var d = document.getElementById("div5");
    // win10推荐自带125%缩放
    d.style.marginLeft = Math.random() * (1920/1.25-300) +"px";
    d.style.marginTop = Math.random() * (1080/1.25-200)  +"px";
    console.log(d.style.marginLeft,d.style.marginTop)
}
function Bye(){
    alert("See you next time!");
    window.close();
}