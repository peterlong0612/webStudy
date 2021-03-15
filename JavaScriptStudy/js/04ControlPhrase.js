// if(a)，当a为 0(数字0，'0'为true) 
//             false  
//             null  
//             undefined 
//             NaN
//             时,条件不成立

for(var i = 1 ; i<=9 ; i++){
    var uu=10;
    // let yy=12;
    for(var j = 1 ; j<=i ; j++){
        document.write(i+'x'+j+'='+i*j + '&nbsp&nbsp&nbsp');
    }
    document.write('</br>');
}

alert(uu); // var函数作用域 let块作用域
alert(yy);  