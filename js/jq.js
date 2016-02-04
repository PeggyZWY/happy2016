$(function() {
    $("#content").height(document.documentElement.clientHeight);

    $(".animation").text(""); // 测试时用
    $height = $(window).height();
    $width = $(window).width();
    a = $width / $height;
    //alert(a);
    // 使不同高宽比的屏幕有好的效果，需移除一些帧
    if (a < 1.3) {
        $(".img12, .img13, .img14, .img15, .img19, .img22, .img24, .img27, .img28, .img29").remove(); //45-10=35, 35/2=17.5
        $(".img21, .img26").css("background-position", "85% 38%, 20% 45%"); //45-2=43, 43/2=21.5
    }
    if (a < 1.4) {
        $(".img15, .img27").hide();
    }
    // 设置帧后的颜色
    $("#content :nth-child(7n+3)").css("background-color", "#FF6A4D");
    $("#content :nth-child(7n+4)").css("background-color", "#FF894D");
    $("#content :nth-child(7n+5)").css("background-color", "#FFAD4D");
    $("#content :nth-child(7n+6)").css("background-color", "#FFD34D");
    $("#content :nth-child(7n)").css("background-color", "#FFF14D");
    $("#content :nth-child(7n+1)").css("background-color", "rgb(255,247,203");
    $("#content :nth-child(7n+2), .pre").css("background-color", "#FF4D4D");
    // 设置底部代码区背景
    $(".text").css("background-color", "black");
    $(".text").find("*").css("background-color", "black");


    /* 
    // ipad 1024 * 768   iphone6 375 * 627
    alert($(window).scrollTop()); //15744（20.5个768）; forcast ip6:16.5*627=10346 real:10346 10346/627=16.5

    alert($(document).scrollTop()); //15744

    alert($(window).height()); //浏览器当前窗口可视区域高度 768 ; 627
    alert($(document).height()); //浏览器当前窗口文档的高度 16512（21.5个768，因为a<1.4，隐藏了2个，就是(45-2)/2=21.5）; forcast ip6: 627*17.5=10973
    alert($(document.body).height());//浏览器当前窗口文档body的高度 768 ;  627
    //alert($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin 768 ; 627
    //alert($(window).width()); //浏览器当前窗口可视区域宽度 1024
    //alert($(document).width());//浏览器当前窗口文档对象宽度 1024 
    //alert($(document.body).width());//浏览器当前窗口文档body的宽度 1024
    //alert($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin 1024

    */



    // 给页面滚动绑定事件：当最下面的代码区域出现打字效果，并开始计时，准备跳转下一页面
    var $text = $(".text").remove();

    $(window).scroll(function() {
        if ($(document).scrollTop() + $(window).height() >= $(document).height() - 10) {
            setTimeout(function() {
                $("#content").append($text);
            }, 500);
            setTimeout(function() {
                location.href = "demo.html";
            }, 4500);
            return false;
        }
    })



})


//以下是底部代码区打字机效果
function Typing(opts) {
    this.version = '1.2';
    this.source = opts.source;
    this.output = opts.output;
    this.delay = opts.delay || 120;
    this.chain = {
        parent: null,
        dom: this.output,
        val: []
    };
}

Typing.fn = Typing.prototype = {
    toArray: function(eles) {
        var result = [];
        for (var i = 0; i < eles.length; i++) {
            result.push(eles[i]);
        }
        return result;
    },
    init: function() {
        this.chain.val = this.convert(this.source, this.chain.val);
    },
    convert: function(dom, arr) {
        var that = this,
            children = this.toArray(dom.childNodes);

        for (var i = 0; i < children.length; i++) {
            var node = children[i];
            if (node.nodeType === 3) {
                arr = arr.concat(node.nodeValue.split(''));
            } else if (node.nodeType === 1) {
                var val = [];
                val = that.convert(node, val);
                arr.push({
                    'dom': node,
                    'val': val
                });
            }
        }

        return arr;
    },
    print: function(dom, val, callback) {
        setTimeout(function() {
            dom.appendChild(document.createTextNode(val));
            callback();
        }, this.delay);
    },
    play: function(ele) {
        if (!ele) return;
        if (!ele.val.length && ele.parent) this.play(ele.parent);
        if (!ele.val.length) return;

        var curr = ele.val.shift();
        var that = this;

        if (typeof curr === 'string') {
            this.print(ele.dom, curr, function() {
                if (ele.val.length) {
                    that.play(ele);
                } else if (ele.parent) {
                    that.play(ele.parent);
                }
            });
        } else {
            var dom = document.createElement(curr.dom.nodeName);
            var attrs = that.toArray(curr.dom.attributes);
            for (var i = 0; i < attrs.length; i++) {
                var attr = attrs[i];
                dom.setAttribute(attr.name, attr.value);
            }
            ele.dom.appendChild(dom);
            curr.parent = ele;
            curr.dom = dom;
            this.play(curr.val.length ? curr : curr.parent);
        }
    },
    start: function() {
        this.init();
        this.play(this.chain);
    }
};


var typing = new Typing({
    source: document.getElementById('source'),
    output: document.getElementById('output'),
    delay: 80
});
typing.start();