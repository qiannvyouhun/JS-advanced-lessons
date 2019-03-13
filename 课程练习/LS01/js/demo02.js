/** 2019.3.12 **/


/*****基本语法回顾*****/

//变量声明，区分变量声明与定义（对比其他语言，JS语言的特点：动态类型、若类型）
var x;
//表达式作为语句时（赋值表达式语句）
x=23;


//1.条件语句
if(x>22){
    x+=2;
}else{
    console.log("x不大于22");
}


//2.反写
var y=234;
if(234==y){
    //反写？正写时错写成一个=不会报错，反写错写成一个=会报错
    console.log("相等！");
}


//3.思考?
//ES5中变量的定义可以提升到全局，但是赋值还在块作用域，但是当条件是false时不执行条件里面的赋值操作
console.log(a);//undefined
if(true){
    var a=2;
}
console.log(a);//2

console.log(b);//undefined
if(false){
    var b=3;
}
console.log(b);//undefined


//4.循环语句
for(var i=0;i<3;i++){
    console.log("i:",i);//0 1 2
}
console.log(i);//3


//5.函数定义及调用，函数有3中定义方法
function max(x,y){
    return x>y?x:y;
}
console.log(max(2,3));//3


//6.复合运算符
var c=3;
c+=5;
console.log(c);


//7.标识符：以数字、字母、下划线及$组成，数字不能打头


//8.保留字
//argument break continue typeof instanceof delete等等

console.log(typeof NaN);//number类型
console.log(typeof Infinity);//number类型




