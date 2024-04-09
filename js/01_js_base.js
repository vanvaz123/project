// 输出框
alert();

//F12 console 里
console.log();

// 输入框
prompt();

// 变量
var age = 18,
    sex = ' 男 ';

// 数据类型
//1. 数字型 Number      0
//2. 字符串 String      ' 张三'
//3. 布尔值 Boolean     ture false
//4. 未定义 Undefined   undefined
//5. 空    Null        null

// 字符串长度
var txt = ' 我是文字 ';
console.log(txt.length);

// 字符串相加
console.log ('hello'+' '+' 你好 ');  /* hello 你好 */
console.log('100'+'100')  /* 100100 */

// 检测数据类型
console.log(typeof age);

// 转换为字符串
// 方法 1
var age = 18;
console.log(age.toString());
// 方法 2
console.log(String(age));

// 转换数字型
var num = '18.8';
console.log (parseInt (num));  /* 整数 可以去单位 */
console.log (parseFloat (num));/* 整数包括小数  可以去单位 */
console.log(Number(num));
console.log (num - 0) /* 隐式转换 利用 - * / 运算 */

//---------- 切换布尔值 ----------
console.log (0);/* '' 0 NaN null undefined 为 false，其他全为 ture */

//---------- 前置递增 ----------
++i; // 先自增，后反值

//---------- 后置递增 ----------
i++; // 先反值，后自增

//---------- 比较运算符 ----------
// <  >  =  <=  >= 
//== 判等号 (会转型)  37==37 ture
//!= 不等号         37!=37 false
//=== 全等（数据及类型需要一致）  37===‘37’ false    

//---------- 逻辑运算符 ----------
// 逻辑与 表达式 1 && 表达式 2  （第 1 个为真则返回 2，第 1 个为假则返回 1） 
// 逻辑或 表达式 1 || 表达式 2  （第 1 个为真则返回 1，第 1 个为假则返回 2）

//---------- 赋值运算符 ----------
// =          直接运算符         var n=1
// +=、—=     加减一个数后再赋值   var n=3  n+=5 // 8
// *、/=、%=  乘除 取模后再赋值    var n=3  n*=5 // 15

//---------- 流程控制 if else ----------
/* var score = prompt (' 请输入分数： ');
if (score >= 90) {
    alert (‘您很优秀’);
} else if (score >= 60) {
    alert (' 您也很棒 ');
} else { 
    alert (' 您不合格 ');
} */

//---------- 三元 表达式 ----------
var num = 10;
var result = num > 5?' 是的 ':' 不是的 '// 我们知道表达式是有返回值的 
console.log(result);
// if(num >5){
//  result =' 是的 ';
// } else {
//  result =' 不是的 ';
// }

//---------- switch ----------
var fruit = prompt (' 请输入您要查询的水果 ');
switch (fruit) { 
    case ' 苹果 ':
        alert (' 苹果 3.5 一斤 ');
        break;
    case ' 橘子 ':
        alert (' 橘子 2 元一斤 ');
        break;
    default:
        alert (' 没有次水果 ');
}

//---------- for 循环语句 ----------
for (var i = 1; i <= 10; i++) { 
    console.log('☆');
}

//---------- 短点调试 ----------
//sources、watch
// 按 F11 程序一步一步执行

//---------- 双循环语句 for ----------
var str = '';
for (var i = 1; i <= 5;i++) { 
    for (var j = 1; j <= 5;j++) {   // 五行五颗星
        str=str+'☆'
    }
    str += '\n';
}

//---------- 九九乘法表 ----------
var str = '';
for (var i = 1; i <= 5;i++) { 
    for (var j = i; j <= 5;j++) {   // 把 j 起始值变为 i，倒三角
        str=str+'☆'
    }
    str += '\n';
}

//---------- while 循环 ----------
var num = 1;
while (num<=10) { 
    console.log('☆');
    num++;
}
// 里面应该有计数器，初始化变量。
// 里面应该有操作表达式，完成计数器的更新，防止死循环

//---------- do while ----------
var i=1
do {
    console.log (' 你好吗 ');
    i++;
} while (i <= 100)  // 跟 while 不同的地方在于 do while 先执行一次循环体，再判断条件，如果条件表达式结果为真了，则继续执行循环体，否则退出循环

//---------- continue ----------
for (var i = 1; i <= 5;i++) { 
    if (i == 3) { 
        continue;
    }
    console.log (' 我在吃第 ' + i + ' 个包子 ');
}

var sum = 0;
for (var i = 1; i <= 100; i++) { 
    if (i % 7 == 0) { 
        continue;
    }
    sum += i;
}
console.log(sum)

//---------- 数组 ----------
var arr = new Array ();   // 创建一个空数组
var arr1 = [];            // 创建一个空数组
var arr2 = [1, 2, ' 老师 ', ture]; //索引号从0开始
console.log(arr2);        //[1, 2, ' 老师 ', ture]
console.log(arr2[0])      //1
console.log(arr2[1])      //2
console.log(arr2[2])      //老师
console.log(arr2[3])      //ture
console.log(arr2[4])      //undefined

//---------- 遍历数组 ----------
var arr = ['red', 'green', 'blue'];
for (i = 0; i < arr.length;i++) {    //数组索引号从0开始，所以i为0
    console.log(arr[i]);              //遍历数组就是把数组的元素从头到尾访问一次
}
//案例
var arr = [2, 5, 6, 77, 53, 25, 8];
var max = [0];
for (i = 0; i <= arr.length;i++) { 
    if (arr[i]>max) { 
        max = arr[i];
    }
}
console.log('数组中最大的数是' + max);

//---------- 数组添加元素 ----------
//1.新增数组元素 修改length长度
var arr = ['red', 'green', 'blue'];
console.log(arr.length);
arr.length = 5; //把我们数组的长度修改为了 5 里面应该有5个元素
console.log(arr);
console.log(arr[3]); // undefined
console.log(arr[4]); // undefined
//2.新增数组元素 修改索引号 追加数组元素
var arr1 = ['red', 'green', 'blue'];
arr1[3]='pink'; // 新增第四个元素
arr1[0]= 'yel1ow';  //这里是替换原来的数组元素
arr1 = '有点意思';//不要直接给 数组名赋值 否则里面的数组元素都没有了
//案例1:建一个0-100的数组
var arr = [];//必须先新建一个空数组
for (var i = 0; i < 100; i++) { 
    // arr = i;不要直接给数组赋值，否则以前的元素就没有了
    arr[i] = i+1;
}
//案例2:把数组中大于10的选出来
//方法1
var arr = [2, 0, 6, 1, 77, 0, 52, 7, 34, 7];
var newArr = [];
var j = 0;
for (var i = 0; i < arr.length;i++) { 
    if (arr[i]>10) { 
        newArr[j] = arr[i];
        j++;
    }
}
console.log(newArr);
//方法2
var arr = [2, 0, 6, 1, 77, 0, 52, 7, 34, 7];
var newArr = [];
for (var i = 0; i < arr.length;i++) { 
    if (arr[i]>10) { 
        newArr[newArr.length] = arr[i]; // 刚开始长度是0，依次递增
    }
}
//案例3:倒序
var arr = ['red', 'green', 'blue', 'pink', 'purple', 'hotpink'];
var newArr = [];
for (var i = arr.length- 1;i >= 0; i--) {
    newArr[newArr.leneth] = arr[i];
    console.log(newArr);
}

//---------- 冒泡排序 ----------
var arr = [5, 4,3,2,1];
for (var i=0; i <=arr.length - 1; i++){     //1外层循环管趟数
    for (var j=0;j<=arr.length-i-1;j++){     //里面的循坏管 每一趟的交换次数
        //内部交换2个变量的值 前一个和后面一个数组元素相比较
        if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1]= temp;
        }
    }
}
console.log(arr);

//---------- 函数 ----------
function cook(cook1) {      //在声明函数的小括号里面是 形参 （形式上的参数）
    console.log(cook1);     //在函数调用的小括号里面是 实参 （实际的参数）
}
cook('酸辣土豆丝');
cook('大肘子');//参数没有个数限制

//---------- 返回值 ----------
//注意0 有返回值才能输出，有形参实参才能输出
//注意1
function getSum(sum1, sum2) { 
    return sum1 + sum2;     //reture后面的代码不会被执行
    alert('我不会被执行');
}
console.log(getSum(1, 2));
//注意2
function fn(num1, num2) { 
    return 1, 2;
}
console.log(fn(1, 2));  //返回值只返回一个，返回最后一个值，返回 2
//注意3 求任意两个数的加减乘除
function getAll(num1,num2) { 
    return [num1 + num2, num1 - num2, num1 * num2, num1 / num2];
}
console.log(getAll(1, 2));
//案例1:利用函数求数组中最大值
function getMax(arr) { 
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) { 
        if (max < arr[i]) { 
            max = arr[i];
        }
    }
    return max
}
console.log(getMax([5, 2, 99, 101, 67, 77]))

//arguments
//注意1 只有函数才有arguments对象 而且是每个函数都内置好了这个arguments
function fn() { 
    console.log(arguments); //里面存储了所有传递过来的实参
    console.log(arguments.length);  
    console.log(arguments[0]); 
    //我们可以按照数组的方式遍历arguments
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
//伪数组 并不是真正意义上的数组
//1.具有数组的 length 属性
//2.按照索引的方式进行存储的
//3.它没有真正数组的一些方法 pop() push() 等等

//---------- 调用 ----------
function fn1() { 
    console.log(111);
    fn2();
    console('fn1')
}
function fn2() { 
    console.log(222);
    console.log('fn2');
}
fn1();
//最终输出顺序: 111,222,fn2,fn1
//先读取最外围的‘调用函数’，再按照从上往下的顺序读

//案例1:用户输入年份，输出当你爱你年份二月的天数 并判断是否为闰年
function backDay() { 
    var year = prompt('请输入年份')
    if (isRunyear(year)) {
        alert('当前年份是闰年 2月份有29天');
    } else { 
        alert('当前年份是平年 2月份有28天');
    }
}
backDay();

function isRunyear(year) { 
    var flag = false;
    if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) { 
        flag = turel;
    }
    return flag;
}
isRunyear(year);

//---------- 声明方式 ----------
//1.利用函数关键字自定义函数(命名函数)
function fn() { }
fn();
//2.函数表达式()
//var 变量名=function(){};
var fun = function (aru) { 
    console.log('我是函数表达式');
    console.log(aru);
}
fun('老师');
//fun是变量名 不是函数名
//函数表达式声明方式跟声明变量差不多，只不过变量里面存的是 值 ，而函数表达式里面存的是函数
//函数表达式也可以进行传递参数

//---------- 作用域 ----------
//分为全局变量和局部变量
//1.全局变量:全局都可以使用（在函数内部，没有声明直接复制的变量也属于全局变量）
var num = 10;
console.log(num);

function fn() { 
    console.log(num)
}
fn();
//2.局部变量:在局部作用域下的变量 后者在函数内部的变量就是局部变量（函数的形参也可以看做是局部变量）
function fun(aru) { 
    var num1 = 10; //num1就是局部变量
    num2 = 20;     //num2是全局变量
}
fun();
//3.从执行效率来看
//(1)全局变量:只有浏览器关闭的时候才会注销，比较占内存
//(2)局部变量:当我们程序执行完毕就会销毁，比较节约内存资源

//---------- 对象 --------------------------------------------------------------------------------
//1.利用对象字面量创建对象{}
// var obj={};  //创建了一个空的对象
var obj = {
    uname: '张三疯',
    age: 18,
    sex: 男,
    sayHi: function () {
        console.log("hi~");
    }
}
//(1）里面的属性或者方法我们采取键值对的形式 键 属性名：值  属性值
//(2）多个属性或者方法中间用逗号隔开的
//(3）方法冒号后面跟的是一个磨名函数

//---------- 使用对象 ----------
//(1).调用对象的属性 我们采取 对象名.属性名  我们理解为 的
console.log(obj.uname);
//(2).调用属性还有一种方法 对象名['属性名']
console.log(obj['uname']);
//(3).调用对象的方法 sayHi 对象名.方法名(） 千万别忘记添加小括号
obj.sayHi();
console.log(obj.sayHi());

//---------- 变量 属性 函数 方法的区别 ----------
//变量和属性的相同的 他们都是用来存储数据的
var num = 10;
var obj = {
    age: 18
}
console.log(obj.age);
// console.log(age);
//变量 单独声明并赋值 使用的时候直接写变量名 单独存在
//属性 在对象里面的不需要声明的 使用的时候必须是 对象.属性
//函数和方法的相同点 都是实现某种功能做某件事
//函数是单独声明 并且调用的 函数名(） 单独存在的
//方法 在对象里面 调用的时候 对象.方法(）

//---------- 利用new Object 创建对象 ----------
var obj = new object();   //创建了一个空的对象
obj.uname = '张三丰';
obj.age = 18;
obj.sayHi = function () { 
    console.log('hi');
}
console.log(obj.uname);
console.log(obj['sex']);
obj.sayHi();

//---------- 构造函数 ----------
//function 构造函数名({
//      this.属性=值;
//      this.方法=function() {}
//}
//new 构造函数名();
//1.构造函数 明星 泛指的某一大类 它类似于java 语言里面的类(class)
function Star(uname,age,sex) { 
    this.name = uname;
    this.age = age;
    this.sing = function () { 
        console.log(sang);
    }
}
//对象 特指 是一个具体的事物 刘德华=={name:"刘德华",age:18,sex：“男",sing: f}
var ldh = new Star('刘德华', 18, '男');   //调用函数返回的是一个对象
console.log(ldh.uname);
console.log(ldh['sex']);
ldh.sing('冰雨');
//1.构造函数名字首字母要大写
//2.我们构造函数不需要return 就可以返回结果
//3.我们调用构造函数 必须使用 new
//4.我们只要new star()  调用函数就创建一个对象 1dh {}
//5.我们的属性和方法前面必须添加 this
//我们利用构造函数创建对象的过程我们也称为对象的实例化

//---------- 遍历对象 ----------
var obj = {
    uname:'张三',
    age: 18,
    sex: '男',
    fn: function () { }
}
// for in 遍历我们的对象
// for (变量 in 对象){} 
for (var k in obj) { 
    console.log(k);     // k 变量 输出得到的是 属性名
    console.log(obj[k]);// obj[k] 得到是 属性值
}
//我们使用 for in 里面的变量 我们喜欢写 k 或者 key

//---------- 内置对象 ----------

//(1)  math---------------------
//1.绝对值方法
console.log(Math.abs(1)); // 1
console.log(Math.abs(-1)); // 1
console.log(Math.abs('-1'));  //隐式转换 会把字符串型 -1转换为数字型
// //2.三个取整方法
// (1) Math.floor() 地板 向下取整 往最小了取值
console.log(Math.floor(1.1)); //1
console.log(Math.floor(1.9)); //1
// // (2) Math.ceil() 天花板 向上取整 往最大了取值
console.log(Math.ceil(1.1)); //2
console.log(Math.cei1(1.9)); //2
// // (3) Math.round() 四舍五入 其他数字都是四舍五入，但是.5特殊 它往大了取
console.log(Math.round(1.1));// 1
console.log(Math.round(1.5));// 2
console.log(Math.round(1.9));// 2
console.log(Math.round(-1.1));//-1
console.log(Math.round(-1.5));//这个结果是 -1
// (4) Math.random() 
// 1.Math对象随机数方法  random(）返回一个随机的小数 0 =< x<1
// 2.这个方法里面不跟参数
// 3.代码验证
console.log(Math.random());
// 4.我们想要得到两个数之间的随机整数 并且 包含这2个整数
// Math.floor(Math.random() * (max - min + 1))+min;
function getRandom(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1, 10));
// 5.随机点名
var arr = ['张三', '李四', '刘德华', '张学友', '黎明', '郭富城'];
console.log(arr[Math.random() * (arr.length)]);
console.log(arr[Math.random(0, arr.leneth - 1)]);

//(2)  data---------------------
// Date(）日期对象 是一个构造函数 必须使用new 来调用创建我们的日期对象
var arr = new Array();  //创建一个数组对象
var obj = new object(); //创建了一个对象实例
//1.使用Date 如果没有参数 返回当前系统的当前时间
var date = new Date();
console.log(date);
//2. 参数常用的写法 数字型 2019,10,01 或者是 宇符串型'2019-10-1 8:8:8'
var date1 = new Date (2019, 10, 1);
console.log(date1); // 返回的是 11月 不是10月
var date2 = new Date('2019-10-1 8:8:8');
console.log(date2);
//代码 ----------
方法名
getFullYear()     //获取当年
getMonth()        //获取当月 (0-11)
getDate()         //获取当天日期
getDay()          //获取星期几（周日0到周六6)
getHours()        //获取当前小时
getMinutes()      //获取当前分钟
getSeconds()      //获取当前秒钟
//格式化日期时分杪
var date = new Date();
console.log(date.getHourt());//时
console.log(date.getMinutes());//分
console.log(date.getseconds());//秒
//案例1:要求封装一个函数返回当前的时分秒 格式 08:08:08
function getTime() { 
    var time = new Date();
    var h = time.getHours();
    h = h < 10 ? 'O' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? 'O' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? 'O' + s : s;
    return h + ':' + m + ':' + s;
}
console.log(getTime());
//案例2:获得Date总的毫秒数(时间戳）不是当前时间的毫秒数 而是跑离1970年1月1号过了名少毫秒数
//1.通过 valueof() getTime()
var date = new Date();
console.log(date.valueOf());  //我们现在的时间距离1970.1.1总毫秒数
console.log(date.getTime());  
//2.简单的写法（最常用的写法）
var date = +new Date(); // +new Date() 返回的就是总的毫秒数
console.log(date1);
//3.H5 新增的 获得总的毫秒数
console.log(Date.now());
//案例3:倒计时
function countDown(time) { 
    var nowTime = +new Date();//返回的是现在的时间总的毫秒数
    var inputTime = +new Date(time);
    var times = (inputTime - nowTime) / 1000;
    var d = Math.floor(times / 60 / 60 / 24);
    d = d < 10 ? '0' + d : d;
    var h = Math.floor(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    var m = Math.floor(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    var s = Math.floor(times % 60);
    s = s < 10 ? '0' + s : s;
    return d+'天'+h+'时'+m+'分'+s+'秒'
}
console.log(countDown('2024 - 1 - 25 17:00:00'));
var date = new Date();
console.log(date);

//----------  array ----------
//创造数组方法1:
var arr = [1, 2, 3];
//创造数组方法2:
var arr = new Array()  //创建了一个空的数组
var arr1 = new Array(2);  //这个2 表示 数组的长度为 2 里面有2个空的数组元素
var arr2 = new Array(2, 3);  //等价于 [2,3] 这样写表示 里面有2个数组元素 是2和3

//---------- 检测是否为数组
//(1)instanceof 运算符 它可以用来检测是否为数组
var arr = [];
var obj = {};
console.log(arr instanceof Array);
console.log(obj instanceof Array);
//(2) Array.isArray(参数); H5新增的方法 ie9以上版本支持
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

//---------- 添加减少数组里面的元素
//方法名               说明                                                  返回值
//push(参数1...)       末尾添加一个或多个元素，注意修改原数组                      并返回新的长度
//pop()               删除数组最后一个元素, 把数组长度减1 无参数、修改原数组        返回它删除的元素的值
//unshift(参数1..)     向数组的开头添加一个或更多元素，注意修改原数组               并返回新的长度
//shift()             删除数组的第一个元素,数组长度减1 无参数、修改原数组           并返回第一个元素的值
var arr = [1, 2, 3];
console.log(arr.push(4, 'pink'));
console.log(arr.unshift('red', 'purple'));
console.log(arr.pop());
console.logog(arr.shift());
console.log(arr);
//案例1:有一个包含工资的数组[1500， 1200，2000，2100，1860]，要求把数组中工资超过2000的删除，剩余的放到新数组里面
var arr = [1500, 1200, 2000, 2100, 1800];
var newArr = [];
for (i = 0; i < arr.length;i++) { 
    if (arr[i]<2000) { 
        // newArr[newArr.length]=arr[i]
        newArr.push(arr[1]);
    }
}
console.log(newArr);
console.log(arr);

//---------- 数组翻转和排序
//翻转数组
var arr = ['pink', 'red', 'blue'];
arr.reverse();
console.log(arr);

//数组排序（冒泡排序）
var arr1 = [13, 4, 77, 1, 7];
arr1.sort(function (a, b) {
    // return a - b;// 升序的排序
    return b - a;// 降序的排序
});
console.log(arr1);

//数组索引
//方法名         说明                             返回值
//indexOf()     数组中查找给定元素的第一个索引       如果存在返回素引1号 如果不存在，则返回-1
//lastIndexOf() 在数组中的最后一个的素引            如果存在返回素号1号 如果不存在，则返回-1
var arr = ['red', 'green', 'blue', 'pink', 'blue'];
console.log(arr.indexOf('blue'));  //2
//返回数组元素索引号方法 indexof（数组元素）作用就是返回该数组元素的索引号 从前面开始查找
//它只返回第一个满足条件的索引号
//它如果在该数组里面找不到元素，则返回的是-1
console.log(arr.lastIndexof('blue')); //4
//返回数组元素索引号方法  lastIndexof（数组元素） 作用就是返回该数组元素的索引号 从后面开始查找

//案例 数组去重 ['c','a','z','a','x','a','x','c','b'] 要求去除数组中重复的元素
//1.目标：把旧数组里面不重复的元素选取出来放到新数组中，重复的元素只保留一个，放到新数组中去重。
//2.核心算法：我们遍历旧数组， 然后拿着旧数组元素去查询新数组， 如果该元素在新数组里面没有出现过，我们就添加，否则不添加。
//3.我们怎么知道该元素没有存在？利用 新数组.indexOf(数组元素）如果返回时 - 1就说明 新数组里面没有改元素
function unique(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
demo = unique(['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b']);
console.log(demo);

//---------- 数组转换为字符串 ----------
//方法名         说明                                   返回值
//toString()    把数组转换成字符串，逗号分隔每一项          返回一个字符串
//join('分隔符'） 方法用于把数组中的所有元素转换为一个字符串    返回一个字符串
var arr = [1, 2, 3];
console.log(arr.toString()); // 1,2,3

var arr1 = ['green', 'blue', 'pink'];
console.log(arr1.join());// green, blue,pink
console.log(arr1.join('-'));// green-blue-pink
console.log(arr1.join('&'));// green&blue&pink

//方法名         说明                                   返回值
//concat()      连接两个或多个数组 不影响原数组            返回一个新的数组
//slice()       数组截取slice(begin, end)              返回被截取项目的新数组
//splice()      数组删除splice(第几个开始,要删除个数）     返回被删除项目的新数组 注意，这个会影响原数组

//----------  字符串对象 ----------

// 基本包装类型
var str = "andy";
console.log(str.length);
//对象 才有属性和方法 复杂数据类型才有 属性和方法
//基本包装类型：就是把简单数据类型 包装成为了 复杂数据类型
//（1）把简单数据类型包装为复杂数据类型
var temp = new string('andy');
//（2）把临时变量的值 给 str
str = temp;
//（3）销毁这个临时变量
temp = null;

//字符串对象 根据字符返回位罝 str.indexof（'要查找的宇符'，[起始的位置]）
var str = '改革春风吹满地，春天来了';
console.log(str.indexof('春'));
//---------- indexOf('0', [索引号]);
//案例1:直找字符串”abcoefoxyozzopp"中所有o出现的位置以及次数
//核心算法：先查找第一个o出现的位置
//然后 只要indexOf 返回的结果不是 -1 就继续往后查找
//因为indexOf 只能查找到第一个，所以后面的查找，一定是当前索引加1，从而继续查找
var str = "oabcoefoxyozzopp";
var index = str.indexof('o');
var num = 0;
while (index !== -1) { 
    console.log(index);
    num++;
    index =
        str.indexOf('o', index + 1);
}
console.log('o出现的次数是:', + num);

//---------- 根据位置返回字符  ----------
//方法名              说明                                      返回值
//charAt(index)      返回指定位置的字符(index 字符串的索引1号）     str.charAt(0)
//charCodeAtlindex)  获取指定位置处字符的ASCI1码 (index素引1号)    str.charCodeAt(0)
//str[index]         获取指定位置处字符                          HTML5, IE8+支持 和charAto等效
// 1. charAt(index）根据位罝返回字符
var str = 'andy';
console.log(str.charAt(3));
//遍历所有的字符
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
// 2. charCodeAt (index) 返回相应素引号的字符ASCII值 目的：判断用户按下了那个键
console.log(str.charCodeAt(0)); // 97
// 3. str[index] H5 新增的
console.log(str[0]); // a
//案例1:判断一个字符串“abcoefoxyozzopp’中出现次数最多的字符，并统计其次数
//核心算法：利用 charAt（） 遍历这个字符串
//把每个字符都存储给对象，如果对象没有该属性，就为1，如果存在了就 +1
var str = 'abcoefoxyozzopp';
var o = {};
for (var i = 0; i < str.length;i++) { 
    var chars = str.charAt(i);
    console.log(o[chars]);
    if (o[chars]) { //1就是ture
        o[chars]++;
    } else { 
        o[chars]=1;
    }
}
console.log(o);
//遍历对象
var max = 0;
var ch = '';
for (var k in o) { 
    //k 得到是 属性名
    //o[k] 得到的是属性值
    if (o[k]>max) { 
        max = o[k];
        ch = k;
    }
}
console.log(max);
console.log('最多的字符是:' +ch);

//---------- 字符串操作方法 ----------
//方法名                         说明                                   
//concat(str1,str2,str3...)     concat() 方法用于连接两个或多个字符串。拼接字符串，等效于+，＋更常用
//substr(start, length)         从start位置开始（素号1号） ，length 取的个数  重点记住这个------------------
//slice(start, end)             从start位置开始，截取到end位置，end取不到（他们俩都是索引1号）
//substring(start, end)         从start位置开始，截取到end位置，end取不到 基本和slice 相同 但是不接受负值
//1. concat('字符串1', '字符串2'......)
var str = 'andy';
console.log(str.concat('red')); //andyred
//2.substr('截取的起始位置','截取几个字符');
var str1 = '改革春风吹满地';
console.log(str1.substr(2, 2));//第一个2是素引号的2从第几个开始 第二个2是取几个字符  //春风

//----------替换字符----------
//1.替换字符 replace('被替换的字符字符','替换为的字符'）它只会替换第一个字符
var str = 'andyandy';
console.log(str.repeat('a', 'b'));
//有一个字符串'abcoefoxvozzopp' 要求把里面所有的o替换为 *
var str1 = 'abcoefoxyozzopp';
while (str1.indexOf('o')!==-1) { 
    str1.replace('o', '*');
}
//2.字符转换为数组 Sp1it('分隔符') 前面我们学过 join 把数组转换为字符串
var str2 = 'red, pink, blue';
console.log(str2.split(','));
var str3 = 'red&pink&blue';
console.log(str2.split('&'));