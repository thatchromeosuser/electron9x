module.exports = {
if (Date.now = Date.now || function() {
    return +new Date
}
,
function() {
    if ("undefined" == typeof window.performance && (window.performance = {}),
    !window.performance.now) {
        var e = Date.now();
        performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart),
        window.performance.now = function() {
            return Date.now() - e
        }
    }
}(),
function() {
    "use strict";
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = !(!window.performance || !window.performance.now), r = 0, o = t.length; o > r && !window.requestAnimationFrame; r += 1)
        window.requestAnimationFrame = window[t[r] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[t[r] + "CancelAnimationFrame"] || window[t[r] + "CancelRequestAnimationFrame"];
    if ((/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame) && (window.requestAnimationFrame = function(t, n) {
        var r = (new Date).getTime()
          , o = Math.max(0, 16 - (r - e))
          , i = window.setTimeout(function() {
            t(r + o)
        }, o);
        return e = r + o,
        i
    }
    ),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    }
    ),
    !n) {
        var i = window.requestAnimationFrame
          , a = +new Date;
        window.requestAnimationFrame = function(e, t) {
            var n = function(t) {
                var n = 1e12 > t ? t : t - a;
                return e(n)
            };
            i(n, t)
        }
    }
}(),
String.prototype.repeat || (String.prototype.repeat = function(e) {
    "use strict";
    if (null == this)
        throw new TypeError("can't convert " + this + " to object");
    var t = "" + this;
    if (e = +e,
    e != e && (e = 0),
    0 > e)
        throw new RangeError("repeat count must be non-negative");
    if (e == 1 / 0)
        throw new RangeError("repeat count must be less than infinity");
    if (e = Math.floor(e),
    0 == t.length || 0 == e)
        return "";
    if (t.length * e >= 1 << 28)
        throw new RangeError("repeat count must not overflow maximum string size");
    for (var n = ""; 1 == (1 & e) && (n += t),
    e >>>= 1,
    0 != e; )
        t += t;
    return n
}
),
function(e) {
    "use strict";
    e.console = e.console || {};
    for (var t, n, r = e.console, o = {}, i = function() {}, a = "memory".split(","), c = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); t = a.pop(); )
        r[t] = r[t] || o;
    for (; n = c.pop(); )
        r[n] = r[n] || i
}("undefined" == typeof window ? this : window),
Function.prototype.bind || (Function.prototype.bind = function(e) {
    "use strict";
    if ("function" != typeof this)
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var t = Array.prototype.slice.call(arguments, 1)
      , n = this
      , r = function() {}
      , o = function() {
        return n.apply(this instanceof r && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
    };
    return r.prototype = this.prototype,
    o.prototype = new r,
    o
}
),
function() {
    "use strict";
    var e = Object.prototype
      , t = e.__defineGetter__
      , n = e.__defineSetter__
      , r = e.__lookupGetter__
      , o = e.__lookupSetter__
      , i = e.hasOwnProperty;
    t && n && r && o && (Object.defineProperty || (Object.defineProperty = function(e, a, c) {
        if (arguments.length < 3)
            throw new TypeError("Arguments not optional");
        if (a += "",
        i.call(c, "value") && (r.call(e, a) || o.call(e, a) || (e[a] = c.value),
        i.call(c, "get") || i.call(c, "set")))
            throw new TypeError("Cannot specify an accessor and a value");
        if (!(c.writable && c.enumerable && c.configurable))
            throw new TypeError("This implementation of Object.defineProperty does not support false for configurable, enumerable, or writable.");
        return c.get && t.call(e, a, c.get),
        c.set && n.call(e, a, c.set),
        e
    }
    ),
    Object.getOwnPropertyDescriptor || (Object.getOwnPropertyDescriptor = function(e, t) {
        if (arguments.length < 2)
            throw new TypeError("Arguments not optional.");
        t += "";
        var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
        }
          , a = r.call(e, t)
          , c = o.call(e, t);
        return i.call(e, t) ? a || c ? (delete n.writable,
        n.get = n.set = void 0,
        a && (n.get = a),
        c && (n.set = c),
        n) : (n.value = e[t],
        n) : n
    }
    ),
    Object.defineProperties || (Object.defineProperties = function(e, t) {
        var n;
        for (n in t)
            i.call(t, n) && Object.defineProperty(e, n, t[n])
    }
    ))
}(),
!(document.documentElement.dataset || Object.getOwnPropertyDescriptor(Element.prototype, "dataset") && Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get)) {
    var propDescriptor = {
        enumerable: !0,
        get: function() {
            "use strict";
            var e, t, n, r, o, i, a = this, c = this.attributes, s = c.length, u = function(e) {
                return e.charAt(1).toUpperCase()
            }, p = function() {
                return this
            }, l = function(e, t) {
                return "undefined" != typeof t ? this.setAttribute(e, t) : this.removeAttribute(e)
            };
            try {
                ({}).__defineGetter__("test", function() {}),
                t = {}
            } catch (f) {
                t = document.createElement("div")
            }
            for (e = 0; s > e; e++)
                if (i = c[e],
                i && i.name && /^data-\w[\w\-]*$/.test(i.name)) {
                    n = i.value,
                    r = i.name,
                    o = r.substr(5).replace(/-./g, u);
                    try {
                        Object.defineProperty(t, o, {
                            enumerable: this.enumerable,
                            get: p.bind(n || ""),
                            set: l.bind(a, r)
                        })
                    } catch (m) {
                        t[o] = n
                    }
                }
            return t
        }
    };
    try {
        Object.defineProperty(Element.prototype, "dataset", propDescriptor)
    } catch (e) {
        propDescriptor.enumerable = !1,
        Object.defineProperty(Element.prototype, "dataset", propDescriptor)
    }
}
!function(e, t) {
    "use strict";
    function n(e) {
        return d[m] = r.apply(t, e),
        m++
    }
    function r(e) {
        var n = [].slice.call(arguments, 1);
        return function() {
            "function" == typeof e ? e.apply(t, n) : new Function("" + e)()
        }
    }
    function o(e) {
        if (w)
            setTimeout(r(o, e), 0);
        else {
            var t = d[e];
            if (t) {
                w = !0;
                try {
                    t()
                } finally {
                    i(e),
                    w = !1
                }
            }
        }
    }
    function i(e) {
        delete d[e]
    }
    function a() {
        f = function() {
            var e = n(arguments);
            return process.nextTick(r(o, e)),
            e
        }
    }
    function c() {
        if (e.postMessage && !e.importScripts) {
            var t = !0
              , n = e.onmessage;
            return e.onmessage = function() {
                t = !1
            }
            ,
            e.postMessage("", "*"),
            e.onmessage = n,
            t
        }
    }
    function s() {
        var t = "setImmediate$" + Math.random() + "$"
          , r = function(n) {
            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length))
        };
        e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r),
        f = function() {
            var r = n(arguments);
            return e.postMessage(t + r, "*"),
            r
        }
    }
    function u() {
        var e = new MessageChannel;
        e.port1.onmessage = function(e) {
            var t = e.data;
            o(t)
        }
        ,
        f = function() {
            var t = n(arguments);
            return e.port2.postMessage(t),
            t
        }
    }
    function p() {
        var e = g.documentElement;
        f = function() {
            var t = n(arguments)
              , r = g.createElement("script");
            return r.onreadystatechange = function() {
                o(t),
                r.onreadystatechange = null,
                e.removeChild(r),
                r = null
            }
            ,
            e.appendChild(r),
            t
        }
    }
    function l() {
        f = function() {
            var e = n(arguments);
            return setTimeout(r(o, e), 0),
            e
        }
    }
    if (!e.setImmediate) {
        var f, m = 1, d = {}, w = !1, g = e.document, y = Object.getPrototypeOf && Object.getPrototypeOf(e);
        y = y && y.setTimeout ? y : e,
        "[object process]" === {}.toString.call(e.process) ? a() : c() ? s() : e.MessageChannel ? u() : g && "onreadystatechange"in g.createElement("script") ? p() : l(),
        y.setImmediate = f,
        y.clearImmediate = i
    }
}(new Function("return this")());
!function() {
    var e, n, t, r;
    !function() {
        var o = {}
          , i = {};
        e = function(e, n, t) {
            o[e] = {
                deps: n,
                callback: t
            }
        }
        ,
        r = t = n = function(e) {
            function t(n) {
                if ("." !== n.charAt(0))
                    return n;
                for (var t = n.split("/"), r = e.split("/").slice(0, -1), o = 0, i = t.length; i > o; o++) {
                    var a = t[o];
                    if (".." === a)
                        r.pop();
                    else {
                        if ("." === a)
                            continue;
                        r.push(a)
                    }
                }
                return r.join("/")
            }
            if (r._eak_seen = o,
            i[e])
                return i[e];
            if (i[e] = {},
            !o[e])
                throw new Error("Could not find module " + e);
            for (var a, u = o[e], c = u.deps, s = u.callback, f = [], l = 0, d = c.length; d > l; l++)
                f.push("exports" === c[l] ? a = {} : n(t(c[l])));
            var v = s.apply(this, f);
            return i[e] = a || v
        }
    }(),
    e("promise/all", ["./utils", "exports"], function(e, n) {
        "use strict";
        function t(e) {
            var n = this;
            if (!r(e))
                throw new TypeError("You must pass an array to all.");
            return new n(function(n, t) {
                function r(e) {
                    return function(n) {
                        i(e, n)
                    }
                }
                function i(e, t) {
                    u[e] = t,
                    0 === --c && n(u)
                }
                var a, u = [], c = e.length;
                0 === c && n([]);
                for (var s = 0; s < e.length; s++)
                    a = e[s],
                    a && o(a.then) ? a.then(r(s), t) : i(s, a)
            }
            )
        }
        var r = e.isArray
          , o = e.isFunction;
        n.all = t
    }),
    e("promise/asap", ["exports"], function(e) {
        "use strict";
        function n() {
            return function() {
                process.nextTick(o)
            }
        }
        function t() {
            var e = 0
              , n = new c(o)
              , t = document.createTextNode("");
            return n.observe(t, {
                characterData: !0
            }),
            function() {
                t.data = e = ++e % 2
            }
        }
        function r() {
            return function() {
                s.setTimeout(o, 1)
            }
        }
        function o() {
            for (var e = 0; e < f.length; e++) {
                var n = f[e]
                  , t = n[0]
                  , r = n[1];
                t(r)
            }
            f = []
        }
        function i(e, n) {
            var t = f.push([e, n]);
            1 === t && a()
        }
        var a, u = "undefined" != typeof window ? window : {}, c = u.MutationObserver || u.WebKitMutationObserver, s = "undefined" != typeof global ? global : void 0 === this ? window : this, f = [];
        a = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? n() : c ? t() : r(),
        e.asap = i
    }),
    e("promise/config", ["exports"], function(e) {
        "use strict";
        function n(e, n) {
            return 2 !== arguments.length ? t[e] : void (t[e] = n)
        }
        var t = {
            instrument: !1
        };
        e.config = t,
        e.configure = n
    }),
    e("promise/polyfill", ["./promise", "./utils", "exports"], function(e, n, t) {
        "use strict";
        function r() {
            var e;
            e = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
            var n = "Promise"in e && "resolve"in e.Promise && "reject"in e.Promise && "all"in e.Promise && "race"in e.Promise && function() {
                var n;
                return new e.Promise(function(e) {
                    n = e
                }
                ),
                i(n)
            }();
            n || (e.Promise = o)
        }
        var o = e.Promise
          , i = n.isFunction;
        t.polyfill = r
    }),
    e("promise/promise", ["./config", "./utils", "./all", "./race", "./resolve", "./reject", "./asap", "exports"], function(e, n, t, r, o, i, a, u) {
        "use strict";
        function c(e) {
            if (!_(e))
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            if (!(this instanceof c))
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this._subscribers = [],
            s(e, this)
        }
        function s(e, n) {
            function t(e) {
                h(n, e)
            }
            function r(e) {
                p(n, e)
            }
            try {
                e(t, r)
            } catch (o) {
                r(o)
            }
        }
        function f(e, n, t, r) {
            var o, i, a, u, c = _(t);
            if (c)
                try {
                    o = t(r),
                    a = !0
                } catch (s) {
                    u = !0,
                    i = s
                }
            else
                o = r,
                a = !0;
            v(n, o) || (c && a ? h(n, o) : u ? p(n, i) : e === N ? h(n, o) : e === k && p(n, o))
        }
        function l(e, n, t, r) {
            var o = e._subscribers
              , i = o.length;
            o[i] = n,
            o[i + N] = t,
            o[i + k] = r
        }
        function d(e, n) {
            for (var t, r, o = e._subscribers, i = e._detail, a = 0; a < o.length; a += 3)
                t = o[a],
                r = o[a + n],
                f(n, t, r, i);
            e._subscribers = null
        }
        function v(e, n) {
            var t, r = null;
            try {
                if (e === n)
                    throw new TypeError("A promises callback cannot return that same promise.");
                if (m(n) && (r = n.then,
                _(r)))
                    return r.call(n, function(r) {
                        return t ? !0 : (t = !0,
                        void (n !== r ? h(e, r) : y(e, r)))
                    }, function(n) {
                        return t ? !0 : (t = !0,
                        void p(e, n))
                    }),
                    !0
            } catch (o) {
                return t ? !0 : (p(e, o),
                !0)
            }
            return !1
        }
        function h(e, n) {
            e === n ? y(e, n) : v(e, n) || y(e, n)
        }
        function y(e, n) {
            e._state === A && (e._state = D,
            e._detail = n,
            w.async(g, e))
        }
        function p(e, n) {
            e._state === A && (e._state = D,
            e._detail = n,
            w.async(b, e))
        }
        function g(e) {
            d(e, e._state = N)
        }
        function b(e) {
            d(e, e._state = k)
        }
        var w = e.config
          , m = (e.configure,
        n.objectOrFunction)
          , _ = n.isFunction
          , E = (n.now,
        t.all)
          , S = r.race
          , I = o.resolve
          , O = i.reject
          , x = a.asap;
        w.async = x;
        var A = void 0
          , D = 0
          , N = 1
          , k = 2;
        c.prototype = {
            constructor: c,
            _state: void 0,
            _detail: void 0,
            _subscribers: void 0,
            then: function(e, n) {
                var t = this
                  , r = new this.constructor(function() {}
                );
                if (this._state) {
                    var o = arguments;
                    w.async(function() {
                        f(t._state, r, o[t._state - 1], t._detail)
                    })
                } else
                    l(this, r, e, n);
                return r
            },
            "catch": function(e) {
                return this.then(null, e)
            }
        },
        c.all = E,
        c.race = S,
        c.resolve = I,
        c.reject = O,
        u.Promise = c
    }),
    e("promise/race", ["./utils", "exports"], function(e, n) {
        "use strict";
        function t(e) {
            var n = this;
            if (!r(e))
                throw new TypeError("You must pass an array to race.");
            return new n(function(n, t) {
                for (var r, o = 0; o < e.length; o++)
                    r = e[o],
                    r && "function" == typeof r.then ? r.then(n, t) : n(r)
            }
            )
        }
        var r = e.isArray;
        n.race = t
    }),
    e("promise/reject", ["exports"], function(e) {
        "use strict";
        function n(e) {
            var n = this;
            return new n(function(n, t) {
                t(e)
            }
            )
        }
        e.reject = n
    }),
    e("promise/resolve", ["exports"], function(e) {
        "use strict";
        function n(e) {
            if (e && "object" == typeof e && e.constructor === this)
                return e;
            var n = this;
            return new n(function(n) {
                n(e)
            }
            )
        }
        e.resolve = n
    }),
    e("promise/utils", ["exports"], function(e) {
        "use strict";
        function n(e) {
            return t(e) || "object" == typeof e && null !== e
        }
        function t(e) {
            return "function" == typeof e
        }
        function r(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        var o = Date.now || function() {
            return (new Date).getTime()
        }
        ;
        e.objectOrFunction = n,
        e.isFunction = t,
        e.isArray = r,
        e.now = o
    }),
    n("promise/polyfill").polyfill()
}(),
function() {
    "use strict";
    function e(e, n) {
        e = e || [],
        n = n || {};
        try {
            return new Blob(e,n)
        } catch (t) {
            if ("TypeError" !== t.name)
                throw t;
            for (var r = E.BlobBuilder || E.MSBlobBuilder || E.MozBlobBuilder || E.WebKitBlobBuilder, o = new r, i = 0; i < e.length; i += 1)
                o.append(e[i]);
            return o.getBlob(n.type)
        }
    }
    function n(e, n) {
        var t = "";
        if (e && (t = e.toString()),
        e && ("[object ArrayBuffer]" === e.toString() || e.buffer && "[object ArrayBuffer]" === e.buffer.toString())) {
            var r, i = c;
            e instanceof ArrayBuffer ? (r = e,
            i += f) : (r = e.buffer,
            "[object Int8Array]" === t ? i += d : "[object Uint8Array]" === t ? i += v : "[object Uint8ClampedArray]" === t ? i += h : "[object Int16Array]" === t ? i += y : "[object Uint16Array]" === t ? i += g : "[object Int32Array]" === t ? i += p : "[object Uint32Array]" === t ? i += b : "[object Float32Array]" === t ? i += w : "[object Float64Array]" === t ? i += m : n(new Error("Failed to get type for BinaryArray"))),
            n(i + o(r))
        } else if ("[object Blob]" === t) {
            var u = new FileReader;
            u.onload = function() {
                var t = a + e.type + "~" + o(this.result);
                n(c + l + t)
            }
            ,
            u.readAsArrayBuffer(e)
        } else
            try {
                n(JSON.stringify(e))
            } catch (s) {
                console.error("Couldn't convert value into a JSON string: ", e),
                n(null, s)
            }
    }
    function t(n) {
        if (n.substring(0, s) !== c)
            return JSON.parse(n);
        var t, o = n.substring(_), i = n.substring(s, _);
        if (i === l && u.test(o)) {
            var a = o.match(u);
            t = a[1],
            o = o.substring(a[0].length)
        }
        var E = r(o);
        switch (i) {
        case f:
            return E;
        case l:
            return e([E], {
                type: t
            });
        case d:
            return new Int8Array(E);
        case v:
            return new Uint8Array(E);
        case h:
            return new Uint8ClampedArray(E);
        case y:
            return new Int16Array(E);
        case g:
            return new Uint16Array(E);
        case p:
            return new Int32Array(E);
        case b:
            return new Uint32Array(E);
        case w:
            return new Float32Array(E);
        case m:
            return new Float64Array(E);
        default:
            throw new Error("Unkown type: " + i)
        }
    }
    function r(e) {
        var n, t, r, o, a, u = .75 * e.length, c = e.length, s = 0;
        "=" === e[e.length - 1] && (u--,
        "=" === e[e.length - 2] && u--);
        var f = new ArrayBuffer(u)
          , l = new Uint8Array(f);
        for (n = 0; c > n; n += 4)
            t = i.indexOf(e[n]),
            r = i.indexOf(e[n + 1]),
            o = i.indexOf(e[n + 2]),
            a = i.indexOf(e[n + 3]),
            l[s++] = t << 2 | r >> 4,
            l[s++] = (15 & r) << 4 | o >> 2,
            l[s++] = (3 & o) << 6 | 63 & a;
        return f
    }
    function o(e) {
        var n, t = new Uint8Array(e), r = "";
        for (n = 0; n < t.length; n += 3)
            r += i[t[n] >> 2],
            r += i[(3 & t[n]) << 4 | t[n + 1] >> 4],
            r += i[(15 & t[n + 1]) << 2 | t[n + 2] >> 6],
            r += i[63 & t[n + 2]];
        return t.length % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : t.length % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="),
        r
    }
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , a = "~~local_forage_type~"
      , u = /^~~local_forage_type~([^~]+)~/
      , c = "__lfsc__:"
      , s = c.length
      , f = "arbf"
      , l = "blob"
      , d = "si08"
      , v = "ui08"
      , h = "uic8"
      , y = "si16"
      , p = "si32"
      , g = "ur16"
      , b = "ui32"
      , w = "fl32"
      , m = "fl64"
      , _ = s + f.length
      , E = this
      , S = {
        serialize: n,
        deserialize: t,
        stringToBuffer: r,
        bufferToString: o
    };
    "undefined" != typeof module && module.exports && "undefined" != typeof require ? module.exports = S : "function" == typeof define && define.amd ? define("localforageSerializer", function() {
        return S
    }) : this.localforageSerializer = S
}
.call(window),
function() {
    "use strict";
    function e(e, n) {
        e = e || [],
        n = n || {};
        try {
            return new Blob(e,n)
        } catch (t) {
            if ("TypeError" !== t.name)
                throw t;
            for (var r = window.BlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder, o = new r, i = 0; i < e.length; i += 1)
                o.append(e[i]);
            return o.getBlob(n.type)
        }
    }
    function n(e) {
        for (var n = e.length, t = new ArrayBuffer(n), r = new Uint8Array(t), o = 0; n > o; o++)
            r[o] = e.charCodeAt(o);
        return t
    }
    function t(e) {
        return new b(function(n, t) {
            var r = new XMLHttpRequest;
            r.open("GET", e),
            r.withCredentials = !0,
            r.responseType = "arraybuffer",
            r.onreadystatechange = function() {
                return 4 === r.readyState ? 200 === r.status ? n({
                    response: r.response,
                    type: r.getResponseHeader("Content-Type")
                }) : void t({
                    status: r.status,
                    response: r.response
                }) : void 0
            }
            ,
            r.send()
        }
        )
    }
    function r(n) {
        return new b(function(r, o) {
            var i = e([""], {
                type: "image/png"
            })
              , a = n.transaction([_], "readwrite");
            a.objectStore(_).put(i, "key"),
            a.oncomplete = function() {
                var e = n.transaction([_], "readwrite")
                  , i = e.objectStore(_).get("key");
                i.onerror = o,
                i.onsuccess = function(e) {
                    var n = e.target.result
                      , o = URL.createObjectURL(n);
                    t(o).then(function(e) {
                        r(!(!e || "image/png" !== e.type))
                    }, function() {
                        r(!1)
                    }).then(function() {
                        URL.revokeObjectURL(o)
                    })
                }
            }
        }
        )["catch"](function() {
            return !1
        })
    }
    function o(e) {
        return "boolean" == typeof m ? b.resolve(m) : r(e).then(function(e) {
            return m = e
        })
    }
    function i(e) {
        return new b(function(n, t) {
            var r = new FileReader;
            r.onerror = t,
            r.onloadend = function(t) {
                var r = btoa(t.target.result || "");
                n({
                    __local_forage_encoded_blob: !0,
                    data: r,
                    type: e.type
                })
            }
            ,
            r.readAsBinaryString(e)
        }
        )
    }
    function a(t) {
        var r = n(atob(t.data));
        return e([r], {
            type: t.type
        })
    }
    function u(e) {
        return e && e.__local_forage_encoded_blob
    }
    function c(e) {
        var n = this
          , t = {
            db: null
        };
        if (e)
            for (var r in e)
                t[r] = e[r];
        return new b(function(e, r) {
            var o = w.open(t.name, t.version);
            o.onerror = function() {
                r(o.error)
            }
            ,
            o.onupgradeneeded = function(e) {
                o.result.createObjectStore(t.storeName),
                e.oldVersion <= 1 && o.result.createObjectStore(_)
            }
            ,
            o.onsuccess = function() {
                t.db = o.result,
                n._dbInfo = t,
                e()
            }
        }
        )
    }
    function s(e, n) {
        var t = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var r = new b(function(n, r) {
            t.ready().then(function() {
                var o = t._dbInfo
                  , i = o.db.transaction(o.storeName, "readonly").objectStore(o.storeName)
                  , c = i.get(e);
                c.onsuccess = function() {
                    var e = c.result;
                    void 0 === e && (e = null),
                    u(e) && (e = a(e)),
                    n(e)
                }
                ,
                c.onerror = function() {
                    r(c.error)
                }
            })["catch"](r)
        }
        );
        return g(r, n),
        r
    }
    function f(e, n) {
        var t = this
          , r = new b(function(n, r) {
            t.ready().then(function() {
                var o = t._dbInfo
                  , i = o.db.transaction(o.storeName, "readonly").objectStore(o.storeName)
                  , c = i.openCursor()
                  , s = 1;
                c.onsuccess = function() {
                    var t = c.result;
                    if (t) {
                        var r = t.value;
                        u(r) && (r = a(r));
                        var o = e(r, t.key, s++);
                        void 0 !== o ? n(o) : t["continue"]()
                    } else
                        n()
                }
                ,
                c.onerror = function() {
                    r(c.error)
                }
            })["catch"](r)
        }
        );
        return g(r, n),
        r
    }
    function l(e, n, t) {
        var r = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var a = new b(function(t, a) {
            var u;
            r.ready().then(function() {
                return u = r._dbInfo,
                o(u.db)
            }).then(function(e) {
                return !e && n instanceof Blob ? i(n) : n
            }).then(function(n) {
                var r = u.db.transaction(u.storeName, "readwrite")
                  , o = r.objectStore(u.storeName);
                null === n && (n = void 0);
                var i = o.put(n, e);
                r.oncomplete = function() {
                    void 0 === n && (n = null),
                    t(n)
                }
                ,
                r.onabort = r.onerror = function() {
                    var e = i.error ? i.error : i.transaction.error;
                    a(e)
                }
            })["catch"](a)
        }
        );
        return g(a, t),
        a
    }
    function d(e, n) {
        var t = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var r = new b(function(n, r) {
            t.ready().then(function() {
                var o = t._dbInfo
                  , i = o.db.transaction(o.storeName, "readwrite")
                  , a = i.objectStore(o.storeName)
                  , u = a["delete"](e);
                i.oncomplete = function() {
                    n()
                }
                ,
                i.onerror = function() {
                    r(u.error)
                }
                ,
                i.onabort = function() {
                    var e = u.error ? u.error : u.transaction.error;
                    r(e)
                }
            })["catch"](r)
        }
        );
        return g(r, n),
        r
    }
    function v(e) {
        var n = this
          , t = new b(function(e, t) {
            n.ready().then(function() {
                var r = n._dbInfo
                  , o = r.db.transaction(r.storeName, "readwrite")
                  , i = o.objectStore(r.storeName)
                  , a = i.clear();
                o.oncomplete = function() {
                    e()
                }
                ,
                o.onabort = o.onerror = function() {
                    var e = a.error ? a.error : a.transaction.error;
                    t(e)
                }
            })["catch"](t)
        }
        );
        return g(t, e),
        t
    }
    function h(e) {
        var n = this
          , t = new b(function(e, t) {
            n.ready().then(function() {
                var r = n._dbInfo
                  , o = r.db.transaction(r.storeName, "readonly").objectStore(r.storeName)
                  , i = o.count();
                i.onsuccess = function() {
                    e(i.result)
                }
                ,
                i.onerror = function() {
                    t(i.error)
                }
            })["catch"](t)
        }
        );
        return g(t, e),
        t
    }
    function y(e, n) {
        var t = this
          , r = new b(function(n, r) {
            return 0 > e ? void n(null) : void t.ready().then(function() {
                var o = t._dbInfo
                  , i = o.db.transaction(o.storeName, "readonly").objectStore(o.storeName)
                  , a = !1
                  , u = i.openCursor();
                u.onsuccess = function() {
                    var t = u.result;
                    return t ? void (0 === e ? n(t.key) : a ? n(t.key) : (a = !0,
                    t.advance(e))) : void n(null)
                }
                ,
                u.onerror = function() {
                    r(u.error)
                }
            })["catch"](r)
        }
        );
        return g(r, n),
        r
    }
    function p(e) {
        var n = this
          , t = new b(function(e, t) {
            n.ready().then(function() {
                var r = n._dbInfo
                  , o = r.db.transaction(r.storeName, "readonly").objectStore(r.storeName)
                  , i = o.openCursor()
                  , a = [];
                i.onsuccess = function() {
                    var n = i.result;
                    return n ? (a.push(n.key),
                    void n["continue"]()) : void e(a)
                }
                ,
                i.onerror = function() {
                    t(i.error)
                }
            })["catch"](t)
        }
        );
        return g(t, e),
        t
    }
    function g(e, n) {
        n && e.then(function(e) {
            n(null, e)
        }, function(e) {
            n(e)
        })
    }
    var b = "undefined" != typeof module && module.exports && "undefined" != typeof require ? require("promise") : this.Promise
      , w = w || this.indexedDB || this.webkitIndexedDB || this.mozIndexedDB || this.OIndexedDB || this.msIndexedDB;
    if (w) {
        var m, _ = "local-forage-detect-blob-support", E = {
            _driver: "asyncStorage",
            _initStorage: c,
            iterate: f,
            getItem: s,
            setItem: l,
            removeItem: d,
            clear: v,
            length: h,
            key: y,
            keys: p
        };
        "undefined" != typeof module && module.exports && "undefined" != typeof require ? module.exports = E : "function" == typeof define && define.amd ? define("asyncStorage", function() {
            return E
        }) : this.asyncStorage = E
    }
}
.call(window),
function() {
    "use strict";
    function e(e) {
        var n = this
          , t = {};
        if (e)
            for (var r in e)
                t[r] = e[r];
        t.keyPrefix = t.name + "/",
        n._dbInfo = t;
        var o = new f(function(e) {
            p === y.DEFINE ? require(["localforageSerializer"], e) : e(p === y.EXPORT ? require("./../utils/serializer") : l.localforageSerializer)
        }
        );
        return o.then(function(e) {
            return d = e,
            f.resolve()
        })
    }
    function n(e) {
        var n = this
          , t = n.ready().then(function() {
            for (var e = n._dbInfo.keyPrefix, t = v.length - 1; t >= 0; t--) {
                var r = v.key(t);
                0 === r.indexOf(e) && v.removeItem(r)
            }
        });
        return s(t, e),
        t
    }
    function t(e, n) {
        var t = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var r = t.ready().then(function() {
            var n = t._dbInfo
              , r = v.getItem(n.keyPrefix + e);
            return r && (r = d.deserialize(r)),
            r
        });
        return s(r, n),
        r
    }
    function r(e, n) {
        var t = this
          , r = t.ready().then(function() {
            for (var n = t._dbInfo.keyPrefix, r = n.length, o = v.length, i = 0; o > i; i++) {
                var a = v.key(i)
                  , u = v.getItem(a);
                if (u && (u = d.deserialize(u)),
                u = e(u, a.substring(r), i + 1),
                void 0 !== u)
                    return u
            }
        });
        return s(r, n),
        r
    }
    function o(e, n) {
        var t = this
          , r = t.ready().then(function() {
            var n, r = t._dbInfo;
            try {
                n = v.key(e)
            } catch (o) {
                n = null
            }
            return n && (n = n.substring(r.keyPrefix.length)),
            n
        });
        return s(r, n),
        r
    }
    function i(e) {
        var n = this
          , t = n.ready().then(function() {
            for (var e = n._dbInfo, t = v.length, r = [], o = 0; t > o; o++)
                0 === v.key(o).indexOf(e.keyPrefix) && r.push(v.key(o).substring(e.keyPrefix.length));
            return r
        });
        return s(t, e),
        t
    }
    function a(e) {
        var n = this
          , t = n.keys().then(function(e) {
            return e.length
        });
        return s(t, e),
        t
    }
    function u(e, n) {
        var t = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var r = t.ready().then(function() {
            var n = t._dbInfo;
            v.removeItem(n.keyPrefix + e)
        });
        return s(r, n),
        r
    }
    function c(e, n, t) {
        var r = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var o = r.ready().then(function() {
            void 0 === n && (n = null);
            var t = n;
            return new f(function(o, i) {
                d.serialize(n, function(n, a) {
                    if (a)
                        i(a);
                    else
                        try {
                            var u = r._dbInfo;
                            v.setItem(u.keyPrefix + e, n),
                            o(t)
                        } catch (c) {
                            ("QuotaExceededError" === c.name || "NS_ERROR_DOM_QUOTA_REACHED" === c.name) && i(c),
                            i(c)
                        }
                })
            }
            )
        });
        return s(o, t),
        o
    }
    function s(e, n) {
        n && e.then(function(e) {
            n(null, e)
        }, function(e) {
            n(e)
        })
    }
    var f = "undefined" != typeof module && module.exports && "undefined" != typeof require ? require("promise") : this.Promise
      , l = this
      , d = null
      , v = null;
    try {
        if (!(this.localStorage && "setItem"in this.localStorage))
            return;
        v = this.localStorage
    } catch (h) {
        return
    }
    var y = {
        DEFINE: 1,
        EXPORT: 2,
        WINDOW: 3
    }
      , p = y.WINDOW;
    "undefined" != typeof module && module.exports && "undefined" != typeof require ? p = y.EXPORT : "function" == typeof define && define.amd && (p = y.DEFINE);
    var g = {
        _driver: "localStorageWrapper",
        _initStorage: e,
        iterate: r,
        getItem: t,
        setItem: c,
        removeItem: u,
        clear: n,
        length: a,
        key: o,
        keys: i
    };
    p === y.EXPORT ? module.exports = g : p === y.DEFINE ? define("localStorageWrapper", function() {
        return g
    }) : this.localStorageWrapper = g
}
.call(window),
function() {
    "use strict";
    function e(e) {
        var n = this
          , t = {
            db: null
        };
        if (e)
            for (var r in e)
                t[r] = "string" != typeof e[r] ? e[r].toString() : e[r];
        var o = new f(function(e) {
            y === h.DEFINE ? require(["localforageSerializer"], e) : e(y === h.EXPORT ? require("./../utils/serializer") : l.localforageSerializer)
        }
        )
          , i = new f(function(r, o) {
            try {
                t.db = v(t.name, String(t.version), t.description, t.size)
            } catch (i) {
                return n.setDriver(n.LOCALSTORAGE).then(function() {
                    return n._initStorage(e)
                }).then(r)["catch"](o)
            }
            t.db.transaction(function(e) {
                e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                    n._dbInfo = t,
                    r()
                }, function(e, n) {
                    o(n)
                })
            })
        }
        );
        return o.then(function(e) {
            return d = e,
            i
        })
    }
    function n(e, n) {
        var t = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var r = new f(function(n, r) {
            t.ready().then(function() {
                var o = t._dbInfo;
                o.db.transaction(function(t) {
                    t.executeSql("SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], function(e, t) {
                        var r = t.rows.length ? t.rows.item(0).value : null;
                        r && (r = d.deserialize(r)),
                        n(r)
                    }, function(e, n) {
                        r(n)
                    })
                })
            })["catch"](r)
        }
        );
        return s(r, n),
        r
    }
    function t(e, n) {
        var t = this
          , r = new f(function(n, r) {
            t.ready().then(function() {
                var o = t._dbInfo;
                o.db.transaction(function(t) {
                    t.executeSql("SELECT * FROM " + o.storeName, [], function(t, r) {
                        for (var o = r.rows, i = o.length, a = 0; i > a; a++) {
                            var u = o.item(a)
                              , c = u.value;
                            if (c && (c = d.deserialize(c)),
                            c = e(c, u.key, a + 1),
                            void 0 !== c)
                                return void n(c)
                        }
                        n()
                    }, function(e, n) {
                        r(n)
                    })
                })
            })["catch"](r)
        }
        );
        return s(r, n),
        r
    }
    function r(e, n, t) {
        var r = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var o = new f(function(t, o) {
            r.ready().then(function() {
                void 0 === n && (n = null);
                var i = n;
                d.serialize(n, function(n, a) {
                    if (a)
                        o(a);
                    else {
                        var u = r._dbInfo;
                        u.db.transaction(function(r) {
                            r.executeSql("INSERT OR REPLACE INTO " + u.storeName + " (key, value) VALUES (?, ?)", [e, n], function() {
                                t(i)
                            }, function(e, n) {
                                o(n)
                            })
                        }, function(e) {
                            e.code === e.QUOTA_ERR && o(e)
                        })
                    }
                })
            })["catch"](o)
        }
        );
        return s(o, t),
        o
    }
    function o(e, n) {
        var t = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var r = new f(function(n, r) {
            t.ready().then(function() {
                var o = t._dbInfo;
                o.db.transaction(function(t) {
                    t.executeSql("DELETE FROM " + o.storeName + " WHERE key = ?", [e], function() {
                        n()
                    }, function(e, n) {
                        r(n)
                    })
                })
            })["catch"](r)
        }
        );
        return s(r, n),
        r
    }
    function i(e) {
        var n = this
          , t = new f(function(e, t) {
            n.ready().then(function() {
                var r = n._dbInfo;
                r.db.transaction(function(n) {
                    n.executeSql("DELETE FROM " + r.storeName, [], function() {
                        e()
                    }, function(e, n) {
                        t(n)
                    })
                })
            })["catch"](t)
        }
        );
        return s(t, e),
        t
    }
    function a(e) {
        var n = this
          , t = new f(function(e, t) {
            n.ready().then(function() {
                var r = n._dbInfo;
                r.db.transaction(function(n) {
                    n.executeSql("SELECT COUNT(key) as c FROM " + r.storeName, [], function(n, t) {
                        var r = t.rows.item(0).c;
                        e(r)
                    }, function(e, n) {
                        t(n)
                    })
                })
            })["catch"](t)
        }
        );
        return s(t, e),
        t
    }
    function u(e, n) {
        var t = this
          , r = new f(function(n, r) {
            t.ready().then(function() {
                var o = t._dbInfo;
                o.db.transaction(function(t) {
                    t.executeSql("SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(e, t) {
                        var r = t.rows.length ? t.rows.item(0).key : null;
                        n(r)
                    }, function(e, n) {
                        r(n)
                    })
                })
            })["catch"](r)
        }
        );
        return s(r, n),
        r
    }
    function c(e) {
        var n = this
          , t = new f(function(e, t) {
            n.ready().then(function() {
                var r = n._dbInfo;
                r.db.transaction(function(n) {
                    n.executeSql("SELECT key FROM " + r.storeName, [], function(n, t) {
                        for (var r = [], o = 0; o < t.rows.length; o++)
                            r.push(t.rows.item(o).key);
                        e(r)
                    }, function(e, n) {
                        t(n)
                    })
                })
            })["catch"](t)
        }
        );
        return s(t, e),
        t
    }
    function s(e, n) {
        n && e.then(function(e) {
            n(null, e)
        }, function(e) {
            n(e)
        })
    }
    var f = "undefined" != typeof module && module.exports && "undefined" != typeof require ? require("promise") : this.Promise
      , l = this
      , d = null
      , v = this.openDatabase;
    if (v) {
        var h = {
            DEFINE: 1,
            EXPORT: 2,
            WINDOW: 3
        }
          , y = h.WINDOW;
        "undefined" != typeof module && module.exports && "undefined" != typeof require ? y = h.EXPORT : "function" == typeof define && define.amd && (y = h.DEFINE);
        var p = {
            _driver: "webSQLStorage",
            _initStorage: e,
            iterate: t,
            getItem: n,
            setItem: r,
            removeItem: o,
            clear: i,
            length: a,
            key: u,
            keys: c
        };
        y === h.DEFINE ? define("webSQLStorage", function() {
            return p
        }) : y === h.EXPORT ? module.exports = p : this.webSQLStorage = p
    }
}
.call(window),
function() {
    "use strict";
    function e(e, n) {
        e[n] = function() {
            var t = arguments;
            return e.ready().then(function() {
                return e[n].apply(e, t)
            })
        }
    }
    function n() {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            if (n)
                for (var t in n)
                    n.hasOwnProperty(t) && (arguments[0][t] = v(n[t]) ? n[t].slice() : n[t])
        }
        return arguments[0]
    }
    function t(e) {
        for (var n in a)
            if (a.hasOwnProperty(n) && a[n] === e)
                return !0;
        return !1
    }
    function r(t) {
        this._config = n({}, f, t),
        this._driverSet = null,
        this._ready = !1,
        this._dbInfo = null;
        for (var r = 0; r < c.length; r++)
            e(this, c[r]);
        this.setDriver(this._config.driver)
    }
    var o = "undefined" != typeof module && module.exports && "undefined" != typeof require ? require("promise") : this.Promise
      , i = {}
      , a = {
        INDEXEDDB: "asyncStorage",
        LOCALSTORAGE: "localStorageWrapper",
        WEBSQL: "webSQLStorage"
    }
      , u = [a.INDEXEDDB, a.WEBSQL, a.LOCALSTORAGE]
      , c = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"]
      , s = {
        DEFINE: 1,
        EXPORT: 2,
        WINDOW: 3
    }
      , f = {
        description: "",
        driver: u.slice(),
        name: "localforage",
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
    }
      , l = s.WINDOW;
    "undefined" != typeof module && module.exports && "undefined" != typeof require ? l = s.EXPORT : "function" == typeof define && define.amd && (l = s.DEFINE);
    var d = function(e) {
        var n = n || e.indexedDB || e.webkitIndexedDB || e.mozIndexedDB || e.OIndexedDB || e.msIndexedDB
          , t = {};
        return t[a.WEBSQL] = !!e.openDatabase,
        t[a.INDEXEDDB] = !!function() {
            if ("undefined" != typeof e.openDatabase && e.navigator && e.navigator.userAgent && /Safari/.test(e.navigator.userAgent) && !/Chrome/.test(e.navigator.userAgent))
                return !1;
            try {
                return n && "function" == typeof n.open && "undefined" != typeof e.IDBKeyRange
            } catch (t) {
                return !1
            }
        }(),
        t[a.LOCALSTORAGE] = !!function() {
            try {
                return e.localStorage && "setItem"in e.localStorage && e.localStorage.setItem
            } catch (n) {
                return !1
            }
        }(),
        t
    }(this)
      , v = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
      , h = this;
    r.prototype.INDEXEDDB = a.INDEXEDDB,
    r.prototype.LOCALSTORAGE = a.LOCALSTORAGE,
    r.prototype.WEBSQL = a.WEBSQL,
    r.prototype.config = function(e) {
        if ("object" == typeof e) {
            if (this._ready)
                return new Error("Can't call config() after localforage has been used.");
            for (var n in e)
                "storeName" === n && (e[n] = e[n].replace(/\W/g, "_")),
                this._config[n] = e[n];
            return "driver"in e && e.driver && this.setDriver(this._config.driver),
            !0
        }
        return "string" == typeof e ? this._config[e] : this._config
    }
    ,
    r.prototype.defineDriver = function(e, n, r) {
        var a = new o(function(n, r) {
            try {
                var a = e._driver
                  , u = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver")
                  , s = new Error("Custom driver name already in use: " + e._driver);
                if (!e._driver)
                    return void r(u);
                if (t(e._driver))
                    return void r(s);
                for (var f = c.concat("_initStorage"), l = 0; l < f.length; l++) {
                    var v = f[l];
                    if (!v || !e[v] || "function" != typeof e[v])
                        return void r(u)
                }
                var h = o.resolve(!0);
                "_support"in e && (h = e._support && "function" == typeof e._support ? e._support() : o.resolve(!!e._support)),
                h.then(function(t) {
                    d[a] = t,
                    i[a] = e,
                    n()
                }, r)
            } catch (y) {
                r(y)
            }
        }
        );
        return a.then(n, r),
        a
    }
    ,
    r.prototype.driver = function() {
        return this._driver || null
    }
    ,
    r.prototype.ready = function(e) {
        var n = this
          , t = new o(function(e, t) {
            n._driverSet.then(function() {
                null === n._ready && (n._ready = n._initStorage(n._config)),
                n._ready.then(e, t)
            })["catch"](t)
        }
        );
        return t.then(e, e),
        t
    }
    ,
    r.prototype.setDriver = function(e, n, r) {
        function a() {
            u._config.driver = u.driver()
        }
        var u = this;
        return "string" == typeof e && (e = [e]),
        this._driverSet = new o(function(n, r) {
            var a = u._getFirstSupportedDriver(e)
              , c = new Error("No available storage method found.");
            if (!a)
                return u._driverSet = o.reject(c),
                void r(c);
            if (u._dbInfo = null,
            u._ready = null,
            t(a)) {
                var f = new o(function(e) {
                    if (l === s.DEFINE)
                        require([a], e);
                    else if (l === s.EXPORT)
                        switch (a) {
                        case u.INDEXEDDB:
                            e(require("./drivers/indexeddb"));
                            break;
                        case u.LOCALSTORAGE:
                            e(require("./drivers/localstorage"));
                            break;
                        case u.WEBSQL:
                            e(require("./drivers/websql"))
                        }
                    else
                        e(h[a])
                }
                );
                f.then(function(e) {
                    u._extend(e),
                    n()
                })
            } else
                i[a] ? (u._extend(i[a]),
                n()) : (u._driverSet = o.reject(c),
                r(c))
        }
        ),
        this._driverSet.then(a, a),
        this._driverSet.then(n, r),
        this._driverSet
    }
    ,
    r.prototype.supports = function(e) {
        return !!d[e]
    }
    ,
    r.prototype._extend = function(e) {
        n(this, e)
    }
    ,
    r.prototype._getFirstSupportedDriver = function(e) {
        if (e && v(e))
            for (var n = 0; n < e.length; n++) {
                var t = e[n];
                if (this.supports(t))
                    return t
            }
        return null
    }
    ,
    r.prototype.createInstance = function(e) {
        return new r(e)
    }
    ;
    var y = new r;
    l === s.DEFINE ? define("localforage", function() {
        return y
    }) : l === s.EXPORT ? module.exports = y : this.localforage = y
}
.call(window);
var saveAs = saveAs || function(e) {
    "use strict";
    if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
        var t = e.document
          , n = function() {
            return e.URL || e.webkitURL || e
        }
          , o = t.createElementNS("http://www.w3.org/1999/xhtml", "a")
          , r = "download"in o
          , i = function(n) {
            var o = t.createEvent("MouseEvents");
            o.initMouseEvent("click", !0, !1, e, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
            n.dispatchEvent(o)
        }
          , a = e.webkitRequestFileSystem
          , c = e.requestFileSystem || a || e.mozRequestFileSystem
          , u = function(t) {
            (e.setImmediate || e.setTimeout)(function() {
                throw t
            }, 0)
        }
          , f = "application/octet-stream"
          , s = 0
          , d = 500
          , l = function(t) {
            var o = function() {
                "string" == typeof t ? n().revokeObjectURL(t) : t.remove()
            };
            e.chrome ? o() : setTimeout(o, d)
        }
          , v = function(e, t, n) {
            t = [].concat(t);
            for (var o = t.length; o--; ) {
                var r = e["on" + t[o]];
                if ("function" == typeof r)
                    try {
                        r.call(e, n || e)
                    } catch (i) {
                        u(i)
                    }
            }
        }
          , p = function(e) {
            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e],{
                type: e.type
            }) : e
        }
          , w = function(t, u) {
            t = p(t);
            var d, w, y, m = this, S = t.type, h = !1, O = function() {
                v(m, "writestart progress write writeend".split(" "))
            }, E = function() {
                if ((h || !d) && (d = n().createObjectURL(t)),
                w)
                    w.location.href = d;
                else {
                    var o = e.open(d, "_blank");
                    void 0 == o && "undefined" != typeof safari && (e.location.href = d)
                }
                m.readyState = m.DONE,
                O(),
                l(d)
            }, R = function(e) {
                return function() {
                    return m.readyState !== m.DONE ? e.apply(this, arguments) : void 0
                }
            }, b = {
                create: !0,
                exclusive: !1
            };
            return m.readyState = m.INIT,
            u || (u = "download"),
            r ? (d = n().createObjectURL(t),
            o.href = d,
            o.download = u,
            i(o),
            m.readyState = m.DONE,
            O(),
            void l(d)) : (e.chrome && S && S !== f && (y = t.slice || t.webkitSlice,
            t = y.call(t, 0, t.size, f),
            h = !0),
            a && "download" !== u && (u += ".download"),
            (S === f || a) && (w = e),
            c ? (s += t.size,
            void c(e.TEMPORARY, s, R(function(e) {
                e.root.getDirectory("saved", b, R(function(e) {
                    var n = function() {
                        e.getFile(u, b, R(function(e) {
                            e.createWriter(R(function(n) {
                                n.onwriteend = function(t) {
                                    w.location.href = e.toURL(),
                                    m.readyState = m.DONE,
                                    v(m, "writeend", t),
                                    l(e)
                                }
                                ,
                                n.onerror = function() {
                                    var e = n.error;
                                    e.code !== e.ABORT_ERR && E()
                                }
                                ,
                                "writestart progress write abort".split(" ").forEach(function(e) {
                                    n["on" + e] = m["on" + e]
                                }),
                                n.write(t),
                                m.abort = function() {
                                    n.abort(),
                                    m.readyState = m.DONE
                                }
                                ,
                                m.readyState = m.WRITING
                            }), E)
                        }), E)
                    };
                    e.getFile(u, {
                        create: !1
                    }, R(function(e) {
                        e.remove(),
                        n()
                    }), R(function(e) {
                        e.code === e.NOT_FOUND_ERR ? n() : E()
                    }))
                }), E)
            }), E)) : void E())
        }
          , y = w.prototype
          , m = function(e, t) {
            return new w(e,t)
        };
        return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t) {
            return navigator.msSaveOrOpenBlob(p(e), t)
        }
        : (y.abort = function() {
            var e = this;
            e.readyState = e.DONE,
            v(e, "abort")
        }
        ,
        y.readyState = y.INIT = 0,
        y.WRITING = 1,
        y.DONE = 2,
        y.error = y.onwritestart = y.onprogress = y.onwrite = y.onabort = y.onerror = y.onwriteend = null,
        m)
    }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
"undefined" != typeof module && module.exports ? module.exports.saveAs = saveAs : "undefined" != typeof define && null !== define && null != define.amd && define([], function() {
    return saveAs
});
!function() {
    var e = {}
      , o = null
      , n = !0
      , t = !1;
    try {
        "undefined" != typeof AudioContext ? o = new AudioContext : "undefined" != typeof webkitAudioContext ? o = new webkitAudioContext : n = !1
    } catch (r) {
        n = !1
    }
    if (!n)
        if ("undefined" != typeof Audio)
            try {
                new Audio
            } catch (r) {
                t = !0
            }
        else
            t = !0;
    if (n) {
        var a = "undefined" == typeof o.createGain ? o.createGainNode() : o.createGain();
        a.gain.value = 1,
        a.connect(o.destination)
    }
    var i = function(e) {
        this._volume = 1,
        this._muted = !1,
        this.usingWebAudio = n,
        this.ctx = o,
        this.noAudio = t,
        this._howls = [],
        this._codecs = e,
        this.iOSAutoEnable = !0
    };
    i.prototype = {
        volume: function(e) {
            var o = this;
            if (e = parseFloat(e),
            e >= 0 && 1 >= e) {
                o._volume = e,
                n && (a.gain.value = e);
                for (var t in o._howls)
                    if (o._howls.hasOwnProperty(t) && o._howls[t]._webAudio === !1)
                        for (var r = 0; r < o._howls[t]._audioNode.length; r++)
                            o._howls[t]._audioNode[r].volume = o._howls[t]._volume * o._volume;
                return o
            }
            return n ? a.gain.value : o._volume
        },
        mute: function() {
            return this._setMuted(!0),
            this
        },
        unmute: function() {
            return this._setMuted(!1),
            this
        },
        _setMuted: function(e) {
            var o = this;
            o._muted = e,
            n && (a.gain.value = e ? 0 : o._volume);
            for (var t in o._howls)
                if (o._howls.hasOwnProperty(t) && o._howls[t]._webAudio === !1)
                    for (var r = 0; r < o._howls[t]._audioNode.length; r++)
                        o._howls[t]._audioNode[r].muted = e
        },
        codecs: function(e) {
            return this._codecs[e]
        },
        _enableiOSAudio: function() {
            var e = this;
            if (!o || !e._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                e._iOSEnabled = !1;
                var n = function() {
                    var t = o.createBuffer(1, 1, 22050)
                      , r = o.createBufferSource();
                    r.buffer = t,
                    r.connect(o.destination),
                    "undefined" == typeof r.start ? r.noteOn(0) : r.start(0),
                    setTimeout(function() {
                        (r.playbackState === r.PLAYING_STATE || r.playbackState === r.FINISHED_STATE) && (e._iOSEnabled = !0,
                        e.iOSAutoEnable = !1,
                        window.removeEventListener("touchstart", n, !1))
                    }, 0)
                };
                return window.addEventListener("touchstart", n, !1),
                e
            }
        }
    };
    var u = null
      , d = {};
    t || (u = new Audio,
    d = {
        mp3: !!u.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!u.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
        aac: !!u.canPlayType("audio/aac;").replace(/^no$/, ""),
        m4a: !!(u.canPlayType("audio/x-m4a;") || u.canPlayType("audio/m4a;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(u.canPlayType("audio/x-mp4;") || u.canPlayType("audio/mp4;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    });
    var l = new i(d)
      , f = function(e) {
        var t = this;
        t._autoplay = e.autoplay || !1,
        t._buffer = e.buffer || !1,
        t._duration = e.duration || 0,
        t._format = e.format || null,
        t._loop = e.loop || !1,
        t._loaded = !1,
        t._sprite = e.sprite || {},
        t._src = e.src || "",
        t._pos3d = e.pos3d || [0, 0, -.5],
        t._volume = void 0 !== e.volume ? e.volume : 1,
        t._urls = e.urls || [],
        t._rate = e.rate || 1,
        t._model = e.model || null,
        t._onload = [e.onload || function() {}
        ],
        t._onloaderror = [e.onloaderror || function() {}
        ],
        t._onend = [e.onend || function() {}
        ],
        t._onpause = [e.onpause || function() {}
        ],
        t._onplay = [e.onplay || function() {}
        ],
        t._onendTimer = [],
        t._webAudio = n && !t._buffer,
        t._audioNode = [],
        t._webAudio && t._setupAudioNode(),
        "undefined" != typeof o && o && l.iOSAutoEnable && l._enableiOSAudio(),
        l._howls.push(t),
        t.load()
    };
    if (f.prototype = {
        load: function() {
            var e = this
              , o = null;
            if (t)
                return void e.on("loaderror");
            for (var n = 0; n < e._urls.length; n++) {
                var r, a;
                if (e._format)
                    r = e._format;
                else {
                    if (a = e._urls[n],
                    r = /^data:audio\/([^;,]+);/i.exec(a),
                    r || (r = /\.([^.]+)$/.exec(a.split("?", 1)[0])),
                    !r)
                        return void e.on("loaderror");
                    r = r[1].toLowerCase()
                }
                if (d[r]) {
                    o = e._urls[n];
                    break
                }
            }
            if (!o)
                return void e.on("loaderror");
            if (e._src = o,
            e._webAudio)
                _(e, o);
            else {
                var u = new Audio;
                u.addEventListener("error", function() {
                    u.error && 4 === u.error.code && (i.noAudio = !0),
                    e.on("loaderror", {
                        type: u.error ? u.error.code : 0
                    })
                }, !1),
                e._audioNode.push(u),
                u.src = o,
                u._pos = 0,
                u.preload = "auto",
                u.volume = l._muted ? 0 : e._volume * l.volume();
                var f = function() {
                    e._duration = Math.ceil(10 * u.duration) / 10,
                    0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {
                        _default: [0, 1e3 * e._duration]
                    }),
                    e._loaded || (e._loaded = !0,
                    e.on("load")),
                    e._autoplay && e.play(),
                    u.removeEventListener("canplaythrough", f, !1)
                };
                u.addEventListener("canplaythrough", f, !1),
                u.load()
            }
            return e
        },
        urls: function(e) {
            var o = this;
            return e ? (o.stop(),
            o._urls = "string" == typeof e ? [e] : e,
            o._loaded = !1,
            o.load(),
            o) : o._urls
        },
        play: function(e, n) {
            var t = this;
            return "function" == typeof e && (n = e),
            e && "function" != typeof e || (e = "_default"),
            t._loaded ? t._sprite[e] ? (t._inactiveNode(function(r) {
                r._sprite = e;
                var a = r._pos > 0 ? r._pos : t._sprite[e][0] / 1e3
                  , i = 0;
                t._webAudio ? (i = t._sprite[e][1] / 1e3 - r._pos,
                r._pos > 0 && (a = t._sprite[e][0] / 1e3 + a)) : i = t._sprite[e][1] / 1e3 - (a - t._sprite[e][0] / 1e3);
                var u, d = !(!t._loop && !t._sprite[e][2]), f = "string" == typeof n ? n : Math.round(Date.now() * Math.random()) + "";
                if (function() {
                    var o = {
                        id: f,
                        sprite: e,
                        loop: d
                    };
                    u = setTimeout(function() {
                        !t._webAudio && d && t.stop(o.id).play(e, o.id),
                        t._webAudio && !d && (t._nodeById(o.id).paused = !0,
                        t._nodeById(o.id)._pos = 0,
                        t._clearEndTimer(o.id)),
                        t._webAudio || d || t.stop(o.id),
                        t.on("end", f)
                    }, 1e3 * i),
                    t._onendTimer.push({
                        timer: u,
                        id: o.id
                    })
                }(),
                t._webAudio) {
                    var _ = t._sprite[e][0] / 1e3
                      , s = t._sprite[e][1] / 1e3;
                    r.id = f,
                    r.paused = !1,
                    p(t, [d, _, s], f),
                    t._playStart = o.currentTime,
                    r.gain.value = t._volume,
                    "undefined" == typeof r.bufferSource.start ? d ? r.bufferSource.noteGrainOn(0, a, 86400) : r.bufferSource.noteGrainOn(0, a, i) : d ? r.bufferSource.start(0, a, 86400) : r.bufferSource.start(0, a, i)
                } else {
                    if (4 !== r.readyState && (r.readyState || !navigator.isCocoonJS))
                        return t._clearEndTimer(f),
                        function() {
                            var o = t
                              , a = e
                              , i = n
                              , u = r
                              , d = function() {
                                o.play(a, i),
                                u.removeEventListener("canplaythrough", d, !1)
                            };
                            u.addEventListener("canplaythrough", d, !1)
                        }(),
                        t;
                    r.readyState = 4,
                    r.id = f,
                    r.currentTime = a,
                    r.muted = l._muted || r.muted,
                    r.volume = t._volume * l.volume(),
                    setTimeout(function() {
                        r.play()
                    }, 0)
                }
                return t.on("play"),
                "function" == typeof n && n(f),
                t
            }),
            t) : ("function" == typeof n && n(),
            t) : (t.on("load", function() {
                t.play(e, n)
            }),
            t)
        },
        pause: function(e) {
            var o = this;
            if (!o._loaded)
                return o.on("play", function() {
                    o.pause(e)
                }),
                o;
            o._clearEndTimer(e);
            var n = e ? o._nodeById(e) : o._activeNode();
            if (n)
                if (n._pos = o.pos(null, e),
                o._webAudio) {
                    if (!n.bufferSource || n.paused)
                        return o;
                    n.paused = !0,
                    "undefined" == typeof n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
                } else
                    n.pause();
            return o.on("pause"),
            o
        },
        stop: function(e) {
            var o = this;
            if (!o._loaded)
                return o.on("play", function() {
                    o.stop(e)
                }),
                o;
            o._clearEndTimer(e);
            var n = e ? o._nodeById(e) : o._activeNode();
            if (n)
                if (n._pos = 0,
                o._webAudio) {
                    if (!n.bufferSource || n.paused)
                        return o;
                    n.paused = !0,
                    "undefined" == typeof n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
                } else
                    isNaN(n.duration) || (n.pause(),
                    n.currentTime = 0);
            return o
        },
        mute: function(e) {
            var o = this;
            if (!o._loaded)
                return o.on("play", function() {
                    o.mute(e)
                }),
                o;
            var n = e ? o._nodeById(e) : o._activeNode();
            return n && (o._webAudio ? n.gain.value = 0 : n.muted = !0),
            o
        },
        unmute: function(e) {
            var o = this;
            if (!o._loaded)
                return o.on("play", function() {
                    o.unmute(e)
                }),
                o;
            var n = e ? o._nodeById(e) : o._activeNode();
            return n && (o._webAudio ? n.gain.value = o._volume : n.muted = !1),
            o
        },
        volume: function(e, o) {
            var n = this;
            if (e = parseFloat(e),
            e >= 0 && 1 >= e) {
                if (n._volume = e,
                !n._loaded)
                    return n.on("play", function() {
                        n.volume(e, o)
                    }),
                    n;
                var t = o ? n._nodeById(o) : n._activeNode();
                return t && (n._webAudio ? t.gain.value = e : t.volume = e * l.volume()),
                n
            }
            return n._volume
        },
        loop: function(e) {
            var o = this;
            return "boolean" == typeof e ? (o._loop = e,
            o) : o._loop
        },
        sprite: function(e) {
            var o = this;
            return "object" == typeof e ? (o._sprite = e,
            o) : o._sprite
        },
        pos: function(e, n) {
            var t = this;
            if (!t._loaded)
                return t.on("load", function() {
                    t.pos(e)
                }),
                "number" == typeof e ? t : t._pos || 0;
            e = parseFloat(e);
            var r = n ? t._nodeById(n) : t._activeNode();
            if (r)
                return e >= 0 ? (t.pause(n),
                r._pos = e,
                t.play(r._sprite, n),
                t) : t._webAudio ? r._pos + (o.currentTime - t._playStart) : r.currentTime;
            if (e >= 0)
                return t;
            for (var a = 0; a < t._audioNode.length; a++)
                if (t._audioNode[a].paused && 4 === t._audioNode[a].readyState)
                    return t._webAudio ? t._audioNode[a]._pos : t._audioNode[a].currentTime
        },
        pos3d: function(e, o, n, t) {
            var r = this;
            if (o = "undefined" != typeof o && o ? o : 0,
            n = "undefined" != typeof n && n ? n : -.5,
            !r._loaded)
                return r.on("play", function() {
                    r.pos3d(e, o, n, t)
                }),
                r;
            if (!(e >= 0 || 0 > e))
                return r._pos3d;
            if (r._webAudio) {
                var a = t ? r._nodeById(t) : r._activeNode();
                a && (r._pos3d = [e, o, n],
                a.panner.setPosition(e, o, n),
                a.panner.panningModel = r._model || "HRTF")
            }
            return r
        },
        fade: function(e, o, n, t, r) {
            var a = this
              , i = Math.abs(e - o)
              , u = e > o ? "down" : "up"
              , d = i / .01
              , l = n / d;
            if (!a._loaded)
                return a.on("load", function() {
                    a.fade(e, o, n, t, r)
                }),
                a;
            a.volume(e, r);
            for (var f = 1; d >= f; f++)
                !function() {
                    var e = a._volume + ("up" === u ? .01 : -.01) * f
                      , n = Math.round(1e3 * e) / 1e3
                      , i = o;
                    setTimeout(function() {
                        a.volume(n, r),
                        n === i && t && t()
                    }, l * f)
                }()
        },
        fadeIn: function(e, o, n) {
            return this.volume(0).play().fade(0, e, o, n)
        },
        fadeOut: function(e, o, n, t) {
            var r = this;
            return r.fade(r._volume, e, o, function() {
                n && n(),
                r.pause(t),
                r.on("end")
            }, t)
        },
        _nodeById: function(e) {
            for (var o = this, n = o._audioNode[0], t = 0; t < o._audioNode.length; t++)
                if (o._audioNode[t].id === e) {
                    n = o._audioNode[t];
                    break
                }
            return n
        },
        _activeNode: function() {
            for (var e = this, o = null, n = 0; n < e._audioNode.length; n++)
                if (!e._audioNode[n].paused) {
                    o = e._audioNode[n];
                    break
                }
            return e._drainPool(),
            o
        },
        _inactiveNode: function(e) {
            for (var o = this, n = null, t = 0; t < o._audioNode.length; t++)
                if (o._audioNode[t].paused && 4 === o._audioNode[t].readyState) {
                    e(o._audioNode[t]),
                    n = !0;
                    break
                }
            if (o._drainPool(),
            !n) {
                var r;
                if (o._webAudio)
                    r = o._setupAudioNode(),
                    e(r);
                else {
                    o.load(),
                    r = o._audioNode[o._audioNode.length - 1];
                    var a = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata"
                      , i = function() {
                        r.removeEventListener(a, i, !1),
                        e(r)
                    };
                    r.addEventListener(a, i, !1)
                }
            }
        },
        _drainPool: function() {
            var e, o = this, n = 0;
            for (e = 0; e < o._audioNode.length; e++)
                o._audioNode[e].paused && n++;
            for (e = o._audioNode.length - 1; e >= 0 && !(5 >= n); e--)
                o._audioNode[e].paused && (o._webAudio && o._audioNode[e].disconnect(0),
                n--,
                o._audioNode.splice(e, 1))
        },
        _clearEndTimer: function(e) {
            for (var o = this, n = 0, t = 0; t < o._onendTimer.length; t++)
                if (o._onendTimer[t].id === e) {
                    n = t;
                    break
                }
            var r = o._onendTimer[n];
            r && (clearTimeout(r.timer),
            o._onendTimer.splice(n, 1))
        },
        _setupAudioNode: function() {
            var e = this
              , n = e._audioNode
              , t = e._audioNode.length;
            return n[t] = "undefined" == typeof o.createGain ? o.createGainNode() : o.createGain(),
            n[t].gain.value = e._volume,
            n[t].paused = !0,
            n[t]._pos = 0,
            n[t].readyState = 4,
            n[t].connect(a),
            n[t].panner = o.createPanner(),
            n[t].panner.panningModel = e._model || "equalpower",
            n[t].panner.setPosition(e._pos3d[0], e._pos3d[1], e._pos3d[2]),
            n[t].panner.connect(n[t]),
            n[t]
        },
        on: function(e, o) {
            var n = this
              , t = n["_on" + e];
            if ("function" == typeof o)
                t.push(o);
            else
                for (var r = 0; r < t.length; r++)
                    o ? t[r].call(n, o) : t[r].call(n);
            return n
        },
        off: function(e, o) {
            var n = this
              , t = n["_on" + e]
              , r = o ? o.toString() : null;
            if (r) {
                for (var a = 0; a < t.length; a++)
                    if (r === t[a].toString()) {
                        t.splice(a, 1);
                        break
                    }
            } else
                n["_on" + e] = [];
            return n
        },
        unload: function() {
            for (var o = this, n = o._audioNode, t = 0; t < o._audioNode.length; t++)
                n[t].paused || (o.stop(n[t].id),
                o.on("end", n[t].id)),
                o._webAudio ? n[t].disconnect(0) : n[t].src = "";
            for (t = 0; t < o._onendTimer.length; t++)
                clearTimeout(o._onendTimer[t].timer);
            var r = l._howls.indexOf(o);
            null !== r && r >= 0 && l._howls.splice(r, 1),
            delete e[o._src],
            o = null
        }
    },
    n)
        var _ = function(o, n) {
            if (n in e)
                return o._duration = e[n].duration,
                void c(o);
            if (/^data:[^;]+;base64,/.test(n)) {
                for (var t = atob(n.split(",")[1]), r = new Uint8Array(t.length), a = 0; a < t.length; ++a)
                    r[a] = t.charCodeAt(a);
                s(r.buffer, o, n)
            } else {
                var i = new XMLHttpRequest;
                i.open("GET", n, !0),
                i.responseType = "arraybuffer",
                i.onload = function() {
                    s(i.response, o, n)
                }
                ,
                i.onerror = function() {
                    o._webAudio && (o._buffer = !0,
                    o._webAudio = !1,
                    o._audioNode = [],
                    delete o._gainNode,
                    delete e[n],
                    o.load())
                }
                ;
                try {
                    i.send()
                } catch (u) {
                    i.onerror()
                }
            }
        }
          , s = function(n, t, r) {
            o.decodeAudioData(n, function(o) {
                o && (e[r] = o,
                c(t, o))
            }, function(e) {
                t.on("loaderror")
            })
        }
          , c = function(e, o) {
            e._duration = o ? o.duration : e._duration,
            0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {
                _default: [0, 1e3 * e._duration]
            }),
            e._loaded || (e._loaded = !0,
            e.on("load")),
            e._autoplay && e.play()
        }
          , p = function(n, t, r) {
            var a = n._nodeById(r);
            a.bufferSource = o.createBufferSource(),
            a.bufferSource.buffer = e[n._src],
            a.bufferSource.connect(a.panner),
            a.bufferSource.loop = t[0],
            t[0] && (a.bufferSource.loopStart = t[1],
            a.bufferSource.loopEnd = t[1] + t[2]),
            a.bufferSource.playbackRate.value = n._rate
        };
    "function" == typeof define && define.amd && define(function() {
        return {
            Howler: l,
            Howl: f
        }
    }),
    "undefined" != typeof exports && (exports.Howler = l,
    exports.Howl = f),
    "undefined" != typeof window && (window.Howler = l,
    window.Howl = f)
}();
(function() {
    "use strict";
    function e(e) {
        return e = String(e),
        e.charAt(0).toUpperCase() + e.slice(1)
    }
    function t(e, t, i) {
        var r = {
            6.4: "10",
            6.3: "8.1",
            6.2: "8",
            6.1: "Server 2008 R2 / 7",
            "6.0": "Server 2008 / Vista",
            5.2: "Server 2003 / XP 64-bit",
            5.1: "XP",
            5.01: "2000 SP1",
            "5.0": "2000",
            "4.0": "NT",
            "4.90": "ME"
        };
        return t && i && /^Win/i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r),
        e = String(e),
        t && i && (e = e.replace(RegExp(t, "i"), i)),
        e = n(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").split(" on ")[0])
    }
    function i(e, t) {
        var i = -1
          , n = e ? e.length : 0;
        if ("number" == typeof n && n > -1 && h >= n)
            for (; ++i < n; )
                t(e[i], i, e);
        else
            r(e, t)
    }
    function n(t) {
        return t = s(t),
        /^(?:webOS|i(?:OS|P))/.test(t) ? t : e(t)
    }
    function r(e, t) {
        for (var i in e)
            O.call(e, i) && t(e[i], i, e)
    }
    function o(t) {
        return null == t ? e(t) : M.call(t).slice(8, -1)
    }
    function a(e, t) {
        var i = null != e ? typeof e[t] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(i) && ("object" == i ? !!e[t] : !0)
    }
    function l(e) {
        return String(e).replace(/([ -])(?!$)/g, "$1?")
    }
    function b(e, t) {
        var n = null;
        return i(e, function(i, r) {
            n = t(n, i, r, e)
        }),
        n
    }
    function s(e) {
        return String(e).replace(/^ +| +$/g, "")
    }
    function c(e) {
        function i(t) {
            return b(t, function(t, i) {
                return t || RegExp("\\b" + (i.pattern || l(i)) + "\\b", "i").exec(e) && (i.label || i)
            })
        }
        function p(t) {
            return b(t, function(t, i, n) {
                return t || (i[q] || i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(q)] || RegExp("\\b" + l(n) + "(?:\\b|\\w*\\d)", "i").exec(e)) && n
            })
        }
        function f(t) {
            return b(t, function(t, i) {
                return t || RegExp("\\b" + (i.pattern || l(i)) + "\\b", "i").exec(e) && (i.label || i)
            })
        }
        function S(i) {
            return b(i, function(i, n) {
                var r = n.pattern || l(n);
                return !i && (i = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (i = t(i, r, n.label || n)),
                i
            })
        }
        function x(t) {
            return b(t, function(t, i) {
                var r = i.pattern || l(i);
                return !t && (t = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(i.label && !RegExp(r, "i").test(i.label) ? i.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]),
                i = i.label || i,
                t = n(t[0].replace(RegExp(r, "i"), i).replace(RegExp("; *(?:" + i + "[_-])?", "i"), " ").replace(RegExp("(" + i + ")[-_.]?(\\w)", "i"), "$1 $2"))),
                t
            })
        }
        function h(t) {
            return b(t, function(t, i) {
                return t || (RegExp(i + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
            })
        }
        function y() {
            return this.description || ""
        }
        var O = u
          , P = e && "object" == typeof e && "String" != o(e);
        P && (O = e,
        e = null);
        var v = O.navigator || {}
          , w = v.userAgent || "";
        e || (e = w);
        var E, k, W = P || g == d, B = P ? !!v.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(M.toString()), I = "Object", A = P ? I : "ScriptBridgingProxyObject", C = P ? I : "Environment", R = P && O.java ? "JavaPackage" : o(O.java), T = P ? I : "RuntimeObject", $ = /\bJava/.test(R) && O.java, F = $ && o(O.environment) == C, G = $ ? "a" : "α", X = $ ? "b" : "β", j = O.document || {}, K = O.operamini || O.opera, N = m.test(N = P && K ? K["[[Class]]"] : o(K)) ? N : K = null, _ = e, z = [], V = null, L = e == w, D = L && K && "function" == typeof K.version && K.version(), H = i(["Trident", {
            label: "WebKit",
            pattern: "AppleWebKit"
        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]), U = f(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", {
            label: "SRWare Iron",
            pattern: "Iron"
        }, "K-Meleon", "Konqueror", "Lunascape", "Maxthon", "Midori", "Nook Browser", "PhantomJS", "Raven", "Rekonq", "RockMelt", "SeaMonkey", {
            label: "Silk",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Sleipnir", "SlimBrowser", "Sunrise", "Swiftfox", "WebPositive", "Opera Mini", {
            label: "Opera Mini",
            pattern: "OPiOS"
        }, "Opera", {
            label: "Opera",
            pattern: "OPR"
        }, "Chrome", {
            label: "Chrome Mobile",
            pattern: "(?:CriOS|CrMo)"
        }, {
            label: "Firefox",
            pattern: "(?:Firefox|Minefield)"
        }, {
            label: "IE",
            pattern: "IEMobile"
        }, {
            label: "IE",
            pattern: "MSIE"
        }, "Safari"]), q = x([{
            label: "BlackBerry",
            pattern: "BB10"
        }, "BlackBerry", {
            label: "Galaxy S",
            pattern: "GT-I9000"
        }, {
            label: "Galaxy S2",
            pattern: "GT-I9100"
        }, {
            label: "Galaxy S3",
            pattern: "GT-I9300"
        }, {
            label: "Galaxy S4",
            pattern: "GT-I9500"
        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
            label: "Kindle Fire",
            pattern: "(?:Cloud9|Silk-Accelerated)"
        }, "Nook", "PlayBook", "PlayStation 4", "PlayStation 3", "PlayStation Vita", "TouchPad", "Transformer", {
            label: "Wii U",
            pattern: "WiiU"
        }, "Wii", "Xbox One", {
            label: "Xbox 360",
            pattern: "Xbox"
        }, "Xoom"]), J = p({
            Apple: {
                iPad: 1,
                iPhone: 1,
                iPod: 1
            },
            Amazon: {
                Kindle: 1,
                "Kindle Fire": 1
            },
            Asus: {
                Transformer: 1
            },
            "Barnes & Noble": {
                Nook: 1
            },
            BlackBerry: {
                PlayBook: 1
            },
            Google: {
                "Google TV": 1
            },
            HP: {
                TouchPad: 1
            },
            HTC: {},
            LG: {},
            Microsoft: {
                Xbox: 1,
                "Xbox One": 1
            },
            Motorola: {
                Xoom: 1
            },
            Nintendo: {
                "Wii U": 1,
                Wii: 1
            },
            Nokia: {
                Lumia: 1
            },
            Samsung: {
                "Galaxy S": 1,
                "Galaxy S2": 1,
                "Galaxy S3": 1,
                "Galaxy S4": 1
            },
            Sony: {
                "PlayStation 4": 1,
                "PlayStation 3": 1,
                "PlayStation Vita": 1
            }
        }), Z = S(["Windows Phone ", "Android", "CentOS", "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
        if (H && (H = [H]),
        J && !q && (q = x([J])),
        (E = /\bGoogle TV\b/.exec(q)) && (q = E[0]),
        /\bSimulator\b/i.test(e) && (q = (q ? q + " " : "") + "Simulator"),
        "Opera Mini" == U && /\bOPiOS\b/.test(e) && z.push("running in Turbo/Uncompressed mode"),
        /^iP/.test(q) ? (U || (U = "Safari"),
        Z = "iOS" + ((E = / OS ([\d_]+)/i.exec(e)) ? " " + E[1].replace(/_/g, ".") : "")) : "Konqueror" != U || /buntu/i.test(Z) ? J && "Google" != J && (/Chrome/.test(U) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(q)) ? (U = "Android Browser",
        Z = /\bAndroid\b/.test(Z) ? Z : "Android") : (!U || (E = !/\bMinefield\b|\(Android;/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(U))) && (U && !q && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(E + "/") + 8)) && (U = null),
        (E = q || J || Z) && (q || J || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Z)) && (U = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Z) ? Z : E) + " Browser")) : Z = "Kubuntu",
        (E = /\((Mobile|Tablet).*?Firefox\b/i.exec(e)) && E[1] && (Z = "Firefox OS",
        q || (q = E[1])),
        D || (D = h(["(?:Cloud9|CriOS|CrMo|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))", "Version", l(U), "(?:Firefox|Minefield|NetFront)"])),
        "iCab" == H && parseFloat(D) > 3 ? H = ["WebKit"] : "Trident" != H && (E = /\bOpera\b/.test(U) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && "WebKit" || !H && /\bMSIE\b/i.test(e) && ("Mac OS" == Z ? "Tasman" : "Trident")) ? H = [E] : /\bPlayStation\b(?! Vita\b)/i.test(U) && "WebKit" == H && (H = ["NetFront"]),
        "IE" == U && (E = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (U += " Mobile",
        Z = "Windows Phone " + (/\+$/.test(E) ? E : E + ".x"),
        z.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (U = "IE Mobile",
        Z = "Windows Phone 8+",
        z.unshift("desktop mode"),
        D || (D = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != U && "Trident" == H && (E = /\brv:([\d.]+)/.exec(e)) ? (/\bWPDesktop\b/i.test(e) || (U && z.push("identifying as " + U + (D ? " " + D : "")),
        U = "IE"),
        D = E[1]) : "Chrome" != U && "IE" == U || !(E = /\bEdge\/([\d.]+)/.exec(e)) || (U = "IE",
        D = E[1],
        H = ["Trident"],
        z.unshift("platform preview")),
        L) {
            if (a(O, "global"))
                if ($ && (E = $.lang.System,
                _ = E.getProperty("os.arch"),
                Z = Z || E.getProperty("os.name") + " " + E.getProperty("os.version")),
                W && a(O, "system") && (E = [O.system])[0]) {
                    Z || (Z = E[0].os || null);
                    try {
                        E[1] = O.require("ringo/engine").version,
                        D = E[1].join("."),
                        U = "RingoJS"
                    } catch (Q) {
                        E[0].global.system == O.system && (U = "Narwhal")
                    }
                } else
                    "object" == typeof O.process && (E = O.process) ? (U = "Node.js",
                    _ = E.arch,
                    Z = E.platform,
                    D = /[\d.]+/.exec(E.version)[0]) : F && (U = "Rhino");
            else
                o(E = O.runtime) == A ? (U = "Adobe AIR",
                Z = E.flash.system.Capabilities.os) : o(E = O.phantom) == T ? (U = "PhantomJS",
                D = (E = E.version || null) && E.major + "." + E.minor + "." + E.patch) : "number" == typeof j.documentMode && (E = /\bTrident\/(\d+)/i.exec(e)) && (D = [D, j.documentMode],
                (E = +E[1] + 4) != D[1] && (z.push("IE " + D[1] + " mode"),
                H && (H[1] = ""),
                D[1] = E),
                D = "IE" == U ? String(D[1].toFixed(1)) : D[0]);
            Z = Z && n(Z)
        }
        D && (E = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(D) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (L && v.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && (V = /b/i.test(E) ? "beta" : "alpha",
        D = D.replace(RegExp(E + "\\+?$"), "") + ("beta" == V ? X : G) + (/\d+\+?/.exec(E) || "")),
        "Fennec" == U || "Firefox" == U && /\b(?:Android|Firefox OS)\b/.test(Z) ? U = "Firefox Mobile" : "Maxthon" == U && D ? D = D.replace(/\.[\d.]+/, ".x") : "Silk" == U ? (/\bMobi/i.test(e) || (Z = "Android",
        z.unshift("desktop mode")),
        /Accelerated *= *true/i.test(e) && z.unshift("accelerated")) : /\bXbox\b/i.test(q) ? (Z = null,
        "Xbox 360" == q && /\bIEMobile\b/.test(e) && z.unshift("mobile mode")) : !/^(?:Chrome|IE|Opera)$/.test(U) && (!U || q || /Browser|Mobi/.test(U)) || "Windows CE" != Z && !/Mobi/i.test(e) ? "IE" == U && L && null === O.external ? z.unshift("platform preview") : (/\bBlackBerry\b/.test(q) || /\bBB10\b/.test(e)) && (E = (RegExp(q.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || D) ? (E = [E, /BB10/.test(e)],
        Z = (E[1] ? (q = null,
        J = "BlackBerry") : "Device Software") + " " + E[0],
        D = null) : this != r && "Wii" != q && (L && K || /Opera/.test(U) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == U && /\bOS X (?:\d+\.){2,}/.test(Z) || "IE" == U && (Z && !/^Win/.test(Z) && D > 5.5 || /\bWindows XP\b/.test(Z) && D > 8 || 8 == D && !/\bTrident\b/.test(e))) && !m.test(E = c.call(r, e.replace(m, "") + ";")) && E.name && (E = "ing as " + E.name + ((E = E.version) ? " " + E : ""),
        m.test(U) ? (/\bIE\b/.test(E) && "Mac OS" == Z && (Z = null),
        E = "identify" + E) : (E = "mask" + E,
        U = N ? n(N.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
        /\bIE\b/.test(E) && (Z = null),
        L || (D = null)),
        H = ["Presto"],
        z.push(E)) : U += " Mobile",
        (E = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (E = [parseFloat(E.replace(/\.(\d)$/, ".0$1")), E],
        "Safari" == U && "+" == E[1].slice(-1) ? (U = "WebKit Nightly",
        V = "alpha",
        D = E[1].slice(0, -1)) : (D == E[1] || D == (E[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1])) && (D = null),
        E[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1],
        537.36 == E[0] && 537.36 == E[2] && parseFloat(E[1]) >= 28 && "IE" != U && (H = ["Blink"]),
        L && (B || E[1]) ? (H && (H[1] = "like Chrome"),
        E = E[1] || (E = E[0],
        530 > E ? 1 : 532 > E ? 2 : 532.05 > E ? 3 : 533 > E ? 4 : 534.03 > E ? 5 : 534.07 > E ? 6 : 534.1 > E ? 7 : 534.13 > E ? 8 : 534.16 > E ? 9 : 534.24 > E ? 10 : 534.3 > E ? 11 : 535.01 > E ? 12 : 535.02 > E ? "13+" : 535.07 > E ? 15 : 535.11 > E ? 16 : 535.19 > E ? 17 : 536.05 > E ? 18 : 536.1 > E ? 19 : 537.01 > E ? 20 : 537.11 > E ? "21+" : 537.13 > E ? 23 : 537.18 > E ? 24 : 537.24 > E ? 25 : 537.36 > E ? 26 : "Blink" != H ? "27" : "28")) : (H && (H[1] = "like Safari"),
        E = E[0],
        E = 400 > E ? 1 : 500 > E ? 2 : 526 > E ? 3 : 533 > E ? 4 : 534 > E ? "4+" : 535 > E ? 5 : 537 > E ? 6 : 538 > E ? 7 : 601 > E ? 8 : "8"),
        H && (H[1] += " " + (E += "number" == typeof E ? ".x" : /[.+]/.test(E) ? "" : "+")),
        "Safari" == U && (!D || parseInt(D) > 45) && (D = E)),
        "Opera" == U && (E = /\bzbov|zvav$/.exec(Z)) ? (U += " ",
        z.unshift("desktop mode"),
        "zvav" == E ? (U += "Mini",
        D = null) : U += "Mobile",
        Z = Z.replace(RegExp(" *" + E + "$"), "")) : "Safari" == U && /\bChrome\b/.exec(H && H[1]) && (z.unshift("desktop mode"),
        U = "Chrome Mobile",
        D = null,
        /\bOS X\b/.test(Z) ? (J = "Apple",
        Z = "iOS 4.3+") : Z = null),
        D && 0 == D.indexOf(E = /[\d.]+$/.exec(Z)) && e.indexOf("/" + E + "-") > -1 && (Z = s(Z.replace(E, ""))),
        H && !/\b(?:Avant|Nook)\b/.test(U) && (/Browser|Lunascape|Maxthon/.test(U) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(U) && H[1]) && (E = H[H.length - 1]) && z.push(E),
        z.length && (z = ["(" + z.join("; ") + ")"]),
        J && q && q.indexOf(J) < 0 && z.push("on " + J),
        q && z.push((/^on /.test(z[z.length - 1]) ? "" : "on ") + q),
        Z && (E = / ([\d.+]+)$/.exec(Z),
        k = E && "/" == Z.charAt(Z.length - E[0].length - 1),
        Z = {
            architecture: 32,
            family: E && !k ? Z.replace(E[0], "") : Z,
            version: E ? E[1] : null,
            toString: function() {
                var e = this.version;
                return this.family + (e && !k ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
            }
        }),
        (E = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(_)) && !/\bi686\b/i.test(_) && (Z && (Z.architecture = 64,
        Z.family = Z.family.replace(RegExp(" *" + E), "")),
        U && (/\bWOW64\b/i.test(e) || L && /\w(?:86|32)$/.test(v.cpuClass || v.platform) && !/\bWin64; x64\b/i.test(e)) && z.unshift("32-bit")),
        e || (e = null);
        var Y = {};
        return Y.description = e,
        Y.layout = H && H[0],
        Y.manufacturer = J,
        Y.name = U,
        Y.prerelease = V,
        Y.product = q,
        Y.ua = e,
        Y.version = U && D,
        Y.os = Z || {
            architecture: null,
            family: null,
            version: null,
            toString: function() {
                return "null"
            }
        },
        Y.parse = c,
        Y.toString = y,
        Y.version && z.unshift(D),
        Y.name && z.unshift(U),
        Z && U && (Z != String(Z).split(" ")[0] || Z != U.split(" ")[0] && !q) && z.push(q ? "(" + Z + ")" : "on " + Z),
        z.length && (Y.description = z.join(" ")),
        Y
    }
    var p = {
        "function": !0,
        object: !0
    }
      , u = p[typeof window] && window || this
      , d = u
      , f = p[typeof exports] && exports
      , S = p[typeof module] && module && !module.nodeType && module
      , x = f && S && "object" == typeof global && global;
    !x || x.global !== x && x.window !== x && x.self !== x || (u = x);
    var h = Math.pow(2, 53) - 1
      , m = /\bOpera/
      , g = this
      , y = Object.prototype
      , O = y.hasOwnProperty
      , M = y.toString;
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return c()
    }) : f && S ? r(c(), function(e, t) {
        f[t] = e
    }) : u.platform = c()
}
).call(this);
function $noop() {}
!function(n) {
    "use strict";
    function t(n) {
        return U.call(n).slice(8, -1)
    }
    function r(n) {
        return "object" == typeof n && "number" == typeof n.length || !1
    }
    function e(n) {
        return "string" == typeof n || !1
    }
    function i(n) {
        return "function" == typeof n || !1
    }
    function o(n) {
        return !n || "object" == typeof n && null !== n ? "[object Object]" == U.call(n) : !1
    }
    function u(n) {
        return "number" == typeof n && isFinite(n) || !1
    }
    function c(n) {
        return n && "object" == typeof n && "[object RegExp]" == U.call(n) || !1
    }
    function a(n) {
        return n && "number" == typeof n.length && "[object Arguments]" == U.call(n) || !1
    }
    function f(n) {
        return i(n) && ("" + n).indexOf("[native code]") >= 0
    }
    function s(n) {
        return n && "object" == typeof n && "[object Error]" == U.call(n) || !1
    }
    function l(n) {
        var t;
        return n && (t = n.constructor) && "function" == typeof t && t.prototype == n
    }
    function p(n) {
        return n && 1 === n.nodeType || !1
    }
    function g(n) {
        return "[object Number]" == U.call(n) && n != +n
    }
    function h(n) {
        return "[object Number]" == U.call(n) && !isFinite(n)
    }
    function y(n) {
        var t = U.call(n);
        return "[object global]" == t || "[object Window]" == t || "[object DOMWindow]" == t
    }
    function m(n) {
        var t = U.call(n);
        return "[object HTMLDocument]" == t || "[object Document]" == t
    }
    function b(n) {
        var t = U.call(n);
        return "object" == typeof n && ("[object HTMLCollection]" == t || "[object NodeList]" == t || "[object Object]" == t && n.hasOwnProperty("length") && (0 === n.length || "object" == typeof n[0] && n[0].nodeType > 0))
    }
    function v(n) {
        var t = !1;
        return e(n) || u(n) || "boolean" == typeof n || null === n || void 0 === n ? t = !0 : z(n) ? R(n, function(n) {
            return t = v(n)
        }) : o(n) && x(n, function(n) {
            return t = v(n)
        }),
        t
    }
    function j(n) {
        var t = typeof n;
        return "string" == t ? "String" : "boolean" == t ? "Boolean" : "function" == t ? "Function" : null === n ? "Null" : void 0 === n ? "Undefined" : u(n) ? "Number" : g(n) ? "NaN" : p(n) ? "Element" : z(n) ? "Array" : a(n) ? "Arguments" : h(n) ? "Infinity" : s(n) ? "Error" : b(n) ? "NodeList" : y(n) ? "Window" : m(n) ? "Document" : n.constructor.name || U.call(n).slice(8, -1)
    }
    function d(n, t) {
        return typeof n == typeof n && n + "" == t + "" ? !0 : void 0
    }
    function O(n) {
        return n ? Object.keys(n) : []
    }
    function w(n, t) {
        var e, i, u;
        for (e in n) {
            if (i = n[e],
            u = t[e],
            n.hasOwnProperty(e) != t.hasOwnProperty(e))
                return !1;
            if (typeof i != typeof u)
                return !1
        }
        for (e in t) {
            if (i = n[e],
            u = t[e],
            !n.hasOwnProperty(e))
                return !1;
            if (i !== u) {
                if (typeof i != typeof u)
                    return !1;
                if (t.hasOwnProperty(e) && !(r(i) && r(u) && S(i, u) || o(i) && o(u) && w(i, u) || d(i, u)))
                    return !1
            }
        }
        return !0
    }
    function A(n, t) {
        var r;
        for (r in n)
            n.hasOwnProperty(r) && t(n[r], r)
    }
    function x(n, t) {
        var r;
        for (r in n)
            if (n.hasOwnProperty(r) && t(n[r], r) === !1)
                break
    }
    function E(n) {
        try {
            return JSON.stringify(n, null, 2)
        } catch (t) {
            try {
                var r = [];
                return $io.arr.all(n, function(n) {
                    r.push(n)
                }),
                "[" + r.join(", ") + "]"
            } catch (e) {
                return "[Error]"
            }
        }
    }
    function N(n, t, r) {
        var e = function(n) {
            return !1
        }
          , i = {};
        return function u(n, r) {
            for (var c, a, f = 0, s = Object.keys(n), l = s.length; l > f; f++)
                c = s[f],
                a = n[c],
                !o(a) || e(a) ? i[r + c] = a : u(a, r + c + (t || "."))
        }(n, ""),
        i
    }
    function P(n, t, r) {
        if ("string" == typeof t) {
            if (r = r || ".",
            !t || t === r)
                return n;
            var e = 0
              , i = $io.reg.escape(r)
              , o = new RegExp("^" + i + "|" + i + "$","gi");
            for (t = t.replace(o, "").split(r); n && e < t.length; )
                n = n[t[e++]];
            return n
        }
        if (c(t)) {
            var u = N(n, r)
              , a = {};
            return $io.arr.all(Object.keys(u), function(n) {
                t.test(n) && (a[n] = u[n])
            }),
            a
        }
    }
    function $(n, t, r) {
        var e = "string" == typeof this ? this : ".";
        if (!t || t === e)
            return n;
        var i = 0
          , o = $io.reg.escape(e)
          , u = new RegExp("^" + o + "|" + o + "$","gi");
        for (t = t.replace(u, "").split(e); n && i < t.length; )
            n = void 0 !== n[t[i]] ? i === t.length - 1 && arguments.length > 2 ? n[t[i]] = r : n[t[i]] : arguments.length > 2 ? n[t[i]] = i === t.length - 1 ? r : {} : void 0,
            i++;
        return n
    }
    function S(n, t) {
        var e, i, u = n.length;
        if (u != t.length)
            return !1;
        for (; u--; )
            if (e = n[u],
            i = t[u],
            e !== i && !(r(e) && r(i) && S(e, i) || o(e) && o(i) && w(e, i) || d(e, i)))
                return !1;
        return !0
    }
    function M(n, t) {
        if (n)
            for (var r = -1, e = n.length; ++r < e; )
                t(n[r])
    }
    function R(n, t) {
        if (n)
            for (var r = -1, e = n.length; ++r < e && t(n[r], r, n) !== !1; )
                ;
    }
    function D(n, t, r) {
        for (var e = r, i = 0, o = n.length; o > i; i++)
            e = t(e, n[i], i, n);
        return e
    }
    function L(n) {
        return n[Math.floor(Math.random() * n.length)]
    }
    function F(n, t, r) {
        return n.splice.apply(n, [r, 0].concat(t)),
        n
    }
    function k(n, t, r) {
        return n.push(r),
        n.length > t && n.shift(),
        n
    }
    function C(n) {
        for (var t = "[", r = 0, e = n.length; e > r; r++)
            t += "string" == typeof n[r] ? '"' + n[r].replace(/"/g, '\\"') + '"' : J.isArray(n[r]) ? C(n[r]) : n[r],
            e - 1 > r && (t += ", ");
        return t += "]"
    }
    function T(n, t) {
        return n && "function" == typeof n ? t(n) : "_not_a_function_"
    }
    function I(n, t) {
        return T(n, function() {
            var r = t ? /^function[\W\w]*?{/ : null
              , e = t ? /\s*\}$/ : null
              , i = n.toString().replace(r, "").replace(e, "")
              , o = i.match(/(^\s*)/gm)
              , u = o ? o.length > 1 ? o.slice(1).reduce(function(n, t) {
                return n.length < t.length ? n : t
            }) : o[0] : "";
            return J.str.trim(i.replace(new RegExp("^" + i.match(u),"gm"), "").replace(/^\t/gm, "  "))
        })
    }
    function W(n) {
        return n.name ? n.name : T(n, function() {
            var t = n.toString().match(/^\s*function ([^\(\s]+)/);
            return t && t[1] || "anonymous"
        })
    }
    function q(n) {
        return n.length ? T(n, function() {
            var t = n.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, "")
              , r = t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(/([^\s,]+)/g);
            return null === r ? [] : r
        }) : []
    }
    function _(n) {
        return H.call(n)
    }
    var U = Object.prototype.toString
      , X = (Function.prototype.toString,
    Object.prototype.hasOwnProperty)
      , H = Array.prototype.slice
      , J = {};
    J.onerror = function(n) {
        console.log("$io error : ", n)
    }
    ,
    J.type = t;
    var z = f(Array.isArray) ? Array.isArray : function(n) {
        return n && "object" == typeof n && "number" == typeof n.length && "[object Array]" == U.call(n) || !1
    }
    ;
    J.is = j,
    J.is.arr = J.is.Array = J.isArray = z,
    J.is.str = J.is.String = J.isString = e,
    J.is.fun = J.is.Function = J.isFunction = i,
    J.is.obj = J.is.Object = J.isObject = o,
    J.is.num = J.is.Number = J.isNumber = u,
    J.is.reg = J.is.RegExp = J.isRegExp = c,
    J.is.arg = J.is.Arguments = J.isArguments = a,
    J.is.inf = J.is.Infinity = J.isInfinity = h,
    J.is.nan = J.is.NaN = J.isReallyNaN = g,
    J.is.nat = J.is.Native = J.isNative = f,
    J.is.err = J.is.Error = J.isError = s,
    J.is.pro = J.is.Prototype = J.isPrototype = l,
    J.is.ele = J.is.Element = J.isElement = p,
    J.is.win = J.is.Window = J.isWindow = y,
    J.is.doc = J.is.Document = J.isDocument = m,
    J.is.nodelist = J.isNodeList = b,
    J.is.json = J.isJSON = v,
    J.obj = J.Object = {},
    J.obj.all = A,
    J.obj.each = x,
    J.obj.equal = w,
    J.obj.str = E,
    J.obj.getPath = P,
    J.obj.path = $,
    J.obj.flatten = N,
    J.obj.clear = function(n) {
        for (var t in n)
            n.hasOwnProperty(t) && delete n[t];
        return n
    }
    ,
    J.obj.isEmpty = function(n) {
        for (var t in n)
            if (n.hasOwnProperty(t))
                return !1;
        return !0
    }
    ,
    J.arr = J.Array = {},
    J.arr.str = J.arr.String = C,
    J.arr.all = M,
    J.arr.each = R,
    J.arr.equal = S,
    J.arr.reduce = D,
    J.arr.random = L,
    J.arr.insert = F,
    J.arr.limit = k,
    J["enum"] = function(n, t, r) {
        function e(n) {
            0 === --i && r()
        }
        (0 === n.length || 1 === n.length && 0 === n[0].length) && r();
        var i = 0;
        $io.arr.each(n, function(n, r) {
            var o = $io.is(n);
            "Array" === o || "Object" === o ? $io[o].each(n, function(n, o) {
                i++,
                setImmediate(function() {
                    t.call({
                        list: r,
                        index: i
                    }, n, o, e)
                })
            }) : "Function" === o ? (i++,
            setImmediate(function() {
                n.call({
                    list: r,
                    index: i
                }, e)
            })) : (i++,
            setImmediate(function() {
                t.call({
                    list: r,
                    index: i
                }, n, r, e)
            }))
        })
    }
    ,
    J.str = J.String = {},
    J.str.insertAt = function(n, t, r) {
        return n.substr(0, r) + t + n.substr(r + t.length)
    }
    ,
    J.str.replaceAt = function(n, t, r, e) {
        return n.substr(0, e) + r + n.substr(e + t.length)
    }
    ,
    J.str.truncate = function(n, t) {
        return n.length > t ? n.slice(0, t) + "..." : n
    }
    ,
    J.str.slug = function(n) {
        return n.toLowerCase().replace(/\s+/g, "-").replace(/[^-\w]/g, "")
    }
    ,
    J.str.trim = function(n) {
        var t, r;
        for (t = 0,
        r = n.length - 1; r >= t && n.charCodeAt(t) < 33; t++)
            ;
        for (; r >= t && n.charCodeAt(r) < 33; r--)
            ;
        return n.substring(t, r + 1)
    }
    ,
    J.str.camel = function(n) {
        return n.replace(/(\-[a-z])/g, function(n) {
            return n.toUpperCase().replace("-", "")
        })
    }
    ,
    J.str.dash = function(n) {
        return n.replace(/([A-Z])/g, function(n) {
            return "-" + n.toLowerCase()
        })
    }
    ,
    J.str.capitalise = function(n) {
        return n.charAt(0).toUpperCase() + n.slice(1)
    }
    ,
    J.str.htmlEscape = function(n) {
        return String(n).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    ,
    J.fn = {},
    J.fn.str = I,
    J.fn.outer = I,
    J.fn.inner = function(n) {
        return I(n, !0)
    }
    ,
    J.fn.name = W,
    J.fn.arg = q,
    J.fn.prop = J.fn.keys = function(n) {
        return n ? Object.keys(n) : []
    }
    ,
    J.fn.method = J.fn.meth = function(n) {
        for (var t = O(n), r = -1, e = t.length, i = {}; ++r < e; )
            i[t[r]] = n[t[r]];
        return i
    }
    ,
    J.fn.throttle = function(n, t) {
        var r;
        return function() {
            var e = arguments
              , i = this;
            r || (r = setTimeout(function() {
                return r = 0,
                n.apply(i, e)
            }, t))
        }
    }
    ,
    J.fn.debounce = function(n, t) {
        var r, e, i;
        return function() {
            e = this,
            i = H.call(arguments, 0),
            clearTimeout(r),
            r = setTimeout(function() {
                n.apply(e, i)
            }, t)
        }
    }
    ,
    J.fn.proxy = function(n, t) {
        var r = n;
        return function() {
            t.apply(this, arguments) !== !1 && r.apply(this, arguments)
        }
    }
    ,
    J.arg = {},
    J.arg.arr = _,
    J.reg = {},
    J.reg.escape = function(n) {
        return n.replace(/[-[\]{}()*+?.\\\/^$|]/g, "\\$&")
    }
    ,
    J.xml = {},
    J.xml.parse = function(n) {
        var t;
        return window.DOMParser ? t = (new DOMParser).parseFromString(n, "text/xml") : (t = new ActiveXObject("Microsoft.XMLDOM"),
        t.async = "false",
        t.loadXML(n)),
        t
    }
    ,
    J.equal = function(n, t) {
        return n === t ? !0 : r(n) ? S(n, t) : o(n) ? w(n, t) : d(n, t) ? !0 : !1
    }
    ,
    J.each = function(n, t, r) {
        if (n)
            if (o(n)) {
                for (var e in n)
                    if (X.call(n, e) && t.call(r, n[e], e, n) === !1)
                        break
            } else
                for (var e = 0, i = n.length; i > e && t.call(r, n[e], e, n) !== !1; e++)
                    ;
    }
    ,
    J.map = function(n, t, r, e, i, u) {
        var c = [];
        return J.each(n, function(n, a, f) {
            if (!(u && u.indexOf(a) > -1))
                if (r && (z(n) || o(n)))
                    c = c.concat(J.map(n, t, r, (e ? e + (i || ".") : "") + a, i, u));
                else {
                    var s = t(n, a, f, e);
                    s && c.push(s)
                }
        }),
        c
    }
    ,
    J.find = function(n, t, r, e, i) {
        var o, u = e || ".", c = J.obj.getPath(r, t, u);
        return t.slice(-1) !== u && (t += u),
        t.slice(0, 1) !== u && (t = u + t),
        n.replace(/^\/(.*)\/(.{0,4})$/, function(t, r, e) {
            r && (n = e ? new RegExp(r,e) : new RegExp(r))
        }),
        o = J.isRegExp(n) ? n : new RegExp(J.reg.escape(n),"i"),
        J.map(c, function(n, r, e, i) {
            var c = (i ? i + u : "") + r;
            return o.test(c) ? t + c : !1
        }, !0, null, u, i)
    }
    ,
    n.$io = J
}(this);
!function(global) {
    "use strict";
    function stringify(e) {
        return e instanceof Date && (e = "²Date__²" + e.getTime()),
        JSON.stringify(e, function(e, n) {
            return n instanceof Function || "function" == typeof n ? n.toString() : n instanceof RegExp ? "²RegExp²" + n : n instanceof Date ? "²Date__²" + n.getTime() : n
        })
    }
    function parse(str) {
        return JSON.parse(str, function(key, value) {
            if ("string" != typeof value)
                return value;
            if (value.length < 8)
                return value;
            var prefix = value.substring(0, 8);
            return "function" === prefix ? eval("(" + value + ")") : "²Date__²" === prefix ? new Date(1 * value.slice(8)) : "²RegExp²" === prefix ? eval(value.slice(8)) : value
        })
    }
    function clone(e, n) {
        return parse(stringify(e), n)
    }
    global.$io || (global.$io = {}),
    global.$io.stringify = stringify,
    global.$io.parse = parse,
    global.$io.clone = clone
}(this);
!function(r) {
    "use strict";
    function n(r, n) {
        var e = new FileReader;
        e.addEventListener("loadend", function() {
            n(e.result)
        }),
        e.readAsArrayBuffer(r)
    }
    function e(r, n) {
        var e = new FileReader;
        e.addEventListener("loadend", function() {
            n(e.result)
        }),
        e.readAsText(r)
    }
    function t(r, n) {
        var e = new FileReader;
        e.addEventListener("loadend", function() {
            n(e.result)
        }),
        e.readAsBinaryString(r)
    }
    function i(r, n) {
        var e = new FileReader;
        e.addEventListener("loadend", function() {
            n(e.result)
        }),
        e.readAsDataURL(r)
    }
    function o(r, n, e) {
        var t = new Blob([r],{
            type: e || "text/plain; charset=UTF-8"
        });
        n(t)
    }
    function a(r, n) {
        n(window.URL.createObjectURL(r))
    }
    function c(r, n) {
        n(r)
    }
    function f() {
        console.error("Error String convertion to something")
    }
    r.$io || (r.$io = {}),
    $io.ArrayBuffer = {
        String: function(r, n) {
            var e = new DataView(r)
              , t = new TextDecoder
              , i = t.decode(e);
            return n(i),
            i
        },
        Blob: o,
        ArrayBuffer: c
    },
    $io.Blob = {
        String: e,
        ArrayBuffer: n,
        BinaryString: t,
        DataURL: i,
        Blob: c,
        URL: a
    },
    $io.File = {
        String: e,
        ArrayBuffer: n,
        BinaryString: t,
        DataURL: i,
        File: c,
        Blob: o,
        URL: a
    },
    $io.String.Blob = o,
    $io.String.ArrayBuffer = f,
    $io.String.String = c,
    $io.String.Object = function(r, n) {
        try {
            n(JSON.parse(r))
        } catch (e) {
            $io.onerror(e)
        }
    }
    ,
    $io.Object.String = function(r, n) {
        try {
            n(JSON.stringify(r))
        } catch (e) {
            $io.onerror(e)
        }
    }
}(this);
function $watch(r, t) {
    "use strict";
    var e = {}
      , n = Array.prototype.slice
      , t = t;
    return r.observers = e,
    r.on = function(r, t) {
        return r.replace(/\S+/g, function(r, n) {
            (e[r] = e[r] || []).push(t)
        }),
        this
    }
    ,
    r.off = function(r, t) {
        if ("*" === r)
            e = {};
        else if (t)
            for (var n, i = e[r], s = 0; n = i && i[s]; ++s)
                n === t && (i.splice(s, 1),
                s--);
        else
            r.replace(/\S+/g, function(r) {
                e[r] = []
            });
        return this
    }
    ,
    r.trigger = function(r) {
        var i = e[r];
        if (i)
            for (var s = 0, c = i.length; c > s; s++)
                i[s].apply(t, n.call(arguments, 1));
        return this
    }
    ,
    r.setThisArg = function(r) {
        t = r
    }
    ,
    r
}
!function(n) {
    "use strict";
    function t(n, e) {
        if (arguments.length > 2) {
            var r = o.call(arguments)
              , e = r.pop();
            t.series(r, e)
        } else
            $io.is.obj(n) && "function" == typeof e ? (t.data = n,
            e(n)) : $io.is.arr(n) && "function" == typeof e ? t.parallel(n, e) : "string" == typeof n && "function" == typeof e ? t.task(n, e) : "function" == typeof n ? t.task("modules", n) : "string" != typeof n || e || t.launch(n)
    }
    var e = {}
      , r = {}
      , o = Array.prototype.slice
      , a = {
        onerror: $noop,
        onready: $noop
    };
    t.ready = e,
    t.tasks = r,
    t.config = function(n) {
        $extend(a, n)
    }
    ,
    t.task = function(n, t) {
        return (r[n] = r[n] || []).push(t),
        this
    }
    ,
    t.series = function(n, e) {
        function r(a) {
            if (a < n.length) {
                var i = n[a];
                "string" == typeof i ? (t.launch(i),
                t.on(i + ":ready", function(n) {
                    n.length && (o[i] = n),
                    r(++a)
                })) : t.parallel(i, function(n, t) {
                    t.length && $extend(o, t),
                    r(++a)
                })
            } else
                e(t.data, o)
        }
        var o = {};
        return r(0),
        this
    }
    ,
    t.parallel = function(n, r) {
        function o(o) {
            for (var i = 0, s = n.length; s > i; i++)
                if (e[n[i]] !== !0)
                    return;
            r(t.data, a)
        }
        var a = {};
        return $io.arr.all(n, function(n) {
            "string" == typeof n ? (t.launch(n),
            t.on(n + ":ready", function(t) {
                t.length && (a[n] = t),
                e[n] = !0,
                o()
            })) : t.series(n, function(t, r) {
                r.length && $extend(a, r),
                e[n] = !0,
                o()
            })
        }),
        this
    }
    ,
    t.launch = function(n) {
        function o() {
            e[n] = !0,
            a.onready(n),
            t.trigger(n + ":ready", t.data, f),
            t.off(n + ":ready")
        }
        function i(n) {
            n && f.push(n),
            0 === --s && o()
        }
        var s = 0
          , f = []
          , u = r[n];
        if (u)
            for (var c = 0, l = u.length; l > c; c++)
                ++s,
                !function(e, r) {
                    e.length > 1 ? setTimeout(function() {
                        try {
                            e(t.data, r)
                        } catch (o) {
                            o.message = n + " : " + o.message,
                            a.onerror(o),
                            r(o)
                        }
                    }, 1) : setTimeout(function() {
                        try {
                            r(e(t.data))
                        } catch (o) {
                            o.message = n + " : " + o.message,
                            a.onerror(o),
                            r(o)
                        }
                    }, 1)
                }(u[c], i);
        return this
    }
    ,
    n.$kernel = $watch(t)
}(window);
function $iframe(e, n) {
    "function" == typeof n && (n = $io.fn.inner(n).replace(/^\/\*/, "").replace(/\*\/$/, ""));
    var t = document.createElement("iframe");
    return t.src = "data:text/html;charset=utf-8," + encodeURI(n),
    e.appendChild(t),
    t
}
function $date(e) {
    var n = 1 * e == e ? new Date(1e3 * e) : "msie" === system42.nfo.browser ? Date.parse(e.replace(/( \+)/, " UTC$1")) : new Date(Date.parse(e))
      , t = new Date
      , o = Math.floor((t - n) / 1e3)
      , i = n.toLocaleDateString();
    return 60 > o ? o += "s" : o = 3540 >= o ? Math.round(o / 60) + "m" : 5400 >= o ? "1h" : 86400 >= o ? Math.round(o / 3600) + "h" : 129600 >= o ? "1d" : 604800 > o ? Math.round(o / 86400) + "d" : 777600 >= o ? "1w" : i,
    {
        diff: o,
        human: i,
        date: n
    }
}
function $maxZ(e, n) {
    var t, o, i, c, u = 0;
    if ("string" == typeof e)
        t = (n || document).querySelectorAll(e);
    else if ($io.isNodeList(e))
        t = e;
    else {
        if (!$io.isElement(e))
            throw new Error("$maxZ: invalid selector");
        t = [e]
    }
    return $io.arr.all(t, function(e) {
        o = window.getComputedStyle(e, null),
        i = o.zIndex,
        "static" != o.position && "auto" != i && +i > u && (c = e,
        u = +i)
    }),
    {
        num: u,
        el: c
    }
}
function $loop(e, n) {
    "use strict";
    function t(n) {
        e((n - l) / 1e3),
        s = requestAnimationFrame(t),
        l = performance.now()
    }
    function o() {
        e((performance.now() - l) / 1e3),
        s = setTimeout(o, n),
        l = performance.now()
    }
    function i() {
        e(),
        s = requestAnimationFrame(i)
    }
    function c() {
        e(),
        s = setTimeout(c, n)
    }
    function u(u) {
        return r(),
        void 0 !== u && (n = u),
        d = e.length ? n && n > 0 ? o : t : n && n > 0 ? c : i,
        d(0),
        f
    }
    function r() {
        return n ? clearTimeout(s) : cancelAnimationFrame(s),
        f
    }
    function a() {
        m ? (r(),
        m = !1) : (u(),
        m = !0)
    }
    var l, s, d, m = !1, f = {
        play: u,
        pause: r,
        toggle: a
    };
    return f
}
var system42 = $kernel;
!function(e) {
    "use strict";
    function n(e) {
        window.onhashchange = $noop,
        "pushState"in history ? e ? window.location.hash = "!" + encodeURI(e) : window.location.hash && history.pushState("", document.title, window.location.pathname + window.location.search) : window.location.hash = e ? "!" + encodeURI(e) : "",
        setTimeout(function() {
            window.onhashchange = t
        }, 1e3)
    }
    function t() {
        var e = location.hash;
        e && n.trigger("change", decodeURI(e.replace(/^#!/, "")))
    }
    n = $watch(n),
    n.init = function() {
        t()
    }
    ,
    e.$route = n
}(window);
var $url = {
    parseQuery: function(e) {
        return $io.arr.reduce(e.replace(/^\?/, "").split("&"), function(e, n) {
            var t = n.indexOf("=")
              , o = n.slice(0, t)
              , i = n.slice(++t);
            return e[o] = decodeURIComponent(i),
            e
        }, {})
    },
    getExtention: function(e) {
        var n = (e || "").match(/(?:\.)([0-9a-z]+)(?:[#?].+)?$/);
        return n && n[1] ? n[1] : ""
    },
    getDomain: function(e) {
        var n = (e || "").match(/:\/\/(.[^/]+)/);
        return null != n && n.length >= 2 ? n[1] : ""
    },
    checkImage: function(e, n) {
        function t() {
            o.width > 0 ? n(!0, e, o) : n(!1, e, o)
        }
        e || n(!1);
        var o = new Image;
        o.onload = t,
        o.onerror = t,
        o.onabort = t,
        o.src = e
    },
    _checkFavicon: function(e, n) {
        if (e && "" != $io.str.trim(e)) {
            var t, o = $url.getDomain(e);
            o ? $url.checkImage(t = "http://" + o + "/apple-touch-icon.png", function(e) {
                e ? n(!0, t) : $url.checkImage(t = "http://" + o + "/favicon.png", function(e) {
                    e ? n(!0, t) : $url.checkImage(t = "http://" + o + "/favicon.ico", function(e) {
                        e ? n(!0, t) : $url.checkImage(t = "http://" + o + "/favicon.gif", function(e) {
                            e ? n(!0, t) : n(!1)
                        })
                    })
                })
            }) : n(!1)
        } else
            n(!1)
    },
    checkFavicon: function(e, n) {
        console.log("???");
        var t = ["/favicon-32x32.png", "/favicon.png", "/favicon.gif", "/favicon.ico"];
        if (e && "" != $io.str.trim(e)) {
            var o = $url.getDomain(e)
              , i = !1
              , c = t.length - 1;
            if (o)
                for (var u = 0, r = t.length; r > u && !i; u++)
                    $url.checkImage("http://" + o + t[u], function(e, t) {
                        e && !i ? (i = !0,
                        n(!0, t)) : i || (c--,
                        0 === c && n(!1))
                    });
            else
                n(!1)
        } else
            n(!1)
    }
};
$url.query = function() {
    return $url.parseQuery(window.location.search.substring(1))
}();
var $dom = {
    getSelection: function() {
        var e = "";
        return window.getSelection ? e = window.getSelection().toString() : document.selection && "Control" != document.selection.type && (e = document.selection.createRange().text),
        e
    },
    createSelection: function(e, n, t) {
        if (e.createTextRange) {
            var o = e.createTextRange();
            o.collapse(!0),
            o.moveStart("character", n),
            o.moveEnd("character", t),
            o.select(),
            e.focus()
        } else
            e.setSelectionRange ? (e.focus(),
            e.setSelectionRange(n, t)) : "undefined" != typeof e.selectionStart && (e.selectionStart = n,
            e.selectionEnd = t,
            e.focus())
    },
    repaint: function(e, n) {
        e.oldTransform = e.style.webkitTransform,
        e.style.webkitTransform = "scale(1)",
        n.call(e),
        e.style.webkitTransform = e.oldTransform
    }
};
!function(e) {
    "use strict";
    function n() {
        return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? !0 : !1
    }
    function t() {
        document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.msRequestFullscreen ? document.documentElement.msRequestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    }
    function o() {
        document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
    }
    var i;
    e.$fullscreen = function(e, c) {
        i && (document.removeEventListener("fullscreenchange", i, !1),
        document.removeEventListener("webkitfullscreenchange", i, !1),
        document.removeEventListener("mozfullscreenchange", i, !1)),
        n() ? (o(),
        "function" == typeof c && c()) : (t(),
        "function" == typeof e && e()),
        i = function() {
            n() ? "function" == typeof e && e() : "function" == typeof c && c()
        }
        ,
        document.addEventListener("fullscreenchange", i, !1),
        document.addEventListener("webkitfullscreenchange", i, !1),
        document.addEventListener("mozfullscreenchange", i, !1)
    }
}(this),
!function(e) {
    "use strict";
    function n(e, n, t) {
        e.addEventListener("animationend", t, !1),
        e.addEventListener("webkitAnimationEnd", t, !1),
        e.addEventListener("MSAnimationEnd", t, !1),
        e.addEventListener("oAnimationEnd", t, !1),
        e.addEventListener("oanimationend", t, !1),
        e.classList.add(n)
    }
    function t(e, n) {
        var t = document.createElement("div");
        t.className = e,
        document.body.appendChild(t);
        var o = window.getComputedStyle(t, null);
        n("none" != o[c] ? !0 : !1),
        t.parentNode.removeChild(t)
    }
    function o(e, o, i) {
        function c() {
            i(!0),
            e.removeEventListener("animationend", c, !1),
            e.removeEventListener("webkitAnimationEnd", c, !1),
            e.removeEventListener("MSAnimationEnd", c, !1),
            e.removeEventListener("oAnimationEnd", c, !1),
            e.removeEventListener("oanimationend", c, !1),
            e.classList.remove(o)
        }
        t(o, function(t) {
            t ? n(e, o, c) : i(!1)
        })
    }
    var i = function() {
        var e = document.createElement("div")
          , n = "Khtml Ms ms MS O o Moz moz webkit Webkit webKit WebKit".split(" ")
          , t = n.length;
        return function(o) {
            if (o in e.style)
                return o;
            o = o.replace(/^[a-z]/, function(e) {
                return e.toUpperCase()
            });
            for (var i = 0; t > i; i++)
                if (n[i] + o in e.style)
                    return n[i] + o;
            return !1
        }
    }()
      , c = i("animationName");
    o.i = ["rubberBand", "swing", "tada", "wobble", "bounceIn", "bounceInDown", "bounceInLeft", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "flip", "flipInX", "flipInY", "lightSpeedIn", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpRight", "slideInDown", "slideInLeft", "rollIn", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp"],
    o.o = ["bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "lightSpeedOut", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "slideOutLeft", "slideOutRight", "slideOutUp", "hinge", "rollOut", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp"],
    e.$animate = o
}(this);
var $state = {
    wait: function(e) {
        (e || document.body).classList.add("ui_wait")
    },
    loading: function(e) {
        (e || document.body).classList.add(e === !0 ? "ui_loading--block" : "ui_loading")
    },
    loaded: function(e) {
        (e || document.body).classList.remove("ui_loading--block"),
        (e || document.body).classList.remove("ui_loading")
    },
    pause: function(e) {
        (e || document.body).classList.add("ui_pause")
    },
    play: function(e) {
        (e || document.body).classList.remove("ui_pause")
    }
};
!function(e, t) {
    "undefined" != typeof module ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define(t) : this[e] = t()
}("$ajax", function() {
    "use strict";
    function e(e) {
        return e === Object(e)
    }
    function t(t) {
        if (!e(t))
            return t;
        var n = [];
        for (var r in t)
            null != t[r] && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
        return n.join("&")
    }
    function n(e) {
        var t, n;
        try {
            t = JSON.parse(e.responseText),
            n = !0
        } catch (r) {
            t = e.responseText,
            n = !1
        }
        return [t, e.status, e, n]
    }
    function r() {
        if (window.XMLHttpRequest && ("file:" != window.location.protocol || !window.ActiveXObject))
            return new XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {}
        return !1
    }
    function o(e, o, u) {
        var a = r()
          , c = {
            done: function() {},
            fail: function() {},
            guest: function() {}
        }
          , s = {
            done: function(e) {
                return c.done = e,
                s
            },
            fail: function(e) {
                return c.fail = e,
                s
            },
            guest: function(e) {
                return c.guest = e,
                s
            }
        }
          , f = {
            arraybuffer: !1
        };
        return "GET" == e && u && (f = u,
        u = null),
        o && "/" !== o ? (a.open(e, o, !0),
        f.arraybuffer && (a.responseType = "arraybuffer"),
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        a.onreadystatechange = function() {
            4 === a.readyState && (a.status >= 200 && a.status < 300 ? f.arraybuffer ? c.done.apply(c, [a.response, a.status, a, !1]) : c.done.apply(c, n(a)) : 401 == a.status ? c.guest.call(c, a.statusText, {
                type: e.toLowerCase(),
                url: o,
                data: u
            }) : c.fail.apply(c, n(a)))
        }
        ,
        u ? a.send(t(u)) : a.send()) : c.fail.call(c),
        s
    }
    function u(e, t, n, r) {
        var u = o("GET", e);
        u.done(t || $noop),
        u.fail(n || $noop),
        u.guest(r || $noop)
    }
    return u.get = function(e, t) {
        return o("GET", e, t)
    }
    ,
    u.post = function(e, t) {
        return o("POST", e, t)
    }
    ,
    u["delete"] = function(e) {
        return o("DELETE", e)
    }
    ,
    u.put = function(e, t) {
        return o("PUT", e, t)
    }
    ,
    u.buffer = function(e, t) {
        var n = new XMLHttpRequest;
        n.open("GET", e, !0),
        n.responseType = "arraybuffer",
        n.onload = function(e) {
            var r = n.response;
            r && t(r)
        }
        ,
        n.send(null)
    }
    ,
    u
});
function $chain() {
    "use strict";
    function t(t, n, i) {
        Object.defineProperty(t, i, {
            get: function() {
                var t = n();
                return void 0 === t ? this : t
            }
        })
    }
    function n(t, n, i) {
        t[i] = function() {
            var t = n.apply(this, arguments);
            return void 0 === t ? this : t
        }
    }
    function i(r, u, o) {
        return $io.isObject(u) && $io.obj.all(u, function(i, u) {
            o === !0 ? t(r, i, u) : n(r, i, u),
            "both" === o && (t(r, i, u),
            n(r, i, u))
        }),
        $io.isObject(o) ? i(r, o, !0) : r
    }
    var r = i.apply(null, arguments);
    return r.prop = function(t) {
        return i(this, t, !0)
    }
    ,
    r.meth = function(t) {
        return i(this, t)
    }
    ,
    r
}
!function(t) {
    "use strict";
    function n(t, e, r) {
        n.get(e, function(n, e) {
            r(n, e || t)
        })
    }
    var e = t.localforage;
    e ? e.config({
        name: "fs",
        storeName: "a"
    }) : $alert.error("Your browser don't support local save"),
    n.set = function(t, n, r) {
        var o, i = $io.type(n);
        if (/String|Number|ArrayBuffer|Blob|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array/.test(i))
            o = n;
        else if ($io.isJSON(n))
            try {
                o = JSON.stringify(n)
            } catch (a) {
                o = n
            }
        else if (n)
            try {
                o = Cryo.stringify(n)
            } catch (a) {
                o = n
            }
        e.setItem(t, o, function(t, n) {
            t && $alert.error(t),
            (r || $noop)(t, n)
        })
    }
    ,
    n.get = function(t, n) {
        e.getItem(t, function(t, e) {
            var r = e;
            if ("string" == typeof e)
                try {
                    r = JSON.parse(e),
                    r.root && r.references && 2 === Object.keys(r).length && (r = Cryo.parse(e))
                } catch (o) {
                    r = e
                }
            (n || $noop)(t, r)
        })
    }
    ,
    n.update = function(t, e, r) {
        n.get(t, function(o, i) {
            o || "function" != typeof e || n.set(t, e(i), r || $noop)
        })
    }
    ,
    n.getRaw = function(t, n) {
        e.getItem(t, n || $noop)
    }
    ,
    n.del = function(t, n) {
        e.removeItem(t, n || $noop)
    }
    ,
    n.clear = function(t) {
        e.clear(t || $noop)
    }
    ,
    n.keys = function(t) {
        e.keys(t || $noop)
    }
    ,
    n.store = e,
    t.$db = n
}(this),
!function(t) {
    function n(t, e, i, a) {
        var f = n.get(t);
        return f || (f = n.set(t, e)),
        "function" == typeof a && (o[t] = a),
        "function" == typeof i && (r[t] = i,
        i(f)),
        f
    }
    var e = window.localStorage
      , r = {}
      , o = {};
    n.set = function(t, r, o) {
        var i = r;
        if ("string" != typeof r)
            try {
                i = JSON.stringify(r)
            } catch (a) {}
        try {
            e.setItem(t, i),
            o || n.autoReady(t, r)
        } catch (a) {
            $alert.error(a)
        }
        return r
    }
    ,
    n.get = function(t) {
        var n = e.getItem(t);
        try {
            n = JSON.parse(n)
        } catch (r) {}
        return n
    }
    ,
    n.update = function(t, e) {
        var r = n.get(t);
        return "function" == typeof e ? n.set(t, e(r)) : void 0
    }
    ,
    n.getRaw = function(t) {
        return e.getItem(t)
    }
    ,
    n.del = function(t) {
        e.removeItem(t),
        r[t] = null,
        o[t] = null
    }
    ,
    n.onReady = function(t, n) {
        return "function" == typeof n && (r[t] = n),
        r[t]
    }
    ,
    n.onSave = function(t, n) {
        return "function" == typeof n && (o[t] = n),
        o[t]
    }
    ,
    n.autoReady = function(t, n) {
        r.hasOwnProperty(t) && "function" == typeof r[t] && r[t](n)
    }
    ,
    n.autoSave = function(t) {
        o.hasOwnProperty(t) && "function" == typeof o[t] && n.set(t, o[t](), !0)
    }
    ,
    n.clear = function() {
        e.clear();
        for (var t in r)
            r.hasOwnProperty(t) && (r[t] = null);
        for (var t in o)
            o.hasOwnProperty(t) && (o[t] = null)
    }
    ,
    n.keys = function() {
        return Object.keys(e)
    }
    ,
    window.self === window.top ? (window.addEventListener("beforeunload", function(t) {
        for (var e in o)
            n.autoSave(e)
    }),
    t.$store = n) : window.parent.$store && (t.$store = window.parent.$store)
}(this);
!function(e) {
    "use strict";
    function t(e) {
        return /^#[a-z0-9\-_]+$/i.test(e)
    }
    function n(e, n) {
        var e = e || {};
        "string" == typeof e && (t(e) ? e = (n || document).getElementById(e.replace("#", "")) : (n || document).querySelector(e)),
        1 !== e.nodeType && (e = document);
        var o, c = !0;
        return $io.arr.all(i, function(t) {
            t.elem.isEqualNode(e) && (c = !1)
        }),
        c && i.push({
            elem: e
        }),
        o = {
            get: function() {
                return e
            },
            html: function(t) {
                return t ? (e.innerHTML = t,
                o) : e.innerHTML
            },
            add: function(t) {
                return e.innerHTML = e.innerHTML + t,
                o
            },
            empty: function() {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                return o
            },
            append: function(t) {
                var n;
                if ("string" == typeof t) {
                    n = document.createElement("div"),
                    n.innerHTML = t,
                    nods = n.childNodes;
                    for (var r = 0, i = nods.length; i > r; r++)
                        e.appendChild(nods[r])
                } else
                    e.appendChild(t);
                return o
            },
            click: function() {
                if ("createEvent"in document) {
                    var t = document.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                    e.dispatchEvent(t)
                } else
                    e.fireEvent("onclick")
            },
            trigger: function(t) {
                if ("click" === t)
                    return void o.click();
                if ("createEvent"in document) {
                    var n = document.createEvent("HTMLEvents");
                    n.initEvent(t, !1, !0),
                    e.dispatchEvent(n)
                } else
                    e.fireEvent("on" + t)
            },
            on: function(t, n, c, a) {
                "function" == typeof n && (a = c,
                c = n,
                n = null),
                a = !0;
                var l = function(e, t) {
                    return function(n) {
                        var i = n.target;
                        if (e) {
                            for (; i && 1 == i.nodeType && !r.call(i, e); )
                                i = i.parentNode;
                            if (!i || 9 == i.nodeType)
                                return
                        }
                        return t.call(i, n) === !1 ? (n.preventDefault(),
                        n.stopPropagation(),
                        n.stopImmediatePropagation(),
                        !1) : void 0
                    }
                }(n, c);
                return t.replace(/[^\s]+/g, function(t, r) {
                    if (0 === t.indexOf("$key:")) {
                        var o, u = t.replace("$key:", ""), d = {};
                        d[u] = c,
                        n && (o = $key(n, d))
                    } else
                        e.addEventListener(t, l, a);
                    $io.arr.all(i, function(r) {
                        r.elem.isEqualNode(e) && (r.attach = {
                            name: t,
                            childs: n,
                            handler: c,
                            scopeHandler: l,
                            useCapture: a
                        })
                    })
                }),
                o
            },
            off: function(t, n, r) {
                return r || (r = n,
                n = null),
                t.replace(/[^\s]+/g, function(t, o) {
                    $io.arr.all(i, function(i) {
                        i.elem.isEqualNode(e) && i.attach && i.attach.name == t && i.attach.childs == n && i.attach.handler == r && e.removeEventListener(t, i.attach.scopeHandler, i.attach.useCapture)
                    })
                }),
                o
            }
        }
    }
    var r = function(e) {
        if (e) {
            var t = e.prototype
              , n = t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
            return e.prototype.matches = n,
            n
        }
    }(Element)
      , i = [];
    e.$el = n
}(this);
!function(e) {
    "use strict";
    e.$el || (e.$el = {}),
    e.$el.create = function(e, i, n) {
        var t = e.split(/[>| ]+/);
        if (n && t.pop(),
        !t && i)
            return i;
        var r, a;
        return $io.arr.all(t, function(e) {
            e.replace(/(\w+)?(#(\w+))?(\.([\w|.]+))?/, function(e, i, n, t, l, c) {
                var p = document.createElement(i ? i : "div");
                t && (p.id = t),
                c && (p.className = c.split(".").join(" ")),
                a && a.appendChild(p),
                a = p,
                r || (r = a)
            })
        }),
        i && a.appendChild(i),
        r
    }
}(this);
!function(t) {
    "use strict";
    function e(t) {
        var a, o, i, p, l = !1;
        for ("boolean" == typeof t || "string" == typeof t ? (a = c.call(arguments, 1),
        t = t === !0 ? "deep" : t) : (a = arguments,
        t = !1),
        "active" === t && (l = !0,
        t = "deep"),
        o = a[0],
        i = 1,
        p = a.length; p > i; i++) {
            var u = a[i];
            for (var s in u) {
                var f = u[s];
                ("strict" != t || n.call(o, s)) && ("deep" != t || "[object Object]" !== r.call(f) ? l && "function" == typeof f && "function" != typeof o[s] ? !function(t, e) {
                    var n = {};
                    n[t] = {
                        get: function() {
                            return e(o)
                        }
                    },
                    Object.defineProperties(o, n)
                }(s, f) : o[s] = f : ("[object Object]" !== r.call(o[s]) && (o[s] = {}),
                e(l ? "active" : t, o[s], f)))
            }
        }
        return o
    }
    var n = Object.prototype.hasOwnProperty
      , c = Array.prototype.slice
      , r = Object.prototype.toString;
    e.deep = function() {
        return e.apply(this, ["deep"].concat(c.call(arguments)))
    }
    ,
    e.strict = function() {
        return e.apply(this, ["strict"].concat(c.call(arguments)))
    }
    ,
    e.clone = function() {
        return e.apply(this, ["deep", {}].concat(c.call(arguments)))
    }
    ,
    e.active = function() {
        return e.apply(this, ["active"].concat(c.call(arguments)))
    }
    ,
    t.$extend = e
}(this);
!function(e, t) {
    "undefined" != typeof module ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define(t) : this[e] = t()
}("$key", function() {
    "use strict";
    function e(e, n, o) {
        if ("string" == typeof e && !n)
            return !!f[e];
        var r, i, c;
        return ("function" == typeof e || "Object" === $io.is(e)) && (o = n,
        n = e,
        e = p,
        c = !0),
        "string" == typeof e ? i = {
            selector: e,
            fn: n,
            cfg: $extend(this || {}, d, o)
        } : "Element" === $io.is(e) && (i = {
            el: e,
            fn: n,
            cfg: $extend(this || {}, d, o)
        }),
        "Object" === $io.is(n) && (i.combo = {},
        $io.obj.each(n, function(e, n) {
            (n.indexOf("+") > -1 || n.indexOf(",") > -1) && t(n, i.combo, e)
        })),
        r = (c ? y : m).push(i),
        {
            destroy: function() {
                console.log("$key destroyed"),
                (c ? y : m).splice(r - 1, 1)
            },
            listener: i,
            el: e,
            fn: n,
            opt: o
        }
    }
    function t(e, t, n) {
        $io.arr.each(e.split(","), function(e, o, r) {
            0 === o ? (t[e] || (t[e] = {}),
            t = t[e]) : o > 0 && (t.then || (t.then = {}),
            /return\s+false[^}]*?}?$/.test(n.toString()) && (t.run = function() {
                return !1
            }
            ),
            t = t.then[e] = t.then[e] || {}),
            o === r.length - 1 && (t.run = n)
        })
    }
    function n(e) {
        return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
        !1
    }
    function o(e) {
        k.length && (e = e || window.event,
        "number" != typeof e.which && (e.which = e.keyCode),
        $io.arr.all(k, function(t) {
            r(e, t)
        }))
    }
    function r(e, t) {
        function o(e) {
            var n;
            try {
                n = e.call(s.thisArg || t.thisArg, t.keySafe, t.codSafe || o.which, o, f)
            } catch (o) {
                n = s.onerror(o)
            }
            return n
        }
        function r(e, t) {
            var n, o = 0;
            return $io.obj.each(t, function(e, t) {
                var r = 0
                  , i = t.split("+");
                $io.arr.all(i, function(e) {
                    $io.obj.each(f, function(t, n) {
                        t && e === n && r++
                    })
                }),
                r > o && r === i.length && (o = r,
                n = e)
            }),
            n || null
        }
        function i(e) {
            return t.combo && (t.currentCombo = t.currentCombo && t.currentCombo.then ? r(e, t.currentCombo.then) : r(e, t.combo),
            t.currentCombo && (t.currentCombo.run && (u = o(t.currentCombo.run)),
            t.currentCombo.then || (t.currentCombo = null))),
            u
        }
        function c() {
            t.keySafe && ("function" == typeof t.fn ? u = o(t.fn) : $io.obj.each(t.fn, function(e, n) {
                if ("/" === n.charAt(0) && "/" === n.slice(-1)) {
                    var r = new RegExp(n.slice(1, -1),"i");
                    r.test(t.keySafe) && (u = o(e))
                } else
                    (n === t.keySafe || "*" === n) && (u = o(e))
            }),
            u === !1 && n(e)),
            t.up = {
                keySafe: t.keySafe,
                codSafe: t.codSafe,
                lastKeypress: t.lastKeypress
            },
            t.keySafe = null,
            t.codSafe = null,
            t.lastKeypress = null,
            t.repeat = !1
        }
        clearTimeout(t.asyncTimer);
        var a, u, s = t.cfg;
        "keydown" === e.type && (a = h(e.which).toLowerCase(),
        l[e.which] && (t.keySafe = l[e.which],
        s.location && (0 === e.location && "ctrl" === t.keySafe && (t.keySafe = "ctrl_right"),
        2 === e.location && "shift" === t.keySafe && (t.keySafe = "shift_right"),
        2 === e.location && "insert" === t.keySafe && (t.keySafe = "num_insert"),
        3 === e.location && (t.keySafe = "num_" + (t.keySafe.replace("num_", "") || a)))),
        f[t.keySafe || a] = !0,
        !s.repeat && e.repeat && (c = $noop,
        t.repeat = !0),
        s.repeat && e.repeat && t.lastKeypress && (t.keySafe = t.lastKeypress),
        s.preventDefault && t.keySafe && (n(e),
        e.stopImmediatePropagation()),
        i(t.keySafe) === !1 && n(e)),
        "keypress" === e.type && (t.keySafe || (t.keySafe = h(e.which)),
        t.codSafe = e.which,
        t.lastKeypress = t.keySafe,
        !s.repeat && t.repeat && (c = $noop,
        n(e)),
        s.preventDefault && n(e)),
        "keyup" === e.type && (a = h(e.which).toLowerCase(),
        l[e.which] && (a = l[e.which]),
        f[a] = !1,
        s.onkeyup && t.up && t.up.keySafe && s.onkeyup.call(s.thisArg || t.thisArg, t.up.keySafe, t.up.codSafe, e, f),
        t.up && (t.up.keySafe = null,
        t.up.codSafe = null,
        t.up.lastKeypress = null)),
        t.asyncTimer = setTimeout(c, 0)
    }
    function i(e) {
        var t = e.target;
        if (k.length = 0,
        m.length)
            for (; t && 1 === t.nodeType && ($io.arr.all(m, function(e) {
                e.selector ? t.matches(e.selector) && k.push($extend({
                    thisArg: t
                }, e)) : t.isEqualNode(e.el) && k.push($extend({
                    thisArg: t
                }, e))
            }),
            !k.length); )
                t = t.parentNode;
        y.length && $io.arr.all(y, function(e) {
            k.push($extend({
                thisArg: p
            }, e))
        })
    }
    function c() {
        this.focus()
    }
    function a(e) {
        e.matches("button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), iframe, [href], [tabindex]") || (e.setAttribute("tabindex", "0"),
        e.setAttribute("data-keyboard-faketabindex", !0))
    }
    function u(e, t, o) {
        function r(e) {
            e = e || window.event,
            "number" != typeof e.which && (e.which = e.keyCode);
            var r = h(e.which);
            return "keypress" !== o && (r = r.toLowerCase()),
            l[e.which] && (r = l[e.which]),
            t.call(this, r, e.which, e) === !1 ? n(e) : void 0
        }
        return e && "function" == typeof t ? (a(e),
        e.addEventListener("click", c, !1),
        e.addEventListener(o, r, !1),
        {
            destroy: function() {
                console.log("$key " + o + " destroyed"),
                e.removeEventListener("click", c, !1),
                e.removeEventListener(o, r, !1),
                e.hasAttribute("data-keyboard-faketabindex") && (e.removeAttribute("tabindex"),
                e.removeAttribute("data-keyboard-faketabindex"))
            }
        }) : void 0
    }
    !function(e) {
        Element && !e.matches && (e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector)
    }(Element.prototype);
    var s, f = {}, l = {
        0: "\\",
        8: "backspace",
        9: "tab",
        12: "num",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "caps",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        44: "print",
        45: "insert",
        46: "delete",
        91: "cmd",
        92: "cmd",
        93: "cmd",
        96: "insert",
        108: "enter",
        124: "print",
        144: "numlock",
        145: "scroll",
        223: "ctrl",
        224: "cmd",
        225: "altgr",
        57392: "ctrl",
        63289: "num"
    }, d = {
        preventDefault: !1,
        repeat: !0,
        location: !1,
        onerror: function(e) {
            console.error(e)
        }
    }, h = String.fromCharCode, p = document.documentElement, y = [{
        el: p,
        fn: function() {},
        cfg: $extend({}, d)
    }], m = [], k = [];
    for (s = 1; 20 > s; ++s)
        l[111 + s] = "f" + s;
    for (s = 0; 9 >= s; ++s)
        l[s + 96] = "num_" + s;
    return e.config = function(e) {
        $extend(d, e)
    }
    ,
    p.addEventListener("keydown", o, !1),
    p.addEventListener("keypress", o, !1),
    p.addEventListener("keyup", o, !1),
    p.setAttribute("tabindex", "0"),
    p.addEventListener("focusout", function() {
        f = {}
    }, !1),
    p.addEventListener("focusin", i, !0),
    document.documentElement.focus(),
    p.addEventListener("click", i, !0),
    e.up = function(e, t) {
        return u(e, t, "keyup")
    }
    ,
    e.down = function(e, t) {
        return u(e, t, "keydown")
    }
    ,
    e.press = function(e, t) {
        return u(e, t, "keypress")
    }
    ,
    e
});
!function(e) {
    "use strict";
    function t(e) {
        return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
        !1
    }
    function a(e) {
        var t = s(e.which);
        if (t.toUpperCase() !== t.toLowerCase())
            return e.shiftKey && t.toLowerCase() === t || !e.shiftKey && t.toUpperCase() === t
    }
    function r(e, t) {
        var a = f[p && i.Shift ? "normal" : p ? "CapsLock" : i.Shift ? "Shift" : "normal"][i.Alt ? "Alt" : i.AltGraph ? "AltGraph" : "normal"];
        return t && !a[e] && (a[e] = t),
        a[e]
    }
    function o(e) {
        var t = $extend({}, e.data);
        return t.loc = e.data.key,
        t.pos = "Standard",
        e.data.event.location && (3 === e.data.event.location ? (t.pos = "Numpad",
        t.loc = "Numpad" + e.data.key) : e.data["char"] || (t.pos = 2 === e.data.event.location ? "Right" : "",
        t.loc = e.data.key + t.pos)),
        t.CapsLock = p,
        t.pressed = Object.keys(i),
        t
    }
    function n(e, n) {
        function c() {
            if (!n.data.key) {
                var a = r(n.data.code);
                n.data.key = a ? s(a) : s(n.data.code)[i.Shift || p ? "toUpperCase" : "toLowerCase"](),
                n.data["char"] = n.data.key
            }
            i[n.data.key] = !0,
            (n.down && n.down.call(n.thisArg, n.data.key, o(n)) === !1 || n.preventDefault) && t(e);
            for (var c in n.data)
                n.data.hasOwnProperty(c) && delete n.data[c]
        }
        if (clearTimeout(n.timer),
        n.data.event = e,
        "keydown" === e.type) {
            if (!n.repeat && e.repeat)
                return void (c = null);
            n.data.code = e.which,
            n.data.key = h[e.which] || null,
            (e.ctrlKey || n.data.key) && (c(),
            c = null,
            n.data.safe = !0)
        }
        if ("keypress" === e.type) {
            if (!n.repeat && e.repeat)
                return void (c = null);
            var d = a(e);
            "boolean" == typeof d && (p = d),
            n.data.key || (r(n.data.code, e.which),
            n.data.code = e.which,
            n.data.key = s(e.which)),
            n.data["char"] = s(e.which),
            n.data.safe && (c = null)
        }
        if ("keyup" === e.type) {
            c = null,
            n.data.code = r(e.which) || e.which,
            n.data.key = h[e.which] || s(n.data.code),
            delete i[n.data.key],
            (n.up && n.up.call(n.thisArg, n.data.key, o(n)) === !1 || n.preventDefault) && t(e);
            var l = n.data.key;
            for (var u in f)
                if (f.hasOwnProperty(u))
                    for (var y in f[u])
                        if (f[u].hasOwnProperty(y) && (l === u || l === y))
                            for (var w in f[u][y])
                                f[u][y].hasOwnProperty(w) && (n.data.code = f[u][y][w],
                                n.data.key = s(n.data.code),
                                delete i[n.data.key],
                                (n.up && n.up.call(n.thisArg, n.data.key, o(n)) === !1 || n.preventDefault) && t(e));
            for (var k in n.data)
                n.data.hasOwnProperty(k) && delete n.data[k]
        }
        return n.timer = setTimeout(c, 0),
        n.stopPropagation === !0 ? !1 : void 0
    }
    function c(e) {
        e = e || window.event,
        "number" != typeof e.which && (e.which = e.keyCode);
        for (var t = 0, a = y.length; a > t && n(e, y[t]) !== !1; t++)
            ;
    }
    function d(e) {
        var t = e.target;
        if (y.length = 0,
        w.length)
            for (; t && 1 === t.nodeType; ) {
                for (var a = 0, r = w.length; r > a; a++) {
                    var o = w[a];
                    o.selector ? t.matches(o.selector) && y.push($extend({
                        thisArg: t
                    }, o)) : t.isEqualNode(o.el) && y.push($extend({
                        thisArg: t
                    }, o))
                }
                t = t.parentNode
            }
    }
    function i(e, t, a) {
        var r = {
            data: {},
            up: t,
            down: a
        };
        "string" == typeof e ? r.selector = e : r.el = e && 1 === e.nodeType ? e : l;
        var o = w.push(r)
          , n = {
            config: function(e) {
                return $extend(r, e),
                n
            },
            up: function(e) {
                return r.up = e,
                n
            },
            down: function(e) {
                return r.down = e,
                n
            },
            combo: function(e) {
                return r.combo = e,
                n
            },
            destroy: function() {
                console.log("$key destroyed"),
                w.splice(o - 1, 1)
            }
        };
        return n
    }
    !function(e) {
        Element && !e.matches && (e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector)
    }(Element.prototype);
    for (var l = document.documentElement, s = String.fromCharCode, p = !1, h = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: "Spacebar",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        44: "PrintScreen",
        45: "Insert",
        46: "Delete",
        91: "OS",
        92: "OS",
        93: "OS",
        96: "Insert",
        108: "Enter",
        124: "PrintScreen",
        127: "Delete",
        144: "NumLock",
        145: "ScrollLock",
        225: "AltGraph",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    }, u = {
        ArrowLeft: "Left",
        ArrowUp: "Up",
        ArrowRight: "Right",
        ArrowDown: "Down",
        Spacebar: "Space",
        Control: "Ctrl",
        ControlRight: "Ctrl",
        ShiftRight: "Shift",
        CapsLock: "Caps",
        ScrollLock: "Scroll",
        PrintScreen: "Print",
        Delete: "Del",
        Backspace: "Bksp",
        Insert: "Ins",
        Escape: "Esc",
        AltGraph: "AltGr",
        PageUp: "PgUp",
        PageDown: "PgDw"
    }, f = {
        normal: {
            normal: {},
            AltGraph: {},
            Alt: {}
        },
        Shift: {
            normal: {},
            AltGraph: {},
            Alt: {}
        },
        CapsLock: {
            normal: {},
            AltGraph: {},
            Alt: {}
        }
    }, y = [], w = [{
        data: {}
    }], k = 1; 12 >= k; k++)
        h[k + 111] = h[k + 63235] = "F" + k;
    l.addEventListener("keydown", c, !1),
    l.addEventListener("keypress", c, !1),
    l.addEventListener("keyup", c, !1),
    l.addEventListener("click", d, !0),
    l.addEventListener("focusout", function() {
        setTimeout(function() {
            if (!window.top.document.activeElement.isEqualNode(document.activeElement)) {
                console.log("IFRAME OUT");
                for (var e in i)
                    i.hasOwnProperty(e) && delete i[e]
            }
        }, 0)
    }, !1),
    l.setAttribute("tabindex", "0"),
    l.focus(),
    Object.defineProperties(i, {
        alias: {
            value: u
        },
        keys: {
            get: function() {
                return Object.keys(i)
            }
        }
    }),
    e.$keyboard = i
}(this);
!function(n) {
    "use strict";
    function o(n) {
        console.log(n)
    }
    n.$gamepad = o
}(this);
function $undo(n) {
    var t = n || []
      , r = n ? n.length : 0
      , e = function(n) {};
    return {
        get: function() {
            return t.slice(0, r >= 0 ? r : 0)
        },
        cursor: function() {
            return r
        },
        history: function() {
            return t
        },
        clear: function() {
            t.length = r = 0
        },
        add: function(n) {
            return t.splice(r++, t.length, n),
            n
        },
        each: function(n) {
            r > t.length && (r = t.length);
            for (var e = 0; r > e; e++)
                n(t[e])
        },
        redo: function(n) {
            if (r++ > t.length && (r = t.length + 1),
            0 >= r && (r = 1),
            t[r - 1]) {
                var u = t[r - 1].redo ? t[r - 1].redo() : t[r - 1];
                (n || e)(u)
            }
            return u
        },
        undo: function(n) {
            if (--r < -1 && (r = -1),
            r >= t.length && (r = t.length - 1),
            t[r]) {
                var u = t[r].undo ? t[r].undo() : t[r];
                (n || e)(u)
            }
            return u
        }
    }
}
!function(e, t) {
    "undefined" != typeof module ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define(t) : this[e] = t()
}("$wheel", function() {
    "use strict";
    function e(e, o, i) {
        function s(e) {
            e = window.event || e,
            y ? y.isEqualNode(e.target) && (e.preventDefault(),
            p(e)) : v.noscroll ? (e.preventDefault(),
            p(e)) : p(e)
        }
        function r(e) {
            e.preventDefault(),
            clearTimeout(d),
            d = setTimeout(function() {
                c()
            }, m)
        }
        function a(e) {
            e.preventDefault(),
            u(),
            clearTimeout(d)
        }
        function c() {
            e.addEventListener("mousewheel", s, !1),
            e.addEventListener("DOMMouseScroll", s, !1)
        }
        function u() {
            e.removeEventListener("mousewheel", s, !1),
            e.removeEventListener("DOMMouseScroll", s, !1)
        }
        if ("object" == typeof e && !(e instanceof HTMLElement))
            return l = e;
        var f, d, h = e, v = $extend({}, l, i), m = v.delayy, y = v.handler;
        if (e + "" === e && (e = document.getElementById(h),
        e || (e = document.querySelectorAll(h)[0])),
        e) {
            n++,
            t[n] = o,
            e.setAttribute("data-wheel-id", n);
            var p = function(l) {
                var o = Math.max(-1, Math.min(1, l.wheelDelta || -l.detail));
                return t[n].call(e, o, l),
                !1
            };
            if (v.acceleration) {
                var w = 0
                  , E = !0;
                f = setInterval(function() {
                    w -= .1 * w,
                    0 > w && (w = 0)
                }, v.acceleration),
                p = function(l) {
                    w += 1;
                    var o = Math.max(-1, Math.min(1, l.wheelDelta || -l.detail));
                    return 1 === o ? (E === !1 && (w = 1),
                    E = !0) : (E === !0 && (w = 1),
                    E = !1),
                    t[n].call(e, o, w, l),
                    !1
                }
            }
            return v.throttle && (s = $io.fn.throttle(s, v.throttle)),
            v.debounce && (s = $io.fn.debounce(s, v.debounce)),
            e.addEventListener("mouseenter", m ? r : c, !1),
            e.addEventListener("mouseleave", m ? a : u, !1),
            {
                destroy: function() {
                    e.removeEventListener("mouseenter", m ? r : c, !1),
                    e.removeEventListener("mouseleave", m ? a : u, !1),
                    clearTimeout(d),
                    clearInterval(f),
                    t[e.getAttribute("data-wheel-id")] = null,
                    e.removeEventListener("mousewheel", s, !1),
                    e.removeEventListener("DOMMouseScroll", s, !1),
                    console.log("$wheel destroy : ", e.getAttribute("data-wheel-id"))
                }
            }
        }
    }
    var t = {}
      , n = 0
      , l = {
        debounce: 0,
        noscroll: !1,
        handler: null,
        delay: 0
    };
    return e.scale = function(t) {
        t.scaleW = 1,
        t.scaleH = 1;
        var n = t.offsetWidth
          , l = t.offsetHeight
          , o = e(t, function(e, t) {
            var o = this.scaleW
              , i = this.scaleH;
            this.scaleW += e / 10,
            this.scaleH += e / 10,
            this.scaleW < 1 && (this.scaleW = 1),
            this.scaleH < 1 && (this.scaleH = 1),
            this.style.width = n * this.scaleW + "px",
            this.style.height = l * this.scaleH + "px";
            var s = 1 - this.scaleW / o
              , r = 1 - this.scaleH / i
              , a = this.offsetLeft
              , c = this.offsetTop;
            a += (t.clientX - this.offsetLeft) * s,
            c += (t.clientY - this.offsetTop) * r,
            this.style.top = c + "px",
            this.style.left = a + "px"
        });
        return {
            destroy: function() {
                o.destroy(),
                delete t.scaleW,
                delete t.scaleH
            }
        }
    }
    ,
    e
});
!function(e) {
    "use strict";
    function t(e, o, i) {
        "function" == typeof o && (i = o,
        o = {});
        var r, a, l = $extend({}, n, o);
        return $loader(["/c/libs/rasterizeHTML.allinone.js"], function(n) {
            var o, c = "<style>", s = !1;
            if (e) {
                if ("string" == typeof e)
                    o = document.querySelector(e),
                    r = $el.create(e, o.cloneNode(!0));
                else if ($io.isElement(e))
                    o = e,
                    r = o.cloneNode(!0),
                    r.id = "screenshot__unique__selector",
                    e = "#" + r.id;
                else {
                    if (!$io.isDocument(e))
                        return void console.error("$screenshot : invalid selector!");
                    s = !0,
                    o = e,
                    r = e.cloneNode(!0)
                }
                var u = l.width || o.offsetWidth
                  , d = l.height || o.offsetHeight;
                s || (c += "body {background:transparent !important}\n" + e + " {width:" + u + "px!important;height:" + d + "px!important;position:absolute!important; top:0px!important;left:0px!important}\n")
            } else {
                o = r = l["default"];
                var u = r.offsetWidth
                  , d = r.offsetHeight
            }
            if (r) {
                $io.arr.all(r.querySelectorAll(".js_image_inline"), function(e) {
                    c += '.js_image_inline[data-image-id="' + e.dataset.imageId + '"] {  background-image: ' + e.style.backgroundImage + "!important;  background-size: " + e.style.backgroundSize + "!important;  background-position: " + e.style.backgroundPosition + "!important;  background-repeat: " + e.style.backgroundRepeat + "!important;}"
                }),
                c += "</style>",
                $io.arr.all(document.styleSheets, function(e) {
                    c += e.ownerNode.outerHTML
                });
                var f = document.createElement("canvas");
                f.width = u + 1,
                f.height = d + 1,
                a = function(e, t) {
                    n[s ? "drawDocument" : "drawHTML"](s ? r : c + e, f, {
                        useBlobs: !1,
                        baseUrl: s ? null : window.location.origin
                    }).then(function(e) {
                        t(f, o || r, e)
                    }, function(e) {
                        $alert.error(e)
                    })
                }
                ;
                var h = r.querySelectorAll("iframe")
                  , g = r.querySelectorAll("canvas")
                  , m = h.length + g.length;
                if (m) {
                    if (h.length) {
                        var p = o.querySelectorAll("iframe");
                        $io.arr.each(h, function(e, n) {
                            t(p[n].contentDocument, {
                                width: p[n].clientWidth,
                                height: p[n].clientHeight
                            }, function(t, o, l) {
                                e.parentNode.replaceChild(l.image, e),
                                l.image.style.cssText = window.getComputedStyle(p[n], "").cssText,
                                l.image.style.width = p[n].clientWidth + "px",
                                l.image.style.height = p[n].clientHeight + "px",
                                0 === --m && a(r.outerHTML, i)
                            })
                        })
                    }
                    if (g.length) {
                        var y = o.querySelectorAll("canvas");
                        $io.arr.each(g, function(e, t) {
                            var n = new Image;
                            n.src = y[t].toDataURL(),
                            e.parentNode.replaceChild(n, e),
                            n.style.cssText = window.getComputedStyle(y[t], "").cssText,
                            0 === --m && a(r.outerHTML, i)
                        })
                    }
                } else
                    a(r.outerHTML, i)
            }
        }),
        {
            refresh: function(e) {
                a(r.outerHTML, e)
            },
            destroy: function() {
                canvas = null,
                html = null,
                r = null
            }
        }
    }
    var n = {
        "default": document.body
    };
    t.config = function(e) {
        $extend(n, e)
    }
    ,
    e.$screenshot = t
}(this);
function $socket(n) {
    var o = {};
    this.on = function(n, t) {
        return o[n] = o[n] || [],
        o[n].push(t),
        this
    }
    ,
    this.send = function(n, o) {
        return this.conn.send(o),
        this
    }
    ,
    this.connect = function() {
        this.conn = "function" == typeof MozWebSocket ? new MozWebSocket(n) : new WebSocket(n),
        this.conn.onmessage = function(n) {
            t("message", n.data)
        }
        ,
        this.conn.onclose = function() {
            t("close", null)
        }
        ,
        this.conn.onopen = function() {
            t("open", null)
        }
    }
    ,
    this.disconnect = function() {
        this.conn.close()
    }
    ;
    var t = function(n, t) {
        var e = o[n];
        if ("undefined" != typeof e)
            for (var c = 0; c < e.length; c++)
                e[c](t)
    }
}
!function(t) {
    "use strict";
    function i(t) {
        function i(t) {
            $file.download(t, n + ".zip")
        }
        function e(t, i) {
            r.update(t / i * 100)
        }
        function o(t) {
            console.error(t)
        }
        var n = $fs.utils.getName(t + "") || "derp"
          , r = $alert.progress("Creating Archive...", "Archive");
        $loader(["/c/libs/zip/zip.js", "/c/libs/zip/zip-fs.js"], function() {
            function r(t, i) {
                function e(t, i, o, n) {
                    $io["enum"]([o], function(o, n, r) {
                        "." !== n && ".." !== n ? $fs.utils.isShortcut(n) || "object" != typeof o ? $file.open(t + "/" + n, "Blob", function(t) {
                            i.addBlob(n, t),
                            r()
                        }) : e(t + "/" + n, i.addDirectory(n), o, r) : r()
                    }, function() {
                        n()
                    })
                }
                n = $fs.utils.getName(t);
                var o = $fs.utils.getPathObj(t);
                o ? e(o.cwd, c.root.addDirectory($fs.utils.getName(o.cwd)), o.obj, i) : $file.open(t, "Blob", function(t) {
                    c.root.addBlob(this.name, t),
                    i()
                })
            }
            function s() {
                c.root.exportBlob(i, e, o)
            }
            zip.workerScriptsPath = "/c/libs/zip/";
            var c = new zip.fs.FS;
            "string" == typeof t ? r(t, s) : $io["enum"](t, function(t, i, e) {
                if ($io.isElement(t)) {
                    var o = t.getAttribute("data-exe")
                      , n = t.getAttribute("data-path");
                    $fs.utils.exist(o) ? r(o, e) : r(n, e)
                } else
                    r(t, e)
            }, s)
        })
    }
    t.$archive = i
}(this);
!function(e) {
    "use strict";
    function t(e) {
        var t = []
          , n = 0;
        return e.replace(/(?:\(((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]+[-A-Za-z0-9+$&@#\/%=~_()|])\))/gm, function(e, n) {
            return t.push(n),
            "²_links_in_parens___ktlu_²"
        }).replace(/((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+$&@#\/%=~_()|])/gm, function(e) {
            return '<a target="_blank" href="' + (0 == e.indexOf("www.") ? "http://" + e : e) + '">' + e + "</a>"
        }).replace(/(^|[^@\w])@(\w{1,15})\b/g, '$1<a target="_blank" href="http://web.archive.org/web/20160613180250/http://twitter.com/$2">@$2</a>').replace(/([\w.]*\w@[\w.]+\w)/gm, '<a href="mailto:$1">$1</a>').replace(RegExp("²_links_in_parens___ktlu_²", "g"), function() {
            var e = t[n++];
            return '(<a target="_blank" href="' + e + '">' + e + "</a>)"
        })
    }
    e.$io.str || (e.$io = {
        str: {}
    }),
    e.$io.str.autolink = t
}(this),
!function(e) {
    "use strict";
    function t(e) {
        return e = e.replace(/</g, "²_less__²").replace(/>/g, "²_more__²").replace(/&/g, "²_amp__²").replace(/"/g, "²_quot__²").replace(/'/g, "²_squot__²"),
        e = $io.str.autolink(e),
        e = e.replace(RegExp("²_amp__²", "g"), "&amp;").replace(RegExp("²_quot__²", "g"), "&quot;").replace(RegExp("²_squot__²", "g"), "&#39;").replace(RegExp("²_less__²", "g"), "&lt;").replace(RegExp("²_more__²", "g"), "&gt;")
    }
    function n(e, n) {
        if ("string" != typeof e)
            return "";
        var r = []
          , o = 0
          , i = []
          , s = 0
          , a = []
          , l = 0
          , c = []
          , p = 0;
        return (n ? "" : '<code class="language-javascript ui_hilit">') + e.replace(/([\r\n\s,.;[({=&|!])(\/(?!\/)(?:\[.+?]|\\.|[^\/\r\n])+\/[gimyu]{0,5})(?=\s*($|[\r\n,.;})\]]))/g, function(e, t, n) {
            return c.push(n),
            t + "_regex____ktlu_"
        }).replace(/('(\\')?(([^\\]\\'|[^'\n]|\\\n)*)')|("(\\")?(([^\\]\\"|[^"\n]|\\\n)*)")/g, function(e) {
            return r.push(e),
            "_string___ktlu_"
        }).replace(/\/\*[\W\w]*?\*\//g, function(e) {
            return i.push(e),
            "_comment__ktlu_"
        }).replace(/\/\/.*/g, function(e) {
            return a.push(e),
            "_komment__ktlu_"
        }).replace(/([+\/\|\^&%!~<>=-]|&amp;|&lt;?|&gt;?)/g, '<span class="sh_operator">$1</span>').replace(/(\$[a-z0-9_$]+)/gi, '<span class="sh_42">$1</span>').replace(/((?!\d)[a-z0-9_$]+)(\s*:\s*function)/gi, '<span class="sh_function">$1</span>$2').replace(/\.((?!\d)[a-z0-9_$]+(?=\())/gi, '.<span class="sh_propfunction">$1</span>').replace(/((?!\d)[a-z0-9_$]+(?=\())/gi, '<span class="sh_function">$1</span>').replace(/([[\]{}().,;:])/g, '<span class="sh_punctuation">$1</span>').replace(/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|true|false|NaN|-?Infinity)\b/g, '<span class="sh_number">$1</span>').replace(/\b(break|case|catch|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/g, '<span class="sh_keyword">$1</span>').replace(RegExp("_komment__ktlu_", "g"), function() {
            return '<span class="sh_comment">' + t(a[l++] || "") + "</span>"
        }).replace(RegExp("_comment__ktlu_", "g"), function() {
            return '<span class="sh_comment">' + t(i[s++] || "") + "</span>"
        }).replace(RegExp("_string___ktlu_", "g"), function() {
            return '<span class="sh_string">' + t(r[o++] || "") + "</span>"
        }).replace(RegExp("_regex____ktlu_", "g"), function() {
            return '<span class="sh_keyword2">' + t(c[p++] || "") + "</span>"
        }) + (n ? "" : "</code>")
    }
    e.$io.str || (e.$io = {
        str: {}
    }),
    e.$io.str.hilit = n
}(this),
!function(e) {
    "use strict";
    function t(e) {
        return "string" == typeof e ? e : $io.isNumber(e) ? '<span class="sh_number">' + e + "</span>" : void 0 === e ? "Undefined" : null === e ? "Null" : "function" == typeof e ? $io.str.hilit($io.fn.str(e)) : $io.isObject(e) || $io.isArray(e) ? $io.str.hilit($io.obj.str(e)) : "function" == typeof e.constructor ? "<span class=sh_init>" + e.constructor.name + "</span> " + $io.str.hilit($io.obj.str(e), !0) : e
    }
    function n(e, t) {
        for (var r in e) {
            var o = e[r];
            if (r == t)
                return;
            "string" == typeof o || "number" == typeof o || "boolean" == typeof o ? $log.pad(r, o + "", ".") : $io.is.Object(o) && n(o, t)
        }
    }
    function r(e, i, a) {
        if (s.clear)
            return s.el.innerHTML = "",
            void (s.clear = "");
        if (s.repeat && (e = e.repeat(s.cols),
        s.repeat = ""),
        s.code && (e = $io.str.hilit(e),
        s.code = ""),
        s.pass && (e = "✔ " + e,
        l += "ui_log__green",
        s.pass = ""),
        s.fail && (e = "✘ " + e,
        l += "ui_log__red",
        s.fail = ""),
        s.info && (e = "ℹ " + e,
        l += "ui_log__blue",
        s.info = ""),
        s.italic && (l += " italic",
        s.italic = ""),
        s.bold && (l += " bold",
        s.bold = ""),
        s.white && (l += " ui_log__white",
        s.white = ""),
        s.yellow && (l += " ui_log__yellow",
        s.yellow = ""),
        s.cyan && (l += " ui_log__cyan",
        s.cyan = ""),
        s.magenta && (l += " ui_log__magenta",
        s.magenta = ""),
        s.blue && (l += " ui_log__blue",
        s.blue = ""),
        s.red && (l += " ui_log__red",
        s.red = ""),
        s.succes && (l += " ui_log__green",
        s.succes = ""),
        s.green && (l += " ui_log__green",
        s.green = ""),
        s.error && (l += " ui_log__red js_error",
        s.error = ""),
        s.obj)
            return s.obj = "",
            void n(e, i);
        if ("Error" === $io.type(e) && (e = e.constructor.name + "\n" + e.message + $io.str.autolink(e.stack)),
        s.pad) {
            var c;
            a ? c = a : (c = i,
            i = "");
            var p = s.cols - 3 - (e.length + (i || "").length + (i ? 2 : 1));
            e = e + " " + c.repeat((3 + (p >= 0 ? p : 0)) / c.length) + (i ? " " + i : ""),
            e.length > s.cols && (e = e.match(new RegExp(".{1," + s.cols + "}","g")).join("\n")),
            s.pad = ""
        } else if (i) {
            var u = $io.arg.arr(arguments);
            e = u.join(", ")
        }
        return s.el ? (o = document.createElement("div"),
        o.innerHTML = t(e),
        o.className = l,
        s.el.appendChild(o),
        r.trigger("addline"),
        l = "",
        o) : void 0
    }
    for (var o, i = ["clear", "error", "error", "succes", "fail", "pass", "warn", "info", "bold", "italic", "red", "blue", "green", "white", "yellow", "cyan", "magenta", "html", "autolink", "code", "pad", "right", "center", "repeat", "stack", "save", "stay", "id", "fast", "group", "noop", "obj", "end"], s = {
        el: null
    }, a = {}, l = "", c = 0, p = i.length; p > c; c++)
        s[i[c]] = "",
        a[i[c]] = function(e) {
            return function() {
                s[e] = "1"
            }
        }(i[c]);
    r.config = function(e) {
        return $extend(s, e),
        r
    }
    ,
    $watch(r),
    e.$log = $chain(r, a, a)
}(this),
!function(e) {
    "use strict";
    function t(e) {
        e.scrollTop = e.scrollHeight
    }
    function n(e) {
        e.style.height = e.scrollHeight + "px"
    }
    function r(e, r) {
        function i() {
            $log.config({
                cols: c.cols,
                el: u
            })
        }
        function s() {
            $dom.getSelection() || (d.focus(),
            i())
        }
        function a(e) {
            n(e),
            t(e)
        }
        var l = {
            cols: 59,
            exe: $noop,
            prompt: ">",
            history: o
        }
          , c = $extend(l, r)
          , p = document.createElement("code")
          , u = document.createElement("div")
          , _ = document.createElement("div")
          , g = document.createElement("span")
          , d = document.createElement("textarea");
        if (e) {
            c.prompt += "&nbsp;",
            g.innerHTML = c.prompt,
            d.innerHTML = "",
            d.spellcheck = !1,
            d.rows = "1",
            d.style.outline = "0 none",
            d.style.boxShadow = "0 0 transparent",
            d.style.textShadow = "0 0 transparent",
            d.style.border = "0 none",
            d.style.verticalAlign = "top",
            d.style.resize = "none",
            d.style.padding = "0",
            d.style.margin = "0",
            d.style.height = "auto",
            d.style.width = "100%",
            d.style.color = "inherit",
            d.style.font = "inherit",
            d.style.fontSize = "inherit",
            d.style.background = "transparent",
            d.style.overflow = "hidden",
            d.style.textIndent = "0",
            _.style.display = "table",
            _.style.tableLayout = "fixed",
            d.style.display = "table-cell",
            g.style.display = "table-cell",
            g.style.width = "1%",
            g.style.whiteSpace = "nowrap",
            _.appendChild(g),
            _.appendChild(d),
            p.appendChild(u),
            p.appendChild(_),
            p.style.display = "block",
            p.style.width = c.cols + "ch",
            p.style.whiteSpace = "pre-wrap",
            p.style.wordBreak = "break-word",
            p.style.wordWrap = "break-word",
            e.appendChild(p),
            e.style.overflowY = "scroll",
            c.rows && (e.style.height = c.rows + "em"),
            $log.on("addline", function() {
                t(e)
            }),
            e.addEventListener("mouseup", s, !1),
            e.addEventListener("contextmenu", s, !1),
            d.addEventListener("mouseup", function(e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0,
                e.stopImmediatePropagation(),
                i()
            }, !1),
            d.addEventListener("paste", function(e) {
                setTimeout(function() {
                    a(d)
                }, 0)
            }, !1);
            var h = 0
              , f = !1
              , y = $key.down(d, function(e, t, n) {
                a(this);
                var r = c.history.length;
                if ($.onkey(e, this.value) === !1)
                    return !1;
                if ("enter" == e) {
                    var o = $io.str.trim(this.value);
                    if (!o)
                        return $.log(c.prompt),
                        !1;
                    if (this.value = "",
                    this.style.height = "auto",
                    h = 0,
                    $.onenter(o) === !1)
                        return !1;
                    if ($.log(c.prompt + o),
                    c.history[r - 1] != o && c.history.push(o),
                    !c.exe.call($, o))
                        try {
                            $.log(eval.call(window, o))
                        } catch (n) {
                            $.log.error(n.message + "\n")
                        }
                    return !1
                }
                if (this.value || (f = !1),
                !f) {
                    if ("up" == e)
                        return h++,
                        h > r && (h = r),
                        this.value = c.history[r - h] || "",
                        a(this),
                        !1;
                    if ("down" == e)
                        return h--,
                        0 > h && (h = 0),
                        this.value = c.history[r - h] || "",
                        a(this),
                        !1
                }
            })
              , m = $log.config({
                cols: c.cols,
                el: u
            })
              , $ = {
                cli: !0,
                cfg: c,
                destroy: function() {
                    y.destroy(),
                    this.ondestroy(),
                    console.log("@todo : terminal destroy")
                },
                ondestroy: $noop,
                onenter: $noop,
                onkey: $noop,
                prompt: g,
                input: d,
                log: m
            };
            return $
        }
    }
    r.clearhistory = function() {
        o.length = 0
    }
    ;
    var o = []
      , o = $store("etc/Terminal/history.json", [], function(e) {
        o = e
    }, function() {
        return o
    });
    e.$cli = r
}(this);
window.$ui = window.$ui || {},
$ui.colorpicker = function(t, o, n) {
    function i(t) {
        return 1 === t._a ? t.toString("name") : t.toRgbString()
    }
    function e(t, n) {
        n || (o.value = i(t)),
        o.style.backgroundColor = t.toRgbString(),
        o.style.color = t._a < .7 ? "#000" : tinycolor.mostReadable(t, ["#fff", "#000"])
    }
    function c() {
        var t = tinycolor({
            h: d,
            s: y,
            v: f,
            a: v
        });
        o.value = t.toString(),
        l.classList.remove("transition"),
        a(),
        e(t),
        n.change(t, i(t))
    }
    function r(t, o) {
        t = tinycolor(t),
        e(t, o);
        var n = t.toHsv();
        d = n.h,
        y = n.s,
        f = n.v,
        v = t._a,
        $ui.control(l, "xy", y, 1 - f),
        $ui.control(u, "y", 0, 1 - v),
        $ui.control(s, "y", 0, d / 360),
        l.classList.add("transition"),
        a()
    }
    function a() {
        var t = tinycolor({
            h: d,
            s: 1,
            v: 1
        });
        l.style.backgroundColor = "#" + t.toHex()
    }
    var n = n || {
        change: function() {}
    }
      , t = "string" == typeof t ? document.querySelector(t) : t;
    if (!t.getAttribute("data-js-xy-init")) {
        t.setAttribute("data-js-xy-init", !0);
        var o = "string" == typeof o ? document.querySelector(o) : o
          , l = document.createElement("div")
          , u = document.createElement("div")
          , s = document.createElement("div")
          , d = 0
          , y = 0
          , f = 0
          , v = 1;
        t.classList.add("ui_colorpicker"),
        t.classList.add("skin_alpha-grid"),
        l.className = "ui_colorpicker__color",
        u.className = "ui_colorpicker__alpha",
        s.className = "ui_colorpicker__hue",
        t.appendChild(l),
        t.appendChild(u),
        t.appendChild(s),
        $ui.control.xy(l, 1, 1, function(t, o) {
            y = t,
            f = o,
            c()
        }),
        $ui.control.y(u, 1, function(t) {
            v = t,
            c()
        }),
        $ui.control.y(s, 1, function(t) {
            d = 360 * t,
            c()
        }),
        o.onchange = function() {
            r(this.value, !0)
        }
        ,
        o.oninput = function() {
            r(this.value, !0)
        }
    }
}
;
!function(t) {
    "use strict";
    function e(t, e) {
        document.documentElement.addEventListener(t, e, !1)
    }
    function n(t, e) {
        document.documentElement.removeEventListener(t, e, !1)
    }
    function o(t, o, u, i, c) {
        function r(e) {
            e.preventDefault(),
            t.focus(),
            s(e)
        }
        function s(n) {
            p = t.offsetWidth,
            g = t.offsetHeight,
            y = t.getBoundingClientRect(),
            _ = y.top,
            E = y.left,
            f(n),
            e("mousemove", f),
            e("touchmove", f),
            e("mouseup", a),
            e("mouseleave", a),
            e("touchend", a),
            e("contextmenu", m)
        }
        function a(t) {
            n("mousemove", f),
            n("touchmove", f),
            n("mouseup", a),
            n("mouseleave", a),
            n("touchend", a),
            n("contextmenu", m)
        }
        function f(t) {
            if (t.changedTouches) {
                var e = t.changedTouches[0];
                v = e.clientX,
                x = e.clientY
            } else
                v = t.clientX,
                x = t.clientY;
            ("xy" === o || "y" === o) && (w = Math.max(0, Math.min(x - _, g)),
            L = w / g * 100),
            ("xy" === o || "x" === o) && (b = Math.max(0, Math.min(v - E, p)),
            M = b / p * 100),
            (j !== L || q !== M) && (d(L, M),
            j = L,
            q = M,
            "xy" === o && $(b / p, 1 - w / g),
            "y" === o && $(1 - w / g),
            "x" === o && $(b / p))
        }
        function l(t, e) {
            d(100 - 100 * e, 100 * t)
        }
        function d(t, e) {
            ("xy" === o || "y" === o) && (h.style.top = t + "%"),
            ("xy" === o || "x" === o) && (h.style.left = e + "%")
        }
        function m(t) {
            t.preventDefault()
        }
        var h, y, v, x, p, g, _, E, L, M, b, w, t = "string" == typeof t ? document.querySelector(t) : t;
        t.getAttribute("data-js-control-" + o + "-init") ? h = t.querySelector(".ui_control--" + o + "__handler") : (t.setAttribute("data-js-control-" + o + "-init", !0),
        t.tabIndex = 0,
        t.classList.add("ui_control"),
        t.classList.add("ui_control--" + o),
        h = document.createElement("div"),
        h.className = "ui_control--" + o + "__handler",
        t.appendChild(h),
        t.addEventListener("mousedown", r, !1),
        t.addEventListener("touchstart", r, !1));
        var S = /[^\w]this[^\w]/.test(c.toString())
          , $ = S ? function() {
            c.apply(t, arguments)
        }
        : function(t, e) {
            c(t, e)
        }
        ;
        p = t.offsetWidth,
        g = t.offsetHeight;
        var j = 0
          , q = 0;
        return l(u, i),
        {
            set: "xy" === o ? l : "y" === o ? function(t) {
                l(0, t)
            }
            : function(t) {
                l(t, 0)
            }
        }
    }
    function u(t, e, n, u, i) {
        return o(t, e, n, u, i)
    }
    u.xy = function(t, e, n, u) {
        return o(t, "xy", e, n, u)
    }
    ,
    u.y = function(t, e, n) {
        return o(t, "y", 0, e, n)
    }
    ,
    u.x = function(t, e, n) {
        return o(t, "x", e, 0, n)
    }
    ,
    t.$ui = t.$ui || {},
    t.$ui.control = u
}(this);
!function(t) {
    "use strict";
    function e(t, e) {
        document.documentElement.addEventListener(t, e, !1)
    }
    function o(t, e) {
        document.documentElement.removeEventListener(t, e, !1)
    }
    function n(t, e) {
        return !(t.right <= e.left || t.left >= e.right || t.bottom <= e.top || t.top >= e.bottom)
    }
    function l(t, l, c) {
        function r() {
            if (v.target) {
                for (var t = g.querySelectorAll(v.target), e = [], o = 0, l = t.length; l > o; o++)
                    n(x, t[o].getBoundingClientRect()) && e.push(t[o]);
                return e
            }
        }
        function i(t) {
            v.onstart.call(g, t, b),
            E = !0
        }
        function s(t) {
            d = t.clientX - p,
            m = t.clientY - f;
            var e = Math.abs(d)
              , o = Math.abs(m);
            x.top = m > 0 ? f : t.clientY,
            x.left = d > 0 ? p : t.clientX,
            b.style.top = x.top + "px",
            b.style.left = x.left + "px",
            (e > v.distance || o > v.distance) && (t.preventDefault(),
            E || i(t),
            b.style.display = "block",
            x.right = x.left + e,
            x.bottom = x.top + o,
            b.style.width = e + "px",
            b.style.height = o + "px",
            v.ondraw.call(g, t, r()))
        }
        function a(t) {
            this.isEqualNode(t.target || t.srcElement) && (g.appendChild(b),
            p = t.clientX,
            f = t.clientY,
            s(t),
            e("mousemove", s),
            e("touchmove", s),
            e("mouseup", u),
            e("touchend", u),
            e("contextmenu", u),
            v.oninit.call(g, t, b))
        }
        function u(t) {
            o("mousemove", s),
            o("touchmove", s),
            o("mouseup", u),
            o("touchend", u),
            o("contextmenu", u),
            v.onstop.call(g, t, r()),
            b.style.display = "none",
            g.removeChild(b),
            E = !1
        }
        if ("object" == typeof l && (c = l,
        l = null),
        "string" == typeof t && (t = document.querySelector(t)),
        !t)
            throw new Error("$box : element missing");
        var d, m, p, f, h, y = {
            distance: 10,
            oninit: $noop,
            onstart: $noop,
            ondraw: function(t, e, o) {},
            onstop: $noop
        }, v = $extend(y, c), g = t;
        h = l ? function(t) {
            for (var e = t.target; e && 1 == e.nodeType && !e.matches(l); )
                e = e.parentNode;
            e && 9 != e.nodeType && (g = e,
            a.call(g, t))
        }
        : a;
        var b = document.createElement("div");
        b.className = "ui_select_box",
        b.style.position = "fixed",
        b.style.zIndex = 9999,
        b.style.border = "1px dotted #000",
        b.style.backgroundColor = "rgba(0,0,0,.1)",
        b.style.display = "none";
        var x = {
            right: 0,
            left: 0,
            bottom: 0,
            top: 0
        }
          , E = !1;
        return t.addEventListener("mousedown", h, !1),
        {
            destroy: function() {
                t.removeEventListener("mousedown", h, !1)
            }
        }
    }
    !function(t) {
        Element && !t.matches && (t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector)
    }(Element.prototype),
    l.overlap = n,
    t.$box = l
}(this);
!function(e) {
    "use strict";
    function t(e, t) {
        document.documentElement.addEventListener(e, t, !1)
    }
    function o(e, t) {
        document.documentElement.removeEventListener(e, t, !1)
    }
    function n(e, l, i) {
        function s(e) {
            h = e.clientX - v,
            g = e.clientY - b,
            (Math.abs(h) > M.distance || Math.abs(g) > M.distance) && (e.preventDefault(),
            C || r(e),
            h += x,
            g += y,
            h = h > E ? E : $ > h ? $ : h,
            g = g > S ? S : N > g ? N : g,
            M.grid && (h = ~~((h + M.grid[0] / 2) / M.grid[0]) * M.grid[0],
            g = ~~((g + M.grid[1] / 2) / M.grid[1]) * M.grid[1]),
            M.ghost ? (w.style.left = h + "px",
            w.style.top = g + "px") : (M.elem.style.left = h + "px",
            M.elem.style.top = g + "px"),
            M.ondrag.call(M.elem, e, h, g, w))
        }
        function d(e) {
            h = e.clientX - v,
            g = e.clientY - b,
            (Math.abs(h) > M.distance || Math.abs(g) > M.distance) && (e.preventDefault(),
            C || r(e),
            h += x,
            g += y,
            M.grid && (h = ~~((h + M.grid[0] / 2) / M.grid[0]) * M.grid[0],
            g = ~~((g + M.grid[1] / 2) / M.grid[1]) * M.grid[1]),
            M.ghost ? (w.style.left = h + "px",
            w.style.top = g + "px") : (M.elem.style.left = h + "px",
            M.elem.style.top = g + "px"),
            M.ondrag.call(M.elem, e, h, g, w))
        }
        function r(e) {
            if (M.ghost)
                document.body.appendChild(w);
            else {
                var t = getComputedStyle(M.elem, null);
                if (x = M.elem.offsetLeft - (parseInt(t.marginLeft) || 0),
                y = M.elem.offsetTop - (parseInt(t.marginTop) || 0),
                "absolute" === M.position || "fixed" === M.position)
                    M.elem.style.position = "fixed" == t.position ? "fixed" : "absolute",
                    M.elem.style.boxSizing = M.elem.style.webkitBoxSizing = M.elem.style.MozBoxSizing = "border-box",
                    M.elem.style.height = M.elem.offsetHeight + "px",
                    M.elem.style.width = M.elem.offsetWidth + "px",
                    M.elem.style.left = x + "px",
                    M.elem.style.top = y + "px";
                else {
                    var o = parseInt(t.left) || 0
                      , l = parseInt(t.top) || 0;
                    M.constrain && (S = S - y + l,
                    N = N - y + l,
                    E = E - x + o,
                    $ = $ - x + o),
                    x = o,
                    y = l,
                    M.elem.style.position = "relative",
                    M.elem.style.left = x + "px",
                    M.elem.style.top = y + "px"
                }
            }
            M.onstart.call(M.elem, e, h, g, w),
            n.elem = M.elem,
            n.ghost = w,
            C = !0
        }
        function m(e) {
            if (v = e.clientX,
            b = e.clientY,
            M.ghost) {
                w = M.elem.cloneNode(!0);
                {
                    getComputedStyle(M.elem, null)
                }
                w.classList.add("nopointer"),
                w.style.height = M.elem.offsetHeight + "px",
                w.style.width = M.elem.offsetWidth + "px",
                w.style.position = "fixed",
                w.style.zIndex = 9999,
                w.style.opacity = ".7";
                var o = M.elem.getBoundingClientRect();
                x = o.left,
                y = o.top
            } else
                x = M.elem.offsetLeft,
                y = M.elem.offsetTop;
            z(e),
            t("mousemove", z),
            t("touchmove", z),
            t("mouseup", a),
            t("touchend", a),
            t("contextmenu", a),
            M.oninit.call(M.elem, e, h, g, w)
        }
        function a(e) {
            o("mousemove", z),
            o("touchmove", z),
            o("mouseup", a),
            o("touchend", a),
            o("contextmenu", a),
            C && M.onstop.call(M.elem, e, h, g, w),
            "function" == typeof n.ondrop && (n.ondrop(M.elem, w),
            n.ondrop = null),
            n.elem = null,
            n.ghost = null,
            w && C && w.parentNode && w.parentNode.isEqualNode(document.body) ? document.body.removeChild(w) : w = null,
            C = !1
        }
        if ("object" == typeof l && (i = l,
        l = null),
        "string" == typeof e && (e = document.querySelector(e)),
        !e)
            throw new Error("$box : element missing");
        var p, f, c, u, h, g, y, x, v, b, S, E, w, L = {
            constrain: !1,
            ghost: !1,
            grid: !1,
            position: "absolute",
            handle: null,
            distance: 5,
            oninit: $noop,
            onstart: $noop,
            ondrag: $noop,
            onstop: $noop
        }, M = $extend("active", L, i), N = 0, $ = 0, z = M.sortable ? dragSort : M.constrain ? s : d;
        if (M.elem = e,
        l)
            c = e,
            p = f = e,
            u = function(e) {
                for (var t = e.target; t && 1 == t.nodeType && !t.matches(l); )
                    t = t.parentNode;
                t && 9 != t.nodeType && (M.elem = t,
                S = f.offsetHeight - M.elem.offsetHeight - .5,
                E = f.offsetWidth - M.elem.offsetWidth - .5,
                m(e))
            }
            ;
        else {
            for (c = M.handle || e,
            p = e.parentNode,
            f = p; f.parentNode && 9 !== f.parentNode.nodeType && "static" == window.getComputedStyle(p, null).position; )
                f = f.parentNode;
            u = function(e) {
                m(e)
            }
            ,
            S = f.offsetHeight - e.offsetHeight - .5,
            E = f.offsetWidth - e.offsetWidth - .5
        }
        var C = !1;
        return c.addEventListener("mousedown", u, !1),
        c.addEventListener("touchstart", u, !1),
        {
            destroy: function() {
                c.removeEventListener("mousedown", u, !1),
                c.removeEventListener("touchstart", u, !1)
            }
        }
    }
    !function(e) {
        Element && !e.matches && (e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector)
    }(Element.prototype),
    e.$drag = n
}(this);
!function(e) {
    "use strict";
    function o(e, o, n) {
        function a(e) {
            $drag.elem && (c.classList.add("ui_dragging"),
            c.matches(d.allowedZone) || c.classList.add("ui_dragging--no-drop"),
            $drag.elem.matches(d.accept) ? ($drag.elem.parentNode.isEqualNode(c) ? u = !1 : (u = !0,
            c.classList.add("ui_dragging--droppable")),
            d.onaccept.call(c, e, $drag.elem),
            $drag.ondrop = function() {
                d.ondrop.call(c, e, $drag.elem, l ? "copy" : g ? "link" : u ? "move" : "none")
            }
            ) : (c.classList.add("ui_dragging--no-drop"),
            d.onrefuse.call(c, e, $drag.elem),
            $drag.ondrop = null))
        }
        function t() {
            c.classList.remove("ui_dragging"),
            c.classList.remove("ui_dragging--copy"),
            c.classList.remove("ui_dragging--move"),
            c.classList.remove("ui_dragging--link"),
            c.classList.remove("ui_dragging--droppable"),
            c.classList.remove("ui_dragging--no-drop"),
            $drag.ondrop = null
        }
        if ("object" == typeof o && (n = o,
        o = null),
        "string" == typeof e && (e = document.querySelector(e)),
        !e)
            throw new Error("$drop : element missing");
        var r, s, i = {
            accept: "*",
            allowedZone: "*",
            onaccept: $noop,
            onrefuse: $noop,
            ondrop: $noop
        }, d = $extend(i, n), c = e;
        o ? (r = function(e) {
            for (var n = e.target; n && 1 == n.nodeType && !n.matches(o); )
                n = n.parentNode;
            n && 9 != n.nodeType && (c = n,
            a.call(c, e))
        }
        ,
        s = function(e) {
            for (var n = e.target; n && 1 == n.nodeType && !n.matches(o); )
                n = n.parentNode;
            n && 9 != n.nodeType && (c = n,
            t.call(c, e))
        }
        ) : (r = a,
        s = t);
        var l = !1
          , g = !1
          , u = !1;
        return e.addEventListener("mouseover", r, !1),
        e.addEventListener("mouseout", s, !1),
        e.addEventListener("mousemove", function(e) {
            l = e.ctrlKey ? !0 : !1,
            g = e.shiftKey ? !0 : !1,
            c.classList.contains("ui_dragging--droppable") && (l ? c.classList.add("ui_dragging--copy") : c.classList.remove("ui_dragging--copy"),
            g ? c.classList.add("ui_dragging--link") : c.classList.remove("ui_dragging--link"))
        }, !1),
        {
            destroy: function() {}
        }
    }
    !function(e) {
        Element && !e.matches && (e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector)
    }(Element.prototype),
    e.$drop = o
}(this);
!function(t, e) {
    "undefined" != typeof module ? module.exports = e() : "function" == typeof define && "object" == typeof define.amd ? define(e) : this[t] = e()
}("$pos", function() {
    "use strict";
    function t(t, o, n) {
        return t = t.replace(/([a-z]+)([+-])?/g, function(t, e, o) {
            return ("top" == e ? "bottom" : "bottom" == e ? "top" : "right" == e ? "left" : "left" == e ? "right" : e) + ("+" == o ? "-" : "-" == o ? "+" : "")
        }),
        e(t, o, n)
    }
    function e(t, e, o) {
        var n = o || {
            top: 0,
            left: 0
        }
          , f = e.offsetHeight || 0
          , i = e.offsetWidth || 0;
        return t.replace(/(?:(right|left|center)(?:([+-])(\d+)(%)?)?)? ?(?:(top|bottom|center)(?:([+-])(\d+)(%)?)?)?/, function(t, e, o, l, r, p, s, d, u) {
            p || (p = "center"),
            e || (e = "center"),
            "right" == e && (n.left += i),
            "center" == e && (n.left += i / 2),
            "bottom" == p && (n.top += f),
            "center" == p && (n.top += f / 2),
            r && (l = i / 100 * +l),
            u && (d = f / 100 * +d),
            l && (n.left = n.left - +(o + l)),
            d && (n.top = n.top - +(s + d))
        }),
        n
    }
    function o(o, n) {
        function f() {
            var t, e = h.of.getBoundingClientRect(), n = e.top - x.y, f = x.h - n - h.of.offsetHeight;
            t = o.parentNode.isEqualNode(h.of) ? x.h : n > f ? n : f,
            o.style.height = t + "px",
            o.setAttribute("data-ui-menu-scroller", !0)
        }
        function i(t) {
            if (t || (t = h.of),
            1 === t.nodeType) {
                var e = t.getBoundingClientRect();
                u = e.left,
                a = e.top
            } else
                t.preventDefault && (u = t.pageX,
                a = t.pageY);
            d(u, a, u, a)
        }
        if (!o)
            throw new Error("$pos: element is undefined");
        o.style.position = "fixed";
        for (var l = !1, r = o.parentNode, p = window.getComputedStyle(r, null), s = {
            top: 0,
            left: 0
        }; r.parentNode && 9 !== r.parentNode.nodeType && "none" == p.transform && "none" == p.perspective; )
            r.getAttribute("data-ui-menu-scroller") && (l = r),
            r = r.parentNode,
            p = window.getComputedStyle(r, null);
        s = r.getBoundingClientRect();
        var d, u, a, c = {
            my: "left top",
            at: "left bottom",
            of: {},
            collision: "flip",
            within: window,
            transform: !1,
            overflow: "none"
        }, h = $extend(c, n), y = e(h.my, o), g = e(h.at, h.of), m = g.top - y.top - s.top, w = g.left - y.left - s.left, x = {
            x: 0,
            y: 0,
            h: 0,
            w: 0
        }, v = {};
        $io.isWindow(h.within) || !h.within ? (x.h = window.innerHeight,
        x.w = window.innerWidth) : (v = h.within.getBoundingClientRect(),
        x.x = v.left,
        x.y = v.top,
        x.h = h.within.offsetHeight,
        x.w = h.within.offsetWidth),
        o.offsetHeight > x.h && f();
        var b = s.left == v.left ? 0 : v.left
          , C = s.top == v.top ? 0 : v.top
          , T = x.w - o.offsetWidth + b
          , H = x.h - o.offsetHeight + C;
        if (1 === h.of.nodeType)
            var N = window.getComputedStyle(h.of, null)
              , W = N.transform || N.webkitTransform || N.MozTransform || N.msTransform;
        if (W && "none" != W)
            o.style.transformOrigin = N.transformOrigin,
            d = function() {
                var t, e, n, f;
                0 == s.left ? (t = v.left,
                e = v.top,
                n = w,
                f = m) : (t = 0,
                e = 0,
                n = w + v.left,
                f = m + v.top),
                o.style.left = h.of.offsetLeft + t + "px",
                o.style.top = h.of.offsetTop + e + "px",
                o.style.transform = W + " translateX(" + n + "px) translateY(" + f + "px)"
            }
            ;
        else if ("fit" == h.collision)
            d = function(t, e) {
                t += w,
                e += m,
                t = t > T ? T : b > t ? b : t,
                e = e > H ? H : C > e ? C : e,
                o.style.left = t + "px",
                o.style.top = e + "px"
            }
            ;
        else if ("flip" == h.collision || "flipfit" == h.collision) {
            var B = t(h.my, o)
              , R = t(h.at, h.of)
              , $ = R.top - B.top - s.top
              , S = R.left - B.left - s.left;
            d = "flipfit" == h.collision ? function(t, e, n, f) {
                t += w,
                e += m,
                (t > T || b > t) && (t = n + S),
                (e > H || C > e) && (e = f + $),
                t = t > T ? T : b > t ? b : t,
                e = e > H ? H : C > e ? C : e,
                o.style.left = t + "px",
                o.style.top = e + "px"
            }
            : function(t, e, n, f) {
                t += w,
                e += m,
                (t > T || b > t) && (t = n + S),
                (e > H || C > e) && (e = f + $),
                o.style.left = t + "px",
                o.style.top = e + "px"
            }
        } else
            d = function(t, e) {
                o.style.left = t + w + "px",
                o.style.top = e + m + "px"
            }
            ;
        return i(h.of),
        {
            update: i
        }
    }
    return o
});
!function(e, t) {
    "undefined" != typeof module ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define(t) : this[e] = t()
}("$resize", function() {
    "use strict";
    function e(e, t) {
        document.documentElement.addEventListener(e, t, !1)
    }
    function t(e, t) {
        document.documentElement.removeEventListener(e, t, !1)
    }
    return function(s, o) {
        function n(s, o) {
            function n(e) {
                e.preventDefault(),
                e.stopPropagation(),
                l(e)
            }
            function i(e) {
                e.preventDefault()
            }
            function l(t) {
                c = t.clientX,
                f = t.clientY,
                h = s.offsetWidth,
                a = s.offsetHeight,
                m = s.offsetTop,
                w = s.offsetLeft,
                e("mousemove", g),
                e("touchmove", g),
                e("mouseup", r),
                e("touchend", r),
                e("contextmenu", i),
                document.documentElement.style.cursor = o + "-resize",
                d.start && d.start(s, t)
            }
            function r(e) {
                document.documentElement.style.cursor = "auto",
                t("mousemove", g),
                t("touchmove", g),
                t("mouseup", r),
                t("touchend", r),
                t("contextmenu", i),
                d.stop && d.stop(s, e)
            }
            function u(e) {
                if (("s" === o || "se" === o || "sw" === o) && (s.style.height = a + e.clientY - f + "px"),
                ("e" === o || "ne" === o || "se" === o) && (s.style.width = h + e.clientX - c + "px"),
                "n" === o || "ne" === o || "nw" === o) {
                    var t = e.clientY - f;
                    p && (s.style.top = m + t + "px"),
                    s.style.height = a - t + "px"
                }
                if ("w" === o || "nw" === o || "sw" === o) {
                    var t = e.clientX - c;
                    p && (s.style.left = w + t + "px"),
                    s.style.width = h - t + "px"
                }
            }
            function y() {
                v.removeEventListener("mousedown", n, !1),
                v.removeEventListener("touchstart", n, !1),
                v.parentNode && v.parentNode.removeChild(v)
            }
            var c, f, h, a, m, w, g, v = document.createElement("div"), o = o || "s";
            try {
                g = $io.fn.throttle(u, 15)
            } catch (x) {
                g = u
            }
            return v.className = "js-resizer js-resizer-" + o,
            v.style.position = "absolute",
            "n" == o ? (v.style.top = "0",
            v.style.left = "0",
            v.style.right = "0",
            v.style.bottom = "auto",
            v.style.height = "6px",
            v.style.cursor = "n-resize") : "s" == o ? (v.style.top = "auto",
            v.style.left = "0",
            v.style.right = "0",
            v.style.bottom = "0",
            v.style.height = "6px",
            v.style.cursor = "s-resize") : "e" == o ? (v.style.top = "0",
            v.style.left = "auto",
            v.style.right = "0",
            v.style.bottom = "0",
            v.style.width = "6px",
            v.style.cursor = "e-resize") : "w" == o ? (v.style.top = "0",
            v.style.left = "0",
            v.style.right = "auto",
            v.style.bottom = "0",
            v.style.width = "6px",
            v.style.cursor = "w-resize") : "nw" == o ? (v.style.top = "0",
            v.style.left = "0",
            v.style.height = "6px",
            v.style.width = "6px",
            v.style.cursor = "nw-resize") : "ne" == o ? (v.style.top = "0",
            v.style.right = "0",
            v.style.height = "6px",
            v.style.width = "6px",
            v.style.cursor = "ne-resize") : "sw" == o ? (v.style.bottom = "0",
            v.style.left = "0",
            v.style.height = "6px",
            v.style.width = "6px",
            v.style.cursor = "sw-resize") : "se" == o && (v.style.bottom = "0",
            v.style.right = "0",
            v.style.height = "6px",
            v.style.width = "6px",
            v.style.cursor = "se-resize"),
            s.appendChild(v),
            v.addEventListener("mousedown", n, !1),
            v.addEventListener("touchstart", n, !1),
            {
                destroy: y
            }
        }
        function i() {
            for (var e = 0, t = f.length; t > e; e++)
                f[e].destroy()
        }
        if (!s)
            throw new Error("$resize: element is undefined");
        if (!s.getAttribute("data-js-resize-init")) {
            s.setAttribute("data-js-resize-init", !0);
            for (var l = s.parentNode; l && l.parentNode && 9 !== l.parentNode.nodeType && "static" == window.getComputedStyle(l, null).position; )
                l = l.parentNode;
            "string" == typeof o && (o = {
                handles: o
            });
            var r = window.getComputedStyle(s, null)
              , u = {
                handles: "e, s, se",
                start: $noop,
                resize: $noop,
                stop: $noop
            }
              , d = $extend(u, o)
              , p = "fixed" == r.position || "absolute" == r.position
              , y = s.getBoundingClientRect()
              , c = (y.top,
            y.left,
            []);
            ("static" == r.position || "" == r.position) && (s.style.position = "relative"),
            "all" == d.handles ? c = ["n", "w", "e", "s", "nw", "ne", "sw", "se"] : d.handles.replace(/([^,\s]+)/g, function(e, t) {
                c.push(t)
            });
            for (var f = [], h = 0, a = c.length; a > h; h++)
                f.push(n(s, c[h]));
            return {
                destroy: i
            }
        }
    }
});
!function(e) {
    "use strict";
    function t(e, t) {
        e.className = "ui_notif animated fadeOut",
        setTimeout(function() {
            e.parentNode && e.parentNode.removeChild(e)
        }, t ? 150 : 500)
    }
    function i(e, i) {
        function o() {
            h = setTimeout(function() {
                t(r)
            }, v + 2e3)
        }
        "string" == typeof e && (e = {
            description: e
        });
        var a = $extend({}, n, e);
        i || (i = a["default"]);
        var l, c = a.dest, s = i.getAttribute("data-js-notif-id");
        if (s)
            l = d[s];
        else {
            l = document.createElement("div"),
            c.appendChild(l),
            l.style.zIndex = 99999;
            var u = i.getBoundingClientRect();
            l.style.position = "fixed",
            l.style.bottom = window.innerHeight - ~~(u.top + u.height / 2) + "px",
            l.style.right = window.innerWidth - ~~(u.left + u.width / 2) + "px",
            i.setAttribute("data-js-notif-id", d.push(l) - 1)
        }
        var r = document.createElement("div")
          , m = document.createElement("b")
          , u = document.createElement("p")
          , f = document.createElement("span");
        r.style.visibility = "hidden",
        r.className = "ui_notif",
        f.innerHTML = "&times;";
        var p = 0;
        a.title && (m.innerHTML = a.title,
        r.appendChild(m),
        p += a.title.length),
        u.innerHTML = a.description,
        p += a.description.length,
        r.appendChild(u),
        r.appendChild(f),
        f.onclick = function() {
            t(r, !0)
        }
        ,
        a.delay !== !1 && (r.onmouseover = function() {
            clearTimeout(h)
        }
        ,
        r.onmouseout = function() {
            o()
        }
        ),
        setTimeout(function() {
            r.style.visibility = "visible",
            r.className = "ui_notif animated fadeIn"
        }, 100),
        l.appendChild(r),
        p /= 5;
        var h, v = p / 3 * 1e3;
        a.delay !== !1 && o()
    }
    {
        var n = {
            "default": document.body,
            dest: document.body
        }
          , d = [];
        document.createElement("div")
    }
    i.config = function(e) {
        $extend(n, e)
    }
    ,
    e.$notif = i
}(this);
!function(e) {
    "use strict";
    function t(e) {
        e.setAttribute("aria-hidden", !1),
        e.setAttribute("aria-expanded", !0),
        e.classList.add("ui_menu--open")
    }
    function i(e) {
        e.setAttribute("aria-hidden", !0),
        e.setAttribute("aria-expanded", !1),
        e.classList.remove("ui_menu--open")
    }
    function n(e, n) {
        n.classList.contains("ui_menu--open") ? (i(n),
        e.classList.remove("ui_menu__item--focus")) : t(n)
    }
    function o(e) {
        function t(i) {
            for (var n = i.target; n && n.id !== e; )
                n = n.parentNode;
            n || (s(),
            document.removeEventListener("mousedown", t, !0),
            f[e] = !1)
        }
        f[e] || (f[e] = !0,
        document.addEventListener("mousedown", t, !0))
    }
    function s(e) {
        var t = (e || document).querySelectorAll(".ui_menu__item--focus")
          , n = (e || document).querySelectorAll(".ui_menu--open")
          , o = (e || document).querySelectorAll(".ui_menu--scroller");
        $io.arr.all(t, function(e) {
            v[e.parentNode.parentNode.id] = !1,
            e.classList.remove("ui_menu__item--focus")
        }),
        $io.arr.all(n, function(e) {
            i(e)
        }),
        $io.arr.all(o, function(e) {
            e.removeAttribute("style"),
            e.classList.remove("ui_menu--scroller"),
            e.classList.contains("ui_menu--scroller--active") && e.classList.remove("ui_menu--scroller--active"),
            e.removeEventListener("mouseover", a, !1)
        })
    }
    function a(e) {
        e.target.matches(".ui_menu__right_handler") ? this.classList.remove("ui_menu--scroller--active") : this.classList.add("ui_menu--scroller--active")
    }
    function r(e) {
        e.addEventListener("mouseover", a, !1),
        e.querySelector(".ui_menu__up_handler").addEventListener("mouseover", a, !1)
    }
    function u(e, a, u) {
        function f(e) {
            $io.obj.all(e, function(e) {
                e.key && (M[e.key] = e.action),
                "function" != typeof e.items && f(e.items)
            })
        }
        function g(e, t, n, o) {
            if (n = "function" == typeof n ? n.call(t.thisArg) : n,
            n === !1)
                return !1;
            var s = document.createDocumentFragment()
              , a = c.cloneNode(!1)
              , r = l.cloneNode(!1);
            if (a.appendChild(r),
            a.id = "ui_menu_" + p++,
            !n)
                return !1;
            for (var u = 0, f = n.length; f > u; u++)
                if (n[u]) {
                    var v = "function" == typeof n[u].display ? n[u].display.call(t.thisArg) : n[u].display;
                    if (v !== !1) {
                        var h = n[u]
                          , A = d.cloneNode(!1);
                        if ("---" !== h.name) {
                            A.id = "ui_menu__item_" + _++;
                            var N = m.cloneNode(!1)
                              , x = document.createElement("span")
                              , $ = document.createElement("span")
                              , w = null;
                            if ($.className = "ui_menu__item__ico",
                            void 0 !== h.radio ? ($.className = "ui_menu__item__ico ui_form-ico-radio",
                            w = b(h.radio, A, h.action)) : h.checkbox === !0 && ($.className = "ui_menu__item__ico ui_form-ico-checkbox",
                            w = y(A, h.action)),
                            N.innerHTML = "string" == typeof h.name ? h.name : h,
                            h.icon) {
                                var E = new Image;
                                E.src = h.icon,
                                $.appendChild(E)
                            } else
                                $.innerHTML = "&nbsp;";
                            if (A.appendChild($),
                            A.appendChild(N),
                            h.key && (x.innerHTML = h.key.replace(/(\+|^)[a-z]/g, function(e) {
                                return e.toUpperCase()
                            }),
                            x.className = "ui_menu__item__key",
                            A.appendChild(x)),
                            I[A.id] = {
                                item: A,
                                val: h,
                                action: w || h.action
                            },
                            L(e, A, h),
                            h.items) {
                                A.setAttribute("aria-haspopup", !0),
                                A.classList.add("ui_menu__item--opener");
                                var C = function(e, t, n, o) {
                                    return function() {
                                        var s = g(e, t, n.items, n);
                                        s || (s = document.createElement("div"),
                                        s.innerHTML = '<ul><li class="ui_menu__item ui_menu__item--disabled"><em>No items...</em></ul></li>'),
                                        s.className = "ui_menu__submenu",
                                        t.position !== !1 && i(s),
                                        o.appendChild(s)
                                    }
                                }(e, t, h, A);
                                t.recursive === !0 ? C() : q[A.id] = C
                            }
                            s.appendChild(A)
                        } else
                            A.className = "ui_menu__separator",
                            A.appendChild(document.createElement("hr")),
                            s.appendChild(A)
                    }
                }
            return r.appendChild(s),
            a
        }
        function b(e, t, i) {
            function n() {
                for (var n, o = P[e], s = 0, a = o.length; a > s; s++)
                    o[s].setAttribute("data-menuitem-selected", !1),
                    n = I[o[s].id].val,
                    "function" != typeof n.selected && (n.selected = !1);
                n = I[t.id].val,
                "function" != typeof n.selected && (n.selected = !0),
                t.setAttribute("data-menuitem-selected", !0),
                i && i.call(this, n)
            }
            return P[e] ? P[e].push(t) : P[e] = [t],
            n
        }
        function y(e, t) {
            function i() {
                var i = "true" === e.getAttribute("data-menuitem-selected");
                e.setAttribute("data-menuitem-selected", !i);
                var n = I[e.id].val;
                "function" != typeof n.selected && (n.selected = !i),
                t && t.call(this, !i)
            }
            return i
        }
        function L(e, t, i) {
            var n = "function" == typeof i.disabled ? i.disabled.call(k.thisArg) : i.disabled
              , o = "function" == typeof i.selected ? i.selected.call(k.thisArg) : i.selected;
            n ? t.classList.add("ui_menu__item--disabled") : t.classList.remove("ui_menu__item--disabled"),
            t.setAttribute("data-menuitem-selected", o)
        }
        function A(e) {
            for (var t in I)
                if (I.hasOwnProperty(t)) {
                    var i = I[t];
                    L(e, i.item, i.val)
                }
        }
        function N(i) {
            if (i && (i.stopImmediatePropagation(),
            i.preventDefault()),
            !E.classList.contains("ui_menu--open")) {
                k.solo && s(),
                t(E),
                E.style.zIndex = $maxZ(".ui_menu, .ui_icon, .ui_window").num + 1;
                var n = {
                    collision: "flip",
                    of: k.position.of || e,
                    within: k.position.within
                };
                k.position.my && (n.my = k.position.my),
                k.position.at && (n.at = k.position.at),
                D = $pos(E, n),
                E.getAttribute("data-ui-menu-scroller") && x(E),
                o(E.id)
            }
        }
        function x(e) {
            function t() {
                i.disabled = 0 === e.scrollTop ? !0 : !1,
                n.disabled = e.scrollHeight - e.scrollTop === e.clientHeight ? !0 : !1
            }
            var i, n, o, s;
            if (e.classList.contains("ui_menu--scroller--active") && e.classList.remove("ui_menu--scroller--active"),
            e.classList.add("ui_menu--scroller"),
            1 == e.childNodes.length) {
                i = document.createElement("button"),
                n = document.createElement("button"),
                o = document.createElement("div"),
                i.className = "ui_menu__up_handler",
                n.className = "ui_menu__down_handler",
                o.className = "ui_menu__right_handler";
                var a = e.firstChild.offsetWidth;
                i.style.width = n.style.width = a + "px",
                e.appendChild(i),
                e.appendChild(n),
                e.appendChild(o),
                s = e.getBoundingClientRect(),
                i.style.top = s.top + "px",
                n.style.bottom = window.innerHeight - e.offsetHeight - s.top + "px",
                o.style.left = s.left + a + "px",
                i.onclick = function() {
                    e.scrollTop -= 80,
                    t()
                }
                ,
                n.onclick = function() {
                    e.scrollTop += 80,
                    t()
                }
                ,
                e.onscroll = function() {
                    t()
                }
                ,
                t()
            }
            r(e)
        }
        function $(e) {
            for (var i = e.target; i && "LI" !== i.tagName; )
                i = i.parentNode;
            i && (k.position !== !1 && i.classList.contains("ui_menu__item--focus") || i.classList.contains("ui_menu__item--disabled") || $io.arr.each(i.parentNode.childNodes, function(e) {
                if (e.id == i.id) {
                    if ("bar" == k.mode && !v[E.id] && i.parentNode.parentNode.id == E.id)
                        return;
                    e.classList.add("ui_menu__item--focus"),
                    setTimeout(function() {
                        if (e.classList.contains("ui_menu__item--opener") && !e.classList.contains("ui_menu__item--disabled")) {
                            q[i.id] && q[i.id]();
                            var s = e.lastChild;
                            k.position === !1 ? n(e, s) : (s.style.position = "fixed",
                            t(s),
                            $pos(s, {
                                my: "left top-1",
                                at: "bar" == k.mode && i.parentNode.parentNode.id == E.id ? "left bottom" : "right top",
                                of: e,
                                collision: "flipfit",
                                within: k.position.within || window
                            }),
                            s.getAttribute("data-ui-menu-scroller") && x(s),
                            o(E.id))
                        }
                    }, 10)
                } else
                    k.closeOthers && (e.classList.remove("ui_menu__item--focus"),
                    s(e))
            }))
        }
        function w(e) {
            var t = this;
            if ("bar" == k.mode && (v[E.id] ? (v[E.id] = !1,
            s()) : (v[E.id] = !0,
            $(e))),
            !t.classList.contains("ui_menu__item--disabled")) {
                var i = I[t.id].action
                  , n = typeof i;
                !T || "string" != n && "function" != n || (j.innerHTML = "function" == n ? i.call(k.thisArg) : i,
                s()),
                "function" == n && i.call(k.thisArg, e, I[t.id].val) !== !1 && s()
            }
        }
        $io.isElement(e) || (u = a || {},
        a = e,
        e = document.createElement("div"));
        var E, C = "tree" === u.mode ? $extend({}, h, {
            closeOthers: !1,
            trigger: "click",
            position: !1
        }) : "bar" === u.mode ? $extend({}, h, {}) : h, k = $extend({}, C, u), T = !1, H = !1, q = {}, I = {};
        "tabs" === k.mode && (T = !0,
        k.mode = "bar"),
        "context" === k.mode && (H = !0,
        k.mode = "popup"),
        k.thisArg || (k.thisArg = e),
        E = g(e, k, a),
        E.className = "ui_menu ui_menu--" + ("inline" === k.mode || "popup" === k.mode ? "menu" : k.mode),
        E.setAttribute("tabindex", "0");
        var M = {};
        f(a);
        var S, O = $key(k.thisArg, M, {
            thisArg: k.thisArg
        });
        if (k.key) {
            var z = {};
            z[k.key] = function() {
                N()
            }
            ,
            S = $key(z)
        }
        var j;
        "popup" !== k.mode ? T ? (e.appendChild(E),
        k.dest ? j = k.dest : (j = document.createElement("div"),
        j.className = "ui_menu--tabs__content",
        e.appendChild(j))) : e.appendChild(E) : (document.body.appendChild(E),
        E.classList.add("ui_menu--popup"),
        i(E),
        H ? e.addEventListener("contextmenu", N, !1) : "auto" === k.trigger ? N() : e.addEventListener("click", N, !1)),
        E.style.zIndex = $maxZ(".ui_menu", E.parentNode).num + 1;
        var D, P = {}, Z = "auto" == k.trigger ? "mouseover" : k.trigger;
        E.addEventListener(Z, $, !1),
        v[E.id] = !1,
        E.onfocus = function(e) {
            var t = E.querySelector(".ui_menu__item");
            w.call(t, {
                target: t
            })
        }
        ,
        E.onblur = function(e) {
            s()
        }
        ,
        $el(E).on("click", ".ui_menu__item", w);
        var B = {
            destroy: function() {
                $el(E).off("click", ".ui_menu__item", w),
                E.removeEventListener(Z, $, !1),
                q = null,
                I = null,
                O && O.destroy && O.destroy(),
                S && S.destroy && S.destroy()
            },
            refresh: function(e) {
                e && (k.thisArg = e),
                A(k.thisArg)
            },
            show: function(e, t) {
                e && (k.thisArg = e,
                A(e)),
                t && (k.position = t),
                N()
            },
            setThisArg: function(e) {
                e && (k.thisArg = e,
                A(e))
            },
            key: O,
            position: D
        };
        return B
    }
    var c = document.createElement("div")
      , l = document.createElement("ul")
      , d = document.createElement("li")
      , m = document.createElement("span")
      , p = 0
      , _ = 0;
    l.setAttribute("role", "menu"),
    d.setAttribute("role", "menuitem"),
    d.setAttribute("tabindex", "-1"),
    d.className = "ui_menu__item",
    m.className = "ui_menu__item__text";
    var f = {}
      , v = {}
      , h = {
        mode: "popup",
        icons: "auto",
        recursive: !1,
        solo: !0,
        closeOthers: !0,
        trigger: "mouseover",
        position: {
            within: window
        }
    };
    u.config = function(e) {
        $extend(h, e)
    }
    ,
    u.extend = function(e, t) {
        var i = $extend([], e);
        return $io.obj.all(t, function(e, t) {
            t.replace(/^((after|before|replace|delete|extend):)?(([\d.]+)|(.*))/, function(t, n, o, s, a, r) {
                function u(e, t) {
                    var i;
                    return $io.arr.each(t, function(n, o) {
                        return n.name === e ? (i = {
                            arr: t,
                            pos: o
                        },
                        !1) : (n.items && (i = u(e, n.items)),
                        i ? !1 : void 0)
                    }),
                    i
                }
                if (a) {
                    var c = a.split(".")
                      , l = +c.pop()
                      , d = i;
                    $io.arr.all(c, function(e) {
                        var t = +e;
                        d = d[t].items ? d[t].items : d[t]
                    })
                } else if (r)
                    var m = u(r, i)
                      , d = m.arr
                      , l = m.pos;
                o && "before" !== o ? "after" === o ? $io.arr.insert(d, e, l + 1) : "extend" === o ? d[l] = $extend({}, d[l], e[0]) : "replace" === o ? d[l] = e[0] : "delete" === o && d.splice(l, 1) : $io.arr.insert(d, e, l)
            })
        }),
        i
    }
    ,
    e.$menu = u
}(window);
!function(e) {
    "use strict";
    function t(e, n, a, l, i, f) {
        var h = document.createDocumentFragment();
        if ("object" === a.type) {
            var b = r.cloneNode(!0)
              , v = c.cloneNode(!0);
            (a.title || l) && (b.textContent = a.title || l,
            h.appendChild(b)),
            $io.obj.each(a.properties, function(o, a) {
                v.appendChild(t(e, n, o, a, i ? i + "." + a : a, f && f[a] ? f[a] : null)),
                h.appendChild(v)
            })
        }
        if ("array" === a.type) {
            var b = r.cloneNode(!0)
              , v = c.cloneNode(!0);
            b.textContent = a.title || l,
            h.appendChild(b),
            v.appendChild(t(e, n, a.items, "", i, f)),
            h.appendChild(v)
        } else if ("string" === a.type || "boolean" === a.type || "number" === a.type || "integer" === a.type) {
            var g = u.cloneNode()
              , y = p.cloneNode();
            if (a["enum"]) {
                var $ = m.cloneNode();
                $io.arr.all(a["enum"], function(e) {
                    $.options[$.options.length] = new Option(e,e)
                })
            } else if ("textarea" === a.format)
                var $ = d.cloneNode();
            else {
                var $ = s.cloneNode();
                "string" === a.type && ($.type = "text"),
                ("number" === a.type || "integer" === a.type) && ($.type = "number")
            }
            if ("boolean" === a.type) {
                $.type = "checkbox",
                f ? $.checked = f : a["default"] && ($.checked = a["default"]);
                var x = document.createElement("span")
            } else
                f ? $.value = f : a["default"] && ($.value = a["default"]);
            a.placeholder && ($.placeholder = a.placeholder),
            a.ignore !== !0 && ($.name = i),
            n.disabled === !0 && ($.disabled = !0),
            a.attributes && $io.obj.all(a.attributes, function(e, t) {
                $[t] = e,
                console.log(t)
            }),
            x ? x.innerHTML = a.title || l : g.innerHTML = a.title || l,
            g && a.title !== !1 && y.appendChild(g),
            a.plugin && $io.obj.all(a.plugin, function(t, n) {
                if (o.plugin[n]) {
                    var a = o.plugin[n].call(e, y, $, t);
                    y = a.label,
                    $ = a.input
                }
            }),
            $ && y.appendChild($),
            x && y.appendChild(x),
            h.appendChild(y)
        }
        return h
    }
    function n(e, t) {
        var o = typeof e;
        f.indexOf(o) > -1 ? t.type = o : $io.isArray(e) ? (t.type = "array",
        t.items = {},
        n(e[0], t.items)) : $io.isObject(e) && (t.type = "object",
        t.properties = {},
        $io.obj.all(e, function(e, o) {
            t.properties[o] = {},
            n(e, t.properties[o])
        }))
    }
    function o(e, o) {
        var r = $extend({
            oninvalid: function() {
                console.log("invalid")
            }
        }, o);
        if ("FORM" == e.nodeName)
            return a(e);
        var c = $watch(i.cloneNode())
          , u = "ui_form_" + l++;
        c.id = u;
        var p;
        if (e.schema && e.data && (p = t(c, r, e.schema, "", "", e.data)),
        e.schema)
            p = t(c, r, e.schema, "", "");
        else {
            var s = {};
            n(e, s),
            p = t(c, r, s, "", "", e)
        }
        return c.appendChild(p),
        c.trigger("ready", c),
        {
            el: c,
            update: function(e) {
                e ? $io.obj.all(e, function(e, t) {
                    c[t] && (c[t].value = e)
                }) : $io.arr.all(c.elements, function(e) {
                    e.value = ""
                })
            }
        }
    }
    function a(e) {
        var t, n, o = {};
        return $io.arr.all(e.elements, function(e) {
            if ("" !== e.name)
                if ("checkbox" === e.type)
                    $io.obj.path(o, e.name, !!e.checked);
                else if ("number" === e.type)
                    $io.obj.path(o, e.name, 1 * e.value);
                else if ("select-multiple" === e.type) {
                    for (t = [],
                    n = e.options.length - 1; n >= 0; n -= 1)
                        e.options[n].selected && t.push(e.options[n].value);
                    $io.obj.path(o, e.name, t)
                } else
                    $io.obj.path(o, e.name, e.value)
        }),
        {
            post: o,
            action: e.getAttribute("action")
        }
    }
    {
        var l = 0
          , i = document.createElement("form")
          , r = document.createElement("strong")
          , c = document.createElement("div")
          , u = document.createElement("span")
          , p = document.createElement("label")
          , s = document.createElement("input")
          , d = document.createElement("textarea")
          , m = document.createElement("select");
        document.createElement("option")
    }
    d.setAttribute("rows", 4),
    c.className = "ui_form",
    i.className = "ui_form";
    var f = "string number boolean null".split(" ");
    o.plugin = {},
    e.$form = o
}(this),
!function(e) {
    "use strict";
    $form.plugin.explorer = function(e, t, n) {
        var o = document.createElement("div")
          , a = document.createElement("button");
        return a.type = "button",
        a.textContent = "browse",
        o.className = "ui_form_combo w100",
        o.appendChild(t),
        o.appendChild(a),
        a.onclick = function(e) {
            e.preventDefault(),
            $explorer($extend({
                path: "/",
                browse: !0,
                onclose: function(e, n) {
                    e && (t.value = n,
                    $el(t).trigger("change"))
                }
            }, n))
        }
        ,
        {
            label: e,
            input: o
        }
    }
    ,
    $form.plugin.icon = function(e, t, n) {
        return this.on("ready", function(e) {
            function o() {
                a.style.backgroundImage = "url(" + t.value + ")"
            }
            n && n.watch && e[n.watch] && e[n.watch].addEventListener("change", function(e) {
                if ("/c/sys/skins/w93/shortcut.png" === t.value) {
                    var n = $fs.utils.getIcon(this.value);
                    n && (t.value = n,
                    o())
                }
            }, !1);
            var a = (document.createElement("div"),
            document.createElement("button"));
            a.className = "block left mr10 h50p w50p",
            a.style.backgroundRepeat = "no-repeat",
            a.style.backgroundPosition = "center",
            a.style.backgroundSize = "32px 32px",
            t.value || (t.value = "/c/sys/skins/w93/shortcut.png"),
            o(),
            a.onclick = function(e) {
                e.preventDefault(),
                $explorer($extend({
                    path: "/c/files/images/icons/",
                    accept: "image/*",
                    browse: !0,
                    onclose: function(e, n) {
                        e && (t.value = n,
                        o())
                    }
                }, n))
            }
            ,
            e.insertBefore(a, e.firstChild)
        }),
        e.classList.add("hide"),
        {
            label: e,
            input: t
        }
    }
}(this);
!function(e) {
    "use strict";
    function t(e) {
        function o(e) {
            var t = e.init.call(I);
            t && (e.el = document.createElement("button"),
            e.el.className = (e.className || "ui_window__head__" + e.name) + ("string" == typeof t ? " " + t : ""),
            e.title && (e.el.title = e.title),
            e.el.onclick = function(t) {
                e.action.call(B, t)
            }
            ,
            Z.appendChild(e.el))
        }
        function b(e) {
            e.preventDefault(),
            G.show(B, {
                at: "left+10 bottom+10",
                of: e,
                within: I.dest
            })
        }
        function y(e) {
            e.preventDefault(),
            G.show(B, {
                of: this,
                within: I.dest
            })
        }
        function g() {
            var e = I.baseWidth ? I.baseWidth : j.offsetWidth
              , t = I.baseHeight ? I.baseHeight : j.offsetHeight
              , i = !1
              , n = !1;
            if (e > R && (e = R,
            i = !0),
            t > U && (t = U,
            n = !0),
            j.style.height = t + "px",
            j.style.width = e + "px",
            S.classList.add("ui_window__body--flex"),
            S.removeAttribute("style"),
            I.minHeight === !0 ? j.style.minHeight = j.style.height : I.minHeight && (j.style.minHeight = "auto" == I.minHeight ? "auto" : I.minHeight + "px"),
            I.minWidth === !0 ? j.style.minWidth = j.style.width : I.minWidth && (j.style.minWidth = "auto" == I.minWidth ? "auto" : I.minWidth + "px"),
            I.center)
                I.top = ~~((U - t) / 2) + "px",
                I.left = ~~((R - e) / 2) + "px";
            else {
                if (!I.top) {
                    var o = ~~(Math.random() * (U - t - 30));
                    I.top = (o > 10 ? o : 10) + "px"
                }
                if (!I.left) {
                    var a = ~~(Math.random() * (R - e - 30));
                    I.left = (a > 10 ? a : 10) + "px"
                }
            }
            "-4000px" === j.style.top && (j.style.top = n ? 0 : I.top),
            "-4000px" === j.style.left && (j.style.left = i ? 0 : I.left)
        }
        function x(e) {
            this.classList.contains("ui_window_docked--minimized") ? (O(),
            j.classList.contains("ui_window--active") || t.active(j)) : j.classList.contains("ui_window--active") ? (I.minimizable && W(),
            j.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed").num + 10) : t.active(j)
        }
        function L(e) {
            e.preventDefault(),
            G.show(B, {
                at: "left+10 bottom+10",
                of: e,
                within: I.dest
            })
        }
        function k(e) {
            fe = !0,
            I.onok.call(B, fe) !== !1 && H(e)
        }
        function z(e) {
            I.oncancel.call(B, fe) !== !1 && H(e)
        }
        function E() {
            t.active(this)
        }
        function C() {
            re && (re.removeEventListener("click", x, !1),
            re.removeEventListener("contextmenu", L, !1),
            re && re.parentNode && re.parentNode.removeChild(re)),
            J && (J.removeEventListener("click", y, !1),
            J.removeEventListener("dblclick", H, !1),
            J.removeEventListener("contextmenu", y, !1)),
            I.contextmenuOnBody && S.removeEventListener("contextmenu", b, !1),
            I.header && Z.removeEventListener("contextmenu", b, !1),
            I.btnCancel && se.removeEventListener("click", H, !1),
            I.btnOk && ce.removeEventListener("click", k, !1),
            ve && ve.parentNode && ve.parentNode.removeChild(ve),
            ve = null,
            I.resizable && K && K.removeEventListener("dblclick", A, !1),
            I.maximizable && !K && S.removeEventListener("dblclick", A, !1),
            I.draggable && oe.destroy(),
            I.resizable && ae.destroy(),
            te && te.destroy(),
            j.removeEventListener("click", E, !1),
            j && j.parentNode && j.parentNode.removeChild(j);
            var e = $maxZ(".ui_window").el;
            e ? t.active(e) : I.ondestroy.call(B, e)
        }
        function N() {
            I.animationOut ? (j.classList.add("animated"),
            $animate(j, I.animationOut, function(e) {
                j.classList.remove("animated"),
                C()
            })) : C()
        }
        function $() {
            fe && I.onsubmit && I.onsubmit.call(B, fe, $form(he)) === !1 ? fe = !1 : (N(),
            I.onclose.call(B, fe, $form(he)))
        }
        function M(e) {
            e === !0 && (fe = !0),
            he ? $() : (N(),
            I.onclose.call(B, fe))
        }
        function T() {
            setTimeout(function() {
                I.activable && t.active(j),
                g(),
                he = j.getElementsByTagName("form")[0],
                he && (he.onsubmit = function() {
                    return fe = !0,
                    $(),
                    !1
                }
                ),
                B.el.form = he,
                I.onready.call(B, j, S),
                pe ? pe.focus() : S.focus()
            }, 1)
        }
        function H(e) {
            e.stopPropagation(),
            e.stopImmediatePropagation(),
            M()
        }
        function A(e) {
            e && (e.stopPropagation(),
            e.stopImmediatePropagation()),
            j.classList.contains("ui_window--maximized") ? (j.classList.remove("ui_window--maximized"),
            X && (X.classList.remove("ui_window__head__maximized"),
            X.classList.add("ui_window__head__maximize")),
            j.classList.add("untransition"),
            j.removeAttribute("style"),
            j.setAttribute("style", _e),
            setTimeout(function() {
                j.classList.remove("untransition"),
                I.onresize(!1)
            }, 500)) : (_e = j.getAttribute("style"),
            j.classList.add("ui_window--maximized"),
            X && (X.classList.add("ui_window__head__maximized"),
            X.classList.remove("ui_window__head__maximize")),
            setTimeout(function() {
                I.onresize(!0)
            }, 500))
        }
        function W() {
            if (I.dockable) {
                var e = j.getBoundingClientRect();
                we = {
                    t: e.top + "px",
                    l: e.left + "px",
                    h: j.offsetHeight + "px",
                    w: j.offsetWidth + "px"
                },
                ve.style.display = "block",
                ve.style.top = we.t,
                ve.style.left = we.l,
                ve.style.height = we.h,
                ve.style.width = we.w,
                ve.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed").num + 1,
                document.body.appendChild(ve),
                j.classList.add("ui_window--minimized");
                var t = re.getBoundingClientRect();
                ve.style.top = t.top + "px",
                ve.style.left = t.left + "px",
                ve.style.height = re.offsetHeight + "px",
                ve.style.width = re.offsetWidth + "px",
                setTimeout(function() {
                    ve.style.display = "none",
                    re.classList.add("ui_window_docked--minimized")
                }, 300)
            }
        }
        function O() {
            ve.classList.remove("ui_window_transfer"),
            ve.style.display = "block",
            ve.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed").num + 1,
            ve.classList.add("ui_window_retransfer"),
            setTimeout(function() {
                ve.style.top = we.t,
                ve.style.left = we.l,
                ve.style.height = we.h,
                ve.style.width = we.w
            }, 50),
            setTimeout(function() {
                ve.style.display = "none",
                j.classList.remove("ui_window--minimized"),
                re.classList.remove("ui_window_docked--minimized")
            }, 300)
        }
        "string" == typeof e && (e = {
            title: e,
            url: e,
            ajax: !1,
            width: 400,
            height: 300
        });
        var B, I = $extend({}, a, e), j = s.cloneNode(!1), Z = c.cloneNode(!1), P = r.cloneNode(!1), S = u.cloneNode(!1), q = m.cloneNode(!1), D = l++, R = I.dest.offsetWidth, U = I.dest.offsetHeight;
        if (I.caller = $io.isWindow(this) ? null : this,
        I.caller && I.caller.that && I.caller.that.window && $extend(I, I.caller.that.window),
        e.contextmenu && (I.contextmenu = $extend({}, a.contextmenu, I.contextmenu)),
        j.id = "win" + D,
        j.setAttribute("data-window-id", D),
        I.baseClass) {
            var F = I.baseClass.split(" ");
            $io.arr.all(F, function(e) {
                j.classList.add(e)
            })
        }
        var G = $menu($menu.extend([{
            name: "Maximize",
            disabled: !I.maximizable,
            action: function() {
                B.maximize()
            }
        }, {
            name: "Minimize",
            disabled: !I.minimizable,
            action: function() {
                B.minimize()
            }
        }, {
            name: "Move to center",
            disabled: !I.draggable,
            action: function() {
                R = I.dest.offsetWidth,
                U = I.dest.offsetHeight,
                j.style.top = ~~((U - j.offsetHeight) / 2) + "px",
                j.style.left = ~~((R - j.offsetWidth) / 2) + "px"
            }
        }, {
            name: "Refresh",
            disabled: !((!I.url || I.ajax) && "function" == typeof I.reload),
            action: function() {
                "function" == typeof this.cfg.reload ? this.cfg.reload() : this.el.iframe && (this.el.iframe.src = "",
                this.el.iframe.src = this.cfg.url)
            }
        }, {
            name: "---"
        }, {
            name: "Close",
            disabled: !I.closable,
            action: function() {
                B.close()
            }
        }], I.contextmenu));
        if (I.contextmenuOnBody && S.addEventListener("contextmenu", b, !1),
        I.header) {
            if (I.icon) {
                var J = h.cloneNode(!1);
                J.src = I.baseUrl + I.icon,
                J.addEventListener("click", y, !1),
                J.addEventListener("dblclick", H, !1),
                J.addEventListener("contextmenu", y, !1),
                Z.appendChild(J)
            }
            var K = p.cloneNode(!1);
            if (K.textContent = I.title || "",
            j.setAttribute("aria-labelledby", "ui_window__title_" + D),
            K.id = "ui_window__title_" + D,
            Z.appendChild(K),
            Z.addEventListener("contextmenu", b, !1),
            I.headerBtn)
                for (var Q = I.headerBtn.length - 1; Q >= 0; Q--)
                    o(I.headerBtn[Q]);
            if (I.minimizable && I.dock && I.dockable) {
                var V = _.cloneNode(!1);
                V.onclick = W,
                Z.appendChild(V)
            }
            if (I.maximizable) {
                var X = w.cloneNode(!1);
                X.onclick = A,
                Z.appendChild(X)
            }
            if (I.closable) {
                var Y = v.cloneNode(!1);
                Y.onclick = H,
                Z.appendChild(Y)
            }
            j.appendChild(Z)
        }
        (I.menu || I.beforeMenu || I.afterMenu) && j.appendChild(P);
        var ee;
        I.beforeMenu && ("string" == typeof I.beforeMenu ? (ee = document.createElement("div"),
        ee.innerHTML = I.beforeMenu) : ee = I.beforeMenu,
        P.appendChild(ee));
        var te;
        I.menu && (te = $menu(P, I.menu, {
            thisArg: I.menuThisArg || S,
            mode: "bar",
            position: {
                within: I.dest
            }
        }));
        var ie;
        if (I.afterMenu && ("string" == typeof I.afterMenu ? (ie = document.createElement("div"),
        ie.innerHTML = I.afterMenu) : ie = I.afterMenu,
        P.appendChild(ie)),
        j.appendChild(S),
        I.footer) {
            var ne;
            "string" == typeof I.footer ? (ne = document.createElement("div"),
            ne.innerHTML = I.footer) : ne = I.footer,
            q.appendChild(ne)
        }
        if ((I.footer || I.btnOk || I.btnCancel) && j.appendChild(q),
        j.style.top = (I.top || -4e3) + "px",
        j.style.left = (I.left || -4e3) + "px",
        S.style.width = "auto" == I.width ? "auto" : 1 * I.width + 2 + "px",
        S.style.height = "auto" == I.height ? "auto" : 1 * I.height + 2 + "px",
        console.log(S.style.height),
        I.dest.appendChild(j),
        I.automaximize && j.classList.add("ui_window--maximized"),
        I.draggable) {
            (K || j).classList.add("ui_window--draggable");
            var oe = $drag(j, {
                constrain: I.constrain,
                handle: K ? K : j,
                onstart: function() {
                    t.active(this),
                    i(this)
                },
                onstop: function() {
                    n(this),
                    I.ondrag.call(B, j, S)
                }
            })
        }
        if (I.resizable)
            var ae = $resize(j, {
                handles: "all",
                start: function(e) {
                    t.active(e),
                    i(e)
                },
                stop: function(e) {
                    n(e),
                    I.onresize.call(B, j, S)
                }
            });
        if (I.bodyClass) {
            var le = I.bodyClass.split(" ");
            $io.arr.all(le, function(e) {
                S.classList.add(e)
            })
        }
        if ("random" == I.animationIn && (I.animationIn = $io.arr.random($animate.i)),
        "random" == I.animationOut && (I.animationOut = $io.arr.random($animate.o)),
        I.animationIn && (j.classList.add("animated"),
        $animate(j, I.animationIn, function(e) {
            j.classList.remove("animated")
        })),
        I.btnCancel || I.btnOk) {
            var de = document.createElement("div");
            de.className = "ui_window__buttons",
            q.appendChild(de)
        }
        var se;
        I.btnCancel && (se = document.createElement("button"),
        se.innerHTML = I.btnCancel,
        se.className = "ui_window__ok",
        de.appendChild(se));
        var ce;
        if (I.btnOk && (ce = document.createElement("button"),
        ce.innerHTML = I.btnOk,
        ce.setAttribute("autofocus", "autofocus"),
        ce.className = "ui_window__ok js-to-focus",
        de.appendChild(ce)),
        I.dock && I.dockable) {
            var re = document.createElement("button")
              , ue = document.createElement("img")
              , me = document.createElement("span");
            re.className = "ui_window_docked",
            re.id = "ui_window_docked_" + D,
            ue.className = "ui_window_docked__icon",
            me.className = "ui_window_docked__text ui_elipsis",
            I.icon && (ue.src = I.baseUrl + I.icon,
            re.appendChild(ue)),
            I.title && (me.textContent = I.title,
            me.title = I.title,
            re.appendChild(me)),
            I.dock.appendChild(re),
            re.addEventListener("click", x, !1),
            re.addEventListener("contextmenu", L, !1)
        }
        var fe = !1;
        I.btnCancel && se.addEventListener("click", z, !1),
        I.btnOk && ce.addEventListener("click", k, !1),
        I.activable && j.addEventListener("click", E, !1),
        I.resizable && K && K.addEventListener("dblclick", A, !1),
        I.maximizable && !K && S.addEventListener("dblclick", A, !1);
        var he, pe;
        I.url && !I.ajax ? (pe = f.cloneNode(!1),
        pe.onload = T,
        pe.onerror = T,
        pe.onabort = T,
        pe.src = 0 == I.url.indexOf("www") ? "http://" + I.url : I.url,
        S.appendChild(pe),
        S.classList.add("ui_window__body--with_iframe"),
        I.title || (I.title = I.url)) : I.url && I.ajax ? $ajax.get(I.url).done(function(e) {
            var t = document.createElement("div");
            t.innerHTML = e,
            S.appendChild(t),
            T()
        }).fail(function() {
            $alert.error("ajax error")
        }) : I.ajax ? T() : ("string" == typeof I.html ? S.innerHTML = I.html : (1 === I.html.nodeType || 11 === I.html.nodeType) && S.appendChild(I.html),
        T()),
        I.activable && t.active(j),
        B = {
            id: D,
            cfg: I,
            el: {
                base: j,
                body: S,
                header: Z,
                title: K,
                footer: q,
                iframe: pe,
                form: he,
                btnCancel: se,
                btnOk: ce,
                beforeMenu: ee,
                afterMenu: ie
            },
            close: M,
            destroy: C,
            maximize: A,
            minimize: W,
            menu: te,
            changeSize: function(e) {
                e && (e.height || e.width) && (j.style.height = "auto",
                j.style.width = "auto",
                S.classList.remove("ui_window__body--flex"),
                e.height && (S.style.height = e.height + "px"),
                e.width && (S.style.width = e.width + "px"),
                g())
            },
            active: function() {
                t.active(j)
            },
            changeTitle: function(e) {
                "string" == typeof e && (K && (K.innerHTML = e),
                me && (me.innerHTML = e,
                me.title = e))
            },
            changeIcon: function(e) {
                "string" == typeof e && (J && (J.src = e),
                ue && (ue.src = e))
            },
            changeFooter: function(e) {
                q.firstChild && (q.firstChild.innerHTML = e)
            }
        },
        d[D] = B,
        te && te.refresh($extend(I.menuThisArg || {}, {
            window: B
        })),
        I.onopen.call(B, j, S),
        I.activable && t.active(j);
        var _e, we, ve = document.createElement("div");
        return ve.className = "ui_window_transfer",
        B
    }
    function i(e) {
        e.getElementsByTagName("iframe").length && e.getElementsByTagName("section")[0].appendChild(b.cloneNode(!1))
    }
    function n(e) {
        var t = e.querySelector(".js-mask");
        t && t.parentNode && t.parentNode.removeChild(t)
    }
    function o() {
        $io.arr.all(document.querySelectorAll(".ui_window--active"), function(e) {
            e.classList.remove("ui_window--active"),
            i(e)
        }),
        $io.arr.all(document.querySelectorAll(".ui_window_docked.pressed"), function(e) {
            e.classList.remove("pressed")
        })
    }
    var a = {
        title: "",
        url: null,
        html: "",
        menu: null,
        header: !0,
        footer: null,
        help: "",
        width: 390,
        height: 270,
        baseWidth: null,
        baseHeight: null,
        minWidth: null,
        minHeight: null,
        top: null,
        left: null,
        center: !1,
        resizable: !0,
        minimizable: !0,
        maximizable: !0,
        closable: !0,
        draggable: !0,
        dockable: !0,
        activable: !0,
        automaximize: !1,
        headerBtn: [],
        contextmenuOnBody: !1,
        onopen: $noop,
        onready: $noop,
        onclose: $noop,
        onok: $noop,
        oncancel: $noop,
        onminimize: $noop,
        ondrag: $noop,
        onresize: $noop,
        onactive: $noop,
        ondestroy: $noop,
        animationIn: "",
        animationOut: "",
        baseClass: "",
        bodyClass: "",
        dest: document.body,
        constrain: !1,
        dock: null,
        baseUrl: "",
        ajax: !1
    }
      , l = 0
      , d = {}
      , s = document.createElement("div")
      , c = document.createElement("header")
      , r = document.createElement("header")
      , u = document.createElement("section")
      , m = document.createElement("footer")
      , f = document.createElement("iframe")
      , h = document.createElement("img")
      , p = document.createElement("span")
      , _ = document.createElement("button")
      , w = document.createElement("button")
      , v = document.createElement("button");
    s.setAttribute("role", "dialog"),
    s.className = "ui_window ui_window--active",
    c.className = "ui_window__head",
    h.className = "ui_window__head__icon",
    p.className = "ui_window__head__title ui_elipsis",
    _.className = "ui_window__head__minimize",
    w.className = "ui_window__head__maximize",
    v.className = "ui_window__head__close",
    r.className = "ui_window__menu",
    u.className = "ui_window__body",
    m.className = "ui_window__foot",
    f.className = "ui_window__iframe",
    f.setAttribute("allowfullscreen", "true");
    var b = document.createElement("div");
    b.className = "js-mask",
    b.setAttribute("style", "background-image:url(/c/sys/img/spacer.gif); position: absolute; z-index: 2; left: 0; top: 0; right: 0; bottom: 0;"),
    t.config = function(e) {
        $extend(a, e)
    }
    ;
    var y = null;
    t.instances = d,
    t.active = function(e) {
        var t = e.getAttribute("data-window-id");
        if (e.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed").num + 1,
        y !== t) {
            o(),
            e.classList.add("ui_window--active"),
            n(e);
            var i = document.getElementById("ui_window_docked_" + t);
            i && i.classList.add("pressed"),
            y = t
        }
        d[t] && "function" == typeof d[t].cfg.onactive && setTimeout(function() {
            d[t].cfg.onactive.call(d[t], d[t].el.base, d[t].el.body)
        }, 0)
    }
    ,
    t.close = function(e) {
        "string" == typeof e ? d[e].close() : e && 1 == e.nodeType && e.getAttribute("data-window-id") && d[e.getAttribute("data-window-id")].close()
    }
    ,
    t.destroy = function(e) {
        "string" == typeof e ? d[e].destroy() : e && 1 == e.nodeType && e.getAttribute("data-window-id") && d[e.getAttribute("data-window-id")].destroy()
    }
    ,
    e.$window = t
}(this);
!function(n) {
    "use strict";
    function e(n) {
        o.innerHTML = n.innerHTML.replace(/\n|<br>|<div><br><\/div>|<div>/g, "_newline___ktlu_");
        var e = o.innerText || o.textContent;
        return $io.str.autolink(e.replace(/\n|_newline___ktlu_/g, "<br>"))
    }
    function t() {}
    var i = []
      , o = document.createElement("div")
      , r = "--- Type something ---"
      , l = $io.fn.debounce(t, 300)
      , u = function(n) {
        var o = 0;
        n || (n = r),
        $window($extend({
            baseClass: "ui_note",
            icon: "c/sys/skins/w93/apps/pin.png",
            title: "Note",
            html: n,
            baseHeight: 200,
            baseWidth: 200,
            img: null,
            dock: null,
            maximi: !0,
            resizable: !0,
            onopen: function(n, r) {
                o = i.push({
                    el: n,
                    body: r
                }) - 1,
                r.setAttribute("tabindex", "0"),
                r.innerHTML = e(r),
                r.onblur = function() {
                    r.contentEditable = !1,
                    r.innerHTML = e(r),
                    t()
                }
                ,
                r.onfocus = function() {
                    r.contentEditable = !0,
                    r.style.borderColor = "#000"
                }
                ,
                r.onkeyup = function() {
                    l()
                }
            },
            onclose: function(n, e) {
                i[o] = null,
                t()
            },
            onresize: l,
            ondrag: l
        }, n))
    };
    window.$note = u;
    n.$note = u
}(this);
system42("apps", function(e) {
    "use strict";
    e._apps = {
        terminal: {
            categories: "Utility;TerminalEmulator;System",
            name: "Terminal",
            icon: "apps/terminal.png",
            exec: function(e, t) {
                var n, i = this.le, o = $extend({
                    onopen: $noop
                }, t);
                $window.call(this, {
                    bodyClass: "ui_terminal",
                    onopen: function(t, a) {
                        if (n = $cli(a, {
                            exe: $exe,
                            cols: 60,
                            cwd: i._path.home.slice(0, -1),
                            setPrompt: function() {
                                var e = this.cwd.replace(i._path.home.slice(0, -1), "~");
                                n.prompt.innerHTML = this.prompt = ">" + e + "&nbsp;"
                            },
                            getPathObj: function(e) {
                                return $fs.utils.getPathObj("string" == typeof e ? e : this.cwd, this.cwd)
                            }
                        }),
                        e) {
                            var r = n.cfg.getPathObj(e);
                            r && r.obj && (n.cfg.cwd = r.cwd,
                            n.cfg.setPrompt())
                        }
                        n.onkey = function(e, t) {
                            if ("tab" === e) {
                                var o = $exe.parse(t);
                                o && o.arguments.length && (t = o.arguments[o.arguments.length - 1]);
                                var a = n.cfg.getPathObj().obj;
                                if (0 === t.indexOf("/") || t.indexOf("/") > -1) {
                                    var r = t.split("/");
                                    t = r.pop(),
                                    r = r.join("/") + "/",
                                    a = n.cfg.getPathObj(r).obj
                                }
                                var s = [];
                                return $io.obj.all(a, function(e, n) {
                                    0 === n.indexOf(t) && s.push(n + ("number" == typeof e ? "" : "/"))
                                }),
                                s.length || o || $io.obj.all(i._apps, function(e, n) {
                                    0 === n.indexOf(t) && s.push(n)
                                }),
                                s.length || o || $io.obj.all(window, function(e, n) {
                                    0 === n.indexOf(t) && s.push(n)
                                }),
                                1 === s.length ? n.input.value = n.input.value + s[0].slice(t.length) : s.length && ($log(" "),
                                $log(s.join(", "))),
                                !1
                            }
                        }
                        ,
                        n.cfg.setPrompt(),
                        n.input.focus(),
                        o.onopen(n)
                    },
                    onclose: function() {
                        n.destroy()
                    }
                })
            }
        },
        pwd: {
            categories: "Utility",
            terminal: !0,
            exec: function() {
                $log(this.cli.cfg.cwd)
            }
        },
        cd: {
            categories: "Utility",
            terminal: !0,
            exec: function(t) {
                t || (t = e._path.home);
                var n = this.cli.cfg.getPathObj(t);
                n && n.obj && (this.cli.cfg.cwd = n.cwd,
                this.cli.cfg.setPrompt())
            }
        },
        ls: {
            categories: "Utility",
            terminal: !0,
            exec: function() {
                function e(e, t) {
                    return e[1].toLowerCase().localeCompare(t[1].toLowerCase())
                }
                var t = this.cli.cfg.cwd
                  , n = $io.obj.getPath(this.le._files, t, "/")
                  , i = []
                  , o = []
                  , a = [];
                $io.obj.each(n, function(e, n) {
                    $fs.utils.isShortcut(n) ? a.push('<a class="ui_log__yellow" href="#!' + t + n + '">' + n + "</a>") : "number" == typeof e ? a.push('<a href="#!' + t + n + '">' + n + "</a>") : ".." === n || "." === n ? i.push('<a class="bold ui_log__blue" href="#!' + t + "/" + n + '/">' + n + "/</a>") : o.push('<a class="bold ui_log__blue" href="#!' + t + "/" + n + '/">' + n + "/</a>")
                }),
                $log.html(i.reverse().join("\n")),
                $log.html(o.sort(e).join("\n")),
                $log.html(a.sort(e).join("\n"))
            }
        },
        find: {
            categories: "Utility",
            terminal: !0,
            exec: function(e, t) {
                if (e) {
                    var n = $io.map($io.find(e, "string" == typeof t ? t : this.cli.cfg.cwd, this.le._files, "/", [".", ".."]), function(e) {
                        return '<a href="#!' + e + '">' + e + "</a>"
                    });
                    $log(" "),
                    $log.html(n.join("\n")),
                    $log(" "),
                    $log(n.length + " result" + (n.length ? "s" : ""))
                } else
                    $log("Usage: find PATTERN [PATH]"),
                    $log('e.g. : "find .png"'),
                    $log('e.g. : "find /\\.ttf$/" (pattern can be a RegEx)'),
                    $log('e.g. : "find .ttf c/sys" (optional path)')
            }
        },
        tree: {
            categories: "Utility",
            terminal: !0,
            exec: function(e) {
                function t(e, n, r) {
                    for (var s = Object.keys(e), c = 0, l = s.length; l > c; c++) {
                        var u = s[c];
                        if (".." !== u && "." !== u) {
                            var m = c === s.length - 3 ? "└── " : "├── "
                              , d = c === s.length - 3 ? "    " : "│   ";
                            "object" == typeof e[u] ? (i++,
                            a += "<br>" + n + m + '<span class="bold ui_log__blue">' + u + "</span>",
                            t(e[u], n + d, r + "/" + u)) : (o++,
                            a += "<br>" + n + m + u)
                        }
                    }
                }
                var n = this.cli.cfg.getPathObj(e);
                if (n) {
                    var i = 0
                      , o = 0
                      , a = ".";
                    t(n.obj, "", e),
                    $log.html(a),
                    $log(" "),
                    $log(i + " directories, " + o + " files")
                }
            }
        },
        help: {
            categories: "Utility",
            terminal: !0,
            exec: function() {
                $log("Available commands are : "),
                $log(Object.keys(this.le._apps).sort().join(", "))
            }
        },
        clear: {
            categories: "Utility",
            terminal: !0,
            exec: function() {
                $log.clear()
            }
        },
        history: {
            categories: "Utility",
            terminal: !0,
            exec: function() {
                $log(this.cli.cfg.history.join("\n"))
            }
        },
        clearhist: {
            categories: "Utility",
            terminal: !0,
            exec: function() {
                $cli.clearhistory(),
                $log.cyan("Terminal history cleared")
            }
        },
        info: {
            categories: "Utility",
            terminal: !0,
            exec: function() {
                system42.nfo.log()
            }
        },
        win: {
            categories: "Utility",
            terminal: !0,
            exec: function(e, t) {
                console.log(e, t),
                e ? $window.instances[e] ? "string" == typeof t ? $window.instances[e][t] ? "function" == typeof $window.instances[e][t] ? $window.instances[e][t]() : $log.obj($window.instances[e][t]) : $window.instances[e].cfg[t] ? "function" == typeof $window.instances[e].cfg[t] ? $window.instances[e].cfg[t]() : $log.obj($window.instances[e].cfg[t]) : $log.error("No " + t + " option specified for #ui_window_" + e) : $log.obj($window.instances[e]) : $log.error("No window with id ui_window_" + e) : $io.arr.all(document.querySelectorAll(".ui_window"), function(e) {
                    var t = document.querySelector("#ui_window_docked_" + e.dataset.windowId).textContent;
                    $log.pad("#" + e.id, t, ".")
                })
            }
        },
        hello: {
            categories: "Amusement",
            terminal: !0,
            exec: function() {
                $log(".__           .__  .__          "),
                $log("|  |__   ____ |  | |  |   ____  "),
                $log("|  |  \\_/ __ \\|  | |  |  /  _ \\ "),
                $log("|   Y  \\  ___/|  |_|  |_(  <_> )"),
                $log("|___|  /\\___  >____/____/\\____/ "),
                $log("     \\/     \\/                  "),
                $log("                    .__       .___"),
                $log("__  _  _____________|  |    __| _/"),
                $log("\\ \\/ \\/ /  _ \\_  __ \\  |   / __ | "),
                $log(" \\     (  <_> )  | \\/  |__/ /_/ | "),
                $log("  \\/\\_/ \\____/|__|  |____/\\____ | "),
                $log("                               \\/"),
                $log("Welcome to Windows 93 :)"),
                $log("type help or some JavaScript..."),
                $log(" ")
            }
        },
        whois: {
            categories: "Amusement",
            terminal: !0,
            exec: function() {
                $log("Jankenpopp & Zombectro are running the thing, the Mighty Doctor House is hosting the thing.")
            }
        },
        killall: {
            categories: "Utility",
            combo: "ctrl+alt+del",
            exec: function(e) {
                $io.arr.all(document.querySelectorAll(".ui_window"), function(t) {
                    t.matches(e) || $window.destroy(t)
                }),
                $exe("doctor --clean"),
                $exe("fx reset")
            }
        },
        base64: {
            categories: "Utility;Development;Viewer",
            name: "base64",
            accept: "*",
            exec: function(e) {
                var t = this;
                e && "string" == typeof e ? (this.cli && this.cli.cli && this.cli.cfg.cwd && (e = this.cli.cfg.cwd + "/" + e),
                console.log(e),
                $file.open(e, "Blob", function(n) {
                    $io.Blob.DataURL(n, function(n) {
                        t.cli ? $log(n) : $prompt(e + "'s data url", n)
                    })
                })) : $log.error("url required")
            }
        },
        download: {
            categories: "Utility;Viewer",
            name: "Download",
            accept: ".zip,.rar,.tar,.gz,.bz",
            exec: function(e) {
                "string" == typeof e && e ? (this.cli && this.cli.cli && this.cli.cfg.cwd && (e = this.cli.cfg.cwd + "/" + e),
                console.log(e),
                $file.download(e)) : $log.error("url required")
            }
        },
        iframe: {
            categories: "Viewer;WebBrowser",
            name: "Iframe",
            icon: "apps/iframe.png",
            exec: function(e, t) {
                $window.call(this, $extend({
                    bodyClass: t && t.noinset ? "" : "skin_inset_deep skin_light",
                    url: e
                }, t))
            }
        },
        bananamp: {
            categories: "Audio",
            name: "Bananamp",
            icon: "apps/bananamp.png",
            accept: ".mp3,.mod,.xm,.it,.s3m,.amd,.rad,.hsc",
            exec: function(e) {
                $alert.info("Soon...")
            }
        },
        "3d": {
            categories: "Graphics;Viewer",
            icon: "apps/3d.png",
            inject: "arguments",
            exec: function(e, t) {
                console.log(e, t),
                e || $log("Usage: 3d TEXT [COLOR]"),
                $window.call(this, {
                    title: e,
                    automaximize: !0,
                    baseClass: "ui_desktop_layer",
                    url: "/c/programs/3d/index.html?txt=" + e + "&color=" + (t || "#c3ff00")
                })
            }
        },
        typo: {
            categories: "Graphics;Viewer",
            name: "Font Viewer",
            accept: ".ttf,.otf",
            exec: function(e) {
                "string" == typeof e && (e = {
                    url: e
                }),
                $window.call(this, {
                    title: "Font Viewer",
                    height: 470,
                    width: 757,
                    help: '<h1>opentype.js</h1><p><strong>Copyright © 2014 Frederik De Bleser</strong><br><a target="_blank" href=https://raw.githubusercontent.com/nodebox/opentype.js/master/LICENSE">MIT License</p><p><a target="_blank" href="http://web.archive.org/web/20160613180250/http://nodebox.github.io/opentype.js/">http://nodebox.github.io/opentype.js/</a></p>',
                    url: "/c/programs/opentype/index.php?path=" + e.url
                })
            }
        },
        img: {
            categories: "Graphics;Viewer",
            name: "Image Viewer",
            icon: "apps/imgviewer.png",
            accept: "image/*",
            exec: function(e, t) {
                function n() {
                    l.onload = $noop,
                    l.onerror = $noop,
                    l.onabort = $noop,
                    l.src = "",
                    $file.getUrl(e, function(e) {
                        o = e,
                        l.src = e
                    })
                }
                function i() {
                    t.height || (t.height = l.height),
                    t.width || (t.width = l.width),
                    t.html = u,
                    t.title = e,
                    t.icon = t.icon || a.icon,
                    t.url = null,
                    t.command = s,
                    t.reload = n,
                    t.onready = function() {
                        r._events.on("change:" + e, n)
                    }
                    ,
                    t.onclose = function() {
                        r._events.off("change:" + e, n)
                    }
                    ,
                    t.bodyClass = "skin_inset_deep _ui_layout app_imageviewer" + (t.bodyClass ? " " + t.bodyClass : ""),
                    $window.call(c, t)
                }
                var o, a = this.app, r = this.le, s = this.command, c = this, l = new Image;
                $file.getUrl(e, function(e) {
                    o = e,
                    l.src = e
                }),
                l.className = "ui_layout_center app_imageviewer__img",
                l.onload = i,
                l.onerror = i,
                l.onabort = i;
                var u = document.createElement("div");
                u.className = "ui_layout",
                u.appendChild(l)
            }
        },
        layer: {
            categories: "Graphics;Viewer",
            icon: "apps/layer.png",
            accept: "image/*",
            uid: 0,
            exec: function(e, t) {
                function n() {
                    function n(e) {
                        f = $fs.utils.getFolderPath(e),
                        b = $fs.utils.getFileName(e),
                        y = $io.obj.getPath(a._files, f, "/"),
                        _ = [],
                        $io.obj.each(y, function(e, t) {
                            /\.(bmp|gif|png|jpe?g|svg|ico|cur|tiff?)/.test(t) && _.push(t)
                        }),
                        _.sort(),
                        w = _.indexOf(b)
                    }
                    function l(e) {
                        var t = [];
                        for (var n in e)
                            e.hasOwnProperty(n) && "object" == typeof e[n] && t.push(n);
                        return t[t.length * Math.random() << 0]
                    }
                    function u(e) {
                        var t = Object.keys(e);
                        return t[t.length * Math.random() << 0]
                    }
                    function m() {
                        0 > w && (w = _.length - 1),
                        w > _.length - 1 && (w = 0),
                        b !== _[w] && (b = _[w],
                        $file.getUrl(f + b, function(e) {
                            $url.checkImage(e, function(t) {
                                t && (c.style.background = 'url("' + e + '") no-repeat',
                                c.style.backgroundSize = h,
                                c.style.backgroundPosition = "center")
                            })
                        }))
                    }
                    delete t.url,
                    delete t.width,
                    delete t.height;
                    var d = t.onopen || $noop;
                    delete t.onopen;
                    var g = s.width
                      , p = s.height
                      , h = "cover";
                    c = document.createElement("div"),
                    c.style.background = "url(" + i + ") no-repeat",
                    c.style.backgroundSize = h,
                    c.style.backgroundPosition = "center",
                    c.dataset.imageId = r.uid++,
                    c.className = "fullscreen js_image_inline cursor_cross";
                    var f, b, y, w, _ = [];
                    n(i),
                    window.$layer = {
                        prev: function() {
                            w--,
                            m()
                        },
                        next: function() {
                            w++,
                            m()
                        },
                        random: function() {
                            var e = ~~(Math.random() * _.length);
                            w = e !== w ? e : e + 1,
                            m()
                        },
                        randomFolder: function() {
                            var e = l(a._files.c.files.images.gif.vj)
                              , t = u(a._files.c.files.images.gif.vj[e]);
                            n("c/files/images/gif/vj/" + e + "/" + t);
                            var i = ~~(Math.random() * _.length);
                            w = i !== w ? i : i + 1,
                            m()
                        }
                    };
                    {
                        var v, $, x, k = !0;
                        $window.call(o, $extend({
                            title: e,
                            icon: t.icon || r.icon,
                            header: !k,
                            automaximize: !!t.fullscreen,
                            contextmenu: {
                                "after:FX": [{
                                    name: "---"
                                }, {
                                    name: "View",
                                    items: [{
                                        name: "Pixelated",
                                        checkbox: !0,
                                        selected: !1,
                                        action: function() {
                                            c.classList.toggle("pixelated")
                                        }
                                    }, {
                                        name: "---"
                                    }, {
                                        name: "Cover",
                                        radio: "View",
                                        selected: !0,
                                        action: function() {
                                            h = c.style.backgroundSize = "cover"
                                        }
                                    }, {
                                        name: "Contain",
                                        radio: "View",
                                        action: function() {
                                            h = c.style.backgroundSize = "contain"
                                        }
                                    }, {
                                        name: "Fit",
                                        radio: "View",
                                        action: function() {
                                            h = c.style.backgroundSize = "100% 100%"
                                        }
                                    }, {
                                        name: "Scale",
                                        radio: "View",
                                        action: function() {
                                            h = c.style.backgroundSize = "auto auto"
                                        }
                                    }]
                                }, {
                                    name: "---"
                                }, {
                                    name: "Previous",
                                    action: function() {
                                        w--,
                                        m()
                                    }
                                }, {
                                    name: "Next",
                                    action: function() {
                                        w++,
                                        m()
                                    }
                                }]
                            },
                            contextmenuOnBody: k,
                            baseClass: k ? "ui_desktop_layer" : "",
                            bodyClass: k ? "" : "skin_inset_deep ui_layout app_imageviewer",
                            baseHeight: p,
                            baseWidth: g,
                            html: c,
                            onclose: function() {
                                v && v.destroy && v.destroy(),
                                $ && $.destroy && $.destroy(),
                                x && x.destroy && x.destroy()
                            },
                            onactive: function(e, t) {
                                t.focus()
                            },
                            onresize: function(e, t) {},
                            onready: function(e, i) {
                                var o = this;
                                i.style.width = "auto",
                                i.style.height = "auto",
                                v = $key.up(i, function(e) {
                                    "space" == e && i.classList.remove("transparent")
                                }),
                                $ = $key.down(i, function(e) {
                                    if ("space" == e && i.classList.add("transparent"),
                                    "ctrl" == e && (o.el.body.className = o.el.body.className.replace(/fx_\w+/, "")),
                                    ("left" == e || "backspace" == e) && w--,
                                    ("right" == e || "add" == e) && w++,
                                    "up" == e || "enter" == e) {
                                        var t = ~~(Math.random() * _.length);
                                        w = t !== w ? t : t + 1
                                    }
                                    if ("down" == e || "subtract" == e) {
                                        var r = l(a._files.c.files.images.gif.vj)
                                          , s = u(a._files.c.files.images.gif.vj[r]);
                                        n("c/files/images/gif/vj/" + r + "/" + s);
                                        var t = ~~(Math.random() * _.length);
                                        w = t !== w ? t : t + 1
                                    }
                                    return m(),
                                    !1
                                }),
                                this.cfg.draggable && (x = $wheel.scale(e)),
                                d.call(this, e, i),
                                t.delay && setTimeout(function() {
                                    o.close()
                                }, t.delay)
                            }
                        }, t))
                    }
                }
                if (!e)
                    return $log("Usage: layer PATH"),
                    void $log("e.g. : layer /c/files/images/emoticons/smiley-char023.gif");
                var i, o = this, a = this.le, r = this.app, s = new Image;
                $file.getUrl(e, function(e) {
                    i = e,
                    s.src = e
                }),
                s.onload = n,
                s.onerror = n,
                s.onabort = n;
                var c
            }
        },
        piskel: {
            categories: "Development;Graphics",
            name: "Piskel",
            type: "Editors",
            icon: "apps/paint.png",
            accept: ".gif,.png,.jpeg,.jpg,.piskel",
            exec: function(e, t) {
                var n = {
                    url: "/c/programs/piskel/index.php",
                    height: 600,
                    width: 950
                };
                t && t.layer && (n.url = "/c/programs/piskel/index.php?layer=true",
                n.baseClass = "ui_window_transparent",
                n.automaximize = !0),
                $editor.call(this, {
                    filePath: e,
                    type: "Blob",
                    about: "<b>Piskel v0.4.2</b><br>A simple web-based tool for Spriting and Pixel art. Create pixel art, game sprites and animated GIFs.<br>by Julian Descottes and Vincent Renaudin<br><a href='http://web.archive.org/web/20160613180250/http://www.piskelapp.com/' target='_blank'>www.piskelapp.com</a>",
                    window: n
                })
            }
        },
        hexed: {
            categories: "Development",
            name: "HexEd",
            type: "Editors",
            icon: "apps/hexedit.png",
            accept: "*",
            exec: function(e, t) {
                $editor.call(this, {
                    filePath: e,
                    undo: !0,
                    about: "<b>HexEd v0.0.1a</b><br>A simple hexadecimal editor",
                    type: "Blob",
                    window: {
                        url: "/c/programs/HexEd/index.php",
                        bodyClass: "skin_inset",
                        height: 410,
                        width: 480
                    }
                })
            }
        },
        pd: {
            categories: "Development;Music",
            name: "Puke Data",
            type: "Editors",
            icon: "apps/pd.png",
            accept: ".pd",
            exec: function(e, t) {
                $editor.call(this, {
                    filePath: e,
                    about: '<b>Puke Data</b><br>based on WebPd by Sébastien Piquemal<br><a target="_blank" href="http://web.archive.org/web/20160613180250/https://github.com/sebpiq/WebPd">https://github.com/sebpiq/WebPd</a>',
                    type: "String",
                    window: {
                        url: "/c/programs/pukeData/index.php",
                        bodyClass: "skin_inset skin_light",
                        height: 400,
                        width: 600
                    }
                })
            }
        },
        textarea: {
            categories: "Development;TextEditor",
            name: "Textarea",
            type: "Editors",
            icon: "ext/nfo.png",
            accept: ".txt",
            exec: function(e, t) {
                $editor.call(this, {
                    type: "String",
                    filePath: e,
                    create: function(e) {
                        var t = document.createElement("textarea");
                        return t.className = "app_textarea fullscreen",
                        e.appendChild(t),
                        setTimeout(function() {
                            t.focus()
                        }, 0),
                        {
                            readFile: function(e) {
                                t.value = e
                            },
                            setValue: function(e) {
                                t.value = e
                            },
                            getValue: function(e) {
                                e(t.value)
                            }
                        }
                    },
                    window: $extend({
                        height: 345,
                        width: 435
                    }, t)
                })
            }
        },
        codem: {
            categories: "Development;TextEditor",
            name: "CodeMirror",
            type: "Editors",
            icon: "apps/codemirror.png",
            accept: "text/*,.txt,.js,.json,.html,.htm,.css,.md,.nfo,.php,.diz,.svg,.xml,.rss,.lnk42",
            exec: function(e, t) {
                t || (t = e,
                e = "");
                var n = this
                  , i = $extend({}, t);
                i.url && delete i.url,
                $loader(["/c/libs/CodeMirror/lib/codemirror.js", "/c/libs/CodeMirror/keymap/sublime.js", "/c/libs/CodeMirror/mode/css/css.js", "/c/libs/CodeMirror/mode/javascript/javascript.js", "/c/libs/CodeMirror/addon/selection/active-line.js", "/c/libs/CodeMirror/mode/xml/xml.js", "/c/libs/CodeMirror/lib/codemirror.css", "/c/libs/CodeMirror/theme/monokai.css"], function(t) {
                    var o = 0
                      , a = 0
                      , r = e ? e.replace(/:(\d+)(?::(\d+))?$/, function(e, t, n) {
                        return o = t || 0,
                        a = n || 0,
                        ""
                    }) : ""
                      , s = "<strong>Keymap</strong><br><br><table>";
                    $io.obj.all(t.keyMap.sublime, function(e, t) {
                        if ("fallthrough" !== t) {
                            var n = e.replace(/[A-Z]/g, function(e) {
                                return " " + e.toLowerCase()
                            });
                            n = n.charAt(0).toUpperCase() + n.slice(1),
                            s += "<tr><td>" + n + "</td><td> : " + t + "</td></tr>"
                        }
                    }),
                    s += "</table>";
                    var c;
                    $editor.call(n, {
                        type: "String",
                        filePath: r,
                        help: {
                            instructions: s,
                            about: {
                                msg: '<b>CodeMirror</b> is a versatile text editor implemented in JavaScript for the browser.<br><b>Copyright (C) 2015 by Marijn Haverbeke</b><br>MIT license<br><a href="http://web.archive.org/web/20160613180250/http://codemirror.net/" target="_blank">codemirror.net</a>',
                                img: "/c/libs/CodeMirror/doc/logo.png"
                            }
                        },
                        create: function(e) {
                            return c = t(e, {
                                theme: "monokai",
                                mode: "text/x-markdown",
                                lineWrapping: !0,
                                lineNumbers: !0,
                                indentUnit: 2,
                                keyMap: "sublime",
                                styleActiveLine: !0
                            }),
                            $el(c).click(),
                            c.focus(),
                            {
                                readFile: function(e) {
                                    var t = this.mime;
                                    r = this.path;
                                    var n = this.ext;
                                    ("xml" == n || "rss" == n) && (t = "xml"),
                                    /json/.test(t) && (t = "application/json"),
                                    c.setOption("mode", t),
                                    c.setValue("string" == typeof e ? e : JSON.stringify(e)),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 1),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 10),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 100),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 500),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 1e3),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 1500),
                                    c.setCursor({
                                        line: o - 1,
                                        ch: a - 1
                                    });
                                    var i = c.getScrollInfo().clientHeight
                                      , s = c.charCoords({
                                        line: o - 1,
                                        ch: a - 1
                                    }, "local");
                                    c.scrollTo(null, (s.top + s.bottom - i) / 2),
                                    setTimeout(function() {
                                        c.focus()
                                    }, 100)
                                },
                                setValue: function(e) {
                                    c.setValue(e),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 1),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 10),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 100),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 500),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 1e3),
                                    setTimeout(function() {
                                        c.refresh()
                                    }, 1500)
                                },
                                getValue: function(e) {
                                    e(c.getValue())
                                }
                            }
                        },
                        window: $extend({
                            height: 345,
                            width: 435,
                            bodyClass: "ui_texteditor skin_inset_deep",
                            onresize: function() {
                                c.refresh()
                            }
                        }, i)
                    })
                })
            }
        },
        note: {
            categories: "Utility",
            icon: "apps/pin.png",
            exec: function(e, t) {
                "object" == typeof t ? ("string" != typeof e || t.html || (t.html = e),
                $note(t)) : $note(e)
            }
        },
        zkype: {
            categories: "Amusement",
            name: "Zkype",
            icon: "apps/zkype.png",
            exec: function() {
                var e = {}
                  , t = this;
                $ajax.get("/c/programs/zkype/zkype.html").done(function(n) {
                    e.html = n,
                    e.width = "700",
                    e.height = "450",
                    e.bodyClass = "skin_inset_deep",
                    e.onready = function() {
                        $loader(["nocache!/c/programs/zkype/js/utils.js?v=2", "nocache!/c/programs/zkype/js/clmtrackr.js?v=2", "nocache!/c/programs/zkype/js/model_pca_20_svm.js?v=2", "nocache!/c/programs/zkype/js/face_deformer.js?v=2", "nocache!/c/programs/zkype/js/poisson_new.js?v=2", "nocache!/c/programs/zkype/zkype.js?v=2"], function() {})
                    }
                    ,
                    e.onclose = function() {
                        var e = window.zkype.getStream()
                          , t = window.zkype.getCtrack()
                          , n = window.zkype.getAnimation()
                          , i = window.zkype.getAnimationGrid();
                        window.cancelAnimationFrame(i),
                        window.cancelAnimationFrame(n),
                        t && t.stop && t.stop(),
                        e && e.stop && e.stop()
                    }
                    ,
                    $window.call(t, e)
                })
            }
        },
        bytebeat: {
            categories: "Development;Music",
            name: "Byte Beat",
            icon: "apps/bytebeat.png",
            exec: function() {
                var e = {};
                e.help = "<b>Credits :</b><br><a target=_blank href='http://web.archive.org/web/20160613180250/https://github.com/greggman/html5bytebeat'>https://github.com/greggman/html5bytebeat</a>",
                e.url = "/c/programs/bytebeat/index.php",
                e.width = "700",
                e.height = "400",
                e.bodyClass = "skin_inset_deep",
                $window.call(this, e)
            }
        },
        catex: {
            categories: "Network;WebBrowser",
            name: "Cat Explorer",
            icon: "apps/catexplorer.png",
            exec: function(e) {
                var t = this.le
                  , n = this;
                $loader(["/c/programs/catExplorer/catExplorer.js"], function(i) {
                    console.log(i),
                    i.exec.call(n, t, e)
                })
            }
        },
        manifesto: {
            categories: "Amusement",
            icon: "question.png",
            exec: function() {
                function t(e) {
                    return 100 * Math.random() >= (e || 50) ? !1 : !0
                }
                function n() {
                    if (t(2)) {
                        var e = $io.arr.random($io.arr.random(c));
                        return e + " + " + e + " = " + e
                    }
                    return t(20) ? $io.arr.random($io.arr.random(c)) + " + " + $io.arr.random($io.arr.random(c)) + " = " + $io.arr.random($io.arr.random(c)) : t(10) ? $io.arr.random(s) + " + " + $io.arr.random(r) + " = " + $io.arr.random(a) : $io.arr.random(a) + " + " + $io.arr.random(r) + " = " + $io.arr.random(s)
                }
                function i() {
                    var t = n();
                    $alert({
                        msg: t,
                        title: "MANIFESTO",
                        img: o.icon,
                        btnCancel: "wtf?",
                        animationIn: "",
                        animationOut: "",
                        sound: "error",
                        oncancel: function(t) {
                            return e._sound.error.play(),
                            this.el.body.querySelector(".ui_alert__text").innerHTML = n(),
                            !1
                        }
                    })
                }
                var o = this.app
                  , a = ["retro-engineering", "reverse engineering", "deprogrammed obsolescence", "repurposing", "recycling", "retrocomputing", "parody", "inception", "666", "acid", "freedom", "infinity", "pony", "art", "demoscene", "memetic", "hysteria", "proselytism", "thought contagion", "dolphin", "panda", "corgi", "doge", "hydra", "pokemon", "yoda", "cat", "glitch", "troll", "noob", "ninja", "wizard", "lisa", "link", "lenna.tiff"]
                  , r = ["easter egg", "php", "html", "html5", "javascript", "ECMAscript", "localStorage", "web3.0", "NaN", "Infinity", "random", "Math.random()", "π", "inception", "css3", "css", "free software", "prosthetic knowledge", "(x,y,z)", "virus", "internet", "wifi", "open source", "GNU", "MIT", "GNU GPL", "WTFPL", "OS", "linux", "unix", "bash", "hyperlink", "permalink", "copyleft", "creative commons", "MySQL", "RSS", "XML", "JSON", "git", "MVC", "NSFW", "nodejs", "server", "hack", "iframe", "canvas", "glitch", "PNG", "ASCII", "utf-8", "emoji", "unicode"]
                  , s = ["uchronia", "popart", "anachronism", "dadaism", "surrealism", "new-realism", "meta-realism", "future", "matrix", "inception", "unproductivity", "procrastination", "useless", "unprofitability", "unflat design", "unresponsive design", "spaghetti code", "viral", "acid", "meta", "meta-meta", "lulz", "poop", "glitch", "life", "system32.dll", "myspace", "poney", "cthulhu", "hug", "manifesto", "internet for ever", "Web 3.0", "fixing the internet"]
                  , c = [a, r, s];
                i()
            }
        },
        contact: {
            categories: "Amusement",
            exec: function() {
                var e = "windows93.";
                $alert({
                    msg: '<a href="mailto:contact@' + e + 'net">contact@' + e + "net</a>",
                    title: "CONTACT US",
                    img: "/c/sys/skins/w93/mail.png"
                })
            }
        },
        dmg: {
            categories: "Emulator",
            name: "GameBoy Emulator",
            icon: "ext/gb.png",
            install: "/DMG-01.lnk42",
            accept: ".gb,.gbc",
            exec: function(e, t) {
                var n = this.app
                  , i = '<b>JavaScript GameBoy Color Emulator</b><p>Keyboard Controls:\nX = A.\nC = B.\nSPACE = Select.\nRETURN = Start.\nThe direction-pad is the control pad.</p><p><strong>Copyright (C) 2010 - 2012 <a target="_blank" href="http://web.archive.org/web/20160613180250/https://github.com/grantgalitz">Grant Galitz</a></strong></p><p><a target="_blank" href="http://web.archive.org/web/20160613180250/https://github.com/grantgalitz/GameBoy-Online">https://github.com/grantgalitz/GameBoy-Online</a></p>';
                $window.call(this, {
                    url: "/c/programs/Emulatorz/dmg/play.php" + (e ? "?rom=" + e : ""),
                    help: i,
                    title: t.title ? t.title + " - " + n.name : n.name,
                    icon: t.icon || n.icon,
                    minWidth: !0,
                    minHeight: !0,
                    width: "160",
                    height: "144",
                    bodyClass: "skin_inset_deep"
                })
            }
        },
        solitude: {
            categories: "Game;CardGame",
            name: "Solitude",
            icon: "apps/solitaire.gif",
            exec: function() {
                var e, t = {
                    url: "/c/programs/solitude/index.html",
                    bodyClass: "skin_inset_deep",
                    width: 630,
                    height: 440,
                    onopen: function(t) {
                        e = this.el.iframe
                    },
                    menu: [{
                        name: "Game",
                        items: [{
                            name: "New",
                            action: function() {
                                e.contentWindow.newGame()
                            }
                        }, {
                            name: "Retry",
                            action: function() {
                                e.contentWindow.klondike()
                            }
                        }, {
                            name: "Yeah",
                            action: function() {
                                $confirm("Do you want to win the game now?", function(t) {
                                    t && ($alert("click and drag anywhere on the game to see the fun, thanks to mr doob"),
                                    e.contentWindow.mrdoob())
                                })
                            }
                        }, {
                            name: "---"
                        }, {
                            name: "Close",
                            action: function() {
                                this.window.close()
                            }
                        }]
                    }]
                };
                $window.call(this, t)
            }
        },
        mines: {
            categories: "Game;LogicGame",
            icon: "apps/minesweeper.png",
            name: "BrianSweeper",
            exec: function(e) {
                function t(e, t, l, u) {
                    a = e,
                    r = t,
                    s = l,
                    c = u,
                    n.contentWindow.init(a, t, l, u),
                    o.changeSize({
                        width: i.scrollWidth,
                        height: i.offsetHeight
                    })
                }
                var n, i, o, a, r, s, c, l = this.app.icon, u = {
                    url: "/c/programs/minesweeper/index.html",
                    width: 516,
                    height: 312,
                    resizable: !1,
                    maximizable: !1,
                    onready: function(e) {
                        n = this.el.iframe,
                        i = n.contentWindow.document.getElementById("divBoard"),
                        t("Beginner")
                    },
                    menu: [{
                        name: "Game",
                        items: [{
                            name: "Beginner",
                            action: function() {
                                t("Beginner")
                            }
                        }, {
                            name: "Intermediate",
                            action: function() {
                                t("Intermediate")
                            }
                        }, {
                            name: "Expert",
                            action: function() {
                                t("Expert")
                            }
                        }, {
                            name: "Custom",
                            action: function() {
                                $window.form("Custom", {
                                    x: 10,
                                    y: 10,
                                    Bombs: 10
                                }, function(e, n) {
                                    e && t("Custom", n.x, n.y, n.Bombs)
                                })
                            }
                        }, {
                            name: "---"
                        }, {
                            name: "Options",
                            items: [{
                                name: "Troll mode",
                                checkbox: !0,
                                selected: !0,
                                action: function(e) {
                                    n.contentWindow.troll = e,
                                    t(a, r, s, c)
                                }
                            }]
                        }, {
                            name: "---"
                        }, {
                            name: "Close",
                            action: function() {
                                this.window.close()
                            }
                        }]
                    }, {
                        name: "Help",
                        items: [{
                            name: "Instructions",
                            action: function() {
                                $alert.help('<div style="text-align:left"><h1>Instructions for MineSweeper</h1><strong>The Basics:</strong><ul><li>You are presented with a board of squares, each with a cover. Some squares contain mines (bombs) under the covers. If you open a square containing a bomb, you loose. If you open all squares without bombs, you win.</li><li>Opening a square which doesn\'t have a bomb reveals the number of neighboring squares contain bombs. Use this information plus some guess work to avoid the bombs.</li><li>To open a square, point at the square and click on it. To mark a square you think is a bomb, point and right click. With a single button mouse use the space bar to mark a bomb.</li></ul><strong>The Details:</strong><ul><li>A squares &quot;neighbors&quot; are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges.</li><li>If you open a square with 0 neighboring bombs, all its neighbors will automatically open. This can cause a large area to automatically open.</li><li>To remove a bomb marker from a square, point at it and right-click again.</li><li>The first square you open <strike>is</strike> never a bomb.</li><li>If you mark a bomb incorrectly, you will have to correct the mistake before you can win. Incorrect bomb marking doesn\'t kill you, but it can easily lead to mistakes which do.</li><li>You don\'t have to mark all bombs to win; you just need to open all non-bomb squares.</li><li>Press the yellow face to start a new game.</li></ul><strong>The Status Information:</strong><ul><li>The upper left corner of the screen contains the number of bombs minus the number of marked squares. At the beginning of a game it is just the number of bombs. The number will update as you mark and unmark squares.</li><li>The yellow face will show a smile face while you play, a clock face when a game board is being built, a dead face when you hit a bomb, a cool face when you win, and a pirate face when you win while cheating.</li><li>The upper right corner of the screen contains a time counter. The timer will max out at <span title="16 minutes 39 seconds">999</span>.<li>Click on the time to switch to the number of moves counter. Click again to switch back to the time.</li><li>Press P to pause your game. The board will be covered while paused.</li></ul><strong>Options and Enhancements:</strong><ul><li><b>Open Remaining</b> - Once the correct number of bombs have been marked, the bomb counter will turn blue. Click on the blue bomb counter to open all remaining cells. If any bombs are incorrectly marked, this will cause instant death.</li></ul></div>')
                            }
                        }, {
                            name: "---"
                        }, {
                            name: "About",
                            action: function() {
                                $alert.info('<h1 style="margin-bottom:0">Minesweeper</h1><strong>written in JavaScript</strong><br><br>This version was written 1997-2014<br>by D. Shep Poor<br><br><br>Send comments to <a href="mailto:sheppoor@dataexperts.com">sheppoor@dataexperts.com</a><br><br><br>Original on which this game is based<br>Copyright © 1981-1995 Microsoft Corp.', l)
                            }
                        }]
                    }]
                };
                o = $window.call(this, u)
            }
        },
        castlegafa: {
            categories: "Game;Shooter",
            name: "Castle GAFA 3D",
            icon: "/c/programs/castleGafa/icon.gif",
            exec: function() {
                var e = {
                    url: "/c/programs/castleGafa/index.html",
                    icon: "/c/programs/castleGafa/icon.gif",
                    title: "Castle GAFA 3D",
                    help: '<b>Credits :</b><br><a target="_blank" href="http://web.archive.org/web/20160613180250/https://github.com/loadx/html5-wolfenstein3D">https://github.com/loadx/html5-wolfenstein3D</a><br><a target="_blank" href="http://web.archive.org/web/20160613180250/http://3d.wolfenstein.com/">http://3d.wolfenstein.com</a>',
                    width: 640,
                    height: 400
                };
                $window.call(this, e)
            }
        },
        key: {
            categories: "Utility",
            terminal: !0,
            exec: function() {
                function e() {
                    a.destroy(),
                    t.prompt.innerHTML = t.cfg.prompt,
                    t.input.blur(),
                    t.input.focus()
                }
                var t = (this.le,
                this.cli);
                $log("Press any key to get name and keyCode..."),
                $log("Press escape twice to quit");
                var n = $log.green("=> ")
                  , i = $log.blue("=> ")
                  , o = 0
                  , a = $key(function(a, r) {
                    return 27 === r ? o++ : o = 0,
                    2 === o && e(),
                    n.textContent = "=> " + a,
                    i.textContent = "=> " + r,
                    t.input.value = "",
                    !1
                }, {
                    preventDefault: !0
                });
                t.input.blur(),
                t.prompt.click(),
                t.prompt.innerHTML = "█&nbsp;",
                t.ondestroy = e
            }
        },
        chat: {
            categories: "Network;Chat",
            terminal: !0,
            exec: function() {
                function e() {
                    var e = new Date
                      , t = e.getHours() + "";
                    t = t.length > 1 ? t : "0" + t;
                    var n = e.getMinutes() + "";
                    return n = n.length > 1 ? n : "0" + n,
                    "[" + t + ":" + n + "]"
                }
                function t() {
                    n.prompt.innerHTML = ">&nbsp;",
                    n.onenter = $noop
                }
                var n = (this.le,
                this.cli)
                  , i = "";
                n.log(" "),
                n.log.white("Command-line chat loading..."),
                n.log.white("type /exit to terminate and /help for command list"),
                n.log.blue("Connecting...");
                var o = new $socket("ws://" + location.hostname + ":8081")
                  , a = !1;
                o.on("open", function() {
                    a = !0,
                    n.log.blue("Connected.")
                }),
                o.on("close", function(e) {
                    n.log.red("Disconnected.")
                }),
                o.on("message", function(t) {
                    0 === t.indexOf("*** ") ? n.log.white.italic(t) : 0 === t.indexOf("YOU ") ? (i = t.replace("YOU ", ""),
                    i = i.split("_")[0]) : /&lt;User.+&gt; \/exe /.test(t) ? t.replace(/&lt;(User.+)&gt; \/exe (.+)/, function(t, o, a) {
                        n.log[o === i ? "magenta" : "cyan"].html(e() + "<span>#" + o + '! </span><span class="underline cursor_pointer" onclick="$exe(\'' + a + "')\">" + a + "</span>")
                    }) : 0 === t.indexOf("&lt;" + i + "&gt;") ? n.log.magenta(e() + $io.str.autolink(t)) : n.log.cyan(e() + $io.str.autolink(t))
                }),
                o.connect(),
                n.onenter = function(e) {
                    return "/exit" == e ? (n.log.white("Bye..."),
                    o.disconnect(),
                    t(),
                    !1) : "/help" == e ? (n.log.white("/help : this help"),
                    n.log.white("/exit : terminate chat"),
                    n.log.white("/exe  : send a terminal command (e.g /exe acid)"),
                    !1) : (a ? o.send("message", e) : n.log.red("Not connected yet..."),
                    !1)
                }
                ,
                n.prompt.innerHTML = "chat>&nbsp;",
                n.ondestroy = t
            }
        },
        "global thermonuclear war": {
            categories: "Game;LogicGame",
            terminal: !0,
            exec: function() {
                function e() {
                    return [" ", " ", " ", " ", " ", " ", " ", " ", " "]
                }
                function t(e) {
                    var t, n, i;
                    for (i in p) {
                        for (v = t = n = 3; v--; ) {
                            var o = p[i][v];
                            "O" === h[o] && t--,
                            "X" === h[o] && n--
                        }
                        if (!t)
                            return d - e;
                        if (!n)
                            return e - d
                    }
                }
                function n(e, i, o, a) {
                    var r, s, c, l = g * g, u = -d;
                    if (s = t(e))
                        return s * i;
                    if (k > e)
                        for (; l--; )
                            if (" " === h[l]) {
                                if (h[l] = i > 0 ? "O" : "X",
                                s = -n(e + 1, -i, -a, -o),
                                h[l] = " ",
                                (void 0 === r || s > r) && (r = s),
                                s > o && (o = s),
                                o >= a)
                                    return o;
                                r > u && (u = r,
                                c = l)
                            }
                    return e ? r || 0 : c
                }
                function i() {
                    h = e(),
                    a(),
                    u.textContent = " "
                }
                function o(e) {
                    return u.textContent = e,
                    setTimeout(function() {
                        i(),
                        f && c()
                    }, 800),
                    !0
                }
                function a() {
                    for (var e = 0, t = 0; 3 > e; e++,
                    t += 3)
                        b[e].textContent = " " + (e + 10).toString(16) + " | " + h[t] + " | " + h[t + 1] + " | " + h[t + 2] + " |"
                }
                function r(e) {
                    return " " === h[e] ? (h[e] = "X",
                    a(),
                    t(0) < 0 ? o("   WINNER:     X") : void setTimeout(function() {
                        var e = n(0, 1, -d, d);
                        return h[e] = "O",
                        a(),
                        void 0 === e ? o("   WINNER:  NONE") : t(0) > 0 ? o("   WINNER:     O") : void (f && setTimeout(s, 70))
                    }, 70)) : void 0
                }
                function s() {
                    console.log(111),
                    r(n(0, -1, -d, d))
                }
                function c() {
                    var e = ~~(9 * Math.random());
                    e !== C ? (r(e),
                    C = e) : c()
                }
                function l() {
                    console.log("gtw destroy..."),
                    f = !1,
                    $log.blue("    bye..."),
                    $log.blue(" "),
                    m.prompt.innerHTML = ">&nbsp;",
                    m.onenter = $noop
                }
                var u, m = (this.le,
                this.cli), d = 100, g = 3, p = [], h = e(), f = !0, b = {};
                $log(" "),
                $log(" GREETINGS PROFESSOR FALKEN."),
                $log(' Type "start" to play'),
                $log(' and "exit" to quit'),
                $log(" "),
                $log("     1   2   3  "),
                $log("   +---+---+---+"),
                b[0] = $log(" a |   |   |   |"),
                $log("   +---+---+---+"),
                b[1] = $log(" b |   |   |   |"),
                $log("   +---+---+---+"),
                b[2] = $log(" c |   |   |   |"),
                $log("   +---+---+---+"),
                u = $log.blue(" ");
                for (var y = 0, w = [], _ = []; g > y; y++) {
                    for (var v = 0, $ = [], x = []; g > v; v++)
                        $.push(y * g + v),
                        x.push(v * g + y);
                    p.push($, x),
                    w.push(y * g + y),
                    _.push((g - y - 1) * g + y)
                }
                p.push(w, _);
                var k = 6
                  , C = -1;
                f && c(),
                a(),
                m.prompt.innerHTML = "█&nbsp;",
                m.onenter = function(e) {
                    return "exit" == e && l(),
                    "start" == e ? (f = !1,
                    setTimeout(i, 200)) : e.replace(/([a-c])([1-3])/i, function(e, t, n) {
                        r(3 * (parseInt(t, 16) - 10) + (n - 1))
                    }),
                    !1
                }
                ,
                m.ondestroy = l
            }
        },
        fx: {
            categories: "Graphics",
            icon: "apps/fx.png",
            inject: "arguments",
            init: function() {
                this.app.effects = e._fx
            },
            exec: function(e, t) {
                function n() {
                    $io.arr.all(s.effects, function(e) {
                        var t = document.querySelectorAll(".fx_" + e);
                        $io.arr.all(t, function(t) {
                            t.classList.remove("fx_" + e)
                        })
                    })
                }
                function i(e) {
                    t.length ? $io.arr.all(t, function(t) {
                        o(t, e)
                    }) : o(t, e)
                }
                function o(e, t) {
                    $io.arr.all(e.classList, function(n) {
                        0 === n.indexOf("fx_") && t !== n && e.classList.remove(n)
                    }),
                    c = e.style.webkitTransform,
                    e.style.webkitTransform = "scale(1)",
                    e.classList.toggle(t),
                    e.style.webkitTransform = c
                }
                function a() {
                    var e = "none";
                    return $io.arr.all(t.classList, function(t) {
                        0 === t.indexOf("fx_") && (e = t.replace("fx_", ""))
                    }),
                    e
                }
                var r = this.le
                  , s = this.app;
                if ("string" != typeof e && (e = ""),
                "reset" === e)
                    return void n();
                "string" == typeof t ? t = document.querySelectorAll(t) : $io.isElement(t) || $io.isNodeList(t) || (t = r._dom.screen);
                var c;
                if (!e) {
                    if (this.cli)
                        return $log("Experimental CSS3 and SVG effects"),
                        $log(" "),
                        $log($io.str.htmlEscape("Usage : fx <effect_name> [css selector]")),
                        $log('e.g. : "fx acid"'),
                        $log('e.g. : "fx blur .ui_window"'),
                        $log('e.g. : "fx spin .ui_icon"'),
                        $log(" "),
                        $log("Call the command again to switch off the effect."),
                        $log("Without [css selector], effects are applied to all screen."),
                        $log("(Can make non-undoable glitches)"),
                        $log(" "),
                        $log("Available effects :"),
                        $log(s.effects.join(", ")),
                        void $log(" ");
                    $window.form("FX", {
                        schema: {
                            type: "object",
                            properties: {
                                name: {
                                    title: '<img style="position:absolute" width="32" height="32" src="/c/sys/skins/w93/apps/fx.png">',
                                    type: "string",
                                    "default": a(),
                                    "enum": ["none"].concat(s.effects),
                                    attributes: {
                                        onchange: function(e) {
                                            i("fx_" + this.value)
                                        }
                                    }
                                }
                            }
                        }
                    }, function(e) {
                        console.log(e),
                        e || i("fx_none")
                    })
                }
                s.effects.indexOf(e) > -1 ? i("fx_" + e) : $log.error("The effect " + e + " does not exist.")
            }
        },
        acid: {
            categories: "Amusement",
            exec: function() {
                $exe.call({
                    silent: !0
                }, "fx", "acid")
            }
        },
        rotate: {
            categories: "Amusement",
            exec: function() {
                this.le._dom.screen.classList.contains("fx_rotate") ? (this.le._dom.screen.classList.remove("fx_rotate"),
                this.le._dom.screen.classList.add("fx_unrotate")) : (this.le._dom.screen.classList.remove("fx_unrotate"),
                this.le._dom.screen.classList.add("fx_rotate"))
            }
        },
        gravity: {
            categories: "Amusement",
            exec: function() {
                this.app.done || (console.log("gravity"),
                this.app.done = !0,
                $loader(["/c/libs/jquery.min.js", "/c/libs/jGravity.js"], function() {
                    $("#s42_desktop").jGravity({
                        target: ".ui_icon,.ui_window,.virus",
                        depth: 15
                    })
                }))
            }
        },
        lisa: {
            categories: "Amusement",
            exec: function() {
                function e() {
                    $window.call(t, {
                        title: "Virtal Girl",
                        header: !1,
                        resizable: !1,
                        draggable: !1,
                        contextmenuOnBody: !0,
                        baseClass: "ui_desktop_layer app_lisa",
                        baseHeight: n.height,
                        baseWidth: n.width,
                        html: n,
                        onopen: function(e) {
                            setTimeout(function() {
                                e.style.top = "auto",
                                e.style.left = "auto",
                                e.style.right = "0px",
                                e.style.bottom = "-4px"
                            }, 0)
                        }
                    })
                }
                var t = this
                  , n = new Image;
                n.src = "/c/files/images/gif/lisa.gif",
                n.className = "ui_layout_center app_imageviewer__img",
                n.onload = e,
                n.onerror = e,
                n.onabort = e
            }
        },
        hydra: {
            categories: "Amusement",
            icon: "apps/hydra.png",
            exec: function() {
                function e() {
                    $alert({
                        msg: "Cut off a head, two more will take its place.<br>[ Hydra ViRuS BioCoded by Typhon/Échidna ]",
                        title: "HYDRA",
                        img: t,
                        baseClass: "virus virus--hydra ui_alert",
                        center: !1,
                        cb: function(t) {
                            e(),
                            e()
                        }
                    })
                }
                var t = this.app.icon;
                e()
            }
        },
        doctor: {
            categories: "Security",
            icon: "apps/doctor.gif",
            exec: function(e) {
                function t(e, t) {
                    i._dom.screen.classList.remove("acid"),
                    i._dom.screen.classList.remove("rotate"),
                    i._dom.screen.classList.remove("invert"),
                    i._dom.screen.classList.remove("grayscale"),
                    i._dom.screen.setAttribute("style", ""),
                    $io.obj.all(i._clean, function(e) {
                        $io.arr.all(e, function(e) {
                            e()
                        })
                    });
                    for (var o in i._clean)
                        delete i._clean[o];
                    var a = document.querySelectorAll(".virus");
                    a.length ? ($io.arr.all(a, function(e) {
                        $window.destroy(e)
                    }),
                    e !== !1 && n(e || "All Virus Killed !")) : t !== !1 && n(t || "No Virus detected.")
                }
                function n(e) {
                    $alert({
                        title: "Doctor Marburg Antivirus",
                        img: o.app.icon,
                        btnOk: "Thanks !",
                        msg: e
                    })
                }
                var i = this.le
                  , o = this;
                if (e && e.clean)
                    return void t(!1, !1);
                var a = [function() {
                    $confirm({
                        title: "Doctor Marburg Antivirus",
                        img: o.app.icon,
                        btnOk: "Yep!",
                        btnCancel: "Nope!",
                        msg: "That Hydra virus again ?"
                    }, function(e) {
                        e && t("Don't click on it next time", "Are you kidding? There is no Hydra here!")
                    })
                }
                , function() {
                    $confirm({
                        title: "Doctor Marburg Antivirus",
                        img: o.app.icon,
                        btnOk: "Breathe",
                        msg: "Breathe in and out please..."
                    }, function(e) {
                        e && t("Inhale inhale. You're the victim", "Diagnostic : Psycho-somatic addict-insane")
                    })
                }
                , function() {
                    $prompt({
                        title: "Doctor Marburg Antivirus",
                        img: o.app.icon,
                        btnOk: "Say it",
                        msg: "Say 99..."
                    }, function(e, n) {
                        e && "99" == n ? t() : e && $confirm({
                            title: "Doctor Marburg Antivirus",
                            img: o.app.icon,
                            btnOk: "Let's do that",
                            msg: "Mhh, you're very sick, unfortunately I can't do anything for you... Except cleaning your computer"
                        }, function(e, n) {
                            e && t()
                        })
                    })
                }
                , function() {
                    $confirm({
                        title: "Doctor Marburg Antivirus",
                        img: o.app.icon,
                        msg: "Welcome to Doctor Marburg Antivirus.<br>Would you like to clean your System ?"
                    }, function(e, i) {
                        e ? $confirm({
                            title: "Doctor Marburg Antivirus",
                            img: o.app.icon,
                            btnOk: "Sure",
                            btnCancel: "Not Really",
                            msg: "<b>Warning !</b><br>Doctor Marburg is not responsible for direct, indirect, incidental or consequential damages resulting from any defect, error or failure to perform this ilegal operation.<br><br>Do you want to perform anyway ?"
                        }, function(e, i) {
                            e ? $prompt({
                                title: "Doctor Marburg Antivirus",
                                img: o.app.icon,
                                btnCancel: "Never Mind",
                                msg: "Ok, please confirm with your credit card number"
                            }, function(e, i) {
                                e ? n("<b> Ilegal operation detected !</b><br>DOCTOR MARBURG had blocked the following malware application to perform an ilegal operation : <br><br><i>DOCTOR MARBURG - ilegal Operation detected</i>") : $confirm({
                                    title: "Doctor Marburg Antivirus",
                                    img: o.app.icon,
                                    btnOk: "Sure",
                                    msg: "I was just testing you ;)<br>Do the cleaning operation anyway ?"
                                }, function(e, n) {
                                    e && t()
                                })
                            }) : n("You're such a Pussy :p")
                        }) : t("Well, I did it anyway ^^", !1)
                    })
                }
                ];
                document.querySelector(".virus--hydra") ? a[0]() : $io.arr.random(a)()
            }
        },
        ie6: {
            categories: "Amusement",
            exec: function(e) {
                var t = this.le;
                if (!e)
                    return void $log.error("Error: CSS selector missing.");
                if (this.app.canvas)
                    n = this.app.canvas,
                    i = this.app.context;
                else {
                    var n = document.createElement("canvas");
                    n.id = "app_ie6",
                    n.className = "virus",
                    n.style.position = "fixed",
                    n.style.zIndex = "9999",
                    n.style.top = "0",
                    n.style.left = "0",
                    n.style.pointerEvents = "none",
                    n.width = window.innerWidth,
                    n.height = window.innerHeight,
                    t._dom.screen.appendChild(n);
                    var i = n.getContext("2d");
                    this.app.canvas = n,
                    this.app.context = i
                }
                $screenshot(e, function(e, o) {
                    function a() {
                        s.destroy(),
                        c.destroy(),
                        t._dom.screen.removeChild(n),
                        $el(e).off("*"),
                        document.body.removeChild(e)
                    }
                    var r = o.getBoundingClientRect();
                    e.className = "virus app_ie6_cnv cursor_move",
                    e.style.position = "absolute",
                    e.style.zIndex = $maxZ(".ui_window,.ui_z_indexed").num + 1,
                    e.style.top = r.top + "px",
                    e.style.left = r.left + "px",
                    document.body.appendChild(e),
                    $el(e).on("dblclick contextmenu", function(e) {
                        e.preventDefault(),
                        i.clearRect(0, 0, n.width, n.height)
                    });
                    var s = $drag(e, {
                        ondrag: function(t, n, o) {
                            i.drawImage(e, n, o)
                        }
                    })
                      , c = $key(e, {
                        space: function() {
                            i.clearRect(0, 0, n.width, n.height)
                        },
                        esc: function() {
                            a()
                        }
                    });
                    $el(e).trigger("click"),
                    n.style.zIndex = $maxZ(".ui_window,.ui_z_indexed").num - 1,
                    i.drawImage(e, r.left, r.top),
                    o.classList.contains("ui_window") && $window.destroy(o),
                    t._clean.ie6 || (t._clean.ie6 = []),
                    t._clean.ie6.push(a)
                })
            }
        },
        glitch: {
            categories: "Amusement",
            exec: function(e, t, n) {
                var i = this.le;
                $loader(["/c/libs/glitch-canvas.js"], function(t) {
                    function o() {
                        c.amount = Math.random(),
                        c.seed = Math.random(),
                        c.iterations = Math.random() * n,
                        c.quality = .99
                    }
                    u = "number" == typeof u ? u : 50,
                    n = "number" == typeof n ? n : 20;
                    var a, r, s, c = {};
                    o();
                    {
                        var l, u = 50;
                        $screenshot(e, function(e, m) {
                            function d(e) {
                                e && e.preventDefault(),
                                clearTimeout(l),
                                $el(a).off("click", p).off("dblclick touchstart", d).off("contextmenu", g),
                                y.destroy(),
                                a.parentNode && a.parentNode.removeChild(a),
                                a = null
                            }
                            function g(e) {
                                e.preventDefault(),
                                o(),
                                b ? h() : clearTimeout(l),
                                b = !b
                            }
                            function p() {
                                $route("")
                            }
                            function h() {
                                c.iterations = Math.random() * n,
                                c.quality = .99 - Math.random(),
                                t(s, c, function(e) {
                                    r.drawImage(e, 0, 0),
                                    l = setTimeout(h, u)
                                })
                            }
                            a = e;
                            var f = m.getBoundingClientRect();
                            a.className = "virus app_glitch ui_z_indexed",
                            a.style.position = "fixed",
                            a.style.zIndex = $maxZ(".ui_window,.ui_icon,.ui_z_indexed").num + 1,
                            a.style.top = f.top + "px",
                            a.style.left = f.left + "px",
                            r = a.getContext("2d"),
                            s = r.getImageData(0, 0, a.width, a.height),
                            document.body.appendChild(a),
                            i._clean.glitch || (i._clean.glitch = []),
                            i._clean.glitch.push(d);
                            var b = !1;
                            $el(a).on("click", p).on("dblclick touchstart", d).on("contextmenu", g);
                            var y = $wheel(a, function(e, i) {
                                clearTimeout(l),
                                b = !0,
                                c.iterations = Math.random() * n,
                                c.quality = 1 === e ? .99 - Math.random() : .99,
                                i.shiftKey && (n += e,
                                1 > n && (n = 0)),
                                t(s, c, function(e) {
                                    r.drawImage(e, 0, 0)
                                })
                            }, {
                                throttle: u / 2
                            });
                            h(),
                            "vibrate"in window.navigator && navigator.vibrate(2e3)
                        })
                    }
                })
            }
        },
        marburg: {
            categories: "Amusement",
            exec: function() {
                function e() {
                    1 == g && (c = new i,
                    u.push(c),
                    m += 1,
                    0 == d && l.play())
                }
                function t() {
                    h = requestAnimationFrame(t),
                    u.length > 0 && n()
                }
                function n() {
                    r.width = window.innerWidth,
                    r.height = window.innerHeight;
                    var e;
                    for (e = 0; m > e; e++)
                        u[e] && (u[e].myX += Math.floor(5 * Math.random()) - 2,
                        u[e].myY += Math.floor(5 * Math.random()) - 2,
                        u[e].mySize < 10 ? u.splice(e, 1) : (u[e].myRandomSize != u[e].mySize && (u[e].mySize = u[e].mySize + (u[e].myRandomSize - u[e].mySize) / 4),
                        s.drawImage(p, u[e].myX - u[e].mySize / 2, u[e].myY - u[e].mySize / 2, u[e].mySize, u[e].mySize)))
                }
                function i() {
                    this.myMaxX = window.innerWidth - 32,
                    this.myMaxY = window.innerHeight - 32,
                    this.myX = Math.floor(Math.random() * this.myMaxX),
                    this.myY = Math.floor(Math.random() * this.myMaxY),
                    this.myRandomSize = Math.floor(128 * Math.random()) + 32,
                    this.mySize = 10
                }
                function o() {
                    g = 1,
                    c = new i,
                    u.push(c),
                    m += 1,
                    l.play()
                }
                var a = this.le;
                a._clean.marburg || (a._clean.marburg = []),
                a._clean.marburg.push(function() {
                    r.parentNode && r.parentNode.removeChild(r),
                    cancelAnimationFrame(h),
                    document.removeEventListener("click", e, !0)
                });
                var r = document.createElement("canvas");
                r.id = "app_marburg",
                r.className = "virus",
                r.style.position = "absolute",
                r.style.zIndex = "9999",
                r.style.top = "0",
                r.style.left = "0",
                r.style.pointerEvents = "none",
                r.width = window.innerWidth,
                r.height = window.innerHeight,
                a._dom.screen.appendChild(r);
                var s = r.getContext("2d");
                s.webkitImageSmoothingEnabled = !1,
                s.oImageSmoothingEnabled = !1,
                s.mozImageSmoothingEnabled = !1,
                s.imageSmoothingEnabled = !1;
                var c, l = $audio("/c/sys/sounds/BLOP.ogg"), u = [], m = 1, d = 0, g = 0;
                document.addEventListener("click", e, !0);
                var p = new Image;
                p.onload = function() {}
                ,
                p.src = "/c/files/images/png/error-alpha.png",
                t();
                var h;
                o()
            }
        },
        mess: {
            categories: "Amusement",
            name: "MESS.ENGER®",
            icon: "/c/programs/messEnger/img/messlogo.png",
            exec: function() {
                $window.call(this, {
                    url: "/c/programs/messEnger/index.php",
                    width: 390,
                    height: 450
                })
            }
        }
    }
});
system42.on("apps:ready", function(e) {
    "use strict";
    e._apps.pony = {
        categories: "Music;Graphics",
        name: "Poney Jockey",
        icon: "apps/poney.gif",
        accept: ".json",
        exec: function(t, a) {
            function o(e, t, a) {
                var o = document.createElement("div");
                return o.className = "ui_keyboard_layout ui_keyboard_layout--" + t + (a || ""),
                $io.arr.all(e, function(e) {
                    var t = b.cloneNode()
                      , a = e.split(" ");
                    $io.arr.all(a, function(e) {
                        var a = v.cloneNode();
                        "{}" === e && (e = "&nbsp;",
                        a.classList.add("invisible")),
                        e = "{" !== e && "}" != e ? e.replace(/\{|\}/g, "") : e,
                        a.setAttribute("data-key", e),
                        a.innerHTML = $keyboard.alias[e] || e,
                        t.appendChild(a)
                    }),
                    o.appendChild(t)
                }),
                o
            }
            function n(t) {
                $loader(["/c/sys/keyboard/layouts/french.js"], function(a) {
                    var n = e._keyboard.layout["french-azerty-1"];
                    h.appendChild(o($.concat(n.normal), "normal")),
                    h.appendChild(o($.concat(n.Shift), "Shift", " hide")),
                    h.appendChild(o($.concat(n.AltGraph), "AltGraph", " hide")),
                    h.appendChild(o($.concat(n.Shift_AltGraph), "Shift_AltGraph", " hide")),
                    h.appendChild(o(A, "ExtraKeys")),
                    t.appendChild(h),
                    t.appendChild(k),
                    t.appendChild(_.el),
                    l(h)
                })
            }
            function r(e) {
                $io.arr.all(document.querySelectorAll(".ui_keyboard_layout:not(.ui_keyboard_layout--ExtraKeys):not(.ui_keyboard_layout--NumpadKeys)"), function(e) {
                    e.classList.add("hide")
                });
                var t = document.querySelector(".ui_keyboard_layout--" + e);
                t ? t.classList.remove("hide") : document.querySelector(".ui_keyboard_layout--normal").remove("hide")
            }
            function i() {
                return S = $keyboard.keys.sort().concat(p()).join("+")
            }
            function c(e) {
                k.value = e,
                _.update(m[e])
            }
            function l(e) {
                $el(_.el).on("change keyup click", "input, select, textarea", function(e) {
                    var t = $form(_.el).post;
                    m[k.value] = t
                }),
                $el(e).on("click", "button[data-key]", function(e) {
                    var t = this.getAttribute("data-key");
                    k.value = t + p(),
                    _.update(m[t])
                }),
                $keyboard(e).config({
                    preventDefault: !0,
                    stopPropagation: !0
                }).down(function(e, t) {
                    $keyboard.AltGraph && $keyboard.Shift ? r("Shift_AltGraph") : $keyboard.Shift ? r("Shift") : $keyboard.AltGraph && r("AltGraph");
                    var a = t.loc
                      , o = '"' === a ? "[data-key='" + a + "']" : '[data-key="' + a + '"]';
                    return $io.arr.all(document.querySelectorAll(o), function(e) {
                        e && !e.classList.contains("pressed") && e.classList.add("pressed")
                    }),
                    c(i()),
                    !1
                }).up(function(e, t) {
                    r($keyboard.AltGraph && $keyboard.Shift ? "Shift_AltGraph" : $keyboard.Shift ? "Shift" : $keyboard.AltGraph ? "AltGraph" : "normal");
                    var a = t.loc
                      , o = '"' === a ? "[data-key='" + a + "']" : '[data-key="' + a + '"]';
                    $io.arr.all(document.querySelectorAll(o), function(e) {
                        e && e.classList.contains("pressed") && e.classList.remove("pressed")
                    })
                })
            }
            function s(e) {
                setTimeout(e, 1)
            }
            function d(e) {
                return "object" == typeof e ? e.pressed : e > .75
            }
            function p() {
                var e = [];
                for (var t in g)
                    g.hasOwnProperty(t) && g[t] === !0 && e.push(t);
                return e
            }
            function u() {
                var t = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [];
                if (t) {
                    var a = t[0];
                    if (a) {
                        for (var o = 0, n = a.buttons.length; n > o; o++)
                            d(a.buttons[o]) ? (g["btn" + o] = !0,
                            f()) : (g["btn" + o] = !1,
                            y());
                        a.axes[3] > -.6 ? (k.value = a.axes[3],
                        e._dom.screen.style.transform = "scale(" + (3 * (1.6 + a.axes[3]) - 2) + ")") : e._dom.screen.style.transform = "scale(1)",
                        x = requestAnimationFrame(u)
                    }
                }
            }
            function f() {
                var e = i();
                c(e),
                $io.obj.all(m, function(t, a) {
                    a === e && (t.cmd && $exe(t.cmd),
                    t.js && s(t.js),
                    t.snd && $audio(t.snd).play(),
                    t.fx && $exe("fx " + t.fx))
                })
            }
            function y() {
                var e = i();
                $io.obj.all(m, function(t, a) {
                    a === e && t.fx && t.fxstop && $exe("fx " + t.fx)
                })
            }
            var m, h = (document.createElement("div"),
            document.createElement("div")), b = document.createElement("div"), v = document.createElement("button"), k = document.createElement("input");
            h.className = "ui_keyboard_layouts",
            k.className = "ui_keyboard_combo skin_inset pa2 pl5 mb10 w100",
            k.setAttribute("readonly", !0);
            var x, $ = ["Escape F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12"], A = ["{PrintScreen} {ScrollLock} {Pause}", "{Insert} {Home} {PageUp}", "{Delete} {End} {PageDown}", "{}", "{} {ArrowUp} {}", "{ArrowLeft} {ArrowDown} {ArrowRight}"], _ = $form({
                data: {
                    cmd: "yo",
                    snd: ""
                },
                schema: {
                    type: "object",
                    properties: {
                        snd: {
                            title: "sound",
                            type: "string",
                            placeholder: "enter any sound url...",
                            plugin: {
                                explorer: {
                                    accept: "audio/*",
                                    path: "/c/files/sounds/"
                                }
                            }
                        },
                        fx: {
                            title: "fx",
                            type: "string",
                            "enum": [""].concat(e._fx)
                        },
                        fxstop: {
                            title: "stop fx on keyup",
                            type: "boolean",
                            "default": !0
                        },
                        cmd: {
                            title: "command",
                            type: "string",
                            placeholder: "type any valid command",
                            plugin: {
                                explorer: {
                                    accept: "*",
                                    path: "$HOME"
                                }
                            }
                        },
                        js: {
                            title: "javascript",
                            type: "string",
                            placeholder: "execute some javascript",
                            format: "textarea"
                        },
                        prDe: {
                            title: "prevent default",
                            type: "boolean"
                        },
                        repeat: {
                            title: "key repeat",
                            type: "boolean"
                        }
                    }
                }
            }), g = {};
            u();
            {
                var S;
                $keyboard().config({
                    repeat: !1
                }).down(function(e) {
                    var t = !1
                      , a = !1
                      , o = i();
                    return $io.obj.all(m, function(e, n) {
                        n === o && (e.cmd && $exe(e.cmd),
                        e.js && s(e.js),
                        e.snd && $audio(e.snd).play(),
                        e.fx && $exe("fx " + e.fx),
                        e.prDe === !0 && (t = !0),
                        e.repeat === !1 && (a = !0))
                    }),
                    a ? "noRepeat" : t ? !1 : void 0
                }).up(function(e) {
                    var t = !1
                      , a = S;
                    return $io.obj.all(m, function(e, o) {
                        o === a && (e.fx && e.fxstop && $exe("fx " + e.fx),
                        e.prDe === !0 && (t = !0))
                    }),
                    t ? !1 : void 0
                })
            }
            $editor.call(this, {
                type: "String",
                filePath: t,
                create: function(e) {
                    return n(e),
                    {
                        readFile: function(e) {
                            m = JSON.parse(e)
                        },
                        setValue: function(e) {
                            m = $store("/etc/Poney Jockey/current.json", {
                                Spacebar: {
                                    snd: "",
                                    fx: "noir",
                                    fxstop: !0,
                                    cmd: "",
                                    js: 'console.log("SPACE BAAAAAAR")',
                                    prDe: !1,
                                    repeat: !1
                                },
                                "": {
                                    snd: "",
                                    fx: "",
                                    fxstop: !0,
                                    cmd: "",
                                    js: "",
                                    prDe: !1,
                                    repeat: !1
                                }
                            }, function(e) {
                                m = e
                            }, function() {
                                return m
                            })
                        },
                        getValue: function(e) {
                            e(m)
                        }
                    }
                },
                window: $extend({
                    center: !0,
                    animationIn: !1,
                    width: 440,
                    height: 420,
                    bodyClass: "poney_jockey"
                }, a)
            })
        }
    }
});
system42("desktop", function(e) {
    "use strict";
    e._temp.defaultDesk = [{
        name: "WINDOWS 93.lnk42",
        exe: "/",
        row: 0,
        col: 0
    }, {
        name: "System (C:).lnk42",
        exe: "/c/",
        row: 1,
        col: 0
    }, {
        name: "Storage (A:).lnk42",
        exe: "/a/",
        row: 1,
        col: 1
    }, {
        name: "home.lnk42",
        exe: "/~/",
        row: 1,
        col: 2
    }, {
        name: "Terminal.lnk42",
        exe: "terminal",
        row: 2,
        col: 0
    }, {
        name: "Cat Explorer.lnk42",
        exe: "catex",
        row: 2,
        col: 1
    }, {
        name: "Clavardage.lnk42",
        exe: "chat",
        icon: "apps/chat.gif",
        row: 2,
        col: 2
    }, {
        name: "Zkype.lnk42",
        exe: "zkype",
        row: 2,
        col: 3
    }, {
        name: "Piskel.lnk42",
        exe: "piskel",
        row: 3,
        col: 0
    }, {
        name: "CodeMirror.lnk42",
        exe: "codem",
        row: 3,
        col: 1
    }, {
        name: "HexEd.lnk42",
        exe: "hexed",
        row: 3,
        col: 2
    }, {
        name: "3d.lnk42",
        exe: "3d",
        row: 3,
        col: 3
    }, {
        name: "Bananamp.lnk42",
        exe: "bananamp",
        row: 3,
        col: 4
    }, {
        name: "Poney Jockey.lnk42",
        exe: "pony",
        row: 4,
        col: 0
    }, {
        name: "Byte Beat.lnk42",
        exe: "bytebeat",
        row: 4,
        col: 1
    }, {
        name: "Puke Data.lnk42",
        exe: "pd",
        row: 4,
        col: 2
    }, {
        name: "Speech.lnk42",
        exe: 'iframe /c/programs/speech/index.php --noinset --width=200 --height=400 --help="chrome only..."',
        icon: "apps/voice.png",
        row: 4,
        col: 3
    }, {
        name: "LSDJ.lnk42",
        exe: "/c/files/roms/dmg/music/lsdj3_1_9_demo.gb",
        icon: "apps/lsdj.png",
        row: 4,
        col: 4
    }, {
        name: "Nanoloop.lnk42",
        exe: "/c/files/roms/dmg/music/nanoloop171d.gb",
        icon: "apps/nanoloop.png",
        row: 4,
        col: 5
    }, {
        name: "Glitch Grrrlz.lnk42",
        exe: "/c/files/roms/dmg/fail/Glitch_Grrrlz-Vol01.gbc",
        icon: "apps/glitchgirlz.png",
        row: 4,
        col: 6
    }, {
        name: "FX.lnk42",
        exe: "fx",
        row: 4,
        col: 7
    }, {
        name: "Robby.lnk42",
        exe: 'iframe /c/programs/robby/index.php --noinset --width=420 --height=400 --title=Robby --icon=apps/robby.png --help="Robby : ascii based game by Morusque <3"',
        icon: "apps/robby.png",
        row: 5,
        col: 0
    }, {
        name: "Take this.lnk42",
        exe: 'iframe /c/programs/dangerous/index.html --width=500 --height=440 --footer=&nbsp; --title="Take this" --icon=apps/dangerous.png',
        icon: "apps/dangerous.png",
        row: 5,
        col: 1
    }, {
        name: "Pokéglitch.lnk42",
        exe: "/c/files/roms/dmg/fail/Pokeglitch.gb",
        title: "Pokégl̀ͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀̀ͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀ͤ͗̀ͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀ͤ͗̀ͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀ͤ͗̚̚̚̚̚̚̚̚̚ìͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀ͤ͗̀ͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀ͤ͗̀ͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀ͤ͗̀ͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀ͤ͗̀ͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣ̚̚̚̚̚̚̚̚̚̚̚̚tͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀ͤ͗̀ͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀ͤ͗̀ͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀ͤ͗̀ͤ͗̅͗̄̐̃ͬͮͣͩͮ̆̓́͛ͯͤͣͧ̔ͮ̈́ͯ̅۫ͫ̈́̊̃͛͐̎̂̓̃̇͛̍ͪͩ́͒͆̓̉̽̍̏͂ͮ̈́ͦ̀ͤ͗ͤ͗̚̚̚̚̚̚̚̚̚̚̚̚̚̚̚tch",
        icon: "apps/helix.png",
        row: 5,
        col: 2
    }, {
        name: "What If.lnk42",
        exe: 'iframe --width=600 --height=330 --title="What If?" --icon=apps/matrix.png /c/programs/matrix/index.php',
        icon: "apps/matrix.png",
        row: 5,
        col: 3
    }, {
        name: "Virtual PC.lnk42",
        exe: "iframe http://windows93.net/ --width=600 --height=400 --help=INCEPTION",
        icon: "apps/inception.png",
        row: 5,
        col: 4
    }, {
        name: "HAMPSTER.lnk42",
        exe: "iframe /c/programs/hampsterDance/index.html --width=600 --height=400",
        icon: "/c/programs/hampsterDance/icon.gif",
        row: 5,
        col: 5
    }, {
        name: "lenna.png.lnk42",
        exe: "img /c/files/images/png/lenna.png --width=512 --height=512 --bodyClass=noscroll",
        row: 6,
        col: 0
    }, {
        name: "Star Wars.avi.lnk42",
        exe: "iframe /c/programs/starwars/index.html --width=429 --height=177",
        icon: "apps/yoda.gif",
        help: "Star Wars Asciimation created by <a href=http://www.asciimation.co.nz/ target=_blank>www.asciimation.co.nz</a>",
        row: 6,
        col: 1
    }, {
        name: "Corglitch.lnk42",
        exe: "glitch",
        icon: "apps/corgi.gif",
        row: 6,
        col: 2
    }, {
        name: "Doctor Marburg.lnk42",
        exe: "doctor",
        row: 6,
        col: 3
    }, {
        name: "DEREG32.EXE.lnk42",
        exe: "marburg",
        icon: "apps/sick.png",
        row: 6,
        col: 4
    }, {
        name: "Virtual Girl.lnk42",
        exe: "lisa",
        icon: "apps/annaKournikova.gif",
        row: 7,
        col: 0
    }, {
        name: "Hydra.exe.lnk42",
        exe: "hydra",
        icon: "apps/hydra.png",
        row: 7,
        col: 1
    }, {
        name: "Acid Box 93.lnk42",
        exe: 'iframe /c/programs/acidBox93/index.html --width=600 --height=400 --help="Demoscene tribute 4 Acid loverz...<br>Acid mix by Dj Invisible Pink<br>Cracktro Maded with CODEF <3"',
        icon: "apps/acidBox.png",
        row: 7,
        col: 2
    }, {
        name: "Arena 93.lnk42",
        exe: 'iframe /c/programs/Arena93/index.html --width=600 --height=400 --title="Arena 93" --icon=apps/arena93.png',
        icon: "apps/arena93.png",
        row: 7,
        col: 3
    }, {
        name: "Game Of Life.lnk42",
        exe: 'iframe /c/programs/gameOfLife/index.html --width=600 --height=600 --title="Game Of Life" --icon=apps/gameOfLife.png',
        icon: "apps/gameOfLife.png",
        row: 7,
        col: 4
    }, {
        name: "Solitude.lnk42",
        exe: "solitude",
        row: 7,
        col: 5
    }, {
        name: "Brian Sweeper.lnk42",
        exe: "mines",
        row: 7,
        col: 6
    }, {
        name: "Castle GAFA 3D.lnk42",
        exe: "castlegafa",
        row: 7,
        col: 7
    }, {
        name: "Defrag.lnk42",
        exe: "iframe /c/programs/defrag/index.php --noinset --width=640 --height=495",
        icon: "apps/defrag.png",
        row: 7,
        col: 8
    }, {
        name: "Totally not a virus.Trust me...im a dolphin.lnk42",
        exe: "gravity",
        icon: "apps/dolphin.png",
        row: 8,
        col: 0
    }, {
        name: "Pizzacid.lnk42",
        exe: "fx acid",
        icon: "/c/files/images/icons/pizza.gif",
        row: 8,
        col: 1
    }, {
        name: "E6smopuıM.lnk42",
        exe: "rotate",
        icon: "/c/files/images/icons/rotatecomputer.png",
        row: 8,
        col: 2
    }, {
        name: "OLDEST GIF OF THE INTERWEBZ.gif.lnk42",
        exe: "/c/files/images/gif/wind.gif",
        row: 8,
        col: 3
    }, {
        name: "Contact us.lnk42",
        exe: "contact",
        icon: "mail.png",
        row: 8,
        col: 4
    }, {
        name: "Credits.txt.lnk42",
        exe: 'iframe /c/credits.html --width=450 --height="300" --bodyClass="skin_light skin_inset"',
        row: 8,
        col: 5
    }, {
        name: "MANIFESTO.lnk42",
        exe: "manifesto",
        row: 8,
        col: 6
    }, {
        name: "TRASH.lnk42",
        exe: "/a/trash/",
        icon: "trash.png",
        row: 100,
        col: 0
    }]
});
system42("exe", function(t) {
    "use strict";
    function e(t) {
        var e = $url.getDomain(t.url);
        if (e && location.hostname != e)
            return $window(t),
            !0;
        if ("/" === t.url.slice(-1))
            return $explorer(t.url),
            !0;
        if (t.url) {
            var r;
            if (t.openers)
                r = l[t.openers.split(",")[0]];
            else {
                var o = $fs.utils.getOpeners(t.url);
                o[0] && (r = l[o[0]])
            }
            if (r && r.exec)
                return i.call(this, r, {
                    command: t.url,
                    arguments: [t.url],
                    options: t
                }),
                !0
        }
        return !1
    }
    function i(e, i) {
        var o = this || {}
          , n = o && o.cli;
        return e.terminal !== !0 || n ? e.exec.apply({
            le: t,
            that: o,
            cli: n ? o : null,
            arg: i
        }) : r.call(this, "terminal", "", {
            onopen: function(r) {
                setTimeout(function() {
                    e.exec.apply({
                        le: t,
                        that: o,
                        cli: r,
                        arg: i
                    })
                }, 100)
            }
        }),
        !0
    }
    function r(t, n, s) {
        if (t && "string" == typeof t && -1 != t.indexOf(" | ")) {
            var u = this
              , c = t.split(" | ");
            return u.silent || ($route(t),
            u.slient = !0),
            $io.arr.each(c, function(t, e) {
                setTimeout(function() {
                    r.call(u, t)
                }, 700 * e)
            }),
            !0
        }
        if (t)
            if (t.nodeType && 1 === t.nodeType) {
                var p = $extend({}, t.dataset);
                if (p.exe)
                    return r(p.exe, n, p);
                if (p.alert)
                    return $alert(p.alert),
                    !0;
                if (p.error)
                    return $alert.error(p.error),
                    !0
            } else {
                if (l[t] && l[t].exec)
                    return i.call(this, l[t], {
                        command: t,
                        arguments: Array.prototype.slice.call(arguments, 1)
                    });
                if ("string" == typeof t) {
                    if (0 === t.indexOf("http"))
                        return s && void 0 !== s.iframable ? a(t, s) : r.parseURL(t, function(t) {
                            a(t.exe, t)
                        }),
                        !0;
                    var f;
                    try {
                        f = o(t)
                    } catch (d) {}
                    if (f && f.program && l[f.program] && l[f.program].exec)
                        return s && (f.launcher = s),
                        i.call(this, l[f.program], f);
                    try {
                        0 !== t.indexOf("/") && this && this.cfg && this.cfg.cwd && (t = this.cfg.cwd + "/" + t);
                        var h = $fs.utils.getPathObj(t);
                        if (void 0 !== h)
                            return "object" == typeof h.obj && "/" !== t.slice(-1) && (t += "/"),
                            e.call(this, {
                                url: t
                            })
                    } catch (d) {}
                }
            }
        return !1
    }
    function o(t) {
        for (var e, i = [], r = [], o = {
            "long": {},
            "short": {}
        }, n = !1, a = !1, s = !1, u = 0, c = 0, p = 0, f = t.length; f >= p; p++)
            if (e = t.charAt(p),
            n || "-" !== e || !a && " " !== t.charAt(p - 1))
                if ('"' !== e || "\\" === t.charAt(p - 1))
                    if (!n && " " === e || p === f)
                        if (a) {
                            var d = r[u].split("=")
                              , h = d[0]
                              , g = d[1]
                              , m = 1 * g;
                            if (g = m == g ? m : g,
                            s)
                                h.indexOf(".") > -1 ? $io.obj.path(o["long"], h, g ? g : !0) : o["long"][h] = g ? g : !0;
                            else
                                for (var y = h.split(""), w = 0, b = y.length; b > w; w++)
                                    o["short"][y[w]] = g ? g : !0;
                            u++,
                            s = !1,
                            a = !1
                        } else
                            c++;
                    else
                        a ? r[u] = r[u] ? r[u] + e : e : i[c] = i[c] ? i[c] + e : e;
                else
                    n = !n;
            else
                "-" === t.charAt(p + 1) && (s = !0),
                a = !0;
        var v = i.shift();
        return l[v] && l[v].exec ? ($io.obj.each(o["short"], function(t, e) {
            l[v].options && l[v].options[e] ? o["long"][l[v].options[e][0]] = t : o["long"][e] = t
        }),
        {
            command: t,
            program: v,
            arguments: i,
            options: o["long"]
        }) : !1
    }
    function n(t) {
        function e(t) {
            return (t + "").indexOf(" ") > -1 ? '"' + t + '"' : t
        }
        if ("string" == typeof t)
            return " " + e(t);
        var i = "";
        return $io.obj.each(t, function(t, r) {
            ("string" == typeof t || "number" == typeof t) && (t = (t + "").replace(/\"/g, '\\"'),
            i += " --" + r + "=" + e(t))
        }),
        i
    }
    function a(e, r) {
        console.log(e),
        $io.obj.all(t._get.embed, function(t) {
            return t.playerRegExp.test(e) ? (r.iframable = !0,
            e.replace(t.playerRegExp, function(i, r, o) {
                e = t.buildSrcURL(r, o)
            }),
            console.log(e),
            !0) : void 0
        }),
        "true" === r.iframable || r.iframable === !0 ? i.call(this, l.iframe, {
            command: e,
            program: "iframe",
            arguments: [e],
            launcher: r,
            options: r
        }) : $alert.info('<a target="_blank" href="' + e + '">' + e + "</a><br>don't allow iframe embeding...")
    }
    function s(t, e) {
        var i = [];
        return $io.obj.all(e, function(e, r) {
            -1 != t.indexOf(r) && i.push([r, e].join("="))
        }),
        i.length > 0 ? "?" + i.join("&") : ""
    }
    var l = t._apps;
    r.parseURL = function(t, e, i) {
        var r = {
            title: t.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
            exe: t,
            icon: "shortcut.png"
        };
        return $url.checkFavicon(t, function(o, n) {
            o && (r.icon = n,
            (i || $noop)(r)),
            $ajax.post("/proxy.php", {
                url: t,
                favicon: !o
            }).done(function(t) {
                t.favicon ? $url.checkImage(t.favicon, function(i) {
                    r.icon = t.favicon,
                    r.iframable = t.iframable,
                    e(r)
                }) : (r.iframable = t.iframable,
                e(r))
            })
        }),
        r
    }
    ,
    r.silent = function() {
        return r.apply({
            silent: !0
        }, arguments)
    }
    ,
    r.parseGeometry = function(t) {
        var e = {};
        return t.replace(/(?:(\d+|auto)x(\d+|auto))?(?:([+-])(\d+|auto)([+-])(\d+|auto))?/, function(t, i, r, o, n, a, s) {
            e.width = i || "auto",
            e.height = r || "auto",
            o ? (e.top = "+" === a ? s : "auto",
            e.bottom = "-" === a ? s : "auto",
            e.left = "+" === o ? n : "auto",
            e.right = "-" === o ? n : "auto") : (e.top = "auto",
            e.bottom = "auto",
            e.left = "auto",
            e.right = "auto")
        }),
        e
    }
    ;
    r.parse = o,
    r.stringify = n,
    window.$exe = r,
    t._get.embed = {
        youtube: {
            type: "youtube",
            settings: {
                autoplay: 0,
                controls: 1,
                loop: 0
            },
            whitelist: ["autohide", "cc_load_policy", "color", "disablekb", "enablejsapi", "autoplay", "controls", "loop", "playlist", "rel", "wmode", "start", "showinfo", "end", "fs", "hl", "iv_load_policy", "list", "listType", "modestbranding", "origin", "playerapiid", "playsinline", "theme"],
            transformAttrMap: {},
            processSettings: function(t, e) {
                return 1 == t.loop && void 0 == t.playlist && (t.playlist = e),
                t
            },
            buildSrcURL: function(t, e) {
                return t + this.playerID + e + s(this.whitelist, this.processSettings(this.settings))
            },
            playerID: "www.youtube.com/embed/",
            playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
            timeRegExp: /t=(([0-9]+)h)?(([0-9]{1,2})m)?(([0-9]+)s?)?/,
            isAdditionaResRequired: function() {
                return !1
            },
            additionalRes: []
        },
        vimeo: {
            type: "vimeo",
            settings: {
                autoplay: 0,
                loop: 0,
                api: 0,
                player_id: ""
            },
            whitelist: ["autoplay", "autopause", "badge", "byline", "color", "portrait", "loop", "api", "playerId", "title"],
            transformAttrMap: {
                playerId: "player_id"
            },
            processSettings: function(t, e) {
                return t
            },
            buildSrcURL: function(t, e) {
                return t + this.playerID + e + s(this.whitelist, this.processSettings(this.settings))
            },
            playerID: "player.vimeo.com/video/",
            playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?vimeo\.com\/(?:channels\/[A-Za-z0-9]+\/)?([A-Za-z0-9]+)/,
            timeRegExp: "",
            isAdditionaResRequired: function() {
                return !1
            },
            additionalRes: []
        },
        dailymotion: {
            type: "dailymotion",
            settings: {
                autoPlay: 0,
                logo: 0
            },
            whitelist: ["api", "autoPlay", "background", "chromeless", "controls", "foreground", "highlight", "html", "id", "info", "logo", "network", "quality", "related", "startscreen", "webkit-playsinline", "syndication"],
            transformAttrMap: {},
            processSettings: function(t, e) {
                return t
            },
            buildSrcURL: function(t, e) {
                return t + this.playerID + e + s(this.whitelist, this.processSettings(this.settings))
            },
            playerID: "www.dailymotion.com/embed/video/",
            playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?www\.dailymotion\.com\/video\/([A-Za-z0-9]+)/,
            timeRegExp: /start=([0-9]+)/,
            isAdditionaResRequired: function() {
                return !1
            },
            additionalRes: []
        },
        youku: {
            type: "youku",
            settings: {},
            whitelist: [],
            transformAttrMap: {},
            processSettings: function(t, e) {
                return t
            },
            buildSrcURL: function(t, e) {
                return t + this.playerID + e + s(this.whitelist, this.processSettings(this.settings))
            },
            playerID: "player.youku.com/embed/",
            playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?youku\.com\/v_show\/id_([A-Za-z0-9]+).html/,
            timeRegExp: "",
            isAdditionaResRequired: function() {
                return !1
            },
            additionalRes: []
        },
        vine: {
            type: "youku",
            settings: {
                audio: 0,
                start: 0,
                type: "simple"
            },
            whitelist: ["audio", "start", "type"],
            transformAttrMap: {},
            processSettings: function(t, e) {
                return delete t.type,
                t
            },
            buildSrcURL: function(t, e) {
                var i = this.settings.type;
                return t + this.playerID + e + /embed/ + i + s(this.whitelist, this.processSettings(this.settings))
            },
            playerID: "vine.co/v/",
            playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?vine\.co\/v\/([A-Za-z0-9]+)/,
            timeRegExp: "",
            isAdditionaResRequired: function() {
                return !window.VINE_EMBEDS
            },
            additionalRes: [{
                element: '<script src="//web.archive.org/web/20160613180250/http://platform.vine.co/static/scripts/embed.js"></script>'
            }]
        }
    }
});
system42("audio", function(n) {
    "use strict";
    function o(o, i) {
        var s;
        if ("string" != typeof o) {
            var u = new Howl(o);
            return u
        }
        return n._settings.sounds[o] && (o = n._settings.sounds[o]),
        t[o] ? s = t[o] : (s = new Howl({
            buffer: !!i,
            urls: [o]
        }),
        t[o] = s),
        s
    }
    window.Howl = window.Howl || function() {
        this.play = $noop,
        this.pause = $noop
    }
    ;
    var t = {};
    o.config = function(n) {
        return new Howl(n)
    }
    ,
    o.stream = function(n) {
        return o(n, !0)
    }
    ,
    window.$audio = o
});
system42.nfo = {},
function() {
    "use strict";
    system42.nfo.version = "1.0";
    var e, o, n, s, t = document.getElementsByTagName("script")[0], i = t.parentNode, r = [];
    for (e = 10,
    o = 20; o >= e; e++)
        n = document.createElement("script"),
        s = parseFloat((e / 10).toFixed(1)),
        n.setAttribute("language", "javascript" + s),
        n.innerHTML = 'system42.nfo.version = "' + s + '"',
        i.insertBefore(n, t),
        r.push(n);
    for (e = 0,
    o = r.length; o > e; e++)
        i.removeChild(r[e]);
    system42.nfo.os = "Unknown OS",
    -1 != navigator.appVersion.indexOf("Win") ? system42.nfo.os = "Windows" : -1 != navigator.appVersion.indexOf("Mac") ? system42.nfo.os = "MacOS" : -1 != navigator.appVersion.indexOf("X11") ? system42.nfo.os = "UNIX" : -1 != navigator.appVersion.indexOf("Linux") ? system42.nfo.os = "Linux" : -1 != navigator.appVersion.indexOf("iPhone") ? system42.nfo.os = "iPhone" : -1 != navigator.appVersion.indexOf("iPod") ? system42.nfo.os = "iPod" : -1 != navigator.appVersion.indexOf("iPad") ? system42.nfo.os = "iPad" : -1 != navigator.appVersion.indexOf("Android") && (system42.nfo.os = "Android"),
    -1 != navigator.userAgent.indexOf("MSIE") ? system42.nfo.browser = "msie" : -1 != navigator.userAgent.indexOf("Firefox") ? system42.nfo.browser = "firefox" : -1 != navigator.userAgent.indexOf("Chrome") ? system42.nfo.browser = "chrome" : -1 != navigator.userAgent.indexOf("Safari") ? system42.nfo.browser = "safari" : -1 != navigator.userAgent.indexOf("Opera") && (system42.nfo.browser = "opera"),
    system42.nfo.browser ? document.documentElement.classList.add(system42.nfo.browser) : system42.nfo.browser = "Unknown Browser"
}(),
system42.nfo.log = function(e) {
    "use strict";
    $log("windows93 v2.0b booting on..."),
    $log.repeat("="),
    $log(platform.description),
    $log("JavaScript version : " + system42.nfo.version),
    $log((new Date).toString()),
    setTimeout(function() {
        $log.repeat("="),
        $log.obj(window.location),
        setTimeout(function() {
            $log.repeat("="),
            $log.obj(window.navigator),
            $log.repeat("="),
            setTimeout(function() {
                system42.nfo.plugins = [],
                navigator.plugins.refresh(!1);
                for (var o = navigator.plugins.length, n = 0; o > n; n++) {
                    var s = navigator.plugins[n];
                    s && (system42.nfo.plugins.push(s.name),
                    $log.pad("plugin", s.name, "."))
                }
                $log.repeat("="),
                e && e()
            }, 150)
        }, 150)
    }, 150)
}
,
system42("bios", function(e) {
    "use strict";
    $boot.BOOTLOG.innerHTML += "\nWindows93 v2.0b booting on...",
    $boot.BOOTLOG.innerHTML += "\n" + platform.description,
    $boot.BOOTLOG.innerHTML += "\nJavaScript version : " + system42.nfo.version,
    $boot.BOOTLOG.innerHTML += "\n"
}),
system42("splash", function(e, o) {
    "use strict";
    var n;
    e.started ? o() : (n = document.createElement("iframe"),
    e._dom.splash.appendChild(n),
    n.className = "fillspace",
    n.style.position = "fixed",
    n.style.visibility = "hidden",
    n.onload = function() {
        n.style.visibility = "visible",
        setTimeout(function() {
            o()
        }, 2500)
    }
    ,
    n.src = e._temp.splash)
});
system42("utils", function(t) {
    "use strict";
    var i = {};
    $io.obj.each(t._get.mime.ext, function(t, e) {
        $io.obj.each(t, function(t, n) {
            $io.arr.all(t[0].split(","), function(t) {
                i[t] = e + "/" + n
            })
        })
    }),
    t._get.ext.mime = i,
    $io.obj.each(t._apps, function(i, e) {
        if ("string" == typeof i) {
            console.log(i);
            var n = i;
            return void (i = {
                exec: function() {
                    console.log("ALIAS"),
                    $exe.silent(n)
                }
            })
        }
        if (i.init && i.init.call({
            le: t,
            app: i
        }),
        i.accept && $extend(i, $fs.utils.parseAccept(i.accept)),
        i.ext && $io.arr.all(i.ext, function(i) {
            t._get.ext.apps[i] ? t._get.ext.apps[i].push(e) : t._get.ext.apps[i] = [e]
        }),
        i.mimetype && t._get.mime.apps.push([i.mimetype, e]),
        i.icon && (i.icon = $fs.utils.normalizeIcon(i.icon)),
        i.install && system42.on("storage:ready", function(t) {
            i.install = i.install.replace(/^~\//, "/a/" + t._path.key.home),
            $io.obj.path.call("/", t._files, i.install, {
                exe: e,
                icon: i.icon
            })
        }),
        i.exec) {
            var o = i.exec
              , a = $io.fn.arg(o);
            i.exec = function() {
                var t = i.icon;
                this.arg.options && this.arg.options.icon && (t = this.arg.options.icon = $fs.utils.normalizeIcon(this.arg.options.icon || this.arg.launcher.icon)),
                this.app = i,
                this.that.window || (this.that.window = {}),
                this.that.window.icon || (this.that.window.icon = t),
                this.that.window.title || (this.that.window.title = this.arg.launcher ? this.arg.launcher.title : i.name);
                var e = this.arg.arguments.concat([this.arg.options]);
                "arguments" === i.inject ? e = this.arg.arguments : $io.arr.each(a, function(t, i) {
                    "url" === t && "string" != typeof e[i] && (e[i] = ""),
                    "opt" === t && "object" != typeof e[i] && (e[i] = {})
                });
                try {
                    o.apply(this, e)
                } catch (n) {
                    $alert.error(n)
                }
            }
        }
    })
});
!function(t) {
    "use strict";
    function e(t, e) {
        return le._get.ext.mime[e || t] || null
    }
    function i(t, e, i) {
        function n(t, e) {
            l || $io.obj.each(r[t], function(i, n) {
                n.replace(/(.+)\./, function(i, s) {
                    $io.arr.all(s.split("_"), function(i) {
                        e === i && (l = "/c/sys/skins/" + le._settings.skin + "/" + t + "/" + n)
                    })
                })
            })
        }
        function s(t) {
            var i = (t || "").split("/");
            n("ext", e),
            n("type", i[1]),
            n("mime", i[0])
        }
        var l, r = le._files.c.sys.skins[le._settings.skin];
        return s(i),
        l || (l = "/c/sys/skins/" + le._settings.skin + "/file.png"),
        l
    }
    function n(t) {
        return "/" === t ? "/c/sys/skins/" + le._settings.skin + "/places/root.png" : "/a/" === t ? "/c/sys/skins/" + le._settings.skin + "/places/drive-storage.gif" : "/c/" === t ? "/c/sys/skins/" + le._settings.skin + "/places/drive-server.gif" : s.utils.resolvePath(t) === le._path.home ? "/c/sys/skins/" + le._settings.skin + "/places/home.png" : "/c/sys/skins/" + le._settings.skin + "/folder.png"
    }
    var s = {};
    s.utils = {},
    s.utils.resolvePath = function(t) {
        return t = t.replace(/^~|\$HOME/g, le._path.home),
        t = t.replace(/~|\$HOME/g, le._path.home.replace(/^\//, "")),
        t = t.replace(/\$SKIN/g, "/a/" + le._skin),
        t = t.replace(/\/\//g, "/")
    }
    ,
    s.utils.getMenuOpenWith = function(t) {
        "string" == typeof t && (t = [t]);
        var e = []
          , i = [];
        return $io.arr.all(t, function(n) {
            "string" != typeof n && (n = n.getAttribute("data-path"));
            var l = s.utils.getOpeners(n);
            l = l.concat("hexed", "codem", "iframe"),
            l && $io.arr.all(l, function(n) {
                if (-1 === i.indexOf(n)) {
                    i.push(n);
                    var l = le._apps[n].icon ? s.utils.normalizeIcon(le._apps[n].icon) : "/c/sys/skins/" + le._settings.skin + "/programs.png";
                    e.push({
                        name: le._apps[n].name || $io.str.capitalise(n),
                        icon: l,
                        action: function(e) {
                            $io.arr.all(t, function(t) {
                                $exe(n + ' "' + t.getAttribute("data-path") + '"')
                            })
                        }
                    })
                }
            })
        }),
        e.length ? e : [{
            name: "No programs found...",
            disabled: !0
        }]
    }
    ,
    s.utils.replaceExt = function(t, e) {
        var i = s.utils.getExt(t);
        return i ? t.replace(/\.[0-9a-z]+$/, e ? "." + e : "") : t + (e ? "." + e : "")
    }
    ,
    s.utils.isFolder = function(t) {
        return "/" === t.slice(-1)
    }
    ,
    s.utils.isFolderEmpty = function(t, e) {
        var i = !0;
        $file.iterateFolder(t, function(t) {
            s.utils.isFolder(t) || (i = !1)
        }).done(function() {
            e(i)
        })
    }
    ,
    s.utils.isShortcut = function(t) {
        return /\.lnk42$/.test(t)
    }
    ,
    s.utils.exist = function(t) {
        t = s.utils.resolvePath(t);
        var e = $io.obj.getPath(le._files, t, "/");
        return !!e
    }
    ,
    s.utils.isDownloadable = function(t) {
        if (t) {
            var e = t.dataset.url || t.href;
            return !(e && "/" !== e.slice(-1))
        }
        var i = !1;
        return $file.eachSelection(function(t, e) {
            var n = e.dataset.url || e.href;
            return n && "/" !== n.slice(-1) ? void (i = !0) : i = !1
        }),
        i
    }
    ,
    s.utils.getName = function(t) {
        var e = ("string" == typeof t ? t : "").split("/");
        return "/" === t.slice(-1) ? e[e.length - 2] : e.pop()
    }
    ,
    s.utils.getFileName = function(t) {
        return ("string" == typeof t ? t : "").split("/").pop()
    }
    ,
    s.utils.getFolderName = function(t) {
        var e = ("string" == typeof t ? t : "").split("/");
        return "/" === t.slice(-1) ? e[e.length - 2] : e.pop()
    }
    ,
    s.utils.getFolderPath = function(t) {
        var e = ("string" == typeof t ? t : "").split("/").slice(0, -1).join("/");
        return e ? e + "/" : ""
    }
    ,
    s.utils.getExt = function(t) {
        var e = (t || "").match(/(?:\.)([0-9a-z]+)(?:[!?].+)?$/i);
        return e && e[1] ? e[1].toLowerCase() : ""
    }
    ,
    s.utils.getMime = function(t) {
        var i = s.utils.getExt(t);
        return e(t, i)
    }
    ,
    s.utils.getIcon = function(t) {
        if (s.utils.isFolder(t))
            return n(t, l, r);
        var l = s.utils.getExt(t)
          , r = e(t, l);
        return i(t, l, r)
    }
    ,
    s.utils.normalizeIcon = function(t) {
        return 0 === t.indexOf("/") || 0 === t.indexOf("http") ? t : "/c/sys/skins/" + le._settings.skin + "/" + t
    }
    ,
    s.utils.getInfo = function(t) {
        if (s.utils.isFolder(t)) {
            var l = n(t, o, u)
              , r = "";
            return "/a/" === t ? r = "Storage (A:)" : "/c/" === t && (r = "System (C:)"),
            {
                icon: l,
                name: r
            }
        }
        var o = s.utils.getExt(t)
          , u = e(t, o)
          , l = i(t, o, u)
          , r = s.utils.getName(t);
        return {
            ext: o,
            mime: u,
            icon: l,
            name: r
        }
    }
    ,
    s.utils.getOpeners = function(t) {
        var i = s.utils.getExt(t)
          , n = e(t, i)
          , l = [];
        return le._settings.defaultApp[i] && (l = l.concat(le._settings.defaultApp[i])),
        le._get.ext.apps[i] && (l = l.concat(le._get.ext.apps[i])),
        n && $io.arr.all(le._get.mime.apps, function(t) {
            t[0].test(n) && (l ? -1 == l.indexOf(t[1]) && l.push(t[1]) : l = [t[1]])
        }),
        l
    }
    ,
    s.utils.parseAccept = function(t) {
        var e = []
          , i = {};
        return $io.arr.all(t.split(","), function(t) {
            0 === t.indexOf(".") ? (i.ext || (i.ext = []),
            i.ext.push(t.replace(/^\./, ""))) : e.push($io.reg.escape(t.replace("*", "_4_²_")))
        }),
        e.length && (i.mimetype = new RegExp(e.join("|").replace(/_4_²_/g, ".*"))),
        i
    }
    ,
    s.utils.getPathObj = function(t, e) {
        t || (t = le._path.home),
        t = s.utils.resolvePath(t),
        t.length > 1 && "/" === t.slice(-1) && (t = t.slice(0, -1)),
        e = e || "",
        "/" !== e.slice(-1) && (e += "/"),
        t = 0 === t.indexOf("/") ? t : e + t;
        var i = $io.obj.getPath(le._files, t, "/");
        if (void 0 !== i) {
            var n = "/" + $file.getTruePath(i, "");
            return n.length > 1 && "/" === n.slice(-1) && (n = n.slice(0, -1)),
            {
                cwd: n,
                obj: i
            }
        }
    }
    ,
    s.utils.iteratePath = function(t, e) {
        var i = s.utils.getPathObj(t, e)
          , n = []
          , l = []
          , r = [];
        return i ? ($io.obj.all(i.obj, function(t, e) {
            "." !== e && ".." !== e && (s.utils.isShortcut(e) ? r.push(e) : "object" == typeof t ? n.push(e) : l.push(e))
        }),
        {
            tree: i,
            obj: i.obj,
            cwd: i.cwd,
            dirs: n,
            files: l,
            lnks: r
        }) : void 0
    }
    ,
    t.$fs = s
}(this);
!function(e) {
    "use strict";
    window.URL || (window.URL = window.webkitURL);
    var n = {};
    n.getUrl = function(e, t, o) {
        o || (o = $fs.utils.getInfo(e)),
        0 === (e + "").indexOf("/a/") ? n.open(e, "Blob", function(e) {
            var n = window.URL.createObjectURL(e);
            (t || $noop)(n)
        }, o.mime) : (0 === (e + "").indexOf("c/") && (e = "/" + e),
        (t || $noop)(e))
    }
    ,
    e.$file = n,
    system42(function(e) {
        function t(e, n, t, o) {
            var i = e;
            0 === e.indexOf("/a/") ? (i = e.replace(/^\/a\//, ""),
            $store.keys().indexOf(i) > -1 ? (n || $noop)(i) : (t || $noop)(i)) : ($alert("You don't have write permission on this drive"),
            (o || $noop)())
        }
        n.open = function(e, n, t) {
            function o(e) {
                t.call(r, e, a)
            }
            if ("string" != typeof e)
                throw new Error("$file.open : no path specified");
            var i = e
              , r = $fs.utils.getInfo(e);
            "function" != typeof n || t || (t = n,
            n = "String");
            var a = "String";
            if (0 === e.indexOf("/a/"))
                if (i = e.replace(/^\/a\//, ""),
                $store.keys().indexOf(i) > -1) {
                    var l;
                    "Blob" === n && (l = $fs.utils.getMime(i)),
                    $io.String[n]($store.getRaw(i), o, l || "text/plain")
                } else
                    $db.getRaw(i, function(e, t) {
                        a = $io.type(t),
                        "ArrayBuffer" == a ? $io.ArrayBuffer[n](t, o, r.mime) : "Blob" == a ? $io.Blob[n](t, o, r.mime) : "String" == a ? $io.String[n](t, o, r.mime) : o(t)
                    });
            else
                $ajax.get(e, {
                    arraybuffer: "String" !== n
                }).done(function(e, i, l, s) {
                    var f = l.getResponseHeader("content-type") || ""
                      , c = s ? "application/json" : f.split(";").shift();
                    "String" === n ? (a = "String",
                    t.call(r, l.responseText, n)) : (a = "ArrayBuffer",
                    $io.ArrayBuffer[n](l.response, o, c))
                }).fail(function() {
                    $alert.error("Can't load file")
                })
        }
        ,
        n.iterateFolder = function(e, n) {
            var t;
            if (0 === e.indexOf("/a/")) {
                var o = e.replace(/^\/a\//, "");
                $io.arr.all($store.keys(), function(e) {
                    0 === e.indexOf(o) && n(e, "store", o)
                }),
                $db.keys(function(e, i) {
                    $io.arr.all(i, function(e) {
                        0 === e.indexOf(o) && n(e, "db", o)
                    }),
                    "function" == typeof t && t()
                })
            } else
                $alert.error("Iteration in /c/ is not implemented yet...");
            return {
                done: function(e) {
                    t = e
                }
            }
        }
        ,
        n["delete"] = function(e, t) {
            function o() {
                n.scan("/a/", function() {
                    console.log(e),
                    t && t(e)
                })
            }
            var i = $fs.utils.isFolder(e);
            if (0 === e.indexOf("/a/")) {
                var r = e.replace(/^\/a\//, "");
                if (i)
                    $io.arr.all($store.keys(), function(e) {
                        0 === e.indexOf(r) && $store.del(e)
                    }),
                    $db.keys(function(e, n) {
                        var t = [];
                        $io.arr.all(n, function(e) {
                            0 === e.indexOf(r) && t.push(e)
                        }),
                        t.length ? $io.arr.each(t, function(e, n) {
                            n === t.length - 1 ? $db.del(e, o) : $db.del(e)
                        }) : o(null)
                    });
                else {
                    var a = $fs.utils.getFolderPath(r);
                    $store.del(r),
                    $db.del(r, function(e) {
                        $db.keys(function(e, n) {
                            var t = !0;
                            $io.arr.all(n.concat($store.keys()), function(e) {
                                0 === e.indexOf(a) && (t = !1)
                            }),
                            t ? $db.set(a, null, o) : o(null)
                        })
                    })
                }
            } else
                $alert("You don't have write permission on this drive")
        }
        ,
        n.rename = function(e, t, o) {
            if ($fs.utils.isFolder(e)) {
                var i = e.split("/").slice(0, -2);
                i.push(t);
                var r = i.join("/") + "/"
            } else
                var r = $fs.utils.getFolderPath(e) + t;
            n.move(e, r, o)
        }
        ,
        n.move = function(e, o, i, r) {
            var a = $fs.utils.isFolder(e);
            $fs.utils.isFolderEmpty(e, function(l) {
                function s() {
                    i && n.scan("/a/", function() {
                        i && i(o)
                    })
                }
                var f = e.replace(/^\/a\//, "");
                if (o = o.replace(/^\/a\//, ""),
                a && !l) {
                    var c = [];
                    n.iterateFolder(e, function(e) {
                        c.push(e)
                    }).done(function() {
                        $io.arr.each(c, function(e, t) {
                            t === c.length - 1 ? n.move("/a/" + e, "/a/" + e.replace(f, o), function() {
                                s()
                            }) : n.move("/a/" + e, "/a/" + e.replace(f, o))
                        })
                    })
                } else
                    t(e, function(e) {
                        var n = $store.getRaw(e);
                        $store.set(o, n),
                        r || $store.del(e),
                        s()
                    }, function(e) {
                        $db.getRaw(e, function(n, t) {
                            $db.set(o, t, function() {
                                r ? s() : $db.del(e, s)
                            })
                        })
                    })
            })
        }
        ,
        n.save = function(o, i, r) {
            function a(t) {
                n.scan("/a/", function() {
                    $notif("File saved" + ($fs.utils.isFolder(o) ? " in" : "") + ' : <a href="#!' + o + '">' + o + "<a>");
                    var n = t || $fs.utils.getFileName(o);
                    $explorer.saveIconPos(o, 1, n),
                    r && r(n),
                    e._events.trigger("change:" + o),
                    e.explorers[0].refresh(),
                    $state.loaded()
                })
            }
            $state.loading(),
            "FileList" === $io.type(i) ? $io.arr.all(i, function(e) {
                $io.File.Blob(e, function(n) {
                    $db.set((o || "").replace(/^\/a\//, "") + e.name, n, function() {
                        a(e.name)
                    })
                }, e.type)
            }) : t(o, function(e) {
                var n = $io.type(i);
                if ("Blob" === n)
                    $io.Blob.String(i, function(n) {
                        $store.set(e, n),
                        a()
                    });
                else {
                    if ("String" !== n)
                        try {
                            i = JSON.parse(i)
                        } catch (t) {}
                    $store.set(e, i),
                    a()
                }
            }, function(e) {
                $db.set(e, i, a)
            }, function() {
                $state.loaded()
            })
        }
        ,
        n.download = function(e, t) {
            function o(e, n) {
                var t = document.createElement("a");
                "download"in t ? (t.setAttribute("href", e),
                t.setAttribute("download", n),
                $el(t).trigger("click")) : window.open(e, "_blank", "")
            }
            return e ? (t || (t = "string" == typeof e ? e.split("/").pop() : "derp"),
            void ("Blob" == $io.type(e) ? window.saveAs(e, t) : 0 === e.indexOf("/a/") ? n.open(e, "Blob", function(e) {
                window.saveAs(e, t)
            }) : o(e, t))) : new Error("No path specified")
        }
        ;
        var o = document.createElement("input");
        o.type = "file",
        n.upload = function(e, n) {
            n = n || {},
            o.accept = n.accept || "*",
            o.multiple = n.multiple || !1,
            o.onchange = function(n) {
                var t = this;
                setTimeout(function() {
                    e(t.files),
                    o.onchange = null
                }, 0)
            }
            ,
            o.click()
        }
        ,
        n.ondrop = function(e, n, t) {
            function o(e) {
                e.preventDefault(),
                console.log("????"),
                a++,
                this.classList.add("ui_dragging--droppable")
            }
            function i(e) {
                return !1
            }
            function r(e) {
                e.preventDefault(),
                a--,
                0 === a && this.classList.remove("ui_dragging--droppable")
            }
            var a = 0;
            $el(e).on("dragenter", n, o).on("dragover", n, i).on("dragleave", n, r).on("drop", n, function(e) {
                return e.preventDefault(),
                this.classList.remove("ui_dragging--droppable"),
                t.apply(this, arguments),
                !1
            }, !0)
        }
        ,
        n.setDotFolders = function(e) {
            $io.obj.each(e, function(t, o) {
                "number" == typeof t || ".." === o || "." === o || $fs.utils.isShortcut(o) || (t[".."] = e,
                t["."] = t,
                n.setDotFolders(t))
            })
        }
        ,
        n.getTruePath = function(e, t) {
            if (e[".."]) {
                for (var o in e[".."])
                    if (e[".."].hasOwnProperty(o) && e[".."][o] === e)
                        return t = o + "/" + t,
                        n.getTruePath(e[".."], t);
                return t
            }
            return t
        }
        ;
        n.scan = function(t, o) {
            0 === t.indexOf("/a/") ? $db.keys(function(i, r) {
                var a = {};
                "localStorageWrapper" != $db.store._driver && (r = r.concat($store.keys())),
                $io.arr.all(r, function(e, n) {
                    $fs.utils.isFolder(e) ? $io.obj.path.call("/", a, e, {}) : $io.obj.path.call("/", a, e, 0)
                }),
                e._files.a = a,
                n.setDotFolders(e._files),
                o && o($io.obj.getPath(e._files, t, "/"))
            }) : o && o($io.obj.getPath(e._files, t, "/"))
        }
        ,
        n.format = function(e) {
            $store.clear(),
            $db.clear(function() {
                "function" == typeof e && e()
            })
        }
        ,
        window.$file = n
    })
}(this);
system42("explorer", function(e) {
    "use strict";
    function t(n, o, a) {
        function r(t) {
            function n(e) {
                var t = new Image;
                return t.width = 32,
                t.height = 32,
                t.src = $fs.utils.normalizeIcon(e),
                t
            }
            t || (t = I),
            I = t,
            A.save && _();
            var o, a = [], r = [], l = [], s = $fs.utils.iteratePath(t);
            if ("object" == typeof s) {
                o = s.obj,
                t = "/" !== s.cwd ? s.cwd + "/" : s.cwd,
                a = s.dirs,
                r = s.files,
                l = s.lnks,
                0 === t.indexOf("/a/") ? (P.classList.add("ui_explorer--local"),
                P.classList.remove("ui_explorer--not_local")) : (P.classList.add("ui_explorer--not_local"),
                P.classList.remove("ui_explorer--local")),
                r.sort(function(e, t) {
                    return e.toLowerCase().localeCompare(t.toLowerCase())
                }),
                a.sort(function(e, t) {
                    return e.toLowerCase().localeCompare(t.toLowerCase())
                }),
                l.sort(function(e, t) {
                    return e.toLowerCase().localeCompare(t.toLowerCase())
                }),
                l.sort(function(t, n) {
                    if (e._desktop && e._desktop[t] && e._desktop[n]) {
                        var i = e._desktop[t]
                          , o = e._desktop[n];
                        if (i && o)
                            return i.time > o.time ? 1 : -1
                    }
                });
                var c = document.createDocumentFragment()
                  , u = document.createElement("div")
                  , d = document.createElement("div")
                  , p = document.createElement("span");
                u.setAttribute("tabindex", "0"),
                d.className = "ico";
                var f = !1;
                for ($io.arr.all(a, function(e) {
                    var i = u.cloneNode(!1)
                      , o = p.cloneNode(!1);
                    i.setAttribute("data-exe", t + e + "/"),
                    i.setAttribute("data-path", t + e + "/"),
                    i.setAttribute("data-name", e),
                    i.className = "ui_icon ui_icon__folder";
                    var a = $fs.utils.getInfo(t + e + "/");
                    i.appendChild(n(a.icon)),
                    o.textContent = a.name || e,
                    i.appendChild(o),
                    c.appendChild(i)
                }),
                $io.arr.all(r, function(e) {
                    var i = u.cloneNode(!1)
                      , o = p.cloneNode(!1)
                      , a = $fs.utils.getInfo(e);
                    a.exe = t + e,
                    a.path = t + e,
                    a.title = e,
                    /\/c\/files\/images\/icons\/|\/c\/sys\/skins\//.test(t) && /^image\//.test(a.mime) && (f = !0),
                    $io.obj.all(a, function(e, t) {
                        i.setAttribute("data-" + t, e)
                    }),
                    i.setAttribute("data-name", e),
                    o.textContent = e,
                    i.className = "ui_icon ui_icon__file",
                    i.appendChild(n(f ? t + e : a.icon)),
                    i.appendChild(o),
                    c.appendChild(i)
                }),
                $io.arr.all(l, function(i) {
                    var a = i.replace(/\.lnk42$/, "")
                      , r = u.cloneNode(!1)
                      , l = p.cloneNode(!1)
                      , s = $fs.utils.getInfo(a)
                      , d = $store.get((t + i).replace(/^\/a\//, "")) || o[i] || {};
                    $extend(s, d),
                    s.path = t + i,
                    s.title = d.title || a;
                    var f = s.exe ? s.exe.match(/(.[^ ]*)/)[0] : null;
                    if ((!s.icon || /file\.png$/.test(s.icon)) && f && e._apps[f] && e._apps[f].icon && (s.icon = e._apps[f].icon),
                    (!s.icon || /file\.png$/.test(s.icon)) && $fs.utils.isFolder(s.exe)) {
                        var h = $fs.utils.getInfo(s.exe);
                        s.icon = h.icon
                    }
                    $io.obj.all(s, function(e, t) {
                        r.setAttribute("data-" + t, e)
                    }),
                    l.textContent = d.title || a,
                    r.className = "ui_icon ui_icon__file",
                    r.appendChild(n(s.icon)),
                    r.appendChild(l),
                    c.appendChild(r)
                }); P.firstChild; )
                    P.removeChild(P.firstChild);
                P.appendChild(c),
                P.appendChild(O),
                (A.mimetype || A.ext) && $io.arr.all(P.querySelectorAll(".ui_icon__file"), function(e) {
                    var t = !1;
                    A.mimetype && A.mimetype.test(e.dataset.mime) && (t = !0),
                    $io.arr.all(A.ext, function(n) {
                        $fs.utils.getExt(e.dataset.title) === n && (t = !0)
                    }),
                    t || e.classList.add("ui_disabled")
                }),
                N && N.menu && N.menu.refresh(),
                A.silent || A.browse || $route(I),
                E && !A.save && v(E),
                N && N.changeTitle && N.changeIcon && (N.changeTitle(($fs.utils.getFolderName(t) || "/") + " - File Manager"),
                N.changeIcon($fs.utils.getIcon(t))),
                i.call(V, A.viewType),
                A.onready.call(V, P),
                I = D.value = t
            }
        }
        function l() {
            return F.className = "flex ui_explorer__nav" + (A.nav ? "" : " hide"),
            S.innerHTML = "<",
            S.className = "skin_outset ui_explorer__nav__prev",
            W.innerHTML = '<img src="/c/sys/skins/w93/16/home.png">',
            W.className = "skin_outset ui_explorer__nav__home",
            M.innerHTML = ">",
            M.className = "skin_outset ui_explorer__nav__next",
            R.innerHTML = "Go",
            R.className = "skin_outset ui_explorer__nav__go",
            D.type = "text",
            D.value = n,
            D.className = "ui_explorer__nav__input flex__fluid",
            F.appendChild(S),
            F.appendChild(W),
            F.appendChild(D),
            F.appendChild(R),
            S.addEventListener("click", s, !1),
            R.addEventListener("click", p, !1),
            W.addEventListener("click", f, !1),
            D.addEventListener("keypress", h, !1),
            F
        }
        function s() {
            var e = D.value
              , t = e.slice(0, -1).split("/");
            t.pop(),
            e = t.join("/"),
            r(e ? e + "/" : "/")
        }
        function p() {
            r(n = D.value)
        }
        function f() {
            r(n = e._path.home)
        }
        function h(e) {
            e = e || window.event,
            "number" != typeof e.which && (e.which = e.keyCode),
            13 == e.which && p()
        }
        function m() {
            q.onchange = q.onkeyup = function(e) {
                _(),
                K(this.value),
                13 === e.keyCode && N && N.close && N.close(!0)
            }
            ,
            q.onfocus = function() {
                setTimeout(function() {
                    t.utils.inputSelectFileName(q)
                }, 100)
            }
            ,
            z.onchange = z.onkeyup = function(e) {
                x()
            }
            ,
            y(E),
            g(E)
        }
        function v(n) {
            setTimeout(function() {
                t.selection.remove();
                var i = P.querySelector('div[data-name="' + n + '"]');
                i && (e._selected = [i],
                i.classList.add("ui_selected"))
            }, 100)
        }
        function _() {
            if (j && q) {
                var e = I + q.value;
                j.value = e,
                v(q.value)
            }
        }
        function x() {
            if (z.value && "*" !== z.value) {
                var e = z.options[z.selectedIndex].dataset.ext;
                q.value = $fs.utils.replaceExt(q.value, e)
            }
            _()
        }
        function g(t) {
            if (!t)
                return q.value = "derp",
                z.selectedIndex = 0,
                void x();
            var n = $fs.utils.getExt(t)
              , i = e._get.ext.mime[n];
            if (t && n && i) {
                for (var o = 0; o < z.length; ++o)
                    if (z.options[o].value == i)
                        return void (z.value = i);
                z.selectedIndex = 0
            }
        }
        function y(e) {
            q.value = e,
            setTimeout(function() {
                q.focus(),
                t.utils.inputSelectFileName(q)
            }, 100),
            _()
        }
        function $(e, t, n) {
            var i = document.createElement("option");
            return i.value = e,
            i.dataset.ext = t,
            i.innerHTML = $io.str.truncate(n, 30),
            i.title = n,
            i
        }
        function w() {
            if (j.type = "text",
            j.className = "ui_explorer__selected_file" + (A.footer ? "" : " hide"),
            j.value = n,
            j.readOnly = !0,
            A.save) {
                var t = document.createElement("label");
                q = document.createElement("input"),
                z = document.createElement("select"),
                q.type = "text",
                t.textContent = "Name: ";
                var i = {};
                if ("*" === A.accept && z.appendChild(document.createElement("option")),
                (A.mimetype || A.ext) && ($io.arr.all(A.ext, function(t) {
                    var n = e._get.ext.mime[t];
                    if (!i[n]) {
                        var o = $io.obj.getPath(e._get.mime.ext, n, "/");
                        z.appendChild($(n, t, (o[1] ? o[1] : n) + " (" + o[0] + ")")),
                        i[n] = !0
                    }
                }),
                $io.is.reg(A.mimetype))) {
                    var o = $io.obj.getPath(e._get.mime.ext, A.mimetype, "/");
                    $io.obj.each(o, function(e, t) {
                        i[t] || (z.appendChild($(t, e[0].split(",").shift().replace(".", ""), (e[1] ? e[1] : t) + " (" + e[0] + ")")),
                        i[t] = !0)
                    })
                }
                var a = document.createElement("div");
                return a.className = "ui_explorer__save_cont ui_combo",
                q.className = "ui_combo__main",
                z.style.marginLeft = "2px",
                a.appendChild(t),
                a.appendChild(q),
                a.appendChild(z),
                a.appendChild(j),
                a
            }
            return j
        }
        function b() {
            r(n)
        }
        arguments.length < 3 && (a = o,
        o = null),
        n && "object" != typeof n || (a = n,
        n = a.path || "/"),
        a || (a = {}),
        a.list === !0 && (a.viewType = "list"),
        a.icons === !0 && (a.viewType = "icons"),
        a.details === !0 && (a.viewType = "details"),
        a.workspace === !0 && (a.viewType = "workspace");
        var N, A = $extend({}, d, a), I = n, E = $fs.utils.getFileName(n);
        $fs.utils.isFolder(n) || (n = $fs.utils.getFolderPath(n)),
        A.save && (A.browse = !0),
        A.browse && (A.nav = !0),
        A.save && !A.accept && (A.accept = "*"),
        A.accept && $extend(A, $fs.utils.parseAccept(A.accept)),
        c++,
        A.id = c;
        var T = (document.createDocumentFragment(),
        document.createElement("div"))
          , P = document.createElement("div")
          , O = document.createElement("div")
          , F = document.createElement("div")
          , D = document.createElement("input")
          , S = document.createElement("button")
          , M = document.createElement("button")
          , W = document.createElement("button")
          , R = document.createElement("button")
          , j = document.createElement("input");
        O.className = "ui_explorer__scrollview",
        O.style.width = "5px",
        O.style.height = "100px",
        O.style.display = "none",
        T.className = "ui_explorer_container",
        P.className = A.backgroundClass + " ui_explorer ui_explorer--" + A.viewType,
        "workspace" !== A.viewType && (P.className += " ui_explorer--not_workspace"),
        P.id = "ui_explorer_" + c,
        P.setAttribute("data-id", c),
        T.appendChild(P);
        var q, z, q, j, H = $key(P, {
            "ctrl+a": function() {
                return e._selected = Array.prototype.slice.call(this.querySelectorAll(".ui_icon")),
                t.selection.display(this.getAttribute("data-id")),
                !1
            },
            f2: function() {
                k.Rename.call({
                    explorer: L
                })
            },
            "delete": function() {
                k.Delete.call({
                    explorer: L
                })
            },
            enter: function() {
                k.Open()
            }
        }), K = $io.fn.debounce(g, 100), V = u[c] = {
            el: {
                folder: P,
                scrollView: O
            },
            cfg: A,
            id: c,
            go: r,
            reorder: function() {
                i.call(V, A.viewType)
            },
            refresh: function(e) {
                r(I),
                0 !== this.id && u[0].refresh(),
                "function" == typeof e && e()
            },
            getSaveInput: function() {
                return q
            },
            getSelectionInput: function() {
                return j
            },
            getPath: function() {
                return I
            },
            getWindow: function() {
                return N
            }
        };
        if ("string" == typeof o && (o = document.querySelector(o)),
        A.style && P.setAttribute("style", A.style),
        o)
            o.appendChild(T),
            b();
        else {
            var Y = $extend({
                bodyClass: "ui_explorer ui_explorer--panes",
                icon: "/c/sys/skins/" + e._settings.skin + "/folder.png"
            }, A.window, {
                title: n,
                html: T,
                onready: function() {
                    b()
                },
                onopen: function() {
                    A.onopen.call(this),
                    A.save && m()
                },
                onclose: function(e) {
                    A.nav && S.removeEventListener("click", s, !1),
                    A.nav && W.removeEventListener("click", f, !1),
                    A.nav && R.removeEventListener("click", p, !1),
                    D && D.removeEventListener("keypress", h, !1),
                    H.destroy(),
                    A.onclose.call(this, e, j.value),
                    u[A.id] = null
                }
            });
            A.nav && (Y.afterMenu = l(),
            P.classList.add("ui_explorer--nav")),
            A.footer && (Y.footer = w()),
            A.menu && (Y.menuThisArg = {
                el: P,
                explorer: V
            },
            Y.menu = C.barMenu),
            A.browse && (P.classList.add("ui_explorer--browse"),
            Y.title = "explorer",
            Y.btnOk = A.save ? "Save" : "Open",
            Y.btnCancel = "Cancel");
            var N = $window.call(this, Y)
        }
        return V
    }
    function n() {
        var t = {
            grid: [e._icons.w, e._icons.h]
        };
        if (m.length)
            for (var n = 0, i = m.length; i > n; n++) {
                var o, a, r = m[n].el, l = m[n].rect;
                _ ? (a = v.y - x.y * (n + 1),
                o = v.x - x.x * (n + 1)) : $key("r") ? (a = l.top - Math.random() * (v.rect.top - v.y),
                o = l.left - Math.random() * (v.rect.left - v.x)) : (a = l.top - (v.rect.top - v.y),
                o = l.left - (v.rect.left - v.x)),
                $key("space") && (o = ~~((o + t.grid[0] / 2) / t.grid[0]) * t.grid[0],
                a = ~~((a + t.grid[1] / 2) / t.grid[1]) * t.grid[1]),
                r.style.top = a + "px",
                r.style.left = o + "px",
                $key("space")
            }
    }
    function i(t) {
        function n(e, t, i) {
            for (var a = 0, r = o.length; r > a; a++)
                if (a !== e && o[a].offsetTop === t && o[a].offsetLeft === i)
                    return t + 2 * w > y ? (t = 0,
                    i += $,
                    i + 2 * $ > g && (i = 0,
                    t += w)) : t += w,
                    n(e, t, i);
            return {
                top: t,
                left: i
            }
        }
        var i = Array.prototype.slice;
        if ("workspace" === t) {
            {
                var o = i.call(this.el.folder.querySelectorAll(".ui_icon"), 0);
                window.getComputedStyle(this.el.folder)
            }
            g = this.el.folder.clientWidth,
            y = this.el.folder.clientHeight,
            $ = e._icons.w,
            w = e._icons.h,
            o.length && (o.length * $ * w > (g - $) * (y - w) ? this.el.folder.classList.add("ui_explorer--workspace--full") : (this.el.folder.classList.remove("ui_explorer--workspace--full"),
            o.sort(function(t, n) {
                var i = e._desktop[t.getAttribute("data-name")]
                  , o = e._desktop[n.getAttribute("data-name")];
                return i && o ? i.time > o.time ? 1 : -1 : void 0
            }),
            $io.arr.each(o, function(t, n) {
                var i = e._desktop[t.getAttribute("data-name")];
                i || (i = e._desktop[t.getAttribute("data-name")] = {
                    x: 0,
                    y: 0,
                    time: Date.now()
                });
                var o = i.y
                  , a = i.x;
                o + w > y && (o = Math.floor(y / w) * w - w),
                0 > o && (o = 0),
                a + $ > g && (a = Math.floor(g / $) * $ - $),
                0 > a && (a = 0),
                t.style.position = "absolute",
                t.style.left = a + "px",
                t.style.top = o + "px",
                t.style.zIndex = n
            }),
            $io.arr.each(o, function(t, i) {
                var o = n(i, t.offsetTop, t.offsetLeft);
                t.style.left = o.left + "px",
                t.style.top = o.top + "px",
                e._desktop[t.getAttribute("data-name")] = {
                    x: o.left,
                    y: o.top,
                    time: Date.now()
                }
            })))
        }
    }
    function o() {
        return !e._selected.length
    }
    function a() {
        return this && this.explorer ? !(this.explorer.getPath && 0 === this.explorer.getPath().indexOf("/a/")) : !0
    }
    function r() {
        return this && this.explorer ? !(this.explorer.getPath && 0 === this.explorer.getPath().indexOf("/a/") && e._selected.length) : !0
    }
    function l(e) {
        for (var t = ["icons", "column", "list", "details", "workspace"], n = this.explorer.el.folder, o = 0, a = t.length; a > o; o++)
            n.classList.remove("ui_explorer--" + t[o]);
        n.classList.add("ui_explorer--" + e),
        "workspace" === e ? n.classList.remove("ui_explorer--not_workspace") : n.classList.add("ui_explorer--not_workspace"),
        this.explorer.cfg.viewType = e,
        i.call(this.explorer, this.explorer.el.folder)
    }
    function s(e, t, n) {
        0 === e.indexOf("/a/") ? $prompt("Enter a name", function(i, o) {
            i && o && $db.set(e.replace(/^\/a\//, "") + o + (n ? "/" : ""), "", function() {
                $file.scan("/a/", function() {
                    "function" == typeof t && t(o)
                })
            })
        }) : $alert("You don't have write permission on this drive")
    }
    var c = -1
      , u = []
      , d = {
        viewType: "icons",
        nav: !0,
        menu: !0,
        footer: !0,
        save: !1,
        browse: !1,
        silent: !1,
        backgroundClass: "skin_inset_deep skin_light",
        onopen: $noop,
        onready: $noop,
        onclose: $noop,
        window: {},
        windowThisArg: {}
    };
    e._selected = [],
    e.explorers = u,
    $el(e._dom.desktop).on("dblclick touchend", ".ui_explorer .ui_icon:not(.ui_disabled)", function() {
        var e = this.getAttribute("data-path")
          , t = this.parentNode.getAttribute("data-id");
        if (this.parentNode.classList.contains("ui_explorer--nav") && e && "/" === e.slice(-1))
            u[t] && u[t].go && u[t].go(e);
        else if (this.parentNode.classList.contains("ui_explorer--browse"))
            u[t] && u[t].go && u[t].getWindow().close(!0);
        else {
            var n = $exe(this);
            n || $notif("No program is assigned to this kind of files")
        }
    }).on("click touchstart", ".ui_explorer .ui_disabled", function(e) {
        var t = this.parentNode.getAttribute("data-id")
          , n = u[t].getSaveInput();
        if (n) {
            var i = $fs.utils.getExt(n.value);
            n.value = $fs.utils.replaceExt(this.getAttribute("data-name"), i)
        }
        return !1
    }).on("click touchstart", ".ui_explorer .ui_icon:not(.ui_disabled)", function(n) {
        if (n.shiftKey && "absolute" !== this.style.position) {
            var i = e._selected[0];
            if (i && i.compareDocumentPosition(this) & Node.DOCUMENT_POSITION_FOLLOWING)
                for (var o = i; !this.isEqualNode(o); o = o.nextElementSibling)
                    -1 === e._selected.indexOf(o) && e._selected.push(o);
            else
                for (var o = i; !this.isEqualNode(o); o = o.previousElementSibling)
                    -1 === e._selected.indexOf(o) && e._selected.push(o)
        } else
            n.ctrlKey || n.shiftKey || (e._selected.length = 0);
        var a = e._selected.indexOf(this)
          , r = this.parentNode.getAttribute("data-id");
        return -1 === a ? e._selected.push(this) : e._selected.splice(a, 1),
        t.selection.display(r),
        this.focus(),
        !1
    }).on("mouseup", ".ui_explorer .ui_icon", function(n) {
        if (2 === n.button) {
            var i = this.parentNode.getAttribute("data-id");
            this.classList.contains("ui_disabled") || (n.ctrlKey || -1 !== e._selected.indexOf(this) || (e._selected.length = 0),
            -1 === e._selected.indexOf(this) && e._selected.push(this),
            t.selection.display(i)),
            C.ctxFile.show({
                el: this,
                explorer: u[i]
            }, {
                of: n,
                within: e._dom.screen
            })
        }
    }).on("contextmenu", ".ui_explorer", function(e) {
        e.preventDefault()
    }).on("mousedown dragstart contextmenu", ".ui_explorer .ui_icon img", function(e) {
        e.preventDefault()
    }).on("mouseup touchstart", ".ui_explorer", function(n) {
        var i = this.getAttribute("data-id");
        "0" === i && (p = n.clientX,
        f = n.clientY),
        !h && this.isEqualNode(n.target || n.srcElement) && (2 === n.button ? (e._selected.length = 0,
        C.ctxExplorer.show({
            el: this,
            explorer: u[i]
        }, {
            of: n,
            within: e._dom.screen
        })) : ($route(""),
        e._selected.length = 0,
        t.selection.display(i)))
    });
    var p, f, h = !1;
    $box(e._dom.desktop, ".ui_explorer", {
        target: ".ui_icon",
        onstart: function(e, t) {
            h = !0
        },
        ondraw: function(n, i) {
            var o = this.getAttribute("data-id");
            n.ctrlKey ? $io.arr.all(i, function(t) {
                -1 === e._selected.indexOf(t) && e._selected.push(t)
            }) : e._selected = i,
            t.selection.display(o)
        },
        onstop: function(e, t) {
            h = !1
        }
    });
    var m = ($key({
        left: function() {
            m.length && (_ = !0,
            x.x += 2,
            n())
        },
        right: function() {
            m.length && (_ = !0,
            x.x -= 2,
            n())
        },
        up: function() {
            m.length && (_ = !0,
            x.y += 2,
            n())
        },
        down: function() {
            m.length && (_ = !0,
            x.y -= 2,
            n())
        }
    }),
    [])
      , v = {
        x: 0,
        y: 0
    }
      , _ = !1
      , x = {
        x: 0,
        y: 0
    };
    $drag(e._dom.screen, ".ui_icon", {
        grid: function() {
            return $key("space") ? [e._icons.w, e._icons.h] : !1
        },
        ghost: function(e) {
            return !e.elem.parentNode.classList.contains("ui_explorer--workspace")
        },
        onstart: function(t, n, i) {
            if (this.style.zIndex = 9999,
            this.classList.add("nopointer"),
            this.classList.contains("ui_selected")) {
                v.el = this,
                v.rect = this.getBoundingClientRect();
                for (var o = 0, a = e._selected.length; a > o; o++) {
                    var r = e._selected[o];
                    if (!this.isEqualNode(r)) {
                        var l = r.getBoundingClientRect();
                        m.push({
                            el: r,
                            rect: l
                        }),
                        r.classList.add("nopointer"),
                        r.style.zIndex = 9998 - o,
                        r.style.top = l.top + "px",
                        r.style.left = l.left + "px"
                    }
                }
            }
        },
        ondrag: function(e, t, i) {
            v.x = t,
            v.y = i,
            n()
        },
        onstop: function(t) {
            this.classList.remove("nopointer");
            for (var n = 0, i = m.length; i > n; n++)
                m[n].el.style.zIndex = m[n].el.style.zIndex - 9500,
                e._desktop[m[n].el.getAttribute("data-name")] = {
                    x: m[n].el.offsetLeft,
                    y: m[n].el.offsetTop,
                    time: Date.now() + n
                },
                m[n].el.classList.remove("nopointer");
            this.style.zIndex = "auto",
            this.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon").num + 1,
            e._desktop[this.getAttribute("data-name")] = {
                x: this.offsetLeft,
                y: this.offsetTop,
                time: Date.now()
            },
            u[0].reorder(),
            m.length = 0,
            v = {
                x: 0,
                y: 0
            },
            _ = !1,
            x = {
                x: 0,
                y: 0
            }
        }
    }),
    $drop(e._dom.desktop, ".ui_explorer", {
        accept: ".ui_icon",
        allowedZone: ".ui_explorer--local",
        ondrop: function(t, n, i) {
            if ("move" === i) {
                var o = e.explorers[1 * this.getAttribute("data-id")];
                if (o) {
                    var a = o.getPath();
                    try {
                        $file.move(n.getAttribute("data-path"), a + n.getAttribute("data-name"), function() {
                            o.refresh()
                        })
                    } catch (t) {
                        $alert.error(t)
                    }
                }
            }
        }
    }),
    $drop(e._dom.desktop, '[data-exe="/a/trash/"]', {
        accept: '[data-exe="/"]',
        ondrop: function(e, t, n) {
            $log("LINDAAAA"),
            $exe('layer /c/files/images/gif/DesktopCleanup.gif --fullscreen --delay=1300  --animationIn=" " --animationOut=" "')
        }
    }),
    $file.ondrop(e._dom.desktop, ".ui_explorer--local", function(e) {
        function n(n) {
            $state.loading(),
            $store.set(r.replace(/^\/a\//, "") + l, n),
            $file.scan("/a/", function() {
                t.saveIconPos(r, o, l, e.clientX, e.clientY),
                u[o].refresh(),
                $state.loaded()
            })
        }
        var i, o = this.getAttribute("data-id");
        if ($io.arr.all(e.dataTransfer.types, function(t) {
            ("text/uri-list" === t || "text/x-moz-url" === t) && (i = e.dataTransfer.getData("text/plain"))
        }),
        i) {
            var a = $exe.parseURL(i, function(e) {
                n(e)
            }, function(e) {
                n(e)
            })
              , r = u[o].getPath()
              , l = i.replace(/https?:\/\//, "").replace(/\//g, "%2F") + ".lnk42";
            a.name = l,
            n(a)
        } else if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length && u[o] && "function" == typeof u[o].getPath) {
            var r = u[o].getPath();
            $file.save(r, e.dataTransfer.files, function(n) {
                t.saveIconPos(r, o, n, e.clientX, e.clientY),
                u[o].refresh()
            })
        }
    });
    var g, y, $, w, b = {
        viewIcons: function() {
            l.call(this, "icons")
        },
        viewList: function(e) {
            l.call(this, "list")
        },
        viewColumn: function() {
            l.call(this, "column")
        },
        viewDetails: function() {
            l.call(this, "details")
        },
        viewWorkspace: function() {
            l.call(this, "workspace")
        },
        viewNavigation: function(e) {
            e ? (this.explorer.getWindow().el.afterMenu.classList.remove("hide"),
            this.explorer.el.folder.classList.add("ui_explorer--nav")) : (this.explorer.el.folder.classList.remove("ui_explorer--nav"),
            this.explorer.getWindow().el.afterMenu.classList.add("hide")),
            this.explorer.cfg.nav = e
        },
        viewFileTree: function(e) {
            e ? this.explorer.el.tree.classList.remove("hide") : this.explorer.el.tree.classList.add("hide"),
            this.explorer.cfg.fileTree = e
        }
    }, k = {
        Open: function() {
            t.selection.each(function(e, t) {
                $exe(t)
            })
        },
        Copy: function() {
            console.log("Copy")
        },
        Cut: function() {
            console.log("Cut")
        },
        Paste: function() {
            console.log("Paste")
        },
        Delete: function() {
            var e = this.explorer;
            t.selection.each(function(t) {
                $file["delete"](t, function() {
                    e.refresh(),
                    $notif("File deleted : " + t)
                })
            })
        },
        Import: function() {
            var e = this.explorer;
            $file.upload(function(n) {
                $file.save(e.getPath(), n, function(n) {
                    t.saveIconPos(e.getPath(), e.id, n),
                    e.refresh()
                })
            })
        },
        itemsOpenWith: function(t) {
            return e._selected.length ? $fs.utils.getMenuOpenWith(e._selected) : !1
        },
        downloadAs: function() {
            t.selection.each(function(e) {
                $file.download(e)
            })
        },
        Zip: function() {
            $archive(e._selected)
        },
        Refresh: function() {
            var e = this.explorer;
            $file.scan("/a/", function() {
                e.refresh()
            })
        },
        Format: function() {
            var e = this.explorer;
            $file.format(function() {
                e.go("/a/")
            })
        },
        CreateFolder: function() {
            var e = this.explorer;
            s(e.getPath(), function(n) {
                t.saveIconPos(e.getPath(), e.id, n),
                e.refresh()
            }, !0)
        },
        CreateFile: function() {
            var e = this.explorer;
            s(e.getPath(), function(n) {
                t.saveIconPos(e.getPath(), e.id, n),
                e.refresh()
            })
        },
        CreateShortcut: function() {
            var e = this.explorer;
            $window.form("Create Shortcut", {
                schema: {
                    type: "object",
                    properties: {
                        icon: {
                            type: "string",
                            plugin: {
                                icon: {
                                    watch: "exe"
                                }
                            }
                        },
                        title: {
                            type: "string",
                            placeholder: "Leave blank to use same name as target"
                        },
                        exe: {
                            title: "command/target",
                            type: "string",
                            placeholder: "http://",
                            plugin: {
                                explorer: {
                                    accept: "*",
                                    path: "/c/"
                                }
                            }
                        }
                    }
                }
            }, function(n, i) {
                var o = i.title || $fs.utils.getName(i.exe)
                  , a = e.getPath();
                $store.set(a.replace(/^\/a\//, "") + o + ".lnk42", i),
                t.saveIconPos(e.getPath(), e.id, o),
                $file.scan("/a/", function() {
                    e.refresh()
                })
            })
        },
        Properties: function() {
            t.selection.each(function() {
                var e = $form(this, {
                    disabled: !0
                }).el;
                $window({
                    title: "Properties",
                    html: e,
                    width: 400,
                    btnOk: "OK",
                    btnCancel: "Cancel",
                    onclose: function(e, t) {}
                })
            })
        },
        Rename: function() {
            function n() {
                $file.scan("/a/", function() {
                    i.refresh()
                })
            }
            var i = this.explorer;
            t.selection.each(function(i) {
                var o = this.title
                  , a = $fs.utils.getName(i)
                  , r = /\.lnk42$/.test(a);
                $prompt({
                    msg: "New name ?",
                    onready: function() {
                        t.utils.inputSelectFileName(this.el.form.prompt)
                    }
                }, o || a, function(t, o) {
                    if (t) {
                        var l = $io.str.truncate(o.replace(/[\/:]/g, "_"), 247);
                        r && (l += ".lnk42");
                        var s = $fs.utils.getFolderPath(i) + l;
                        $fs.utils.exist(s) ? $alert.error(s + " already exists...") : $file.rename(i, l, function(t) {
                            if (e._desktop[a]) {
                                if (r) {
                                    var i = $store.get(t);
                                    i.name = o + ".lnk42",
                                    i.title = o,
                                    $store.set(t, i)
                                }
                                e._desktop[l] = $extend({}, e._desktop[a]),
                                n(),
                                delete e._desktop[a]
                            } else
                                n()
                        })
                    }
                })
            })
        },
        OpenTerminalHere: function() {
            $exe("terminal " + this.explorer.getPath())
        }
    }, C = {
        barMenu: [{
            name: "File",
            items: [{
                name: "Open",
                action: k.Open,
                disabled: o
            }, {
                name: "Open With...",
                items: k.itemsOpenWith,
                disabled: o
            }, {
                name: "---"
            }, {
                name: "Create Folder...",
                action: k.CreateFolder,
                disabled: a
            }, {
                name: "Create Document...",
                action: k.CreateFile,
                disabled: a
            }, {
                name: "Create Shortcut...",
                action: k.CreateShortcut,
                disabled: a
            }, {
                name: "---"
            }, {
                name: "Import file",
                action: k.Import,
                disabled: a
            }, {
                name: "Download file",
                action: k.downloadAs,
                disabled: o
            }, {
                name: "---"
            }, {
                name: "Open Terminal here",
                action: k.OpenTerminalHere
            }, {
                name: "---"
            }, {
                name: "Quit",
                action: function() {
                    winInstance && winInstance.close && winInstance.close()
                }
            }]
        }, {
            name: "Edit",
            items: [{
                name: "Refresh",
                action: k.Refresh
            }, {
                name: "---"
            }, {
                name: "Rename",
                action: k.Rename,
                disabled: r
            }, {
                name: "Delete",
                action: k.Delete,
                disabled: r
            }]
        }, {
            name: "View",
            items: [{
                name: "Navigation",
                checkbox: !0,
                action: b.viewNavigation,
                selected: function() {
                    return this.explorer.cfg.nav
                }
            }, {
                name: "---"
            }, {
                name: "Icons",
                radio: "View",
                action: b.viewIcons,
                selected: function() {
                    return "icons" === this.explorer.cfg.viewType
                }
            }, {
                name: "List",
                radio: "View",
                action: b.viewList,
                selected: function() {
                    return "list" === this.explorer.cfg.viewType
                }
            }]
        }],
        ctxFile: $menu([{
            name: "Open",
            action: k.Open
        }, {
            name: "Open With...",
            items: k.itemsOpenWith,
            disabled: o
        }, {
            name: "---"
        }, {
            name: "Download As...",
            action: k.downloadAs,
            disabled: !$fs.utils.isDownloadable
        }, {
            name: "Download Archive",
            action: k.Zip
        }, {
            name: "---"
        }, {
            name: "Rename",
            key: "f2",
            action: k.Rename,
            disabled: r
        }, {
            name: "Delete",
            key: "del",
            action: k.Delete,
            disabled: r
        }, {
            name: "---"
        }, {
            name: "Properties",
            action: k.Properties
        }])
    };
    C.ctxExplorer = $menu([{
        name: "Create Folder...",
        action: k.CreateFolder,
        disabled: a
    }, {
        name: "Create Document...",
        action: k.CreateFile,
        disabled: a
    }, {
        name: "Create Shortcut...",
        action: k.CreateShortcut,
        disabled: a
    }, {
        name: "---"
    }, {
        name: "Import file",
        action: k.Import,
        disabled: a
    }, {
        name: "---"
    }, {
        name: "Open Terminal here",
        action: k.OpenTerminalHere
    }]),
    t.selection = {
        each: function(t) {
            $io.arr.each(e._selected, function(e) {
                var n = $extend({}, e.dataset)
                  , i = e.getAttribute("data-exe")
                  , o = e.getAttribute("data-path")
                  , a = $fs.utils.exist(i) ? i : o;
                return t.call(n, a, e)
            })
        },
        remove: function() {
            $io.arr.all(document.querySelectorAll(".ui_icon.ui_selected"), function(e) {
                e.classList.remove("ui_selected")
            })
        },
        display: function(n) {
            var i = [];
            if (t.selection.remove(),
            $io.arr.all(e._selected, function(t) {
                var n = t.getAttribute("data-path");
                n && i.push(e._selected.length > 1 ? '"' + n + '"' : n),
                t && t.classList.add("ui_selected")
            }),
            u[n]) {
                var o = u[n].getSaveInput();
                if (o)
                    o && i && i[0] && (o.value = $fs.utils.getFileName(i[0]),
                    $el(o).trigger("change"));
                else {
                    var a = u[n].getSelectionInput();
                    a && (a.value = i.join(", \n") || u[n].getPath())
                }
            }
        }
    },
    t.utils = {},
    t.utils.inputSelectFileName = function(e) {
        if (/\.[a-z0-9]{1,20}$/.test(e.value)) {
            var t = e.value.lastIndexOf(".");
            t > -1 && $dom.createSelection(e, 0, t)
        } else
            e.select()
    }
    ,
    t.saveIconPos = function(t, n, i, o, a, r) {
        $fs.utils.getFolderPath(t) === e._path.desktop && (e._desktop[i] = 1 * n === 0 ? {
            x: (o || p) - e._icons.w / 2,
            y: (a || f) - e._icons.h / 2,
            time: Date.now()
        } : {
            x: 9999,
            y: 0,
            time: 0
        },
        console.log(i, e._desktop[i]))
    }
    ;
    var L = {
        refresh: function() {
            $io.arr.all(u, function(e) {
                e.refresh()
            })
        },
        getPath: function() {}
    };
    window.$explorer = t
});
system42(function(e) {
    "use strict";
    function t(t, n) {
        function i() {
            c.ext ? $io.arr.all(c.ext, function(t) {
                var n = e._get.ext.mime["." + t];
                n && s.push(n)
            }) : c.mimetype && (s = $io.is.arr(c.mimetype) ? c.mimetype : [c.mimetype])
        }
        function o(e, t, n) {
            r && (r.changeTitle((e ? e + " - " : "") + c.name),
            r.changeFooter(t.mime || "&nbsp")),
            m = $fs.utils.getFileName(e),
            u = t,
            l.readFile.call(t, n)
        }
        function a(e) {
            t.filePath = e;
            var n = t.type || "String";
            "URL" === n ? $file.getUrl(e, function(t) {
                p = "URL",
                o(e, $fs.utils.getInfo(e), t)
            }) : $file.open(e, n, function(t, n) {
                p = n,
                o(e, this, t)
            })
        }
        var l, r, f, c = this.app;
        t = t || {},
        t.filePath = "string" == typeof t.filePath ? t.filePath : "";
        var u = {}
          , s = [];
        i();
        var m, p = "String", h = {
            New: function() {
                return l.setValue(""),
                !1
            },
            Open: function() {
                var n = t.defaultFolder || f || t.filePath || e._path.home;
                return $explorer(n, {
                    browse: !0,
                    list: !0,
                    accept: c.accept || "*",
                    window: {
                        animationIn: "",
                        animationOut: "",
                        center: !0
                    },
                    onclose: function(e, t) {
                        e && (f = $fs.utils.getFolderPath(t),
                        a(t))
                    }
                }),
                !1
            },
            SaveAs: function() {
                function n(n) {
                    var i = 0 === t.filePath.indexOf("/a/") ? t.filePath : e._path.desktop + (t.filePath ? $fs.utils.getFileName(t.filePath) : "");
                    $explorer(i, {
                        save: !0,
                        list: !0,
                        accept: n || c.accept || "*",
                        window: {
                            animationIn: "",
                            animationOut: "",
                            center: !0
                        },
                        onclose: function(e, n) {
                            e && (f = $fs.utils.getFolderPath(n),
                            t.filePath = n,
                            u = $fs.utils.getInfo(n),
                            h.Save())
                        }
                    })
                }
                return l.beforeSaveAs ? l.beforeSaveAs(n) : n(),
                !1
            },
            Save: function() {
                function e(e) {
                    $file.save(t.filePath, e, function() {})
                }
                var n = p;
                if (t.filePath && 0 === t.filePath.indexOf("/a/")) {
                    var i = u.mime;
                    l.getValue(function(t) {
                        var o = $io.type(t);
                        "Blob" === n ? $io[o].Blob(t, function(t) {
                            e(t)
                        }, i) : (console.log(o, n),
                        $io[o][n](t, function(t) {
                            e(t)
                        }))
                    }, i)
                } else
                    h.SaveAs();
                return !1
            },
            Import: function() {
                $file.upload(function(e) {
                    var n = e[0];
                    $io.File[t.type || "String"](n, function(e) {
                        o(n.name, {
                            file: n.name,
                            mime: n.type
                        }, e)
                    })
                }, {
                    accept: c.accept || "*"
                })
            },
            Export: function() {
                function e(e) {
                    l.getValue(function(t) {
                        var n = $io.type(t);
                        $io[n].Blob(t, function(e) {
                            $file.download(e, m)
                        }, e || u.mime)
                    }, e || u.mime)
                }
                l.beforeSaveAs ? l.beforeSaveAs(e) : e()
            },
            Undo: function() {
                return l.undo(),
                !1
            },
            Redo: function() {
                return l.redo(),
                !1
            },
            Quit: function() {
                return r.close(),
                !1
            }
        };
        if (t.save === !1)
            var d = [{
                name: "File",
                items: [{
                    name: "New",
                    action: h.New
                }, {
                    name: "Open",
                    action: h.Open,
                    key: "ctrl+o"
                }, {
                    name: "---"
                }, {
                    name: "Import file",
                    action: h.Import,
                    key: "ctrl+alt+o"
                }, {
                    name: "Export file",
                    action: h.Export,
                    key: "ctrl+alt+s"
                }, {
                    name: "---"
                }, {
                    name: "Quit",
                    action: h.Quit
                }]
            }];
        else
            var d = [{
                name: "File",
                items: [{
                    name: "New",
                    action: h.New
                }, {
                    name: "Open",
                    action: h.Open,
                    key: "ctrl+o"
                }, {
                    name: "Save",
                    action: h.Save,
                    key: "ctrl+s",
                    disabled: !1
                }, {
                    name: "Save As...",
                    action: h.SaveAs,
                    key: "ctrl+shift+s"
                }, {
                    name: "---"
                }, {
                    name: "Import file",
                    action: h.Import,
                    key: "ctrl+alt+o"
                }, {
                    name: "Export file",
                    action: h.Export,
                    key: "ctrl+alt+s"
                }, {
                    name: "---"
                }, {
                    name: "Open File With...",
                    items: function() {
                        return $fs.utils.getMenuOpenWith(t.filePath)
                    }
                }, {
                    name: "Open Containing Folder",
                    key: "ctrl+alt+enter",
                    action: function() {
                        $explorer(t.filePath)
                    }
                }, {
                    name: "---"
                }, {
                    name: "Quit",
                    action: h.Quit
                }]
            }];
        if (t.undo && d.push({
            name: "Edit",
            items: [{
                name: "Undo",
                action: h.Undo,
                key: "ctrl+z"
            }, {
                name: "Redo",
                action: h.Redo,
                key: "ctrl+y"
            }]
        }),
        t.help) {
            var v = [];
            t.help.instructions && v.push({
                name: "Instructions",
                action: function() {
                    $alert.help({
                        title: "Instructions",
                        html: t.help.instructions
                    })
                }
            }),
            t.help.about && v.push({
                name: "About",
                action: function() {
                    "string" == typeof t.help.about && (t.help.about = {
                        msg: t.help.about
                    }),
                    $alert({
                        title: "About",
                        msg: t.help.about.msg,
                        img: t.help.about.img || c.icon || null,
                        onopen: $noop
                    })
                }
            }),
            d.push({
                name: "Help",
                items: v
            })
        }
        t.about && d.push({
            name: "About",
            action: function() {
                "string" == typeof t.about && (t.about = {
                    msg: t.about
                }),
                $alert({
                    title: "About",
                    msg: t.about.msg,
                    img: t.about.img || c.icon || null,
                    onopen: $noop
                })
            }
        });
        var $ = {};
        if (t.nodeType && 1 === t.nodeType) {
            var g = t;
            t = n,
            l = t.create(g)
        } else
            "function" == typeof t.create ? ($.url = null,
            $.onopen = function() {
                this.el.footer.firstChild && (this.el.footer.firstChild.className = "ui_editor__footer skin_base_text_info"),
                l = t.create(this.el.body),
                t.filePath ? a(t.filePath) : l.setValue("")
            }
            ) : ($.url = $.url + (t.filePath ? "?path=" + t.filePath : ""),
            $.onready = function() {
                this.el.footer.firstChild && (this.el.footer.firstChild.className = "ui_editor__footer skin_base_text_info");
                var e = this.el.iframe;
                e && e.contentWindow.$iframeInit && (l = e.contentWindow.$iframeInit.call(this),
                t.filePath ? a(t.filePath) : l.setValue && l.setValue(""))
            }
            ),
            this.app.icon && ($.icon = this.app.icon),
            $.menu = d,
            $.footer = "&nbsp",
            $.title = (t.filePath ? t.filePath + " - " : "") + this.app.name,
            r = $window.call(this, $extend($, t.window))
    }
    window.$editor = t
});
system42("config", function(e) {
    "use strict";
    $window.config({
        dest: e._dom.desktop,
        dock: document.getElementById("s42_dock"),
        ondestroy: function(t) {
            !t && e._selected.length && e._selected[0].focus()
        },
        animationIn: e.devmode ? "" : "random",
        animationOut: e.devmode ? "" : "random",
        contextmenu: {
            "before:Close": [{
                name: "FX",
                items: [{
                    name: "Glitch",
                    action: function() {
                        $exe.call({
                            silent: !0
                        }, "glitch", this.el.base)
                    }
                }, {
                    name: "IE6",
                    action: function() {
                        $exe.call({
                            silent: !0
                        }, "ie6", this.el.base)
                    }
                }, {
                    name: "CSS",
                    items: function() {
                        var t = this
                          , n = [];
                        return $io.arr.all(["none"].concat(e._apps.fx.effects), function(e) {
                            t.fx || (t.fx = "none"),
                            n.push({
                                name: e,
                                radio: "FX_list",
                                selected: t.fx === e,
                                action: function(n) {
                                    t.fx = e,
                                    t.el.body.className = t.el.body.className.replace(/fx_\w+/, ""),
                                    "none" !== e && $exe.call({
                                        silent: !0
                                    }, "fx", e, t.el.body)
                                }
                            })
                        }),
                        n
                    }
                }]
            }]
        },
        headerBtn: [{
            name: "help",
            init: function() {
                return !!this.help
            },
            action: function() {
                $alert.info(this.cfg.help)
            }
        }, {
            name: "pin",
            title: "pin this window (it will reopen each time you boot windows93)",
            init: function() {
                return 1
            },
            action: function(t) {
                var n = t.target;
                if (this.cfg.caller.that.pinned)
                    delete e._pins[this.cfg.caller.that.pinned],
                    this.cfg.caller.that.pinned = null,
                    n.classList.remove("pressed");
                else {
                    var o = this.el.body.offsetWidth
                      , i = this.el.body.offsetHeight
                      , s = this.el.base.offsetTop
                      , c = this.el.base.offsetLeft;
                    e._pins.push([this.cfg.caller.arg.command, {
                        width: o,
                        height: i,
                        top: s,
                        left: c
                    }]),
                    $route(""),
                    n.classList.add("pressed")
                }
            }
        }]
    }),
    $key.config({
        onerror: function(e) {
            return $alert.error(e),
            !1
        }
    }),
    $screenshot.config({
        "default": e._dom.screen
    }),
    $notif.config({
        "default": e._dom.clock,
        dest: e._dom.desktop
    }),
    $alert.config({
        sound: function(t) {
            t && e._sound[t] && e._sound[t].play()
        }
    }),
    !function() {
        var t, n = e._dom.clock;
        n && !function o() {
            var e = new Date
              , i = e.getHours()
              , s = e.getMinutes();
            i = (10 > i ? "0" : "") + i,
            s = (10 > s ? "0" : "") + s;
            var c = i + ":" + s;
            t !== c && (t = i + ":" + s,
            n.textContent = t,
            n.title = e),
            setTimeout(o, 1e4)
        }()
    }()
});
!function(e) {
    "use strict";
    function n(e, n) {
        var i = $extend({
            title: "Alert",
            baseClass: "ui_alert",
            msg: e,
            img: "/c/sys/skins/w93/alert.png",
            cb: n,
            sound: "alert",
            onopen: function() {
                this.cfg.sound && o.sound(this.cfg.sound);
                var e = m || this.el.btnOk;
                e && setTimeout(function() {
                    e.focus()
                }, 100)
            },
            onclose: function(t) {
                (n || e.cb || $noop)(t)
            }
        }, e);
        if ("string" != typeof i.msg)
            try {
                i.msg = JSON.stringify(i.msg, null, 2),
                i.bodyClass = t.bodyClass + " " + i.baseClass + "--code"
            } catch (s) {
                i.msg = i.msg + "",
                i.bodyClass = t.bodyClass + " " + i.baseClass + "--code " + i.baseClass + "--center"
            }
        {
            var r = document.createElement("div")
              , a = document.createElement("div");
            document.createDocumentFragment()
        }
        if (r.className = "clearfix",
        i.img) {
            var l = new Image;
            l.className = i.baseClass + "__img",
            l.width = 32,
            l.height = 32,
            r.appendChild(l)
        }
        if (a.innerHTML = i.msg,
        a.className = i.baseClass + "__text",
        r.appendChild(a),
        "string" == typeof i.prompt) {
            var c = document.createElement("form")
              , m = document.createElement("textarea");
            m.style.width = "100%",
            m.value = i.prompt,
            m.name = "prompt",
            m.onkeydown = function(e) {
                return e = e || window.event,
                "number" != typeof e.which && (e.which = e.keyCode),
                13 !== e.which || e.shiftKey ? void 0 : ($el(c).trigger("submit"),
                e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0,
                e.stopImmediatePropagation(),
                !1)
            }
            ,
            c.appendChild(m),
            a.appendChild(c),
            a.style.textAlign = "left"
        }
        i.html = r;
        var d = null;
        if (i.img) {
            var u = !1;
            d = function() {
                u || $window($extend({}, t, i)),
                u = !0
            }
            ,
            l.onload = d,
            l.onerror = d,
            l.onabort = d,
            l.src = i.img
        } else
            $window($extend({}, t, i))
    }
    var t = {
        baseClass: "ui_alert",
        height: "auto",
        minHeight: "auto",
        footer: "",
        minimizable: !1,
        maximizable: !1,
        resizable: !1,
        center: !0,
        pinnable: !1,
        btnOk: "OK",
        animationIn: "none",
        animationOut: "none",
        width: 330
    }
      , o = {
        sound: $noop
    };
    n.error = $io.fn.debounce(function(e, t) {
        console.error(e);
        var o = $error(e)
          , i = {
            bodyClass: "js_error",
            title: o.name || "Error",
            msg: o.html
        };
        (e instanceof Error || $io.isArguments(e)) && (i.btnCancel = "Report Error",
        i.oncancel = function() {
            window.open(o.reportLink)
        }
        ),
        n($extend({
            title: "Error",
            msg: i,
            img: "/c/sys/skins/w93/error.png",
            cb: t,
            sound: "error"
        }, i))
    }, 500),
    n.info = function(e, t) {
        n($extend({
            title: "Info",
            msg: e,
            img: t || "/c/sys/skins/w93/info.png",
            onopen: $noop,
            sound: null
        }, e))
    }
    ,
    n.progress = function(e, n) {
        var o = document.createElement("div")
          , i = document.createElement("div");
        i.className = "ui_alert__progress__bar",
        o.className = "skin_inset_deep h20p mt5 relative ui_alert__progress";
        var s = document.createElement("div")
          , r = document.createElement("div");
        s.textContent = e,
        o.appendChild(i),
        r.appendChild(s),
        r.appendChild(o),
        n = n || "Progress";
        var a = $window($extend({}, t, {
            title: n,
            html: r,
            btnOk: null
        }, e));
        return {
            update: function(e) {
                a.changeTitle(~~e + "% - " + n),
                i.style.width = ~~e + "%",
                e >= 100 && a.close()
            }
        }
    }
    ,
    n.help = function(e, n) {
        $window($extend({}, t, {
            title: "Help",
            html: e,
            bodyClass: "ui_alert--help skin_inset_deep skin_light pa10",
            sound: null
        }, e))
    }
    ,
    $window.form = function(e, n, o) {
        "string" != typeof e && (o = n,
        n = e,
        e = "Form");
        var i = $form(n).el;
        $window.call(this, $extend({}, t, {
            resizable: !0,
            title: e,
            html: i,
            btnOk: "OK",
            btnCancel: "Cancel",
            onclose: function(e, n) {
                o(e, n.post)
            }
        }))
    }
    ;
    var i = function(e, t) {
        n($extend({
            title: "Confirm",
            msg: e,
            img: "/c/sys/skins/w93/question.png",
            onopen: $noop,
            sound: null,
            cb: t,
            btnCancel: "Cancel"
        }, e))
    }
      , s = function(e, t, o) {
        "function" == typeof t && (o = t,
        t = ""),
        n($extend({
            title: "Prompt",
            msg: e,
            img: null,
            sound: null,
            cb: o,
            prompt: t,
            onclose: function(n, t) {
                var i = t.post.prompt;
                (o || e.cb || $noop)(n, i)
            },
            btnCancel: "Cancel"
        }, e))
    };
    n.config = function(e) {
        $extend(o, e)
    }
    ,
    e.$alert = n,
    e.$confirm = i,
    e.$prompt = s
}(this);
system42("start", function(n) {
    "use strict";
    function s(t, i) {
        var e = []
          , o = [];
        for (var r in t)
            if (t.hasOwnProperty(r) && "." !== r && ".." !== r)
                if ("number" == typeof t[r]) {
                    var c = $fs.utils.getInfo(r)
                      , a = $fs.utils.getOpeners(r);
                    e.push({
                        name: r,
                        icon: c.icon,
                        action: function(n, s, t) {
                            return function() {
                                $exe(t[0] + " " + i + n)
                            }
                        }(r, c, a)
                    })
                } else
                    ($io.is.obj(t[r]) || $io.is.arr(t[r])) && o.push({
                        name: r,
                        icon: "/c/sys/skins/" + n._settings.skin + "/folder.png",
                        items: function(n) {
                            return s(n, i + r + "/")
                        }(t[r])
                    });
        return o.sort().concat(e.sort())
    }
    function t(s) {
        var t = []
          , i = []
          , e = Object.keys(s);
        return $io.arr.all(e.sort(), function(e) {
            if (s[e] && s[e].exec) {
                var o = s[e].name ? e + ' <em class="startmenu_cmd">(' + s[e].name + ")</em>" : e
                  , r = s[e].icon || "/c/sys/skins/" + n._settings.skin + "/programs.png";
                0 !== r.indexOf("/") && (r = "/c/sys/skins/" + n._settings.skin + "/" + r),
                (s[e].cmd ? t : i).push({
                    name: o,
                    icon: r,
                    action: function(n) {
                        return function() {
                            $exe(n)
                        }
                    }(e)
                })
            }
        }),
        i
    }
    var i = {
        find: function() {
            $alert("<b>Did you know ?</b><br>You can use Find to locate your real father.<br>But I will save you the trouble.<br><b>Windows 93 is your real father.</b>")
        },
        help: function() {
            $exe("layer d/images/png/clippy.png")
        },
        run: function() {
            $alert.error("There is nowhere you can run")
        },
        shutdown: function() {
            document.location.reload(!0)
        },
        settings: function() {
            $window({
                title: "Settings",
                html: $form(n._settings).el,
                width: 400,
                btnOk: "OK",
                btnCancel: "Cancel",
                onclose: function(n, s) {}
            });
        },
        format: function() {
            $confirm("Are you sure to reinstall Windows93, you will loose all your saved data (trust me...)", function(n) {
                n && $file.format(function() {
                    document.location.reload(!0)
                })
            })
        }
    }
      , e = [{
        name: "Programs",
        icon: "/c/sys/skins/" + n._settings.skin + "/programs.png",
        items: function() {
            return t(n._apps)
        }
    }, {
        name: "Documents",
        icon: "/c/sys/skins/" + n._settings.skin + "/documents.png",
        items: function() {
            return s(n._files.c, "c/")
        }
    }, {
        name: "Settings",
        icon: "/c/sys/skins/" + n._settings.skin + "/settings.png",
        action: i.settings
    }, {
        name: "Find",
        icon: "/c/sys/skins/" + n._settings.skin + "/find.png",
        action: i.find
    }, {
        name: "Help",
        icon: "/c/sys/skins/" + n._settings.skin + "/help.png",
        action: i.help
    }, {
        name: "Run...",
        icon: "/c/sys/skins/" + n._settings.skin + "/run.png",
        action: i.run
    }, {
        name: "---"
    }, {
        name: "Reinstall",
        icon: "/c/sys/skins/" + n._settings.skin + "/install.png",
        action: i.format
    }, {
        name: "---"
    }, {
        name: "Shutdown...",
        icon: "/c/sys/skins/" + n._settings.skin + "/shutdown.png",
        action: i.shutdown
    }];
    $menu(document.getElementById("s42_start"), e, {
        key: "super",
        mode: "popup",
        position: {
            within: n._dom.desktop
        }
    })
});
system42("tests", function(s) {
    "use strict"
});
system42("register", function(e, t) {
    "use strict";
    function s() {
        e._dom.splash.classList.remove("hide"),
      e._init.home(),
        t()
    }
    if (e._settings.userData.localInit === !1) {
        e._dom.splash.classList.add("hide");
        var i = function() {
            {
                var t = document.getElementById("WELCOME")
                  , i = document.getElementById("TERMS")
                  , n = document.getElementById("PROMPT")
                  , a = document.getElementById("USERNAME");
                document.getElementById("SERIAL")
            }
            if (i.classList.contains("hide") && n.classList.contains("hide"))
                t.classList.add("hide"),
                i.classList.remove("hide"),
                this.el.btnOk.innerHTML = "Didn't Read Lol ^^";
            else {
                if (!n.classList.contains("hide"))
                 //   return e._settings.userData.nick = a.value || "anonymous",
                    e._settings.userData.localInit = !0,
                    s(),
                    !0;
                i.classList.add("hide"),
                n.classList.remove("hide"),
                this.el.btnOk.innerHTML = "Let's ROCK"
            }
            return !1
        };
        $window({
            url: "/wizard.php",
            ajax: !0,
            title: "Setup Wizard",
            btnCancel: "Nope",
            animationIn: "flip",
            animationOut: "",
            center: !0,
            height: 350,
            width: 510,
            btnOk: "Cool Story, Bro",
            onok: i,
            oncancel: i
        })
    } else
        s()
});
system42("upgrade", function(t, e) {
    "use strict";
    var n = t._settings.version;
    if (1 === n || 1.1 === n) {
        var s = t._init.desktop();
        t._desktop = $store.update(t._path.key.home + ".config/desktop.json", function(t) {
            return $extend(t, s)
        }),
        t._settings.version = 1.2
    }
    $file.scan("/a/", function() {
        e()
    })
});
!function(e) {
    "use strict";
    function n(e, n) {
        var t, o = [];
        return $io.arr.each(e, function(e, r) {
            var a = 1;
            e = e.replace(/\.\.\//g, function() {
                return a++,
                ""
            }),
            t = n.split("/").slice(0, -a).join("/");
            var i = t + "/" + e + ".js";
            o.push(i)
        }),
        o
    }
    function t(e) {
        setTimeout(function() {
            for (var n = 0, t = e.length; t > n; n++) {
                var o = e[n];
                o && o.nodeType && (o.onload = o.onreadystatechange = o.onerror = o.onabort = null)
            }
        }, 0)
    }
    function o(e) {}
    function r(e, n, t) {
        f++;
        var o = arguments.length;
        1 == o ? (t = e,
        n = [],
        e = f) : 2 == o && (t = n,
        "string" == typeof e ? n = [] : (n = e,
        e = f)),
        e = f,
        console.log(e, n, t),
        d[e] = n.length ? {
            dep: n,
            fac: t
        } : t
    }
    function a(e) {
        u.insertBefore(e, c)
    }
    function i(e, o, r) {
        function u(e, r, a) {
            if (e.couldBeAMD) {
                var c = d[p + 1];
                if (c) {
                    if (p++,
                    c.dep)
                        return void function(e, t) {
                            c.dep = n(c.dep, t.url),
                            i(c.dep, function() {
                                y[t.url] = t.uid,
                                v[t.uid] = j[t.i] = "function" == typeof c.fac ? c.fac.apply(null, arguments) : c.fac,
                                t.couldBeAMD = !1,
                                u(t)
                            })
                        }(p, e);
                    y[e.url] = e.uid,
                    v[e.uid] = j[e.i] = "function" == typeof d[p] ? d[p].apply(null, ["require", "exports", "module"]) : d[p]
                } else
                    y[e.url] = e.uid,
                    v[e.uid] = j[e.i]
            } else
                y[e.url] = e.uid,
                v[e.uid] = j[e.i];
            r ? (l.onfail(e, e.url, r),
            g.err.push({
                id: e.uid,
                err: r
            })) : l.onpass(e, e.url),
            h[e.url].length && ($io.arr.each(h[e.url], function(n, t) {
                n && n.apply(g, [v[e.uid]])
            }),
            h[e.url].length = 0),
            ++s >= f && (o && o.apply(g, j),
            t(j))
        }
        if ($io.is.obj(e)) {
            var c = r;
            r = e,
            e = o,
            o = c
        }
        r = $extend({
            amd: !0
        }, r),
        r.amd === !1 ? ($ = window.define,
        window.define = null) : $ && (window.define = $,
        $ = null);
        var s = 0
          , f = e.length
          , j = [];
        $io.arr.each(e, function(n, t) {
            function i(e, n) {
                u(f, e, n)
            }
            if (!n)
                return void console.error("loader: One asset was undefined", e);
            var c = !1;
            n.indexOf("nocache!") > -1 && (c = !0,
            n = n.replace("nocache!", ""));
            var d, s = (r.baseUrl || "") + n, l = $url.getExtention(s), f = {
                url: s,
                type: l,
                i: t
            };
            return h[s] && !y[s] ? void h[s].push(o) : (h[s] = [],
            !c && y[s] ? (f.uid = y[s],
            j[t] = v[f.uid],
            void i()) : void (/txt|html|php|json|xml/.test(l) ? $ajax.get(s).done(function(e) {
                j[f.i] = e,
                i()
            }).fail(function(e) {
                i("ajax error: " + e.status + " " + e.statusText, arguments)
            }) : /jpg|jpeg|gif|png|svg/.test(l) ? (m++,
            j[t] = d = new Image,
            d.id = "dynamicDeps_" + m,
            d.className = "js_dynamic-deps",
            d.onload = function() {
                i()
            }
            ,
            d.onerror = function() {
                i("image not loaded correctly", arguments)
            }
            ,
            d.onabort = function() {
                i("image not loaded correctly (abort)", arguments)
            }
            ,
            d.src = s,
            f.uid = m) : "css" === l ? (m++,
            j[t] = d = document.createElement("link"),
            d.id = "dynamicDeps_" + m,
            d.className = "js_dynamic-deps",
            d.charset = "utf-8",
            d.rel = "stylesheet",
            d.href = s,
            a(d),
            f.uid = m,
            i()) : "js" === l || "" === l && r.amd ? (f.couldBeAMD = !0,
            j[t] = w.script(s, i),
            f.uid = m) : /mp3|opus|ogg|wav|aac|m4a|mp4|weba/.test(l) ? (m++,
            j[t] = d = $audio({
                urls: [s],
                buffer: !1,
                onload: function() {
                    i()
                },
                onloaderror: function() {
                    i("sound not loaded correctly", arguments)
                }
            }),
            f.uid = m) : i("unknown dependencies format")))
        })
    }
    var u, c, d = {}, s = e.$noop || function() {}
    , l = {
        onpass: s,
        onfail: s
    }, f = 0, p = 0, m = 0, g = {
        err: []
    }, y = {}, h = {}, v = [];
    !function() {
        var e = document.getElementsByTagName("script")[0];
        e ? (u = e.parentNode,
        c = e) : (u = document.head || document.getElementsByTagName("head")[0],
        c = u.getElementsByTagName("base")[0] || null);
        var n = document.createComment("/// loaded with $loader ///");
        u.insertBefore(n, c)
    }();
    var w = {
        script: function(e, n) {
            m++;
            var t = document.createElement("script");
            return t.id = "dynamicDeps_" + m,
            t.className = "js_dynamic-deps",
            t.type = "text/javascript",
            t.charset = "utf-8",
            t.async = !1,
            t.defer = !0,
            t.onload = t.onreadystatechange = function(e, o) {
                (!t.readyState || /loaded|complete/.test(t.readyState)) && "function" == typeof n && (o ? n("script not loaded correctly (abort)", arguments) : n())
            }
            ,
            t.onerror = function() {
                n("script not loaded correctly", arguments)
            }
            ,
            a(t),
            t.src = e,
            t
        }
    };
    window.$log = window.$log || s;
    var $;
    i.script = function(e, n) {
        return w.script(e, n)
    }
    ,
    i.config = function(e) {
        $extend(l, e)
    }
    ,
    o.factories = d,
    r.amd = {
        plugins: !1,
        jQuery: !1,
        $loader: {
            version: "0.3.0",
            config: function(e) {}
        }
    },
    e.define = r,
    e.require = o,
    e.$loader = i
}(this);
/*
     FILE ARCHIVED ON 18:02:50 Jun 13, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:54:51 Nov 14, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 102.024 (3)
  esindex: 0.006
  captures_list: 120.932
  CDXLines.iter: 13.9 (3)
  PetaboxLoader3.datanode: 124.207 (4)
  exclusion.robots: 0.198
  exclusion.robots.policy: 0.184
  RedisCDXSource: 1.638
  PetaboxLoader3.resolve: 65.159
  load_resource: 100.347
*/

////////////////////////////////////////////////
//
// ELECTRON93 MODLOADER
// by ziad87
//
// This aims to make customizable sys42 modules a thing. Yes. You heard it correctly.

//am i useless
 /*
system42("modLoader", function() {
    //console.log('Loading mods...');
    //$io.obj.each(le._files.a.mods, function(obj, folder) {
    //  $io.obj.each(obj, function(_, file) {
    //	console.log('loaded '+file+'.');
    //});
    //});
});

//real process management for win93
//ziad87
system42('process', function() {
    le._processes = [];

    function $start(proc) {
        var child = require('child_process').exec(proc);
        child.stdout.on('data', function(data) {
            $log.white(data.toString())
        });
        le._processes.push(child);
        $log.yellow.bold('process "' + proc + '" started with virtual pid ' + le._processes.indexOf(child) + '\n')
    }

    function $end(pid) {
        le._processes[pid].kill('SIGINT');
        $log.yellow.bold('killed ' + pid);
    }
    window.$start = $start;
    window.$end = $end;
});

system42('noop', function() {
    function $streamers() {
        const {
            desktopCapturer
        } = require('electron')
        var things = [];
        desktopCapturer.getSources({
            types: ['window', 'screen']
        }, (error, sources) => {
            if (error) throw error
            for (let i = 0; i < sources.length; ++i) {
                things.push(' - "' + sources[i].name + '"');

            }
            return window.currentStreamers = things;
        });

    }
    window.$streamers = $streamers;
	setInterval($streamers, 10000)
});

*/
return {
	form: $form
}

}
