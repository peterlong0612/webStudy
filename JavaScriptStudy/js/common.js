/**
 * @author  PeterLong
 * @description 一些通用函数方法
 * @returns 
 */





/**JS实现随机颜色的3种方法与颜色格式的转化:https://www.jb51.net/article/102109.htm */
function randomHexColor() { //随机生成十六进制颜色
    // return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
    return '#' + ('00000' + ( ( Math.random() * 0x700000 + 0x900000 ) << 0 ).toString(16)).substr(-6); //浅色
}
function btncolor(){

    var btnarr = document.getElementsByTagName('button'); // 返回btn标签数组
    for(var i = 0; i<btnarr.length ; i++){
        var cr = btnarr[i].style.backgroundColor = randomHexColor();
        console.log(cr);
    }

}
