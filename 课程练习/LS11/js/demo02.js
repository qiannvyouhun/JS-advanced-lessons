/** 2019.3.27 **/

 /** 如何避免文件之间的全局污染，使用IIFE函数立即执行表达式 **/
 (function () {  // IIFE开始
 var x = 10;
 document.onclick = function () {
     // console.log("x = ",x);
     alert("x = "+x);
 };
})();           // IIFE结束

function nameSpace() {
    var x = 20;
}
nameSpace();

/*
//由于ES5没有块作用域，即使写成如下形式依然有问题
if(true){
    var x = 30;
}
*/