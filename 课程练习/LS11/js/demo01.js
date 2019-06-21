/** 2019.3.27 **/

/** 立即执行表达式的常见形式 **/
//第一种：注意调用是在大括号里面
(function max(x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

//第二种：没有函数名（注意调用是在大括号哦外面）
(function (x,y){
    console.log("the max is",x>y?x:y);
})(2,3);

//注意：IIFE是表达式，要注意使用分号结尾，否则可能出现错误
(function() {
    console.log("111");
})();//没有分号的话会报错
(function () {
    console.log("222");
})()


/** 其他形式的IIFE 与运算符结合的写法 **/
var i=function(){
    return 10;
}();//i为10

true && function(a,b){
    return a>b?a:b;
}(5,9);

!function(x,y){
    return x==y?true:false; // === 返回什么
}("5",5);//false

//思考 !function(){return 2; }( ); 与 !function(){return 0; }();
!function(){
    return 2;
 }( );//false

 !function(){
    return 0;
 }( );//true




