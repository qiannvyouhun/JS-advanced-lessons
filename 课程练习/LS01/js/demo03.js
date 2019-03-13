/** 2019.3.12 **/


/*****数据类型*****/

var num=1;
var str="string";
var b=true;
var n=null;
var u=undefined;

var arr=["apple","pear","banana"];
var fun=function(){
    return "this is a function";
};
var obj=new Object();
obj.name="test";

console.log("\n");
console.log(typeof num);//number
console.log(typeof str);//string
console.log(typeof b);//boolean
console.log(typeof n);//这里返回的是object，这是JS语言的特别之处
console.log(typeof u);//undefined
console.log("\n");
console.log(typeof arr);//object
console.log(typeof obj);//object
console.log(typeof fun);//function

console.log(typeof Number); //function
console.log(typeof String); //function
console.log(typeof Boolean); //function
console.log(typeof Object); //function
console.log(typeof Array); //function
console.log(typeof Function); //function
console.log(typeof RegExp); //function
console.log(typeof Error); //function
console.log(typeof Math); //object
console.log(typeof JSON);//object

//==、=== 回顾 值类型与引用类型回顾 不同类型变量 判等时的区别
//判等步骤
//1.看是==还是===

//2.如果是===则先看类型
// 类型不同肯定false
// 类型相同（如果是基本类型：判断值是否相等；  如果是引用类型：判断引用是否是同一个引用）

//3.如果是==则先看类型
// 先试着进行类型转换
// 转换后（如果是基本类型：判断值是否相等；   如果是引用类型：判断引用是否是同一个引用）
var a1=2;
var a2="2";
console.log(a1==a2);//true,进行类型转换
console.log(a1===a2);//false,类型不同直接可以拍段位false

//进一步理解
var c1=23;
var c2=new Number(23);
console.log(c1==c2);//true
console.log(c1===c2);//false

//包装对象
var str2="abc";
console.log(str2.lengthh);//3
str.length=1;
console.log(str2);//abc
//原始类型变量的不可变性，指的是包装对象的改变并不影响原始类型的变量

//JS中都是对象
//访问基本类型的变量属性时，会创建临时包装对象，访问的是该包装对象的属性
//改变此临时包装对象的属性，并不会影响原始变量（原始类型变量的不可变性）

//null：Null类型，“空值”，代表一个空对象指针
//undefined：声明了一个变量没有初始化

//typeof：常用于检测基本类型的变量
//instance：常用于检测引用类型的变量，instance左侧期望是一个对象，右侧期望是一个类型
console.log({}instanceof Object);//true
console.log([]instanceof Object);






