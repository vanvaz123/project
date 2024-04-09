//---------- base -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 输入框
prompt();

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
console.log(num - 0) /* 隐式转换 利用 - * / 运算 */

//----------  字符串对象 ---------------------------------------------------------------------------
//字符串对象 根据字符返回位罝 str.indexof（'要查找的宇符'，[起始的位置]）
var str = '改革春风吹满地，春天来了';
console.log(str.indexof('春'));  //indexOf('0', [索引号]);
//---------- 根据位置返回字符  ----------
//方法名              说明                                      返回值
//charAt(index)      返回指定位置的字符(index 字符串的索引1号）     str.charAt(0)
//charCodeAtlindex)  获取指定位置处字符的ASCI1码 (index素引1号)    str.charCodeAt(0)
//str[index]         获取指定位置处字符                          HTML5, IE8+支持 和charAto等效
//---------- 字符串操作方法 ----------
//方法名                         说明                                   
//concat(str1,str2,str3...)     concat() 方法用于连接两个或多个字符串。拼接字符串，等效于+，＋更常用
//substr(start, length)         从start位置开始（素引号） ，length 取的个数  重点记住这个 ------------------
//slice(start, end)             从start位置开始，截取到end位置，end取不到（他们俩都是索引1号）
//substring(start, end)         从start位置开始，截取到end位置，end取不到 基本和slice 相同 但是不接受负值
//toFixed(index)                保留几位小数
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

//---------- 逻辑运算符 ------------------------------------------------------------------------
// 逻辑与 表达式 1 && 表达式 2  （第 1 个为真则返回 2，第 1 个为假则返回 1） 
// 逻辑或 表达式 1 || 表达式 2  （第 1 个为真则返回 1，第 1 个为假则返回 2）

//---------- 三元 表达式 ------------------------------------------------------------------------
var num = 10;
var result = num > 5?' 是的 ':' 不是的 '// 我们知道表达式是有返回值的 
console.log(result);
// if(num >5){
//  result =' 是的 ';
// } else {
//  result =' 不是的 ';
// }

//---------- 数组 ------------------------------------------------------------------------------
var arr = new Array ();   // 创建一个空数组
var arr1 = [];            // 创建一个空数组
var arr2 = [1, 2, ' 老师 ', ture]; //索引号从0开始
console.log(arr2);        //[1, 2, ' 老师 ', ture]
console.log(arr2[0])      //1
console.log(arr2[1])      //2
console.log(arr2[2])      //老师
console.log(arr2[3])      //ture
console.log(arr2[4])      //undefined
var arr = new Array()  //创建了一个空的数组
var arr1 = new Array(2);  //这个2 表示 数组的长度为 2 里面有2个空的数组元素
var arr2 = new Array(2, 3);  //等价于 [2,3] 这样写表示 里面有2个数组元素 是2和3
//添加减少数组里面的元素--------------
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
//数组索引------------------------
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
//数组转换为字符串 ------------------
//方法名         说明                                   返回值
//toString()    把数组转换成字符串，逗号分隔每一项          返回一个字符串
//join('分隔符'） 方法用于把数组中的所有元素转换为一个字符串    返回一个字符串
var arr = [1, 2, 3];
console.log(arr.toString()); // 1,2,3

var arr1 = ['green', 'blue', 'pink'];
console.log(arr1.join());// green, blue,pink
console.log(arr1.join('-'));// green-blue-pink
console.log(arr1.join('&'));// green&blue&pink

//---------- 函数 ------------------------------------------------------------------------------
//方式1.利用函数关键字自定义函数(命名函数)---
function cook(cook1) {      //在声明函数的小括号里面是 形参 （形式上的参数）
    console.log(cook1);     //在函数调用的小括号里面是 实参 （实际的参数）
}
cook('酸辣土豆丝');
cook('大肘子');//参数没有个数限制
//
function getSum(sum1, sum2) { 
    return sum1 + sum2;     //reture后面的代码不会被执行
    alert('我不会被执行');
}
console.log(getSum(1, 2));
//方式2.函数表达式()
//var 变量名=function(){};
var fun = function (aru) { 
    console.log('我是函数表达式');
    console.log(aru);
}
fun('老师');
//fun是变量名 不是函数名
//函数表达式声明方式跟声明变量差不多，只不过变量里面存的是 值 ，而函数表达式里面存的是函数
//函数表达式也可以进行传递参数
//arguments---------------
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

// ----------  立即执行函数 ----------
//1.立即执行函数：不需要调用，姨妈能够自己执行的函数
function fn() {
    console.log(1);
}
fn();
//2.写法 也可以传递参数进来
//(1)  （function(){})() 或者 (2).（function(){}())
(function (a, b) {
    console.log(a + b);
    var num = 10;
})(1, 2); // 第二个小括号可以看做是调用函数
(function sum(a, b) {
    console.log(a + b);
    var num = 10;// 局部变量
}(2, 3));
//3. 立即执行函数最大的作用就是 独立创建了一个作用域，里面所有的变量都是局部变量 不会有命名冲突的情况

//---------- 对象 --------------------------------------------------------------------------------
//1.利用对象字面量创建对象{}
// var obj = new object();   //创建了一个空的对象
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

//---------- switch -------------------------------------------------------------------------------
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

//---------- for 循环语句 --------------------------------------------------------------------------
for (var i = 1; i <= 10; i++) { 
    console.log('☆');
}

//---------- 短点调试 -------------------------------------------------------------------------------
//sources、watch
// 按 F11 程序一步一步执行

//---------- 双循环语句 for --------------------------------------------------------------------------
var str = '';
for (var i = 1; i <= 5;i++) { 
    for (var j = 1; j <= 5;j++) {   // 五行五颗星
        str=str+'☆'
    }
    str += '\n';
}

//---------- while 循环 ------------------------------------------------------------------------------
var num = 1;
while (num<=10) { 
    console.log('☆');
    num++;
}
// 里面应该有计数器，初始化变量。
// 里面应该有操作表达式，完成计数器的更新，防止死循环

//---------- do while --------------------------------------------------------------------------------
var i=1
do {
    console.log (' 你好吗 ');
    i++;
} while (i <= 100)  // 跟 while 不同的地方在于 do while 先执行一次循环体，再判断条件，如果条件表达式结果为真了，则继续执行循环体，否则退出循环

//---------- continue --------------------------------------------------------------------------------
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

//---------- 内置对象 ------------------------------------------------------------------------------------

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

// ---------- DOM ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------- 事件 ------------------------------------------------------------------------------------------
//事件三要素: 事件源 事件类型 事件处理程序
//常见的鼠标事件
// 鼠标事件          触发条件
// onclick          鼠标点击左键触发
// onmouseover      鼠标经过触发
// onmouseout       鼠标离开触发
// onfocus          获得鼠标焦点触发
// onblur           失去鼠标焦点触发
// onmousemove      鼠标移动触发
// onmouseup        鼠标弹起触发
// onmousedown      鼠标按下触发 
// mouseenter       当鼠标移动到元素上时就会触发,mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发。mouseenter 只会经过自身盒子触发

// ---------- 鼠标事件对象 ----------
//e.clientX   返回鼠标相对于浏览器窗口可视区的 X坐标
//e.clientY   返回鼠标相对于浏览器窗口可视区的Y坐标
//e.pageX     返回鼠标相对于文档页面的X坐标 IE9+支持
//e.pageY     返回鼠标相对于文档页面的Y坐标 IE9+支持
//e.screenx   返回鼠标相对于电脑屏幕的 X坐标
//e.screenY   返回鼠标相对于电脑屏幕的Y坐标

// ---------- 键盘事件 ----------
//onkeyup     某个键盘按键被松开时触发
//onkeydown   某个键盘按键被按下时触发
//onkeypress  某个键盘按键被按下时触发 但是它不识别功能键 比如 ctrl shift 箭头等
//ps:如果使用addEventListener 不需要加 on
//onkeypress和前面2个的区别是，它不识别功能键，比如左右箭头，shift等。
//三个事件的执行顺序是：keydown -- keypress -- keyup
//键盘事件对象中的keyCode属性可以得到相应键的ASCII码值
//我们的keyup 和keydown事件不区分字母大小写 a 和 A 得到的都是65
//我们的keypress 事件 区分字母大小写 a 97 和 A 得到的是65

// ---------- 总结 ----------
//1.创建
//(1)document.write
//(2)innerHTML
//(3)createElement

//2.增
//(1)appendChild
//(2)insertBefore

//3.改.主要修改dom的元素属性，dom元素的内容、属 ，表单的值等
//(1)修改元素属性：SrC、href、title等
//(2)修改普通元素内容：innerHTML、innerText
//(3)修改表单元素：value、type、disabled等
//(4)修改元素样式：style、className

//4.查.主要获取查询dom的元素
//(1)DOM提供的API方法：getElementByld、getElementsByTagName 古老用法不太推荐
//(2)H5提供的新方法：querySelector、querySelectorAll 提倡
//(3)利用节点操作获取元素：父（parentNode）、子（children）、兄（previousElementSibling、nextElementSibling） 提倡

//5.属性操作.主要针对于自定义属性。
//(1)setAttribute:设置dom的属性值
//(2)getAttribute:得到dom的属性值
//(3)removeAttribute移除属性

//6.事件
//onclick、onmouseover等

//---------- 获取元素 ------------------------------------------------------------------------------------
//1.getElementById()
var timer = document.getElementById("time");
//2.getElementsByTagName()
var is = document.gettlementsByTagName('li');
//3.H5新方法
//(1)getElementsByClassName 根据类名获得某些兀素集合
var box = document.getElementsByClassName('box');
//(2)queryselector 返回指定选择器的第一个元素对象(自身) 切记 里面的选择器加符号.box #box
var firstBox = document.querySelector('.box');   //  常用 -----------
//3. auervselectorAll()返回指定选择器的所有元素集合 
var allBox = document.querySelectorAll('.box');
//4.获取body元素
var body1 = document.body; //返回body元素对象
//5.获取html元素
var html1 = document.documentElement;

//---------- 操作元素 --------------------------------------------------------------------------------------
// innerText和innerHTML的区别
var div = document.querySelector ('div');
div.innerText = '<strong>今天是:</strong>2019年';  //innerText 不识别html标签 非标准去除空格和换行    输出也是’<strong>今天是:</strong>2019年‘
div.innerHTML = '<strong>今天是：</strong>2019';  //innerHTML 识别html标签 W3C标准 保留空格和换行的     输出的是加粗的‘今天是:’
// innerText,innerHTML,src,href,id,alt,title 改变元素内容
img.src = 'images/s.gif';
div.innerHTML = '亲，上午好，好好写代码';
//表单参数修改参数 type, value, checked, selected, disabled
this.disabled = true;
input.valve = '被点击了';
pwd.type = 'text';
eye.src = 'images/open.png';
flag = 1;

// ---------- 属性值 ---------------------------------------------------------------------------------------
//设置元素属性
div.setAttribute('data-index', 20);
div.id = 'test';
div.className ='navs';
//获得元素属性
div.getAttribute('data-inedx');
//h5新增的获取自定义属性的方法
//dataset 是一个集合里面存放了所有以data开头的自定义属性
console.log(div.dataset);
console.log(div.dataset.index);
console.log(div.dataset['index']);
// 如果自定义属性里面有多个-链接的单词，我们获取的时候采取 驼峰命名法
console.log(div.dataset.listName);
console.log(div.dataset['listName']);

// ---------- 节点 -----------------------------------------------------------------------------------------
//1.父节点----------
erweima.parentNode; //得到的是离元素最近的父级节点 //<div class="box"><span class="erweima">x</span></div>
//2.子节点----------
//子节点 childNodes 所有的子节点 包含 元素节点 文本节点等等
ul.childNodes[0]
//children 获取所有的子元素节点 也是我们实际开发常用的 ----------------------------
ul.children[0];
ul.children[ul.children.length - 1]
ul.firstChild; //一堆详细信息
ul.lastChild;
//3.兄弟节点----------
//(1) nextsibling 下一个个兄弟节点 包含元素节点或者 文本节点等等
console.log(div.nextSibling);
console.log(div.previousSibling);
//(2) nextElementsibling 得到下一个兄弟元素节点
console.log(div.nextElementSibling);
console.log(div.previousElementSibling);

//4.创建节点
var li = document.createElement('li');
//5.添加节点 
//(1) node.appendChild(child) node父级 child是子级 后面追加元素 类似于数组中的push
var ul = document.querySelector('ul');
ul.appendChild(li); //最后添加一个
//(2) node.insertBefore(child,指定元素)
ul.insertBefore(li, ul.children[0]);// 第几个的前面
//6.删除节点 node.removeChild（child）
ul.removeChild(ul.children[0]);
//7.复制节点 
//(1) node.cloneNode(); 括号为空或者里面是false 浅拷贝 只复制标签不复制里面的内容
//(2) node.cloneNode(true); 插号为true 深拷贝 复制标签复制里面的内容

// 注册事件 ------------------
//1.注册事件
//(1).传统方式注册事件
btns[0].onclick = function () {
    alert('hi');
}
//(2)事件侦听注册事件 addEventListener
//里面的事件类型是字符串 必定加引号 而且不带on
//同一个元素 同一个事件可以添加多个侦听器（事件处理程序）
btns[1].addEventListener('click', function () { 
    alert(22);
})

//2.删除事件
//(1)传统方式删除事件
var divs = document.querySelectorAll('div');
divs[0].onclick = function () { 
    alert(11);
    divs[0].onclick = null;
}
//(2)removeEventListener 删除事件
divs[1].addEventListener('click', fn)
function fn() {
    alert(22);
    divs[1].removeEventListener('click', fn);
}

// ---------- 事件对象（重点） -------------------------------------------------------------------------------
var div = document.querySelector('div');
div.onclick = function () { 
    console.log(e);
}
//div.addEventListener('click', function(e) {
//  console.1og(e);
//})
//event 就是一个事件对象 写到我们侦听函数的 小括号里面 当形参来看
//事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传递参数
//事件对象 是 我们事件的一系列相关数据的集合 跟事件相关的 比如鼠标点击里面就包含了鼠标的相关信息，鼠标坐标啊，如果是键盘事件里面就包含的键盘事件的信息 比如 判断用户按下了那个键
//这个事件对象我们可以自己命名 比如 event、evt、 e
//事件对象也有兼容性问题 ie678 通过 window.event 兼容性的写法 e = e || window.event
var ul = document.querySelector('ul');
ul.addEventListener('click', function (e) { 
    // 我们给u1 绑定了事件 那么this 就指向ul
    console.log(this);
    // e.target 指向我们点击的那个对象 谁触发了这个事件 我们点击的是li e.target指向的就是1i
    console.log(e.target);
})
// 阻止默认行为（事件）让链接不跳转 或者让提交按钮不提交
var a = document.querySelector('a');
a.addEventListener('click', function (e) { 
    e.preventDefault();// dom 标准写法
})

// --------- BOM ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------- 窗口加载事件 ----------
window.addEventListener('load', function () { }) //没有限制
document.addEventListener('DOMContentLoaded', function () { }) //如果页面的图片很多的话，从用户访问到onload触发可能需要较长的时间，交互效果就不能实现，必然景响用户的体验，此时用DOMContentLoaded事件比较合适。
//调整窗口大小
window.addEventListener("resize", function () { });
//window.innerWidth 当前屏幕的宽度

// ---------- 窗定时器 ----------
//1.setTimeout 延时时间到了，就去调用这个回调函数，只调用一次 就结束了这个定时器
var timer = setTimeout(function () {
    console.log('爆炸了');
}, 5000);
//停止定时器
btn.addEventListener('click', function () { 
    clearTimeout (timer) ;
})
//2.setInterval 每隔这个延时时间，就去调用这个回调函数，会调用很多次，重复调用这个函数
setInterval(function () { 
    console.log('爆炸了');
}, 1000)
//停止定时器
begin.addEventListener('click', function () { 
    timer = setInterval(function () {
        console.log('ni hao ma');
    }, 1000);
})

// ---------- location ----------
//location对象
//location.href       获取或者设置 整个URL               ----- 常用
//location.search     返回参数                          ----- 常用
//location.host       返回主机（域名） www.itheima.com
//location.port       返回端口号 如果未写返回 空字符串
//location.pathname   返回路径
//location. hash      返回片段 #后面内容 常见于链接 锚点
//location对象方法        返回值
//location.assign()      跟 href一样，可以跳转页面（也称力重定向页面）
//location.replace()     替换当前页面，因为不记录历史，所以不能后退页面
//location.reload()      重新加载页面，相当于刷新按钮或者 f5 如果参数为true 强制刷新 ctrl+f5     ---常用

// ---------- history ----------
// history对象方法         作用
// back()                 可以后退功能
// forward()              前进功能
// go（参数）              前进后退功能 参数如果是1前进1个页面  如果是-1后退1个页面
btn.addEventListener('click', function() {
    // history.back;
    history.go(-1) ;
})

// ---------- offset特效 ----------
//offset系列属性              作用
//element.offsetParent      返回作为该元素带有定位的父级元素 如果父级都没有定位则返回body
//element.offsetTop         返回元素相对带有定位父元素上方的偏移
//element.offsetLeft        返回元素相对带有定位父元素左边框的偏移
//element.offsetWidth       返回自身包括padding、边框、内容区的宽度，返回数值不带单位
//element.offsetHeight      返回自身包括padding、边框、内容区的高度，返回数值不带单位

// ---------- Client 客户端可视区 ----------
//client系列属性          作用
//element.clientTop      返回元素上边框的大小
//element.clientLeft     返回元素左边框的大小
//element.clientWidth    返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位
//element.clientHeight   返回自身包括padding、内容区的高度，不含边框，返回数值不带单位

// ---------- scroll ----------
//scroll系列属性          作用
//element.scrollTop      返回被卷去的上侧距离，返回数值不带单位
//element.scrollLeft     返回被卷去的左侧距离，返回数值不带单位
//element.scrollWidth    返回自身实际的宽度，不含边框，返回数值不带单位
//element.scrollHeight   返回自身实际的高度，不含边框，返回数值不带单位
//window.pageYOffset     页面被卷去的头部
//window.pageXOffset     被卷去的左侧

//总结
//1. offset系列经常用于获得元素位置  offsetLeft offsetTop
//2. client经常用于获取元素大小 clientWidth clientHeight
//3. scroll经常用于获取滚动距离  scrollTop scrollLeft

// ---------- 移动端 ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------- touch ----------
// 触屏touch事件      说明
// touchstart        手指触摸到一个 DOM 元素时触发
// touchmove         手指在一个 DOM 元素上滑动时触发
// touchend          手指从一个 DOM 元素上移开时触发

// 触摸列表           说明
// touches           正在触摸屏幕的所有手指的一个列表
// targetTouches     正在触摸当前 DOM 元素上的手指的一个列表
// changedTouches    手指状态发生了改变的列表，从无到有，从有到无变化

e.preventDefault();// 阻止屏幕滚动的默认行为

// ---------- classList ----------
//classList 返回元素的类名
var div = document. querySelector ('div');
// console.log(div.classList[1]);
// 1. 添加类名 是在后面追加类名不会覆盖以前的类名 注意前面不加点
div.classList.add ('three');
// 2.删除类名
div.classList.remove('one');
// 3.切换类
var btn = document.querySelector('button');
btn.addEventListener('click', function () {
    document.body.classList.toggle('bg');
})

// ---------- 移动端click事件延迟300ms解决方案 ----------
// <meta name="viewport" content="user-scalable=no">

// ---------- 插件 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------- 使用步骤 ----------
// 1.导入相关的JS.CSS等文件
// 2.复制html结构
// 3.复制相关CSS代码
// 4.复制相关JS代码

// ---------- 插件网址 ----------
// swiper插件: 中文官网地址：https://www.swiper.com.cn/
// superslide: http://www.superslide2.com/
// iscroll: https://github.com/cubiq/iscroll
// 移动端视频插件 zy.media.js
// Bootstrap

// ---------- jquery插件网址 ----------
//1. jQuery插件库 http://www.jq22.com/
//2. jQuery之家  http://www.htmleaf.com/  ----------常用
//jQuery 插件使用步骤：
//1. 引入相关文件。(jQuery文件和插件文件)
//2. 复制相关html、cSS、js(调用插件)

// ---------- 图片懒加载 ----------
// 1.jquery插件库 EasyLazyload 注意，此时的js引入文件和js调用必须写到 DOM元素（图片）最后面
// 把html中'<img src='替换成'<img data-lazy-src='
// 插入代码

// ---------- 全屏滚动 fullpagejs ----------
// gitHub : https://github.com/alvarotrigo/fullPage.js
// 中文翻译网站：http://www.dowebok.com/demo/2014/77/

// ---------- bootstrap ----------
// 复制的html结构  要放在'<div class="container"></div>'中

// ---------- 本地存储 ----------
// ----- sessionStorage 储存空间小，关闭浏览器就不储存了
//存储数据：sessionStorage.setltem(key, value)
//获取数据：sessionStorage.getltem(key)
//删除数据：sessionStorage.removeltem(key)
//删除所有数据：sessionStorage.clear)

// ----- localstorage 储存空间大，永久储存，除非明确删除，属性同sessionStorage

// ---------- jQuery -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------- 入口函数 ----------
//等着页面DOM加载完毕再去执行js 代码
$(function () {
    $('div').mouseover(function () { 
        alert(11);
    });
})

// ---------- jQuery对象和DOM对象的转换 ----------
//<video src="mov.mp4" muted></video>
// 1. DOM对象转换为 jquery对象
//（1）我们直接获取视频，得到就是jQuery对象
// $('video');
//（2）我们已经使用原生js 获取过来 DOM对象
var myvideo = document.querySelector('video');
//$(myvideo).play(); jquery里面没有play 这个方法
// 2. jQuery对象转换为DOM对象
// myvideo.play();
$('video')[0].play();
$('video').get(0).play();

// ---------- jQuery事件 ----------
    // 1. 单个事件注册
    $("div").click(function () {
        $(this).css("background", "purple");
    });
    // 2. 事件处理on
    $("div").on({
        mouseenter: function() {
            $(this).css("background", "skyblue");
        },
        click: function() {
            $(this).css("background", "purple");
        }
    })
    //（2） on可以实现事件委托（委派）
    $("ul li").click();
    $("ul").on("click", "li", function () {
        alert(11);
    })//click 是绑定在ul 身上的，但是 触发的对象是 u1 里面的小li
    // (3) on可以给未来动态创建的元素绑定事件
    //$("ol 1i"）.click(function(){
    //  alert (11);
    //})
    $("ol").on("click", "li", function () {
        alert(11);
    })
    var li = $("<1i>我是后来创建的</1i>");
$("ol").append(li);
    
// ---------- 解绑事件 off ----------
$ ("p").off() // 解绑p元素所有事件处理程序
$("p").off("click")// 解绑p元素上面的点击事件 后面的 Eoo 是侦听函数名
S("u1").off("click", "1i");/// 解绑事件委托
// 2. one()但是它只能触发事件一次
$("p").one("click", function () {
    alert(11);
})

// ---------- 选择器 ----------
//名称         用法               描述
//ID选择器     $（"#id"）         获取指定ID的元素
//全选选择器    $（'*'）           匹配所有元素
//类选择器     $(".class")        获取同一类class的元素
//标签选择器    $("div")          获取同一类标签的所有元素
//并集选择器    $("div,p,li")     选取多个元素
//交集选择器    $("li.current")   交集元素
//子代选择器    $("ul>li")        使用>号，获取亲儿子层级的元素；注意，并不会获取孙子层级的元素
//后代选择器    $("ul li")        使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等

// ---------- 筛选选择器 ----------
//语法          用法              描述
//:first       $('li:first')     获取第一个li元素
//:last        $('li:last')      获取最后一个元素
//:eq(index)   $("li:eq(2)")     获取到的li元素中，选择索引号为2的元素，索引号index从0开始。
//:odd         $("li:odd")       获取到的li元素中，选择索引号为奇数的元素
//even         $("li:even")      获取到的li元素中，选择索引号为偶数的元素

// ---------- 筛选方法（重点） ----------
//语法                     用法                              说明
//parent()                $("li").parent();                 查找父级
//children(selector)      $("u1").children("li")            相当于 $(“ul>1i")，最近一级（亲儿子）
//find (selector)         $("ul").find("li");               相当于$（"ul li"），后代选择器
//siblings (selector)     $(".first").siblings("li");       查找兄弟节点，不包括自己本身
//nextAll([expr])         $(".first").nextAll()             查找当前元素之后所有的同辈元素
//prevtAll([expr])        $(".last").prevAll()              查找当前元素之前所有的同辈元素
//hasClass(class)         $('div').hasClass("protected")    检查当前的元素是否含有某个特定的类，如果有，则返回true
//eq(index)               $("1i").eq(2);                    相当于 ＄（"1i:eq（2）"），index 从0开始

// --------- 类操作 -----------
// 1. 添加类
$("div").addClass("current");
// 2. 移除类
$("div").removeClass("current");
// 3. 切换类
$("div").toggleClass("current");
// 4. 查找类
$("div").hasClass("current"); // 返回 ture false

// ---------- css样式 ----------
$("div").css("width", "300px");
$("div").css("width", 300);  //属性名一定要加引号
$("div").css({
    width: 400,
    height: 400,
    backgroundColor: "red", //如果是复合属性则必须采取驼峰命名法，如果值不是数字，则需要加引号
    "font-size": "20px"
})

// --------- 动画 -----------
// 1. 显示隐藏
show(), hide(), toggle();
//show([speed, [easing],[fn]]);
// 2. 滑动
slideDown(), slideUp(), slideToggle();
// 3. 淡入淡出
fadeln(), fadeOut(), fadeToggle(), fadeTo();
//fadeTo ([[speed],opacity,[easing],[fn]])
// 4. 自定义动画
animate();
$("button").click(function () {
    $("div").animate({
        left: 500,
        top: 300,
        opacity: .4,
        width: 500
    }, 500);
})

// ---------- 事件切换 ----------
$("nav>li").hover(function () {
    $(this).children("ul").slideToggle();
});

// ---------- 队列问题stop() ----------
$(this).children("ul").stop().slideToggle();
//（1） stop()方法用于停止动画或效果。
//（2） 注意:stop()写到动画或者效果的前面，相当于停止结束上一次的动画。

// ---------- 获取属性值 ----------
// 1. 获取自定义属性
attr("属性") // 类似原生 getAttribute()
// 2. 设置自定义属性
attr("属性”，”属性值")// 类似原生 setAttribute()
// 3. 获取固有属性
element.prop("属性名")
// 4. 设置固有属性
prop("属性”，”属性值")

// ---------- 元素内容 ----------
// 1.普通元素内容htmll（相当于原生innerHTML）
html()        // 获取元素的内容
html("内容")   //设置元素的内容
// 2.普通元素文本内容textO （相当与原生 innerText）
text()           // 获取元素的文本内容
text("文本内容")  //设置元素的文本内容
// 3.表单的值vall（相当于原生value）
console.log($("input").val());
$("input").val("123");

// ---------- 尺寸，位置 ---------- 
// 语法                                      用法
// width() / height()                       取得匹配元素宽度和高度值 只算 width / height
// innerWidth() / innerHieght()             取得匹配元素宽度和高度值包含 padding
// outerWidth() / outerHeight()             取得匹配元素宽度和高度值 包含 padding、border
// outerWidth(true) / outerHeight(true)     取得匹配元素宽度和高度值包含 padding、borde、margin
//1.以上参数沩空，则是获取相应值，返回的是数字型。
//2.如果参数 数字，则是修改相应值。
//3.参数可以不必写单位
//语法          用法
//offset()     获取设置距离文档的位置（偏移）
//position()   获取距离带有定位父级位置（偏移）如果没有带有定位的父级，则以文档为准

