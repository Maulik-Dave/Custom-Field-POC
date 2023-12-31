﻿/*!
 * jQuery demo: https://formbuilder.online/
 * Version: 3.8.3
 * Author: Kevin Chappell <kevin.b.chappell@gmail.com>
 */
!function (e) {
    "use strict";
    !function (e) {
        var t = {};
        function r(n) {
            if (t[n])
                return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r),
                o.l = !0,
                o.exports
        }
        r.m = e,
            r.c = t,
            r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }
            ,
            r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            r.t = function (e, t) {
                if (1 & t && (e = r(e)),
                    8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (r.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                    for (var o in e)
                        r.d(n, o, function (t) {
                            return e[t]
                        }
                            .bind(null, o));
                return n
            }
            ,
            r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                }
                    : function () {
                        return e
                    }
                    ;
                return r.d(t, "a", t),
                    t
            }
            ,
            r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            r.p = "",
            r(r.s = 35)
    }({
        0: function (t, r, n) {
            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                        r.push.apply(r, n)
                }
                return r
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function (t) {
                        l(e, t, r[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }
                    ))
                }
                return e
            }
            function l(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                    e
            }
            function i(e, t) {
                if (null == e)
                    return {};
                var r, n, o = function (e, t) {
                    if (null == e)
                        return {};
                    var r, n, o = {}, a = Object.keys(e);
                    for (n = 0; n < a.length; n++)
                        r = a[n],
                            t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        r = a[n],
                            t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }
            n.d(r, "D", (function () {
                return s
            }
            )),
                n.d(r, "F", (function () {
                    return d
                }
                )),
                n.d(r, "b", (function () {
                    return u
                }
                )),
                n.d(r, "i", (function () {
                    return f
                }
                )),
                n.d(r, "q", (function () {
                    return b
                }
                )),
                n.d(r, "d", (function () {
                    return g
                }
                )),
                n.d(r, "v", (function () {
                    return y
                }
                )),
                n.d(r, "n", (function () {
                    return h
                }
                )),
                n.d(r, "t", (function () {
                    return v
                }
                )),
                n.d(r, "w", (function () {
                    return O
                }
                )),
                n.d(r, "x", (function () {
                    return j
                }
                )),
                n.d(r, "h", (function () {
                    return D
                }
                )),
                n.d(r, "j", (function () {
                    return E
                }
                )),
                n.d(r, "E", (function () {
                    return C
                }
                )),
                n.d(r, "y", (function () {
                    return B
                }
                )),
                n.d(r, "o", (function () {
                    return T
                }
                )),
                n.d(r, "s", (function () {
                    return F
                }
                )),
                n.d(r, "p", (function () {
                    return k
                }
                )),
                n.d(r, "e", (function () {
                    return N
                }
                )),
                n.d(r, "a", (function () {
                    return U
                }
                )),
                n.d(r, "f", (function () {
                    return q
                }
                )),
                n.d(r, "u", (function () {
                    return L
                }
                )),
                n.d(r, "A", (function () {
                    return P
                }
                )),
                n.d(r, "k", (function () {
                    return R
                }
                )),
                n.d(r, "B", (function () {
                    return I
                }
                )),
                n.d(r, "r", (function () {
                    return W
                }
                )),
                n.d(r, "z", (function () {
                    return J
                }
                )),
                n.d(r, "c", (function () {
                    return H
                }
                )),
                n.d(r, "m", (function () {
                    return Y
                }
                )),
                n.d(r, "C", (function () {
                    return G
                }
                )),
                n.d(r, "l", (function () {
                    return X
                }
                )),
                window.fbLoaded = {
                    js: [],
                    css: []
                },
                window.fbEditors = {
                    quill: {},
                    tinymce: {}
                };
            const s = function (e, t = !1) {
                const r = [null, void 0, ""];
                t && r.push(!1);
                for (const t in e)
                    r.includes(e[t]) ? delete e[t] : Array.isArray(e[t]) && (e[t].length || delete e[t]);
                return e
            }
                , c = function (e) {
                    return !["values", "enableOther", "other", "label", "subtype"].includes(e)
                }
                , d = e => Object.entries(e).map(([e, t]) => `${b(e)}="${t}"`).join(" ")
                , u = e => Object.entries(e).map(([e, t]) => c(e) && Object.values(p(e, t)).join("")).filter(Boolean).join(" ")
                , p = (e, t) => {
                    let r;
                    return e = m(e),
                        t && (Array.isArray(t) ? r = S(t.join(" ")) : ("boolean" == typeof t && (t = t.toString()),
                            r = S(t.trim()))),
                    {
                        name: e,
                        value: t = t ? `="${r}"` : ""
                    }
                }
                , f = e => e.reduce((e, t) => e.concat(Array.isArray(t) ? f(t) : t), [])
                , m = e => ({
                    className: "class"
                }[e] || b(e))
                , b = e => (e = (e = e.replace(/[^\w\s\-]/gi, "")).replace(/([A-Z])/g, (function (e) {
                    return "-" + e.toLowerCase()
                }
                ))).replace(/\s/g, "-").replace(/^-+/g, "")
                , g = e => e.replace(/-([a-z])/g, (e, t) => t.toUpperCase())
                , y = function () {
                    let e, t = 0;
                    return function (r) {
                        const n = (new Date).getTime();
                        n === e ? ++t : (t = 0,
                            e = n);
                        return (r.type || b(r.label)) + "-" + n + "-" + t
                    }
                }()
                , h = e => void 0 === e ? e : [["array", e => Array.isArray(e)], ["node", e => e instanceof window.Node || e instanceof window.HTMLElement], ["component", () => e && e.dom], [typeof e, () => !0]].find(t => t[1](e))[0]
                , v = function (e, t = "", r = {}) {
                    let n = h(t);
                    const { events: o } = r
                        , a = i(r, ["events"])
                        , l = document.createElement(e)
                        , s = {
                            string: e => {
                                l.innerHTML += e
                            }
                            ,
                            object: e => {
                                const { tag: t, content: r } = e
                                    , n = i(e, ["tag", "content"]);
                                return l.appendChild(v(t, r, n))
                            }
                            ,
                            node: e => l.appendChild(e),
                            array: e => {
                                for (let t = 0; t < e.length; t++)
                                    n = h(e[t]),
                                        s[n](e[t])
                            }
                            ,
                            function: e => {
                                e = e(),
                                    n = h(e),
                                    s[n](e)
                            }
                            ,
                            undefined: () => { }
                        };
                    for (const e in a)
                        if (a.hasOwnProperty(e)) {
                            const t = m(e)
                                , r = Array.isArray(a[e]) ? C(a[e].join(" ").split(" ")).join(" ") : a[e];
                            if ("boolean" == typeof r) {
                                if (!0 === r) {
                                    const e = "contenteditable" === t || t;
                                    l.setAttribute(t, e)
                                }
                            } else
                                l.setAttribute(t, r)
                        }
                    return t && s[n](t),
                        ((e, t) => {
                            if (t)
                                for (const r in t)
                                    t.hasOwnProperty(r) && e.addEventListener(r, e => t[r](e))
                        }
                        )(l, o),
                        l
                }
                , w = e => {
                    const t = e.attributes
                        , r = {};
                    return E(t, e => {
                        let n = t[e].value || "";
                        n.match(/false|true/g) ? n = "true" === n : n.match(/undefined/g) && (n = void 0),
                            n && (r[g(t[e].name)] = n)
                    }
                    ),
                        r
                }
                , A = e => {
                    const t = [];
                    for (let r = 0; r < e.length; r++) {
                        const n = a(a({}, w(e[r])), {}, {
                            label: e[r].textContent
                        });
                        t.push(n)
                    }
                    return t
                }
                , x = e => {
                    const t = [];
                    if (e.length) {
                        const r = e[0].getElementsByTagName("value");
                        for (let e = 0; e < r.length; e++)
                            t.push(r[e].textContent)
                    }
                    return t
                }
                , O = e => {
                    const t = (new window.DOMParser).parseFromString(e, "text/xml")
                        , r = [];
                    if (t) {
                        const e = t.getElementsByTagName("field");
                        for (let t = 0; t < e.length; t++) {
                            const n = w(e[t])
                                , o = e[t].getElementsByTagName("option")
                                , a = e[t].getElementsByTagName("userData");
                            o && o.length && (n.values = A(o)),
                                a && a.length && (n.userData = x(a)),
                                r.push(n)
                        }
                    }
                    return r
                }
                , j = e => {
                    const t = document.createElement("textarea");
                    return t.innerHTML = e,
                        t.textContent
                }
                , D = e => {
                    const t = document.createElement("textarea");
                    return t.textContent = e,
                        t.innerHTML
                }
                , S = e => {
                    const t = {
                        '"': "&quot;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;"
                    };
                    return "string" == typeof e ? e.replace(/["&<>]/g, e => t[e] || e) : e
                }
                , E = function (e, t, r) {
                    for (let n = 0; n < e.length; n++)
                        t.call(r, n, e[n])
                }
                , C = e => e.filter((e, t, r) => r.indexOf(e) === t)
                , B = (e, t) => {
                    const r = t.indexOf(e);
                    r > -1 && t.splice(r, 1)
                }
                , T = (e, t) => {
                    const r = jQuery;
                    let n = [];
                    return Array.isArray(e) || (e = [e]),
                        F(e) || (n = jQuery.map(e, e => {
                            const r = {
                                dataType: "script",
                                cache: !0,
                                url: (t || "") + e
                            };
                            return jQuery.ajax(r).done(() => window.fbLoaded.js.push(e))
                        }
                        )),
                        n.push(jQuery.Deferred(e => r(e.resolve))),
                        jQuery.when(...n)
                }
                , F = (e, t = "js") => {
                    let r = !1;
                    const n = window.fbLoaded[t];
                    return r = Array.isArray(e) ? e.every(e => n.includes(e)) : n.includes(e),
                        r
                }
                , k = (t, r) => {
                    Array.isArray(t) || (t = [t]),
                        t.forEach(t => {
                            let n = "href"
                                , o = t
                                , a = "";
                            if ("object" == typeof t && (n = t.type || (t.style ? "inline" : "href"),
                                a = t.id,
                                t = "inline" == n ? t.style : t.href,
                                o = a || t.href || t.style),
                                !F(o, "css")) {
                                if ("href" == n) {
                                    const e = document.createElement("link");
                                    e.type = "text/css",
                                        e.rel = "stylesheet",
                                        e.href = (r || "") + t,
                                        document.head.appendChild(e)
                                } else
                                    e(`<style type="text/css">${t}</style>`).attr("id", a).appendTo(e(document.head));
                                window.fbLoaded.css.push(o)
                            }
                        }
                        )
                }
                , N = e => e.replace(/\b\w/g, (function (e) {
                    return e.toUpperCase()
                }
                ))
                , M = (e, t) => {
                    const r = Object.assign({}, e, t);
                    for (const n in t)
                        r.hasOwnProperty(n) && (Array.isArray(t[n]) ? r[n] = Array.isArray(e[n]) ? C(e[n].concat(t[n])) : t[n] : "object" == typeof t[n] ? r[n] = M(e[n], t[n]) : r[n] = t[n]);
                    return r
                }
                , U = (e, t, r) => t.split(" ").forEach(t => e.addEventListener(t, r, !1))
                , q = (e, t) => {
                    const r = t.replace(".", "");
                    for (; (e = e.parentElement) && !e.classList.contains(r);)
                        ;
                    return e
                }
                , L = () => {
                    let e = "";
                    var t;
                    return t = navigator.userAgent || navigator.vendor || window.opera,
                        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && (e = "formbuilder-mobile"),
                        e
                }
                , P = e => e.replace(/\s/g, "-").replace(/[^a-zA-Z0-9[\]_-]/g, "")
                , R = e => e.replace(/[^0-9]/g, "")
                , I = (e, t) => t.filter((function (e) {
                    return !~this.indexOf(e)
                }
                ), e)
                , W = e => {
                    const t = (e = Array.isArray(e) ? e : [e]).map(({ src: e, id: t }) => new Promise(r => {
                        if (window.fbLoaded.css.includes(e))
                            return r(e);
                        const n = v("link", null, {
                            href: e,
                            rel: "stylesheet",
                            id: t
                        });
                        document.head.insertBefore(n, document.head.firstChild)
                    }
                    ));
                    return Promise.all(t)
                }
                , J = e => {
                    const t = document.getElementById(e);
                    return t.parentElement.removeChild(t)
                }
                , H = /^col-(xs|sm|md|lg)-([^\s]+)/
                , Y = e => e.split(" ").filter(e => H.test(e) || e.startsWith("row-"));
            function G(e) {
                const t = ["a", "an", "and", "as", "at", "but", "by", "for", "for", "from", "in", "into", "near", "nor", "of", "on", "onto", "or", "the", "to", "with"].map(e => `\\s${e}\\s`)
                    , r = new RegExp(`(?!${t.join("|")})\\w\\S*`, "g");
                return ("" + e).replace(r, e => e.charAt(0).toUpperCase() + e.substr(1).replace(/[A-Z]/g, e => " " + e))
            }
            const Q = {
                addEventListeners: U,
                attrString: u,
                camelCase: g,
                capitalize: N,
                closest: q,
                getContentType: h,
                escapeAttr: S,
                escapeAttrs: e => {
                    for (const t in e)
                        e.hasOwnProperty(t) && (e[t] = S(e[t]));
                    return e
                }
                ,
                escapeHtml: D,
                forceNumber: R,
                forEach: E,
                getScripts: T,
                getStyles: k,
                hyphenCase: b,
                isCached: F,
                markup: v,
                merge: M,
                mobileClass: L,
                nameAttr: y,
                parseAttrs: w,
                parsedHtml: j,
                parseOptions: A,
                parseUserData: x,
                parseXML: O,
                removeFromArray: B,
                safeAttr: p,
                safeAttrName: m,
                safename: P,
                subtract: I,
                trimObj: s,
                unique: C,
                validAttr: c,
                titleCase: G,
                splitObject: (e, t) => {
                    const r = e => (t, r) => (t[r] = e[r],
                        t);
                    return [Object.keys(e).filter(e => t.includes(e)).reduce(r(e), {}), Object.keys(e).filter(e => !t.includes(e)).reduce(r(e), {})]
                }
            };
            e.fn.swapWith = function (t) {
                var r = e(t)
                    , n = e("<div>");
                return this.before(n),
                    r.before(this),
                    n.before(r).remove(),
                    this
            }
                ;
            const X = e => Object.entries(e).reduce((e, [t, r]) => a(a({}, e), {}, {
                [t + "Selector"]: "." + r
            }), {});
            r.g = Q
        },
        32: function (e, t, r) {
            var n = r(9)
                , o = r(33);
            "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
            var a = {
                attributes: {
                    class: "formBuilder-injected-style"
                },
                insert: "head",
                singleton: !1
            };
            n(o, a);
            e.exports = o.locals || {}
        },
        33: function (e, t, r) {
            r.r(t);
            var n = r(8)
                , o = r.n(n)()(!1);
            o.push([e.i, 'html,body{height:100%}body{background-color:#f2f2f2;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);font-family:Helvetica,"Helvetica Neue",Arial,sans-serif}.form-rendered .build-wrap,.form-rendered .formbuilder-title,.form-rendered .formbuilder-actions{display:none}.render-wrap,.formrender-title,.formrender-actions{display:none}.form-rendered .render-wrap,.form-rendered .formrender-title,.form-rendered .formrender-actions{display:block}.api-table{width:100%;border-collapse:collapse}.api-table td{border:1px solid #aaa;padding:16px}.api-table td:last-child{text-align:center}.api-table thead{background-color:#fff}.api-table tbody{background-color:#fff}.api-table tbody tr:nth-child(odd){background-color:#ddd}.api-table textarea{width:100%;height:24px;transition:height 333ms ease-in-out}.api-table textarea:focus{height:160px}.demo-header{display:flex;align-items:center;justify-content:space-between}#setData-value{background-color:transparent;border:0 none;color:#fff;padding:0}.form-builder-dialog{overflow-y:auto}', ""]),
                t.default = o
        },
        35: function (t, r, n) {
            n.r(r);
            n(32);
            var o = n(0);
            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                        r.push.apply(r, n)
                }
                return r
            }
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function (t) {
                        i(e, t, r[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }
                    ))
                }
                return e
            }
            function i(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                    e
            }
            const s = e => {
                document.querySelectorAll(".current-field-id").forEach(t => {
                    t.value = e
                }
                )
            }
                , c = '[{"type":"autocomplete","label":"Autocomplete","className":"form-control","name":"autocomplete-1526094918549","requireValidOption":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"},{"label":"Option 3","value":"option-3"}],"userData":["option-1"]},{"type":"checkbox-group","label":"Checkbox Group","name":"checkbox-group-1526095813035","other":true,"values":[{"label":"Option 1","value":"option-1"},{"label":"Option 2","value":"option-2"}],"userData":["option-1","Bilbo \\"baggins\\""]},{"type":"text","label":"Color Field","name":"text-1526099104236","subtype":"color","userData":["#00ff00"]},{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"tel","userData":["123-456-7890"]},{"type":"date","label":"Date Field","className":"form-control","name":"date-1526096579821","userData":["2018-01-01"]},{"type":"number","label":"Number","className":"form-control","name":"number-1526099204594","min":"1","max":"3","step":".2","userData":["1.1"]},{"type":"textarea","label":"Text Area","className":"form-control","name":"textarea-1526099273610","subtype":"textarea","userData":["Tennessee Welcomes You!"]},{"type":"textarea","subtype":"tinymce","label":"TinyMCE","className":"form-control","name":"textarea-1526099273610","userData":["&lt;p&gt;&lt;span style=&quot;color: #339966;&quot;&gt;It&#39;s a great place&lt;/span&gt;&lt;/p&gt;"]}]'
                , d = {
                    loadUserForm: () => {
                        const t = {
                            controlConfig: {
                                "textarea.tinymce": {
                                    branding: !1,
                                    encoding: "xml",
                                    menubar: "edit insert format table",
                                    plugins: "preview searchreplace autolink link table lists textcolor colorpicker",
                                    toolbar: ["formatselect", "bold italic forecolor backcolor", "link", "alignleft aligncenter alignright alignjustify", "numlist bullist outdent indent", "preview"].join(" | ")
                                }
                            },
                            formData: c
                        };
                        e(".render-wrap").formRender(t)
                    }
                    ,
                    clearUserForm: () => {
                        e(".render-wrap").formRender("clear")
                    }
                    ,
                    renderUserForm: () => {
                        e(".render-wrap").formRender("render", '[{"type":"text","label":"Color picker","name":"text-1526099104236","subtype":"color","userData":["#00ff00"]},{"type":"text","label":"Text Field","name":"text-1526099104236","subtype":"tel","userData":["123-456-7890"]},{"type":"date","label":"Date Field","className":"form-control","name":"date-1526096579821","userData":["2018-01-01"]},{"type":"number","label":"Number","className":"form-control","name":"number-1526099204594","min":"1","max":"3","step":".2","userData":["1.1"]},{"type":"textarea","label":"Text Area","className":"form-control","name":"textarea-1526099273610","subtype":"textarea","userData":["Tennessee Welcomes You!"]},{"type":"textarea","subtype":"tinymce","label":"TinyMCE","className":"form-control","name":"textarea-1526099273610","userData":["&lt;p&gt;&lt;span style=&quot;color: #339966;&quot;&gt;It&#39;s a great place&lt;/span&gt;&lt;/p&gt;"]}]')
                    }
                    ,
                    getHTML: () => {
                        console.log(e(".render-wrap").formRender("html"))
                    }
                    ,
                    setData: () => {
                        e(".render-wrap").formRender("setData", c)
                    }
                    ,
                    render: () => {
                        e(".render-wrap").formRender("render")
                    }
                    ,
                    showUserData: () => {
                        alert(JSON.stringify(e(".render-wrap").formRender("userData")))
                    }
                }
                , u = {
                    testSubmit: () => {
                        const e = document.querySelector(".render-wrap")
                            , t = new FormData(e);
                        for (var r of (console.log("Can submit: ", e.checkValidity()),
                            console.log("FormData:"),
                            t.entries()))
                            console.log(`${r[0]}: ${r[1]}`)
                    }
                    ,
                    resetDemo: () => {
                        window.sessionStorage.removeItem("formData"),
                            location.reload()
                    }
                }
                , p = (e, t = !1) => e.reduce((e, r) => {
                    const n = (e => {
                        let t = e;
                        return "string" == typeof t && (t = {
                            attrs: {
                                scope: "col"
                            },
                            content: Object(o.C)(e)
                        }),
                            "string" == typeof t.content && (t.content = document.createTextNode(t.content)),
                            l({
                                attrs: {}
                            }, t)
                    }
                    )(r)
                        , a = t ? "th" : "td"
                        , i = document.createElement(a);
                    return i.appendChild(n.content),
                        Object.entries(n.attrs).forEach(([e, t]) => {
                            i.setAttribute(e, t)
                        }
                        ),
                        e.appendChild(i),
                        e
                }
                    , document.createElement("tr"))
                , f = l(l(l({}, {
                    showData: () => e(".build-wrap").formBuilder("showData"),
                    clearFields: () => e(".build-wrap").formBuilder("clearFields"),
                    getData: () => {
                        console.log(e(".build-wrap").formBuilder("getData"))
                    }
                    ,
                    setData: () => {
                        const t = e(".build-wrap").formBuilder
                            , r = t("markup", "textarea", t("getData", "json", !0), {
                                id: "setData-value",
                                rows: 30,
                                style: "width: 100%"
                            })
                            , n = t("markup", "button", "Set Data", {
                                events: {
                                    click: () => e(".build-wrap").formBuilder("setData", r.value)
                                }
                            })
                            , o = t("markup", "div", [r, n]);
                        t("showDialog", o, null, "data-dialog")
                    }
                    ,
                    save: () => {
                        e(".build-wrap").formBuilder("save")
                    }
                    ,
                    addField: () => {
                        const t = {
                            type: "text",
                            class: "form-control",
                            label: "Text Field added at: " + (new Date).getTime()
                        };
                        e(".build-wrap").formBuilder("addField", t)
                    }
                    ,
                    removeField: () => {
                        const t = e(".build-wrap").formBuilder("getCurrentFieldId");
                        s(""),
                            e(".build-wrap").formBuilder("removeField", t)
                    }
                    ,
                    getXML: () => {
                        alert(e(".build-wrap").formBuilder("getData", "xml"))
                    }
                    ,
                    getJSON: () => {
                        alert(e(".build-wrap").formBuilder("getData", "json", !0))
                    }
                    ,
                    getJS: () => {
                        alert("check console"),
                            console.log(e(".build-wrap").formBuilder("getData"))
                    }
                    ,
                    toggleEdit: () => {
                        const t = e(".build-wrap").formBuilder("getCurrentFieldId");
                        e(".build-wrap").formBuilder("toggleFieldEdit", t)
                    }
                    ,
                    toggleAllEdit: () => e(".build-wrap").formBuilder("toggleAllFieldEdit"),
                    getFieldTypes: () => console.log(e(".build-wrap").formBuilder("getFieldTypes"))
                }), d), u)
                , m = (e, t) => {
                    const r = document.createDocumentFragment()
                        , n = document.createElement("thead");
                    n.appendChild(p(t, !0));
                    const a = Object.entries(e).reduce((e, [t, r]) => {
                        const n = {
                            content: r
                        }
                            , a = document.createElement("code");
                        a.appendChild(document.createTextNode(t));
                        const l = {
                            content: a
                        };
                        let i = document.getElementById(t);
                        if (i) {
                            const e = i.querySelector(".trigger");
                            e && e.addEventListener("click", e => f[t] && f[t](e))
                        } else
                            i = document.createElement("button"),
                                i.id = t,
                                i.textContent = Object(o.C)(t),
                                i.addEventListener("click", e => f[t] && f[t](e));
                        const s = {
                            content: i
                        };
                        return e.appendChild(p([l, n, s])),
                            e
                    }
                        , document.createDocumentFragment())
                        , l = document.createElement("tbody");
                    return l.appendChild(a),
                        r.appendChild(n),
                        r.appendChild(l),
                        r
                }
                , b = document.querySelectorAll(".demo-dataType")
                , g = window.sessionStorage.getItem("dataType") || "json"
                , y = ({ target: e }) => {
                    window.sessionStorage.setItem("dataType", e.value),
                        u.resetDemo()
                }
                ;
            for (let e = 0; e < b.length; e++)
                g === b[e].value && (b[e].checked = !0),
                    b[e].addEventListener("click", y, !1);
            document.getElementById("toggleBootstrap").addEventListener("click", ({ target: e }) => {
                e.checked ? Object(o.r)({
                    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
                    id: "bootstrap"
                }) : Object(o.z)("bootstrap")
            }
                , !1),
                jQuery((function (e) {
                    const t = {
                        starRating: function (t) {
                            return {
                                field: '<span id="' + t.name + '">',
                                onRender: () => {
                                    e(document.getElementById(t.name)).rateYo({
                                        rating: 3.6
                                    })
                                }
                            }
                        }
                    }
                        , r = {
                            defaultFields: [{
                                className: "form-control",
                                label: "Default Field",
                                placeholder: "Enter your default field value",
                                name: "default-field-1",
                                type: "text"
                            }],
                            persistDefaultFields: !0,
                            disabledSubtypes: {
                                text: ["password"]
                            },
                            disabledAttrs: ["placeholder", "name"],
                            dataType: g,
                            subtypes: {
                                text: ["datetime-local"],
                                "checkbox-group": ["custom-group"]
                            },
                            onSave: a,
                            onAddField: e => {
                                s(e)
                            }
                            ,
                            onAddOption: (e, { index: t }) => (e.label = e.label || "Option " + (t + 1),
                                e.value = e.value || "option-" + (t + 1),
                                e),
                            onClearAll: () => window.sessionStorage.removeItem("formData"),
                            stickyControls: {
                                enable: !0
                            },
                            sortableControls: !0,
                            fields: [{
                                type: "autocomplete",
                                label: "Custom Autocomplete",
                                required: !0,
                                values: [{
                                    label: "SQL"
                                }, {
                                    label: "C#"
                                }, {
                                    label: "JavaScript"
                                }, {
                                    label: "Java"
                                }, {
                                    label: "Python"
                                }, {
                                    label: "C++"
                                }, {
                                    label: "PHP"
                                }, {
                                    label: "Swift"
                                }, {
                                    label: "Ruby"
                                }]
                            }, {
                                label: "Star Rating",
                                attrs: {
                                    type: "starRating"
                                },
                                icon: "🌟"
                            }, {
                                type: "checkbox-group",
                                subtype: "custom-group",
                                label: "Custom Checkbox Group w/Sub Type",
                                required: !0,
                                values: [{
                                    label: "Option 1"
                                }, {
                                    label: "Option 2"
                                }]
                            }],
                            templates: t,
                            inputSets: [{
                                label: "User Details",
                                icon: "👨",
                                name: "user-details",
                                showHeader: !0,
                                fields: [{
                                    type: "text",
                                    label: "First Name",
                                    className: "form-control"
                                }, {
                                    type: "select",
                                    label: "Profession",
                                    className: "form-control",
                                    values: [{
                                        label: "Street Sweeper",
                                        value: "option-2",
                                        selected: !1
                                    }, {
                                        label: "Brain Surgeon",
                                        value: "option-3",
                                        selected: !1
                                    }]
                                }, {
                                    type: "textarea",
                                    label: "Short Bio:",
                                    className: "form-control"
                                }]
                            }, {
                                label: "User Agreement",
                                fields: [{
                                    type: "header",
                                    subtype: "h3",
                                    label: "Terms & Conditions",
                                    className: "header"
                                }, {
                                    type: "paragraph",
                                    label: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
                                }, {
                                    type: "paragraph",
                                    label: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
                                }, {
                                    type: "checkbox",
                                    label: "Do you agree to the terms and conditions?"
                                }]
                            }],
                            typeUserDisabledAttrs: {
                                autocomplete: ["access"]
                            },
                            typeUserAttrs: {
                                text: {
                                    shape: {
                                        label: "Class",
                                        multiple: !0,
                                        options: {
                                            "red form-control": "Red",
                                            "green form-control": "Green",
                                            "blue form-control": "Blue"
                                        },
                                        style: "border: 1px solid red"
                                    },
                                    readonly: {
                                        label: "readonly",
                                        value: !1
                                    }
                                },
                                number: {
                                    volume: {
                                        label: "Volume Level",
                                        value: 1,
                                        max: 11
                                    }
                                },
                                "checkbox-group": {
                                    "custom-group": {
                                        customInput: {
                                            label: "Custom Text Field",
                                            value: "This field is added only to checkbox with specific subtype",
                                            type: "text"
                                        }
                                    }
                                }
                            },
                            disableInjectedStyle: !1,
                            actionButtons: [{
                                id: "smile",
                                className: "btn btn-success",
                                label: "😁",
                                type: "button",
                                events: {
                                    click: () => {
                                        alert("😁😁😁 !SMILE! 😁😁😁")
                                    }
                                }
                            }, "save"],
                            disableFields: ["autocomplete", "custom-tinymce"],
                            replaceFields: [{
                                type: "textarea",
                                subtype: "tinymce",
                                datatype: "custom-tinymce",
                                label: "tinyMCE",
                                required: !0
                            }],
                            disabledFieldButtons: {
                                text: ["copy"]
                            },
                            controlPosition: "right",
                            i18n: {
                                override: {
                                    "en-US": {
                                        number: "Big Numbers"
                                    }
                                }
                            },
                            scrollToFieldOnAdd: !1
                        }
                        , n = window.sessionStorage.getItem("formData");
                    let o = !0;
                    function a() {
                        if (document.body.classList.toggle("form-rendered", o),
                            o) {
                            const r = e(".build-wrap").formBuilder("getData", g);
                            e(".render-wrap").formRender({
                                formData: r,
                                templates: t,
                                dataType: g
                            }),
                                window.sessionStorage.setItem("formData", r)
                        } else
                            e(".build-wrap").formBuilder("setData", e(".render-wrap").formRender("userData"));
                        return o = !o
                    }
                    n && (r.formData = n);
                    e(".build-wrap").formBuilder(r).promise.then((function (e) {
                        document.querySelectorAll(".editForm").forEach(e => e.addEventListener("click", a), !1);
                        const t = document.getElementById("setLanguage")
                            , r = window.sessionStorage.getItem("formBuilder-locale") || "en-US";
                        t.value = r,
                            e.actions.setLang(r);
                        const o = ["action", "description", "demo"];
                        document.getElementById("action-api").appendChild(m({
                            getFieldTypes: "Get the registered field types for the form.",
                            showData: "Trigger a modal to appear that shows the current formData value",
                            clearFields: "Removes all the fields from the template editor",
                            getData: "Read the current formData",
                            getXML: "Get the current formData in XML format",
                            getJSON: "Get the current formData in JSON format",
                            getJS: "Get the current formData in JS object format",
                            setData: "set the current formData value for the editor",
                            save: "call save from the api",
                            toggleAllEdit: "toggle the edit mode for all fields",
                            toggleEdit: "toggle a specific field edit mode by index or id",
                            addField: "programmatically add a field to the template editor",
                            removeField: "remove a field by its index or id from the editor stage",
                            resetDemo: "reset the demo to default state"
                        }, o));
                        if (document.getElementById("demo-api").appendChild(m({
                            loadUserForm: "Load user form",
                            showUserData: "Show user form",
                            renderUserForm: "Render user form",
                            getHTML: "Get HTML",
                            clearUserForm: "Clear user form",
                            testSubmit: "Test Submit",
                            setData: "Set template data",
                            render: "Render data that was set"
                        }, o)),
                            n && "[]" !== n) {
                            const e = document.getElementById("setData-value");
                            e && (e.value = window.JSON.stringify(JSON.parse(n), null, "  "))
                        }
                        t.addEventListener("change", ({ target: { value: t } }) => {
                            window.sessionStorage.setItem("formBuilder-locale", t),
                                e.actions.setLang(t)
                        }
                            , !1)
                    }
                    ))
                }
                ))
        },
        8: function (e, t, r) {
            e.exports = function (e) {
                var t = [];
                return t.toString = function () {
                    return this.map((function (t) {
                        var r = function (e, t) {
                            var r = e[1] || ""
                                , n = e[3];
                            if (!n)
                                return r;
                            if (t && "function" == typeof btoa) {
                                var o = (l = n,
                                    i = btoa(unescape(encodeURIComponent(JSON.stringify(l)))),
                                    s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),
                                    "/*# ".concat(s, " */"))
                                    , a = n.sources.map((function (e) {
                                        return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */")
                                    }
                                    ));
                                return [r].concat(a).concat([o]).join("\n")
                            }
                            var l, i, s;
                            return [r].join("\n")
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r
                    }
                    )).join("")
                }
                    ,
                    t.i = function (e, r, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var o = {};
                        if (n)
                            for (var a = 0; a < this.length; a++) {
                                var l = this[a][0];
                                null != l && (o[l] = !0)
                            }
                        for (var i = 0; i < e.length; i++) {
                            var s = [].concat(e[i]);
                            n && o[s[0]] || (r && (s[2] ? s[2] = "".concat(r, " and ").concat(s[2]) : s[2] = r),
                                t.push(s))
                        }
                    }
                    ,
                    t
            }
        },
        9: function (e, t, r) {
            var n, o = function () {
                return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)),
                    n
            }, a = function () {
                var e = {};
                return function (t) {
                    if (void 0 === e[t]) {
                        var r = document.querySelector(t);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                            try {
                                r = r.contentDocument.head
                            } catch (e) {
                                r = null
                            }
                        e[t] = r
                    }
                    return e[t]
                }
            }(), l = [];
            function i(e) {
                for (var t = -1, r = 0; r < l.length; r++)
                    if (l[r].identifier === e) {
                        t = r;
                        break
                    }
                return t
            }
            function s(e, t) {
                for (var r = {}, n = [], o = 0; o < e.length; o++) {
                    var a = e[o]
                        , s = t.base ? a[0] + t.base : a[0]
                        , c = r[s] || 0
                        , d = "".concat(s, " ").concat(c);
                    r[s] = c + 1;
                    var u = i(d)
                        , p = {
                            css: a[1],
                            media: a[2],
                            sourceMap: a[3]
                        };
                    -1 !== u ? (l[u].references++,
                        l[u].updater(p)) : l.push({
                            identifier: d,
                            updater: g(p, t),
                            references: 1
                        }),
                        n.push(d)
                }
                return n
            }
            function c(e) {
                var t = document.createElement("style")
                    , n = e.attributes || {};
                if (void 0 === n.nonce) {
                    var o = r.nc;
                    o && (n.nonce = o)
                }
                if (Object.keys(n).forEach((function (e) {
                    t.setAttribute(e, n[e])
                }
                )),
                    "function" == typeof e.insert)
                    e.insert(t);
                else {
                    var l = a(e.insert || "head");
                    if (!l)
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    l.appendChild(t)
                }
                return t
            }
            var d, u = (d = [],
                function (e, t) {
                    return d[e] = t,
                        d.filter(Boolean).join("\n")
                }
            );
            function p(e, t, r, n) {
                var o = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
                if (e.styleSheet)
                    e.styleSheet.cssText = u(t, o);
                else {
                    var a = document.createTextNode(o)
                        , l = e.childNodes;
                    l[t] && e.removeChild(l[t]),
                        l.length ? e.insertBefore(a, l[t]) : e.appendChild(a)
                }
            }
            function f(e, t, r) {
                var n = r.css
                    , o = r.media
                    , a = r.sourceMap;
                if (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
                    a && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
                    e.styleSheet)
                    e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild;)
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
            var m = null
                , b = 0;
            function g(e, t) {
                var r, n, o;
                if (t.singleton) {
                    var a = b++;
                    r = m || (m = c(t)),
                        n = p.bind(null, r, a, !1),
                        o = p.bind(null, r, a, !0)
                } else
                    r = c(t),
                        n = f.bind(null, r, t),
                        o = function () {
                            !function (e) {
                                if (null === e.parentNode)
                                    return !1;
                                e.parentNode.removeChild(e)
                            }(r)
                        }
                        ;
                return n(e),
                    function (t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                                return;
                            n(e = t)
                        } else
                            o()
                    }
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
                var r = s(e = e || [], t);
                return function (e) {
                    if (e = e || [],
                        "[object Array]" === Object.prototype.toString.call(e)) {
                        for (var n = 0; n < r.length; n++) {
                            var o = i(r[n]);
                            l[o].references--
                        }
                        for (var a = s(e, t), c = 0; c < r.length; c++) {
                            var d = i(r[c]);
                            0 === l[d].references && (l[d].updater(),
                                l.splice(d, 1))
                        }
                        r = a
                    }
                }
            }
        }
    })
}(jQuery);
