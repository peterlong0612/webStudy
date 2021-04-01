
// window.onload = function(){
//     var trs = document.getElementsByClassName("tr");
//     for(var i in trs){
//         if(i%2==0){
//             trs[i].style.backgroundColor = "red";
//         }else{
//             trs[i].style.backgroundColor = "blue";
//         }
//     }
// }

// 两者相等
// window.onload = function(){}
// 但是onload一个页面只能用一次
// onload是整个页面加载完成之后再执行，而$执行更早

// 
$(function(){
    $("tr:odd").css("backgroundColor","red");
    
    $("tr:even").css("backgroundColor","lightblue");

})