/** 2019.3.12 **/

//避免滥用全局变量
document.onclick=function(){
    var x=10;
    console.log("x=",x);
    alert("x="+x);
};

//避免全局污染，使用IIFE函数立即执行表达式
(function () {  // 开始
    var x = 10;
    document.onclick = function () {
        //console.log("x = ",x);
        alert("x = "+x);
    };
})(); 
