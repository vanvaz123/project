// --------- DOM ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------- 获取元素 -----------------------------------------------------------------------------------------------------------------------------------------------------
//1.getElementById()
var timer = document.getElementById("time");
console.log(timer);
console.log(typeof timer);//object
console.dir(timer);//console.dir 打印我们返回的元素对象 更好的查看里面的属性和防法
//2.getElementsByTagName()
var is = document.gettlementsByTagName('li');
console.log(lis);
console.log(lis[0]);//返回的是 获取过来元素对象的集合 以伪数组的形式存储的
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

//---------- 事件 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

//---------- 操作元素 -------------------------------------------------------------------------------
// 1.获取元素
var btn = document.querySelector('button');
var div = document.querySelector('div');

// 2.注册事件
btn.onclick = function () { 
    div.innerText = '2019';
}

// 3.innerText和innerHTML的区别
var div = document.querySelector ('div');
div.innerText = '<strong>今天是:</strong>2019年';  //innerText 不识别html标签 非标准去除空格和换行    输出也是’<strong>今天是:</strong>2019年‘
div.innerHTML = '<strong>今天是：</strong>2019';  //innerHTML 识别html标签 W3C标准 保留空格和换行的     输出的是加粗的‘今天是:’

// (1).innerText,innerHTML,src,href,id,alt,title 改变元素内容
//案例:
var img = document.querySelector('img');
var div = document.queryselector('div');
//得到当前的小时数
var date = new Date();
var h = date.getHours();
//判断小时数改变图片和文字信息
if (h < 12) {
    img.src = 'images/s.gif';
    div.innerHTML = '亲，上午好，好好写代码';
} else if (h < 18) { 
    img.src='images/x.gif';
    div.innerHTML = '亲，下午好，好好写代码';
    } else {
    img.src = 'images/w.gif';
    div.innerHTML = '亲，晚上好，好好写代码';
}

// 4.表单参数修改参数 type, value, checked, selected, disabled
//1.获取元素
var btn = document.querySelector('button');
var input= document.querySelector ('input');
//2.注册事件 处理程序
btn.onclick = function () {
    input.valve = '被点击了';
    //如果想要某个表单被禁用 不能再点击 disabled
    this.disabled = true;
}
//案例1:密码框点击眼睛更改类型
var eye = document.getElementById('eye');
var pwd = document.getElementById('pwd');
var flag = 0;
eye.onclick = function () { 
    //点击之后，flag一定要有变化
    if (flag == 0) {
        pwd.type = 'text';
        eye.src = 'images/open.png';
        flag = 1;
    } else { 
        pwd.type = 'password';
        eye.src = 'images/close.png';
        flag = 0;
    }
}

// 5.元素改样式
//用于样式比较少  div.style里面的属性 采取驼峰命名法  
div.style.backgroundColor = 'red';
div.style.width = '250px';
//用于样式比较多  
div.className = 'frist change'; //如果想要保留原先的类名，我们可以这么做 多类名选择器
//案例1:精灵图
var lis = document.querySelectorAll('li');
for (var i = 0; i < lis.length; i++) { 
    //让素引号 乘以 44 就是每个1i 的背景y坐标 index就是我们的y坐标
    var index = i * 44;
    lis[i].style.backgroundposition = '0 -' + index + 'px'; 
}
//案例2:输入框点击消失文字
var text = document.querySelector('input');
text.onfocus = function () { 
    if (this.value === '手机') { 
        this.value = '';
    }
    this.style.color = '#333';
}
text.onblur = function () { 
    if (this.value === '') { 
        this.value = '手机';
    }
    this.style.color = '#999';
}


//---------- 标签tab切换 -----------

/* <style>
.current{
    background: red;
}

.item{
    display: none
}
</style>
<div class="tab">
    <div class="tab_list">
        <ul>
            <li class="current">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
    <div class="tab_con">
        <div class="item" style="display: block;">11</div>
        <div class="item">22</div>
        <div class="item">33</div>
        <div class="item">44</div>
        <div class="item">55</div>
    </div>
</div> */

// ---------- 属性值 ----------
// <div getTime="20" data-inedx="1" data-list-name="andy"></div>
var div = document.querySelector('div');
//获得元素属性  console.log(div.getTime)
console.log(div.getAttribute('getTime'));//-------------------------------
console.log(div.getAttribute('data-inedx'));
console.log(div.getAttribute('data-list-name'));
//设置元素属性
div.setAttribute('data-index', 20);//-------------------------------------
console.log(div.getAttribute('id'));
div.id = 'test';
div.className ='navs';
//h5新增的获取自定义属性的方法
//dataset 是一个集合里面存放了所有以data开头的自定义属性
console.log(div.dataset);
console.log(div.dataset.index);
console.log(div.dataset['index']);
// 如果自定义属性里面有多个-链接的单词，我们获取的时候采取 驼峰命名法
console.log(div.dataset.listName);
console.log(div.dataset['listName']);

// 获取元素
var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('li');
var items = document.querySelectorAll('.item');
// for循坏绑定点击事件
for (var i = 0; i < lis.length; i++) {
    //开始给5个小li 设置索引号
    lis[i].setAttribute('data-index',i);
    lis[i].onclick = function () { 
        // 1.上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式
       
        //干掉所有人 其余的1i清除 Class 这个类
        for (var i = 0; i < lis.length; i++) { 
            lis[i].className = '';
        }
        //留下我自己
        this.className = 'current';

        // 2.下面的显示内容模块
        var index = this.getAttribute('data-index');
        console.log(index);
        //干掉所有人 让所有items隐藏
        for (i = 0; i < lis.length; i++) { 
            items[i].style.display = 'none';
            
        }
        //留下我自己 让相应的items显示出来
        items[index].style.display='block';

    }
}

// ---------- 节点 ----------
//<div class="demo">
    //<div class="box">
        //<span class="erweima">x</span>
    //</div>
//</div>
//元素节点nodeType为1   属性节点nodeType为2   文本节点nodeType为3（文本节点包含文字、空格、换行等）

//1.父节点
var erweima = document.querySelector('.erweima');
console.log(erweima.parentNode);//得到的是离元素最近的父级节点 //<div class="box"><span class="erweima">x</span></div>

//2.子节点
//子节点 childNodes 所有的子节点 包含 元素节点 文本节点等等
var ul = document.querySelector('ul');
var lis = ul.querySelectorAll('li');
console.log(ul.childNodes);
console.log(ul.childNodes[0].nodeType);
console.log(ul.childNodes[1].nodeType);
//children 获取所有的子元素节点 也是我们实际开发常用的 ----------------------------
console.log(ul.children);
//(1) firstChild 第一个子节点 不管是文本节点还是元素节点
console.log(ul.firstChild); //一堆详细信息
console.log(ul.lastChild);
//(2) firstElementChild 返回第一个子元素节点
console.log(ul.firstElementChild);//返回html信息
//(3) 实际开发的写法 既没有兼容性问题又返回第一个子元素 ----------------------------
console.log(ul.children[0]);
console.log(ul.children[ul.children.length - 1]);
//案例 多个导航下拉
var nav = document. querySelector('.nav');
var lis = nav.children;
for (var i = 0; i < lis.length; i++) { 
    lis[i].onmouseover = function () {
        this.children[1].style.display = 'block';
    }
    lis[i].onmouseout = function () {
        this.children[1].style.display = 'none';
    }
}

//3.兄弟节点
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

//案例:所有节点功能案例：成绩表格
var datas = [{
    name: '魏璎珞',
    subject: 'JavaScript',
    score: 100
}, {
    name: '弘历',
    subject: 'JavaScript',
    score: 98
}, {
    name: '傅恒',
    subject: 'JavaScript',
    score: 99
}, {
    name: '明玉',
    subject: 'JavaScript',
    score: 88
}];
var tbody = document.querySelector('tbody');
for (var i = 0; i < datas.length; i++){ // 外面的for循坏管行 tr
    // 1. 创建 tr行
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    // 2. 行里面创建单元格（跟数据有关系的3个单元格）td 单元格的数量取决于每个对象里面的属性个数
    for (var k in datas[i]) { // 里面的for循环管列 td
        // 创建单元格
        var td = document.createElement('td');
        // 把对象里面的属性值 datas［i］［k］给 td
        // console.1og（datas［i］［k］）；
        td.innerHTML = datas[i][k];
        tr.appendChild(td);
    }
    // 3. 创建有删除2个字的单元格
    var td = document.createElement('td');
    td.innerHTML = '<a href="javascript:;">#f* </a>';
    tr.appendChild(td);
}
// 4. 删除操作 开始
var as = document.querySelectorA11('a');
for (var i = 0; i < as.length; i++) { 
    as[i].onclick = function () {
        tbody.removeChild(this.parentNode.parentNode);
    }
}

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

// ---------- 监听器(事件处理程序) ----------------------------------------------------------------------------------------------------
var bts = document.querySelectorAll('button');
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

//3.捕获
//JS 代码中只能执行捕获或者冒泡其中的一个阶段。
//onclick 和 attachEvent（ie）只能得到冒泡阶段。
//捕获阶段 如果addEventListener 第三个参数是 true 那么则处于捕获阶段 document -> html -> body -› father -> son
var son = document.queryselector('.son');
son.addEventListener('click', function () {
    alert('son');
}, true);

//4.冒泡（常用）
//冒泡阶段 如果addEventListener 第三个参数是 false 或者 省略 那么则处于冒泡阶段 son -> father -›body -> html -> document
var son = document.querySelector('.son');
son.addEventListener('click', function () { 
    alert('son');
},false)
document.addEventListener ('click', function() {
    alert('document');
})

// ---------- 事件对象（重点） ---------------------------------------------------------------------------------------------------------------------------------------
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

// 1.常见事件对象的属性和方法
// e.target 返回的是触发事件的对象（元素） this 返回的是绑定事件的对象（元素）
// 区别：e.target 点击了那个元素，就返回那个元素 this 那个元素绑定了这个点击事件，那么就返回谁
var div = document.querySelector('div');
div.addEventListener('click', function (e) {
    console.log(e.target);
    console.log(this);
})
var ul = document.querySelector('ul');
ul.addEventListener('click', function (e) { 
    // 我们给u1 绑定了事件 那么this 就指向ul
    console.log(this);
    // e.target 指向我们点击的那个对象 谁触发了这个事件 我们点击的是li e.target指向的就是1i
    console.log(e.target);
})

// 2.返回事件类型
var div = document.querySelector ('div');
div.addEventListener('click', fn);
div.addEventListener('mouseover', fn);
div.addEventListener('mouseout', fn);
function fn(e) {
    console.log(e.type);
}

// 3.阻止默认行为（事件）让链接不跳转 或者让提交按钮不提交
var a = document.querySelector('a');
a.addEventListener('click', function (e) { 
    e.preventDefault();// dom 标准写法
})
    //传统的注册方式
a.onclick = function(e){
    // 普通浏览器 e.preventDefault（）；方法
    // e. preventDefault();
    // 低版本浏览器 ie678 returnValue 属性
    // e. returnValue;
    // 我们可以利用return false 也能阻止默认行为 没有兼容性问题 特点：return 后面的代码不执行了，而且只限于传统的注册方式
    return false;
    alert(11);
}

// 4.阻止冒泡 dom 推荐的标准 stopPropagation（）
var son = document.querySelector('.son');
son.addEventListener('click', function (e) { 
    alert('son');
    e.stopPropagation(); // stop 停止 Propagation 传播
    e. cancelBubble = true; // 非标准 cancel 取消 bubble 泡泡
}, false)

// 案例1：事件委托的核心原理：给父节点添加侦听器，利用事件冒泡影响每一个子节点
var ul = document.querySelector('ul');
ul.addEventListener('click', function (e) { 
    // alert（'知否知否，点我应有弹框在手！'）;
    // e.target 这个可以得到我们点击的对象
    e.target.style.backgroundColor = 'pink';
})
//案例2:contextmenu 我们可以禁用右键菜单
document.addEventListener('contextmenu', function (e) { 
    e.preventDefault();
})

// ---------- 鼠标事件对象 ----------
//e.clientX   返回鼠标相对于浏览器窗口可视区的 X坐标
//e.clientY   返回鼠标相对于浏览器窗口可视区的Y坐标
//e.pageX     返回鼠标相对于文档页面的X坐标 IE9+支持
//e.pageY     返回鼠标相对于文档页面的Y坐标 IE9+支持
//e.screenx   返回鼠标相对于电脑屏幕的 X坐标
//e.screenY   返回鼠标相对于电脑屏幕的Y坐标

//1.鼠标事件对象 MouseEvent
document.addEventListener('click', function (e) { 
    // 1. client 鼠标在可视区的x和y坐标
    console.log(e.clientX);
    console.log(e.clientY);
    //2. page 鼠标在页面文档的x和y坐标
    console.log(e.pageX);
    console.log(e - pageY);
    //3. screen 鼠标在电脑屏幕的x和y坐标
    console.log(e.screenx);
    console.log(e.screenY);
})
//案例:mousemove案例
var pic = document.querySelector('img');
document.addEventListener('mousemove', function (e) {
    // 1. mousemove只要我们鼠标移动1px 就会触发这个事件
    // 2.核心原理：每次鼠标移动，我们都会获得最新的鼠标坐标，把这个x和y坐标做为图片的top和left 值就可以移动图片
    var x = e.pageX;
    var y = e.pageY;
    pic.style.left = x + 'px';
    pic.style.top = y + 'px';
}) 

// ---------- 键盘事件 ----------
//onkeyup     某个键盘按键被松开时触发
//onkeydown   某个键盘按键被按下时触发
//onkeypress  某个键盘按键被按下时触发 但是它不识别功能键 比如 ctrl shift 箭头等
//ps:如果使用addEventListener 不需要加 on
//onkeypress和前面2个的区别是，它不识别功能键，比如左右箭头，shift等。
//三个事件的执行顺序是：keydown -- keypress -- keyup

//keyup 按键弹起的时候触发
document.onkeyup = function () {
    console.log('我弹起了');
}
document.addEventListener('keyup', function () { 
    console.log('我弹起了');
})

//键盘事件对象中的keyCode属性可以得到相应键的ASCII码值
//我们的keyup 和keydown事件不区分字母大小写 a 和 A 得到的都是65
//我们的keypress 事件 区分字母大小写 a 97 和 A 得到的是65
document.addEventListener('keyup', function (e) { 
    // console.log(e);
    console.log('up: ' + e.keyCode);
    // 我们可以利用keycode返回的ASCII码值来判断用户按下了那个键
    if (e.keyCode === 65) {
        alert('您按下的a键');
    } else { 
        alert('您没有按下a键');
    }
})
//案例1:核心思路：检测用户是否按下了s键，如果按下s键，就把光标定位到搜索框里面
//使用键盘事件对象里面的keyCode 判断用户按下的是否是s键
// 搜索框获得焦点：使用 js 里面的 focus（）方法
var search = document.querySelector('input');
document.addEventListener('keyup', function (e) { 
    // console.log(e.keyCode) ;
    if (e.keycode === 83) { 
        search.focus();
    }
})
//案例2:快递单号输入内容时， 上面的大号字体盒子（con）显示（这里面的字号更大）
//表单检测用户输入：给表单添加键盘事
//同时把快递单号里面的值（value）获取过来赋值给 con盒子（innerText）做为内容
//如果快递单号里面内容为空，则隐藏大号字体盒子（con）盒子
var con = document.querySflector('.con');//放大的盒子
var jd_input = document.querySelector('.jd');//输入框
jd_input.addEventListener('keyup', function () { 
    if (this.value == '') {
        con.style.display = 'none';
    } else { 
        con.style.display = 'block';
        con.innerText = this.value;
    }
})
//当我们失去焦点，就隐藏这个con盒子
jd_input.addEventListener('blur', function () { 
    con.style.display = 'none';
})
//当我们获得焦点，就显示这个con盒子
jd_input.addEventListener('blur', function () { 
    if (this.value !== ' aaaaaaaaaaa') {}
})





// ---------- animate.js ---------------------------------------
//缓动动画函数封装obj目标对象 target 目标位置
//1. 让盒子每次移动的距离慢慢变小，速度就会慢慢落下来。
//2. 核心算法：（目标值-现在的位置）/10 做为每次移动的距离 步长
//3.停止的条件是：让当前盒子位置等于目标位置就停止定时器
function animate(obj, target) { 
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        var step = (target - obj.offsetLeft) / 10;
        if (obj.offsetLeft >= target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式:（目标值 -现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}





// ----------- 轮播图 ----------------------------------------
window.addEventListener('load', function () { 
    //鼠标移入移出，左右箭头变化
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function () { 
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () { 
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = this.setInterval(function () {
            arrow_r.click();
        }, 2000);
    })
    //动态生成小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) { 
        var li = document.createElement('li');
        //自定义属性
        li.setAttribute('index', i);
        //添加小圆圈
        ol.appendChild(li);
        //小圆圈点击，排他思想
        li.addEventListener('click', function () { 
            for (var i = 0; i < ol.children.length; i++) { 
                ol.children[i].className = '';
            }
            this.className = 'current';
            //点击小圆点，移动图片
            var index = this.getAttribute('index');
            num = index;
            circle = index; 
            // animate(obj,target,callback);
            animate(ul,-index.focusWidth);
        })
    }
    ol.children[0].className = 'current'; 
    //点击箭头，滚动图片
    //<a href="JavaScript:;"></a>
    var frist = ul.children[0].cloneNode(true);
    ul.appendChild(frist);
    var num = 0;
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function () { 
        if (flag) { 
            flag = false;//关闭节流阀
            //如果走到了最后复制的一张图片，此时 我们的u1 要快速复原 left 改为0
            if (num == ul.children.length - 1) { 
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () { 
                flag = true; //打开节流阀
            });
            circle++;
            if (circle == ol.children.length) { 
                circle = 0;
            }
            circleChange();
        }
    })
    arrow_l.addEventListener('click', function () { 
        //如果走到了最后复制的一张图片，此时 我们的u1 要快速复原 left 改为0
        if (flag) { 
            flag = false;
            if (num == ul.children.length - 1) { 
                num = ul.children.length-1;
                ul.style.left = -num*focusWidth+'px';
                
            }
            num--;
            animate(ul, -num * focusWidth, function () { 
                flag = true;
            });
            circle--;
            if (circle == 0) { 
                circle = ol.children.length-1;
            }
            circleChange();
        }
    })

    function circleChange() { 
        for (var i = 0; i <= ol.children.length; i++) { 
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current'; 
    }

    //定时器
    var timer = this.setInterval(function () {
        arrow_r.click();
    }, 2000);
})


// --------- BOM -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------- 窗口加载事件 ----------
window.onload = function () {} //只能写一次
window.addEventListener('load', function () { }) //没有限制
document.addEventListener('DOMContentLoaded', function () { }) //如果页面的图片很多的话，从用户访问到onload触发可能需要较长的时间，交互效果就不能实现，必然景响用户的体验，此时用DOMContentLoaded事件比较合适。
// load 等页面内容全部加载完毕，包含页面dom元素 图片 flash css 等等
// DOMContentLoaded 是DOM 加载完毕，不包含图片 falsh css 等就可以执行 加载速度比 1oad更快一些

//调整窗口大小
window.onresize = function () { } 
window.addEventListener("resize", function () { });
//window.innerWidth 当前屏幕的宽度

// ---------- 窗定时器 setTimeout ----------
// setTimeout(function () {
//     console.log('时间到了');
// }, 2000);

function callback() {
    console.log('爆炸了');
}
var timer1 = setTimeout(callback, 3000);
var timer2 = setTimeout(callback, 5000);

//停止定时器
var timer = setTimeout(function () {
    console.log('爆炸了');
}, 5000);
btn.addEventListener('click', function () { 
    clearTimeout (timer) ;
})

//定时器setInterval
setInterval(function () { 
    console.log('爆炸了');
}, 1000)
//setTimeout 延时时间到了，就去调用这个回调函数，只调用一次 就结束了这个定时器
//setInterval 每隔这个延时时间，就去调用这个回调函数，会调用很多次，重复调用这个函数
//停止setInterval定时器
var begin = document.querySelector('.begin');
var stop = document.querySelector('.stop');
var Eimer = null; // 全局变量 nu11是一个空对象
begin.addEventListener('click', function () { 
    timer = setInterval(function () { 
        console.log('ni hao ma');
    },1000)
})
stop.addEventListener('click', function () { 
    clearInterval(timer);
})
//案例:发送验证码
var btn = document.queryselector('button');
var time = 3; // 定义剩下的秒数
btn.addEventListener('click', function () {
    btn.disabled = true;
    var timer = setInterval(function () {
        if (time == 0) {
            // 清除定时器和复原按钮
            clearInterval(timer);
            btn.disabled = false;
            btn.innerHTML = '发送';
            time = 3;// 这个3需要从新开始
        } else {
            btn.innerHTML = '还剩下' + time +'秒';
            time--;
        }
    })
}, 1000)

// ---------- location ----------
//location对象
//location.href       获取或者设置 整个URL               ----- 常用
//location.search     返回参数                          ----- 常用
//location.host       返回主机（域名） www.itheima.com
//location.port       返回端口号 如果未写返回 空字符串
//location.pathname   返回路径
//location. hash      返回片段 #后面内容 常见于链接 锚点
//案例1:5秒返回首页
var timer = 5;
setInterval(function () { 
    if (timer == 0) {
        location.href = 'http://www.itcast.cn';
    } else { 
        div.innerHTML = '您将在' + timer + '秒钟之后跳转到首页';
        timer--;
    }
})//刷新先出现空白的办法，把if放到函数里，赋值后面先放函数
//案例2:serch
console.log(location.search); // ?uname=andy
//1.先去掉？
var params = location.search.substr(1); // uname=andy
// 2. 利用=把字符串分割为数组 split（'='）；
var arr = params.split('=');//["uname", "ANDY"]
var div = document.querySelector('div');
// 3.把数据写入div中
div.innerHTML = arr[1];

//location对象方法        返回值
//location.assign()      跟 href一样，可以跳转页面（也称力重定向页面）
//location.replace()     替换当前页面，因为不记录历史，所以不能后退页面
//location.reload()      重新加载页面，相当于刷新按钮或者 f5 如果参数为true 强制刷新 ctrl+f5     ---常用
//案例
var btn = document.querySelector('button');
btn.addEventListener('click', function () { 
    // 记录浏览历史，所以可以实现后退功能
    // location.assign ( 'http://www.itcast.cn');
    // 不记录浏览历史，所以不可以实现后退功能
    // location.replace ('http://www.itcast.cn');
    location.reload (true);
})

// ---------- navigator ----------
// if ((navigator.userAgent.match (/ (phone/pad|pod|iPhone|iPod|ios| iPad|Android| Mobile | BlackBerry| IEMobile |MQQBrowser | JUC | Fennec | wOSBrowser | BrowserNG | Webos | Symbian | Windows Phone) / i))) {
// window.location.href = "";//手机
// } else {
// window.location.href = "";//电脑
// }

// ---------- history ----------
// history对象方法         作用
// back()                 可以后退功能
// forward()              前进功能
// go（参数）              前进后退功能 参数如果是1前进1个页面如果是-1后退1个页面
btn.addEventListener('click', function() {
    // history.back;
    history-go(-1) ;
})

// ---------- offset特效 ----------
//offset系列属性              作用
//element.offsetParent      返回作为该元素带有定位的父级元素 如果父级都没有定位则返回body
//element.offsetTop         返回元素相对带有定位父元素上方的偏移
//element.offsetLeft        返回元素相对带有定位父元素左边框的偏移
//element.offsetWidth       返回自身包括padding、边框、内容区的宽度，返回数值不带单位
//element.offsetHeight      返回自身包括padding、边框、内容区的高度，返回数值不带单位
// 1.可以得到元素的偏移 位置 返回的不带单位的数值
console.log(father.offsetTop);
console.log(father.offsetLeft);
// 它以带有定位的父亲为准 如果么有父亲或者父亲没有定位 则以 body 为准console.log（son.offsetLeft）；
console.log(son.offsetLeft);
var w = document.querySelector('.w');
// 2. 可以得到元素的大小 宽度和高度 是包含padding + border + width
console.log(w.offsetWidth);
console.log(w.offsetHeight);
// 3. 返回带有定位的父亲 否则返回的是body
console.log(son.offsetParent);
console.log(son.parentNode);// 返回父亲 是最近一级的父亲 亲爸爸 不管父亲有没有定位
//offset                                     style
//offset 可以得到任意样式表中的样式值             style 只能得到行内样式表中的样式值
//offset 系列获得的数值是没有单位                style.width 获得的是带有单位的字符串
//offsetWidth @@padding+border+width         style.width获得不包含padding和border的值
//offsetWidth 等属性是只读属性，只能获取不能赋值   style.width 是可读写属性，可以获取也可以赋
//所以，我们想要获取元素大小位置，用offset更合适    所以，我们想要给元素更改值，则需要用style改变
//案例1:
var box = document.querySelector('.box');
box.addEventListener('mousemove', function (e) {
    // console.log(e.pageX);
    // console.log（e.pagev);
    // console.log(box.offsetLeft);
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    this.innerHTML = 'x坐标是' + x + 'y坐标是' + y;
})
//案例2：鼠标拖拽跟随移动
//（1）当我们鼠标按下，就获得鼠标在盒子内的坐标
title.addEventListener('mousedown', function (e) {
    var x = e.pagex - login.offsetLeft;
    var y = e.pageY - login.offsetTop;
//（2） 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
document.addEventListener('mousemove', move)
    function move(e) {
        login.style.left = e.pagex - x + 'px';
        login.style.top = e.pagey - y + 'px';
    }
    //（3）鼠标弹起，就让鼠标移动事件移除
    document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', move);
    })
})
//案例3：京东产品图放大，鼠标跟随
window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    //1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener ('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function (e) {
        //（1）先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x, y) ;
        // （2）减去盒子高度 300的一半 是 150 就是我们mask 的最终left 和top值了
        // （3） 我们mask 移动的距
        var maskX = x - mask.offsetWidth / 2;
        var masky = y - mask.offsetHeight / 2;
        // （4） 如果x 坐标小于了e 就让他停在0 的位置
        if (maskX <= 0) {
            maskx = 0;
        } else if (maskX >= preview_img.offsetWidth - mask.offsetWidth) {
            maskX = preview_img.offsetWidth - mask.offsetWidth;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= preview_img.offsetHeight - mask.offsetHeight) {
            maskY = preview_img.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskx + 'px';
        mask.style.top = maskY + 'px';
        //3. 大图片的移动距离= 遮挡层移动距离*大图片最大移动距离 / 遮挡层的最大移动距离
        // 大图
        var bigIMg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigMax = bigIMg.offsetwidth - big.offsetwidth;
        // 大图片的移动距离 X Y
        var bigx = maskx * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigx + 'px';
        bigIMg.style.top = -bigY + 'px';
    })
})

// ---------- Client 客户端可视区 ----------
//client系列属性          作用
//element.clientTop      返回元素上边框的大小
//element.clientLeft     返回元素左边框的大小
//element.clientWidth    返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位
//element.clientHeight   返回自身包括padding、内容区的高度，不含边框，返回数值不带单位

// ----------  立即执行函数 ----------
//1.立即执行函数：不需要调用，立马能够自己执行的函数
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

// ---------- scroll ----------
//scroll系列属性          作用
//element.scrollTop      返回被卷去的上侧距离，返回数值不带单位
//element.scrollLeft     返回被卷去的左侧距离，返回数值不带单位
//element.scrollWidth    返回自身实际的宽度，不含边框，返回数值不带单位
//element.scrollHeight   返回自身实际的高度，不含边框，返回数值不带单位
//案例：滚动，侧边栏固定
//1．获取元素
var sliderbar = document.querySelector('.slider-bar');
var banner = document.querySelector('banner');
// banner.offestTop 就是被卷去头部的大小 一定要写到滚动的外面
var bannerTop = banner.offsetTop
// 当我们侧边栏固定定位之后应该变化的数值
var sliderbarTop = sliderbar.offsetTop - bannerTop;
//2. 页面滚动事件 scro11
document.addEventListener('scroll', function () { 
    // console.log(11);
    // window.pageYoffset 页面被卷去的头部
    // console.log(window.pageYOffset);
    // 3.当我们页面被卷去的头部大于等于了 172 此时 侧边栏就要改为固定定位
    if (window.pageYOffset >= bannerTop) {
        sliderbar.style.position = 'fixed';
        sliderbar.style.top = sliderbarTop + 'px';
    } else {
        sliderbar.style.position = 'absolute';
        sliderbar.style.top = '300px';
    }
    //4. 当我们页面滚动到main盒子，就显示 goback模块
    if (window.pagevoffset >= mainTop) {
        goBack.style.display = 'block';
    } else {
        goBack.style.display = 'none';
    }
})

// ---------- 动画 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------- 基本原理 ----------
// 1. 获得盒子当前位置
// 2. 让盒子在当前位置加上1个移动距离
// 3. 利用定时器不断重复这个操作
// 4. 加一个结束定时器的条件
// 5. 注意此元素需要添加定位，才能使用element.style.left
var timer = setInterval(function() {
    if (div.offsetLeft >= 400) {
        // 停止动画 本质是停止定时器
        clearInterval(timer);
    }
    div.style.left = div.offsetLeft + 1 + 'px';
}, 30) 
// ----------  封装函数 ----------
// 简单动画函数封装obj目标对象 target 目标位置
function animate(obj, target) { 
    var timer = setInterval(function () {
        if (obj.offsetLeft >= target) {
            // 停止动画 本质是停止定时器
            clearInterval(timer);
        }
        },30);
        obj.style.left = obj.offsetLeft + 1 + 'px';
}
animate(div, 300);
// ---------- 不同元素添加不同定时器 ----------
function animate(obj, target) {
    // 当我们不断的点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
    // 解决方案就是 让我们元素只有一个定时器执行
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);  // ---- 重点
    obj.timer = setInterval(function () {
        if (obj.offsetLeft >= target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft + 1 + 'px';
    }, 30);
}
var div = document.querySelector ('div');
var span = document.querySelector('span');
var btn = document. querySelector ('button');
// 调用函数
animate(div, 300);
btn. addEventListener ('click', function() {
        animate(span, 200);
})
// ---------- 缓动动画 ----------
// 1. 让盒子每次移动的距离慢慢变小，速度就会慢慢落下来。
// 2. 核心算法：（目标值-现在的位置）/10 做为每次移动的距离 步长
// 3.停止的条件是：让当前盒子位置等于目标位置就停止定时器
function animate(obj, target, callback) {
    // console.log(callback); caliback = function(){} 调用的时候 callback()
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math. ceil((target - obi.offsetleft) / 10)
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            if (callback) {
                // 调用函数
                callback();
            }
        }
        // 把每次加工这个步长值改为一个慢慢变小的值 步长公式：（目标值 -现在的位置）/10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}
var span = document.querySelector ('span');
var btn500 = document.querySelector('.btn500');
var btn800 = document.querySelector('.btn800');
// ---------- 回调函数 ----------
btn500.addEventListener('click', function(){
    // 调用函数
    animate(span, 500);
})
btn800.addEventListener('click', function () {
    //调用函数
    animate(span, 880, function () { });
})
// 匀速动画 就是 盒子是当前的位置＋固定的值 20
// 缓动动画就是 盒子当前的位置 +变化的值（目标值 - 现在的位置）

//案例1
// 当我们鼠标经过 sliderbar 就会让 con这个盒子滑动到左侧
// 当我们鼠标离开 sliderbar 就会让 con这个盒子滑动到右侧
sliderbar.addEventListener('mouseenter', function() {
    // animate(obj, target, callback);
    animate(con, -160, function() {
    // 当我们动画执行完毕，就把←改为→
    sliderbar.children[0].innerHTML = '→';
    });
})
sliderbar.addEventListener('mouseleave', function () {
    // animate(obj, target, callback);
    animate(con, 0, function () {
        sliderbar.children[0].innerHTML = '←';
    });
})

//案例2:返回顶部
goBack.addEventListener('click', function () {
    // 里面的x和y 不跟单位的 直接写数字即可
    // window.scroll(0, 0);
    // 因为是窗口滚动 所以对象是window
    animate(window, 0);
});
function animate(obj, target, callback) {
    // console.log(callback); caliback = function(){} 调用的时候 callback()
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math. ceil((target - obi.offsetleft) / 10)
        var step = (target - window.paggYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.paggYOffset == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加工这个步长值改为一个慢慢变小的值 步长公式：（目标值 -现在的位置）/10
        // obj. style.left = window.pageYOffset + step + 'px';
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}

//案例3:筋斗云 
window.addEventListener('load', function () { 
    // 1. 获取元素
    var cloud = document. querySelector('.cloud');
    var c_nav = document. querySelector('.c-nav');
    var lis = c_nav.querySelectorAll('li');
    // 2.给所有的小li绑定事件
    // 这个current 做为筋斗云的起始位置
    var current = 0;
    for (var i = 0; i < lis.length; i++) {
        //（1）鼠标经过把当前小1i 的位置做为目标值
        lis[i].addEventListener('mouseenter', function () {
            animate(cloud, this.offsetLeft);
        });
        // （2）鼠标离开就回到起始的位置
        lis[i].addEventListener('mouseleave', function () {
            animate(cloud, current);
        });
        // （3）当我们鼠标点击，就把当前位置做为目标值
        lis[i].addEventListener('click', function () {
            current = this.offsetLeft;
        });
    }
})

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

var startX = 0; //获取手指
var starty = 0;
var x = 0;//获得盒子原来的位置
var y = 0;
div.addEventListener('touchstart', function(e) {
    // 获取手指初始坐标
    startX = e.targetTouches[0].pagex;
    startY = e.targetTouches[0].pageY;
    x = this.offsetLeft;
    y = this.offsetTop;
});
div.addEventListener('touchmove', function (e) {
    // 计算手指的移动距离：手指移动之后的坐标减去手指初始的坐标
    var movex = e.targetTouches[0].pageX - startX;
    var moveY = e.targetTouches[0].pageY - startY;
    // 移动我们的盒子 盒子原来的位置 + 手指移动的距离
    this.style.left = x + movex + 'px';
    this.style.top = y + movey + 'px';
    e.preventDefault();// 阻止屏幕滚动的默认行为
});

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

// ----------  移动端轮播图 ----------
// 1. 狭取元素
var focus = document.querySelector ('.focus');
var ul = focus.children[0];
// 获得focus 的宽度 
var w = focus.offsetWidth;
// 2. 利用定时器自动轮播图图片
var index = 0;
var timer = setInterval(function () {
    index++;
    var translatex = -index * w;
    ul.style.transition = 'all .3s';
    ul.style.transform = 'translateX(' + translatex + 'px)';
}, 2000);
ul.addEventListener('transitionend', function () {
    // 无缝滚动
    if (index >= 3) {
        index = 0;
        // console.log(index);
        // 去掉过渡效果 这样让我们的u1 快速的跳到目标位置
        ul.style.transition = 'none';
        // 利用最新的索引号乘以宽度 去滚动图片
        var translatex = -index * w;
        ul.style.transform = 'translateX(' + translatex + 'px)';
    } else if (index < 0) {
        index = 2;
        ul.style.transition = 'none';
        // 利用最新的索引号乘以宽度 去滚动图片
        var translatex = -index * w;
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }
    // 3.小圆点跟随变化
    // 把ol里面1i带有current类名的选出来去掉类名remove
    ol.querySelector('.current').classList.remove('current');
    // 让当前索引号 的小1i 加上 current add
    ol.children[index].classList.add('current');
});
// 触摸元素 touchstart：
获取手指初始坐标
var start = 0;
var movex = 0;// 后面我们会使用这个移动距离所以要定义一个全局变量
var flag = false;
ul.addEventListener('touchstart', function (e) {
    startX = e.targetTouches[0].pageX;
    // 手指触摸的时
    clearInterval(timer);
});
// 移动手指 touchmove: 计算手指的滑动距离，并且移动盒子
u1.addEventListener('touchmove', function (e) {
    // 计算移动距离
    moveX = e.targetTouches[0] - pageX - startX;
    // 移动盒子： 盒子原来的位置 + 手指移动的距离
    var translatex = -index * w + movex;
    // 手指拖动的时候，不需要动画效果所以要取消过渡效果
    ul.style.transition = 'none';
    ul.style.transform = 'translateX(' + translatex + 'px)';
    flag = true; // 如果用户手指移动过我们再去判断否则不做判断效果
    e.preventDefault();// 阻止滚动屏幕的行为
});
// 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
ul.addEventListener('touchend', function (e) {
    if (flag) {
        // （1） 如果移动距离大于50像素我们就播放上一张或者下一张
        if (Math.abs(moveX) > 50) {
            // 如果是右滑就是 播放上一张 movex 是正值
            if (moveX > 0) {
                index--;
            } else {
                // 如果是左滑就是 播放下一张 movex 是负值
                index++;
            }
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
    }
    // 手指离开的时候就重新开启定时器
    clearInterval(timer);
    timer = setInterval(function () {
        index++;
        var translatex = -index * w;
        ul.style.transition = 'all 3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
})

// ---------- 返回顶部 ----------
var goBack = document.querySelector ('.goBack');
var nav = document.querySelector ('nav');
window.addEventListener ('scroll', function() {
    if (window.pageYOffset >= nav.offsetTop) {
        goBack.style.display = 'block';
    } else {
        goBack.style.display = 'none';
    }
}) ;
goBack.addEventListener ('click', function() {
    window. scroll(0, 0);
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

// ---------- 本地存储 ----------
// ----- sessionStorage 储存空间小，关闭浏览器就不储存了
//存储数据：sessionStorage.setltem(key, value)
//获取数据：sessionStorage.getltem(key)
//删除数据：sessionStorage.removeltem(key)
//删除所有数据：sessionStorage.clear)

// ----- localstorage 储存空间大，永久储存，除非明确删除，属性同sessionStorage

var ipt = document.querySelector ('input');
var set = document.querySelector('.set');
var get = document.querySelector('.get');
var remove = document.querySelector('.remove')
set.addEventListener('click', function() {
    // 当我们点击了之后，就可以把表单里面的值存储起来
    var val = ipt.value;
    sessionstorage.setItem('uname', val);
}) ;
get.addEventListener('click', function () {
    // 当我们点击了之后，就可以把表单里面的值获取过来
    console.log(sessionStorage.getItem('uname'));
})
remove.addEventListener ('click', function() {
    sessionStorage.removeItem('uname');
}) ;
del. addEventListener('click', function() {
    // 当我们点击了之后，清除所有的
sessionStorage.clear();
});

//案例：记住用户名
var username = document. querySelector ('#username' );
var remember = document. querySelector ('#remember');
if (localStorage.getItem('username')) {
    username.value = localStorage.getItem('username');
    remember.checked = true;
}
remember.addEventListener('change', function () {
    if (this.checked) {
        localStorage.setItem('username', username.value)
    } else {
        localStorage.removeItem('username');
    }
})
