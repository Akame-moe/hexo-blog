//创建图片div
$("body").append("<div id='spig' class='spig'><div id='message'>加载中……</div><div id='mumu' class='mumu'></div></div>");


//鼠标在消息上时
jQuery(document).ready(function ($) {
    var $mumu = $("#mumu");
    var $message = $("#message");
    $message.hover(function () {
       $message.fadeTo("100", 1);
     });
     $mumu.mouseover(function () {
       $mumu.fadeTo("300", 0.3);
       var msgs = [
       "想不想跟本仙女玩呀~", 
       "本小助理可远观不可亵玩！",
       "我会隐身哦！嘿嘿！", 
       "别动手动脚的，把手拿开！！",
       "再不把手拿开小心我横竖竖你！！", 
       "主人，他摸我，呜呜呜呜~~~", 
       "你把手拿开我就出来！"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $mumu.mouseout(function () {
        $mumu.fadeTo("300", 1)
    });

   
});


//开始
jQuery(document).ready(function ($) {

        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(' 晚上好，可爱的你。O(∩_∩)O', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(' 早上好，可爱的你。O(∩_∩)O', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(' 中午好，可爱的你。O(∩_∩)O', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(' 下午好，可爱的你。O(∩_∩)O', 6000);
        } else {
            showMessage(' 晚上好，可爱的你。O(∩_∩)O', 6000);
        }
   
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 260
    },{
        queue: false,
        duration: 1000
    });
});



//无聊讲点什么和动动
jQuery(document).ready(function ($) {
    var index = 0;

    window.setInterval(function () {
        var msgs = [
        "找到你的需要的资料了没QAQ", 
        "怎么不理人家呀~~", 
        "你会来看看人家嘛~ QAQ", 
        "…@……!………", 
        "悄悄告诉你：“我主人很不错哟~~~，嘘，别告诉别人~”",
        "我是胡先生的小小助理哦~_~，我可爱吧！嘻嘻!~^_^!~~"];
        //var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[(index++)%msgs.length], 10000);
    }, 10000);
    window.setInterval(function () {
        //高度百分比
        var _H = [0.1, 0.3, 0.5,0.75,-0.1,-0.3,-0.5,-0.75];
        //宽度百分比
        var _W = [0.3, 0.4, 0.5, 0.6,0.7,0.75, -0.4, -0.5, -0.6,-0.7,-0.75];
        var wi = Math.floor(Math.random() * _W.length);
        var hi = Math.floor(Math.random() * _H.length);
        $(".spig").animate({
            left: document.body.offsetWidth/2*(1+_W[wi]),
            top:  document.body.offsetheight/2*(1+_H[hi])
        },{
            duration: 2000,
            //complete: showMessage(msgs[i])
        });
    }, 20000);
});


var spig_top = 50;
//滚动条移动
jQuery(document).ready(function ($) {
    var $spig = $("#spig");
    var f = $spig.offset().top;
    $(window).scroll(function () {
        $spig.animate({
            top: $(window).scrollTop() + f +300
        },{
            queue: false,
            duration: 1000
        });
    });
});

//鼠标点击时
jQuery(document).ready(function ($) {
    var stat_click = 0;
    var $mumu = $("#mumu");
    var m = '....';
    $mumu.click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了，人家脸都红色...", "非礼呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                m = msgs[i];
            } else {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我了，再摸我就脸红了！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉我主人来打你的哦！", "干嘛动我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length);
                m = msgs[i];
            }
            var i = Math.floor(Math.random() * msgs.length);
            //高度百分比
            var _H = [0.1, 0.3, 0.5,0.75,-0.1,-0.3,-0.5,-0.75];
            //宽度百分比
            var _W = [0.3, 0.4, 0.5, 0.6,0.7,0.75, -0.4, -0.5, -0.6,-0.7,-0.75];
            var wi = Math.floor(Math.random() * _W.length);
            var hi = Math.floor(Math.random() * _H.length);
            $(".spig").animate({
                left: document.body.offsetWidth/2*(1+_W[wi]),
                top:  document.body.offsetheight/2*(1+_H[hi])
            },{
                duration: 2000,
                complete: showMessage(m)
            });
        } else {
            ismove = false;
        }
    });
});


//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
jQuery(document).ready(function ($) {
    var $spig = $("#spig");
    $spig.mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($spig.css("left"));
        _y = e.pageY - parseInt($spig.css("top"));
     });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $spig.width();
            var dy = $(document).height() - $spig.height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $spig.css({
                    top: y,
                    left: x
                }); //控件新位置
                ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});
 //显示消息函数 
function showMessage(a, b) {
    var m = $("#message");
    b = b || 7000;
    m.hide().stop();
    m.html(a);
    m.fadeIn();
    m.fadeTo("1", 1);
    m.fadeOut(b);
};