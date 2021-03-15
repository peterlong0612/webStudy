function func1(x){
    console.log(x);
}

for (var a = 0; a < 200; a++) {
        // setTimeout(() => console.log(a), 1000); // 200个200
        setTimeout( 'func1(a)', 1000); //0-199

        setTimeout(func1(a), 1000); // 200个200
}