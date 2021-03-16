function func1(x){
    console.log(x);
}

for (var a = 0; a < 200; a++) {
        // setTimeout(() => console.log(a), 1000); // 200个200
        setTimeout( 'func1(a)', 1000); //0-199

        setTimeout(func1(a), 1000); // 200个200
}

var foo = {n:1};
(function(foo){            //形参foo同实参foo一样指向同一片内存空间，这个空间里的n的值为1
    var foo;               //优先级低于形参，无效。
    console.log(foo.n);    //输出1
    foo.n = 3;             //形参与实参foo指向的内存空间里的n的值被改为3
    foo = {n:2};           //形参foo指向了新的内存空间，里面n的值为2.
    console.log(foo.n);    //输出新的内存空间的n的值
})(foo);
console.log(foo.n);        //实参foo的指向还是原来的内存空间，里面的n的值为3.
// 1 2 3