/**
 * Swiper 11.0.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 9, 2023
 */

var Swiper = function() {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function t(s, a) {
        void 0 === s && (s = {}),
        void 0 === a && (a = {}),
        Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }
        ))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s),
        e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(),
        null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i),
        e
    }
    function n(e) {
        return void 0 === e && (e = ""),
        e.trim().split(" ").filter((e => !!e.trim()))
    }
    function l(e, t) {
        return void 0 === t && (t = 0),
        setTimeout(e, t)
    }
    function o() {
        return Date.now()
    }
    function d(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform,
        i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")),
        n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        a = n.toString().split(",")),
        "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
        "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
        i || 0
    }
    function c(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function p() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
          , t = ["__proto__", "constructor", "prototype"];
        for (let a = 1; a < arguments.length; a += 1) {
            const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            if (null != i && (s = i,
            !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, a = s.length; t < a; t += 1) {
                    const a = s[t]
                      , r = Object.getOwnPropertyDescriptor(i, a);
                    void 0 !== r && r.enumerable && (c(e[a]) && c(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a]) : !c(e[a]) && c(i[a]) ? (e[a] = {},
                    i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a])) : e[a] = i[a])
                }
            }
        }
        var s;
        return e
    }
    function u(e, t, s) {
        e.style.setProperty(t, s)
    }
    function m(e) {
        let {swiper: t, targetPosition: s, side: a} = e;
        const i = r()
          , n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none",
        i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev"
          , p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t
          , u = () => {
            l = (new Date).getTime(),
            null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0)
              , r = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + r * (s - n);
            if (p(c, s) && (c = s),
            t.wrapperEl.scrollTo({
                [a]: c
            }),
            p(c, s))
                return t.wrapperEl.style.overflow = "hidden",
                t.wrapperEl.style.scrollSnapType = "",
                setTimeout(( () => {
                    t.wrapperEl.style.overflow = "",
                    t.wrapperEl.scrollTo({
                        [a]: c
                    })
                }
                )),
                void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u)
        }
        ;
        u()
    }
    function h(e) {
        return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
    }
    function f(e, t) {
        return void 0 === t && (t = ""),
        [...e.children].filter((e => e.matches(t)))
    }
    function g(e) {
        try {
            return void console.warn(e)
        } catch (e) {}
    }
    function v(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : n(t)),
        s
    }
    function w(e) {
        const t = r()
          , s = a()
          , i = e.getBoundingClientRect()
          , n = s.body
          , l = e.clientTop || n.clientTop || 0
          , o = e.clientLeft || n.clientLeft || 0
          , d = e === t ? t.scrollY : e.scrollTop
          , c = e === t ? t.scrollX : e.scrollLeft;
        return {
            top: i.top + d - l,
            left: i.left + c - o
        }
    }
    function b(e, t) {
        return r().getComputedStyle(e, null).getPropertyValue(t)
    }
    function y(e) {
        let t, s = e;
        if (s) {
            for (t = 0; null !== (s = s.previousSibling); )
                1 === s.nodeType && (t += 1);
            return t
        }
    }
    function E(e, t) {
        const s = [];
        let a = e.parentElement;
        for (; a; )
            t ? a.matches(t) && s.push(a) : s.push(a),
            a = a.parentElement;
        return s
    }
    function x(e, t) {
        t && e.addEventListener("transitionend", (function s(a) {
            a.target === e && (t.call(e, a),
            e.removeEventListener("transitionend", s))
        }
        ))
    }
    function S(e, t, s) {
        const a = r();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }
    let T, M, C;
    function P() {
        return T || (T = function() {
            const e = r()
              , t = a();
            return {
                smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
                touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
            }
        }()),
        T
    }
    function L(e) {
        return void 0 === e && (e = {}),
        M || (M = function(e) {
            let {userAgent: t} = void 0 === e ? {} : e;
            const s = P()
              , a = r()
              , i = a.navigator.platform
              , n = t || a.navigator.userAgent
              , l = {
                ios: !1,
                android: !1
            }
              , o = a.screen.width
              , d = a.screen.height
              , c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/)
              , m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , h = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/),
            p || (p = [0, 1, "13_0_0"]),
            f = !1),
            c && !h && (l.os = "android",
            l.android = !0),
            (p || m || u) && (l.os = "ios",
            l.ios = !0),
            l
        }(e)),
        M
    }
    function A() {
        return C || (C = function() {
            const e = r();
            let t = !1;
            function s() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (s()) {
                const s = String(e.navigator.userAgent);
                if (s.includes("Version/")) {
                    const [e,a] = s.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                    t = e < 16 || 16 === e && a < 2
                }
            }
            return {
                isSafari: t || s(),
                needPerspectiveFix: t,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()),
        C
    }
    var I = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed)
                return a;
            if ("function" != typeof t)
                return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t)
            }
            )),
            a
        },
        once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed)
                return a;
            if ("function" != typeof t)
                return a;
            function i() {
                a.off(e, i),
                i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
                    r[n] = arguments[n];
                t.apply(a, r)
            }
            return i.__emitterProxy = t,
            a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed)
                return s;
            if ("function" != typeof e)
                return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e),
            s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed)
                return t;
            if (!t.eventsAnyListeners)
                return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1),
            t
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(( (a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }
                ))
            }
            )),
            s) : s
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed)
                return e;
            if (!e.eventsListeners)
                return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
                r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0],
            s = r.slice(1, r.length),
            a = e) : (t = r[0].events,
            s = r[0].data,
            a = r[0].context || e),
            s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(a, [t, ...s])
                }
                )),
                e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(a, s)
                }
                ))
            }
            )),
            e
        }
    };
    const z = (e, t) => {
        if (!e || e.destroyed || !e.params)
            return;
        const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
        if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(( () => {
                s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),
                t && t.remove())
            }
            ))),
            t && t.remove()
        }
    }
      , $ = (e, t) => {
        if (!e.slides[t])
            return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading")
    }
      , k = e => {
        if (!e || e.destroyed || !e.params)
            return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0)
            return;
        t = Math.min(t, s);
        const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
          , i = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const s = i
              , r = [s - t];
            return r.push(...Array.from({
                length: t
            }).map(( (e, t) => s + a + t))),
            void e.slides.forEach(( (t, s) => {
                r.includes(t.column) && $(e, s)
            }
            ))
        }
        const r = i + a - 1;
        if (e.params.rewind || e.params.loop)
            for (let a = i - t; a <= r + t; a += 1) {
                const t = (a % s + s) % s;
                (t < i || t > r) && $(e, t)
            }
        else
            for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1)
                a !== i && (a > r || a < i) && $(e, a)
    }
    ;
    var O = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth,
            s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight,
            0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(a, "padding-left") || 0, 10) - parseInt(b(a, "padding-right") || 0, 10),
            s = s - parseInt(b(a, "padding-top") || 0, 10) - parseInt(b(a, "padding-bottom") || 0, 10),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this;
            function t(t, s) {
                return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
            }
            const s = e.params
              , {wrapperEl: a, slidesEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e
              , o = e.virtual && s.virtual.enabled
              , d = o ? e.virtual.slides.length : e.slides.length
              , c = f(i, `.${e.params.slideClass}, swiper-slide`)
              , p = o ? e.virtual.slides.length : c.length;
            let m = [];
            const h = []
              , g = [];
            let v = s.slidesOffsetBefore;
            "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
            let w = s.slidesOffsetAfter;
            "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
            const y = e.snapGrid.length
              , E = e.slidesGrid.length;
            let x = s.spaceBetween
              , T = -v
              , M = 0
              , C = 0;
            if (void 0 === r)
                return;
            "string" == typeof x && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * r : "string" == typeof x && (x = parseFloat(x)),
            e.virtualSize = -x,
            c.forEach((e => {
                n ? e.style.marginLeft = "" : e.style.marginRight = "",
                e.style.marginBottom = "",
                e.style.marginTop = ""
            }
            )),
            s.centeredSlides && s.cssMode && (u(a, "--swiper-centered-offset-before", ""),
            u(a, "--swiper-centered-offset-after", ""));
            const P = s.grid && s.grid.rows > 1 && e.grid;
            let L;
            P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
            const A = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
            for (let a = 0; a < p; a += 1) {
                let i;
                if (L = 0,
                c[a] && (i = c[a]),
                P && e.grid.updateSlide(a, i, c),
                !c[a] || "none" !== b(i, "display")) {
                    if ("auto" === s.slidesPerView) {
                        A && (c[a].style[e.getDirectionLabel("width")] = "");
                        const r = getComputedStyle(i)
                          , n = i.style.transform
                          , l = i.style.webkitTransform;
                        if (n && (i.style.transform = "none"),
                        l && (i.style.webkitTransform = "none"),
                        s.roundLengths)
                            L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);
                        else {
                            const e = t(r, "width")
                              , s = t(r, "padding-left")
                              , a = t(r, "padding-right")
                              , n = t(r, "margin-left")
                              , l = t(r, "margin-right")
                              , o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o)
                                L = e + n + l;
                            else {
                                const {clientWidth: t, offsetWidth: r} = i;
                                L = e + s + a + n + l + (r - t)
                            }
                        }
                        n && (i.style.transform = n),
                        l && (i.style.webkitTransform = l),
                        s.roundLengths && (L = Math.floor(L))
                    } else
                        L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView,
                        s.roundLengths && (L = Math.floor(L)),
                        c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`);
                    c[a] && (c[a].swiperSlideSize = L),
                    g.push(L),
                    s.centeredSlides ? (T = T + L / 2 + M / 2 + x,
                    0 === M && 0 !== a && (T = T - r / 2 - x),
                    0 === a && (T = T - r / 2 - x),
                    Math.abs(T) < .001 && (T = 0),
                    s.roundLengths && (T = Math.floor(T)),
                    C % s.slidesPerGroup == 0 && m.push(T),
                    h.push(T)) : (s.roundLengths && (T = Math.floor(T)),
                    (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && m.push(T),
                    h.push(T),
                    T = T + L + x),
                    e.virtualSize += L + x,
                    M = L,
                    C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + w,
            n && l && ("slide" === s.effect || "coverflow" === s.effect) && (a.style.width = `${e.virtualSize + x}px`),
            s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + x}px`),
            P && e.grid.updateWrapperSize(L, m),
            !s.centeredSlides) {
                const t = [];
                for (let a = 0; a < m.length; a += 1) {
                    let i = m[a];
                    s.roundLengths && (i = Math.floor(i)),
                    m[a] <= e.virtualSize - r && t.push(i)
                }
                m = t,
                Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r)
            }
            if (o && s.loop) {
                const t = g[0] + x;
                if (s.slidesPerGroup > 1) {
                    const a = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup)
                      , i = t * s.slidesPerGroup;
                    for (let e = 0; e < a; e += 1)
                        m.push(m[m.length - 1] + i)
                }
                for (let a = 0; a < e.virtual.slidesBefore + e.virtual.slidesAfter; a += 1)
                    1 === s.slidesPerGroup && m.push(m[m.length - 1] + t),
                    h.push(h[h.length - 1] + t),
                    e.virtualSize += t
            }
            if (0 === m.length && (m = [0]),
            0 !== x) {
                const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
                c.filter(( (e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
                    e.style[t] = `${x}px`
                }
                ))
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                g.forEach((t => {
                    e += t + (x || 0)
                }
                )),
                e -= x;
                const t = e - r;
                m = m.map((e => e <= 0 ? -v : e > t ? t + w : e))
            }
            if (s.centerInsufficientSlides) {
                let e = 0;
                if (g.forEach((t => {
                    e += t + (x || 0)
                }
                )),
                e -= x,
                e < r) {
                    const t = (r - e) / 2;
                    m.forEach(( (e, s) => {
                        m[s] = e - t
                    }
                    )),
                    h.forEach(( (e, s) => {
                        h[s] = e + t
                    }
                    ))
                }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: m,
                slidesGrid: h,
                slidesSizesGrid: g
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                u(a, "--swiper-centered-offset-before", -m[0] + "px"),
                u(a, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
                const t = -e.snapGrid[0]
                  , s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)),
                e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"),
            m.length !== y && (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
            h.length !== E && e.emit("slidesGridLengthChange"),
            s.watchSlidesProgress && e.updateSlidesOffset(),
            !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                const t = `${s.containerModifierClass}backface-hidden`
                  , a = e.el.classList.contains(t);
                p <= s.maxBackfaceHiddenSlides ? a || e.el.classList.add(t) : a && e.el.classList.remove(t)
            }
        },
        updateAutoHeight: function(e) {
            const t = this
              , s = []
              , a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)
                    (t.visibleSlides || []).forEach((e => {
                        s.push(e)
                    }
                    ));
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !a)
                            break;
                        s.push(n(e))
                    }
            else
                s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r
                }
            (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
        },
        updateSlidesOffset: function() {
            const e = this
              , t = e.slides
              , s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
            for (let a = 0; a < t.length; a += 1)
                t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this
              , s = t.params
              , {slides: a, rtlTranslate: i, snapGrid: r} = t;
            if (0 === a.length)
                return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e),
            a.forEach((e => {
                e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
            }
            )),
            t.visibleSlidesIndexes = [],
            t.visibleSlides = [];
            let l = s.spaceBetween;
            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
            for (let e = 0; e < a.length; e += 1) {
                const o = a[e];
                let d = o.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
                const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l)
                  , p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l)
                  , u = -(n - d)
                  , m = u + t.slidesSizesGrid[e]
                  , h = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
                (u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size) && (t.visibleSlides.push(o),
                t.visibleSlidesIndexes.push(e),
                a[e].classList.add(s.slideVisibleClass)),
                h && a[e].classList.add(s.slideFullyVisibleClass),
                o.progress = i ? -c : c,
                o.originalProgress = i ? -p : p
            }
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params
              , a = t.maxTranslate() - t.minTranslate();
            let {progress: i, isBeginning: r, isEnd: n, progressLoop: l} = t;
            const o = r
              , d = n;
            if (0 === a)
                i = 0,
                r = !0,
                n = !0;
            else {
                i = (e - t.minTranslate()) / a;
                const s = Math.abs(e - t.minTranslate()) < 1
                  , l = Math.abs(e - t.maxTranslate()) < 1;
                r = s || i <= 0,
                n = l || i >= 1,
                s && (i = 0),
                l && (i = 1)
            }
            if (s.loop) {
                const s = t.getSlideIndexByData(0)
                  , a = t.getSlideIndexByData(t.slides.length - 1)
                  , i = t.slidesGrid[s]
                  , r = t.slidesGrid[a]
                  , n = t.slidesGrid[t.slidesGrid.length - 1]
                  , o = Math.abs(e);
                l = o >= i ? (o - i) / n : (o + n - r) / n,
                l > 1 && (l -= 1)
            }
            Object.assign(t, {
                progress: i,
                progressLoop: l,
                isBeginning: r,
                isEnd: n
            }),
            (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            n && !d && t.emit("reachEnd toEdge"),
            (o && !r || d && !n) && t.emit("fromEdge"),
            t.emit("progress", i)
        },
        updateSlidesClasses: function() {
            const e = this
              , {slides: t, params: s, slidesEl: a, activeIndex: i} = e
              , r = e.virtual && s.virtual.enabled
              , n = e.grid && s.grid && s.grid.rows > 1
              , l = e => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
            let o, d, c;
            if (t.forEach((e => {
                e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
            }
            )),
            r)
                if (s.loop) {
                    let t = i - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t),
                    t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                    o = l(`[data-swiper-slide-index="${t}"]`)
                } else
                    o = l(`[data-swiper-slide-index="${i}"]`);
            else
                n ? (o = t.filter((e => e.column === i))[0],
                c = t.filter((e => e.column === i + 1))[0],
                d = t.filter((e => e.column === i - 1))[0]) : o = t[i];
            o && (o.classList.add(s.slideActiveClass),
            n ? (c && c.classList.add(s.slideNextClass),
            d && d.classList.add(s.slidePrevClass)) : (c = function(e, t) {
                const s = [];
                for (; e.nextElementSibling; ) {
                    const a = e.nextElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a),
                    e = a
                }
                return s
            }(o, `.${s.slideClass}, swiper-slide`)[0],
            s.loop && !c && (c = t[0]),
            c && c.classList.add(s.slideNextClass),
            d = function(e, t) {
                const s = [];
                for (; e.previousElementSibling; ) {
                    const a = e.previousElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a),
                    e = a
                }
                return s
            }(o, `.${s.slideClass}, swiper-slide`)[0],
            s.loop && 0 === !d && (d = t[t.length - 1]),
            d && d.classList.add(s.slidePrevClass))),
            e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            const t = this
              , s = t.rtlTranslate ? t.translate : -t.translate
              , {snapGrid: a, params: i, activeIndex: r, realIndex: n, snapIndex: l} = t;
            let o, d = e;
            const c = e => {
                let s = e - t.virtual.slidesBefore;
                return s < 0 && (s = t.virtual.slides.length + s),
                s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
                s
            }
            ;
            if (void 0 === d && (d = function(e) {
                const {slidesGrid: t, params: s} = e
                  , a = e.rtlTranslate ? e.translate : -e.translate;
                let i;
                for (let e = 0; e < t.length; e += 1)
                    void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
                return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0),
                i
            }(t)),
            a.indexOf(s) >= 0)
                o = a.indexOf(s);
            else {
                const e = Math.min(i.slidesPerGroupSkip, d);
                o = e + Math.floor((d - e) / i.slidesPerGroup)
            }
            if (o >= a.length && (o = a.length - 1),
            d === r && !t.params.loop)
                return void (o !== l && (t.snapIndex = o,
                t.emit("snapIndexChange")));
            if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled)
                return void (t.realIndex = c(d));
            const p = t.grid && i.grid && i.grid.rows > 1;
            let u;
            if (t.virtual && i.virtual.enabled && i.loop)
                u = c(d);
            else if (p) {
                const e = t.slides.filter((e => e.column === d))[0];
                let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
                u = Math.floor(s / i.grid.rows)
            } else if (t.slides[d]) {
                const e = t.slides[d].getAttribute("data-swiper-slide-index");
                u = e ? parseInt(e, 10) : d
            } else
                u = d;
            Object.assign(t, {
                previousSnapIndex: l,
                snapIndex: o,
                previousRealIndex: n,
                realIndex: u,
                previousIndex: r,
                activeIndex: d
            }),
            t.initialized && k(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"),
            t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
            const s = this
              , a = s.params;
            let i = e.closest(`.${a.slideClass}, swiper-slide`);
            !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                !i && e.matches && e.matches(`.${a.slideClass}, swiper-slide`) && (i = e)
            }
            ));
            let r, n = !1;
            if (i)
                for (let e = 0; e < s.slides.length; e += 1)
                    if (s.slides[e] === i) {
                        n = !0,
                        r = e;
                        break
                    }
            if (!i || !n)
                return s.clickedSlide = void 0,
                void (s.clickedIndex = void 0);
            s.clickedSlide = i,
            s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r,
            a.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
    };
    var D = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {params: t, rtlTranslate: s, translate: a, wrapperEl: i} = this;
            if (t.virtualTranslate)
                return s ? -a : a;
            if (t.cssMode)
                return a;
            let r = d(i, e);
            return r += this.cssOverflowAdjustment(),
            s && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            const s = this
              , {rtlTranslate: a, params: i, wrapperEl: r, progress: n} = s;
            let l, o = 0, d = 0;
            s.isHorizontal() ? o = a ? -e : e : d = e,
            i.roundLengths && (o = Math.floor(o),
            d = Math.floor(d)),
            s.previousTranslate = s.translate,
            s.translate = s.isHorizontal() ? o : d,
            i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(),
            r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
            const c = s.maxTranslate() - s.minTranslate();
            l = 0 === c ? 0 : (e - s.minTranslate()) / c,
            l !== n && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            void 0 === a && (a = !0);
            const r = this
              , {params: n, wrapperEl: l} = r;
            if (r.animating && n.preventInteractionOnTransition)
                return !1;
            const o = r.minTranslate()
              , d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e,
            r.updateProgress(c),
            n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t)
                    l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll)
                        return m({
                            swiper: r,
                            targetPosition: -c,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0),
            r.setTranslate(c),
            s && (r.emit("beforeTransitionStart", t, i),
            r.emit("transitionEnd"))) : (r.setTransition(t),
            r.setTranslate(c),
            s && (r.emit("beforeTransitionStart", t, i),
            r.emit("transitionStart")),
            r.animating || (r.animating = !0,
            r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                r.onTranslateToWrapperTransitionEnd = null,
                delete r.onTranslateToWrapperTransitionEnd,
                s && r.emit("transitionEnd"))
            }
            ),
            r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
            !0
        }
    };
    function G(e) {
        let {swiper: t, runCallbacks: s, direction: a, step: i} = e;
        const {activeIndex: r, previousIndex: n} = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
        t.emit(`transition${i}`),
        s && r !== n) {
            if ("reset" === l)
                return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`),
            "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }
    var X = {
        slideTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            "string" == typeof e && (e = parseInt(e, 10));
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: f} = r;
            if (r.animating && l.preventInteractionOnTransition || !f && !a && !i)
                return !1;
            const g = Math.min(r.params.slidesPerGroupSkip, n);
            let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
            v >= o.length && (v = o.length - 1);
            const w = -o[v];
            if (l.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * w)
                      , s = Math.floor(100 * d[e])
                      , a = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate()))
                    return !1;
                if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n)
                    return !1
            }
            let b;
            if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
            r.updateProgress(w),
            b = n > p ? "next" : n < p ? "prev" : "reset",
            u && -w === r.translate || !u && w === r.translate)
                return r.updateActiveIndex(n),
                l.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== l.effect && r.setTranslate(w),
                "reset" !== b && (r.transitionStart(s, b),
                r.transitionEnd(s, b)),
                !1;
            if (l.cssMode) {
                const e = r.isHorizontal()
                  , s = u ? w : -w;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none",
                    r._immediateVirtual = !0),
                    t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
                    requestAnimationFrame(( () => {
                        h[e ? "scrollLeft" : "scrollTop"] = s
                    }
                    ))) : h[e ? "scrollLeft" : "scrollTop"] = s,
                    t && requestAnimationFrame(( () => {
                        r.wrapperEl.style.scrollSnapType = "",
                        r._immediateVirtual = !1
                    }
                    ))
                } else {
                    if (!r.support.smoothScroll)
                        return m({
                            swiper: r,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return r.setTransition(t),
            r.setTranslate(w),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, a),
            r.transitionStart(s, b),
            0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0,
            r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.onSlideToWrapperTransitionEnd = null,
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(s, b))
            }
            ),
            r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
            !0
        },
        slideToLoop: function(e, t, s, a) {
            if (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            "string" == typeof e) {
                e = parseInt(e, 10)
            }
            const i = this
              , r = i.grid && i.params.grid && i.params.grid.rows > 1;
            let n = e;
            if (i.params.loop)
                if (i.virtual && i.params.virtual.enabled)
                    n += i.virtual.slidesBefore;
                else {
                    let e;
                    if (r) {
                        const t = n * i.params.grid.rows;
                        e = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                    } else
                        e = i.getSlideIndexByData(n);
                    const t = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length
                      , {centeredSlides: s} = i.params;
                    let a = i.params.slidesPerView;
                    "auto" === a ? a = i.slidesPerViewDynamic() : (a = Math.ceil(parseFloat(i.params.slidesPerView, 10)),
                    s && a % 2 == 0 && (a += 1));
                    let l = t - e < a;
                    if (s && (l = l || e < Math.ceil(a / 2)),
                    l) {
                        const a = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                        i.loopFix({
                            direction: a,
                            slideTo: !0,
                            activeSlideIndex: "next" === a ? e + 1 : e - t + 1,
                            slideRealIndex: "next" === a ? i.realIndex : void 0
                        })
                    }
                    if (r) {
                        const e = n * i.params.grid.rows;
                        n = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                    } else
                        n = i.getSlideIndexByData(n)
                }
            return requestAnimationFrame(( () => {
                i.slideTo(n, t, s, a)
            }
            )),
            i
        },
        slideNext: function(e, t, s) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            const a = this
              , {enabled: i, params: r, animating: n} = a;
            if (!i)
                return a;
            let l = r.slidesPerGroup;
            "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l
              , d = a.virtual && r.virtual.enabled;
            if (r.loop) {
                if (n && !d && r.loopPreventsSliding)
                    return !1;
                if (a.loopFix({
                    direction: "next"
                }),
                a._clientLeft = a.wrapperEl.clientLeft,
                a.activeIndex === a.slides.length - 1 && r.cssMode)
                    return requestAnimationFrame(( () => {
                        a.slideTo(a.activeIndex + o, e, t, s)
                    }
                    )),
                    !0
            }
            return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        },
        slidePrev: function(e, t, s) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            const a = this
              , {params: i, snapGrid: r, slidesGrid: n, rtlTranslate: l, enabled: o, animating: d} = a;
            if (!o)
                return a;
            const c = a.virtual && i.virtual.enabled;
            if (i.loop) {
                if (d && !c && i.loopPreventsSliding)
                    return !1;
                a.loopFix({
                    direction: "prev"
                }),
                a._clientLeft = a.wrapperEl.clientLeft
            }
            function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(l ? a.translate : -a.translate)
              , m = r.map((e => p(e)));
            let h = r[m.indexOf(u) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                r.forEach(( (t, s) => {
                    u >= t && (e = s)
                }
                )),
                void 0 !== e && (h = r[e > 0 ? e - 1 : e])
            }
            let f = 0;
            if (void 0 !== h && (f = n.indexOf(h),
            f < 0 && (f = a.activeIndex - 1),
            "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1,
            f = Math.max(f, 0))),
            i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return i.loop && 0 === a.activeIndex && i.cssMode ? (requestAnimationFrame(( () => {
                a.slideTo(f, e, t, s)
            }
            )),
            !0) : a.slideTo(f, e, t, s)
        },
        slideReset: function(e, t, s) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === a && (a = .5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r)
              , l = n + Math.floor((r - n) / i.params.slidesPerGroup)
              , o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0),
            r = Math.min(r, i.slidesGrid.length - 1),
            i.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this
              , {params: t, slidesEl: s} = e
              , a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
                if (e.animating)
                    return;
                i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
                t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(),
                r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]),
                l(( () => {
                    e.slideTo(r)
                }
                ))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(),
                r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]),
                l(( () => {
                    e.slideTo(r)
                }
                ))) : e.slideTo(r)
            } else
                e.slideTo(r)
        }
    };
    var H = {
        loopCreate: function(e) {
            const t = this
              , {params: s, slidesEl: a} = t;
            if (!s.loop || t.virtual && t.params.virtual.enabled)
                return;
            const i = () => {
                f(a, `.${s.slideClass}, swiper-slide`).forEach(( (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t)
                }
                ))
            }
              , r = t.grid && s.grid && s.grid.rows > 1
              , n = s.slidesPerGroup * (r ? s.grid.rows : 1)
              , l = t.slides.length % n != 0
              , o = r && t.slides.length % s.grid.rows != 0
              , d = e => {
                for (let a = 0; a < e; a += 1) {
                    const e = t.isElement ? v("swiper-slide", [s.slideBlankClass]) : v("div", [s.slideClass, s.slideBlankClass]);
                    t.slidesEl.append(e)
                }
            }
            ;
            if (l) {
                if (s.loopAddBlankSlides) {
                    d(n - t.slides.length % n),
                    t.recalcSlides(),
                    t.updateSlides()
                } else
                    g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                i()
            } else if (o) {
                if (s.loopAddBlankSlides) {
                    d(s.grid.rows - t.slides.length % s.grid.rows),
                    t.recalcSlides(),
                    t.updateSlides()
                } else
                    g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                i()
            } else
                i();
            t.loopFix({
                slideRealIndex: e,
                direction: s.centeredSlides ? void 0 : "next"
            })
        },
        loopFix: function(e) {
            let {slideRealIndex: t, slideTo: s=!0, direction: a, setTranslate: i, activeSlideIndex: r, byController: n, byMousewheel: l} = void 0 === e ? {} : e;
            const o = this;
            if (!o.params.loop)
                return;
            o.emit("beforeLoopFix");
            const {slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: m} = o
              , {centeredSlides: h} = m;
            if (o.allowSlidePrev = !0,
            o.allowSlideNext = !0,
            o.virtual && m.virtual.enabled)
                return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
                o.allowSlidePrev = c,
                o.allowSlideNext = p,
                void o.emit("loopFix");
            let f = m.slidesPerView;
            "auto" === f ? f = o.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(m.slidesPerView, 10)),
            h && f % 2 == 0 && (f += 1));
            const v = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
            let w = v;
            w % v != 0 && (w += v - w % v),
            w += m.loopAdditionalSlides,
            o.loopedSlides = w;
            const b = o.grid && m.grid && m.grid.rows > 1;
            d.length < f + w ? g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const y = []
              , E = [];
            let x = o.activeIndex;
            void 0 === r ? r = o.getSlideIndex(d.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : x = r;
            const S = "next" === a || !a
              , T = "prev" === a || !a;
            let M = 0
              , C = 0;
            const P = b ? Math.ceil(d.length / m.grid.rows) : d.length
              , L = (b ? d[r].column : r) + (h && void 0 === i ? -f / 2 + .5 : 0);
            if (L < w) {
                M = Math.max(w - L, v);
                for (let e = 0; e < w - L; e += 1) {
                    const t = e - Math.floor(e / P) * P;
                    if (b) {
                        const e = P - t - 1;
                        for (let t = d.length - 1; t >= 0; t -= 1)
                            d[t].column === e && y.push(t)
                    } else
                        y.push(P - t - 1)
                }
            } else if (L + f > P - w) {
                C = Math.max(L - (P - 2 * w), v);
                for (let e = 0; e < C; e += 1) {
                    const t = e - Math.floor(e / P) * P;
                    b ? d.forEach(( (e, s) => {
                        e.column === t && E.push(s)
                    }
                    )) : E.push(t)
                }
            }
            if (o.__preventObserver__ = !0,
            requestAnimationFrame(( () => {
                o.__preventObserver__ = !1
            }
            )),
            T && y.forEach((e => {
                d[e].swiperLoopMoveDOM = !0,
                u.prepend(d[e]),
                d[e].swiperLoopMoveDOM = !1
            }
            )),
            S && E.forEach((e => {
                d[e].swiperLoopMoveDOM = !0,
                u.append(d[e]),
                d[e].swiperLoopMoveDOM = !1
            }
            )),
            o.recalcSlides(),
            "auto" === m.slidesPerView ? o.updateSlides() : b && (y.length > 0 && T || E.length > 0 && S) && o.slides.forEach(( (e, t) => {
                o.grid.updateSlide(t, e, o.slides)
            }
            )),
            m.watchSlidesProgress && o.updateSlidesOffset(),
            s)
                if (y.length > 0 && T) {
                    if (void 0 === t) {
                        const e = o.slidesGrid[x]
                          , t = o.slidesGrid[x + M] - e;
                        l ? o.setTranslate(o.translate - t) : (o.slideTo(x + M, 0, !1, !0),
                        i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t,
                        o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                    } else if (i) {
                        const e = b ? y.length / m.grid.rows : y.length;
                        o.slideTo(o.activeIndex + e, 0, !1, !0),
                        o.touchEventsData.currentTranslate = o.translate
                    }
                } else if (E.length > 0 && S)
                    if (void 0 === t) {
                        const e = o.slidesGrid[x]
                          , t = o.slidesGrid[x - C] - e;
                        l ? o.setTranslate(o.translate - t) : (o.slideTo(x - C, 0, !1, !0),
                        i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t,
                        o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                    } else {
                        const e = b ? E.length / m.grid.rows : E.length;
                        o.slideTo(o.activeIndex - e, 0, !1, !0)
                    }
            if (o.allowSlidePrev = c,
            o.allowSlideNext = p,
            o.controller && o.controller.control && !n) {
                const e = {
                    slideRealIndex: t,
                    direction: a,
                    setTranslate: i,
                    activeSlideIndex: r,
                    byController: !0
                };
                Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
                    !t.destroyed && t.params.loop && t.loopFix({
                        ...e,
                        slideTo: t.params.slidesPerView === m.slidesPerView && s
                    })
                }
                )) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
                    ...e,
                    slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s
                })
            }
            o.emit("loopFix")
        },
        loopDestroy: function() {
            const e = this
              , {params: t, slidesEl: s} = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled)
                return;
            e.recalcSlides();
            const a = [];
            e.slides.forEach((e => {
                const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                a[t] = e
            }
            )),
            e.slides.forEach((e => {
                e.removeAttribute("data-swiper-slide-index")
            }
            )),
            a.forEach((e => {
                s.append(e)
            }
            )),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0)
        }
    };
    function N(e, t, s) {
        const a = r()
          , {params: i} = e
          , n = i.edgeSwipeDetection
          , l = i.edgeSwipeThreshold;
        return !n || !(s <= l || s >= a.innerWidth - l) || "prevent" === n && (t.preventDefault(),
        !0)
    }
    function Y(e) {
        const t = this
          , s = a();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const n = t.touchEventsData;
        if ("pointerdown" === i.type) {
            if (null !== n.pointerId && n.pointerId !== i.pointerId)
                return;
            n.pointerId = i.pointerId
        } else
            "touchstart" === i.type && 1 === i.targetTouches.length && (n.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type)
            return void N(t, i, i.targetTouches[0].pageX);
        const {params: l, touches: d, enabled: c} = t;
        if (!c)
            return;
        if (!l.simulateTouch && "mouse" === i.pointerType)
            return;
        if (t.animating && l.preventInteractionOnTransition)
            return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = i.target;
        if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p))
            return;
        if ("which"in i && 3 === i.which)
            return;
        if ("button"in i && i.button > 0)
            return;
        if (n.isTouched && n.isMoved)
            return;
        const u = !!l.noSwipingClass && "" !== l.noSwipingClass
          , m = i.composedPath ? i.composedPath() : i.path;
        u && i.target && i.target.shadowRoot && m && (p = m[0]);
        const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
          , f = !(!i.target || !i.target.shadowRoot);
        if (l.noSwiping && (f ? function(e, t) {
            return void 0 === t && (t = this),
            function t(s) {
                if (!s || s === a() || s === r())
                    return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
            }(t)
        }(h, p) : p.closest(h)))
            return void (t.allowClick = !0);
        if (l.swipeHandler && !p.closest(l.swipeHandler))
            return;
        d.currentX = i.pageX,
        d.currentY = i.pageY;
        const g = d.currentX
          , v = d.currentY;
        if (!N(t, i, g))
            return;
        Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }),
        d.startX = g,
        d.startY = v,
        n.touchStartTime = o(),
        t.allowClick = !0,
        t.updateSize(),
        t.swipeDirection = void 0,
        l.threshold > 0 && (n.allowThresholdMove = !1);
        let w = !0;
        p.matches(n.focusableElements) && (w = !1,
        "SELECT" === p.nodeName && (n.isTouched = !1)),
        s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== p && s.activeElement.blur();
        const b = w && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !b || p.isContentEditable || i.preventDefault(),
        l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
        t.emit("touchStart", i)
    }
    function B(e) {
        const t = a()
          , s = this
          , i = s.touchEventsData
          , {params: r, touches: n, rtlTranslate: l, enabled: d} = s;
        if (!d)
            return;
        if (!r.simulateTouch && "mouse" === e.pointerType)
            return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent),
        "pointermove" === p.type) {
            if (null !== i.touchId)
                return;
            if (p.pointerId !== i.pointerId)
                return
        }
        if ("touchmove" === p.type) {
            if (c = [...p.changedTouches].filter((e => e.identifier === i.touchId))[0],
            !c || c.identifier !== i.touchId)
                return
        } else
            c = p;
        if (!i.isTouched)
            return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
        const u = c.pageX
          , m = c.pageY;
        if (p.preventedByNestedSwiper)
            return n.startX = u,
            void (n.startY = m);
        if (!s.allowTouchMove)
            return p.target.matches(i.focusableElements) || (s.allowClick = !1),
            void (i.isTouched && (Object.assign(n, {
                startX: u,
                startY: m,
                currentX: u,
                currentY: m
            }),
            i.touchStartTime = o()));
        if (r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate())
                    return i.isTouched = !1,
                    void (i.isMoved = !1)
            } else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate())
                return;
        if (t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements))
            return i.isMoved = !0,
            void (s.allowClick = !1);
        i.allowTouchCallbacks && s.emit("touchMove", p),
        n.previousX = n.currentX,
        n.previousY = n.currentY,
        n.currentX = u,
        n.currentY = m;
        const h = n.currentX - n.startX
          , f = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
            return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI,
            i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", p),
        void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)),
        i.isScrolling)
            return void (i.isTouched = !1);
        if (!i.startMoving)
            return;
        s.allowClick = !1,
        !r.cssMode && p.cancelable && p.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
        let g = s.isHorizontal() ? h : f
          , v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        r.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1),
        v = Math.abs(v) * (l ? 1 : -1)),
        n.diff = g,
        g *= r.touchRatio,
        l && (g = -g,
        v = -v);
        const w = s.touchesDirection;
        s.swipeDirection = g > 0 ? "prev" : "next",
        s.touchesDirection = v > 0 ? "prev" : "next";
        const b = s.params.loop && !r.cssMode
          , y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!i.isMoved) {
            if (b && y && s.loopFix({
                direction: s.swipeDirection
            }),
            i.startTranslate = s.getTranslate(),
            s.setTransition(0),
            s.animating) {
                const e = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                s.wrapperEl.dispatchEvent(e)
            }
            i.allowMomentumBounce = !1,
            !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
            s.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(),
        i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1)
            return Object.assign(n, {
                startX: u,
                startY: m,
                currentX: u,
                currentY: m,
                startTranslate: i.currentTranslate
            }),
            i.loopSwapReset = !0,
            void (i.startTranslate = i.currentTranslate);
        s.emit("sliderMove", p),
        i.isMoved = !0,
        i.currentTranslate = g + i.startTranslate;
        let E = !0
          , x = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (x = 0),
        g > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }),
        i.currentTranslate > s.minTranslate() && (E = !1,
        r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
        }),
        i.currentTranslate < s.maxTranslate() && (E = !1,
        r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** x))),
        E && (p.preventedByNestedSwiper = !0),
        !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
        r.threshold > 0) {
            if (!(Math.abs(g) > r.threshold || i.allowThresholdMove))
                return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
                return i.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                i.currentTranslate = i.startTranslate,
                void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(),
        s.updateSlidesClasses()),
        r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate))
    }
    function R(e) {
        const t = this
          , s = t.touchEventsData;
        let a, i = e;
        i.originalEvent && (i = i.originalEvent);
        if ("touchend" === i.type || "touchcancel" === i.type) {
            if (a = [...i.changedTouches].filter((e => e.identifier === s.touchId))[0],
            !a || a.identifier !== s.touchId)
                return
        } else {
            if (null !== s.touchId)
                return;
            if (i.pointerId !== s.pointerId)
                return;
            a = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type)) {
            if (!(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView)))
                return
        }
        s.pointerId = null,
        s.touchId = null;
        const {params: r, touches: n, rtlTranslate: d, slidesGrid: c, enabled: p} = t;
        if (!p)
            return;
        if (!r.simulateTouch && "mouse" === i.pointerType)
            return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", i),
        s.allowTouchCallbacks = !1,
        !s.isTouched)
            return s.isMoved && r.grabCursor && t.setGrabCursor(!1),
            s.isMoved = !1,
            void (s.startMoving = !1);
        r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = o()
          , m = u - s.touchStartTime;
        if (t.allowClick) {
            const e = i.path || i.composedPath && i.composedPath();
            t.updateClickedSlide(e && e[0] || i.target, e),
            t.emit("tap click", i),
            m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (s.lastClickTime = o(),
        l(( () => {
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset)
            return s.isTouched = !1,
            s.isMoved = !1,
            void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1,
        s.isMoved = !1,
        s.startMoving = !1,
        h = r.followFinger ? d ? t.translate : -t.translate : -s.currentTranslate,
        r.cssMode)
            return;
        if (r.freeMode && r.freeMode.enabled)
            return void t.freeMode.onTouchEnd({
                currentPos: h
            });
        let f = 0
          , g = t.slidesSizesGrid[0];
        for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            void 0 !== c[e + t] ? h >= c[e] && h < c[e + t] && (f = e,
            g = c[e + t] - c[e]) : h >= c[e] && (f = e,
            g = c[c.length - 1] - c[c.length - 2])
        }
        let v = null
          , w = null;
        r.rewind && (t.isBeginning ? w = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
        const b = (h - c[f]) / g
          , y = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (m > r.longSwipesMs) {
            if (!r.longSwipes)
                return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (b >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? v : f + y) : t.slideTo(f)),
            "prev" === t.swipeDirection && (b > 1 - r.longSwipesRatio ? t.slideTo(f + y) : null !== w && b < 0 && Math.abs(b) > r.longSwipesRatio ? t.slideTo(w) : t.slideTo(f))
        } else {
            if (!r.shortSwipes)
                return void t.slideTo(t.activeIndex);
            t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(f + y) : t.slideTo(f) : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : f + y),
            "prev" === t.swipeDirection && t.slideTo(null !== w ? w : f))
        }
    }
    function q() {
        const e = this
          , {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth)
            return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e
          , n = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
        const l = n && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
        e.autoplay.resizeTimeout = setTimeout(( () => {
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }
        ), 500)),
        e.allowSlidePrev = i,
        e.allowSlideNext = a,
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
    function V(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
        e.stopImmediatePropagation())))
    }
    function _() {
        const e = this
          , {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a)
            return;
        let i;
        e.previousTranslate = e.translate,
        e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1)
    }
    function F(e) {
        const t = this;
        z(t, e.target),
        t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
    }
    function j() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0,
        e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
    }
    const W = (e, t) => {
        const s = a()
          , {params: i, el: r, wrapperEl: n, device: l} = e
          , o = !!i.nested
          , d = "on" === t ? "addEventListener" : "removeEventListener"
          , c = t;
        s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o
        }),
        r[d]("touchstart", e.onTouchStart, {
            passive: !1
        }),
        r[d]("pointerdown", e.onTouchStart, {
            passive: !1
        }),
        s[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: o
        }),
        s[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: o
        }),
        s[d]("touchend", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("pointerup", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("pointercancel", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("touchcancel", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("pointerout", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("pointerleave", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("contextmenu", e.onTouchEnd, {
            passive: !0
        }),
        (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0),
        i.cssMode && n[d]("scroll", e.onScroll),
        i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", q, !0) : e[c]("observerUpdate", q, !0),
        r[d]("load", e.onLoad, {
            capture: !0
        })
    }
    ;
    const U = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var K = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function Z(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0]
              , i = s[a];
            "object" == typeof i && null !== i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }),
            "navigation" === a && e[a] && e[a].enabled && !e[a].prevEl && !e[a].nextEl && (e[a].auto = !0),
            ["pagination", "scrollbar"].indexOf(a) >= 0 && e[a] && e[a].enabled && !e[a].el && (e[a].auto = !0),
            a in e && "enabled"in i ? ("object" != typeof e[a] || "enabled"in e[a] || (e[a].enabled = !0),
            e[a] || (e[a] = {
                enabled: !1
            }),
            p(t, s)) : p(t, s)) : p(t, s)
        }
    }
    const Q = {
        eventsEmitter: I,
        update: O,
        translate: D,
        transition: {
            setTransition: function(e, t) {
                const s = this;
                s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`,
                s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""),
                s.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                const s = this
                  , {params: a} = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(),
                G({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                const s = this
                  , {params: a} = s;
                s.animating = !1,
                a.cssMode || (s.setTransition(0),
                G({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        },
        slide: X,
        loop: H,
        grabCursor: {
            setGrabCursor: function(e) {
                const t = this;
                if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                    return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0),
                s.style.cursor = "move",
                s.style.cursor = e ? "grabbing" : "grab",
                t.isElement && requestAnimationFrame(( () => {
                    t.__preventObserver__ = !1
                }
                ))
            },
            unsetGrabCursor: function() {
                const e = this;
                e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
                e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
                e.isElement && requestAnimationFrame(( () => {
                    e.__preventObserver__ = !1
                }
                )))
            }
        },
        events: {
            attachEvents: function() {
                const e = this
                  , {params: t} = e;
                e.onTouchStart = Y.bind(e),
                e.onTouchMove = B.bind(e),
                e.onTouchEnd = R.bind(e),
                e.onDocumentTouchStart = j.bind(e),
                t.cssMode && (e.onScroll = _.bind(e)),
                e.onClick = V.bind(e),
                e.onLoad = F.bind(e),
                W(e, "on")
            },
            detachEvents: function() {
                W(this, "off")
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                const e = this
                  , {realIndex: t, initialized: s, params: a, el: i} = e
                  , r = a.breakpoints;
                if (!r || r && 0 === Object.keys(r).length)
                    return;
                const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                if (!n || e.currentBreakpoint === n)
                    return;
                const l = (n in r ? r[n] : void 0) || e.originalParams
                  , o = U(e, a)
                  , d = U(e, l)
                  , c = a.enabled;
                o && !d ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`),
                e.emitContainerClasses()) : !o && d && (i.classList.add(`${a.containerModifierClass}grid`),
                (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === a.grid.fill) && i.classList.add(`${a.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach((t => {
                    if (void 0 === l[t])
                        return;
                    const s = a[t] && a[t].enabled
                      , i = l[t] && l[t].enabled;
                    s && !i && e[t].disable(),
                    !s && i && e[t].enable()
                }
                ));
                const u = l.direction && l.direction !== a.direction
                  , m = a.loop && (l.slidesPerView !== a.slidesPerView || u)
                  , h = a.loop;
                u && s && e.changeDirection(),
                p(e.params, l);
                const f = e.params.enabled
                  , g = e.params.loop;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }),
                c && !f ? e.disable() : !c && f && e.enable(),
                e.currentBreakpoint = n,
                e.emit("_beforeBreakpoint", l),
                s && (m ? (e.loopDestroy(),
                e.loopCreate(t),
                e.updateSlides()) : !h && g ? (e.loopCreate(t),
                e.updateSlides()) : h && !g && e.loopDestroy()),
                e.emit("breakpoint", l)
            },
            getBreakpoint: function(e, t, s) {
                if (void 0 === t && (t = "window"),
                !e || "container" === t && !s)
                    return;
                let a = !1;
                const i = r()
                  , n = "window" === t ? i.innerHeight : s.clientHeight
                  , l = Object.keys(e).map((e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: n * t,
                            point: e
                        }
                    }
                    return {
                        value: e,
                        point: e
                    }
                }
                ));
                l.sort(( (e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < l.length; e += 1) {
                    const {point: r, value: n} = l[e];
                    "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                }
                return a || "max"
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this
                  , {isLocked: t, params: s} = e
                  , {slidesOffsetBefore: a} = s;
                if (a) {
                    const t = e.slides.length - 1
                      , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s
                } else
                    e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        },
        classes: {
            addClasses: function() {
                const e = this
                  , {classNames: t, params: s, rtl: a, el: i, device: r} = e
                  , n = function(e, t) {
                    const s = [];
                    return e.forEach((e => {
                        "object" == typeof e ? Object.keys(e).forEach((a => {
                            e[a] && s.push(t + a)
                        }
                        )) : "string" == typeof e && s.push(t + e)
                    }
                    )),
                    s
                }(["initialized", s.direction, {
                    "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                    autoheight: s.autoHeight
                }, {
                    rtl: a
                }, {
                    grid: s.grid && s.grid.rows > 1
                }, {
                    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                }, {
                    android: r.android
                }, {
                    ios: r.ios
                }, {
                    "css-mode": s.cssMode
                }, {
                    centered: s.cssMode && s.centeredSlides
                }, {
                    "watch-progress": s.watchSlidesProgress
                }], s.containerModifierClass);
                t.push(...n),
                i.classList.add(...t),
                e.emitContainerClasses()
            },
            removeClasses: function() {
                const {el: e, classNames: t} = this;
                e.classList.remove(...t),
                this.emitContainerClasses()
            }
        }
    }
      , J = {};
    class ee {
        constructor() {
            let e, t;
            for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
                i[r] = arguments[r];
            1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e,t] = i,
            t || (t = {}),
            t = p({}, t),
            e && !t.el && (t.el = e);
            const n = a();
            if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
                const e = [];
                return n.querySelectorAll(t.el).forEach((s => {
                    const a = p({}, t, {
                        el: s
                    });
                    e.push(new ee(a))
                }
                )),
                e
            }
            const l = this;
            l.__swiper__ = !0,
            l.support = P(),
            l.device = L({
                userAgent: t.userAgent
            }),
            l.browser = A(),
            l.eventsListeners = {},
            l.eventsAnyListeners = [],
            l.modules = [...l.__modules__],
            t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
            const o = {};
            l.modules.forEach((e => {
                e({
                    params: t,
                    swiper: l,
                    extendParams: Z(t, o),
                    on: l.on.bind(l),
                    once: l.once.bind(l),
                    off: l.off.bind(l),
                    emit: l.emit.bind(l)
                })
            }
            ));
            const d = p({}, K, o);
            return l.params = p({}, d, J, t),
            l.originalParams = p({}, l.params),
            l.passedParams = p({}, t),
            l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
                l.on(e, l.params.on[e])
            }
            )),
            l.params && l.params.onAny && l.onAny(l.params.onAny),
            Object.assign(l, {
                enabled: l.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === l.params.direction,
                isVertical: () => "vertical" === l.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: l.params.allowSlideNext,
                allowSlidePrev: l.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: l.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: !0,
                allowTouchMove: l.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            l.emit("_swiper"),
            l.params.init && l.init(),
            l
        }
        getDirectionLabel(e) {
            return this.isHorizontal() ? e : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            }[e]
        }
        getSlideIndex(e) {
            const {slidesEl: t, params: s} = this
              , a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
            return y(e) - a
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
            const {slidesEl: e, params: t} = this;
            this.slides = f(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate()
              , i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = [];
            e.slides.forEach((s => {
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }),
                e.emit("_slideClass", s, a)
            }
            )),
            e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"),
            void 0 === t && (t = !1);
            const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
            let o = 1;
            if ("number" == typeof s.slidesPerView)
                return s.slidesPerView;
            if (s.centeredSlides) {
                let e, t = a[l] ? a[l].swiperSlideSize : 0;
                for (let s = l + 1; s < a.length; s += 1)
                    a[s] && !e && (t += a[s].swiperSlideSize,
                    o += 1,
                    t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1)
                    a[s] && !e && (t += a[s].swiperSlideSize,
                    o += 1,
                    t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                }
            else
                for (let e = l - 1; e >= 0; e -= 1) {
                    i[l] - i[e] < n && (o += 1)
                }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed)
                return;
            const {snapGrid: t, params: s} = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let i;
            if (s.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                t.complete && z(e, t)
            }
            )),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            s.freeMode && s.freeMode.enabled && !s.cssMode)
                a(),
                s.autoHeight && e.updateAutoHeight();
            else {
                if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                    const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                    i = e.slideTo(t.length - 1, 0, !1, !0)
                } else
                    i = e.slideTo(e.activeIndex, 0, !1, !0);
                i || a()
            }
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this
              , a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
            e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            s.params.direction = e,
            s.slides.forEach((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }
            )),
            s.emit("changeDirection"),
            t && s.update()),
            s
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e,
            t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
            t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "ltr"),
            t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted)
                return !0;
            let s = e || t.params.el;
            if ("string" == typeof s && (s = document.querySelector(s)),
            !s)
                return !1;
            s.swiper = t,
            s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
            const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let i = ( () => {
                if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                    return s.shadowRoot.querySelector(a())
                }
                return f(s, a())[0]
            }
            )();
            return !i && t.params.createElements && (i = v("div", t.params.wrapperClass),
            s.append(i),
            f(s, `.${t.params.slideClass}`).forEach((e => {
                i.append(e)
            }
            ))),
            Object.assign(t, {
                el: s,
                wrapperEl: i,
                slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
                hostEl: t.isElement ? s.parentNode.host : s,
                mounted: !0,
                rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
                wrongRTL: "-webkit-box" === b(i, "display")
            }),
            !0
        }
        init(e) {
            const t = this;
            if (t.initialized)
                return t;
            if (!1 === t.mount(e))
                return t;
            t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
            const s = [...t.el.querySelectorAll('[loading="lazy"]')];
            return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            s.forEach((e => {
                e.complete ? z(t, e) : e.addEventListener("load", (e => {
                    z(t, e.target)
                }
                ))
            }
            )),
            k(t),
            t.initialized = !0,
            k(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
        }
        destroy(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            const s = this
              , {params: a, el: i, wrapperEl: r, slides: n} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
            s.initialized = !1,
            s.detachEvents(),
            a.loop && s.loopDestroy(),
            t && (s.removeClasses(),
            i.removeAttribute("style"),
            r.removeAttribute("style"),
            n && n.length && n.forEach((e => {
                e.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass),
                e.removeAttribute("style"),
                e.removeAttribute("data-swiper-slide-index")
            }
            ))),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            }
            )),
            !1 !== e && (s.el.swiper = null,
            function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }
                ))
            }(s)),
            s.destroyed = !0),
            null
        }
        static extendDefaults(e) {
            p(J, e)
        }
        static get extendedDefaults() {
            return J
        }
        static get defaults() {
            return K
        }
        static installModule(e) {
            ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
            const t = ee.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => ee.installModule(e))),
            ee) : (ee.installModule(e),
            ee)
        }
    }
    function te(e, t, s, a) {
        return e.params.createElements && Object.keys(a).forEach((i => {
            if (!s[i] && !0 === s.auto) {
                let r = f(e.el, `.${a[i]}`)[0];
                r || (r = v("div", a[i]),
                r.className = a[i],
                e.el.append(r)),
                s[i] = r,
                t[i] = r
            }
        }
        )),
        s
    }
    function se(e) {
        return void 0 === e && (e = ""),
        `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
    }
    function ae(e) {
        const t = this
          , {params: s, slidesEl: a} = t;
        s.loop && t.loopDestroy();
        const i = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e,
                a.append(t.children[0]),
                t.innerHTML = ""
            } else
                a.append(e)
        }
        ;
        if ("object" == typeof e && "length"in e)
            for (let t = 0; t < e.length; t += 1)
                e[t] && i(e[t]);
        else
            i(e);
        t.recalcSlides(),
        s.loop && t.loopCreate(),
        s.observer && !t.isElement || t.update()
    }
    function ie(e) {
        const t = this
          , {params: s, activeIndex: a, slidesEl: i} = t;
        s.loop && t.loopDestroy();
        let r = a + 1;
        const n = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e,
                i.prepend(t.children[0]),
                t.innerHTML = ""
            } else
                i.prepend(e)
        }
        ;
        if ("object" == typeof e && "length"in e) {
            for (let t = 0; t < e.length; t += 1)
                e[t] && n(e[t]);
            r = a + e.length
        } else
            n(e);
        t.recalcSlides(),
        s.loop && t.loopCreate(),
        s.observer && !t.isElement || t.update(),
        t.slideTo(r, 0, !1)
    }
    function re(e, t) {
        const s = this
          , {params: a, activeIndex: i, slidesEl: r} = s;
        let n = i;
        a.loop && (n -= s.loopedSlides,
        s.loopDestroy(),
        s.recalcSlides());
        const l = s.slides.length;
        if (e <= 0)
            return void s.prependSlide(t);
        if (e >= l)
            return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides[t];
            e.remove(),
            d.unshift(e)
        }
        if ("object" == typeof t && "length"in t) {
            for (let e = 0; e < t.length; e += 1)
                t[e] && r.append(t[e]);
            o = n > e ? n + t.length : n
        } else
            r.append(t);
        for (let e = 0; e < d.length; e += 1)
            r.append(d[e]);
        s.recalcSlides(),
        a.loop && s.loopCreate(),
        a.observer && !s.isElement || s.update(),
        a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }
    function ne(e) {
        const t = this
          , {params: s, activeIndex: a} = t;
        let i = a;
        s.loop && (i -= t.loopedSlides,
        t.loopDestroy());
        let r, n = i;
        if ("object" == typeof e && "length"in e) {
            for (let s = 0; s < e.length; s += 1)
                r = e[s],
                t.slides[r] && t.slides[r].remove(),
                r < n && (n -= 1);
            n = Math.max(n, 0)
        } else
            r = e,
            t.slides[r] && t.slides[r].remove(),
            r < n && (n -= 1),
            n = Math.max(n, 0);
        t.recalcSlides(),
        s.loop && t.loopCreate(),
        s.observer && !t.isElement || t.update(),
        s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
    }
    function le() {
        const e = this
          , t = [];
        for (let s = 0; s < e.slides.length; s += 1)
            t.push(s);
        e.removeSlide(t)
    }
    function oe(e) {
        const {effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d} = e;
        let c;
        a("beforeInit", ( () => {
            if (s.params.effect !== t)
                return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`),
            l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e),
            Object.assign(s.originalParams, e)
        }
        )),
        a("setTranslate", ( () => {
            s.params.effect === t && i()
        }
        )),
        a("setTransition", ( (e, a) => {
            s.params.effect === t && r(a)
        }
        )),
        a("transitionEnd", ( () => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows)
                    return;
                s.slides.forEach((e => {
                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                }
                )),
                o()
            }
        }
        )),
        a("virtualUpdate", ( () => {
            s.params.effect === t && (s.slides.length || (c = !0),
            requestAnimationFrame(( () => {
                c && s.slides && s.slides.length && (i(),
                c = !1)
            }
            )))
        }
        ))
    }
    function de(e, t) {
        const s = h(t);
        return s !== t && (s.style.backfaceVisibility = "hidden",
        s.style["-webkit-backface-visibility"] = "hidden"),
        s
    }
    function ce(e) {
        let {swiper: t, duration: s, transformElements: a, allSlides: i} = e;
        const {activeIndex: r} = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a : a.filter((e => {
                const s = e.classList.contains("swiper-slide-transform") ? (e => {
                    if (!e.parentElement)
                        return t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0];
                    return e.parentElement
                }
                )(e) : e;
                return t.getSlideIndex(s) === r
            }
            )),
            e.forEach((e => {
                x(e, ( () => {
                    if (s)
                        return;
                    if (!t || t.destroyed)
                        return;
                    s = !0,
                    t.animating = !1;
                    const e = new window.CustomEvent("transitionend",{
                        bubbles: !0,
                        cancelable: !0
                    });
                    t.wrapperEl.dispatchEvent(e)
                }
                ))
            }
            ))
        }
    }
    function pe(e, t, s) {
        const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`
          , i = h(t);
        let r = i.querySelector(`.${a.split(" ").join(".")}`);
        return r || (r = v("div", a.split(" ")),
        i.append(r)),
        r
    }
    Object.keys(Q).forEach((e => {
        Object.keys(Q[e]).forEach((t => {
            ee.prototype[t] = Q[e][t]
        }
        ))
    }
    )),
    ee.use([function(e) {
        let {swiper: t, on: s, emit: a} = e;
        const i = r();
        let n = null
          , l = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (a("beforeResize"),
            a("resize"))
        }
          , d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange")
        }
        ;
        s("init", ( () => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                l = i.requestAnimationFrame(( () => {
                    const {width: s, height: a} = t;
                    let i = s
                      , r = a;
                    e.forEach((e => {
                        let {contentBoxSize: s, contentRect: a, target: n} = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize,
                        r = a ? a.height : (s[0] || s).blockSize)
                    }
                    )),
                    i === s && r === a || o()
                }
                ))
            }
            )),
            n.observe(t.el)) : (i.addEventListener("resize", o),
            i.addEventListener("orientationchange", d))
        }
        )),
        s("destroy", ( () => {
            l && i.cancelAnimationFrame(l),
            n && n.unobserve && t.el && (n.unobserve(t.el),
            n = null),
            i.removeEventListener("resize", o),
            i.removeEventListener("orientationchange", d)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = []
          , l = r()
          , o = function(e, s) {
            void 0 === s && (s = {});
            const a = new (l.MutationObserver || l.WebkitMutationObserver)((e => {
                if (t.__preventObserver__)
                    return;
                if (1 === e.length)
                    return void i("observerUpdate", e[0]);
                const s = function() {
                    i("observerUpdate", e[0])
                };
                l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0)
            }
            ));
            a.observe(e, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData
            }),
            n.push(a)
        };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        a("init", ( () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = E(t.hostEl);
                    for (let t = 0; t < e.length; t += 1)
                        o(e[t])
                }
                o(t.hostEl, {
                    childList: t.params.observeSlideChildren
                }),
                o(t.wrapperEl, {
                    attributes: !1
                })
            }
        }
        )),
        a("destroy", ( () => {
            n.forEach((e => {
                e.disconnect()
            }
            )),
            n.splice(0, n.length)
        }
        ))
    }
    ]);
    const ue = [function(e) {
        let t, {swiper: s, extendParams: i, on: r, emit: n} = e;
        i({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        const l = a();
        s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        const o = l.createElement("div");
        function d(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t])
                return s.virtual.cache[t];
            let i;
            return a.renderSlide ? (i = a.renderSlide.call(s, e, t),
            "string" == typeof i && (o.innerHTML = i,
            i = o.children[0])) : i = s.isElement ? v("swiper-slide") : v("div", s.params.slideClass),
            i.setAttribute("data-swiper-slide-index", t),
            a.renderSlide || (i.innerHTML = e),
            a.cache && (s.virtual.cache[t] = i),
            i
        }
        function c(e) {
            const {slidesPerView: t, slidesPerGroup: a, centeredSlides: i, loop: r} = s.params
              , {addSlidesBefore: l, addSlidesAfter: o} = s.params.virtual
              , {from: c, to: p, slides: u, slidesGrid: m, offset: h} = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const g = s.activeIndex || 0;
            let v, w, b;
            v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top",
            i ? (w = Math.floor(t / 2) + a + o,
            b = Math.floor(t / 2) + a + l) : (w = t + (a - 1) + o,
            b = (r ? t : a) + l);
            let y = g - b
              , E = g + w;
            r || (y = Math.max(y, 0),
            E = Math.min(E, u.length - 1));
            let x = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);
            function S() {
                s.updateSlides(),
                s.updateProgress(),
                s.updateSlidesClasses(),
                n("virtualUpdate")
            }
            if (r && g >= b ? (y -= b,
            i || (x += s.slidesGrid[0])) : r && g < b && (y = -b,
            i && (x += s.slidesGrid[0])),
            Object.assign(s.virtual, {
                from: y,
                to: E,
                offset: x,
                slidesGrid: s.slidesGrid,
                slidesBefore: b,
                slidesAfter: w
            }),
            c === y && p === E && !e)
                return s.slidesGrid !== m && x !== h && s.slides.forEach((e => {
                    e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px"
                }
                )),
                s.updateProgress(),
                void n("virtualUpdate");
            if (s.params.virtual.renderExternal)
                return s.params.virtual.renderExternal.call(s, {
                    offset: x,
                    from: y,
                    to: E,
                    slides: function() {
                        const e = [];
                        for (let t = y; t <= E; t += 1)
                            e.push(u[t]);
                        return e
                    }()
                }),
                void (s.params.virtual.renderExternalUpdate ? S() : n("virtualUpdate"));
            const T = []
              , M = []
              , C = e => {
                let t = e;
                return e < 0 ? t = u.length + e : t >= u.length && (t -= u.length),
                t
            }
            ;
            if (e)
                s.slides.filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e => {
                    e.remove()
                }
                ));
            else
                for (let e = c; e <= p; e += 1)
                    if (e < y || e > E) {
                        const t = C(e);
                        s.slides.filter((e => e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e => {
                            e.remove()
                        }
                        ))
                    }
            const P = r ? -u.length : 0
              , L = r ? 2 * u.length : u.length;
            for (let t = P; t < L; t += 1)
                if (t >= y && t <= E) {
                    const s = C(t);
                    void 0 === p || e ? M.push(s) : (t > p && M.push(s),
                    t < c && T.push(s))
                }
            if (M.forEach((e => {
                s.slidesEl.append(d(u[e], e))
            }
            )),
            r)
                for (let e = T.length - 1; e >= 0; e -= 1) {
                    const t = T[e];
                    s.slidesEl.prepend(d(u[t], t))
                }
            else
                T.sort(( (e, t) => t - e)),
                T.forEach((e => {
                    s.slidesEl.prepend(d(u[e], e))
                }
                ));
            f(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
                e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px"
            }
            )),
            S()
        }
        r("beforeInit", ( () => {
            if (!s.params.virtual.enabled)
                return;
            let e;
            if (void 0 === s.passedParams.virtual.slides) {
                const t = [...s.slidesEl.children].filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`)));
                t && t.length && (s.virtual.slides = [...t],
                e = !0,
                t.forEach(( (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t),
                    s.virtual.cache[t] = e,
                    e.remove()
                }
                )))
            }
            e || (s.virtual.slides = s.params.virtual.slides),
            s.classNames.push(`${s.params.containerModifierClass}virtual`),
            s.params.watchSlidesProgress = !0,
            s.originalParams.watchSlidesProgress = !0,
            c()
        }
        )),
        r("setTranslate", ( () => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t),
            t = setTimeout(( () => {
                c()
            }
            ), 100)) : c())
        }
        )),
        r("init update resize", ( () => {
            s.params.virtual.enabled && s.params.cssMode && u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        }
        )),
        Object.assign(s.virtual, {
            appendSlide: function(e) {
                if ("object" == typeof e && "length"in e)
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && s.virtual.slides.push(e[t]);
                else
                    s.virtual.slides.push(e);
                c(!0)
            },
            prependSlide: function(e) {
                const t = s.activeIndex;
                let a = t + 1
                  , i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length,
                    i = e.length
                } else
                    s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache
                      , t = {};
                    Object.keys(e).forEach((s => {
                        const a = e[s]
                          , r = a.getAttribute("data-swiper-slide-index");
                        r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i),
                        t[parseInt(s, 10) + i] = a
                    }
                    )),
                    s.virtual.cache = t
                }
                c(!0),
                s.slideTo(a, 0)
            },
            removeSlide: function(e) {
                if (null == e)
                    return;
                let t = s.activeIndex;
                if (Array.isArray(e))
                    for (let a = e.length - 1; a >= 0; a -= 1)
                        s.params.virtual.cache && (delete s.virtual.cache[e[a]],
                        Object.keys(s.virtual.cache).forEach((t => {
                            t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t],
                            s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1),
                            delete s.virtual.cache[t])
                        }
                        ))),
                        s.virtual.slides.splice(e[a], 1),
                        e[a] < t && (t -= 1),
                        t = Math.max(t, 0);
                else
                    s.params.virtual.cache && (delete s.virtual.cache[e],
                    Object.keys(s.virtual.cache).forEach((t => {
                        t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t],
                        s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1),
                        delete s.virtual.cache[t])
                    }
                    ))),
                    s.virtual.slides.splice(e, 1),
                    e < t && (t -= 1),
                    t = Math.max(t, 0);
                c(!0),
                s.slideTo(t, 0)
            },
            removeAllSlides: function() {
                s.virtual.slides = [],
                s.params.virtual.cache && (s.virtual.cache = {}),
                c(!0),
                s.slideTo(0, 0)
            },
            update: c
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: i, emit: n} = e;
        const l = a()
          , o = r();
        function d(e) {
            if (!t.enabled)
                return;
            const {rtlTranslate: s} = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode
              , r = t.params.keyboard.pageUpDown
              , d = r && 33 === i
              , c = r && 34 === i
              , p = 37 === i
              , u = 39 === i
              , m = 38 === i
              , h = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || d))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
                    let e = !1;
                    if (E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === E(t.el, `.${t.params.slideActiveClass}`).length)
                        return;
                    const a = t.el
                      , i = a.clientWidth
                      , r = a.clientHeight
                      , n = o.innerWidth
                      , l = o.innerHeight
                      , d = w(a);
                    s && (d.left -= a.scrollLeft);
                    const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1])
                                continue;
                            e = !0
                        }
                    }
                    if (!e)
                        return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                ((c || u) && !s || (d || p) && s) && t.slideNext(),
                ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || m || h) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (c || h) && t.slideNext(),
                (d || m) && t.slidePrev()),
                n("keyPress", i)
            }
        }
        function c() {
            t.keyboard.enabled || (l.addEventListener("keydown", d),
            t.keyboard.enabled = !0)
        }
        function p() {
            t.keyboard.enabled && (l.removeEventListener("keydown", d),
            t.keyboard.enabled = !1)
        }
        t.keyboard = {
            enabled: !1
        },
        s({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }),
        i("init", ( () => {
            t.params.keyboard.enabled && c()
        }
        )),
        i("destroy", ( () => {
            t.keyboard.enabled && p()
        }
        )),
        Object.assign(t.keyboard, {
            enable: c,
            disable: p
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        let d;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: "swiper-no-mousewheel"
            }
        }),
        t.mousewheel = {
            enabled: !1
        };
        let c, p = o();
        const u = [];
        function m() {
            t.enabled && (t.mouseEntered = !0)
        }
        function h() {
            t.enabled && (t.mouseEntered = !1)
        }
        function f(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && o() - p < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && o() - p < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
            i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
            i("scroll", e.raw)),
            p = (new n.Date).getTime(),
            !1)))
        }
        function g(e) {
            let s = e
              , a = !0;
            if (!t.enabled)
                return;
            if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))
                return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.el;
            "container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget));
            const p = n && n.contains(s.target);
            if (!t.mouseEntered && !p && !r.releaseOnEdges)
                return !0;
            s.originalEvent && (s = s.originalEvent);
            let m = 0;
            const h = t.rtlTranslate ? -1 : 1
              , g = function(e) {
                let t = 0
                  , s = 0
                  , a = 0
                  , i = 0;
                return "detail"in e && (s = e.detail),
                "wheelDelta"in e && (s = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (s = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = s,
                s = 0),
                a = 10 * t,
                i = 10 * s,
                "deltaY"in e && (i = e.deltaY),
                "deltaX"in e && (a = e.deltaX),
                e.shiftKey && !a && (a = i,
                i = 0),
                (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40,
                i *= 40) : (a *= 800,
                i *= 800)),
                a && !t && (t = a < 1 ? -1 : 1),
                i && !s && (s = i < 1 ? -1 : 1),
                {
                    spinX: t,
                    spinY: s,
                    pixelX: a,
                    pixelY: i
                }
            }(s);
            if (r.forceToAxis)
                if (t.isHorizontal()) {
                    if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY)))
                        return !0;
                    m = -g.pixelX * h
                } else {
                    if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX)))
                        return !0;
                    m = -g.pixelY
                }
            else
                m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
            if (0 === m)
                return !0;
            r.invert && (m = -m);
            let v = t.getTranslate() + m * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()),
            a && t.params.nested && s.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled) {
                const e = {
                    time: o(),
                    delta: Math.abs(m),
                    direction: Math.sign(m)
                }
                  , a = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
                if (!a) {
                    c = void 0;
                    let n = t.getTranslate() + m * r.sensitivity;
                    const o = t.isBeginning
                      , p = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()),
                    n <= t.maxTranslate() && (n = t.maxTranslate()),
                    t.setTransition(0),
                    t.setTranslate(n),
                    t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses(),
                    (!o && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(),
                    t.params.loop && t.loopFix({
                        direction: e.direction < 0 ? "next" : "prev",
                        byMousewheel: !0
                    }),
                    t.params.freeMode.sticky) {
                        clearTimeout(d),
                        d = void 0,
                        u.length >= 15 && u.shift();
                        const s = u.length ? u[u.length - 1] : void 0
                          , a = u[0];
                        if (u.push(e),
                        s && (e.delta > s.delta || e.direction !== s.direction))
                            u.splice(0);
                        else if (u.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = m > 0 ? .8 : .2;
                            c = e,
                            u.splice(0),
                            d = l(( () => {
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }
                            ), 0)
                        }
                        d || (d = l(( () => {
                            c = e,
                            u.splice(0),
                            t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }
                        ), 500))
                    }
                    if (a || i("scroll", s),
                    t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
                    r.releaseOnEdges && (n === t.minTranslate() || n === t.maxTranslate()))
                        return !0
                }
            } else {
                const s = {
                    time: o(),
                    delta: Math.abs(m),
                    direction: Math.sign(m),
                    raw: e
                };
                u.length >= 2 && u.shift();
                const a = u.length ? u[u.length - 1] : void 0;
                if (u.push(s),
                a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s),
                function(e) {
                    const s = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && s.releaseOnEdges)
                            return !0
                    } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                        return !0;
                    return !1
                }(s))
                    return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1,
            !1
        }
        function v(e) {
            let s = t.el;
            "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)),
            s[e]("mouseenter", m),
            s[e]("mouseleave", h),
            s[e]("wheel", g)
        }
        function w() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g),
            !0) : !t.mousewheel.enabled && (v("addEventListener"),
            t.mousewheel.enabled = !0,
            !0)
        }
        function b() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g),
            !0) : !!t.mousewheel.enabled && (v("removeEventListener"),
            t.mousewheel.enabled = !1,
            !0)
        }
        a("init", ( () => {
            !t.params.mousewheel.enabled && t.params.cssMode && b(),
            t.params.mousewheel.enabled && w()
        }
        )),
        a("destroy", ( () => {
            t.params.cssMode && w(),
            t.mousewheel.enabled && b()
        }
        )),
        Object.assign(t.mousewheel, {
            enable: w,
            disable: b
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }),
        t.navigation = {
            nextEl: null,
            prevEl: null
        };
        const r = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));
        function n(e) {
            let s;
            return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e),
            s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
            t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))),
            e && !s ? e : s)
        }
        function l(e, s) {
            const a = t.params.navigation;
            (e = r(e)).forEach((e => {
                e && (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")),
                "BUTTON" === e.tagName && (e.disabled = s),
                t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass))
            }
            ))
        }
        function o() {
            const {nextEl: e, prevEl: s} = t.navigation;
            if (t.params.loop)
                return l(s, !1),
                void l(e, !1);
            l(s, t.isBeginning && !t.params.rewind),
            l(e, t.isEnd && !t.params.rewind)
        }
        function d(e) {
            e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(),
            i("navigationPrev"))
        }
        function c(e) {
            e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(),
            i("navigationNext"))
        }
        function p() {
            const e = t.params.navigation;
            if (t.params.navigation = te(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            !e.nextEl && !e.prevEl)
                return;
            let s = n(e.nextEl)
              , a = n(e.prevEl);
            Object.assign(t.navigation, {
                nextEl: s,
                prevEl: a
            }),
            s = r(s),
            a = r(a);
            const i = (s, a) => {
                s && s.addEventListener("click", "next" === a ? c : d),
                !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
            }
            ;
            s.forEach((e => i(e, "next"))),
            a.forEach((e => i(e, "prev")))
        }
        function u() {
            let {nextEl: e, prevEl: s} = t.navigation;
            e = r(e),
            s = r(s);
            const a = (e, s) => {
                e.removeEventListener("click", "next" === s ? c : d),
                e.classList.remove(...t.params.navigation.disabledClass.split(" "))
            }
            ;
            e.forEach((e => a(e, "next"))),
            s.forEach((e => a(e, "prev")))
        }
        a("init", ( () => {
            !1 === t.params.navigation.enabled ? m() : (p(),
            o())
        }
        )),
        a("toEdge fromEdge lock unlock", ( () => {
            o()
        }
        )),
        a("destroy", ( () => {
            u()
        }
        )),
        a("enable disable", ( () => {
            let {nextEl: e, prevEl: s} = t.navigation;
            e = r(e),
            s = r(s),
            t.enabled ? o() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        }
        )),
        a("click", ( (e, s) => {
            let {nextEl: a, prevEl: n} = t.navigation;
            a = r(a),
            n = r(n);
            const l = s.target;
            if (t.params.navigation.hideOnClick && !n.includes(l) && !a.includes(l)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l)))
                    return;
                let e;
                a.length ? e = a[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
                i(!0 === e ? "navigationShow" : "navigationHide"),
                [...a, ...n].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
            }
        }
        ));
        const m = () => {
            t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),
            u()
        }
        ;
        Object.assign(t.navigation, {
            enable: () => {
                t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),
                p(),
                o()
            }
            ,
            disable: m,
            update: o,
            init: p,
            destroy: u
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const r = "swiper-pagination";
        let n;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }),
        t.pagination = {
            el: null,
            bullets: []
        };
        let l = 0;
        const o = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));
        function d() {
            return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }
        function c(e, s) {
            const {bulletActiveClass: a} = t.params.pagination;
            e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${a}-${s}`),
            (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${s}-${s}`))
        }
        function p(e) {
            const s = e.target.closest(se(t.params.pagination.bulletClass));
            if (!s)
                return;
            e.preventDefault();
            const a = y(s) * t.params.slidesPerGroup;
            if (t.params.loop) {
                if (t.realIndex === a)
                    return;
                t.slideToLoop(a)
            } else
                t.slideTo(a)
        }
        function u() {
            const e = t.rtl
              , s = t.params.pagination;
            if (d())
                return;
            let a, r, p = t.pagination.el;
            p = o(p);
            const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
              , m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (r = t.previousRealIndex || 0,
            a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex,
            r = t.previousSnapIndex) : (r = t.previousIndex || 0,
            a = t.activeIndex || 0),
            "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const i = t.pagination.bullets;
                let o, d, u;
                if (s.dynamicBullets && (n = S(i[0], t.isHorizontal() ? "width" : "height", !0),
                p.forEach((e => {
                    e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px"
                }
                )),
                s.dynamicMainBullets > 1 && void 0 !== r && (l += a - (r || 0),
                l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)),
                o = Math.max(a - l, 0),
                d = o + (Math.min(i.length, s.dynamicMainBullets) - 1),
                u = (d + o) / 2),
                i.forEach((e => {
                    const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                    e.classList.remove(...t)
                }
                )),
                p.length > 1)
                    i.forEach((e => {
                        const i = y(e);
                        i === a ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"),
                        s.dynamicBullets && (i >= o && i <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),
                        i === o && c(e, "prev"),
                        i === d && c(e, "next"))
                    }
                    ));
                else {
                    const e = i[a];
                    if (e && e.classList.add(...s.bulletActiveClass.split(" ")),
                    t.isElement && i.forEach(( (e, t) => {
                        e.setAttribute("part", t === a ? "bullet-active" : "bullet")
                    }
                    )),
                    s.dynamicBullets) {
                        const e = i[o]
                          , t = i[d];
                        for (let e = o; e <= d; e += 1)
                            i[e] && i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                        c(e, "prev"),
                        c(t, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const a = Math.min(i.length, s.dynamicMainBullets + 4)
                      , r = (n * a - n) / 2 - u * n
                      , l = e ? "right" : "left";
                    i.forEach((e => {
                        e.style[t.isHorizontal() ? l : "top"] = `${r}px`
                    }
                    ))
                }
            }
            p.forEach(( (e, r) => {
                if ("fraction" === s.type && (e.querySelectorAll(se(s.currentClass)).forEach((e => {
                    e.textContent = s.formatFractionCurrent(a + 1)
                }
                )),
                e.querySelectorAll(se(s.totalClass)).forEach((e => {
                    e.textContent = s.formatFractionTotal(m)
                }
                ))),
                "progressbar" === s.type) {
                    let i;
                    i = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                    const r = (a + 1) / m;
                    let n = 1
                      , l = 1;
                    "horizontal" === i ? n = r : l = r,
                    e.querySelectorAll(se(s.progressbarFillClass)).forEach((e => {
                        e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`,
                        e.style.transitionDuration = `${t.params.speed}ms`
                    }
                    ))
                }
                "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, a + 1, m),
                0 === r && i("paginationRender", e)) : (0 === r && i("paginationRender", e),
                i("paginationUpdate", e)),
                t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
            }
            ))
        }
        function m() {
            const e = t.params.pagination;
            if (d())
                return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
            let a = t.pagination.el;
            a = o(a);
            let r = "";
            if ("bullets" === e.type) {
                let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
                for (let s = 0; s < a; s += 1)
                    e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`),
            t.pagination.bullets = [],
            a.forEach((s => {
                "custom" !== e.type && (s.innerHTML = r || ""),
                "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(se(e.bulletClass)))
            }
            )),
            "custom" !== e.type && i("paginationRender", a[0])
        }
        function h() {
            t.params.pagination = te(t, t.originalParams.pagination, t.params.pagination, {
                el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el)
                return;
            let s;
            "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)),
            s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]),
            s || (s = e.el),
            s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)],
            s.length > 1 && (s = s.filter((e => E(e, ".swiper")[0] === t.el))[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, {
                el: s
            }),
            s = o(s),
            s.forEach((s => {
                "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                l = 0,
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", p),
                t.enabled || s.classList.add(e.lockClass)
            }
            )))
        }
        function f() {
            const e = t.params.pagination;
            if (d())
                return;
            let s = t.pagination.el;
            s && (s = o(s),
            s.forEach((s => {
                s.classList.remove(e.hiddenClass),
                s.classList.remove(e.modifierClass + e.type),
                s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")),
                s.removeEventListener("click", p))
            }
            ))),
            t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        a("changeDirection", ( () => {
            if (!t.pagination || !t.pagination.el)
                return;
            const e = t.params.pagination;
            let {el: s} = t.pagination;
            s = o(s),
            s.forEach((s => {
                s.classList.remove(e.horizontalClass, e.verticalClass),
                s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
            }
            ))
        }
        )),
        a("init", ( () => {
            !1 === t.params.pagination.enabled ? g() : (h(),
            m(),
            u())
        }
        )),
        a("activeIndexChange", ( () => {
            void 0 === t.snapIndex && u()
        }
        )),
        a("snapIndexChange", ( () => {
            u()
        }
        )),
        a("snapGridLengthChange", ( () => {
            m(),
            u()
        }
        )),
        a("destroy", ( () => {
            f()
        }
        )),
        a("enable disable", ( () => {
            let {el: e} = t.pagination;
            e && (e = o(e),
            e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        }
        )),
        a("lock unlock", ( () => {
            u()
        }
        )),
        a("click", ( (e, s) => {
            const a = s.target
              , r = o(t.pagination.el);
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl))
                    return;
                const e = r[0].classList.contains(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"),
                r.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
            }
        }
        ));
        const g = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass);
            let {el: e} = t.pagination;
            e && (e = o(e),
            e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))),
            f()
        }
        ;
        Object.assign(t.pagination, {
            enable: () => {
                t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                let {el: e} = t.pagination;
                e && (e = o(e),
                e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))),
                h(),
                m(),
                u()
            }
            ,
            disable: g,
            render: m,
            update: u,
            init: h,
            destroy: f
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: i, emit: r} = e;
        const o = a();
        let d, c, p, u, m = !1, h = null, f = null;
        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el)
                return;
            const {scrollbar: e, rtlTranslate: s} = t
              , {dragEl: a, el: i} = e
              , r = t.params.scrollbar
              , n = t.params.loop ? t.progressLoop : t.progress;
            let l = c
              , o = (p - c) * n;
            s ? (o = -o,
            o > 0 ? (l = c - o,
            o = 0) : -o + c > p && (l = p + o)) : o < 0 ? (l = c + o,
            o = 0) : o + c > p && (l = p - o),
            t.isHorizontal() ? (a.style.transform = `translate3d(${o}px, 0, 0)`,
            a.style.width = `${l}px`) : (a.style.transform = `translate3d(0px, ${o}px, 0)`,
            a.style.height = `${l}px`),
            r.hide && (clearTimeout(h),
            i.style.opacity = 1,
            h = setTimeout(( () => {
                i.style.opacity = 0,
                i.style.transitionDuration = "400ms"
            }
            ), 1e3))
        }
        function b() {
            if (!t.params.scrollbar.el || !t.scrollbar.el)
                return;
            const {scrollbar: e} = t
              , {dragEl: s, el: a} = e;
            s.style.width = "",
            s.style.height = "",
            p = t.isHorizontal() ? a.offsetWidth : a.offsetHeight,
            u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)),
            c = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10),
            t.isHorizontal() ? s.style.width = `${c}px` : s.style.height = `${c}px`,
            a.style.display = u >= 1 ? "none" : "",
            t.params.scrollbar.hide && (a.style.opacity = 0),
            t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
        }
        function y(e) {
            return t.isHorizontal() ? e.clientX : e.clientY
        }
        function E(e) {
            const {scrollbar: s, rtlTranslate: a} = t
              , {el: i} = s;
            let r;
            r = (y(e) - w(i)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : c / 2)) / (p - c),
            r = Math.max(Math.min(r, 1), 0),
            a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n),
            t.setTranslate(n),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        }
        function x(e) {
            const s = t.params.scrollbar
              , {scrollbar: a, wrapperEl: i} = t
              , {el: n, dragEl: l} = a;
            m = !0,
            d = e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            i.style.transitionDuration = "100ms",
            l.style.transitionDuration = "100ms",
            E(e),
            clearTimeout(f),
            n.style.transitionDuration = "0ms",
            s.hide && (n.style.opacity = 1),
            t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
            r("scrollbarDragStart", e)
        }
        function S(e) {
            const {scrollbar: s, wrapperEl: a} = t
              , {el: i, dragEl: n} = s;
            m && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            E(e),
            a.style.transitionDuration = "0ms",
            i.style.transitionDuration = "0ms",
            n.style.transitionDuration = "0ms",
            r("scrollbarDragMove", e))
        }
        function T(e) {
            const s = t.params.scrollbar
              , {scrollbar: a, wrapperEl: i} = t
              , {el: n} = a;
            m && (m = !1,
            t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "",
            i.style.transitionDuration = ""),
            s.hide && (clearTimeout(f),
            f = l(( () => {
                n.style.opacity = 0,
                n.style.transitionDuration = "400ms"
            }
            ), 1e3)),
            r("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest())
        }
        function M(e) {
            const {scrollbar: s, params: a} = t
              , i = s.el;
            if (!i)
                return;
            const r = i
              , n = !!a.passiveListeners && {
                passive: !1,
                capture: !1
            }
              , l = !!a.passiveListeners && {
                passive: !0,
                capture: !1
            };
            if (!r)
                return;
            const d = "on" === e ? "addEventListener" : "removeEventListener";
            r[d]("pointerdown", x, n),
            o[d]("pointermove", S, n),
            o[d]("pointerup", T, l)
        }
        function C() {
            const {scrollbar: e, el: s} = t;
            t.params.scrollbar = te(t, t.originalParams.scrollbar, t.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = t.params.scrollbar;
            if (!a.el)
                return;
            let i, r;
            if ("string" == typeof a.el && t.isElement && (i = t.el.querySelector(a.el)),
            i || "string" != typeof a.el)
                i || (i = a.el);
            else if (i = o.querySelectorAll(a.el),
            !i.length)
                return;
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el).length && (i = s.querySelector(a.el)),
            i.length > 0 && (i = i[0]),
            i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass),
            i && (r = i.querySelector(se(t.params.scrollbar.dragClass)),
            r || (r = v("div", t.params.scrollbar.dragClass),
            i.append(r))),
            Object.assign(e, {
                el: i,
                dragEl: r
            }),
            a.draggable && t.params.scrollbar.el && t.scrollbar.el && M("on"),
            i && i.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
        }
        function P() {
            const e = t.params.scrollbar
              , s = t.scrollbar.el;
            s && s.classList.remove(...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass)),
            t.params.scrollbar.el && t.scrollbar.el && M("off")
        }
        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }),
        t.scrollbar = {
            el: null,
            dragEl: null
        },
        i("init", ( () => {
            !1 === t.params.scrollbar.enabled ? L() : (C(),
            b(),
            g())
        }
        )),
        i("update resize observerUpdate lock unlock", ( () => {
            b()
        }
        )),
        i("setTranslate", ( () => {
            g()
        }
        )),
        i("setTransition", ( (e, s) => {
            !function(e) {
                t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
            }(s)
        }
        )),
        i("enable disable", ( () => {
            const {el: e} = t.scrollbar;
            e && e.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
        }
        )),
        i("destroy", ( () => {
            P()
        }
        ));
        const L = () => {
            t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),
            t.scrollbar.el && t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),
            P()
        }
        ;
        Object.assign(t.scrollbar, {
            enable: () => {
                t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),
                t.scrollbar.el && t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),
                C(),
                b(),
                g()
            }
            ,
            disable: L,
            updateSize: b,
            setTranslate: g,
            init: C,
            destroy: P
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            parallax: {
                enabled: !1
            }
        });
        const i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          , r = (e, s) => {
            const {rtl: a} = t
              , i = a ? -1 : 1
              , r = e.getAttribute("data-swiper-parallax") || "0";
            let n = e.getAttribute("data-swiper-parallax-x")
              , l = e.getAttribute("data-swiper-parallax-y");
            const o = e.getAttribute("data-swiper-parallax-scale")
              , d = e.getAttribute("data-swiper-parallax-opacity")
              , c = e.getAttribute("data-swiper-parallax-rotate");
            if (n || l ? (n = n || "0",
            l = l || "0") : t.isHorizontal() ? (n = r,
            l = "0") : (l = r,
            n = "0"),
            n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px",
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px",
            null != d) {
                const t = d - (d - 1) * (1 - Math.abs(s));
                e.style.opacity = t
            }
            let p = `translate3d(${n}, ${l}, 0px)`;
            if (null != o) {
                p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`
            }
            if (c && null != c) {
                p += ` rotate(${c * s * -1}deg)`
            }
            e.style.transform = p
        }
          , n = () => {
            const {el: e, slides: s, progress: a, snapGrid: n, isElement: l} = t
              , o = f(e, i);
            t.isElement && o.push(...f(t.hostEl, i)),
            o.forEach((e => {
                r(e, a)
            }
            )),
            s.forEach(( (e, s) => {
                let l = e.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - a * (n.length - 1)),
                l = Math.min(Math.max(l, -1), 1),
                e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e => {
                    r(e, l)
                }
                ))
            }
            ))
        }
        ;
        a("beforeInit", ( () => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0,
            t.originalParams.watchSlidesProgress = !0)
        }
        )),
        a("init", ( () => {
            t.params.parallax.enabled && n()
        }
        )),
        a("setTranslate", ( () => {
            t.params.parallax.enabled && n()
        }
        )),
        a("setTransition", ( (e, s) => {
            t.params.parallax.enabled && function(e) {
                void 0 === e && (e = t.params.speed);
                const {el: s, hostEl: a} = t
                  , r = [...s.querySelectorAll(i)];
                t.isElement && r.push(...a.querySelectorAll(i)),
                r.forEach((t => {
                    let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (s = 0),
                    t.style.transitionDuration = `${s}ms`
                }
                ))
            }(s)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }),
        t.zoom = {
            enabled: !1
        };
        let l, o, c = 1, p = !1;
        const u = []
          , m = {
            originX: 0,
            originY: 0,
            slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            imageEl: void 0,
            imageWrapEl: void 0,
            maxRatio: 3
        }
          , h = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }
          , g = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
        };
        let v = 1;
        function b() {
            if (u.length < 2)
                return 1;
            const e = u[0].pageX
              , t = u[0].pageY
              , s = u[1].pageX
              , a = u[1].pageY;
            return Math.sqrt((s - e) ** 2 + (a - t) ** 2)
        }
        function y(e) {
            const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
            return !!e.target.matches(s) || t.slides.filter((t => t.contains(e.target))).length > 0
        }
        function x(e) {
            if ("mouse" === e.pointerType && u.splice(0, u.length),
            !y(e))
                return;
            const s = t.params.zoom;
            if (l = !1,
            o = !1,
            u.push(e),
            !(u.length < 2)) {
                if (l = !0,
                m.scaleStart = b(),
                !m.slideEl) {
                    m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`),
                    m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
                    let a = m.slideEl.querySelector(`.${s.containerClass}`);
                    if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                    m.imageEl = a,
                    m.imageWrapEl = a ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0,
                    !m.imageWrapEl)
                        return void (m.imageEl = void 0);
                    m.maxRatio = m.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio
                }
                if (m.imageEl) {
                    const [e,t] = function() {
                        if (u.length < 2)
                            return {
                                x: null,
                                y: null
                            };
                        const e = m.imageEl.getBoundingClientRect();
                        return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) / c]
                    }();
                    m.originX = e,
                    m.originY = t,
                    m.imageEl.style.transitionDuration = "0ms"
                }
                p = !0
            }
        }
        function S(e) {
            if (!y(e))
                return;
            const s = t.params.zoom
              , a = t.zoom
              , i = u.findIndex((t => t.pointerId === e.pointerId));
            i >= 0 && (u[i] = e),
            u.length < 2 || (o = !0,
            m.scaleMove = b(),
            m.imageEl && (a.scale = m.scaleMove / m.scaleStart * c,
            a.scale > m.maxRatio && (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** .5),
            a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** .5),
            m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`))
        }
        function T(e) {
            if (!y(e))
                return;
            if ("mouse" === e.pointerType && "pointerout" === e.type)
                return;
            const s = t.params.zoom
              , a = t.zoom
              , i = u.findIndex((t => t.pointerId === e.pointerId));
            i >= 0 && u.splice(i, 1),
            l && o && (l = !1,
            o = !1,
            m.imageEl && (a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio),
            m.imageEl.style.transitionDuration = `${t.params.speed}ms`,
            m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`,
            c = a.scale,
            p = !1,
            a.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${s.zoomedSlideClass}`) : a.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
            1 === a.scale && (m.originX = 0,
            m.originY = 0,
            m.slideEl = void 0)))
        }
        function M(e) {
            if (!y(e) || !function(e) {
                const s = `.${t.params.zoom.containerClass}`;
                return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter((t => t.contains(e.target))).length > 0
            }(e))
                return;
            const s = t.zoom;
            if (!m.imageEl)
                return;
            if (!h.isTouched || !m.slideEl)
                return;
            h.isMoved || (h.width = m.imageEl.offsetWidth,
            h.height = m.imageEl.offsetHeight,
            h.startX = d(m.imageWrapEl, "x") || 0,
            h.startY = d(m.imageWrapEl, "y") || 0,
            m.slideWidth = m.slideEl.offsetWidth,
            m.slideHeight = m.slideEl.offsetHeight,
            m.imageWrapEl.style.transitionDuration = "0ms");
            const a = h.width * s.scale
              , i = h.height * s.scale;
            if (a < m.slideWidth && i < m.slideHeight)
                return;
            h.minX = Math.min(m.slideWidth / 2 - a / 2, 0),
            h.maxX = -h.minX,
            h.minY = Math.min(m.slideHeight / 2 - i / 2, 0),
            h.maxY = -h.minY,
            h.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX,
            h.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY;
            if (Math.max(Math.abs(h.touchesCurrent.x - h.touchesStart.x), Math.abs(h.touchesCurrent.y - h.touchesStart.y)) > 5 && (t.allowClick = !1),
            !h.isMoved && !p) {
                if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x))
                    return void (h.isTouched = !1);
                if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y))
                    return void (h.isTouched = !1)
            }
            e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            h.isMoved = !0;
            const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio)
              , {originX: n, originY: l} = m;
            h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX + r * (h.width - 2 * n),
            h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY + r * (h.height - 2 * l),
            h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8),
            h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8),
            h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8),
            h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8),
            g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x),
            g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y),
            g.prevTime || (g.prevTime = Date.now()),
            g.x = (h.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2,
            g.y = (h.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2,
            Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
            Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
            g.prevPositionX = h.touchesCurrent.x,
            g.prevPositionY = h.touchesCurrent.y,
            g.prevTime = Date.now(),
            m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
        }
        function C() {
            const e = t.zoom;
            m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
            e.scale = 1,
            c = 1,
            m.slideEl = void 0,
            m.imageEl = void 0,
            m.imageWrapEl = void 0,
            m.originX = 0,
            m.originY = 0)
        }
        function P(e) {
            const s = t.zoom
              , a = t.params.zoom;
            if (!m.slideEl) {
                e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)),
                m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex]);
                let s = m.slideEl.querySelector(`.${a.containerClass}`);
                s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                m.imageEl = s,
                m.imageWrapEl = s ? E(m.imageEl, `.${a.containerClass}`)[0] : void 0
            }
            if (!m.imageEl || !m.imageWrapEl)
                return;
            let i, r, l, o, d, p, u, g, v, b, y, x, S, T, M, C, P, L;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden",
            t.wrapperEl.style.touchAction = "none"),
            m.slideEl.classList.add(`${a.zoomedSlideClass}`),
            void 0 === h.touchesStart.x && e ? (i = e.pageX,
            r = e.pageY) : (i = h.touchesStart.x,
            r = h.touchesStart.y);
            const A = "number" == typeof e ? e : null;
            1 === c && A && (i = void 0,
            r = void 0),
            s.scale = A || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio,
            c = A || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio,
            !e || 1 === c && A ? (u = 0,
            g = 0) : (P = m.slideEl.offsetWidth,
            L = m.slideEl.offsetHeight,
            l = w(m.slideEl).left + n.scrollX,
            o = w(m.slideEl).top + n.scrollY,
            d = l + P / 2 - i,
            p = o + L / 2 - r,
            v = m.imageEl.offsetWidth,
            b = m.imageEl.offsetHeight,
            y = v * s.scale,
            x = b * s.scale,
            S = Math.min(P / 2 - y / 2, 0),
            T = Math.min(L / 2 - x / 2, 0),
            M = -S,
            C = -T,
            u = d * s.scale,
            g = p * s.scale,
            u < S && (u = S),
            u > M && (u = M),
            g < T && (g = T),
            g > C && (g = C)),
            A && 1 === s.scale && (m.originX = 0,
            m.originY = 0),
            m.imageWrapEl.style.transitionDuration = "300ms",
            m.imageWrapEl.style.transform = `translate3d(${u}px, ${g}px,0)`,
            m.imageEl.style.transitionDuration = "300ms",
            m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`
        }
        function L() {
            const e = t.zoom
              , s = t.params.zoom;
            if (!m.slideEl) {
                t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex];
                let e = m.slideEl.querySelector(`.${s.containerClass}`);
                e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                m.imageEl = e,
                m.imageWrapEl = e ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0
            }
            m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "",
            t.wrapperEl.style.touchAction = ""),
            e.scale = 1,
            c = 1,
            m.imageWrapEl.style.transitionDuration = "300ms",
            m.imageWrapEl.style.transform = "translate3d(0,0,0)",
            m.imageEl.style.transitionDuration = "300ms",
            m.imageEl.style.transform = "translate3d(0,0,0) scale(1)",
            m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
            m.slideEl = void 0,
            m.originX = 0,
            m.originY = 0)
        }
        function A(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? L() : P(e)
        }
        function I() {
            return {
                passiveListener: !!t.params.passiveListeners && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !t.params.passiveListeners || {
                    passive: !1,
                    capture: !0
                }
            }
        }
        function z() {
            const e = t.zoom;
            if (e.enabled)
                return;
            e.enabled = !0;
            const {passiveListener: s, activeListenerWithCapture: a} = I();
            t.wrapperEl.addEventListener("pointerdown", x, s),
            t.wrapperEl.addEventListener("pointermove", S, a),
            ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                t.wrapperEl.addEventListener(e, T, s)
            }
            )),
            t.wrapperEl.addEventListener("pointermove", M, a)
        }
        function $() {
            const e = t.zoom;
            if (!e.enabled)
                return;
            e.enabled = !1;
            const {passiveListener: s, activeListenerWithCapture: a} = I();
            t.wrapperEl.removeEventListener("pointerdown", x, s),
            t.wrapperEl.removeEventListener("pointermove", S, a),
            ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                t.wrapperEl.removeEventListener(e, T, s)
            }
            )),
            t.wrapperEl.removeEventListener("pointermove", M, a)
        }
        Object.defineProperty(t.zoom, "scale", {
            get: () => v,
            set(e) {
                if (v !== e) {
                    const t = m.imageEl
                      , s = m.slideEl;
                    i("zoomChange", e, t, s)
                }
                v = e
            }
        }),
        a("init", ( () => {
            t.params.zoom.enabled && z()
        }
        )),
        a("destroy", ( () => {
            $()
        }
        )),
        a("touchStart", ( (e, s) => {
            t.zoom.enabled && function(e) {
                const s = t.device;
                if (!m.imageEl)
                    return;
                if (h.isTouched)
                    return;
                s.android && e.cancelable && e.preventDefault(),
                h.isTouched = !0;
                const a = u.length > 0 ? u[0] : e;
                h.touchesStart.x = a.pageX,
                h.touchesStart.y = a.pageY
            }(s)
        }
        )),
        a("touchEnd", ( (e, s) => {
            t.zoom.enabled && function() {
                const e = t.zoom;
                if (!m.imageEl)
                    return;
                if (!h.isTouched || !h.isMoved)
                    return h.isTouched = !1,
                    void (h.isMoved = !1);
                h.isTouched = !1,
                h.isMoved = !1;
                let s = 300
                  , a = 300;
                const i = g.x * s
                  , r = h.currentX + i
                  , n = g.y * a
                  , l = h.currentY + n;
                0 !== g.x && (s = Math.abs((r - h.currentX) / g.x)),
                0 !== g.y && (a = Math.abs((l - h.currentY) / g.y));
                const o = Math.max(s, a);
                h.currentX = r,
                h.currentY = l;
                const d = h.width * e.scale
                  , c = h.height * e.scale;
                h.minX = Math.min(m.slideWidth / 2 - d / 2, 0),
                h.maxX = -h.minX,
                h.minY = Math.min(m.slideHeight / 2 - c / 2, 0),
                h.maxY = -h.minY,
                h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX),
                h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY),
                m.imageWrapEl.style.transitionDuration = `${o}ms`,
                m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
            }()
        }
        )),
        a("doubleTap", ( (e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && A(s)
        }
        )),
        a("transitionEnd", ( () => {
            t.zoom.enabled && t.params.zoom.enabled && C()
        }
        )),
        a("slideChange", ( () => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
        }
        )),
        Object.assign(t.zoom, {
            enable: z,
            disable: $,
            in: P,
            out: L,
            toggle: A
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        function i(e, t) {
            const s = function() {
                let e, t, s;
                return (a, i) => {
                    for (t = -1,
                    e = a.length; e - t > 1; )
                        s = e + t >> 1,
                        a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (i = s(this.x, e),
                a = i - 1,
                (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }
            ,
            this
        }
        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0,
            delete t.controller.spline)
        }
        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }),
        t.controller = {
            control: void 0
        },
        a("beforeInit", ( () => {
            if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
                const e = document.querySelector(t.params.controller.control);
                if (e && e.swiper)
                    t.controller.control = e.swiper;
                else if (e) {
                    const s = a => {
                        t.controller.control = a.detail[0],
                        t.update(),
                        e.removeEventListener("init", s)
                    }
                    ;
                    e.addEventListener("init", s)
                }
            } else
                t.controller.control = t.params.controller.control
        }
        )),
        a("update", ( () => {
            r()
        }
        )),
        a("resize", ( () => {
            r()
        }
        )),
        a("observerUpdate", ( () => {
            r()
        }
        )),
        a("setTranslate", ( (e, s, a) => {
            t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a)
        }
        )),
        a("setTransition", ( (e, s, a) => {
            t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a)
        }
        )),
        Object.assign(t.controller, {
            setTranslate: function(e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;
                function o(e) {
                    if (e.destroyed)
                        return;
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (!function(e) {
                        t.controller.spline = t.params.loop ? new i(t.slidesGrid,e.slidesGrid) : new i(t.snapGrid,e.snapGrid)
                    }(e),
                    n = -t.controller.spline.interpolate(-s)),
                    n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()),
                    !Number.isNaN(r) && Number.isFinite(r) || (r = 1),
                    n = (s - t.minTranslate()) * r + e.minTranslate()),
                    t.params.controller.inverse && (n = e.maxTranslate() - n),
                    e.updateProgress(n),
                    e.setTranslate(n, t),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (let e = 0; e < a.length; e += 1)
                        a[e] !== s && a[e]instanceof l && o(a[e]);
                else
                    a instanceof l && s !== a && o(a)
            },
            setTransition: function(e, s) {
                const a = t.constructor
                  , i = t.controller.control;
                let r;
                function n(s) {
                    s.destroyed || (s.setTransition(e, t),
                    0 !== e && (s.transitionStart(),
                    s.params.autoHeight && l(( () => {
                        s.updateAutoHeight()
                    }
                    )),
                    x(s.wrapperEl, ( () => {
                        i && s.transitionEnd()
                    }
                    ))))
                }
                if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1)
                        i[r] !== s && i[r]instanceof a && n(i[r]);
                else
                    i instanceof a && s !== i && n(i)
            }
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }),
        t.a11y = {
            clicked: !1
        };
        let i = null;
        function r(e) {
            const t = i;
            0 !== t.length && (t.innerHTML = "",
            t.innerHTML = e)
        }
        const n = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));
        function l(e) {
            (e = n(e)).forEach((e => {
                e.setAttribute("tabIndex", "0")
            }
            ))
        }
        function o(e) {
            (e = n(e)).forEach((e => {
                e.setAttribute("tabIndex", "-1")
            }
            ))
        }
        function d(e, t) {
            (e = n(e)).forEach((e => {
                e.setAttribute("role", t)
            }
            ))
        }
        function c(e, t) {
            (e = n(e)).forEach((e => {
                e.setAttribute("aria-roledescription", t)
            }
            ))
        }
        function p(e, t) {
            (e = n(e)).forEach((e => {
                e.setAttribute("aria-label", t)
            }
            ))
        }
        function u(e) {
            (e = n(e)).forEach((e => {
                e.setAttribute("aria-disabled", !0)
            }
            ))
        }
        function m(e) {
            (e = n(e)).forEach((e => {
                e.setAttribute("aria-disabled", !1)
            }
            ))
        }
        function h(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode)
                return;
            const s = t.params.a11y
              , a = e.target;
            t.pagination && t.pagination.el && (a === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(se(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && a === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(),
            t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
            t.navigation && t.navigation.prevEl && a === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(),
            t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
            t.pagination && a.matches(se(t.params.pagination.bulletClass)) && a.click())
        }
        function f() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }
        function g() {
            return f() && t.params.pagination.clickable
        }
        const w = (e, t, s) => {
            l(e),
            "BUTTON" !== e.tagName && (d(e, "button"),
            e.addEventListener("keydown", h)),
            p(e, s),
            function(e, t) {
                (e = n(e)).forEach((e => {
                    e.setAttribute("aria-controls", t)
                }
                ))
            }(e, t)
        }
          , b = () => {
            t.a11y.clicked = !0
        }
          , E = () => {
            requestAnimationFrame(( () => {
                requestAnimationFrame(( () => {
                    t.destroyed || (t.a11y.clicked = !1)
                }
                ))
            }
            ))
        }
          , x = e => {
            if (t.a11y.clicked)
                return;
            const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!s || !t.slides.includes(s))
                return;
            const a = t.slides.indexOf(s) === t.activeIndex
              , i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
            a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0,
            t.slideTo(t.slides.indexOf(s), 0))
        }
          , S = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && c(t.slides, e.itemRoleDescriptionMessage),
            e.slideRole && d(t.slides, e.slideRole);
            const s = t.slides.length;
            e.slideLabelMessage && t.slides.forEach(( (a, i) => {
                const r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
                p(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
            }
            ))
        }
          , T = () => {
            const e = t.params.a11y;
            t.el.append(i);
            const s = t.el;
            e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage),
            e.containerMessage && p(s, e.containerMessage);
            const a = t.wrapperEl
              , r = e.id || a.getAttribute("id") || `swiper-wrapper-${l = 16,
            void 0 === l && (l = 16),
            "x".repeat(l).replace(/x/g, ( () => Math.round(16 * Math.random()).toString(16)))}`;
            var l;
            const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var d;
            d = r,
            n(a).forEach((e => {
                e.setAttribute("id", d)
            }
            )),
            function(e, t) {
                (e = n(e)).forEach((e => {
                    e.setAttribute("aria-live", t)
                }
                ))
            }(a, o),
            S();
            let {nextEl: u, prevEl: m} = t.navigation ? t.navigation : {};
            if (u = n(u),
            m = n(m),
            u && u.forEach((t => w(t, r, e.nextSlideMessage))),
            m && m.forEach((t => w(t, r, e.prevSlideMessage))),
            g()) {
                (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e => {
                    e.addEventListener("keydown", h)
                }
                ))
            }
            t.el.addEventListener("focus", x, !0),
            t.el.addEventListener("pointerdown", b, !0),
            t.el.addEventListener("pointerup", E, !0)
        }
        ;
        a("beforeInit", ( () => {
            i = v("span", t.params.a11y.notificationClass),
            i.setAttribute("aria-live", "assertive"),
            i.setAttribute("aria-atomic", "true")
        }
        )),
        a("afterInit", ( () => {
            t.params.a11y.enabled && T()
        }
        )),
        a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ( () => {
            t.params.a11y.enabled && S()
        }
        )),
        a("fromEdge toEdge afterInit lock unlock", ( () => {
            t.params.a11y.enabled && function() {
                if (t.params.loop || t.params.rewind || !t.navigation)
                    return;
                const {nextEl: e, prevEl: s} = t.navigation;
                s && (t.isBeginning ? (u(s),
                o(s)) : (m(s),
                l(s))),
                e && (t.isEnd ? (u(e),
                o(e)) : (m(e),
                l(e)))
            }()
        }
        )),
        a("paginationUpdate", ( () => {
            t.params.a11y.enabled && function() {
                const e = t.params.a11y;
                f() && t.pagination.bullets.forEach((s => {
                    t.params.pagination.clickable && (l(s),
                    t.params.pagination.renderBullet || (d(s, "button"),
                    p(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))),
                    s.matches(se(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
                }
                ))
            }()
        }
        )),
        a("destroy", ( () => {
            t.params.a11y.enabled && function() {
                i && i.remove();
                let {nextEl: e, prevEl: s} = t.navigation ? t.navigation : {};
                e = n(e),
                s = n(s),
                e && e.forEach((e => e.removeEventListener("keydown", h))),
                s && s.forEach((e => e.removeEventListener("keydown", h))),
                g() && (Array.isArray(t.pagination.el) ? t.pagination.el : [t.pagination.el]).forEach((e => {
                    e.removeEventListener("keydown", h)
                }
                ));
                t.el.removeEventListener("focus", x, !0),
                t.el.removeEventListener("pointerdown", b, !0),
                t.el.removeEventListener("pointerup", E, !0)
            }()
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let i = !1
          , n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
          , o = e => {
            const t = r();
            let s;
            s = e ? new URL(e) : t.location;
            const a = s.pathname.slice(1).split("/").filter((e => "" !== e))
              , i = a.length;
            return {
                key: a[i - 2],
                value: a[i - 1]
            }
        }
          , d = (e, s) => {
            const a = r();
            if (!i || !t.params.history.enabled)
                return;
            let n;
            n = t.params.url ? new URL(t.params.url) : a.location;
            const o = t.slides[s];
            let d = l(o.getAttribute("data-history"));
            if (t.params.history.root.length > 0) {
                let s = t.params.history.root;
                "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
                d = `${s}/${e ? `${e}/` : ""}${d}`
            } else
                n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
            t.params.history.keepQuery && (d += n.search);
            const c = a.history.state;
            c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
                value: d
            }, null, d) : a.history.pushState({
                value: d
            }, null, d))
        }
          , c = (e, s, a) => {
            if (s)
                for (let i = 0, r = t.slides.length; i < r; i += 1) {
                    const r = t.slides[i];
                    if (l(r.getAttribute("data-history")) === s) {
                        const s = t.getSlideIndex(r);
                        t.slideTo(s, e, a)
                    }
                }
            else
                t.slideTo(0, e, a)
        }
          , p = () => {
            n = o(t.params.url),
            c(t.params.speed, n.value, !1)
        }
        ;
        a("init", ( () => {
            t.params.history.enabled && ( () => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState)
                        return t.params.history.enabled = !1,
                        void (t.params.hashNavigation.enabled = !0);
                    i = !0,
                    n = o(t.params.url),
                    n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p)
                }
            }
            )()
        }
        )),
        a("destroy", ( () => {
            t.params.history.enabled && ( () => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            }
            )()
        }
        )),
        a("transitionEnd _freeModeNoMomentumRelease", ( () => {
            i && d(t.params.history.key, t.activeIndex)
        }
        )),
        a("slideChange", ( () => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, emit: i, on: n} = e
          , l = !1;
        const o = a()
          , d = r();
        s({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1,
                getSlideIndex(e, s) {
                    if (t.virtual && t.params.virtual.enabled) {
                        const e = t.slides.filter((e => e.getAttribute("data-hash") === s))[0];
                        if (!e)
                            return 0;
                        return parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                    }
                    return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])
                }
            }
        });
        const c = () => {
            i("hashChange");
            const e = o.location.hash.replace("#", "")
              , s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
            if (e !== (s ? s.getAttribute("data-hash") : "")) {
                const s = t.params.hashNavigation.getSlideIndex(t, e);
                if (void 0 === s || Number.isNaN(s))
                    return;
                t.slideTo(s)
            }
        }
          , p = () => {
            if (!l || !t.params.hashNavigation.enabled)
                return;
            const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex]
              , s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
            t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""),
            i("hashSet")) : (o.location.hash = s || "",
            i("hashSet"))
        }
        ;
        n("init", ( () => {
            t.params.hashNavigation.enabled && ( () => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)
                    return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0
                      , a = t.params.hashNavigation.getSlideIndex(t, e);
                    t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0)
                }
                t.params.hashNavigation.watchState && d.addEventListener("hashchange", c)
            }
            )()
        }
        )),
        n("destroy", ( () => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c)
        }
        )),
        n("transitionEnd _freeModeNoMomentumRelease", ( () => {
            l && p()
        }
        )),
        n("slideChange", ( () => {
            l && t.params.cssMode && p()
        }
        ))
    }
    , function(e) {
        let t, s, {swiper: i, extendParams: r, on: n, emit: l, params: o} = e;
        i.autoplay = {
            running: !1,
            paused: !1,
            timeLeft: 0
        },
        r({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let d, c, p, u, m, h, f, g, v = o && o.autoplay ? o.autoplay.delay : 3e3, w = o && o.autoplay ? o.autoplay.delay : 3e3, b = (new Date).getTime();
        function y(e) {
            i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y),
            g || C())
        }
        const E = () => {
            if (i.destroyed || !i.autoplay.running)
                return;
            i.autoplay.paused ? c = !0 : c && (w = d,
            c = !1);
            const e = i.autoplay.paused ? d : b + w - (new Date).getTime();
            i.autoplay.timeLeft = e,
            l("autoplayTimeLeft", e, e / v),
            s = requestAnimationFrame(( () => {
                E()
            }
            ))
        }
          , x = e => {
            if (i.destroyed || !i.autoplay.running)
                return;
            cancelAnimationFrame(s),
            E();
            let a = void 0 === e ? i.params.autoplay.delay : e;
            v = i.params.autoplay.delay,
            w = i.params.autoplay.delay;
            const r = ( () => {
                let e;
                if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : i.slides[i.activeIndex],
                !e)
                    return;
                return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
            }
            )();
            !Number.isNaN(r) && r > 0 && void 0 === e && (a = r,
            v = r,
            w = r),
            d = a;
            const n = i.params.speed
              , o = () => {
                i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0),
                l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0),
                l("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0),
                l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0),
                l("autoplay")),
                i.params.cssMode && (b = (new Date).getTime(),
                requestAnimationFrame(( () => {
                    x()
                }
                ))))
            }
            ;
            return a > 0 ? (clearTimeout(t),
            t = setTimeout(( () => {
                o()
            }
            ), a)) : requestAnimationFrame(( () => {
                o()
            }
            )),
            a
        }
          , S = () => {
            b = (new Date).getTime(),
            i.autoplay.running = !0,
            x(),
            l("autoplayStart")
        }
          , T = () => {
            i.autoplay.running = !1,
            clearTimeout(t),
            cancelAnimationFrame(s),
            l("autoplayStop")
        }
          , M = (e, s) => {
            if (i.destroyed || !i.autoplay.running)
                return;
            clearTimeout(t),
            e || (f = !0);
            const a = () => {
                l("autoplayPause"),
                i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : C()
            }
            ;
            if (i.autoplay.paused = !0,
            s)
                return h && (d = i.params.autoplay.delay),
                h = !1,
                void a();
            const r = d || i.params.autoplay.delay;
            d = r - ((new Date).getTime() - b),
            i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0),
            a())
        }
          , C = () => {
            i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (b = (new Date).getTime(),
            f ? (f = !1,
            x(d)) : x(),
            i.autoplay.paused = !1,
            l("autoplayResume"))
        }
          , P = () => {
            if (i.destroyed || !i.autoplay.running)
                return;
            const e = a();
            "hidden" === e.visibilityState && (f = !0,
            M(!0)),
            "visible" === e.visibilityState && C()
        }
          , L = e => {
            "mouse" === e.pointerType && (f = !0,
            g = !0,
            i.animating || i.autoplay.paused || M(!0))
        }
          , A = e => {
            "mouse" === e.pointerType && (g = !1,
            i.autoplay.paused && C())
        }
        ;
        n("init", ( () => {
            i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", L),
            i.el.addEventListener("pointerleave", A)),
            a().addEventListener("visibilitychange", P),
            S())
        }
        )),
        n("destroy", ( () => {
            i.el.removeEventListener("pointerenter", L),
            i.el.removeEventListener("pointerleave", A),
            a().removeEventListener("visibilitychange", P),
            i.autoplay.running && T()
        }
        )),
        n("_freeModeStaticRelease", ( () => {
            (u || f) && C()
        }
        )),
        n("_freeModeNoMomentumRelease", ( () => {
            i.params.autoplay.disableOnInteraction ? T() : M(!0, !0)
        }
        )),
        n("beforeTransitionStart", ( (e, t, s) => {
            !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T())
        }
        )),
        n("sliderFirstMove", ( () => {
            !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? T() : (p = !0,
            u = !1,
            f = !1,
            m = setTimeout(( () => {
                f = !0,
                u = !0,
                M(!0)
            }
            ), 200)))
        }
        )),
        n("touchEnd", ( () => {
            if (!i.destroyed && i.autoplay.running && p) {
                if (clearTimeout(m),
                clearTimeout(t),
                i.params.autoplay.disableOnInteraction)
                    return u = !1,
                    void (p = !1);
                u && i.params.cssMode && C(),
                u = !1,
                p = !1
            }
        }
        )),
        n("slideChange", ( () => {
            !i.destroyed && i.autoplay.running && (h = !0)
        }
        )),
        Object.assign(i.autoplay, {
            start: S,
            stop: T,
            pause: M,
            resume: C
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: i} = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let r = !1
          , n = !1;
        function l() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed)
                return;
            const s = e.clickedIndex
              , a = e.clickedSlide;
            if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass))
                return;
            if (null == s)
                return;
            let i;
            i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s,
            t.params.loop ? t.slideToLoop(i) : t.slideTo(i)
        }
        function o() {
            const {thumbs: e} = t.params;
            if (r)
                return !1;
            r = !0;
            const s = t.constructor;
            if (e.swiper instanceof s)
                t.thumbs.swiper = e.swiper,
                Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                t.thumbs.swiper.update();
            else if (c(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                t.thumbs.swiper = new s(a),
                n = !0
            }
            return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),
            t.thumbs.swiper.on("tap", l),
            !0
        }
        function d(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed)
                return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (i = 1),
            i = Math.floor(i),
            s.slides.forEach((e => e.classList.remove(r))),
            s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let e = 0; e < i; e += 1)
                    f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e => {
                        e.classList.add(r)
                    }
                    ));
            else
                for (let e = 0; e < i; e += 1)
                    s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
            const n = t.params.thumbs.autoScrollOffset
              , l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                const i = s.activeIndex;
                let r, o;
                if (s.params.loop) {
                    const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
                    r = s.slides.indexOf(e),
                    o = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else
                    r = t.realIndex,
                    o = r > t.previousIndex ? "next" : "prev";
                l && (r += "next" === o ? n : -1 * n),
                s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup,
                s.slideTo(r, e ? 0 : void 0))
            }
        }
        t.thumbs = {
            swiper: null
        },
        i("beforeInit", ( () => {
            const {thumbs: e} = t.params;
            if (e && e.swiper)
                if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                    const s = a()
                      , i = () => {
                        const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                        if (a && a.swiper)
                            e.swiper = a.swiper,
                            o(),
                            d(!0);
                        else if (a) {
                            const s = i => {
                                e.swiper = i.detail[0],
                                a.removeEventListener("init", s),
                                o(),
                                d(!0),
                                e.swiper.update(),
                                t.update()
                            }
                            ;
                            a.addEventListener("init", s)
                        }
                        return a
                    }
                      , r = () => {
                        if (t.destroyed)
                            return;
                        i() || requestAnimationFrame(r)
                    }
                    ;
                    requestAnimationFrame(r)
                } else
                    o(),
                    d(!0)
        }
        )),
        i("slideChange update resize observerUpdate", ( () => {
            d()
        }
        )),
        i("setTransition", ( (e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        }
        )),
        i("beforeDestroy", ( () => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && n && e.destroy()
        }
        )),
        Object.assign(t.thumbs, {
            init: o,
            update: d
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, emit: a, once: i} = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }),
        Object.assign(t, {
            freeMode: {
                onTouchStart: function() {
                    if (t.params.cssMode)
                        return;
                    const e = t.getTranslate();
                    t.setTranslate(e),
                    t.setTransition(0),
                    t.touchEventsData.velocities.length = 0,
                    t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                },
                onTouchMove: function() {
                    if (t.params.cssMode)
                        return;
                    const {touchEventsData: e, touches: s} = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }),
                    e.velocities.push({
                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                        time: o()
                    })
                },
                onTouchEnd: function(e) {
                    let {currentPos: s} = e;
                    if (t.params.cssMode)
                        return;
                    const {params: r, wrapperEl: n, rtlTranslate: l, snapGrid: d, touchEventsData: c} = t
                      , p = o() - c.touchStartTime;
                    if (s < -t.minTranslate())
                        t.slideTo(t.activeIndex);
                    else if (s > -t.maxTranslate())
                        t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (c.velocities.length > 1) {
                                const e = c.velocities.pop()
                                  , s = c.velocities.pop()
                                  , a = e.position - s.position
                                  , i = e.time - s.time;
                                t.velocity = a / i,
                                t.velocity /= 2,
                                Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0),
                                (i > 150 || o() - e.time > 300) && (t.velocity = 0)
                            } else
                                t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio,
                            c.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let p = t.translate + s;
                            l && (p = -p);
                            let u, m = !1;
                            const h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (p < t.maxTranslate())
                                r.freeMode.momentumBounce ? (p + t.maxTranslate() < -h && (p = t.maxTranslate() - h),
                                u = t.maxTranslate(),
                                m = !0,
                                c.allowMomentumBounce = !0) : p = t.maxTranslate(),
                                r.loop && r.centeredSlides && (f = !0);
                            else if (p > t.minTranslate())
                                r.freeMode.momentumBounce ? (p - t.minTranslate() > h && (p = t.minTranslate() + h),
                                u = t.minTranslate(),
                                m = !0,
                                c.allowMomentumBounce = !0) : p = t.minTranslate(),
                                r.loop && r.centeredSlides && (f = !0);
                            else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < d.length; t += 1)
                                    if (d[t] > -p) {
                                        e = t;
                                        break
                                    }
                                p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1],
                                p = -p
                            }
                            if (f && i("transitionEnd", ( () => {
                                t.loopFix()
                            }
                            )),
                            0 !== t.velocity) {
                                if (e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity),
                                r.freeMode.sticky) {
                                    const s = Math.abs((l ? -p : p) - t.translate)
                                      , a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky)
                                return void t.slideToClosest();
                            r.freeMode.momentumBounce && m ? (t.updateProgress(u),
                            t.setTransition(e),
                            t.setTranslate(p),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating = !0,
                            x(n, ( () => {
                                t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"),
                                t.setTransition(r.speed),
                                setTimeout(( () => {
                                    t.setTranslate(u),
                                    x(n, ( () => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }
                                    ))
                                }
                                ), 0))
                            }
                            ))) : t.velocity ? (a("_freeModeNoMomentumRelease"),
                            t.updateProgress(p),
                            t.setTransition(e),
                            t.setTranslate(p),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating || (t.animating = !0,
                            x(n, ( () => {
                                t && !t.destroyed && t.transitionEnd()
                            }
                            )))) : t.updateProgress(p),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky)
                                return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }
                        (!r.freeMode.momentum || p >= r.longSwipesMs) && (a("_freeModeStaticRelease"),
                        t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses())
                    }
                }
            }
        })
    }
    , function(e) {
        let t, s, a, i, {swiper: r, extendParams: n, on: l} = e;
        n({
            grid: {
                rows: 1,
                fill: "column"
            }
        });
        const o = () => {
            let e = r.params.spaceBetween;
            return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)),
            e
        }
        ;
        l("init", ( () => {
            i = r.params.grid && r.params.grid.rows > 1
        }
        )),
        l("update", ( () => {
            const {params: e, el: t} = r
              , s = e.grid && e.grid.rows > 1;
            i && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`),
            a = 1,
            r.emitContainerClasses()) : !i && s && (t.classList.add(`${e.containerModifierClass}grid`),
            "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`),
            r.emitContainerClasses()),
            i = s
        }
        )),
        r.grid = {
            initSlides: e => {
                const {slidesPerView: i} = r.params
                  , {rows: n, fill: l} = r.params.grid
                  , o = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
                a = Math.floor(o / n),
                t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n,
                "auto" !== i && "row" === l && (t = Math.max(t, i * n)),
                s = t / n
            }
            ,
            unsetSlides: () => {
                r.slides && r.slides.forEach((e => {
                    e.swiperSlideGridSet && (e.style.height = "",
                    e.style[r.getDirectionLabel("margin-top")] = "")
                }
                ))
            }
            ,
            updateSlide: (e, i, n) => {
                const {slidesPerGroup: l} = r.params
                  , d = o()
                  , {rows: c, fill: p} = r.params.grid
                  , u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
                let m, h, f;
                if ("row" === p && l > 1) {
                    const s = Math.floor(e / (l * c))
                      , a = e - c * l * s
                      , r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
                    f = Math.floor(a / r),
                    h = a - f * r + s * l,
                    m = h + f * t / c,
                    i.style.order = m
                } else
                    "column" === p ? (h = Math.floor(e / c),
                    f = e - h * c,
                    (h > a || h === a && f === c - 1) && (f += 1,
                    f >= c && (f = 0,
                    h += 1))) : (f = Math.floor(e / s),
                    h = e - f * s);
                i.row = f,
                i.column = h,
                i.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`,
                i.style[r.getDirectionLabel("margin-top")] = 0 !== f ? d && `${d}px` : "",
                i.swiperSlideGridSet = !0
            }
            ,
            updateWrapperSize: (e, s) => {
                const {centeredSlides: a, roundLengths: i} = r.params
                  , n = o()
                  , {rows: l} = r.params.grid;
                if (r.virtualSize = (e + n) * t,
                r.virtualSize = Math.ceil(r.virtualSize / l) - n,
                r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize + n}px`),
                a) {
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        i && (a = Math.floor(a)),
                        s[t] < r.virtualSize + s[0] && e.push(a)
                    }
                    s.splice(0, s.length),
                    s.push(...e)
                }
            }
        }
    }
    , function(e) {
        let {swiper: t} = e;
        Object.assign(t, {
            appendSlide: ae.bind(t),
            prependSlide: ie.bind(t),
            addSlide: re.bind(t),
            removeSlide: ne.bind(t),
            removeAllSlides: le.bind(t)
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            fadeEffect: {
                crossFade: !1
            }
        }),
        oe({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e} = t;
                t.params.fadeEffect;
                for (let s = 0; s < e.length; s += 1) {
                    const e = t.slides[s];
                    let a = -e.swiperSlideOffset;
                    t.params.virtualTranslate || (a -= t.translate);
                    let i = 0;
                    t.isHorizontal() || (i = a,
                    a = 0);
                    const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0)
                      , n = de(0, e);
                    n.style.opacity = r,
                    n.style.transform = `translate3d(${a}px, ${i}px, 0px)`
                }
            }
            ,
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`
                }
                )),
                ce({
                    swiper: t,
                    duration: e,
                    transformElements: s,
                    allSlides: !0
                })
            }
            ,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const i = (e, t, s) => {
            let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top")
              , i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            a || (a = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")),
            e.append(a)),
            i || (i = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")),
            e.append(i)),
            a && (a.style.opacity = Math.max(-t, 0)),
            i && (i.style.opacity = Math.max(t, 0))
        }
        ;
        oe({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {el: e, wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: d} = t
                  , c = t.params.cubeEffect
                  , p = t.isHorizontal()
                  , u = t.virtual && t.params.virtual.enabled;
                let m, h = 0;
                c.shadow && (p ? (m = t.wrapperEl.querySelector(".swiper-cube-shadow"),
                m || (m = v("div", "swiper-cube-shadow"),
                t.wrapperEl.append(m)),
                m.style.height = `${r}px`) : (m = e.querySelector(".swiper-cube-shadow"),
                m || (m = v("div", "swiper-cube-shadow"),
                e.append(m))));
                for (let e = 0; e < a.length; e += 1) {
                    const s = a[e];
                    let r = e;
                    u && (r = parseInt(s.getAttribute("data-swiper-slide-index"), 10));
                    let n = 90 * r
                      , d = Math.floor(n / 360);
                    l && (n = -n,
                    d = Math.floor(-n / 360));
                    const m = Math.max(Math.min(s.progress, 1), -1);
                    let f = 0
                      , g = 0
                      , v = 0;
                    r % 4 == 0 ? (f = 4 * -d * o,
                    v = 0) : (r - 1) % 4 == 0 ? (f = 0,
                    v = 4 * -d * o) : (r - 2) % 4 == 0 ? (f = o + 4 * d * o,
                    v = o) : (r - 3) % 4 == 0 && (f = -o,
                    v = 3 * o + 4 * o * d),
                    l && (f = -f),
                    p || (g = f,
                    f = 0);
                    const w = `rotateX(${p ? 0 : -n}deg) rotateY(${p ? n : 0}deg) translate3d(${f}px, ${g}px, ${v}px)`;
                    m <= 1 && m > -1 && (h = 90 * r + 90 * m,
                    l && (h = 90 * -r - 90 * m),
                    t.browser && t.browser.isSafari && Math.abs(h) / 90 % 2 == 1 && (h += .001)),
                    s.style.transform = w,
                    c.slideShadows && i(s, m, p)
                }
                if (s.style.transformOrigin = `50% 50% -${o / 2}px`,
                s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`,
                c.shadow)
                    if (p)
                        m.style.transform = `translate3d(0px, ${r / 2 + c.shadowOffset}px, ${-r / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;
                    else {
                        const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)
                          , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                          , s = c.shadowScale
                          , a = c.shadowScale / t
                          , i = c.shadowOffset;
                        m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-89.99deg)`
                    }
                const f = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
                s.style.transform = `translate3d(0px,0,${f}px) rotateX(${t.isHorizontal() ? 0 : h}deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`,
                s.style.setProperty("--swiper-cube-translate-z", `${f}px`)
            }
            ,
            setTransition: e => {
                const {el: s, slides: a} = t;
                if (a.forEach((t => {
                    t.style.transitionDuration = `${e}ms`,
                    t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }
                    ))
                }
                )),
                t.params.cubeEffect.shadow && !t.isHorizontal()) {
                    const t = s.querySelector(".swiper-cube-shadow");
                    t && (t.style.transitionDuration = `${e}ms`)
                }
            }
            ,
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.forEach((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(t, s, e)
                }
                ))
            }
            ,
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        });
        const i = (e, s) => {
            let a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top")
              , i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            a || (a = pe("flip", e, t.isHorizontal() ? "left" : "top")),
            i || (i = pe("flip", e, t.isHorizontal() ? "right" : "bottom")),
            a && (a.style.opacity = Math.max(-s, 0)),
            i && (i.style.opacity = Math.max(s, 0))
        }
        ;
        oe({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, rtlTranslate: s} = t
                  , a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const n = e[r];
                    let l = n.progress;
                    t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n.progress, 1), -1));
                    const o = n.swiperSlideOffset;
                    let d = -180 * l
                      , c = 0
                      , p = t.params.cssMode ? -o - t.translate : -o
                      , u = 0;
                    t.isHorizontal() ? s && (d = -d) : (u = p,
                    p = 0,
                    c = -d,
                    d = 0),
                    t.browser && t.browser.isSafari && (Math.abs(d) / 90 % 2 == 1 && (d += .001),
                    Math.abs(c) / 90 % 2 == 1 && (c += .001)),
                    n.style.zIndex = -Math.abs(Math.round(l)) + e.length,
                    a.slideShadows && i(n, l);
                    const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                    de(0, n).style.transform = m
                }
            }
            ,
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`,
                    t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }
                    ))
                }
                )),
                ce({
                    swiper: t,
                    duration: e,
                    transformElements: s
                })
            }
            ,
            recreateShadows: () => {
                t.params.flipEffect,
                t.slides.forEach((e => {
                    let s = e.progress;
                    t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)),
                    i(e, s)
                }
                ))
            }
            ,
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0
            }
        }),
        oe({
            effect: "coverflow",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {width: e, height: s, slides: a, slidesSizesGrid: i} = t
                  , r = t.params.coverflowEffect
                  , n = t.isHorizontal()
                  , l = t.translate
                  , o = n ? e / 2 - l : s / 2 - l
                  , d = n ? r.rotate : -r.rotate
                  , c = r.depth;
                for (let e = 0, s = a.length; e < s; e += 1) {
                    const s = a[e]
                      , l = i[e]
                      , p = (o - s.swiperSlideOffset - l / 2) / l
                      , u = "function" == typeof r.modifier ? r.modifier(p) : p * r.modifier;
                    let m = n ? d * u : 0
                      , h = n ? 0 : d * u
                      , f = -c * Math.abs(u)
                      , g = r.stretch;
                    "string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(r.stretch) / 100 * l);
                    let v = n ? 0 : g * u
                      , w = n ? g * u : 0
                      , b = 1 - (1 - r.scale) * Math.abs(u);
                    Math.abs(w) < .001 && (w = 0),
                    Math.abs(v) < .001 && (v = 0),
                    Math.abs(f) < .001 && (f = 0),
                    Math.abs(m) < .001 && (m = 0),
                    Math.abs(h) < .001 && (h = 0),
                    Math.abs(b) < .001 && (b = 0),
                    t.browser && t.browser.isSafari && (Math.abs(m) / 90 % 2 == 1 && (m += .001),
                    Math.abs(h) / 90 % 2 == 1 && (h += .001));
                    const y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${h}deg) rotateY(${m}deg) scale(${b})`;
                    if (de(0, s).style.transform = y,
                    s.style.zIndex = 1 - Math.abs(Math.round(u)),
                    r.slideShadows) {
                        let e = n ? s.querySelector(".swiper-slide-shadow-left") : s.querySelector(".swiper-slide-shadow-top")
                          , t = n ? s.querySelector(".swiper-slide-shadow-right") : s.querySelector(".swiper-slide-shadow-bottom");
                        e || (e = pe("coverflow", s, n ? "left" : "top")),
                        t || (t = pe("coverflow", s, n ? "right" : "bottom")),
                        e && (e.style.opacity = u > 0 ? u : 0),
                        t && (t.style.opacity = -u > 0 ? -u : 0)
                    }
                }
            }
            ,
            setTransition: e => {
                t.slides.map((e => h(e))).forEach((t => {
                    t.style.transitionDuration = `${e}ms`,
                    t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }
                    ))
                }
                ))
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        oe({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, wrapperEl: s, slidesSizesGrid: a} = t
                  , r = t.params.creativeEffect
                  , {progressMultiplier: n} = r
                  , l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.style.transform = `translateX(calc(50% - ${e}px))`
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e[s]
                      , o = a.progress
                      , d = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a.swiperSlideOffset
                      , u = [t.params.cssMode ? -p - t.translate : -p, 0, 0]
                      , m = [0, 0, 0];
                    let h = !1;
                    t.isHorizontal() || (u[1] = u[0],
                    u[0] = 0);
                    let f = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (f = r.next,
                    h = !0) : d > 0 && (f = r.prev,
                    h = !0),
                    u.forEach(( (e, t) => {
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
                    }
                    )),
                    m.forEach(( (e, s) => {
                        let a = f.rotate[s] * Math.abs(d * n);
                        t.browser && t.browser.isSafari && Math.abs(a) / 90 % 2 == 1 && (a += .001),
                        m[s] = a
                    }
                    )),
                    a.style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", ")
                      , v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`
                      , w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`
                      , b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n
                      , y = `translate3d(${g}) ${v} ${w}`;
                    if (h && f.shadow || !h) {
                        let e = a.querySelector(".swiper-slide-shadow");
                        if (!e && f.shadow && (e = pe("creative", a)),
                        e) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const E = de(0, a);
                    E.style.transform = y,
                    E.style.opacity = b,
                    f.origin && (E.style.transformOrigin = f.origin)
                }
            }
            ,
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`,
                    t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }
                    ))
                }
                )),
                ce({
                    swiper: t,
                    duration: e,
                    transformElements: s,
                    allSlides: !0
                })
            }
            ,
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            cardsEffect: {
                slideShadows: !0,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        }),
        oe({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, activeIndex: s, rtlTranslate: a} = t
                  , i = t.params.cardsEffect
                  , {startTranslate: r, isTouched: n} = t.touchEventsData
                  , l = a ? -t.translate : t.translate;
                for (let o = 0; o < e.length; o += 1) {
                    const d = e[o]
                      , c = d.progress
                      , p = Math.min(Math.max(c, -4), 4);
                    let u = d.swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                    t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                    let m = t.params.cssMode ? -u - t.translate : -u
                      , h = 0;
                    const f = -100 * Math.abs(p);
                    let g = 1
                      , v = -i.perSlideRotate * p
                      , w = i.perSlideOffset - .75 * Math.abs(p);
                    const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o
                      , y = (b === s || b === s - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && l < r
                      , E = (b === s || b === s + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && l > r;
                    if (y || E) {
                        const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                        v += -28 * p * e,
                        g += -.5 * e,
                        w += 96 * e,
                        h = -25 * e * Math.abs(p) + "%"
                    }
                    if (m = p < 0 ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))` : `${m}px`,
                    !t.isHorizontal()) {
                        const e = h;
                        h = m,
                        m = e
                    }
                    const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p)
                      , S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate ? a ? -v : v : 0}deg)\n        scale(${x})\n      `;
                    if (i.slideShadows) {
                        let e = d.querySelector(".swiper-slide-shadow");
                        e || (e = pe("cards", d)),
                        e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
                    }
                    d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
                    de(0, d).style.transform = S
                }
            }
            ,
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`,
                    t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }
                    ))
                }
                )),
                ce({
                    swiper: t,
                    duration: e,
                    transformElements: s
                })
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    ];
    return ee.use(ue),
    ee
}();
//# sourceMappingURL=swiper-bundle.min.js.map
!function e(t, n, i) {
    function o(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!a && l)
                    return l(s, !0);
                if (r)
                    return r(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var u = n[s] = {
                exports: {}
            };
            t[s][0].call(u.exports, function(e) {
                return o(t[s][1][e] || e)
            }, u, u.exports, e, t, n, i)
        }
        return n[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < i.length; s++)
        o(i[s]);
    return o
}
({
    1: [function(e, t, n) {
        "use strict";
        var i = e("jquery")
          , o = e("webfontloader")
          , r = e("./MinimalClass")
          , s = e("./ContentFix")
          , a = e("./ScrollActionSimple")
          , l = e("../public/PopupRequestForm")
          , c = e("../public/PopupEmailForm")
          , u = e("../public/PopupPolicy")
          , h = e("../public/MainMenu")
          , d = e("../public/IndexFooter")
          , f = e("../public/JsLoader")
          , p = e("../public/JsIndexLoader")
          , m = e("../public/Weborama");
        e("smoothscroll-polyfill").polyfill(),
        t.exports = r.extend({
            __className: "App",
            _resizable: [],
            _scrollable: [],
            pre: function() {
                this.lang = i("html").attr("lang"),
                this.fonts_loaded = !1,
                this.inited = !1
            },
            create: function() {
                var e = this;
                window.app = this,
                this.update_window_size(),
                this.weborama = new m,
                this.ww = 0,
                this.wh = 0,
                this.page_height = 0,
                this.scrollTop = 0,
                this.previousScrollTop = 0,
                this.scrollDir = !0,
                o.load({
                    custom: {
                        families: ["History", "Open Sans"]
                    },
                    active: function() {
                        e.fonts_loaded = !0,
                        e.resize()
                    }
                }),
                this.cfix = new s,
                this.sas = new a,
                i(window).resize(function(t) {
                    e.resize(t)
                }),
                i(window).scroll(function(t) {
                    e.scroll(t)
                }),
                i(document).ready(function(t) {
                    e.resize(t),
                    e.scroll(t)
                }),
                this.resize(),
                this.scroll(),
                this.setup_loader(),
                setTimeout(function() {
                    e.setup()
                }, 10)
            },
            setup_loader: function() {
                var e = this
                  , t = function() {
                    i(document.body).removeClass("loading").addClass("loaded")
                }
                  , n = function() {
                    e.cfix.setFixedContent(!1)
                }
                  , o = i(".js-barkli-index-loader");
                o.length ? this.loader = new p({
                    element: o,
                    delegate: this,
                    _onLoad: t,
                    _onFullyLoad: n
                }) : (o = i(".js-barkli-loader")).length ? this.loader = new f({
                    element: o,
                    delegate: this,
                    _onLoad: t,
                    _onFullyLoad: n
                }) : (this.loader = !1,
                t(),
                n()),
                this.loader && (window.scrollTo(0, 0),
                this.cfix.setFixedContent(!0))
            },
            setup: function() {
                var e = this
                  , t = document.getElementById("main-menu");
                this.main_menu = !!t && new h({
                    element: t,
                    delegate: e
                }),
                i(".js-popup-request-form").each(function(t, n) {
                    e.popup_request_form = new l({
                        element: n,
                        delegate: e
                    })
                }),
                i(".js-popup-email-form").each(function(t, n) {
                    e.popup_email_form = new c({
                        element: n,
                        delegate: e
                    })
                }),
                i(".js-popup-policy-trigger").each(function(t, n) {
                    e.popup_policy_form = new u({
                        element: n,
                        delegate: e
                    })
                }),
                i(".js-index-footer").each(function(t, n) {
                    e.index_footer = new d({
                        element: n,
                        delegate: e
                    })
                }),
                this.loader && this.loader.load()
            },
            add_resize: function(e) {
                for (var t = 0; t < this._resizable.length; t++)
                    if (this._resizable[t] == e)
                        return;
                this._resizable.push(e),
                this.ww && this.wh && e.resize(this.ww, this.wh)
            },
            remove_resize: function(e) {
                for (var t = [], n = !1, i = 0; i < this._resizable.length; i++)
                    this._resizable[i] == e ? n = !0 : t.push(e);
                n && (this._resizable = t)
            },
            add_scroll: function(e) {
                for (var t = 0; t < this._scrollable.length; t++)
                    if (this._scrollable[t] == e)
                        return;
                this._scrollable.push(e),
                e.scroll(this.scrollTop)
            },
            remove_scroll: function(e) {
                for (var t = [], n = !1, i = 0; i < this._scrollable.length; i++)
                    this._scrollable[i] == e ? n = !0 : t.push(e);
                n && (this._scrollable = t)
            },
            update_window_size: function() {
                this.ww = i(window).width(),
                this.wh = i(window).height()
            },
            resize: function() {
                this.update_window_size(),
                window.innerWidth;
                for (var e = 0; e < this._resizable.length; e++)
                    this._resizable[e].resize(this.ww, this.wh);
                this.update_page_height(!0)
            },
            update_page_height: function(e) {
                this.page_height = i("#content").outerHeight(!0),
                !e && this.index_footer && (this.index_footer.resize(this.ww, this.wh),
                this.index_footer.scroll(this.scrollTop))
            },
            scroll: function() {
                this.scrollTop = i(window).scrollTop(),
                this.scrollDir = this.scrollTop > this.previousScrollTop,
                this.previousScrollTop = this.scrollTop;
                for (var e = 0; e < this._scrollable.length; e++)
                    this._scrollable[e].scroll(this.scrollTop, this.scrollDir)
            }
        })
    }
    , {
        "../public/JsIndexLoader": 17,
        "../public/JsLoader": 18,
        "../public/IndexFooter": 29,
        "../public/MainMenu": 33,
        "../public/PopupEmailForm": 35,
        "../public/PopupPolicy": 36,
        "../public/PopupRequestForm": 37,
        "../public/Weborama": 45,
        "./ContentFix": 2,
        "./MinimalClass": 11,
        "./ScrollActionSimple": 12,
        jquery: 52,
        "smoothscroll-polyfill": 53,
        webfontloader: 54
    }],
    2: [function(e, t, n) {
        "use strict";
        var i = e("jquery")
          , o = e("class.extend");
        t.exports = o.extend({
            __className: "ContentFix",
            contentFixed: !1,
            contentFixedAt: 0,
            init: function() {
                var e = this;
                this.screen = i("#screen"),
                this.content = this.screen.find("#content"),
                window.setFixedContent = function(t) {
                    return e.setFixedContent(t)
                }
            },
            setFixedContent: function(e) {}
        })
    }
    , {
        "class.extend": 50,
        jquery: 52
    }],
    3: [function(e, t, n) {
        "use strict";
        e("jquery"),
        e("./ForceValidable")
    }
    , {
        "./ForceValidable": 9,
        jquery: 52
    }],
    4: [function(e, t, n) {}
    ],
    5: [function(e, t, n) {}
    ],
    6: [function(e, t, n) {}
    ],
    7: [function(e, t, n) {}
    ],
    8: [function(e, t, n) {}
    ],
    9: [function(e, t, n) {}
    ],
    10: [function(e, t, n) {
        "use strict";
        var i = e("jquery")
          , o = e("../lib/MinimalClass");
        t.exports = o.extend({
            __className: "Loader",
            loaderSVG: '<svg class="circular" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke="#4B575C" stroke-width="1" opacity=".2" fill="none"/><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>',
            loaderSVG_big: '<svg class="circular" viewBox="0 0 70 70"><circle cx="35" cy="35" r="30" stroke="#4B575C" stroke-width="1" opacity=".2" fill="none"/><circle class="path" cx="35" cy="35" r="30" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>',
            create: function() {
                this.element = i("<div>").addClass("loader"),
                this.css && this.element.addClass(this.css),
                this.big && this.element.addClass("big"),
                this.caption = !!this.text && i("<div>").addClass("caption").html(this.text),
                this.fixed && this.element.addClass("fixed"),
                this.target && this.appendTo(this.target)
            },
            show: function() {
                this.element.addClass("show")
            },
            hide: function() {
                this.element.removeClass("show")
            },
            appendTo: function(e) {
                this.target = i(e),
                this.element.appendTo(this.target),
                this.element.html(this.big ? this.loaderSVG_big : this.loaderSVG),
                this.caption && this.element.append(this.caption)
            },
            remove: function() {
                this.element.remove()
            }
        })
    }
    , {
        "../lib/MinimalClass": 11,
        jquery: 52
    }],
    11: [function(e, t, n) {
        "use strict";
        var i = e("jquery")
          , o = e("bezier-easing")
          , r = e("class.extend");
        t.exports = r.extend({
            __className: "MinimalClass",
            __nativeMode: !1,
            init: function(e) {
                this.delegate = !1,
                this.element = !1,
                this.opt = {},
                this.pre(e),
                "function" == typeof this._pre && this._pre(e),
                this.setOptions(e),
                this.create()
            },
            create: function() {},
            pre: function(e) {},
            _pre: null,
            log_buffer: [],
            log_log_buffer: function() {
                for (var e = 0; e < this.log_buffer.length; e++)
                    window.console.log.apply(this, this.log_buffer[e]);
                return this.log_buffer = [],
                "End of log buffer."
            },
            log: function() {
                void 0 !== window.console && "function" == typeof window.console.log ? window.console.log.apply(window.console, arguments) : alert(arguments.join("\n"))
            },
            setOptions: function(e) {
                if (void 0 !== e)
                    for (var t in e)
                        this.setOption(t, e[t])
            },
            setOption: function(e, t) {
                "element" !== e ? "delegate" !== e ? "_" !== e.substr(0, 1) ? this.opt[e] = t : this[e = e.substr(1)] = t : this.delegate = t : this.element = this.__nativeMode ? t : i(t)
            },
            mouseWheelLocked: !1,
            onMouseWheelLock: function(e) {
                e.preventDefault()
            },
            toggleMouseWheelLock: function(e) {
                return e !== this.mouseWheelLocked && (e ? i(document).bind("mousewheel", this.onMouseWheelLock) : i(document).unbind("mousewheel", this.onMouseWheelLock),
                this.mouseWheelLocked = e),
                this.mouseWheelLocked
            },
            in_array: function(e, t) {
                for (var n = t.length, i = 0; i < n; i++)
                    if (t[i] == e)
                        return !0;
                return !1
            },
            is_touch_device: function() {
                return "ontouchstart"in window || window.navigator.maxTouchPoints
            },
            setCaretPosition: function(e, t) {
                if (null != e)
                    if (e.createTextRange) {
                        var n = e.createTextRange();
                        n.move("character", t),
                        n.select()
                    } else
                        e.selectionStart ? (e.focus(),
                        e.setSelectionRange(t, t)) : e.focus()
            },
            transitionEndEventName: function() {
                var e, t = document.createElement("div"), n = {
                    transition: "transitionend",
                    OTransition: "otransitionend",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                    msTransition: "MSTransitionEnd"
                };
                for (e in n)
                    if (n.hasOwnProperty(e) && void 0 !== t.style[e])
                        return n[e]
            },
            animationEndEventName: function() {
                var e, t = document.createElement("div"), n = {
                    animation: "animationend",
                    OAnimation: "oAnimationEnd",
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "mozAnimationRnd",
                    msAnimation: "MSAnimationEnd"
                };
                for (e in n)
                    if (n.hasOwnProperty(e) && void 0 !== t.style[e])
                        return n[e]
            },
            xlink: function(e, t) {
                var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                return n.innerHTML = '<use xlink:href="#' + e + '"></use>',
                t && n.setAttribute("class", t),
                n
            },
            calculate_animated_value: function(e, t, n) {
                var i = t > e
                  , o = i ? t - e : e - t
                  , r = (i ? 1 : -1) * Math.max(.001, o / n);
                return i ? Math.min(t, e + r) : Math.max(t, e + r)
            },
            lz: function(e) {
                var t = document.getElementById("LZ");
                t || ((t = document.createElement("DIV")).id = "LZ",
                t.className = "LZ",
                document.body.appendChild(t)),
                t.appendChild(e)
            },
            preload_image: function(e, t) {
                var n = new Image;
                n.src = e,
                n.onload = function() {
                    "function" == typeof t && t(n)
                }
                ,
                this.lz(n)
            },
            fullscreen: function(e) {
                var t = document.fullscreenElement && null !== document.fullscreenElement || document.webkitFullscreenElement && null !== document.webkitFullscreenElement || document.mozFullScreenElement && null !== document.mozFullScreenElement || document.msFullscreenElement && null !== document.msFullscreenElement
                  , n = document.documentElement;
                return (t = t || !1) != e && (t ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : n.requestFullscreen ? n.requestFullscreen() : n.mozRequestFullScreen ? n.mozRequestFullScreen() : n.webkitRequestFullScreen ? n.webkitRequestFullScreen() : n.msRequestFullscreen && n.msRequestFullscreen(),
                !0)
            },
            calc_element_scroll_prc: function(e) {
                if (void 0 === e || "function" != typeof e.getBoundingClientRect)
                    return 0;
                var t = e.getBoundingClientRect()
                  , n = window.innerHeight + t.height;
                return t.top > window.innerHeight ? 0 : t.top < -t.height ? 1 : 1 - (t.top + t.height) / n
            },
            animate: function(e, t, n) {
                var i, r = Date.now(), s = o(t[0], t[1], t[2], t[3]);
                !function t() {
                    var o = (Date.now() - r) / e;
                    o > 1 ? (n(1),
                    cancelAnimationFrame(i)) : (n(s(o)),
                    i = requestAnimationFrame(t.bind(this)))
                }()
            },
            measure_distance: function(e, t) {
                return e >= 0 && t >= 0 || e <= 0 && t <= 0 ? e < t ? e - t : t - e : (Math.abs(t) + Math.abs(e)) * (t < 0 ? -1 : 0)
            },
            setTouchEvent: function(e) {
                var t = e.touchSurface;
                i(t).bind("touchstart", function(n) {
                    var o = n.originalEvent;
                    if (e.distanceX = 0,
                    e.distanceY = 0,
                    e.locked = !1,
                    1 != o.touches.length)
                        return !1;
                    (e.prevent || e.preventStart || Math.abs(e.movedX) < Math.abs(e.movedY)) && (o.preventDefault(),
                    o.stopPropagation());
                    var r, s, a = Math.round(i(window).width() / 2), l = (new Date).getTime();
                    r = s = {
                        top: o.touches[0].clientY,
                        left: o.touches[0].clientX
                    },
                    "function" == typeof e.onStart && e.onStart(e, o),
                    i(t).bind("touchmove", function(t) {
                        if (1 != (o = t.originalEvent).touches.length)
                            return !1;
                        (e.prevent || e.preventMove || Math.abs(e.movedX) < Math.abs(e.movedY)) && (o.preventDefault(),
                        o.stopPropagation()),
                        r = {
                            top: o.touches[0].clientY,
                            left: o.touches[0].clientX
                        },
                        e.prevDistanceX = e.distanceX,
                        e.prevDistanceY = e.distanceY,
                        e.distanceX = r.left - s.left,
                        e.distanceY = r.top - s.top,
                        e.movedX = e.distanceX - e.prevDistanceX,
                        e.movedY = e.distanceY - e.prevDistanceY,
                        e.onMove && e.onMove(e, o)
                    }),
                    i(t).bind("touchend", function(n) {
                        o = n.originalEvent,
                        (e.prevent || e.preventEnd || Math.abs(e.movedX) < Math.abs(e.movedY)) && (o.preventDefault(),
                        o.stopPropagation());
                        var c = (new Date).getTime();
                        e.onEnd && (e.dTime = c - l,
                        e.prevDistanceX = e.distanceX || 0,
                        e.prevDistanceY = e.distanceY || 0,
                        e.distanceX = r.left - s.left,
                        e.distanceY = r.top - s.top,
                        e.movedX = e.distanceX - e.prevDistanceX,
                        e.movedY = e.distanceY - e.prevDistanceY,
                        e.maxDTime = e.maxDTime || 1200,
                        e.minDistanceX = e.minDistanceX || 100,
                        e.minDistanceY = e.minDistanceY || 100,
                        e.moved = !1,
                        e.click = !1,
                        e.clickWH = !1,
                        e.dTime < e.maxDTime && (e.distanceX < -e.minDistanceX ? e.moved = "left" : e.distanceX > e.minDistanceX ? e.moved = "right" : e.distanceY < -e.minDistanceY ? e.moved = "up" : e.distanceY > e.minDistanceY ? e.moved = "down" : Math.abs(e.distanceY) < e.minDistanceY && Math.abs(e.distanceX) < e.minDistanceX && (e.clickWH = s.left > a ? 1 : -1)),
                        e.preventEndIfMoved && e.moved && (o.preventDefault(),
                        o.stopPropagation()),
                        e.onEnd(e, o)),
                        i(t).unbind("touchmove"),
                        i(t).unbind("touchend"),
                        e.distanceX = 0,
                        e.distanceY = 0
                    })
                })
            }
        })
    }
    , {
        "bezier-easing": 49,
        "class.extend": 50,
        jquery: 52
    }],
    12: [function(e, t, n) {
        "use strict";
        e("jquery");
        var i = e("./MinimalClass");
        t.exports = i.extend({})
    }
    , {
        "./MinimalClass": 11,
        jquery: 52
    }],
    13: [function(e, t, n) {
        "use strict";
        var i = e("./index.js")
          , o = (e("jquery"),
        e("./MinimalClass"));
        t.exports = o.extend({
            __className: "Slider",
            __nativeMode: !0,
            pre: function(e) {
                this.loaded = !1,
                this.loading = !1,
                this.loadedItems = 0,
                this.stagetRect = !1,
                this.switching = !0,
                this.pos = 0,
                this.item = [],
                this.autoplay = !1,
                this.autoplayTimer = !1,
                this.stageRect = !1,
                this.autoload = !0,
                this.loadOnDemand = !1,
                this.loadInSequence = !1,
                this.isUserInteracted = !1,
                this.itemSetupMode = "background",
                this.clickableStage = !0
            },
            create: function() {
                var e = this;
                this.stage = this.element.querySelector(".stage"),
                this.stage && (this.stageRect = this.stage.getBoundingClientRect(),
                this.pos_view = this.element.querySelector(".js-pos"),
                this.arrl = this.element.querySelector(".js-prev"),
                this.arrr = this.element.querySelector(".js-next"),
                i.querySelectorAll(".item", this.stage).forEach(function(t, n) {
                    var o = {
                        id: n,
                        obj: t,
                        src: t.getAttribute("data-src"),
                        image: t.querySelector(".image"),
                        active: i.hasClass(t, "active"),
                        width: 0,
                        height: 0,
                        w: 0,
                        h: 0,
                        loaded: !1,
                        loading: !1,
                        error: !1
                    };
                    o.active && (e.pos = n),
                    e.item.push(o)
                }),
                this.autoload && (this.loadOnDemand ? this.loadItem(this.pos, function(t) {
                    e.prepareSlider(),
                    e.switching = !1
                }) : this.load()),
                "function" == typeof this._create && this._create(),
                window.addEventListener("onresize", function() {
                    e.resize()
                }),
                this.resize())
            },
            resize: function() {
                this.stageRect = this.stage.getBoundingClientRect()
            },
            startAutoplay: function() {
                if (this.autoplay) {
                    this.stopAutoplay();
                    var e = this;
                    this.autoplayTimer = setTimeout(function() {
                        e.next()
                    }, this.autoplay)
                }
            },
            stopAutoplay: function(e) {
                this.autoplayTimer && (clearTimeout(this.autoplayTimer),
                this.autoplayTimer = !1),
                e && (this.autoplay = !1)
            },
            setLoading: function(e) {
                this.loading != e && (e ? i.addClass(this.element, "loading") : i.removeClass(this.element, "loading"),
                this.loading = e)
            },
            load: function(e) {
                if (this.loading)
                    return !1;
                if (this.loaded)
                    return i.cb(e);
                var t = this;
                return this.loadInSequence ? this.loadItem(0, e) : this.item.forEach(function(n, i) {
                    t.loadItem(i, e)
                }),
                !0
            },
            loadItem: function(e, t) {
                var n = this.item[e]
                  , o = this
                  , r = document.getElementById("LZ");
                r || ((r = i.create("LZ", document.body)).id = "LZ"),
                n.loading = !0,
                n.img = i.create(!1, r, "IMG"),
                i.bindEvent(n.img, "load", function(n) {
                    o.itemLoaded(n, e, t)
                }),
                i.bindEvent(n.img, "error", function(n) {
                    o.itemLoaded(n, e, t)
                }),
                n.img.src = n.src
            },
            itemLoaded: function(e, t, n) {
                var o = this.item[t];
                switch (e.type) {
                case "load":
                    o.width = o.img.width || 0,
                    o.height = o.img.height || 0,
                    this.setupItem(o);
                    break;
                case "error":
                    o.error = !0
                }
                this.loadedItems++,
                o.loading = !0,
                o.loaded = !0,
                this.loadOnDemand ? (this.setLoading(!1),
                i.cb(o)) : this.loadedItems >= this.item.length ? this.everythigLoaded(n) : t < this.item.length - 1 && this.loadInSequence && this.loadItem(t + 1, n)
            },
            setupItem: function(e) {
                switch (this.itemSetupMode) {
                case "background.image":
                    var t = document.createElement("DIV");
                    t.className = "image",
                    t.style.backgroundImage = "url(" + e.src + ")",
                    e.obj.appendChild(t),
                    e.image = t;
                    break;
                case "background":
                default:
                    e.obj.style.backgroundImage = "url(" + e.src + ")"
                }
            },
            everythigLoaded: function(e) {
                this.loading = !1,
                this.loaded = !0,
                this.setLoading(!1),
                this.switching = !1,
                this.loaded = !0,
                this.removeItemsWithErrors(),
                this.prepareSlider(),
                this.startAutoplay(),
                i.cb(e)
            },
            prepareSlider: function() {
                var e = this.item[this.pos];
                i.addClass(e.obj, "active"),
                e.active = !0,
                this.setupEvents()
            },
            setupEvents: function() {
                var e = this;
                this.arrl && i.bindEvent(this.arrl, "click", function(t) {
                    e.userInteracted(),
                    e.prev(),
                    "function" == typeof e.onClick && e.onClick(e)
                }),
                this.arrr && i.bindEvent(this.arrr, "click", function(t) {
                    e.userInteracted(),
                    e.next(),
                    "function" == typeof e.onClick && e.onClick(e)
                }),
                this.stage && this.clickableStage && this.item.length > 1 && i.bindEvent(this.stage, "click", function(t) {
                    e.userInteracted();
                    var n = e.stage.getBoundingClientRect();
                    t.pageX > n.left + n.width / 2 ? e.next() : e.prev(),
                    "function" == typeof e.onClick && e.onClick(e)
                })
            },
            startTimer: function() {},
            stopTimer: function() {},
            userInteracted: function() {
                this.isUserInteracted = !0,
                this.stopAutoplay(!0),
                this.stopTimer()
            },
            removeItemsWithErrors: function() {
                for (var e = [], t = 0, n = 0, i = 0; i < this.item.length; i++)
                    this.item[i].error ? (this.stage.removeChild(this.item[i].obj),
                    t++) : (this.item[i].id = n++,
                    e.push(this.item[i]));
                t && (this.item = e)
            },
            prev: function(e, t) {
                var n = this.pos - 1;
                n < 0 && (n = this.item.length - 1),
                this.switchSlide(n, !1, e, t)
            },
            next: function(e, t) {
                var n = this.pos + 1;
                n >= this.item.length && (n = 0),
                this.switchSlide(n, !0, e, t)
            },
            switchSlide: function(e, t, n, o, r, s) {
                if (this.loading || !r && (this.pos == e || this.switching))
                    return !1;
                void 0 === o && (o = !1),
                void 0 === t && (t = e > this.pos),
                this.switching = !0;
                var a = this
                  , l = this.item[this.pos]
                  , c = this.item[e]
                  , u = t ? "Next" : "Prev"
                  , h = i.animationEndEventName()
                  , d = i.transitionEndEventName()
                  , f = 0
                  , p = function() {
                    o || (i.removeClasses(l.obj, ["navOut" + u, "flyOut" + u]),
                    i.removeClasses(c.obj, ["navIn" + u, "flyIn" + u, "fly" + u])),
                    i.removeClass(l.obj, "active"),
                    i.addClass(c.obj, "active"),
                    l.active = !1,
                    c.active = !0,
                    a.pos = e,
                    a.pos_view && (a.pos_view.innerHTML = e + 1 + " из " + a.item.length),
                    a.switching = !1,
                    a.startAutoplay(),
                    "function" == typeof a.onSwitch && a.onSwitch(a, s)
                }
                  , m = function(e) {
                    this.removeEventListener(d, m, !1),
                    ++f >= 2 && p()
                }
                  , g = function(e) {
                    this.removeEventListener(h, g, !1),
                    ++f >= 2 && p()
                };
                return this.loadOnDemand && !c.loaded ? (this.loadItem(c.id, function() {
                    a.switchSlide(e, t, n, o, !0)
                }),
                !0) : (void 0 !== this.dots && "function" == typeof this.dots.activate && this.dots.activate(e),
                !o && h ? (l.obj.addEventListener(h, g, !1),
                c.obj.addEventListener(h, g, !1),
                i.addClass(l.obj, "navOut" + u),
                i.addClass(c.obj, "navIn" + u)) : !o && d ? (l.obj.addEventListener(d, m, !1),
                c.obj.addEventListener(d, m, !1),
                i.addClass(c.obj, "fly" + u),
                setTimeout(function() {
                    i.addClass(l.obj, "flyOut" + u),
                    i.addClass(c.obj, "flyIn" + u)
                }, 10)) : (o = !0,
                p()),
                !0)
            }
        })
    }
    , {
        "./MinimalClass": 11,
        "./index.js": 16,
        jquery: 52
    }],
    14: [function(e, t, n) {
        "use strict";
        var i = e("jquery")
          , o = e("@vimeo/player")
          , r = e("./Loader")
          , s = e("./MinimalClass");
        t.exports = s.extend({
            __className: "VimeoPlayer",
            _players: [],
            _pause_other_players: function() {
                var e = this;
                this._players.forEach(function(t, n) {
                    t != e && t.pause()
                })
            },
            pre: function(e) {
                this.id = 0,
                this.player_options = {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    loop: !1
                },
                this.onOpen = !1,
                this.onClose = !1,
                this.onPlay = !1,
                this.onEnded = !1,
                this.onReady = !1,
                this.onLoaded = !1,
                this.width = 0,
                this.height = 0,
                this.video_width = 0,
                this.video_height = 0,
                this.resizeMode = "fs",
                this.ready = !1,
                this.playing = !1,
                this.opened = !1,
                this.is_loaded = !1,
                this.autoplay = !0,
                this.autoopen = !1,
                this.css_class = !1,
                this.closeBtn = !1
            },
            create: function() {
                var e = this;
                this._players.push(this),
                this.element ? (this.closeBtn = this.find(".js-close"),
                this.closeBtn.length || (this.closeBtn = !1),
                this.id || (this.id = this.element.attr("vimeo-id") || 0)) : (this.element = i("<div>").addClass("vimeo-player"),
                this.id && this.element.appendTo(document.body),
                this.closeBtn = i("<div>").addClass("arr close js-close"),
                this.closeBtn.append('<svg class="circle"><use xlink:href="#circle"></use></svg>'),
                this.closeBtn.append('<svg class="icon"><use xlink:href="#close"></use></svg>'),
                this.closeBtn.appendTo(this.element),
                this.loader = new r({
                    _target: this.element,
                    _css: "white",
                    _big: void 0 !== this.loader_text,
                    _text: this.loader_text
                })),
                this.id ? (this.player_options.id = this.id,
                this.closeBtn && this.closeBtn.click(function(t) {
                    e.close(t)
                }),
                this.player_box = i("<div>").addClass("player-box").appendTo(this.element),
                this.css_class && this.element.addClass(this.css_class),
                this.auto_create_player && this.create_player(),
                this._create(),
                window.app.add_resize(this),
                this.scalable_circle_css_class) : this.log("Unable to create vimeo player: no id")
            },
            create_player: function() {
                var e = this;
                this.player = new o(this.player_box[0],this.player_options),
                this.player.setLoop(!1),
                this.player.on("loaded", function() {
                    e.player.getVideoWidth().then(function(t) {
                        e.video_width = t,
                        e.resize()
                    }).catch(function(e) {}),
                    e.player.getVideoHeight().then(function(t) {
                        e.video_height = t,
                        e.resize()
                    }).catch(function(e) {}),
                    e.is_loaded = !0,
                    e.loaded()
                }),
                this.player.on("play", function() {
                    e.playing = !0,
                    "function" == typeof e.onPlay && e.onPlay(this)
                }),
                this.player.on("pause", function() {
                    e.playing = !1,
                    "function" == typeof e.onPause && e.onPause(this)
                }),
                this.player.on("ended", function() {
                    e.playing = !1,
                    "function" == typeof e.onEnded && e.onEnded(this)
                }),
                this.element.bind("click", function(t) {
                    t.target == this && e.close()
                })
            },
            _create: function() {},
            resize: function() {
                var e = this.element.width()
                  , t = this.element.height();
                switch (this.resizeMode) {
                case "fs":
                    this.width = e,
                    this.height = t;
                    break;
                default:
                    if (!this.video_width || !this.video_height)
                        return !1;
                    this.width = Math.round(.8 * e),
                    this.height = Math.round(this.width / this.video_width * this.video_height),
                    this.height > .8 * t && (this.height = Math.round(.8 * t),
                    this.width = Math.round(this.height / this.video_height * this.video_width))
                }
                this.player_box.find("iframe").css({
                    width: 960,
                    height: 540
                }),
                this.ready || (this.ready = !0,
                this.element.trigger("ready", [this]),
                "function" == typeof self.onReady && self.onReady(this))
            },
            loaded: function() {
                this.resize(),
                this.autoopen ? this.open() : this.autoplay && this.opened && (this.play(),
                this.element.addClass("show")),
                "function" == typeof this.onLoaded && this.onLoaded(this)
            },
            play: function() {
                if (this._pause_other_players(),
                this.loader.hide(),
                !this.player)
                    return this.create_player();
                this.playing || this.player.play()
            },
            pause: function() {
                this.playing && this.player.pause()
            },
            open: function(e) {
                this.element.addClass("open show"),
                this.opened = !0,
                this.openingComplete(e)
            },
            openingComplete: function(e) {
                this.autoplay && this.play(),
                "function" == typeof this.onOpen && this.onOpen(this, e)
            },
            close: function(e) {
                this.element.removeClass("show open"),
                this.opened = !1,
                this.pause(),
                this.closingComplete(e)
            },
            closingComplete: function(e) {
                "function" == typeof this.onClose && this.onClose(this, e)
            },
            remove: function() {
                var e = this
                  , t = [];
                this._players.forEach(function(n, i) {
                    n !== e && t.push(n)
                }),
                this._players = t,
                this.player.unload(),
                this.element.remove()
            }
        })
    }
    , {
        "./Loader": 10,
        "./MinimalClass": 11,
        "@vimeo/player": 48,
        jquery: 52
    }],
    15: [function(e, t, n) {
        "use strict";
        e("jquery");
        var i = e("./VimeoPlayer");
        t.exports = i.extend({
            __className: "VimeoPlayerPopper"
        })
    }
    , {
        "./VimeoPlayer": 14,
        jquery: 52
    }],
    16: [function(e, t, n) {
        "use strict";
        Array.prototype.slice
    }
    , {}],
    17: [function(e, t, n) {}
    ],
    18: [function(e, t, n) {}
    ],
    19: [function(e, t, n) {}
    ],
    20: [function(e, t, n) {}
    ],
    21: [function(e, t, n) {}
    ],
    22: [function(e, t, n) {}
    ],
    23: [function(e, t, n) {}
    ],
    24: [function(e, t, n) {
        "use strict";
        e("jquery");
        var i = e("../lib/MinimalClass");
        e("../lib/VimeoPlayerPopper");
        t.exports = i.extend({
            __className: "CardsCard",
            create: function() {
                var e = this;
                this.arrow_direction = !0,
                this.active = !1,
                this.opened = !1,
                this.is_previous = !1,
                this.setpos_animated_callback = null,
                this.vimeo_id = this.element.attr("vimeo-id") || !1,
                this.player = null,
                this.video = this.element.find("video"),
                this.visual = this.element.find(".js-visual"),
                this.content = this.element.find(".js-content"),
                this.content_box = this.element.find(".js-content-box"),
                this.arrow = this.element.find(".js-arrow"),
                this.visual.bind("click", function(t) {
                    e.delegate && "function" == typeof e.delegate.enableTimer && e.delegate.enableTimer(!1),
                    e.mouse_visual(t)
                }),
                this.vimeo_id && this.visual.addClass("with-video"),
                this.element.bind(this.transitionEndEventName(), function(t) {
                    if (t.target === this)
                        switch (t.originalEvent.propertyName) {
                        case "transform":
                            e.setpos_complete(t)
                        }
                }),
                this.content_box.bind(this.transitionEndEventName(), function(t) {
                    if (t.target === this)
                        switch (t.originalEvent.propertyName) {
                        case "transform":
                            e.opened || e.element.removeClass("expand")
                        }
                })
            },
            load_vimeo_player: function(e) {
                $("#modal_video").modal("show");
                var t = "https://www.youtube.com/embed/" + this.vimeo_id + "?autoplay=1;enablejsapi=1";
                console.log(t),
                $(".modal_video .modal-body iframe").attr("src", t)
            },
            mouse_visual: function(e) {
                switch (e.type) {
                case "click":
                    if (this.delegate && this.delegate.busy)
                        return;
                    this.active ? this.load_vimeo_player(!0) : this.delegate && "function" == typeof this.delegate.switch_card && this.delegate.switch_card(this.id, null, !0)
                }
            },
            setpos: function(e, t, n) {
                t && this.element.addClass("animated1"),
                this.element.css({
                    transform: "translateX(" + e + "px)"
                }),
                this.setpos_animated_callback = null,
                "function" == typeof n && (t ? this.setpos_animated_callback = n : n(this))
            },
            setpos_complete: function() {
                this.element.removeClass("animated1"),
                "function" == typeof this.setpos_animated_callback && this.setpos_animated_callback(this)
            },
            set_previous: function(e) {
                this.is_previous = e,
                e ? this.element.addClass("right") : this.element.removeClass("right")
            },
            resize: function(e, t) {
                var n = {
                    width: e,
                    height: t
                };
                this.element.css(n),
                this.visual.css(n),
                this.content.css(n)
            },
            open: function() {
                this.opened || (this.element.addClass("expand open"),
                this.opened = !0)
            },
            close: function() {
                this.opened && (this.element.removeClass("open"),
                this.opened = !1)
            },
            activate: function(e, t, n) {
                this.element.addClass("active"),
                this.active = !0,
                this.setpos(e, t, n),
                this.video.length && this.video[0].play(),
                this.open()
            },
            deactivate: function() {
                this.element.removeClass("active"),
                this.video.length && this.video[0].pause(),
                this.active = !1
            }
        })
    }
    , {
        "../lib/MinimalClass": 11,
        "../lib/VimeoPlayerPopper": 15,
        jquery: 52
    }],
    25: [function(e, t, n) {
        "use strict";
        var i = e("jquery")
          , o = e("../lib/MinimalClass")
          , r = e("./Dots")
          , s = e("./CardsCard")
          , a = e("./PxLine");
        t.exports = o.extend({
            __className: "CardsSlider",
            create: function() {
                var e = this;
                this.busy = !1,
                this.isUserInteracted = !1,
                this.autotimer_active = !1,
                this.user_interaction_timeout_timer = !1,
                this.current_item_locked = !1,
                this.cards_type = this.element.attr("data-cards-type"),
                this.cards = [],
                this.cards_order = [],
                this.cards_order_prev = [],
                this.cards_order_next = [],
                this.dots = !1,
                this.autotimer_active = !1,
                this.user_interaction_timeout_timer = !1,
                this.scrolled_into_viewport = !0,
                this.pos = -1,
                this.width = 0,
                this.height = 0,
                this.initial_position_x = 0,
                this.active_position_x = 0,
                this.centered = !1,
                this.carouseled = !1,
                this.card_min_width = 360,
                this.card_max_width = 480,
                this.min_screen_width = 1024,
                this.max_screen_width = 1920;
                var t = this.element.find(".js-px-line");
                t.length && new a({
                    element: t,
                    _prc_source: this.element
                }),
                this.cards_element = this.element.find(".js-cards"),
                this.cards_element.length && (this.scrolled_into_viewport = !this.element.hasClass("js-should-scroll-into-viewport"),
                this.cards_element.find(".js-card").each(function(t, n) {
                    e.cards.push(new s({
                        _id: t,
                        element: n,
                        delegate: e
                    }))
                }),
                this.dots_element = this.element.find(".js-dots"),
                this.dots_element.length && (this.dots = new r({
                    element: this.dots_element,
                    delegate: e,
                    _onChange: function(t, n, i) {
                        e.switch_card(t, n, i)
                    }
                })),
                this.back2first = this.cards_element.find(".js-back2first"),
                this.back2first.length && this.back2first.click(function(t) {
                    e.userInteracted(),
                    e.switch_card(e.dots.with_zero ? -1 : 0)
                })),
                window.app.add_resize(this),
                window.app.add_scroll(this)
            },
            next: function() {
                var e = this.pos + 1;
                e >= this.cards.length && (e = 0),
                this.switch_card(e, !0)
            },
            prev: function() {
                var e = this.pos - 1;
                e < 0 && (e = this.cards.length - 1),
                this.switch_card(e, !1)
            },
            switch_card: function(e, t, n, i) {
                return n && this.userInteracted(),
                !this.busy && this.pos != e && (void 0 === i && (i = !0),
                void 0 === t && (t = 0),
                e >= 0 ? this.element.find(".js-hide-text").addClass("hide") : this.element.find(".js-hide-text").removeClass("hide"),
                this.pos >= 0 && this.cards[this.pos].close(),
                this.dots.activate(e),
                this.repos(e, i),
                !0)
            },
            enableTimer: function(e) {
                this.dots && "function" == typeof this.dots.enableTimer && this.dots.enableTimer(e)
            },
            userInteracted: function() {
                if (!this.current_item_locked) {
                    this.isUserInteracted = !0,
                    this.stopTimer();
                    var e = this;
                    this.clearUserInteractionTimeout(),
                    this.user_interaction_timeout_timer = setTimeout(function() {
                        e.isUserInteracted = !1,
                        e.startTimer()
                    }, 5e3)
                }
            },
            clearUserInteractionTimeout: function() {
                this.user_interaction_timeout_timer && (clearTimeout(this.user_interaction_timeout_timer),
                this.user_interaction_timeout_timer = null)
            },
            scroll: function(e, t) {
                if (!this.scrolled_into_viewport) {
                    var n = this.cards_element[0].getBoundingClientRect();
                    window.app.wh - (n.top + n.height) > 0 && (this.element.addClass("scrolled_into_viewport"),
                    this.scrolled_into_viewport = !0)
                }
                if (!this.current_item_locked) {
                    var i = this.calc_element_scroll_prc(this.element[0]);
                    i >= .4 && i <= .9 ? this.isUserInteracted || this.startTimer() : (this.clearUserInteractionTimeout(),
                    this.isUserInteracted = !1,
                    this.pauseTimer())
                }
            },
            startTimer: function() {
                this.autotimer_active || (this.enableTimer(!0),
                this.autotimer_active = !0)
            },
            pauseTimer: function() {
                this.autotimer_active && (this.enableTimer(!1),
                this.autotimer_active = !1)
            },
            stopTimer: function() {
                this.enableTimer(!1),
                this.autotimer_active = !1
            },
            lock_current_item: function(e) {
                e ? (this.current_item_locked = !0,
                this.stopTimer(),
                this.clearUserInteractionTimeout()) : (this.current_item_locked = !1,
                this.userInteracted())
            },
            recalc: function() {
                var e = i(window).width()
                  , t = this.cards_element.height()
                  , n = Math.round(e / 12 * 2)
                  , o = Math.round(e * (e <= this.max_screen_width ? .1 : .05))
                  , r = this.card_max_width - this.card_min_width
                  , s = Math.min(1, (e - this.min_screen_width) / (this.max_screen_width - this.min_screen_width))
                  , a = Math.max(this.card_min_width, Math.min(this.card_max_width, Math.round(this.card_min_width + r * s)))
                  , l = Math.round(e - .66 * a)
                  , c = (this.cards.length + 1) * (a + o)
                  , u = e >= c
                  , h = !u && e < c - (a + o + (a - (l - o)));
                this.card_width = a,
                this.card_padding = o,
                this.initial_position_x = l,
                this.active_position_x = n,
                this.carouseled != h && this.reorder(this.pos),
                this.centered = u,
                this.carouseled = h,
                this.width = e,
                this.height = t
            },
            resize: function(e, t) {
                this.recalc(),
                this.cards_element.css({
                    width: this.width
                });
                var n = this;
                i(this.cards).each(function(e, t) {
                    t.resize(n.card_width, n.height)
                }),
                this.repos(this.pos, !1),
                this.inited || (this.inited = !0,
                this.dots.with_zero || this.switch_card(0, null, null, !1))
            },
            reorder: function(e) {
                var t;
                for (this.cards_order = [],
                this.cards_order_prev = [],
                this.cards_order_next = [],
                t = 0; t < this.cards.length; t++)
                    e > t ? this.cards_order_prev.push(t) : e < t && this.cards_order_next.push(t);
                for (this.cards_order_prev.reverse(),
                this.carouseled,
                t = 0; t < this.cards_order_prev.length; t++)
                    this.cards_order.push(this.cards_order_prev[t]);
                for (e >= 0 && this.cards_order.push(e),
                t = 0; t < this.cards_order_next.length; t++)
                    this.cards_order.push(this.cards_order_next[t])
            },
            repos: function(e, t) {
                var n = this
                  , o = 0
                  , r = this.card_width + this.card_padding;
                if (e < 0 && !t)
                    o = this.initial_position_x,
                    i(this.cards).each(function(e, t) {
                        t.setpos(o),
                        o += r
                    }),
                    this.pos = e;
                else {
                    if (this.reorder(e),
                    e >= this.cards.length - 1 ? this.back2first.css({
                        display: "block"
                    }) : this.back2first.css({
                        display: "none"
                    }),
                    this.busy)
                        return;
                    this.busy = !0;
                    var s, a, l, c = t ? function(t) {
                        n.pos = e,
                        n.busy = !1
                    }
                    : null;
                    for (o = this.active_position_x - r,
                    s = 0; s < this.cards_order_prev.length; s++)
                        l = this.cards_order_prev[s],
                        (a = this.cards[l]).set_previous(!0),
                        a.deactivate(),
                        a.setpos(o, t),
                        o -= r;
                    for (e >= 0 ? this.cards[e].activate(this.active_position_x, t, c) : setTimeout(c, 1e3),
                    o = this.active_position_x + r + this.card_width,
                    s = 0; s < this.cards_order_next.length; s++)
                        l = this.cards_order_next[s],
                        (a = this.cards[l]).set_previous(!1),
                        a.deactivate(),
                        a.setpos(o, t),
                        o += r;
                    t || (n.pos = e,
                    n.busy = !1)
                }
            }
        })
    }
    , {
        "../lib/MinimalClass": 11,
        "./CardsCard": 24,
        "./Dots": 27,
        "./PxLine": 38,
        jquery: 52
    }],
    26: [function(e, t, n) {
        "use strict";
        e("jquery");
        var i = e("../lib/MinimalClass");
        t.exports = i.extend({
            __className: "CircleTimer",
            pre: function() {
                this.autorestart = !1,
                this.mode = "jquery"
            },
            create: function() {
                var e = this;
                this.tmr = !1,
                this.timer = this.element.find(".js-circle-timer"),
                this.time || (this.time = parseInt(this.timer.attr("data-time")) || 5),
                "css" == this.mode && this.timer.bind(this.transitionEndEventName(), function(t) {
                    if (t.target === this)
                        switch (t.originalEvent.propertyName) {
                        case "stroke-dashoffset":
                            e.complete(t)
                        }
                })
            },
            start: function() {
                switch (this.mode) {
                case "jquery":
                    var e = this;
                    this.timer.css({
                        strokeDashoffset: 190
                    }).animate({
                        strokeDashoffset: 0
                    }, 1e3 * this.time, "linear", function() {
                        e.complete()
                    });
                    break;
                case "css":
                    this.timer.addClass("timer" + this.time)
                }
            },
            stop: function() {
                switch (this.tmr && (clearTimeout(this.tmr),
                this.tmr = null),
                this.mode) {
                case "jquery":
                    this.timer.stop().css({
                        strokeDashoffset: 190
                    });
                    break;
                case "css":
                    this.timer.removeClass("timer" + this.time)
                }
            },
            complete: function(e) {
                if (this.stop(),
                "function" == typeof this.onComplete && this.onComplete(this),
                this.autorestart) {
                    var t = this;
                    this.tmr = setTimeout(function() {
                        t.start()
                    }, 10)
                }
            }
        })
    }
    , {
        "../lib/MinimalClass": 11,
        jquery: 52
    }],
    27: [function(e, t, n) {
        "use strict";
        var i = e("jquery")
          , o = e("../lib/MinimalClass")
          , r = e("./CircleTimer");
        t.exports = o.extend({
            __className: "Dots",
            create: function() {
                var e = this;
                this.dots = [],
                this.timer_dot = !1,
                this.timers_enabled = !1,
                this.active = -1,
                this.with_zero = !1,
                this.element.find(".dot").each(function(t, n) {
                    var o = i(n)
                      , s = (o.find(".js-circle-timer"),
                    {
                        id: t,
                        obj: o,
                        timer: new r({
                            element: o,
                            _time: 10,
                            _autorestart: !1,
                            _onComplete: function(t) {
                                e.next_item()
                            }
                        }),
                        active: o.hasClass("active"),
                        activate: function(e, t) {
                            this.active != e && (e ? (this.obj.addClass("active"),
                            t && this.start_timer()) : (this.obj.removeClass("active"),
                            this.cancel_timer()),
                            this.active = e)
                        },
                        start_timer: function() {
                            this.timer && e.timers_enabled && this.timer.start()
                        },
                        cancel_timer: function() {
                            this.timer && this.timer.stop()
                        }
                    });
                    s.active && (e.active = s.id),
                    s.obj.hasClass("zero") && (e.with_zero = !0),
                    s.obj.bind("click", function(t) {
                        e.switch_item(s.id, null, !0)
                    }),
                    e.dots.push(s)
                })
            },
            activate: function(e) {
                var t = e + (this.with_zero ? 1 : 0);
                this.active != t && (this.active >= 0 && this.dots[this.active].activate(!1),
                this.active = t,
                this.dots[this.active].activate(!0, this.timers_enabled))
            },
            enableTimer: function(e) {
                this.timers_enabled = e,
                e ? (this.active < 0 && (this.active = 0,
                this.dots[this.active].activate(!0)),
                this.dots[this.active].start_timer()) : this.active >= 0 && this.dots[this.active].cancel_timer()
            },
            next_item: function() {
                var e = this.active + 1;
                e >= this.dots.length && (e = 0),
                this.switch_item(e)
            },
            prev_item: function() {
                var e = this.active - 1;
                e < 0 && (e = this.dots.length - 1),
                this.switch_item(e)
            },
            switch_item: function(e, t, n) {
                var i = this.active >= 0 && this.dots[this.active]
                  , o = this.dots[e];
                (t || !o || "function" != typeof this.onChange || this.onChange(o.id + (this.with_zero ? -1 : 0), null, n)) && (i && i.id == o.id || (i.activate(!1),
                o.activate(!0),
                this.active = o.id,
                this.timers_enabled && o.start_timer()))
            }
        })
    }
    , {
        "../lib/MinimalClass": 11,
        "./CircleTimer": 26,
        jquery: 52
    }],
    28: [function(e, t, n) {
        e("jquery");
        var i = e("../lib/MinimalClass");
        t.exports = i.extend({
            __className: "FloatingTitleBox"
        });
        i.extend({
            __className: "FloatingTitle",
            create: function() {
                this.px = 0,
                this.top = this.element.find(".js-top"),
                this.top_span = this.top.find("span"),
                this.bottom = this.element.find(".js-bottom"),
                this.bottom_span = !!this.bottom.length && this.bottom.find("span"),
                this.setpx(this.px)
            },
            resize: function() {
                this.height = this.element.outerHeight(!0),
                this.setpx(this.px)
            },
            setpx: function(e) {
                if (!this.bottom_span)
                    return !1;
                this.px = Math.min(e, this.height);
                var t = this.height - this.px;
                this.bottom.css({
                    top: t,
                    height: this.px
                }),
                this.bottom_span.css({
                    transform: "translateY(-" + t + "px)"
                })
            },
            setoffset: function(e) {
                this.element.css({
                    transform: "translateY(-" + e + "px)"
                })
            }
        })
    }
    , {
        "../lib/MinimalClass": 11,
        jquery: 52
    }],
    29: [function(e, t, n) {}
    ],
    30: [function(e, t, n) {}
    ],
    31: [function(e, t, n) {}
    ],
    32: [function(e, t, n) {}
    ],
    33: [function(e, t, n) {}
    ],
    34: [function(e, t, n) {}
    ],
    35: [function(e, t, n) {}
    ],
    36: [function(e, t, n) {}
    ],
    37: [function(e, t, n) {}
    ],
    38: [function(e, t, n) {}
    ],
    39: [function(e, t, n) {}
    ],
    40: [function(e, t, n) {}
    ],
    41: [function(e, t, n) {}
    ],
    42: [function(e, t, n) {}
    ],
    43: [function(e, t, n) {}
    ],
    44: [function(e, t, n) {}
    ],
    45: [function(e, t, n) {
        "use strict";
        var i = e("jquery")
          , o = e("class.extend");
        t.exports = o.extend({
            init: function() {
                this.lz = !1,
                window.weborama = this
            },
            add: function(e) {
                this.lz || (this.lz = i("#LZ"),
                this.lz.length || (this.lz = i("<div></div>", {
                    id: "LZ"
                }).addClass("LZ").appendTo(i(document.body)))),
                this.lz.append('<img src="https://barkliru.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=4745&a.cp=' + e + '&a.ct=d">')
            }
        })
    }
    , {
        "class.extend": 50,
        jquery: 52
    }],
    46: [function(e, t, n) {
        "use strict";
        var i = e("jquery")
          , o = (e("../lib/index.js"),
        e("../lib/App"))
          , r = (e("./RequestForm"),
        e("./CardsSlider"));
        window.parallax_enabled = !1,
        window.parallax_enabled && i(document.body).addClass("with-animation"),
        new o,
        i(".js-cards-slider").each(function(e, t) {
            new r({
                element: t
            })
        })
    }
    , {
        "../lib/App": 1,
        "../lib/Loader": 10,
        "../lib/VimeoPlayer": 14,
        "../lib/index.js": 16,
        "./BarkliMap": 19,
        "./BarkliSlider": 21,
        "./BarkliSliderHouse": 22,
        "./Building": 23,
        "./CardsSlider": 25,
        "./FloatingTitleBox": 28,
        "./IndexScreen": 30,
        "./Interiors": 31,
        "./Office": 34,
        "./RequestForm": 39,
        "./SideJoker": 41,
        "./TTKGallery": 43,
        jquery: 52
    }],
    47: [function(e, t, n) {}
    , {}],
    48: [function(e, t, n) {}
    , {}],
    49: [function(e, t, n) {}
    , {}],
    50: [function(e, t, n) {
        !function() {
            var e = !1
              , n = /xyz/.test(function() {
                xyz
            }) ? /\b_super\b/ : /.*/;
            this.Class = function() {}
            ,
            Class.extend = function(t, i) {
                null == i && (i = t,
                t = "Class");
                var o = this.prototype;
                e = !0;
                var r = new this;
                for (var s in e = !1,
                i)
                    r[s] = "function" == typeof i[s] && "function" == typeof o[s] && n.test(i[s]) ? function(e, t) {
                        return function() {
                            var n = this._super;
                            this._super = o[e];
                            var i = t.apply(this, arguments);
                            return this._super = n,
                            i
                        }
                    }(s, i[s]) : i[s];
                function a() {
                    !e && this.init && this.init.apply(this, arguments)
                }
                a.prototype = r;
                var l = new Function("return function " + t + "(){ }")();
                return a.prototype.constructor = l,
                a.extend = arguments.callee,
                a
            }
            ,
            t.exports = Class
        }()
    }
    , {}],
    51: [function(e, t, n) {}
    , {}],
    52: [function(e, t, n) {
        !function(e, n) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
            : n(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            "use strict";
            var n = []
              , i = e.document
              , o = Object.getPrototypeOf
              , r = n.slice
              , s = n.concat
              , a = n.push
              , l = n.indexOf
              , c = {}
              , u = c.toString
              , h = c.hasOwnProperty
              , d = h.toString
              , f = d.call(Object)
              , p = {}
              , g = function(e, t) {
                return new g.fn.init(e,t)
            }
              , v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
              , y = /^-ms-/
              , b = /-([a-z])/g
              , w = function(e, t) {
                return t.toUpperCase()
            };
            function x(e) {
                var t = !!e && "length"in e && e.length
                  , n = g.type(e);
                return "function" !== n && !g.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            g.fn = g.prototype = {
                jquery: "3.2.1",
                constructor: g,
                length: 0,
                toArray: function() {
                    return r.call(this)
                },
                get: function(e) {
                    return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = g.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t
                },
                each: function(e) {
                    return g.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(g.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(r.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length
                      , n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: a,
                sort: n.sort,
                splice: n.splice
            },
            g.extend = g.fn.extend = function() {
                var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof s && (c = s,
                s = arguments[a] || {},
                a++),
                "object" == typeof s || g.isFunction(s) || (s = {}),
                a === l && (s = this,
                a--); a < l; a++)
                    if (null != (e = arguments[a]))
                        for (t in e)
                            n = s[t],
                            s !== (i = e[t]) && (c && i && (g.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1,
                            r = n && Array.isArray(n) ? n : []) : r = n && g.isPlainObject(n) ? n : {},
                            s[t] = g.extend(c, r, i)) : void 0 !== i && (s[t] = i));
                return s
            }
            ,
            g.extend({
                expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === g.type(e)
                },
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = g.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                },
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== u.call(e) || (t = o(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || d.call(n) !== f))
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    m(e)
                },
                camelCase: function(e) {
                    return e.replace(y, "ms-").replace(b, w)
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (x(e))
                        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                            ;
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i]))
                                break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(v, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (x(Object(e)) ? g.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
                    n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : l.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                        e[o++] = t[i];
                    return e.length = o,
                    e
                },
                grep: function(e, t, n) {
                    for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
                        !t(e[o], o) !== s && i.push(e[o]);
                    return i
                },
                map: function(e, t, n) {
                    var i, o, r = 0, a = [];
                    if (x(e))
                        for (i = e.length; r < i; r++)
                            null != (o = t(e[r], r, n)) && a.push(o);
                    else
                        for (r in e)
                            null != (o = t(e[r], r, n)) && a.push(o);
                    return s.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, i, o;
                    if ("string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    g.isFunction(e))
                        return i = r.call(arguments, 2),
                        (o = function() {
                            return e.apply(t || this, i.concat(r.call(arguments)))
                        }
                        ).guid = e.guid = e.guid || g.guid++,
                        o
                },
                now: Date.now,
                support: p
            }),
            "function" == typeof Symbol && (g.fn[Symbol.iterator] = n[Symbol.iterator]),
            g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                c["[object " + t + "]"] = t.toLowerCase()
            });
            var _ = function(e) {
                var t, n, i, o, r, s, a, l, c, u, h, d, f, p, m, g, v, y, b, w = "sizzle" + 1 * new Date, x = e.document, _ = 0, C = 0, T = se(), k = se(), E = se(), j = function(e, t) {
                    return e === t && (h = !0),
                    0
                }, S = {}.hasOwnProperty, q = [], D = q.pop, N = q.push, A = q.push, L = q.slice, F = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t)
                            return n;
                    return -1
                }, M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I = "[\\x20\\t\\r\\n\\f]", P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", O = "\\[" + I + "*(" + P + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + I + "*\\]", z = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", B = new RegExp(I + "+","g"), H = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$","g"), R = new RegExp("^" + I + "*," + I + "*"), W = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"), X = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]","g"), $ = new RegExp(z), Y = new RegExp("^" + P + "$"), V = {
                    ID: new RegExp("^#(" + P + ")"),
                    CLASS: new RegExp("^\\.(" + P + ")"),
                    TAG: new RegExp("^(" + P + "|[*])"),
                    ATTR: new RegExp("^" + O),
                    PSEUDO: new RegExp("^" + z),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + M + ")$","i"),
                    needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)","i")
                }, U = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /[+~]/, K = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)","ig"), ee = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, ie = function() {
                    d()
                }, oe = ye(function(e) {
                    return !0 === e.disabled && ("form"in e || "label"in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    A.apply(q = L.call(x.childNodes), x.childNodes),
                    q[x.childNodes.length].nodeType
                } catch (e) {
                    A = {
                        apply: q.length ? function(e, t) {
                            N.apply(e, L.call(t))
                        }
                        : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++]; )
                                ;
                            e.length = n - 1
                        }
                    }
                }
                function re(e, t, i, o) {
                    var r, a, c, u, h, p, v, y = t && t.ownerDocument, _ = t ? t.nodeType : 9;
                    if (i = i || [],
                    "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _)
                        return i;
                    if (!o && ((t ? t.ownerDocument || t : x) !== f && d(t),
                    t = t || f,
                    m)) {
                        if (11 !== _ && (h = J.exec(e)))
                            if (r = h[1]) {
                                if (9 === _) {
                                    if (!(c = t.getElementById(r)))
                                        return i;
                                    if (c.id === r)
                                        return i.push(c),
                                        i
                                } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r)
                                    return i.push(c),
                                    i
                            } else {
                                if (h[2])
                                    return A.apply(i, t.getElementsByTagName(e)),
                                    i;
                                if ((r = h[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                    return A.apply(i, t.getElementsByClassName(r)),
                                    i
                            }
                        if (n.qsa && !E[e + " "] && (!g || !g.test(e))) {
                            if (1 !== _)
                                y = t,
                                v = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w),
                                a = (p = s(e)).length; a--; )
                                    p[a] = "#" + u + " " + ve(p[a]);
                                v = p.join(","),
                                y = Q.test(e) && me(t.parentNode) || t
                            }
                            if (v)
                                try {
                                    return A.apply(i, y.querySelectorAll(v)),
                                    i
                                } catch (e) {} finally {
                                    u === w && t.removeAttribute("id")
                                }
                        }
                    }
                    return l(e.replace(H, "$1"), t, i, o)
                }
                function se() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                        t[n + " "] = o
                    }
                }
                function ae(e) {
                    return e[w] = !0,
                    e
                }
                function le(e) {
                    var t = f.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function ce(e, t) {
                    for (var n = e.split("|"), o = n.length; o--; )
                        i.attrHandle[n[o]] = t
                }
                function ue(e, t) {
                    var n = t && e
                      , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i)
                        return i;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === t)
                                return -1;
                    return e ? 1 : -1
                }
                function he(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }
                function de(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function fe(e) {
                    return function(t) {
                        return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label"in t && t.disabled === e
                    }
                }
                function pe(e) {
                    return ae(function(t) {
                        return t = +t,
                        ae(function(n, i) {
                            for (var o, r = e([], n.length, t), s = r.length; s--; )
                                n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }
                function me(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = re.support = {},
                r = re.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }
                ,
                d = re.setDocument = function(e) {
                    var t, o, s = e ? e.ownerDocument || e : x;
                    return s !== f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement,
                    m = !r(f),
                    x !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
                    n.attributes = le(function(e) {
                        return e.className = "i",
                        !e.getAttribute("className")
                    }),
                    n.getElementsByTagName = le(function(e) {
                        return e.appendChild(f.createComment("")),
                        !e.getElementsByTagName("*").length
                    }),
                    n.getElementsByClassName = Z.test(f.getElementsByClassName),
                    n.getById = le(function(e) {
                        return p.appendChild(e).id = w,
                        !f.getElementsByName || !f.getElementsByName(w).length
                    }),
                    n.getById ? (i.filter.ID = function(e) {
                        var t = e.replace(K, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                    ,
                    i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                    ) : (i.filter.ID = function(e) {
                        var t = e.replace(K, ee);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                    ,
                    i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var n, i, o, r = t.getElementById(e);
                            if (r) {
                                if ((n = r.getAttributeNode("id")) && n.value === e)
                                    return [r];
                                for (o = t.getElementsByName(e),
                                i = 0; r = o[i++]; )
                                    if ((n = r.getAttributeNode("id")) && n.value === e)
                                        return [r]
                            }
                            return []
                        }
                    }
                    ),
                    i.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    }
                    : function(e, t) {
                        var n, i = [], o = 0, r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o++]; )
                                1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }
                    ,
                    i.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && m)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    v = [],
                    g = [],
                    (n.qsa = Z.test(f.querySelectorAll)) && (le(function(e) {
                        p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + M + ")"),
                        e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="),
                        e.querySelectorAll(":checked").length || g.push(":checked"),
                        e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
                    }),
                    le(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                        p.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        g.push(",.*:")
                    })),
                    (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function(e) {
                        n.disconnectedMatch = y.call(e, "*"),
                        y.call(e, "[s!='']:x"),
                        v.push("!=", z)
                    }),
                    g = g.length && new RegExp(g.join("|")),
                    v = v.length && new RegExp(v.join("|")),
                    t = Z.test(p.compareDocumentPosition),
                    b = t || Z.test(p.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                          , i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    }
                    : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    j = t ? function(e, t) {
                        if (e === t)
                            return h = !0,
                            0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === x && b(x, e) ? -1 : t === f || t.ownerDocument === x && b(x, t) ? 1 : u ? F(u, e) - F(u, t) : 0 : 4 & i ? -1 : 1)
                    }
                    : function(e, t) {
                        if (e === t)
                            return h = !0,
                            0;
                        var n, i = 0, o = e.parentNode, r = t.parentNode, s = [e], a = [t];
                        if (!o || !r)
                            return e === f ? -1 : t === f ? 1 : o ? -1 : r ? 1 : u ? F(u, e) - F(u, t) : 0;
                        if (o === r)
                            return ue(e, t);
                        for (n = e; n = n.parentNode; )
                            s.unshift(n);
                        for (n = t; n = n.parentNode; )
                            a.unshift(n);
                        for (; s[i] === a[i]; )
                            i++;
                        return i ? ue(s[i], a[i]) : s[i] === x ? -1 : a[i] === x ? 1 : 0
                    }
                    ,
                    f) : f
                }
                ,
                re.matches = function(e, t) {
                    return re(e, null, null, t)
                }
                ,
                re.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== f && d(e),
                    t = t.replace(X, "='$1']"),
                    n.matchesSelector && m && !E[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t)))
                        try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return i
                        } catch (e) {}
                    return re(t, f, null, [e]).length > 0
                }
                ,
                re.contains = function(e, t) {
                    return (e.ownerDocument || e) !== f && d(e),
                    b(e, t)
                }
                ,
                re.attr = function(e, t) {
                    (e.ownerDocument || e) !== f && d(e);
                    var o = i.attrHandle[t.toLowerCase()]
                      , r = o && S.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                    return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }
                ,
                re.escape = function(e) {
                    return (e + "").replace(te, ne)
                }
                ,
                re.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                re.uniqueSort = function(e) {
                    var t, i = [], o = 0, r = 0;
                    if (h = !n.detectDuplicates,
                    u = !n.sortStable && e.slice(0),
                    e.sort(j),
                    h) {
                        for (; t = e[r++]; )
                            t === e[r] && (o = i.push(r));
                        for (; o--; )
                            e.splice(i[o], 1)
                    }
                    return u = null,
                    e
                }
                ,
                o = re.getText = function(e) {
                    var t, n = "", i = 0, r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += o(e)
                        } else if (3 === r || 4 === r)
                            return e.nodeValue
                    } else
                        for (; t = e[i++]; )
                            n += o(t);
                    return n
                }
                ,
                (i = re.selectors = {
                    cacheLength: 50,
                    createPseudo: ae,
                    match: V,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(K, ee),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(K, ee),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(K, ee).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = T[e + " "];
                            return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(i) {
                                var o = re.attr(i, e);
                                return null == o ? "!=" === t : !t || (o += "",
                                "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3)
                              , s = "last" !== e.slice(-4)
                              , a = "of-type" === t;
                            return 1 === i && 0 === o ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, l) {
                                var c, u, h, d, f, p, m = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                                if (g) {
                                    if (r) {
                                        for (; m; ) {
                                            for (d = t; d = d[m]; )
                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                                    return !1;
                                            p = m = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? g.firstChild : g.lastChild],
                                    s && y) {
                                        for (b = (f = (c = (u = (h = (d = g)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === _ && c[1]) && c[2],
                                        d = f && g.childNodes[f]; d = ++f && d && d[m] || (b = f = 0) || p.pop(); )
                                            if (1 === d.nodeType && ++b && d === t) {
                                                u[e] = [_, f, b];
                                                break
                                            }
                                    } else if (y && (b = f = (c = (u = (h = (d = t)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] || [])[0] === _ && c[1]),
                                    !1 === b)
                                        for (; (d = ++f && d && d[m] || (b = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (h = d[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[e] = [_, b]),
                                        d !== t)); )
                                            ;
                                    return (b -= o) === i || b % i == 0 && b / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                            return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                            i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, n) {
                                for (var i, r = o(e, t), s = r.length; s--; )
                                    e[i = F(e, r[s])] = !(n[i] = r[s])
                            }) : function(e) {
                                return o(e, 0, n)
                            }
                            ) : o
                        }
                    },
                    pseudos: {
                        not: ae(function(e) {
                            var t = []
                              , n = []
                              , i = a(e.replace(H, "$1"));
                            return i[w] ? ae(function(e, t, n, o) {
                                for (var r, s = i(e, null, o, []), a = e.length; a--; )
                                    (r = s[a]) && (e[a] = !(t[a] = r))
                            }) : function(e, o, r) {
                                return t[0] = e,
                                i(t, null, r, n),
                                t[0] = null,
                                !n.pop()
                            }
                        }),
                        has: ae(function(e) {
                            return function(t) {
                                return re(e, t).length > 0
                            }
                        }),
                        contains: ae(function(e) {
                            return e = e.replace(K, ee),
                            function(t) {
                                return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                            }
                        }),
                        lang: ae(function(e) {
                            return Y.test(e || "") || re.error("unsupported lang: " + e),
                            e = e.replace(K, ee).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === p
                        },
                        focus: function(e) {
                            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: fe(!1),
                        disabled: fe(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !i.pseudos.empty(e)
                        },
                        header: function(e) {
                            return G.test(e.nodeName)
                        },
                        input: function(e) {
                            return U.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: pe(function() {
                            return [0]
                        }),
                        last: pe(function(e, t) {
                            return [t - 1]
                        }),
                        eq: pe(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: pe(function(e, t) {
                            for (var n = 0; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: pe(function(e, t) {
                            for (var n = 1; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: pe(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0; )
                                e.push(i);
                            return e
                        }),
                        gt: pe(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t; )
                                e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = i.pseudos.eq,
                {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    i.pseudos[t] = he(t);
                for (t in {
                    submit: !0,
                    reset: !0
                })
                    i.pseudos[t] = de(t);
                function ge() {}
                function ve(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++)
                        i += e[t].value;
                    return i
                }
                function ye(e, t, n) {
                    var i = t.dir
                      , o = t.next
                      , r = o || i
                      , s = n && "parentNode" === r
                      , a = C++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i]; )
                            if (1 === t.nodeType || s)
                                return e(t, n, o);
                        return !1
                    }
                    : function(t, n, l) {
                        var c, u, h, d = [_, a];
                        if (l) {
                            for (; t = t[i]; )
                                if ((1 === t.nodeType || s) && e(t, n, l))
                                    return !0
                        } else
                            for (; t = t[i]; )
                                if (1 === t.nodeType || s)
                                    if (u = (h = t[w] || (t[w] = {}))[t.uniqueID] || (h[t.uniqueID] = {}),
                                    o && o === t.nodeName.toLowerCase())
                                        t = t[i] || t;
                                    else {
                                        if ((c = u[r]) && c[0] === _ && c[1] === a)
                                            return d[2] = c[2];
                                        if (u[r] = d,
                                        d[2] = e(t, n, l))
                                            return !0
                                    }
                        return !1
                    }
                }
                function be(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var o = e.length; o--; )
                            if (!e[o](t, n, i))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function we(e, t, n, i, o) {
                    for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                        (r = e[a]) && (n && !n(r, i, o) || (s.push(r),
                        c && t.push(a)));
                    return s
                }
                function xe(e, t, n, i, o, r) {
                    return i && !i[w] && (i = xe(i)),
                    o && !o[w] && (o = xe(o, r)),
                    ae(function(r, s, a, l) {
                        var c, u, h, d = [], f = [], p = s.length, m = r || function(e, t, n) {
                            for (var i = 0, o = t.length; i < o; i++)
                                re(e, t[i], n);
                            return n
                        }(t || "*", a.nodeType ? [a] : a, []), g = !e || !r && t ? m : we(m, d, e, a, l), v = n ? o || (r ? e : p || i) ? [] : s : g;
                        if (n && n(g, v, a, l),
                        i)
                            for (c = we(v, f),
                            i(c, [], a, l),
                            u = c.length; u--; )
                                (h = c[u]) && (v[f[u]] = !(g[f[u]] = h));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (c = [],
                                    u = v.length; u--; )
                                        (h = v[u]) && c.push(g[u] = h);
                                    o(null, v = [], c, l)
                                }
                                for (u = v.length; u--; )
                                    (h = v[u]) && (c = o ? F(r, h) : d[u]) > -1 && (r[c] = !(s[c] = h))
                            }
                        } else
                            v = we(v === s ? v.splice(p, v.length) : v),
                            o ? o(null, s, v, l) : A.apply(s, v)
                    })
                }
                function _e(e) {
                    for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function(e) {
                        return e === t
                    }, a, !0), h = ye(function(e) {
                        return F(t, e) > -1
                    }, a, !0), d = [function(e, n, i) {
                        var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : h(e, n, i));
                        return t = null,
                        o
                    }
                    ]; l < r; l++)
                        if (n = i.relative[e[l].type])
                            d = [ye(be(d), n)];
                        else {
                            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                for (o = ++l; o < r && !i.relative[e[o].type]; o++)
                                    ;
                                return xe(l > 1 && be(d), l > 1 && ve(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(H, "$1"), n, l < o && _e(e.slice(l, o)), o < r && _e(e = e.slice(o)), o < r && ve(e))
                            }
                            d.push(n)
                        }
                    return be(d)
                }
                return ge.prototype = i.filters = i.pseudos,
                i.setFilters = new ge,
                s = re.tokenize = function(e, t) {
                    var n, o, r, s, a, l, c, u = k[e + " "];
                    if (u)
                        return t ? 0 : u.slice(0);
                    for (a = e,
                    l = [],
                    c = i.preFilter; a; ) {
                        for (s in n && !(o = R.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                        l.push(r = [])),
                        n = !1,
                        (o = W.exec(a)) && (n = o.shift(),
                        r.push({
                            value: n,
                            type: o[0].replace(H, " ")
                        }),
                        a = a.slice(n.length)),
                        i.filter)
                            !(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(),
                            r.push({
                                value: n,
                                type: s,
                                matches: o
                            }),
                            a = a.slice(n.length));
                        if (!n)
                            break
                    }
                    return t ? a.length : a ? re.error(e) : k(e, l).slice(0)
                }
                ,
                a = re.compile = function(e, t) {
                    var n, o = [], r = [], a = E[e + " "];
                    if (!a) {
                        for (t || (t = s(e)),
                        n = t.length; n--; )
                            (a = _e(t[n]))[w] ? o.push(a) : r.push(a);
                        (a = E(e, function(e, t) {
                            var n = t.length > 0
                              , o = e.length > 0
                              , r = function(r, s, a, l, u) {
                                var h, p, g, v = 0, y = "0", b = r && [], w = [], x = c, C = r || o && i.find.TAG("*", u), T = _ += null == x ? 1 : Math.random() || .1, k = C.length;
                                for (u && (c = s === f || s || u); y !== k && null != (h = C[y]); y++) {
                                    if (o && h) {
                                        for (p = 0,
                                        s || h.ownerDocument === f || (d(h),
                                        a = !m); g = e[p++]; )
                                            if (g(h, s || f, a)) {
                                                l.push(h);
                                                break
                                            }
                                        u && (_ = T)
                                    }
                                    n && ((h = !g && h) && v--,
                                    r && b.push(h))
                                }
                                if (v += y,
                                n && y !== v) {
                                    for (p = 0; g = t[p++]; )
                                        g(b, w, s, a);
                                    if (r) {
                                        if (v > 0)
                                            for (; y--; )
                                                b[y] || w[y] || (w[y] = D.call(l));
                                        w = we(w)
                                    }
                                    A.apply(l, w),
                                    u && !r && w.length > 0 && v + t.length > 1 && re.uniqueSort(l)
                                }
                                return u && (_ = T,
                                c = x),
                                b
                            };
                            return n ? ae(r) : r
                        }(r, o))).selector = e
                    }
                    return a
                }
                ,
                l = re.select = function(e, t, n, o) {
                    var r, l, c, u, h, d = "function" == typeof e && e, f = !o && s(e = d.selector || e);
                    if (n = n || [],
                    1 === f.length) {
                        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                            if (!(t = (i.find.ID(c.matches[0].replace(K, ee), t) || [])[0]))
                                return n;
                            d && (t = t.parentNode),
                            e = e.slice(l.shift().value.length)
                        }
                        for (r = V.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r],
                        !i.relative[u = c.type]); )
                            if ((h = i.find[u]) && (o = h(c.matches[0].replace(K, ee), Q.test(l[0].type) && me(t.parentNode) || t))) {
                                if (l.splice(r, 1),
                                !(e = o.length && ve(l)))
                                    return A.apply(n, o),
                                    n;
                                break
                            }
                    }
                    return (d || a(e, f))(o, t, !m, n, !t || Q.test(e) && me(t.parentNode) || t),
                    n
                }
                ,
                n.sortStable = w.split("").sort(j).join("") === w,
                n.detectDuplicates = !!h,
                d(),
                n.sortDetached = le(function(e) {
                    return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                }),
                le(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }) || ce("type|href|height|width", function(e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }),
                n.attributes && le(function(e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }) || ce("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                }),
                le(function(e) {
                    return null == e.getAttribute("disabled")
                }) || ce(M, function(e, t, n) {
                    var i;
                    if (!n)
                        return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }),
                re
            }(e);
            g.find = _,
            g.expr = _.selectors,
            g.expr[":"] = g.expr.pseudos,
            g.uniqueSort = g.unique = _.uniqueSort,
            g.text = _.getText,
            g.isXMLDoc = _.isXML,
            g.contains = _.contains,
            g.escapeSelector = _.escape;
            var C = function(e, t, n) {
                for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (o && g(e).is(n))
                            break;
                        i.push(e)
                    }
                return i
            }
              , T = function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
              , k = g.expr.match.needsContext;
            function E(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
              , S = /^.[^:#\[\.,]*$/;
            function q(e, t, n) {
                return g.isFunction(t) ? g.grep(e, function(e, i) {
                    return !!t.call(e, i, e) !== n
                }) : t.nodeType ? g.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? g.grep(e, function(e) {
                    return l.call(t, e) > -1 !== n
                }) : S.test(t) ? g.filter(t, e, n) : (t = g.filter(t, e),
                g.grep(e, function(e) {
                    return l.call(t, e) > -1 !== n && 1 === e.nodeType
                }))
            }
            g.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === i.nodeType ? g.find.matchesSelector(i, e) ? [i] : [] : g.find.matches(e, g.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }
            ,
            g.fn.extend({
                find: function(e) {
                    var t, n, i = this.length, o = this;
                    if ("string" != typeof e)
                        return this.pushStack(g(e).filter(function() {
                            for (t = 0; t < i; t++)
                                if (g.contains(o[t], this))
                                    return !0
                        }));
                    for (n = this.pushStack([]),
                    t = 0; t < i; t++)
                        g.find(e, o[t], n);
                    return i > 1 ? g.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(q(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(q(this, e || [], !0))
                },
                is: function(e) {
                    return !!q(this, "string" == typeof e && k.test(e) ? g(e) : e || [], !1).length
                }
            });
            var D, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (g.fn.init = function(e, t, n) {
                var o, r;
                if (!e)
                    return this;
                if (n = n || D,
                "string" == typeof e) {
                    if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !o[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (o[1]) {
                        if (t = t instanceof g ? t[0] : t,
                        g.merge(this, g.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)),
                        j.test(o[1]) && g.isPlainObject(t))
                            for (o in t)
                                g.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                        return this
                    }
                    return (r = i.getElementById(o[2])) && (this[0] = r,
                    this.length = 1),
                    this
                }
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : g.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(g) : g.makeArray(e, this)
            }
            ).prototype = g.fn,
            D = g(i);
            var A = /^(?:parents|prev(?:Until|All))/
              , L = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function F(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; )
                    ;
                return e
            }
            g.fn.extend({
                has: function(e) {
                    var t = g(e, this)
                      , n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (g.contains(this, t[e]))
                                return !0
                    })
                },
                closest: function(e, t) {
                    var n, i = 0, o = this.length, r = [], s = "string" != typeof e && g(e);
                    if (!k.test(e))
                        for (; i < o; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && g.find.matchesSelector(n, e))) {
                                    r.push(n);
                                    break
                                }
                    return this.pushStack(r.length > 1 ? g.uniqueSort(r) : r)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? l.call(g(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(g.uniqueSort(g.merge(this.get(), g(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            g.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return C(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return C(e, "parentNode", n)
                },
                next: function(e) {
                    return F(e, "nextSibling")
                },
                prev: function(e) {
                    return F(e, "previousSibling")
                },
                nextAll: function(e) {
                    return C(e, "nextSibling")
                },
                prevAll: function(e) {
                    return C(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return C(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return C(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return T((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return T(e.firstChild)
                },
                contents: function(e) {
                    return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e),
                    g.merge([], e.childNodes))
                }
            }, function(e, t) {
                g.fn[e] = function(n, i) {
                    var o = g.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (o = g.filter(i, o)),
                    this.length > 1 && (L[e] || g.uniqueSort(o),
                    A.test(e) && o.reverse()),
                    this.pushStack(o)
                }
            });
            var M = /[^\x20\t\r\n\f]+/g;
            function I(e) {
                return e
            }
            function P(e) {
                throw e
            }
            function O(e, t, n, i) {
                var o;
                try {
                    e && g.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && g.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            g.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return g.each(e.match(M) || [], function(e, n) {
                        t[n] = !0
                    }),
                    t
                }(e) : g.extend({}, e);
                var t, n, i, o, r = [], s = [], a = -1, l = function() {
                    for (o = o || e.once,
                    i = t = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < r.length; )
                            !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length,
                            n = !1);
                    e.memory || (n = !1),
                    t = !1,
                    o && (r = n ? [] : "")
                }, c = {
                    add: function() {
                        return r && (n && !t && (a = r.length - 1,
                        s.push(n)),
                        function t(n) {
                            g.each(n, function(n, i) {
                                g.isFunction(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== g.type(i) && t(i)
                            })
                        }(arguments),
                        n && !t && l()),
                        this
                    },
                    remove: function() {
                        return g.each(arguments, function(e, t) {
                            for (var n; (n = g.inArray(t, r, n)) > -1; )
                                r.splice(n, 1),
                                n <= a && a--
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? g.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []),
                        this
                    },
                    disable: function() {
                        return o = s = [],
                        r = n = "",
                        this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = s = [],
                        n || t || (r = n = ""),
                        this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                        s.push(n),
                        t || l()),
                        this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!i
                    }
                };
                return c
            }
            ,
            g.extend({
                Deferred: function(t) {
                    var n = [["notify", "progress", g.Callbacks("memory"), g.Callbacks("memory"), 2], ["resolve", "done", g.Callbacks("once memory"), g.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", g.Callbacks("once memory"), g.Callbacks("once memory"), 1, "rejected"]]
                      , i = "pending"
                      , o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return g.Deferred(function(t) {
                                g.each(n, function(n, i) {
                                    var o = g.isFunction(e[i[4]]) && e[i[4]];
                                    r[i[1]](function() {
                                        var e = o && o.apply(this, arguments);
                                        e && g.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        then: function(t, i, o) {
                            var r = 0;
                            function s(t, n, i, o) {
                                return function() {
                                    var a = this
                                      , l = arguments
                                      , c = function() {
                                        var e, c;
                                        if (!(t < r)) {
                                            if ((e = i.apply(a, l)) === n.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                            g.isFunction(c) ? o ? c.call(e, s(r, n, I, o), s(r, n, P, o)) : (r++,
                                            c.call(e, s(r, n, I, o), s(r, n, P, o), s(r, n, I, n.notifyWith))) : (i !== I && (a = void 0,
                                            l = [e]),
                                            (o || n.resolveWith)(a, l))
                                        }
                                    }
                                      , u = o ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            g.Deferred.exceptionHook && g.Deferred.exceptionHook(e, u.stackTrace),
                                            t + 1 >= r && (i !== P && (a = void 0,
                                            l = [e]),
                                            n.rejectWith(a, l))
                                        }
                                    }
                                    ;
                                    t ? u() : (g.Deferred.getStackHook && (u.stackTrace = g.Deferred.getStackHook()),
                                    e.setTimeout(u))
                                }
                            }
                            return g.Deferred(function(e) {
                                n[0][3].add(s(0, e, g.isFunction(o) ? o : I, e.notifyWith)),
                                n[1][3].add(s(0, e, g.isFunction(t) ? t : I)),
                                n[2][3].add(s(0, e, g.isFunction(i) ? i : P))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? g.extend(e, o) : o
                        }
                    }
                      , r = {};
                    return g.each(n, function(e, t) {
                        var s = t[2]
                          , a = t[5];
                        o[t[1]] = s.add,
                        a && s.add(function() {
                            i = a
                        }, n[3 - e][2].disable, n[0][2].lock),
                        s.add(t[3].fire),
                        r[t[0]] = function() {
                            return r[t[0] + "With"](this === r ? void 0 : this, arguments),
                            this
                        }
                        ,
                        r[t[0] + "With"] = s.fireWith
                    }),
                    o.promise(r),
                    t && t.call(r, r),
                    r
                },
                when: function(e) {
                    var t = arguments.length
                      , n = t
                      , i = Array(n)
                      , o = r.call(arguments)
                      , s = g.Deferred()
                      , a = function(e) {
                        return function(n) {
                            i[e] = this,
                            o[e] = arguments.length > 1 ? r.call(arguments) : n,
                            --t || s.resolveWith(i, o)
                        }
                    };
                    if (t <= 1 && (O(e, s.done(a(n)).resolve, s.reject, !t),
                    "pending" === s.state() || g.isFunction(o[n] && o[n].then)))
                        return s.then();
                    for (; n--; )
                        O(o[n], a(n), s.reject);
                    return s.promise()
                }
            });
            var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            g.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && z.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }
            ,
            g.readyException = function(t) {
                e.setTimeout(function() {
                    throw t
                })
            }
            ;
            var B = g.Deferred();
            function H() {
                i.removeEventListener("DOMContentLoaded", H),
                e.removeEventListener("load", H),
                g.ready()
            }
            g.fn.ready = function(e) {
                return B.then(e).catch(function(e) {
                    g.readyException(e)
                }),
                this
            }
            ,
            g.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --g.readyWait : g.isReady) || (g.isReady = !0,
                    !0 !== e && --g.readyWait > 0 || B.resolveWith(i, [g]))
                }
            }),
            g.ready.then = B.then,
            "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(g.ready) : (i.addEventListener("DOMContentLoaded", H),
            e.addEventListener("load", H));
            var R = function(e, t, n, i, o, r, s) {
                var a = 0
                  , l = e.length
                  , c = null == n;
                if ("object" === g.type(n))
                    for (a in o = !0,
                    n)
                        R(e, t, a, n[a], !0, r, s);
                else if (void 0 !== i && (o = !0,
                g.isFunction(i) || (s = !0),
                c && (s ? (t.call(e, i),
                t = null) : (c = t,
                t = function(e, t, n) {
                    return c.call(g(e), n)
                }
                )),
                t))
                    for (; a < l; a++)
                        t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
            }
              , W = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            function X() {
                this.expando = g.expando + X.uid++
            }
            X.uid = 1,
            X.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {},
                    W(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
                },
                set: function(e, t, n) {
                    var i, o = this.cache(e);
                    if ("string" == typeof t)
                        o[g.camelCase(t)] = n;
                    else
                        for (i in t)
                            o[g.camelCase(i)] = t[i];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][g.camelCase(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(g.camelCase) : (t = g.camelCase(t))in i ? [t] : t.match(M) || []).length;
                            for (; n--; )
                                delete i[t[n]]
                        }
                        (void 0 === t || g.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !g.isEmptyObject(t)
                }
            };
            var $ = new X
              , Y = new X
              , V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , U = /[A-Z]/g;
            function G(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace(U, "-$&").toLowerCase(),
                    "string" == typeof (n = e.getAttribute(i))) {
                        try {
                            n = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : V.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        Y.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            g.extend({
                hasData: function(e) {
                    return Y.hasData(e) || $.hasData(e)
                },
                data: function(e, t, n) {
                    return Y.access(e, t, n)
                },
                removeData: function(e, t) {
                    Y.remove(e, t)
                },
                _data: function(e, t, n) {
                    return $.access(e, t, n)
                },
                _removeData: function(e, t) {
                    $.remove(e, t)
                }
            }),
            g.fn.extend({
                data: function(e, t) {
                    var n, i, o, r = this[0], s = r && r.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = Y.get(r),
                        1 === r.nodeType && !$.get(r, "hasDataAttrs"))) {
                            for (n = s.length; n--; )
                                s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = g.camelCase(i.slice(5)),
                                G(r, i, o[i]));
                            $.set(r, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        Y.set(this, e)
                    }) : R(this, function(t) {
                        var n;
                        if (r && void 0 === t)
                            return void 0 !== (n = Y.get(r, e)) ? n : void 0 !== (n = G(r, e)) ? n : void 0;
                        this.each(function() {
                            Y.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        Y.remove(this, e)
                    })
                }
            }),
            g.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e)
                        return t = (t || "fx") + "queue",
                        i = $.get(e, t),
                        n && (!i || Array.isArray(n) ? i = $.access(e, t, g.makeArray(n)) : i.push(n)),
                        i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = g.queue(e, t)
                      , i = n.length
                      , o = n.shift()
                      , r = g._queueHooks(e, t);
                    "inprogress" === o && (o = n.shift(),
                    i--),
                    o && ("fx" === t && n.unshift("inprogress"),
                    delete r.stop,
                    o.call(e, function() {
                        g.dequeue(e, t)
                    }, r)),
                    !i && r && r.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return $.get(e, n) || $.access(e, n, {
                        empty: g.Callbacks("once memory").add(function() {
                            $.remove(e, [t + "queue", n])
                        })
                    })
                }
            }),
            g.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? g.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = g.queue(this, e, t);
                        g._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && g.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        g.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1, o = g.Deferred(), r = this, s = this.length, a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                    for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; s--; )
                        (n = $.get(r[s], e + "queueHooks")) && n.empty && (i++,
                        n.empty.add(a));
                    return a(),
                    o.promise(t)
                }
            });
            var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , J = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$","i")
              , Q = ["Top", "Right", "Bottom", "Left"]
              , K = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && g.contains(e.ownerDocument, e) && "none" === g.css(e, "display")
            }
              , ee = function(e, t, n, i) {
                var o, r, s = {};
                for (r in t)
                    s[r] = e.style[r],
                    e.style[r] = t[r];
                for (r in o = n.apply(e, i || []),
                t)
                    e.style[r] = s[r];
                return o
            };
            function te(e, t, n, i) {
                var o, r = 1, s = 20, a = i ? function() {
                    return i.cur()
                }
                : function() {
                    return g.css(e, t, "")
                }
                , l = a(), c = n && n[3] || (g.cssNumber[t] ? "" : "px"), u = (g.cssNumber[t] || "px" !== c && +l) && J.exec(g.css(e, t));
                if (u && u[3] !== c) {
                    c = c || u[3],
                    n = n || [],
                    u = +l || 1;
                    do {
                        u /= r = r || ".5",
                        g.style(e, t, u + c)
                    } while (r !== (r = a() / l) && 1 !== r && --s)
                }
                return n && (u = +u || +l || 0,
                o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
                i && (i.unit = c,
                i.start = u,
                i.end = o)),
                o
            }
            var ne = {};
            function ie(e) {
                var t, n = e.ownerDocument, i = e.nodeName, o = ne[i];
                return o || (t = n.body.appendChild(n.createElement(i)),
                o = g.css(t, "display"),
                t.parentNode.removeChild(t),
                "none" === o && (o = "block"),
                ne[i] = o,
                o)
            }
            function oe(e, t) {
                for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
                    (i = e[r]).style && (n = i.style.display,
                    t ? ("none" === n && (o[r] = $.get(i, "display") || null,
                    o[r] || (i.style.display = "")),
                    "" === i.style.display && K(i) && (o[r] = ie(i))) : "none" !== n && (o[r] = "none",
                    $.set(i, "display", n)));
                for (r = 0; r < s; r++)
                    null != o[r] && (e[r].style.display = o[r]);
                return e
            }
            g.fn.extend({
                show: function() {
                    return oe(this, !0)
                },
                hide: function() {
                    return oe(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        K(this) ? g(this).show() : g(this).hide()
                    })
                }
            });
            var re = /^(?:checkbox|radio)$/i
              , se = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
              , ae = /^$|\/(?:java|ecma)script/i
              , le = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            function ce(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                void 0 === t || t && E(e, t) ? g.merge([e], n) : n
            }
            function ue(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    $.set(e[n], "globalEval", !t || $.get(t[n], "globalEval"))
            }
            le.optgroup = le.option,
            le.tbody = le.tfoot = le.colgroup = le.caption = le.thead,
            le.th = le.td;
            var he, de, fe = /<|&#?\w+;/;
            he = i.createDocumentFragment().appendChild(i.createElement("div")),
            (de = i.createElement("input")).setAttribute("type", "radio"),
            de.setAttribute("checked", "checked"),
            de.setAttribute("name", "t"),
            he.appendChild(de),
            p.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked,
            he.innerHTML = "<textarea>x</textarea>",
            p.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
            var pe = i.documentElement
              , me = /^key/
              , ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , ve = /^([^.]*)(?:\.(.+)|)/;
            function ye() {
                return !0
            }
            function be() {
                return !1
            }
            function we() {
                try {
                    return i.activeElement
                } catch (e) {}
            }
            function xe(e, t, n, i, o, r) {
                var s, a;
                if ("object" == typeof t) {
                    for (a in "string" != typeof n && (i = i || n,
                    n = void 0),
                    t)
                        xe(e, a, n, i, t[a], r);
                    return e
                }
                if (null == i && null == o ? (o = n,
                i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
                i = void 0) : (o = i,
                i = n,
                n = void 0)),
                !1 === o)
                    o = be;
                else if (!o)
                    return e;
                return 1 === r && (s = o,
                (o = function(e) {
                    return g().off(e),
                    s.apply(this, arguments)
                }
                ).guid = s.guid || (s.guid = g.guid++)),
                e.each(function() {
                    g.event.add(this, t, o, i, n)
                })
            }
            g.event = {
                global: {},
                add: function(e, t, n, i, o) {
                    var r, s, a, l, c, u, h, d, f, p, m, v = $.get(e);
                    if (v)
                        for (n.handler && (n = (r = n).handler,
                        o = r.selector),
                        o && g.find.matchesSelector(pe, o),
                        n.guid || (n.guid = g.guid++),
                        (l = v.events) || (l = v.events = {}),
                        (s = v.handle) || (s = v.handle = function(t) {
                            return void 0 !== g && g.event.triggered !== t.type ? g.event.dispatch.apply(e, arguments) : void 0
                        }
                        ),
                        c = (t = (t || "").match(M) || [""]).length; c--; )
                            f = m = (a = ve.exec(t[c]) || [])[1],
                            p = (a[2] || "").split(".").sort(),
                            f && (h = g.event.special[f] || {},
                            f = (o ? h.delegateType : h.bindType) || f,
                            h = g.event.special[f] || {},
                            u = g.extend({
                                type: f,
                                origType: m,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                needsContext: o && g.expr.match.needsContext.test(o),
                                namespace: p.join(".")
                            }, r),
                            (d = l[f]) || ((d = l[f] = []).delegateCount = 0,
                            h.setup && !1 !== h.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)),
                            h.add && (h.add.call(e, u),
                            u.handler.guid || (u.handler.guid = n.guid)),
                            o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                            g.event.global[f] = !0)
                },
                remove: function(e, t, n, i, o) {
                    var r, s, a, l, c, u, h, d, f, p, m, v = $.hasData(e) && $.get(e);
                    if (v && (l = v.events)) {
                        for (c = (t = (t || "").match(M) || [""]).length; c--; )
                            if (f = m = (a = ve.exec(t[c]) || [])[1],
                            p = (a[2] || "").split(".").sort(),
                            f) {
                                for (h = g.event.special[f] || {},
                                d = l[f = (i ? h.delegateType : h.bindType) || f] || [],
                                a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                s = r = d.length; r--; )
                                    u = d[r],
                                    !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1),
                                    u.selector && d.delegateCount--,
                                    h.remove && h.remove.call(e, u));
                                s && !d.length && (h.teardown && !1 !== h.teardown.call(e, p, v.handle) || g.removeEvent(e, f, v.handle),
                                delete l[f])
                            } else
                                for (f in l)
                                    g.event.remove(e, f + t[c], n, i, !0);
                        g.isEmptyObject(l) && $.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, i, o, r, s, a = g.event.fix(e), l = new Array(arguments.length), c = ($.get(this, "events") || {})[a.type] || [], u = g.event.special[a.type] || {};
                    for (l[0] = a,
                    t = 1; t < arguments.length; t++)
                        l[t] = arguments[t];
                    if (a.delegateTarget = this,
                    !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                        for (s = g.event.handlers.call(this, a, c),
                        t = 0; (o = s[t++]) && !a.isPropagationStopped(); )
                            for (a.currentTarget = o.elem,
                            n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                                a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r,
                                a.data = r.data,
                                void 0 !== (i = ((g.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                                a.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, a),
                        a.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (r = [],
                                s = {},
                                n = 0; n < l; n++)
                                    void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? g(o, this).index(c) > -1 : g.find(o, this, null, [c]).length),
                                    s[o] && r.push(i);
                                r.length && a.push({
                                    elem: c,
                                    handlers: r
                                })
                            }
                    return c = this,
                    l < t.length && a.push({
                        elem: c,
                        handlers: t.slice(l)
                    }),
                    a
                },
                addProp: function(e, t) {
                    Object.defineProperty(g.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: g.isFunction(t) ? function() {
                            if (this.originalEvent)
                                return t(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[e]
                        }
                        ,
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[g.expando] ? e : new g.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== we() && this.focus)
                                return this.focus(),
                                !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === we() && this.blur)
                                return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && E(this, "input"))
                                return this.click(),
                                !1
                        },
                        _default: function(e) {
                            return E(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
            g.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }
            ,
            g.Event = function(e, t) {
                if (!(this instanceof g.Event))
                    return new g.Event(e,t);
                e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : be,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                t && g.extend(this, t),
                this.timeStamp = e && e.timeStamp || g.now(),
                this[g.expando] = !0
            }
            ,
            g.Event.prototype = {
                constructor: g.Event,
                isDefaultPrevented: be,
                isPropagationStopped: be,
                isImmediatePropagationStopped: be,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = ye,
                    e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = ye,
                    e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = ye,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            g.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, g.event.addProp),
            g.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                g.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = e.relatedTarget, o = e.handleObj;
                        return i && (i === this || g.contains(this, i)) || (e.type = o.origType,
                        n = o.handler.apply(this, arguments),
                        e.type = t),
                        n
                    }
                }
            }),
            g.fn.extend({
                on: function(e, t, n, i) {
                    return xe(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return xe(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj)
                        return i = e.handleObj,
                        g(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                    if ("object" == typeof e) {
                        for (o in e)
                            this.off(o, t, e[o]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = be),
                    this.each(function() {
                        g.event.remove(this, e, n, t)
                    })
                }
            });
            var _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
              , Ce = /<script|<style|<link/i
              , Te = /checked\s*(?:[^=]|=\s*.checked.)/i
              , ke = /^true\/(.*)/
              , Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function je(e, t) {
                return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && g(">tbody", e)[0] || e
            }
            function Se(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
            }
            function qe(e) {
                var t = ke.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                e
            }
            function De(e, t) {
                var n, i, o, r, s, a, l, c;
                if (1 === t.nodeType) {
                    if ($.hasData(e) && (r = $.access(e),
                    s = $.set(t, r),
                    c = r.events))
                        for (o in delete s.handle,
                        s.events = {},
                        c)
                            for (n = 0,
                            i = c[o].length; n < i; n++)
                                g.event.add(t, o, c[o][n]);
                    Y.hasData(e) && (a = Y.access(e),
                    l = g.extend({}, a),
                    Y.set(t, l))
                }
            }
            function Ne(e, t, n, i) {
                t = s.apply([], t);
                var o, r, a, l, c, u, h = 0, d = e.length, f = d - 1, v = t[0], y = g.isFunction(v);
                if (y || d > 1 && "string" == typeof v && !p.checkClone && Te.test(v))
                    return e.each(function(o) {
                        var r = e.eq(o);
                        y && (t[0] = v.call(this, o, r.html())),
                        Ne(r, t, n, i)
                    });
                if (d && (r = (o = function(e, t, n, i, o) {
                    for (var r, s, a, l, c, u, h = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
                        if ((r = e[f]) || 0 === r)
                            if ("object" === g.type(r))
                                g.merge(d, r.nodeType ? [r] : r);
                            else if (fe.test(r)) {
                                for (s = s || h.appendChild(t.createElement("div")),
                                a = (se.exec(r) || ["", ""])[1].toLowerCase(),
                                l = le[a] || le._default,
                                s.innerHTML = l[1] + g.htmlPrefilter(r) + l[2],
                                u = l[0]; u--; )
                                    s = s.lastChild;
                                g.merge(d, s.childNodes),
                                (s = h.firstChild).textContent = ""
                            } else
                                d.push(t.createTextNode(r));
                    for (h.textContent = "",
                    f = 0; r = d[f++]; )
                        if (i && g.inArray(r, i) > -1)
                            o && o.push(r);
                        else if (c = g.contains(r.ownerDocument, r),
                        s = ce(h.appendChild(r), "script"),
                        c && ue(s),
                        n)
                            for (u = 0; r = s[u++]; )
                                ae.test(r.type || "") && n.push(r);
                    return h
                }(t, e[0].ownerDocument, !1, e, i)).firstChild,
                1 === o.childNodes.length && (o = r),
                r || i)) {
                    for (l = (a = g.map(ce(o, "script"), Se)).length; h < d; h++)
                        c = o,
                        h !== f && (c = g.clone(c, !0, !0),
                        l && g.merge(a, ce(c, "script"))),
                        n.call(e[h], c, h);
                    if (l)
                        for (u = a[a.length - 1].ownerDocument,
                        g.map(a, qe),
                        h = 0; h < l; h++)
                            c = a[h],
                            ae.test(c.type || "") && !$.access(c, "globalEval") && g.contains(u, c) && (c.src ? g._evalUrl && g._evalUrl(c.src) : m(c.textContent.replace(Ee, ""), u))
                }
                return e
            }
            function Ae(e, t, n) {
                for (var i, o = t ? g.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
                    n || 1 !== i.nodeType || g.cleanData(ce(i)),
                    i.parentNode && (n && g.contains(i.ownerDocument, i) && ue(ce(i, "script")),
                    i.parentNode.removeChild(i));
                return e
            }
            g.extend({
                htmlPrefilter: function(e) {
                    return e.replace(_e, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var i, o, r, s, a, l, c, u = e.cloneNode(!0), h = g.contains(e.ownerDocument, e);
                    if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || g.isXMLDoc(e)))
                        for (s = ce(u),
                        i = 0,
                        o = (r = ce(e)).length; i < o; i++)
                            a = r[i],
                            void 0,
                            "input" === (c = (l = s[i]).nodeName.toLowerCase()) && re.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
                    if (t)
                        if (n)
                            for (r = r || ce(e),
                            s = s || ce(u),
                            i = 0,
                            o = r.length; i < o; i++)
                                De(r[i], s[i]);
                        else
                            De(e, u);
                    return (s = ce(u, "script")).length > 0 && ue(s, !h && ce(e, "script")),
                    u
                },
                cleanData: function(e) {
                    for (var t, n, i, o = g.event.special, r = 0; void 0 !== (n = e[r]); r++)
                        if (W(n)) {
                            if (t = n[$.expando]) {
                                if (t.events)
                                    for (i in t.events)
                                        o[i] ? g.event.remove(n, i) : g.removeEvent(n, i, t.handle);
                                n[$.expando] = void 0
                            }
                            n[Y.expando] && (n[Y.expando] = void 0)
                        }
                }
            }),
            g.fn.extend({
                detach: function(e) {
                    return Ae(this, e, !0)
                },
                remove: function(e) {
                    return Ae(this, e)
                },
                text: function(e) {
                    return R(this, function(e) {
                        return void 0 === e ? g.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Ne(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return Ne(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = je(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return Ne(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return Ne(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType && (g.cleanData(ce(e, !1)),
                        e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return g.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return R(this, function(e) {
                        var t = this[0] || {}
                          , n = 0
                          , i = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" == typeof e && !Ce.test(e) && !le[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = g.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)
                                    1 === (t = this[n] || {}).nodeType && (g.cleanData(ce(t, !1)),
                                    t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Ne(this, arguments, function(t) {
                        var n = this.parentNode;
                        g.inArray(this, e) < 0 && (g.cleanData(ce(this)),
                        n && n.replaceChild(t, this))
                    }, e)
                }
            }),
            g.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                g.fn[e] = function(e) {
                    for (var n, i = [], o = g(e), r = o.length - 1, s = 0; s <= r; s++)
                        n = s === r ? this : this.clone(!0),
                        g(o[s])[t](n),
                        a.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var Le = /^margin/
              , Fe = new RegExp("^(" + Z + ")(?!px)[a-z%]+$","i")
              , Me = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e),
                n.getComputedStyle(t)
            };
            function Ie(e, t, n) {
                var i, o, r, s, a = e.style;
                return (n = n || Me(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || g.contains(e.ownerDocument, e) || (s = g.style(e, t)),
                !p.pixelMarginRight() && Fe.test(s) && Le.test(t) && (i = a.width,
                o = a.minWidth,
                r = a.maxWidth,
                a.minWidth = a.maxWidth = a.width = s,
                s = n.width,
                a.width = i,
                a.minWidth = o,
                a.maxWidth = r)),
                void 0 !== s ? s + "" : s
            }
            function Pe(e, t) {
                return {
                    get: function() {
                        if (!e())
                            return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            !function() {
                function t() {
                    if (l) {
                        l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        l.innerHTML = "",
                        pe.appendChild(a);
                        var t = e.getComputedStyle(l);
                        n = "1%" !== t.top,
                        s = "2px" === t.marginLeft,
                        o = "4px" === t.width,
                        l.style.marginRight = "50%",
                        r = "4px" === t.marginRight,
                        pe.removeChild(a),
                        l = null
                    }
                }
                var n, o, r, s, a = i.createElement("div"), l = i.createElement("div");
                l.style && (l.style.backgroundClip = "content-box",
                l.cloneNode(!0).style.backgroundClip = "",
                p.clearCloneStyle = "content-box" === l.style.backgroundClip,
                a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                a.appendChild(l),
                g.extend(p, {
                    pixelPosition: function() {
                        return t(),
                        n
                    },
                    boxSizingReliable: function() {
                        return t(),
                        o
                    },
                    pixelMarginRight: function() {
                        return t(),
                        r
                    },
                    reliableMarginLeft: function() {
                        return t(),
                        s
                    }
                }))
            }();
            var Oe = /^(none|table(?!-c[ea]).+)/
              , ze = /^--/
              , Be = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , He = {
                letterSpacing: "0",
                fontWeight: "400"
            }
              , Re = ["Webkit", "Moz", "ms"]
              , We = i.createElement("div").style;
            function Xe(e) {
                var t = g.cssProps[e];
                return t || (t = g.cssProps[e] = function(e) {
                    if (e in We)
                        return e;
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Re.length; n--; )
                        if ((e = Re[n] + t)in We)
                            return e
                }(e) || e),
                t
            }
            function $e(e, t, n) {
                var i = J.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }
            function Ye(e, t, n, i, o) {
                var r, s = 0;
                for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2)
                    "margin" === n && (s += g.css(e, n + Q[r], !0, o)),
                    i ? ("content" === n && (s -= g.css(e, "padding" + Q[r], !0, o)),
                    "margin" !== n && (s -= g.css(e, "border" + Q[r] + "Width", !0, o))) : (s += g.css(e, "padding" + Q[r], !0, o),
                    "padding" !== n && (s += g.css(e, "border" + Q[r] + "Width", !0, o)));
                return s
            }
            function Ve(e, t, n) {
                var i, o = Me(e), r = Ie(e, t, o), s = "border-box" === g.css(e, "boxSizing", !1, o);
                return Fe.test(r) ? r : (i = s && (p.boxSizingReliable() || r === e.style[t]),
                "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]),
                (r = parseFloat(r) || 0) + Ye(e, t, n || (s ? "border" : "content"), i, o) + "px")
            }
            function Ue(e, t, n, i, o) {
                return new Ue.prototype.init(e,t,n,i,o)
            }
            g.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Ie(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, r, s, a = g.camelCase(t), l = ze.test(t), c = e.style;
                        if (l || (t = Xe(a)),
                        s = g.cssHooks[t] || g.cssHooks[a],
                        void 0 === n)
                            return s && "get"in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                        "string" == (r = typeof n) && (o = J.exec(n)) && o[1] && (n = te(e, t, o),
                        r = "number"),
                        null != n && n == n && ("number" === r && (n += o && o[3] || (g.cssNumber[a] ? "" : "px")),
                        p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                    }
                },
                css: function(e, t, n, i) {
                    var o, r, s, a = g.camelCase(t);
                    return ze.test(t) || (t = Xe(a)),
                    (s = g.cssHooks[t] || g.cssHooks[a]) && "get"in s && (o = s.get(e, !0, n)),
                    void 0 === o && (o = Ie(e, t, i)),
                    "normal" === o && t in He && (o = He[t]),
                    "" === n || n ? (r = parseFloat(o),
                    !0 === n || isFinite(r) ? r || 0 : o) : o
                }
            }),
            g.each(["height", "width"], function(e, t) {
                g.cssHooks[t] = {
                    get: function(e, n, i) {
                        if (n)
                            return !Oe.test(g.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ve(e, t, i) : ee(e, Be, function() {
                                return Ve(e, t, i)
                            })
                    },
                    set: function(e, n, i) {
                        var o, r = i && Me(e), s = i && Ye(e, t, i, "border-box" === g.css(e, "boxSizing", !1, r), r);
                        return s && (o = J.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                        n = g.css(e, t)),
                        $e(0, n, s)
                    }
                }
            }),
            g.cssHooks.marginLeft = Pe(p.reliableMarginLeft, function(e, t) {
                if (t)
                    return (parseFloat(Ie(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
            }),
            g.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                g.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                            o[e + Q[i] + t] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                },
                Le.test(e) || (g.cssHooks[e + t].set = $e)
            }),
            g.fn.extend({
                css: function(e, t) {
                    return R(this, function(e, t, n) {
                        var i, o, r = {}, s = 0;
                        if (Array.isArray(t)) {
                            for (i = Me(e),
                            o = t.length; s < o; s++)
                                r[t[s]] = g.css(e, t[s], !1, i);
                            return r
                        }
                        return void 0 !== n ? g.style(e, t, n) : g.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }),
            g.Tween = Ue,
            Ue.prototype = {
                constructor: Ue,
                init: function(e, t, n, i, o, r) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = o || g.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = r || (g.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = Ue.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Ue.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = Ue.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = g.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Ue.propHooks._default.set(this),
                    this
                }
            },
            Ue.prototype.init.prototype = Ue.prototype,
            Ue.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = g.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        g.fx.step[e.prop] ? g.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[g.cssProps[e.prop]] && !g.cssHooks[e.prop] ? e.elem[e.prop] = e.now : g.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            Ue.propHooks.scrollTop = Ue.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            g.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            g.fx = Ue.prototype.init,
            g.fx.step = {};
            var Ge, Ze, Je = /^(?:toggle|show|hide)$/, Qe = /queueHooks$/;
            function Ke() {
                Ze && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(Ke) : e.setTimeout(Ke, g.fx.interval),
                g.fx.tick())
            }
            function et() {
                return e.setTimeout(function() {
                    Ge = void 0
                }),
                Ge = g.now()
            }
            function tt(e, t) {
                var n, i = 0, o = {
                    height: e
                };
                for (t = t ? 1 : 0; i < 4; i += 2 - t)
                    o["margin" + (n = Q[i])] = o["padding" + n] = e;
                return t && (o.opacity = o.width = e),
                o
            }
            function nt(e, t, n) {
                for (var i, o = (it.tweeners[t] || []).concat(it.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                    if (i = o[r].call(n, t, e))
                        return i
            }
            function it(e, t, n) {
                var i, o, r = 0, s = it.prefilters.length, a = g.Deferred().always(function() {
                    delete l.elem
                }), l = function() {
                    if (o)
                        return !1;
                    for (var t = Ge || et(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++)
                        c.tweens[r].run(i);
                    return a.notifyWith(e, [c, i, n]),
                    i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]),
                    a.resolveWith(e, [c]),
                    !1)
                }, c = a.promise({
                    elem: e,
                    props: g.extend({}, t),
                    opts: g.extend(!0, {
                        specialEasing: {},
                        easing: g.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Ge || et(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = g.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i),
                        i
                    },
                    stop: function(t) {
                        var n = 0
                          , i = t ? c.tweens.length : 0;
                        if (o)
                            return this;
                        for (o = !0; n < i; n++)
                            c.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [c, 1, 0]),
                        a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                        this
                    }
                }), u = c.props;
                for (function(e, t) {
                    var n, i, o, r, s;
                    for (n in e)
                        if (o = t[i = g.camelCase(n)],
                        r = e[n],
                        Array.isArray(r) && (o = r[1],
                        r = e[n] = r[0]),
                        n !== i && (e[i] = r,
                        delete e[n]),
                        (s = g.cssHooks[i]) && "expand"in s)
                            for (n in r = s.expand(r),
                            delete e[i],
                            r)
                                n in e || (e[n] = r[n],
                                t[n] = o);
                        else
                            t[i] = o
                }(u, c.opts.specialEasing); r < s; r++)
                    if (i = it.prefilters[r].call(c, e, u, c.opts))
                        return g.isFunction(i.stop) && (g._queueHooks(c.elem, c.opts.queue).stop = g.proxy(i.stop, i)),
                        i;
                return g.map(u, nt, c),
                g.isFunction(c.opts.start) && c.opts.start.call(e, c),
                c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                g.fx.timer(g.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })),
                c
            }
            g.Animation = g.extend(it, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return te(n.elem, e, J.exec(t), n),
                        n
                    }
                    ]
                },
                tweener: function(e, t) {
                    g.isFunction(e) ? (t = e,
                    e = ["*"]) : e = e.match(M);
                    for (var n, i = 0, o = e.length; i < o; i++)
                        n = e[i],
                        it.tweeners[n] = it.tweeners[n] || [],
                        it.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var i, o, r, s, a, l, c, u, h = "width"in t || "height"in t, d = this, f = {}, p = e.style, m = e.nodeType && K(e), v = $.get(e, "fxshow");
                    for (i in n.queue || (null == (s = g._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
                    a = s.empty.fire,
                    s.empty.fire = function() {
                        s.unqueued || a()
                    }
                    ),
                    s.unqueued++,
                    d.always(function() {
                        d.always(function() {
                            s.unqueued--,
                            g.queue(e, "fx").length || s.empty.fire()
                        })
                    })),
                    t)
                        if (o = t[i],
                        Je.test(o)) {
                            if (delete t[i],
                            r = r || "toggle" === o,
                            o === (m ? "hide" : "show")) {
                                if ("show" !== o || !v || void 0 === v[i])
                                    continue;
                                m = !0
                            }
                            f[i] = v && v[i] || g.style(e, i)
                        }
                    if ((l = !g.isEmptyObject(t)) || !g.isEmptyObject(f))
                        for (i in h && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                        null == (c = v && v.display) && (c = $.get(e, "display")),
                        "none" === (u = g.css(e, "display")) && (c ? u = c : (oe([e], !0),
                        c = e.style.display || c,
                        u = g.css(e, "display"),
                        oe([e]))),
                        ("inline" === u || "inline-block" === u && null != c) && "none" === g.css(e, "float") && (l || (d.done(function() {
                            p.display = c
                        }),
                        null == c && (u = p.display,
                        c = "none" === u ? "" : u)),
                        p.display = "inline-block")),
                        n.overflow && (p.overflow = "hidden",
                        d.always(function() {
                            p.overflow = n.overflow[0],
                            p.overflowX = n.overflow[1],
                            p.overflowY = n.overflow[2]
                        })),
                        l = !1,
                        f)
                            l || (v ? "hidden"in v && (m = v.hidden) : v = $.access(e, "fxshow", {
                                display: c
                            }),
                            r && (v.hidden = !m),
                            m && oe([e], !0),
                            d.done(function() {
                                for (i in m || oe([e]),
                                $.remove(e, "fxshow"),
                                f)
                                    g.style(e, i, f[i])
                            })),
                            l = nt(m ? v[i] : 0, i, d),
                            i in v || (v[i] = l.start,
                            m && (l.end = l.start,
                            l.start = 0))
                }
                ],
                prefilter: function(e, t) {
                    t ? it.prefilters.unshift(e) : it.prefilters.push(e)
                }
            }),
            g.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? g.extend({}, e) : {
                    complete: n || !n && t || g.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !g.isFunction(t) && t
                };
                return g.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in g.fx.speeds ? i.duration = g.fx.speeds[i.duration] : i.duration = g.fx.speeds._default),
                null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    g.isFunction(i.old) && i.old.call(this),
                    i.queue && g.dequeue(this, i.queue)
                }
                ,
                i
            }
            ,
            g.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(K).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = g.isEmptyObject(e)
                      , r = g.speed(t, n, i)
                      , s = function() {
                        var t = it(this, g.extend({}, e), r);
                        (o || $.get(this, "finish")) && t.stop(!0)
                    };
                    return s.finish = s,
                    o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                          , o = null != e && e + "queueHooks"
                          , r = g.timers
                          , s = $.get(this);
                        if (o)
                            s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s)
                                s[o] && s[o].stop && Qe.test(o) && i(s[o]);
                        for (o = r.length; o--; )
                            r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n),
                            t = !1,
                            r.splice(o, 1));
                        !t && n || g.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"),
                    this.each(function() {
                        var t, n = $.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = g.timers, s = i ? i.length : 0;
                        for (n.finish = !0,
                        g.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = r.length; t--; )
                            r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                            r.splice(t, 1));
                        for (t = 0; t < s; t++)
                            i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            g.each(["toggle", "show", "hide"], function(e, t) {
                var n = g.fn[t];
                g.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(tt(t, !0), e, i, o)
                }
            }),
            g.each({
                slideDown: tt("show"),
                slideUp: tt("hide"),
                slideToggle: tt("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                g.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }),
            g.timers = [],
            g.fx.tick = function() {
                var e, t = 0, n = g.timers;
                for (Ge = g.now(); t < n.length; t++)
                    (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || g.fx.stop(),
                Ge = void 0
            }
            ,
            g.fx.timer = function(e) {
                g.timers.push(e),
                g.fx.start()
            }
            ,
            g.fx.interval = 13,
            g.fx.start = function() {
                Ze || (Ze = !0,
                Ke())
            }
            ,
            g.fx.stop = function() {
                Ze = null
            }
            ,
            g.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            g.fn.delay = function(t, n) {
                return t = g.fx && g.fx.speeds[t] || t,
                n = n || "fx",
                this.queue(n, function(n, i) {
                    var o = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(o)
                    }
                })
            }
            ,
            function() {
                var e = i.createElement("input")
                  , t = i.createElement("select").appendChild(i.createElement("option"));
                e.type = "checkbox",
                p.checkOn = "" !== e.value,
                p.optSelected = t.selected,
                (e = i.createElement("input")).value = "t",
                e.type = "radio",
                p.radioValue = "t" === e.value
            }();
            var ot, rt = g.expr.attrHandle;
            g.fn.extend({
                attr: function(e, t) {
                    return R(this, g.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        g.removeAttr(this, e)
                    })
                }
            }),
            g.extend({
                attr: function(e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return void 0 === e.getAttribute ? g.prop(e, t, n) : (1 === r && g.isXMLDoc(e) || (o = g.attrHooks[t.toLowerCase()] || (g.expr.match.bool.test(t) ? ot : void 0)),
                        void 0 !== n ? null === n ? void g.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                        n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : null == (i = g.find.attr(e, t)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!p.radioValue && "radio" === t && E(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i = 0, o = t && t.match(M);
                    if (o && 1 === e.nodeType)
                        for (; n = o[i++]; )
                            e.removeAttribute(n)
                }
            }),
            ot = {
                set: function(e, t, n) {
                    return !1 === t ? g.removeAttr(e, n) : e.setAttribute(n, n),
                    n
                }
            },
            g.each(g.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = rt[t] || g.find.attr;
                rt[t] = function(e, t, i) {
                    var o, r, s = t.toLowerCase();
                    return i || (r = rt[s],
                    rt[s] = o,
                    o = null != n(e, t, i) ? s : null,
                    rt[s] = r),
                    o
                }
            });
            function st(e) {
                return (e.match(M) || []).join(" ")
            }
            function at(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            g.fn.extend({
                prop: function(e, t) {
                    return R(this, g.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[g.propFix[e] || e]
                    })
                }
            }),
            g.extend({
                prop: function(e, t, n) {},
                propHooks: {
                    tabIndex: {}
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            p.optSelected || (g.propHooks.selected = {}),
            g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                g.propFix[this.toLowerCase()] = this
            }),
            g.fn.extend({
                addClass: function(e) {
                    var t, n, i, o, r, s, a, l = 0;
                    if (g.isFunction(e))
                        return this.each(function(t) {
                            g(this).addClass(e.call(this, t, at(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(M) || []; n = this[l++]; )
                            if (o = at(n),
                            i = 1 === n.nodeType && " " + st(o) + " ") {
                                for (s = 0; r = t[s++]; )
                                    i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                o !== (a = st(i)) && n.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, i, o, r, s, a, l = 0;
                    if (g.isFunction(e))
                        return this.each(function(t) {
                            g(this).removeClass(e.call(this, t, at(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(M) || []; n = this[l++]; )
                            if (o = at(n),
                            i = 1 === n.nodeType && " " + st(o) + " ") {
                                for (s = 0; r = t[s++]; )
                                    for (; i.indexOf(" " + r + " ") > -1; )
                                        i = i.replace(" " + r + " ", " ");
                                o !== (a = st(i)) && n.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : g.isFunction(e) ? this.each(function(n) {
                        g(this).toggleClass(e.call(this, n, at(this), t), t)
                    }) : this.each(function() {
                        var t, i, o, r;
                        if ("string" === n)
                            for (i = 0,
                            o = g(this),
                            r = e.match(M) || []; t = r[i++]; )
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || ((t = at(this)) && $.set(this, "__className__", t),
                            this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : $.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++]; )
                        if (1 === n.nodeType && (" " + st(at(n)) + " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            g.fn.extend({}),
            g.extend({}),
            g.each(["radio", "checkbox"], function() {}),
            g.fn.extend({}),
            g.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                g.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }),
            g.fn.extend({}),
            p.focusin = "onfocusin"in e,
            p.focusin || g.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {});
            var lt = e.location;
            g.now();
            g.parseXML = function(e) {}
            ;
            g.param = function(e, t) {}
            ,
            g.fn.extend({
                serialize: function() {
                    return g.param(this.serializeArray())
                },
                serializeArray: function() {}
            });
            "*/".concat("*");
            i.createElement("a").href = lt.href,
            g.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    accepts: {},
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {},
                    converters: {},
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    g.ajaxSettings
                },
                ajaxPrefilter: function(e, t) {},
                ajaxTransport: function(e, t) {},
                getJSON: function(e, t, n) {
                    return g.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return g.get(e, void 0, t, "script")
                }
            }),
            g.fn.extend({}),
            g.expr.pseudos.hidden = function(e) {
                return !g.expr.pseudos.visible(e)
            }
            ,
            g.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }
            ,
            g.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            }
            ;
            var ct = g.ajaxSettings.xhr();
            p.cors = !!ct && "withCredentials"in ct,
            p.ajax = ct = !!ct,
            g.ajaxTransport(function(e) {}),
            g.ajaxPrefilter(function(e) {}),
            g.ajaxSetup({}),
            g.ajaxPrefilter("script", function(e) {}),
            g.ajaxTransport("script", function(e) {});
            g.ajaxSetup({}),
            g.ajaxPrefilter("json jsonp", function(e, t, n) {}),
            g.parseHTML = function(e, t, n) {}
            ,
            g.fn.load = function(e, t, n) {}
            ,
            g.each(),
            g.fn.extend({
                offset: function(e) {},
                position: function() {},
                offsetParent: function() {}
            }),
            g.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                g.fn[e] = function(i) {
                    return R(this, function(e, i, o) {
                        var r;
                        if (g.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === o)
                            return r ? r[t] : e[i];
                        r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                    }, e, i, arguments.length)
                }
            }),
            g.each(["top", "left"], function(e, t) {
                g.cssHooks[t] = Pe(p.pixelPosition, function(e, n) {
                    if (n)
                        return n = Ie(e, t),
                        Fe.test(n) ? g(e).position()[t] + "px" : n
                })
            }),
            g.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                g.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, i) {
                    g.fn[i] = function(o, r) {
                        var s = arguments.length && (n || "boolean" != typeof o)
                          , a = n || (!0 === o || !0 === r ? "margin" : "border");
                        return R(this, function(t, n, o) {
                            var r;
                            return g.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                            Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? g.css(t, n, a) : g.style(t, n, o, a)
                        }, t, s ? o : void 0, s)
                    }
                })
            }),
            g.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }),
            g.isArray = Array.isArray,
            g.parseJSON = JSON.parse,
            g.nodeName = E,
            "function" == typeof define && define.amd && define("jquery", [], function() {
                return g
            });
            var ut = e.jQuery
              , ht = e.$;
            return g.noConflict = function(t) {
                return e.$ === g && (e.$ = ht),
                t && e.jQuery === g && (e.jQuery = ut),
                g
            }
            ,
            t || (e.jQuery = e.$ = g),
            g
        })
    }
    , {}],
    53: [function(e, t, n) {
        !function(e, i, o) {
            "use strict";
            function r() {
                if (!("scrollBehavior"in i.documentElement.style)) {
                    var t = e.HTMLElement || e.Element
                      , n = 468
                      , r = {
                        scroll: e.scroll || e.scrollTo,
                        scrollBy: e.scrollBy,
                        elScroll: t.prototype.scroll || a,
                        scrollIntoView: t.prototype.scrollIntoView
                    }
                      , s = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now;
                    e.scroll = e.scrollTo = function() {
                        l(arguments[0]) ? r.scroll.call(e, arguments[0].left || arguments[0], arguments[0].top || arguments[1]) : u.call(e, i.body, ~~arguments[0].left, ~~arguments[0].top)
                    }
                    ,
                    e.scrollBy = function() {
                        l(arguments[0]) ? r.scrollBy.call(e, arguments[0].left || arguments[0], arguments[0].top || arguments[1]) : u.call(e, i.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset))
                    }
                    ,
                    t.prototype.scroll = t.prototype.scrollTo = function() {
                        if (l(arguments[0]))
                            r.elScroll.call(this, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
                        else {
                            var e = arguments[0].left
                              , t = arguments[0].top;
                            u.call(this, this, "number" == typeof e ? e : this.scrollLeft, "number" == typeof t ? t : this.scrollTop)
                        }
                    }
                    ,
                    t.prototype.scrollBy = function() {
                        var e = arguments[0];
                        "object" == typeof e ? this.scroll({
                            left: e.left + this.scrollLeft,
                            top: e.top + this.scrollTop,
                            behavior: e.behavior
                        }) : this.scroll(this.scrollLeft + e, this.scrollTop + arguments[1])
                    }
                    ,
                    t.prototype.scrollIntoView = function() {
                        if (l(arguments[0]))
                            r.scrollIntoView.call(this, arguments[0] === o || arguments[0]);
                        else {
                            var t = function(t) {
                                var n, o, r;
                                do {
                                    n = (t = t.parentNode) === i.body,
                                    o = t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth,
                                    r = "visible" === e.getComputedStyle(t, null).overflow
                                } while (!n && (!o || r));
                                return n = o = r = null,
                                t
                            }(this)
                              , n = t.getBoundingClientRect()
                              , s = this.getBoundingClientRect();
                            t !== i.body ? (u.call(this, t, t.scrollLeft + s.left - n.left, t.scrollTop + s.top - n.top),
                            e.scrollBy({
                                left: n.left,
                                top: n.top,
                                behavior: "smooth"
                            })) : e.scrollBy({
                                left: s.left,
                                top: s.top,
                                behavior: "smooth"
                            })
                        }
                    }
                }
                function a(e, t) {
                    this.scrollLeft = e,
                    this.scrollTop = t
                }
                function l(e) {
                    if ("object" != typeof e || null === e || e.behavior === o || "auto" === e.behavior || "instant" === e.behavior)
                        return !0;
                    if ("object" == typeof e && "smooth" === e.behavior)
                        return !1;
                    throw new TypeError("behavior not valid")
                }
                function c(t) {
                    var i, o, r, a, l = (s() - t.startTime) / n;
                    a = l = l > 1 ? 1 : l,
                    i = .5 * (1 - Math.cos(Math.PI * a)),
                    o = t.startX + (t.x - t.startX) * i,
                    r = t.startY + (t.y - t.startY) * i,
                    t.method.call(t.scrollable, o, r),
                    o === t.x && r === t.y || e.requestAnimationFrame(c.bind(e, t))
                }
                function u(t, n, o) {
                    var l, u, h, d, f = s();
                    t === i.body ? (l = e,
                    u = e.scrollX || e.pageXOffset,
                    h = e.scrollY || e.pageYOffset,
                    d = r.scroll) : (l = t,
                    u = t.scrollLeft,
                    h = t.scrollTop,
                    d = a),
                    c({
                        scrollable: l,
                        method: d,
                        startTime: f,
                        startX: u,
                        startY: h,
                        x: n,
                        y: o
                    })
                }
            }
            "object" == typeof n ? t.exports = {
                polyfill: r
            } : r()
        }(window, document)
    }
    , {}],
    54: [function(e, t, n) {
        !function() {
            function e(e, t, n) {
                return e.call.apply(e.bind, arguments)
            }
            function i(t, o, r) {
                return (i = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? e : n).apply(null, arguments)
            }
            function o(e, t) {
                this.a = e,
                this.o = t || e,
                this.c = this.o.document
            }
            window.FontFace;
            function r(e, t, n) {
                t = t || [],
                n = n || [];
                for (var i = e.className.split(/\s+/), o = 0; o < t.length; o += 1) {
                    for (var r = !1, s = 0; s < i.length; s += 1)
                        if (t[o] === i[s]) {
                            r = !0;
                            break
                        }
                    r || i.push(t[o])
                }
                for (t = [],
                o = 0; o < i.length; o += 1) {
                    for (r = !1,
                    s = 0; s < n.length; s += 1)
                        if (i[o] === n[s]) {
                            r = !0;
                            break
                        }
                    r || t.push(i[o])
                }
                e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
            }
            function u() {
                this.a = 0,
                this.c = null
            }
            function h(e, t) {
                e.c = t,
                function(e) {
                    0 == e.a && e.c && (e.c(),
                    e.c = null)
                }(e)
            }
            function p(e) {
                this.a = e || "-"
            }
            function g(e, t) {
                this.c = e,
                this.f = 4,
                this.a = "n";
                var n = (t || "n4").match(/^([nio])([1-9])$/i);
                n && (this.a = n[1],
                this.f = parseInt(n[2], 10))
            }
            function v(e) {
                var t = [];
                e = e.split(/,\s*/);
                for (var n = 0; n < e.length; n++) {
                    var i = e[n].replace(/['"]/g, "");
                    -1 != i.indexOf(" ") || /^\d/.test(i) ? t.push("'" + i + "'") : t.push(i)
                }
                return t.join(",")
            }
            function y(e) {
                return e.a + e.f
            }
            function b(e) {
                var t = "normal";
                return "o" === e.a ? t = "oblique" : "i" === e.a && (t = "italic"),
                t
            }
            function w(e) {
                var t = 4
                  , n = "n"
                  , i = null;
                return e && ((i = e.match(/(normal|oblique|italic)/i)) && i[1] && (n = i[1].substr(0, 1).toLowerCase()),
                (i = e.match(/([1-9]00|normal|bold)/i)) && i[1] && (/bold/i.test(i[1]) ? t = 7 : /[1-9]00/.test(i[1]) && (t = parseInt(i[1].substr(0, 1), 10)))),
                n + t
            }
            function x(e, t) {
                this.c = e,
                this.f = e.o.document.documentElement,
                this.h = t,
                this.a = new p("-"),
                this.j = !1 !== t.events,
                this.g = !1 !== t.classes
            }
            function _(e) {
                e.g && (n = [],
                i = [e.a.c("wf", "loading")],
                t || n.push(e.a.c("wf", "inactive")),
                r(e.f, n, i)),
                C(e, "inactive")
            }
            function C(e, t, n) {
                e.j && e.h[t] && (n ? e.h[t](n.c, y(n)) : e.h[t]())
            }
            function T() {
                this.c = {}
            }
            function k(e, t) {
                this.c = e,
                this.f = t,
                this.a = a(this.c, "span", {
                    "aria-hidden": "true"
                }, this.f)
            }
            function E(e) {
                l(e.c, "body", e.a)
            }
            function j(e) {
                return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + v(e.c) + ";font-style:" + b(e) + ";font-weight:" + e.f + "00;"
            }
            function S(e, t, n, i, o, r) {
                this.g = e,
                this.j = t,
                this.a = i,
                this.c = n,
                this.f = o || 3e3,
                this.h = r || void 0
            }
            function q(e, t, n, i, o, r, s) {
                this.v = e,
                this.B = t,
                this.c = n,
                this.a = i,
                this.s = s || "BESbswy",
                this.f = {},
                this.w = o || 3e3,
                this.u = r || null,
                this.m = this.j = this.h = this.g = null,
                this.g = new k(this.c,this.s),
                this.h = new k(this.c,this.s),
                this.j = new k(this.c,this.s),
                this.m = new k(this.c,this.s),
                e = j(e = new g(this.a.c + ",serif",y(this.a))),
                this.g.a.style.cssText = e,
                e = j(e = new g(this.a.c + ",sans-serif",y(this.a))),
                this.h.a.style.cssText = e,
                e = j(e = new g("serif",y(this.a))),
                this.j.a.style.cssText = e,
                e = j(e = new g("sans-serif",y(this.a))),
                this.m.a.style.cssText = e,
                E(this.g),
                E(this.h),
                E(this.j),
                E(this.m)
            }
            p.prototype.c = function(e) {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
                return t.join(this.a)
            }
            ,
            S.prototype.start = function() {
                var e = this.c.o.document
                  , t = this
                  , i = new Promise(function(i, o) {
                    !function r() {
                        s() - n >= t.f ? o() : e.fonts.load(function(e) {
                            return b(e) + " " + e.f + "00 300px " + v(e.c)
                        }(t.a), t.h).then(function(e) {
                            1 <= e.length ? i() : setTimeout(r, 25)
                        }, function() {
                            o()
                        })
                    }()
                }
                )
                  , o = null
                  , r = new Promise(function(e, n) {
                    o = setTimeout(n, t.f)
                }
                );
                Promise.race([r, i]).then(function() {
                    o && (clearTimeout(o),
                    o = null),
                    t.g(t.a)
                }, function() {
                    t.j(t.a)
                })
            }
            ;
            var D = {
                D: "serif",
                C: "sans-serif"
            }
              , N = null;
            function A() {
                if (null === N) {
                    var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                    N = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
                }
                return N
            }
            function L(e, t, n) {
                for (var i in D)
                    if (D.hasOwnProperty(i) && t === e.f[D[i]] && n === e.f[D[i]])
                        return !0;
                return !1
            }
            function F(e, t) {
                setTimeout(i(function() {
                    c(this.g.a),
                    c(this.h.a),
                    c(this.j.a),
                    c(this.m.a),
                    t(this.a)
                }, e), 0)
            }
            function M(e, t, n) {
                this.c = e,
                this.a = t,
                this.f = 0,
                this.m = this.j = !1,
                this.s = n
            }
            q.prototype.start = function() {
                this.f.serif = this.j.a.offsetWidth,
                this.f["sans-serif"] = this.m.a.offsetWidth,
                this.A = s(),
                function e(t) {
                    var n, o = t.g.a.offsetWidth, r = t.h.a.offsetWidth;
                    (n = o === t.f.serif && r === t.f["sans-serif"]) || (n = A() && L(t, o, r)),
                    n ? s() - t.A >= t.w ? A() && L(t, o, r) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? F(t, t.v) : F(t, t.B) : function(t) {
                        setTimeout(i(function() {
                            e(this)
                        }, t), 50)
                    }(t) : F(t, t.v)
                }(this)
            }
            ;
            var I = null;
            function P(e) {
                0 == --e.f && e.j && (e.m ? ((e = e.a).g && r(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]),
                C(e, "active")) : _(e.a))
            }
            function O(e) {
                this.j = e,
                this.a = new T,
                this.h = 0,
                this.f = this.g = !0
            }
            function z(e, t, n, o, s) {
                var a = 0 == --e.h;
                (e.f || e.g) && setTimeout(function() {
                    var e = s || null
                      , l = o || {};
                    if (0 === n.length && a)
                        _(t.a);
                    else {
                        t.f += n.length,
                        a && (t.j = a);
                        var c, u = [];
                        for (c = 0; c < n.length; c++) {
                            var h = n[c]
                              , d = l[h.c]
                              , f = t.a
                              , p = h;
                            if (f.g && r(f.f, [f.a.c("wf", p.c, y(p).toString(), "loading")]),
                            C(f, "fontloading", p),
                            f = null,
                            null === I)
                                if (window.FontFace) {
                                    p = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                                    var m = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                                    I = p ? 42 < parseInt(p[1], 10) : !m
                                } else
                                    I = !1;
                            f = I ? new S(i(t.g, t),i(t.h, t),t.c,h,t.s,d) : new q(i(t.g, t),i(t.h, t),t.c,h,t.s,e,d),
                            u.push(f)
                        }
                        for (c = 0; c < u.length; c++)
                            u[c].start()
                    }
                }, 0)
            }
            function B(e, t) {
                this.c = e,
                this.a = t
            }
            function H(e, t) {
                this.c = e,
                this.a = t
            }
            function R(e, t) {
                this.c = e || W,
                this.a = [],
                this.f = [],
                this.g = t || ""
            }
            M.prototype.g = function(e) {
                var t = this.a;
                t.g && r(t.f, [t.a.c("wf", e.c, y(e).toString(), "active")], [t.a.c("wf", e.c, y(e).toString(), "loading"), t.a.c("wf", e.c, y(e).toString(), "inactive")]),
                C(t, "fontactive", e),
                this.m = !0,
                P(this)
            }
            ,
            M.prototype.h = function(e) {
                var t = this.a;
                t.g && (i = [],
                s = [t.a.c("wf", e.c, y(e).toString(), "loading")],
                n || i.push(t.a.c("wf", e.c, y(e).toString(), "inactive")),
                r(t.f, i, s)),
                C(t, "fontinactive", e),
                P(this)
            }
            ,
            O.prototype.load = function(e) {
                this.c = new o(this.j,e.context || this.j),
                this.g = !1 !== e.events,
                this.f = !1 !== e.classes,
                function(e, t, n) {
                    var i = []
                      , o = n.timeout;
                    !function(e) {
                        e.g && r(e.f, [e.a.c("wf", "loading")]),
                        C(e, "loading")
                    }(t);
                    i = function(e, t, n) {
                        var i, o = [];
                        for (i in t)
                            if (t.hasOwnProperty(i)) {
                                var r = e.c[i];
                                r && o.push(r(t[i], n))
                            }
                        return o
                    }(e.a, n, e.c);
                    var s = new M(e.c,t,o);
                    for (e.h = i.length,
                    t = 0,
                    n = i.length; t < n; t++)
                        i[t].load(function(t, n, i) {
                            z(e, s, t, n, i)
                        })
                }(this, new x(this.c,e), e)
            }
            ,
            B.prototype.load = function(e) {
                var t = this
                  , n = t.a.projectId
                  , i = t.a.version;
                if (n) {
                    var o = t.c.o;
                    f(this.c, (t.a.api || "https://fast.fonts.net/jsapi") + "/" + n + ".js" + (i ? "?v=" + i : ""), function(i) {
                        i ? e([]) : (o["__MonotypeConfiguration__" + n] = function() {
                            return t.a
                        }
                        ,
                        function t() {
                            if (o["__mti_fntLst" + n]) {
                                var i, r = o["__mti_fntLst" + n](), s = [];
                                if (r)
                                    for (var a = 0; a < r.length; a++) {
                                        var l = r[a].fontfamily;
                                        null != r[a].fontStyle && null != r[a].fontWeight ? (i = r[a].fontStyle + r[a].fontWeight,
                                        s.push(new g(l,i))) : s.push(new g(l))
                                    }
                                e(s)
                            } else
                                setTimeout(function() {
                                    t()
                                }, 50)
                        }())
                    }).id = "__MonotypeAPIScript__" + n
                } else
                    e([])
            }
            ,
            H.prototype.load = function(e) {
                var t, n, i = this.a.urls || [], o = this.a.families || [], r = this.a.testStrings || {}, s = new u;
                for (t = 0,
                n = i.length; t < n; t++)
                    d(this.c, i[t], m(s));
                var a = [];
                for (t = 0,
                n = o.length; t < n; t++)
                    if ((i = o[t].split(":"))[1])
                        for (var l = i[1].split(","), c = 0; c < l.length; c += 1)
                            a.push(new g(i[0],l[c]));
                    else
                        a.push(new g(i[0]));
                h(s, function() {
                    e(a, r)
                })
            }
            ;
            var W = "https://fonts.googleapis.com/css";
            function X(e) {
                this.f = e,
                this.a = [],
                this.c = {}
            }
            var $ = {
                latin: "BESbswy",
                "latin-ext": "çöüğş",
                cyrillic: "йяЖ",
                greek: "αβΣ",
                khmer: "កខគ",
                Hanuman: "កខគ"
            }
              , Y = {
                thin: "1",
                extralight: "2",
                "extra-light": "2",
                ultralight: "2",
                "ultra-light": "2",
                light: "3",
                regular: "4",
                book: "4",
                medium: "5",
                "semi-bold": "6",
                semibold: "6",
                "demi-bold": "6",
                demibold: "6",
                bold: "7",
                "extra-bold": "8",
                extrabold: "8",
                "ultra-bold": "8",
                ultrabold: "8",
                black: "9",
                heavy: "9",
                l: "3",
                r: "4",
                b: "7"
            }
              , V = {
                i: "i",
                italic: "i",
                n: "n",
                normal: "n"
            }
              , U = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
            function G(e, t) {
                this.c = e,
                this.a = t
            }
            var Z = {
                Arimo: !0,
                Cousine: !0,
                Tinos: !0
            };
            function J(e, t) {
                this.c = e,
                this.a = t
            }
            function Q(e, t) {
                this.c = e,
                this.f = t,
                this.a = []
            }
            G.prototype.load = function(e) {
                var t = new u
                  , n = this.c
                  , i = new R(this.a.api,this.a.text)
                  , o = this.a.families;
                !function(e, t) {
                    for (var n = t.length, i = 0; i < n; i++) {
                        var o = t[i].split(":");
                        3 == o.length && e.f.push(o.pop());
                        var r = "";
                        2 == o.length && "" != o[1] && (r = ":"),
                        e.a.push(o.join(r))
                    }
                }(i, o);
                var r = new X(o);
                !function(e) {
                    for (var t = e.f.length, n = 0; n < t; n++) {
                        var i = e.f[n].split(":")
                          , o = i[0].replace(/\+/g, " ")
                          , r = ["n4"];
                        if (2 <= i.length) {
                            var s;
                            if (s = [],
                            a = i[1])
                                for (var a, l = (a = a.split(",")).length, c = 0; c < l; c++) {
                                    var u;
                                    if ((u = a[c]).match(/^[\w-]+$/))
                                        if (null == (h = U.exec(u.toLowerCase())))
                                            u = "";
                                        else {
                                            if (u = null == (u = h[2]) || "" == u ? "n" : V[u],
                                            null == (h = h[1]) || "" == h)
                                                h = "4";
                                            else
                                                var h = Y[h] || (isNaN(h) ? "4" : h.substr(0, 1));
                                            u = [u, h].join("")
                                        }
                                    else
                                        u = "";
                                    u && s.push(u)
                                }
                            0 < s.length && (r = s),
                            3 == i.length && (s = [],
                            0 < (i = (i = i[2]) ? i.split(",") : s).length && (i = $[i[0]]) && (e.c[o] = i))
                        }
                        for (e.c[o] || (i = $[o]) && (e.c[o] = i),
                        i = 0; i < r.length; i += 1)
                            e.a.push(new g(o,r[i]))
                    }
                }(r),
                d(n, function(e) {
                    if (0 == e.a.length)
                        throw Error("No fonts to load!");
                    if (-1 != e.c.indexOf("kit="))
                        return e.c;
                    for (var t = e.a.length, n = [], i = 0; i < t; i++)
                        n.push(e.a[i].replace(/ /g, "+"));
                    return t = e.c + "?family=" + n.join("%7C"),
                    0 < e.f.length && (t += "&subset=" + e.f.join(",")),
                    0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)),
                    t
                }(i), m(t)),
                h(t, function() {
                    e(r.a, r.c, Z)
                })
            }
            ,
            J.prototype.load = function(e) {
                var t = this.a.id
                  , n = this.c.o;
                t ? f(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", function(t) {
                    if (t)
                        e([]);
                    else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                        t = n.Typekit.config.fn;
                        for (var i = [], o = 0; o < t.length; o += 2)
                            for (var r = t[o], s = t[o + 1], a = 0; a < s.length; a++)
                                i.push(new g(r,s[a]));
                        try {
                            n.Typekit.load({
                                events: !1,
                                classes: !1,
                                async: !0
                            })
                        } catch (e) {}
                        e(i)
                    }
                }, 2e3) : e([])
            }
            ,
            Q.prototype.load = function(e) {
                var t = this.f.id
                  , n = this.c.o
                  , i = this;
                t ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}),
                n.__webfontfontdeckmodule__[t] = function(t, n) {
                    for (var o = 0, r = n.fonts.length; o < r; ++o) {
                        var s = n.fonts[o];
                        i.a.push(new g(s.name,w("font-weight:" + s.weight + ";font-style:" + s.style)))
                    }
                    e(i.a)
                }
                ,
                f(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function(e) {
                    return e.o.location.hostname || e.a.location.hostname
                }(this.c) + "/" + t + ".js", function(t) {
                    t && e([])
                })) : e([])
            }
            ;
            var K = new O(window);
            K.a.c.custom = function(e, t) {
                return new H(t,e)
            }
            ,
            K.a.c.fontdeck = function(e, t) {
                return new Q(t,e)
            }
            ,
            K.a.c.monotype = function(e, t) {
                return new B(t,e)
            }
            ,
            K.a.c.typekit = function(e, t) {
                return new J(t,e)
            }
            ,
            K.a.c.google = function(e, t) {
                return new G(t,e)
            }
            ;
            var ee = {
                load: i(K.load, K)
            };
            "function" == typeof define && define.amd ? define(function() {
                return ee
            }) : void 0 !== t && t.exports ? t.exports = ee : (window.WebFont = ee,
            window.WebFontConfig && K.load(window.WebFontConfig))
        }()
    }
    , {}]
}, {}, [46]),
$(".modal.modal_video").on("shown.bs.modal", function(e) {
    $("video").prop("muted", !0)
}),
$(".modal.modal_video").on("hidden.bs.modal", function(e) {
    $(".modal_video .modal-body iframe").attr("src", ""),
    $("video").prop("muted", !1)
});

/*  */
if ($(".video-carousel").length) {
    $(".video-carousel").owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        dots: true,
        autoplay: false,
        mouseDrag: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
}

$(".video-caroselWrap .video-link").click(function() {
    var datalink = $(this).attr('data-link');
    var videolink = 'https://www.youtube.com/embed/' + datalink + '?autoplay=1;enablejsapi=1';
    $('.video-modal').find('iframe').attr('src', videolink);
    $('.video-modal').fadeIn();
    //console.log(videolink)
});
$(".video-modal .close-video-modal").click(function() {
    $(this).parents('.video-modal').find('iframe').attr('src', '');
    $(this).parents('.video-modal').hide();
});

var home_mob_video_slider = new Swiper('.home_mob_video_slider',{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1200,
});