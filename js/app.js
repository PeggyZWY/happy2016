webpackJsonp([1], {
    0: function(t, e, i) {
        (function(t) {
            "use strict";

            function e(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function n(e) {
                e.timeline.unshift({
                    type: "text",
                    data: {
                        text: "Username: " + "***" + "\nPassword: ********\nACCESS TO SYSTEM"
                    },
                    config: {
                        effect: !0,
                        randomPause: !0,
                        cursor: !0
                    }
                });
                var i = t("#main"),
                    n = new a["default"](i, e),
                    s = c["default"].getInstance(),
                    o = Math.ceil(e.timeline.length / 5);

                n.showHint(!1).then(function() {
                    return s.show()
                }), s.on(c["default"].EventType.SHOW_MORE, function() {
                    !n.loging && !n.ended && n.showMoreParagraph(o)
                }), n.on(a["default"].EventType.WAIT, function() {
                    n.showHint(!0).then(function() {
                        return s.show()
                    })
                })
            }

            function s(t) {
                var e = ["marry.png", "zhihudaily.png", "magnet.png", "vote.png", "liukanshan.gif"];
                for (var i in t) {
                    var n = t[i].type,
                        s = t[i].data.name;
                    "img" === n ? (0, w.loadImg)(s) : "ascii" === n && (0, w.loadJson)(s)
                }
                var o = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var l, c = e[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                        var s = l.value;
                        (0, w.loadImg)(s)
                    }
                } catch (h) {
                    r = !0, a = h
                } finally {
                    try {
                        !o && c["return"] && c["return"]()
                    } finally {
                        if (r)
                            throw a
                    }
                }(0, w.loadJson)("register")
            }

            function o() {
                var e = '\n    <div id="head">\n      <div class="tab">\n      \n      </div>\n    </div>\n    <div id="main" class="terminal">\n      <img src="https://2015.zhihu.com/static/img/unauthorized.png" alt="警告" class="sign"/>\n      <div class="explanation">未检测到足够数据，无法破译</div>\n    </div>\n  ';
                t("#app-container").html(e)
            }

            i(5), i(195);
            var r = i(240),
                a = e(r),
                l = i(213),
                c = e(l),
                h = i(196),
                u = i(251),
                p = (e(u), i(241)),
                f = (e(p), i(199), i(200)),
                d = (e(f), i(202)),
                m = e(d),
                v = i(219),
                g = e(v),
                y = i(254),
                b = e(y),
                w = i(246);
            i(238), g["default"].init(), b["default"].init();
            var x = function() {

                    var t = {
                        "bonus": {
                            "\u4e09\u4f53\uff08\u7cfb\u5217\u5c0f\u8bf4\uff09": {
                                "type": "img",
                                "data": {
                                    "name": "santi.png"
                                },
                                "id": "santi"
                            },
                            "\u7a0b\u5e8f\u5458": {
                                "type": "img",
                                "data": {
                                    "name": "coder.png"
                                },
                                "id": "coder"
                            },
                            "\u817e\u8baf": {
                                "type": "img",
                                "data": {
                                    "name": "tencent.png"
                                },
                                "id": "tencent"
                            },
                            "\u5207\u5c14\u897f\uff08Chelsea FC\uff09": {
                                "type": "rolling",
                                "data": {
                                    "name": "soccer.png"
                                },
                                "id": "rolling_soccer"
                            },
                            "\u5a5a\u59fb": {
                                "type": "img",
                                "data": {
                                    "name": "marry.png"
                                },
                                "id": "marry"
                            }
                        },
                        "timeline": [{
                                "date": 1295145152,
                                "data": [{
                                    "name": "<Date>",
                                    "value": "2015-01-01 00:00:00"
                                }, {

                                    "name": "event",
                                    "value": "进入2015年，有了新的期待"
                                }],

                                "type": "event"
                            }, {
                                "date": 1366675200,
                                "data": [{
                                    "name": "<Date>",
                                    "value": "2015-02-14 00:00:00"
                                }, {
                                    "name": "event",
                                    "value": "情人节还是一个人吗？不管怎样，只有自己活出了趣味，才有爱别人的能力呀。对了，今天可以吃玫瑰或者巧克力馅儿的汤圆。"
                                }],
                                "type": "event"
                            }, {
                                "date": 1369353600,
                                "data": [{
                                    "name": "<Date>",
                                    "value": "2015-02-19 00:00:00"
                                }, {

                                    "name": "event",
                                    "value": "窗外烟花绚烂，得到压岁钱和一大堆祝福，默默地许了个愿"
                                }],
                                "type": "event"
                            }, {
                                "date": 1396310400,
                                "data": [{
                                    "name": "<Date>",
                                    "value": "2015-06-26 24:00:00"
                                }, {
                                    "name": "event",
                                    "value": "学期结束，发现自己是不是又比昨天厉害了！"
                                }],
                                "type": "event"
                            }, {
                                "date": 1369353600,
                                "data": [{
                                    "name": "<Date>",
                                    "value": "2015-09-14 00:00:00"
                                }, {
                                   
                                    "name": "event",
                                    "value": "新学年开始"
                                }],
                                "type": "event"
                            }, {
                                "date": 1396310400,
                                "data": [{
                                    "name": "<Date>",
                                    "value": "2015-10-05 18:30:00"
                                }, {
                                    
                                    "name": "event",
                                    "value": "瑞典斯德哥尔摩当地时间5日中午11时30分，中国药学家屠呦呦荣获2015年诺贝尔生理学或医学奖"
                                }],
                                "type": "event"
                            },
{
                                "date": 1396310400,
                                "data": [{
                                    "name": "<Date>",
                                    "value": "2015-12-31 24:00:00"
                                }, {
                                    
                                    "name": "event",
                                    "value": "2015年结束，当初的心愿都实现了吗？"
                                }],
                                "type": "event"
                            },
                            {
                                "date": 1440374399,
                                "end": 1441670399,
                                "type": "topics",
                                "data": [{
                                    "name": "<Date>",
                                    "value": "2015.01.01-2015.12.31"
                                }, {
                                    "name": "tag",
                                    "value": ["young", "simple", "naive", "蛤？"]
                                }]
                            }, {
                                "date": 1440383568,
                                "data": [{
                                    "name": "<Date>",
                                    "value": "2016-01-01 00:00:00"
                                }, {
                                    "name": "event",
                                    "value": "2016年开始，又许下了愿望，今年一定要让它实现!"
                                }, {
                                    "name": "TODO",
                                    "value": "be happy                                                            ========== END =========="
                                },],

                                "type": "event"
                            },

                        ],

                    };
                    s(t.bonus), (0, h.initCanvas)(), b["default"].trackAppStart(t.username),
                        n(t)

                },
                S = function() {
                    var t = {
                        "image": "http://pic3.zhimg.com/87e14ba8e2d4758bbab5e9d03e9f840e_r.jpg",
                        "fullname": "\u5d14\u5c0f\u62fd",
                        "title": "Career"
                    };
                    return m["default"].configSharing(t, 0)
                };
            t(document).ready(function() {
                (0, h.initRem)(), x(), S()
            })
        }).call(e, i(4))
    },
    202: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function s(t) {
                return t.replace(/[^\x00-\xff]/g, "xx").length
            }

            function o(t, e) {
                D = t.fullname, C = t.title;
                var i = "",
                    n = t.image;
                g["default"].mobile ? (s(D) > 16 && (D = "我"), g["default"].wechat && (n = I), i = Y.wechat[e].replace("fullname", D).replace("hackname", C)) : i = Y.weibo[e].replace("fullname", D).replace("hackname", C), f["default"].init({
                    title: i,
                    imgUrl: n
                })
            }

            function r(t) {
                var e = M.map(function(e) {
                        var i = u(e, 2),
                            n = i[0],
                            s = i[1];
                        return t[n] ? [s, t[n]] : null
                    }).filter(Boolean),
                    i = e.map(function(t) {
                        var e = u(t, 2),
                            i = e[0],
                            n = e[1];
                        return '<li><span class="left">' + i + '</span><span class="right">' + n + "</span></li>"
                    }).join("");
                t.salt_club_role && (i += '<li><span class="nacl-club">盐 club ' + t.salt_club_role + '</span><img src="https://2015.zhihu.com/static/img/badge.png" alt="badge" class="badge"></li>');
                //var n = '\n    <section class="achievement' + (g["default"].mobile ? " mobile" : " pc") + '">\n      <img src="static/img/achievement.png" alt="成就标题" class="achievement-title">\n      <div class="achievement-list-wrap">\n        <ul class="achievement-list">\n          ' + i + '\n        </ul>\n      </div>\n      <div class="btn-group hide">\n        <img src="https://2015.zhihu.com/static/img/share.png" alt="分享按钮" class="share-btn">\n      </div>\n    </section>\n  ';
                //return n
            }

            function a() {
                var e = t(".btn-group");
                g["default"].mobile ? m["default"].init(e.find(".share-btn").get(0)) : X["default"].init(e.find(".share-btn").get(0)), e.removeClass("hide")
            }

            function l(e) {
                function i() {
                    var t;
                    return regeneratorRuntime.wrap(function(i) {
                        for (;;)
                            switch (i.prev = i.next) {
                                case 0:
                                    if (!s.length) {
                                        i.next = 7;
                                        break
                                    }
                                    return t = s.shift(), t.on(T["default"].EventType.INJECT, function(t, e, i) {
                                        r.painters.powerTyping.spawnParticles(t, e, i)
                                    }), i.next = 5, t.inject(100).then(function() {
                                        return t = null
                                    });
                                case 5:
                                    i.next = 0;
                                    break;
                                case 7:
                                    l.destroyOnFinished(), e.find(".badge").addClass("visible popup"), e.find(".achievement-bonus").addClass("visible popup"), (0, _.later)(a, 500);
                                case 11:
                                case "end":
                                    return i.stop()
                            }
                    }, n[0], this)
                }

                var n = [i].map(regeneratorRuntime.mark),
                    s = [],
                    o = e.find("li");
                o.each(function(e) {
                    t(this).find("span").each(function() {
                        s.push(new T["default"](this, this.innerHTML))
                    })
                });
                var r = O["default"].getInstance(),
                    l = new E["default"];
                r.addPainter("powerTyping", l), (0, _.runGenerator)(i)
            }

            function c(e) {
                var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = r(i),
                    s = t(n).appendTo(e);
                g["default"].mobile ? f["default"].updateShareData({
                    title: Y.wechat[1].replace("fullname", D).replace("hackname", C)
                }) : f["default"].updateShareData({
                    title: Y.weibo[1].replace("fullname", D).replace("hackname", C)
                }), (0, _.later)(function() {
                    var t = x["default"].getScrollInstance();
                    t.refresh(), t.scrollToElement(s.get(0), 500, 0, 0, b["default"].utils.ease.quadratic), (0, _.later)(function() {
                        l(s)
                    }, 1e3)
                }, 500)
            }

            function h(e) {
                var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = r(i);
                t(n).appendTo(e);
                a()
            }

            var u = function() {
                function t(t, e) {
                    var i = [],
                        n = !0,
                        s = !1,
                        o = void 0;
                    try {
                        for (var r, a = t[Symbol.iterator](); !(n = (r = a.next()).done) && (i.push(r.value), !e || i.length !== e); n = !0);
                    } catch (l) {
                        s = !0, o = l
                    } finally {
                        try {
                            !n && a["return"] && a["return"]()
                        } finally {
                            if (s)
                                throw o
                        }
                    }
                    return i
                }

                return function(e, i) {
                    if (Array.isArray(e))
                        return e;
                    if (Symbol.iterator in Object(e))
                        return t(e, i);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var p = i(203),
                f = n(p),
                d = i(204),
                m = n(d),
                v = i(200),
                g = n(v),
                y = i(209),
                b = n(y),
                w = i(210),
                x = n(w),
                S = i(212),
                T = n(S),
                _ = i(199),
                P = i(214),
                E = n(P),
                k = i(197),
                O = n(k),
                j = i(216),
                X = n(j),
                Y = {
                    weibo: ["#我的知乎五周年# Warning！「fullname」正在进入知乎数据库！", "#我的知乎五周年#「fullname」入侵了知乎数据库，读取了自己 5 年来的数据，「hackname」黑客成就达成！"],
                    wechat: ["Warning！「fullname」正在进入知乎数据库！", "「fullname」入侵了知乎数据库，「hackname」黑客成就达成！"]
                },
                M = [
                    ["pv", "总浏览："],
                    ["get_votes_count", "获得赞同数："],
                    ["give_votes_count", "送出赞同数："],
                    ["write_word_len", "回答字数："],
                    ["most_vote", "送出赞同最多："],
                    ["most_voted", "得到赞同最多："],
                    ["answer_pv", "答案被浏览数："],
                    ["invited", "获邀请总数："],
                    ["collected", "被收藏总数："],
                    ["recommendation_daily", "日报推荐次数："],
                    ["recommendation_editor", "编辑推荐次数："],
                    ["selected_weekly", "入选周刊次数："],
                    ["guest_salt_salon", "盐沙龙嘉宾次数："],
                    ["guest_roundtable", "圆桌嘉宾次数："],
                    ["book_salt", "盐书作者次数："],
                    ["book_printed", "纸质书作者次数："]
                ],
                I = "https://2015.zhihu.com/static/img/wechat_share.png",
                D = "",
                C = "";
            e["default"] = {
                renderSection: c,
                renderPage: h,
                configSharing: o
            }
        }).call(e, i(4))
    },
    203: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = i(200),
                o = n(s),
                r = location.href.split("#")[0],
                a = location.protocol + "//" + location.host,
                l = "//res.wx.qq.com/open/js/jweixin-1.0.0.js",
                c = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"],
                h = {
                    link: a,
                    title: "",
                    desc: "",
                    imgUrl: ""
                },
                u = function(e) {
                    var i = Object.assign({}, h, e);
                    return "http://service.weibo.com/share/share.php?" + t.param({
                        appkey: 3063806388,
                        url: i.link,
                        title: i.title,
                        pic: i.imgUrl
                    })
                },
                p = function() {
                    return t.getScript(l)
                },
                f = function(e) {
                    return t.ajax({
                        url: "https://2015.zhihu.com/api/ticket/wechat?url=" + a,
                        method: "GET",
                        contentType: "application/json",
                        processData: !1
                    })
                },
                d = function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    Object.assign(h, t), h.imgUrl && !~h.imgUrl.indexOf("http") && (h.imgUrl = a + h.imgUrl)
                },
                m = function() {
                    var t = function(t) {
                        wx[t] && wx[t](h)
                    };
                    t("onMenuShareAppMessage"), t("onMenuShareTimeline"), t("onMenuShareWeibo"), t("onMenuShareQQ")
                },
                v = function() {
                    o["default"].iosapp && !window.ZhihuiOS && (window.ZhihuiOS = {
                        setShareTitle: function() {
                            return h.title
                        },
                        setShareDescription: function() {
                            return h.desc
                        },
                        setShareImg: function() {
                            return h.imgUrl
                        }
                    }), o["default"].androidapp && window.ZhihuAndroid && (window.ZhihuAndroid.setShareTitle && window.ZhihuAndroid.setShareTitle(h.title), window.ZhihuAndroid.setShareDescription && window.ZhihuAndroid.setShareDescription(h.desc), window.ZhihuAndroid.setSharePicture && window.ZhihuAndroid.setSharePicture(h.imgUrl))
                },
                g = function() {
                    return f({
                        url: r
                    }).then(function(t) {
                        wx.config(Object.assign(t, {
                            jsApiList: c
                        })), wx.ready(function() {
                            m()
                        })
                    })
                },
                y = function(t) {
                    d(t), o["default"].wechat && p().then(g), v()
                };
            e["default"] = {
                init: y,
                updateShareData: d,
                getWeiboShareUrl: u
            }
        }).call(e, i(4))
    },
    204: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            Object.defineProperty(e, "__esModule", {
                value: !0
            }), i(205);
            var s = i(200),
                o = n(s),
                r = function() {
                    o["default"].iosapp ? t("html").addClass("inapp") : o["default"].mobilesafari && t("html").addClass("ios safari")
                },
                a = function(e) {
                    r();
                    var i = document.createElement("div");
                    i.className = "wechat-hint", document.body.appendChild(i);
                    var n = function() {
                            return t(i).addClass("fx-show")
                        },
                        s = function() {
                            return t(i).removeClass("fx-show")
                        };
                    i.addEventListener("touchmove", function(t) {
                        t.preventDefault()
                    });
                    var o = "ontouchstart" in window ? "touchend" : "click";
                    i.addEventListener(o, function(t) {
                        t.preventDefault(), s()
                    });
                    var a = e || document.querySelector(".js-share");
                    a && a.addEventListener(o, function(t) {
                        t.preventDefault(), n()
                    })
                };
            e["default"] = {
                init: a
            }
        }).call(e, i(4))
    },
    205: function(t, e) {},
    209: function(t, e) {
        /*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
        ! function(e, i, n) {
            function s(t, e) {
                this.wrapper = "string" == typeof t ? i.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                    resizeScrollbars: !0,
                    mouseWheelSpeed: 20,
                    snapThreshold: .334,
                    startX: 0,
                    startY: 0,
                    scrollY: !0,
                    directionLockThreshold: 5,
                    momentum: !0,
                    bounce: !0,
                    bounceTime: 600,
                    bounceEasing: "",
                    preventDefault: !0,
                    preventDefaultException: {
                        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                    },
                    HWCompositing: !0,
                    useTransition: !0,
                    useTransform: !0
                };
                for (var n in e)
                    this.options[n] = e[n];
                this.translateZ = this.options.HWCompositing && l.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = l.hasTransition && this.options.useTransition, this.options.useTransform = l.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, this.options.scrollX = "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? l.ease[this.options.bounceEasing] || l.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
            }

            function o(t, e, n) {
                var s = i.createElement("div"),
                    o = i.createElement("div");
                return n === !0 && (s.style.cssText = "position:absolute;z-index:9999", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), o.className = "iScrollIndicator", "h" == t ? (n === !0 && (s.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", o.style.height = "100%"), s.className = "iScrollHorizontalScrollbar") : (n === !0 && (s.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", o.style.width = "100%"), s.className = "iScrollVerticalScrollbar"), s.style.cssText += ";overflow:hidden", e || (s.style.pointerEvents = "none"), s.appendChild(o), s
            }

            function r(t, n) {
                this.wrapper = "string" == typeof n.el ? i.querySelector(n.el) : n.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = t, this.options = {
                    listenX: !0,
                    listenY: !0,
                    interactive: !1,
                    resize: !0,
                    defaultScrollbars: !1,
                    shrink: !1,
                    fade: !1,
                    speedRatioX: 0,
                    speedRatioY: 0
                };
                for (var s in n)
                    this.options[s] = n[s];
                this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (l.addEvent(this.indicator, "touchstart", this), l.addEvent(e, "touchend", this)), this.options.disablePointer || (l.addEvent(this.indicator, l.prefixPointerEvent("pointerdown"), this), l.addEvent(e, l.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (l.addEvent(this.indicator, "mousedown", this), l.addEvent(e, "mouseup", this))), this.options.fade && (this.wrapperStyle[l.style.transform] = this.scroller.translateZ, this.wrapperStyle[l.style.transitionDuration] = l.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
            }

            var a = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                    e.setTimeout(t, 1e3 / 60)
                },
                l = function() {
                    function t(t) {
                        return r === !1 ? !1 : "" === r ? t : r + t.charAt(0).toUpperCase() + t.substr(1)
                    }

                    var s = {},
                        o = i.createElement("div").style,
                        r = function() {
                            for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, n = e.length; n > i; i++)
                                if (t = e[i] + "ransform", t in o)
                                    return e[i].substr(0, e[i].length - 1);
                            return !1
                        }();
                    s.getTime = Date.now || function() {
                        return (new Date).getTime()
                    }, s.extend = function(t, e) {
                        for (var i in e)
                            t[i] = e[i]
                    }, s.addEvent = function(t, e, i, n) {
                        t.addEventListener(e, i, !!n)
                    }, s.removeEvent = function(t, e, i, n) {
                        t.removeEventListener(e, i, !!n)
                    }, s.prefixPointerEvent = function(t) {
                        return e.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t
                    }, s.momentum = function(t, e, i, s, o, r) {
                        var a, l, c = t - e,
                            h = n.abs(c) / i;
                        return r = void 0 === r ? 6e-4 : r, a = t + h * h / (2 * r) * (0 > c ? -1 : 1), l = h / r, s > a ? (a = o ? s - o / 2.5 * (h / 8) : s, c = n.abs(a - t), l = c / h) : a > 0 && (a = o ? o / 2.5 * (h / 8) : 0, c = n.abs(t) + a, l = c / h), {
                            destination: n.round(a),
                            duration: l
                        }
                    };
                    var a = t("transform");
                    return s.extend(s, {
                        hasTransform: a !== !1,
                        hasPerspective: t("perspective") in o,
                        hasTouch: "ontouchstart" in e,
                        hasPointer: e.PointerEvent || e.MSPointerEvent,
                        hasTransition: t("transition") in o
                    }), s.isBadAndroid = /Android /.test(e.navigator.appVersion) && !/Chrome\/\d/.test(e.navigator.appVersion), s.extend(s.style = {}, {
                        transform: a,
                        transitionTimingFunction: t("transitionTimingFunction"),
                        transitionDuration: t("transitionDuration"),
                        transitionDelay: t("transitionDelay"),
                        transformOrigin: t("transformOrigin")
                    }), s.hasClass = function(t, e) {
                        var i = new RegExp("(^|\\s)" + e + "(\\s|$)");
                        return i.test(t.className)
                    }, s.addClass = function(t, e) {
                        if (!s.hasClass(t, e)) {
                            var i = t.className.split(" ");
                            i.push(e), t.className = i.join(" ")
                        }
                    }, s.removeClass = function(t, e) {
                        if (s.hasClass(t, e)) {
                            var i = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                            t.className = t.className.replace(i, " ")
                        }
                    }, s.offset = function(t) {
                        for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;)
                            e -= t.offsetLeft, i -= t.offsetTop;
                        return {
                            left: e,
                            top: i
                        }
                    }, s.preventDefaultException = function(t, e) {
                        for (var i in e)
                            if (e[i].test(t[i]))
                                return !0;
                        return !1
                    }, s.extend(s.eventType = {}, {
                        touchstart: 1,
                        touchmove: 1,
                        touchend: 1,
                        mousedown: 2,
                        mousemove: 2,
                        mouseup: 2,
                        pointerdown: 3,
                        pointermove: 3,
                        pointerup: 3,
                        MSPointerDown: 3,
                        MSPointerMove: 3,
                        MSPointerUp: 3
                    }), s.extend(s.ease = {}, {
                        quadratic: {
                            style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            fn: function(t) {
                                return t * (2 - t)
                            }
                        },
                        circular: {
                            style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                            fn: function(t) {
                                return n.sqrt(1 - --t * t)
                            }
                        },
                        back: {
                            style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            fn: function(t) {
                                var e = 4;
                                return (t -= 1) * t * ((e + 1) * t + e) + 1
                            }
                        },
                        bounce: {
                            style: "",
                            fn: function(t) {
                                return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            }
                        },
                        elastic: {
                            style: "",
                            fn: function(t) {
                                var e = .22,
                                    i = .4;
                                return 0 === t ? 0 : 1 == t ? 1 : i * n.pow(2, -10 * t) * n.sin((t - e / 4) * (2 * n.PI) / e) + 1
                            }
                        }
                    }), s.tap = function(t, e) {
                        var n = i.createEvent("Event");
                        n.initEvent(e, !0, !0), n.pageX = t.pageX, n.pageY = t.pageY, t.target.dispatchEvent(n)
                    }, s.click = function(t) {
                        var e, n = t.target;
                        /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (e = i.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !0, t.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), e._constructed = !0, n.dispatchEvent(e))
                    }, s
                }();
            s.prototype = {
                version: "5.1.3",
                _init: function() {
                    this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
                },
                destroy: function() {
                    this._initEvents(!0), this._execEvent("destroy")
                },
                _transitionEnd: function(t) {
                    t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
                },
                _start: function(t) {
                    if ((1 == l.eventType[t.type] || 0 === t.button) && this.enabled && (!this.initiated || l.eventType[t.type] === this.initiated)) {
                        !this.options.preventDefault || l.isBadAndroid || l.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                        var e, i = t.touches ? t.touches[0] : t;
                        this.initiated = l.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = l.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, e = this.getComputedPosition(), this._translate(n.round(e.x), n.round(e.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = i.pageX, this.pointY = i.pageY, this._execEvent("beforeScrollStart")
                    }
                },
                _move: function(t) {
                    if (this.enabled && l.eventType[t.type] === this.initiated) {
                        this.options.preventDefault && t.preventDefault();
                        var e, i, s, o, r = t.touches ? t.touches[0] : t,
                            a = r.pageX - this.pointX,
                            c = r.pageY - this.pointY,
                            h = l.getTime();
                        if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += a, this.distY += c, s = n.abs(this.distX), o = n.abs(this.distY), !(h - this.endTime > 300 && 10 > s && 10 > o)) {
                            if (this.directionLocked || this.options.freeScroll || (s > o + this.options.directionLockThreshold ? this.directionLocked = "h" : o >= s + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                                if ("vertical" == this.options.eventPassthrough)
                                    t.preventDefault();
                                else if ("horizontal" == this.options.eventPassthrough)
                                    return void(this.initiated = !1);
                                c = 0
                            } else if ("v" == this.directionLocked) {
                                if ("horizontal" == this.options.eventPassthrough)
                                    t.preventDefault();
                                else if ("vertical" == this.options.eventPassthrough)
                                    return void(this.initiated = !1);
                                a = 0
                            }
                            a = this.hasHorizontalScroll ? a : 0, c = this.hasVerticalScroll ? c : 0, e = this.x + a, i = this.y + c, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + a / 3 : e > 0 ? 0 : this.maxScrollX), (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + c / 3 : i > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : 0 > a ? 1 : 0, this.directionY = c > 0 ? -1 : 0 > c ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, i), h - this.startTime > 300 && (this.startTime = h, this.startX = this.x, this.startY = this.y)
                        }
                    }
                },
                _end: function(t) {
                    if (this.enabled && l.eventType[t.type] === this.initiated) {
                        this.options.preventDefault && !l.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                        var e, i, s = (t.changedTouches ? t.changedTouches[0] : t, l.getTime() - this.startTime),
                            o = n.round(this.x),
                            r = n.round(this.y),
                            a = n.abs(o - this.startX),
                            c = n.abs(r - this.startY),
                            h = 0,
                            u = "";
                        if (this.isInTransition = 0, this.initiated = 0, this.endTime = l.getTime(), !this.resetPosition(this.options.bounceTime)) {
                            if (this.scrollTo(o, r), !this.moved)
                                return this.options.tap && l.tap(t, this.options.tap), this.options.click && l.click(t), void this._execEvent("scrollCancel");
                            if (this._events.flick && 200 > s && 100 > a && 100 > c)
                                return void this._execEvent("flick");
                            if (this.options.momentum && 300 > s && (e = this.hasHorizontalScroll ? l.momentum(this.x, this.startX, s, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                    destination: o,
                                    duration: 0
                                }, i = this.hasVerticalScroll ? l.momentum(this.y, this.startY, s, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                    destination: r,
                                    duration: 0
                                }, o = e.destination, r = i.destination, h = n.max(e.duration, i.duration), this.isInTransition = 1), this.options.snap) {
                                var p = this._nearestSnap(o, r);
                                this.currentPage = p, h = this.options.snapSpeed || n.max(n.max(n.min(n.abs(o - p.x), 1e3), n.min(n.abs(r - p.y), 1e3)), 300), o = p.x, r = p.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
                            }
                            return o != this.x || r != this.y ? ((o > 0 || o < this.maxScrollX || r > 0 || r < this.maxScrollY) && (u = l.ease.quadratic), void this.scrollTo(o, r, h, u)) : void this._execEvent("scrollEnd")
                        }
                    }
                },
                _resize: function() {
                    var t = this;
                    clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                        t.refresh()
                    }, this.options.resizePolling)
                },
                resetPosition: function(t) {
                    var e = this.x,
                        i = this.y;
                    return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), e == this.x && i == this.y ? !1 : (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
                },
                disable: function() {
                    this.enabled = !1
                },
                enable: function() {
                    this.enabled = !0
                },
                refresh: function() {
                    this.wrapper.offsetHeight;
                    this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = l.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
                },
                on: function(t, e) {
                    this._events[t] || (this._events[t] = []), this._events[t].push(e)
                },
                off: function(t, e) {
                    if (this._events[t]) {
                        var i = this._events[t].indexOf(e);
                        i > -1 && this._events[t].splice(i, 1)
                    }
                },
                _execEvent: function(t) {
                    if (this._events[t]) {
                        var e = 0,
                            i = this._events[t].length;
                        if (i)
                            for (; i > e; e++)
                                this._events[t][e].apply(this, [].slice.call(arguments, 1))
                    }
                },
                scrollBy: function(t, e, i, n) {
                    t = this.x + t, e = this.y + e, i = i || 0, this.scrollTo(t, e, i, n)
                },
                scrollTo: function(t, e, i, n) {
                    n = n || l.ease.circular, this.isInTransition = this.options.useTransition && i > 0, !i || this.options.useTransition && n.style ? (this._transitionTimingFunction(n.style), this._transitionTime(i), this._translate(t, e)) : this._animate(t, e, i, n.fn)
                },
                scrollToElement: function(t, e, i, s, o) {
                    if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                        var r = l.offset(t);
                        r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, i === !0 && (i = n.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), s === !0 && (s = n.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= i || 0, r.top -= s || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, e = void 0 === e || null === e || "auto" === e ? n.max(n.abs(this.x - r.left), n.abs(this.y - r.top)) : e, this.scrollTo(r.left, r.top, e, o)
                    }
                },
                _transitionTime: function(t) {
                    if (t = t || 0, this.scrollerStyle[l.style.transitionDuration] = t + "ms", !t && l.isBadAndroid && (this.scrollerStyle[l.style.transitionDuration] = "0.001s"), this.indicators)
                        for (var e = this.indicators.length; e--;)
                            this.indicators[e].transitionTime(t)
                },
                _transitionTimingFunction: function(t) {
                    if (this.scrollerStyle[l.style.transitionTimingFunction] = t, this.indicators)
                        for (var e = this.indicators.length; e--;)
                            this.indicators[e].transitionTimingFunction(t)
                },
                _translate: function(t, e) {
                    if (this.options.useTransform ? this.scrollerStyle[l.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = n.round(t), e = n.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators)
                        for (var i = this.indicators.length; i--;)
                            this.indicators[i].updatePosition()
                },
                _initEvents: function(t) {
                    var i = t ? l.removeEvent : l.addEvent,
                        n = this.options.bindToWrapper ? this.wrapper : e;
                    i(e, "orientationchange", this), i(e, "resize", this), this.options.click && i(this.wrapper, "click", this, !0), this.options.disableMouse || (i(this.wrapper, "mousedown", this), i(n, "mousemove", this), i(n, "mousecancel", this), i(n, "mouseup", this)), l.hasPointer && !this.options.disablePointer && (i(this.wrapper, l.prefixPointerEvent("pointerdown"), this), i(n, l.prefixPointerEvent("pointermove"), this), i(n, l.prefixPointerEvent("pointercancel"), this), i(n, l.prefixPointerEvent("pointerup"), this)), l.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this), i(n, "touchmove", this), i(n, "touchcancel", this), i(n, "touchend", this)), i(this.scroller, "transitionend", this), i(this.scroller, "webkitTransitionEnd", this), i(this.scroller, "oTransitionEnd", this), i(this.scroller, "MSTransitionEnd", this)
                },
                getComputedPosition: function() {
                    var t, i, n = e.getComputedStyle(this.scroller, null);
                    return this.options.useTransform ? (n = n[l.style.transform].split(")")[0].split(", "), t = +(n[12] || n[4]), i = +(n[13] || n[5])) : (t = +n.left.replace(/[^-\d.]/g, ""), i = +n.top.replace(/[^-\d.]/g, "")), {
                        x: t,
                        y: i
                    }
                },
                _initIndicators: function() {
                    function t(t) {
                        for (var e = a.indicators.length; e--;)
                            t.call(a.indicators[e])
                    }

                    var e, i = this.options.interactiveScrollbars,
                        n = "string" != typeof this.options.scrollbars,
                        s = [],
                        a = this;
                    this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = {
                        el: o("v", i, this.options.scrollbars),
                        interactive: i,
                        defaultScrollbars: !0,
                        customStyle: n,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenX: !1
                    }, this.wrapper.appendChild(e.el), s.push(e)), this.options.scrollX && (e = {
                        el: o("h", i, this.options.scrollbars),
                        interactive: i,
                        defaultScrollbars: !0,
                        customStyle: n,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenY: !1
                    }, this.wrapper.appendChild(e.el), s.push(e))), this.options.indicators && (s = s.concat(this.options.indicators));
                    for (var l = s.length; l--;)
                        this.indicators.push(new r(this, s[l]));
                    this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                        t(function() {
                            this.fade()
                        })
                    }), this.on("scrollCancel", function() {
                        t(function() {
                            this.fade()
                        })
                    }), this.on("scrollStart", function() {
                        t(function() {
                            this.fade(1)
                        })
                    }), this.on("beforeScrollStart", function() {
                        t(function() {
                            this.fade(1, !0)
                        })
                    })), this.on("refresh", function() {
                        t(function() {
                            this.refresh()
                        })
                    }), this.on("destroy", function() {
                        t(function() {
                            this.destroy()
                        }), delete this.indicators
                    })
                },
                _initWheel: function() {
                    l.addEvent(this.wrapper, "wheel", this), l.addEvent(this.wrapper, "mousewheel", this), l.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                        l.removeEvent(this.wrapper, "wheel", this), l.removeEvent(this.wrapper, "mousewheel", this), l.removeEvent(this.wrapper, "DOMMouseScroll", this)
                    })
                },
                _wheel: function(t) {
                    if (this.enabled) {
                        t.preventDefault(), t.stopPropagation();
                        var e, i, s, o, r = this;
                        if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                                r._execEvent("scrollEnd"), r.wheelTimeout = void 0
                            }, 400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, i = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, i = -t.deltaY);
                        else if ("wheelDeltaX" in t)
                            e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, i = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                        else if ("wheelDelta" in t)
                            e = i = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                        else {
                            if (!("detail" in t))
                                return;
                            e = i = -t.detail / 3 * this.options.mouseWheelSpeed
                        }
                        if (e *= this.options.invertWheelDirection, i *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = i, i = 0), this.options.snap)
                            return s = this.currentPage.pageX, o = this.currentPage.pageY, e > 0 ? s-- : 0 > e && s++, i > 0 ? o-- : 0 > i && o++, void this.goToPage(s, o);
                        s = this.x + n.round(this.hasHorizontalScroll ? e : 0), o = this.y + n.round(this.hasVerticalScroll ? i : 0), s > 0 ? s = 0 : s < this.maxScrollX && (s = this.maxScrollX), o > 0 ? o = 0 : o < this.maxScrollY && (o = this.maxScrollY), this.scrollTo(s, o, 0)
                    }
                },
                _initSnap: function() {
                    this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                        var t, e, i, s, o, r, a = 0,
                            l = 0,
                            c = 0,
                            h = this.options.snapStepX || this.wrapperWidth,
                            u = this.options.snapStepY || this.wrapperHeight;
                        if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                            if (this.options.snap === !0)
                                for (i = n.round(h / 2), s = n.round(u / 2); c > -this.scrollerWidth;) {
                                    for (this.pages[a] = [], t = 0, o = 0; o > -this.scrollerHeight;)
                                        this.pages[a][t] = {
                                            x: n.max(c, this.maxScrollX),
                                            y: n.max(o, this.maxScrollY),
                                            width: h,
                                            height: u,
                                            cx: c - i,
                                            cy: o - s
                                        }, o -= u, t++;
                                    c -= h, a++
                                } else
                                    for (r = this.options.snap, t = r.length, e = -1; t > a; a++)(0 === a || r[a].offsetLeft <= r[a - 1].offsetLeft) && (l = 0, e++), this.pages[l] || (this.pages[l] = []), c = n.max(-r[a].offsetLeft, this.maxScrollX), o = n.max(-r[a].offsetTop, this.maxScrollY), i = c - n.round(r[a].offsetWidth / 2), s = o - n.round(r[a].offsetHeight / 2), this.pages[l][e] = {
                                        x: c,
                                        y: o,
                                        width: r[a].offsetWidth,
                                        height: r[a].offsetHeight,
                                        cx: i,
                                        cy: s
                                    }, c > this.maxScrollX && l++;
                            this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                        }
                    }), this.on("flick", function() {
                        var t = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.x - this.startX), 1e3), n.min(n.abs(this.y - this.startY), 1e3)), 300);
                        this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
                    })
                },
                _nearestSnap: function(t, e) {
                    if (!this.pages.length)
                        return {
                            x: 0,
                            y: 0,
                            pageX: 0,
                            pageY: 0
                        };
                    var i = 0,
                        s = this.pages.length,
                        o = 0;
                    if (n.abs(t - this.absStartX) < this.snapThresholdX && n.abs(e - this.absStartY) < this.snapThresholdY)
                        return this.currentPage;
                    for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); s > i; i++)
                        if (t >= this.pages[i][0].cx) {
                            t = this.pages[i][0].x;
                            break
                        }
                    for (s = this.pages[i].length; s > o; o++)
                        if (e >= this.pages[0][o].cy) {
                            e = this.pages[0][o].y;
                            break
                        }
                    return i == this.currentPage.pageX && (i += this.directionX, 0 > i ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), t = this.pages[i][0].x), o == this.currentPage.pageY && (o += this.directionY, 0 > o ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), e = this.pages[0][o].y), {
                        x: t,
                        y: e,
                        pageX: i,
                        pageY: o
                    }
                },
                goToPage: function(t, e, i, s) {
                    s = s || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : 0 > t && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : 0 > e && (e = 0);
                    var o = this.pages[t][e].x,
                        r = this.pages[t][e].y;
                    i = void 0 === i ? this.options.snapSpeed || n.max(n.max(n.min(n.abs(o - this.x), 1e3), n.min(n.abs(r - this.y), 1e3)), 300) : i, this.currentPage = {
                        x: o,
                        y: r,
                        pageX: t,
                        pageY: e
                    }, this.scrollTo(o, r, i, s)
                },
                next: function(t, e) {
                    var i = this.currentPage.pageX,
                        n = this.currentPage.pageY;
                    i++, i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, t, e)
                },
                prev: function(t, e) {
                    var i = this.currentPage.pageX,
                        n = this.currentPage.pageY;
                    i--, 0 > i && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, t, e)
                },
                _initKeys: function(t) {
                    var i, n = {
                        pageUp: 33,
                        pageDown: 34,
                        end: 35,
                        home: 36,
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40
                    };
                    if ("object" == typeof this.options.keyBindings)
                        for (i in this.options.keyBindings)
                            "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
                    else
                        this.options.keyBindings = {};
                    for (i in n)
                        this.options.keyBindings[i] = this.options.keyBindings[i] || n[i];
                    l.addEvent(e, "keydown", this), this.on("destroy", function() {
                        l.removeEvent(e, "keydown", this)
                    })
                },
                _key: function(t) {
                    if (this.enabled) {
                        var e, i = this.options.snap,
                            s = i ? this.currentPage.pageX : this.x,
                            o = i ? this.currentPage.pageY : this.y,
                            r = l.getTime(),
                            a = this.keyTime || 0,
                            c = .25;
                        switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(n.round(e.x), n.round(e.y)), this.isInTransition = !1), this.keyAcceleration = 200 > r - a ? n.min(this.keyAcceleration + c, 50) : 0, t.keyCode) {
                            case this.options.keyBindings.pageUp:
                                this.hasHorizontalScroll && !this.hasVerticalScroll ? s += i ? 1 : this.wrapperWidth : o += i ? 1 : this.wrapperHeight;
                                break;
                            case this.options.keyBindings.pageDown:
                                this.hasHorizontalScroll && !this.hasVerticalScroll ? s -= i ? 1 : this.wrapperWidth : o -= i ? 1 : this.wrapperHeight;
                                break;
                            case this.options.keyBindings.end:
                                s = i ? this.pages.length - 1 : this.maxScrollX, o = i ? this.pages[0].length - 1 : this.maxScrollY;
                                break;
                            case this.options.keyBindings.home:
                                s = 0, o = 0;
                                break;
                            case this.options.keyBindings.left:
                                s += i ? -1 : 5 + this.keyAcceleration >> 0;
                                break;
                            case this.options.keyBindings.up:
                                o += i ? 1 : 5 + this.keyAcceleration >> 0;
                                break;
                            case this.options.keyBindings.right:
                                s -= i ? -1 : 5 + this.keyAcceleration >> 0;
                                break;
                            case this.options.keyBindings.down:
                                o -= i ? 1 : 5 + this.keyAcceleration >> 0;
                                break;
                            default:
                                return
                        }
                        if (i)
                            return void this.goToPage(s, o);
                        s > 0 ? (s = 0, this.keyAcceleration = 0) : s < this.maxScrollX && (s = this.maxScrollX, this.keyAcceleration = 0), o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollY && (o = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(s, o, 0), this.keyTime = r
                    }
                },
                _animate: function(t, e, i, n) {
                    function s() {
                        var p, f, d, m = l.getTime();
                        return m >= u ? (o.isAnimating = !1, o._translate(t, e), void(o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd"))) : (m = (m - h) / i, d = n(m), p = (t - r) * d + r, f = (e - c) * d + c, o._translate(p, f), void(o.isAnimating && a(s)))
                    }

                    var o = this,
                        r = this.x,
                        c = this.y,
                        h = l.getTime(),
                        u = h + i;
                    this.isAnimating = !0, s()
                },
                handleEvent: function(t) {
                    switch (t.type) {
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                        case "mousedown":
                            this._start(t);
                            break;
                        case "touchmove":
                        case "pointermove":
                        case "MSPointerMove":
                        case "mousemove":
                            this._move(t);
                            break;
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseup":
                        case "touchcancel":
                        case "pointercancel":
                        case "MSPointerCancel":
                        case "mousecancel":
                            this._end(t);
                            break;
                        case "orientationchange":
                        case "resize":
                            this._resize();
                            break;
                        case "transitionend":
                        case "webkitTransitionEnd":
                        case "oTransitionEnd":
                        case "MSTransitionEnd":
                            this._transitionEnd(t);
                            break;
                        case "wheel":
                        case "DOMMouseScroll":
                        case "mousewheel":
                            this._wheel(t);
                            break;
                        case "keydown":
                            this._key(t);
                            break;
                        case "click":
                            t._constructed || (t.preventDefault(), t.stopPropagation())
                    }
                }
            }, r.prototype = {
                handleEvent: function(t) {
                    switch (t.type) {
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                        case "mousedown":
                            this._start(t);
                            break;
                        case "touchmove":
                        case "pointermove":
                        case "MSPointerMove":
                        case "mousemove":
                            this._move(t);
                            break;
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseup":
                        case "touchcancel":
                        case "pointercancel":
                        case "MSPointerCancel":
                        case "mousecancel":
                            this._end(t)
                    }
                },
                destroy: function() {
                    this.options.interactive && (l.removeEvent(this.indicator, "touchstart", this), l.removeEvent(this.indicator, l.prefixPointerEvent("pointerdown"), this), l.removeEvent(this.indicator, "mousedown", this), l.removeEvent(e, "touchmove", this), l.removeEvent(e, l.prefixPointerEvent("pointermove"), this), l.removeEvent(e, "mousemove", this), l.removeEvent(e, "touchend", this), l.removeEvent(e, l.prefixPointerEvent("pointerup"), this), l.removeEvent(e, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
                },
                _start: function(t) {
                    var i = t.touches ? t.touches[0] : t;
                    t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = i.pageX, this.lastPointY = i.pageY, this.startTime = l.getTime(), this.options.disableTouch || l.addEvent(e, "touchmove", this), this.options.disablePointer || l.addEvent(e, l.prefixPointerEvent("pointermove"), this), this.options.disableMouse || l.addEvent(e, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
                },
                _move: function(t) {
                    var e, i, n, s, o = t.touches ? t.touches[0] : t;
                    l.getTime();
                    this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = o.pageX - this.lastPointX, this.lastPointX = o.pageX, i = o.pageY - this.lastPointY, this.lastPointY = o.pageY, n = this.x + e, s = this.y + i, this._pos(n, s), t.preventDefault(), t.stopPropagation()
                },
                _end: function(t) {
                    if (this.initiated) {
                        if (this.initiated = !1, t.preventDefault(), t.stopPropagation(), l.removeEvent(e, "touchmove", this), l.removeEvent(e, l.prefixPointerEvent("pointermove"), this), l.removeEvent(e, "mousemove", this), this.scroller.options.snap) {
                            var i = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                                s = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.scroller.x - i.x), 1e3), n.min(n.abs(this.scroller.y - i.y), 1e3)), 300);
                            (this.scroller.x != i.x || this.scroller.y != i.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = i, this.scroller.scrollTo(i.x, i.y, s, this.scroller.options.bounceEasing))
                        }
                        this.moved && this.scroller._execEvent("scrollEnd")
                    }
                },
                transitionTime: function(t) {
                    t = t || 0, this.indicatorStyle[l.style.transitionDuration] = t + "ms", !t && l.isBadAndroid && (this.indicatorStyle[l.style.transitionDuration] = "0.001s")
                },
                transitionTimingFunction: function(t) {
                    this.indicatorStyle[l.style.transitionTimingFunction] = t
                },
                refresh: function() {
                    this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (l.addClass(this.wrapper, "iScrollBothScrollbars"), l.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (l.removeClass(this.wrapper, "iScrollBothScrollbars"), l.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                    this.wrapper.offsetHeight;
                    this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = n.max(n.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = n.max(n.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
                },
                updatePosition: function() {
                    var t = this.options.listenX && n.round(this.sizeRatioX * this.scroller.x) || 0,
                        e = this.options.listenY && n.round(this.sizeRatioY * this.scroller.y) || 0;
                    this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = n.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = n.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = n.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = n.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[l.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
                },
                _pos: function(t, e) {
                    0 > t ? t = 0 : t > this.maxPosX && (t = this.maxPosX), 0 > e ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? n.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? n.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
                },
                fade: function(t, e) {
                    if (!e || this.visible) {
                        clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                        var i = t ? 250 : 500,
                            n = t ? 0 : 300;
                        t = t ? "1" : "0", this.wrapperStyle[l.style.transitionDuration] = i + "ms", this.fadeTimeout = setTimeout(function(t) {
                            this.wrapperStyle.opacity = t, this.visible = +t
                        }.bind(this, t), n)
                    }
                }
            }, s.utils = l, "undefined" != typeof t && t.exports ? t.exports = s : e.IScroll = s
        }(window, document, Math)
    },
    210: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function s() {
                var e = {
                    click: !0,
                    tap: !0,
                    mouseWheel: !0
                };
                u["default"].mobile && (e.resizePolling = 99999999), p = new a["default"]("#main", e), t("#content").on("scrollHeightChange", function() {
                    p.refresh(), p.scrollTo(0, p.maxScrollY, 0)
                }), p.on("scrollEnd", function() {
                    if (0 !== p.maxScrollY) {
                        var t = p.y / p.maxScrollY,
                            e = c["default"].getInstance();
                        e.setProgress(t)
                    }
                })
            }

            function o() {
                return p || s(), p
            }

            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(209),
                a = n(r),
                l = i(211),
                c = n(l),
                h = i(200),
                u = n(h),
                p = void 0;
            e["default"] = {
                init: s,
                getScrollInstance: o
            }
        }).call(e, i(4))
    },
    211: function(t, e, i) {
        (function(t) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }

            var n = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = function() {
                function e(n) {
                    i(this, e), this.$indicator = t(n), this.progress = 0, this.maxProgress = 0
                }

                return n(e, [{
                    key: "setProgress",
                    value: function(t) {
                        this.progress = t, this.$indicator.css({
                            width: this.progress * this.maxProgress + "%"
                        })
                    }
                }, {
                    key: "setMaxProgress",
                    value: function(t) {
                        this.maxProgress = t
                    }
                }]), e
            }();
            s.instance = null, s.getInstance = function() {
                return s.instance ? s.instance : (s.instance = new s("#progress-bar > .indicator"), s.instance)
            }, e["default"] = s
        }).call(e, i(4))
    },
    212: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function s(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var l = i(199),
                c = i(198),
                h = n(c),
                u = i(213),
                p = n(u),
                f = function(e) {
                    function i(e, n) {
                        var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                        s(this, i);
                        var a = o(this, Object.getPrototypeOf(i).call(this));
                        return a.$elem = t(e), a.content = n, a.remains = n.length, a.paused = !1, a.config = r, a
                    }

                    return r(i, e), a(i, [{
                        key: "inject",
                        value: function() {
                            var e = this,
                                n = arguments.length <= 0 || void 0 === arguments[0] ? 50 : arguments[0],
                                s = Array.from(this.content, function(t) {
                                    return '<span class="particle">' + t + "</span>"
                                }).join("");
                            this.$elem.html(s);
                            var o = this.$elem.children(".particle");
                            return new Promise(function(s, r) {
                                var a = (0, l.getRepeater)(n, function() {
                                    if (!e.paused)
                                        if (e.remains) {
                                            var n = e.content.length - e.remains,
                                                r = t(o[n]);
                                            if (e.config.cursor && n > 0 && e.remains > 1) {
                                                var c = t(o[n + 1]);
                                                c.addClass("mock-cursor visible"), r.removeClass("mock-cursor")
                                            }
                                            r.addClass("visible"), e.remains--;
                                            var h = r.offset(),
                                                u = h.top,
                                                f = h.left,
                                                d = r.css("color").slice(4, -1).split(",");
                                            e.emit(i.EventType.INJECT, f, u, d), e.config.randomPause && /\s/.test(e.content[n]) && Math.random() > .5 && e.wait(500)
                                        } else {
                                            a.stop();
                                            var m = (0, l.escapeHtml)(e.content);
                                            e.config.cursorWait && (m += '<span class="mock-cursor"> </span>'), e.config.emptyLinesInTheEnd && (m += " \n \n"), e.$elem.addClass("visible").html(m), e.emit(i.EventType.FINISHED), e.config.cursorWait && (p["default"].getInstance().once("showMore", e.hideCursor.bind(e)), e.$elem.trigger("scrollHeightChange")), s()
                                        }
                                });
                                a.start()
                            })
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.paused = !0
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            this.paused = !1
                        }
                    }, {
                        key: "wait",
                        value: function(t) {
                            this.paused = !0, (0, l.later)(this.resume.bind(this), t)
                        }
                    }, {
                        key: "hideCursor",
                        value: function() {
                            this.$elem.find(".mock-cursor").css("visibility", "hidden")
                        }
                    }]), i
                }(h["default"]);
            f.EventType = {
                INJECT: "inject",
                FINISHED: "textInjector.finished"
            }, e["default"] = f
        }).call(e, i(4))
    },
    213: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function s(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var l = i(198),
                c = n(l),
                h = i(199),
                u = function(e) {
                    function i(e) {
                        s(this, i);
                        var n = o(this, Object.getPrototypeOf(i).call(this));
                        return n.$elm = t(e), n.$main = t("#main"), n.initHandler(), n
                    }

                    return r(i, e), a(i, [{
                        key: "initHandler",
                        value: function() {
                            var e = this,
                                i = function() {
                                    e.hide(), e.emit("showMore")
                                },
                                n = this.$elm.find(".enter-btn");
                            n.on("click", i), t(document).keypress(function(t) {
                                13 === t.which && i()
                            })
                        }
                    }, {
                        key: "show",
                        value: function() {
                            this.$elm.addClass("show")
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            var t = this;
                            (0, h.later)(function() {
                                return t.$elm.removeClass("show")
                            }, 200)
                        }
                    }]), i
                }(c["default"]);
            u.instance = null, u.getInstance = function() {
                return u.instance || (u.instance = new u(document.getElementById("action-bar"))), u.instance
            }, u.EventType = {
                SHOW_MORE: "showMore"
            }, e["default"] = u
        }).call(e, i(4))
    },
    214: function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function s(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }

        var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(215),
            c = n(l),
            h = function() {
                function t(e, i, n) {
                    r(this, t), this.init(e, i, n)
                }

                return a(t, [{
                    key: "init",
                    value: function(t, e, i) {
                        this.x = t, this.y = e, this.alpha = 1, this.rgb = i, this.velocity = {
                            x: -1 + 2 * Math.random(),
                            y: -3.5 + 2 * Math.random()
                        }
                    }
                }]), t
            }();
        h.count = 0, h.recyled = [], h.recyle = function(t) {
            return h.recyled.push(t)
        }, h.create = function(t, e, i) {
            var n = h.recyled.pop();
            return n ? n.init(t, e, i) : n = new h(t, e, i), n
        };
        var u = function(t) {
            function e() {
                r(this, e);
                var t = s(this, Object.getPrototypeOf(e).call(this));
                return t.particles = [], t.needToDestory = !1, t
            }

            return o(e, t), a(e, [{
                key: "spawnParticles",
                value: function(t, e, i) {
                    for (var n = 5 + Math.round(3 * Math.random()); n--;)
                        this.particles.push(h.create(t, e, i))
                }
            }, {
                key: "draw",
                value: function() {
                    if (!this.particles.length)
                        return void(this.needToDestory && (this.emit("requestDestroy"), this.needToDestory = !1));
                    for (var t = this.particles.length - 1; t >= 0; t--) {
                        var e = this.particles[t];
                        if (e.alpha <= .1)
                            this.particles.splice(t, 1), h.recyle(e);
                        else {
                            e.velocity.y += .075, e.x += e.velocity.x, e.y += e.velocity.y, e.alpha *= .96;
                            var i = e.rgb;
                            this.ctx.fillStyle = "rgba(" + i[0] + "," + i[1] + "," + i[2] + "," + e.alpha + ")", this.ctx.fillRect(Math.round(e.x), Math.round(e.y), 3, 3)
                        }
                    }
                }
            }, {
                key: "destroyOnFinished",
                value: function() {
                    this.needToDestory = !0
                }
            }]), e
        }(c["default"]);
        e["default"] = u
    },
    215: function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(198),
            c = n(l),
            h = function(t) {
                function e() {
                    return s(this, e), o(this, Object.getPrototypeOf(e).apply(this, arguments))
                }

                return r(e, t), a(e, [{
                    key: "setup",
                    value: function(t, e, i) {
                        this.ctx = t, this.w = e, this.h = i
                    }
                }]), e
            }(c["default"]);
        e["default"] = h
    },
    216: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = i(203),
                o = n(s);
            i(217);
            var r = {
                $elm: null,
                qrCode: null,
                $bindTo: null,
                init: function(e) {
                    var i = this;
                    this.$bindBtn = t(e), t.get("https://2015.zhihu.com/api/qrcode").always(function(t) {
                        i.qrCode = t.responseText, i.createDom(), i.bindEvent_()
                    })
                },
                createDom: function() {
                    var e = '\n      <div class="share-modal-wrap">\n        <div class="share-modal">\n          <ul>\n            <li class="share-modal--item weibo"><img src="https://2015.zhihu.com/static/img/weibo-icon.png" class="icon">点击分享到微博</li>\n            <li class="share-modal--item"><img src="https://2015.zhihu.com/static/img/wechat-icon.png" class="icon">扫码分享到微信</li>\n          </ul>\n          <img src="' + this.qrCode + '" class="qrcode">\n        </div>\n      </div>\n    ';
                    this.$elm = t(e).appendTo(document.body)
                },
                bindEvent_: function() {
                    var t = this;
                    this.$elm.click(function() {
                        return t.$elm.hide()
                    }), this.$elm.find(".weibo").click(function(t) {
                        t.stopPropagation(), window.open(o["default"].getWeiboShareUrl(), "_blank")
                    }), this.$bindBtn.click(function() {
                        return t.$elm.show()
                    })
                },
                show: function() {
                    this.$elm.show()
                }
            };
            e["default"] = r
        }).call(e, i(4))
    },
    217: function(t, e) {},
    240: function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(241),
            c = n(l),
            h = i(251),
            u = n(h),
            p = i(252),
            f = n(p),
            d = i(253),
            m = n(d),
            v = i(197),
            g = n(v),
            y = i(198),
            b = n(y),
            w = i(199),
            x = i(211),
            S = n(x),
            T = i(210),
            _ = n(T),
            P = i(202),
            E = n(P),
            k = i(196),
            O = {
                type: "text",
                data: {
                    text: "press enter to continue"
                },
                config: {
                    cursor: !0,
                    cursorWait: !0,
                    delay: 50
                }
            },
            j = function(t) {
                function e(t, i) {
                    s(this, e);
                    var n = o(this, Object.getPrototypeOf(e).call(this));
                    return n.$el = t, n.data = i, n.loging = !1, n.ended = !1, n.indexNow = 0, n.progressBar = S["default"].getInstance(), n.foreground = g["default"].getInstance(), _["default"].init(), n
                }

                return r(e, t), a(e, [{
                    key: "showAchievement",
                    value: function() {
                        (0, k.initAchieveHeight)(), E["default"].renderSection("#content", this.data.achievement)
                    }
                }, {
                    key: "showParagraph",
                    value: function(t) {
                        var e = this;
                        return new Promise(function(i, n) {
                            t.on(c["default"].EventType.FINISHED, function() {
                                e.loging = !1, i()
                            }), t.render(), e.loging = !0
                        })
                    }
                }, {
                    key: "showHint",
                    value: function(t) {
                        var e = new f["default"](O.data, Object.assign({}, O.config, {
                            emptyLinesInTheEnd: t
                        }));
                        return this.showParagraph(e)
                    }
                }, {
                    key: "showMoreParagraph",
                    value: function(t) {
                        function i() {
                            return regeneratorRuntime.wrap(function(t) {
                                for (;;)
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (!(this.indexNow < o)) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.next = 3, this.nextParagraph();
                                        case 3:
                                            t.next = 0;
                                            break;
                                        case 5:
                                            o !== s.length ? this.emit(e.EventType.WAIT) : (this.showAchievement(), this.ended = !0);
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                            }, n[0], this)
                        }

                        var n = [i].map(regeneratorRuntime.mark),
                            s = this.data.timeline,
                            o = Math.min(this.indexNow + t, s.length);
                        (0, w.runGenerator)(i.bind(this))
                    }
                }, {
                    key: "nextParagraph",
                    value: function() {
                        var t = this.data.timeline;
                        if (this.indexNow >= t.length)
                            return void reject();
                        var e = t[this.indexNow],
                            i = void 0;
                        switch (e.type) {
                            case "action":
                            case "event":
                                i = new u["default"](e.data, e.bonus);
                                break;
                            case "text":
                                i = new f["default"](e.data, e.config);
                                break;
                            case "topics":
                                i = new m["default"](e.data, this.data.bonus)
                        }
                        return this.progressBar.setMaxProgress(++this.indexNow / t.length * 100), this.progressBar.setProgress(1), this.showParagraph(i)
                    }
                }]), e
            }(b["default"]);
        j.EventType = {
            WAIT: "enterToContinue"
        }, e["default"] = j
    },
    241: function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(212),
            c = n(l),
            h = i(242),
            u = n(h),
            p = i(198),
            f = n(p),
            d = function(t) {
                function e() {
                    s(this, e);
                    var t = o(this, Object.getPrototypeOf(e).call(this));
                    return t.taskQueue = [], t
                }

                return r(e, t), a(e, [{
                    key: "excTasks",
                    value: function() {
                        return this.taskQueue.reduce(function(t, e) {
                            return t.then(e)
                        }, Promise.resolve())
                    }
                }, {
                    key: "createTextInjection",
                    value: function(t, e) {
                        var i = arguments.length <= 2 || void 0 === arguments[2] ? 70 : arguments[2];
                        return function() {
                            var n = new c["default"](t, e);
                            return n.inject(i)
                        }
                    }
                }, {
                    key: "createBonusInjection",
                    value: function() {
                        return u["default"].bind.apply(u["default"], [null].concat(Array.prototype.slice.call(arguments)))
                    }
                }]), e
            }(f["default"]);
        d.EventType = {
            FINISHED: "paragraph.finished"
        }, e["default"] = d
    },
    242: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function s(t, e, i) {
                return y[t](e, i)
            }

            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = i(197),
                r = n(o),
                a = i(243),
                l = n(a),
                c = i(244),
                h = n(c),
                u = i(245),
                p = n(u),
                f = i(247),
                d = n(f),
                m = i(248),
                v = n(m),
                g = i(199);
            i(249);
            var y = {
                img: function(t, e) {
                    var i = new d["default"](t, e);
                    return i.getReady().then(i.show)
                },
                droping: function(t, e) {
                    return new Promise(function(t, i) {
                        var n = new l["default"]({
                            url: "static/img/" + e.name,
                            width: 32,
                            height: 32
                        }, {
                            x: window.innerWidth / 400,
                            y: 1
                        }, {
                            x: 0,
                            y: .3
                        });
                        n.on("requestDestroy", function() {
                            return t()
                        }), r["default"].getInstance().addPainter("droping", n)
                    })
                },
                rolling: function(t, e) {
                    return new Promise(function(t, i) {
                        var n = Math.min(window.innerWidth / 100, 9),
                            s = new h["default"]({
                                url: "static/img/" + e.name,
                                r: 32
                            }, n, -.02);
                        s.on("requestDestroy", function() {
                            return t()
                        }), r["default"].getInstance().addPainter("rolling", s)
                    })
                },
                ascii: function(t, e) {
                    return new Promise(function(i, n) {
                        var s = new p["default"](e.name, t, 5);
                        s.on(p["default"].EventType.FINISHED, function() {
                            s.remove(), i()
                        }).on(p["default"].EventType.ABORT, function() {
                            s.remove(), n()
                        })
                    })
                },
                animation: function(t, e) {
                    return v["default"][e.name](t, e)
                },
                gradient: function(e) {
                    return new Promise(function(i, n) {
                        t(e).addClass("gradient"), (0, g.later)(function() {
                            return i()
                        }, 1e3)
                    })
                }
            };
            e["default"] = s
        }).call(e, i(4))
    },
    243: function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(215),
            c = n(l),
            h = function(t) {
                function e(t) {
                    var i = arguments.length <= 1 || void 0 === arguments[1] ? {
                            x: 1,
                            y: 1
                        } : arguments[1],
                        n = arguments.length <= 2 || void 0 === arguments[2] ? {
                            x: 0,
                            y: 0
                        } : arguments[2],
                        r = arguments.length <= 3 || void 0 === arguments[3] ? {
                            x: 50,
                            y: 50
                        } : arguments[3];
                    s(this, e);
                    var a = o(this, Object.getPrototypeOf(e).call(this));
                    return a.img = new Image, a.img.src = t.url, a.width = t.width, a.height = t.height, a.velocity = i, a.force = n, a.position = r, a.groundHeight = 50, a.angle = 0, a.angleVelocity = 5 * Math.PI / 180, a
                }

                return r(e, t), a(e, [{
                    key: "isOutOfScreen",
                    value: function() {
                        var t = this.position,
                            e = t.x,
                            i = t.y;
                        return e > this.w || e + this.width < 0 || i > this.h || i - this.height < 0
                    }
                }, {
                    key: "draw",
                    value: function() {
                        this.isOutOfScreen() && this.emit("requestDestroy");
                        try {
                            this.velocity.x += this.force.x, this.velocity.y += this.force.y, this.position.y >= this.h - 100 && this.velocity.y > 0 && (this.velocity.y = -.6 * this.velocity.y), this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.angle += this.angleVelocity, this.ctx.save(), this.ctx.translate(this.position.x, this.position.y), this.ctx.rotate(this.angle), this.ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height), this.ctx.restore()
                        } catch (t) {
                            this.emit("requestDestroy")
                        }
                    }
                }]), e
            }(c["default"]);
        e["default"] = h
    },
    244: function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function r(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = i(215),
            c = n(l),
            h = 1,
            u = function(t) {
                function e(t) {
                    var i = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1],
                        n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                        r = arguments.length <= 3 || void 0 === arguments[3] ? {
                            x: 50,
                            y: window.innerHeight - 80
                        } : arguments[3];
                    s(this, e);
                    var a = o(this, Object.getPrototypeOf(e).call(this));
                    return a.img = new Image, a.img.src = t.url, a.r = t.r, a.velocity = i, a.friction = n, a.position = r, a.angle = 0, a.angleVelocity = a.velocity / a.r, a
                }

                return r(e, t), a(e, [{
                    key: "isOutOfScreen",
                    value: function() {
                        var t = this.position,
                            e = t.x,
                            i = t.y;
                        return e > this.w || e + this.r < 0 || i > this.h || i - this.r < 0
                    }
                }, {
                    key: "draw",
                    value: function() {
                        this.isOutOfScreen() && this.emit("requestDestroy");
                        try {
                            this.velocity > 0 && (this.velocity += this.friction), this.velocity = Math.max(h, this.velocity), this.angleVelocity = this.velocity / this.r, this.position.x += this.velocity, this.angle += this.angleVelocity, this.ctx.save(), this.ctx.translate(this.position.x, this.position.y), this.ctx.rotate(this.angle), this.ctx.drawImage(this.img, -this.r / 2, -this.r / 2, this.r, this.r), this.ctx.restore()
                        } catch (t) {
                            this.emit("requestDestroy")
                        }
                    }
                }]), e
            }(c["default"]);
        e["default"] = u
    },
    245: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function s(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var l = i(198),
                c = n(l),
                h = i(199),
                u = i(246),
                p = function(e) {
                    function i(e, n) {
                        s(this, i);
                        var r = o(this, Object.getPrototypeOf(i).call(this));
                        return r.framesData = null, r.currentFrameIndex = 0, r.speed = null, r.style = null, r.name = e, r.loop = 0, r.$elm = t('<pre class="ASCIImation"></pre>'), r.appendTo = n, r.loadData(e), r
                    }

                    return r(i, e), a(i, [{
                        key: "loadData",
                        value: function(t) {
                            var e = this;
                            (0, u.loadJson)(t).then(function(t) {
                                return e.onLoad(t)
                            })["catch"](function(t) {
                                return e.emit(i.EventType.ABORT)
                            })
                        }
                    }, {
                        key: "onLoad",
                        value: function(t) {
                            this.framesData = t.content, this.speed = t.speed, this.style = t.style, this.loop = t.loop, this.initView()
                        }
                    }, {
                        key: "initView",
                        value: function() {
                            var t = this.style;
                            this.$elm.css({
                                backgroundColor: t.backgroundColor,
                                color: t.color,
                                width: .6 * t.width + "em",
                                height: t.height + "em"
                            }), this.start()
                        }
                    }, {
                        key: "drawFrame",
                        value: function() {
                            if (this.currentFrameIndex === this.framesData.length) {
                                if (!this.loop)
                                    return void this.emit(i.EventType.FINISHED);
                                this.currentFrameIndex = 0, this.loop -= 1
                            }
                            var t = this.framesData[this.currentFrameIndex++];
                            this.$elm.text(t.text), (0, h.later)(this.drawFrame.bind(this), this.speed)
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this.$elm.appendTo(this.appendTo), this.drawFrame(), this.$elm.trigger("scrollHeightChange")
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this.$elm.remove().trigger("scrollHeightChange")
                        }
                    }]), i
                }(c["default"]);
            p.EventType = {
                FINISHED: "done",
                ABORT: "abort"
            }, e["default"] = p
        }).call(e, i(4))
    },
    246: function(t, e, i) {
        (function(t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = {
                    img: {},
                    json: {}
                },
                n = function(t) {
                    return i.img[t] ? Promise.resolve(i.img[t]) : new Promise(function(e, n) {
                        var s = new Image;
                        s.onload = function() {
                            i.img[t] = s, e(s)
                        }, s.onerror = function() {
                            return n("image " + t + " can not load")
                        }, s.src = "https://2015.zhihu.com/static/img/" + t
                    })
                },
                s = function(e) {
                    return new Promise(function(n, s) {
                        if (i.json[e])
                            try {
                                var o = JSON.parse(localStorage.getItem(e));
                                n(o)
                            } catch (r) {
                                s("get preload json failed")
                            } else
                                t.get("https://2015.zhihu.com/static/ascii/" + e + ".json").then(function(t) {
                                    try {
                                        localStorage.setItem(e, JSON.stringify(t)), i.json[e] = t
                                    } catch (s) {}
                                    n(t)
                                }, function(t) {
                                    return s("ajax get json failed")
                                })
                    })
                };
            e.loadImg = n, e.loadJson = s
        }).call(e, i(4))
    },
    247: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }

            var s = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = i(199),
                r = i(246),
                a = function() {
                    function e(t, i) {
                        n(this, e), this.url = "static/img/" + i.name, this.style = i.style || {}, this.className = i.className && i.className + " img-bonus" || "img-bonus", this.removeInSecs = i.removeInSecs, this.$elem = null, this.appendTo = t, this.ready = !1, this.name = i.name, this.show = this.show.bind(this)
                    }

                    return s(e, [{
                        key: "getReady",
                        value: function() {
                            var e = this;
                            return new Promise(function(i, n) {
                                (0, r.loadImg)(e.name).then(function(n) {
                                    var s = Object.assign({}, e.style);
                                    e.className.includes("multiline-img") || (s.width = n.width / 2 + "px"), e.loaded = !0, e.$elem = t(n).addClass(e.className).css(s).appendTo(e.appendTo).trigger("scrollHeightChange"), i()
                                })["catch"](function(t) {
                                    return n("image " + e.url + " can not load")
                                })
                            })
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var t = this;
                            arguments.length <= 0 || void 0 === arguments[0] ? 200 : arguments[0];
                            return new Promise(function(e) {
                                return t.$elem.addClass("show popup"), t.removeInSecs ? void(0, o.later)(function() {
                                    t.$elem.remove().trigger("scrollHeightChange"), e()
                                }, 1e3 * t.removeInSecs) : void e()
                            })
                        }
                    }]), e
                }();
            e["default"] = a
        }).call(e, i(4))
    },
    248: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(e, i) {
                return new Promise(function(n, r) {
                    (0, o.loadImg)("magnet.png").then(function(o) {
                        var r = '<div class="bonus-animation first-invite"><span class="name-left">' + i.nameLeft + '</span><span class="name-right">' + i.nameRight + "</span></div>",
                            a = t(r);
                        t(o).insertAfter(a.find(".name-left")), a.appendTo(e).trigger("scrollHeightChange"), (0, s.later)(function() {
                            a.remove().trigger("scrollHeightChange"), n()
                        }, 2e3)
                    })["catch"](function(t) {
                        return n()
                    })
                })
            }

            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = i(199),
                o = i(246);
            e["default"] = {
                first_invite: n,
                first_invited: n
            }
        }).call(e, i(4))
    },
    249: function(t, e) {},
    251: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function s(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var l = i(212),
                c = (n(l), i(241)),
                h = n(c),
                u = i(199),
                p = function(e) {
                    function i(t, e) {
                        s(this, i);
                        var n = o(this, Object.getPrototypeOf(i).call(this));
                        return n.data = t, n.bonus = e, n
                    }

                    return r(i, e), a(i, [{
                        key: "createDom",
                        value: function(t) {
                            var e = t.map(function(t) {
                                return '<div class="line valid invisible"><span class="data-name line-text">' + (0, u.escapeHtml)(t.name) + '：</span><span class="data-value line-text">' + t.value + "</span></div>"
                            }).join("");
                            return '\n      <div class="paragraph action">\n        ' + e + '\n        <div class="line"><span class="line-text">\n</span></div>\n      </div>\n    '
                        }
                    }, {
                        key: "init",
                        value: function() {
                            this.$el = t(this.createDom(this.data, this.index)).appendTo("#content").trigger("scrollHeightChange");
                            var e = this;
                            if (this.$el.find(".line.valid").each(function(i) {
                                    var n = t(this),
                                        s = n.find(".data-name")[0],
                                        o = n.find(".data-value")[0];
                                    if (e.taskQueue.push(e.createTextInjection(s, t(s).text())), e.taskQueue.push(e.createTextInjection(o, t(o).text())), e.data[i].bonus) {
                                        var r = e.data[i].bonus,
                                            a = "img" === r.type && "inline-img" === r.data.className,
                                            l = "ascii" === r.type && "register" === r.data.name,
                                            c = "gradient" === r.type,
                                            h = a || l || c ? n : e.$el;
                                        e.taskQueue.push(e.createBonusInjection(r.type, h, r.data))
                                    }
                                }), this.bonus) {
                                var i = this.bonus;
                                this.taskQueue.push(this.createBonusInjection(i.type, this.$el, i.data))
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            this.init(), this.excTasks().then(function() {
                                return t.emit(h["default"].EventType.FINISHED)
                            })
                        }
                    }]), i
                }(h["default"]);
            e["default"] = p
        }).call(e, i(4))
    },
    252: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function s(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var l = i(212),
                c = n(l),
                h = i(241),
                u = n(h),
                p = i(214),
                f = n(p),
                d = i(197),
                m = n(d),
                v = (i(199), function(e) {
                    function i(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        s(this, i);
                        var n = o(this, Object.getPrototypeOf(i).call(this));
                        return n.data = t, n.config = e, n.injector = null, n
                    }

                    return r(i, e), a(i, [{
                        key: "createDom",
                        value: function(t) {
                            return '<div class="paragraph"><div class="line invisible"><span class="line-text">' + t.text + '</span></div><div class="line"><span class="line-text">\n</span></div></div>'
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var e = this;
                            this.$el = t(this.createDom(this.data)).appendTo("#content").trigger("scrollHeightChange"), this.injector = new c["default"](this.$el.find(".line-text").get(0), this.data.text, this.config), this.config.effect && ! function() {
                                var t = m["default"].getInstance();
                                e.painter = new f["default"], t.addPainter("powerTyping", e.painter), e.injector.on(c["default"].EventType.INJECT, function(e, i, n) {
                                    t.painters.powerTyping.spawnParticles(e, i, n)
                                })
                            }()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            this.init(), this.injector.inject(this.config.delay || 100).then(function() {
                                t.painter && t.painter.destroyOnFinished(), t.injector = null, t.emit(u["default"].EventType.FINISHED)
                            })
                        }
                    }]), i
                }(u["default"]));
            e["default"] = v
        }).call(e, i(4))
    },
    253: function(t, e, i) {
        (function(t) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function s(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function r(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            var a = function() {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function(e, i, n) {
                    return i && t(e.prototype, i), n && t(e, n), e
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var l = i(241),
                c = n(l),
                h = i(242),
                u = n(h),
                p = i(199),
                f = {},
                d = function(e) {
                    function i(t, e) {
                        s(this, i);
                        var n = o(this, Object.getPrototypeOf(i).call(this));
                        return n.data = t, n.bonusAll = e, n.topicsToInsert = [], n
                    }

                    return r(i, e), a(i, [{
                        key: "createDom",
                        value: function(t) {
                            var e = t[1].value.map(function(t) {
                                    return '<span class="topic-block data-value">' + t + "</span>"
                                }).join(""),
                                i = '<div class="paragraph topicParagraph"><div class="line date invisible"><span class="data-name">' + (0,
                                    p.escapeHtml)(t[0].name) + '：</span><span class="data-value">' + t[0].value + '</span></div><div class="line topics invisible"><div class="left"><span class="data-name">' + t[1].name + '</span></div><div class="right">' + e + '</div></div><div class="line"><span class="line-text">\n</span></div></div>';
                            return i
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var e = this.$el = t(this.createDom(this.data)).appendTo("#content").trigger("scrollHeightChange");
                            this.taskQueue.push(this.createTextInjection(e.find(".date > .data-name").get(0), this.data[0].name + "：")), this.taskQueue.push(this.createTextInjection(e.find(".date > .data-value").get(0), this.data[0].value)), this.taskQueue.push(this.createTextInjection(e.find(".left > .data-name").get(0), this.data[1].name + "：")), this.topicsToInsert = this.$el.find(".topic-block")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            this.init(), this.excTasks().then(function() {
                                return t.insertTopic(0)
                            })
                        }
                    }, {
                        key: "insertTopic",
                        value: function(e) {
                            if (e === this.topicsToInsert.length)
                                return void this.emit(c["default"].EventType.FINISHED);
                            var i = t(this.topicsToInsert[e]);
                            i.css("visibility", "visible");
                            var n = this.data[1].value[e],
                                s = this.bonusAll,
                                o = s && s[n];
                            if (o && !f[o.id]) {
                                var r = "img" === o.type ? Object.assign({
                                    removeInSecs: 2
                                }, o.data) : o.data;
                                f[o.id] = !0, this.showBonusAndGoOn(o.type, e, i, 500, r)
                            } else(0, p.later)(this.insertTopic.bind(this, e + 1), 500)
                        }
                    }, {
                        key: "showBonusAndGoOn",
                        value: function(t, e, i, n, s) {
                            var o = this;
                            i.addClass("bonus"), (0, p.later)(function() {
                                i.removeClass("bonus"), (0, u["default"])(t, o.$el, s).then(function() {
                                    return o.insertTopic(e + 1)
                                })["catch"](function() {
                                    return o.insertTopic(e + 1)
                                })
                            }, n)
                        }
                    }]), i
                }(c["default"]);
            e["default"] = d
        }).call(e, i(4))
    },
    254: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                var t = document.createElement("script");
                t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/analytics.js";
                var e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(t, e)
            },
            n = function() {
                window.ga = window.ga || function() {
                    (ga.q = ga.q || []).push(arguments)
                }, ga.l = +new Date, ga("create", "UA-20961733-1", "auto"), ga("send", "pageview")
            },
            s = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0];
                ga("set", {
                    userId: t
                }), ga("send", "event", "zhihu2015", "app_start")
            },
            o = function() {
                i(), n()
            };
        e["default"] = {
            init: o,
            trackAppStart: s
        }
    }
});