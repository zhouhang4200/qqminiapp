! function(e) {
    var t = {};

    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
    }
    n.m = e,
        n.c = t,
        n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        },
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        },
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
                8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var o in e)
                    n.d(r, o, function(t) {
                            return e[t]
                        }
                        .bind(null, o));
            return r
        },
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t),
                t
        },
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        n.p = "//vm.gtimg.cn/tencentvideo/script/channel/",
        n(n.s = 13)
}([function(e, t, n) {
    "use strict";

    function r(e, t) {
        return e && e.hasOwnProperty && e.hasOwnProperty(t)
    }
    var o = {
        escape: function(e) {
            return e ? String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : ""
        },
        type: function(e) {
            if (null === e)
                return "null";
            if (void 0 === e)
                return "undefined";
            var t = /\[object (\w+)\]/.exec(Object.prototype.toString.call(e));
            return t ? t[1].toLowerCase() : ""
        },
        keys: function(e) {
            var t = [];
            return e ? Object.keys ? Object.keys(e) : (this.objEach(e, function(e) {
                    t.push(e)
                }),
                t) : t
        },
        bind: function(e, t) {
            return e.bind ? e.bind(t) : function() {
                return e.apply(t, arguments)
            }
        },
        extend: function(e) {
            if ("object" != this.type(e) && "function" != this.type(e))
                return e;
            for (var t, n, o = 1, i = arguments.length; o < i; o++)
                for (n in t = arguments[o])
                    r(t, n) && (e[n] = t[n]);
            return e
        },
        trim: function(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/gm, "")
        },
        indexOf: function(e, t) {
            if (e.indexOf)
                return e.indexOf(t);
            var n = -1;
            return o.some(e, function(e, r) {
                    if (e === t)
                        return n = r, !0
                }),
                n
        },
        forEach: function(e, t) {
            if (e.forEach)
                return e.forEach(t);
            for (var n = e.length, r = 0; r < n; r++)
                t(e[r], r);
            return e
        },
        some: function(e, t) {
            if (e.some)
                return e.some(t);
            for (var n = e.length, r = !1, o = 0; o < n; o++)
                if (t(e[o], o)) {
                    r = !0;
                    break
                }
            return r
        },
        map: function(e, t) {
            if (e.map)
                return e.map(t);
            for (var n = e.length, r = [], o = 0; o < n; o++)
                r.push(t(e[o], o));
            return r
        },
        objEach: function(e, t) {
            if (e)
                for (var n in e)
                    if (r(e, n) && !1 === t(n, e[n]))
                        break
        },
        reduce: function(e, t) {
            if ("function" != o.type(t))
                throw new TypeError("Array.prototype.reduce callback must be a function");
            var n, r = e.length;
            if (0 === r && 2 === arguments.length)
                throw new TypeError("reduce of empty array with no initial value");
            var i = 0;
            if (arguments.length >= 3)
                n = arguments[2];
            else
                for (;;) {
                    if (i in e) {
                        n = e[i++];
                        break
                    }
                    if (++i >= r)
                        throw new TypeError("reduceRight of empty array with no initial value")
                }
            for (; i < r; i++)
                n = t(n, e[i], i, e);
            return n
        },
        filter: function(e, t, n) {
            if (e.filter)
                return e.filter(t);
            for (var r = e.length, o = [], i = 0; i < r; i++) {
                var a = e[i];
                t.call(n, a, i, e) && o.push(a)
            }
            return o
        },
        nextTick: function() {
            var e = this;
            return function() {
                setTimeout.apply(e, arguments)
            }
        }(),
        lock: function(e) {
            var t;
            return function() {
                if (!t) {
                    t = !0;
                    var n = [].slice.call(arguments, 0);
                    return n.unshift(function() {
                            t = !1
                        }),
                        e.apply(this, n)
                }
            }
        },
        queue: function(e, t) {
            var n = [],
                r = t = t || 1;
            return function() {
                if (n.push([e, this, [].slice.call(arguments, 0)]),
                    r)
                    return function e() {
                        var o = n.shift();
                        if (o) {
                            r--;
                            var i = o[0],
                                a = o[1],
                                c = o[2];
                            c.unshift(function() {
                                    r++,
                                    e.apply(this, arguments)
                                }),
                                setTimeout(function() {
                                    i.apply(a, c)
                                })
                        } else
                            r = t
                    }()
            }
        },
        delegator: function(e) {
            var t, n = [];
            return function(r) {
                if (t)
                    return n.push(r);
                t = !0,
                    e.call(this, function() {
                        t = !1;
                        var e = this,
                            i = arguments;
                        r && r.apply(e, i);
                        var a = n;
                        n = [],
                            o.forEach(a, function(t) {
                                t && t.apply(e, i)
                            })
                    })
            }
        },
        once: function(e) {
            var t, n = arguments;
            return function() {
                if (!t && e)
                    return t = !0,
                        e.apply(n.length >= 2 ? n[1] : null, arguments)
            }
        },
        verCompare: function(e, t) {
            if (e === t)
                return 0;
            e = e.split("."),
                t = t.split(".");
            for (var n = e.length >= t.length ? e.length : t.length, r = 0; n--;) {
                var o = Number(e[r] || 0),
                    i = Number(t[r++] || 0);
                if (i > o)
                    return 1;
                if (i < o)
                    return -1
            }
            return 0
        },
        batchTimeout: function(e, t) {
            var n = this,
                r = t / e;
            (!r || r < 1) && (e = 1,
                r = t),
            r = Math.round(r);
            var o, i = !1,
                a = [],
                c = [];
            return function(e) {
                a.push(e),
                    i ? c.push(+new Date) : (o = +new Date,
                        c.push(o),
                        i = !0,
                        setTimeout(function() {
                            var e = Math.round(n.reduce(c, function(e, t) {
                                return e + (t - o)
                            }, 0) / c.length);
                            i = !1,
                                c = [];
                            var u = a.slice(0);
                            a = [],
                                setTimeout(function() {
                                    u.forEach(function(e) {
                                        try {
                                            e && e()
                                        } catch (e) {
                                            console.error(e)
                                        }
                                    })
                                }, Math.max(t - r - e, 0))
                        }, r))
            }
        }
    };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function r() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.s4 = r,
        t.getUUID = function() {
            return [r(), r(), r(), r()].join("")
        },
        t.getPgvPvid = function() {
            return Math.round(2147483647 * Math.abs(Math.random() - 1)) * (new Date).getUTCMilliseconds() % 1e10
        },
        t.getPageContext = function(e) {
            if (!e)
                return {
                    html: "",
                    params: {}
                };
            try {
                var t = "";
                return e = e.replace(/(?:<div class="hide">responsedata=\/\*)(.*)(?:\*\/<\/div>)/, function(e, n, r, o, i) {
                    return t = n,
                        ""
                }), {
                    html: $.trim(e),
                    params: JSON.parse(t.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x60;/g, "`").replace(/&#x3D;/g, "=")) || {}
                }
            } catch (e) {
                return {
                    html: "",
                    params: {}
                }
            }
        },
        t.getPlatformCode = function(e) {
            return 3
        },
        t.canLoadMore = function() {
            var e = document.body.scrollTop || document.documentElement.scrollTop,
                t = document.documentElement.clientHeight,
                n = document.body.offsetHeight;
            return e + t + 40 >= n && e > 0
        },
        t.getCookie = function(e) {
            if (document.cookie.length > 0) {
                var t = document.cookie.indexOf(e + "=");
                if (-1 != t) {
                    t = t + e.length + 1;
                    var n = document.cookie.indexOf(";", t);
                    return -1 == n && (n = document.cookie.length),
                        unescape(document.cookie.substring(t, n))
                }
            }
            return ""
        },
        t.getCookieNode = function(e, t) {
            if (t && t.length > 0) {
                var n = t.indexOf(e + "=");
                if (-1 != n) {
                    n = n + e.length + 1;
                    var r = t.indexOf(";", n);
                    return -1 == r && (r = t.length),
                        unescape(t.substring(n, r))
                }
            }
            return ""
        },
        t.setCookie = function(e, t, n) {
            var r = new Date;
            r.setDate(r.getDate() + n);
            var o = "expires=" + r.toUTCString();
            document.cookie = e + "=" + t + "; " + o
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = t.report = Boss2018("mchannel");
    t.reportError = function(e, t) {
        r.cgi({
            cgiurl: e,
            delay: 300,
            starttime: Date.now(),
            bismsg: t
        })
    };
    (t.boss = n(19).standard()).setApp("mchannel").bind(document.body, "boss-module", "boss-item")
}, function(e, t, n) {
    "use strict";
    var r = {
        logo: function(e) {
            ! function(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            }(e)
        },
        avatar: function(e) {
            o(e)
        },
        h: function(e) {
            o(e)
        },
        v: function(e) {
            o(e)
        },
        s: function(e) {
            o(e)
        },
        tag: function(e) {
            o(e)
        }
    };

    function o(e) {
        var t = function(e) {
            var t = e && e.getAttribute("type") || "v";
            if ("avatar" === t)
                return "//puui.qpic.cn/vupload/0/common_avatar.png/0";
            if ("h" === t)
                return "//puui.qpic.cn/vupload/0/common_pic_h.png/0";
            if ("v" === t)
                return "//puui.qpic.cn/vupload/0/common_pic_v.png/0";
            if ("s" === t)
                return "//puui.qpic.cn/vupload/0/common_pic_s.png/0";
            if ("tag" === t)
                return "//puui.qpic.cn/vupload/0/20180903_pic_220_220.png/0"
        }(e);
        if (t && t !== e.src) {
            var n = new Image;
            n.src = t,
                n.onload = function() {
                    n = null,
                        e.src = t
                }
        }
    }
    window.addEventListener("error", function(e) {
            if (e && e.target && e.target.nodeName && "img" === e.target.nodeName.toLowerCase()) {
                var t = e.target.getAttribute("type") || "v";
                console.warn("image error", e.target.getAttribute("src")),
                    "function" == typeof r[t] && r[t](e.target)
            }
        }, !0),
        e.exports = {
            lazyLoad: function(e, t) {
                if (e)
                    for (var n = +t || 300, r = e.querySelectorAll("img"), o = r.length, i = document.documentElement.clientHeight, a = 0; a < o; a++)
                        (r[a].hasAttribute("lazyLoad") || r[a].getAttribute("lazyLoad")) && r[a].hasAttribute("dsrc") && r[a].getBoundingClientRect().top <= i + n && (r[a].src = r[a].getAttribute("dsrc"),
                            r[a].removeAttribute("dsrc"))
            }
        }
}, function(e, t, n) {
    "use strict";
    var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : o(window)) && (r = window)
    }
    e.exports = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
                r && e(t, r),
                t
        }
    }();

    function o(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var i = function() {
        function e() {
            o(this, e),
                this._cache = Object.create(null)
        }
        return r(e, [{
                key: "getById",
                value: function(e) {
                    return this._cache[e]
                }
            }, {
                key: "addById",
                value: function(e, t) {
                    var n = this._cache[e];
                    n || (n = this._cache[e] = {
                            index: -1,
                            item: []
                        }),
                        n.index++,
                        n.item.push(t)
                }
            }, {
                key: "next",
                value: function(e) {
                    var t = this._cache[e];
                    return t && t.item.length ? (t.index >= t.item.length - 1 ? t.index = 0 : t.index++,
                        t.item[t.index]) : ""
                }
            }]),
            e
    }();
    t.default = function e(t, n, r) {
        o(this, e),
            t || console.error("无效注册：ChannelCache"),
            this.channelTag = t,
            this.data = n || {},
            this.html = r || "",
            this.refreshCache = new i
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);

    function o() {
        this._evtObjs = {},
            this._outdatedMsgs = {}
    }

    function i() {}
    o.prototype.on = function(e, t, n) {
            this._evtObjs[e] || (this._evtObjs[e] = []),
                this._evtObjs[e].push({
                    handler: t,
                    once: n
                });
            var r = this;
            return function() {
                r.off(e, t)
            }
        },
        o.prototype.wait = function(e, t) {
            return this._outdatedMsgs[e] ? (t.apply(null, this._outdatedMsgs[e]),
                i) : this.on(e, t, !0)
        },
        o.prototype.off = function(e, t) {
            var n, o = this;
            return n = e ? [e] : r.keys(this._evtObjs),
                r.forEach(n, function(e) {
                    if (t) {
                        var n = o._evtObjs[e] || [],
                            i = [];
                        r.forEach(n, function(e) {
                                e.handler !== t && i.push(e)
                            }),
                            o._evtObjs[e] = i
                    } else
                        o._evtObjs[e] = []
                }),
                this
        },
        o.prototype.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            this._outdatedMsgs[e] = t;
            var n = this._evtObjs[e] || [];
            r.forEach(n, function(e) {
                e.once && e.called || (e.called = !0,
                    e.handler && e.handler.apply(null, t))
            })
        },
        o.prototype.emitAsync = function() {
            var e = arguments,
                t = this;
            setTimeout(function() {
                t.emit.apply(t, e)
            }, 0)
        },
        o.prototype.assign = function(e) {
            var t = this;
            r.forEach(["on", "off", "wait", "emit", "emitAsync"], function(n) {
                var r = t[n];
                e[n] = function() {
                    return r.apply(t, arguments)
                }
            })
        }, (new o).assign(o),
        e.exports = o
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e) {
            var t = {},
                n = {},
                r = {
                    iphone: e.match(/(iphone)\s(os\s)?([\d_]+)/i),
                    ipad: e.match(/(ipad).*\s([\d_]+)/i),
                    ipod: e.match(/(ipod).*\s([\d_]+)/i),
                    android: e.match(/(android)\s([\d\.]+)/i),
                    windows: e.match(/Windows(\s+\w+)?\s+?(\d+\.\d+)/)
                };
            r.ipod && (t.ios = t.ipod = !0,
                    t.version = r.ipod[2].replace(/_/g, "."),
                    t.name = "ipod"),
                r.ipad && (t.ios = t.ipad = !0,
                    t.version = r.ipad[2].replace(/_/g, "."),
                    t.name = "ipad"),
                r.iphone && (t.iphone = t.ios = !0,
                    t.version = r.iphone[3].replace(/_/g, "."),
                    t.name = "iphone"),
                r.android && (t.android = !0,
                    t.version = r.android[2],
                    t.name = "android"),
                r.windows && (t.windows = !0,
                    t.version = r.windows[2],
                    t.name = "windows");
            var o = {
                IE: e.match(/; msie\b|; trident\b|\bedge\//i),
                WeChat: e.match(/MicroMessenger\/((\d+)\.(\d+))\.(\d+)/) || e.match(/MicroMessenger\/((\d+)\.(\d+))/),
                MQQClient: !e.match(/QQReader/) && e.match(/QQ\/(\d+\.\d+)/i) || e.match(/V1_AND_SQ_([\d\.]+)/),
                MQQReader: e.match(/QQReader/i),
                sukan: e.match(/synopsis/i),
                QQvideo: !e.match(/TADChid/) && e.match(/QQLiveBrowser\/([\d.]+)/),
                QQHDvideo: e.match(/QQLiveHDBrowser\/([\d.]+)/),
                TBSSDK: e.match(/MQQBrowser\/(\d+\.\d+)/i) && e.match(/MSDK\/(\d+\.\d+)/),
                MQQBrowser: e.match(/MQQBrowser\/(\d+\.\d+)/i),
                UCBrowser: e.match(/ucbrowser\/(\d+\.\d+)/i),
                Qzone: e.match(/Qzone\/[\w\d\_]*(\d\.\d)[\.\w\d\_]*/i),
                Weibo: e.match(/Weibo/i),
                qqnews: e.match(/qqnews\/(\d+\.\d+\.\d+)/i),
                QQLiveBroadcast: e.match(/QQLiveBroadcast/i),
                kuaibao: e.match(/qnreading\/(\d+\.\d+\.\d+)/i),
                liebao: e.match(/LieBaoFast\/(\d+\.\d+\.\d+)/i),
                IEMobile: e.match(/IEMobile(\/|\s+)(\d+\.\d+)/) || e.match(/WPDesktop/),
                douban: e.match(/com\.douban\.frodo\/(\d+\.\d+\.\d+)/i),
                MiuiBrowser: e.match(/MiuiBrowser\/(\d+\.\d+)/i),
                Chrome: t.ios ? e.match(/CriOS\/(\d+\.\d+)/) : e.match(/Chrome\/(\d+\.\d+)/),
                Safari: e.match(/Safari\/(\d+\.\d+)/)
            };
            if (o.MQQReader)
                n.MQQReader = !0,
                n.version = 1,
                n.name = "MQQReader";
            else if (o.IEMobile)
                n.IEMobile = !0,
                n.version = 1,
                n.name = "IEMobile";
            else
                for (var i in o)
                    if (o[i]) {
                        n[i] = !0,
                            n.version = o[i][1] || 0,
                            n.name = i;
                        break
                    }
            return {
                browser: n,
                os: t
            }
        }
    }
    var o = null,
        i = function() {
            return o || (o = r(navigator.userAgent))
        };
    i.__express = function(e, t, n) {
            e.ua = r(e.headers["user-agent"]),
                n()
        },
        i.__jquery = function(e) {
            e = e || window.jQuery || window.Zepto;
            var t = o || (o = r(navigator.userAgent));
            e.browser = t.browser,
                e.os = t.os
        },
        i.__clearCache = function() {
            o = null
        },
        e.exports = i
}, function(e, t, n) {
    "use strict";
    e.exports = {
        set: function(e, t, n, r, o) {
            if (o) {
                var i = new Date,
                    a = new Date;
                a.setTime(i.getTime() + 36e5 * o)
            }
            return document.cookie = e + "=" + t + "; " + (o ? "expires=" + a.toGMTString() + "; " : "") + (r ? "path=" + r + "; " : "path=/; ") + (n ? "domain=" + n + ";" : "domain=" + window.location.host + ";"), !0
        },
        get: function(e, t) {
            var n = new RegExp("(?:^|;+|\\s+)" + e + "=([^;]*)"),
                r = (t || document.cookie).match(n);
            return r ? r[1] : ""
        },
        del: function(e, t, n) {
            var r = new Date;
            r.setTime(r.getTime() - 1),
                document.cookie = e + "=; expires=" + r.toGMTString() + ";" + (n ? "path=" + n + "; " : "path=/; ") + (t ? "domain=" + t + ";" : "domain=" + window.location.host + ";")
        }
    }
}, function(e, t, n) {
    "use strict";

    function r() {}
    e.exports = function(e) {
        var t = document.createElement("img");
        t.onerror = r,
            t.onload = r,
            t.onabort = r,
            t.src = e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = {
        getUrlParameter: function(e) {
            e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        },
        throttle: function(e, t, n) {
            var r, o = null,
                i = t || 50,
                a = n || 100;
            return function() {
                var t = this,
                    n = arguments,
                    c = +new Date;
                if (clearTimeout(o), !r)
                    return e.apply(t, n),
                        void(r = c);
                c - r >= a ? (e.apply(t, n),
                    r = c) : o = setTimeout(function() {
                    e.apply(t, n),
                        r = c
                }, i)
            }
        },
        dateFormat: function(e) {
            var t = new Date,
                n = new Date(e),
                r = +t - e,
                o = n.getFullYear() === t.getFullYear();
            return !e || r < 0 ? "" : r < 6e5 ? "刚刚" : r < 36e5 ? Math.floor(r / 1e3 / 60) + "分钟前" : r < 432e5 ? Math.floor(r / 36e5) + "小时前" : r < 864e5 ? "昨天" : r < 1728e5 ? "前天" : (o ? "" : n.getFullYear() + "年") + (n.getMonth() + 1) + "月" + n.getDate() + "日"
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = this.constructor;
            return this.then(function(n) {
                return t.resolve(e()).then(function() {
                    return n
                })
            }, function(n) {
                return t.resolve(e()).then(function() {
                    return t.reject(n)
                })
            })
        }
}, function(e, t) {
    (function(t) {
        e.exports = t
    }).call(this, {})
}, function(e, t, n) {
    "use strict";
    var r = s(n(14)),
        o = s(n(16)),
        i = s(n(17)),
        a = s(n(32)),
        c = s(n(33)),
        u = s(n(34));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    window.Glama = r.default,
        r.default.set({
            pages: {
                select: {
                    conf: o.default,
                    component: i.default
                },
                video: {
                    conf: a.default,
                    component: c.default
                }
            },
            ws: !0
        }), (0,
            u.default)()
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n, r, o, i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        window,
        i = function() {
                return function(e) {
                    var t = {};

                    function n(r) {
                        if (t[r])
                            return t[r].exports;
                        var o = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(o.exports, o, o.exports, n),
                            o.l = !0,
                            o.exports
                    }
                    return n.m = e,
                        n.c = t,
                        n.d = function(e, t, r) {
                            n.o(e, t) || Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: r
                            })
                        },
                        n.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                    value: "Module"
                                }),
                                Object.defineProperty(e, "__esModule", {
                                    value: !0
                                })
                        },
                        n.t = function(e, t) {
                            if (1 & t && (e = n(e)),
                                8 & t)
                                return e;
                            if (4 & t && "object" === (void 0 === e ? "undefined" : a(e)) && e && e.__esModule)
                                return e;
                            var r = Object.create(null);
                            if (n.r(r),
                                Object.defineProperty(r, "default", {
                                    enumerable: !0,
                                    value: e
                                }),
                                2 & t && "string" != typeof e)
                                for (var o in e)
                                    n.d(r, o, function(t) {
                                            return e[t]
                                        }
                                        .bind(null, o));
                            return r
                        },
                        n.n = function(e) {
                            var t = e && e.__esModule ? function() {
                                return e.default
                            } : function() {
                                return e
                            };
                            return n.d(t, "a", t),
                                t
                        },
                        n.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        },
                        n.p = "//vm.gtimg.cn/tencentvideo/script/misc/",
                        n(n.s = 17)
                }([function(e, t, n) {
                    var r = n(7);
                    e.exports = {
                        strip: function(e) {
                            var t = [],
                                n = [];
                            return e = e.replace(/<link\s+(rel="stylesheet")?\s*href="(.+?)"\s*\/>/gm, function() {
                                var e = arguments[2];
                                return e && (n.push(arguments[0]),
                                        t.push(e)),
                                    ""
                            }), {
                                styles: t,
                                html: e,
                                linkTags: n
                            }
                        },
                        getSession: function() {
                            var e = r.get();
                            return {
                                vuserid: e.vuserid || "",
                                vusession: e.vusession || "",
                                openid: e.openid || "",
                                access_token: e.access_token || "",
                                uin: e.uin || e.luin || "",
                                skey: e.skey || e.lskey || "",
                                main_login: e.main_login || ""
                            }
                        },
                        insertStyles: function(e) {
                            if (e && Array.isArray(e)) {
                                var t = [];
                                return e.forEach(function(e) {
                                        if (![].slice.call(document.styleSheets).some(function(t) {
                                                if (t.href)
                                                    return (t.href || "").replace(/^https?\:/, "") === e.replace(/^https?\:/, "")
                                            })) {
                                            var n = document.createElement("link");
                                            n.setAttribute("rel", "stylesheet"),
                                                n.href = e,
                                                document.head.appendChild(n),
                                                t.push(n)
                                        }
                                    }),
                                    t
                            }
                        },
                        isValidPage: function(e, t) {
                            return e.match("page=['\"]" + t + "['\"]") && -1 == e.indexOf("fatal_error")
                        },
                        getTemplateResult: function(e, t) {
                            e = e || {};
                            var n = [],
                                r = Object.keys(e),
                                o = new(Function.prototype.bind.apply(Function, [null].concat(function(e) {
                                    if (Array.isArray(e)) {
                                        for (var t = 0, n = Array(e.length); t < e.length; t++)
                                            n[t] = e[t];
                                        return n
                                    }
                                    return Array.from(e)
                                }(r), ["return " + t])));
                            r.forEach(function(t) {
                                n.push(e[t])
                            });
                            try {
                                return o.apply(void 0, n)
                            } catch (e) {
                                return ""
                            }
                        }
                    }
                }, function(e, t, n) {
                    function r(e, t) {
                        return e && e.hasOwnProperty && e.hasOwnProperty(t)
                    }
                    var o = {
                        escape: function(e) {
                            return e ? String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : ""
                        },
                        type: function(e) {
                            if (null === e)
                                return "null";
                            if (void 0 === e)
                                return "undefined";
                            var t = /\[object (\w+)\]/.exec(Object.prototype.toString.call(e));
                            return t ? t[1].toLowerCase() : ""
                        },
                        keys: function(e) {
                            var t = [];
                            return e ? Object.keys ? Object.keys(e) : (this.objEach(e, function(e) {
                                    t.push(e)
                                }),
                                t) : t
                        },
                        bind: function(e, t) {
                            return e.bind ? e.bind(t) : function() {
                                return e.apply(t, arguments)
                            }
                        },
                        extend: function(e) {
                            if ("object" != this.type(e) && "function" != this.type(e))
                                return e;
                            for (var t, n, o = 1, i = arguments.length; o < i; o++)
                                for (n in t = arguments[o])
                                    r(t, n) && (e[n] = t[n]);
                            return e
                        },
                        trim: function(e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/gm, "")
                        },
                        indexOf: function(e, t) {
                            if (e.indexOf)
                                return e.indexOf(t);
                            var n = -1;
                            return o.some(e, function(e, r) {
                                    if (e === t)
                                        return n = r, !0
                                }),
                                n
                        },
                        forEach: function(e, t) {
                            if (e.forEach)
                                return e.forEach(t);
                            for (var n = e.length, r = 0; r < n; r++)
                                t(e[r], r);
                            return e
                        },
                        some: function(e, t) {
                            if (e.some)
                                return e.some(t);
                            for (var n = e.length, r = !1, o = 0; o < n; o++)
                                if (t(e[o], o)) {
                                    r = !0;
                                    break
                                }
                            return r
                        },
                        map: function(e, t) {
                            if (e.map)
                                return e.map(t);
                            for (var n = e.length, r = [], o = 0; o < n; o++)
                                r.push(t(e[o], o));
                            return r
                        },
                        objEach: function(e, t) {
                            if (e)
                                for (var n in e)
                                    if (r(e, n) && !1 === t(n, e[n]))
                                        break
                        },
                        reduce: function(e, t) {
                            if ("function" != o.type(t))
                                throw new TypeError("Array.prototype.reduce callback must be a function");
                            var n, r = e.length;
                            if (0 === r && 2 === arguments.length)
                                throw new TypeError("reduce of empty array with no initial value");
                            var i = 0;
                            if (arguments.length >= 3)
                                n = arguments[2];
                            else
                                for (;;) {
                                    if (i in e) {
                                        n = e[i++];
                                        break
                                    }
                                    if (++i >= r)
                                        throw new TypeError("reduceRight of empty array with no initial value")
                                }
                            for (; i < r; i++)
                                n = t(n, e[i], i, e);
                            return n
                        },
                        filter: function(e, t, n) {
                            if (e.filter)
                                return e.filter(t);
                            for (var r = e.length, o = [], i = 0; i < r; i++) {
                                var a = e[i];
                                t.call(n, a, i, e) && o.push(a)
                            }
                            return o
                        },
                        nextTick: function() {
                            var e = this;
                            return function() {
                                setTimeout.apply(e, arguments)
                            }
                        }(),
                        lock: function(e) {
                            var t;
                            return function() {
                                if (!t) {
                                    t = !0;
                                    var n = [].slice.call(arguments, 0);
                                    n.unshift(function() {
                                            t = !1
                                        }),
                                        e.apply(this, n)
                                }
                            }
                        },
                        queue: function(e, t) {
                            var n = [],
                                r = t = t || 1;
                            return function() {
                                if (n.push([e, this, [].slice.call(arguments, 0)]),
                                    r)
                                    return function e() {
                                        var o = n.shift();
                                        if (o) {
                                            r--;
                                            var i = o[0],
                                                a = o[1],
                                                c = o[2];
                                            c.unshift(function() {
                                                    r++,
                                                    e.apply(this, arguments)
                                                }),
                                                setTimeout(function() {
                                                    i.apply(a, c)
                                                })
                                        } else
                                            r = t
                                    }()
                            }
                        },
                        delegator: function(e) {
                            var t, n = [];
                            return function(r) {
                                if (t)
                                    return n.push(r);
                                t = !0,
                                    e.call(this, function() {
                                        t = !1;
                                        var e = this,
                                            i = arguments;
                                        r && r.apply(e, i);
                                        var a = n;
                                        n = [],
                                            o.forEach(a, function(t) {
                                                t && t.apply(e, i)
                                            })
                                    })
                            }
                        },
                        once: function(e) {
                            var t, n = arguments;
                            return function() {
                                if (!t && e)
                                    return t = !0,
                                        e.apply(n.length >= 2 ? n[1] : null, arguments)
                            }
                        },
                        verCompare: function(e, t) {
                            if (e === t)
                                return 0;
                            e = e.split("."),
                                t = t.split(".");
                            for (var n = e.length >= t.length ? e.length : t.length, r = 0; n--;) {
                                var o = Number(e[r] || 0),
                                    i = Number(t[r++] || 0);
                                if (i > o)
                                    return 1;
                                if (i < o)
                                    return -1
                            }
                            return 0
                        },
                        batchTimeout: function(e, t) {
                            var n = this,
                                r = t / e;
                            (!r || r < 1) && (e = 1,
                                r = t),
                            r = Math.round(r);
                            var o, i = !1,
                                a = [],
                                c = [];
                            return function(e) {
                                a.push(e),
                                    i ? c.push(+new Date) : (o = +new Date,
                                        c.push(o),
                                        i = !0,
                                        setTimeout(function() {
                                            var e = Math.round(n.reduce(c, function(e, t) {
                                                return e + (t - o)
                                            }, 0) / c.length);
                                            i = !1,
                                                c = [];
                                            var u = a.slice(0);
                                            a = [],
                                                setTimeout(function() {
                                                    u.forEach(function(e) {
                                                        try {
                                                            e && e()
                                                        } catch (e) {
                                                            console.error(e)
                                                        }
                                                    })
                                                }, Math.max(t - r - e, 0))
                                        }, r))
                            }
                        }
                    };
                    e.exports = o
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : a(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
                    };

                    function o(e) {
                        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            o = n.match(/#.*/g);
                        if (o ? (o = o[0],
                                n = n.replace(o, "")) : o = "",
                            t = n,
                            "object" === (void 0 === e ? "undefined" : r(e))) {
                            for (var i = Object.keys(e), a = [], c = 0; c < i.length; c++) {
                                var u = r(e[i[c]]);
                                "undefined" !== u && "object" !== u && a.push(i[c] + "=" + encodeURIComponent(e[i[c]]))
                            }
                            var s = a.join("&");
                            s && (t = n + (-1 === n.indexOf("?") ? "?" : "&") + s)
                        }
                        return t + o
                    }

                    function i() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href,
                            t = {};
                        return e.replace(/[?&](.+?)=([^&#]*)/g, function(e, n, r) {
                                return t[n] = decodeURIComponent(r)
                            }),
                            t
                    }
                    t.parse = i,
                        t.stringify = o,
                        t.default = {
                            parse: i,
                            stringify: o
                        }
                }, function(e, t, n) {
                    ! function() {
                        function t(e) {
                            return /\[object (\w+)\]/.exec(Object.prototype.toString.call(e))[1].toLowerCase()
                        }
                        var n, r, o = 0,
                            i = window.document,
                            a = /^(?:text|application)\/javascript/i,
                            c = /^(?:text|application)\/xml/i,
                            u = "application/json",
                            s = "text/html",
                            l = /^\s*$/,
                            f = e.exports = function(e) {
                                return new Promise(function(t, o) {
                                    var i = b({}, e || {});
                                    for (n in f.settings)
                                        void 0 === i[n] && (i[n] = f.settings[n]);
                                    ! function(e) {
                                        e.global && 0 == f.active++ && d(e, null, "ajaxStart")
                                    }(i),
                                    i.crossDomain || (i.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(i.url) && RegExp.$2 != window.location.host);
                                    var m = i.dataType,
                                        w = /=\?/.test(i.url);
                                    if ("jsonp" == m || w)
                                        return w || (i.url = g(i.url, "callback=?")),
                                            f.JSONP(i);
                                    i.url || (i.url = window.location.toString()),
                                        y(i);
                                    var _, x = i.accepts[m],
                                        E = {},
                                        k = /^([\w-]+:)\/\//.test(i.url) ? RegExp.$1 : window.location.protocol,
                                        T = f.settings.xhr();
                                    i.crossDomain || (E["X-Requested-With"] = "XMLHttpRequest"),
                                        x && (E.Accept = x,
                                            x.indexOf(",") > -1 && (x = x.split(",", 2)[0]),
                                            T.overrideMimeType && T.overrideMimeType(x)), (i.contentType || i.data && "GET" != i.type.toUpperCase()) && (E["Content-Type"] = i.contentType || "application/x-www-form-urlencoded"),
                                        i.headers = b(E, i.headers || {}),
                                        T.onreadystatechange = function() {
                                            if (4 == T.readyState) {
                                                clearTimeout(_);
                                                var e, n = !1;
                                                if (T.status >= 200 && T.status < 300 || 304 == T.status || 0 == T.status && "file:" == k) {
                                                    m = m || ((r = T.getResponseHeader("content-type")) && (r == s ? "html" : r == u ? "json" : a.test(r) ? "script" : c.test(r) && "xml") || "text"),
                                                        e = T.responseText;
                                                    try {
                                                        "script" == m ? (0,
                                                            eval)(e) : "xml" == m ? e = T.responseXML : "json" == m && (e = l.test(e) ? null : JSON.parse(e))
                                                    } catch (e) {
                                                        n = e
                                                    }
                                                    n ? p(n, "parsererror", T, i, o) : h(e, T, i, t)
                                                } else
                                                    p(null, "error", T, i, o)
                                            }
                                            var r
                                        };
                                    var P = !("async" in i) || i.async;
                                    for (r in T.open(i.type, i.url, P),
                                        T.withCredentials = !0,
                                        i.headers)
                                        T.setRequestHeader(r, i.headers[r]);
                                    return !1 === function(e, t) {
                                        var n = t.context;
                                        if (!1 === t.beforeSend.call(n, e, t) || !1 === d(t, n, "ajaxBeforeSend", [e, t]))
                                            return !1;
                                        d(t, n, "ajaxSend", [e, t])
                                    }(T, i) ? (T.abort(), !1) : (i.timeout > 0 && (_ = setTimeout(function() {
                                            T.onreadystatechange = v,
                                                T.abort(),
                                                p(null, "timeout", T, i, o)
                                        }, i.timeout)),
                                        T.send(i.data ? i.data : null),
                                        T)
                                })
                            };

                        function d(e, t, n, r) {
                            if (e.global)
                                return !0
                        }

                        function h(e, t, n, r) {
                            var o = n.context;
                            n.success.call(o, e, "success", t),
                                r(e),
                                d(n),
                                m("success", t, n)
                        }

                        function p(e, t, n, r, o) {
                            var i = r.context;
                            r.error.call(i, n, t, e),
                                o(e),
                                d(r),
                                m(t, n, r)
                        }

                        function m(e, t, n) {
                            var r = n.context;
                            n.complete.call(r, t, e),
                                d(n),
                                function(e) {
                                    e.global && !--f.active && d(e)
                                }(n)
                        }

                        function v() {}

                        function g(e, t) {
                            return (e + "&" + t).replace(/[&?]{1,2}/, "?")
                        }

                        function y(e) {
                            var n, r, o;
                            "object" === t(e.data) && (e.data = (n = e.data, (o = []).add = function(e, t) {
                                    this.push(w(e) + "=" + w(t))
                                },
                                function e(n, r, o, i) {
                                    var a = "array" === t(r);
                                    for (var c in r) {
                                        var u = r[c];
                                        i && (c = o ? i : i + "[" + (a ? "" : c) + "]"), !i && a ? n.add(u.name, u.value) : (o ? "array" === t(u) : "object" === t(u)) ? e(n, u, o, c) : n.add(c, u)
                                    }
                                }(o, n, r),
                                o.join("&").replace("%20", "+"))), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = g(e.url, e.data))
                        }
                        f.active = 0,
                            f.JSONP = function(e) {
                                if (!("type" in e))
                                    return f(e);
                                var t, n = "jsonp" + ++o,
                                    r = i.createElement("script"),
                                    a = {
                                        abort: function() {
                                            r.parentNode && r.parentNode.removeChild(r),
                                                n in window && (window[n] = v),
                                                m("abort", a, e)
                                        }
                                    },
                                    c = i.getElementsByTagName("head")[0] || i.documentElement;
                                return e.error && (r.onerror = function() {
                                        a.abort(),
                                            e.error()
                                    }),
                                    window[n] = function(o) {
                                        clearTimeout(t),
                                            r.parentNode && r.parentNode.removeChild(r),
                                            delete window[n],
                                            h(o, a, e, rs)
                                    },
                                    y(e),
                                    r.src = e.url.replace(/=\?/, "=" + n),
                                    c.insertBefore(r, c.firstChild),
                                    e.timeout > 0 && (t = setTimeout(function() {
                                        a.abort(),
                                            m("timeout", a, e)
                                    }, e.timeout)),
                                    a
                            },
                            f.settings = {
                                type: "GET",
                                beforeSend: v,
                                success: v,
                                error: v,
                                complete: v,
                                context: null,
                                global: !0,
                                xhr: function() {
                                    return new window.XMLHttpRequest
                                },
                                accepts: {
                                    script: "text/javascript, application/javascript",
                                    json: u,
                                    xml: "application/xml, text/xml",
                                    html: s,
                                    text: "text/plain"
                                },
                                crossDomain: !1,
                                timeout: 15e3
                            },
                            f.get = function(e, t, n) {
                                return f({
                                    url: e,
                                    success: t,
                                    error: n
                                })
                            },
                            f.post = function(e, n, r, o, i) {
                                return "function" === t(n) && (o = o || r,
                                        r = n,
                                        n = null),
                                    f({
                                        type: "POST",
                                        url: e,
                                        data: n,
                                        success: r,
                                        dataType: o,
                                        error: i
                                    })
                            },
                            f.getJSON = function(e, t, n) {
                                return f({
                                    url: e,
                                    success: t,
                                    dataType: "json",
                                    error: n
                                })
                            };
                        var w = encodeURIComponent;

                        function b(e) {
                            return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
                                    for (n in t)
                                        void 0 !== t[n] && (e[n] = t[n])
                                }),
                                e
                        }
                    }()
                }, , function(e, t, n) {
                    var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(e) {
                            return void 0 === e ? "undefined" : a(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
                        },
                        o = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                        r.configurable = !0,
                                        "value" in r && (r.writable = !0),
                                        Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n),
                                    r && e(t, r),
                                    t
                            }
                        }();

                    function i(e) {
                        return function() {
                            var t = e.apply(this, arguments);
                            return new Promise(function(e, n) {
                                return function r(o, i) {
                                    try {
                                        var a = t[o](i),
                                            c = a.value
                                    } catch (e) {
                                        return void n(e)
                                    }
                                    if (!a.done)
                                        return Promise.resolve(c).then(function(e) {
                                            r("next", e)
                                        }, function(e) {
                                            r("throw", e)
                                        });
                                    e(c)
                                }("next")
                            })
                        }
                    }
                    e.exports = function() {
                        function e() {
                            ! function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            this.events = {
                                __ALL_EVENTS__: []
                            }
                        }
                        return o(e, [{
                                key: "on",
                                value: function(e, t) {
                                    "object" !== r(this.events[e]) && (this.events[e] = []),
                                        this.events[e].push(t)
                                }
                            }, {
                                key: "removeListener",
                                value: function(e, t) {
                                    var n;
                                    "object" === r(this.events[e]) && (n = this.events[e].indexOf(t)) > -1 && this.events[e].splice(n, 1)
                                }
                            }, {
                                key: "onAllEvent",
                                value: function(e) {
                                    this.events.__ALL_EVENTS__.push(e)
                                }
                            }, {
                                key: "_fireAllEvent",
                                value: function(e, t) {
                                    var n = this;
                                    this.events.__ALL_EVENTS__.length > 0 && this.events.__ALL_EVENTS__.forEach(function(r) {
                                        return r.call(n, e, t)
                                    })
                                }
                            }, {
                                key: "emit",
                                value: function(e) {
                                    var t, n, o, i = [].slice.call(arguments, 1);
                                    this._fireAllEvent(e, i);
                                    var a = [];
                                    if ("object" === r(this.events[e]))
                                        for (o = (n = this.events[e].slice()).length,
                                            t = 0; t < o; t++)
                                            a.push(n[t].apply(this, i));
                                    return a
                                }
                            }, {
                                key: "emitAsyncParalle",
                                value: function() {
                                    var e = i(regeneratorRuntime.mark(function e(t) {
                                        var n, o, a = this,
                                            c = arguments;
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        if (o = [].slice.call(c, 1),
                                                            this._fireAllEvent(t, o),
                                                            "object" !== r(this.events[t])) {
                                                            e.next = 6;
                                                            break
                                                        }
                                                        return n = this.events[t].slice(),
                                                            n.length,
                                                            e.abrupt("return", Promise.all(n.map(function() {
                                                                var e = i(regeneratorRuntime.mark(function e(t) {
                                                                    return regeneratorRuntime.wrap(function(e) {
                                                                        for (;;)
                                                                            switch (e.prev = e.next) {
                                                                                case 0:
                                                                                    return e.next = 2,
                                                                                        t.apply(a, o);
                                                                                case 2:
                                                                                    return e.abrupt("return", e.sent);
                                                                                case 3:
                                                                                case "end":
                                                                                    return e.stop()
                                                                            }
                                                                    }, e, a)
                                                                }));
                                                                return function(t) {
                                                                    return e.apply(this, arguments)
                                                                }
                                                            }())).then(function(e) {
                                                                return e
                                                            }, function(e) {
                                                                return console.error("emitAsyncParalle error", e),
                                                                    Promise.resolve([])
                                                            }));
                                                    case 6:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }, e, this)
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }()
                            }, {
                                key: "once",
                                value: function(e, t) {
                                    this.on(e, function n() {
                                        this.removeListener(e, n),
                                            t.apply(this, arguments)
                                    })
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.events = null
                                }
                            }]),
                            e
                    }()
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r, o = n(23),
                        i = (r = o) && r.__esModule ? r : {
                            default: r
                        };
                    i.default.prototype._getBaseUrl = function() {
                            var e = location.pathname;
                            return e.slice(0, e.lastIndexOf("/"))
                        },
                        i.default.prototype.open = i.default.prototype.go = function() {
                            arguments[0] && (arguments[0] = arguments[0].replace(".", this._getBaseUrl()),
                                this.navigate.apply(this, arguments))
                        },
                        i.default.prototype.back = function() {
                            history.back()
                        },
                        i.default.prototype.replace = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            history.replaceState(t, "", e),
                                this.resolve()
                        },
                        i.default.prototype.push = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            history.pushState(t, "", e),
                                this.resolve()
                        },
                        i.default.prototype.openUrl = function(e) {
                            var t = document.createElement("a");
                            t.href = e,
                                location.href = t.href
                        },
                        i.default.prototype.refresh = function() {
                            location.reload()
                        };
                    var a = new i.default(location.origin);
                    t.default = a
                }, function(e, t, n) {
                    var r = n(1);
                    e.exports = {
                        get: function(e) {
                            var t = this._get();
                            return e ? t ? t[e] : null : t
                        },
                        remove: function(e, t, n) {
                            return t = t || location.hostname,
                                document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=" + t + (n ? "; path=" + n : ""), !0
                        },
                        _get: function() {
                            for (var e = {}, t = document.cookie, n = 0, r = (t = t.split(";")).length; n < r; n++) {
                                var o = t[n].replace(/^\s+/, "").split("=");
                                e[o[0]] = o[1]
                            }
                            return e
                        },
                        set: function(e, t, n, o, i) {
                            var a = "";
                            switch (r.type(n)) {
                                case "number":
                                case "undefined":
                                    a = n === 1 / 0 || void 0 === n ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                                    break;
                                case "string":
                                    a = "; expires=" + n;
                                    break;
                                case "date":
                                    a = "; expires=" + n.toUTCString()
                            }
                            o = o || location.hostname,
                                i = i || "/",
                                document.cookie = [e, "=", escape(t), a, ";domain=", o, ";path=", i].join("")
                        }
                    }
                }, function(e, t, n) {
                    var r = n(2),
                        o = n(3),
                        i = n(12);
                    e.exports = {
                        get: function(e, t, n, r, o) {
                            var a = this;
                            if (i.support() && !i.isMax() && i.ready(o))
                                return i.pagelet(r.name || e, t, n, r, o).then(function(e) {
                                    return e
                                }, function() {
                                    return a._ajaxFetch(e, t, n)
                                });
                            var c = this._ajaxFetch(e, t, n);
                            return !i.isMax() && setTimeout(function() {
                                    i.support() && i.connect(o)
                                }, 50),
                                c
                        },
                        _ajaxFetch: function(e, t, n) {
                            var i = e ? "" + e : "" + location.pathname;
                            return i = r.stringify(Object.assign({
                                    pagelet: n || 1
                                }, t), i),
                                new Promise(function(e, t) {
                                    o({
                                        url: i,
                                        type: "GET",
                                        dataType: "json",
                                        success: function(n) {
                                            if (500 == n.code)
                                                return t(new Error(n.error || "Request pagelet error."));
                                            e(n)
                                        },
                                        error: function(e, n, r) {
                                            t(r)
                                        }
                                    })
                                })
                        }
                    }
                }, function(e, t, n) {
                    var r = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                        r.configurable = !0,
                                        "value" in r && (r.writable = !0),
                                        Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n),
                                    r && e(t, r),
                                    t
                            }
                        }(),
                        o = v(n(26)),
                        i = v(n(5)),
                        c = v(n(2)),
                        u = v(n(6)),
                        s = v(n(3)),
                        l = v(n(11)),
                        f = v(n(7)),
                        d = v(n(8)),
                        h = v(n(0)),
                        p = v(n(13)),
                        m = v(n(30));

                    function v(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var g = document.getElementById("router-container");
                    if (!g)
                        throw new Error("cant find element '#router-container'");
                    var y = document.getElementById("page-loading");
                    if (!y)
                        throw new Error("cant find element '#page-loading'");
                    var w = function(e) {
                        function t(e, n, r) {
                            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            ! function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var i = function(e, t) {
                                if (!e)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" !== (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return i.app = e,
                                i.pageConf = r,
                                o.methods = o.methods || {},
                                o.methods.onPageShow = o.methods.onPageShow || o.show,
                                o.methods.onPageHide = o.methods.onPageHide || o.hide,
                                i.opts = o,
                                i.status = {
                                    isDestroyed: !1,
                                    isServerRender: !0,
                                    isRouteInited: n.isRouteInited
                                },
                                i.context = {
                                    containerElement: i.getAppendElement(n.name, e.el),
                                    el: null,
                                    name: n.name,
                                    routeParams: n.routeParams,
                                    page: i
                                },
                                i.initEvent(),
                                i.emit("created", i.context),
                                i.conf = r.conf,
                                i.fetcher = i.fetch(),
                                i.render = null,
                                i.emit("viewCreated", i.context),
                                i.emit("viewReady", i.context),
                                i
                        }
                        return function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : a(t)));
                                e.prototype = Object.create(t && t.prototype, {
                                        constructor: {
                                            value: e,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(t, i.default),
                            r(t, [{
                                key: "initEvent",
                                value: function() {
                                    var e = this.opts;
                                    e.methods && (this.context.$method = e.methods,
                                            Object.assign(this, this.context.$method)),
                                        "function" == typeof e.data && (this.context.$data = e.data.call(this),
                                            Object.assign(this, this.context.$data)),
                                        "function" == typeof e.ready && this.on("ready", e.ready),
                                        "function" == typeof e.created && this.on("created", e.created),
                                        "function" == typeof e.methods.onPageShow && this.on("show", e.methods.onPageShow),
                                        "function" == typeof e.methods.onPageHide && this.on("hide", e.methods.onPageHide),
                                        "function" == typeof e.destroy && this.on("destroy", e.destroy),
                                        "function" == typeof e.beforeDestroy && this.on("beforeDestroy", e.beforeDestroy),
                                        "function" == typeof e.error && this.on("error", e.error)
                                }
                            }, {
                                key: "show",
                                value: function() {
                                    var e, t = (e = regeneratorRuntime.mark(function e(t) {
                                            var n;
                                            return regeneratorRuntime.wrap(function(e) {
                                                for (;;)
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            if (n = this.emit("show", this.context),
                                                                t && n.every(function(e) {
                                                                    return !0 !== e
                                                                }) && (document.getElementById(this.context.containerElement.getAttribute("group")).style.display = "block"),
                                                                this.render) {
                                                                e.next = 7;
                                                                break
                                                            }
                                                            return e.next = 5,
                                                                this.renderPage();
                                                        case 5:
                                                            this.dataSync(),
                                                                this.emit("ready", this.context);
                                                        case 7:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }, e, this)
                                        }),
                                        function() {
                                            var t = e.apply(this, arguments);
                                            return new Promise(function(e, n) {
                                                return function r(o, i) {
                                                    try {
                                                        var a = t[o](i),
                                                            c = a.value
                                                    } catch (e) {
                                                        return void n(e)
                                                    }
                                                    if (!a.done)
                                                        return Promise.resolve(c).then(function(e) {
                                                            r("next", e)
                                                        }, function(e) {
                                                            r("throw", e)
                                                        });
                                                    e(c)
                                                }("next")
                                            })
                                        }
                                    );
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }()
                            }, {
                                key: "hide",
                                value: function(e) {
                                    var t = this.emit("hide", this.context);
                                    if (e && t.every(function(e) {
                                            return !0 !== e
                                        })) {
                                        var n = document.getElementById(this.context.containerElement.getAttribute("group"));
                                        if (n.style.display = "none",
                                            this.pageConf.conf.singleton)
                                            return;
                                        setTimeout(function() {
                                            n.innerHTML = y.innerHTML
                                        })
                                    }
                                }
                            }, {
                                key: "fetch",
                                value: function() {
                                    var e = this;
                                    return new Promise(function(t, n) {
                                        if (e.status.isServerRender)
                                            if (e.status.isRouteInited)
                                                t({});
                                            else {
                                                var r, i = c.default.parse(location.search),
                                                    a = e.conf,
                                                    u = o.default.key(e.context.name, a, i),
                                                    s = o.default.get(u);
                                                if (a.clientCache && s)
                                                    console.log("[Page] hit cache:", u),
                                                    r = Promise.resolve(s);
                                                else {
                                                    var l = h.default.getTemplateResult(e.context.routeParams, e.conf.routeTemplate) || e.context.name;
                                                    r = d.default.get(l, i, void 0, e.context.routeParams, e.conf.wsUrl)
                                                }
                                                r.then(function(n) {
                                                    e.status.isDestroyed ? t(null) : (!s && a.clientCache && o.default.set(e.context.name, a, u, n),
                                                        t({
                                                            res: n,
                                                            query: i,
                                                            conf: a
                                                        }))
                                                }, n)
                                            } else
                                            t({})
                                    })
                                }
                            }, {
                                key: "dataSync",
                                value: function() {
                                    return m.default.syncData(this)
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.pageConf.conf.singleton || (this.emit("beforeDestroy", this.context),
                                        this.context = null,
                                        this.emit("destroy", this.context),
                                        function e(t, n, r) {
                                            null === t && (t = Function.prototype);
                                            var o = Object.getOwnPropertyDescriptor(t, n);
                                            if (void 0 === o) {
                                                var i = Object.getPrototypeOf(t);
                                                return null === i ? void 0 : e(i, n, r)
                                            }
                                            if ("value" in o)
                                                return o.value;
                                            var a = o.get;
                                            return void 0 !== a ? a.call(r) : void 0
                                        }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this),
                                        this.status.isDestroyed = !0)
                                }
                            }, {
                                key: "renderTo",
                                value: function(e, t) {
                                    return e.innerHTML = t,
                                        e.lastElementChild
                                }
                            }, {
                                key: "getAppendElement",
                                value: function(e, t) {
                                    return "function" == typeof this.app.config.getAppendElement ? this.app.config.getAppendElement(e, t) : document.getElementById("container-" + e) || g
                                }
                            }, {
                                key: "renderPage",
                                value: function() {
                                    var e = this,
                                        t = this.context.containerElement;
                                    return this.status.isRouteInited || !this.status.isServerRender ? (this.context.el = t.lastElementChild,
                                        this.render = Promise.resolve({})) : this.render ? this.render : this.render = this.fetcher.then(function(n) {
                                        try {
                                            return h.default.insertStyles(n.res.styles),
                                                e.context.el = e.renderTo(t, n.res.html),
                                                e
                                        } catch (t) {
                                            console.warn("page error", t),
                                                e.render = null,
                                                e.emit("error", t)
                                        }
                                    }, function(t) {
                                        e.render = null,
                                            e.emit("error", t)
                                    })
                                }
                            }]),
                            t
                    }();
                    w.prototype.router = u.default,
                        w.prototype.ajax = s.default,
                        w.prototype.jsonp = l.default,
                        w.prototype.cookie = f.default,
                        w.prototype.pagelet = d.default,
                        w.prototype.util = h.default,
                        w.prototype.cgi = p.default,
                        w.PageCache = o.default,
                        e.exports = w
                }, function(e, t, n) {
                    var r = {
                        namespace: "glama_" + location.host,
                        ws: !0,
                        pages: {},
                        share: {},
                        router: {}
                    };
                    e.exports = function(e) {
                        return arguments.length <= 0 ? r : Object.assign({}, r, e)
                    }
                }, function(e, t, n) {
                    var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(e) {
                            return void 0 === e ? "undefined" : a(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
                        },
                        o = n(1),
                        i = n(29),
                        c = "_jsonp",
                        u = "callback",
                        s = 0,
                        l = 2e4,
                        f = [];

                    function d() {}

                    function h(e) {
                        e && e.parentNode && e.parentNode.removeChild(e)
                    }

                    function p(e, t, n) {
                        var a = arguments;
                        return function(e) {
                            if (window.Promise)
                                return new Promise(e);
                            e(d, d)
                        }(function(p, m) {
                            var v;
                            if ("object" == (void 0 === t ? "undefined" : r(t)) && (v = t,
                                    t = n,
                                    n = a[3]),
                                v = v || {},
                                n = n || {},
                                "function" != typeof(t = t || d))
                                throw Error("illegal jsonp callback function:", t);
                            var g = document.getElementsByTagName("head") ? document.getElementsByTagName("head")[0] : document.body,
                                y = document.createElement("script");
                            y.charset = "UTF-8";
                            var w = [n.ns || c, s++, Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)].join("_"),
                                b = !0,
                                _ = "_t",
                                x = n.time;
                            n.callbackid && (w = n.callbackid), !1 === x ? b = !1 : x && (_ = x),
                                v[n.pn || n.callbackName || u] = w,
                                b && (v[_] = +new Date);
                            var E = function(e) {
                                    h(y),
                                        t(null, e),
                                        p && p(e)
                                },
                                k = function(e) {
                                    h(y),
                                        t(e || "error"),
                                        window[w] = E = k = d,
                                        m && m(e || error)
                                },
                                T = window[w];
                            window[w] = function(e) {
                                    window[w] = d;
                                    try {
                                        T && T(e)
                                    } finally {
                                        E(e),
                                            E = k = d
                                    }
                                },
                                y.onerror = y.onabort = function(e) {
                                    k(e ? e.type : "error")
                                },
                                o.forEach(f, function(t) {
                                    "function" == o.type(t) && (e = t(e, v) || e)
                                }),
                                y.src = i.queryJoin(e, v),
                                g.appendChild(y),
                                setTimeout(function() {
                                    k("timeout")
                                }, n.timeout || l)
                        })
                    }
                    p.timeout = function(e) {
                            l = e
                        },
                        p.ns = function(e) {
                            c = e
                        },
                        p.pn = function(e) {
                            u = e
                        },
                        p.before = function(e) {
                            f.push(e)
                        },
                        e.exports = p
                }, function(e, t, n) {
                    var r = n(1),
                        o = n(0),
                        i = n(10),
                        a = ("https:" == location.protocol ? "wss:" : "ws:") + "//" + location.host + location.pathname.replace(/[^\/]+$/, "") + "ws/connect",
                        c = 1,
                        u = {},
                        s = {},
                        l = !1;

                    function f() {}
                    var d = function() {
                        return o.getSession().vuserid
                    };

                    function h(e) {
                        var t = u[e = e || a],
                            n = d();
                        return t && t.readyState !== t.CLOSING && t.readyState !== t.CLOSED && n === t.userid || (t && (t.readyState == t.OPEN && n !== t.userid && t.close(),
                                    t.onopen = t.onerror = t.onclose = t.onmessage = f), (t = u[e] = new WebSocket(e)).userid = n,
                                t.onopen = function() {
                                    console.log("[WS] open", "vuid:", n)
                                },
                                t.onerror = function() {
                                    console.log("[WS] error", "vuid:", n)
                                },
                                t.onclose = function() {
                                    console.log("[WS] close")
                                },
                                t.onmessage = function(e) {
                                    try {
                                        var n = JSON.parse(e.data);
                                        switch (console.log("[WS] message", n),
                                            n.action) {
                                            case "close":
                                                "max" == n.type && (l = !0),
                                                    t.close();
                                                break;
                                            case "page":
                                                var r = s[n.seq];
                                                delete s[n.seq],
                                                    r && r(n.body, n.status)
                                        }
                                    } catch (t) {
                                        console.error("[WS] illegal response: " + e.data)
                                    }
                                }
                            ),
                            t
                    }
                    e.exports = {
                        support: function() {
                            return !!window.WebSocket && i({
                                ws: !1 !== Glama.globalSetting.ws
                            }).ws
                        },
                        send: function(e, t) {
                            console.log("[WS] send", t);
                            var n = c++;
                            return t.seq = n,
                                new Promise(function(o, i) {
                                    var a = r.once(function(e, t) {
                                        e ? i(e) : o(t)
                                    });
                                    s[n] = function(e, t) {
                                        t && t >= 400 ? a(e) : a(null, e)
                                    };
                                    var c, u = h(e),
                                        l = function() {
                                            c && (u.removeEventListener("open", f),
                                                u.removeEventListener("error", p))
                                        };

                                    function f() {
                                        var e;
                                        l(),
                                            u.send((e = t,
                                                JSON.stringify(e)))
                                    }

                                    function d(e) {
                                        l(),
                                            a(e)
                                    }

                                    function p() {
                                        d(new Error("websocket error."))
                                    }
                                    u.readyState === u.CONNECTING ? (c = !0,
                                            u.addEventListener("open", f),
                                            u.addEventListener("error", p)) : f(),
                                        setTimeout(function() {
                                            d(new Error("webscoket timeout."))
                                        }, 800)
                                })
                        },
                        connect: function(e) {
                            return h(e)
                        },
                        ready: function(e) {
                            var t = u[e || a];
                            return t && t.readyState === t.OPEN
                        },
                        pagelet: function(e, t, n, o, i) {
                            return this.send(i || a, {
                                page: e,
                                action: "page",
                                query: r.extend({
                                    pagelet: n || 1
                                }, t),
                                body: {},
                                params: o
                            })
                        },
                        getScocketId: function(e) {
                            d = e
                        },
                        isMax: function() {
                            return l
                        }
                    }
                }, function(e, t, n) {
                    var r = n(2),
                        o = n(3),
                        i = "";
                    var a = {};
                    a._setAPI = function(e) {
                            Object.keys(e).forEach(function(t) {
                                var n = e[t];
                                switch (t) {
                                    case "HOST":
                                        i = n;
                                        break;
                                    default:
                                        a[t] = function(e, t) {
                                            function n(e, t) {
                                                return function(n) {
                                                    n.data && 200 == n.code ? e(n.data) : t(n.error || "cgi request error")
                                                }
                                            }
                                            var a = !1;
                                            switch (t) {
                                                case "jsonp":
                                                case "JSONP":
                                                    a = !0;
                                                case "GET":
                                                case "get":
                                                    return function(t) {
                                                        return new Promise(function(r, c) {
                                                            var u = t || {};
                                                            a && (u = Object.assign({}, u, {
                                                                    _datatype: "jsonp"
                                                                })),
                                                                o({
                                                                    url: i + "cgi/" + e,
                                                                    type: "GET",
                                                                    dataType: a ? "jsonp" : "json",
                                                                    data: u,
                                                                    success: n(r, c),
                                                                    error: c
                                                                })
                                                        })
                                                    };
                                                case "POST":
                                                case "post":
                                                    return function(t, a) {
                                                        return new Promise(function(c, u) {
                                                            o({
                                                                url: r.stringify(a || {}, i + "cgi/" + e),
                                                                type: "POST",
                                                                dataType: "json",
                                                                data: "string" == typeof t ? t : JSON.stringify(t),
                                                                contentType: "text/plain; charset=utf-8",
                                                                success: n(c, u),
                                                                error: u
                                                            })
                                                        })
                                                    }
                                            }
                                        }(t, n)
                                }
                            })
                        },
                        e.exports = a
                }, , , , function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                            value: !0
                        }),
                        n(18),
                        n(19);
                    var r = p(n(21)),
                        o = p(n(6)),
                        i = p(n(2)),
                        a = p(n(5)),
                        c = p(n(3)),
                        u = p(n(12)),
                        s = p(n(11)),
                        l = p(n(7)),
                        f = p(n(8)),
                        d = p(n(0)),
                        h = p(n(13));

                    function p(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    r.default.ajax = c.default,
                        r.default.ws = u.default,
                        r.default.jsonp = s.default,
                        r.default.cookie = l.default,
                        r.default.pagelet = f.default,
                        r.default.util = d.default,
                        r.default.cgi = h.default,
                        r.default.querystring = i.default,
                        r.default.router = o.default,
                        r.default.EventEmitter = a.default,
                        t.default = r.default,
                        window.Glama = r.default
                }, function(e, t, n) {
                    Array.prototype.some || (Array.prototype.some = function(e) {
                            if (null == this)
                                throw new TypeError("Array.prototype.some called on null or undefined");
                            if ("function" != typeof e)
                                throw new TypeError;
                            for (var t = Object(this), n = t.length >>> 0, r = arguments.length >= 2 ? arguments[1] : void 0, o = 0; o < n; o++)
                                if (o in t && e.call(r, t[o], o, t))
                                    return !0;
                            return !1
                        }),
                        Array.prototype.every || (Array.prototype.every = function(e, t) {
                            var n, r;
                            if (null == this)
                                throw new TypeError("this is null or not defined");
                            var o = Object(this),
                                i = o.length >>> 0;
                            if ("function" != typeof e)
                                throw new TypeError;
                            for (arguments.length > 1 && (n = t),
                                r = 0; r < i;) {
                                var a;
                                if (r in o)
                                    if (a = o[r], !e.call(n, a, r, o))
                                        return !1;
                                r++
                            }
                            return !0
                        })
                }, function(e, t, n) {
                    (function(e) {
                        var t = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(e) {
                            return void 0 === e ? "undefined" : a(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
                        };
                        ! function(n) {
                            var r, o = Object.prototype,
                                i = o.hasOwnProperty,
                                a = "function" == typeof Symbol ? Symbol : {},
                                c = a.iterator || "@@iterator",
                                u = a.asyncIterator || "@@asyncIterator",
                                s = a.toStringTag || "@@toStringTag",
                                l = "object" === t(e),
                                f = n.regeneratorRuntime;
                            if (f)
                                l && (e.exports = f);
                            else {
                                (f = n.regeneratorRuntime = l ? e.exports : {}).wrap = _;
                                var d = "suspendedStart",
                                    h = "suspendedYield",
                                    p = "executing",
                                    m = "completed",
                                    v = {},
                                    g = {};
                                g[c] = function() {
                                    return this
                                };
                                var y = Object.getPrototypeOf,
                                    w = y && y(y(j([])));
                                w && w !== o && i.call(w, c) && (g = w);
                                var b = T.prototype = E.prototype = Object.create(g);
                                k.prototype = b.constructor = T,
                                    T.constructor = k,
                                    T[s] = k.displayName = "GeneratorFunction",
                                    f.isGeneratorFunction = function(e) {
                                        var t = "function" == typeof e && e.constructor;
                                        return !!t && (t === k || "GeneratorFunction" === (t.displayName || t.name))
                                    },
                                    f.mark = function(e) {
                                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, T) : (e.__proto__ = T,
                                                s in e || (e[s] = "GeneratorFunction")),
                                            e.prototype = Object.create(b),
                                            e
                                    },
                                    f.awrap = function(e) {
                                        return {
                                            __await: e
                                        }
                                    },
                                    P(C.prototype),
                                    C.prototype[u] = function() {
                                        return this
                                    },
                                    f.AsyncIterator = C,
                                    f.async = function(e, t, n, r) {
                                        var o = new C(_(e, t, n, r));
                                        return f.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                                            return e.done ? e.value : o.next()
                                        })
                                    },
                                    P(b),
                                    b[s] = "Generator",
                                    b[c] = function() {
                                        return this
                                    },
                                    b.toString = function() {
                                        return "[object Generator]"
                                    },
                                    f.keys = function(e) {
                                        var t = [];
                                        for (var n in e)
                                            t.push(n);
                                        return t.reverse(),
                                            function n() {
                                                for (; t.length;) {
                                                    var r = t.pop();
                                                    if (r in e)
                                                        return n.value = r,
                                                            n.done = !1,
                                                            n
                                                }
                                                return n.done = !0,
                                                    n
                                            }
                                    },
                                    f.values = j,
                                    M.prototype = {
                                        constructor: M,
                                        reset: function(e) {
                                            if (this.prev = 0,
                                                this.next = 0,
                                                this.sent = this._sent = r,
                                                this.done = !1,
                                                this.delegate = null,
                                                this.method = "next",
                                                this.arg = r,
                                                this.tryEntries.forEach(O), !e)
                                                for (var t in this)
                                                    "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r)
                                        },
                                        stop: function() {
                                            this.done = !0;
                                            var e = this.tryEntries[0].completion;
                                            if ("throw" === e.type)
                                                throw e.arg;
                                            return this.rval
                                        },
                                        dispatchException: function(e) {
                                            if (this.done)
                                                throw e;
                                            var t = this;

                                            function n(n, o) {
                                                return c.type = "throw",
                                                    c.arg = e,
                                                    t.next = n,
                                                    o && (t.method = "next",
                                                        t.arg = r), !!o
                                            }
                                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                                var a = this.tryEntries[o],
                                                    c = a.completion;
                                                if ("root" === a.tryLoc)
                                                    return n("end");
                                                if (a.tryLoc <= this.prev) {
                                                    var u = i.call(a, "catchLoc"),
                                                        s = i.call(a, "finallyLoc");
                                                    if (u && s) {
                                                        if (this.prev < a.catchLoc)
                                                            return n(a.catchLoc, !0);
                                                        if (this.prev < a.finallyLoc)
                                                            return n(a.finallyLoc)
                                                    } else if (u) {
                                                        if (this.prev < a.catchLoc)
                                                            return n(a.catchLoc, !0)
                                                    } else {
                                                        if (!s)
                                                            throw new Error("try statement without catch or finally");
                                                        if (this.prev < a.finallyLoc)
                                                            return n(a.finallyLoc)
                                                    }
                                                }
                                            }
                                        },
                                        abrupt: function(e, t) {
                                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                                var r = this.tryEntries[n];
                                                if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                                    var o = r;
                                                    break
                                                }
                                            }
                                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                                            var a = o ? o.completion : {};
                                            return a.type = e,
                                                a.arg = t,
                                                o ? (this.method = "next",
                                                    this.next = o.finallyLoc,
                                                    v) : this.complete(a)
                                        },
                                        complete: function(e, t) {
                                            if ("throw" === e.type)
                                                throw e.arg;
                                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                                                    this.method = "return",
                                                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                                                v
                                        },
                                        finish: function(e) {
                                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                                var n = this.tryEntries[t];
                                                if (n.finallyLoc === e)
                                                    return this.complete(n.completion, n.afterLoc),
                                                        O(n),
                                                        v
                                            }
                                        },
                                        catch: function(e) {
                                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                                var n = this.tryEntries[t];
                                                if (n.tryLoc === e) {
                                                    var r = n.completion;
                                                    if ("throw" === r.type) {
                                                        var o = r.arg;
                                                        O(n)
                                                    }
                                                    return o
                                                }
                                            }
                                            throw new Error("illegal catch attempt")
                                        },
                                        delegateYield: function(e, t, n) {
                                            return this.delegate = {
                                                    iterator: j(e),
                                                    resultName: t,
                                                    nextLoc: n
                                                },
                                                "next" === this.method && (this.arg = r),
                                                v
                                        }
                                    }
                            }

                            function _(e, t, n, r) {
                                var o = t && t.prototype instanceof E ? t : E,
                                    i = Object.create(o.prototype),
                                    a = new M(r || []);
                                return i._invoke = function(e, t, n) {
                                        var r = d;
                                        return function(o, i) {
                                            if (r === p)
                                                throw new Error("Generator is already running");
                                            if (r === m) {
                                                if ("throw" === o)
                                                    throw i;
                                                return R()
                                            }
                                            for (n.method = o,
                                                n.arg = i;;) {
                                                var a = n.delegate;
                                                if (a) {
                                                    var c = S(a, n);
                                                    if (c) {
                                                        if (c === v)
                                                            continue;
                                                        return c
                                                    }
                                                }
                                                if ("next" === n.method)
                                                    n.sent = n._sent = n.arg;
                                                else if ("throw" === n.method) {
                                                    if (r === d)
                                                        throw r = m,
                                                        n.arg;
                                                    n.dispatchException(n.arg)
                                                } else
                                                    "return" === n.method && n.abrupt("return", n.arg);
                                                r = p;
                                                var u = x(e, t, n);
                                                if ("normal" === u.type) {
                                                    if (r = n.done ? m : h,
                                                        u.arg === v)
                                                        continue;
                                                    return {
                                                        value: u.arg,
                                                        done: n.done
                                                    }
                                                }
                                                "throw" === u.type && (r = m,
                                                    n.method = "throw",
                                                    n.arg = u.arg)
                                            }
                                        }
                                    }(e, n, a),
                                    i
                            }

                            function x(e, t, n) {
                                try {
                                    return {
                                        type: "normal",
                                        arg: e.call(t, n)
                                    }
                                } catch (e) {
                                    return {
                                        type: "throw",
                                        arg: e
                                    }
                                }
                            }

                            function E() {}

                            function k() {}

                            function T() {}

                            function P(e) {
                                ["next", "throw", "return"].forEach(function(t) {
                                    e[t] = function(e) {
                                        return this._invoke(t, e)
                                    }
                                })
                            }

                            function C(e) {
                                var n;
                                this._invoke = function(r, o) {
                                    function a() {
                                        return new Promise(function(n, a) {
                                            ! function n(r, o, a, c) {
                                                var u = x(e[r], e, o);
                                                if ("throw" !== u.type) {
                                                    var s = u.arg,
                                                        l = s.value;
                                                    return l && "object" === (void 0 === l ? "undefined" : t(l)) && i.call(l, "__await") ? Promise.resolve(l.__await).then(function(e) {
                                                        n("next", e, a, c)
                                                    }, function(e) {
                                                        n("throw", e, a, c)
                                                    }) : Promise.resolve(l).then(function(e) {
                                                        s.value = e,
                                                            a(s)
                                                    }, function(e) {
                                                        return n("throw", e, a, c)
                                                    })
                                                }
                                                c(u.arg)
                                            }(r, o, n, a)
                                        })
                                    }
                                    return n = n ? n.then(a, a) : a()
                                }
                            }

                            function S(e, t) {
                                var n = e.iterator[t.method];
                                if (n === r) {
                                    if (t.delegate = null,
                                        "throw" === t.method) {
                                        if (e.iterator.return && (t.method = "return",
                                                t.arg = r,
                                                S(e, t),
                                                "throw" === t.method))
                                            return v;
                                        t.method = "throw",
                                            t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                    }
                                    return v
                                }
                                var o = x(n, e.iterator, t.arg);
                                if ("throw" === o.type)
                                    return t.method = "throw",
                                        t.arg = o.arg,
                                        t.delegate = null,
                                        v;
                                var i = o.arg;
                                return i ? i.done ? (t[e.resultName] = i.value,
                                    t.next = e.nextLoc,
                                    "return" !== t.method && (t.method = "next",
                                        t.arg = r),
                                    t.delegate = null,
                                    v) : i : (t.method = "throw",
                                    t.arg = new TypeError("iterator result is not an object"),
                                    t.delegate = null,
                                    v)
                            }

                            function L(e) {
                                var t = {
                                    tryLoc: e[0]
                                };
                                1 in e && (t.catchLoc = e[1]),
                                    2 in e && (t.finallyLoc = e[2],
                                        t.afterLoc = e[3]),
                                    this.tryEntries.push(t)
                            }

                            function O(e) {
                                var t = e.completion || {};
                                t.type = "normal",
                                    delete t.arg,
                                    e.completion = t
                            }

                            function M(e) {
                                this.tryEntries = [{
                                        tryLoc: "root"
                                    }],
                                    e.forEach(L, this),
                                    this.reset(!0)
                            }

                            function j(e) {
                                if (e) {
                                    var t = e[c];
                                    if (t)
                                        return t.call(e);
                                    if ("function" == typeof e.next)
                                        return e;
                                    if (!isNaN(e.length)) {
                                        var n = -1,
                                            o = function t() {
                                                for (; ++n < e.length;)
                                                    if (i.call(e, n))
                                                        return t.value = e[n],
                                                            t.done = !1,
                                                            t;
                                                return t.value = r,
                                                    t.done = !0,
                                                    t
                                            };
                                        return o.next = o
                                    }
                                }
                                return {
                                    next: R
                                }
                            }

                            function R() {
                                return {
                                    value: r,
                                    done: !0
                                }
                            }
                        }(function() {
                            return this || "object" === ("undefined" == typeof self ? "undefined" : t(self)) && self
                        }() || Function("return this")())
                    }).call(this, n(20)(e))
                }, function(e, t, n) {
                    e.exports = function(e) {
                        return e.webpackPolyfill || (e.deprecate = function() {},
                                e.paths = [],
                                e.children || (e.children = []),
                                Object.defineProperty(e, "loaded", {
                                    enumerable: !0,
                                    get: function() {
                                        return e.l
                                    }
                                }),
                                Object.defineProperty(e, "id", {
                                    enumerable: !0,
                                    get: function() {
                                        return e.i
                                    }
                                }),
                                e.webpackPolyfill = 1),
                            e
                    }
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                        r.configurable = !0,
                                        "value" in r && (r.writable = !0),
                                        Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n),
                                    r && e(t, r),
                                    t
                            }
                        }(),
                        o = u(n(22)),
                        i = u(n(24)),
                        a = u(n(32)),
                        c = u(n(33));

                    function u(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var s = {},
                        l = function() {
                            function e(t) {
                                ! function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                Object.assign(t, s),
                                    t.el = t.el || document.getElementById("app"),
                                    this.el = t.el,
                                    this.config = t,
                                    this.context = {},
                                    this.lifecycle = new o.default(t),
                                    this.registerDefaultPlugin()
                            }
                            return r(e, [{
                                    key: "plugin",
                                    value: function() {
                                        var e = Array.prototype.slice.call(arguments);
                                        return e.push(this),
                                            this.lifecycle.plugin.apply(this.lifecycle, e)
                                    }
                                }, {
                                    key: "registerDefaultPlugin",
                                    value: function() {
                                        this.plugin((0,
                                                i.default)({
                                                el: this.el,
                                                pages: this.config.pages,
                                                getAppendElement: this.config.getAppendElement
                                            }, this)),
                                            this.plugin(c.default),
                                            this.plugin(a.default)
                                    }
                                }, {
                                    key: "boot",
                                    value: function() {
                                        this.lifecycle.start()
                                    }
                                }], [{
                                    key: "set",
                                    value: function(e) {
                                        Object.assign(s, e)
                                    }
                                }]),
                                e
                        }();
                    t.default = l,
                        l.globalSetting = s
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                        r.configurable = !0,
                                        "value" in r && (r.writable = !0),
                                        Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n),
                                    r && e(t, r),
                                    t
                            }
                        }(),
                        o = c(n(5)),
                        i = c(n(6));

                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var u = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" !== (void 0 === t ? "undefined" : a(t)) && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return n.stack = [],
                                n.config = e,
                                n.context = {
                                    stack: n.stack,
                                    curPageElement: null,
                                    page: null,
                                    params: null,
                                    name: null,
                                    conf: null
                                },
                                n
                        }
                        return function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : a(t)));
                                e.prototype = Object.create(t && t.prototype, {
                                        constructor: {
                                            value: e,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(t, o.default),
                            r(t, [{
                                key: "init",
                                value: function() {
                                    var e = this,
                                        t = this.config,
                                        n = this;
                                    this.router = i.default,
                                        this.context.config = t,
                                        this.router.hooks({
                                            before: function(e, t) {
                                                n.emit("beforePageRoute", n.context, t),
                                                    e(),
                                                    n.stack.push(t)
                                            },
                                            after: function(e) {
                                                n.emit("afterPageRoute", n.context, e)
                                            },
                                            leave: function(e) {
                                                n.stack.pop(),
                                                    n.emit("leavePageRoute", n.context, e)
                                            }
                                        }),
                                        this.router.notFound(function(t) {
                                            e.emit("error", {
                                                message: "notFound",
                                                code: 404,
                                                detail: t
                                            })
                                        }),
                                        this.registerRoute(t)
                                }
                            }, {
                                key: "registerRoute",
                                value: function(e) {
                                    var t = this,
                                        n = Object.create(null);
                                    e.routes;
                                    e.routes.forEach(function(r) {
                                            "/" === r && (r = ""),
                                                n[r] = {
                                                    uses: function(n) {
                                                        (n = n || {}).name = n.name || e.home,
                                                            n.routePattern = r,
                                                            t._routerHandler(n)
                                                    }
                                                }
                                        }),
                                        this.emit("launch", this.context),
                                        this.router.on(n).resolve(),
                                        this.emit("routeReady", this.context)
                                }
                            }, {
                                key: "plugin",
                                value: function(e, t) {
                                    return e(this, t)
                                }
                            }, {
                                key: "start",
                                value: function() {
                                    this.emit("beforeLaunch", this.context),
                                        this.init()
                                }
                            }, {
                                key: "_routerHandler",
                                value: function() {
                                    var e, t = (e = regeneratorRuntime.mark(function e(t) {
                                            return regeneratorRuntime.wrap(function(e) {
                                                for (;;)
                                                    switch (e.prev = e.next) {
                                                        case 0:
                                                            return Object.assign(this.context, {
                                                                    params: t,
                                                                    name: t.name,
                                                                    conf: (this.context.config.pages[t.name] || {}).conf
                                                                }),
                                                                e.next = 3,
                                                                this.emitAsyncParalle("pageRoute", this.context);
                                                        case 3:
                                                            return e.next = 5,
                                                                this.emitAsyncParalle("pageFetch", this.context);
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                            }, e, this)
                                        }),
                                        function() {
                                            var t = e.apply(this, arguments);
                                            return new Promise(function(e, n) {
                                                return function r(o, i) {
                                                    try {
                                                        var a = t[o](i),
                                                            c = a.value
                                                    } catch (e) {
                                                        return void n(e)
                                                    }
                                                    if (!a.done)
                                                        return Promise.resolve(c).then(function(e) {
                                                            r("next", e)
                                                        }, function(e) {
                                                            r("throw", e)
                                                        });
                                                    e(c)
                                                }("next")
                                            })
                                        }
                                    );
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }()
                            }]),
                            t
                    }();
                    t.default = u
                }, function(e, t, n) {
                    var r, o, i, c = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : a(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
                    };
                    i = function() {
                            var e = "function" == typeof Symbol && "symbol" == c(Symbol.iterator) ? function(e) {
                                return void 0 === e ? "undefined" : c(e)
                            } : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : c(e)
                            };

                            function t() {
                                return !("undefined" == typeof window || !window.history || !window.history.pushState)
                            }

                            function n(e, n, r) {
                                this.root = null,
                                    this._routes = [],
                                    this._useHash = n,
                                    this._hash = void 0 === r ? "#" : r,
                                    this._paused = !1,
                                    this._destroyed = !1,
                                    this._lastRouteResolved = null,
                                    this._notFoundHandler = null,
                                    this._defaultHandler = null,
                                    this._usePushState = !n && t(),
                                    this._onLocationChange = this._onLocationChange.bind(this),
                                    this._genericHooks = null,
                                    this._historyAPIUpdateMethod = "pushState",
                                    e ? this.root = n ? e.replace(/\/$/, "/" + this._hash) : e.replace(/\/$/, "") : n && (this.root = this._cLoc().split(this._hash)[0].replace(/\/$/, "/" + this._hash)),
                                    this._listen(),
                                    this.updatePageLinks()
                            }

                            function r(e) {
                                return e instanceof RegExp ? e : e.replace(/\/+$/, "").replace(/^\/+/, "^/")
                            }

                            function o(e) {
                                return e.replace(/\/$/, "").split("/").length
                            }

                            function i(e, t) {
                                return o(t) - o(e)
                            }

                            function a(e, t) {
                                return function(e) {
                                    return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map(function(t) {
                                        var o = function(e) {
                                                var t = [];
                                                return {
                                                    regexp: e instanceof RegExp ? e : new RegExp(e.replace(n.PARAMETER_REGEXP, function(e, r, o) {
                                                        return t.push(o),
                                                            n.REPLACE_VARIABLE_REGEXP
                                                    }).replace(n.WILDCARD_REGEXP, n.REPLACE_WILDCARD) + n.FOLLOWED_BY_SLASH_REGEXP, n.MATCH_REGEXP_FLAGS),
                                                    paramNames: t
                                                }
                                            }(r(t.route)),
                                            i = o.regexp,
                                            a = o.paramNames,
                                            c = e.replace(/^\/+/, "/").match(i),
                                            u = function(e, t) {
                                                return 0 === t.length ? null : e ? e.slice(1, e.length).reduce(function(e, n, r) {
                                                    return null === e && (e = {}),
                                                        e[t[r]] = decodeURIComponent(n),
                                                        e
                                                }, null) : null
                                            }(c, a);
                                        return !!c && {
                                            match: c,
                                            route: t,
                                            params: u
                                        }
                                    }).filter(function(e) {
                                        return e
                                    })
                                }(e, t)[0] || !1
                            }

                            function u(e, t) {
                                var n = t.map(function(t) {
                                        return "" === t.route || "*" === t.route ? e : e.split(new RegExp(t.route + "($|/)"))[0]
                                    }),
                                    o = r(e);
                                return n.length > 1 ? n.reduce(function(e, t) {
                                    return e.length > t.length && (e = t),
                                        e
                                }, n[0]) : 1 === n.length ? n[0] : o
                            }

                            function s(e, n, r) {
                                var o, i = function(e) {
                                    return e.split(/\?(.*)?$/)[0]
                                };
                                return void 0 === r && (r = "#"),
                                    t() && !n ? i(e).split(r)[0] : (o = e.split(r)).length > 1 ? i(o[1]) : i(o[0])
                            }

                            function l(t, n, r) {
                                if (n && "object" === (void 0 === n ? "undefined" : e(n))) {
                                    if (n.before)
                                        return void n.before(function() {
                                            (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (t(),
                                                n.after && n.after(r))
                                        }, r);
                                    if (n.after)
                                        return t(),
                                            void(n.after && n.after(r))
                                }
                                t()
                            }
                            return n.prototype = {
                                    helpers: {
                                        match: a,
                                        root: u,
                                        clean: r,
                                        getOnlyURL: s
                                    },
                                    navigate: function(e, t) {
                                        var n;
                                        return e = e || "",
                                            this._usePushState ? (n = (n = (t ? "" : this._getRoot() + "/") + e.replace(/^\/+/, "/")).replace(/([^:])(\/{2,})/g, "$1/"),
                                                history[this._historyAPIUpdateMethod]({}, "", n),
                                                this.resolve()) : "undefined" != typeof window && (e = e.replace(new RegExp("^" + this._hash), ""),
                                                window.location.href = window.location.href.replace(/#$/, "").replace(new RegExp(this._hash + ".*$"), "") + this._hash + e),
                                            this
                                    },
                                    on: function() {
                                        for (var t = this, n = arguments.length, r = Array(n), o = 0; o < n; o++)
                                            r[o] = arguments[o];
                                        if ("function" == typeof r[0])
                                            this._defaultHandler = {
                                                handler: r[0],
                                                hooks: r[1]
                                            };
                                        else if (r.length >= 2)
                                            if ("/" === r[0]) {
                                                var a = r[1];
                                                "object" === e(r[1]) && (a = r[1].uses),
                                                    this._defaultHandler = {
                                                        handler: a,
                                                        hooks: r[2]
                                                    }
                                            } else
                                                this._add(r[0], r[1], r[2]);
                                        else
                                            "object" === e(r[0]) && Object.keys(r[0]).sort(i).forEach(function(e) {
                                                t.on(e, r[0][e])
                                            });
                                        return this
                                    },
                                    off: function(e) {
                                        return null !== this._defaultHandler && e === this._defaultHandler.handler ? this._defaultHandler = null : null !== this._notFoundHandler && e === this._notFoundHandler.handler && (this._notFoundHandler = null),
                                            this._routes = this._routes.reduce(function(t, n) {
                                                return n.handler !== e && t.push(n),
                                                    t
                                            }, []),
                                            this
                                    },
                                    notFound: function(e, t) {
                                        return this._notFoundHandler = {
                                                handler: e,
                                                hooks: t
                                            },
                                            this
                                    },
                                    resolve: function(e) {
                                        var n, r, o = this,
                                            i = (e || this._cLoc()).replace(this._getRoot(), "");
                                        this._useHash && (i = i.replace(new RegExp("^/" + this._hash), "/"));
                                        var c = function(e) {
                                                return e.split(/\?(.*)?$/).slice(1).join("")
                                            }(e || this._cLoc()),
                                            u = s(i, this._useHash, this._hash);
                                        return !this._paused && (this._lastRouteResolved && u === this._lastRouteResolved.url && c === this._lastRouteResolved.query ? (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already && this._lastRouteResolved.hooks.already(this._lastRouteResolved.params), !1) : (r = a(u, this._routes)) ? (this._callLeave(),
                                            this._lastRouteResolved = {
                                                url: u,
                                                query: c,
                                                hooks: r.route.hooks,
                                                params: r.params,
                                                name: r.route.name
                                            },
                                            n = r.route.handler,
                                            l(function() {
                                                l(function() {
                                                    r.route.route instanceof RegExp ? n.apply(void 0, r.match.slice(1, r.match.length)) : n(r.params, c)
                                                }, r.route.hooks, r.params, o._genericHooks)
                                            }, this._genericHooks, r.params),
                                            r) : this._defaultHandler && ("" === u || "/" === u || u === this._hash || function(e, n, r) {
                                            if (t() && !n)
                                                return !1;
                                            if (!e.match(r))
                                                return !1;
                                            var o = e.split(r);
                                            return o.length < 2 || "" === o[1]
                                        }(u, this._useHash, this._hash)) ? (l(function() {
                                            l(function() {
                                                o._callLeave(),
                                                    o._lastRouteResolved = {
                                                        url: u,
                                                        query: c,
                                                        hooks: o._defaultHandler.hooks
                                                    },
                                                    o._defaultHandler.handler(c)
                                            }, o._defaultHandler.hooks)
                                        }, this._genericHooks), !0) : (this._notFoundHandler && l(function() {
                                            l(function() {
                                                o._callLeave(),
                                                    o._lastRouteResolved = {
                                                        url: u,
                                                        query: c,
                                                        hooks: o._notFoundHandler.hooks
                                                    },
                                                    o._notFoundHandler.handler(c)
                                            }, o._notFoundHandler.hooks)
                                        }, this._genericHooks), !1))
                                    },
                                    destroy: function() {
                                        this._routes = [],
                                            this._destroyed = !0,
                                            this._lastRouteResolved = null,
                                            this._genericHooks = null,
                                            clearTimeout(this._listeningInterval),
                                            "undefined" != typeof window && (window.removeEventListener("popstate", this._onLocationChange),
                                                window.removeEventListener("hashchange", this._onLocationChange))
                                    },
                                    updatePageLinks: function() {
                                        var e = this;
                                        "undefined" != typeof document && this._findLinks().forEach(function(t) {
                                            t.hasListenerAttached || (t.addEventListener("click", function(n) {
                                                    if ((n.ctrlKey || n.metaKey) && "a" == n.target.tagName.toLowerCase())
                                                        return !1;
                                                    var r = e.getLinkPath(t);
                                                    e._destroyed || (n.preventDefault(),
                                                        e.navigate(r.replace(/\/+$/, "").replace(/^\/+/, "/")))
                                                }),
                                                t.hasListenerAttached = !0)
                                        })
                                    },
                                    generate: function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            n = this._routes.reduce(function(n, r) {
                                                var o;
                                                if (r.name === e)
                                                    for (o in n = r.route,
                                                        t)
                                                        n = n.toString().replace(":" + o, t[o]);
                                                return n
                                            }, "");
                                        return this._useHash ? this._hash + n : n
                                    },
                                    link: function(e) {
                                        return this._getRoot() + e
                                    },
                                    pause: function() {
                                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                        this._paused = e,
                                            this._historyAPIUpdateMethod = e ? "replaceState" : "pushState"
                                    },
                                    resume: function() {
                                        this.pause(!1)
                                    },
                                    historyAPIUpdateMethod: function(e) {
                                        return void 0 === e ? this._historyAPIUpdateMethod : (this._historyAPIUpdateMethod = e,
                                            e)
                                    },
                                    disableIfAPINotAvailable: function() {
                                        t() || this.destroy()
                                    },
                                    lastRouteResolved: function() {
                                        return this._lastRouteResolved
                                    },
                                    getLinkPath: function(e) {
                                        return e.getAttribute("href")
                                    },
                                    hooks: function(e) {
                                        this._genericHooks = e
                                    },
                                    _add: function(t) {
                                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                        return "string" == typeof t && (t = encodeURI(t)),
                                            this._routes.push("object" === (void 0 === n ? "undefined" : e(n)) ? {
                                                route: t,
                                                handler: n.uses,
                                                name: n.as,
                                                hooks: r || n.hooks
                                            } : {
                                                route: t,
                                                handler: n,
                                                hooks: r
                                            }),
                                            this._add
                                    },
                                    _getRoot: function() {
                                        return null !== this.root ? this.root : (this.root = u(this._cLoc().split("?")[0], this._routes),
                                            this.root)
                                    },
                                    _listen: function() {
                                        var e = this;
                                        if (this._usePushState)
                                            window.addEventListener("popstate", this._onLocationChange);
                                        else if ("undefined" != typeof window && "onhashchange" in window)
                                            window.addEventListener("hashchange", this._onLocationChange);
                                        else {
                                            var t = this._cLoc(),
                                                n = void 0,
                                                r = void 0;
                                            (r = function() {
                                                n = e._cLoc(),
                                                    t !== n && (t = n,
                                                        e.resolve()),
                                                    e._listeningInterval = setTimeout(r, 200)
                                            })()
                                        }
                                    },
                                    _cLoc: function() {
                                        return "undefined" != typeof window ? void 0 !== window.__NAVIGO_WINDOW_LOCATION_MOCK__ ? window.__NAVIGO_WINDOW_LOCATION_MOCK__ : r(window.location.href) : ""
                                    },
                                    _findLinks: function() {
                                        return [].slice.call(document.querySelectorAll("[data-navigo]"))
                                    },
                                    _onLocationChange: function() {
                                        this.resolve()
                                    },
                                    _callLeave: function() {
                                        var e = this._lastRouteResolved;
                                        e && e.hooks && e.hooks.leave && e.hooks.leave(e.params)
                                    }
                                },
                                n.PARAMETER_REGEXP = /([:*])(\w+)/g,
                                n.WILDCARD_REGEXP = /\*/g,
                                n.REPLACE_VARIABLE_REGEXP = "([^/]+)",
                                n.REPLACE_WILDCARD = "(?:.*)",
                                n.FOLLOWED_BY_SLASH_REGEXP = "(?:/$|$)",
                                n.MATCH_REGEXP_FLAGS = "",
                                n
                        },
                        "object" == c(t) && void 0 !== e ? e.exports = i() : void 0 === (o = "function" == typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = o)
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = i(n(25)),
                        o = i(n(31));

                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    t.default = function(e) {
                        var t = new r.default(e);
                        return function(e, n) {
                            var r, i, a = this;
                            e.on("beforeLaunch", function() {
                                    n.prefetch = (0,
                                        o.default)(n.config, n.config.pages)
                                }),
                                e.on("pageRoute", function(r) {
                                    r.page = t.createPage(n, r.name, e, r.params),
                                        e.context.curPage = t.curPage,
                                        e.context.lastPage = t.lastPage
                                }),
                                e.on("pageFetch", (r = regeneratorRuntime.mark(function e(n) {
                                        return regeneratorRuntime.wrap(function(e) {
                                            for (;;)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return t.hideLastPage(),
                                                            e.next = 3,
                                                            t.showCurPage();
                                                    case 3:
                                                        Promise.resolve({}).then(function() {
                                                            t.destroyLastPage()
                                                        });
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }, e, a)
                                    }),
                                    i = function() {
                                        var e = r.apply(this, arguments);
                                        return new Promise(function(t, n) {
                                            return function r(o, i) {
                                                try {
                                                    var a = e[o](i),
                                                        c = a.value
                                                } catch (e) {
                                                    return void n(e)
                                                }
                                                if (!a.done)
                                                    return Promise.resolve(c).then(function(e) {
                                                        r("next", e)
                                                    }, function(e) {
                                                        r("throw", e)
                                                    });
                                                t(c)
                                            }("next")
                                        })
                                    },
                                    function(e) {
                                        return i.apply(this, arguments)
                                    }
                                ))
                        }
                    }
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r, o = function() {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                        r.configurable = !0,
                                        "value" in r && (r.writable = !0),
                                        Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function(t, n, r) {
                                return n && e(t.prototype, n),
                                    r && e(t, r),
                                    t
                            }
                        }(),
                        i = n(9),
                        a = (r = i) && r.__esModule ? r : {
                            default: r
                        };
                    var c = !0,
                        u = function() {
                            function e(t) {
                                ! function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                this.config = t,
                                    this.el = t.el,
                                    this.pages = t.pages,
                                    this.curPage = null,
                                    this.lastPage = null,
                                    this.singletonPageMap = Object.create(null)
                            }
                            return o(e, [{
                                    key: "createPage",
                                    value: function(e, t, n, r) {
                                        var o, i = this.pages[t] || this.pages["/"];
                                        return this.singletonPageMap[t] ? (o = this.singletonPageMap[t]).context && (o.context.routeParams = r) : (o = new a.default(e, {
                                                    isRouteInited: c,
                                                    name: t,
                                                    routeParams: r
                                                }, i, i.component || {}),
                                                this.emitToLifecycle(o, n)),
                                            i.conf.singleton && !this.singletonPageMap[t] && (this.singletonPageMap[t] = o),
                                            c && (c = !1),
                                            this.lastPage = this.curPage,
                                            this.curPage = o,
                                            o
                                    }
                                }, {
                                    key: "showCurPage",
                                    value: function() {
                                        return this.curPage.show(this._hasChangeGroup())
                                    }
                                }, {
                                    key: "hideLastPage",
                                    value: function() {
                                        if (this.lastPage)
                                            return this.lastPage && this.lastPage.hide(this._hasChangeGroup())
                                    }
                                }, {
                                    key: "destroyLastPage",
                                    value: function() {
                                        this.lastPage && this.lastPage.destroy(),
                                            this.lastPage = null
                                    }
                                }, {
                                    key: "prerenderPage",
                                    value: function() {}
                                }, {
                                    key: "emitToLifecycle",
                                    value: function(e, t) {
                                        e.on("viewCreated", function(e) {
                                                t.emit("pageViewCreated", e, t.context)
                                            }),
                                            e.on("show", function(e) {
                                                t.emit("pageShow", e, t.context)
                                            }),
                                            e.on("ready", function(e) {
                                                t.emit("pageReady", e, t.context)
                                            }),
                                            e.on("viewReady", function(e) {
                                                t.emit("pageViewReady", e, t.context)
                                            }),
                                            e.on("hide", function(e) {
                                                t.emit("pageHide", e, t.context)
                                            }),
                                            e.on("beforeDestroy", function(e) {
                                                t.emit("pageViewBeforeDestroy", e, t.context)
                                            }),
                                            e.on("destroy", function(e) {
                                                t.emit("pageDestroy", e, t.context)
                                            }),
                                            e.on("error", function(e) {
                                                t.emit("pageError", e, t.context)
                                            })
                                    }
                                }, {
                                    key: "_hasChangeGroup",
                                    value: function() {
                                        if (!this.lastPage)
                                            return !1;
                                        var e = this.lastPage.context.containerElement.getAttribute("group");
                                        return this.curPage.context.containerElement.getAttribute("group") !== e
                                    }
                                }]),
                                e
                        }();
                    t.default = u
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = n(0),
                        o = n(27).session,
                        i = "cached_pagelet",
                        a = {
                            get: function(e) {
                                return o().get([i, e, r.getSession().vuserid].join(":"))
                            },
                            set: function(e, t, n, a) {
                                var c = t.clientCacheTime || 6e4;
                                r.isValidPage(a.html, e) && o().set([i, n, r.getSession().vuserid].join(":"), a, c)
                            },
                            key: function(e, t, n) {
                                var r = e,
                                    o = t.cacheKeys;
                                return o && o.length && (r += "?" + o.map(function(e) {
                                        return e + "=" + (n[e] || "")
                                    }).join("&")),
                                    r
                            }
                        };
                    t.default = a
                }, function(e, t, n) {
                    var r, o, i = n(28),
                        a = n(10);
                    e.exports = {
                        session: function() {
                            return r || (r = new i({
                                    session: !0,
                                    namespace: a().namespace
                                })),
                                r
                        },
                        cache: function() {
                            return o || (o = new i({
                                    local: !0,
                                    namespace: a().namespace
                                })),
                                o
                        }
                    }
                }, function(e, t, n) {
                    var r, o, i = n(1),
                        a = {},
                        c = {};
                    try {
                        (r = "localStorage" in window && null !== window.localStorage) && window.localStorage.setItem("_store_detection_test_", "hasLocal")
                    } catch (e) {
                        r = !1
                    }
                    try {
                        (o = "sessionStorage" in window && null !== window.sessionStorage) && window.sessionStorage.setItem("_store_detection_test_", "hasLocal")
                    } catch (e) {
                        o = !1
                    }

                    function u() {}

                    function s() {}

                    function l() {}
                    u.prototype = {
                            get: function(e) {
                                return localStorage.getItem(e)
                            },
                            set: function(e, t) {
                                localStorage.setItem(e, t)
                            },
                            remove: function(e) {
                                localStorage.removeItem(e)
                            },
                            keys: function() {
                                return i.keys(localStorage)
                            }
                        },
                        s.prototype = {
                            get: function(e) {
                                return sessionStorage.getItem(e)
                            },
                            set: function(e, t) {
                                sessionStorage.setItem(e, t)
                            },
                            remove: function(e) {
                                sessionStorage.removeItem(e)
                            },
                            keys: function() {
                                return i.keys(sessionStorage)
                            }
                        },
                        l.prototype = {
                            get: function(e) {
                                return a[e]
                            },
                            set: function(e, t) {
                                a[e] = t
                            },
                            remove: function(e) {
                                delete a[e]
                            },
                            keys: function() {
                                return i.keys(a)
                            }
                        };
                    var f = function(e) {
                        (e = e || {}).local && r ? this.storage = new u : e.local && !r || e.session && o ? this.storage = new s : this.storage = new l,
                            this.namespace = e.namespace ? e.namespace + "_" : "",
                            this.expire = e.expire,
                            this.removeExpired()
                    };
                    f.prototype = {
                            get: function(e) {
                                e = this.namespace + (e || "");
                                var t, n = this.storage.get(e);
                                try {
                                    t = JSON.parse(n)
                                } catch (e) {
                                    t = n
                                }
                                if (t) {
                                    if ("object" != i.type(t) || !("expire" in t) || t.expire > (new Date).getTime())
                                        return t.data;
                                    this.remove(e)
                                }
                                return null
                            },
                            set: function(e, t, n) {
                                e = this.namespace + (e || "");
                                var r = {
                                    data: t
                                };
                                (n = this.expire || n) > 0 && (r.expire = (new Date).getTime() + 1e3 * n);
                                try {
                                    var o = window.JSON && JSON.stringify ? JSON.stringify(r) : r;
                                    this.storage.set(e, o)
                                } catch (e) {}
                            },
                            remove: function(e) {
                                e = this.namespace + (e || ""),
                                    this.storage.remove(e)
                            },
                            removeExpired: function() {
                                var e = this,
                                    t = "";
                                this.storage instanceof u ? t = "LS" : this.storage instanceof s ? t = "Session" : this.storage instanceof l && (t = "Memory"),
                                    t && !c[t] && (c[t] = !0,
                                        setTimeout(function() {
                                            try {
                                                i.forEach(e.storage.keys(), function(t) {
                                                        var n = e.storage.get(t);
                                                        try {
                                                            n = JSON.parse(n)
                                                        } catch (e) {
                                                            return
                                                        }
                                                        n && "object" == i.type(n) && "expire" in n && n.expire <= (new Date).getTime() && e.storage.remove(t)
                                                    }),
                                                    c[t] = !1
                                            } catch (e) {
                                                console.log("[Store] removeExpired error:", e)
                                            }
                                        }, 6e4))
                            }
                        },
                        e.exports = f
                }, function(e, t, n) {
                    var r = n(1),
                        o = {
                            queryParse: function(e, t) {
                                if (!e)
                                    return {};
                                t = t || "&";
                                var n = e.replace(/^\?/, ""),
                                    o = {},
                                    i = n ? n.split(t) : null;
                                return i && i.length > 0 && r.forEach(i, function(e) {
                                        var t = (e = e.split("=")).splice(0, 1),
                                            n = e.join("=");
                                        o[t] = decodeURIComponent(n)
                                    }),
                                    o
                            },
                            queryJoin: function(e) {
                                var t = [].slice.call(arguments);
                                t[0] = {};
                                var n, i = o.queryStringify(r.extend.apply(r, t));
                                return i ? (n = /[\?&]$/.test(e) ? "" : ~e.indexOf("?") ? "&" : "?",
                                    e + n + i) : e
                            },
                            queryStringify: function(e, t) {
                                return e ? r.map(r.keys(e), function(t) {
                                    return t + "=" + encodeURIComponent(e[t])
                                }).join(t || "&") : ""
                            }
                        };
                    e.exports = o
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : a(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
                    };
                    t.default = {
                        syncData: function(e) {
                            var t = this,
                                n = Array.prototype.slice.call(e.context.containerElement.querySelectorAll('[page="' + e.context.name + '"][name="data_sync"]'));
                            if (n.length >= 6)
                                console.warn("[Glama Warning]:for performance, syncdata should not exceed 6");
                            else if (0 == n.length)
                                return !1;
                            n.forEach(function(n) {
                                if (!n || !n.value || !n.getAttribute("key"))
                                    return !1;
                                try {
                                    t.path(e, n.getAttribute("key"), JSON.parse(n.value))
                                } catch (e) {
                                    return console.warn("sync data error", e), !1
                                } finally {
                                    n.remove()
                                }
                            })
                        },
                        path: function(e, t, n) {
                            if (2 === arguments.length)
                                return t.split(".").reduce(function(e, t) {
                                    return e && e[t]
                                }, e);
                            if (3 === arguments.length && "object" === (void 0 === e ? "undefined" : r(e))) {
                                var o = t.split(".");
                                return o.reduce(function(e, t, r) {
                                        return r === o.length - 1 ? e[t] = n : void 0 === e[t] && (e[t] = {}),
                                            e[t]
                                    }, e),
                                    e
                            }
                            throw new TypeError("params error")
                        }
                    }
                }, function(e, t, n) {
                    var r = c(n(2)),
                        o = n(9),
                        i = c(n(8)),
                        a = c(n(0));

                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var u = {};
                    e.exports = function(e, t) {
                        return function(n) {
                            if (u[n])
                                return u[n];
                            var c = new Promise(function(c, s) {
                                function l() {
                                    u[n] = !1
                                }
                                var f = n.split("?"),
                                    d = f[0].match(/([\w]+)$/);
                                d = d ? d[1] : e.home;
                                var h = r.default.parse(f[1]),
                                    p = (t[d] || {}).conf || {},
                                    m = o.PageCache.key(d, p, h);
                                if (!p.clientCache)
                                    return u[n] = !1,
                                        c(!1);
                                i.default.get(d, Object.assign({}, h, {
                                    noreport: !0
                                })).then(function(e) {
                                    l(),
                                        e && e.html && a.default.isValidPage(e.html, d) ? (console.log("[Entry] prefetch:", n),
                                            o.PageCache.set(d, p, m, e),
                                            c(!0)) : c(!1)
                                }, function(e) {
                                    l(),
                                        s(e)
                                })
                            });
                            return u[n] = c,
                                c
                        }
                    }
                }, function(e, t, n) {
                    function r(e) {
                        return "function" == typeof e
                    }
                    Object.defineProperty(t, "__esModule", {
                            value: !0
                        }),
                        t.default = function(e, t) {
                            var n = t.config;
                            r(n.onBeforeLaunch) && e.on("beforeLaunch", n.onBeforeLaunch),
                                r(n.onLaunch) && e.on("launch", n.onLaunch),
                                r(n.onPageRoute) && e.on("pageRoute", n.onPageRoute),
                                r(n.onRouteReady) && e.on("routeReady", n.onRouteReady),
                                r(n.onPageViewCreated) && e.on("pageViewCreated", n.onPageViewCreated),
                                r(n.onPageShow) && e.on("pageShow", n.onPageShow),
                                r(n.onPageReady) && e.on("pageReady", n.onPageReady),
                                r(n.onPageViewReady) && e.on("pageViewReady", n.onPageViewReady),
                                r(n.onPageHide) && e.on("pageHide", n.onPageHide),
                                r(n.onPageViewBeforeDestroy) && e.on("pageViewBeforeDestroy", n.onPageViewBeforeDestroy),
                                r(n.onPageError) && e.on("pageError", n.onPageError)
                        }
                }, function(e, t, n) {
                    Object.defineProperty(t, "__esModule", {
                            value: !0
                        }),
                        t.default = function(e, t) {
                            t.context.eventLogList = r,
                                e.onAllEvent(function(e, t) {
                                    ! function(e, t) {
                                        var n = {
                                            eventName: e,
                                            params: t,
                                            timestamp: Date.now()
                                        };
                                        if (r.push(n),
                                            r.length > o) {
                                            r.shift();
                                            null
                                        }
                                    }(e, t)
                                })
                        };
                    var r = [],
                        o = window.GLAMA_LOG_MAX_SIZE || 150
                }])
            },
            "object" === a(t) && "object" === a(e) ? e.exports = i() : (r = [],
                void 0 === (o = "function" == typeof(n = i) ? n.apply(t, r) : n) || (e.exports = o))
    }).call(this, n(15)(e))
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {},
                e.paths = [],
                e.children || (e.children = []),
                Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }),
                Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }),
                e.webpackPolyfill = 1),
            e
    }
}, function(e, t, n) {
    "use strict";
    var r = "undefined" == typeof window ? "" : ("https:" == window.location.protocol ? "wss:" : "ws:") + "//" + window.location.host + "/x/channel/ws/connect";
    e.exports = {
        title: "板块流",
        singleton: !0,
        clientCache: !1,
        clientCacheTime: 12e4,
        wsUrl: r,
        routeTemplate: '"x/channel/" + name + "/" + channelTag + "?pageContext=&request=channel_data"'
    }
}, function(e, t, n) {
    "use strict";
    var r, o = n(1),
        i = n(5),
        a = (r = i) && r.__esModule ? r : {
            default: r
        },
        c = n(18),
        u = n(2);
    var s = n(3).lazyLoad,
        l = n(10).throttle,
        f = Object.create(null),
        d = void 0,
        h = void 0,
        p = void 0,
        m = void 0;

    function v(e) {
        s(h[0]);
        var t = e ? "-" + e : "";
        new Swiper(".simple-horizontal" + t, {
                direction: "horizontal",
                speed: 500,
                autoplay: {
                    delay: 5e3,
                    stopOnLastSlide: !1,
                    disableOnInteraction: !1
                },
                loop: !0,
                on: {
                    slideChangeTransitionEnd: function() {
                        this.$el.find(".swiper_count_index").text(this.realIndex + 1)
                    }
                }
            }),
            new Swiper(".scroll-horizontal" + t, {
                slidesPerView: "auto",
                spaceBetween: 9,
                freeMode: !0,
                freeModeMinimumVelocity: .1,
                freeModeMomentumRatio: .5
            })
    }

    function g(e, t) {
        $(".list_item", e).remove(),
            $(".block_refresh", e).before(t),
            d.html = h.html(),
            s(h[0])
    }
    e.exports = {
        created: function(e) {
            this.status.createdTime = (new Date).getTime()
        },
        ready: function(e) {
            var t = this;
            h = $("#container-select"),
                p = $("#container_error");
            var n = (0,
                o.getPageContext)(h.html());
            this.resetUI(),
                this.setResultUI(n, !0),
                this.status.isRouteInited ? (Glama.router.replace(location.pathname, {
                        channelTag: n.params.channelTag
                    }),
                    m = n.params.channelTag) : u.report.page({
                    time_response: (new Date).getTime() - this.status.createdTime,
                    time_domready: 15 + Math.ceil(10 * Math.random())
                }),
                this.loadMoreEvent = this.loadMoreEvent.bind(this),
                this.initLoadMore(),
                window.addEventListener("scroll", l(s, 50, 100).bind(null, h[0])),
                window.addEventListener("touchmove", l(s, 50, 100).bind(null, h[0])),
                h.on("click", ".block_refresh", function(e) {
                    if (e.currentTarget && e.currentTarget.parentNode) {
                        var n = $(e.currentTarget.parentNode);
                        t.blockRefresh(n);
                        var r = n.closest("[data-tpltype]").attr("data-tpltype");
                        r && u.boss.click("click_" + r + "_refresh")
                    }
                }),
                h.on("click", ".open_video", function(e) {
                    var t = $(e.currentTarget).closest("[data-tpltype]").attr("data-tpltype");
                    t && u.boss.click("click_" + t)
                })
        },
        hide: function() {
            h.html(""),
                window.removeEventListener("scroll", this.loadMoreEvent),
                window.removeEventListener("touchmove", this.loadMoreEvent)
        },
        show: function(e) {
            var t = e.routeParams && e.routeParams.channelTag || m;
            u.boss.setPage(t || "index"),
                u.boss.expose(t || "index"),
                h && t && this.pageChange(t)
        },
        methods: {
            pageChange: function(e) {
                var t = this;
                if (t.initLoadMore(),
                    t.resetUI(),
                    e && f[e]) {
                    var n = f[e];
                    if (n.html) {
                        d = n;
                        var r = (new Date).getTime();
                        return h.html(d.html),
                            v(),
                            void u.report.page({
                                time_response: 0,
                                time_domready: (new Date).getTime() - r
                            })
                    }
                }
                var o = (new Date).getTime(),
                    i = void 0,
                    a = void 0,
                    c = void 0;
                h.html(""),
                    t.getPagelet(e, "").then(function(e) {
                        a = i = (new Date).getTime(),
                            t.setResultUI(e, !1),
                            e.html && !e.params.status && (c = (new Date).getTime(),
                                u.report.page({
                                    time_response: i - o,
                                    time_domready: c - a
                                }))
                    })
            },
            getPagelet: function(e, t) {
                var n = encodeURIComponent(t);
                return this.pagelet.get("x/channel/select/" + e, {
                    pageContext: n,
                    request: "channel_data"
                }, void 0, {
                    name: "select",
                    channelTag: e
                }, this.conf.wsUrl).then(function(e) {
                    if (e && e.html)
                        return (0,
                            o.getPageContext)(e.html);
                    throw e
                }).catch(function(t) {
                    return (0,
                            u.reportError)(location.protocol + "//" + location.host + "/x/channel/select/" + e + "?pagelet=1&pageContext=" + n + "&request=channel_data", JSON.stringify(t)),
                        console.error(t), {
                            html: "",
                            params: {
                                channelTag: e
                            }
                        }
                })
            },
            initLoadMore: function() {
                window.removeEventListener("scroll", this.loadMoreEvent),
                    window.removeEventListener("touchmove", this.loadMoreEvent),
                    window.addEventListener("scroll", this.loadMoreEvent),
                    window.addEventListener("touchmove", this.loadMoreEvent)
            },
            loadMoreEvent: function() {
                (0,
                    o.canLoadMore)() && this.loadMore()
            },
            loadMore: function() {
                var e = this;
                window.removeEventListener("scroll", e.loadMoreEvent),
                    window.removeEventListener("touchmove", e.loadMoreEvent),
                    e.getPagelet(d.channelTag, d.data.pageContext).then(function(e) {
                        if (!e.html || e.params.status || e.params.pageContext == c.END_FLAG)
                            return $("#container_loading").addClass("hide"),
                                void(d.data.pageContext = c.END_FLAG);
                        d.data.pageContext = e.params.pageContext;
                        var t = "swiper_" + (0,
                            o.s4)();
                        h.append(e.html.replace(/simple-horizontal/g, "simple-horizontal simple-horizontal-" + t).replace(/scroll-horizontal/g, "scroll-horizontal scroll-horizontal-" + t)),
                            d.html = h.html(),
                            v(t)
                    }).finally(function() {
                        d.data.pageContext != c.END_FLAG && (window.addEventListener("scroll", e.loadMoreEvent),
                            window.addEventListener("touchmove", e.loadMoreEvent))
                    })
            },
            blockRefresh: function(e) {
                var t = JSON.parse(e.attr("change")),
                    n = e.attr("tplType"),
                    r = e.attr("modid");
                if (!d.refreshCache.getById(r)) {
                    var i = "";
                    $(".list_item", e).forEach(function(e) {
                            i += e.outerHTML
                        }),
                        d.refreshCache.addById(r, i)
                }
                t.eachPageCnt.length >= t.changeTimes || t.pageContext == c.END_FLAG ? g(e, d.refreshCache.next(r)) : this.pagelet.get("x/channel/select/" + d.channelTag, {
                    pageContext: encodeURIComponent(t.pageContext),
                    dataKey: encodeURIComponent(e.attr("shakedatakey") + "+shake_size=" + t.changeSize),
                    type: e.attr("shaketype"),
                    tplType: n,
                    eachPageCntLength: t.eachPageCnt.length,
                    maxCount: t.eachPageCnt[0],
                    request: "label_sec"
                }, void 0, {
                    name: "select",
                    channelTag: d.channelTag
                }, this.conf.wsUrl).then(function(n) {
                    if (n && n.html) {
                        var i = (0,
                                o.getPageContext)(n.html),
                            a = i.html;
                        if (i.params.status || !i.params.listCount)
                            return t.pageContext = c.END_FLAG,
                                e.attr("change", JSON.stringify(t)),
                                g(e, d.refreshCache.next(r)),
                                void(i.params.status && console.log(i.params.status + ": " + i.params.statusMsg));
                        t.pageContext = i.params.pageContext,
                            t.eachPageCnt.push(i.params.listCount),
                            e.attr("change", JSON.stringify(t)),
                            d.refreshCache.addById(r, a),
                            g(e, a)
                    }
                }).catch(function(e) {
                    console.error(e)
                })
            },
            registerChannelCache: function(e) {
                (d = new a.default(e.params.channelTag, {
                    pageContext: e.params.pageContext
                }, e.html)).channelTag && (f[d.channelTag] = d)
            },
            setResultUI: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.registerChannelCache(e), !e.html || e.params.status ? ($("#container_loading").addClass("hide"),
                    $(".error_code span", p).text(e.params.status || "-999"),
                    $(".error_msg span", p).text(e.params.statusMsg || "接口异常"),
                    p.removeClass("hide"),
                    $(".error_btn", p).on("click", this.reloadPage.bind(this))) : (t || h.html(e.html),
                    v(),
                    $(window).height() > h.height() + 93 && this.loadMore())
            },
            resetUI: function() {
                window.scrollTo(0, 0),
                    $("#container_loading").removeClass("hide"),
                    p.addClass("hide"),
                    $(".error_btn", p).off("click")
            },
            reloadPage: function() {
                this.pageChange(d.channelTag)
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.baseUrl = "http://access.video.qq.com",
        t.END_FLAG = "page=-1"
}, function(e, t, n) {
    "use strict";
    var r, o, i, a = n(0),
        c = n(20),
        u = n(22),
        s = n(24),
        l = "localStorage" in window && null !== window.localStorage,
        f = function(e) {
            return new d(e)
        };

    function d(e) {
        this._con = e
    }

    function h() {
        return r || window.jQuery || window.$ || f
    }

    function p(e) {
        return "string" != typeof e ? [] : a.map(e.split("|"), function(e) {
            return a.map(e.split(","), function(e) {
                return decodeURIComponent(e)
            })
        })
    }
    d.prototype.on = function(e, t, n) {
            u(this._con, t, e, function(e) {
                n({
                    currentTarget: e.delegateTarget
                })
            })
        },
        d.prototype.attr = function(e) {
            return this._con.getAttribute(e)
        },
        s.uuidGetter && s.uuidGetter(function() {
            if (o)
                try {
                    return o()
                } catch (e) {}
        }),
        s.referrerGetter && s.referrerGetter(function() {
            if (i)
                try {
                    return i()
                } catch (e) {}
        }),
        e.exports = function e(t) {
            var n = "index",
                u = "boss_common",
                f = u + "_lazy_reports",
                d = t && t.standard,
                m = (t && t.loaded, {});

            function v(e, t) {
                return (t = t || {}).loaded = !0,
                    s.hot(e, a.extend({}, m, t))
            }

            function g(e, t, n) {
                return v([u, "event", e, t, n || ""]),
                    this
            }

            function y(e, t, n) {
                return v([u, "click", e, t || "", n]),
                    this
            }

            function w(e, t, n) {
                return v([u, "pageview", e, t || "", n || ""]),
                    this
            }

            function b(e, t) {
                switch (e) {
                    case "click":
                        y.apply(this, t);
                        break;
                    case "pageview":
                        w.apply(this, t);
                        break;
                    case "event":
                        g.apply(this, t)
                }
            }

            function _(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                if (l)
                    try {
                        var n = localStorage.getItem(f);
                        try {
                            n = p(n)
                        } catch (e) {}
                        return "array" !== a.type(n) && (n = []),
                            n.push([e].concat(t)),
                            void localStorage.setItem(f, function(e) {
                                return "array" !== a.type(e) ? "" : a.map(e, function(e) {
                                    return a.map(e, function(e) {
                                        return encodeURIComponent(e)
                                    }).join(",")
                                }).join("|")
                            }(n))
                    } catch (e) {}
                b(e, t)
            }
            var x = {
                create: e,
                ptag: s.ptag,
                standard: function(t) {
                    return e(a.extend({
                        standard: !0
                    }, t))
                },
                click: function(e, t) {
                    var r = (e + "." + (t || "")).split(".");
                    return y(n, r[0], r[1])
                },
                event: function(e, t) {
                    var r = (e + "." + (t || "")).split(".");
                    return g(n, r[0], r[1])
                },
                pv: function(e, t, n) {
                    var r = (e + "." + (t || "") + "." + (n || "")).split(".");
                    w(r[0], r[1], r[2])
                },
                pagestat: function(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return t.unshift(u, e, n),
                        v(t),
                        this
                },
                stat: function() {
                    var e = Array.prototype.slice.call(arguments);
                    return e.unshift(u),
                        v(e),
                        this
                },
                setApp: function(e) {
                    return u = e,
                        f = e + "_lazy_reports",
                        setTimeout(function() {
                            x.flush()
                        }, 1e3),
                        this
                },
                setPage: function(e) {
                    return n = e,
                        this
                },
                setJQ: function(e) {
                    return r = e,
                        this
                },
                set: function(e) {
                    return a.objEach(e, function(e, t) {
                            switch (e) {
                                case "loaded":
                                    break;
                                case "source":
                                    m[e] = t
                            }
                        }),
                        this
                },
                bind2d: function(e, t, n, r, o) {
                    var i = h(),
                        a = this;
                    return i(e).on("click", "[" + n + "]", function(e) {
                            var c, u = e.currentTarget,
                                s = i(u),
                                l = s.attr(n),
                                f = s.attr(r),
                                d = [];
                            o && (d = (s.attr(o) || "").split(/\,\s*/));
                            for (var h = 10; h && u && !(c = i(u).attr(t));)
                                h--,
                                u = u.parentNode;
                            c && a.click.apply(a, [c, l, f].concat(d))
                        }),
                        this
                },
                bind: function(e, t) {
                    var r = h();
                    return r(e).on("click", "[" + t + "]", function(e) {
                            var o = e.currentTarget,
                                i = r(o),
                                a = (i.attr(t) + ".").split(".");
                            if ("A" == o.tagName) {
                                var c = i.attr("href"),
                                    u = i.attr("target"),
                                    s = (c || "").match(/^([a-zA-Z]+)\:/);
                                if (s = s ? s[1] : "", !/^(javascript:|#)/.test(c) && !u && (!s || /^https?$/.test(s)))
                                    return void _("click", n, a[0], a[1])
                            }
                            y(n, a[0], a[1])
                        }),
                        this
                },
                bindLazy: function(e, t) {
                    var r = h();
                    return r(e).on("click", "[" + t + "]", function(e) {
                            var o = e.currentTarget,
                                i = r(o).attr(t);
                            _("click", n, i, "")
                        }),
                        this
                },
                flush: function() {
                    if (localStorage)
                        try {
                            var e = localStorage.getItem(f);
                            localStorage.removeItem(f),
                                e && (e = p(e),
                                    a.forEach(e, function(e) {
                                        b(e[0], e.slice(1))
                                    }))
                        } catch (e) {}
                    return this
                },
                uuidGetter: function(e) {
                    return o = e,
                        this
                },
                referrerGetter: function(e) {
                    return i = e,
                        this
                },
                host: function(e) {
                    return s.host && s.host(e),
                        this
                }
            };

            function E() {}
            if (d) {
                var k = x.bind2d,
                    T = document.body,
                    P = "_module",
                    C = "_pos",
                    S = [];
                x.bind = function(e, t, n, r) {
                        return T = e || T,
                            P = t || P,
                            C = n || C,
                            k.call(x, T, P, C, r || "_detail", "_exts")
                    },
                    x.bind2d = x.bind;
                var L = {},
                    O = 0;
                a.extend(x, {
                    stat: E,
                    pagestat: E,
                    bindExpose: function(e, t, n, r) {
                        var o = h(),
                            i = e || T,
                            u = t || P,
                            s = n || C;
                        if (r = r || {}, !i.querySelectorAll)
                            return this;
                        var l = i.querySelectorAll("[" + s + "]");
                        return a.forEach(l, function(e) {
                                if (!e._binded_expose) {
                                    e._binded_expose = !0;
                                    var t = function(e, t) {
                                            for (var n = h(), r = 10; r && t && !n(t).attr(e);)
                                                r--,
                                                t = t.parentNode;
                                            return t
                                        }(P, e),
                                        n = O++;
                                    if (t) {
                                        var i = o(t),
                                            a = o(e),
                                            l = c(e, {
                                                inview: !!r.inview,
                                                once: !0,
                                                enter: !0,
                                                recalc: !0,
                                                offset: r.inview ? 20 : 0,
                                                horiz: t.hasAttribute && t.hasAttribute("_horiz"),
                                                listenHoriz: !0
                                            }, function() {
                                                var e = i.attr(u) || "",
                                                    t = a.attr(s) || "",
                                                    r = a.attr("_detail") || "",
                                                    o = (a.attr("_exts") || "").split(/\,\s*/);
                                                e && x.expose.apply(x, [e, t, r].concat(o)),
                                                    l && (delete L[n],
                                                        l())
                                            });
                                        L[n] = l
                                    }
                                }
                            }),
                            this
                    },
                    updateExpose: function() {
                        return c.message.emit("update"),
                            this
                    },
                    click: function(e, t, r) {
                        return arguments.length < 2 && (t = e,
                                e = ""),
                            v([u, "click", n, e, t, r].concat(this.getExts(3, arguments)).concat(S), {
                                standard: d
                            }),
                            this
                    },
                    event: function(e, t, r) {
                        return arguments.length < 2 && (t = e,
                                e = ""),
                            v([u, "event", n, e, t, r].concat(this.getExts(3, arguments)).concat(S), {
                                standard: d
                            }),
                            this
                    },
                    expose: function(e, t, r) {
                        return v([u, "expose", n, e, t, r].concat(this.getExts(3, arguments)).concat(S), {
                                standard: d
                            }),
                            this
                    },
                    pv: function(e, t, r, o) {
                        return v([u, "pageview", e || n, t, r, o].concat(this.getExts(4, arguments)).concat(S), {
                                standard: d
                            }),
                            this
                    },
                    exts: function() {
                        var e = [].slice.call(arguments, 0);
                        return S = e,
                            this
                    },
                    getExts: function(e, t) {
                        return (t = [].slice.call(t, 0)).slice(e).concat(new Array(4)).slice(0, 4)
                    }
                })
            }
            return x
        }()
}, function(e, t, n) {
    "use strict";
    var r, o = n(0),
        i = n(6),
        a = new i,
        c = n(21),
        u = !document.addEventListener,
        s = {},
        l = !1;

    function f(e, t) {
        l || (l = !0,
            g(window, "scroll", d),
            g(window, "resize", d));
        var n = {},
            r = arguments;
        "object" == o.type(t) && (n = t,
            t = r[2]);
        var u = y(n, "visible", !0),
            w = y(n, "enter", !1),
            b = y(n, "recalc", !1),
            x = y(n, "inview", !1),
            E = y(n, "horiz", !1),
            k = y(n, "absoluteCalc", !1),
            T = n.offsetTop || 0,
            P = c(e);
        if (o.some(P.parents, function(e) {
                return document.body === e
            }))
            return L(P.scrollParent);
        var C, S = setTimeout(function() {
            C = L(c(e).scrollParent)
        });
        return function() {
            clearTimeout(S),
                C && C()
        };

        function L(r) {
            var c, l, y, P, C, S = !r || r === document.body;
            if (S && !b)
                c = v(e);
            else if (!S && !b) {
                var L = r.getBoundingClientRect();
                l = L.height,
                    y = L.width,
                    P = L.left,
                    C = L.top
            }
            var O, M, j, R = !1,
                I = !1,
                A = function(o, i, a) {
                    if (!n.once || !I) {
                        var s;
                        if (S) {
                            if (!(c = b || !c.height ? v(e) : c).height)
                                return;
                            var f = c.top - T,
                                d = c.bottom;
                            n.offset && (f -= n.offset,
                                d += n.offset);
                            var h = !n.listenHoriz || c.left >= 0 && c.right <= a;
                            s = u ? (s = x ? f >= o && d <= o + i : f < o + i && d > o) && h : h && o + i > f
                        } else if (!S) {
                            var p = e.getBoundingClientRect();
                            if (!p.height || !p.width)
                                return;
                            if (k)
                                s = _(e, p);
                            else {
                                if (!l || !y || !C) {
                                    var m = r.getBoundingClientRect();
                                    l = m.height,
                                        y = m.width,
                                        C = m.top,
                                        P = m.left
                                }
                                var g = p.height,
                                    L = p.width,
                                    O = (f = p.top - C,
                                        p.left - P),
                                    M = (d = p.bottom - C,
                                        p.right - P),
                                    j = n.offset;
                                n.offset && (f += j,
                                        O += j,
                                        d -= j,
                                        M -= j),
                                    s = u ? x ? E ? O >= 0 && M <= y : f >= 0 && d <= l : E ? O > -L && O < y : f > -g && f < l : f < l && O < y
                            }
                        }
                        var A = R;
                        A && !s && "function" == typeof n.out && n.out(),
                            s ? (R = !0, (w && !A || !w) && (I = !0,
                                t && t())) : R = !1
                    }
                };
            if (S)
                O = a.on("scroll", A),
                d();
            else {
                var N, D = !1,
                    $ = function() {
                        N || (N = !0,
                            setTimeout(function() {
                                N = !1,
                                    D && A(h(), p(), m())
                            }, s.throttle ? s.throttle : 100))
                    };
                if (O = a.on("scroll", $),
                    r._onviewDelegator)
                    D = r._onviewDelegator.visible(),
                    j = r._onviewDelegator.message.on("visible", function(e) {
                        D = e,
                            e && $()
                    }),
                    $();
                else {
                    var q = new i;
                    r._onviewDelegator = {
                            message: q,
                            visible: function() {
                                return D
                            }
                        },
                        j = f(r, o.extend({}, n, {
                            inview: !0,
                            enter: !0,
                            offset: 0,
                            listenHoriz: !1,
                            out: function() {
                                q.emit("visible", !1),
                                    D = !1
                            }
                        }), function() {
                            D = !0,
                                q.emit("visible", !0),
                                $()
                        })
                }
                M = g(r, "scroll", $),
                    $()
            }
            return function() {
                O && O(),
                    M && M(),
                    j && j(),
                    O = M = j = null
            }
        }
    }

    function d() {
        if (s.throttle) {
            if (r)
                return;
            r = !0,
                setTimeout(function() {
                    r = !1,
                        a.emit("scroll", h(), p(), m())
                }, s.throttle)
        } else
            a.emit("scroll", h(), p(), m())
    }

    function h() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }

    function p() {
        return "BackCompat" == document.compatMode ? document.body.clientHeight : document.documentElement.clientHeight
    }

    function m() {
        return "BackCompat" == document.compatMode ? document.body.clientWidth : document.documentElement.clientWidth
    }

    function v(e) {
        var t = e.getBoundingClientRect();
        return {
            top: t.top + h(),
            left: t.left,
            right: t.right,
            bottom: t.bottom + h(),
            height: t.bottom - t.top
        }
    }

    function g(e, t, n) {
        return u ? e.attachEvent("on" + t, n) : e.addEventListener(t, n),
            function() {
                ! function(e, t, n) {
                    u ? e.detachEvent("on" + t, n) : e.removeEventListener(t, n)
                }(e, t, n)
            }
    }

    function y(e, t, n) {
        return e.hasOwnProperty(t) ? !!e[t] : n
    }
    f.set = function(e, t) {
            return s[e] = t,
                f
        },
        f.message = a,
        a.on("update", d),
        e.exports = f;
    var w = window.innerWidth,
        b = window.innerHeight;

    function _(e, t, n) {
        n = Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, n);
        t = t || e.getBoundingClientRect();
        var r = e.cacheOffsetWidth = e.cacheOffsetWidth || e.offsetWidth,
            o = e.cacheOffsetHeight = e.cacheOffsetHeight || e.offsetHeight,
            i = !(t.right - n.left <= 0 && t.left + r - n.left <= 0 || t.left + n.right >= w && t.right + n.right >= r + w),
            a = !(t.bottom - n.top <= 0 && t.top + o - n.top <= 0 || t.top + n.bottom >= b && t.bottom + n.bottom >= o + b);
        return 0 !== e.width && 0 !== e.height && i && a
    }
}, function(e, t, n) {
    "use strict";
    var r = n(0);

    function o(e) {
        if (!e)
            return "";
        var t;
        if (window.getComputedStyle)
            try {
                t = window.getComputedStyle(e)
            } catch (e) {} else
            e.currentStyle && (t = e.currentStyle);
        return t ? function(e) {
            var t = "";
            return r.some(["-y", "-x", ""], function(n) {
                    var r = "overflow" + n,
                        o = "hidden" !== e[r] ? e[r] : "";
                    if (o)
                        return t = o, !0
                }),
                t
        }(t) : ""
    }

    function i(e) {
        return (!e.hasAttribute || !e.hasAttribute("_scroll_skip")) && (/(auto|scroll)/.test(o(e)) || e.hasAttribute && e.hasAttribute("_scroll_view"))
    }
    e.exports = function(e) {
        for (var t = function e(t, n) {
                n = n || [];
                var r = t.parentNode;
                return r ? (n.push(r),
                    r === document.body ? n : e(r, n)) : n
            }(e), n = document.body, r = 0; r < t.length; r++) {
            var o = t[r];
            if (o === document.body || i(o)) {
                n = o;
                break
            }
        }
        return {
            parents: t,
            scrollParent: n
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(23);

    function o(e, t, n, o, i) {
        var a = function(e, t, n, o) {
                return function(n) {
                    n.delegateTarget = r(n.target, t),
                        n.delegateTarget && o.call(e, n)
                }
            }
            .apply(this, arguments);
        return e.addEventListener(n, a, i), {
            destroy: function() {
                e.removeEventListener(n, a, i)
            }
        }
    }
    e.exports = function(e, t, n, r, i) {
        return "function" == typeof e.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)),
            Array.prototype.map.call(e, function(e) {
                return o(e, t, n, r, i)
            }))
    }
}, function(e, t, n) {
    "use strict";
    var r = 9;
    if ("undefined" != typeof Element && !Element.prototype.matches) {
        var o = Element.prototype;
        o.matches = o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector
    }
    e.exports = function(e, t) {
        for (; e && e.nodeType !== r;) {
            if ("function" == typeof e.matches && e.matches(t))
                return e;
            e = e.parentNode
        }
    }
}, function(e, t, n) {
    "use strict";
    var r, o = n(7)(),
        i = n(25),
        a = n(8),
        c = n(27),
        u = n(30),
        s = n(0),
        l = n(6),
        f = n(31),
        d = new l,
        h = function() {},
        p = h,
        m = h,
        v = "//btrace.video.qq.com";
    try {
        r = window.jQuery || window.Zepto || window.tvp && window.tvp.$
    } catch (e) {}
    r && r(document.body).on("click", "[_boss]", function(e) {
        C(r(e.currentTarget).attr("_boss"))
    });
    var g, y, w, b = window.sessionStorage || {
            getItem: function() {
                return ""
            }
        },
        _ = i.get("ptag") || b.getItem("ptag") || a.get("ptag"),
        x = i.get("openid"),
        E = "/kvcollect?BossId=3255&Pwd=2118551257&s_ua=" + navigator.userAgent + "&s_browser=" + o.browser.name,
        k = "/kvcollect?BossId=5982&Pwd=1952884855&s_ua=" + navigator.userAgent;

    function T(e) {
        var t = document.referrer || e.referrer || "",
            n = x || a.get("openid"),
            r = a.get("o_cookie") || a.get("uin") || a.get("luin"),
            o = a.get("appid"),
            i = a.get("main_login");
        return v + (e.standard ? k : E) + "&s_uuid=" + (p() || P()) + (t ? "&s_referrer=" + encodeURIComponent(t) : "") + (n ? "&s_openid=" + n : "") + (r ? "&s_uin=" + r : "") + (o ? "&s_appid=" + o : "") + (i ? "&s_mainlogin=" + i : "") + "&s_url=" + encodeURIComponent(location.href.split("?")[0])
    }

    function P() {
        if (g)
            return g;
        var e = a.get("tvfe_boss_uuid");
        if (!e) {
            e = function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return [e(), e(), e(), e()].join("")
            }();
            try {
                a.set("tvfe_boss_uuid", e, "qq.com", !1, 87600)
            } catch (t) {
                a.set("tvfe_boss_uuid", e, "", !1, 87600)
            }
        }
        return g = e,
            e
    }

    function C(e, t) {
        var n = (t = t || {}).loaded,
            r = "number" == s.type(n) ? n : 500;
        "string" == s.type(e) ? ((e = e.replace(/\.$/, "").split(".")).length < 3 || e.length > 5) && console.warn("按钮名分段数不对，可能会导致数据丢失") : "array" != s.type(e) && (e = []);
        var i = "";
        if (t.standard) {
            i = T({
                standard: !0,
                referrer: m()
            });
            s.forEach(["s_app", "s_behave", "s_page", "s_module", "s_pos", "s_detail", "s_psdesc", "s_ext2", "s_ext3", "s_ext4", "s_pgdetail", "s_value2", "s_value3", "s_value4"], function(t, n) {
                var r = e[n];
                null != r && "" !== r && t && (i += "&" + t + "=" + encodeURIComponent(r))
            })
        } else {
            var a = t.source || "";
            if ("function" == s.type(a))
                try {
                    a = a()
                } catch (e) {}
            i = T({
                    referrer: m()
                }),
                i += "&s_app=" + encodeURIComponent(e[0] || "") + "&s_module=" + encodeURIComponent(e[1] || "") + "&s_behave=" + encodeURIComponent(e[2] || "") + "&s_sub=" + encodeURIComponent(e[3] || "") + "&s_fifth=" + encodeURIComponent(e[4] || "") + (a ? "&s_source=" + encodeURIComponent(a) : "")
        }
        i += _ ? "&s_ptag=" + encodeURIComponent(_) : "",
            i += "&_dc=" + Math.ceil(1e7 * Math.random());
        var l = function() {
            if (t && t.lazy)
                u.push(i);
            else if (n) {
                var e = s.once(function() {
                    c(i)
                });
                ! function(e) {
                    if (y)
                        e();
                    else if (w)
                        var t = d.on("ready", function() {
                            t(),
                                e()
                        });
                    else {
                        var n = s.once(function() {
                            w = !1,
                                y = !0;
                            try {
                                e()
                            } finally {
                                d.emit("ready")
                            }
                        });
                        window.addEventListener ? window.addEventListener("load", n) : window.attachEvent ? window.attachEvent("onload", n) : n(),
                            setTimeout(n, 5e3)
                    }
                }(e),
                setTimeout(e, r)
            } else
                c(i)
        };
        t.standard ? (o.os.iphone && (i += "&s_platform=5"),
            o.os.android && (i += "&s_platform=3"),
            f(function(e) {
                var t = e.bucketId;
                t && (i += "&plat_bucketid=" + t);
                var n = e.omgid;
                n && (i += "&s_omgid=" + n);
                var r = e.idfa;
                r && (i += "&s_idfa=" + r);
                var o = e.imei;
                o && (i += "&s_imei=" + o),
                    l()
            })) : l()
    }
    e.exports = {
        uuid: function() {
            return P()
        },
        uuidGetter: function(e) {
            p = e || h
        },
        referrerGetter: function(e) {
            m = e || h
        },
        ptag: function(e) {
            _ = e
        },
        host: function(e) {
            v = e
        },
        hot: C,
        uid: P
    }
}, function(e, t, n) {
    "use strict";
    var r = n(26);
    e.exports = {
        get: function(e, t) {
            var n = new RegExp("(\\?|#|&)" + e + "=([^&#]*)(&|#|$)"),
                o = (t = t || location.href).match(n);
            return o ? r(o[2]) : ""
        },
        del: function(e) {
            var t = new RegExp("(\\?|#|&)" + e + "=([^&#]*)(&|#|$)"),
                n = location.href.match(t);
            n = n ? n[2] : "";
            try {
                window.history && history.replaceState && history.replaceState(null, null, location.href.replace(e + "=" + n, ""))
            } catch (e) {}
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = {
            "<": "&#60;",
            ">": "&#62;",
            '"': "&#34;",
            "'": "&#39;",
            "&": "&#38;"
        },
        o = function(e) {
            return r[e]
        };
    e.exports = function(e) {
        return ("" + e).replace(/&(?![\w#]+;)|[<>"']/g, o)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(28),
        o = /\.qq\.com$/.test(document.domain);
    (r.isAndroid() || r.isIOS()) && o ? e.exports = n(29) : e.exports = n(9)
}, function(e, t, n) {
    "use strict";
    var r = navigator.userAgent,
        o = r.toLowerCase();
    e.exports = {
        isIE: function() {
            return /; msie\b|; trident\b|\bedge\//.test(o)
        },
        isWX: function() {
            return /micromessenger/.test(o)
        },
        isQQ: function() {
            return /\bqq\b/.test(o)
        },
        isQQBrowser: function() {
            return /mqqbrowser/.test(o)
        },
        isQQLive: function() {
            return /qqlive/.test(o)
        },
        isQQLiveBroadcast: function() {
            return /qqlivebroadcast/.test(o)
        },
        isMobile: function() {
            return !!(r.match(/Android/i) || r.match(/android/i) || r.match(/iPhone/i) || r.match(/iPod/i) || r.match(/webOS/i) || r.match(/BlackBerry/i) || r.match(/BB/i) || r.match(/Windows Phone/i) || r.match(/iPad.*MicroMessenger/i) || r.match(/IEMobile/i))
        },
        isIOS: function() {
            return /iPad|iPhone|iPod/.test(r) && !window.MSStream
        },
        isMac: function() {
            return /\bmac\b/.test(o)
        },
        isPC: function() {
            return /Win/.test(r)
        },
        isAndroid: function() {
            return /android/.test(o)
        },
        isChrome: function() {
            return /Chrome\//.test(r)
        },
        wxVer: function() {
            var e = o.match(/micromessenger\/([\d\.]+)/);
            return e ? e[1] : ""
        },
        androidVer: function() {
            var e = o.match(/android\s([0-9\.]*)/);
            return e ? e[1] : ""
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = new XMLHttpRequest;
        t.open("GET", e, !0),
            t.withCredentials = !0,
            t.send()
    }
}, function(module, exports, __webpack_require__) {
    "use strict";
    var cookie = __webpack_require__(8),
        report = __webpack_require__(9),
        storage = function() {
            var e = !1;
            try {
                window.localStorage && (e = !0)
            } catch (e) {}
            var t = location.hostname || location.host;
            return e ? {
                get: function(e) {
                    return localStorage.getItem(e)
                },
                set: function(e, t) {
                    return localStorage.setItem(e, t)
                },
                clear: function(e) {
                    return localStorage.removeItem(e)
                }
            } : {
                get: function(e) {
                    return cookie.get(e)
                },
                set: function(e, n) {
                    return cookie.set(e, n, t)
                },
                clear: function(e) {
                    return cookie.set(e, "", t)
                }
            }
        }(),
        reg = /^(?:ht|f)tp(?:s)?\:\/\/(?:[\w\-\.]+)\.\w+/i,
        k = "txv_lazyreport_list",
        d = "|",
        clear = function() {
            return storage.clear(k)
        },
        shift = function() {
            var e = storage.get(k);
            if (!e)
                return "";
            var t = e.split(d),
                n = t.shift();
            return storage.set(k, t.join(d)),
                n ? decodeURIComponent(n) : ""
        },
        push = function(e) {
            if (e) {
                var t = storage.get(k),
                    n = [];
                t && (n = t.split(d)),
                    n.push(encodeURIComponent(e)),
                    storage.set(k, n.join(d))
            }
        },
        reportItem = function reportItem(item) {
            if (reg.test(item))
                try {
                    report && report(item)
                } catch (e) {} else
                setTimeout(function() {
                    try {
                        eval(item)
                    } catch (e) {}
                }, 0)
        },
        _report = function() {
            for (var e = shift(); e;)
                reportItem(e),
                e = shift()
        };
    module.exports = {
        push: push,
        clear: clear,
        report: _report
    }
}, function(e, t, n) {
    "use strict";
    var r = n(7)();
    var o = "",
        i = "",
        a = "",
        c = "",
        u = "",
        s = !1,
        l = !1,
        f = !1,
        d = [];
    s = l = !r.browser.QQvideo,
        e.exports = function(e) {
            if (s && l)
                e({
                    omgid: o,
                    guid: i,
                    idfa: a,
                    imei: c,
                    bucketId: u
                });
            else if (d.push(e), !f) {
                f = !0;
                var t = !1,
                    n = function() {
                        if (!t && s && l) {
                            t = !0;
                            var e = d;
                            d = [];
                            for (var n = {
                                    omgid: o,
                                    guid: i,
                                    idfa: a,
                                    imei: c,
                                    bucketId: u
                                }, r = 0, f = e.length; r < f; r++)
                                setTimeout(e[r], 0, n)
                        }
                    };
                setTimeout(function() {
                        s = l = !0,
                            n()
                    }, 3e3),
                    function(e) {
                        window.TenvideoJSBridge ? e(TenvideoJSBridge) : document.addEventListener("onTenvideoJSBridgeReady", function() {
                            e(TenvideoJSBridge)
                        }, !1)
                    }(function(e) {
                        e.invoke("getDeviceInfo", null, function(e) {
                                var t;
                                s = !0;
                                try {
                                    t = JSON.parse(e).result
                                } catch (e) {}
                                t || (t = {}),
                                    o = t.omgid,
                                    a = t.idfa,
                                    c = t.imei,
                                    i = t.guid,
                                    n()
                            }),
                            e.invoke("getAppInfo", null, function(e) {
                                var t;
                                l = !0;
                                try {
                                    t = JSON.parse(e).result
                                } catch (e) {}
                                t || (t = {}),
                                    u = t.bucketId,
                                    n()
                            })
                    })
            }
        }
}, function(e, t, n) {
    "use strict";
    var r = "undefined" == typeof window ? "" : ("https:" == window.location.protocol ? "wss:" : "ws:") + "//" + window.location.host + "/x/channel/ws/connect";
    e.exports = {
        title: "视频流",
        singleton: !0,
        clientCache: !1,
        clientCacheTime: 12e4,
        wsUrl: r,
        routeTemplate: '"x/channel/" + name + "/" + channelTag + "?pageContext=&refreshContext=&request=hot_videoline"'
    }
}, function(e, t, n) {
    "use strict";
    var r, o = n(5),
        i = (r = o) && r.__esModule ? r : {
            default: r
        },
        a = n(1),
        c = n(2);
    var u = n(3).lazyLoad,
        s = n(10).throttle,
        l = Object.create(null),
        f = Object.create(null),
        d = void 0,
        h = void 0,
        p = void 0,
        m = void 0,
        v = void 0,
        g = void 0;

    function y() {
        u(h[0])
    }
    e.exports = {
        created: function(e) {
            this.status.createdTime = (new Date).getTime()
        },
        ready: function(e) {
            m = $("#feeds_player .player_error"),
                h = $("#container-video"),
                p = $("#container_error");
            var t = (0,
                a.getPageContext)(h.html());
            this.resetUI(),
                this.setResultUI(t, !0),
                this.status.isRouteInited ? (Glama.router.replace(location.pathname, {
                        channelTag: t.params.channelTag
                    }),
                    g = t.params.channelTag) : c.report.page({
                    time_response: (new Date).getTime() - this.status.createdTime,
                    time_domready: 15 + Math.ceil(10 * Math.random())
                }),
                this.loadMoreEvent = this.loadMoreEvent.bind(this),
                this.initLoadMore(),
                $("#container_error .error_btn").on("click", this.reloadPage.bind(this)),
                window.addEventListener("scroll", s(u, 50, 100).bind(null, h[0])),
                window.addEventListener("touchmove", s(u, 50, 100).bind(null, h[0])),
                h.on("click", ".item_poster,.mod_replay", function(e) {
                    var t = $(e.currentTarget).closest(".feeds_video"),
                        n = t.attr("data-vid");
                    n && ($("#feeds_player").css("top", $(".item_poster", t).offset().top).removeClass("hide"),
                        v && (v.play(n),
                            c.boss.click("click_video_play")))
                })
        },
        hide: function() {
            this.stopPlayer(),
                h.html(""),
                window.removeEventListener("scroll", this.loadMoreEvent),
                window.removeEventListener("touchmove", this.loadMoreEvent)
        },
        show: function(e) {
            var t = e.routeParams && e.routeParams.channelTag || g;
            c.boss.setPage(t || "index"),
                c.boss.expose(t || "index"),
                h && t && t && this.pageChange(t)
        },
        methods: {
            pageChange: function(e) {
                var t = this;
                if (t.initLoadMore(),
                    t.stopPlayer(),
                    t.resetUI(),
                    e && l[e]) {
                    var n = l[e];
                    if (n.html) {
                        d = n;
                        var r = (new Date).getTime();
                        return h.html(d.html),
                            y(),
                            void c.report.page({
                                time_response: 0,
                                time_domready: (new Date).getTime() - r
                            })
                    }
                }
                var o = (new Date).getTime(),
                    i = void 0,
                    a = void 0,
                    u = void 0;
                h.html(""),
                    t.getPagelet(e, "", "").then(function(e) {
                        a = i = (new Date).getTime(),
                            t.setResultUI(e, !1),
                            e.html && !e.params.status && (u = (new Date).getTime(),
                                c.report.page({
                                    time_response: i - o,
                                    time_domready: u - a
                                }))
                    })
            },
            getPagelet: function(e, t, n) {
                var r = encodeURIComponent(t),
                    o = encodeURIComponent(n);
                return this.pagelet.get("x/channel/video/" + e, {
                    pageContext: r,
                    refreshContext: o,
                    request: "hot_videoline"
                }, void 0, {
                    name: "video",
                    channelTag: e
                }, this.conf.wsUrl).then(function(e) {
                    if (e && e.html)
                        return (0,
                            a.getPageContext)(e.html);
                    throw e
                }).catch(function(t) {
                    return (0,
                            c.reportError)(location.protocol + "//" + location.host + "/x/channel/video/" + e + "?pagelet=1&pageContext=" + r + "&refreshContext=" + o + "&request=channel_data", JSON.stringify(t)),
                        console.error(t), {
                            html: "",
                            params: {
                                channelTag: e
                            }
                        }
                })
            },
            initLoadMore: function() {
                window.removeEventListener("scroll", this.loadMoreEvent),
                    window.removeEventListener("touchmove", this.loadMoreEvent),
                    window.addEventListener("scroll", this.loadMoreEvent),
                    window.addEventListener("touchmove", this.loadMoreEvent)
            },
            loadMoreEvent: function() {
                (0,
                    a.canLoadMore)() && this.loadMore()
            },
            loadMore: function() {
                var e = this;
                window.removeEventListener("scroll", e.loadMoreEvent),
                    window.removeEventListener("touchmove", e.loadMoreEvent),
                    e.getPagelet(d.channelTag, d.data.pageContext, d.data.refreshContext).then(function(e) {
                        if (!e.html || e.params.errCode || !e.params.hasNextPage)
                            return d.data.hasNextPage = !1,
                                void $("#container_loading").addClass("hide");
                        d.data.pageContext = e.params.pageContext,
                            d.data.refreshContext = e.params.refreshContext,
                            d.data.hasNextPage = e.params.hasNextPage,
                            h.append(e.html),
                            d.html = h.html(),
                            y()
                    }).finally(function() {
                        d.data.hasNextPage && (window.addEventListener("scroll", e.loadMoreEvent),
                            window.addEventListener("touchmove", e.loadMoreEvent))
                    })
            },
            createVideo: function(e) {
                var t = e.attr("data-vid");
                t && !v && ((v = new Txplayer({
                        containerId: "playerVideo",
                        vid: t,
                        autoplay: !1,
                        width: "100%",
                        height: $(".item_poster", e).height(),
                        playerType: "html5hd"
                    })).on("playStateChange", function(t) {
                        switch (t) {
                            case 0:
                                $(".poster_play", e).addClass("hide"),
                                    $(".item_recommend", e).removeClass("hide"),
                                    that.stopPlayer()
                        }
                    }),
                    v.on("timeupdate", function() {
                        var e = v.getDuration(),
                            t = v.getCurrentTime();
                        e - t < 1 && (t = 0);
                        var n = v.getVid();
                        n && (f[n.toString()] = t)
                    }),
                    v.on("vidChange", function(e) {
                        var t = f[e];
                        t > 1 && v.seekTo(t)
                    }),
                    v.on("error", function(e) {
                        m.html(e.code + ": " + e.msg),
                            m.removeClass("hide")
                    }))
            },
            registerChannelCache: function(e) {
                (d = new i.default(e.params.channelTag, {
                    pageContext: e.params.pageContext,
                    refreshContext: e.params.refreshContext,
                    hasNextPage: e.params.refreshContext
                }, e.html)).channelTag && (l[d.channelTag] = d)
            },
            setResultUI: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.registerChannelCache(e), !e.html || e.params.errCode)
                    $("#container_loading").addClass("hide"),
                    $(".error_code span", p).text(e.params.errCode || "-999"),
                    $(".error_msg span", p).text(e.params.errMsg || "接口异常"),
                    p.removeClass("hide"),
                    $(".error_btn", p).on("click", this.reloadPage.bind(this));
                else {
                    if (t || h.html(e.html),
                        y(), !v) {
                        var n = h.children(".feeds_video")[0];
                        this.createVideo($(n))
                    }
                    $(window).height() > h.height() + 93 && this.loadMore()
                }
            },
            resetUI: function() {
                window.scrollTo(0, 0),
                    $("#container_loading").removeClass("hide"),
                    p.addClass("hide"),
                    $(".error_btn", p).off("click")
            },
            stopPlayer: function() {
                $("#feeds_player").addClass("hide"),
                    v && v.pause && v.pause()
            },
            reloadPage: function() {
                this.pageChange(d.channelTag)
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(35);
    n(36),
        n(41),
        n(3),
        n(42),
        n(2);
    var o = n(1);
    (0,
        r.polyfill)();
    var i = (0,
        o.getCookieNode)("guid", window.responseCookie);
    (0,
        o.getCookie)("guid") || (0,
        o.setCookie)("guid", i, 36500),
    t.default = function() {
        var e = new Glama({
            ws: !0,
            home: "select",
            routes: ["/", "/x/channel/:name/:channelTag"],
            onPageError: function(e, t) {
                console.warn("onPageError", e, t)
            }
        });
        e.lifecycle.onAllEvent(function(e, t) {}),
            e.boot(),
            window.addEventListener && window.addEventListener("load", function() {
                var e = ("https:" == window.location.protocol ? "wss:" : "ws:") + "//" + window.location.host + "/x/channel/ws/connect";
                Glama.ws.connect(e)
            })
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (null == e)
            throw new TypeError("Cannot convert first argument to object");
        for (var n = Object(e), r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (null != o)
                for (var i = Object.keys(Object(o)), a = 0, c = i.length; a < c; a++) {
                    var u = i[a],
                        s = Object.getOwnPropertyDescriptor(o, u);
                    void 0 !== s && s.enumerable && (n[u] = o[u])
                }
        }
        return n
    }
    e.exports = {
        assign: r,
        polyfill: function() {
            Object.assign || Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: r
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var t = o(n(37)),
            r = o(n(11));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = function() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if (void 0 !== e)
                return e;
            throw new Error("unable to locate global object")
        }();
        "Promise" in i ? i.Promise.prototype.finally || (i.Promise.prototype.finally = r.default) : i.Promise = t.default
    }).call(this, n(4))
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = n(11),
            a = (r = i) && r.__esModule ? r : {
                default: r
            };
        var c = setTimeout;

        function u() {}

        function s(e) {
            if (!(this instanceof s))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e)
                throw new TypeError("not a function");
            this._state = 0,
                this._handled = !1,
                this._value = void 0,
                this._deferreds = [],
                m(e, this)
        }

        function l(e, t) {
            for (; 3 === e._state;)
                e = e._value;
            0 !== e._state ? (e._handled = !0,
                s._immediateFn(function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null !== n) {
                        var r;
                        try {
                            r = n(e._value)
                        } catch (e) {
                            return void d(t.promise, e)
                        }
                        f(t.promise, r)
                    } else
                        (1 === e._state ? f : d)(t.promise, e._value)
                })) : e._deferreds.push(t)
        }

        function f(e, t) {
            try {
                if (t === e)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" === (void 0 === t ? "undefined" : o(t)) || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof s)
                        return e._state = 3,
                            e._value = t,
                            void h(e);
                    if ("function" == typeof n)
                        return void m((r = n,
                            i = t,
                            function() {
                                r.apply(i, arguments)
                            }
                        ), e)
                }
                e._state = 1,
                    e._value = t,
                    h(e)
            } catch (t) {
                d(e, t)
            }
            var r, i
        }

        function d(e, t) {
            e._state = 2,
                e._value = t,
                h(e)
        }

        function h(e) {
            2 === e._state && 0 === e._deferreds.length && s._immediateFn(function() {
                e._handled || s._unhandledRejectionFn(e._value)
            });
            for (var t = 0, n = e._deferreds.length; t < n; t++)
                l(e, e._deferreds[t]);
            e._deferreds = null
        }

        function p(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
        }

        function m(e, t) {
            var n = !1;
            try {
                e(function(e) {
                    n || (n = !0,
                        f(t, e))
                }, function(e) {
                    n || (n = !0,
                        d(t, e))
                })
            } catch (e) {
                if (n)
                    return;
                n = !0,
                    d(t, e)
            }
        }
        s.prototype.catch = function(e) {
                return this.then(null, e)
            },
            s.prototype.then = function(e, t) {
                var n = new this.constructor(u);
                return l(this, new p(e, t, n)),
                    n
            },
            s.prototype.finally = a.default,
            s.all = function(e) {
                return new s(function(t, n) {
                    if (!e || void 0 === e.length)
                        throw new TypeError("Promise.all accepts an array");
                    var r = Array.prototype.slice.call(e);
                    if (0 === r.length)
                        return t([]);
                    var i = r.length;

                    function a(e, c) {
                        try {
                            if (c && ("object" === (void 0 === c ? "undefined" : o(c)) || "function" == typeof c)) {
                                var u = c.then;
                                if ("function" == typeof u)
                                    return void u.call(c, function(t) {
                                        a(e, t)
                                    }, n)
                            }
                            r[e] = c,
                                0 == --i && t(r)
                        } catch (e) {
                            n(e)
                        }
                    }
                    for (var c = 0; c < r.length; c++)
                        a(c, r[c])
                })
            },
            s.resolve = function(e) {
                return e && "object" === (void 0 === e ? "undefined" : o(e)) && e.constructor === s ? e : new s(function(t) {
                    t(e)
                })
            },
            s.reject = function(e) {
                return new s(function(t, n) {
                    n(e)
                })
            },
            s.race = function(e) {
                return new s(function(t, n) {
                    for (var r = 0, o = e.length; r < o; r++)
                        e[r].then(t, n)
                })
            },
            s._immediateFn = "function" == typeof e && function(t) {
                e(t)
            } || function(e) {
                c(e, 0)
            },
            s._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            },
            t.default = s
    }).call(this, n(38).setImmediate)
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var r = void 0 !== e && e || "undefined" != typeof self && self || window,
            o = Function.prototype.apply;

        function i(e, t) {
            this._id = e,
                this._clearFn = t
        }
        t.setTimeout = function() {
                return new i(o.call(setTimeout, r, arguments), clearTimeout)
            },
            t.setInterval = function() {
                return new i(o.call(setInterval, r, arguments), clearInterval)
            },
            t.clearTimeout = t.clearInterval = function(e) {
                e && e.close()
            },
            i.prototype.unref = i.prototype.ref = function() {},
            i.prototype.close = function() {
                this._clearFn.call(r, this._id)
            },
            t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId),
                    e._idleTimeout = t
            },
            t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId),
                    e._idleTimeout = -1
            },
            t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout()
                }, t))
            },
            n(39),
            t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || void 0,
            t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || void 0
    }).call(this, n(4))
}, function(e, t, n) {
    "use strict";
    (function(e, t) {
        ! function(e, n) {
            if (!e.setImmediate) {
                var r, o, i, a, c, u = 1,
                    s = {},
                    l = !1,
                    f = e.document,
                    d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                d = d && d.setTimeout ? d : e,
                    "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                        t.nextTick(function() {
                            p(e)
                        })
                    } : ! function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0,
                                n = e.onmessage;
                            return e.onmessage = function() {
                                    t = !1
                                },
                                e.postMessage("", "*"),
                                e.onmessage = n,
                                t
                        }
                    }() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function(e) {
                            p(e.data)
                        },
                        r = function(e) {
                            i.port2.postMessage(e)
                        }
                    ) : f && "onreadystatechange" in f.createElement("script") ? (o = f.documentElement,
                        r = function(e) {
                            var t = f.createElement("script");
                            t.onreadystatechange = function() {
                                    p(e),
                                        t.onreadystatechange = null,
                                        o.removeChild(t),
                                        t = null
                                },
                                o.appendChild(t)
                        }
                    ) : r = function(e) {
                        setTimeout(p, 0, e)
                    } : (a = "setImmediate$" + Math.random() + "$",
                        c = function(t) {
                            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && p(+t.data.slice(a.length))
                        },
                        e.addEventListener ? e.addEventListener("message", c, !1) : e.attachEvent("onmessage", c),
                        r = function(t) {
                            e.postMessage(a + t, "*")
                        }
                    ),
                    d.setImmediate = function(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                            t[n] = arguments[n + 1];
                        var o = {
                            callback: e,
                            args: t
                        };
                        return s[u] = o,
                            r(u),
                            u++
                    },
                    d.clearImmediate = h
            }

            function h(e) {
                delete s[e]
            }

            function p(e) {
                if (l)
                    setTimeout(p, 0, e);
                else {
                    var t = s[e];
                    if (t) {
                        l = !0;
                        try {
                            ! function(e) {
                                var t = e.callback,
                                    r = e.args;
                                switch (r.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(r[0]);
                                        break;
                                    case 2:
                                        t(r[0], r[1]);
                                        break;
                                    case 3:
                                        t(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        t.apply(n, r)
                                }
                            }(t)
                        } finally {
                            h(e),
                                l = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? void 0 : e : self)
    }).call(this, n(4), n(40))
}, function(e, t, n) {
    "use strict";
    var r, o, i = e.exports = {};

    function a() {
        throw new Error("setTimeout has not been defined")
    }

    function c() {
        throw new Error("clearTimeout has not been defined")
    }

    function u(e) {
        if (r === setTimeout)
            return setTimeout(e, 0);
        if ((r === a || !r) && setTimeout)
            return r = setTimeout,
                setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    }! function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
            r = a
        }
        try {
            o = "function" == typeof clearTimeout ? clearTimeout : c
        } catch (e) {
            o = c
        }
    }();
    var s, l = [],
        f = !1,
        d = -1;

    function h() {
        f && s && (f = !1,
            s.length ? l = s.concat(l) : d = -1,
            l.length && p())
    }

    function p() {
        if (!f) {
            var e = u(h);
            f = !0;
            for (var t = l.length; t;) {
                for (s = l,
                    l = []; ++d < t;)
                    s && s[d].run();
                d = -1,
                    t = l.length
            }
            s = null,
                f = !1,
                function(e) {
                    if (o === clearTimeout)
                        return clearTimeout(e);
                    if ((o === c || !o) && clearTimeout)
                        return o = clearTimeout,
                            clearTimeout(e);
                    try {
                        o(e)
                    } catch (t) {
                        try {
                            return o.call(null, e)
                        } catch (t) {
                            return o.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function m(e, t) {
        this.fun = e,
            this.array = t
    }

    function v() {}
    i.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            l.push(new m(e, t)),
                1 !== l.length || f || u(p)
        },
        m.prototype.run = function() {
            this.fun.apply(null, this.array)
        },
        i.title = "browser",
        i.browser = !0,
        i.env = {},
        i.argv = [],
        i.version = "",
        i.versions = {},
        i.on = v,
        i.addListener = v,
        i.once = v,
        i.off = v,
        i.removeListener = v,
        i.removeAllListeners = v,
        i.emit = v,
        i.prependListener = v,
        i.prependOnceListener = v,
        i.listeners = function(e) {
            return []
        },
        i.binding = function(e) {
            throw new Error("process.binding is not supported")
        },
        i.cwd = function() {
            return "/"
        },
        i.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        },
        i.umask = function() {
            return 0
        }
}, function(e, t, n) {
    "use strict";
    var r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function() {
        /**
         * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
         *
         * @codingstandard ftlabs-jsv2
         * @copyright The Financial Times Limited [All Rights Reserved]
         * @license MIT License (see LICENSE.txt)
         */
        function i(e, t) {
            var n;
            if (t = t || {},
                this.trackingClick = !1,
                this.trackingClickStart = 0,
                this.targetElement = null,
                this.touchStartX = 0,
                this.touchStartY = 0,
                this.lastTouchIdentifier = 0,
                this.touchBoundary = t.touchBoundary || 10,
                this.layer = e,
                this.tapDelay = t.tapDelay || 200,
                this.tapTimeout = t.tapTimeout || 700, !i.notNeeded(e)) {
                for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], o = 0, a = r.length; o < a; o++)
                    this[r[o]] = u(this[r[o]], this);
                c && (e.addEventListener("mouseover", this.onMouse, !0),
                        e.addEventListener("mousedown", this.onMouse, !0),
                        e.addEventListener("mouseup", this.onMouse, !0)),
                    e.addEventListener("click", this.onClick, !0),
                    e.addEventListener("touchstart", this.onTouchStart, !1),
                    e.addEventListener("touchmove", this.onTouchMove, !1),
                    e.addEventListener("touchend", this.onTouchEnd, !1),
                    e.addEventListener("touchcancel", this.onTouchCancel, !1),
                    Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, r) {
                            var o = Node.prototype.removeEventListener;
                            "click" === t ? o.call(e, t, n.hijacked || n, r) : o.call(e, t, n, r)
                        },
                        e.addEventListener = function(t, n, r) {
                            var o = Node.prototype.addEventListener;
                            "click" === t ? o.call(e, t, n.hijacked || (n.hijacked = function(e) {
                                e.propagationStopped || n(e)
                            }), r) : o.call(e, t, n, r)
                        }
                    ),
                    "function" == typeof e.onclick && (n = e.onclick,
                        e.addEventListener("click", function(e) {
                            n(e)
                        }, !1),
                        e.onclick = null)
            }

            function u(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }
        }
        var a = navigator.userAgent.indexOf("Windows Phone") >= 0,
            c = navigator.userAgent.indexOf("Android") > 0 && !a,
            u = /iP(ad|hone|od)/.test(navigator.userAgent) && !a,
            s = u && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            l = u && /OS [6-7]_\d/.test(navigator.userAgent),
            f = navigator.userAgent.indexOf("BB10") > 0;
        i.prototype.needsClick = function(e) {
                switch (e.nodeName.toLowerCase()) {
                    case "button":
                    case "select":
                    case "textarea":
                        if (e.disabled)
                            return !0;
                        break;
                    case "input":
                        if (u && "file" === e.type || e.disabled)
                            return !0;
                        break;
                    case "label":
                    case "iframe":
                    case "video":
                        return !0
                }
                return /\bneedsclick\b/.test(e.className)
            },
            i.prototype.needsFocus = function(e) {
                switch (e.nodeName.toLowerCase()) {
                    case "textarea":
                        return !0;
                    case "select":
                        return !c;
                    case "input":
                        switch (e.type) {
                            case "button":
                            case "checkbox":
                            case "file":
                            case "image":
                            case "radio":
                            case "submit":
                                return !1
                        }
                        return !e.disabled && !e.readOnly;
                    default:
                        return /\bneedsfocus\b/.test(e.className)
                }
            },
            i.prototype.sendClick = function(e, t) {
                var n, r;
                document.activeElement && document.activeElement !== e && document.activeElement.blur(),
                    r = t.changedTouches[0], (n = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null),
                    n.forwardedTouchEvent = !0,
                    e.dispatchEvent(n)
            },
            i.prototype.determineEventType = function(e) {
                return c && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
            },
            i.prototype.focus = function(e) {
                var t;
                u && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length,
                    e.setSelectionRange(t, t)) : e.focus()
            },
            i.prototype.updateScrollParent = function(e) {
                var t, n;
                if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
                    n = e;
                    do {
                        if (n.scrollHeight > n.offsetHeight) {
                            t = n,
                                e.fastClickScrollParent = n;
                            break
                        }
                        n = n.parentElement
                    } while (n)
                }
                t && (t.fastClickLastScrollTop = t.scrollTop)
            },
            i.prototype.getTargetElementFromEventTarget = function(e) {
                return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
            },
            i.prototype.onTouchStart = function(e) {
                var t, n, r;
                if (e.targetTouches.length > 1)
                    return !0;
                if (t = this.getTargetElementFromEventTarget(e.target),
                    n = e.targetTouches[0],
                    u) {
                    if ((r = window.getSelection()).rangeCount && !r.isCollapsed)
                        return !0;
                    if (!s) {
                        if (n.identifier && n.identifier === this.lastTouchIdentifier)
                            return e.preventDefault(), !1;
                        this.lastTouchIdentifier = n.identifier,
                            this.updateScrollParent(t)
                    }
                }
                return this.trackingClick = !0,
                    this.trackingClickStart = e.timeStamp,
                    this.targetElement = t,
                    this.touchStartX = n.pageX,
                    this.touchStartY = n.pageY,
                    e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
            },
            i.prototype.touchHasMoved = function(e) {
                var t = e.changedTouches[0],
                    n = this.touchBoundary;
                return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
            },
            i.prototype.onTouchMove = function(e) {
                return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1,
                    this.targetElement = null), !0)
            },
            i.prototype.findControl = function(e) {
                return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
            },
            i.prototype.onTouchEnd = function(e) {
                var t, n, r, o, i, a = this.targetElement;
                if (!this.trackingClick)
                    return !0;
                if (e.timeStamp - this.lastClickTime < this.tapDelay)
                    return this.cancelNextClick = !0, !0;
                if (e.timeStamp - this.trackingClickStart > this.tapTimeout)
                    return !0;
                if (this.cancelNextClick = !1,
                    this.lastClickTime = e.timeStamp,
                    n = this.trackingClickStart,
                    this.trackingClick = !1,
                    this.trackingClickStart = 0,
                    l && (i = e.changedTouches[0], (a = document.elementFromPoint(i.pageX - window.pageXOffset, i.pageY - window.pageYOffset) || a).fastClickScrollParent = this.targetElement.fastClickScrollParent),
                    "label" === (r = a.tagName.toLowerCase())) {
                    if (t = this.findControl(a)) {
                        if (this.focus(a),
                            c)
                            return !1;
                        a = t
                    }
                } else if (this.needsFocus(a))
                    return e.timeStamp - n > 100 || u && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(a),
                        this.sendClick(a, e),
                        u && "select" === r || (this.targetElement = null,
                            e.preventDefault()), !1);
                return !(!u || s || !(o = a.fastClickScrollParent) || o.fastClickLastScrollTop === o.scrollTop) || (this.needsClick(a) || (e.preventDefault(),
                    this.sendClick(a, e)), !1)
            },
            i.prototype.onTouchCancel = function() {
                this.trackingClick = !1,
                    this.targetElement = null
            },
            i.prototype.onMouse = function(e) {
                return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0,
                    e.stopPropagation(),
                    e.preventDefault(), !1))))
            },
            i.prototype.onClick = function(e) {
                var t;
                return this.trackingClick ? (this.targetElement = null,
                    this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || ((t = this.onMouse(e)) || (this.targetElement = null),
                    t)
            },
            i.prototype.destroy = function() {
                var e = this.layer;
                c && (e.removeEventListener("mouseover", this.onMouse, !0),
                        e.removeEventListener("mousedown", this.onMouse, !0),
                        e.removeEventListener("mouseup", this.onMouse, !0)),
                    e.removeEventListener("click", this.onClick, !0),
                    e.removeEventListener("touchstart", this.onTouchStart, !1),
                    e.removeEventListener("touchmove", this.onTouchMove, !1),
                    e.removeEventListener("touchend", this.onTouchEnd, !1),
                    e.removeEventListener("touchcancel", this.onTouchCancel, !1)
            },
            i.notNeeded = function(e) {
                var t, n, r;
                if (void 0 === window.ontouchstart)
                    return !0;
                if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                    if (!c)
                        return !0;
                    if (t = document.querySelector("meta[name=viewport]")) {
                        if (-1 !== t.content.indexOf("user-scalable=no"))
                            return !0;
                        if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                            return !0
                    }
                }
                if (f && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && r[2] >= 3 && (t = document.querySelector("meta[name=viewport]"))) {
                    if (-1 !== t.content.indexOf("user-scalable=no"))
                        return !0;
                    if (document.documentElement.scrollWidth <= window.outerWidth)
                        return !0
                }
                return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (t = document.querySelector("meta[name=viewport]")) && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
            },
            i.attach = function(e, t) {
                return new i(e, t)
            },
            "object" === o(n(12)) && n(12) ? void 0 === (r = function() {
                    return i
                }
                .call(t, n, t, e)) || (e.exports = r) : e.exports ? (e.exports = i.attach,
                e.exports.FastClick = i) : window.FastClick = i
    }()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
                r && e(t, r),
                t
        }
    }();
    var o = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.tabElement = t,
                this.init()
        }
        return r(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    new Swiper("#swiper_nav", {
                            slidesPerView: "auto",
                            spaceBetween: 0,
                            freeMode: !0,
                            freeModeMinimumVelocity: .1,
                            freeModeMomentumRatio: .5
                        }),
                        window.addEventListener("popstate", function(t) {
                            if (t.state && t.state.channelTag) {
                                var n = $("#swiper_nav .swiper-slide .nav_item[channeltag='" + t.state.channelTag + "']");
                                e.setCurrentItem(n)
                            }
                        }),
                        $("#swiper_nav").on("click", ".nav_item", function(t) {
                            var n = $(t.currentTarget),
                                r = n.attr("data-link");
                            return r ? (window.open(r, "_self"), !1) : n.hasClass("current") ? void 0 : (e.setCurrentItem(n),
                                Glama.router.push(n.attr("data-router"), {
                                    channelTag: n.attr("channeltag")
                                }), !1)
                        })
                }
            }, {
                key: "setCurrentItem",
                value: function(e) {
                    e.addClass("current");
                    var t = e.closest(".swiper-slide").siblings().children(".nav_item.current");
                    return t.removeClass("current"),
                        t
                }
            }]),
            e
    }();
    t.default = new o
}]);
