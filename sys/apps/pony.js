system42.on("apps:ready", function(e) {
	console.log(e)
  "use strict";
  e._apps["pony"] = {
    categories: "Music;Graphics",
    name: "Poney Jockey",
    icon: "apps/poney.gif",
    //accept: '.json',
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
            k.value = e
            _.update(m[e])
        }
        console.log(_)
        function l(e) {
            $el(_.el).on("change keyup click", "input, select, textarea", function(e) {
                var t = $form(_.el).post;
                m[k.value] = t
            }),
            $el(e).on("click", "button[data-key]", function(e) {
                var t = this.getAttribute("data-key");
                k.value = t + p()
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
        var x, $ = ["Escape F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12"], A = ["{PrintScreen} {ScrollLock} {Pause}", "{Insert} {Home} {PageUp}", "{Delete} {End} {PageDown}", "{}", "{} {ArrowUp} {}", "{ArrowLeft} {ArrowDown} {ArrowRight}"], _ = $betaForm({
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
                width: 550,
                height: 425,
                bodyClass: "poney_jockey",

            }, a)
        })
    },
  };
});
