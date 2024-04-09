// ---------- jQuery -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------- js插件网址 ----------
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


// ---------- 入口函数 ----------
//等着页面DOM加载完毕再去执行js 代码
$(function () {
    $('div').hide();
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

// ---------- 选择器 ----------
//名称         用法               描述
//ID选择器     $（"#id"）         获取指定ID的元素
//全选选择器    $（'*'）           匹配所有元素
//类选择器     $(".class")        获取同一类class的元素
//标签选择器    $("div")          获取同一类标签的所有元素
//并集选择器    $("div,p,li")     选取多个元素
//交集选择器    $("li.current")   交集元素
//子代选择器    $("ul>li")        使用>号，获取亲儿子层级的元素；注意，并不会获取孙子层级的元素
//后代选择器    $("ul li")        使用空格，代表后代选择器，获取uI下的所有Ii元素，包括孙子等

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
//children(selector)      $("u1").children("li")            相当于 $(“u1>1i")，最近一级（亲儿子）
//find (selector)         $("ul").find("li");               相当于$（"ul li"），后代选择器
//siblings (selector)     $(".first").siblings("li");       查找兄弟节点，不包括自己本身
//nextAll([expr])         $(".first").nextAll()             查找当前元素之后所有的同辈元素
//prevAll([expr])         $(".last").prevAll()              查找当前元素之前所有的同辈元素
//hasClass(class)         $('div').hasClass("protected")    检查当前的元素是否含有某个特定的类，如果有，则返回true
//eq(index)               $("1i").eq(2);                    相当于 ＄（"1i:eq（2）"），index 从0开始

$(function() {
    // 1. 兄弟元素siblings 除了自身元素之外的所有亲兄弟
    $("ol .item").siblings("1i").css("color", "red");
    // 2. 第n个元素
    var index = 2;
    // （1） 我们可以利用选择器的方式选择
    // $("ul li:eq(2) ").css ("color", "blue");
    // $("ul 1i:eq("+index+")").css("color","blue");
    //（2） 我们可以利用选择方法的方式选择 更推荐这种写法
    // $("ul 1i").eq(2).css("color","blue");
    $("u1 1i").eq(index).css("color", "blue");
    // 3. 判断是否有某个类名
    console.log($("div:first").hasClass("current"));
    console.log($("div:last").hasClass("cuffrent"));
});

// ---------- 隐式迭代 ----------
$(function () { 
    $("ul li").mouseover(function () { 
        var index = $(this).index();
        $("div").ed(index).show();
        $("div").eq(index).siblings().hide();
    })
})

// ---------- 链式编程 ----------
//链式编程是为了节省代码量，看起来更优雅。
$(this).css('color', 'red').sibling0.css('color', 'yellow');

// ---------- css样式 ----------
$("div").css("width", "300px");
$("div").css("width", 300);  //属性名一定要加引号
$(this).css({ "color": "white", "font-size": "20px" }); //如果是复合属性则必须采取驼峰命名法，如果值不是数字，则需要加引号
$("div").css({
    width: 400,
    height: 400,
    backgroundColor: "red"
})

// --------- 类操作 -----------
// 1. 添加类
$("div").addClass("current");
// 2. 移除类
$("div").removeClass("current");
// 3. 切换类
$("div").toggleClass("current");
// 4. 查找类
$("div").hasClass("current"); // 返回 ture false

// --------- 动画 -----------
// 1. 显示隐藏
show(), hide(), toggle();
//show([speed, [easing],[fn]]);
//（1）参数都可以省略，无动画直接显示。
//（2）speed：三种预定速度之一的字符串（“slow”，“normal”，or “fast”）或表示动画时长的毫秒数值（如：1000）。
//（3） easing：（Optional）用来指定切换效果，默认是 “swing”，可用参数 “linear”。
//（4） fn： 回调函数，在动画完成时执行的函数，每个元素执行一次。

// 2. 滑动
slideDown(), slideUp(), slideToggle();
// 3. 淡入淡出
fadeln(), fadeOut(), fadeToggle(), fadeTo();
//fadeTo ([[speed],opacity,[easing],[fn]])
//（1）opacity透明度必须写，取值0~1 之间。
//（2） speed:三种预定速度之一的字符串（“slow”, "normal"，or “fast” ）或表示动画时长的毫秒数值（如：1000）。必须写
//（3） easing:(optional)用来指定切换效果，默认是 “swing”，可用参数“linear”。
$("div").fadeIn(1000);
$("div").fadeTo(1000, 0.5);

// 4. 自定义动画
animate();
//animate(params,[speed],[easing],[fn])
//（1） params:想要更改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是复合属性则需要采取驼峰命名法borderLeft。其余参数都可以省略。
//（2） speed:三种预定速度之一的字符串（“slow”，“normal"，or "fast”）或表示动画时长的毫秒数值（如：1000）。
//（3） easing:(Optional)用来指定切换效果，默认是 “swing”，可用参数 “linear”。
//（4） fn:回调函数，在动画完成时执行的函数，每个元素执行一次。
$(function () {
    $("button").click(function () {
        $("div").animate({
            left: 500,
            top: 300,
            opacity: .4,
            width: 500
        }, 500);
    })
})
//案例:王者荣耀手风琴
$(function () { 
    $(".king li").mouseenter(function () { 
        // 1.当前小li 宽度变为 224px，同时里面的小图片淡出，大图片淡入
        $(this).stop().animatel({
            width: 224
        }).find(".small").stop().fadeOut().siblings(".big").stop().fadeIn();
        // 2.其余兄弟小li 宽度变为69px，小图片淡入，大图片淡出
        $(this).siblings("li").stop().animate({
            width: 69
        }).find(".small").stop().fadeIn().siblings(".big").stop().fadeOut();
    })
})

// ---------- 事件切换 ----------
//事件切换 hover 就是鼠标经过和离开的复合写法
//$(".nav>1i").hover(function(){
//  $(this).children("ul").slideDown(200);
//}, function(){
//    $(this).children("ul").slideUp(200);
//});
// 事件切换 hover 如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数
$("nav>li").hover(function () {
    $(this).children("ul").slideToggle();
});

// ---------- 队列问题 ----------
//（1） stop()方法用于停止动画或效果。
//（2） 注意:stop()写到动画或者效果的前面，相当于停止结束上一次的动画。
$("nav>li").hover(function () {
    $(this).children("ul").stop().slideToggle();
});

// ---------- 获取属性值 ----------
// 1. 获取自定义属性
attr("属性") // 类似原生 getAttribute()
// 2. 设置自定义属性
attr("属性”，”属性值")// 类似原生 setAttribute()
//案例
console.log($("div").attr("index"));
$("div").attr("index", 4);
console.log($("div").attr("data-index"));
// 数据缓存 data（）这个里面的数据是存放在元素的内存里面
$("span").data("uname","andy");
console.log($("span"). data("uname"));
// 这个方法获取data-index h5自定义属性 第一个 不用写data- 而且返回的是数字型
console.log($("div").data("index"));
// 3. 获取固有属性
element.prop("属性名")
// 4. 设置固有属性
prop("属性”，”属性值")
//案例
console.log($("a"). prop("href"));
$("a").prop("title","我们都挺好");
$("input").change(function () {
    console.log($(this).prop("checked"));
})
//案例:全选
$(".checkall").change(function() {
    $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
})
//如果小复选框被选中的个数等于3就应该把全选按钮选上，否则全选按钮不选。
$(".j-checkbox").change(function() {
    //$（".j-checkbox".length这个是所有的小复选框的个数
    if((".j-checkbox:checked").length === $(".j-checkbox").length) {
       $(".checka11").prop("checked", true);
    } else {
        $(".checkall").prop("checked", false);
    }
})

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
//案例:增减产品改价格
//增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
$(function () { 
    $("increment").click(function () {
        // 得到当前兄弟文本框的
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n)
        //计算小计模块 根据文本框的值 乘以 当前商品的价格 就是 商品的小
        //当前商品的价格p
        var p = $(this).parent().parent().siblings(".p-price").html();
        p = p.substr(1);
        $(this).parent().parent().siblings(".p-sum").html("￥" + p * n);
    })
    $(".decrement").click(function () {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings(".itxt").val(n);
        //parents（".p-num"）返回指定的祖先元素
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        // 小计模块
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (P * n).toFixed(2));
    })
})

// ---------- 遍历each ----------
// 如果针对于同一类元素做不同操作，需要用到遍历元素（类似for，但是比for强大）
var sum = 0;
// 方法1. each（）方法遍历元素
var arr = ["red", "green", "blue"];
$("div").each(function (i, domEle) { 
    // 回调函数第一个参数一定是索引号 可以自己指定索引号号名称
    // 回调函数第二个参数一定是 dom元素对象 也是自己命名
    $(domEle).css("color", arr[i]);
    sum += parseInt($(domEle). text());
})
//案例：计算总计和总额模块
getSum();
function getSum() { 
    var count = 0; // 计算总件数
    var money = 0; // 计算总价钱
    $(".itxt").each(function (i, ele) {
        count += parseInt($(ele).val());
    });
$(".amount-sum em").text(count);
    $(".p-sum").each(function (i, ele) {
        money += parseFloat($(ele).text().substr(1));
    });
$(".price-sum em").text("￥" + money.toFixed(2));
}
// 方法2. $.each（）方法遍历元素
      // $('做循环的Dom元素').each(function(i,item){
 
        // })
        // $.each(循环的数据,function(循环的索引,循环的每一项){
            
        // })

// ---------- 创建元素 ----------
// 1. 创建元素
var li = $("<1i>我是后来创建的1i</1i>");
// 2. 添加元素
//（1） 内部添加
$("ul").append(li); //内部添加并且放到内容的最后面
$("ul").prepend(li); //内部添加并且放到内容的最前面
//（2） 外部添加
var div = $("<div>我是后妈生的</div>");
$(".test").after(div);
$(".test").before(div);
// 3. 删除元素
$("ul").remove(); //可以删除匹配的元素 自杀
$("ul").empty();// 可以删除匹配的元素里面的子节点 孩子
$("ul").html("");// 可以删除匹配的元素里面的子节点 孩子

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
console.log($(".son").offset());
console.log($(".son").offset().top);
$("son").offset({
    top: 200,
    left: 1200
});
// 这个方法只能获取不能设置偏移
console.log($(".son").position());
$(".son").position({
    top: 200,
    left: 200
});

// ---------- 滚动事件 ----------
//被卷去的头部 scrollTop() / 被卷去的左侧 scrollLeft()
var boxTop = $("container").offset().top;
$(window).scroll(function () {
    if ($(document).scrollTop() >= boxTop) {
        $(".back").fadeIn();
    } else {
        $(".back").fadeOut();
    }
})
//案例:返回顶部
$(".back").click(function () {
    // $(document).scrollTop(0);
    $("body, html").stop().animate({
        scrollTop: 0
    });
    // $(document).stop().animate({
    //  scrollTop: 0
    //});  不能是文档 而是html和body元素做动画
})
//案例:电梯导航
$(function () {
    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 1i 的背景选择 添加 current
    // 节流阀 互斥锁
    var flag = true;
    // 1.显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }

    $(window).scroll(function () {
        toggleTool();
        // 3. 页面滚动到某个内容区域，左侧电梯导航小1i相应添加和删除current类名
        if (flag) {
            $(".floor .W").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }
    })

    // 2. 点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        flag = false;
        console.log($(this).index());
        // 当我们每次点击小1i 就需要计算出页面要去往的位置
        // 选出对应索引号的内容区的盒子 计算它的.offset（）.top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 页面动画滚动效果
        $("body, html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });
        // 点击之后，让当前的小1i 添加current 类名，姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    })
})

// ---------- jQuery事件 ----------
$(function () {
    // 1. 单个事件注册
    $("div").click(function () {
        $(this).css("background", "purple");
    });
    $("div").mouseenter(function () {
        $(this).css("background", "skyblue");
    });

    // 2. 事件处理on
    $("div").on({
        mouseenter: function () {
            $(this).css("background", "skyblue");
        },
        click: function () {
            $(this).css("background", "purple");
        },
        mouseleave: function () {
            $(this).css("background", "blue");
        }
    })
    $("div").on("mouseenter mouseleave", function () {
        $(this).toggleClass("current");
    });
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
    $("o1").append(li);
})
//案例:微博发布
$(function () {
    // 1.点击发布按钮，动态创建一个小li，放入文本框的内容和删除按钮，并且添加到u1 中
    $(".btn").on("click", function () {
        var li = $("<li>/li>");
        li.html($(".txt").val() + "<a href='javascript:;' >删除</a>");
        $("ul").prepend(li);
        li.slideDown();
        $(".txt").val("");
    })
    // 2.点击的删除按钮，可以删除当前的微博留言li
    //$("u1 a").click（function（）｛ // 此时的click不能给动态创建的a添加事件
    // alert (11);
    //});
    //on可以给动态创建的元素绑定事件li
    $("ul").on("click", "a", function () {
        $(this).parent().slideUp(function () {
            $(this).remove();
        })
    })
})

// ---------- 解绑事件 off ----------
$ ("p") .off() // 解绑p元素所有事件处理程序
$("p").off("click")// 解绑p元素上面的点击事件 后面的 Eoo 是侦听函数名
S("u1").off("click", "1i");/// 解绑事件委托
$(function () {
    $("div").on({
        click: function () {
            console.log("我点击了");
        },
        mouseover: function () {
            console.log('我鼠标经过了');
        }
    });
    $("ul").on("click", "li", function () {
        alert(11);
    });

    // 1. 事件解绑 off
    // $("div").off();  // 这个是解除了div身上的所有事件
    $("div").off("click");// 这个是解除了div身上的点击事件
    $("ul").off("click", "li");
    // 2. one()但是它只能触发事件一次
    $("p").one("click", function () {
        alert(11);
    })
})

// ----------  自动触发事 ----------
// 1. 元素.事件()
// $("div").click();
// 2. 元素.trigger("事件")
// $("div").trigger("click");
$("input").trigger("focus");
// 3.元素.triggerHandler(“事件")就是不会触发元素的默认行为
// $("div").triggerHandler("click");
$("input").on("focus",function(){
    $(this).val("你好吗");
});
// $("input"). triggerHandler ("focus");

// ---------- 阻止冒泡 ----------
element.on(events, [selector], function (event) { })
//阻止默认行为:event.preventDefault() 或者 return false
//阻止冒泡 : event.stopPropagation
$(function () {
    $(document).on("click", function () {
        console.log("点击了document");
    })
    $("div").on("click", function (event) {
        // console.log(event) ;
        console.log("点击了div");
        event.stopPropagation();
    })
})

// ---------- 对象的拷贝  ----------
//$.extend(target,obj)
//$.extend（targetobj,obj）；
// console.1og（targetobj）；// 会覆盖targetobj里面原来的数据
// 1. 浅拷贝把原来对象里面的复杂数据类型地址拷贝给目标对象
targetobj.msg.age = 20;
// 2. 深拷贝把里面的数据完全复制一份给目标对象 如果里面有不冲突的属性,会合并到一起
$.extend(true, targetobj, obj);
// console.log(targetobj);// 会覆盖targetobj 里面原来的数据
targetobj.msg.age = 20;
console.log(targetObj); // msg :(sex: "I", age: 20} 
console.log(obj);

// ---------- 多库共存 ----------
$(function () {
    function $(ele) {
        return document.querySelector(ele);
    }
    console.log($("div"));
    // 1. 如果＄符号冲突 我们就使用 jQuery
    jQuery.each();
    // 2. 让jquery 释放对$控制权 让用自己决定
    var suibian = jQuery.noConflict();
    console.log(suibian("span"));
    suibian.each();
})