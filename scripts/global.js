!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.bootstrap = {}, e.jQuery)
}(this, function(e, t) {
    "use strict";
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function s(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        e
    }
    function l(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {}
              , t = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable
            }))),
            t.forEach(function(e) {
                var t, n, i;
                t = r,
                i = o[n = e],
                n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return r
    }
    for (var r, n, o, a, c, u, f, h, d, p, m, g, _, v, y, E, b, w, C, T, S, D, A, I, O, N, k, x, P, L, j, H, M, F, W, R, U, B, q, K, Q, Y, V, z, G, J, Z, X, $, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, fe, he, de, pe, me, ge, _e, ve, ye, Ee, be, we = function(i) {
        var t = "transitionend";
        function e(e) {
            var t = this
              , n = !1;
            return i(this).one(l.TRANSITION_END, function() {
                n = !0
            }),
            setTimeout(function() {
                n || l.triggerTransitionEnd(t)
            }, e),
            this
        }
        var l = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                for (; e += ~~(1e6 * Math.random()),
                document.getElementById(e); )
                    ;
                return e
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                t && "#" !== t || (t = e.getAttribute("href") || "");
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(e) {
                if (!e)
                    return 0;
                var t = i(e).css("transition-duration");
                return parseFloat(t) ? (t = t.split(",")[0],
                1e3 * parseFloat(t)) : 0
            },
            reflow: function(e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function(e) {
                i(e).trigger(t)
            },
            supportsTransitionEnd: function() {
                return Boolean(t)
            },
            isElement: function(e) {
                return (e[0] || e).nodeType
            },
            typeCheckConfig: function(e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i]
                          , o = t[i]
                          , s = o && l.isElement(o) ? "element" : (a = o,
                        {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(r).test(s))
                            throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                    }
                var a
            }
        };
        return i.fn.emulateTransitionEnd = e,
        i.event.special[l.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function(e) {
                if (i(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        },
        l
    }(t = t && t.hasOwnProperty("default") ? t.default : t), Ce = (n = "alert",
    a = "." + (o = "bs.alert"),
    c = (r = t).fn[n],
    u = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api"
    },
    f = "alert",
    h = "fade",
    d = "show",
    p = function() {
        function i(e) {
            this._element = e
        }
        var e = i.prototype;
        return e.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        e.dispose = function() {
            r.removeData(this._element, o),
            this._element = null
        }
        ,
        e._getRootElement = function(e) {
            var t = we.getSelectorFromElement(e)
              , n = !1;
            return t && (n = document.querySelector(t)),
            n || (n = r(e).closest("." + f)[0]),
            n
        }
        ,
        e._triggerCloseEvent = function(e) {
            var t = r.Event(u.CLOSE);
            return r(e).trigger(t),
            t
        }
        ,
        e._removeElement = function(t) {
            var n = this;
            if (r(t).removeClass(d),
            r(t).hasClass(h)) {
                var e = we.getTransitionDurationFromElement(t);
                r(t).one(we.TRANSITION_END, function(e) {
                    return n._destroyElement(t, e)
                }).emulateTransitionEnd(e)
            } else
                this._destroyElement(t)
        }
        ,
        e._destroyElement = function(e) {
            r(e).detach().trigger(u.CLOSED).remove()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = r(this)
                  , t = e.data(o);
                t || (t = new i(this),
                e.data(o, t)),
                "close" === n && t[n](this)
            })
        }
        ,
        i._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }]),
        i
    }(),
    r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
    r.fn[n] = p._jQueryInterface,
    r.fn[n].Constructor = p,
    r.fn[n].noConflict = function() {
        return r.fn[n] = c,
        p._jQueryInterface
    }
    ,
    p), Te = (g = "button",
    v = "." + (_ = "bs.button"),
    y = ".data-api",
    E = (m = t).fn[g],
    b = "active",
    w = "btn",
    T = '[data-toggle^="button"]',
    S = '[data-toggle="buttons"]',
    D = "input",
    A = ".active",
    I = ".btn",
    O = {
        CLICK_DATA_API: "click" + v + y,
        FOCUS_BLUR_DATA_API: (C = "focus") + v + y + " blur" + v + y
    },
    N = function() {
        function n(e) {
            this._element = e
        }
        var e = n.prototype;
        return e.toggle = function() {
            var e = !0
              , t = !0
              , n = m(this._element).closest(S)[0];
            if (n) {
                var i = this._element.querySelector(D);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(b))
                            e = !1;
                        else {
                            var r = n.querySelector(A);
                            r && m(r).removeClass(b)
                        }
                    if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !this._element.classList.contains(b),
                        m(i).trigger("change")
                    }
                    i.focus(),
                    t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)),
            e && m(this._element).toggleClass(b)
        }
        ,
        e.dispose = function() {
            m.removeData(this._element, _),
            this._element = null
        }
        ,
        n._jQueryInterface = function(t) {
            return this.each(function() {
                var e = m(this).data(_);
                e || (e = new n(this),
                m(this).data(_, e)),
                "toggle" === t && e[t]()
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }]),
        n
    }(),
    m(document).on(O.CLICK_DATA_API, T, function(e) {
        e.preventDefault();
        var t = e.target;
        m(t).hasClass(w) || (t = m(t).closest(I)),
        N._jQueryInterface.call(m(t), "toggle")
    }).on(O.FOCUS_BLUR_DATA_API, T, function(e) {
        var t = m(e.target).closest(I)[0];
        m(t).toggleClass(C, /^focus(in)?$/.test(e.type))
    }),
    m.fn[g] = N._jQueryInterface,
    m.fn[g].Constructor = N,
    m.fn[g].noConflict = function() {
        return m.fn[g] = E,
        N._jQueryInterface
    }
    ,
    N), Se = (x = "carousel",
    L = "." + (P = "bs.carousel"),
    j = ".data-api",
    H = (k = t).fn[x],
    M = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0
    },
    F = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
    },
    W = "next",
    R = "prev",
    U = "left",
    B = "right",
    q = {
        SLIDE: "slide" + L,
        SLID: "slid" + L,
        KEYDOWN: "keydown" + L,
        MOUSEENTER: "mouseenter" + L,
        MOUSELEAVE: "mouseleave" + L,
        TOUCHEND: "touchend" + L,
        LOAD_DATA_API: "load" + L + j,
        CLICK_DATA_API: "click" + L + j
    },
    K = "carousel",
    Q = "active",
    Y = "slide",
    V = "carousel-item-right",
    z = "carousel-item-left",
    G = "carousel-item-next",
    J = "carousel-item-prev",
    Z = ".active",
    X = ".active.carousel-item",
    $ = ".carousel-item",
    ee = ".carousel-item-next, .carousel-item-prev",
    te = ".carousel-indicators",
    ne = "[data-slide], [data-slide-to]",
    ie = '[data-ride="carousel"]',
    re = function() {
        function o(e, t) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._config = this._getConfig(t),
            this._element = k(e)[0],
            this._indicatorsElement = this._element.querySelector(te),
            this._addEventListeners()
        }
        var e = o.prototype;
        return e.next = function() {
            this._isSliding || this._slide(W)
        }
        ,
        e.nextWhenVisible = function() {
            !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next()
        }
        ,
        e.prev = function() {
            this._isSliding || this._slide(R)
        }
        ,
        e.pause = function(e) {
            e || (this._isPaused = !0),
            this._element.querySelector(ee) && (we.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        e.cycle = function(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        e.to = function(e) {
            var t = this;
            this._activeElement = this._element.querySelector(X);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                    k(this._element).one(q.SLID, function() {
                        return t.to(e)
                    });
                else {
                    if (n === e)
                        return this.pause(),
                        void this.cycle();
                    var i = n < e ? W : R;
                    this._slide(i, this._items[e])
                }
        }
        ,
        e.dispose = function() {
            k(this._element).off(L),
            k.removeData(this._element, P),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        e._getConfig = function(e) {
            return e = l({}, M, e),
            we.typeCheckConfig(x, e, F),
            e
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            this._config.keyboard && k(this._element).on(q.KEYDOWN, function(e) {
                return t._keydown(e)
            }),
            "hover" === this._config.pause && (k(this._element).on(q.MOUSEENTER, function(e) {
                return t.pause(e)
            }).on(q.MOUSELEAVE, function(e) {
                return t.cycle(e)
            }),
            "ontouchstart"in document.documentElement && k(this._element).on(q.TOUCHEND, function() {
                t.pause(),
                t.touchTimeout && clearTimeout(t.touchTimeout),
                t.touchTimeout = setTimeout(function(e) {
                    return t.cycle(e)
                }, 500 + t._config.interval)
            }))
        }
        ,
        e._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                case 37:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    e.preventDefault(),
                    this.next()
                }
        }
        ,
        e._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll($)) : [],
            this._items.indexOf(e)
        }
        ,
        e._getItemByDirection = function(e, t) {
            var n = e === W
              , i = e === R
              , r = this._getItemIndex(t)
              , o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap)
                return t;
            var s = (r + (e === R ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        e._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e)
              , i = this._getItemIndex(this._element.querySelector(X))
              , r = k.Event(q.SLIDE, {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n
            });
            return k(this._element).trigger(r),
            r
        }
        ,
        e._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                k(t).removeClass(Q);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && k(n).addClass(Q)
            }
        }
        ,
        e._slide = function(e, t) {
            var n, i, r, o = this, s = this._element.querySelector(X), a = this._getItemIndex(s), l = t || s && this._getItemByDirection(e, s), c = this._getItemIndex(l), u = Boolean(this._interval);
            if (e === W ? (n = z,
            i = G,
            r = U) : (n = V,
            i = J,
            r = B),
            l && k(l).hasClass(Q))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                this._isSliding = !0,
                u && this.pause(),
                this._setActiveIndicatorElement(l);
                var f = k.Event(q.SLID, {
                    relatedTarget: l,
                    direction: r,
                    from: a,
                    to: c
                });
                if (k(this._element).hasClass(Y)) {
                    k(l).addClass(i),
                    we.reflow(l),
                    k(s).addClass(n),
                    k(l).addClass(n);
                    var h = we.getTransitionDurationFromElement(s);
                    k(s).one(we.TRANSITION_END, function() {
                        k(l).removeClass(n + " " + i).addClass(Q),
                        k(s).removeClass(Q + " " + i + " " + n),
                        o._isSliding = !1,
                        setTimeout(function() {
                            return k(o._element).trigger(f)
                        }, 0)
                    }).emulateTransitionEnd(h)
                } else
                    k(s).removeClass(Q),
                    k(l).addClass(Q),
                    this._isSliding = !1,
                    k(this._element).trigger(f);
                u && this.cycle()
            }
        }
        ,
        o._jQueryInterface = function(i) {
            return this.each(function() {
                var e = k(this).data(P)
                  , t = l({}, M, k(this).data());
                "object" == typeof i && (t = l({}, t, i));
                var n = "string" == typeof i ? i : t.slide;
                if (e || (e = new o(this,t),
                k(this).data(P, e)),
                "number" == typeof i)
                    e.to(i);
                else if ("string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                } else
                    t.interval && (e.pause(),
                    e.cycle())
            })
        }
        ,
        o._dataApiClickHandler = function(e) {
            var t = we.getSelectorFromElement(this);
            if (t) {
                var n = k(t)[0];
                if (n && k(n).hasClass(K)) {
                    var i = l({}, k(n).data(), k(this).data())
                      , r = this.getAttribute("data-slide-to");
                    r && (i.interval = !1),
                    o._jQueryInterface.call(k(n), i),
                    r && k(n).data(P).to(r),
                    e.preventDefault()
                }
            }
        }
        ,
        s(o, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return M
            }
        }]),
        o
    }(),
    k(document).on(q.CLICK_DATA_API, ne, re._dataApiClickHandler),
    k(window).on(q.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(ie)), t = 0, n = e.length; t < n; t++) {
            var i = k(e[t]);
            re._jQueryInterface.call(i, i.data())
        }
    }),
    k.fn[x] = re._jQueryInterface,
    k.fn[x].Constructor = re,
    k.fn[x].noConflict = function() {
        return k.fn[x] = H,
        re._jQueryInterface
    }
    ,
    re), De = (se = "collapse",
    le = "." + (ae = "bs.collapse"),
    ce = (oe = t).fn[se],
    ue = {
        toggle: !0,
        parent: ""
    },
    fe = {
        toggle: "boolean",
        parent: "(string|element)"
    },
    he = {
        SHOW: "show" + le,
        SHOWN: "shown" + le,
        HIDE: "hide" + le,
        HIDDEN: "hidden" + le,
        CLICK_DATA_API: "click" + le + ".data-api"
    },
    de = "show",
    pe = "collapse",
    me = "collapsing",
    ge = "collapsed",
    _e = "width",
    ve = "height",
    ye = ".show, .collapsing",
    Ee = '[data-toggle="collapse"]',
    be = function() {
        function a(t, e) {
            this._isTransitioning = !1,
            this._element = t,
            this._config = this._getConfig(e),
            this._triggerArray = oe.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(Ee)), i = 0, r = n.length; i < r; i++) {
                var o = n[i]
                  , s = we.getSelectorFromElement(o)
                  , a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                    return e === t
                });
                null !== s && 0 < a.length && (this._selector = s,
                this._triggerArray.push(o))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var e = a.prototype;
        return e.toggle = function() {
            oe(this._element).hasClass(de) ? this.hide() : this.show()
        }
        ,
        e.show = function() {
            var e, t, n = this;
            if (!this._isTransitioning && !oe(this._element).hasClass(de) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(ye)).filter(function(e) {
                return e.getAttribute("data-parent") === n._config.parent
            })).length && (e = null),
            !(e && (t = oe(e).not(this._selector).data(ae)) && t._isTransitioning))) {
                var i = oe.Event(he.SHOW);
                if (oe(this._element).trigger(i),
                !i.isDefaultPrevented()) {
                    e && (a._jQueryInterface.call(oe(e).not(this._selector), "hide"),
                    t || oe(e).data(ae, null));
                    var r = this._getDimension();
                    oe(this._element).removeClass(pe).addClass(me),
                    this._element.style[r] = 0,
                    this._triggerArray.length && oe(this._triggerArray).removeClass(ge).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var o = "scroll" + (r[0].toUpperCase() + r.slice(1))
                      , s = we.getTransitionDurationFromElement(this._element);
                    oe(this._element).one(we.TRANSITION_END, function() {
                        oe(n._element).removeClass(me).addClass(pe).addClass(de),
                        n._element.style[r] = "",
                        n.setTransitioning(!1),
                        oe(n._element).trigger(he.SHOWN)
                    }).emulateTransitionEnd(s),
                    this._element.style[r] = this._element[o] + "px"
                }
            }
        }
        ,
        e.hide = function() {
            var e = this;
            if (!this._isTransitioning && oe(this._element).hasClass(de)) {
                var t = oe.Event(he.HIDE);
                if (oe(this._element).trigger(t),
                !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    we.reflow(this._element),
                    oe(this._element).addClass(me).removeClass(pe).removeClass(de);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var r = 0; r < i; r++) {
                            var o = this._triggerArray[r]
                              , s = we.getSelectorFromElement(o);
                            if (null !== s)
                                oe([].slice.call(document.querySelectorAll(s))).hasClass(de) || oe(o).addClass(ge).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = we.getTransitionDurationFromElement(this._element);
                    oe(this._element).one(we.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                        oe(e._element).removeClass(me).addClass(pe).trigger(he.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }
        ,
        e.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        e.dispose = function() {
            oe.removeData(this._element, ae),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        e._getConfig = function(e) {
            return (e = l({}, ue, e)).toggle = Boolean(e.toggle),
            we.typeCheckConfig(se, e, fe),
            e
        }
        ,
        e._getDimension = function() {
            return oe(this._element).hasClass(_e) ? _e : ve
        }
        ,
        e._getParent = function() {
            var n = this
              , e = null;
            we.isElement(this._config.parent) ? (e = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , i = [].slice.call(e.querySelectorAll(t));
            return oe(i).each(function(e, t) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
            }),
            e
        }
        ,
        e._addAriaAndCollapsedClass = function(e, t) {
            if (e) {
                var n = oe(e).hasClass(de);
                t.length && oe(t).toggleClass(ge, !n).attr("aria-expanded", n)
            }
        }
        ,
        a._getTargetFromElement = function(e) {
            var t = we.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }
        ,
        a._jQueryInterface = function(i) {
            return this.each(function() {
                var e = oe(this)
                  , t = e.data(ae)
                  , n = l({}, ue, e.data(), "object" == typeof i && i ? i : {});
                if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                t || (t = new a(this,n),
                e.data(ae, t)),
                "string" == typeof i) {
                    if ("undefined" == typeof t[i])
                        throw new TypeError('No method named "' + i + '"');
                    t[i]()
                }
            })
        }
        ,
        s(a, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return ue
            }
        }]),
        a
    }(),
    oe(document).on(he.CLICK_DATA_API, Ee, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = oe(this)
          , t = we.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(t));
        oe(i).each(function() {
            var e = oe(this)
              , t = e.data(ae) ? "toggle" : n.data();
            be._jQueryInterface.call(e, t)
        })
    }),
    oe.fn[se] = be._jQueryInterface,
    oe.fn[se].Constructor = be,
    oe.fn[se].noConflict = function() {
        return oe.fn[se] = ce,
        be._jQueryInterface
    }
    ,
    be), Ae = "undefined" != typeof window && "undefined" != typeof document, Ie = ["Edge", "Trident", "Firefox"], Oe = 0, Ne = 0; Ne < Ie.length; Ne += 1)
        if (Ae && 0 <= navigator.userAgent.indexOf(Ie[Ne])) {
            Oe = 1;
            break
        }
    var ke = Ae && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, Oe))
        }
    }
    ;
    function xe(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function Pe(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function Le(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function je(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = Pe(e)
          , n = t.overflow
          , i = t.overflowX
          , r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : je(Le(e))
    }
    var He = Ae && !(!window.MSInputMethodContext || !document.documentMode)
      , Me = Ae && /MSIE 10/.test(navigator.userAgent);
    function Fe(e) {
        return 11 === e ? He : 10 === e ? Me : He || Me
    }
    function We(e) {
        if (!e)
            return document.documentElement;
        for (var t = Fe(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Pe(n, "position") ? We(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function Re(e) {
        return null !== e.parentNode ? Re(e.parentNode) : e
    }
    function Ue(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , r = n ? t : e
          , o = document.createRange();
        o.setStart(i, 0),
        o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r))
            return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && We(s.firstElementChild) !== s ? We(l) : l;
        var c = Re(e);
        return c.host ? Ue(c.host, t) : Ue(e, Re(t).host)
    }
    function Be(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
          , n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }
    function qe(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }
    function Ke(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Fe(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }
    function Qe() {
        var e = document.body
          , t = document.documentElement
          , n = Fe(10) && getComputedStyle(t);
        return {
            height: Ke("Height", e, t, n),
            width: Ke("Width", e, t, n)
        }
    }
    var Ye = function() {
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && i(e.prototype, t),
            n && i(e, n),
            e
        }
    }()
      , Ve = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , ze = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ;
    function Ge(e) {
        return ze({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function Je(e) {
        var t = {};
        try {
            if (Fe(10)) {
                t = e.getBoundingClientRect();
                var n = Be(e, "top")
                  , i = Be(e, "left");
                t.top += n,
                t.left += i,
                t.bottom += n,
                t.right += i
            } else
                t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , o = "HTML" === e.nodeName ? Qe() : {}
          , s = o.width || e.clientWidth || r.right - r.left
          , a = o.height || e.clientHeight || r.bottom - r.top
          , l = e.offsetWidth - s
          , c = e.offsetHeight - a;
        if (l || c) {
            var u = Pe(e);
            l -= qe(u, "x"),
            c -= qe(u, "y"),
            r.width -= l,
            r.height -= c
        }
        return Ge(r)
    }
    function Ze(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , i = Fe(10)
          , r = "HTML" === t.nodeName
          , o = Je(e)
          , s = Je(t)
          , a = je(e)
          , l = Pe(t)
          , c = parseFloat(l.borderTopWidth, 10)
          , u = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0),
        s.left = Math.max(s.left, 0));
        var f = Ge({
            top: o.top - s.top - c,
            left: o.left - s.left - u,
            width: o.width,
            height: o.height
        });
        if (f.marginTop = 0,
        f.marginLeft = 0,
        !i && r) {
            var h = parseFloat(l.marginTop, 10)
              , d = parseFloat(l.marginLeft, 10);
            f.top -= c - h,
            f.bottom -= c - h,
            f.left -= u - d,
            f.right -= u - d,
            f.marginTop = h,
            f.marginLeft = d
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
              , i = Be(t, "top")
              , r = Be(t, "left")
              , o = n ? -1 : 1;
            return e.top += i * o,
            e.bottom += i * o,
            e.left += r * o,
            e.right += r * o,
            e
        }(f, t)),
        f
    }
    function Xe(e) {
        if (!e || !e.parentElement || Fe())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === Pe(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function $e(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , o = {
            top: 0,
            left: 0
        }
          , s = r ? Xe(e) : Ue(e, t);
        if ("viewport" === i)
            o = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                  , n = e.ownerDocument.documentElement
                  , i = Ze(e, n)
                  , r = Math.max(n.clientWidth, window.innerWidth || 0)
                  , o = Math.max(n.clientHeight, window.innerHeight || 0)
                  , s = t ? 0 : Be(n)
                  , a = t ? 0 : Be(n, "left");
                return Ge({
                    top: s - i.top + i.marginTop,
                    left: a - i.left + i.marginLeft,
                    width: r,
                    height: o
                })
            }(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = je(Le(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = Ze(a, s, r);
            if ("HTML" !== a.nodeName || function e(t) {
                var n = t.nodeName;
                return "BODY" !== n && "HTML" !== n && ("fixed" === Pe(t, "position") || e(Le(t)))
            }(s))
                o = l;
            else {
                var c = Qe()
                  , u = c.height
                  , f = c.width;
                o.top += l.top - l.marginTop,
                o.bottom = u + l.top,
                o.left += l.left - l.marginLeft,
                o.right = f + l.left
            }
        }
        return o.left += n,
        o.top += n,
        o.right -= n,
        o.bottom -= n,
        o
    }
    function et(e, t, i, n, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var s = $e(i, n, o, r)
          , a = {
            top: {
                width: s.width,
                height: t.top - s.top
            },
            right: {
                width: s.right - t.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - t.bottom
            },
            left: {
                width: t.left - s.left,
                height: s.height
            }
        }
          , l = Object.keys(a).map(function(e) {
            return ze({
                key: e
            }, a[e], {
                area: (t = a[e],
                t.width * t.height)
            });
            var t
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , c = l.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= i.clientWidth && n >= i.clientHeight
        })
          , u = 0 < c.length ? c[0].key : l[0].key
          , f = e.split("-")[1];
        return u + (f ? "-" + f : "")
    }
    function tt(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return Ze(n, i ? Xe(t) : Ue(t, n), i)
    }
    function nt(e) {
        var t = getComputedStyle(e)
          , n = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
          , i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function it(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function rt(e, t, n) {
        n = n.split("-")[0];
        var i = nt(e)
          , r = {
            width: i.width,
            height: i.height
        }
          , o = -1 !== ["right", "left"].indexOf(n)
          , s = o ? "top" : "left"
          , a = o ? "left" : "top"
          , l = o ? "height" : "width"
          , c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2,
        r[a] = n === a ? t[a] - i[c] : t[it(a)],
        r
    }
    function ot(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function st(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === n
                });
            var i = ot(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && xe(t) && (n.offsets.popper = Ge(n.offsets.popper),
            n.offsets.reference = Ge(n.offsets.reference),
            n = t(n, e))
        }),
        n
    }
    function at(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }
    function lt(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i]
              , o = r ? "" + r + n : e;
            if ("undefined" != typeof document.body.style[o])
                return o
        }
        return null
    }
    function ct(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function ut(e, t, n, i) {
        n.updateBound = i,
        ct(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = je(e);
        return function e(t, n, i, r) {
            var o = "BODY" === t.nodeName
              , s = o ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, {
                passive: !0
            }),
            o || e(je(s.parentNode), n, i, r),
            r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = r,
        n.eventsEnabled = !0,
        n
    }
    function ft() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (e = this.reference,
        t = this.state,
        ct(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t))
    }
    function ht(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function dt(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ht(i[e]) && (t = "px"),
            n.style[e] = i[e] + t
        })
    }
    function pt(e, t, n) {
        var i = ot(e, function(e) {
            return e.name === t
        })
          , r = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var o = "`" + t + "`"
              , s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var mt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , gt = mt.slice(3);
    function _t(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = gt.indexOf(e)
          , i = gt.slice(n + 1).concat(gt.slice(0, n));
        return t ? i.reverse() : i
    }
    var vt = "flip"
      , yt = "clockwise"
      , Et = "counterclockwise";
    function bt(e, r, o, t) {
        var s = [0, 0]
          , a = -1 !== ["right", "left"].indexOf(t)
          , n = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , i = n.indexOf(ot(n, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width"
              , i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                i = !0,
                e) : i ? (e[e.length - 1] += t,
                i = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , o = +r[1]
                      , s = r[2];
                    if (!o)
                        return e;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                        case "%p":
                            a = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            a = i
                        }
                        return Ge(a)[t] / 100 * o
                    }
                    if ("vh" === s || "vw" === s)
                        return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(e, n, r, o)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                ht(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }),
        s
    }
    var wt = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets
                          , o = r.reference
                          , s = r.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , c = a ? "width" : "height"
                          , u = {
                            start: Ve({}, l, o[l]),
                            end: Ve({}, l, o[l] + o[c] - s[c])
                        };
                        e.offsets.popper = ze({}, s, u[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.offset
                      , i = e.placement
                      , r = e.offsets
                      , o = r.popper
                      , s = r.reference
                      , a = i.split("-")[0]
                      , l = void 0;
                    return l = ht(+n) ? [+n, 0] : bt(n, o, s, a),
                    "left" === a ? (o.top += l[0],
                    o.left -= l[1]) : "right" === a ? (o.top += l[0],
                    o.left += l[1]) : "top" === a ? (o.left += l[0],
                    o.top -= l[1]) : "bottom" === a && (o.left += l[0],
                    o.top += l[1]),
                    e.popper = o,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || We(e.instance.popper);
                    e.instance.reference === t && (t = We(t));
                    var n = lt("transform")
                      , r = e.instance.popper.style
                      , o = r.top
                      , s = r.left
                      , a = r[n];
                    r.top = "",
                    r.left = "",
                    r[n] = "";
                    var l = $e(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                    r.top = o,
                    r.left = s,
                    r[n] = a,
                    i.boundaries = l;
                    var c = i.priority
                      , u = e.offsets.popper
                      , f = {
                        primary: function(e) {
                            var t = u[e];
                            return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])),
                            Ve({}, e, t)
                        },
                        secondary: function(e) {
                            var t = "right" === e ? "left" : "top"
                              , n = u[t];
                            return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))),
                            Ve({}, t, n)
                        }
                    };
                    return c.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        u = ze({}, u, f[t](e))
                    }),
                    e.offsets.popper = u,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , r = e.placement.split("-")[0]
                      , o = Math.floor
                      , s = -1 !== ["top", "bottom"].indexOf(r)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]),
                    n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!pt(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i)))
                            return e
                    } else if (!e.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var r = e.placement.split("-")[0]
                      , o = e.offsets
                      , s = o.popper
                      , a = o.reference
                      , l = -1 !== ["left", "right"].indexOf(r)
                      , c = l ? "height" : "width"
                      , u = l ? "Top" : "Left"
                      , f = u.toLowerCase()
                      , h = l ? "left" : "top"
                      , d = l ? "bottom" : "right"
                      , p = nt(i)[c];
                    a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)),
                    a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]),
                    e.offsets.popper = Ge(e.offsets.popper);
                    var m = a[f] + a[c] / 2 - p / 2
                      , g = Pe(e.instance.popper)
                      , _ = parseFloat(g["margin" + u], 10)
                      , v = parseFloat(g["border" + u + "Width"], 10)
                      , y = m - e.offsets.popper[f] - _ - v;
                    return y = Math.max(Math.min(s[c] - p, y), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (Ve(n = {}, f, Math.round(y)),
                    Ve(n, h, ""),
                    n),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(p, m) {
                    if (at(p.instance.modifiers, "inner"))
                        return p;
                    if (p.flipped && p.placement === p.originalPlacement)
                        return p;
                    var g = $e(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed)
                      , _ = p.placement.split("-")[0]
                      , v = it(_)
                      , y = p.placement.split("-")[1] || ""
                      , E = [];
                    switch (m.behavior) {
                    case vt:
                        E = [_, v];
                        break;
                    case yt:
                        E = _t(_);
                        break;
                    case Et:
                        E = _t(_, !0);
                        break;
                    default:
                        E = m.behavior
                    }
                    return E.forEach(function(e, t) {
                        if (_ !== e || E.length === t + 1)
                            return p;
                        _ = p.placement.split("-")[0],
                        v = it(_);
                        var n, i = p.offsets.popper, r = p.offsets.reference, o = Math.floor, s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom), a = o(i.left) < o(g.left), l = o(i.right) > o(g.right), c = o(i.top) < o(g.top), u = o(i.bottom) > o(g.bottom), f = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && u, h = -1 !== ["top", "bottom"].indexOf(_), d = !!m.flipVariations && (h && "start" === y && a || h && "end" === y && l || !h && "start" === y && c || !h && "end" === y && u);
                        (s || f || d) && (p.flipped = !0,
                        (s || f) && (_ = E[t + 1]),
                        d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n),
                        p.placement = _ + (y ? "-" + y : ""),
                        p.offsets.popper = ze({}, p.offsets.popper, rt(p.instance.popper, p.offsets.reference, p.placement)),
                        p = st(p.instance.modifiers, p, "flip"))
                    }),
                    p
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , r = i.popper
                      , o = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0),
                    e.placement = it(t),
                    e.offsets.popper = Ge(r),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!pt(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = ot(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , r = e.offsets.popper
                      , o = ot(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== o ? o : t.gpuAcceleration
                      , a = Je(We(e.instance.popper))
                      , l = {
                        position: r.position
                    }
                      , c = {
                        left: Math.floor(r.left),
                        top: Math.round(r.top),
                        bottom: Math.round(r.bottom),
                        right: Math.floor(r.right)
                    }
                      , u = "bottom" === n ? "top" : "bottom"
                      , f = "right" === i ? "left" : "right"
                      , h = lt("transform")
                      , d = void 0
                      , p = void 0;
                    if (p = "bottom" === u ? -a.height + c.bottom : c.top,
                    d = "right" === f ? -a.width + c.right : c.left,
                    s && h)
                        l[h] = "translate3d(" + d + "px, " + p + "px, 0)",
                        l[u] = 0,
                        l[f] = 0,
                        l.willChange = "transform";
                    else {
                        var m = "bottom" === u ? -1 : 1
                          , g = "right" === f ? -1 : 1;
                        l[u] = p * m,
                        l[f] = d * g,
                        l.willChange = u + ", " + f
                    }
                    var _ = {
                        "x-placement": e.placement
                    };
                    return e.attributes = ze({}, _, e.attributes),
                    e.styles = ze({}, l, e.styles),
                    e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    var t, n;
                    return dt(e.instance.popper, e.styles),
                    t = e.instance.popper,
                    n = e.attributes,
                    Object.keys(n).forEach(function(e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }),
                    e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, r) {
                    var o = tt(r, t, e, n.positionFixed)
                      , s = et(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s),
                    dt(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , Ct = function() {
        function o(e, t) {
            var n = this
              , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, o),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(n.update)
            }
            ,
            this.update = ke(this.update.bind(this)),
            this.options = ze({}, o.Defaults, i),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = e && e.jquery ? e[0] : e,
            this.popper = t && t.jquery ? t[0] : t,
            this.options.modifiers = {},
            Object.keys(ze({}, o.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                n.options.modifiers[e] = ze({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return ze({
                    name: e
                }, n.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(e) {
                e.enabled && xe(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
            }),
            this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(),
            this.state.eventsEnabled = r
        }
        return Ye(o, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed),
                        e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                        e.originalPlacement = e.placement,
                        e.positionFixed = this.options.positionFixed,
                        e.offsets.popper = rt(this.popper, e.offsets.reference, e.placement),
                        e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                        e = st(this.modifiers, e),
                        this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                        this.options.onCreate(e))
                    }
                }
                .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                    this.popper.style.position = "",
                    this.popper.style.top = "",
                    this.popper.style.left = "",
                    this.popper.style.right = "",
                    this.popper.style.bottom = "",
                    this.popper.style.willChange = "",
                    this.popper.style[lt("transform")] = ""),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                }
                .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = ut(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return ft.call(this)
            }
        }]),
        o
    }();
    Ct.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    Ct.placements = mt,
    Ct.Defaults = wt;
    var Tt, St, Dt, At, It, Ot, Nt, kt, xt, Pt, Lt, jt, Ht, Mt, Ft, Wt, Rt, Ut, Bt, qt, Kt, Qt, Yt, Vt, zt, Gt, Jt, Zt, Xt, $t, en, tn, nn, rn, on, sn, an, ln, cn, un, fn, hn, dn, pn, mn, gn, _n, vn, yn, En, bn, wn, Cn, Tn, Sn, Dn, An, In, On, Nn, kn, xn, Pn, Ln, jn, Hn, Mn, Fn, Wn, Rn, Un, Bn, qn, Kn, Qn, Yn, Vn, zn, Gn, Jn, Zn, Xn, $n, ei, ti, ni, ii, ri, oi, si, ai, li, ci, ui, fi, hi, di, pi, mi, gi, _i, vi, yi, Ei, bi, wi, Ci, Ti, Si, Di, Ai, Ii, Oi, Ni, ki, xi, Pi, Li, ji, Hi, Mi, Fi, Wi, Ri, Ui, Bi = (St = "dropdown",
    At = "." + (Dt = "bs.dropdown"),
    It = ".data-api",
    Ot = (Tt = t).fn[St],
    Nt = new RegExp("38|40|27"),
    kt = {
        HIDE: "hide" + At,
        HIDDEN: "hidden" + At,
        SHOW: "show" + At,
        SHOWN: "shown" + At,
        CLICK: "click" + At,
        CLICK_DATA_API: "click" + At + It,
        KEYDOWN_DATA_API: "keydown" + At + It,
        KEYUP_DATA_API: "keyup" + At + It
    },
    xt = "disabled",
    Pt = "show",
    Lt = "dropup",
    jt = "dropright",
    Ht = "dropleft",
    Mt = "dropdown-menu-right",
    Ft = "position-static",
    Wt = '[data-toggle="dropdown"]',
    Rt = ".dropdown form",
    Ut = ".dropdown-menu",
    Bt = ".navbar-nav",
    qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    Kt = "top-start",
    Qt = "top-end",
    Yt = "bottom-start",
    Vt = "bottom-end",
    zt = "right-start",
    Gt = "left-start",
    Jt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    },
    Zt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    },
    Xt = function() {
        function c(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var e = c.prototype;
        return e.toggle = function() {
            if (!this._element.disabled && !Tt(this._element).hasClass(xt)) {
                var e = c._getParentFromElement(this._element)
                  , t = Tt(this._menu).hasClass(Pt);
                if (c._clearMenus(),
                !t) {
                    var n = {
                        relatedTarget: this._element
                    }
                      , i = Tt.Event(kt.SHOW, n);
                    if (Tt(e).trigger(i),
                    !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" == typeof Ct)
                                throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = e : we.isElement(this._config.reference) && (r = this._config.reference,
                            "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && Tt(e).addClass(Ft),
                            this._popper = new Ct(r,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === Tt(e).closest(Bt).length && Tt(document.body).children().on("mouseover", null, Tt.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        Tt(this._menu).toggleClass(Pt),
                        Tt(e).toggleClass(Pt).trigger(Tt.Event(kt.SHOWN, n))
                    }
                }
            }
        }
        ,
        e.dispose = function() {
            Tt.removeData(this._element, Dt),
            Tt(this._element).off(At),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        e.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            Tt(this._element).on(kt.CLICK, function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            })
        }
        ,
        e._getConfig = function(e) {
            return e = l({}, this.constructor.Default, Tt(this._element).data(), e),
            we.typeCheckConfig(St, e, this.constructor.DefaultType),
            e
        }
        ,
        e._getMenuElement = function() {
            if (!this._menu) {
                var e = c._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(Ut))
            }
            return this._menu
        }
        ,
        e._getPlacement = function() {
            var e = Tt(this._element.parentNode)
              , t = Yt;
            return e.hasClass(Lt) ? (t = Kt,
            Tt(this._menu).hasClass(Mt) && (t = Qt)) : e.hasClass(jt) ? t = zt : e.hasClass(Ht) ? t = Gt : Tt(this._menu).hasClass(Mt) && (t = Vt),
            t
        }
        ,
        e._detectNavbar = function() {
            return 0 < Tt(this._element).closest(".navbar").length
        }
        ,
        e._getPopperConfig = function() {
            var t = this
              , e = {};
            "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = l({}, e.offsets, t._config.offset(e.offsets) || {}),
                e
            }
            : e.offset = this._config.offset;
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: e,
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
            }),
            n
        }
        ,
        c._jQueryInterface = function(t) {
            return this.each(function() {
                var e = Tt(this).data(Dt);
                if (e || (e = new c(this,"object" == typeof t ? t : null),
                Tt(this).data(Dt, e)),
                "string" == typeof t) {
                    if ("undefined" == typeof e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }
        ,
        c._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var t = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = t.length; n < i; n++) {
                    var r = c._getParentFromElement(t[n])
                      , o = Tt(t[n]).data(Dt)
                      , s = {
                        relatedTarget: t[n]
                    };
                    if (e && "click" === e.type && (s.clickEvent = e),
                    o) {
                        var a = o._menu;
                        if (Tt(r).hasClass(Pt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && Tt.contains(r, e.target))) {
                            var l = Tt.Event(kt.HIDE, s);
                            Tt(r).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && Tt(document.body).children().off("mouseover", null, Tt.noop),
                            t[n].setAttribute("aria-expanded", "false"),
                            Tt(a).removeClass(Pt),
                            Tt(r).removeClass(Pt).trigger(Tt.Event(kt.HIDDEN, s)))
                        }
                    }
                }
        }
        ,
        c._getParentFromElement = function(e) {
            var t, n = we.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)),
            t || e.parentNode
        }
        ,
        c._dataApiKeydownHandler = function(e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || Tt(e.target).closest(Ut).length)) : Nt.test(e.which)) && (e.preventDefault(),
            e.stopPropagation(),
            !this.disabled && !Tt(this).hasClass(xt))) {
                var t = c._getParentFromElement(this)
                  , n = Tt(t).hasClass(Pt);
                if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                    var i = [].slice.call(t.querySelectorAll(qt));
                    if (0 !== i.length) {
                        var r = i.indexOf(e.target);
                        38 === e.which && 0 < r && r--,
                        40 === e.which && r < i.length - 1 && r++,
                        r < 0 && (r = 0),
                        i[r].focus()
                    }
                } else {
                    if (27 === e.which) {
                        var o = t.querySelector(Wt);
                        Tt(o).trigger("focus")
                    }
                    Tt(this).trigger("click")
                }
            }
        }
        ,
        s(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return Jt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Zt
            }
        }]),
        c
    }(),
    Tt(document).on(kt.KEYDOWN_DATA_API, Wt, Xt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, Ut, Xt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Xt._clearMenus).on(kt.CLICK_DATA_API, Wt, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        Xt._jQueryInterface.call(Tt(this), "toggle")
    }).on(kt.CLICK_DATA_API, Rt, function(e) {
        e.stopPropagation()
    }),
    Tt.fn[St] = Xt._jQueryInterface,
    Tt.fn[St].Constructor = Xt,
    Tt.fn[St].noConflict = function() {
        return Tt.fn[St] = Ot,
        Xt._jQueryInterface
    }
    ,
    Xt), qi = (en = "modal",
    nn = "." + (tn = "bs.modal"),
    rn = ($t = t).fn[en],
    on = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    },
    sn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    },
    an = {
        HIDE: "hide" + nn,
        HIDDEN: "hidden" + nn,
        SHOW: "show" + nn,
        SHOWN: "shown" + nn,
        FOCUSIN: "focusin" + nn,
        RESIZE: "resize" + nn,
        CLICK_DISMISS: "click.dismiss" + nn,
        KEYDOWN_DISMISS: "keydown.dismiss" + nn,
        MOUSEUP_DISMISS: "mouseup.dismiss" + nn,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + nn,
        CLICK_DATA_API: "click" + nn + ".data-api"
    },
    ln = "modal-scrollbar-measure",
    cn = "modal-backdrop",
    un = "modal-open",
    fn = "fade",
    hn = "show",
    dn = ".modal-dialog",
    pn = '[data-toggle="modal"]',
    mn = '[data-dismiss="modal"]',
    gn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    _n = ".sticky-top",
    vn = function() {
        function r(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = e.querySelector(dn),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._scrollbarWidth = 0
        }
        var e = r.prototype;
        return e.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        e.show = function(e) {
            var t = this;
            if (!this._isTransitioning && !this._isShown) {
                $t(this._element).hasClass(fn) && (this._isTransitioning = !0);
                var n = $t.Event(an.SHOW, {
                    relatedTarget: e
                });
                $t(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                $t(document.body).addClass(un),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                $t(this._element).on(an.CLICK_DISMISS, mn, function(e) {
                    return t.hide(e)
                }),
                $t(this._dialog).on(an.MOUSEDOWN_DISMISS, function() {
                    $t(t._element).one(an.MOUSEUP_DISMISS, function(e) {
                        $t(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }
        ,
        e.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(),
            !this._isTransitioning && this._isShown) {
                var n = $t.Event(an.HIDE);
                if ($t(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = $t(this._element).hasClass(fn);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    $t(document).off(an.FOCUSIN),
                    $t(this._element).removeClass(hn),
                    $t(this._element).off(an.CLICK_DISMISS),
                    $t(this._dialog).off(an.MOUSEDOWN_DISMISS),
                    i) {
                        var r = we.getTransitionDurationFromElement(this._element);
                        $t(this._element).one(we.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(r)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        e.dispose = function() {
            $t.removeData(this._element, tn),
            $t(window, document, this._element, this._backdrop).off(nn),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._scrollbarWidth = null
        }
        ,
        e.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        e._getConfig = function(e) {
            return e = l({}, on, e),
            we.typeCheckConfig(en, e, sn),
            e
        }
        ,
        e._showElement = function(e) {
            var t = this
              , n = $t(this._element).hasClass(fn);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.scrollTop = 0,
            n && we.reflow(this._element),
            $t(this._element).addClass(hn),
            this._config.focus && this._enforceFocus();
            var i = $t.Event(an.SHOWN, {
                relatedTarget: e
            })
              , r = function() {
                t._config.focus && t._element.focus(),
                t._isTransitioning = !1,
                $t(t._element).trigger(i)
            };
            if (n) {
                var o = we.getTransitionDurationFromElement(this._element);
                $t(this._dialog).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
            } else
                r()
        }
        ,
        e._enforceFocus = function() {
            var t = this;
            $t(document).off(an.FOCUSIN).on(an.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === $t(t._element).has(e.target).length && t._element.focus()
            })
        }
        ,
        e._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? $t(this._element).on(an.KEYDOWN_DISMISS, function(e) {
                27 === e.which && (e.preventDefault(),
                t.hide())
            }) : this._isShown || $t(this._element).off(an.KEYDOWN_DISMISS)
        }
        ,
        e._setResizeEvent = function() {
            var t = this;
            this._isShown ? $t(window).on(an.RESIZE, function(e) {
                return t.handleUpdate(e)
            }) : $t(window).off(an.RESIZE)
        }
        ,
        e._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                $t(document.body).removeClass(un),
                e._resetAdjustments(),
                e._resetScrollbar(),
                $t(e._element).trigger(an.HIDDEN)
            })
        }
        ,
        e._removeBackdrop = function() {
            this._backdrop && ($t(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        e._showBackdrop = function(e) {
            var t = this
              , n = $t(this._element).hasClass(fn) ? fn : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = cn,
                n && this._backdrop.classList.add(n),
                $t(this._backdrop).appendTo(document.body),
                $t(this._element).on(an.CLICK_DISMISS, function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                }),
                n && we.reflow(this._backdrop),
                $t(this._backdrop).addClass(hn),
                !e)
                    return;
                if (!n)
                    return void e();
                var i = we.getTransitionDurationFromElement(this._backdrop);
                $t(this._backdrop).one(we.TRANSITION_END, e).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                $t(this._backdrop).removeClass(hn);
                var r = function() {
                    t._removeBackdrop(),
                    e && e()
                };
                if ($t(this._element).hasClass(fn)) {
                    var o = we.getTransitionDurationFromElement(this._backdrop);
                    $t(this._backdrop).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
                } else
                    r()
            } else
                e && e()
        }
        ,
        e._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        e._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        e._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        e._setScrollbar = function() {
            var r = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(gn))
                  , t = [].slice.call(document.querySelectorAll(_n));
                $t(e).each(function(e, t) {
                    var n = t.style.paddingRight
                      , i = $t(t).css("padding-right");
                    $t(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                }),
                $t(t).each(function(e, t) {
                    var n = t.style.marginRight
                      , i = $t(t).css("margin-right");
                    $t(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight
                  , i = $t(document.body).css("padding-right");
                $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
        }
        ,
        e._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(gn));
            $t(e).each(function(e, t) {
                var n = $t(t).data("padding-right");
                $t(t).removeData("padding-right"),
                t.style.paddingRight = n || ""
            });
            var t = [].slice.call(document.querySelectorAll("" + _n));
            $t(t).each(function(e, t) {
                var n = $t(t).data("margin-right");
                "undefined" != typeof n && $t(t).css("margin-right", n).removeData("margin-right")
            });
            var n = $t(document.body).data("padding-right");
            $t(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        e._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = ln,
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        r._jQueryInterface = function(n, i) {
            return this.each(function() {
                var e = $t(this).data(tn)
                  , t = l({}, on, $t(this).data(), "object" == typeof n && n ? n : {});
                if (e || (e = new r(this,t),
                $t(this).data(tn, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n](i)
                } else
                    t.show && e.show(i)
            })
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return on
            }
        }]),
        r
    }(),
    $t(document).on(an.CLICK_DATA_API, pn, function(e) {
        var t, n = this, i = we.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = $t(t).data(tn) ? "toggle" : l({}, $t(t).data(), $t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var o = $t(t).one(an.SHOW, function(e) {
            e.isDefaultPrevented() || o.one(an.HIDDEN, function() {
                $t(n).is(":visible") && n.focus()
            })
        });
        vn._jQueryInterface.call($t(t), r, this)
    }),
    $t.fn[en] = vn._jQueryInterface,
    $t.fn[en].Constructor = vn,
    $t.fn[en].noConflict = function() {
        return $t.fn[en] = rn,
        vn._jQueryInterface
    }
    ,
    vn), Ki = (En = "tooltip",
    wn = "." + (bn = "bs.tooltip"),
    Cn = (yn = t).fn[En],
    Tn = "bs-tooltip",
    Sn = new RegExp("(^|\\s)" + Tn + "\\S+","g"),
    In = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(An = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }),
        selector: !(Dn = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
    },
    Nn = "out",
    kn = {
        HIDE: "hide" + wn,
        HIDDEN: "hidden" + wn,
        SHOW: (On = "show") + wn,
        SHOWN: "shown" + wn,
        INSERTED: "inserted" + wn,
        CLICK: "click" + wn,
        FOCUSIN: "focusin" + wn,
        FOCUSOUT: "focusout" + wn,
        MOUSEENTER: "mouseenter" + wn,
        MOUSELEAVE: "mouseleave" + wn
    },
    xn = "fade",
    Pn = "show",
    Ln = ".tooltip-inner",
    jn = ".arrow",
    Hn = "hover",
    Mn = "focus",
    Fn = "click",
    Wn = "manual",
    Rn = function() {
        function i(e, t) {
            if ("undefined" == typeof Ct)
                throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        var e = i.prototype;
        return e.enable = function() {
            this._isEnabled = !0
        }
        ,
        e.disable = function() {
            this._isEnabled = !1
        }
        ,
        e.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        e.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY
                      , n = yn(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    yn(e.currentTarget).data(t, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (yn(this.getTipElement()).hasClass(Pn))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        e.dispose = function() {
            clearTimeout(this._timeout),
            yn.removeData(this.element, this.constructor.DATA_KEY),
            yn(this.element).off(this.constructor.EVENT_KEY),
            yn(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && yn(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        e.show = function() {
            var t = this;
            if ("none" === yn(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var e = yn.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                yn(this.element).trigger(e);
                var n = yn.contains(this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !n)
                    return;
                var i = this.getTipElement()
                  , r = we.getUID(this.constructor.NAME);
                i.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && yn(i).addClass(xn);
                var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement
                  , s = this._getAttachment(o);
                this.addAttachmentClass(s);
                var a = !1 === this.config.container ? document.body : yn(document).find(this.config.container);
                yn(i).data(this.constructor.DATA_KEY, this),
                yn.contains(this.element.ownerDocument.documentElement, this.tip) || yn(i).appendTo(a),
                yn(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new Ct(this.element,i,{
                    placement: s,
                    modifiers: {
                        offset: {
                            offset: this.config.offset
                        },
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: jn
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        t._handlePopperPlacementChange(e)
                    }
                }),
                yn(i).addClass(Pn),
                "ontouchstart"in document.documentElement && yn(document.body).children().on("mouseover", null, yn.noop);
                var l = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null,
                    yn(t.element).trigger(t.constructor.Event.SHOWN),
                    e === Nn && t._leave(null, t)
                };
                if (yn(this.tip).hasClass(xn)) {
                    var c = we.getTransitionDurationFromElement(this.tip);
                    yn(this.tip).one(we.TRANSITION_END, l).emulateTransitionEnd(c)
                } else
                    l()
            }
        }
        ,
        e.hide = function(e) {
            var t = this
              , n = this.getTipElement()
              , i = yn.Event(this.constructor.Event.HIDE)
              , r = function() {
                t._hoverState !== On && n.parentNode && n.parentNode.removeChild(n),
                t._cleanTipClass(),
                t.element.removeAttribute("aria-describedby"),
                yn(t.element).trigger(t.constructor.Event.HIDDEN),
                null !== t._popper && t._popper.destroy(),
                e && e()
            };
            if (yn(this.element).trigger(i),
            !i.isDefaultPrevented()) {
                if (yn(n).removeClass(Pn),
                "ontouchstart"in document.documentElement && yn(document.body).children().off("mouseover", null, yn.noop),
                this._activeTrigger[Fn] = !1,
                this._activeTrigger[Mn] = !1,
                this._activeTrigger[Hn] = !1,
                yn(this.tip).hasClass(xn)) {
                    var o = we.getTransitionDurationFromElement(n);
                    yn(n).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
                } else
                    r();
                this._hoverState = ""
            }
        }
        ,
        e.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        e.addAttachmentClass = function(e) {
            yn(this.getTipElement()).addClass(Tn + "-" + e)
        }
        ,
        e.getTipElement = function() {
            return this.tip = this.tip || yn(this.config.template)[0],
            this.tip
        }
        ,
        e.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(yn(e.querySelectorAll(Ln)), this.getTitle()),
            yn(e).removeClass(xn + " " + Pn)
        }
        ,
        e.setElementContent = function(e, t) {
            var n = this.config.html;
            "object" == typeof t && (t.nodeType || t.jquery) ? n ? yn(t).parent().is(e) || e.empty().append(t) : e.text(yn(t).text()) : e[n ? "html" : "text"](t)
        }
        ,
        e.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            e
        }
        ,
        e._getAttachment = function(e) {
            return An[e.toUpperCase()]
        }
        ,
        e._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(e) {
                if ("click" === e)
                    yn(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                        return i.toggle(e)
                    });
                else if (e !== Wn) {
                    var t = e === Hn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                      , n = e === Hn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    yn(i.element).on(t, i.config.selector, function(e) {
                        return i._enter(e)
                    }).on(n, i.config.selector, function(e) {
                        return i._leave(e)
                    })
                }
                yn(i.element).closest(".modal").on("hide.bs.modal", function() {
                    return i.hide()
                })
            }),
            this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        e._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        e._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            yn(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusin" === e.type ? Mn : Hn] = !0),
            yn(t.getTipElement()).hasClass(Pn) || t._hoverState === On ? t._hoverState = On : (clearTimeout(t._timeout),
            t._hoverState = On,
            t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === On && t.show()
            }, t.config.delay.show) : t.show())
        }
        ,
        e._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            yn(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusout" === e.type ? Mn : Hn] = !1),
            t._isWithActiveTrigger() || (clearTimeout(t._timeout),
            t._hoverState = Nn,
            t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                t._hoverState === Nn && t.hide()
            }, t.config.delay.hide) : t.hide())
        }
        ,
        e._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        e._getConfig = function(e) {
            return "number" == typeof (e = l({}, this.constructor.Default, yn(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            we.typeCheckConfig(En, e, this.constructor.DefaultType),
            e
        }
        ,
        e._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }
        ,
        e._cleanTipClass = function() {
            var e = yn(this.getTipElement())
              , t = e.attr("class").match(Sn);
            null !== t && t.length && e.removeClass(t.join(""))
        }
        ,
        e._handlePopperPlacementChange = function(e) {
            var t = e.instance;
            this.tip = t.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement))
        }
        ,
        e._fixTransition = function() {
            var e = this.getTipElement()
              , t = this.config.animation;
            null === e.getAttribute("x-placement") && (yn(e).removeClass(xn),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = t)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = yn(this).data(bn)
                  , t = "object" == typeof n && n;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this,t),
                yn(this).data(bn, e)),
                "string" == typeof n)) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return In
            }
        }, {
            key: "NAME",
            get: function() {
                return En
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return bn
            }
        }, {
            key: "Event",
            get: function() {
                return kn
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return wn
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Dn
            }
        }]),
        i
    }(),
    yn.fn[En] = Rn._jQueryInterface,
    yn.fn[En].Constructor = Rn,
    yn.fn[En].noConflict = function() {
        return yn.fn[En] = Cn,
        Rn._jQueryInterface
    }
    ,
    Rn), Qi = (Bn = "popover",
    Kn = "." + (qn = "bs.popover"),
    Qn = (Un = t).fn[Bn],
    Yn = "bs-popover",
    Vn = new RegExp("(^|\\s)" + Yn + "\\S+","g"),
    zn = l({}, Ki.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    Gn = l({}, Ki.DefaultType, {
        content: "(string|element|function)"
    }),
    Jn = "fade",
    Xn = ".popover-header",
    $n = ".popover-body",
    ei = {
        HIDE: "hide" + Kn,
        HIDDEN: "hidden" + Kn,
        SHOW: (Zn = "show") + Kn,
        SHOWN: "shown" + Kn,
        INSERTED: "inserted" + Kn,
        CLICK: "click" + Kn,
        FOCUSIN: "focusin" + Kn,
        FOCUSOUT: "focusout" + Kn,
        MOUSEENTER: "mouseenter" + Kn,
        MOUSELEAVE: "mouseleave" + Kn
    },
    ti = function(e) {
        var t, n;
        function i() {
            return e.apply(this, arguments) || this
        }
        n = e,
        (t = i).prototype = Object.create(n.prototype),
        (t.prototype.constructor = t).__proto__ = n;
        var r = i.prototype;
        return r.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        r.addAttachmentClass = function(e) {
            Un(this.getTipElement()).addClass(Yn + "-" + e)
        }
        ,
        r.getTipElement = function() {
            return this.tip = this.tip || Un(this.config.template)[0],
            this.tip
        }
        ,
        r.setContent = function() {
            var e = Un(this.getTipElement());
            this.setElementContent(e.find(Xn), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find($n), t),
            e.removeClass(Jn + " " + Zn)
        }
        ,
        r._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        r._cleanTipClass = function() {
            var e = Un(this.getTipElement())
              , t = e.attr("class").match(Vn);
            null !== t && 0 < t.length && e.removeClass(t.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = Un(this).data(qn)
                  , t = "object" == typeof n ? n : null;
                if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this,t),
                Un(this).data(qn, e)),
                "string" == typeof n)) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return zn
            }
        }, {
            key: "NAME",
            get: function() {
                return Bn
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return qn
            }
        }, {
            key: "Event",
            get: function() {
                return ei
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Kn
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Gn
            }
        }]),
        i
    }(Ki),
    Un.fn[Bn] = ti._jQueryInterface,
    Un.fn[Bn].Constructor = ti,
    Un.fn[Bn].noConflict = function() {
        return Un.fn[Bn] = Qn,
        ti._jQueryInterface
    }
    ,
    ti), Yi = (ii = "scrollspy",
    oi = "." + (ri = "bs.scrollspy"),
    si = (ni = t).fn[ii],
    ai = {
        offset: 10,
        method: "auto",
        target: ""
    },
    li = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    },
    ci = {
        ACTIVATE: "activate" + oi,
        SCROLL: "scroll" + oi,
        LOAD_DATA_API: "load" + oi + ".data-api"
    },
    ui = "dropdown-item",
    fi = "active",
    hi = '[data-spy="scroll"]',
    di = ".active",
    pi = ".nav, .list-group",
    mi = ".nav-link",
    gi = ".nav-item",
    _i = ".list-group-item",
    vi = ".dropdown",
    yi = ".dropdown-item",
    Ei = ".dropdown-toggle",
    bi = "offset",
    wi = "position",
    Ci = function() {
        function n(e, t) {
            var n = this;
            this._element = e,
            this._scrollElement = "BODY" === e.tagName ? window : e,
            this._config = this._getConfig(t),
            this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            ni(this._scrollElement).on(ci.SCROLL, function(e) {
                return n._process(e)
            }),
            this.refresh(),
            this._process()
        }
        var e = n.prototype;
        return e.refresh = function() {
            var t = this
              , e = this._scrollElement === this._scrollElement.window ? bi : wi
              , r = "auto" === this._config.method ? e : this._config.method
              , o = r === wi ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var t, n = we.getSelectorFromElement(e);
                if (n && (t = document.querySelector(n)),
                t) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height)
                        return [ni(t)[r]().top + o, n]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(e) {
                t._offsets.push(e[0]),
                t._targets.push(e[1])
            })
        }
        ,
        e.dispose = function() {
            ni.removeData(this._element, ri),
            ni(this._scrollElement).off(oi),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        e._getConfig = function(e) {
            if ("string" != typeof (e = l({}, ai, "object" == typeof e && e ? e : {})).target) {
                var t = ni(e.target).attr("id");
                t || (t = we.getUID(ii),
                ni(e.target).attr("id", t)),
                e.target = "#" + t
            }
            return we.typeCheckConfig(ii, e, li),
            e
        }
        ,
        e._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        e._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        e._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        e._process = function() {
            var e = this._getScrollTop() + this._config.offset
              , t = this._getScrollHeight()
              , n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(),
            n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var r = this._offsets.length; r--; ) {
                    this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }
        }
        ,
        e._activate = function(t) {
            this._activeTarget = t,
            this._clear();
            var e = this._selector.split(",");
            e = e.map(function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            });
            var n = ni([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass(ui) ? (n.closest(vi).find(Ei).addClass(fi),
            n.addClass(fi)) : (n.addClass(fi),
            n.parents(pi).prev(mi + ", " + _i).addClass(fi),
            n.parents(pi).prev(gi).children(mi).addClass(fi)),
            ni(this._scrollElement).trigger(ci.ACTIVATE, {
                relatedTarget: t
            })
        }
        ,
        e._clear = function() {
            var e = [].slice.call(document.querySelectorAll(this._selector));
            ni(e).filter(di).removeClass(fi)
        }
        ,
        n._jQueryInterface = function(t) {
            return this.each(function() {
                var e = ni(this).data(ri);
                if (e || (e = new n(this,"object" == typeof t && t),
                ni(this).data(ri, e)),
                "string" == typeof t) {
                    if ("undefined" == typeof e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return ai
            }
        }]),
        n
    }(),
    ni(window).on(ci.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(hi)), t = e.length; t--; ) {
            var n = ni(e[t]);
            Ci._jQueryInterface.call(n, n.data())
        }
    }),
    ni.fn[ii] = Ci._jQueryInterface,
    ni.fn[ii].Constructor = Ci,
    ni.fn[ii].noConflict = function() {
        return ni.fn[ii] = si,
        Ci._jQueryInterface
    }
    ,
    Ci), Vi = (Di = "." + (Si = "bs.tab"),
    Ai = (Ti = t).fn.tab,
    Ii = {
        HIDE: "hide" + Di,
        HIDDEN: "hidden" + Di,
        SHOW: "show" + Di,
        SHOWN: "shown" + Di,
        CLICK_DATA_API: "click" + Di + ".data-api"
    },
    Oi = "dropdown-menu",
    Ni = "active",
    ki = "disabled",
    xi = "fade",
    Pi = "show",
    Li = ".dropdown",
    ji = ".nav, .list-group",
    Hi = ".active",
    Mi = "> li > .active",
    Fi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    Wi = ".dropdown-toggle",
    Ri = "> .dropdown-menu .active",
    Ui = function() {
        function i(e) {
            this._element = e
        }
        var e = i.prototype;
        return e.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Ti(this._element).hasClass(Ni) || Ti(this._element).hasClass(ki))) {
                var e, i, t = Ti(this._element).closest(ji)[0], r = we.getSelectorFromElement(this._element);
                if (t) {
                    var o = "UL" === t.nodeName ? Mi : Hi;
                    i = (i = Ti.makeArray(Ti(t).find(o)))[i.length - 1]
                }
                var s = Ti.Event(Ii.HIDE, {
                    relatedTarget: this._element
                })
                  , a = Ti.Event(Ii.SHOW, {
                    relatedTarget: i
                });
                if (i && Ti(i).trigger(s),
                Ti(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    r && (e = document.querySelector(r)),
                    this._activate(this._element, t);
                    var l = function() {
                        var e = Ti.Event(Ii.HIDDEN, {
                            relatedTarget: n._element
                        })
                          , t = Ti.Event(Ii.SHOWN, {
                            relatedTarget: i
                        });
                        Ti(i).trigger(e),
                        Ti(n._element).trigger(t)
                    };
                    e ? this._activate(e, e.parentNode, l) : l()
                }
            }
        }
        ,
        e.dispose = function() {
            Ti.removeData(this._element, Si),
            this._element = null
        }
        ,
        e._activate = function(e, t, n) {
            var i = this
              , r = ("UL" === t.nodeName ? Ti(t).find(Mi) : Ti(t).children(Hi))[0]
              , o = n && r && Ti(r).hasClass(xi)
              , s = function() {
                return i._transitionComplete(e, r, n)
            };
            if (r && o) {
                var a = we.getTransitionDurationFromElement(r);
                Ti(r).one(we.TRANSITION_END, s).emulateTransitionEnd(a)
            } else
                s()
        }
        ,
        e._transitionComplete = function(e, t, n) {
            if (t) {
                Ti(t).removeClass(Pi + " " + Ni);
                var i = Ti(t.parentNode).find(Ri)[0];
                i && Ti(i).removeClass(Ni),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            if (Ti(e).addClass(Ni),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            we.reflow(e),
            Ti(e).addClass(Pi),
            e.parentNode && Ti(e.parentNode).hasClass(Oi)) {
                var r = Ti(e).closest(Li)[0];
                if (r) {
                    var o = [].slice.call(r.querySelectorAll(Wi));
                    Ti(o).addClass(Ni)
                }
                e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = Ti(this)
                  , t = e.data(Si);
                if (t || (t = new i(this),
                e.data(Si, t)),
                "string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }]),
        i
    }(),
    Ti(document).on(Ii.CLICK_DATA_API, Fi, function(e) {
        e.preventDefault(),
        Ui._jQueryInterface.call(Ti(this), "show")
    }),
    Ti.fn.tab = Ui._jQueryInterface,
    Ti.fn.tab.Constructor = Ui,
    Ti.fn.tab.noConflict = function() {
        return Ti.fn.tab = Ai,
        Ui._jQueryInterface
    }
    ,
    Ui);
    !function(e) {
        if ("undefined" == typeof e)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t),
    e.Util = we,
    e.Alert = Ce,
    e.Button = Te,
    e.Carousel = Se,
    e.Collapse = De,
    e.Dropdown = Bi,
    e.Modal = qi,
    e.Popover = Qi,
    e.Scrollspy = Yi,
    e.Tab = Vi,
    e.Tooltip = Ki,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=bootstrap.bundle.min.js.map
document.addEventListener('DOMContentLoaded', function() {
    $('.loader-container').fadeOut("slow");
}, false);

!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(e) {
    !function(t) {
        var o = "function" == typeof define && define.amd
          , a = "undefined" != typeof module && module.exports
          , n = "https:" == document.location.protocol ? "https:" : "http:"
          , i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))),
        t()
    }(function() {
        var t, o = "mCustomScrollbar", a = "mCS", n = ".mCustomScrollbar", i = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            documentTouchScroll: !0,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        }, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1, d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], u = {
            init: function(t) {
                var t = e.extend(!0, {}, i, t)
                  , o = f.call(this);
                if (t.live) {
                    var s = t.liveSelector || this.selector || n
                      , c = e(s);
                    if ("off" === t.live)
                        return void m(s);
                    l[s] = setTimeout(function() {
                        c.mCustomScrollbar(t),
                        "once" === t.live && c.length && m(s)
                    }, 500)
                } else
                    m(s);
                return t.setWidth = t.set_width ? t.set_width : t.setWidth,
                t.setHeight = t.set_height ? t.set_height : t.setHeight,
                t.axis = t.horizontalScroll ? "x" : p(t.axis),
                t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia,
                "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }),
                t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount,
                t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta,
                t.scrollButtons.scrollType = g(t.scrollButtons.scrollType),
                h(t),
                e(o).each(function() {
                    var o = e(this);
                    if (!o.data(a)) {
                        o.data(a, {
                            idx: ++r,
                            opt: t,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: o.css("direction"),
                            cbOffsets: null,
                            trigger: null,
                            poll: {
                                size: {
                                    o: 0,
                                    n: 0
                                },
                                img: {
                                    o: 0,
                                    n: 0
                                },
                                change: {
                                    o: 0,
                                    n: 0
                                }
                            }
                        });
                        var n = o.data(a)
                          , i = n.opt
                          , l = o.data("mcs-axis")
                          , s = o.data("mcs-scrollbar-position")
                          , c = o.data("mcs-theme");
                        l && (i.axis = l),
                        s && (i.scrollbarPosition = s),
                        c && (i.theme = c,
                        h(i)),
                        v.call(this),
                        n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this),
                        e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]),
                        u.update.call(null, o)
                    }
                })
            },
            update: function(t, o) {
                var n = t || f.call(this);
                return e(n).each(function() {
                    var t = e(this);
                    if (t.data(a)) {
                        var n = t.data(a)
                          , i = n.opt
                          , r = e("#mCSB_" + n.idx + "_container")
                          , l = e("#mCSB_" + n.idx)
                          , s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                        if (!r.length)
                            return;
                        n.tweenRunning && Q(t),
                        o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this),
                        t.hasClass(d[3]) && t.removeClass(d[3]),
                        t.hasClass(d[4]) && t.removeClass(d[4]),
                        l.css("max-height", "none"),
                        l.height() !== t.height() && l.css("max-height", t.height()),
                        _.call(this),
                        "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)),
                        n.overflowed = y.call(this),
                        M.call(this),
                        i.autoDraggerLength && S.call(this),
                        b.call(this),
                        T.call(this);
                        var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
                        "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.y = null) : (B.call(this),
                        "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }),
                        n.contentReset.x = null) : (B.call(this),
                        "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }))),
                        o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)),
                        N.call(this)
                    }
                })
            },
            scrollTo: function(t, o) {
                if ("undefined" != typeof t && null != t) {
                    var n = f.call(this);
                    return e(n).each(function() {
                        var n = e(this);
                        if (n.data(a)) {
                            var i = n.data(a)
                              , r = i.opt
                              , l = {
                                trigger: "external",
                                scrollInertia: r.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: !1,
                                timeout: 60,
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }
                              , s = e.extend(!0, {}, l, o)
                              , c = Y.call(this, t)
                              , d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                            c[0] = X.call(this, c[0], "y"),
                            c[1] = X.call(this, c[1], "x"),
                            s.moveDragger && (c[0] *= i.scrollRatio.y,
                            c[1] *= i.scrollRatio.x),
                            s.dur = ne() ? 0 : d,
                            setTimeout(function() {
                                null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y",
                                s.overwrite = "all",
                                G(n, c[0].toString(), s)),
                                null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x",
                                s.overwrite = "none",
                                G(n, c[1].toString(), s))
                            }, s.timeout)
                        }
                    })
                }
            },
            stop: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var t = e(this);
                    t.data(a) && Q(t)
                })
            },
            disable: function(t) {
                var o = f.call(this);
                return e(o).each(function() {
                    var o = e(this);
                    if (o.data(a)) {
                        o.data(a);
                        N.call(this, "remove"),
                        k.call(this),
                        t && B.call(this),
                        M.call(this, !0),
                        o.addClass(d[3])
                    }
                })
            },
            destroy: function() {
                var t = f.call(this);
                return e(t).each(function() {
                    var n = e(this);
                    if (n.data(a)) {
                        var i = n.data(a)
                          , r = i.opt
                          , l = e("#mCSB_" + i.idx)
                          , s = e("#mCSB_" + i.idx + "_container")
                          , c = e(".mCSB_" + i.idx + "_scrollbar");
                        r.live && m(r.liveSelector || e(t).selector),
                        N.call(this, "remove"),
                        k.call(this),
                        B.call(this),
                        n.removeData(a),
                        $(this, "mcs"),
                        c.remove(),
                        s.find("img." + d[2]).removeClass(d[2]),
                        l.replaceWith(s.contents()),
                        n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
                    }
                })
            }
        }, f = function() {
            return "object" != typeof e(this) || e(this).length < 1 ? n : this
        }, h = function(t) {
            var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]
              , a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]
              , n = ["minimal", "minimal-dark"]
              , i = ["minimal", "minimal-dark"]
              , r = ["minimal", "minimal-dark"];
            t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength,
            t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar,
            t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable,
            t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar,
            t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
        }, m = function(e) {
            l[e] && (clearTimeout(l[e]),
            $(l, e))
        }, p = function(e) {
            return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
        }, g = function(e) {
            return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
        }, v = function() {
            var t = e(this)
              , n = t.data(a)
              , i = n.opt
              , r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : ""
              , l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"]
              , s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical"
              , c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0]
              , u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
              , f = i.autoHideScrollbar ? " " + d[6] : ""
              , h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
            i.setWidth && t.css("width", i.setWidth),
            i.setHeight && t.css("height", i.setHeight),
            i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft,
            t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>");
            var m = e("#mCSB_" + n.idx)
              , p = e("#mCSB_" + n.idx + "_container");
            "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)),
            "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"),
            t.css("overflow", "visible"),
            m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c),
            p.wrap(u)),
            w.call(this);
            var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
            g[0].css("min-height", g[0].height()),
            g[1].css("min-width", g[1].width())
        }, x = function(t) {
            var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                return e(this).outerWidth(!0)
            }).get())]
              , a = t.parent().width();
            return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%"
        }, _ = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e("#mCSB_" + o.idx + "_container");
            if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
                i.css({
                    width: "auto",
                    "min-width": 0,
                    "overflow-x": "scroll"
                });
                var r = Math.ceil(i[0].scrollWidth);
                3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({
                    width: r,
                    "min-width": "100%",
                    "overflow-x": "inherit"
                }) : i.css({
                    "overflow-x": "inherit",
                    position: "absolute"
                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                    width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                    "min-width": "100%",
                    position: "relative"
                }).unwrap()
            }
        }, w = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e(".mCSB_" + o.idx + "_scrollbar:first")
              , r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : ""
              , l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"]
              , s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
            n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])
        }, S = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
              , l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)]
              , c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())]
              , d = s && c[1] < c[0] ? c[0] : c[1]
              , u = s && c[3] < c[2] ? c[2] : c[3];
            r[0].css({
                height: d,
                "max-height": r[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": c[0] + "px"
            }),
            r[1].css({
                width: u,
                "max-width": r[1].parent().width() - 10
            })
        }, b = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]
              , l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()]
              , s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
            o.scrollRatio = {
                y: s[0],
                x: s[1]
            }
        }, C = function(e, t, o) {
            var a = o ? d[0] + "_expanded" : ""
              , n = e.closest(".mCSB_scrollTools");
            "active" === t ? (e.toggleClass(d[0] + " " + a),
            n.toggleClass(d[1]),
            e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]),
            n.removeClass(d[1])) : (e.addClass(d[0]),
            n.addClass(d[1])))
        }, y = function() {
            var t = e(this)
              , o = t.data(a)
              , n = e("#mCSB_" + o.idx)
              , i = e("#mCSB_" + o.idx + "_container")
              , r = null == o.overflowed ? i.height() : i.outerHeight(!1)
              , l = null == o.overflowed ? i.width() : i.outerWidth(!1)
              , s = i[0].scrollHeight
              , c = i[0].scrollWidth;
            return s > r && (r = s),
            c > l && (l = c),
            [r > n.height(), l > n.width()]
        }, B = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = e("#mCSB_" + o.idx)
              , r = e("#mCSB_" + o.idx + "_container")
              , l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
            if (Q(t),
            ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0),
            G(t, "_resetY")),
            "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) {
                var s = dx = 0;
                "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1),
                dx = Math.abs(s / o.scrollRatio.x)),
                r.css("left", s),
                l[1].css("left", dx),
                G(t, "_resetX")
            }
        }, T = function() {
            function t() {
                r = setTimeout(function() {
                    e.event.special.mousewheel ? (clearTimeout(r),
                    W.call(o[0])) : t()
                }, 100)
            }
            var o = e(this)
              , n = o.data(a)
              , i = n.opt;
            if (!n.bindEvents) {
                if (I.call(this),
                i.contentTouchScroll && D.call(this),
                E.call(this),
                i.mouseWheel.enable) {
                    var r;
                    t()
                }
                P.call(this),
                U.call(this),
                i.advanced.autoScrollOnFocus && H.call(this),
                i.scrollButtons.enable && F.call(this),
                i.keyboard.enable && q.call(this),
                n.bindEvents = !0
            }
        }, k = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = a + "_" + o.idx
              , r = ".mCSB_" + o.idx + "_scrollbar"
              , l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a")
              , s = e("#mCSB_" + o.idx + "_container");
            n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)),
            n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)),
            o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i),
            l.each(function() {
                e(this).unbind("." + i)
            }),
            clearTimeout(t[0]._focusTimeout),
            $(t[0], "_focusTimeout"),
            clearTimeout(o.sequential.step),
            $(o.sequential, "step"),
            clearTimeout(s[0].onCompleteTimeout),
            $(s[0], "onCompleteTimeout"),
            o.bindEvents = !1)
        }, M = function(t) {
            var o = e(this)
              , n = o.data(a)
              , i = n.opt
              , r = e("#mCSB_" + n.idx + "_container_wrapper")
              , l = r.length ? r : e("#mCSB_" + n.idx + "_container")
              , s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")]
              , c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
            "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"),
            l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"),
            l.removeClass(d[10])) : (s[0].css("display", "none"),
            l.addClass(d[10])),
            l.addClass(d[8]))),
            "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"),
            l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"),
            l.removeClass(d[11])) : (s[1].css("display", "none"),
            l.addClass(d[11])),
            l.addClass(d[9]))),
            n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
        }, O = function(t) {
            var o = t.type
              , a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null
              , n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
            switch (o) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
                return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
                  , r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
                return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
            default:
                return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1]
            }
        }, I = function() {
            function t(e, t, a, n) {
                if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0,
                o.attr("id") === f[1])
                    var i = "x"
                      , s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
                else
                    var i = "y"
                      , s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                G(r, s.toString(), {
                    dir: i,
                    drag: !0
                })
            }
            var o, n, i, r = e(this), l = r.data(a), d = l.opt, u = a + "_" + l.idx, f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"], h = e("#mCSB_" + l.idx + "_container"), m = e("#" + f[0] + ",#" + f[1]), p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m, g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
            m.bind("contextmenu." + u, function(e) {
                e.preventDefault()
            }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) {
                if (t.stopImmediatePropagation(),
                t.preventDefault(),
                ee(t)) {
                    c = !0,
                    s && (document.onselectstart = function() {
                        return !1
                    }
                    ),
                    L.call(h, !1),
                    Q(r),
                    o = e(this);
                    var a = o.offset()
                      , l = O(t)[0] - a.top
                      , u = O(t)[1] - a.left
                      , f = o.height() + a.top
                      , m = o.width() + a.left;
                    f > l && l > 0 && m > u && u > 0 && (n = l,
                    i = u),
                    C(o, "active", d.autoExpandScrollbar)
                }
            }).bind("touchmove." + u, function(e) {
                e.stopImmediatePropagation(),
                e.preventDefault();
                var a = o.offset()
                  , r = O(e)[0] - a.top
                  , l = O(e)[1] - a.left;
                t(n, i, r, l)
            }),
            e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) {
                if (o) {
                    var a = o.offset()
                      , r = O(e)[0] - a.top
                      , l = O(e)[1] - a.left;
                    if (n === r && i === l)
                        return;
                    t(n, i, r, l)
                }
            }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() {
                o && (C(o, "active", d.autoExpandScrollbar),
                o = null),
                c = !1,
                s && (document.onselectstart = null),
                L.call(h, !0)
            })
        }, D = function() {
            function o(e) {
                if (!te(e) || c || O(e)[2])
                    return void (t = 0);
                t = 1,
                b = 0,
                C = 0,
                d = 1,
                y.removeClass("mCS_touch_action");
                var o = I.offset();
                u = O(e)[0] - o.top,
                f = O(e)[1] - o.left,
                z = [O(e)[0], O(e)[1]]
            }
            function n(e) {
                if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(),
                e.stopImmediatePropagation(),
                (!C || b) && d)) {
                    g = K();
                    var t = M.offset()
                      , o = O(e)[0] - t.top
                      , a = O(e)[1] - t.left
                      , n = "mcsLinearOut";
                    if (E.push(o),
                    W.push(a),
                    z[2] = Math.abs(O(e)[0] - z[0]),
                    z[3] = Math.abs(O(e)[1] - z[1]),
                    B.overflowed[0])
                        var i = D[0].parent().height() - D[0].height()
                          , r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis);
                    if (B.overflowed[1])
                        var l = D[1].parent().width() - D[1].width()
                          , h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                    r || h ? (U || e.preventDefault(),
                    b = 1) : (C = 1,
                    y.addClass("mCS_touch_action")),
                    U && e.preventDefault(),
                    w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null],
                    I[0].idleTimer = 250,
                    B.overflowed[0] && s(w[0], R, n, "y", "all", !0),
                    B.overflowed[1] && s(w[1], R, n, "x", L, !0)
                }
            }
            function i(e) {
                if (!te(e) || c || O(e)[2])
                    return void (t = 0);
                t = 1,
                e.stopImmediatePropagation(),
                Q(y),
                p = K();
                var o = M.offset();
                h = O(e)[0] - o.top,
                m = O(e)[1] - o.left,
                E = [],
                W = []
            }
            function r(e) {
                if (te(e) && !c && !O(e)[2]) {
                    d = 0,
                    e.stopImmediatePropagation(),
                    b = 0,
                    C = 0,
                    v = K();
                    var t = M.offset()
                      , o = O(e)[0] - t.top
                      , a = O(e)[1] - t.left;
                    if (!(v - g > 30)) {
                        _ = 1e3 / (v - p);
                        var n = "mcsEaseOut"
                          , i = 2.5 > _
                          , r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                        x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
                        var u = [Math.abs(x[0]), Math.abs(x[1])];
                        _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _];
                        var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                        w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null],
                        S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
                        var y = parseInt(T.contentTouchScroll) || 0;
                        w[0] = u[0] > y ? w[0] : 0,
                        w[1] = u[1] > y ? w[1] : 0,
                        B.overflowed[0] && s(w[0], S[0], n, "y", L, !1),
                        B.overflowed[1] && s(w[1], S[1], n, "x", L, !1)
                    }
                }
            }
            function l(e, t) {
                var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
                return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
            }
            function s(e, t, o, a, n, i) {
                e && G(y, e.toString(), {
                    dur: t,
                    scrollEasing: o,
                    dir: a,
                    overwrite: n,
                    drag: i
                })
            }
            var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this), B = y.data(a), T = B.opt, k = a + "_" + B.idx, M = e("#mCSB_" + B.idx), I = e("#mCSB_" + B.idx + "_container"), D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")], E = [], W = [], R = 0, L = "yx" === T.axis ? "none" : "all", z = [], P = I.find("iframe"), H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k], U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
            I.bind(H[0], function(e) {
                o(e)
            }).bind(H[1], function(e) {
                n(e)
            }),
            M.bind(H[0], function(e) {
                i(e)
            }).bind(H[2], function(e) {
                r(e)
            }),
            P.length && P.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) {
                        o(e),
                        i(e)
                    }).bind(H[1], function(e) {
                        n(e)
                    }).bind(H[2], function(e) {
                        r(e)
                    })
                })
            })
        }, E = function() {
            function o() {
                return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
            }
            function n(e, t, o) {
                d.type = o && i ? "stepped" : "stepless",
                d.scrollAmount = 10,
                j(r, e, t, "mcsLinearOut", o ? 60 : null)
            }
            var i, r = e(this), l = r.data(a), s = l.opt, d = l.sequential, u = a + "_" + l.idx, f = e("#mCSB_" + l.idx + "_container"), h = f.parent();
            f.bind("mousedown." + u, function() {
                t || i || (i = 1,
                c = !0)
            }).add(document).bind("mousemove." + u, function(e) {
                if (!t && i && o()) {
                    var a = f.offset()
                      , r = O(e)[0] - a.top + f[0].offsetTop
                      , c = O(e)[1] - a.left + f[0].offsetLeft;
                    r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)),
                    "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39)))
                }
            }).bind("mouseup." + u + " dragend." + u, function() {
                t || (i && (i = 0,
                n("off", null)),
                c = !1)
            })
        }, W = function() {
            function t(t, a) {
                if (Q(o),
                !z(o, t.target)) {
                    var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100
                      , d = i.scrollInertia;
                    if ("x" === i.axis || "x" === i.mouseWheel.axis)
                        var u = "x"
                          , f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)]
                          , h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0]
                          , m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft)
                          , p = c[1][0].offsetLeft
                          , g = c[1].parent().width() - c[1].width()
                          , v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
                    else
                        var u = "y"
                          , f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)]
                          , h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0]
                          , m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop)
                          , p = c[0][0].offsetTop
                          , g = c[0].parent().height() - c[0].height()
                          , v = t.deltaY || a;
                    "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v),
                    i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1),
                    (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(),
                    t.preventDefault()),
                    t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor,
                    d = 17),
                    G(o, (m - v * h).toString(), {
                        dir: u,
                        dur: d
                    }))
                }
            }
            if (e(this).data(a)) {
                var o = e(this)
                  , n = o.data(a)
                  , i = n.opt
                  , r = a + "_" + n.idx
                  , l = e("#mCSB_" + n.idx)
                  , c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")]
                  , d = e("#mCSB_" + n.idx + "_container").find("iframe");
                d.length && d.each(function() {
                    e(this).bind("load", function() {
                        A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) {
                            t(e, o)
                        })
                    })
                }),
                l.bind("mousewheel." + r, function(e, o) {
                    t(e, o)
                })
            }
        }, R = new Object, A = function(t) {
            var o = !1
              , a = !1
              , n = null;
            if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")),
            a !== !1 && void 0 !== R[a])
                return R[a];
            if (t) {
                try {
                    var i = t.contentDocument || t.contentWindow.document;
                    n = i.body.innerHTML
                } catch (r) {}
                o = null !== n
            } else {
                try {
                    var i = top.document;
                    n = i.body.innerHTML
                } catch (r) {}
                o = null !== n
            }
            return a !== !1 && (R[a] = o),
            o
        }, L = function(e) {
            var t = this.find("iframe");
            if (t.length) {
                var o = e ? "auto" : "none";
                t.css("pointer-events", o)
            }
        }, z = function(t, o) {
            var n = o.nodeName.toLowerCase()
              , i = t.data(a).opt.mouseWheel.disableOver
              , r = ["select", "textarea"];
            return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus"))
        }, P = function() {
            var t, o = e(this), n = o.data(a), i = a + "_" + n.idx, r = e("#mCSB_" + n.idx + "_container"), l = r.parent(), s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
            s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) {
                c = !0,
                e(o.target).hasClass("mCSB_dragger") || (t = 1)
            }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function() {
                c = !1
            }).bind("click." + i, function(a) {
                if (t && (t = 0,
                e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) {
                    Q(o);
                    var i = e(this)
                      , s = i.find(".mCSB_dragger");
                    if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!n.overflowed[1])
                            return;
                        var c = "x"
                          , u = a.pageX > s.offset().left ? -1 : 1
                          , f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
                    } else {
                        if (!n.overflowed[0])
                            return;
                        var c = "y"
                          , u = a.pageY > s.offset().top ? -1 : 1
                          , f = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
                    }
                    G(o, f.toString(), {
                        dir: c,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            })
        }, H = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = a + "_" + o.idx
              , r = e("#mCSB_" + o.idx + "_container")
              , l = r.parent();
            r.bind("focusin." + i, function() {
                var o = e(document.activeElement)
                  , a = r.find(".mCustomScrollBox").length
                  , i = 0;
                o.is(n.advanced.autoScrollOnFocus) && (Q(t),
                clearTimeout(t[0]._focusTimeout),
                t[0]._focusTimer = a ? (i + 17) * a : 0,
                t[0]._focusTimeout = setTimeout(function() {
                    var e = [ae(o)[0], ae(o)[1]]
                      , a = [r[0].offsetTop, r[0].offsetLeft]
                      , s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)]
                      , c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none";
                    "x" === n.axis || s[0] || G(t, e[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: i
                    }),
                    "y" === n.axis || s[1] || G(t, e[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: c,
                        dur: i
                    })
                }, t[0]._focusTimer))
            })
        }, U = function() {
            var t = e(this)
              , o = t.data(a)
              , n = a + "_" + o.idx
              , i = e("#mCSB_" + o.idx + "_container").parent();
            i.bind("scroll." + n, function() {
                0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden")
            })
        }, F = function() {
            var t = e(this)
              , o = t.data(a)
              , n = o.opt
              , i = o.sequential
              , r = a + "_" + o.idx
              , l = ".mCSB_" + o.idx + "_scrollbar"
              , s = e(l + ">a");
            s.bind("contextmenu." + r, function(e) {
                e.preventDefault()
            }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                function r(e, o) {
                    i.scrollAmount = n.scrollButtons.scrollAmount,
                    j(t, e, o)
                }
                if (a.preventDefault(),
                ee(a)) {
                    var l = e(this).attr("class");
                    switch (i.type = n.scrollButtons.scrollType,
                    a.type) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                        if ("stepped" === i.type)
                            return;
                        c = !0,
                        o.tweenRunning = !1,
                        r("on", l);
                        break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        if ("stepped" === i.type)
                            return;
                        c = !1,
                        i.dir && r("off", l);
                        break;
                    case "click":
                        if ("stepped" !== i.type || o.tweenRunning)
                            return;
                        r("on", l)
                    }
                }
            })
        }, q = function() {
            function t(t) {
                function a(e, t) {
                    r.type = i.keyboard.scrollType,
                    r.scrollAmount = i.keyboard.scrollAmount,
                    "stepped" === r.type && n.tweenRunning || j(o, e, t)
                }
                switch (t.type) {
                case "blur":
                    n.tweenRunning && r.dir && a("off", null);
                    break;
                case "keydown":
                case "keyup":
                    var l = t.keyCode ? t.keyCode : t.which
                      , s = "on";
                    if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                        if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1])
                            return;
                        "keyup" === t.type && (s = "off"),
                        e(document.activeElement).is(u) || (t.preventDefault(),
                        t.stopImmediatePropagation(),
                        a(s, l))
                    } else if (33 === l || 34 === l) {
                        if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(),
                        t.stopImmediatePropagation()),
                        "keyup" === t.type) {
                            Q(o);
                            var f = 34 === l ? -1 : 1;
                            if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                                var h = "x"
                                  , m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());
                            else
                                var h = "y"
                                  , m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                            G(o, m.toString(), {
                                dir: h,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(),
                    t.stopImmediatePropagation()),
                    "keyup" === t.type)) {
                        if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0])
                            var h = "x"
                              , m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                        else
                            var h = "y"
                              , m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                        G(o, m.toString(), {
                            dir: h,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                }
            }
            var o = e(this)
              , n = o.data(a)
              , i = n.opt
              , r = n.sequential
              , l = a + "_" + n.idx
              , s = e("#mCSB_" + n.idx)
              , c = e("#mCSB_" + n.idx + "_container")
              , d = c.parent()
              , u = "input,textarea,select,datalist,keygen,[contenteditable='true']"
              , f = c.find("iframe")
              , h = ["blur." + l + " keydown." + l + " keyup." + l];
            f.length && f.each(function() {
                e(this).bind("load", function() {
                    A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) {
                        t(e)
                    })
                })
            }),
            s.attr("tabindex", "0").bind(h[0], function(e) {
                t(e)
            })
        }, j = function(t, o, n, i, r) {
            function l(e) {
                u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
                var o = "stepped" !== f.type
                  , a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60
                  , n = e ? o ? 7.5 : 40 : 2.5
                  , s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)]
                  , d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x]
                  , m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n)
                  , v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount)
                  , x = "auto" !== f.scrollAmount ? v : m
                  , _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"
                  , w = !!e;
                return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]),
                G(t, x.toString(), {
                    dir: f.dir[0],
                    scrollEasing: _,
                    dur: a,
                    onComplete: w
                }),
                e ? void (f.dir = !1) : (clearTimeout(f.step),
                void (f.step = setTimeout(function() {
                    l()
                }, a)))
            }
            function s() {
                clearTimeout(f.step),
                $(f, "step"),
                Q(t)
            }
            var c = t.data(a)
              , u = c.opt
              , f = c.sequential
              , h = e("#mCSB_" + c.idx + "_container")
              , m = "stepped" === f.type
              , p = u.scrollInertia < 26 ? 26 : u.scrollInertia
              , g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
            switch (o) {
            case "on":
                if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1],
                Q(t),
                oe(n) && "stepped" === f.type)
                    return;
                l(m);
                break;
            case "off":
                s(),
                (m || c.tweenRunning && f.dir) && l(!0)
            }
        }, Y = function(t) {
            var o = e(this).data(a).opt
              , n = [];
            return "function" == typeof t && (t = t()),
            t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t,
            n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t),
            "function" == typeof n[0] && (n[0] = n[0]()),
            "function" == typeof n[1] && (n[1] = n[1]()),
            n
        }, X = function(t, o) {
            if (null != t && "undefined" != typeof t) {
                var n = e(this)
                  , i = n.data(a)
                  , r = i.opt
                  , l = e("#mCSB_" + i.idx + "_container")
                  , s = l.parent()
                  , c = typeof t;
                o || (o = "x" === r.axis ? "x" : "y");
                var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height()
                  , f = "x" === o ? l[0].offsetLeft : l[0].offsetTop
                  , h = "x" === o ? "left" : "top";
                switch (c) {
                case "function":
                    return t();
                case "object":
                    var m = t.jquery ? t : e(t);
                    if (!m.length)
                        return;
                    return "x" === o ? ae(m)[1] : ae(m)[0];
                case "string":
                case "number":
                    if (oe(t))
                        return Math.abs(t);
                    if (-1 !== t.indexOf("%"))
                        return Math.abs(d * parseInt(t) / 100);
                    if (-1 !== t.indexOf("-="))
                        return Math.abs(f - parseInt(t.split("-=")[1]));
                    if (-1 !== t.indexOf("+=")) {
                        var p = f + parseInt(t.split("+=")[1]);
                        return p >= 0 ? 0 : Math.abs(p)
                    }
                    if (-1 !== t.indexOf("px") && oe(t.split("px")[0]))
                        return Math.abs(t.split("px")[0]);
                    if ("top" === t || "left" === t)
                        return 0;
                    if ("bottom" === t)
                        return Math.abs(s.height() - l.outerHeight(!1));
                    if ("right" === t)
                        return Math.abs(s.width() - l.outerWidth(!1));
                    if ("first" === t || "last" === t) {
                        var m = l.find(":" + t);
                        return "x" === o ? ae(m)[1] : ae(m)[0]
                    }
                    return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t),
                    void u.update.call(null, n[0]))
                }
            }
        }, N = function(t) {
            function o() {
                return clearTimeout(f[0].autoUpdate),
                0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function() {
                    return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(),
                    s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n,
                    void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth,
                    s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n,
                    void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length,
                    s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n,
                    void f.find("img").each(function() {
                        n(this)
                    }))
                }, c.advanced.autoUpdateTimeout))
            }
            function n(t) {
                function o(e, t) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function a() {
                    this.onload = null,
                    e(t).addClass(d[2]),
                    r(2)
                }
                if (e(t).hasClass(d[2]))
                    return void r();
                var n = new Image;
                n.onload = o(n, a),
                n.src = t.src
            }
            function i() {
                c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                var e = 0
                  , t = f.find(c.advanced.updateOnSelectorChange);
                return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
                    e += this.offsetHeight + this.offsetWidth
                }),
                e
            }
            function r(e) {
                clearTimeout(f[0].autoUpdate),
                u.update.call(null, l[0], e)
            }
            var l = e(this)
              , s = l.data(a)
              , c = s.opt
              , f = e("#mCSB_" + s.idx + "_container");
            return t ? (clearTimeout(f[0].autoUpdate),
            void $(f[0], "autoUpdate")) : void o()
        }, V = function(e, t, o) {
            return Math.round(e / t) * t - o
        }, Q = function(t) {
            var o = t.data(a)
              , n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
            n.each(function() {
                Z.call(this)
            })
        }, G = function(t, o, n) {
            function i(e) {
                return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
            }
            function r() {
                return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w]
            }
            function l() {
                var e = [h[0].offsetTop, h[0].offsetLeft]
                  , o = [x[0].offsetTop, x[0].offsetLeft]
                  , a = [h.outerHeight(!1), h.outerWidth(!1)]
                  , i = [f.height(), f.width()];
                t[0].mcs = {
                    content: h,
                    top: e[0],
                    left: e[1],
                    draggerTop: o[0],
                    draggerLeft: o[1],
                    topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])),
                    leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])),
                    direction: n.dir
                }
            }
            var s = t.data(a)
              , c = s.opt
              , d = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: c.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            }
              , n = e.extend(d, n)
              , u = [n.dur, n.drag ? 0 : n.dur]
              , f = e("#mCSB_" + s.idx)
              , h = e("#mCSB_" + s.idx + "_container")
              , m = h.parent()
              , p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0]
              , g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
            if (s.trigger = n.trigger,
            0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"),
            m.scrollTop(0).scrollLeft(0)),
            "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]),
            s.contentReset.y = 1),
            "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]),
            s.contentReset.x = 1),
            "_resetY" !== o && "_resetX" !== o) {
                if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]),
                s.contentReset.x = null),
                !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]),
                s.contentReset.x = null),
                c.snapAmount) {
                    var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                    o = V(o, v, c.snapOffset)
                }
                switch (n.dir) {
                case "x":
                    var x = e("#mCSB_" + s.idx + "_dragger_horizontal")
                      , _ = "left"
                      , w = h[0].offsetLeft
                      , S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()]
                      , b = [o, 0 === o ? 0 : o / s.scrollRatio.x]
                      , y = p[1]
                      , B = g[1]
                      , T = y > 0 ? y / s.scrollRatio.x : 0
                      , k = B > 0 ? B / s.scrollRatio.x : 0;
                    break;
                case "y":
                    var x = e("#mCSB_" + s.idx + "_dragger_vertical")
                      , _ = "top"
                      , w = h[0].offsetTop
                      , S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()]
                      , b = [o, 0 === o ? 0 : o / s.scrollRatio.y]
                      , y = p[0]
                      , B = g[0]
                      , T = y > 0 ? y / s.scrollRatio.y : 0
                      , k = B > 0 ? B / s.scrollRatio.y : 0
                }
                b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0],
                t[0].mcs || (l(),
                i("onInit") && c.callbacks.onInit.call(t[0])),
                clearTimeout(h[0].onCompleteTimeout),
                J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing),
                !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                    onStart: function() {
                        n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(),
                        c.callbacks.onScrollStart.call(t[0])),
                        s.tweenRunning = !0,
                        C(x),
                        s.cbOffsets = r())
                    },
                    onUpdate: function() {
                        n.callbacks && n.onUpdate && i("whileScrolling") && (l(),
                        c.callbacks.whileScrolling.call(t[0]))
                    },
                    onComplete: function() {
                        if (n.callbacks && n.onComplete) {
                            "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout);
                            var e = h[0].idleTimer || 0;
                            h[0].onCompleteTimeout = setTimeout(function() {
                                i("onScroll") && (l(),
                                c.callbacks.onScroll.call(t[0])),
                                i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(),
                                c.callbacks.onTotalScroll.call(t[0])),
                                i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(),
                                c.callbacks.onTotalScrollBack.call(t[0])),
                                s.tweenRunning = !1,
                                h[0].idleTimer = 0,
                                C(x, "hide")
                            }, e)
                        }
                    }
                })
            }
        }, J = function(e, t, o, a, n, i, r) {
            function l() {
                S.stop || (x || m.call(),
                x = K() - v,
                s(),
                x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1,
                S.time < x + 1 && (S.time = x + 1)),
                S.time < a ? S.id = h(l) : g.call())
            }
            function s() {
                a > 0 ? (S.currVal = u(S.time, _, b, a, n),
                w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px",
                p.call()
            }
            function c() {
                f = 1e3 / 60,
                S.time = x + f,
                h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) {
                    return s(),
                    setTimeout(e, .01)
                }
                ,
                S.id = h(l)
            }
            function d() {
                null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id),
                S.id = null)
            }
            function u(e, t, o, a, n) {
                switch (n) {
                case "linear":
                case "mcsLinear":
                    return o * e / a + t;
                case "mcsLinearOut":
                    return e /= a,
                    e--,
                    o * Math.sqrt(1 - e * e) + t;
                case "easeInOutSmooth":
                    return e /= a / 2,
                    1 > e ? o / 2 * e * e + t : (e--,
                    -o / 2 * (e * (e - 2) - 1) + t);
                case "easeInOutStrong":
                    return e /= a / 2,
                    1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--,
                    o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                case "easeInOut":
                case "mcsEaseInOut":
                    return e /= a / 2,
                    1 > e ? o / 2 * e * e * e + t : (e -= 2,
                    o / 2 * (e * e * e + 2) + t);
                case "easeOutSmooth":
                    return e /= a,
                    e--,
                    -o * (e * e * e * e - 1) + t;
                case "easeOutStrong":
                    return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                case "easeOut":
                case "mcsEaseOut":
                default:
                    var i = (e /= a) * e
                      , r = i * e;
                    return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
                }
            }
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            var f, h, r = r || {}, m = r.onStart || function() {}
            , p = r.onUpdate || function() {}
            , g = r.onComplete || function() {}
            , v = K(), x = 0, _ = e.offsetTop, w = e.style, S = e._mTween[t];
            "left" === t && (_ = e.offsetLeft);
            var b = o - _;
            S.stop = 0,
            "none" !== i && d(),
            c()
        }, K = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        }, Z = function() {
            var e = this;
            e._mTween || (e._mTween = {
                top: {},
                left: {}
            });
            for (var t = ["top", "left"], o = 0; o < t.length; o++) {
                var a = t[o];
                e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id),
                e._mTween[a].id = null,
                e._mTween[a].stop = 1)
            }
        }, $ = function(e, t) {
            try {
                delete e[t]
            } catch (o) {
                e[t] = null
            }
        }, ee = function(e) {
            return !(e.which && 1 !== e.which)
        }, te = function(e) {
            var t = e.originalEvent.pointerType;
            return !(t && "touch" !== t && 2 !== t)
        }, oe = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, ae = function(e) {
            var t = e.parents(".mCSB_container");
            return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
        }, ne = function() {
            function e() {
                var e = ["webkit", "moz", "ms", "o"];
                if ("hidden"in document)
                    return "hidden";
                for (var t = 0; t < e.length; t++)
                    if (e[t] + "Hidden"in document)
                        return e[t] + "Hidden";
                return null
            }
            var t = e();
            return t ? document[t] : !1
        };
        e.fn[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }
        ,
        e[o] = function(t) {
            return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
        }
        ,
        e[o].defaults = i,
        window[o] = !0,
        e(window).bind("load", function() {
            e(n)[o](),
            e.extend(e.expr[":"], {
                mcsInView: e.expr[":"].mcsInView || function(t) {
                    var o, a, n = e(t), i = n.parents(".mCSB_container");
                    if (i.length)
                        return o = i.parent(),
                        a = [i[0].offsetTop, i[0].offsetLeft],
                        a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1)
                }
                ,
                mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) {
                    var n, i, r, l, s = e(t), c = s.parents(".mCSB_container"), d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                    if (c.length)
                        return n = [s.outerHeight(!1), s.outerWidth(!1)],
                        r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]],
                        i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth],
                        l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]],
                        r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0
                }
                ,
                mcsOverflow: e.expr[":"].mcsOverflow || function(t) {
                    var o = e(t).data(a);
                    if (o)
                        return o.overflowed[0] || o.overflowed[1]
                }
            })
        })
    })
});

!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var o = !1
      , t = !1
      , r = 0
      , i = 2e3
      , s = 0
      , n = e
      , l = document
      , a = window
      , c = n(a)
      , d = []
      , u = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || !1
      , h = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || !1;
    if (u)
        a.cancelAnimationFrame || (h = function(e) {}
        );
    else {
        var p = 0;
        u = function(e, o) {
            var t = (new Date).getTime()
              , r = Math.max(0, 16 - (t - p))
              , i = a.setTimeout(function() {
                e(t + r)
            }, r);
            return p = t + r,
            i
        }
        ,
        h = function(e) {
            a.clearTimeout(e)
        }
    }
    var m = a.MutationObserver || a.WebKitMutationObserver || !1
      , f = Date.now || function() {
        return (new Date).getTime()
    }
      , g = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "6px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 40,
        mousescrollstep: 27,
        touchbehavior: !1,
        emulatetouch: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: function() {
            var e = l.currentScript || function() {
                var e = l.getElementsByTagName("script");
                return !!e.length && e[e.length - 1]
            }()
              , o = e ? e.src.split("?")[0] : "";
            return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
        }(),
        preventmultitouchscrolling: !0,
        disablemutationobserver: !1,
        enableobserver: !0,
        scrollbarid: !1
    }
      , v = !1
      , w = function() {
        if (v)
            return v;
        var e = l.createElement("DIV")
          , o = e.style
          , t = navigator.userAgent
          , r = navigator.platform
          , i = {};
        return i.haspointerlock = "pointerLockElement"in l || "webkitPointerLockElement"in l || "mozPointerLockElement"in l,
        i.isopera = "opera"in a,
        i.isopera12 = i.isopera && "getUserMedia"in navigator,
        i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(a.operamini),
        i.isie = "all"in l && "attachEvent"in e && !i.isopera,
        i.isieold = i.isie && !("msInterpolationMode"in o),
        i.isie7 = i.isie && !i.isieold && (!("documentMode"in l) || 7 === l.documentMode),
        i.isie8 = i.isie && "documentMode"in l && 8 === l.documentMode,
        i.isie9 = i.isie && "performance"in a && 9 === l.documentMode,
        i.isie10 = i.isie && "performance"in a && 10 === l.documentMode,
        i.isie11 = "msRequestFullscreen"in e && l.documentMode >= 11,
        i.ismsedge = "msCredentials"in a,
        i.ismozilla = "MozAppearance"in o,
        i.iswebkit = !i.ismsedge && "WebkitAppearance"in o,
        i.ischrome = i.iswebkit && "chrome"in a,
        i.ischrome38 = i.ischrome && "touchAction"in o,
        i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock,
        i.ischrome26 = !i.ischrome38 && i.ischrome && "transition"in o,
        i.cantouch = "ontouchstart"in l.documentElement || "ontouchstart"in a,
        i.hasw3ctouch = (a.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0),
        i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1),
        i.ismac = /^mac$/i.test(r),
        i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r),
        i.isios4 = i.isios && !("seal"in Object),
        i.isios7 = i.isios && "webkitHidden"in l,
        i.isios8 = i.isios && "hidden"in l,
        i.isios10 = i.isios && a.Proxy,
        i.isandroid = /android/i.test(t),
        i.haseventlistener = "addEventListener"in e,
        i.trstyle = !1,
        i.hastransform = !1,
        i.hastranslate3d = !1,
        i.transitionstyle = !1,
        i.hastransition = !1,
        i.transitionend = !1,
        i.trstyle = "transform",
        i.hastransform = "transform"in o || function() {
            for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, r = e.length; t < r; t++)
                if (void 0 !== o[e[t]]) {
                    i.trstyle = e[t];
                    break
                }
            i.hastransform = !!i.trstyle
        }(),
        i.hastransform && (o[i.trstyle] = "translate3d(1px,2px,3px)",
        i.hastranslate3d = /translate3d/.test(o[i.trstyle])),
        i.transitionstyle = "transition",
        i.prefixstyle = "",
        i.transitionend = "transitionend",
        i.hastransition = "transition"in o || function() {
            i.transitionend = !1;
            for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], s = 0, n = e.length; s < n; s++)
                if (e[s]in o) {
                    i.transitionstyle = e[s],
                    i.prefixstyle = t[s],
                    i.transitionend = r[s];
                    break
                }
            i.ischrome26 && (i.prefixstyle = t[1]),
            i.hastransition = i.transitionstyle
        }(),
        i.cursorgrabvalue = function() {
            var e = ["grab", "-webkit-grab", "-moz-grab"];
            (i.ischrome && !i.ischrome38 || i.isie) && (e = []);
            for (var t = 0, r = e.length; t < r; t++) {
                var s = e[t];
                if (o.cursor = s,
                o.cursor == s)
                    return s
            }
            return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
        }(),
        i.hasmousecapture = "setCapture"in e,
        i.hasMutationObserver = !1 !== m,
        e = null,
        v = i,
        i
    }
      , b = function(e, p) {
        function v() {
            var e = T.doc.css(P.trstyle);
            return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
        }
        function b() {
            var e = T.win;
            if ("zIndex"in e)
                return e.zIndex();
            for (; e.length > 0; ) {
                if (9 == e[0].nodeType)
                    return !1;
                var o = e.css("zIndex");
                if (!isNaN(o) && 0 !== o)
                    return parseInt(o);
                e = e.parent()
            }
            return !1
        }
        function x(e, o, t) {
            var r = e.css(o)
              , i = parseFloat(r);
            if (isNaN(i)) {
                var s = 3 == (i = I[r] || 0) ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
                return T.isie8 && i && (i += 1),
                s ? i : 0
            }
            return i
        }
        function S(e, o, t, r) {
            T._bind(e, o, function(r) {
                var i = {
                    original: r = r || a.event,
                    target: r.target || r.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        return r.preventDefault ? r.preventDefault() : r.returnValue = !1,
                        !1
                    },
                    stopImmediatePropagation: function() {
                        r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
                    }
                };
                return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX),
                r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY),
                !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail,
                t.call(e, i)
            }, r)
        }
        function z(e, o, t, r) {
            T.scrollrunning || (T.newscrolly = T.getScrollTop(),
            T.newscrollx = T.getScrollLeft(),
            D = f());
            var i = f() - D;
            if (D = f(),
            i > 350 ? A = 1 : A += (2 - A) / 10,
            e = e * A | 0,
            o = o * A | 0,
            e) {
                if (r)
                    if (e < 0) {
                        if (T.getScrollLeft() >= T.page.maxw)
                            return !0
                    } else if (T.getScrollLeft() <= 0)
                        return !0;
                var s = e > 0 ? 1 : -1;
                X !== s && (T.scrollmom && T.scrollmom.stop(),
                T.newscrollx = T.getScrollLeft(),
                X = s),
                T.lastdeltax -= e
            }
            if (o) {
                if (function() {
                    var e = T.getScrollTop();
                    if (o < 0) {
                        if (e >= T.page.maxh)
                            return !0
                    } else if (e <= 0)
                        return !0
                }()) {
                    if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive)
                        return !0;
                    var n = T.view.h >> 1;
                    T.newscrolly < -n ? (T.newscrolly = -n,
                    o = -1) : T.newscrolly > T.page.maxh + n ? (T.newscrolly = T.page.maxh + n,
                    o = 1) : o = 0
                }
                var l = o > 0 ? 1 : -1;
                B !== l && (T.scrollmom && T.scrollmom.stop(),
                T.newscrolly = T.getScrollTop(),
                B = l),
                T.lastdeltay -= o
            }
            (o || e) && T.synched("relativexy", function() {
                var e = T.lastdeltay + T.newscrolly;
                T.lastdeltay = 0;
                var o = T.lastdeltax + T.newscrollx;
                T.lastdeltax = 0,
                T.rail.drag || T.doScrollPos(o, e)
            })
        }
        function k(e, o, t) {
            var r, i;
            return !(t || !q) || (0 === e.deltaMode ? (r = -e.deltaX * (M.mousescrollstep / 54) | 0,
            i = -e.deltaY * (M.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (r = -e.deltaX * M.mousescrollstep * 50 / 80 | 0,
            i = -e.deltaY * M.mousescrollstep * 50 / 80 | 0),
            o && M.oneaxismousemode && 0 === r && i && (r = i,
            i = 0,
            t && (r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0) && (i = r,
            r = 0)),
            T.isrtlmode && (r = -r),
            z(r, i, t, !0) ? void (t && (q = !0)) : (q = !1,
            e.stopImmediatePropagation(),
            e.preventDefault()))
        }
        var T = this;
        this.version = "3.7.6",
        this.name = "nicescroll",
        this.me = p;
        var E = n("body")
          , M = this.opt = {
            doc: E,
            win: !1
        };
        if (n.extend(M, g),
        M.snapbackspeed = 80,
        e)
            for (var L in M)
                void 0 !== e[L] && (M[L] = e[L]);
        if (M.disablemutationobserver && (m = !1),
        this.doc = M.doc,
        this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "",
        this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName),
        this.haswrapper = !1 !== M.win,
        this.win = M.win || (this.ispage ? c : this.doc),
        this.docscroll = this.ispage && !this.haswrapper ? c : this.win,
        this.body = E,
        this.viewport = !1,
        this.isfixed = !1,
        this.iframe = !1,
        this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName,
        this.istextarea = "TEXTAREA" == this.win[0].nodeName,
        this.forcescreen = !1,
        this.canshowonmouseevent = "scroll" != M.autohidemode,
        this.onmousedown = !1,
        this.onmouseup = !1,
        this.onmousemove = !1,
        this.onmousewheel = !1,
        this.onkeypress = !1,
        this.ongesturezoom = !1,
        this.onclick = !1,
        this.onscrollstart = !1,
        this.onscrollend = !1,
        this.onscrollcancel = !1,
        this.onzoomin = !1,
        this.onzoomout = !1,
        this.view = !1,
        this.page = !1,
        this.scroll = {
            x: 0,
            y: 0
        },
        this.scrollratio = {
            x: 0,
            y: 0
        },
        this.cursorheight = 20,
        this.scrollvaluemax = 0,
        "auto" == M.rtlmode) {
            var C = this.win[0] == a ? this.body : this.win
              , N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
            "horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"),
            this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N,
            this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N)
        } else
            this.isrtlmode = !0 === M.rtlmode,
            this.isvertical = !1;
        if (this.scrollrunning = !1,
        this.scrollmom = !1,
        this.observer = !1,
        this.observerremover = !1,
        this.observerbody = !1,
        !1 !== M.scrollbarid)
            this.id = M.scrollbarid;
        else
            do {
                this.id = "ascrail" + i++
            } while (l.getElementById(this.id));
        this.rail = !1,
        this.cursor = !1,
        this.cursorfreezed = !1,
        this.selectiondrag = !1,
        this.zoom = !1,
        this.zoomactive = !1,
        this.hasfocus = !1,
        this.hasmousefocus = !1,
        this.railslocked = !1,
        this.locked = !1,
        this.hidden = !1,
        this.cursoractive = !0,
        this.wheelprevented = !1,
        this.overflowx = M.overflowx,
        this.overflowy = M.overflowy,
        this.nativescrollingarea = !1,
        this.checkarea = 0,
        this.events = [],
        this.saved = {},
        this.delaylist = {},
        this.synclist = {},
        this.lastdeltax = 0,
        this.lastdeltay = 0,
        this.detected = w();
        var P = n.extend({}, this.detected);
        this.canhwscroll = P.hastransform && M.hwacceleration,
        this.ishwscroll = this.canhwscroll && T.haswrapper,
        this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1,
        this.istouchcapable = !1,
        P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0,
        M.enablemouselockapi || (P.hasmousecapture = !1,
        P.haspointerlock = !1),
        this.debounced = function(e, o, t) {
            T && (T.delaylist[e] || !1 || (T.delaylist[e] = {
                h: u(function() {
                    T.delaylist[e].fn.call(T),
                    T.delaylist[e] = !1
                }, t)
            },
            o.call(T)),
            T.delaylist[e].fn = o)
        }
        ,
        this.synched = function(e, o) {
            T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o,
            u(function() {
                T && (T.synclist[e] && T.synclist[e].call(T),
                T.synclist[e] = null)
            }))
        }
        ,
        this.unsynched = function(e) {
            T.synclist[e] && (T.synclist[e] = !1)
        }
        ,
        this.css = function(e, o) {
            for (var t in o)
                T.saved.css.push([e, t, e.css(t)]),
                e.css(t, o[t])
        }
        ,
        this.scrollTop = function(e) {
            return void 0 === e ? T.getScrollTop() : T.setScrollTop(e)
        }
        ,
        this.scrollLeft = function(e) {
            return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e)
        }
        ;
        var R = function(e, o, t, r, i, s, n) {
            this.st = e,
            this.ed = o,
            this.spd = t,
            this.p1 = r || 0,
            this.p2 = i || 1,
            this.p3 = s || 0,
            this.p4 = n || 1,
            this.ts = f(),
            this.df = o - e
        };
        if (R.prototype = {
            B2: function(e) {
                return 3 * (1 - e) * (1 - e) * e
            },
            B3: function(e) {
                return 3 * (1 - e) * e * e
            },
            B4: function(e) {
                return e * e * e
            },
            getPos: function() {
                return (f() - this.ts) / this.spd
            },
            getNow: function() {
                var e = (f() - this.ts) / this.spd
                  , o = this.B2(e) + this.B3(e) + this.B4(e);
                return e >= 1 ? this.ed : this.st + this.df * o | 0
            },
            update: function(e, o) {
                return this.st = this.getNow(),
                this.ed = e,
                this.spd = o,
                this.ts = f(),
                this.df = this.ed - this.st,
                this
            }
        },
        this.ishwscroll) {
            this.doc.translate = {
                x: 0,
                y: 0,
                tx: "0px",
                ty: "0px"
            },
            P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"),
            this.getScrollTop = function(e) {
                if (!e) {
                    var o = v();
                    if (o)
                        return 16 == o.length ? -o[13] : -o[5];
                    if (T.timerscroll && T.timerscroll.bz)
                        return T.timerscroll.bz.getNow()
                }
                return T.doc.translate.y
            }
            ,
            this.getScrollLeft = function(e) {
                if (!e) {
                    var o = v();
                    if (o)
                        return 16 == o.length ? -o[12] : -o[4];
                    if (T.timerscroll && T.timerscroll.bh)
                        return T.timerscroll.bh.getNow()
                }
                return T.doc.translate.x
            }
            ,
            this.notifyScrollEvent = function(e) {
                var o = l.createEvent("UIEvents");
                o.initUIEvent("scroll", !1, !1, a, 1),
                o.niceevent = !0,
                e.dispatchEvent(o)
            }
            ;
            var _ = this.isrtlmode ? 1 : -1;
            P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function(e, o) {
                T.doc.translate.y = e,
                T.doc.translate.ty = -1 * e + "px",
                T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"),
                o || T.notifyScrollEvent(T.win[0])
            }
            ,
            this.setScrollLeft = function(e, o) {
                T.doc.translate.x = e,
                T.doc.translate.tx = e * _ + "px",
                T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"),
                o || T.notifyScrollEvent(T.win[0])
            }
            ) : (this.setScrollTop = function(e, o) {
                T.doc.translate.y = e,
                T.doc.translate.ty = -1 * e + "px",
                T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"),
                o || T.notifyScrollEvent(T.win[0])
            }
            ,
            this.setScrollLeft = function(e, o) {
                T.doc.translate.x = e,
                T.doc.translate.tx = e * _ + "px",
                T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"),
                o || T.notifyScrollEvent(T.win[0])
            }
            )
        } else
            this.getScrollTop = function() {
                return T.docscroll.scrollTop()
            }
            ,
            this.setScrollTop = function(e) {
                T.docscroll.scrollTop(e)
            }
            ,
            this.getScrollLeft = function() {
                return T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft()
            }
            ,
            this.setScrollLeft = function(e) {
                return setTimeout(function() {
                    if (T)
                        return T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e),
                        T.docscroll.scrollLeft(e)
                }, 1)
            }
            ;
        this.getTarget = function(e) {
            return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
        }
        ,
        this.hasParent = function(e, o) {
            if (!e)
                return !1;
            for (var t = e.target || e.srcElement || e || !1; t && t.id != o; )
                t = t.parentNode || !1;
            return !1 !== t
        }
        ;
        var I = {
            thin: 1,
            medium: 3,
            thick: 5
        };
        this.getDocumentScrollOffset = function() {
            return {
                top: a.pageYOffset || l.documentElement.scrollTop,
                left: a.pageXOffset || l.documentElement.scrollLeft
            }
        }
        ,
        this.getOffset = function() {
            if (T.isfixed) {
                var e = T.win.offset()
                  , o = T.getDocumentScrollOffset();
                return e.top -= o.top,
                e.left -= o.left,
                e
            }
            var t = T.win.offset();
            if (!T.viewport)
                return t;
            var r = T.viewport.offset();
            return {
                top: t.top - r.top,
                left: t.left - r.left
            }
        }
        ,
        this.updateScrollBar = function(e) {
            var o, t;
            if (T.ishwscroll)
                T.rail.css({
                    height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)
                }),
                T.railh && T.railh.css({
                    width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)
                });
            else {
                var r = T.getOffset();
                if (o = {
                    top: r.top,
                    left: r.left - (M.railpadding.left + M.railpadding.right)
                },
                o.top += x(T.win, "border-top-width", !0),
                o.left += T.rail.align ? T.win.outerWidth() - x(T.win, "border-right-width") - T.rail.width : x(T.win, "border-left-width"),
                (t = M.railoffset) && (t.top && (o.top += t.top),
                t.left && (o.left += t.left)),
                T.railslocked || T.rail.css({
                    top: o.top,
                    left: o.left,
                    height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)
                }),
                T.zoom && T.zoom.css({
                    top: o.top + 1,
                    left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4
                }),
                T.railh && !T.railslocked) {
                    o = {
                        top: r.top,
                        left: r.left
                    },
                    (t = M.railhoffset) && (t.top && (o.top += t.top),
                    t.left && (o.left += t.left));
                    var i = T.railh.align ? o.top + x(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + x(T.win, "border-top-width", !0)
                      , s = o.left + x(T.win, "border-left-width");
                    T.railh.css({
                        top: i - (M.railpadding.top + M.railpadding.bottom),
                        left: s,
                        width: T.railh.width
                    })
                }
            }
        }
        ,
        this.doRailClick = function(e, o, t) {
            var r, i, s, n;
            T.railslocked || (T.cancelEvent(e),
            "pageY"in e || (e.pageX = e.clientX + l.documentElement.scrollLeft,
            e.pageY = e.clientY + l.documentElement.scrollTop),
            o ? (r = t ? T.doScrollLeft : T.doScrollTop,
            s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y,
            T.unsynched("relativexy"),
            r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy,
            s = t ? T.scroll.x : T.scroll.y,
            n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top,
            i = t ? T.view.w : T.view.h,
            r(s >= n ? i : -i)))
        }
        ,
        T.newscrolly = T.newscrollx = 0,
        T.hasanimationframe = "requestAnimationFrame"in a,
        T.hascancelanimationframe = "cancelAnimationFrame"in a,
        T.hasborderbox = !1,
        this.init = function() {
            if (T.saved.css = [],
            P.isoperamini)
                return !0;
            if (P.isandroid && !("hidden"in l))
                return !0;
            M.emulatetouch = M.emulatetouch || M.touchbehavior,
            T.hasborderbox = a.getComputedStyle && "border-box" === a.getComputedStyle(l.body)["box-sizing"];
            var e = {
                "overflow-y": "hidden"
            };
            if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"),
            T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"),
            P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)),
            T.zindex = "auto",
            T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = b() || "auto",
            !T.ispage && "auto" != T.zindex && T.zindex > s && (s = T.zindex),
            T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"),
            !T.ispage || !P.isieold) {
                var i = T.docscroll;
                T.ispage && (i = T.haswrapper ? T.win : T.doc),
                T.css(i, e),
                T.ispage && (P.isie11 || P.isie) && T.css(n("html"), e),
                !P.isios || T.ispage || T.haswrapper || T.css(E, {
                    "-webkit-overflow-scrolling": "touch"
                });
                var d = n(l.createElement("div"));
                d.css({
                    position: "relative",
                    top: 0,
                    float: "right",
                    width: M.cursorwidth,
                    height: 0,
                    "background-color": M.cursorcolor,
                    border: M.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": M.cursorborderradius,
                    "-moz-border-radius": M.cursorborderradius,
                    "border-radius": M.cursorborderradius
                }),
                d.addClass("nicescroll-cursors"),
                T.cursor = d;
                var u = n(l.createElement("div"));
                u.attr("id", T.id),
                u.addClass("nicescroll-rails nicescroll-rails-vr");
                var h, p, f = ["left", "right", "top", "bottom"];
                for (var g in f)
                    p = f[g],
                    (h = M.railpadding[p] || 0) && u.css("padding-" + p, h + "px");
                u.append(d),
                u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth()),
                u.css({
                    width: u.width + "px",
                    zIndex: T.zindex,
                    background: M.background,
                    cursor: "default"
                }),
                u.visibility = !0,
                u.scrollable = !0,
                u.align = "left" == M.railalign ? 0 : 1,
                T.rail = u,
                T.rail.drag = !1;
                var v = !1;
                !M.boxzoom || T.ispage || P.isieold || (v = l.createElement("div"),
                T.bind(v, "click", T.doZoom),
                T.bind(v, "mouseenter", function() {
                    T.zoom.css("opacity", M.cursoropacitymax)
                }),
                T.bind(v, "mouseleave", function() {
                    T.zoom.css("opacity", M.cursoropacitymin)
                }),
                T.zoom = n(v),
                T.zoom.css({
                    cursor: "pointer",
                    zIndex: T.zindex,
                    backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0 0"
                }),
                M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom),
                P.cantouch && M.gesturezoom && (T.ongesturezoom = function(e) {
                    return e.scale > 1.5 && T.doZoomIn(e),
                    e.scale < .8 && T.doZoomOut(e),
                    T.cancelEvent(e)
                }
                ,
                T.bind(T.win, "gestureend", T.ongesturezoom))),
                T.railh = !1;
                var w;
                if (M.horizrailenabled && (T.css(i, {
                    overflowX: "hidden"
                }),
                (d = n(l.createElement("div"))).css({
                    position: "absolute",
                    top: 0,
                    height: M.cursorwidth,
                    width: 0,
                    backgroundColor: M.cursorcolor,
                    border: M.cursorborder,
                    backgroundClip: "padding-box",
                    "-webkit-border-radius": M.cursorborderradius,
                    "-moz-border-radius": M.cursorborderradius,
                    "border-radius": M.cursorborderradius
                }),
                P.isieold && d.css("overflow", "hidden"),
                d.addClass("nicescroll-cursors"),
                T.cursorh = d,
                (w = n(l.createElement("div"))).attr("id", T.id + "-hr"),
                w.addClass("nicescroll-rails nicescroll-rails-hr"),
                w.height = Math.max(parseFloat(M.cursorwidth), d.outerHeight()),
                w.css({
                    height: w.height + "px",
                    zIndex: T.zindex,
                    background: M.background
                }),
                w.append(d),
                w.visibility = !0,
                w.scrollable = !0,
                w.align = "top" == M.railvalign ? 0 : 1,
                T.railh = w,
                T.railh.drag = !1),
                T.ispage)
                    u.css({
                        position: "fixed",
                        top: 0,
                        height: "100%"
                    }),
                    u.css(u.align ? {
                        right: 0
                    } : {
                        left: 0
                    }),
                    T.body.append(u),
                    T.railh && (w.css({
                        position: "fixed",
                        left: 0,
                        width: "100%"
                    }),
                    w.css(w.align ? {
                        bottom: 0
                    } : {
                        top: 0
                    }),
                    T.body.append(w));
                else {
                    if (T.ishwscroll) {
                        "static" == T.win.css("position") && T.css(T.win, {
                            position: "relative"
                        });
                        var x = "HTML" == T.win[0].nodeName ? T.body : T.win;
                        n(x).scrollTop(0).scrollLeft(0),
                        T.zoom && (T.zoom.css({
                            position: "absolute",
                            top: 1,
                            right: 0,
                            "margin-right": u.width + 4
                        }),
                        x.append(T.zoom)),
                        u.css({
                            position: "absolute",
                            top: 0
                        }),
                        u.css(u.align ? {
                            right: 0
                        } : {
                            left: 0
                        }),
                        x.append(u),
                        w && (w.css({
                            position: "absolute",
                            left: 0,
                            bottom: 0
                        }),
                        w.css(w.align ? {
                            bottom: 0
                        } : {
                            top: 0
                        }),
                        x.append(w))
                    } else {
                        T.isfixed = "fixed" == T.win.css("position");
                        var S = T.isfixed ? "fixed" : "absolute";
                        T.isfixed || (T.viewport = T.getViewport(T.win[0])),
                        T.viewport && (T.body = T.viewport,
                        /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {
                            position: "relative"
                        })),
                        u.css({
                            position: S
                        }),
                        T.zoom && T.zoom.css({
                            position: S
                        }),
                        T.updateScrollBar(),
                        T.body.append(u),
                        T.zoom && T.body.append(T.zoom),
                        T.railh && (w.css({
                            position: S
                        }),
                        T.body.append(w))
                    }
                    P.isios && T.css(T.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }),
                    M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"),
                    P.iswebkit && T.win.css("outline", "none"))
                }
                if (!1 === M.autohidemode ? (T.autohidedom = !1,
                T.rail.css({
                    opacity: M.cursoropacitymax
                }),
                T.railh && T.railh.css({
                    opacity: M.cursoropacitymax
                })) : !0 === M.autohidemode || "leave" === M.autohidemode ? (T.autohidedom = n().add(T.rail),
                P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)),
                T.railh && (T.autohidedom = T.autohidedom.add(T.railh)),
                T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = n().add(T.rail),
                T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = n().add(T.cursor),
                T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1,
                T.hide(),
                T.railslocked = !1),
                P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
                    T.scrollmom = new y(T);
                    T.ontouchstart = function(e) {
                        if (T.locked)
                            return !1;
                        if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                            return !1;
                        if (T.hasmoving = !1,
                        T.scrollmom.timer && (T.triggerScrollEnd(),
                        T.scrollmom.stop()),
                        !T.railslocked) {
                            var o = T.getTarget(e);
                            if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type))
                                return T.stopPropagation(e);
                            var t = "mousedown" === e.type;
                            if (!("clientX"in e) && "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX,
                            e.clientY = e.changedTouches[0].clientY),
                            T.forcescreen) {
                                var r = e;
                                (e = {
                                    original: e.original ? e.original : e
                                }).clientX = r.screenX,
                                e.clientY = r.screenY
                            }
                            if (T.rail.drag = {
                                x: e.clientX,
                                y: e.clientY,
                                sx: T.scroll.x,
                                sy: T.scroll.y,
                                st: T.getScrollTop(),
                                sl: T.getScrollLeft(),
                                pt: 2,
                                dl: !1,
                                tg: o
                            },
                            T.ispage || !M.directionlockdeadzone)
                                T.rail.drag.dl = "f";
                            else {
                                var i = {
                                    w: c.width(),
                                    h: c.height()
                                }
                                  , s = T.getContentSize()
                                  , l = s.h - i.h
                                  , a = s.w - i.w;
                                T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 && "v" : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = a > 0 && "h" : T.rail.drag.ck = !1
                            }
                            if (M.emulatetouch && T.isiframe && P.isie) {
                                var d = T.win.position();
                                T.rail.drag.x += d.left,
                                T.rail.drag.y += d.top
                            }
                            if (T.hasmoving = !1,
                            T.lastmouseup = !1,
                            T.scrollmom.reset(e.clientX, e.clientY),
                            o && t) {
                                if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName))
                                    return P.hasmousecapture && o.setCapture(),
                                    M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick,
                                    o.onclick = function(e) {
                                        if (T.hasmoving)
                                            return !1;
                                        o._onclick.call(this, e)
                                    }
                                    ),
                                    T.cancelEvent(e)) : T.stopPropagation(e);
                                /SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type")) && (T.preventclick = {
                                    tg: o,
                                    click: !1
                                })
                            }
                        }
                    }
                    ,
                    T.ontouchend = function(e) {
                        if (!T.rail.drag)
                            return !0;
                        if (2 == T.rail.drag.pt) {
                            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                                return !1;
                            T.rail.drag = !1;
                            var o = "mouseup" === e.type;
                            if (T.hasmoving && (T.scrollmom.doMomentum(),
                            T.lastmouseup = !0,
                            T.hideCursor(),
                            P.hasmousecapture && l.releaseCapture(),
                            o))
                                return T.cancelEvent(e)
                        } else if (1 == T.rail.drag.pt)
                            return T.onmouseup(e)
                    }
                    ;
                    var z = M.emulatetouch && T.isiframe && !P.hasmousecapture
                      , k = .3 * M.directionlockdeadzone | 0;
                    T.ontouchmove = function(e, o) {
                        if (!T.rail.drag)
                            return !0;
                        if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1)
                            return !0;
                        if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                            return !0;
                        if (2 == T.rail.drag.pt) {
                            "changedTouches"in e && (e.clientX = e.changedTouches[0].clientX,
                            e.clientY = e.changedTouches[0].clientY);
                            var t, r;
                            if (r = t = 0,
                            z && !o) {
                                var i = T.win.position();
                                r = -i.left,
                                t = -i.top
                            }
                            var s = e.clientY + t
                              , n = s - T.rail.drag.y
                              , a = e.clientX + r
                              , c = a - T.rail.drag.x
                              , d = T.rail.drag.st - n;
                            if (T.ishwscroll && M.bouncescroll)
                                d < 0 ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));
                            else if (d < 0 ? (d = 0,
                            s = 0) : d > T.page.maxh && (d = T.page.maxh,
                            s = 0),
                            0 === s && !T.hasmoving)
                                return T.ispage || (T.rail.drag = !1),
                                !0;
                            var u = T.getScrollLeft();
                            if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? c - T.rail.drag.sl : T.rail.drag.sl - c,
                            T.ishwscroll && M.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (u < 0 && (u = 0,
                            a = 0),
                            u > T.page.maxw && (u = T.page.maxw,
                            a = 0))),
                            !T.hasmoving) {
                                if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX)
                                    return T.cancelEvent(e);
                                var h = Math.abs(n)
                                  , p = Math.abs(c)
                                  , m = M.directionlockdeadzone;
                                if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && h <= k ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && p <= k ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"),
                                !T.rail.drag.dl)
                                    return T.cancelEvent(e);
                                T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0),
                                T.hasmoving = !0
                            }
                            return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1,
                            T.preventclick.tg.onclick = T.onpreventclick),
                            T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)),
                            T.synched("touchmove", function() {
                                T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(),
                                T.rail.scrollable && T.setScrollTop(d),
                                T.scrollmom.update(a, s),
                                T.railh && T.railh.scrollable ? (T.setScrollLeft(u),
                                T.showCursor(d, u)) : T.showCursor(d),
                                P.isie10 && l.selection.clear())
                            }),
                            T.cancelEvent(e)
                        }
                        return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0
                    }
                    ,
                    T.ontouchstartCursor = function(e, o) {
                        if (!T.rail.drag || 3 == T.rail.drag.pt) {
                            if (T.locked)
                                return T.cancelEvent(e);
                            T.cancelScroll(),
                            T.rail.drag = {
                                x: e.touches[0].clientX,
                                y: e.touches[0].clientY,
                                sx: T.scroll.x,
                                sy: T.scroll.y,
                                pt: 3,
                                hr: !!o
                            };
                            var t = T.getTarget(e);
                            return !T.ispage && P.hasmousecapture && t.setCapture(),
                            T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"),
                            T.css(T.doc, {
                                "pointer-events": "none"
                            })),
                            T.cancelEvent(e)
                        }
                    }
                    ,
                    T.ontouchendCursor = function(e) {
                        if (T.rail.drag) {
                            if (P.hasmousecapture && l.releaseCapture(),
                            T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents),
                            3 != T.rail.drag.pt)
                                return;
                            return T.rail.drag = !1,
                            T.cancelEvent(e)
                        }
                    }
                    ,
                    T.ontouchmoveCursor = function(e) {
                        if (T.rail.drag) {
                            if (3 != T.rail.drag.pt)
                                return;
                            if (T.cursorfreezed = !0,
                            T.rail.drag.hr) {
                                T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x),
                                T.scroll.x < 0 && (T.scroll.x = 0);
                                var o = T.scrollvaluemaxw;
                                T.scroll.x > o && (T.scroll.x = o)
                            } else {
                                T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y),
                                T.scroll.y < 0 && (T.scroll.y = 0);
                                var t = T.scrollvaluemax;
                                T.scroll.y > t && (T.scroll.y = t)
                            }
                            return T.synched("touchmove", function() {
                                T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(),
                                T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed))
                            }),
                            T.cancelEvent(e)
                        }
                    }
                }
                if (T.onmousedown = function(e, o) {
                    if (!T.rail.drag || 1 == T.rail.drag.pt) {
                        if (T.railslocked)
                            return T.cancelEvent(e);
                        T.cancelScroll(),
                        T.rail.drag = {
                            x: e.clientX,
                            y: e.clientY,
                            sx: T.scroll.x,
                            sy: T.scroll.y,
                            pt: 1,
                            hr: o || !1
                        };
                        var t = T.getTarget(e);
                        return P.hasmousecapture && t.setCapture(),
                        T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"),
                        T.css(T.doc, {
                            "pointer-events": "none"
                        })),
                        T.hasmoving = !1,
                        T.cancelEvent(e)
                    }
                }
                ,
                T.onmouseup = function(e) {
                    if (T.rail.drag)
                        return 1 != T.rail.drag.pt || (P.hasmousecapture && l.releaseCapture(),
                        T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents),
                        T.rail.drag = !1,
                        T.cursorfreezed = !1,
                        T.hasmoving && T.triggerScrollEnd(),
                        T.cancelEvent(e))
                }
                ,
                T.onmousemove = function(e) {
                    if (T.rail.drag) {
                        if (1 !== T.rail.drag.pt)
                            return;
                        if (P.ischrome && 0 === e.which)
                            return T.onmouseup(e);
                        if (T.cursorfreezed = !0,
                        T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0),
                        T.hasmoving = !0,
                        T.rail.drag.hr) {
                            T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x),
                            T.scroll.x < 0 && (T.scroll.x = 0);
                            var o = T.scrollvaluemaxw;
                            T.scroll.x > o && (T.scroll.x = o)
                        } else {
                            T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y),
                            T.scroll.y < 0 && (T.scroll.y = 0);
                            var t = T.scrollvaluemax;
                            T.scroll.y > t && (T.scroll.y = t)
                        }
                        return T.synched("mousemove", function() {
                            T.cursorfreezed && (T.showCursor(),
                            T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)))
                        }),
                        T.cancelEvent(e)
                    }
                    T.checkarea = 0
                }
                ,
                P.cantouch || M.emulatetouch)
                    T.onpreventclick = function(e) {
                        if (T.preventclick)
                            return T.preventclick.tg.onclick = T.preventclick.click,
                            T.preventclick = !1,
                            T.cancelEvent(e)
                    }
                    ,
                    T.onclick = !P.isios && function(e) {
                        return !T.lastmouseup || (T.lastmouseup = !1,
                        T.cancelEvent(e))
                    }
                    ,
                    M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {
                        cursor: P.cursorgrabvalue
                    }),
                    T.css(T.rail, {
                        cursor: P.cursorgrabvalue
                    }));
                else {
                    var L = function(e) {
                        if (T.selectiondrag) {
                            if (e) {
                                var o = T.win.outerHeight()
                                  , t = e.pageY - T.selectiondrag.top;
                                t > 0 && t < o && (t = 0),
                                t >= o && (t -= o),
                                T.selectiondrag.df = t
                            }
                            if (0 !== T.selectiondrag.df) {
                                var r = -2 * T.selectiondrag.df / 6 | 0;
                                T.doScrollBy(r),
                                T.debounced("doselectionscroll", function() {
                                    L()
                                }, 50)
                            }
                        }
                    };
                    T.hasTextSelected = "getSelection"in l ? function() {
                        return l.getSelection().rangeCount > 0
                    }
                    : "selection"in l ? function() {
                        return "None" != l.selection.type
                    }
                    : function() {
                        return !1
                    }
                    ,
                    T.onselectionstart = function(e) {
                        T.ispage || (T.selectiondrag = T.win.offset())
                    }
                    ,
                    T.onselectionend = function(e) {
                        T.selectiondrag = !1
                    }
                    ,
                    T.onselectiondrag = function(e) {
                        T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function() {
                            L(e)
                        }, 250)
                    }
                }
                if (P.hasw3ctouch ? (T.css(T.ispage ? n("html") : T.win, {
                    "touch-action": "none"
                }),
                T.css(T.rail, {
                    "touch-action": "none"
                }),
                T.css(T.cursor, {
                    "touch-action": "none"
                }),
                T.bind(T.win, "pointerdown", T.ontouchstart),
                T.bind(l, "pointerup", T.ontouchend),
                T.delegate(l, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? n("html") : T.win, {
                    "-ms-touch-action": "none"
                }),
                T.css(T.rail, {
                    "-ms-touch-action": "none"
                }),
                T.css(T.cursor, {
                    "-ms-touch-action": "none"
                }),
                T.bind(T.win, "MSPointerDown", T.ontouchstart),
                T.bind(l, "MSPointerUp", T.ontouchend),
                T.delegate(l, "MSPointerMove", T.ontouchmove),
                T.bind(T.cursor, "MSGestureHold", function(e) {
                    e.preventDefault()
                }),
                T.bind(T.cursor, "contextmenu", function(e) {
                    e.preventDefault()
                })) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0),
                T.bind(l, "touchend", T.ontouchend, !1, !0),
                T.bind(l, "touchcancel", T.ontouchend, !1, !0),
                T.delegate(l, "touchmove", T.ontouchmove, !1, !0)),
                M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0),
                T.bind(l, "mouseup", T.ontouchend, !1, !0),
                T.bind(l, "mousemove", T.ontouchmove, !1, !0)),
                (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({
                    cursor: "default"
                }),
                T.railh && T.railh.css({
                    cursor: "default"
                }),
                T.jqbind(T.rail, "mouseenter", function() {
                    if (!T.ispage && !T.win.is(":visible"))
                        return !1;
                    T.canshowonmouseevent && T.showCursor(),
                    T.rail.active = !0
                }),
                T.jqbind(T.rail, "mouseleave", function() {
                    T.rail.active = !1,
                    T.rail.drag || T.hideCursor()
                }),
                M.sensitiverail && (T.bind(T.rail, "click", function(e) {
                    T.doRailClick(e, !1, !1)
                }),
                T.bind(T.rail, "dblclick", function(e) {
                    T.doRailClick(e, !0, !1)
                }),
                T.bind(T.cursor, "click", function(e) {
                    T.cancelEvent(e)
                }),
                T.bind(T.cursor, "dblclick", function(e) {
                    T.cancelEvent(e)
                })),
                T.railh && (T.jqbind(T.railh, "mouseenter", function() {
                    if (!T.ispage && !T.win.is(":visible"))
                        return !1;
                    T.canshowonmouseevent && T.showCursor(),
                    T.rail.active = !0
                }),
                T.jqbind(T.railh, "mouseleave", function() {
                    T.rail.active = !1,
                    T.rail.drag || T.hideCursor()
                }),
                M.sensitiverail && (T.bind(T.railh, "click", function(e) {
                    T.doRailClick(e, !1, !0)
                }),
                T.bind(T.railh, "dblclick", function(e) {
                    T.doRailClick(e, !0, !0)
                }),
                T.bind(T.cursorh, "click", function(e) {
                    T.cancelEvent(e)
                }),
                T.bind(T.cursorh, "dblclick", function(e) {
                    T.cancelEvent(e)
                })))),
                M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor),
                T.bind(T.cursor, "touchmove", T.ontouchmoveCursor),
                T.bind(T.cursor, "touchend", T.ontouchendCursor),
                T.cursorh && T.bind(T.cursorh, "touchstart", function(e) {
                    T.ontouchstartCursor(e, !0)
                }),
                T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor),
                T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)),
                M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.ontouchend),
                T.onclick && T.bind(l, "click", T.onclick),
                M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown),
                T.bind(T.cursor, "mouseup", T.onmouseup),
                T.cursorh && T.bind(T.cursorh, "mousedown", function(e) {
                    T.onmousedown(e, !0)
                }),
                T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function(e) {
                    e.preventDefault()
                }),
                T.railh && T.bind(T.railh, "mousedown", function(e) {
                    e.preventDefault()
                }))) : (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.onmouseup),
                T.bind(l, "mousemove", T.onmousemove),
                T.onclick && T.bind(l, "click", T.onclick),
                T.bind(T.cursor, "mousedown", T.onmousedown),
                T.bind(T.cursor, "mouseup", T.onmouseup),
                T.railh && (T.bind(T.cursorh, "mousedown", function(e) {
                    T.onmousedown(e, !0)
                }),
                T.bind(T.cursorh, "mouseup", T.onmouseup)),
                !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart),
                T.bind(l, "mouseup", T.onselectionend),
                T.bind(T.cursor, "mouseup", T.onselectionend),
                T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend),
                T.bind(l, "mousemove", T.onselectiondrag)),
                T.zoom && (T.jqbind(T.zoom, "mouseenter", function() {
                    T.canshowonmouseevent && T.showCursor(),
                    T.rail.active = !0
                }),
                T.jqbind(T.zoom, "mouseleave", function() {
                    T.rail.active = !1,
                    T.rail.drag || T.hideCursor()
                }))),
                M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel),
                T.mousewheel(T.rail, T.onmousewheel),
                T.railh && T.mousewheel(T.railh, T.onmousewheelhr)),
                T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({
                    tabindex: ++r
                }),
                T.bind(T.win, "focus", function(e) {
                    o = T.getTarget(e).id || T.getTarget(e) || !1,
                    T.hasfocus = !0,
                    T.canshowonmouseevent && T.noticeCursor()
                }),
                T.bind(T.win, "blur", function(e) {
                    o = !1,
                    T.hasfocus = !1
                }),
                T.bind(T.win, "mouseenter", function(e) {
                    t = T.getTarget(e).id || T.getTarget(e) || !1,
                    T.hasmousefocus = !0,
                    T.canshowonmouseevent && T.noticeCursor()
                }),
                T.bind(T.win, "mouseleave", function(e) {
                    t = !1,
                    T.hasmousefocus = !1,
                    T.rail.drag || T.hideCursor()
                })),
                T.onkeypress = function(e) {
                    if (T.railslocked && 0 === T.page.maxh)
                        return !0;
                    e = e || a.event;
                    var r = T.getTarget(e);
                    if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!(r.getAttribute("type") || r.type || !1) || !/submit|button|cancel/i.tp))
                        return !0;
                    if (n(r).attr("contenteditable"))
                        return !0;
                    if (T.hasfocus || T.hasmousefocus && !o || T.ispage && !o && !t) {
                        var i = e.keyCode;
                        if (T.railslocked && 27 != i)
                            return T.cancelEvent(e);
                        var s = e.ctrlKey || !1
                          , l = e.shiftKey || !1
                          , c = !1;
                        switch (i) {
                        case 38:
                        case 63233:
                            T.doScrollBy(72),
                            c = !0;
                            break;
                        case 40:
                        case 63235:
                            T.doScrollBy(-72),
                            c = !0;
                            break;
                        case 37:
                        case 63232:
                            T.railh && (s ? T.doScrollLeft(0) : T.doScrollLeftBy(72),
                            c = !0);
                            break;
                        case 39:
                        case 63234:
                            T.railh && (s ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72),
                            c = !0);
                            break;
                        case 33:
                        case 63276:
                            T.doScrollBy(T.view.h),
                            c = !0;
                            break;
                        case 34:
                        case 63277:
                            T.doScrollBy(-T.view.h),
                            c = !0;
                            break;
                        case 36:
                        case 63273:
                            T.railh && s ? T.doScrollPos(0, 0) : T.doScrollTo(0),
                            c = !0;
                            break;
                        case 35:
                        case 63275:
                            T.railh && s ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh),
                            c = !0;
                            break;
                        case 32:
                            M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h),
                            c = !0);
                            break;
                        case 27:
                            T.zoomactive && (T.doZoom(),
                            c = !0)
                        }
                        if (c)
                            return T.cancelEvent(e)
                    }
                }
                ,
                M.enablekeyboard && T.bind(l, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress),
                T.bind(l, "keydown", function(e) {
                    (e.ctrlKey || !1) && (T.wheelprevented = !0)
                }),
                T.bind(l, "keyup", function(e) {
                    e.ctrlKey || !1 || (T.wheelprevented = !1)
                }),
                T.bind(a, "blur", function(e) {
                    T.wheelprevented = !1
                }),
                T.bind(a, "resize", T.onscreenresize),
                T.bind(a, "orientationchange", T.onscreenresize),
                T.bind(a, "load", T.lazyResize),
                P.ischrome && !T.ispage && !T.haswrapper) {
                    var C = T.win.attr("style")
                      , N = parseFloat(T.win.css("width")) + 1;
                    T.win.css("width", N),
                    T.synched("chromefix", function() {
                        T.win.attr("style", C)
                    })
                }
                if (T.onAttributeChange = function(e) {
                    T.lazyResize(T.isieold ? 250 : 30)
                }
                ,
                M.enableobserver && (T.isie11 || !1 === m || (T.observerbody = new m(function(e) {
                    if (e.forEach(function(e) {
                        if ("attributes" == e.type)
                            return E.hasClass("modal-open") && E.hasClass("modal-dialog") && !n.contains(n(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show()
                    }),
                    T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height)
                        return T.lazyResize(30)
                }
                ),
                T.observerbody.observe(l.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"]
                })),
                !T.ispage && !T.haswrapper)) {
                    var R = T.win[0];
                    !1 !== m ? (T.observer = new m(function(e) {
                        e.forEach(T.onAttributeChange)
                    }
                    ),
                    T.observer.observe(R, {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1
                    }),
                    T.observerremover = new m(function(e) {
                        e.forEach(function(e) {
                            if (e.removedNodes.length > 0)
                                for (var o in e.removedNodes)
                                    if (T && e.removedNodes[o] === R)
                                        return T.remove()
                        })
                    }
                    ),
                    T.observerremover.observe(R.parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange),
                    P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange),
                    T.bind(R, "DOMNodeRemoved", function(e) {
                        e.target === R && T.remove()
                    }))
                }
                !T.ispage && M.boxzoom && T.bind(a, "resize", T.resizeZoom),
                T.istextarea && (T.bind(T.win, "keydown", T.lazyResize),
                T.bind(T.win, "mouseup", T.lazyResize)),
                T.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var _ = function() {
                    T.iframexd = !1;
                    var o;
                    try {
                        (o = "contentDocument"in this ? this.contentDocument : this.contentWindow._doc).domain
                    } catch (e) {
                        T.iframexd = !0,
                        o = !1
                    }
                    if (T.iframexd)
                        return "console"in a && console.log("NiceScroll error: policy restriced iframe"),
                        !0;
                    if (T.forcescreen = !0,
                    T.isiframe && (T.iframe = {
                        doc: n(o),
                        html: T.doc.contents().find("html")[0],
                        body: T.doc.contents().find("body")[0]
                    },
                    T.getContentSize = function() {
                        return {
                            w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth),
                            h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)
                        }
                    }
                    ,
                    T.docscroll = n(T.iframe.body)),
                    !P.isios && M.iframeautoresize && !T.isiframe) {
                        T.win.scrollTop(0),
                        T.doc.height("");
                        var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
                        T.doc.height(t)
                    }
                    T.lazyResize(30),
                    T.css(n(T.iframe.body), e),
                    P.isios && T.haswrapper && T.css(n(o.body), {
                        "-webkit-transform": "translate3d(0,0,0)"
                    }),
                    "contentWindow"in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll),
                    M.enablemousewheel && T.mousewheel(o, T.onmousewheel),
                    M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress),
                    P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart),
                    T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart),
                    T.bind(o, "mousemove", function(e) {
                        return T.ontouchmove(e, !0)
                    }),
                    M.grabcursorenabled && P.cursorgrabvalue && T.css(n(o.body), {
                        cursor: P.cursorgrabvalue
                    })),
                    T.bind(o, "mouseup", T.ontouchend),
                    T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom),
                    T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom))
                };
                this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function() {
                    _.call(T.doc[0], !1)
                }, 500),
                T.bind(this.doc, "load", _)
            }
        }
        ,
        this.showCursor = function(e, o) {
            if (T.cursortimeout && (clearTimeout(T.cursortimeout),
            T.cursortimeout = 0),
            T.rail) {
                if (T.autohidedom && (T.autohidedom.stop().css({
                    opacity: M.cursoropacitymax
                }),
                T.cursoractive = !0),
                T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && !1 !== e && (T.scroll.y = e / T.scrollratio.y | 0),
                void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)),
                T.cursor.css({
                    height: T.cursorheight,
                    top: T.scroll.y
                }),
                T.cursorh) {
                    var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
                    T.cursorh.css({
                        width: T.cursorwidth,
                        left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t
                    }),
                    T.cursoractive = !0
                }
                T.zoom && T.zoom.stop().css({
                    opacity: M.cursoropacitymax
                })
            }
        }
        ,
        this.hideCursor = function(e) {
            T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function() {
                T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({
                    opacity: M.cursoropacitymin
                }),
                T.zoom && T.zoom.stop().animate({
                    opacity: M.cursoropacitymin
                }),
                T.cursoractive = !1),
                T.cursortimeout = 0
            }, e || M.hidecursordelay)))
        }
        ,
        this.noticeCursor = function(e, o, t) {
            T.showCursor(o, t),
            T.rail.active || T.hideCursor(e)
        }
        ,
        this.getContentSize = T.ispage ? function() {
            return {
                w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth),
                h: Math.max(l.body.scrollHeight, l.documentElement.scrollHeight)
            }
        }
        : T.haswrapper ? function() {
            return {
                w: T.doc[0].offsetWidth,
                h: T.doc[0].offsetHeight
            }
        }
        : function() {
            return {
                w: T.docscroll[0].scrollWidth,
                h: T.docscroll[0].scrollHeight
            }
        }
        ,
        this.onResize = function(e, o) {
            if (!T || !T.win)
                return !1;
            var t = T.page.maxh
              , r = T.page.maxw
              , i = T.view.h
              , s = T.view.w;
            if (T.view = {
                w: T.ispage ? T.win.width() : T.win[0].clientWidth,
                h: T.ispage ? T.win.height() : T.win[0].clientHeight
            },
            T.page = o || T.getContentSize(),
            T.page.maxh = Math.max(0, T.page.h - T.view.h),
            T.page.maxw = Math.max(0, T.page.w - T.view.w),
            T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
                if (T.ispage)
                    return T;
                var n = T.win.offset();
                if (T.lastposition) {
                    var l = T.lastposition;
                    if (l.top == n.top && l.left == n.left)
                        return T
                }
                T.lastposition = n
            }
            return 0 === T.page.maxh ? (T.hideRail(),
            T.scrollvaluemax = 0,
            T.scroll.y = 0,
            T.scrollratio.y = 0,
            T.cursorheight = 0,
            T.setScrollTop(0),
            T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom,
            T.rail.scrollable = !0),
            0 === T.page.maxw ? (T.hideRailHr(),
            T.scrollvaluemaxw = 0,
            T.scroll.x = 0,
            T.scrollratio.x = 0,
            T.cursorwidth = 0,
            T.setScrollLeft(0),
            T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right,
            T.railh && (T.railh.scrollable = M.horizrailenabled)),
            T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw,
            T.railslocked ? (T.ispage || T.updateScrollBar(T.view),
            !1) : (T.hidden || (T.rail.visibility || T.showRail(),
            T.railh && !T.railh.visibility && T.showRailHr()),
            T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20),
            T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))),
            T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight),
            T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))),
            T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth),
            T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom),
            T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight),
            T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w,
            T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)),
            T.ispage || T.updateScrollBar(T.view),
            T.scrollratio = {
                x: T.page.maxw / T.scrollvaluemaxw,
                y: T.page.maxh / T.scrollvaluemax
            },
            T.getScrollTop() > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0,
            T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0,
            T.cursoractive && T.noticeCursor()),
            T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0),
            T)
        }
        ,
        this.resize = T.onResize;
        var O = 0;
        this.onscreenresize = function(e) {
            clearTimeout(O);
            var o = !T.ispage && !T.haswrapper;
            o && T.hideRails(),
            O = setTimeout(function() {
                T && (o && T.showRails(),
                T.resize()),
                O = 0
            }, 120)
        }
        ,
        this.lazyResize = function(e) {
            return clearTimeout(O),
            e = isNaN(e) ? 240 : e,
            O = setTimeout(function() {
                T && T.resize(),
                O = 0
            }, e),
            T
        }
        ,
        this.jqbind = function(e, o, t) {
            T.events.push({
                e: e,
                n: o,
                f: t,
                q: !0
            }),
            n(e).on(o, t)
        }
        ,
        this.mousewheel = function(e, o, t) {
            var r = "jquery"in e ? e[0] : e;
            if ("onwheel"in l.createElement("div"))
                T._bind(r, "wheel", o, t || !1);
            else {
                var i = void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                S(r, i, o, t || !1),
                "DOMMouseScroll" == i && S(r, "MozMousePixelScroll", o, t || !1)
            }
        }
        ;
        var Y = !1;
        if (P.haseventlistener) {
            try {
                var H = Object.defineProperty({}, "passive", {
                    get: function() {
                        Y = !0
                    }
                });
                a.addEventListener("test", null, H)
            } catch (e) {}
            this.stopPropagation = function(e) {
                return !!e && ((e = e.original ? e.original : e).stopPropagation(),
                !1)
            }
            ,
            this.cancelEvent = function(e) {
                return e.cancelable && e.preventDefault(),
                e.stopImmediatePropagation(),
                e.preventManipulation && e.preventManipulation(),
                !1
            }
        } else
            Event.prototype.preventDefault = function() {
                this.returnValue = !1
            }
            ,
            Event.prototype.stopPropagation = function() {
                this.cancelBubble = !0
            }
            ,
            a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function(e, o, t) {
                this.attachEvent("on" + e, o)
            }
            ,
            a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function(e, o, t) {
                this.detachEvent("on" + e, o)
            }
            ,
            this.cancelEvent = function(e) {
                return (e = e || a.event) && (e.cancelBubble = !0,
                e.cancel = !0,
                e.returnValue = !1),
                !1
            }
            ,
            this.stopPropagation = function(e) {
                return (e = e || a.event) && (e.cancelBubble = !0),
                !1
            }
            ;
        this.delegate = function(e, o, t, r, i) {
            var s = d[o] || !1;
            s || (s = {
                a: [],
                l: [],
                f: function(e) {
                    for (var o = s.l, t = !1, r = o.length - 1; r >= 0; r--)
                        if (!1 === (t = o[r].call(e.target, e)))
                            return !1;
                    return t
                }
            },
            T.bind(e, o, s.f, r, i),
            d[o] = s),
            T.ispage ? (s.a = [T.id].concat(s.a),
            s.l = [t].concat(s.l)) : (s.a.push(T.id),
            s.l.push(t))
        }
        ,
        this.undelegate = function(e, o, t, r, i) {
            var s = d[o] || !1;
            if (s && s.l)
                for (var n = 0, l = s.l.length; n < l; n++)
                    s.a[n] === T.id && (s.a.splice(n),
                    s.l.splice(n),
                    0 === s.a.length && (T._unbind(e, o, s.l.f),
                    d[o] = null))
        }
        ,
        this.bind = function(e, o, t, r, i) {
            var s = "jquery"in e ? e[0] : e;
            T._bind(s, o, t, r || !1, i || !1)
        }
        ,
        this._bind = function(e, o, t, r, i) {
            T.events.push({
                e: e,
                n: o,
                f: t,
                b: r,
                q: !1
            }),
            Y && i ? e.addEventListener(o, t, {
                passive: !1,
                capture: r
            }) : e.addEventListener(o, t, r || !1)
        }
        ,
        this._unbind = function(e, o, t, r) {
            d[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r)
        }
        ,
        this.unbindAll = function() {
            for (var e = 0; e < T.events.length; e++) {
                var o = T.events[e];
                o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b)
            }
        }
        ,
        this.showRails = function() {
            return T.showRail().showRailHr()
        }
        ,
        this.showRail = function() {
            return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0,
            T.rail.css("display", "block")),
            T
        }
        ,
        this.showRailHr = function() {
            return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0,
            T.railh.css("display", "block"))),
            T
        }
        ,
        this.hideRails = function() {
            return T.hideRail().hideRailHr()
        }
        ,
        this.hideRail = function() {
            return T.rail.visibility = !1,
            T.rail.css("display", "none"),
            T
        }
        ,
        this.hideRailHr = function() {
            return T.railh && (T.railh.visibility = !1,
            T.railh.css("display", "none")),
            T
        }
        ,
        this.show = function() {
            return T.hidden = !1,
            T.railslocked = !1,
            T.showRails()
        }
        ,
        this.hide = function() {
            return T.hidden = !0,
            T.railslocked = !0,
            T.hideRails()
        }
        ,
        this.toggle = function() {
            return T.hidden ? T.show() : T.hide()
        }
        ,
        this.remove = function() {
            T.stop(),
            T.cursortimeout && clearTimeout(T.cursortimeout);
            for (var e in T.delaylist)
                T.delaylist[e] && h(T.delaylist[e].h);
            T.doZoomOut(),
            T.unbindAll(),
            P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange),
            !1 !== T.observer && T.observer.disconnect(),
            !1 !== T.observerremover && T.observerremover.disconnect(),
            !1 !== T.observerbody && T.observerbody.disconnect(),
            T.events = null,
            T.cursor && T.cursor.remove(),
            T.cursorh && T.cursorh.remove(),
            T.rail && T.rail.remove(),
            T.railh && T.railh.remove(),
            T.zoom && T.zoom.remove();
            for (var o = 0; o < T.saved.css.length; o++) {
                var t = T.saved.css[o];
                t[0].css(t[1], void 0 === t[2] ? "" : t[2])
            }
            T.saved = !1,
            T.me.data("__nicescroll", "");
            var r = n.nicescroll;
            r.each(function(e) {
                if (this && this.id === T.id) {
                    delete r[e];
                    for (var o = ++e; o < r.length; o++,
                    e++)
                        r[e] = r[o];
                    --r.length && delete r[r.length]
                }
            });
            for (var i in T)
                T[i] = null,
                delete T[i];
            T = null
        }
        ,
        this.scrollstart = function(e) {
            return this.onscrollstart = e,
            T
        }
        ,
        this.scrollend = function(e) {
            return this.onscrollend = e,
            T
        }
        ,
        this.scrollcancel = function(e) {
            return this.onscrollcancel = e,
            T
        }
        ,
        this.zoomin = function(e) {
            return this.onzoomin = e,
            T
        }
        ,
        this.zoomout = function(e) {
            return this.onzoomout = e,
            T
        }
        ,
        this.isScrollable = function(e) {
            var o = e.target ? e.target : e;
            if ("OPTION" == o.nodeName)
                return !0;
            for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName); ) {
                var t = n(o)
                  , r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r))
                    return o.clientHeight != o.scrollHeight;
                o = !!o.parentNode && o.parentNode
            }
            return !1
        }
        ,
        this.getViewport = function(e) {
            for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName); ) {
                var t = n(o);
                if (/fixed|absolute/.test(t.css("position")))
                    return t;
                var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight)
                    return t;
                if (t.getNiceScroll().length > 0)
                    return t;
                o = !!o.parentNode && o.parentNode
            }
            return !1
        }
        ,
        this.triggerScrollStart = function(e, o, t, r, i) {
            if (T.onscrollstart) {
                var s = {
                    type: "scrollstart",
                    current: {
                        x: e,
                        y: o
                    },
                    request: {
                        x: t,
                        y: r
                    },
                    end: {
                        x: T.newscrollx,
                        y: T.newscrolly
                    },
                    speed: i
                };
                T.onscrollstart.call(T, s)
            }
        }
        ,
        this.triggerScrollEnd = function() {
            if (T.onscrollend) {
                var e = T.getScrollLeft()
                  , o = T.getScrollTop()
                  , t = {
                    type: "scrollend",
                    current: {
                        x: e,
                        y: o
                    },
                    end: {
                        x: e,
                        y: o
                    }
                };
                T.onscrollend.call(T, t)
            }
        }
        ;
        var B = 0
          , X = 0
          , D = 0
          , A = 1
          , q = !1;
        if (this.onmousewheel = function(e) {
            if (T.wheelprevented || T.locked)
                return !1;
            if (T.railslocked)
                return T.debounced("checkunlock", T.resize, 250),
                !1;
            if (T.rail.drag)
                return T.cancelEvent(e);
            if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1),
            M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable)
                return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
            var o = f()
              , t = !1;
            if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e),
            t = !0),
            T.checkarea = o,
            T.nativescrollingarea)
                return !0;
            var r = k(e, !1, t);
            return r && (T.checkarea = 0),
            r
        }
        ,
        this.onmousewheelhr = function(e) {
            if (!T.wheelprevented) {
                if (T.railslocked || !T.railh.scrollable)
                    return !0;
                if (T.rail.drag)
                    return T.cancelEvent(e);
                var o = f()
                  , t = !1;
                return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e),
                t = !0),
                T.checkarea = o,
                !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, !0, t))
            }
        }
        ,
        this.stop = function() {
            return T.cancelScroll(),
            T.scrollmon && T.scrollmon.stop(),
            T.cursorfreezed = !1,
            T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)),
            T.noticeCursor(),
            T
        }
        ,
        this.getTransitionSpeed = function(e) {
            return 80 + e / 72 * M.scrollspeed | 0
        }
        ,
        M.smoothscroll)
            if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
                var j = "";
                this.resetTransition = function() {
                    j = "",
                    T.doc.css(P.prefixstyle + "transition-duration", "0ms")
                }
                ,
                this.prepareTransition = function(e, o) {
                    var t = o ? e : T.getTransitionSpeed(e)
                      , r = t + "ms";
                    return j !== r && (j = r,
                    T.doc.css(P.prefixstyle + "transition-duration", r)),
                    t
                }
                ,
                this.doScrollLeft = function(e, o) {
                    var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                    T.doScrollPos(e, t, o)
                }
                ,
                this.doScrollTop = function(e, o) {
                    var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                    T.doScrollPos(t, e, o)
                }
                ,
                this.cursorupdate = {
                    running: !1,
                    start: function() {
                        var e = this;
                        if (!e.running) {
                            e.running = !0;
                            var o = function() {
                                e.running && u(o),
                                T.showCursor(T.getScrollTop(), T.getScrollLeft()),
                                T.notifyScrollEvent(T.win[0])
                            };
                            u(o)
                        }
                    },
                    stop: function() {
                        this.running = !1
                    }
                },
                this.doScrollPos = function(e, o, t) {
                    var r = T.getScrollTop()
                      , i = T.getScrollLeft();
                    if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(),
                    M.bouncescroll ? (o < 0 ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0),
                    e < 0 ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (o < 0 ? o = 0 : o > T.page.maxh && (o = T.page.maxh),
                    e < 0 ? e = 0 : e > T.page.maxw && (e = T.page.maxw)),
                    T.scrollrunning && e == T.newscrollx && o == T.newscrolly)
                        return !1;
                    T.newscrolly = o,
                    T.newscrollx = e;
                    var s = T.getScrollTop()
                      , n = T.getScrollLeft()
                      , l = {};
                    l.x = e - n,
                    l.y = o - s;
                    var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y)
                      , c = T.prepareTransition(a);
                    T.scrollrunning || (T.scrollrunning = !0,
                    T.triggerScrollStart(n, s, e, o, c),
                    T.cursorupdate.start()),
                    T.scrollendtrapped = !0,
                    P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped),
                    T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)),
                    T.setScrollTop(T.newscrolly),
                    T.setScrollLeft(T.newscrollx)
                }
                ,
                this.cancelScroll = function() {
                    if (!T.scrollendtrapped)
                        return !0;
                    var e = T.getScrollTop()
                      , o = T.getScrollLeft();
                    return T.scrollrunning = !1,
                    P.transitionend || clearTimeout(P.transitionend),
                    T.scrollendtrapped = !1,
                    T.resetTransition(),
                    T.setScrollTop(e),
                    T.railh && T.setScrollLeft(o),
                    T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm),
                    T.timerscroll = !1,
                    T.cursorfreezed = !1,
                    T.cursorupdate.stop(),
                    T.showCursor(e, o),
                    T
                }
                ,
                this.onScrollTransitionEnd = function() {
                    if (T.scrollendtrapped) {
                        var e = T.getScrollTop()
                          , o = T.getScrollLeft();
                        if (e < 0 ? e = 0 : e > T.page.maxh && (e = T.page.maxh),
                        o < 0 ? o = 0 : o > T.page.maxw && (o = T.page.maxw),
                        e != T.newscrolly || o != T.newscrollx)
                            return T.doScrollPos(o, e, M.snapbackspeed);
                        T.scrollrunning && T.triggerScrollEnd(),
                        T.scrollrunning = !1,
                        T.scrollendtrapped = !1,
                        T.resetTransition(),
                        T.timerscroll = !1,
                        T.setScrollTop(e),
                        T.railh && T.setScrollLeft(o),
                        T.cursorupdate.stop(),
                        T.noticeCursor(!1, e, o),
                        T.cursorfreezed = !1
                    }
                }
            } else
                this.doScrollLeft = function(e, o) {
                    var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                    T.doScrollPos(e, t, o)
                }
                ,
                this.doScrollTop = function(e, o) {
                    var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                    T.doScrollPos(t, e, o)
                }
                ,
                this.doScrollPos = function(e, o, t) {
                    var r = T.getScrollTop()
                      , i = T.getScrollLeft();
                    ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
                    var s = !1;
                    if (T.bouncescroll && T.rail.visibility || (o < 0 ? (o = 0,
                    s = !0) : o > T.page.maxh && (o = T.page.maxh,
                    s = !0)),
                    T.bouncescroll && T.railh.visibility || (e < 0 ? (e = 0,
                    s = !0) : e > T.page.maxw && (e = T.page.maxw,
                    s = !0)),
                    T.scrollrunning && T.newscrolly === o && T.newscrollx === e)
                        return !0;
                    T.newscrolly = o,
                    T.newscrollx = e,
                    T.dst = {},
                    T.dst.x = e - i,
                    T.dst.y = o - r,
                    T.dst.px = i,
                    T.dst.py = r;
                    var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y)
                      , l = T.getTransitionSpeed(n);
                    T.bzscroll = {};
                    var a = s ? 1 : .58;
                    T.bzscroll.x = new R(i,T.newscrollx,l,0,0,a,1),
                    T.bzscroll.y = new R(r,T.newscrolly,l,0,0,a,1);
                    f();
                    var c = function() {
                        if (T.scrollrunning) {
                            var e = T.bzscroll.y.getPos();
                            T.setScrollLeft(T.bzscroll.x.getNow()),
                            T.setScrollTop(T.bzscroll.y.getNow()),
                            e <= 1 ? T.timer = u(c) : (T.scrollrunning = !1,
                            T.timer = 0,
                            T.triggerScrollEnd())
                        }
                    };
                    T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l),
                    T.scrollrunning = !0,
                    T.timer = u(c))
                }
                ,
                this.cancelScroll = function() {
                    return T.timer && h(T.timer),
                    T.timer = 0,
                    T.bzscroll = !1,
                    T.scrollrunning = !1,
                    T
                }
                ;
        else
            this.doScrollLeft = function(e, o) {
                var t = T.getScrollTop();
                T.doScrollPos(e, t, o)
            }
            ,
            this.doScrollTop = function(e, o) {
                var t = T.getScrollLeft();
                T.doScrollPos(t, e, o)
            }
            ,
            this.doScrollPos = function(e, o, t) {
                var r = e > T.page.maxw ? T.page.maxw : e;
                r < 0 && (r = 0);
                var i = o > T.page.maxh ? T.page.maxh : o;
                i < 0 && (i = 0),
                T.synched("scroll", function() {
                    T.setScrollTop(i),
                    T.setScrollLeft(r)
                })
            }
            ,
            this.cancelScroll = function() {}
            ;
        this.doScrollBy = function(e, o) {
            z(0, e)
        }
        ,
        this.doScrollLeftBy = function(e, o) {
            z(e, 0)
        }
        ,
        this.doScrollTo = function(e, o) {
            var t = o ? Math.round(e * T.scrollratio.y) : e;
            t < 0 ? t = 0 : t > T.page.maxh && (t = T.page.maxh),
            T.cursorfreezed = !1,
            T.doScrollTop(e)
        }
        ,
        this.checkContentSize = function() {
            var e = T.getContentSize();
            e.h == T.page.h && e.w == T.page.w || T.resize(!1, e)
        }
        ,
        T.onscroll = function(e) {
            T.rail.drag || T.cursorfreezed || T.synched("scroll", function() {
                T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y),
                T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)),
                T.noticeCursor()
            })
        }
        ,
        T.bind(T.docscroll, "scroll", T.onscroll),
        this.doZoomIn = function(e) {
            if (!T.zoomactive) {
                T.zoomactive = !0,
                T.zoomrestore = {
                    style: {}
                };
                var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"]
                  , t = T.win[0].style;
                for (var r in o) {
                    var i = o[r];
                    T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : ""
                }
                T.zoomrestore.style.width = T.win.css("width"),
                T.zoomrestore.style.height = T.win.css("height"),
                T.zoomrestore.padding = {
                    w: T.win.outerWidth() - T.win.width(),
                    h: T.win.outerHeight() - T.win.height()
                },
                P.isios4 && (T.zoomrestore.scrollTop = c.scrollTop(),
                c.scrollTop(0)),
                T.win.css({
                    position: P.isios4 ? "absolute" : "fixed",
                    top: 0,
                    left: 0,
                    zIndex: s + 100,
                    margin: 0
                });
                var n = T.win.css("backgroundColor");
                return ("" === n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && T.win.css("backgroundColor", "#fff"),
                T.rail.css({
                    zIndex: s + 101
                }),
                T.zoom.css({
                    zIndex: s + 102
                }),
                T.zoom.css("backgroundPosition", "0 -18px"),
                T.resizeZoom(),
                T.onzoomin && T.onzoomin.call(T),
                T.cancelEvent(e)
            }
        }
        ,
        this.doZoomOut = function(e) {
            if (T.zoomactive)
                return T.zoomactive = !1,
                T.win.css("margin", ""),
                T.win.css(T.zoomrestore.style),
                P.isios4 && c.scrollTop(T.zoomrestore.scrollTop),
                T.rail.css({
                    "z-index": T.zindex
                }),
                T.zoom.css({
                    "z-index": T.zindex
                }),
                T.zoomrestore = !1,
                T.zoom.css("backgroundPosition", "0 0"),
                T.onResize(),
                T.onzoomout && T.onzoomout.call(T),
                T.cancelEvent(e)
        }
        ,
        this.doZoom = function(e) {
            return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e)
        }
        ,
        this.resizeZoom = function() {
            if (T.zoomactive) {
                var e = T.getScrollTop();
                T.win.css({
                    width: c.width() - T.zoomrestore.padding.w + "px",
                    height: c.height() - T.zoomrestore.padding.h + "px"
                }),
                T.onResize(),
                T.setScrollTop(Math.min(T.page.maxh, e))
            }
        }
        ,
        this.init(),
        n.nicescroll.push(this)
    }
      , y = function(e) {
        var o = this;
        this.nc = e,
        this.lastx = 0,
        this.lasty = 0,
        this.speedx = 0,
        this.speedy = 0,
        this.lasttime = 0,
        this.steptime = 0,
        this.snapx = !1,
        this.snapy = !1,
        this.demulx = 0,
        this.demuly = 0,
        this.lastscrollx = -1,
        this.lastscrolly = -1,
        this.chkx = 0,
        this.chky = 0,
        this.timer = 0,
        this.reset = function(e, t) {
            o.stop(),
            o.steptime = 0,
            o.lasttime = f(),
            o.speedx = 0,
            o.speedy = 0,
            o.lastx = e,
            o.lasty = t,
            o.lastscrollx = -1,
            o.lastscrolly = -1
        }
        ,
        this.update = function(e, t) {
            var r = f();
            o.steptime = r - o.lasttime,
            o.lasttime = r;
            var i = t - o.lasty
              , s = e - o.lastx
              , n = o.nc.getScrollTop() + i
              , l = o.nc.getScrollLeft() + s;
            o.snapx = l < 0 || l > o.nc.page.maxw,
            o.snapy = n < 0 || n > o.nc.page.maxh,
            o.speedx = s,
            o.speedy = i,
            o.lastx = e,
            o.lasty = t
        }
        ,
        this.stop = function() {
            o.nc.unsynched("domomentum2d"),
            o.timer && clearTimeout(o.timer),
            o.timer = 0,
            o.lastscrollx = -1,
            o.lastscrolly = -1
        }
        ,
        this.doSnapy = function(e, t) {
            var r = !1;
            t < 0 ? (t = 0,
            r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh,
            r = !0),
            e < 0 ? (e = 0,
            r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw,
            r = !0),
            r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
        }
        ,
        this.doMomentum = function(e) {
            var t = f()
              , r = e ? t + e : o.lasttime
              , i = o.nc.getScrollLeft()
              , s = o.nc.getScrollTop()
              , n = o.nc.page.maxh
              , l = o.nc.page.maxw;
            o.speedx = l > 0 ? Math.min(60, o.speedx) : 0,
            o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
            var a = r && t - r <= 60;
            (s < 0 || s > n || i < 0 || i > l) && (a = !1);
            var c = !(!o.speedy || !a) && o.speedy
              , d = !(!o.speedx || !a) && o.speedx;
            if (c || d) {
                var u = Math.max(16, o.steptime);
                if (u > 50) {
                    var h = u / 50;
                    o.speedx *= h,
                    o.speedy *= h,
                    u = 50
                }
                o.demulxy = 0,
                o.lastscrollx = o.nc.getScrollLeft(),
                o.chkx = o.lastscrollx,
                o.lastscrolly = o.nc.getScrollTop(),
                o.chky = o.lastscrolly;
                var p = o.lastscrollx
                  , m = o.lastscrolly
                  , g = function() {
                    var e = f() - t > 600 ? .04 : .02;
                    o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)),
                    o.lastscrollx = p,
                    (p < 0 || p > l) && (e = .1)),
                    o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)),
                    o.lastscrolly = m,
                    (m < 0 || m > n) && (e = .1)),
                    o.demulxy = Math.min(1, o.demulxy + e),
                    o.nc.synched("domomentum2d", function() {
                        if (o.speedx) {
                            o.nc.getScrollLeft();
                            o.chkx = p,
                            o.nc.setScrollLeft(p)
                        }
                        if (o.speedy) {
                            o.nc.getScrollTop();
                            o.chky = m,
                            o.nc.setScrollTop(m)
                        }
                        o.timer || (o.nc.hideCursor(),
                        o.doSnapy(p, m))
                    }),
                    o.demulxy < 1 ? o.timer = setTimeout(g, u) : (o.stop(),
                    o.nc.hideCursor(),
                    o.doSnapy(p, m))
                };
                g()
            } else
                o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
        }
    }
      , x = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function(e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollTop() : x.call(e)
        },
        set: function(e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o),
            this
        }
    },
    e.fn.scrollTop = function(e) {
        if (void 0 === e) {
            var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollTop() : x.call(this)
        }
        return this.each(function() {
            var o = n.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : x.call(n(this), e)
        })
    }
    ;
    var S = e.fn.scrollLeft;
    n.cssHooks.pageXOffset = {
        get: function(e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollLeft() : S.call(e)
        },
        set: function(e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o),
            this
        }
    },
    e.fn.scrollLeft = function(e) {
        if (void 0 === e) {
            var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollLeft() : S.call(this)
        }
        return this.each(function() {
            var o = n.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : S.call(n(this), e)
        })
    }
    ;
    var z = function(e) {
        var o = this;
        if (this.length = 0,
        this.name = "nicescrollarray",
        this.each = function(e) {
            return n.each(o, e),
            o
        }
        ,
        this.push = function(e) {
            o[o.length] = e,
            o.length++
        }
        ,
        this.eq = function(e) {
            return o[e]
        }
        ,
        e)
            for (var t = 0; t < e.length; t++) {
                var r = n.data(e[t], "__nicescroll") || !1;
                r && (this[this.length] = r,
                this.length++)
            }
        return this
    };
    !function(e, o, t) {
        for (var r = 0, i = o.length; r < i; r++)
            t(e, o[r])
    }(z.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function(e, o) {
        e[o] = function() {
            var e = arguments;
            return this.each(function() {
                this[o].apply(this, e)
            })
        }
    }),
    e.fn.getNiceScroll = function(e) {
        return void 0 === e ? new z(this) : this[e] && n.data(this[e], "__nicescroll") || !1
    }
    ,
    (e.expr.pseudos || e.expr[":"]).nicescroll = function(e) {
        return void 0 !== n.data(e, "__nicescroll")
    }
    ,
    n.fn.niceScroll = function(e, o) {
        void 0 !== o || "object" != typeof e || "jquery"in e || (o = e,
        e = !1);
        var t = new z;
        return this.each(function() {
            var r = n(this)
              , i = n.extend({}, o);
            if (e) {
                var s = n(e);
                i.doc = s.length > 1 ? n(e, r) : s,
                i.win = r
            }
            !("doc"in i) || "win"in i || (i.win = r);
            var l = r.data("__nicescroll") || !1;
            l || (i.doc = i.doc || r,
            l = new b(i,r),
            r.data("__nicescroll", l)),
            t.push(l)
        }),
        1 === t.length ? t[0] : t
    }
    ,
    a.NiceScroll = {
        getjQuery: function() {
            return e
        }
    },
    n.nicescroll || (n.nicescroll = new z,
    n.nicescroll.options = g)
});
!function(e, t) {
    void 0 === e && void 0 !== window && (e = window),
    "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
        return t(e)
    }
    )) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, (function(e) {
    !function(e) {
        "use strict";
        var t = ["sanitize", "whiteList", "sanitizeFn"]
          , i = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
          , s = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
          , n = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
        function o(t, o) {
            var r = t.nodeName.toLowerCase();
            if (-1 !== e.inArray(r, o))
                return -1 === e.inArray(r, i) || Boolean(t.nodeValue.match(s) || t.nodeValue.match(n));
            for (var l = e(o).filter((function(e, t) {
                return t instanceof RegExp
            }
            )), a = 0, c = l.length; a < c; a++)
                if (r.match(l[a]))
                    return !0;
            return !1
        }
        function r(e, t, i) {
            if (i && "function" == typeof i)
                return i(e);
            for (var s = Object.keys(t), n = 0, r = e.length; n < r; n++)
                for (var l = e[n].querySelectorAll("*"), a = 0, c = l.length; a < c; a++) {
                    var d = l[a]
                      , h = d.nodeName.toLowerCase();
                    if (-1 !== s.indexOf(h))
                        for (var p = [].slice.call(d.attributes), u = [].concat(t["*"] || [], t[h] || []), f = 0, m = p.length; f < m; f++) {
                            var v = p[f];
                            o(v, u) || d.removeAttribute(v.nodeName)
                        }
                    else
                        d.parentNode.removeChild(d)
                }
        }
        "classList"in document.createElement("_") || function(t) {
            if ("Element"in t) {
                var i = "classList"
                  , s = "prototype"
                  , n = t.Element[s]
                  , o = Object
                  , r = function() {
                    var t = e(this);
                    return {
                        add: function(e) {
                            return e = Array.prototype.slice.call(arguments).join(" "),
                            t.addClass(e)
                        },
                        remove: function(e) {
                            return e = Array.prototype.slice.call(arguments).join(" "),
                            t.removeClass(e)
                        },
                        toggle: function(e, i) {
                            return t.toggleClass(e, i)
                        },
                        contains: function(e) {
                            return t.hasClass(e)
                        }
                    }
                };
                if (o.defineProperty) {
                    var l = {
                        get: r,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        o.defineProperty(n, i, l)
                    } catch (t) {
                        void 0 !== t.number && -2146823252 !== t.number || (l.enumerable = !1,
                        o.defineProperty(n, i, l))
                    }
                } else
                    o[s].__defineGetter__ && n.__defineGetter__(i, r)
            }
        }(window);
        var l, a, c, d = document.createElement("_");
        if (d.classList.add("c1", "c2"),
        !d.classList.contains("c2")) {
            var h = DOMTokenList.prototype.add
              , p = DOMTokenList.prototype.remove;
            DOMTokenList.prototype.add = function() {
                Array.prototype.forEach.call(arguments, h.bind(this))
            }
            ,
            DOMTokenList.prototype.remove = function() {
                Array.prototype.forEach.call(arguments, p.bind(this))
            }
        }
        if (d.classList.toggle("c3", !1),
        d.classList.contains("c3")) {
            var u = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : u.call(this, e)
            }
        }
        function f(e, t) {
            var i, s = e.selectedOptions, n = [];
            if (t) {
                for (var o = 0, r = s.length; o < r; o++)
                    (i = s[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || n.push(i);
                return n
            }
            return s
        }
        function m(e, t) {
            for (var i, s = [], n = t || e.selectedOptions, o = 0, r = n.length; o < r; o++)
                (i = n[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || s.push(i.value || i.text);
            return e.multiple ? s : s.length ? s[0] : null
        }
        d = null,
        String.prototype.startsWith || (l = function() {
            try {
                var e = {}
                  , t = Object.defineProperty
                  , i = t(e, e, e) && t
            } catch (e) {}
            return i
        }(),
        a = {}.toString,
        c = function(e) {
            if (null == this)
                throw new TypeError;
            var t = String(this);
            if (e && "[object RegExp]" == a.call(e))
                throw new TypeError;
            var i = t.length
              , s = String(e)
              , n = s.length
              , o = 1 < arguments.length ? arguments[1] : void 0
              , r = o ? Number(o) : 0;
            r != r && (r = 0);
            var l = Math.min(Math.max(r, 0), i);
            if (i < n + l)
                return !1;
            for (var c = -1; ++c < n; )
                if (t.charCodeAt(l + c) != s.charCodeAt(c))
                    return !1;
            return !0
        }
        ,
        l ? l(String.prototype, "startsWith", {
            value: c,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = c),
        Object.keys || (Object.keys = function(e, t, i) {
            for (t in i = [],
            e)
                i.hasOwnProperty.call(e, t) && i.push(t);
            return i
        }
        ),
        HTMLSelectElement && !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") && Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
            get: function() {
                return this.querySelectorAll(":checked")
            }
        });
        var v = {
            useDefault: !1,
            _set: e.valHooks.select.set
        };
        e.valHooks.select.set = function(t, i) {
            return i && !v.useDefault && e(t).data("selected", !0),
            v._set.apply(this, arguments)
        }
        ;
        var g = null
          , b = function() {
            try {
                return new Event("change"),
                !0
            } catch (e) {
                return !1
            }
        }();
        function w(e, t, i, s) {
            for (var n = ["display", "subtext", "tokens"], o = !1, r = 0; r < n.length; r++) {
                var l = n[r]
                  , a = e[l];
                if (a && (a = a.toString(),
                "display" === l && (a = a.replace(/<[^>]+>/g, "")),
                s && (a = S(a)),
                a = a.toUpperCase(),
                o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t)))
                    break
            }
            return o
        }
        function I(e) {
            return parseInt(e, 10) || 0
        }
        e.fn.triggerNative = function(e) {
            var t, i = this[0];
            i.dispatchEvent ? (b ? t = new Event(e,{
                bubbles: !0
            }) : (t = document.createEvent("Event")).initEvent(e, !0, !1),
            i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e,
            i.fireEvent("on" + e, t)) : this.trigger(e)
        }
        ;
        var x = {
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss",
            "Ā": "A",
            "Ă": "A",
            "Ą": "A",
            "ā": "a",
            "ă": "a",
            "ą": "a",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "Ď": "D",
            "Đ": "D",
            "ď": "d",
            "đ": "d",
            "Ē": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ę": "E",
            "Ě": "E",
            "ē": "e",
            "ĕ": "e",
            "ė": "e",
            "ę": "e",
            "ě": "e",
            "Ĝ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ģ": "G",
            "ĝ": "g",
            "ğ": "g",
            "ġ": "g",
            "ģ": "g",
            "Ĥ": "H",
            "Ħ": "H",
            "ĥ": "h",
            "ħ": "h",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "Į": "I",
            "İ": "I",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "į": "i",
            "ı": "i",
            "Ĵ": "J",
            "ĵ": "j",
            "Ķ": "K",
            "ķ": "k",
            "ĸ": "k",
            "Ĺ": "L",
            "Ļ": "L",
            "Ľ": "L",
            "Ŀ": "L",
            "Ł": "L",
            "ĺ": "l",
            "ļ": "l",
            "ľ": "l",
            "ŀ": "l",
            "ł": "l",
            "Ń": "N",
            "Ņ": "N",
            "Ň": "N",
            "Ŋ": "N",
            "ń": "n",
            "ņ": "n",
            "ň": "n",
            "ŋ": "n",
            "Ō": "O",
            "Ŏ": "O",
            "Ő": "O",
            "ō": "o",
            "ŏ": "o",
            "ő": "o",
            "Ŕ": "R",
            "Ŗ": "R",
            "Ř": "R",
            "ŕ": "r",
            "ŗ": "r",
            "ř": "r",
            "Ś": "S",
            "Ŝ": "S",
            "Ş": "S",
            "Š": "S",
            "ś": "s",
            "ŝ": "s",
            "ş": "s",
            "š": "s",
            "Ţ": "T",
            "Ť": "T",
            "Ŧ": "T",
            "ţ": "t",
            "ť": "t",
            "ŧ": "t",
            "Ũ": "U",
            "Ū": "U",
            "Ŭ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ų": "U",
            "ũ": "u",
            "ū": "u",
            "ŭ": "u",
            "ů": "u",
            "ű": "u",
            "ų": "u",
            "Ŵ": "W",
            "ŵ": "w",
            "Ŷ": "Y",
            "ŷ": "y",
            "Ÿ": "Y",
            "Ź": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "ź": "z",
            "ż": "z",
            "ž": "z",
            "Ĳ": "IJ",
            "ĳ": "ij",
            "Œ": "Oe",
            "œ": "oe",
            "ŉ": "'n",
            "ſ": "s"
        }
          , k = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g
          , $ = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");
        function y(e) {
            return x[e]
        }
        function S(e) {
            return (e = e.toString()) && e.replace(k, y).replace($, "")
        }
        var E, C, O, z, T, A = (E = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        C = function(e) {
            return E[e]
        }
        ,
        O = "(?:" + Object.keys(E).join("|") + ")",
        z = RegExp(O),
        T = RegExp(O, "g"),
        function(e) {
            return e = null == e ? "" : "" + e,
            z.test(e) ? e.replace(T, C) : e
        }
        ), L = {
            32: " ",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            59: ";",
            65: "A",
            66: "B",
            67: "C",
            68: "D",
            69: "E",
            70: "F",
            71: "G",
            72: "H",
            73: "I",
            74: "J",
            75: "K",
            76: "L",
            77: "M",
            78: "N",
            79: "O",
            80: "P",
            81: "Q",
            82: "R",
            83: "S",
            84: "T",
            85: "U",
            86: "V",
            87: "W",
            88: "X",
            89: "Y",
            90: "Z",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9"
        }, N = {
            success: !1,
            major: "3"
        };
        try {
            N.full = (e.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."),
            N.major = N.full[0],
            N.success = !0
        } catch (e) {}
        var D = 0
          , H = ".bs.select"
          , P = {
            DISABLED: "disabled",
            DIVIDER: "divider",
            SHOW: "open",
            DROPUP: "dropup",
            MENU: "dropdown-menu",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left",
            BUTTONCLASS: "btn-default",
            POPOVERHEADER: "popover-title",
            ICONBASE: "glyphicon",
            TICKICON: "glyphicon-ok"
        }
          , W = {
            MENU: "." + P.MENU
        }
          , B = {
            span: document.createElement("span"),
            i: document.createElement("i"),
            subtext: document.createElement("small"),
            a: document.createElement("a"),
            li: document.createElement("li"),
            whitespace: document.createTextNode(" "),
            fragment: document.createDocumentFragment()
        };
        B.a.setAttribute("role", "option"),
        B.subtext.className = "text-muted",
        B.text = B.span.cloneNode(!1),
        B.text.className = "text",
        B.checkMark = B.span.cloneNode(!1);
        var M = new RegExp("38|40")
          , R = new RegExp("^9$|27")
          , U = function(e, t, i) {
            var s = B.li.cloneNode(!1);
            return e && (1 === e.nodeType || 11 === e.nodeType ? s.appendChild(e) : s.innerHTML = e),
            void 0 !== t && "" !== t && (s.className = t),
            null != i && s.classList.add("optgroup-" + i),
            s
        }
          , j = function(e, t) {
            var i, s, n = B.text.cloneNode(!1);
            if (e.content)
                n.innerHTML = e.content;
            else {
                if (n.textContent = e.text,
                e.icon) {
                    var o = B.whitespace.cloneNode(!1);
                    (s = (!0 === t ? B.i : B.span).cloneNode(!1)).className = e.iconBase + " " + e.icon,
                    B.fragment.appendChild(s),
                    B.fragment.appendChild(o)
                }
                e.subtext && ((i = B.subtext.cloneNode(!1)).textContent = e.subtext,
                n.appendChild(i))
            }
            if (!0 === t)
                for (; 0 < n.childNodes.length; )
                    B.fragment.appendChild(n.childNodes[0]);
            else
                B.fragment.appendChild(n);
            return B.fragment
        }
          , V = function(t, i) {
            var s = this;
            v.useDefault || (e.valHooks.select.set = v._set,
            v.useDefault = !0),
            this.$element = e(t),
            this.$newElement = null,
            this.$button = null,
            this.$menu = null,
            this.options = i,
            this.selectpicker = {
                main: {},
                search: {},
                current: {},
                view: {},
                keydown: {
                    keyHistory: "",
                    resetKeyHistory: {
                        start: function() {
                            return setTimeout((function() {
                                s.selectpicker.keydown.keyHistory = ""
                            }
                            ), 800)
                        }
                    }
                }
            },
            null === this.options.title && (this.options.title = this.$element.attr("title"));
            var n = this.options.windowPadding;
            "number" == typeof n && (this.options.windowPadding = [n, n, n, n]),
            this.val = V.prototype.val,
            this.render = V.prototype.render,
            this.refresh = V.prototype.refresh,
            this.setStyle = V.prototype.setStyle,
            this.selectAll = V.prototype.selectAll,
            this.deselectAll = V.prototype.deselectAll,
            this.destroy = V.prototype.destroy,
            this.remove = V.prototype.remove,
            this.show = V.prototype.show,
            this.hide = V.prototype.hide,
            this.init()
        };
        function F(i) {
            var s, n = arguments, o = i;
            if ([].shift.apply(n),
            !N.success) {
                try {
                    N.full = (e.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".")
                } catch (i) {
                    V.BootstrapVersion ? N.full = V.BootstrapVersion.split(" ")[0].split(".") : (N.full = [N.major, "0", "0"],
                    console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", i))
                }
                N.major = N.full[0],
                N.success = !0
            }
            if ("4" === N.major) {
                var r = [];
                V.DEFAULTS.style === P.BUTTONCLASS && r.push({
                    name: "style",
                    className: "BUTTONCLASS"
                }),
                V.DEFAULTS.iconBase === P.ICONBASE && r.push({
                    name: "iconBase",
                    className: "ICONBASE"
                }),
                V.DEFAULTS.tickIcon === P.TICKICON && r.push({
                    name: "tickIcon",
                    className: "TICKICON"
                }),
                P.DIVIDER = "dropdown-divider",
                P.SHOW = "show",
                P.BUTTONCLASS = "btn-light",
                P.POPOVERHEADER = "popover-header",
                P.ICONBASE = "",
                P.TICKICON = "bs-ok-default";
                for (var l = 0; l < r.length; l++)
                    i = r[l],
                    V.DEFAULTS[i.name] = P[i.className]
            }
            var a = this.each((function() {
                var i = e(this);
                if (i.is("select")) {
                    var r = i.data("selectpicker")
                      , l = "object" == typeof o && o;
                    if (r) {
                        if (l)
                            for (var a in l)
                                l.hasOwnProperty(a) && (r.options[a] = l[a])
                    } else {
                        var c = i.data();
                        for (var d in c)
                            c.hasOwnProperty(d) && -1 !== e.inArray(d, t) && delete c[d];
                        var h = e.extend({}, V.DEFAULTS, e.fn.selectpicker.defaults || {}, c, l);
                        h.template = e.extend({}, V.DEFAULTS.template, e.fn.selectpicker.defaults ? e.fn.selectpicker.defaults.template : {}, c.template, l.template),
                        i.data("selectpicker", r = new V(this,h))
                    }
                    "string" == typeof o && (s = r[o]instanceof Function ? r[o].apply(r, n) : r.options[o])
                }
            }
            ));
            return void 0 !== s ? s : a
        }
        V.VERSION = "1.13.11",
        V.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: P.BUTTONCLASS,
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: P.ICONBASE,
            tickIcon: P.TICKICON,
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0,
            virtualScroll: 600,
            display: !1,
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
        },
        V.prototype = {
            constructor: V,
            init: function() {
                var e = this
                  , t = this.$element.attr("id");
                D++,
                this.selectId = "bs-select-" + D,
                this.$element[0].classList.add("bs-select-hidden"),
                this.multiple = this.$element.prop("multiple"),
                this.autofocus = this.$element.prop("autofocus"),
                this.$element[0].classList.contains("show-tick") && (this.options.showTick = !0),
                this.$newElement = this.createDropdown(),
                this.$element.after(this.$newElement).prependTo(this.$newElement),
                this.$button = this.$newElement.children("button"),
                this.$menu = this.$newElement.children(W.MENU),
                this.$menuInner = this.$menu.children(".inner"),
                this.$searchbox = this.$menu.find("input"),
                this.$element[0].classList.remove("bs-select-hidden"),
                !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(P.MENURIGHT),
                void 0 !== t && this.$button.attr("data-id", t),
                this.checkDisabled(),
                this.clickListener(),
                this.options.liveSearch ? (this.liveSearchListener(),
                this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0],
                this.setStyle(),
                this.render(),
                this.setWidth(),
                this.options.container ? this.selectPosition() : this.$element.on("hide" + H, (function() {
                    if (e.isVirtual()) {
                        var t = e.$menuInner[0]
                          , i = t.firstChild.cloneNode(!1);
                        t.replaceChild(i, t.firstChild),
                        t.scrollTop = 0
                    }
                }
                )),
                this.$menu.data("this", this),
                this.$newElement.data("this", this),
                this.options.mobile && this.mobile(),
                this.$newElement.on({
                    "hide.bs.dropdown": function(t) {
                        e.$element.trigger("hide" + H, t)
                    },
                    "hidden.bs.dropdown": function(t) {
                        e.$element.trigger("hidden" + H, t)
                    },
                    "show.bs.dropdown": function(t) {
                        e.$element.trigger("show" + H, t)
                    },
                    "shown.bs.dropdown": function(t) {
                        e.$element.trigger("shown" + H, t)
                    }
                }),
                e.$element[0].hasAttribute("required") && this.$element.on("invalid" + H, (function() {
                    e.$button[0].classList.add("bs-invalid"),
                    e.$element.on("shown" + H + ".invalid", (function() {
                        e.$element.val(e.$element.val()).off("shown" + H + ".invalid")
                    }
                    )).on("rendered" + H, (function() {
                        this.validity.valid && e.$button[0].classList.remove("bs-invalid"),
                        e.$element.off("rendered" + H)
                    }
                    )),
                    e.$button.on("blur" + H, (function() {
                        e.$element.trigger("focus").trigger("blur"),
                        e.$button.off("blur" + H)
                    }
                    ))
                }
                )),
                setTimeout((function() {
                    e.createLi(),
                    e.$element.trigger("loaded" + H)
                }
                ))
            },
            createDropdown: function() {
                var t = this.multiple || this.options.showTick ? " show-tick" : ""
                  , i = this.multiple ? ' aria-multiselectable="true"' : ""
                  , s = ""
                  , n = this.autofocus ? " autofocus" : "";
                N.major < 4 && this.$element.parent().hasClass("input-group") && (s = " input-group-btn");
                var o, r = "", l = "", a = "", c = "";
                return this.options.header && (r = '<div class="' + P.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"),
                this.options.liveSearch && (l = '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + A(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'),
                this.multiple && this.options.actionsBox && (a = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + P.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + P.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"),
                this.multiple && this.options.doneButton && (c = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + P.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"),
                o = '<div class="dropdown bootstrap-select' + t + s + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + n + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === N.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + P.MENU + " " + ("4" === N.major ? "" : P.SHOW) + '">' + r + l + a + '<div class="inner ' + P.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + i + '><ul class="' + P.MENU + " inner " + ("4" === N.major ? P.SHOW : "") + '" role="presentation"></ul></div>' + c + "</div></div>",
                e(o)
            },
            setPositionData: function() {
                this.selectpicker.view.canHighlight = [];
                for (var e = this.selectpicker.view.size = 0; e < this.selectpicker.current.data.length; e++) {
                    var t = this.selectpicker.current.data[e]
                      , i = !0;
                    "divider" === t.type ? (i = !1,
                    t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1,
                    t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight,
                    t.disabled && (i = !1),
                    this.selectpicker.view.canHighlight.push(i),
                    i && (this.selectpicker.view.size++,
                    t.posinset = this.selectpicker.view.size),
                    t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height
                }
            },
            isVirtual: function() {
                return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
            },
            createView: function(t, i, s) {
                var n, o, l = this, a = 0, c = [];
                if (this.selectpicker.current = t ? this.selectpicker.search : this.selectpicker.main,
                this.setPositionData(),
                i)
                    if (s)
                        a = this.$menuInner[0].scrollTop;
                    else if (!l.multiple) {
                        var d = l.$element[0]
                          , h = (d.options[d.selectedIndex] || {}).liIndex;
                        if ("number" == typeof h && !1 !== l.options.size) {
                            var p = l.selectpicker.main.data[h]
                              , u = p && p.position;
                            u && (a = u - (l.sizeInfo.menuInnerHeight + l.sizeInfo.liHeight) / 2)
                        }
                    }
                function f(e, i) {
                    var s, a, d, h, p, u, f, m, v, g, b = l.selectpicker.current.elements.length, w = [], I = !0, x = l.isVirtual();
                    l.selectpicker.view.scrollTop = e,
                    s = Math.ceil(l.sizeInfo.menuInnerHeight / l.sizeInfo.liHeight * 1.5),
                    a = Math.round(b / s) || 1;
                    for (var k = 0; k < a; k++) {
                        var $ = (k + 1) * s;
                        if (k === a - 1 && ($ = b),
                        w[k] = [k * s + (k ? 1 : 0), $],
                        !b)
                            break;
                        void 0 === p && e - 1 <= l.selectpicker.current.data[$ - 1].position - l.sizeInfo.menuInnerHeight && (p = k)
                    }
                    if (void 0 === p && (p = 0),
                    u = [l.selectpicker.view.position0, l.selectpicker.view.position1],
                    d = Math.max(0, p - 1),
                    h = Math.min(a - 1, p + 1),
                    l.selectpicker.view.position0 = !1 === x ? 0 : Math.max(0, w[d][0]) || 0,
                    l.selectpicker.view.position1 = !1 === x ? b : Math.min(b, w[h][1]) || 0,
                    f = u[0] !== l.selectpicker.view.position0 || u[1] !== l.selectpicker.view.position1,
                    void 0 !== l.activeIndex && (o = l.selectpicker.main.elements[l.prevActiveIndex],
                    c = l.selectpicker.main.elements[l.activeIndex],
                    n = l.selectpicker.main.elements[l.selectedIndex],
                    i && (l.activeIndex !== l.selectedIndex && l.defocusItem(c),
                    l.activeIndex = void 0),
                    l.activeIndex && l.activeIndex !== l.selectedIndex && l.defocusItem(n)),
                    void 0 !== l.prevActiveIndex && l.prevActiveIndex !== l.activeIndex && l.prevActiveIndex !== l.selectedIndex && l.defocusItem(o),
                    (i || f) && (m = l.selectpicker.view.visibleElements ? l.selectpicker.view.visibleElements.slice() : [],
                    l.selectpicker.view.visibleElements = !1 === x ? l.selectpicker.current.elements : l.selectpicker.current.elements.slice(l.selectpicker.view.position0, l.selectpicker.view.position1),
                    l.setOptionStatus(),
                    (t || !1 === x && i) && (v = m,
                    g = l.selectpicker.view.visibleElements,
                    I = !(v.length === g.length && v.every((function(e, t) {
                        return e === g[t]
                    }
                    )))),
                    (i || !0 === x) && I)) {
                        var y, S, E = l.$menuInner[0], C = document.createDocumentFragment(), O = E.firstChild.cloneNode(!1), z = l.selectpicker.view.visibleElements, T = [];
                        E.replaceChild(O, E.firstChild),
                        k = 0;
                        for (var A = z.length; k < A; k++) {
                            var L, N, D = z[k];
                            l.options.sanitize && (L = D.lastChild) && (N = l.selectpicker.current.data[k + l.selectpicker.view.position0]) && N.content && !N.sanitized && (T.push(L),
                            N.sanitized = !0),
                            C.appendChild(D)
                        }
                        if (l.options.sanitize && T.length && r(T, l.options.whiteList, l.options.sanitizeFn),
                        E.firstChild.style.marginBottom = !0 === x ? (y = 0 === l.selectpicker.view.position0 ? 0 : l.selectpicker.current.data[l.selectpicker.view.position0 - 1].position,
                        S = l.selectpicker.view.position1 > b - 1 ? 0 : l.selectpicker.current.data[b - 1].position - l.selectpicker.current.data[l.selectpicker.view.position1 - 1].position,
                        E.firstChild.style.marginTop = y + "px",
                        S + "px") : E.firstChild.style.marginTop = 0,
                        E.firstChild.appendChild(C),
                        !0 === x && l.sizeInfo.hasScrollBar) {
                            var H = E.firstChild.offsetWidth;
                            if (i && H < l.sizeInfo.menuInnerInnerWidth && l.sizeInfo.totalMenuWidth > l.sizeInfo.selectWidth)
                                E.firstChild.style.minWidth = l.sizeInfo.menuInnerInnerWidth + "px";
                            else if (H > l.sizeInfo.menuInnerInnerWidth) {
                                l.$menu[0].style.minWidth = 0;
                                var P = E.firstChild.offsetWidth;
                                P > l.sizeInfo.menuInnerInnerWidth && (l.sizeInfo.menuInnerInnerWidth = P,
                                E.firstChild.style.minWidth = l.sizeInfo.menuInnerInnerWidth + "px"),
                                l.$menu[0].style.minWidth = ""
                            }
                        }
                    }
                    if (l.prevActiveIndex = l.activeIndex,
                    l.options.liveSearch) {
                        if (t && i) {
                            var W, B = 0;
                            l.selectpicker.view.canHighlight[B] || (B = 1 + l.selectpicker.view.canHighlight.slice(1).indexOf(!0)),
                            W = l.selectpicker.view.visibleElements[B],
                            l.defocusItem(l.selectpicker.view.currentActive),
                            l.activeIndex = (l.selectpicker.current.data[B] || {}).index,
                            l.focusItem(W)
                        }
                    } else
                        l.$menuInner.trigger("focus")
                }
                f(a, !0),
                this.$menuInner.off("scroll.createView").on("scroll.createView", (function(e, t) {
                    l.noScroll || f(this.scrollTop, t),
                    l.noScroll = !1
                }
                )),
                e(window).off("resize" + H + "." + this.selectId + ".createView").on("resize" + H + "." + this.selectId + ".createView", (function() {
                    l.$newElement.hasClass(P.SHOW) && f(l.$menuInner[0].scrollTop)
                }
                ))
            },
            focusItem: function(e, t, i) {
                if (e) {
                    t = t || this.selectpicker.main.data[this.activeIndex];
                    var s = e.firstChild;
                    s && (s.setAttribute("aria-setsize", this.selectpicker.view.size),
                    s.setAttribute("aria-posinset", t.posinset),
                    !0 !== i && (this.focusedParent.setAttribute("aria-activedescendant", s.id),
                    e.classList.add("active"),
                    s.classList.add("active")))
                }
            },
            defocusItem: function(e) {
                e && (e.classList.remove("active"),
                e.firstChild && e.firstChild.classList.remove("active"))
            },
            setPlaceholder: function() {
                var t = !1;
                if (this.options.title && !this.multiple) {
                    this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")),
                    t = !0;
                    var i = this.$element[0]
                      , s = !1
                      , n = !this.selectpicker.view.titleOption.parentNode;
                    n && (this.selectpicker.view.titleOption.className = "bs-title-option",
                    this.selectpicker.view.titleOption.value = "",
                    s = void 0 === e(i.options[i.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected")),
                    (n || 0 !== this.selectpicker.view.titleOption.index) && i.insertBefore(this.selectpicker.view.titleOption, i.firstChild),
                    s && (i.selectedIndex = 0)
                }
                return t
            },
            createLi: function() {
                var e = this
                  , t = this.options.iconBase
                  , i = ':not([hidden]):not([data-hidden="true"])'
                  , s = []
                  , n = []
                  , o = 0
                  , r = 0
                  , l = this.setPlaceholder() ? 1 : 0;
                this.options.hideDisabled && (i += ":not(:disabled)"),
                !e.options.showTick && !e.multiple || B.checkMark.parentNode || (B.checkMark.className = t + " " + e.options.tickIcon + " check-mark",
                B.a.appendChild(B.checkMark));
                var a = this.$element[0].querySelectorAll("select > *" + i);
                function c(e) {
                    var t = n[n.length - 1];
                    t && "divider" === t.type && (t.optID || e.optID) || ((e = e || {}).type = "divider",
                    s.push(U(!1, P.DIVIDER, e.optID ? e.optID + "div" : void 0)),
                    n.push(e))
                }
                function d(i, r) {
                    if ((r = r || {}).divider = "true" === i.getAttribute("data-divider"),
                    r.divider)
                        c({
                            optID: r.optID
                        });
                    else {
                        var l = n.length
                          , a = i.style.cssText
                          , d = a ? A(a) : ""
                          , h = (i.className || "") + (r.optgroupClass || "");
                        r.optID && (h = "opt " + h),
                        r.text = i.textContent,
                        r.content = i.getAttribute("data-content"),
                        r.tokens = i.getAttribute("data-tokens"),
                        r.subtext = i.getAttribute("data-subtext"),
                        r.icon = i.getAttribute("data-icon"),
                        r.iconBase = t;
                        var p = j(r)
                          , u = U(function(e, t, i) {
                            var s = B.a.cloneNode(!0);
                            return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)),
                            void 0 !== t && "" !== t && (s.className = t),
                            "4" === N.major && s.classList.add("dropdown-item"),
                            i && s.setAttribute("style", i),
                            s
                        }(p, h, d), "", r.optID);
                        u.firstChild && (u.firstChild.id = e.selectId + "-" + l),
                        s.push(u),
                        i.liIndex = l,
                        r.display = r.content || r.text,
                        r.type = "option",
                        r.index = l,
                        r.option = i,
                        r.disabled = r.disabled || i.disabled,
                        n.push(r);
                        var f = 0;
                        r.display && (f += r.display.length),
                        r.subtext && (f += r.subtext.length),
                        r.icon && (f += 1),
                        o < f && (o = f,
                        e.selectpicker.view.widestOption = s[s.length - 1])
                    }
                }
                function h(e, o) {
                    var l = o[e]
                      , a = o[e - 1]
                      , h = o[e + 1]
                      , p = l.querySelectorAll("option" + i);
                    if (p.length) {
                        var u, f, m = {
                            label: A(l.label),
                            subtext: l.getAttribute("data-subtext"),
                            icon: l.getAttribute("data-icon"),
                            iconBase: t
                        }, v = " " + (l.className || "");
                        r++,
                        a && c({
                            optID: r
                        });
                        var g = function(e) {
                            var t, i, s = B.text.cloneNode(!1);
                            if (s.innerHTML = e.label,
                            e.icon) {
                                var n = B.whitespace.cloneNode(!1);
                                (i = B.span.cloneNode(!1)).className = e.iconBase + " " + e.icon,
                                B.fragment.appendChild(i),
                                B.fragment.appendChild(n)
                            }
                            return e.subtext && ((t = B.subtext.cloneNode(!1)).textContent = e.subtext,
                            s.appendChild(t)),
                            B.fragment.appendChild(s),
                            B.fragment
                        }(m);
                        s.push(U(g, "dropdown-header" + v, r)),
                        n.push({
                            display: m.label,
                            subtext: m.subtext,
                            type: "optgroup-label",
                            optID: r
                        });
                        for (var b = 0, w = p.length; b < w; b++) {
                            var I = p[b];
                            0 === b && (f = (u = n.length - 1) + w),
                            d(I, {
                                headerIndex: u,
                                lastIndex: f,
                                optID: r,
                                optgroupClass: v,
                                disabled: l.disabled
                            })
                        }
                        h && c({
                            optID: r
                        })
                    }
                }
                for (var p = a.length; l < p; l++) {
                    var u = a[l];
                    "OPTGROUP" !== u.tagName ? d(u, {}) : h(l, a)
                }
                this.selectpicker.main.elements = s,
                this.selectpicker.main.data = n,
                this.selectpicker.current = this.selectpicker.main
            },
            findLis: function() {
                return this.$menuInner.find(".inner > li")
            },
            render: function() {
                this.setPlaceholder();
                var e, t, i = this, s = this.$element[0], n = f(s, this.options.hideDisabled), o = n.length, l = this.$button[0], a = l.querySelector(".filter-option-inner-inner"), c = document.createTextNode(this.options.multipleSeparator), d = B.fragment.cloneNode(!1), h = !1;
                if (l.classList.toggle("bs-placeholder", i.multiple ? !o : !m(s, n)),
                this.tabIndex(),
                "static" === this.options.selectedTextFormat)
                    d = j({
                        text: this.options.title
                    }, !0);
                else if ((e = this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 1 < o) && (e = 1 < (t = this.options.selectedTextFormat.split(">")).length && o > t[1] || 1 === t.length && 2 <= o),
                !1 === e) {
                    for (var p = 0; p < o && p < 50; p++) {
                        var u = n[p]
                          , v = {}
                          , g = {
                            content: u.getAttribute("data-content"),
                            subtext: u.getAttribute("data-subtext"),
                            icon: u.getAttribute("data-icon")
                        };
                        this.multiple && 0 < p && d.appendChild(c.cloneNode(!1)),
                        u.title ? v.text = u.title : g.content && i.options.showContent ? (v.content = g.content.toString(),
                        h = !0) : (i.options.showIcon && (v.icon = g.icon,
                        v.iconBase = this.options.iconBase),
                        i.options.showSubtext && !i.multiple && g.subtext && (v.subtext = " " + g.subtext),
                        v.text = u.textContent.trim()),
                        d.appendChild(j(v, !0))
                    }
                    49 < o && d.appendChild(document.createTextNode("..."))
                } else {
                    var b = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
                    this.options.hideDisabled && (b += ":not(:disabled)");
                    var w = this.$element[0].querySelectorAll("select > option" + b + ", optgroup" + b + " option" + b).length
                      , I = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o, w) : this.options.countSelectedText;
                    d = j({
                        text: I.replace("{0}", o.toString()).replace("{1}", w.toString())
                    }, !0)
                }
                if (null == this.options.title && (this.options.title = this.$element.attr("title")),
                d.childNodes.length || (d = j({
                    text: void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText
                }, !0)),
                l.title = d.textContent.replace(/<[^>]*>?/g, "").trim(),
                this.options.sanitize && h && r([d], i.options.whiteList, i.options.sanitizeFn),
                a.innerHTML = "",
                a.appendChild(d),
                N.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon")) {
                    var x = l.querySelector(".filter-expand")
                      , k = a.cloneNode(!0);
                    k.className = "filter-expand",
                    x ? l.replaceChild(k, x) : l.appendChild(k)
                }
                this.$element.trigger("rendered" + H)
            },
            setStyle: function(e, t) {
                var i, s = this.$button[0], n = this.$newElement[0], o = this.options.style.trim();
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")),
                N.major < 4 && (n.classList.add("bs3"),
                n.parentNode.classList.contains("input-group") && (n.previousElementSibling || n.nextElementSibling) && (n.previousElementSibling || n.nextElementSibling).classList.contains("input-group-addon") && n.classList.add("bs3-has-addon")),
                i = e ? e.trim() : o,
                "add" == t ? i && s.classList.add.apply(s.classList, i.split(" ")) : "remove" == t ? i && s.classList.remove.apply(s.classList, i.split(" ")) : (o && s.classList.remove.apply(s.classList, o.split(" ")),
                i && s.classList.add.apply(s.classList, i.split(" ")))
            },
            liHeight: function(t) {
                if (t || !1 !== this.options.size && !this.sizeInfo) {
                    this.sizeInfo || (this.sizeInfo = {});
                    var i = document.createElement("div")
                      , s = document.createElement("div")
                      , n = document.createElement("div")
                      , o = document.createElement("ul")
                      , r = document.createElement("li")
                      , l = document.createElement("li")
                      , a = document.createElement("li")
                      , c = document.createElement("a")
                      , d = document.createElement("span")
                      , h = this.options.header && 0 < this.$menu.find("." + P.POPOVERHEADER).length ? this.$menu.find("." + P.POPOVERHEADER)[0].cloneNode(!0) : null
                      , p = this.options.liveSearch ? document.createElement("div") : null
                      , u = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null
                      , f = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null
                      , m = this.$element.find("option")[0];
                    if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth,
                    d.className = "text",
                    c.className = "dropdown-item " + (m ? m.className : ""),
                    i.className = this.$menu[0].parentNode.className + " " + P.SHOW,
                    "auto" === this.options.width && (s.style.minWidth = 0),
                    s.className = P.MENU + " " + P.SHOW,
                    n.className = "inner " + P.SHOW,
                    o.className = P.MENU + " inner " + ("4" === N.major ? P.SHOW : ""),
                    r.className = P.DIVIDER,
                    l.className = "dropdown-header",
                    d.appendChild(document.createTextNode("​")),
                    c.appendChild(d),
                    a.appendChild(c),
                    l.appendChild(d.cloneNode(!0)),
                    this.selectpicker.view.widestOption && o.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),
                    o.appendChild(a),
                    o.appendChild(r),
                    o.appendChild(l),
                    h && s.appendChild(h),
                    p) {
                        var v = document.createElement("input");
                        p.className = "bs-searchbox",
                        v.className = "form-control",
                        p.appendChild(v),
                        s.appendChild(p)
                    }
                    u && s.appendChild(u),
                    n.appendChild(o),
                    s.appendChild(n),
                    f && s.appendChild(f),
                    i.appendChild(s),
                    document.body.appendChild(i);
                    var g, b = a.offsetHeight, w = l ? l.offsetHeight : 0, x = h ? h.offsetHeight : 0, k = p ? p.offsetHeight : 0, $ = u ? u.offsetHeight : 0, y = f ? f.offsetHeight : 0, S = e(r).outerHeight(!0), E = !!window.getComputedStyle && window.getComputedStyle(s), C = s.offsetWidth, O = E ? null : e(s), z = {
                        vert: I(E ? E.paddingTop : O.css("paddingTop")) + I(E ? E.paddingBottom : O.css("paddingBottom")) + I(E ? E.borderTopWidth : O.css("borderTopWidth")) + I(E ? E.borderBottomWidth : O.css("borderBottomWidth")),
                        horiz: I(E ? E.paddingLeft : O.css("paddingLeft")) + I(E ? E.paddingRight : O.css("paddingRight")) + I(E ? E.borderLeftWidth : O.css("borderLeftWidth")) + I(E ? E.borderRightWidth : O.css("borderRightWidth"))
                    }, T = {
                        vert: z.vert + I(E ? E.marginTop : O.css("marginTop")) + I(E ? E.marginBottom : O.css("marginBottom")) + 2,
                        horiz: z.horiz + I(E ? E.marginLeft : O.css("marginLeft")) + I(E ? E.marginRight : O.css("marginRight")) + 2
                    };
                    n.style.overflowY = "scroll",
                    g = s.offsetWidth - C,
                    document.body.removeChild(i),
                    this.sizeInfo.liHeight = b,
                    this.sizeInfo.dropdownHeaderHeight = w,
                    this.sizeInfo.headerHeight = x,
                    this.sizeInfo.searchHeight = k,
                    this.sizeInfo.actionsHeight = $,
                    this.sizeInfo.doneButtonHeight = y,
                    this.sizeInfo.dividerHeight = S,
                    this.sizeInfo.menuPadding = z,
                    this.sizeInfo.menuExtras = T,
                    this.sizeInfo.menuWidth = C,
                    this.sizeInfo.menuInnerInnerWidth = C - z.horiz,
                    this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth,
                    this.sizeInfo.scrollBarWidth = g,
                    this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight,
                    this.setPositionData()
                }
            },
            getSelectPosition: function() {
                var t, i = e(window), s = this.$newElement.offset(), n = e(this.options.container);
                this.options.container && n.length && !n.is("body") ? ((t = n.offset()).top += parseInt(n.css("borderTopWidth")),
                t.left += parseInt(n.css("borderLeftWidth"))) : t = {
                    top: 0,
                    left: 0
                };
                var o = this.options.windowPadding;
                this.sizeInfo.selectOffsetTop = s.top - t.top - i.scrollTop(),
                this.sizeInfo.selectOffsetBot = i.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - t.top - o[2],
                this.sizeInfo.selectOffsetLeft = s.left - t.left - i.scrollLeft(),
                this.sizeInfo.selectOffsetRight = i.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - t.left - o[1],
                this.sizeInfo.selectOffsetTop -= o[0],
                this.sizeInfo.selectOffsetLeft -= o[3]
            },
            setMenuSize: function(e) {
                this.getSelectPosition();
                var t, i, s, n, o, r, l, a = this.sizeInfo.selectWidth, c = this.sizeInfo.liHeight, d = this.sizeInfo.headerHeight, h = this.sizeInfo.searchHeight, p = this.sizeInfo.actionsHeight, u = this.sizeInfo.doneButtonHeight, f = this.sizeInfo.dividerHeight, m = this.sizeInfo.menuPadding, v = 0;
                if (this.options.dropupAuto && (l = c * this.selectpicker.current.elements.length + m.vert,
                this.$newElement.toggleClass(P.DROPUP, this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && l + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot)),
                "auto" === this.options.size)
                    n = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0,
                    i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert,
                    s = n + d + h + p + u,
                    r = Math.max(n - m.vert, 0),
                    this.$newElement.hasClass(P.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert),
                    t = (o = i) - d - h - p - u - m.vert;
                else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                    for (var g = 0; g < this.options.size; g++)
                        "divider" === this.selectpicker.current.data[g].type && v++;
                    t = (i = c * this.options.size + v * f + m.vert) - m.vert,
                    o = i + d + h + p + u,
                    s = r = ""
                }
                this.$menu.css({
                    "max-height": o + "px",
                    overflow: "hidden",
                    "min-height": s + "px"
                }),
                this.$menuInner.css({
                    "max-height": t + "px",
                    "overflow-y": "auto",
                    "min-height": r + "px"
                }),
                this.sizeInfo.menuInnerHeight = Math.max(t, 1),
                this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0,
                this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth),
                "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(P.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - a),
                this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
            },
            setSize: function(t) {
                if (this.liHeight(t),
                this.options.header && this.$menu.css("padding-top", 0),
                !1 !== this.options.size) {
                    var i = this
                      , s = e(window);
                    this.setMenuSize(),
                    this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", (function() {
                        return i.setMenuSize()
                    }
                    )),
                    "auto" === this.options.size ? s.off("resize" + H + "." + this.selectId + ".setMenuSize scroll" + H + "." + this.selectId + ".setMenuSize").on("resize" + H + "." + this.selectId + ".setMenuSize scroll" + H + "." + this.selectId + ".setMenuSize", (function() {
                        return i.setMenuSize()
                    }
                    )) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && s.off("resize" + H + "." + this.selectId + ".setMenuSize scroll" + H + "." + this.selectId + ".setMenuSize"),
                    i.createView(!1, !0, t)
                }
            },
            setWidth: function() {
                var e = this;
                "auto" === this.options.width ? requestAnimationFrame((function() {
                    e.$menu.css("min-width", "0"),
                    e.$element.on("loaded" + H, (function() {
                        e.liHeight(),
                        e.setMenuSize();
                        var t = e.$newElement.clone().appendTo("body")
                          , i = t.css("width", "auto").children("button").outerWidth();
                        t.remove(),
                        e.sizeInfo.selectWidth = Math.max(e.sizeInfo.totalMenuWidth, i),
                        e.$newElement.css("width", e.sizeInfo.selectWidth + "px")
                    }
                    ))
                }
                )) : "fit" === this.options.width ? (this.$menu.css("min-width", ""),
                this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""),
                this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""),
                this.$newElement.css("width", "")),
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = e('<div class="bs-container" />');
                var t, i, s, n = this, o = e(this.options.container), r = function(r) {
                    var l = {}
                      , a = n.options.display || !!e.fn.dropdown.Constructor.Default && e.fn.dropdown.Constructor.Default.display;
                    n.$bsContainer.addClass(r.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(P.DROPUP, r.hasClass(P.DROPUP)),
                    t = r.offset(),
                    o.is("body") ? i = {
                        top: 0,
                        left: 0
                    } : ((i = o.offset()).top += parseInt(o.css("borderTopWidth")) - o.scrollTop(),
                    i.left += parseInt(o.css("borderLeftWidth")) - o.scrollLeft()),
                    s = r.hasClass(P.DROPUP) ? 0 : r[0].offsetHeight,
                    (N.major < 4 || "static" === a) && (l.top = t.top - i.top + s,
                    l.left = t.left - i.left),
                    l.width = r[0].offsetWidth,
                    n.$bsContainer.css(l)
                };
                this.$button.on("click.bs.dropdown.data-api", (function() {
                    n.isDisabled() || (r(n.$newElement),
                    n.$bsContainer.appendTo(n.options.container).toggleClass(P.SHOW, !n.$button.hasClass(P.SHOW)).append(n.$menu))
                }
                )),
                e(window).off("resize" + H + "." + this.selectId + " scroll" + H + "." + this.selectId).on("resize" + H + "." + this.selectId + " scroll" + H + "." + this.selectId, (function() {
                    n.$newElement.hasClass(P.SHOW) && r(n.$newElement)
                }
                )),
                this.$element.on("hide" + H, (function() {
                    n.$menu.data("height", n.$menu.height()),
                    n.$bsContainer.detach()
                }
                ))
            },
            setOptionStatus: function(e) {
                var t = this;
                if (t.noScroll = !1,
                t.selectpicker.view.visibleElements && t.selectpicker.view.visibleElements.length)
                    for (var i = 0; i < t.selectpicker.view.visibleElements.length; i++) {
                        var s = t.selectpicker.current.data[i + t.selectpicker.view.position0]
                          , n = s.option;
                        n && (!0 !== e && t.setDisabled(s.index, s.disabled),
                        t.setSelected(s.index, n.selected))
                    }
            },
            setSelected: function(e, t) {
                var i, s, n = this.selectpicker.main.elements[e], o = this.selectpicker.main.data[e], r = void 0 !== this.activeIndex, l = this.activeIndex === e || t && !this.multiple && !r;
                o.selected = t,
                s = n.firstChild,
                t && (this.selectedIndex = e),
                n.classList.toggle("selected", t),
                l ? (this.focusItem(n, o),
                this.selectpicker.view.currentActive = n,
                this.activeIndex = e) : this.defocusItem(n),
                s && (s.classList.toggle("selected", t),
                t ? s.setAttribute("aria-selected", !0) : this.multiple ? s.setAttribute("aria-selected", !1) : s.removeAttribute("aria-selected")),
                l || r || !t || void 0 === this.prevActiveIndex || (i = this.selectpicker.main.elements[this.prevActiveIndex],
                this.defocusItem(i))
            },
            setDisabled: function(e, t) {
                var i, s = this.selectpicker.main.elements[e];
                this.selectpicker.main.data[e].disabled = t,
                i = s.firstChild,
                s.classList.toggle(P.DISABLED, t),
                i && ("4" === N.major && i.classList.toggle(P.DISABLED, t),
                t ? (i.setAttribute("aria-disabled", t),
                i.setAttribute("tabindex", -1)) : (i.removeAttribute("aria-disabled"),
                i.setAttribute("tabindex", 0)))
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement[0].classList.add(P.DISABLED),
                this.$button.addClass(P.DISABLED).attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button[0].classList.contains(P.DISABLED) && (this.$newElement[0].classList.remove(P.DISABLED),
                this.$button.removeClass(P.DISABLED).attr("aria-disabled", !1)),
                -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")),
                this.$button.on("click", (function() {
                    return !e.isDisabled()
                }
                ))
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")),
                this.$button.attr("tabindex", this.$element.data("tabindex"))),
                this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var t = this
                  , i = e(document);
                function s() {
                    t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$menuInner.trigger("focus")
                }
                function n() {
                    t.dropdown && t.dropdown._popper && t.dropdown._popper.state.isCreated ? s() : requestAnimationFrame(n)
                }
                i.data("spaceSelect", !1),
                this.$button.on("keyup", (function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && i.data("spaceSelect") && (e.preventDefault(),
                    i.data("spaceSelect", !1))
                }
                )),
                this.$newElement.on("show.bs.dropdown", (function() {
                    3 < N.major && !t.dropdown && (t.dropdown = t.$button.data("bs.dropdown"),
                    t.dropdown._menu = t.$menu[0])
                }
                )),
                this.$button.on("click.bs.dropdown.data-api", (function() {
                    t.$newElement.hasClass(P.SHOW) || t.setSize()
                }
                )),
                this.$element.on("shown" + H, (function() {
                    t.$menuInner[0].scrollTop !== t.selectpicker.view.scrollTop && (t.$menuInner[0].scrollTop = t.selectpicker.view.scrollTop),
                    3 < N.major ? requestAnimationFrame(n) : s()
                }
                )),
                this.$menuInner.on("mouseenter", "li a", (function(e) {
                    var i = this.parentElement
                      , s = t.isVirtual() ? t.selectpicker.view.position0 : 0
                      , n = Array.prototype.indexOf.call(i.parentElement.children, i)
                      , o = t.selectpicker.current.data[n + s];
                    t.focusItem(i, o, !0)
                }
                )),
                this.$menuInner.on("click", "li a", (function(i, s) {
                    var n = e(this)
                      , o = t.$element[0]
                      , r = t.isVirtual() ? t.selectpicker.view.position0 : 0
                      , l = t.selectpicker.current.data[n.parent().index() + r]
                      , a = l.index
                      , c = m(o)
                      , d = o.selectedIndex
                      , h = o.options[d]
                      , p = !0;
                    if (t.multiple && 1 !== t.options.maxOptions && i.stopPropagation(),
                    i.preventDefault(),
                    !t.isDisabled() && !n.parent().hasClass(P.DISABLED)) {
                        var u = l.option
                          , v = e(u)
                          , b = u.selected
                          , w = v.parent("optgroup")
                          , I = w.find("option")
                          , x = t.options.maxOptions
                          , k = w.data("maxOptions") || !1;
                        if (a === t.activeIndex && (s = !0),
                        s || (t.prevActiveIndex = t.activeIndex,
                        t.activeIndex = void 0),
                        t.multiple) {
                            if (u.selected = !b,
                            t.setSelected(a, !b),
                            n.trigger("blur"),
                            !1 !== x || !1 !== k) {
                                var $ = x < f(o).length
                                  , y = k < w.find("option:selected").length;
                                if (x && $ || k && y)
                                    if (x && 1 == x)
                                        o.selectedIndex = -1,
                                        u.selected = !0,
                                        t.setOptionStatus(!0);
                                    else if (k && 1 == k) {
                                        for (var S = 0; S < I.length; S++) {
                                            var E = I[S];
                                            E.selected = !1,
                                            t.setSelected(E.liIndex, !1)
                                        }
                                        u.selected = !0,
                                        t.setSelected(a, !0)
                                    } else {
                                        var C = "string" == typeof t.options.maxOptionsText ? [t.options.maxOptionsText, t.options.maxOptionsText] : t.options.maxOptionsText
                                          , O = "function" == typeof C ? C(x, k) : C
                                          , z = O[0].replace("{n}", x)
                                          , T = O[1].replace("{n}", k)
                                          , A = e('<div class="notify"></div>');
                                        O[2] && (z = z.replace("{var}", O[2][1 < x ? 0 : 1]),
                                        T = T.replace("{var}", O[2][1 < k ? 0 : 1])),
                                        u.selected = !1,
                                        t.$menu.append(A),
                                        x && $ && (A.append(e("<div>" + z + "</div>")),
                                        p = !1,
                                        t.$element.trigger("maxReached" + H)),
                                        k && y && (A.append(e("<div>" + T + "</div>")),
                                        p = !1,
                                        t.$element.trigger("maxReachedGrp" + H)),
                                        setTimeout((function() {
                                            t.setSelected(a, !1)
                                        }
                                        ), 10),
                                        A[0].classList.add("fadeOut"),
                                        setTimeout((function() {
                                            A.remove()
                                        }
                                        ), 1050)
                                    }
                            }
                        } else
                            h && (h.selected = !1),
                            u.selected = !0,
                            t.setSelected(a, !0);
                        !t.multiple || t.multiple && 1 === t.options.maxOptions ? t.$button.trigger("focus") : t.options.liveSearch && t.$searchbox.trigger("focus"),
                        p && (t.multiple || d !== o.selectedIndex) && (g = [u.index, v.prop("selected"), c],
                        t.$element.triggerNative("change"))
                    }
                }
                )),
                this.$menu.on("click", "li." + P.DISABLED + " a, ." + P.POPOVERHEADER + ", ." + P.POPOVERHEADER + " :not(.close)", (function(i) {
                    i.currentTarget == this && (i.preventDefault(),
                    i.stopPropagation(),
                    t.options.liveSearch && !e(i.target).hasClass("close") ? t.$searchbox.trigger("focus") : t.$button.trigger("focus"))
                }
                )),
                this.$menuInner.on("click", ".divider, .dropdown-header", (function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$button.trigger("focus")
                }
                )),
                this.$menu.on("click", "." + P.POPOVERHEADER + " .close", (function() {
                    t.$button.trigger("click")
                }
                )),
                this.$searchbox.on("click", (function(e) {
                    e.stopPropagation()
                }
                )),
                this.$menu.on("click", ".actions-btn", (function(i) {
                    t.options.liveSearch ? t.$searchbox.trigger("focus") : t.$button.trigger("focus"),
                    i.preventDefault(),
                    i.stopPropagation(),
                    e(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll()
                }
                )),
                this.$element.on("change" + H, (function() {
                    t.render(),
                    t.$element.trigger("changed" + H, g),
                    g = null
                }
                )).on("focus" + H, (function() {
                    t.options.mobile || t.$button.trigger("focus")
                }
                ))
            },
            liveSearchListener: function() {
                var e = this
                  , t = document.createElement("li");
                this.$button.on("click.bs.dropdown.data-api", (function() {
                    e.$searchbox.val() && e.$searchbox.val("")
                }
                )),
                this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", (function(e) {
                    e.stopPropagation()
                }
                )),
                this.$searchbox.on("input propertychange", (function() {
                    var i = e.$searchbox.val();
                    if (e.selectpicker.search.elements = [],
                    e.selectpicker.search.data = [],
                    i) {
                        var s = []
                          , n = i.toUpperCase()
                          , o = {}
                          , r = []
                          , l = e._searchStyle()
                          , a = e.options.liveSearchNormalize;
                        a && (n = S(n)),
                        e._$lisSelected = e.$menuInner.find(".selected");
                        for (var c = 0; c < e.selectpicker.main.data.length; c++) {
                            var d = e.selectpicker.main.data[c];
                            o[c] || (o[c] = w(d, n, l, a)),
                            o[c] && void 0 !== d.headerIndex && -1 === r.indexOf(d.headerIndex) && (0 < d.headerIndex && (o[d.headerIndex - 1] = !0,
                            r.push(d.headerIndex - 1)),
                            o[d.headerIndex] = !0,
                            r.push(d.headerIndex),
                            o[d.lastIndex + 1] = !0),
                            o[c] && "optgroup-label" !== d.type && r.push(c)
                        }
                        c = 0;
                        for (var h = r.length; c < h; c++) {
                            var p = r[c]
                              , u = r[c - 1]
                              , f = (d = e.selectpicker.main.data[p],
                            e.selectpicker.main.data[u]);
                            ("divider" !== d.type || "divider" === d.type && f && "divider" !== f.type && h - 1 !== c) && (e.selectpicker.search.data.push(d),
                            s.push(e.selectpicker.main.elements[p]))
                        }
                        e.activeIndex = void 0,
                        e.noScroll = !0,
                        e.$menuInner.scrollTop(0),
                        e.selectpicker.search.elements = s,
                        e.createView(!0),
                        s.length || (t.className = "no-results",
                        t.innerHTML = e.options.noneResultsText.replace("{0}", '"' + A(i) + '"'),
                        e.$menuInner[0].firstChild.appendChild(t))
                    } else
                        e.$menuInner.scrollTop(0),
                        e.createView(!1)
                }
                ))
            },
            _searchStyle: function() {
                return this.options.liveSearchStyle || "contains"
            },
            val: function(e) {
                var t = this.$element[0];
                if (void 0 === e)
                    return this.$element.val();
                var i = m(t);
                if (g = [null, null, i],
                this.$element.val(e).trigger("changed" + H, g),
                this.$newElement.hasClass(P.SHOW))
                    if (this.multiple)
                        this.setOptionStatus(!0);
                    else {
                        var s = (t.options[t.selectedIndex] || {}).liIndex;
                        "number" == typeof s && (this.setSelected(this.selectedIndex, !1),
                        this.setSelected(s, !0))
                    }
                return this.render(),
                g = null,
                this.$element
            },
            changeAll: function(e) {
                if (this.multiple) {
                    void 0 === e && (e = !0);
                    var t = this.$element[0]
                      , i = 0
                      , s = 0
                      , n = m(t);
                    t.classList.add("bs-select-hidden");
                    for (var o = 0, r = this.selectpicker.current.elements.length; o < r; o++) {
                        var l = this.selectpicker.current.data[o]
                          , a = l.option;
                        a && !l.disabled && "divider" !== l.type && (l.selected && i++,
                        (a.selected = e) && s++)
                    }
                    t.classList.remove("bs-select-hidden"),
                    i !== s && (this.setOptionStatus(),
                    g = [null, null, n],
                    this.$element.triggerNative("change"))
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) {
                (e = e || window.event) && e.stopPropagation(),
                this.$button.trigger("click.bs.dropdown.data-api")
            },
            keydown: function(t) {
                var i, s, n, o, r, l = e(this), a = l.hasClass("dropdown-toggle"), c = (a ? l.closest(".dropdown") : l.closest(W.MENU)).data("this"), d = c.findLis(), h = !1, p = 9 === t.which && !a && !c.options.selectOnTab, u = M.test(t.which) || p, f = c.$menuInner[0].scrollTop, m = !0 === c.isVirtual() ? c.selectpicker.view.position0 : 0;
                if (!(s = c.$newElement.hasClass(P.SHOW)) && (u || 48 <= t.which && t.which <= 57 || 96 <= t.which && t.which <= 105 || 65 <= t.which && t.which <= 90) && (c.$button.trigger("click.bs.dropdown.data-api"),
                c.options.liveSearch))
                    c.$searchbox.trigger("focus");
                else {
                    if (27 === t.which && s && (t.preventDefault(),
                    c.$button.trigger("click.bs.dropdown.data-api").trigger("focus")),
                    u) {
                        if (!d.length)
                            return;
                        -1 !== (i = (n = c.selectpicker.main.elements[c.activeIndex]) ? Array.prototype.indexOf.call(n.parentElement.children, n) : -1) && c.defocusItem(n),
                        38 === t.which ? (-1 !== i && i--,
                        i + m < 0 && (i += d.length),
                        c.selectpicker.view.canHighlight[i + m] || -1 == (i = c.selectpicker.view.canHighlight.slice(0, i + m).lastIndexOf(!0) - m) && (i = d.length - 1)) : (40 === t.which || p) && (++i + m >= c.selectpicker.view.canHighlight.length && (i = 0),
                        c.selectpicker.view.canHighlight[i + m] || (i = i + 1 + c.selectpicker.view.canHighlight.slice(i + m + 1).indexOf(!0))),
                        t.preventDefault();
                        var v = m + i;
                        38 === t.which ? 0 === m && i === d.length - 1 ? (c.$menuInner[0].scrollTop = c.$menuInner[0].scrollHeight,
                        v = c.selectpicker.current.elements.length - 1) : h = (r = (o = c.selectpicker.current.data[v]).position - o.height) < f : (40 === t.which || p) && (0 === i ? v = c.$menuInner[0].scrollTop = 0 : h = f < (r = (o = c.selectpicker.current.data[v]).position - c.sizeInfo.menuInnerHeight)),
                        n = c.selectpicker.current.elements[v],
                        c.activeIndex = c.selectpicker.current.data[v].index,
                        c.focusItem(n),
                        c.selectpicker.view.currentActive = n,
                        h && (c.$menuInner[0].scrollTop = r),
                        c.options.liveSearch ? c.$searchbox.trigger("focus") : l.trigger("focus")
                    } else if (!l.is("input") && !R.test(t.which) || 32 === t.which && c.selectpicker.keydown.keyHistory) {
                        var g, b, I = [];
                        t.preventDefault(),
                        c.selectpicker.keydown.keyHistory += L[t.which],
                        c.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(c.selectpicker.keydown.resetKeyHistory.cancel),
                        c.selectpicker.keydown.resetKeyHistory.cancel = c.selectpicker.keydown.resetKeyHistory.start(),
                        b = c.selectpicker.keydown.keyHistory,
                        /^(.)\1+$/.test(b) && (b = b.charAt(0));
                        for (var x = 0; x < c.selectpicker.current.data.length; x++) {
                            var k = c.selectpicker.current.data[x];
                            w(k, b, "startsWith", !0) && c.selectpicker.view.canHighlight[x] && I.push(k.index)
                        }
                        if (I.length) {
                            var $ = 0;
                            d.removeClass("active").find("a").removeClass("active"),
                            1 === b.length && (-1 === ($ = I.indexOf(c.activeIndex)) || $ === I.length - 1 ? $ = 0 : $++),
                            g = I[$],
                            h = 0 < f - (o = c.selectpicker.main.data[g]).position ? (r = o.position - o.height,
                            !0) : (r = o.position - c.sizeInfo.menuInnerHeight,
                            o.position > f + c.sizeInfo.menuInnerHeight),
                            n = c.selectpicker.main.elements[g],
                            c.activeIndex = I[$],
                            c.focusItem(n),
                            n && n.firstChild.focus(),
                            h && (c.$menuInner[0].scrollTop = r),
                            l.trigger("focus")
                        }
                    }
                    s && (32 === t.which && !c.selectpicker.keydown.keyHistory || 13 === t.which || 9 === t.which && c.options.selectOnTab) && (32 !== t.which && t.preventDefault(),
                    c.options.liveSearch && 32 === t.which || (c.$menuInner.find(".active a").trigger("click", !0),
                    l.trigger("focus"),
                    c.options.liveSearch || (t.preventDefault(),
                    e(document).data("spaceSelect", !0))))
                }
            },
            mobile: function() {
                this.$element[0].classList.add("mobile-device")
            },
            refresh: function() {
                var t = e.extend({}, this.options, this.$element.data());
                this.options = t,
                this.checkDisabled(),
                this.setStyle(),
                this.render(),
                this.createLi(),
                this.setWidth(),
                this.setSize(!0),
                this.$element.trigger("refreshed" + H)
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(),
                this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(),
                this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(),
                this.$element.off(H).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"),
                e(window).off(H + "." + this.selectId)
            }
        };
        var _ = e.fn.selectpicker;
        e.fn.selectpicker = F,
        e.fn.selectpicker.Constructor = V,
        e.fn.selectpicker.noConflict = function() {
            return e.fn.selectpicker = _,
            this
        }
        ,
        e(document).off("keydown.bs.dropdown.data-api").on("keydown" + H, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', V.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', (function(e) {
            e.stopPropagation()
        }
        )),
        e(window).on("load" + H + ".data-api", (function() {
            e(".selectpicker").each((function() {
                var t = e(this);
                F.call(t, t.data())
            }
            ))
        }
        ))
    }(e)
}
));
!function(t, e, n, o) {
    "use strict";
    function a(t, e) {
        var o, a, i, s = [], r = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(),
        e = e || {},
        t && t.data && (e = h(t.data.options, e)),
        o = e.$target || n(t.currentTarget).trigger("blur"),
        i = n.fancybox.getInstance(),
        i && i.$trigger && i.$trigger.is(o) || (e.selector ? s = n(e.selector) : (a = o.attr("data-fancybox") || "",
        a ? (s = t.data ? t.data.items : [],
        s = s.length ? s.filter('[data-fancybox="' + a + '"]') : n('[data-fancybox="' + a + '"]')) : s = [o]),
        r = n(s).index(o),
        r < 0 && (r = 0),
        i = n.fancybox.open(s, e, r),
        i.$trigger = o))
    }
    if (t.console = t.console || {
        info: function(t) {}
    },
    n) {
        if (n.fn.fancybox)
            return void console.info("fancyBox already initialized");
        var i = {
            closeExisting: !1,
            loop: !1,
            gutter: 50,
            keyboard: !0,
            preventCaptionOverlap: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "slideShow", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: {
                preload: !1
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: !0
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {
                    scrolling: "auto"
                }
            },
            video: {
                tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                format: "",
                autoStart: !0
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
            btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
            },
            parentEl: "body",
            hideScrollbar: !0,
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {
                autoStart: !1
            },
            touch: {
                vertical: !0,
                momentum: !0
            },
            hash: null,
            media: {},
            slideShow: {
                autoStart: !1,
                speed: 3e3
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0,
                parentEl: ".fancybox-container",
                axis: "y"
            },
            wheel: "auto",
            onInit: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
            onActivate: n.noop,
            onDeactivate: n.noop,
            clickContent: function(t, e) {
                return "image" === t.type && "zoom"
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                preventCaptionOverlap: !1,
                idleTime: !1,
                clickContent: function(t, e) {
                    return "image" === t.type && "toggleControls"
                },
                clickSlide: function(t, e) {
                    return "image" === t.type ? "toggleControls" : "close"
                },
                dblclickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                dblclickSlide: function(t, e) {
                    return "image" === t.type && "zoom"
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails",
                    DOWNLOAD: "Download",
                    SHARE: "Share",
                    ZOOM: "Zoom"
                },
                de: {
                    CLOSE: "Schliessen",
                    NEXT: "Weiter",
                    PREV: "Zurück",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder",
                    DOWNLOAD: "Herunterladen",
                    SHARE: "Teilen",
                    ZOOM: "Maßstab"
                }
            }
        }
          , s = n(t)
          , r = n(e)
          , c = 0
          , l = function(t) {
            return t && t.hasOwnProperty && t instanceof n
        }
          , d = function() {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            }
        }()
          , u = function() {
            return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e)
            }
        }()
          , f = function() {
            var t, n = e.createElement("fakeelement"), a = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in a)
                if (n.style[t] !== o)
                    return a[t];
            return "transitionend"
        }()
          , p = function(t) {
            return t && t.length && t[0].offsetHeight
        }
          , h = function(t, e) {
            var o = n.extend(!0, {}, t, e);
            return n.each(e, function(t, e) {
                n.isArray(e) && (o[t] = e)
            }),
            o
        }
          , g = function(t) {
            var o, a;
            return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"),
            o = {
                x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                y: t.getBoundingClientRect().top + t.offsetHeight / 2
            },
            a = e.elementFromPoint(o.x, o.y) === t,
            n(".fancybox-container").css("pointer-events", ""),
            a)
        }
          , b = function(t, e, o) {
            var a = this;
            a.opts = h({
                index: o
            }, n.fancybox.defaults),
            n.isPlainObject(e) && (a.opts = h(a.opts, e)),
            n.fancybox.isMobile && (a.opts = h(a.opts, a.opts.mobile)),
            a.id = a.opts.id || ++c,
            a.currIndex = parseInt(a.opts.index, 10) || 0,
            a.prevIndex = null,
            a.prevPos = null,
            a.currPos = 0,
            a.firstRun = !0,
            a.group = [],
            a.slides = {},
            a.addContent(t),
            a.group.length && a.init()
        };
        n.extend(b.prototype, {
            init: function() {
                var o, a, i = this, s = i.group[i.currIndex], r = s.opts;
                r.closeExisting && n.fancybox.close(!0),
                n("body").addClass("fancybox-active"),
                !n.fancybox.getInstance() && r.hideScrollbar !== !1 && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"),
                n("body").addClass("compensate-for-scrollbar")),
                a = "",
                n.each(r.buttons, function(t, e) {
                    a += r.btnTpl[e] || ""
                }),
                o = n(i.translate(i, r.baseTpl.replace("{{buttons}}", a).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight))).attr("id", "fancybox-container-" + i.id).addClass(r.baseClass).data("FancyBox", i).appendTo(r.parentEl),
                i.$refs = {
                    container: o
                },
                ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                    i.$refs[t] = o.find(".fancybox-" + t)
                }),
                i.trigger("onInit"),
                i.activate(),
                i.jumpTo(i.currIndex)
            },
            translate: function(t, e) {
                var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    var a = n[e];
                    return a === o ? t : a
                })
            },
            addContent: function(t) {
                var e, a = this, i = n.makeArray(t);
                n.each(i, function(t, e) {
                    var i, s, r, c, l, d = {}, u = {};
                    n.isPlainObject(e) ? (d = e,
                    u = e.opts || e) : "object" === n.type(e) && n(e).length ? (i = n(e),
                    u = i.data() || {},
                    u = n.extend(!0, {}, u, u.options),
                    u.$orig = i,
                    d.src = a.opts.src || u.src || i.attr("href"),
                    d.type || d.src || (d.type = "inline",
                    d.src = e)) : d = {
                        type: "html",
                        src: e + ""
                    },
                    d.opts = n.extend(!0, {}, a.opts, u),
                    n.isArray(u.buttons) && (d.opts.buttons = u.buttons),
                    n.fancybox.isMobile && d.opts.mobile && (d.opts = h(d.opts, d.opts.mobile)),
                    s = d.type || d.opts.type,
                    c = d.src || "",
                    !s && c && ((r = c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video",
                    d.opts.video.format || (d.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? (s = "iframe",
                    d = n.extend(!0, d, {
                        contentType: "pdf",
                        opts: {
                            iframe: {
                                preload: !1
                            }
                        }
                    })) : "#" === c.charAt(0) && (s = "inline")),
                    s ? d.type = s : a.trigger("objectNeedsType", d),
                    d.contentType || (d.contentType = n.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type),
                    d.index = a.group.length,
                    "auto" == d.opts.smallBtn && (d.opts.smallBtn = n.inArray(d.type, ["html", "inline", "ajax"]) > -1),
                    "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn),
                    d.$thumb = d.opts.$thumb || null,
                    d.opts.$trigger && d.index === a.opts.index && (d.$thumb = d.opts.$trigger.find("img:first"),
                    d.$thumb.length && (d.opts.$orig = d.opts.$trigger)),
                    d.$thumb && d.$thumb.length || !d.opts.$orig || (d.$thumb = d.opts.$orig.find("img:first")),
                    d.$thumb && !d.$thumb.length && (d.$thumb = null),
                    d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null),
                    "function" === n.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [a, d])),
                    "function" === n.type(a.opts.caption) && (d.opts.caption = a.opts.caption.apply(e, [a, d])),
                    d.opts.caption instanceof n || (d.opts.caption = d.opts.caption === o ? "" : d.opts.caption + ""),
                    "ajax" === d.type && (l = c.split(/\s+/, 2),
                    l.length > 1 && (d.src = l.shift(),
                    d.opts.filter = l.shift())),
                    d.opts.modal && (d.opts = n.extend(!0, d.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })),
                    a.group.push(d)
                }),
                Object.keys(a.slides).length && (a.updateControls(),
                e = a.Thumbs,
                e && e.isActive && (e.create(),
                e.focus()))
            },
            addEvents: function() {
                var e = this;
                e.removeEvents(),
                e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    e.close(t)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    e.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    e.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                    e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }),
                s.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId),
                    e.requestId = d(function() {
                        e.update(t)
                    })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(),
                    setTimeout(function() {
                        e.$refs.stage.show(),
                        e.update(t)
                    }, n.fancybox.isMobile ? 600 : 250))
                }),
                r.on("keydown.fb", function(t) {
                    var o = n.fancybox ? n.fancybox.getInstance() : null
                      , a = o.current
                      , i = t.keyCode || t.which;
                    if (9 == i)
                        return void (a.opts.trapFocus && e.focus(t));
                    if (!(!a.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input") || n(t.target).is("textarea")))
                        return 8 === i || 27 === i ? (t.preventDefault(),
                        void e.close(t)) : 37 === i || 38 === i ? (t.preventDefault(),
                        void e.previous()) : 39 === i || 40 === i ? (t.preventDefault(),
                        void e.next()) : void e.trigger("afterKeydown", t, i)
                }),
                e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0,
                r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                    e.idleSecondsCounter = 0,
                    e.isIdle && e.showControls(),
                    e.isIdle = !1
                }),
                e.idleInterval = t.setInterval(function() {
                    e.idleSecondsCounter++,
                    e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0,
                    e.idleSecondsCounter = 0,
                    e.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                var e = this;
                s.off("orientationchange.fb resize.fb"),
                r.off("keydown.fb .fb-idle"),
                this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                e.idleInterval && (t.clearInterval(e.idleInterval),
                e.idleInterval = null)
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function(t, e) {
                var a, i, s, r, c, l, d, u, f, h = this, g = h.group.length;
                if (!(h.isDragging || h.isClosing || h.isAnimating && h.firstRun)) {
                    if (t = parseInt(t, 10),
                    s = h.current ? h.current.opts.loop : h.opts.loop,
                    !s && (t < 0 || t >= g))
                        return !1;
                    if (a = h.firstRun = !Object.keys(h.slides).length,
                    c = h.current,
                    h.prevIndex = h.currIndex,
                    h.prevPos = h.currPos,
                    r = h.createSlide(t),
                    g > 1 && ((s || r.index < g - 1) && h.createSlide(t + 1),
                    (s || r.index > 0) && h.createSlide(t - 1)),
                    h.current = r,
                    h.currIndex = r.index,
                    h.currPos = r.pos,
                    h.trigger("beforeShow", a),
                    h.updateControls(),
                    r.forcedDuration = o,
                    n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[a ? "animationDuration" : "transitionDuration"],
                    e = parseInt(e, 10),
                    i = h.isMoved(r),
                    r.$slide.addClass("fancybox-slide--current"),
                    a)
                        return r.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"),
                        h.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                        h.loadSlide(r),
                        void h.preload("image");
                    l = n.fancybox.getTranslate(c.$slide),
                    d = n.fancybox.getTranslate(h.$refs.stage),
                    n.each(h.slides, function(t, e) {
                        n.fancybox.stop(e.$slide, !0)
                    }),
                    c.pos !== r.pos && (c.isComplete = !1),
                    c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                    i ? (f = l.left - (c.pos * l.width + c.pos * c.opts.gutter),
                    n.each(h.slides, function(t, o) {
                        o.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var a = o.pos * l.width + o.pos * o.opts.gutter;
                        n.fancybox.setTranslate(o.$slide, {
                            top: 0,
                            left: a - d.left + f
                        }),
                        o.pos !== r.pos && o.$slide.addClass("fancybox-slide--" + (o.pos > r.pos ? "next" : "previous")),
                        p(o.$slide),
                        n.fancybox.animate(o.$slide, {
                            top: 0,
                            left: (o.pos - r.pos) * l.width + (o.pos - r.pos) * o.opts.gutter
                        }, e, function() {
                            o.$slide.css({
                                transform: "",
                                opacity: ""
                            }).removeClass("fancybox-slide--next fancybox-slide--previous"),
                            o.pos === h.currPos && h.complete()
                        })
                    })) : e && r.opts.transitionEffect && (u = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect,
                    c.$slide.addClass("fancybox-slide--" + (c.pos > r.pos ? "next" : "previous")),
                    n.fancybox.animate(c.$slide, u, e, function() {
                        c.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, !1)),
                    r.isLoaded ? h.revealContent(r) : h.loadSlide(r),
                    h.preload("image")
                }
            },
            createSlide: function(t) {
                var e, o, a = this;
                return o = t % a.group.length,
                o = o < 0 ? a.group.length + o : o,
                !a.slides[t] && a.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(a.$refs.stage),
                a.slides[t] = n.extend(!0, {}, a.group[o], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }),
                a.updateSlide(a.slides[t])),
                a.slides[t]
            },
            scaleToActual: function(t, e, a) {
                var i, s, r, c, l, d = this, u = d.current, f = u.$content, p = n.fancybox.getTranslate(u.$slide).width, h = n.fancybox.getTranslate(u.$slide).height, g = u.width, b = u.height;
                d.isAnimating || d.isMoved() || !f || "image" != u.type || !u.isLoaded || u.hasError || (d.isAnimating = !0,
                n.fancybox.stop(f),
                t = t === o ? .5 * p : t,
                e = e === o ? .5 * h : e,
                i = n.fancybox.getTranslate(f),
                i.top -= n.fancybox.getTranslate(u.$slide).top,
                i.left -= n.fancybox.getTranslate(u.$slide).left,
                c = g / i.width,
                l = b / i.height,
                s = .5 * p - .5 * g,
                r = .5 * h - .5 * b,
                g > p && (s = i.left * c - (t * c - t),
                s > 0 && (s = 0),
                s < p - g && (s = p - g)),
                b > h && (r = i.top * l - (e * l - e),
                r > 0 && (r = 0),
                r < h - b && (r = h - b)),
                d.updateCursor(g, b),
                n.fancybox.animate(f, {
                    top: r,
                    left: s,
                    scaleX: c,
                    scaleY: l
                }, a || 330, function() {
                    d.isAnimating = !1
                }),
                d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, o = this, a = o.current, i = a.$content;
                o.isAnimating || o.isMoved() || !i || "image" != a.type || !a.isLoaded || a.hasError || (o.isAnimating = !0,
                n.fancybox.stop(i),
                e = o.getFitPos(a),
                o.updateCursor(e.width, e.height),
                n.fancybox.animate(i, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / i.width(),
                    scaleY: e.height / i.height()
                }, t || 330, function() {
                    o.isAnimating = !1
                }))
            },
            getFitPos: function(t) {
                var e, o, a, i, s = this, r = t.$content, c = t.$slide, l = t.width || t.opts.width, d = t.height || t.opts.height, u = {};
                return !!(t.isLoaded && r && r.length) && (e = n.fancybox.getTranslate(s.$refs.stage).width,
                o = n.fancybox.getTranslate(s.$refs.stage).height,
                e -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")),
                o -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")),
                l && d || (l = e,
                d = o),
                a = Math.min(1, e / l, o / d),
                l = a * l,
                d = a * d,
                l > e - .5 && (l = e),
                d > o - .5 && (d = o),
                "image" === t.type ? (u.top = Math.floor(.5 * (o - d)) + parseFloat(c.css("paddingTop")),
                u.left = Math.floor(.5 * (e - l)) + parseFloat(c.css("paddingLeft"))) : "video" === t.contentType && (i = t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9,
                d > l / i ? d = l / i : l > d * i && (l = d * i)),
                u.width = l,
                u.height = d,
                u)
            },
            update: function(t) {
                var e = this;
                n.each(e.slides, function(n, o) {
                    e.updateSlide(o, t)
                })
            },
            updateSlide: function(t, e) {
                var o = this
                  , a = t && t.$content
                  , i = t.width || t.opts.width
                  , s = t.height || t.opts.height
                  , r = t.$slide;
                o.adjustCaption(t),
                a && (i || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(a),
                n.fancybox.setTranslate(a, o.getFitPos(t)),
                t.pos === o.currPos && (o.isAnimating = !1,
                o.updateCursor())),
                o.adjustLayout(t),
                r.length && (r.trigger("refresh"),
                t.pos === o.currPos && o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)),
                o.trigger("onUpdate", t, e)
            },
            centerSlide: function(t) {
                var e = this
                  , a = e.current
                  , i = a.$slide;
                !e.isClosing && a && (i.siblings().css({
                    transform: "",
                    opacity: ""
                }),
                i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                n.fancybox.animate(i, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, t === o ? 0 : t, function() {
                    i.css({
                        transform: "",
                        opacity: ""
                    }),
                    a.isComplete || e.complete()
                }, !1))
            },
            isMoved: function(t) {
                var e, o, a = t || this.current;
                return !!a && (o = n.fancybox.getTranslate(this.$refs.stage),
                e = n.fancybox.getTranslate(a.$slide),
                !a.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - o.top) > .5 || Math.abs(e.left - o.left) > .5))
            },
            updateCursor: function(t, e) {
                var o, a, i = this, s = i.current, r = i.$refs.container;
                s && !i.isClosing && i.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                o = i.canPan(t, e),
                a = !!o || i.isZoomable(),
                r.toggleClass("fancybox-is-zoomable", a),
                n("[data-fancybox-zoom]").prop("disabled", !a),
                o ? r.addClass("fancybox-can-pan") : a && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? r.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || i.group.length > 1) && "video" !== s.contentType && r.addClass("fancybox-can-swipe"))
            },
            isZoomable: function() {
                var t, e = this, n = e.current;
                if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                    if (!n.isLoaded)
                        return !0;
                    if (t = e.getFitPos(n),
                    t && (n.width > t.width || n.height > t.height))
                        return !0
                }
                return !1
            },
            isScaledDown: function(t, e) {
                var a = this
                  , i = !1
                  , s = a.current
                  , r = s.$content;
                return t !== o && e !== o ? i = t < s.width && e < s.height : r && (i = n.fancybox.getTranslate(r),
                i = i.width < s.width && i.height < s.height),
                i
            },
            canPan: function(t, e) {
                var a = this
                  , i = a.current
                  , s = null
                  , r = !1;
                return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (r = a.getFitPos(i),
                t !== o && e !== o ? s = {
                    width: t,
                    height: e
                } : i.isComplete && (s = n.fancybox.getTranslate(i.$content)),
                s && r && (r = Math.abs(s.width - r.width) > 1.5 || Math.abs(s.height - r.height) > 1.5)),
                r
            },
            loadSlide: function(t) {
                var e, o, a, i = this;
                if (!t.isLoading && !t.isLoaded) {
                    if (t.isLoading = !0,
                    i.trigger("beforeLoad", t) === !1)
                        return t.isLoading = !1,
                        !1;
                    switch (e = t.type,
                    o = t.$slide,
                    o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),
                    e) {
                    case "image":
                        i.setImage(t);
                        break;
                    case "iframe":
                        i.setIframe(t);
                        break;
                    case "html":
                        i.setContent(t, t.src || t.content);
                        break;
                    case "video":
                        i.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                        break;
                    case "inline":
                        n(t.src).length ? i.setContent(t, n(t.src)) : i.setError(t);
                        break;
                    case "ajax":
                        i.showLoading(t),
                        a = n.ajax(n.extend({}, t.opts.ajax.settings, {
                            url: t.src,
                            success: function(e, n) {
                                "success" === n && i.setContent(t, e)
                            },
                            error: function(e, n) {
                                e && "abort" !== n && i.setError(t)
                            }
                        })),
                        o.one("onReset", function() {
                            a.abort()
                        });
                        break;
                    default:
                        i.setError(t)
                    }
                    return !0
                }
            },
            setImage: function(t) {
                var o, a = this;
                setTimeout(function() {
                    var e = t.$image;
                    a.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || a.showLoading(t)
                }, 50),
                a.checkSrcset(t),
                t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),
                t.opts.preload !== !1 && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width,
                t.height = t.opts.height,
                o = e.createElement("img"),
                o.onerror = function() {
                    n(this).remove(),
                    t.$ghost = null
                }
                ,
                o.onload = function() {
                    a.afterLoad(t)
                }
                ,
                t.$ghost = n(o).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)),
                a.setBigImage(t)
            },
            checkSrcset: function(e) {
                var n, o, a, i, s = e.opts.srcset || e.opts.image.srcset;
                if (s) {
                    a = t.devicePixelRatio || 1,
                    i = t.innerWidth * a,
                    o = s.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, n) {
                            var o = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === n ? e.url = t : void (o && (e.value = o,
                            e.postfix = t[t.length - 1]))
                        }),
                        e
                    }),
                    o.sort(function(t, e) {
                        return t.value - e.value
                    });
                    for (var r = 0; r < o.length; r++) {
                        var c = o[r];
                        if ("w" === c.postfix && c.value >= i || "x" === c.postfix && c.value >= a) {
                            n = c;
                            break
                        }
                    }
                    !n && o.length && (n = o[o.length - 1]),
                    n && (e.src = n.url,
                    e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value,
                    e.width = n.value),
                    e.opts.srcset = s)
                }
            },
            setBigImage: function(t) {
                var o = this
                  , a = e.createElement("img")
                  , i = n(a);
                t.$image = i.one("error", function() {
                    o.setError(t)
                }).one("load", function() {
                    var e;
                    t.$ghost || (o.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight),
                    o.afterLoad(t)),
                    o.isClosing || (t.opts.srcset && (e = t.opts.sizes,
                    e && "auto" !== e || (e = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"),
                    i.attr("sizes", e).attr("srcset", t.opts.srcset)),
                    t.$ghost && setTimeout(function() {
                        t.$ghost && !o.isClosing && t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))),
                    o.hideLoading(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content),
                (a.complete || "complete" == a.readyState) && i.naturalWidth && i.naturalHeight ? i.trigger("load") : a.error && i.trigger("error")
            },
            resolveImageSlideSize: function(t, e, n) {
                var o = parseInt(t.opts.width, 10)
                  , a = parseInt(t.opts.height, 10);
                t.width = e,
                t.height = n,
                o > 0 && (t.width = o,
                t.height = Math.floor(o * n / e)),
                a > 0 && (t.width = Math.floor(a * e / n),
                t.height = a)
            },
            setIframe: function(t) {
                var e, a = this, i = t.opts.iframe, s = t.$slide;
                n.fancybox.isMobile && (i.css.overflow = "scroll"),
                t.$content = n('<div class="fancybox-content' + (i.preload ? " fancybox-is-hidden" : "") + '"></div>').css(i.css).appendTo(s),
                s.addClass("fancybox-slide--" + t.contentType),
                t.$iframe = e = n(i.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(i.attr).appendTo(t.$content),
                i.preload ? (a.showLoading(t),
                e.on("load.fb error.fb", function(e) {
                    this.isReady = 1,
                    t.$slide.trigger("refresh"),
                    a.afterLoad(t)
                }),
                s.on("refresh.fb", function() {
                    var n, a, r = t.$content, c = i.css.width, l = i.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            n = e.contents(),
                            a = n.find("body")
                        } catch (t) {}
                        a && a.length && a.children().length && (s.css("overflow", "visible"),
                        r.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        }),
                        c === o && (c = Math.ceil(Math.max(a[0].clientWidth, a.outerWidth(!0)))),
                        r.css("width", c ? c : "").css("max-width", ""),
                        l === o && (l = Math.ceil(Math.max(a[0].clientHeight, a.outerHeight(!0)))),
                        r.css("height", l ? l : ""),
                        s.css("overflow", "auto")),
                        r.removeClass("fancybox-is-hidden")
                    }
                })) : a.afterLoad(t),
                e.attr("src", t.src),
                s.one("onReset", function() {
                    try {
                        n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (t) {}
                    n(this).off("refresh.fb").empty(),
                    t.isLoaded = !1,
                    t.isRevealed = !1
                })
            },
            setContent: function(t, e) {
                var o = this;
                o.isClosing || (o.hideLoading(t),
                t.$content && n.fancybox.stop(t.$content),
                t.$slide.empty(),
                l(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"),
                t.$placeholder = n("<div>").hide().insertAfter(e),
                e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()),
                t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                t.$slide.one("onReset", function() {
                    n(this).find("video,audio").trigger("pause"),
                    t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),
                    t.$placeholder = null),
                    t.$smallBtn && (t.$smallBtn.remove(),
                    t.$smallBtn = null),
                    t.hasError || (n(this).empty(),
                    t.isLoaded = !1,
                    t.isRevealed = !1)
                }),
                n(e).appendTo(t.$slide),
                n(e).is("video,audio") && (n(e).addClass("fancybox-video"),
                n(e).wrap("<div></div>"),
                t.contentType = "video",
                t.opts.width = t.opts.width || n(e).attr("width"),
                t.opts.height = t.opts.height || n(e).attr("height")),
                t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),
                t.$content.siblings().hide(),
                t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                t.$content.addClass("fancybox-content"),
                t.$slide.addClass("fancybox-slide--" + t.contentType),
                o.afterLoad(t))
            },
            setError: function(t) {
                t.hasError = !0,
                t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"),
                t.contentType = "html",
                this.setContent(t, this.translate(t, t.opts.errorTpl)),
                t.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(t) {
                var e = this;
                t = t || e.current,
                t && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
            },
            hideLoading: function(t) {
                var e = this;
                t = t || e.current,
                t && t.$spinner && (t.$spinner.stop().remove(),
                delete t.$spinner)
            },
            afterLoad: function(t) {
                var e = this;
                e.isClosing || (t.isLoading = !1,
                t.isLoaded = !0,
                e.trigger("afterLoad", t),
                e.hideLoading(t),
                !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(),
                    !0
                }),
                "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                e.adjustCaption(t),
                e.adjustLayout(t),
                t.pos === e.currPos && e.updateCursor(),
                e.revealContent(t))
            },
            adjustCaption: function(t) {
                var e = this
                  , n = t || e.current
                  , o = n.opts.caption
                  , a = e.$refs.caption
                  , i = !1;
                n.opts.preventCaptionOverlap && o && o.length && (n.pos !== e.currPos ? (a = a.clone().empty().appendTo(a.parent()),
                a.html(o),
                i = a.outerHeight(!0),
                a.empty().remove()) : e.$caption && (i = e.$caption.outerHeight(!0)),
                n.$slide.css("padding-bottom", i || ""))
            },
            adjustLayout: function(t) {
                var e, n, o, a, i = this, s = t || i.current;
                s.isLoaded && s.opts.disableLayoutFix !== !0 && (s.$content.css("margin-bottom", ""),
                s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"],
                a = s.$slide.css("padding-bottom"),
                parseFloat(a) > 0 && (e = s.$slide[0].scrollHeight,
                s.$slide.css("padding-bottom", 0),
                Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = a),
                s.$slide.css("padding-bottom", o))),
                s.$content.css("margin-bottom", n))
            },
            revealContent: function(t) {
                var e, a, i, s, r = this, c = t.$slide, l = !1, d = !1, u = r.isMoved(t), f = t.isRevealed;
                return t.isRevealed = !0,
                e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"],
                i = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"],
                i = parseInt(t.forcedDuration === o ? i : t.forcedDuration, 10),
                !u && t.pos === r.currPos && i || (e = !1),
                "zoom" === e && (t.pos === r.currPos && i && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = "fade"),
                "zoom" === e ? (r.isAnimating = !0,
                l.scaleX = l.width / d.width,
                l.scaleY = l.height / d.height,
                s = t.opts.zoomOpacity,
                "auto" == s && (s = Math.abs(t.width / t.height - d.width / d.height) > .1),
                s && (d.opacity = .1,
                l.opacity = 1),
                n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d),
                p(t.$content),
                void n.fancybox.animate(t.$content, l, i, function() {
                    r.isAnimating = !1,
                    r.complete()
                })) : (r.updateSlide(t),
                e ? (n.fancybox.stop(c),
                a = "fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e,
                c.addClass(a).removeClass("fancybox-slide--current"),
                t.$content.removeClass("fancybox-is-hidden"),
                p(c),
                "image" !== t.type && t.$content.hide().show(0),
                void n.fancybox.animate(c, "fancybox-slide--current", i, function() {
                    c.removeClass(a).css({
                        transform: "",
                        opacity: ""
                    }),
                    t.pos === r.currPos && r.complete()
                }, !0)) : (t.$content.removeClass("fancybox-is-hidden"),
                f || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"),
                void (t.pos === r.currPos && r.complete())))
            },
            getThumbPos: function(t) {
                var e, o, a, i, s, r = !1, c = t.$thumb;
                return !(!c || !g(c[0])) && (e = n.fancybox.getTranslate(c),
                o = parseFloat(c.css("border-top-width") || 0),
                a = parseFloat(c.css("border-right-width") || 0),
                i = parseFloat(c.css("border-bottom-width") || 0),
                s = parseFloat(c.css("border-left-width") || 0),
                r = {
                    top: e.top + o,
                    left: e.left + s,
                    width: e.width - a - s,
                    height: e.height - o - i,
                    scaleX: 1,
                    scaleY: 1
                },
                e.width > 0 && e.height > 0 && r)
            },
            complete: function() {
                var t, e = this, o = e.current, a = {};
                !e.isMoved() && o.isLoaded && (o.isComplete || (o.isComplete = !0,
                o.$slide.siblings().trigger("onReset"),
                e.preload("inline"),
                p(o.$slide),
                o.$slide.addClass("fancybox-slide--complete"),
                n.each(e.slides, function(t, o) {
                    o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1 ? a[o.pos] = o : o && (n.fancybox.stop(o.$slide),
                    o.$slide.off().remove())
                }),
                e.slides = a),
                e.isAnimating = !1,
                e.updateCursor(),
                e.trigger("afterShow"),
                o.opts.video.autoStart && o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                    this.webkitExitFullscreen && this.webkitExitFullscreen(),
                    e.next()
                }),
                o.opts.autoFocus && "html" === o.contentType && (t = o.$content.find("input[autofocus]:enabled:visible:first"),
                t.length ? t.trigger("focus") : e.focus(null, !0)),
                o.$slide.scrollTop(0).scrollLeft(0))
            },
            preload: function(t) {
                var e, n, o = this;
                o.group.length < 2 || (n = o.slides[o.currPos + 1],
                e = o.slides[o.currPos - 1],
                e && e.type === t && o.loadSlide(e),
                n && n.type === t && o.loadSlide(n))
            },
            focus: function(t, o) {
                var a, i, s = this, r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                s.isClosing || (a = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (o ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible"),
                a = a.filter(r).filter(function() {
                    return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled")
                }),
                a.length ? (i = a.index(e.activeElement),
                t && t.shiftKey ? (i < 0 || 0 == i) && (t.preventDefault(),
                a.eq(a.length - 1).trigger("focus")) : (i < 0 || i == a.length - 1) && (t && t.preventDefault(),
                a.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"))
            },
            activate: function() {
                var t = this;
                n(".fancybox-container").each(function() {
                    var e = n(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"),
                    e.removeEvents(),
                    e.isVisible = !1)
                }),
                t.isVisible = !0,
                (t.current || t.isIdle) && (t.update(),
                t.updateControls()),
                t.trigger("onActivate"),
                t.addEvents()
            },
            close: function(t, e) {
                var o, a, i, s, r, c, l, u = this, f = u.current, h = function() {
                    u.cleanUp(t)
                };
                return !u.isClosing && (u.isClosing = !0,
                u.trigger("beforeClose", t) === !1 ? (u.isClosing = !1,
                d(function() {
                    u.update()
                }),
                !1) : (u.removeEvents(),
                i = f.$content,
                o = f.opts.animationEffect,
                a = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0,
                f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                t !== !0 ? n.fancybox.stop(f.$slide) : o = !1,
                f.$slide.siblings().trigger("onReset").remove(),
                a && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", a + "ms"),
                u.hideLoading(f),
                u.hideControls(!0),
                u.updateCursor(),
                "zoom" !== o || i && a && "image" === f.type && !u.isMoved() && !f.hasError && (l = u.getThumbPos(f)) || (o = "fade"),
                "zoom" === o ? (n.fancybox.stop(i),
                s = n.fancybox.getTranslate(i),
                c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height
                },
                r = f.opts.zoomOpacity,
                "auto" == r && (r = Math.abs(f.width / f.height - l.width / l.height) > .1),
                r && (l.opacity = 0),
                n.fancybox.setTranslate(i, c),
                p(i),
                n.fancybox.animate(i, l, a, h),
                !0) : (o && a ? n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, a, h) : t === !0 ? setTimeout(h, a) : h(),
                !0)))
            },
            cleanUp: function(e) {
                var o, a, i, s = this, r = s.current.opts.$orig;
                s.current.$slide.trigger("onReset"),
                s.$refs.container.empty().remove(),
                s.trigger("afterClose", e),
                s.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = s.$trigger),
                r && r.length && (a = t.scrollX,
                i = t.scrollY,
                r.trigger("focus"),
                n("html, body").scrollTop(i).scrollLeft(a))),
                s.current = null,
                o = n.fancybox.getInstance(),
                o ? o.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"),
                n("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var o, a = Array.prototype.slice.call(arguments, 1), i = this, s = e && e.opts ? e : i.current;
                return s ? a.unshift(s) : s = i,
                a.unshift(i),
                n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, a)),
                o === !1 ? o : void ("afterClose" !== t && i.$refs ? i.$refs.container.trigger(t + ".fb", a) : r.trigger(t + ".fb", a))
            },
            updateControls: function() {
                var t = this
                  , o = t.current
                  , a = o.index
                  , i = t.$refs.container
                  , s = t.$refs.caption
                  , r = o.opts.caption;
                o.$slide.trigger("refresh"),
                t.$caption = r && r.length ? s.html(r) : null,
                t.hasHiddenControls || t.isIdle || t.showControls(),
                i.find("[data-fancybox-count]").html(t.group.length),
                i.find("[data-fancybox-index]").html(a + 1),
                i.find("[data-fancybox-prev]").prop("disabled", !o.opts.loop && a <= 0),
                i.find("[data-fancybox-next]").prop("disabled", !o.opts.loop && a >= t.group.length - 1),
                "image" === o.type ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", o.opts.image.src || o.src).show() : o.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
            },
            hideControls: function(t) {
                var e = this
                  , n = ["infobar", "toolbar", "nav"];
                !t && e.current.opts.preventCaptionOverlap || n.push("caption"),
                this.$refs.container.removeClass(n.map(function(t) {
                    return "fancybox-show-" + t
                }).join(" ")),
                this.hasHiddenControls = !0
            },
            showControls: function() {
                var t = this
                  , e = t.current ? t.current.opts : t.opts
                  , n = t.$refs.container;
                t.hasHiddenControls = !1,
                t.idleSecondsCounter = 0,
                n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
            },
            toggleControls: function() {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        }),
        n.fancybox = {
            version: "3.5.2",
            defaults: i,
            getInstance: function(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                  , o = Array.prototype.slice.call(arguments, 1);
                return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o),
                e)
            },
            open: function(t, e, n) {
                return new b(t,e,n)
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(),
                t === !0 && this.close(t))
            },
            destroy: function() {
                this.close(!0),
                r.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var n = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
            }(),
            getTranslate: function(t) {
                var e;
                return !(!t || !t.length) && (e = t[0].getBoundingClientRect(),
                {
                    top: e.top || 0,
                    left: e.left || 0,
                    width: e.width,
                    height: e.height,
                    opacity: parseFloat(t.css("opacity"))
                })
            },
            setTranslate: function(t, e) {
                var n = ""
                  , a = {};
                if (t && e)
                    return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px",
                    n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"),
                    e.scaleX !== o && e.scaleY !== o ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : e.scaleX !== o && (n += " scaleX(" + e.scaleX + ")"),
                    n.length && (a.transform = n),
                    e.opacity !== o && (a.opacity = e.opacity),
                    e.width !== o && (a.width = e.width),
                    e.height !== o && (a.height = e.height),
                    t.css(a)
            },
            animate: function(t, e, a, i, s) {
                var r, c = this;
                n.isFunction(a) && (i = a,
                a = null),
                c.stop(t),
                r = c.getTranslate(t),
                t.on(f, function(l) {
                    (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (c.stop(t),
                    n.isNumeric(a) && t.css("transition-duration", ""),
                    n.isPlainObject(e) ? e.scaleX !== o && e.scaleY !== o && c.setTranslate(t, {
                        top: e.top,
                        left: e.left,
                        width: r.width * e.scaleX,
                        height: r.height * e.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : s !== !0 && t.removeClass(e),
                    n.isFunction(i) && i(l))
                }),
                n.isNumeric(a) && t.css("transition-duration", a + "ms"),
                n.isPlainObject(e) ? (e.scaleX !== o && e.scaleY !== o && (delete e.width,
                delete e.height,
                t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")),
                n.fancybox.setTranslate(t, e)) : t.addClass(e),
                t.data("timer", setTimeout(function() {
                    t.trigger(f)
                }, a + 33))
            },
            stop: function(t, e) {
                t && t.length && (clearTimeout(t.data("timer")),
                e && t.trigger(f),
                t.off(f).css("transition-duration", ""),
                t.parent().removeClass("fancybox-is-scaling"))
            }
        },
        n.fn.fancybox = function(t) {
            var e;
            return t = t || {},
            e = t.selector || !1,
            e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, a) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, a),
            this
        }
        ,
        r.on("click.fb-start", "[data-fancybox]", a),
        r.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
            n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                $trigger: n(this)
            })
        }),
        function() {
            var t = ".fancybox-button"
              , e = "fancybox-focus"
              , o = null;
            r.on("mousedown mouseup focus blur", t, function(a) {
                switch (a.type) {
                case "mousedown":
                    o = n(this);
                    break;
                case "mouseup":
                    o = null;
                    break;
                case "focusin":
                    n(t).removeClass(e),
                    n(this).is(o) || n(this).is("[disabled]") || n(this).addClass(e);
                    break;
                case "focusout":
                    n(t).removeClass(e)
                }
            })
        }()
    }
}(window, document, jQuery),
function(t) {
    "use strict";
    var e = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube-nocookie.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    }
      , n = function(e, n, o) {
        if (e)
            return o = o || "",
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function(t, n) {
                e = e.replace("$" + t, n || "")
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
    };
    t(document).on("objectNeedsType.fb", function(o, a, i) {
        var s, r, c, l, d, u, f, p = i.src || "", h = !1;
        s = t.extend(!0, {}, e, i.opts.media),
        t.each(s, function(e, o) {
            if (c = p.match(o.matcher)) {
                if (h = o.type,
                f = e,
                u = {},
                o.paramPlace && c[o.paramPlace]) {
                    d = c[o.paramPlace],
                    "?" == d[0] && (d = d.substring(1)),
                    d = d.split("&");
                    for (var a = 0; a < d.length; ++a) {
                        var s = d[a].split("=", 2);
                        2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
                    }
                }
                return l = t.extend(!0, {}, o.params, i.opts[e], u),
                p = "function" === t.type(o.url) ? o.url.call(this, c, l, i) : n(o.url, c, l),
                r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, i) : n(o.thumb, c),
                "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === e && (p = p.replace("&%23", "#")),
                !1
            }
        }),
        h ? (i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = r),
        "iframe" === h && (i.opts = t.extend(!0, i.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })),
        t.extend(i, {
            type: h,
            src: p,
            origSrc: i.src,
            contentSource: f,
            contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
        })) : p && (i.type = i.opts.defaultType)
    });
    var o = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(t) {
            var e, n = this;
            return this[t].loaded ? void setTimeout(function() {
                n.done(t)
            }) : void (this[t].loading || (this[t].loading = !0,
            e = document.createElement("script"),
            e.type = "text/javascript",
            e.src = this[t].src,
            "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                n[t].loaded = !0,
                n.done(t)
            }
            : e.onload = function() {
                n[t].loaded = !0,
                n.done(t)
            }
            ,
            document.body.appendChild(e)))
        },
        done: function(e) {
            var n, o, a;
            "youtube" === e && delete window.onYouTubeIframeAPIReady,
            n = t.fancybox.getInstance(),
            n && (o = n.current.$content.find("iframe"),
            "youtube" === e && void 0 !== YT && YT ? a = new YT.Player(o.attr("id"),{
                events: {
                    onStateChange: function(t) {
                        0 == t.data && n.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && (a = new Vimeo.Player(o),
            a.on("ended", function() {
                n.next()
            })))
        }
    };
    t(document).on({
        "afterShow.fb": function(t, e, n) {
            e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && o.load(n.contentSource)
        }
    })
}(jQuery),
function(t, e, n) {
    "use strict";
    var o = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        }
    }()
      , a = function() {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        }
    }()
      , i = function(e) {
        var n = [];
        e = e.originalEvent || e || t.e,
        e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
        for (var o in e)
            e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
        return n
    }
      , s = function(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }
      , r = function(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable"))
            return !0;
        for (var e = 0, o = t[0].attributes, a = o.length; e < a; e++)
            if ("data-fancybox-" === o[e].nodeName.substr(0, 14))
                return !0;
        return !1
    }
      , c = function(e) {
        var n = t.getComputedStyle(e)["overflow-y"]
          , o = t.getComputedStyle(e)["overflow-x"]
          , a = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight
          , i = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return a || i
    }
      , l = function(t) {
        for (var e = !1; ; ) {
            if (e = c(t.get(0)))
                break;
            if (t = t.parent(),
            !t.length || t.hasClass("fancybox-stage") || t.is("body"))
                break
        }
        return e
    }
      , d = function(t) {
        var e = this;
        e.instance = t,
        e.$bg = t.$refs.bg,
        e.$stage = t.$refs.stage,
        e.$container = t.$refs.container,
        e.destroy(),
        e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
    };
    d.prototype.destroy = function() {
        var t = this;
        t.$container.off(".fb.touch"),
        n(e).off(".fb.touch"),
        t.requestId && (a(t.requestId),
        t.requestId = null),
        t.tapped && (clearTimeout(t.tapped),
        t.tapped = null)
    }
    ,
    d.prototype.ontouchstart = function(o) {
        var a = this
          , c = n(o.target)
          , d = a.instance
          , u = d.current
          , f = u.$slide
          , p = u.$content
          , h = "touchstart" == o.type;
        if (h && a.$container.off("mousedown.fb.touch"),
        (!o.originalEvent || 2 != o.originalEvent.button) && f.length && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
                return o.stopPropagation(),
                void o.preventDefault();
            a.realPoints = a.startPoints = i(o),
            a.startPoints.length && (u.touch && o.stopPropagation(),
            a.startEvent = o,
            a.canTap = !0,
            a.$target = c,
            a.$content = p,
            a.opts = u.opts.touch,
            a.isPanning = !1,
            a.isSwiping = !1,
            a.isZooming = !1,
            a.isScrolling = !1,
            a.canPan = d.canPan(),
            a.startTime = (new Date).getTime(),
            a.distanceX = a.distanceY = a.distance = 0,
            a.canvasWidth = Math.round(f[0].clientWidth),
            a.canvasHeight = Math.round(f[0].clientHeight),
            a.contentLastPos = null,
            a.contentStartPos = n.fancybox.getTranslate(a.$content) || {
                top: 0,
                left: 0
            },
            a.sliderStartPos = n.fancybox.getTranslate(f),
            a.stagePos = n.fancybox.getTranslate(d.$refs.stage),
            a.sliderStartPos.top -= a.stagePos.top,
            a.sliderStartPos.left -= a.stagePos.left,
            a.contentStartPos.top -= a.stagePos.top,
            a.contentStartPos.left -= a.stagePos.left,
            n(e).off(".fb.touch").on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(a, "ontouchend")).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(a, "ontouchmove")),
            n.fancybox.isMobile && e.addEventListener("scroll", a.onscroll, !0),
            ((a.opts || a.canPan) && (c.is(a.$stage) || a.$stage.find(c).length) || (c.is(".fancybox-image") && o.preventDefault(),
            n.fancybox.isMobile && c.hasClass("fancybox-caption"))) && (a.isScrollable = l(c) || l(c.parent()),
            n.fancybox.isMobile && a.isScrollable || o.preventDefault(),
            (1 === a.startPoints.length || u.hasError) && (a.canPan ? (n.fancybox.stop(a.$content),
            a.isPanning = !0) : a.isSwiping = !0,
            a.$container.addClass("fancybox-is-grabbing")),
            2 === a.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (a.canTap = !1,
            a.isSwiping = !1,
            a.isPanning = !1,
            a.isZooming = !0,
            n.fancybox.stop(a.$content),
            a.centerPointStartX = .5 * (a.startPoints[0].x + a.startPoints[1].x) - n(t).scrollLeft(),
            a.centerPointStartY = .5 * (a.startPoints[0].y + a.startPoints[1].y) - n(t).scrollTop(),
            a.percentageOfImageAtPinchPointX = (a.centerPointStartX - a.contentStartPos.left) / a.contentStartPos.width,
            a.percentageOfImageAtPinchPointY = (a.centerPointStartY - a.contentStartPos.top) / a.contentStartPos.height,
            a.startDistanceBetweenFingers = s(a.startPoints[0], a.startPoints[1]))))
        }
    }
    ,
    d.prototype.onscroll = function(t) {
        var n = this;
        n.isScrolling = !0,
        e.removeEventListener("scroll", n.onscroll, !0)
    }
    ,
    d.prototype.ontouchmove = function(t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = i(t),
        void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && e.isSwiping === !0 || t.preventDefault(),
        e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"),
        e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"),
        e.distance = s(e.newPoints[0], e.startPoints[0]),
        e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }
    ,
    d.prototype.onSwipe = function(e) {
        var i, s = this, r = s.instance, c = s.isSwiping, l = s.sliderStartPos.left || 0;
        if (c !== !0)
            "x" == c && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? l += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? l -= Math.pow(-s.distanceX, .8) : l += s.distanceX),
            s.sliderLastPos = {
                top: "x" == c ? 0 : s.sliderStartPos.top + s.distanceY,
                left: l
            },
            s.requestId && (a(s.requestId),
            s.requestId = null),
            s.requestId = o(function() {
                s.sliderLastPos && (n.each(s.instance.slides, function(t, e) {
                    var o = e.pos - s.instance.currPos;
                    n.fancybox.setTranslate(e.$slide, {
                        top: s.sliderLastPos.top,
                        left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
                    })
                }),
                s.$container.addClass("fancybox-is-sliding"))
            });
        else if (Math.abs(s.distance) > 10) {
            if (s.canTap = !1,
            r.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : r.isDragging || s.opts.vertical === !1 || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (i = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI),
            s.isSwiping = i > 45 && i < 135 ? "y" : "x"),
            "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
                return void (s.isScrolling = !0);
            r.isDragging = s.isSwiping,
            s.startPoints = s.newPoints,
            n.each(r.slides, function(t, e) {
                var o, a;
                n.fancybox.stop(e.$slide),
                o = n.fancybox.getTranslate(e.$slide),
                a = n.fancybox.getTranslate(r.$refs.stage),
                e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function(t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }),
                e.pos === r.current.pos && (s.sliderStartPos.top = o.top - a.top,
                s.sliderStartPos.left = o.left - a.left),
                n.fancybox.setTranslate(e.$slide, {
                    top: o.top - a.top,
                    left: o.left - a.left
                })
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
    }
    ,
    d.prototype.onPan = function() {
        var t = this;
        return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void (t.startPoints = t.newPoints) : (t.canTap = !1,
        t.contentLastPos = t.limitMovement(),
        t.requestId && a(t.requestId),
        void (t.requestId = o(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
        })))
    }
    ,
    d.prototype.limitMovement = function() {
        var t, e, n, o, a, i, s = this, r = s.canvasWidth, c = s.canvasHeight, l = s.distanceX, d = s.distanceY, u = s.contentStartPos, f = u.left, p = u.top, h = u.width, g = u.height;
        return a = h > r ? f + l : f,
        i = p + d,
        t = Math.max(0, .5 * r - .5 * h),
        e = Math.max(0, .5 * c - .5 * g),
        n = Math.min(r - h, .5 * r - .5 * h),
        o = Math.min(c - g, .5 * c - .5 * g),
        l > 0 && a > t && (a = t - 1 + Math.pow(-t + f + l, .8) || 0),
        l < 0 && a < n && (a = n + 1 - Math.pow(n - f - l, .8) || 0),
        d > 0 && i > e && (i = e - 1 + Math.pow(-e + p + d, .8) || 0),
        d < 0 && i < o && (i = o + 1 - Math.pow(o - p - d, .8) || 0),
        {
            top: i,
            left: a
        }
    }
    ,
    d.prototype.limitPosition = function(t, e, n, o) {
        var a = this
          , i = a.canvasWidth
          , s = a.canvasHeight;
        return n > i ? (t = t > 0 ? 0 : t,
        t = t < i - n ? i - n : t) : t = Math.max(0, i / 2 - n / 2),
        o > s ? (e = e > 0 ? 0 : e,
        e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2),
        {
            top: e,
            left: t
        }
    }
    ,
    d.prototype.onZoom = function() {
        var e = this
          , i = e.contentStartPos
          , r = i.width
          , c = i.height
          , l = i.left
          , d = i.top
          , u = s(e.newPoints[0], e.newPoints[1])
          , f = u / e.startDistanceBetweenFingers
          , p = Math.floor(r * f)
          , h = Math.floor(c * f)
          , g = (r - p) * e.percentageOfImageAtPinchPointX
          , b = (c - h) * e.percentageOfImageAtPinchPointY
          , m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft()
          , v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop()
          , y = m - e.centerPointStartX
          , x = v - e.centerPointStartY
          , w = l + (g + y)
          , $ = d + (b + x)
          , S = {
            top: $,
            left: w,
            scaleX: f,
            scaleY: f
        };
        e.canTap = !1,
        e.newWidth = p,
        e.newHeight = h,
        e.contentLastPos = S,
        e.requestId && a(e.requestId),
        e.requestId = o(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }
    ,
    d.prototype.ontouchend = function(t) {
        var o = this
          , s = o.isSwiping
          , r = o.isPanning
          , c = o.isZooming
          , l = o.isScrolling;
        return o.endPoints = i(t),
        o.dMs = Math.max((new Date).getTime() - o.startTime, 1),
        o.$container.removeClass("fancybox-is-grabbing"),
        n(e).off(".fb.touch"),
        e.removeEventListener("scroll", o.onscroll, !0),
        o.requestId && (a(o.requestId),
        o.requestId = null),
        o.isSwiping = !1,
        o.isPanning = !1,
        o.isZooming = !1,
        o.isScrolling = !1,
        o.instance.isDragging = !1,
        o.canTap ? o.onTap(t) : (o.speed = 100,
        o.velocityX = o.distanceX / o.dMs * .5,
        o.velocityY = o.distanceY / o.dMs * .5,
        void (r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l)))
    }
    ,
    d.prototype.endSwiping = function(t, e) {
        var o = this
          , a = !1
          , i = o.instance.group.length
          , s = Math.abs(o.distanceX)
          , r = "x" == t && i > 1 && (o.dMs > 130 && s > 10 || s > 50)
          , c = 300;
        o.sliderLastPos = null,
        "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
            top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
            opacity: 0
        }, 200),
        a = o.instance.close(!0, 250)) : r && o.distanceX > 0 ? a = o.instance.previous(c) : r && o.distanceX < 0 && (a = o.instance.next(c)),
        a !== !1 || "x" != t && "y" != t || o.instance.centerSlide(200),
        o.$container.removeClass("fancybox-is-sliding")
    }
    ,
    d.prototype.endPanning = function() {
        var t, e, o, a = this;
        a.contentLastPos && (a.opts.momentum === !1 || a.dMs > 350 ? (t = a.contentLastPos.left,
        e = a.contentLastPos.top) : (t = a.contentLastPos.left + 500 * a.velocityX,
        e = a.contentLastPos.top + 500 * a.velocityY),
        o = a.limitPosition(t, e, a.contentStartPos.width, a.contentStartPos.height),
        o.width = a.contentStartPos.width,
        o.height = a.contentStartPos.height,
        n.fancybox.animate(a.$content, o, 330))
    }
    ,
    d.prototype.endZooming = function() {
        var t, e, o, a, i = this, s = i.instance.current, r = i.newWidth, c = i.newHeight;
        i.contentLastPos && (t = i.contentLastPos.left,
        e = i.contentLastPos.top,
        a = {
            top: e,
            left: t,
            width: r,
            height: c,
            scaleX: 1,
            scaleY: 1
        },
        n.fancybox.setTranslate(i.$content, a),
        r < i.canvasWidth && c < i.canvasHeight ? i.instance.scaleToFit(150) : r > s.width || c > s.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (o = i.limitPosition(t, e, r, c),
        n.fancybox.animate(i.$content, o, 150)))
    }
    ,
    d.prototype.onTap = function(e) {
        var o, a = this, s = n(e.target), r = a.instance, c = r.current, l = e && i(e) || a.startPoints, d = l[0] ? l[0].x - n(t).scrollLeft() - a.stagePos.left : 0, u = l[0] ? l[0].y - n(t).scrollTop() - a.stagePos.top : 0, f = function(t) {
            var o = c.opts[t];
            if (n.isFunction(o) && (o = o.apply(r, [c, e])),
            o)
                switch (o) {
                case "close":
                    r.close(a.startEvent);
                    break;
                case "toggleControls":
                    r.toggleControls();
                    break;
                case "next":
                    r.next();
                    break;
                case "nextOrClose":
                    r.group.length > 1 ? r.next() : r.close(a.startEvent);
                    break;
                case "zoom":
                    "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(a.startEvent))
                }
        };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                o = "Outside";
            else if (s.is(".fancybox-slide"))
                o = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length)
                    return;
                o = "Content"
            }
            if (a.tapped) {
                if (clearTimeout(a.tapped),
                a.tapped = null,
                Math.abs(d - a.tapX) > 50 || Math.abs(u - a.tapY) > 50)
                    return this;
                f("dblclick" + o)
            } else
                a.tapX = d,
                a.tapY = u,
                c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? a.tapped = setTimeout(function() {
                    a.tapped = null,
                    r.isAnimating || f("click" + o)
                }, 500) : f("click" + o);
            return this
        }
    }
    ,
    n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new d(e))
    }).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function(t) {
        this.instance = t,
        this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this
              , n = t.instance
              , o = n.group[n.currIndex].opts.slideShow;
            t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }),
            n.group.length < 2 || !o ? t.$button.hide() : o.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))
        },
        set: function(t) {
            var n = this
              , o = n.instance
              , a = o.current;
            a && (t === !0 || a.opts.loop || o.currIndex < o.group.length - 1) ? n.isActive && "video" !== a.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, a.opts.slideShow.speed),
            n.timer = setTimeout(function() {
                o.current.opts.loop || o.current.index != o.group.length - 1 ? o.next() : o.jumpTo(0)
            }, a.opts.slideShow.speed)) : (n.stop(),
            o.idleSecondsCounter = 0,
            o.showControls())
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer),
            t.timer = null,
            t.$progress && t.$progress.removeAttr("style").hide()
        },
        start: function() {
            var t = this
              , e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),
            t.isActive = !0,
            e.isComplete && t.set(!0),
            t.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var t = this
              , e = t.instance.current;
            t.clear(),
            t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),
            t.isActive = !1,
            t.instance.trigger("onSlideShowChange", !1),
            t.$progress && t.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, o) {
            var a = e && e.SlideShow;
            o ? a && n.opts.slideShow.autoStart && a.start() : a && a.isActive && a.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function(n, o, a, i, s) {
            var r = o && o.SlideShow;
            !r || !a.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (i.preventDefault(),
            r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }),
    e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance()
          , o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set())
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            if (a && a[1]in t) {
                for (var i = 0; i < a.length; i++)
                    n[e[0][i]] = a[i];
                return n
            }
        }
        return !1
    }();
    if (n) {
        var o = {
            request: function(e) {
                e = e || t.documentElement,
                e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                t[n.exitFullscreen]()
            },
            toggle: function(e) {
                e = e || t.documentElement,
                this.isFullscreen() ? this.exit() : this.request(e)
            },
            isFullscreen: function() {
                return Boolean(t[n.fullscreenElement])
            },
            enabled: function() {
                return Boolean(t[n.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }),
        e(t).on(n.fullscreenchange, function() {
            var t = o.isFullscreen()
              , n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"),
            n.isAnimating = !1,
            n.update(!0, !0, 0)),
            n.trigger("onFullscreenChange", t),
            n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
            n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    e(t).on({
        "onInit.fb": function(t, e) {
            var a;
            return n ? void (e && e.group[e.currIndex].opts.fullScreen ? (a = e.$refs.container,
            a.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                o.toggle()
            }),
            e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(),
            e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()) : void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function(t, e, n, o, a) {
            e && e.FullScreen && 70 === a && (o.preventDefault(),
            e.FullScreen.toggle())
        },
        "beforeClose.fb": function(t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = "fancybox-thumbs"
      , o = n + "-active";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var a = function(t) {
        this.init(t)
    };
    e.extend(a.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this
              , n = t.group
              , o = 0;
            e.instance = t,
            e.opts = n[t.currIndex].opts.thumbs,
            t.Thumbs = e,
            e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var a = 0, i = n.length; a < i && (n[a].thumb && o++,
            !(o > 1)); a++)
                ;
            o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function() {
                e.toggle()
            }),
            e.isActive = !0) : e.$button.hide()
        },
        create: function() {
            var t, o = this, a = o.instance, i = o.opts.parentEl, s = [];
            o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(a.$refs.container.find(i).addBack().filter(i)),
            o.$grid.on("click", "a", function() {
                a.jumpTo(e(this).attr("data-index"))
            })),
            o.$list || (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
            e.each(a.group, function(e, n) {
                t = n.thumb,
                t || "image" !== n.type || (t = n.src),
                s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }),
            o.$list[0].innerHTML = s.join(""),
            "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + a.group.length * o.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(t) {
            var e, n, a = this, i = a.$list, s = a.$grid;
            a.instance.current && (e = i.children().removeClass(o).filter('[data-index="' + a.instance.current.index + '"]').addClass(o),
            n = e.position(),
            "y" === a.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({
                scrollTop: i.scrollTop() + n.top
            }, t) : "x" === a.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && i.parent().stop().animate({
                scrollLeft: n.left
            }, t))
        },
        update: function() {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
            t.isVisible ? (t.$grid || t.create(),
            t.instance.trigger("onThumbsShow"),
            t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
            t.instance.update()
        },
        hide: function() {
            this.isVisible = !1,
            this.update()
        },
        show: function() {
            this.isVisible = !0,
            this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible,
            this.update()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && !e.Thumbs && (n = new a(e),
            n.isActive && n.opts.autoStart === !0 && n.show())
        },
        "beforeShow.fb": function(t, e, n, o) {
            var a = e && e.Thumbs;
            a && a.isVisible && a.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function(t, e, n, o, a) {
            var i = e && e.Thumbs;
            i && i.isActive && 71 === a && (o.preventDefault(),
            i.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide()
        }
    })
}(document, jQuery),
function(t, e) {
    "use strict";
    function n(t) {
        var e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(t).replace(/[&<>"'`=\/]/g, function(t) {
            return e[t]
        })
    }
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }),
    e(t).on("click", "[data-fancybox-share]", function() {
        var t, o, a = e.fancybox.getInstance(), i = a.current || null;
        i && ("function" === e.type(i.opts.share.url) && (t = i.opts.share.url.apply(i, [a, i])),
        o = i.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, a.$caption ? encodeURIComponent(a.$caption.text()) : ""),
        e.fancybox.open({
            src: a.translate(a, o),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(t, e) {
                    a.$refs.container.one("beforeClose.fb", function() {
                        t.close(null, 0)
                    }),
                    e.$content.find(".fancybox-share__button").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"),
                        !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function(t, e, n) {
    "use strict";
    function o() {
        var e = t.location.hash.substr(1)
          , n = e.split("-")
          , o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1
          , a = n.join("-");
        return {
            hash: e,
            index: o < 1 ? 1 : o,
            gallery: a
        }
    }
    function a(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }
    function i(t) {
        var e, n;
        return !!t && (e = t.current ? t.current.opts : t.opts,
        n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : ""),
        "" !== n && n)
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g
          , n = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        };
        return (t + "").replace(e, n)
    }
    ),
    n(function() {
        n.fancybox.defaults.hash !== !1 && (n(e).on({
            "onInit.fb": function(t, e) {
                var n, a;
                e.group[e.currIndex].opts.hash !== !1 && (n = o(),
                a = i(e),
                a && n.gallery && a == n.gallery && (e.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(n, o, a, s) {
                var r;
                a && a.opts.hash !== !1 && (r = i(o),
                r && (o.currentHash = r + (o.group.length > 1 ? "-" + (a.index + 1) : ""),
                t.location.hash !== "#" + o.currentHash && (s && !o.origHash && (o.origHash = t.location.hash),
                o.hashTimer && clearTimeout(o.hashTimer),
                o.hashTimer = setTimeout(function() {
                    "replaceState"in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + o.currentHash),
                    s && (o.hasCreatedHistory = !0)) : t.location.hash = o.currentHash,
                    o.hashTimer = null
                }, 300))))
            },
            "beforeClose.fb": function(n, o, a) {
                a.opts.hash !== !1 && (clearTimeout(o.hashTimer),
                o.currentHash && o.hasCreatedHistory ? t.history.back() : o.currentHash && ("replaceState"in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (o.origHash || "")) : t.location.hash = o.origHash),
                o.currentHash = null)
            }
        }),
        n(t).on("hashchange.fb", function() {
            var t = o()
              , e = null;
            n.each(n(".fancybox-container").get().reverse(), function(t, o) {
                var a = n(o).data("FancyBox");
                if (a && a.currentHash)
                    return e = a,
                    !1
            }),
            e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null,
            e.close()) : "" !== t.gallery && a(t)
        }),
        setTimeout(function() {
            n.fancybox.getInstance() || a(o())
        }, 50))
    })
}(window, document, jQuery),
function(t, e) {
    "use strict";
    var n = (new Date).getTime();
    e(t).on({
        "onInit.fb": function(t, e, o) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                var o = e.current
                  , a = (new Date).getTime();
                e.group.length < 2 || o.opts.wheel === !1 || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(),
                t.stopPropagation(),
                o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t,
                a - n < 250 || (n = a,
                e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery);

(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(d) {
    var c = "ellipsis"
      , b = '<span style="white-space: nowrap;">'
      , e = {
        lines: "auto",
        ellipClass: "ellip",
        responsive: false
    };
    function a(h, q) {
        var m = this, w = 0, g = [], k, p, i, f, j, n, s;
        m.$cont = d(h);
        m.opts = d.extend({}, e, q);
        function o() {
            m.text = m.$cont.text();
            m.opts.ellipLineClass = m.opts.ellipClass + "-line";
            m.$el = d('<span class="' + m.opts.ellipClass + '" />');
            m.$el.text(m.text);
            m.$cont.empty().append(m.$el);
            t()
        }
        function t() {
            if (typeof m.opts.lines === "number" && m.opts.lines < 2) {
                m.$el.addClass(m.opts.ellipLineClass);
                return
            }
            n = m.$cont.height();
            if (m.opts.lines === "auto" && m.$el.prop("scrollHeight") <= n) {
                return
            }
            if (!k) {
                return
            }
            s = d.trim(m.text).split(/\s+/);
            m.$el.html(b + s.join("</span> " + b) + "</span>");
            m.$el.find("span").each(k);
            if (p != null) {
                u(p)
            }
        }
        function u(x) {
            s[x] = '<span class="' + m.opts.ellipLineClass + '">' + s[x];
            s.push("</span>");
            m.$el.html(s.join(" "))
        }
        if (m.opts.lines === "auto") {
            var r = function(y, A) {
                var x = d(A)
                  , z = x.position().top;
                j = j || x.height();
                if (z === f) {
                    g[w].push(x)
                } else {
                    f = z;
                    w += 1;
                    g[w] = [x]
                }
                if (z + j > n) {
                    p = y - g[w - 1].length;
                    return false
                }
            };
            k = r
        }
        if (typeof m.opts.lines === "number" && m.opts.lines > 1) {
            var l = function(y, A) {
                var x = d(A)
                  , z = x.position().top;
                if (z !== f) {
                    f = z;
                    w += 1
                }
                if (w === m.opts.lines) {
                    p = y;
                    return false
                }
            };
            k = l
        }
        if (m.opts.responsive) {
            var v = function() {
                g = [];
                w = 0;
                f = null;
                p = null;
                m.$el.html(m.text);
                clearTimeout(i);
                i = setTimeout(t, 100)
            };
            d(window).on("resize." + c, v)
        }
        o()
    }
    d.fn[c] = function(f) {
        return this.each(function() {
            try {
                d(this).data(c, (new a(this,f)))
            } catch (g) {
                if (window.console) {
                    console.error(c + ": " + g)
                }
            }
        })
    }
}));

$(document).ready(function() {

    $('.ellipsis-single-line').ellipsis({
        lines: 1,
        // force ellipsis after a certain number of lines. Default is 'auto'
        ellipClass: 'ellip',
        // class used for ellipsis wrapper and to namespace ellip line
        responsive: true // set to true if you want ellipsis to update on window resize. Default is false
    });

    $('.two-lines').ellipsis({
        lines: 2,
        responsive: false
    });
    $('.three-lines').ellipsis({
        lines: 3,
        responsive: false
    });

});
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
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o])
                return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t),
            i.loaded = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.p = "dist/",
        t(0)
    }([function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }
          , r = n(1)
          , a = (o(r),
        n(6))
          , u = o(a)
          , c = n(7)
          , f = o(c)
          , s = n(8)
          , d = o(s)
          , l = n(9)
          , p = o(l)
          , m = n(10)
          , b = o(m)
          , v = n(11)
          , y = o(v)
          , g = n(14)
          , h = o(g)
          , w = []
          , k = !1
          , x = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1
        }
          , j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (e && (k = !0),
            k)
                return w = (0,
                y.default)(w, x),
                (0,
                b.default)(w, x.once),
                w
        }
          , O = function() {
            w = (0,
            h.default)(),
            j()
        }
          , _ = function() {
            w.forEach(function(e, t) {
                e.node.removeAttribute("data-aos"),
                e.node.removeAttribute("data-aos-easing"),
                e.node.removeAttribute("data-aos-duration"),
                e.node.removeAttribute("data-aos-delay")
            })
        }
          , S = function(e) {
            return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
        }
          , z = function(e) {
            x = i(x, e),
            w = (0,
            h.default)();
            var t = document.all && !window.atob;
            return S(x.disable) || t ? _() : (document.querySelector("body").setAttribute("data-aos-easing", x.easing),
            document.querySelector("body").setAttribute("data-aos-duration", x.duration),
            document.querySelector("body").setAttribute("data-aos-delay", x.delay),
            "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
                j(!0)
            }) : document.addEventListener(x.startEvent, function() {
                j(!0)
            }),
            window.addEventListener("resize", (0,
            f.default)(j, x.debounceDelay, !0)),
            window.addEventListener("orientationchange", (0,
            f.default)(j, x.debounceDelay, !0)),
            window.addEventListener("scroll", (0,
            u.default)(function() {
                (0,
                b.default)(w, x.once)
            }, x.throttleDelay)),
            x.disableMutationObserver || (0,
            d.default)("[data-aos]", O),
            w)
        };
        e.exports = {
            init: z,
            refresh: j,
            refreshHard: O
        }
    }
    , function(e, t) {}
    , , , , , function(e, t) {
        (function(t) {
            "use strict";
            function n(e, t, n) {
                function o(t) {
                    var n = b
                      , o = v;
                    return b = v = void 0,
                    k = t,
                    g = e.apply(o, n)
                }
                function r(e) {
                    return k = e,
                    h = setTimeout(s, t),
                    _ ? o(e) : g
                }
                function a(e) {
                    var n = e - w
                      , o = e - k
                      , i = t - n;
                    return S ? j(i, y - o) : i
                }
                function c(e) {
                    var n = e - w
                      , o = e - k;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }
                function s() {
                    var e = O();
                    return c(e) ? d(e) : void (h = setTimeout(s, a(e)))
                }
                function d(e) {
                    return h = void 0,
                    z && b ? o(e) : (b = v = void 0,
                    g)
                }
                function l() {
                    void 0 !== h && clearTimeout(h),
                    k = 0,
                    b = w = v = h = void 0
                }
                function p() {
                    return void 0 === h ? g : d(O())
                }
                function m() {
                    var e = O()
                      , n = c(e);
                    if (b = arguments,
                    v = this,
                    w = e,
                    n) {
                        if (void 0 === h)
                            return r(w);
                        if (S)
                            return h = setTimeout(s, t),
                            o(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)),
                    g
                }
                var b, v, y, g, h, w, k = 0, _ = !1, S = !1, z = !0;
                if ("function" != typeof e)
                    throw new TypeError(f);
                return t = u(t) || 0,
                i(n) && (_ = !!n.leading,
                S = "maxWait"in n,
                y = S ? x(u(n.maxWait) || 0, t) : y,
                z = "trailing"in n ? !!n.trailing : z),
                m.cancel = l,
                m.flush = p,
                m
            }
            function o(e, t, o) {
                var r = !0
                  , a = !0;
                if ("function" != typeof e)
                    throw new TypeError(f);
                return i(o) && (r = "leading"in o ? !!o.leading : r,
                a = "trailing"in o ? !!o.trailing : a),
                n(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }
            function i(e) {
                var t = "undefined" == typeof e ? "undefined" : c(e);
                return !!e && ("object" == t || "function" == t)
            }
            function r(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
            }
            function a(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
            }
            function u(e) {
                if ("number" == typeof e)
                    return e;
                if (a(e))
                    return s;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(l, "");
                var n = m.test(e);
                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
            }
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , f = "Expected a function"
              , s = NaN
              , d = "[object Symbol]"
              , l = /^\s+|\s+$/g
              , p = /^[-+]0x[0-9a-f]+$/i
              , m = /^0b[01]+$/i
              , b = /^0o[0-7]+$/i
              , v = parseInt
              , y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t
              , g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self
              , h = y || g || Function("return this")()
              , w = Object.prototype
              , k = w.toString
              , x = Math.max
              , j = Math.min
              , O = function() {
                return h.Date.now()
            };
            e.exports = o
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t) {
        (function(t) {
            "use strict";
            function n(e, t, n) {
                function i(t) {
                    var n = b
                      , o = v;
                    return b = v = void 0,
                    O = t,
                    g = e.apply(o, n)
                }
                function r(e) {
                    return O = e,
                    h = setTimeout(s, t),
                    _ ? i(e) : g
                }
                function u(e) {
                    var n = e - w
                      , o = e - O
                      , i = t - n;
                    return S ? x(i, y - o) : i
                }
                function f(e) {
                    var n = e - w
                      , o = e - O;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }
                function s() {
                    var e = j();
                    return f(e) ? d(e) : void (h = setTimeout(s, u(e)))
                }
                function d(e) {
                    return h = void 0,
                    z && b ? i(e) : (b = v = void 0,
                    g)
                }
                function l() {
                    void 0 !== h && clearTimeout(h),
                    O = 0,
                    b = w = v = h = void 0
                }
                function p() {
                    return void 0 === h ? g : d(j())
                }
                function m() {
                    var e = j()
                      , n = f(e);
                    if (b = arguments,
                    v = this,
                    w = e,
                    n) {
                        if (void 0 === h)
                            return r(w);
                        if (S)
                            return h = setTimeout(s, t),
                            i(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)),
                    g
                }
                var b, v, y, g, h, w, O = 0, _ = !1, S = !1, z = !0;
                if ("function" != typeof e)
                    throw new TypeError(c);
                return t = a(t) || 0,
                o(n) && (_ = !!n.leading,
                S = "maxWait"in n,
                y = S ? k(a(n.maxWait) || 0, t) : y,
                z = "trailing"in n ? !!n.trailing : z),
                m.cancel = l,
                m.flush = p,
                m
            }
            function o(e) {
                var t = "undefined" == typeof e ? "undefined" : u(e);
                return !!e && ("object" == t || "function" == t)
            }
            function i(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
            }
            function r(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s
            }
            function a(e) {
                if ("number" == typeof e)
                    return e;
                if (r(e))
                    return f;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = p.test(e);
                return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
            }
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , c = "Expected a function"
              , f = NaN
              , s = "[object Symbol]"
              , d = /^\s+|\s+$/g
              , l = /^[-+]0x[0-9a-f]+$/i
              , p = /^0b[01]+$/i
              , m = /^0o[0-7]+$/i
              , b = parseInt
              , v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t
              , y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self
              , g = v || y || Function("return this")()
              , h = Object.prototype
              , w = h.toString
              , k = Math.max
              , x = Math.min
              , j = function() {
                return g.Date.now()
            };
            e.exports = n
        }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t) {
        "use strict";
        function n(e, t) {
            var n = window.document
              , r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
              , a = new r(o);
            i = t,
            a.observe(n.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })
        }
        function o(e) {
            e && e.forEach(function(e) {
                var t = Array.prototype.slice.call(e.addedNodes)
                  , n = Array.prototype.slice.call(e.removedNodes)
                  , o = t.concat(n).filter(function(e) {
                    return e.hasAttribute && e.hasAttribute("data-aos")
                }).length;
                o && i()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {};
        t.default = n
    }
    , function(e, t) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n),
                o && e(t, o),
                t
            }
        }()
          , r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
          , a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
          , c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
          , f = function() {
            function e() {
                n(this, e)
            }
            return i(e, [{
                key: "phone",
                value: function() {
                    var e = o();
                    return !(!r.test(e) && !a.test(e.substr(0, 4)))
                }
            }, {
                key: "mobile",
                value: function() {
                    var e = o();
                    return !(!u.test(e) && !c.test(e.substr(0, 4)))
                }
            }, {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone()
                }
            }]),
            e
        }();
        t.default = new f
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, n) {
            var o = e.node.getAttribute("data-aos-once");
            t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
        }
          , o = function(e, t) {
            var o = window.pageYOffset
              , i = window.innerHeight;
            e.forEach(function(e, r) {
                n(e, i + o, t)
            })
        };
        t.default = o
    }
    , function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(12)
          , r = o(i)
          , a = function(e, t) {
            return e.forEach(function(e, n) {
                e.node.classList.add("aos-init"),
                e.position = (0,
                r.default)(e.node, t.offset)
            }),
            e
        };
        t.default = a
    }
    , function(e, t, n) {
        "use strict";
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(13)
          , r = o(i)
          , a = function(e, t) {
            var n = 0
              , o = 0
              , i = window.innerHeight
              , a = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
            };
            switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]),
            n = (0,
            r.default)(e).top,
            a.anchorPlacement) {
            case "top-bottom":
                break;
            case "center-bottom":
                n += e.offsetHeight / 2;
                break;
            case "bottom-bottom":
                n += e.offsetHeight;
                break;
            case "top-center":
                n += i / 2;
                break;
            case "bottom-center":
                n += i / 2 + e.offsetHeight;
                break;
            case "center-center":
                n += i / 2 + e.offsetHeight / 2;
                break;
            case "top-top":
                n += i;
                break;
            case "bottom-top":
                n += e.offsetHeight + i;
                break;
            case "center-top":
                n += e.offsetHeight / 2 + i
            }
            return a.anchorPlacement || a.offset || isNaN(t) || (o = t),
            n + o
        };
        t.default = a
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0),
                n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0),
                e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        };
        t.default = n
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            return e = e || document.querySelectorAll("[data-aos]"),
            Array.prototype.map.call(e, function(e) {
                return {
                    node: e
                }
            })
        };
        t.default = n
    }
    ])
});
//////// initialization ////////////
$(document).ready(function() {
    AOS.init({
        easing: 'fade-up',
        duration: 600,
        offset: -50,
        once: true,
    });
});

$(document).ready(function() {
    $('.modal .close').click(function() {
        $('.modal').modal('hide');
    });

    "use strict";

    var hash = window.location.hash;
    var anchor = $('h2[data-target$="' + hash + '"]');
    if (anchor.length > 0) {
        anchor.click();
    }

    var BgImgHolder = function() {
        var a = $(".bg-img-holder");
        a.length && a.each(function() {
            var a, t, e, n, o;
            t = (a = $(this)).children("img").attr("src"),
            e = a.data("bg-position") ? a.data("bg-position") : "initial",
            n = a.data("bg-size") ? a.data("bg-size") : "auto",
            o = a.data("bg-height") ? a.data("bg-height") : "100%",
            a.css("background-image", 'url("' + t + '")').css("background-position", e).css("background-size", n).css("opacity", "1").css("height", o)
        })
    }()
      , CardActions = function() {
        var a = $(".card")
          , t = ".card-product-actions";
        a.length && $(t).length && (a.on({
            mouseenter: function() {
                var a, e, n;
                a = $(this),
                e = a.find(t),
                n = e.data("animation-in"),
                e.length && (e.addClass("in animated " + n),
                e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    e.removeClass("animated " + n)
                }))
            }
        }),
        a.on({
            mouseleave: function() {
                var a, e, n;
                a = $(this),
                e = a.find(t),
                n = e.data("animation-out"),
                e.length && (e.addClass("animated " + n),
                e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    e.removeClass("in animated " + n)
                }))
            }
        }))
    }()
      , Countdown = function() {
        var a = $(".countdown");
        a.length && a.each(function() {
            var a, t;
            t = (a = $(this)).data("countdown-date"),
            a.countdown(t).on("update.countdown", function(a) {
                $(this).html(a.strftime('<div class="countdown-item"><span class="countdown-digit">%-D</span><span class="countdown-label countdown-days">day%!d</span></div><div class="countdown-item"><span class="countdown-digit">%H</span><span class="countdown-separator">:</span><span class="countdown-label">hr</span></div><div class="countdown-item"><span class="countdown-digit">%M</span><span class="countdown-separator">:</span><span class="countdown-label">min</span></div><div class="countdown-item"><span class="countdown-digit">%S</span><span class="countdown-label">sec</span></div>'))
            })
        })
    }();
    !function(a) {
        a.fn.countTo = function(t) {
            return t = t || {},
            a(this).each(function() {
                var e = a.extend({}, a.fn.countTo.defaults, {
                    from: a(this).data("from"),
                    to: a(this).data("to"),
                    speed: a(this).data("speed"),
                    refreshInterval: a(this).data("refresh-interval"),
                    decimals: a(this).data("decimals")
                }, t)
                  , n = Math.ceil(e.speed / e.refreshInterval)
                  , o = (e.to - e.from) / n
                  , i = this
                  , s = a(this)
                  , r = 0
                  , l = e.from
                  , d = s.data("countTo") || {};

                function c(a) {
                    var t = e.formatter.call(i, a, e);
                    s.text(t)
                }
                s.data("countTo", d),
                d.interval && clearInterval(d.interval),
                d.interval = setInterval(function() {
                    r++,
                    c(l += o),
                    "function" == typeof e.onUpdate && e.onUpdate.call(i, l),
                    n <= r && (s.removeData("countTo"),
                    clearInterval(d.interval),
                    l = e.to,
                    "function" == typeof e.onComplete && e.onComplete.call(i, l))
                }, e.refreshInterval),
                c(l)
            })
        }
        ,
        a.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: function(a, t) {
                return a.toFixed(t.decimals)
            },
            onUpdate: null,
            onComplete: null
        }
    }(jQuery);
    var map, lat, lng, CountTo = function() {
        var a, t = ".milestone-count", e = $(t);
        e.length && (a = e,
        inView(t).on("enter", function() {
            a.hasClass("counting-finished") || a.countTo({
                formatter: function(a, t) {
                    return a.toFixed(t.decimals)
                },
                onUpdate: function(a) {},
                onComplete: function(a) {
                    $(this).addClass("counting-finished")
                }
            })
        }))
    }(), Datepicker = function() {
        var a = $('[data-toggle="date"]');
        a.length && a.each(function() {
            $(this).datepicker({
                isableTouchKeyboard: !0,
                autoclose: !1
            })
        })
    }(), Dropdown = function() {
        var a = $(".dropdown");
        a.length && a.on({
            "hide.bs.dropdown": function() {
                var t;
                (t = a).hasClass("dropdown-animate") && (t.find(".dropdown-menu").addClass("hide"),
                setTimeout(function() {
                    t.removeClass("hide")
                }, 300))
            }
        })
    }(), FormControl = function() {/*var a = $(".form-control");
        a.length && a.on("focus blur", function (a) {
            $(this).parents(".form-group").toggleClass("focused", "focus" === a.type || 0 < this.value.length)
            $(this).parents(".form-group").parent().toggleClass("focused", "focus" === a.type || 0 < this.value.length)
        }).trigger("blur")*/
    }(), TextareaAutosize = function() {
        var a = $(".textarea-autosize");
        a.length && autosize(a)
    }(), CustomInputFile = function() {
        var a = $(".custom-input-file");
        a.length && a.each(function() {
            var a = $(this);
            a.on("change", function(t) {
                var e, n, o, i, s;
                e = this,
                n = t,
                s = (i = a.next("label")).html(),
                e && 1 < e.files.length ? o = (e.getAttribute("data-multiple-caption") || "").replace("{count}", e.files.length) : n.target.value && (o = n.target.value.split("\\").pop()),
                o ? i.find("span").html(o) : i.html(s)
            }),
            a.on("focus", function() {
                a.addClass("has-focus")
            }).on("blur", function() {
                a.removeClass("has-focus")
            })
        })
    }(), $map = $("#map-canvas"), color = "#510FA8";

    function initMap() {
        map = document.getElementById("map-canvas"),
        lat = map.getAttribute("data-lat"),
        lng = map.getAttribute("data-lng");
        var a = new google.maps.LatLng(lat,lng)
          , t = {
            zoom: 14,
            scrollwheel: !1,
            center: a,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                featureType: "administrative",
                elementType: "labels.text.fill",
                stylers: [{
                    color: "#444444"
                }]
            }, {
                featureType: "landscape",
                elementType: "all",
                stylers: [{
                    color: "#f2f2f2"
                }]
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "road",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 45
                }]
            }, {
                featureType: "road.highway",
                elementType: "all",
                stylers: [{
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.arterial",
                elementType: "labels.icon",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "transit",
                elementType: "all",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "water",
                elementType: "all",
                stylers: [{
                    color: color
                }, {
                    visibility: "on"
                }]
            }]
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),t);
        var e = new google.maps.Marker({
            position: a,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hello World!"
        })
          , n = new google.maps.InfoWindow({
            content: '<div class="info-window-content"><h5>Indusind Bank</h5><h6>Official Product</h6><p>Some more details for directions or company informations...</p></div>'
        });
        google.maps.event.addListener(e, "click", function() {
            n.open(map, e)
        })
    }
    $map.length && google.maps.event.addDomListener(window, "load", initMap);
    var Highlight = function() {
        var a = $(".highlight");
        a.length && a.each(function(a, t) {
            var e;
            e = t,
            hljs.highlightBlock(e)
        })
    }()
      , Layout = void $("body").on("click", "[data-action]", function(a) {
        a.preventDefault();
        var t = $(this)
          , e = t.data("action")
          , n = t.data("target");
        switch (e) {
        case "offcanvas-open":
            n = t.data("target"),
            $(n).addClass("open"),
            $("body").append('<div class="body-backdrop" data-action="offcanvas-close" data-target=' + n + " />");
            break;
        case "offcanvas-close":
            n = t.data("target"),
            $(n).removeClass("open"),
            $("body").find(".body-backdrop").remove();
            break;
        case "aside-open":
            n = t.data("target"),
            t.addClass("active"),
            $(n).addClass("show"),
            $("body").append('<div class="body-backdrop" data-action="aside-close" data-target=' + n + " />");
            break;
        case "aside-close":
            n = t.data("target"),
            t.removeClass("active"),
            $(n).removeClass("show"),
            $("body").find(".body-backdrop").remove();
            break;
        case "search-open":
            n = t.data("target"),
            t.addClass("active"),
            $(n).addClass("show"),
            $("body").addClass("navbar-search-open").append('<div class="body-backdrop body-backdrop-light" data-action="search-close" data-target="' + n + '" />');
            $('#userInputField').focus();
            $('.mobileMenu').removeClass('open');
            $('body, html').addClass('noscroll');
            //document.ontouchmove = function(e){ e.preventDefault(); }
            break;
        case "search-close":
            n = t.data("target"),
            $('[data-action="search-open"]').removeClass("active"),
            $(n).removeClass("show"),
            $("body").removeClass("navbar-search-open").find(".body-backdrop").remove()
            $('#userInputField').val('');
            $('body, html').removeClass('noscroll');
            //document.ontouchmove = function(e){ return true; }
        }
    })
      , Masonry = function() {
        var a = $(".masonry-container");
        a.length && a.each(function() {
            var a, t, e, n, o, i;
            t = (a = $(this)).find(".masonry"),
            e = a.find(".masonry-filter-menu"),
            n = e.find(".default"),
            o = n.data("filter"),
            i = t.imagesLoaded(function() {
                null != o && "" != o && ("*" != o && (o = "." + o),
                n.addClass("active"));
                var a = {
                    itemSelector: ".masonry-item",
                    filter: o
                };
                i.isotope(a)
            }),
            e.on("click", "a", function() {
                var a = $(this).attr("data-filter");
                a = "*" == a ? "" : "." + a,
                i.isotope({
                    filter: filterValue
                })
            })
        })
    }()
      , NavbarCollapse = function() {
        var a = $("#navbar-main")
          , t = $("#navbar-main-collapse")
          , e = $("#navbar-top-main");
        t.length && (t.on({
            "show.bs.collapse": function() {
                a.addClass("navbar-collapsed"),
                e.addClass("navbar-collapsed")
            }
        }),
        t.on({
            "hide.bs.collapse": function() {
                t.removeClass("collapsing").addClass("collapsing-out"),
                a.removeClass("navbar-collapsed").addClass("navbar-collapsed-out"),
                e.removeClass("navbar-collapsed").addClass("navbar-collapsed-out")
            }
        }),
        t.on({
            "hidden.bs.collapse": function() {
                t.removeClass("collapsing-out"),
                a.removeClass("navbar-collapsed-out"),
                e.removeClass("navbar-collapsed-out")
            }
        }))
    }()
      , NavbarSticky = function() {
        var a = $(".navbar-sticky");

        function t(a) {
            var t = $(window).scrollTop();
            e + 10 < t ? a.addClass("sticky") : a.removeClass("sticky")
        }
        if (a.length) {
            var e = a.offset().top;
            t(a),
            $(window).on({
                scroll: function() {
                    t(a)
                }
            })
        }
    }()
      , NegativeMargin = function() {
        var a = $("[data-negative-margin]");
        $(window).on({
            "load resize": function() {
                a.length && a.each(function() {
                    var a, t;
                    t = (a = $(this)).find($(a.data("negative-margin"))).height(),
                    console.log(t),
                    991 < $(window).width() ? a.css({
                        "margin-top": "-" + t + "px"
                    }) : a.css({
                        "margin-top": "0"
                    })
                })
            }
        })
    }()
      , SingleSlider = function() {
        var a = $(".input-slider-container");
        a.length && a.each(function() {
            var a, t, e, n, o, i, s, r, l, d, c;
            e = (t = (a = $(this)).find(".input-slider")).attr("id"),
            n = t.data("range-value-min"),
            o = t.data("range-value-max"),
            s = (i = a.find(".range-slider-value")).attr("id"),
            r = i.data("range-value-low"),
            l = document.getElementById(e),
            d = document.getElementById(s),
            c = {
                start: [parseInt(r)],
                connect: [!0, !1],
                range: {
                    min: [parseInt(n)],
                    max: [parseInt(o)]
                }
            },
            noUiSlider.create(l, c),
            l.noUiSlider.on("update", function(a, t) {
                d.textContent = a[t]
            })
        })
    }()
      , RangeSlider = function() {
        var a = $("#input-slider-range");
        a.length && a.each(function() {
            var a, t, e, n;
            $(this),
            a = document.getElementById("input-slider-range"),
            t = document.getElementById("input-slider-range-value-low"),
            e = document.getElementById("input-slider-range-value-high"),
            n = [t, e],
            noUiSlider.create(a, {
                start: [parseInt(t.getAttribute("data-range-value-low")), parseInt(e.getAttribute("data-range-value-high"))],
                connect: !0,
                range: {
                    min: parseInt(a.getAttribute("data-range-value-min")),
                    max: parseInt(a.getAttribute("data-range-value-max"))
                }
            }),
            a.noUiSlider.on("update", function(a, t) {
                n[t].textContent = a[t]
            })
        })
    }()
      , Popover = function() {
        var a = $('[data-toggle="popover"]')
          , t = "";
        a.length && a.each(function() {
            !function(a) {
                a.data("color") && (t = "popover-" + a.data("color"));
                var e = {
                    template: '<div class="popover ' + t + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                };
                a.popover(e)
            }($(this))
        })
    }()
      , Pricing = function() {
        var a = $(".pricing-container")
          , t = $(".pricing-container button[data-pricing]");
        a.length && t.on({
            click: function() {
                !function(a) {
                    a.data("pricing");
                    var t = a.parents(".pricing-container")
                      , e = $("." + t.attr("class") + " [data-pricing-value]");
                    a.hasClass("active") || ($("." + t.attr("class") + " button[data-pricing]").removeClass("active"),
                    a.addClass("active"),
                    e.each(function() {
                        var a = $(this).data("pricing-value")
                          , t = $(this).find("span.price").text();
                        $(this).find("span.price").text(a),
                        $(this).data("pricing-value", t)
                    }))
                }($(this))
            }
        })
    }()
      , Scrollbar = function() {
        var a = $(".scrollbar-inner");
        a.length && a.scrollbar().scrollLock()
    }()
      , ScrollTo = function() {
        var a = $(".scroll-me, [data-scroll-to], .toc-entry a");
        a.length && a.on("click", function(a) {
            var t, e, n, o;
            e = (t = $(this)).attr("href"),
            n = t.data("scroll-to-offset") ? t.data("scroll-to-offset") : 0,
            o = {
                scrollTop: $(e).offset().top - n
            },
            $("html, body").stop(!0, !0).animate(o, 600),
            event.preventDefault()
        })
    }()
      , Select = function() {
        var a = $('[data-toggle="select"]');

        function t(a) {
            if (!a.id)
                return a.text;
            var t = $(a.element).data("avatar-src");
            return t ? $('<span class="avatar avatar-xs mr-3"><img class="avatar-img rounded-circle" src="' + t + '" alt="' + a.text + '"></span><span>' + a.text + "</span>") : a.text
        }
        a.length && a.each(function() {
            var a, e;
            e = {
                dropdownParent: (a = $(this)).closest(".modal").length ? a.closest(".modal") : $(document.body),
                minimumResultsForSearch: a.data("minimum-results-for-search"),
                templateResult: t
            },
            a.select2(e)
        })
    }()
      , // Spotlight = function () {
    //     var a = $(".spotlight");
    //     $(window).on({
    //         "load resize": function () {
    //             a.length && a.each(function () {
    //                 ! function (a) {
    //                     var t;
    //                     if ("fullscreen" == a.data("spotlight")) {
    //                         if (a.data("spotlight-offset")) {
    //                             var e = $("body").find(a.data("spotlight-offset")).height();
    //                             t = $(window).height() - e
    //                         } else t = $(window).height() - 260;
    //                         1170 < $(window).width() && 650 < $(window).height() ? a.find(".spotlight-holder").css({
    //                             height: t + "px"
    //                         }) : a.find(".spotlight-holder").css({
    //                             height: "auto"
    //                         })
    //                     }
    //                 }($(this))
    //             })
    //         }
    //     })
    // }(),
    Sticky = function() {
        var a = $('[data-toggle="sticky"]');
        a.length && a.each(function() {
            var a, t;
            t = {
                offset_top: (a = $(this)).data("sticky-offset") ? a.data("sticky-offset") : 0
            },
            a.stick_in_parent(t)
        })
    }()
      , WpxSwiper = function() {
        var a = $(".swiper-js-container");
        $(document).ready(function() {
            a.length && a.each(function(a, t) {
                !function(a) {
                    var t = a.find(".swiper-container")
                      , e = a.find(".swiper-pagination")
                      , n = a.find(".swiper-button-next")
                      , o = a.find(".swiper-button-prev")
                      , i = t.data("swiper-effect") ? t.data("swiper-effect") : "slide"
                      , s = t.data("swiper-direction") ? t.data("swiper-direction") : "horizontal"
                      , r = t.data("swiper-initial-slide") ? t.data("swiper-initial-slide") : 0
                      , l = !!t.data("swiper-autoheight") && t.data("swiper-autoheight")
                      , d = !!t.data("swiper-autoplay") && t.data("swiper-autoplay")
                      , c = !!t.data("swiper-centered-slides") && t.data("swiper-centered-slides")
                      , p = t.data("swiper-items")
                      , u = t.data("swiper-sm-items")
                      , f = t.data("swiper-md-items")
                      , g = t.data("swiper-lg-items")
                      , h = t.data("swiper-xl-items")
                      , v = t.data("swiper-space-between")
                      , m = t.data("swiper-sm-space-between")
                      , w = t.data("swiper-md-space-between")
                      , b = t.data("swiper-lg-space-between")
                      , y = t.data("swiper-xl-space-between");
                    p = p || 1,
                    u = u || p,
                    f = f || u,
                    g = g || f,
                    h = h || g,
                    v = v || 0,
                    m = m || v,
                    w = w || m,
                    b = b || w,
                    y = y || b;
                    var $ = new Swiper(t,{
                        pagination: {
                            el: e,
                            clickable: !0
                        },
                        navigation: {
                            nextEl: n,
                            prevEl: o
                        },
                        slidesPerView: p,
                        spaceBetween: v,
                        initialSlide: r,
                        autoHeight: l,
                        centeredSlides: c,
                        mousewheel: !1,
                        keyboard: {
                            enabled: !0,
                            onlyInViewport: !1
                        },
                        grabCursor: !0,
                        autoplay: d,
                        effect: i,
                        coverflowEffect: {
                            rotate: 10,
                            stretch: 0,
                            depth: 50,
                            modifier: 3,
                            slideShadows: !1
                        },
                        speed: 800,
                        direction: s,
                        preventClicks: !0,
                        preventClicksPropagation: !0,
                        observer: !0,
                        observeParents: !0,
                        breakpointsInverse: !0,
                        freeMode: true,
                        freeModeFluid: true,
                        breakpoints: {
                            575: {
                                slidesPerView: u,
                                spaceBetweenSlides: m
                            },
                            767: {
                                slidesPerView: f,
                                spaceBetweenSlides: w
                            },
                            991: {
                                slidesPerView: g,
                                spaceBetweenSlides: b
                            },
                            1199: {
                                slidesPerView: h,
                                spaceBetweenSlides: y
                            }
                        }
                    });
                    //console.log($.params)
                }($(t))
            })
        })
    }()
      , Tags = function() {
        var a = $('[data-toggle="tags"]');
        a.length && a.each(function() {
            $(this).tagsinput({
                tagClass: "badge badge-primary"
            })
        })
    }()
      , Tooltip = function() {
        var a = $('[data-toggle="tooltip"]');
        a.length && a.tooltip()
    }()
      , Typed = function() {
        var a = $(".typed");
        a.length && a.each(function() {
            var a, t, e, n;
            t = "#" + (a = $(this)).attr("id"),
            e = (e = a.data("type-this")).split(","),
            n = new Typed(t,{
                strings: e,
                typeSpeed: 100,
                backSpeed: 70,
                loop: !0
            }),
            inView(t).on("enter", function() {
                n.start()
            }).on("exit", function() {
                n.stop()
            })
        })
    }()
      , Wavify = function() {
        var a = $('[data-toggle="wavify"]');
        a.length && a.each(function() {
            $(this).find("path").wavify({
                height: 50,
                bones: 5,
                amplitude: 40,
                speed: .15
            })
        })
    }();
})

if ($(window).width() < 1025) {
    $('input, select').attr('tabindex', '-1');

}
$(document).keyup(function(e) {
    if (e.which == 27) {
        $('.body-backdrop').click();
    }
});
$('#userInputField').focus(function() {
    document.ontouchmove = function(e) {
        e.preventDefault();
    }
}).blur(function() {
    document.ontouchmove = function(e) {
        return true;
    }
});

$(function() {

    $('select:not(".financial_filters select, .regulatoryDisclosure select, .choose_section select, .compare_row select")').selectpicker();
    $('.custom_select_wrap select:not("#salutation")').on('shown.bs.select', function() {

        $(".custom_select_wrap .dropdown.show .inner").niceScroll({
            cursorcolor: "#832625",
            cursorwidth: "6px",
            background: "none",
            cursorborder: "transparent",
            cursorborderradius: 0,
            autohidemode: 'false'
        });

    });

    /*$(".modal-dialog-scrollable .modal-body").niceScroll({
                cursorcolor:"#832625",
                cursorwidth:"6px",
                background:"none",
                cursorborder:"transparent",
                cursorborderradius:0,
                autohidemode:'false'
            });*/

    $(".modal").on('shown.bs.modal', function() {
        $(".modal-dialog-scrollable .modal-body").niceScroll({
            cursorcolor: "#832625",
            cursorwidth: "6px",
            background: "none",
            cursorborder: "transparent",
            cursorborderradius: 0,
            autohidemode: 'false',

        });

    });

    /* $(".modal-dialog-scrollable .modal-body").mCustomScrollbar({

    });*/

    $(".scrollable_div, .navbar-search-suggestions:not('.navbar-search-suggestions.search-card-widget')").mCustomScrollbar();
    $('.privileges_section .rich-text-box').parent().find('.card-privileges-slider').addClass("newheightpadding");
    $('.suggested_products').removeClass('hideonload');

    /*$('[data-hook="nav-item"]').click(function(){
         $('.component-page-nav').addClass('is-sticky');
     });*/

});

/* Accessibility Start */
/*$('.nav-accessabilty .dropdown-menu').click(function(e){
    e.stopPropagation();
});*/

//sessionStorage.setItem("webaccessibility","-2");

var fontSizeCount = 0;

var sfontsize = localStorage.setItem('webaccessibility', fontSizeCount);

function increaseFont() {
    console.log('increase font');
    var fntsize = parseInt(sessionStorage.getItem("sfontsize"));
    if (isNaN(fntsize))
        fntsize = 0;

    //fontResize(fntsize);
    console.log(fntsize);

    if (fntsize < 2) {

        fntsize++;

        sessionStorage.setItem("sfontsize", fntsize);
        //sessionStorage.setItem("webaccessibility", fontSizeCount);

    }
    fontResize(fntsize);
    $('body').removeClass('font_smallify font_reset');
    $('body').addClass('font_biggify');

    /*console.log(fontSizeCount);
    if (fontSizeCount < 2) {

        fontSizeCount++;

        fontResize(fontSizeCount);
        sessionStorage.setItem("webaccessibility", fontSizeCount);


    }
    $('body').removeClass('font_smallify font_reset');
    $('body').addClass('font_biggify');*/

}
function decreaseFont() {

    var fntsize = parseInt(sessionStorage.getItem("sfontsize"));
    if (isNaN(fntsize))
        fntsize = 0;
    if (fontSizeCount != -2) {
        fntsize--;
        sessionStorage.setItem("sfontsize", fntsize);
    }
    fontResize(fntsize);
    $('body').removeClass('font_biggify font_reset');
    $('body').addClass('font_smallify');

    /*if (fontSizeCount === -2) {
        sessionStorage.setItem("webaccessibility","-2");
        return;
    }
    sessionStorage.setItem("webaccessibility","-1");
    fontSizeCount--;
    fontResize(fontSizeCount);

    $('body').removeClass('font_biggify font_reset');
    $('body').addClass('font_smallify');*/

}
function resetFont() {
    sessionStorage.setItem("sfontsize", 0);

    fontResize(0);
    $('body').removeClass('font_biggify font_smallify');
    $('body').addClass('font_reset');

    /*fontSizeCount = 0;
    fontResize(0);
	sessionStorage.setItem("webaccessibility", "0");
     $('body').removeClass('font_biggify font_smallify');
    $('body').addClass('font_reset');*/

}
function fontResize(count) {
    try {
        if (count <= 2 && count >= -2) {
            $('html').css('fontSize', 100 + count * 7 + '%');
        }
    } catch (e) {
        console.log("fontResize", e.message);
    }
}

$('.nav-accessabilty a').click(function() {

    var x = document.getElementsByTagName("html")[0];

    if (x.style.fontSize == "86%") {
        $('.nav-accessabilty .nav .dropdown-menu a').removeClass('disabled');
        $('#_smallify').addClass('disabled');

    }

    if (x.style.fontSize == "100%") {
        $('.nav-accessabilty .nav .dropdown-menu a').removeClass('disabled');
        $('#_reset').addClass('disabled');
        $('.nav-outline').removeClass('smallify_topfix biggify_topfix');

    }

    if (x.style.fontSize == "114%") {
        $('.nav-accessabilty .nav .dropdown-menu a').removeClass('disabled');
        $('#_biggify').addClass('disabled');

    }

    if (x.style.fontSize == "93%" || x.style.fontSize == "107%") {
        $('.nav-accessabilty .nav .dropdown-menu a').removeClass('disabled');

    }

    if (x.style.fontSize == "93%" || x.style.fontSize == "86%") {
        $('.nav-outline').addClass('smallify_topfix');
    }

    if (x.style.fontSize == "107%" || x.style.fontSize == "114%") {
        $('.nav-outline').addClass('biggify_topfix');
    }

});

function highContrast() {

    sessionStorage.setItem("scolorset", "High");
    setcontrast();

    /*$('body').addClass('high_contrast');
 	$('.nav-accessabilty .nav .dropdown-menu a').removeClass('disabled');
    $('.link_highcontrast').addClass('disabled');*/

}
function normalContrast() {
    sessionStorage.setItem("scolorset", "Normal");
    setcontrast();
    /*$('body').removeClass('high_contrast');
    $('.nav-accessabilty .nav .dropdown-menu a').removeClass('disabled');
    $('.link_highcontrast_reset').addClass('disabled');*/

}

function setcontrast() {

    if (sessionStorage.getItem("scolorset") == null)
        sessionStorage.setItem("scolorset", "Normal");

    if (sessionStorage.getItem("scolorset") == "Normal") {
        $('body').removeClass('high_contrast');
        $('.nav-accessabilty .nav .dropdown-menu a').removeClass('disabled');
        $('.link_highcontrast_reset').addClass('disabled');
    } else {
        $('body').addClass('high_contrast');
        $('.nav-accessabilty .nav .dropdown-menu a').removeClass('disabled');
        $('.link_highcontrast').addClass('disabled');
    }

}

$('html').click(function() {
    $('.setting_wrap').removeClass('active');
});

$('.setting_btn, .setting_wrap').click(function(event) {
    event.stopPropagation();
});

$('.setting_btn').click(function(e) {
    e.preventDefault();
    $('.setting_wrap').toggleClass('active');
});
/* Accessibility End */

function fontset() {

    var colorset = '';
    var fntsize = 0;

    if (sessionStorage) {

        fntsize = parseInt(sessionStorage.getItem("sfontsize"));
        colorset = sessionStorage.getItem("scolorset");

        if (isNaN(fntsize))
            fntsize = 0;

        //fontResize(fntsize);
        //console.log(fntsize);

    }

    fontResize(fntsize);
    setcontrast();

}

fontset();

document.addEventListener('DOMContentLoaded', function() {
    var htmtag = document.getElementsByTagName("html")[0];

    if (htmtag.style.fontSize === "86%" || htmtag.style.fontSize === "93%") {
        $('body').addClass('font_smallify');
        $('.nav-outline').removeClass('biggify_topfix');
        $('.nav-outline').addClass('smallify_topfix');
    }

    if (htmtag.style.fontSize === "114%" || htmtag.style.fontSize === "107%") {
        $('body').addClass('font_biggify');
        $('.nav-outline').addClass('biggify_topfix');
        $('.nav-outline').removeClass('smallify_topfix');
    }
    if (htmtag.style.fontSize === "114%") {
        $('.nav-outline').removeClass('smallify_topfix biggify_topfix');
    }

}, false);

/*function increaseFont() {


	var fontcount = sessionStorage.getItem("sfont");
    console.log('fount count:' + parseInt(fontcount));
    if(fontcount < 2){
        fontcount = parseInt(fontcount + 1);
        sessionStorage.setItem("sfont", fontcount);
        $('html').css('fontSize', 100 + fontcount * 2.5 + '%');
        $('body').addClass('font_biggify');
    }
    else{
        console.log('shdfkjshk');
    }

}
*/

if (sessionStorage) {
    // Store data
    // Retrieve data
    var fontcount = sessionStorage.getItem("webaccessibility");
    //console.log(fontcount);
} else {
//sessionStorage.setItem("sfontsize", "0");
//console.log('font default' + sessionStorage.getItem("sfont"));
}

var maxLength = 10;
var field = $('#mnumber');
field.keydown(function(e) {

    if (event.keyCode != 8 && event.keyCode != 9) {

        if ($(this).val().length >= maxLength)
            e.preventDefault();

    }

});

$(document).ready(function() {

    $('#_reset').click(function() {
        $('.nav-outline').removeClass('smallify_topfix biggify_topfix');

    });
    $('#_smallify').click(function() {
        $('.nav-outline').removeClass('biggify_topfix').addClass('smallify_topfix');

    });
    $('#_biggify').click(function() {
        $('.nav-outline').removeClass('smallify_topfix').addClass('biggify_topfix');
    });

    $('.richTextWithTable a.scroll_link').click(function() {

        if ($(window).width() >= 992) {

            $('html, body').animate({
                scrollTop: $($(this).attr("href")).offset().top - 210

            }, 500);
        }
        else {
            $('html, body').animate({
                scrollTop: $($(this).attr("href")).offset().top - 60

            }, 500);

        }

    });

    var $accordion_link = $('.nav.tabs-withdot + .tab-content').find('.faqHighlights .most-faqs .card-header a');

    if ($accordion_link.attr('data-toggle')) {
    //console.log('just checking');
    // $accordion_link.closest('.container').addClass('new_temp_container');

    }

    if ($("#recommended_card").length > 0) {

        if ($(".card-header .tag").html().length > 0) {
            //console.log('testing for tag');
            $(".card-header .tag").show();
        } else {
            //console.log('testing for tag');
            $(".card-header .tag").hide();
        }
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $(".scroll_btn").addClass("show");
        } else {
            $(".scroll_btn").removeClass("show");
        }
    });

    $(".scroll_btn").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});
//notice js start

function start() {
    if ($('#latest-newsticker').length)
    {

        new mq('latest-newsticker');

        mqRotate(mqr);

    }
}
window.onload = start;

function objWidth(obj) {
    if (obj.offsetWidth)
        return obj.offsetWidth;
    if (obj.clip)
        return obj.clip.width;
    return 0;
}
var mqr = [];

function mq(id) {
    this.mqo = document.getElementById(id);
    //alert(this.mqo.getElementsByTagName("div")[0].innerHTML)
    var wid = objWidth(this.mqo.getElementsByTagName("div")[0]) + 1;
    var fulwid = objWidth(this.mqo);
    var txt = this.mqo.getElementsByTagName("div")[0].innerHTML;
    this.mqo.innerHTML = "";
    var heit = this.mqo.style.height;
    this.mqo.onmouseout = function() {
        mqRotate(mqr);
    }
    ;
    this.mqo.onmouseover = function() {
        clearTimeout(mqr[0].TO);
    }
    ;
    this.mqo.ary = [];
    var maxw = Math.ceil(fulwid / wid) + 1;
    for (var i = 0; i < maxw; i++) {
        this.mqo.ary[i] = document.createElement("div");
        this.mqo.ary[i].innerHTML = txt;
        this.mqo.ary[i].style.position = "absolute";
        this.mqo.ary[i].style.left = wid * i + "px";
        this.mqo.ary[i].style.width = wid + "px";
        this.mqo.ary[i].style.height = heit;
        this.mqo.appendChild(this.mqo.ary[i]);
    }
    mqr.push(this.mqo);
    console.log(maxw)
}

function mqRotate(mqr) {
    if (!mqr)
        return;
    for (var j = mqr.length - 1; j > -1; j--) {
        maxa = mqr[j].ary.length;
        for (var i = 0; i < maxa; i++) {
            var x = mqr[j].ary[i].style;
            x.left = parseInt(x.left, 10) - 1 + "px";
        }
        var y = mqr[j].ary[0].style;
        if (parseInt(y.left, 10) + parseInt(y.width, 10) < 0) {
            var z = mqr[j].ary.shift();
            z.style.left = parseInt(z.style.left) + parseInt(z.style.width) * maxa + "px";
            mqr[j].ary.push(z);
        }
    }
    mqr[0].TO = setTimeout("mqRotate(mqr)", 15);
}
//notice js end
;window.Modernizr = function(a, b, c) {
    function z(a) {
        j.cssText = a
    }

    function A(a, b) {
        return z(m.join(a + ";") + (b || ""))
    }

    function B(a, b) {
        return typeof a === b
    }

    function C(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function D(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!C(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }

    function E(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    function F(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
          , e = (a + " " + o.join(d + " ") + d).split(" ");
        return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "),
        E(e, b, c))
    }
    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"),
                j.id = e ? e[d] : h + (d + 1),
                l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
        l.id = h,
        (m ? l : n).innerHTML += f,
        n.appendChild(l),
        m || (n.style.background = "",
        n.style.overflow = "hidden",
        k = g.style.overflow,
        g.style.overflow = "hidden",
        g.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n),
        g.style.overflow = k),
        !!i
    }, x = {}.hasOwnProperty, y;
    !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
        return x.call(a, b)
    }
    : y = function(a, b) {
        return b in a && B(a.constructor.prototype[b], "undefined")
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = u.call(arguments, 1)
          , e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a
                  , g = c.apply(f, d.concat(u.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(u.call(arguments)))
        };
        return e
    }
    ),
    q.csstransforms3d = function() {
        var a = !!F("perspective");
        return a && "webkitPerspective"in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }),
        a
    }
    ;
    for (var G in q)
        y(q, G) && (v = G.toLowerCase(),
        e[v] = q[G](),
        t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                y(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b,
            typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a),
            e[a] = b
        }
        return e
    }
    ,
    z(""),
    i = k = null,
    function(a, b) {
        function k(a, b) {
            var c = a.createElement("p")
              , d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }

        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }

        function m(a) {
            var b = i[a[g]];
            return b || (b = {},
            h++,
            a[g] = h,
            i[h] = b),
            b
        }

        function n(a, c, f) {
            c || (c = b);
            if (j)
                return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a),
            g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }

        function o(a, c) {
            a || (a = b);
            if (j)
                return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode()
              , e = 0
              , f = l()
              , g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }

        function p(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement,
            b.createFrag = a.createDocumentFragment,
            b.frag = b.createFrag()),
            a.createElement = function(c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            }
            ,
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }

        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
            j || p(a, c),
            a
        }
        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                f = "hidden"in a,
                j = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                f = !0,
                j = !0
            }
        }
        )();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS !== !1,
            supportsUnknownElements: j,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: o
        };
        a.html5 = r,
        q(b)
    }(this, b),
    e._version = d,
    e._prefixes = m,
    e._domPrefixes = p,
    e._cssomPrefixes = o,
    e.testProp = function(a) {
        return D([a])
    }
    ,
    e.testAllProps = F,
    e.testStyles = w,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""),
    e
}(this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {}

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1,
        a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(),
        h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1,
            !q && h(),
            l.onload = l.onreadystatechange = null,
            b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout
          , l = b.createElement(a)
          , o = 0
          , r = 0
          , u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1,
        y[c] = []),
        "object" == a ? l.data = c : (l.src = c,
        l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }
        ,
        p.splice(e, 0, u),
        "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n),
        m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0,
        b = b || "j",
        e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a),
        1 == p.length && h()),
        this
    }

    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
    }
    , x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    }, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)
                g = a[f].split("="),
                (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)
                c = x[f](c);
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a)
              , j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1,
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout),
            (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a),
                            l()
                        }
                        ),
                        g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var b = 0, c;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                            return b
                        }(),
                        a)
                            a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a),
                                l()
                            }
                            : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b),
                                    l()
                                }
                            }(k[n])),
                            g(a[n], j, b, n, h))
                } else
                    !c && l()
            }
            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i),
            i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i],
                e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else
            Object(a) === a && h(a, l)
    }
    ,
    B.addPrefix = function(a, b) {
        z[a] = b
    }
    ,
    B.addFilter = function(a) {
        x.push(a)
    }
    ,
    B.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading",
    b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0),
        b.readyState = "complete"
    }
    , 0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f,
        k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1,
            c(),
            k.onload = k.onreadystatechange = null)
        }
        ,
        m(function() {
            l || (l = 1,
            c(1))
        }, e),
        i ? k.onload() : n.parentNode.insertBefore(k, n)
    }
    ,
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n),
        m(c, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
;
$(function() {
    $('.link_contrast1').click(function(e) {
        e.preventDefault();
        $('body').removeClass('body_contrast2')
        $('body').addClass('body_contrast1')
    });

    $('.link_contrast_reset').click(function(e) {
        e.preventDefault();
        $('body').removeClass('body_contrast1 body_contrast2');
    })

});

(function(window) {
    'use strict';
    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }
    // classList support for class management
    var hasClass, addClass, removeClass;

    if ('classList'in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        }
        ;
        addClass = function(elem, c) {
            elem.classList.add(c);
        }
        ;
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        }
        ;
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        }
        ;
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        }
        ;
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        }
        ;
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }
}
)(window);

(function($) {
    $('.btn-mobnav').on('click', function() {
        if ($('.mobileMenu').hasClass('open')) {
            $('.mobileMenu').removeClass('open');
            $('.mobileMenu .sub-level').removeClass('open-level');
            $('body').removeClass('noscroll bodyfix');
        } else {
            $('.mobileMenu').addClass('open');
        }

    })
    $('.mobileMenu .sub-level a').on('click', function() {
        $(this).parent('.sub-level').addClass('open-level');
    })
    $('.mobileMenu .back').on('click', function() {
        $(this).parent().parent().parent('.sub-level').removeClass('open-level');
    });
    $('.bt-action-login').on('click', function(event) {
        $('.mobileMenu').removeClass('open');
        event.stopPropagation();
    });
}
)(jQuery)
/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
$(document).ready(function() {
    'use strict';
    // variables
    var contextWindow = $(window);
    // ----------------------
    // ++ Header .. Start
    // ------------------------
    // Desktop Hover navigation 
    $('.tg-themetabnav > li > a').hover(function() {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent('li').addClass('active');
            $(this).parent().find('.tab-pane').addClass('active');
        }
    });

    $('.tg-small-nav li a').on('click', function() {
        // $(this).off('click');
        $('.dropdown-animate[data-toggle=hover]').removeClass('active show');
        if ($(this).parent().hasClass('active')) {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().siblings().find('.tab-pane').removeClass('active');
            $(this).parent('li').addClass('active');
            $(this).parent().find('.tab-pane').addClass('active');
        }
    });

    ///////////////headerbg/////////////////
    if ($(window).width() > 1024) {
        $('.quick-size, .quicksize-drop, .btn-rounded-rb, .dropdown-menu-right, .menu-item-has-mega-menu').mouseover(function() {
            $('.overlay-navright').stop().fadeIn(200);

        });
        $('.quick-size, .quicksize-drop, .btn-rounded-rb, .dropdown-menu-right, .menu-item-has-mega-menu').mouseout(function() {
            $('.overlay-navright').stop().fadeOut(100);
        });
    }
    $(document).click(function(e) {
        $('.overlay-navright').hide();
        $('.bt-action-login').removeClass('active');

    });

    $('.tg-themetabnav li a').mouseenter(function() {
        $('.tg-themetabnav li').removeClass('active');
        $(this).parent('li').addClass('active');
    })

    ////////////// dropdown menu on hover ///////////////////
    /*$('.dropdown-menu').on('click', function(event){
    event.stopPropagation();
});*/
    ////////////// @end dropdown menu on hover ///////////////////

    //$('.ddlogin_link:first-child, .ddlogin_link:first-child a').addClass('active');
    $('.ddlogin_link').click(function() {
        $('.login_list').hide();
        $('.ddlogin_link, .ddlogin_link a').removeClass('active');
        $(this).addClass('active');
        //$(this).find('a').addClass('active')
        $(this).find('ul').show();
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        e.target
        // newly activated tab
        e.relatedTarget
        // previous active tab
    });

    if ($(window).width() > 1024) {
        $('.dropdown[data-toggle=hover]').mouseover(function() {
            $(this).addClass('show').attr('aria-expanded', "true");
            $(this).find('.dropdown-menu').addClass('show');
        }).mouseout(function() {
            $(this).removeClass('show').attr('aria-expanded', "false");
            $(this).find('.dropdown-menu').removeClass('show');
        });
    } else if ($(window).width() <= 1024) {
        $('.btn-action').click(function() {
            //alert('');
            $('.mobileMenu').removeClass('open');

            $('.bt-action-login').toggleClass('active');
            $('.overlay-navright').toggle();
            $('body').toggleClass('noscroll bodyfix');

        });

        $('.overlay-navright').on('click', function(e) {

            $('.bt-action-login').removeClass('active');
            $('body').removeClass('noscroll bodyfix');

        });
    }

    /* contrast switching */
    $('.link_contrast1').click(function(e) {
        e.preventDefault();
        $('body').removeClass('body_contrast2')
        $('body').addClass('body_contrast1')
    });
    $('.link_contrast_reset').click(function(e) {
        e.preventDefault();
        $('body').removeClass('body_contrast1 body_contrast2');
    })
    /* @end contrast switching */

    /* top notification */
    if ($(window).width() < 992) {

        $(window).scroll(function() {

            if ($(this).scrollTop() >= 40) {
                $('.top_notify').slideUp();
            } else {
                $('.top_notify').slideDown();
            }
        });

    }

    $('.top_notify .close').click(function() {
        $('.top_notify .notify_cookie').addClass('d-none');
    });

    if (window.location.href.indexOf("login.html") > -1) {
        $('.login-nav .ddlogin_link:first-child .login_list .btn_wrap a:first-child').attr('href', 'https://indusnet.indusind.com/');
    }

    $('.tg-navigation>ul>li.menu-item-has-children>a[href^="http"]').each(function() {
        $(this).removeAttr('data-toggle');
    })

    /* rate link on mobile */

    $('.mob_ratelink').click(function(e) {
        e.preventDefault();
        console.log('icon clicked');
        $('.mobileMenu li a').each(function() {
            if ($(this).is(':contains("Rates")') || $(this).is(':contains("RATES")')) {
                $(this).parent().addClass('open-level rates-level');
                $('.mobileMenu').addClass('open');
                $('.mobileMenu ul li:first-child').addClass('open-level');
            }

        })

    });

    $('.level-title button').click(function() {

        if ($(this).parent().find('span').is(':contains("Rates")') || $(this).parent().find('span').is(':contains("RATES")')) {
            console.log('rates back clicked');
            $('.hamburger-box').click();

        }

    });

    if (window.location.href.indexOf("nri.html") > -1) {
        console.log('nri page');
        $('.mob_ratelink').click(function(e) {
            //var $nriratelink =  $('.mobileMenu ul li:nth-child(3) a')

            $('.mobileMenu li a').each(function() {
                if ($(this).is(':contains("Rates")') || $(this).is(':contains("RATES")')) {
                    console.log('rate clicked');
                    $(this).parent().addClass('open-level rates-level');
                    $('.mobileMenu').addClass('open');
                    $('.mobileMenu ul li:nth-child(3)').addClass('open-level');
                }

            });
        });

        $('.level-title .back').click(function() {

            if ($(this).parent().find('span').is(':contains("Rates")') || $(this).parent().find('span').is(':contains("RATES")')) {
                console.log('rates back clicked');
                $('.mobileMenu').removeClass('open');
                $('.mobileMenu ul li').removeClass('open-level');
                //$('.hamburger-box').click();

            }

        });

    }

    if (window.location.href.indexOf("/corporate/") > -1 || window.location.href.indexOf("corporate.html") > -1 || window.location.href.indexOf("/business/") > -1 || window.location.href.indexOf("business.html") > -1 || window.location.href.indexOf("inclusive-banking.html") > -1) {

        $('.mob_ratelink').parent().hide();
    }

    $('.mobileMenu li a[href*="rates.html#"]').click(function() {
        // console.log('rate list link clicked');
        $('.mobileMenu').removeClass('open');
        $('.mobileMenu ul li').removeClass('open-level');
    });

});
/*
$('a[href="#list-of-teasers-"]').click(function(){
    $('.tg-navigation ul li a').removeClass('active');
    $(this).addClass('active');
console.log('clicked');
    $('html, body').animate({
        scrollTop: $('#list-of-teasers-').offset().top - 190
    }, 600)
  });

$('a[href="#requestCallBackForm"]').click(function(){
console.log('clicked');
     $('.tg-navigation ul li a').removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $('#requestCallBackForm').offset().top - 140
    }, 600)
  });

$(window).scroll(function() {
    if ($(this).scrollTop() === 0) { 
        $('.tg-navigation ul li a').removeClass('active');
        console.log("You've scrolled 100 pixels.");
    }

    var scrollDistance = $(window).scrollTop() + 196;

    if ($('#list-of-teasers-').position().top <= scrollDistance) {
					$('.tg-navigation ul>li>a.active').removeClass('active');
                    $('a[href="#list-of-teasers-"]').addClass('active');
    }

    if ($('#requestCallBackForm').position().top <= scrollDistance) {
					$('.tg-navigation ul>li>a.active').removeClass('active');
                    $('a[href="#requestCallBackForm"]').addClass('active');
    }

});
*/

/*
		$('.tg-navigation>ul>li>a').bind('click', function(e) {
 console.log('clicked');
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top - 110
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop() + 196;


		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {

						$('.tg-navigation ul>li>a.active').removeClass('active');
                    $('.tg-navigation ul>li>a').eq(i).addClass('active');


				}
		});
}).scroll();    */

$(document).ready(function() {
    let cookieVal = getCookie("INDUSNET");
    if (cookieVal) {
        //console.log(cookieVal);
        $("#pageBody").attr("data-cookie", cookieVal);
    }

    // Function To Get Cookie
    function getCookie(name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        while (i < clen) {
            var j = i + alen;
            if (document.cookie.substring(i, j) == arg) {
                return getCookieVal(j);
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0)
                break;
        }
        return "";
    }

    function getCookieVal(offset) {
        var endstr = document.cookie.indexOf(";", offset);
        if (endstr == -1) {
            endstr = document.cookie.length;
        }
        return unescape(document.cookie.substring(offset, endstr));
    }
});
$(document).ready(function() {

    $('a').each(function(index, element) {
        let str1 = $(element).attr('href');
        let str2 = "mailto";
        if (str1 && str1.indexOf(str2) != -1) {
            console.log($(element));
            let text, name, dotLength, domain, tld;
            text = $(element).text();
            if (text) {
                name = text.split('@')[0];
                dotLength = text.split('@')[1].split('.').length;
                if (dotLength > 2) {
                    domain = text.split('@')[1].split('.')[0];
                    tld = text.split('@')[1].split('.')[1] + '.' + text.split('@')[1].split('.')[2];
                    if (!name) {
                        name = '';
                    }
                    if (!domain) {
                        domain = '';
                    }
                    if (!tld) {
                        tld = '';
                    }
                } else {
                    domain = text.split('@')[1].split('.')[0];
                    tld = text.split('@')[1].split('.')[1];
                    if (!name) {
                        name = '';
                    }
                    if (!domain) {
                        domain = '';
                    }
                    if (!tld) {
                        tld = '';
                    }
                }

                $(element).replaceWith('<a href="#" class="frag" data-name="' + name + '" data-domain="' + domain + '" data-tld="' + tld + '"  ></a>');
            }
        }
    });

    $(document).on('click', '.frag', function() {
        let name = $(this).data('name');
        let domain = $(this).data('domain');
        let tld = $(this).data('tld');
        window.location.href = 'mailto:' + name + '@' + domain + '.' + tld;
    })
});
!function(t, r) {
    "object" == typeof exports ? module.exports = exports = r() : "function" == typeof define && define.amd ? define([], r) : t.CryptoJS = r()
}(this, function() {
    var t = t || function(t, r) {
        var e = Object.create || function() {
            function t() {}
            return function(r) {
                var e;
                return t.prototype = r,
                e = new t,
                t.prototype = null,
                e
            }
        }()
          , i = {}
          , n = i.lib = {}
          , o = n.Base = function() {
            return {
                extend: function(t) {
                    var r = e(this);
                    return t && r.mixIn(t),
                    r.hasOwnProperty("init") && this.init !== r.init || (r.init = function() {
                        r.$super.init.apply(this, arguments)
                    }
                    ),
                    r.init.prototype = r,
                    r.$super = this,
                    r
                },
                create: function() {
                    var t = this.extend();
                    return t.init.apply(t, arguments),
                    t
                },
                init: function() {},
                mixIn: function(t) {
                    for (var r in t)
                        t.hasOwnProperty(r) && (this[r] = t[r]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            }
        }()
          , s = n.WordArray = o.extend({
            init: function(t, e) {
                t = this.words = t || [],
                e != r ? this.sigBytes = e : this.sigBytes = 4 * t.length
            },
            toString: function(t) {
                return (t || c).stringify(this)
            },
            concat: function(t) {
                var r = this.words
                  , e = t.words
                  , i = this.sigBytes
                  , n = t.sigBytes;
                if (this.clamp(),
                i % 4)
                    for (var o = 0; o < n; o++) {
                        var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        r[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8
                    }
                else
                    for (var o = 0; o < n; o += 4)
                        r[i + o >>> 2] = e[o >>> 2];
                return this.sigBytes += n,
                this
            },
            clamp: function() {
                var r = this.words
                  , e = this.sigBytes;
                r[e >>> 2] &= 4294967295 << 32 - e % 4 * 8,
                r.length = t.ceil(e / 4)
            },
            clone: function() {
                var t = o.clone.call(this);
                return t.words = this.words.slice(0),
                t
            },
            random: function(r) {
                for (var e, i = [], n = function(r) {
                    var r = r
                      , e = 987654321
                      , i = 4294967295;
                    return function() {
                        e = 36969 * (65535 & e) + (e >> 16) & i,
                        r = 18e3 * (65535 & r) + (r >> 16) & i;
                        var n = (e << 16) + r & i;
                        return n /= 4294967296,
                        n += .5,
                        n * (t.random() > .5 ? 1 : -1)
                    }
                }, o = 0; o < r; o += 4) {
                    var a = n(4294967296 * (e || t.random()));
                    e = 987654071 * a(),
                    i.push(4294967296 * a() | 0)
                }
                return new s.init(i,r)
            }
        })
          , a = i.enc = {}
          , c = a.Hex = {
            stringify: function(t) {
                for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) {
                    var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    i.push((o >>> 4).toString(16)),
                    i.push((15 & o).toString(16))
                }
                return i.join("")
            },
            parse: function(t) {
                for (var r = t.length, e = [], i = 0; i < r; i += 2)
                    e[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                return new s.init(e,r / 2)
            }
        }
          , h = a.Latin1 = {
            stringify: function(t) {
                for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n++) {
                    var o = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    i.push(String.fromCharCode(o))
                }
                return i.join("")
            },
            parse: function(t) {
                for (var r = t.length, e = [], i = 0; i < r; i++)
                    e[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                return new s.init(e,r)
            }
        }
          , l = a.Utf8 = {
            stringify: function(t) {
                try {
                    return decodeURIComponent(escape(h.stringify(t)))
                } catch (t) {
                    throw new Error("Malformed UTF-8 data")
                }
            },
            parse: function(t) {
                return h.parse(unescape(encodeURIComponent(t)))
            }
        }
          , f = n.BufferedBlockAlgorithm = o.extend({
            reset: function() {
                this._data = new s.init,
                this._nDataBytes = 0
            },
            _append: function(t) {
                "string" == typeof t && (t = l.parse(t)),
                this._data.concat(t),
                this._nDataBytes += t.sigBytes
            },
            _process: function(r) {
                var e = this._data
                  , i = e.words
                  , n = e.sigBytes
                  , o = this.blockSize
                  , a = 4 * o
                  , c = n / a;
                c = r ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0);
                var h = c * o
                  , l = t.min(4 * h, n);
                if (h) {
                    for (var f = 0; f < h; f += o)
                        this._doProcessBlock(i, f);
                    var u = i.splice(0, h);
                    e.sigBytes -= l
                }
                return new s.init(u,l)
            },
            clone: function() {
                var t = o.clone.call(this);
                return t._data = this._data.clone(),
                t
            },
            _minBufferSize: 0
        })
          , u = (n.Hasher = f.extend({
            cfg: o.extend(),
            init: function(t) {
                this.cfg = this.cfg.extend(t),
                this.reset()
            },
            reset: function() {
                f.reset.call(this),
                this._doReset()
            },
            update: function(t) {
                return this._append(t),
                this._process(),
                this
            },
            finalize: function(t) {
                t && this._append(t);
                var r = this._doFinalize();
                return r
            },
            blockSize: 16,
            _createHelper: function(t) {
                return function(r, e) {
                    return new t.init(e).finalize(r)
                }
            },
            _createHmacHelper: function(t) {
                return function(r, e) {
                    return new u.HMAC.init(t,e).finalize(r)
                }
            }
        }),
        i.algo = {});
        return i
    }(Math);
    return function() {
        function r(t, r, e) {
            for (var i = [], o = 0, s = 0; s < r; s++)
                if (s % 4) {
                    var a = e[t.charCodeAt(s - 1)] << s % 4 * 2
                      , c = e[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
                    i[o >>> 2] |= (a | c) << 24 - o % 4 * 8,
                    o++
                }
            return n.create(i, o)
        }
        var e = t
          , i = e.lib
          , n = i.WordArray
          , o = e.enc;
        o.Base64 = {
            stringify: function(t) {
                var r = t.words
                  , e = t.sigBytes
                  , i = this._map;
                t.clamp();
                for (var n = [], o = 0; o < e; o += 3)
                    for (var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = r[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, c = r[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, h = s << 16 | a << 8 | c, l = 0; l < 4 && o + .75 * l < e; l++)
                        n.push(i.charAt(h >>> 6 * (3 - l) & 63));
                var f = i.charAt(64);
                if (f)
                    for (; n.length % 4; )
                        n.push(f);
                return n.join("")
            },
            parse: function(t) {
                var e = t.length
                  , i = this._map
                  , n = this._reverseMap;
                if (!n) {
                    n = this._reverseMap = [];
                    for (var o = 0; o < i.length; o++)
                        n[i.charCodeAt(o)] = o
                }
                var s = i.charAt(64);
                if (s) {
                    var a = t.indexOf(s);
                    a !== -1 && (e = a)
                }
                return r(t, e, n)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }(),
    function(r) {
        function e(t, r, e, i, n, o, s) {
            var a = t + (r & e | ~r & i) + n + s;
            return (a << o | a >>> 32 - o) + r
        }
        function i(t, r, e, i, n, o, s) {
            var a = t + (r & i | e & ~i) + n + s;
            return (a << o | a >>> 32 - o) + r
        }
        function n(t, r, e, i, n, o, s) {
            var a = t + (r ^ e ^ i) + n + s;
            return (a << o | a >>> 32 - o) + r
        }
        function o(t, r, e, i, n, o, s) {
            var a = t + (e ^ (r | ~i)) + n + s;
            return (a << o | a >>> 32 - o) + r
        }
        var s = t
          , a = s.lib
          , c = a.WordArray
          , h = a.Hasher
          , l = s.algo
          , f = [];
        !function() {
            for (var t = 0; t < 64; t++)
                f[t] = 4294967296 * r.abs(r.sin(t + 1)) | 0
        }();
        var u = l.MD5 = h.extend({
            _doReset: function() {
                this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function(t, r) {
                for (var s = 0; s < 16; s++) {
                    var a = r + s
                      , c = t[a];
                    t[a] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                }
                var h = this._hash.words
                  , l = t[r + 0]
                  , u = t[r + 1]
                  , d = t[r + 2]
                  , v = t[r + 3]
                  , p = t[r + 4]
                  , _ = t[r + 5]
                  , y = t[r + 6]
                  , g = t[r + 7]
                  , B = t[r + 8]
                  , w = t[r + 9]
                  , k = t[r + 10]
                  , S = t[r + 11]
                  , m = t[r + 12]
                  , x = t[r + 13]
                  , b = t[r + 14]
                  , H = t[r + 15]
                  , z = h[0]
                  , A = h[1]
                  , C = h[2]
                  , D = h[3];
                z = e(z, A, C, D, l, 7, f[0]),
                D = e(D, z, A, C, u, 12, f[1]),
                C = e(C, D, z, A, d, 17, f[2]),
                A = e(A, C, D, z, v, 22, f[3]),
                z = e(z, A, C, D, p, 7, f[4]),
                D = e(D, z, A, C, _, 12, f[5]),
                C = e(C, D, z, A, y, 17, f[6]),
                A = e(A, C, D, z, g, 22, f[7]),
                z = e(z, A, C, D, B, 7, f[8]),
                D = e(D, z, A, C, w, 12, f[9]),
                C = e(C, D, z, A, k, 17, f[10]),
                A = e(A, C, D, z, S, 22, f[11]),
                z = e(z, A, C, D, m, 7, f[12]),
                D = e(D, z, A, C, x, 12, f[13]),
                C = e(C, D, z, A, b, 17, f[14]),
                A = e(A, C, D, z, H, 22, f[15]),
                z = i(z, A, C, D, u, 5, f[16]),
                D = i(D, z, A, C, y, 9, f[17]),
                C = i(C, D, z, A, S, 14, f[18]),
                A = i(A, C, D, z, l, 20, f[19]),
                z = i(z, A, C, D, _, 5, f[20]),
                D = i(D, z, A, C, k, 9, f[21]),
                C = i(C, D, z, A, H, 14, f[22]),
                A = i(A, C, D, z, p, 20, f[23]),
                z = i(z, A, C, D, w, 5, f[24]),
                D = i(D, z, A, C, b, 9, f[25]),
                C = i(C, D, z, A, v, 14, f[26]),
                A = i(A, C, D, z, B, 20, f[27]),
                z = i(z, A, C, D, x, 5, f[28]),
                D = i(D, z, A, C, d, 9, f[29]),
                C = i(C, D, z, A, g, 14, f[30]),
                A = i(A, C, D, z, m, 20, f[31]),
                z = n(z, A, C, D, _, 4, f[32]),
                D = n(D, z, A, C, B, 11, f[33]),
                C = n(C, D, z, A, S, 16, f[34]),
                A = n(A, C, D, z, b, 23, f[35]),
                z = n(z, A, C, D, u, 4, f[36]),
                D = n(D, z, A, C, p, 11, f[37]),
                C = n(C, D, z, A, g, 16, f[38]),
                A = n(A, C, D, z, k, 23, f[39]),
                z = n(z, A, C, D, x, 4, f[40]),
                D = n(D, z, A, C, l, 11, f[41]),
                C = n(C, D, z, A, v, 16, f[42]),
                A = n(A, C, D, z, y, 23, f[43]),
                z = n(z, A, C, D, w, 4, f[44]),
                D = n(D, z, A, C, m, 11, f[45]),
                C = n(C, D, z, A, H, 16, f[46]),
                A = n(A, C, D, z, d, 23, f[47]),
                z = o(z, A, C, D, l, 6, f[48]),
                D = o(D, z, A, C, g, 10, f[49]),
                C = o(C, D, z, A, b, 15, f[50]),
                A = o(A, C, D, z, _, 21, f[51]),
                z = o(z, A, C, D, m, 6, f[52]),
                D = o(D, z, A, C, v, 10, f[53]),
                C = o(C, D, z, A, k, 15, f[54]),
                A = o(A, C, D, z, u, 21, f[55]),
                z = o(z, A, C, D, B, 6, f[56]),
                D = o(D, z, A, C, H, 10, f[57]),
                C = o(C, D, z, A, y, 15, f[58]),
                A = o(A, C, D, z, x, 21, f[59]),
                z = o(z, A, C, D, p, 6, f[60]),
                D = o(D, z, A, C, S, 10, f[61]),
                C = o(C, D, z, A, d, 15, f[62]),
                A = o(A, C, D, z, w, 21, f[63]),
                h[0] = h[0] + z | 0,
                h[1] = h[1] + A | 0,
                h[2] = h[2] + C | 0,
                h[3] = h[3] + D | 0
            },
            _doFinalize: function() {
                var t = this._data
                  , e = t.words
                  , i = 8 * this._nDataBytes
                  , n = 8 * t.sigBytes;
                e[n >>> 5] |= 128 << 24 - n % 32;
                var o = r.floor(i / 4294967296)
                  , s = i;
                e[(n + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                e[(n + 64 >>> 9 << 4) + 14] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
                t.sigBytes = 4 * (e.length + 1),
                this._process();
                for (var a = this._hash, c = a.words, h = 0; h < 4; h++) {
                    var l = c[h];
                    c[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                }
                return a
            },
            clone: function() {
                var t = h.clone.call(this);
                return t._hash = this._hash.clone(),
                t
            }
        });
        s.MD5 = h._createHelper(u),
        s.HmacMD5 = h._createHmacHelper(u)
    }(Math),
    function() {
        var r = t
          , e = r.lib
          , i = e.WordArray
          , n = e.Hasher
          , o = r.algo
          , s = []
          , a = o.SHA1 = n.extend({
            _doReset: function() {
                this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(t, r) {
                for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], a = e[3], c = e[4], h = 0; h < 80; h++) {
                    if (h < 16)
                        s[h] = 0 | t[r + h];
                    else {
                        var l = s[h - 3] ^ s[h - 8] ^ s[h - 14] ^ s[h - 16];
                        s[h] = l << 1 | l >>> 31
                    }
                    var f = (i << 5 | i >>> 27) + c + s[h];
                    f += h < 20 ? (n & o | ~n & a) + 1518500249 : h < 40 ? (n ^ o ^ a) + 1859775393 : h < 60 ? (n & o | n & a | o & a) - 1894007588 : (n ^ o ^ a) - 899497514,
                    c = a,
                    a = o,
                    o = n << 30 | n >>> 2,
                    n = i,
                    i = f
                }
                e[0] = e[0] + i | 0,
                e[1] = e[1] + n | 0,
                e[2] = e[2] + o | 0,
                e[3] = e[3] + a | 0,
                e[4] = e[4] + c | 0
            },
            _doFinalize: function() {
                var t = this._data
                  , r = t.words
                  , e = 8 * this._nDataBytes
                  , i = 8 * t.sigBytes;
                return r[i >>> 5] |= 128 << 24 - i % 32,
                r[(i + 64 >>> 9 << 4) + 14] = Math.floor(e / 4294967296),
                r[(i + 64 >>> 9 << 4) + 15] = e,
                t.sigBytes = 4 * r.length,
                this._process(),
                this._hash
            },
            clone: function() {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(),
                t
            }
        });
        r.SHA1 = n._createHelper(a),
        r.HmacSHA1 = n._createHmacHelper(a)
    }(),
    function(r) {
        var e = t
          , i = e.lib
          , n = i.WordArray
          , o = i.Hasher
          , s = e.algo
          , a = []
          , c = [];
        !function() {
            function t(t) {
                for (var e = r.sqrt(t), i = 2; i <= e; i++)
                    if (!(t % i))
                        return !1;
                return !0
            }
            function e(t) {
                return 4294967296 * (t - (0 | t)) | 0
            }
            for (var i = 2, n = 0; n < 64; )
                t(i) && (n < 8 && (a[n] = e(r.pow(i, .5))),
                c[n] = e(r.pow(i, 1 / 3)),
                n++),
                i++
        }();
        var h = []
          , l = s.SHA256 = o.extend({
            _doReset: function() {
                this._hash = new n.init(a.slice(0))
            },
            _doProcessBlock: function(t, r) {
                for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], s = e[3], a = e[4], l = e[5], f = e[6], u = e[7], d = 0; d < 64; d++) {
                    if (d < 16)
                        h[d] = 0 | t[r + d];
                    else {
                        var v = h[d - 15]
                          , p = (v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3
                          , _ = h[d - 2]
                          , y = (_ << 15 | _ >>> 17) ^ (_ << 13 | _ >>> 19) ^ _ >>> 10;
                        h[d] = p + h[d - 7] + y + h[d - 16]
                    }
                    var g = a & l ^ ~a & f
                      , B = i & n ^ i & o ^ n & o
                      , w = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)
                      , k = (a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)
                      , S = u + k + g + c[d] + h[d]
                      , m = w + B;
                    u = f,
                    f = l,
                    l = a,
                    a = s + S | 0,
                    s = o,
                    o = n,
                    n = i,
                    i = S + m | 0
                }
                e[0] = e[0] + i | 0,
                e[1] = e[1] + n | 0,
                e[2] = e[2] + o | 0,
                e[3] = e[3] + s | 0,
                e[4] = e[4] + a | 0,
                e[5] = e[5] + l | 0,
                e[6] = e[6] + f | 0,
                e[7] = e[7] + u | 0
            },
            _doFinalize: function() {
                var t = this._data
                  , e = t.words
                  , i = 8 * this._nDataBytes
                  , n = 8 * t.sigBytes;
                return e[n >>> 5] |= 128 << 24 - n % 32,
                e[(n + 64 >>> 9 << 4) + 14] = r.floor(i / 4294967296),
                e[(n + 64 >>> 9 << 4) + 15] = i,
                t.sigBytes = 4 * e.length,
                this._process(),
                this._hash
            },
            clone: function() {
                var t = o.clone.call(this);
                return t._hash = this._hash.clone(),
                t
            }
        });
        e.SHA256 = o._createHelper(l),
        e.HmacSHA256 = o._createHmacHelper(l)
    }(Math),
    function() {
        function r(t) {
            return t << 8 & 4278255360 | t >>> 8 & 16711935
        }
        var e = t
          , i = e.lib
          , n = i.WordArray
          , o = e.enc;
        o.Utf16 = o.Utf16BE = {
            stringify: function(t) {
                for (var r = t.words, e = t.sigBytes, i = [], n = 0; n < e; n += 2) {
                    var o = r[n >>> 2] >>> 16 - n % 4 * 8 & 65535;
                    i.push(String.fromCharCode(o))
                }
                return i.join("")
            },
            parse: function(t) {
                for (var r = t.length, e = [], i = 0; i < r; i++)
                    e[i >>> 1] |= t.charCodeAt(i) << 16 - i % 2 * 16;
                return n.create(e, 2 * r)
            }
        };
        o.Utf16LE = {
            stringify: function(t) {
                for (var e = t.words, i = t.sigBytes, n = [], o = 0; o < i; o += 2) {
                    var s = r(e[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
                    n.push(String.fromCharCode(s))
                }
                return n.join("")
            },
            parse: function(t) {
                for (var e = t.length, i = [], o = 0; o < e; o++)
                    i[o >>> 1] |= r(t.charCodeAt(o) << 16 - o % 2 * 16);
                return n.create(i, 2 * e)
            }
        }
    }(),
    function() {
        if ("function" == typeof ArrayBuffer) {
            var r = t
              , e = r.lib
              , i = e.WordArray
              , n = i.init
              , o = i.init = function(t) {
                if (t instanceof ArrayBuffer && (t = new Uint8Array(t)),
                (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),
                t instanceof Uint8Array) {
                    for (var r = t.byteLength, e = [], i = 0; i < r; i++)
                        e[i >>> 2] |= t[i] << 24 - i % 4 * 8;
                    n.call(this, e, r)
                } else
                    n.apply(this, arguments)
            }
            ;
            o.prototype = i
        }
    }(),
    function(r) {
        function e(t, r, e) {
            return t ^ r ^ e
        }
        function i(t, r, e) {
            return t & r | ~t & e
        }
        function n(t, r, e) {
            return (t | ~r) ^ e
        }
        function o(t, r, e) {
            return t & e | r & ~e
        }
        function s(t, r, e) {
            return t ^ (r | ~e)
        }
        function a(t, r) {
            return t << r | t >>> 32 - r
        }
        var c = t
          , h = c.lib
          , l = h.WordArray
          , f = h.Hasher
          , u = c.algo
          , d = l.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13])
          , v = l.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11])
          , p = l.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6])
          , _ = l.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11])
          , y = l.create([0, 1518500249, 1859775393, 2400959708, 2840853838])
          , g = l.create([1352829926, 1548603684, 1836072691, 2053994217, 0])
          , B = u.RIPEMD160 = f.extend({
            _doReset: function() {
                this._hash = l.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(t, r) {
                for (var c = 0; c < 16; c++) {
                    var h = r + c
                      , l = t[h];
                    t[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                }
                var f, u, B, w, k, S, m, x, b, H, z = this._hash.words, A = y.words, C = g.words, D = d.words, R = v.words, E = p.words, M = _.words;
                S = f = z[0],
                m = u = z[1],
                x = B = z[2],
                b = w = z[3],
                H = k = z[4];
                for (var F, c = 0; c < 80; c += 1)
                    F = f + t[r + D[c]] | 0,
                    F += c < 16 ? e(u, B, w) + A[0] : c < 32 ? i(u, B, w) + A[1] : c < 48 ? n(u, B, w) + A[2] : c < 64 ? o(u, B, w) + A[3] : s(u, B, w) + A[4],
                    F |= 0,
                    F = a(F, E[c]),
                    F = F + k | 0,
                    f = k,
                    k = w,
                    w = a(B, 10),
                    B = u,
                    u = F,
                    F = S + t[r + R[c]] | 0,
                    F += c < 16 ? s(m, x, b) + C[0] : c < 32 ? o(m, x, b) + C[1] : c < 48 ? n(m, x, b) + C[2] : c < 64 ? i(m, x, b) + C[3] : e(m, x, b) + C[4],
                    F |= 0,
                    F = a(F, M[c]),
                    F = F + H | 0,
                    S = H,
                    H = b,
                    b = a(x, 10),
                    x = m,
                    m = F;
                F = z[1] + B + b | 0,
                z[1] = z[2] + w + H | 0,
                z[2] = z[3] + k + S | 0,
                z[3] = z[4] + f + m | 0,
                z[4] = z[0] + u + x | 0,
                z[0] = F
            },
            _doFinalize: function() {
                var t = this._data
                  , r = t.words
                  , e = 8 * this._nDataBytes
                  , i = 8 * t.sigBytes;
                r[i >>> 5] |= 128 << 24 - i % 32,
                r[(i + 64 >>> 9 << 4) + 14] = 16711935 & (e << 8 | e >>> 24) | 4278255360 & (e << 24 | e >>> 8),
                t.sigBytes = 4 * (r.length + 1),
                this._process();
                for (var n = this._hash, o = n.words, s = 0; s < 5; s++) {
                    var a = o[s];
                    o[s] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                }
                return n
            },
            clone: function() {
                var t = f.clone.call(this);
                return t._hash = this._hash.clone(),
                t
            }
        });
        c.RIPEMD160 = f._createHelper(B),
        c.HmacRIPEMD160 = f._createHmacHelper(B)
    }(Math),
    function() {
        var r = t
          , e = r.lib
          , i = e.Base
          , n = r.enc
          , o = n.Utf8
          , s = r.algo;
        s.HMAC = i.extend({
            init: function(t, r) {
                t = this._hasher = new t.init,
                "string" == typeof r && (r = o.parse(r));
                var e = t.blockSize
                  , i = 4 * e;
                r.sigBytes > i && (r = t.finalize(r)),
                r.clamp();
                for (var n = this._oKey = r.clone(), s = this._iKey = r.clone(), a = n.words, c = s.words, h = 0; h < e; h++)
                    a[h] ^= 1549556828,
                    c[h] ^= 909522486;
                n.sigBytes = s.sigBytes = i,
                this.reset()
            },
            reset: function() {
                var t = this._hasher;
                t.reset(),
                t.update(this._iKey)
            },
            update: function(t) {
                return this._hasher.update(t),
                this
            },
            finalize: function(t) {
                var r = this._hasher
                  , e = r.finalize(t);
                r.reset();
                var i = r.finalize(this._oKey.clone().concat(e));
                return i
            }
        })
    }(),
    function() {
        var r = t
          , e = r.lib
          , i = e.Base
          , n = e.WordArray
          , o = r.algo
          , s = o.SHA1
          , a = o.HMAC
          , c = o.PBKDF2 = i.extend({
            cfg: i.extend({
                keySize: 4,
                hasher: s,
                iterations: 1
            }),
            init: function(t) {
                this.cfg = this.cfg.extend(t)
            },
            compute: function(t, r) {
                for (var e = this.cfg, i = a.create(e.hasher, t), o = n.create(), s = n.create([1]), c = o.words, h = s.words, l = e.keySize, f = e.iterations; c.length < l; ) {
                    var u = i.update(r).finalize(s);
                    i.reset();
                    for (var d = u.words, v = d.length, p = u, _ = 1; _ < f; _++) {
                        p = i.finalize(p),
                        i.reset();
                        for (var y = p.words, g = 0; g < v; g++)
                            d[g] ^= y[g]
                    }
                    o.concat(u),
                    h[0]++
                }
                return o.sigBytes = 4 * l,
                o
            }
        });
        r.PBKDF2 = function(t, r, e) {
            return c.create(e).compute(t, r)
        }
    }(),
    function() {
        var r = t
          , e = r.lib
          , i = e.Base
          , n = e.WordArray
          , o = r.algo
          , s = o.MD5
          , a = o.EvpKDF = i.extend({
            cfg: i.extend({
                keySize: 4,
                hasher: s,
                iterations: 1
            }),
            init: function(t) {
                this.cfg = this.cfg.extend(t)
            },
            compute: function(t, r) {
                for (var e = this.cfg, i = e.hasher.create(), o = n.create(), s = o.words, a = e.keySize, c = e.iterations; s.length < a; ) {
                    h && i.update(h);
                    var h = i.update(t).finalize(r);
                    i.reset();
                    for (var l = 1; l < c; l++)
                        h = i.finalize(h),
                        i.reset();
                    o.concat(h)
                }
                return o.sigBytes = 4 * a,
                o
            }
        });
        r.EvpKDF = function(t, r, e) {
            return a.create(e).compute(t, r)
        }
    }(),
    function() {
        var r = t
          , e = r.lib
          , i = e.WordArray
          , n = r.algo
          , o = n.SHA256
          , s = n.SHA224 = o.extend({
            _doReset: function() {
                this._hash = new i.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
            },
            _doFinalize: function() {
                var t = o._doFinalize.call(this);
                return t.sigBytes -= 4,
                t
            }
        });
        r.SHA224 = o._createHelper(s),
        r.HmacSHA224 = o._createHmacHelper(s)
    }(),
    function(r) {
        var e = t
          , i = e.lib
          , n = i.Base
          , o = i.WordArray
          , s = e.x64 = {};
        s.Word = n.extend({
            init: function(t, r) {
                this.high = t,
                this.low = r
            }
        }),
        s.WordArray = n.extend({
            init: function(t, e) {
                t = this.words = t || [],
                e != r ? this.sigBytes = e : this.sigBytes = 8 * t.length
            },
            toX32: function() {
                for (var t = this.words, r = t.length, e = [], i = 0; i < r; i++) {
                    var n = t[i];
                    e.push(n.high),
                    e.push(n.low)
                }
                return o.create(e, this.sigBytes)
            },
            clone: function() {
                for (var t = n.clone.call(this), r = t.words = this.words.slice(0), e = r.length, i = 0; i < e; i++)
                    r[i] = r[i].clone();
                return t
            }
        })
    }(),
    function(r) {
        var e = t
          , i = e.lib
          , n = i.WordArray
          , o = i.Hasher
          , s = e.x64
          , a = s.Word
          , c = e.algo
          , h = []
          , l = []
          , f = [];
        !function() {
            for (var t = 1, r = 0, e = 0; e < 24; e++) {
                h[t + 5 * r] = (e + 1) * (e + 2) / 2 % 64;
                var i = r % 5
                  , n = (2 * t + 3 * r) % 5;
                t = i,
                r = n
            }
            for (var t = 0; t < 5; t++)
                for (var r = 0; r < 5; r++)
                    l[t + 5 * r] = r + (2 * t + 3 * r) % 5 * 5;
            for (var o = 1, s = 0; s < 24; s++) {
                for (var c = 0, u = 0, d = 0; d < 7; d++) {
                    if (1 & o) {
                        var v = (1 << d) - 1;
                        v < 32 ? u ^= 1 << v : c ^= 1 << v - 32
                    }
                    128 & o ? o = o << 1 ^ 113 : o <<= 1
                }
                f[s] = a.create(c, u)
            }
        }();
        var u = [];
        !function() {
            for (var t = 0; t < 25; t++)
                u[t] = a.create()
        }();
        var d = c.SHA3 = o.extend({
            cfg: o.cfg.extend({
                outputLength: 512
            }),
            _doReset: function() {
                for (var t = this._state = [], r = 0; r < 25; r++)
                    t[r] = new a.init;
                this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
            },
            _doProcessBlock: function(t, r) {
                for (var e = this._state, i = this.blockSize / 2, n = 0; n < i; n++) {
                    var o = t[r + 2 * n]
                      , s = t[r + 2 * n + 1];
                    o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                    s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8);
                    var a = e[n];
                    a.high ^= s,
                    a.low ^= o
                }
                for (var c = 0; c < 24; c++) {
                    for (var d = 0; d < 5; d++) {
                        for (var v = 0, p = 0, _ = 0; _ < 5; _++) {
                            var a = e[d + 5 * _];
                            v ^= a.high,
                            p ^= a.low
                        }
                        var y = u[d];
                        y.high = v,
                        y.low = p
                    }
                    for (var d = 0; d < 5; d++)
                        for (var g = u[(d + 4) % 5], B = u[(d + 1) % 5], w = B.high, k = B.low, v = g.high ^ (w << 1 | k >>> 31), p = g.low ^ (k << 1 | w >>> 31), _ = 0; _ < 5; _++) {
                            var a = e[d + 5 * _];
                            a.high ^= v,
                            a.low ^= p
                        }
                    for (var S = 1; S < 25; S++) {
                        var a = e[S]
                          , m = a.high
                          , x = a.low
                          , b = h[S];
                        if (b < 32)
                            var v = m << b | x >>> 32 - b
                              , p = x << b | m >>> 32 - b;
                        else
                            var v = x << b - 32 | m >>> 64 - b
                              , p = m << b - 32 | x >>> 64 - b;
                        var H = u[l[S]];
                        H.high = v,
                        H.low = p
                    }
                    var z = u[0]
                      , A = e[0];
                    z.high = A.high,
                    z.low = A.low;
                    for (var d = 0; d < 5; d++)
                        for (var _ = 0; _ < 5; _++) {
                            var S = d + 5 * _
                              , a = e[S]
                              , C = u[S]
                              , D = u[(d + 1) % 5 + 5 * _]
                              , R = u[(d + 2) % 5 + 5 * _];
                            a.high = C.high ^ ~D.high & R.high,
                            a.low = C.low ^ ~D.low & R.low
                        }
                    var a = e[0]
                      , E = f[c];
                    a.high ^= E.high,
                    a.low ^= E.low
                }
            },
            _doFinalize: function() {
                var t = this._data
                  , e = t.words
                  , i = (8 * this._nDataBytes,
                8 * t.sigBytes)
                  , o = 32 * this.blockSize;
                e[i >>> 5] |= 1 << 24 - i % 32,
                e[(r.ceil((i + 1) / o) * o >>> 5) - 1] |= 128,
                t.sigBytes = 4 * e.length,
                this._process();
                for (var s = this._state, a = this.cfg.outputLength / 8, c = a / 8, h = [], l = 0; l < c; l++) {
                    var f = s[l]
                      , u = f.high
                      , d = f.low;
                    u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8),
                    d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8),
                    h.push(d),
                    h.push(u)
                }
                return new n.init(h,a)
            },
            clone: function() {
                for (var t = o.clone.call(this), r = t._state = this._state.slice(0), e = 0; e < 25; e++)
                    r[e] = r[e].clone();
                return t
            }
        });
        e.SHA3 = o._createHelper(d),
        e.HmacSHA3 = o._createHmacHelper(d)
    }(Math),
    function() {
        function r() {
            return s.create.apply(s, arguments)
        }
        var e = t
          , i = e.lib
          , n = i.Hasher
          , o = e.x64
          , s = o.Word
          , a = o.WordArray
          , c = e.algo
          , h = [r(1116352408, 3609767458), r(1899447441, 602891725), r(3049323471, 3964484399), r(3921009573, 2173295548), r(961987163, 4081628472), r(1508970993, 3053834265), r(2453635748, 2937671579), r(2870763221, 3664609560), r(3624381080, 2734883394), r(310598401, 1164996542), r(607225278, 1323610764), r(1426881987, 3590304994), r(1925078388, 4068182383), r(2162078206, 991336113), r(2614888103, 633803317), r(3248222580, 3479774868), r(3835390401, 2666613458), r(4022224774, 944711139), r(264347078, 2341262773), r(604807628, 2007800933), r(770255983, 1495990901), r(1249150122, 1856431235), r(1555081692, 3175218132), r(1996064986, 2198950837), r(2554220882, 3999719339), r(2821834349, 766784016), r(2952996808, 2566594879), r(3210313671, 3203337956), r(3336571891, 1034457026), r(3584528711, 2466948901), r(113926993, 3758326383), r(338241895, 168717936), r(666307205, 1188179964), r(773529912, 1546045734), r(1294757372, 1522805485), r(1396182291, 2643833823), r(1695183700, 2343527390), r(1986661051, 1014477480), r(2177026350, 1206759142), r(2456956037, 344077627), r(2730485921, 1290863460), r(2820302411, 3158454273), r(3259730800, 3505952657), r(3345764771, 106217008), r(3516065817, 3606008344), r(3600352804, 1432725776), r(4094571909, 1467031594), r(275423344, 851169720), r(430227734, 3100823752), r(506948616, 1363258195), r(659060556, 3750685593), r(883997877, 3785050280), r(958139571, 3318307427), r(1322822218, 3812723403), r(1537002063, 2003034995), r(1747873779, 3602036899), r(1955562222, 1575990012), r(2024104815, 1125592928), r(2227730452, 2716904306), r(2361852424, 442776044), r(2428436474, 593698344), r(2756734187, 3733110249), r(3204031479, 2999351573), r(3329325298, 3815920427), r(3391569614, 3928383900), r(3515267271, 566280711), r(3940187606, 3454069534), r(4118630271, 4000239992), r(116418474, 1914138554), r(174292421, 2731055270), r(289380356, 3203993006), r(460393269, 320620315), r(685471733, 587496836), r(852142971, 1086792851), r(1017036298, 365543100), r(1126000580, 2618297676), r(1288033470, 3409855158), r(1501505948, 4234509866), r(1607167915, 987167468), r(1816402316, 1246189591)]
          , l = [];
        !function() {
            for (var t = 0; t < 80; t++)
                l[t] = r()
        }();
        var f = c.SHA512 = n.extend({
            _doReset: function() {
                this._hash = new a.init([new s.init(1779033703,4089235720), new s.init(3144134277,2227873595), new s.init(1013904242,4271175723), new s.init(2773480762,1595750129), new s.init(1359893119,2917565137), new s.init(2600822924,725511199), new s.init(528734635,4215389547), new s.init(1541459225,327033209)])
            },
            _doProcessBlock: function(t, r) {
                for (var e = this._hash.words, i = e[0], n = e[1], o = e[2], s = e[3], a = e[4], c = e[5], f = e[6], u = e[7], d = i.high, v = i.low, p = n.high, _ = n.low, y = o.high, g = o.low, B = s.high, w = s.low, k = a.high, S = a.low, m = c.high, x = c.low, b = f.high, H = f.low, z = u.high, A = u.low, C = d, D = v, R = p, E = _, M = y, F = g, P = B, W = w, O = k, U = S, I = m, K = x, X = b, L = H, j = z, N = A, T = 0; T < 80; T++) {
                    var Z = l[T];
                    if (T < 16)
                        var q = Z.high = 0 | t[r + 2 * T]
                          , G = Z.low = 0 | t[r + 2 * T + 1];
                    else {
                        var J = l[T - 15]
                          , $ = J.high
                          , Q = J.low
                          , V = ($ >>> 1 | Q << 31) ^ ($ >>> 8 | Q << 24) ^ $ >>> 7
                          , Y = (Q >>> 1 | $ << 31) ^ (Q >>> 8 | $ << 24) ^ (Q >>> 7 | $ << 25)
                          , tt = l[T - 2]
                          , rt = tt.high
                          , et = tt.low
                          , it = (rt >>> 19 | et << 13) ^ (rt << 3 | et >>> 29) ^ rt >>> 6
                          , nt = (et >>> 19 | rt << 13) ^ (et << 3 | rt >>> 29) ^ (et >>> 6 | rt << 26)
                          , ot = l[T - 7]
                          , st = ot.high
                          , at = ot.low
                          , ct = l[T - 16]
                          , ht = ct.high
                          , lt = ct.low
                          , G = Y + at
                          , q = V + st + (G >>> 0 < Y >>> 0 ? 1 : 0)
                          , G = G + nt
                          , q = q + it + (G >>> 0 < nt >>> 0 ? 1 : 0)
                          , G = G + lt
                          , q = q + ht + (G >>> 0 < lt >>> 0 ? 1 : 0);
                        Z.high = q,
                        Z.low = G
                    }
                    var ft = O & I ^ ~O & X
                      , ut = U & K ^ ~U & L
                      , dt = C & R ^ C & M ^ R & M
                      , vt = D & E ^ D & F ^ E & F
                      , pt = (C >>> 28 | D << 4) ^ (C << 30 | D >>> 2) ^ (C << 25 | D >>> 7)
                      , _t = (D >>> 28 | C << 4) ^ (D << 30 | C >>> 2) ^ (D << 25 | C >>> 7)
                      , yt = (O >>> 14 | U << 18) ^ (O >>> 18 | U << 14) ^ (O << 23 | U >>> 9)
                      , gt = (U >>> 14 | O << 18) ^ (U >>> 18 | O << 14) ^ (U << 23 | O >>> 9)
                      , Bt = h[T]
                      , wt = Bt.high
                      , kt = Bt.low
                      , St = N + gt
                      , mt = j + yt + (St >>> 0 < N >>> 0 ? 1 : 0)
                      , St = St + ut
                      , mt = mt + ft + (St >>> 0 < ut >>> 0 ? 1 : 0)
                      , St = St + kt
                      , mt = mt + wt + (St >>> 0 < kt >>> 0 ? 1 : 0)
                      , St = St + G
                      , mt = mt + q + (St >>> 0 < G >>> 0 ? 1 : 0)
                      , xt = _t + vt
                      , bt = pt + dt + (xt >>> 0 < _t >>> 0 ? 1 : 0);
                    j = X,
                    N = L,
                    X = I,
                    L = K,
                    I = O,
                    K = U,
                    U = W + St | 0,
                    O = P + mt + (U >>> 0 < W >>> 0 ? 1 : 0) | 0,
                    P = M,
                    W = F,
                    M = R,
                    F = E,
                    R = C,
                    E = D,
                    D = St + xt | 0,
                    C = mt + bt + (D >>> 0 < St >>> 0 ? 1 : 0) | 0
                }
                v = i.low = v + D,
                i.high = d + C + (v >>> 0 < D >>> 0 ? 1 : 0),
                _ = n.low = _ + E,
                n.high = p + R + (_ >>> 0 < E >>> 0 ? 1 : 0),
                g = o.low = g + F,
                o.high = y + M + (g >>> 0 < F >>> 0 ? 1 : 0),
                w = s.low = w + W,
                s.high = B + P + (w >>> 0 < W >>> 0 ? 1 : 0),
                S = a.low = S + U,
                a.high = k + O + (S >>> 0 < U >>> 0 ? 1 : 0),
                x = c.low = x + K,
                c.high = m + I + (x >>> 0 < K >>> 0 ? 1 : 0),
                H = f.low = H + L,
                f.high = b + X + (H >>> 0 < L >>> 0 ? 1 : 0),
                A = u.low = A + N,
                u.high = z + j + (A >>> 0 < N >>> 0 ? 1 : 0)
            },
            _doFinalize: function() {
                var t = this._data
                  , r = t.words
                  , e = 8 * this._nDataBytes
                  , i = 8 * t.sigBytes;
                r[i >>> 5] |= 128 << 24 - i % 32,
                r[(i + 128 >>> 10 << 5) + 30] = Math.floor(e / 4294967296),
                r[(i + 128 >>> 10 << 5) + 31] = e,
                t.sigBytes = 4 * r.length,
                this._process();
                var n = this._hash.toX32();
                return n
            },
            clone: function() {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(),
                t
            },
            blockSize: 32
        });
        e.SHA512 = n._createHelper(f),
        e.HmacSHA512 = n._createHmacHelper(f)
    }(),
    function() {
        var r = t
          , e = r.x64
          , i = e.Word
          , n = e.WordArray
          , o = r.algo
          , s = o.SHA512
          , a = o.SHA384 = s.extend({
            _doReset: function() {
                this._hash = new n.init([new i.init(3418070365,3238371032), new i.init(1654270250,914150663), new i.init(2438529370,812702999), new i.init(355462360,4144912697), new i.init(1731405415,4290775857), new i.init(2394180231,1750603025), new i.init(3675008525,1694076839), new i.init(1203062813,3204075428)])
            },
            _doFinalize: function() {
                var t = s._doFinalize.call(this);
                return t.sigBytes -= 16,
                t
            }
        });
        r.SHA384 = s._createHelper(a),
        r.HmacSHA384 = s._createHmacHelper(a)
    }(),
    t.lib.Cipher || function(r) {
        var e = t
          , i = e.lib
          , n = i.Base
          , o = i.WordArray
          , s = i.BufferedBlockAlgorithm
          , a = e.enc
          , c = (a.Utf8,
        a.Base64)
          , h = e.algo
          , l = h.EvpKDF
          , f = i.Cipher = s.extend({
            cfg: n.extend(),
            createEncryptor: function(t, r) {
                return this.create(this._ENC_XFORM_MODE, t, r)
            },
            createDecryptor: function(t, r) {
                return this.create(this._DEC_XFORM_MODE, t, r)
            },
            init: function(t, r, e) {
                this.cfg = this.cfg.extend(e),
                this._xformMode = t,
                this._key = r,
                this.reset()
            },
            reset: function() {
                s.reset.call(this),
                this._doReset()
            },
            process: function(t) {
                return this._append(t),
                this._process()
            },
            finalize: function(t) {
                t && this._append(t);
                var r = this._doFinalize();
                return r
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function() {
                function t(t) {
                    return "string" == typeof t ? m : w
                }
                return function(r) {
                    return {
                        encrypt: function(e, i, n) {
                            return t(i).encrypt(r, e, i, n)
                        },
                        decrypt: function(e, i, n) {
                            return t(i).decrypt(r, e, i, n)
                        }
                    }
                }
            }()
        })
          , u = (i.StreamCipher = f.extend({
            _doFinalize: function() {
                var t = this._process(!0);
                return t
            },
            blockSize: 1
        }),
        e.mode = {})
          , d = i.BlockCipherMode = n.extend({
            createEncryptor: function(t, r) {
                return this.Encryptor.create(t, r)
            },
            createDecryptor: function(t, r) {
                return this.Decryptor.create(t, r)
            },
            init: function(t, r) {
                this._cipher = t,
                this._iv = r
            }
        })
          , v = u.CBC = function() {
            function t(t, e, i) {
                var n = this._iv;
                if (n) {
                    var o = n;
                    this._iv = r
                } else
                    var o = this._prevBlock;
                for (var s = 0; s < i; s++)
                    t[e + s] ^= o[s]
            }
            var e = d.extend();
            return e.Encryptor = e.extend({
                processBlock: function(r, e) {
                    var i = this._cipher
                      , n = i.blockSize;
                    t.call(this, r, e, n),
                    i.encryptBlock(r, e),
                    this._prevBlock = r.slice(e, e + n)
                }
            }),
            e.Decryptor = e.extend({
                processBlock: function(r, e) {
                    var i = this._cipher
                      , n = i.blockSize
                      , o = r.slice(e, e + n);
                    i.decryptBlock(r, e),
                    t.call(this, r, e, n),
                    this._prevBlock = o
                }
            }),
            e
        }()
          , p = e.pad = {}
          , _ = p.Pkcs7 = {
            pad: function(t, r) {
                for (var e = 4 * r, i = e - t.sigBytes % e, n = i << 24 | i << 16 | i << 8 | i, s = [], a = 0; a < i; a += 4)
                    s.push(n);
                var c = o.create(s, i);
                t.concat(c)
            },
            unpad: function(t) {
                var r = 255 & t.words[t.sigBytes - 1 >>> 2];
                t.sigBytes -= r
            }
        }
          , y = (i.BlockCipher = f.extend({
            cfg: f.cfg.extend({
                mode: v,
                padding: _
            }),
            reset: function() {
                f.reset.call(this);
                var t = this.cfg
                  , r = t.iv
                  , e = t.mode;
                if (this._xformMode == this._ENC_XFORM_MODE)
                    var i = e.createEncryptor;
                else {
                    var i = e.createDecryptor;
                    this._minBufferSize = 1
                }
                this._mode && this._mode.__creator == i ? this._mode.init(this, r && r.words) : (this._mode = i.call(e, this, r && r.words),
                this._mode.__creator = i)
            },
            _doProcessBlock: function(t, r) {
                this._mode.processBlock(t, r)
            },
            _doFinalize: function() {
                var t = this.cfg.padding;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                    t.pad(this._data, this.blockSize);
                    var r = this._process(!0)
                } else {
                    var r = this._process(!0);
                    t.unpad(r)
                }
                return r
            },
            blockSize: 4
        }),
        i.CipherParams = n.extend({
            init: function(t) {
                this.mixIn(t)
            },
            toString: function(t) {
                return (t || this.formatter).stringify(this)
            }
        }))
          , g = e.format = {}
          , B = g.OpenSSL = {
            stringify: function(t) {
                var r = t.ciphertext
                  , e = t.salt;
                if (e)
                    var i = o.create([1398893684, 1701076831]).concat(e).concat(r);
                else
                    var i = r;
                return i.toString(c)
            },
            parse: function(t) {
                var r = c.parse(t)
                  , e = r.words;
                if (1398893684 == e[0] && 1701076831 == e[1]) {
                    var i = o.create(e.slice(2, 4));
                    e.splice(0, 4),
                    r.sigBytes -= 16
                }
                return y.create({
                    ciphertext: r,
                    salt: i
                })
            }
        }
          , w = i.SerializableCipher = n.extend({
            cfg: n.extend({
                format: B
            }),
            encrypt: function(t, r, e, i) {
                i = this.cfg.extend(i);
                var n = t.createEncryptor(e, i)
                  , o = n.finalize(r)
                  , s = n.cfg;
                return y.create({
                    ciphertext: o,
                    key: e,
                    iv: s.iv,
                    algorithm: t,
                    mode: s.mode,
                    padding: s.padding,
                    blockSize: t.blockSize,
                    formatter: i.format
                })
            },
            decrypt: function(t, r, e, i) {
                i = this.cfg.extend(i),
                r = this._parse(r, i.format);
                var n = t.createDecryptor(e, i).finalize(r.ciphertext);
                return n
            },
            _parse: function(t, r) {
                return "string" == typeof t ? r.parse(t, this) : t
            }
        })
          , k = e.kdf = {}
          , S = k.OpenSSL = {
            execute: function(t, r, e, i) {
                i || (i = o.random(8));
                var n = l.create({
                    keySize: r + e
                }).compute(t, i)
                  , s = o.create(n.words.slice(r), 4 * e);
                return n.sigBytes = 4 * r,
                y.create({
                    key: n,
                    iv: s,
                    salt: i
                })
            }
        }
          , m = i.PasswordBasedCipher = w.extend({
            cfg: w.cfg.extend({
                kdf: S
            }),
            encrypt: function(t, r, e, i) {
                i = this.cfg.extend(i);
                var n = i.kdf.execute(e, t.keySize, t.ivSize);
                i.iv = n.iv;
                var o = w.encrypt.call(this, t, r, n.key, i);
                return o.mixIn(n),
                o
            },
            decrypt: function(t, r, e, i) {
                i = this.cfg.extend(i),
                r = this._parse(r, i.format);
                var n = i.kdf.execute(e, t.keySize, t.ivSize, r.salt);
                i.iv = n.iv;
                var o = w.decrypt.call(this, t, r, n.key, i);
                return o
            }
        })
    }(),
    t.mode.CFB = function() {
        function r(t, r, e, i) {
            var n = this._iv;
            if (n) {
                var o = n.slice(0);
                this._iv = void 0
            } else
                var o = this._prevBlock;
            i.encryptBlock(o, 0);
            for (var s = 0; s < e; s++)
                t[r + s] ^= o[s]
        }
        var e = t.lib.BlockCipherMode.extend();
        return e.Encryptor = e.extend({
            processBlock: function(t, e) {
                var i = this._cipher
                  , n = i.blockSize;
                r.call(this, t, e, n, i),
                this._prevBlock = t.slice(e, e + n)
            }
        }),
        e.Decryptor = e.extend({
            processBlock: function(t, e) {
                var i = this._cipher
                  , n = i.blockSize
                  , o = t.slice(e, e + n);
                r.call(this, t, e, n, i),
                this._prevBlock = o
            }
        }),
        e
    }(),
    t.mode.ECB = function() {
        var r = t.lib.BlockCipherMode.extend();
        return r.Encryptor = r.extend({
            processBlock: function(t, r) {
                this._cipher.encryptBlock(t, r)
            }
        }),
        r.Decryptor = r.extend({
            processBlock: function(t, r) {
                this._cipher.decryptBlock(t, r)
            }
        }),
        r
    }(),
    t.pad.AnsiX923 = {
        pad: function(t, r) {
            var e = t.sigBytes
              , i = 4 * r
              , n = i - e % i
              , o = e + n - 1;
            t.clamp(),
            t.words[o >>> 2] |= n << 24 - o % 4 * 8,
            t.sigBytes += n
        },
        unpad: function(t) {
            var r = 255 & t.words[t.sigBytes - 1 >>> 2];
            t.sigBytes -= r
        }
    },
    t.pad.Iso10126 = {
        pad: function(r, e) {
            var i = 4 * e
              , n = i - r.sigBytes % i;
            r.concat(t.lib.WordArray.random(n - 1)).concat(t.lib.WordArray.create([n << 24], 1))
        },
        unpad: function(t) {
            var r = 255 & t.words[t.sigBytes - 1 >>> 2];
            t.sigBytes -= r
        }
    },
    t.pad.Iso97971 = {
        pad: function(r, e) {
            r.concat(t.lib.WordArray.create([2147483648], 1)),
            t.pad.ZeroPadding.pad(r, e)
        },
        unpad: function(r) {
            t.pad.ZeroPadding.unpad(r),
            r.sigBytes--
        }
    },
    t.mode.OFB = function() {
        var r = t.lib.BlockCipherMode.extend()
          , e = r.Encryptor = r.extend({
            processBlock: function(t, r) {
                var e = this._cipher
                  , i = e.blockSize
                  , n = this._iv
                  , o = this._keystream;
                n && (o = this._keystream = n.slice(0),
                this._iv = void 0),
                e.encryptBlock(o, 0);
                for (var s = 0; s < i; s++)
                    t[r + s] ^= o[s]
            }
        });
        return r.Decryptor = e,
        r
    }(),
    t.pad.NoPadding = {
        pad: function() {},
        unpad: function() {}
    },
    function(r) {
        var e = t
          , i = e.lib
          , n = i.CipherParams
          , o = e.enc
          , s = o.Hex
          , a = e.format;
        a.Hex = {
            stringify: function(t) {
                return t.ciphertext.toString(s)
            },
            parse: function(t) {
                var r = s.parse(t);
                return n.create({
                    ciphertext: r
                })
            }
        }
    }(),
    function() {
        var r = t
          , e = r.lib
          , i = e.BlockCipher
          , n = r.algo
          , o = []
          , s = []
          , a = []
          , c = []
          , h = []
          , l = []
          , f = []
          , u = []
          , d = []
          , v = [];
        !function() {
            for (var t = [], r = 0; r < 256; r++)
                r < 128 ? t[r] = r << 1 : t[r] = r << 1 ^ 283;
            for (var e = 0, i = 0, r = 0; r < 256; r++) {
                var n = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
                n = n >>> 8 ^ 255 & n ^ 99,
                o[e] = n,
                s[n] = e;
                var p = t[e]
                  , _ = t[p]
                  , y = t[_]
                  , g = 257 * t[n] ^ 16843008 * n;
                a[e] = g << 24 | g >>> 8,
                c[e] = g << 16 | g >>> 16,
                h[e] = g << 8 | g >>> 24,
                l[e] = g;
                var g = 16843009 * y ^ 65537 * _ ^ 257 * p ^ 16843008 * e;
                f[n] = g << 24 | g >>> 8,
                u[n] = g << 16 | g >>> 16,
                d[n] = g << 8 | g >>> 24,
                v[n] = g,
                e ? (e = p ^ t[t[t[y ^ p]]],
                i ^= t[t[i]]) : e = i = 1
            }
        }();
        var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
          , _ = n.AES = i.extend({
            _doReset: function() {
                if (!this._nRounds || this._keyPriorReset !== this._key) {
                    for (var t = this._keyPriorReset = this._key, r = t.words, e = t.sigBytes / 4, i = this._nRounds = e + 6, n = 4 * (i + 1), s = this._keySchedule = [], a = 0; a < n; a++)
                        if (a < e)
                            s[a] = r[a];
                        else {
                            var c = s[a - 1];
                            a % e ? e > 6 && a % e == 4 && (c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c]) : (c = c << 8 | c >>> 24,
                            c = o[c >>> 24] << 24 | o[c >>> 16 & 255] << 16 | o[c >>> 8 & 255] << 8 | o[255 & c],
                            c ^= p[a / e | 0] << 24),
                            s[a] = s[a - e] ^ c
                        }
                    for (var h = this._invKeySchedule = [], l = 0; l < n; l++) {
                        var a = n - l;
                        if (l % 4)
                            var c = s[a];
                        else
                            var c = s[a - 4];
                        l < 4 || a <= 4 ? h[l] = c : h[l] = f[o[c >>> 24]] ^ u[o[c >>> 16 & 255]] ^ d[o[c >>> 8 & 255]] ^ v[o[255 & c]]
                    }
                }
            },
            encryptBlock: function(t, r) {
                this._doCryptBlock(t, r, this._keySchedule, a, c, h, l, o)
            },
            decryptBlock: function(t, r) {
                var e = t[r + 1];
                t[r + 1] = t[r + 3],
                t[r + 3] = e,
                this._doCryptBlock(t, r, this._invKeySchedule, f, u, d, v, s);
                var e = t[r + 1];
                t[r + 1] = t[r + 3],
                t[r + 3] = e
            },
            _doCryptBlock: function(t, r, e, i, n, o, s, a) {
                for (var c = this._nRounds, h = t[r] ^ e[0], l = t[r + 1] ^ e[1], f = t[r + 2] ^ e[2], u = t[r + 3] ^ e[3], d = 4, v = 1; v < c; v++) {
                    var p = i[h >>> 24] ^ n[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & u] ^ e[d++]
                      , _ = i[l >>> 24] ^ n[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & h] ^ e[d++]
                      , y = i[f >>> 24] ^ n[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & l] ^ e[d++]
                      , g = i[u >>> 24] ^ n[h >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ e[d++];
                    h = p,
                    l = _,
                    f = y,
                    u = g
                }
                var p = (a[h >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & u]) ^ e[d++]
                  , _ = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & h]) ^ e[d++]
                  , y = (a[f >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & l]) ^ e[d++]
                  , g = (a[u >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ e[d++];
                t[r] = p,
                t[r + 1] = _,
                t[r + 2] = y,
                t[r + 3] = g
            },
            keySize: 8
        });
        r.AES = i._createHelper(_)
    }(),
    function() {
        function r(t, r) {
            var e = (this._lBlock >>> t ^ this._rBlock) & r;
            this._rBlock ^= e,
            this._lBlock ^= e << t
        }
        function e(t, r) {
            var e = (this._rBlock >>> t ^ this._lBlock) & r;
            this._lBlock ^= e,
            this._rBlock ^= e << t;
        }
        var i = t
          , n = i.lib
          , o = n.WordArray
          , s = n.BlockCipher
          , a = i.algo
          , c = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
          , h = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
          , l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]
          , f = [{
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
        }, {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
        }, {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
        }, {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
        }, {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
        }, {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
        }, {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
        }, {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
        }]
          , u = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679]
          , d = a.DES = s.extend({
            _doReset: function() {
                for (var t = this._key, r = t.words, e = [], i = 0; i < 56; i++) {
                    var n = c[i] - 1;
                    e[i] = r[n >>> 5] >>> 31 - n % 32 & 1
                }
                for (var o = this._subKeys = [], s = 0; s < 16; s++) {
                    for (var a = o[s] = [], f = l[s], i = 0; i < 24; i++)
                        a[i / 6 | 0] |= e[(h[i] - 1 + f) % 28] << 31 - i % 6,
                        a[4 + (i / 6 | 0)] |= e[28 + (h[i + 24] - 1 + f) % 28] << 31 - i % 6;
                    a[0] = a[0] << 1 | a[0] >>> 31;
                    for (var i = 1; i < 7; i++)
                        a[i] = a[i] >>> 4 * (i - 1) + 3;
                    a[7] = a[7] << 5 | a[7] >>> 27
                }
                for (var u = this._invSubKeys = [], i = 0; i < 16; i++)
                    u[i] = o[15 - i]
            },
            encryptBlock: function(t, r) {
                this._doCryptBlock(t, r, this._subKeys)
            },
            decryptBlock: function(t, r) {
                this._doCryptBlock(t, r, this._invSubKeys)
            },
            _doCryptBlock: function(t, i, n) {
                this._lBlock = t[i],
                this._rBlock = t[i + 1],
                r.call(this, 4, 252645135),
                r.call(this, 16, 65535),
                e.call(this, 2, 858993459),
                e.call(this, 8, 16711935),
                r.call(this, 1, 1431655765);
                for (var o = 0; o < 16; o++) {
                    for (var s = n[o], a = this._lBlock, c = this._rBlock, h = 0, l = 0; l < 8; l++)
                        h |= f[l][((c ^ s[l]) & u[l]) >>> 0];
                    this._lBlock = c,
                    this._rBlock = a ^ h
                }
                var d = this._lBlock;
                this._lBlock = this._rBlock,
                this._rBlock = d,
                r.call(this, 1, 1431655765),
                e.call(this, 8, 16711935),
                e.call(this, 2, 858993459),
                r.call(this, 16, 65535),
                r.call(this, 4, 252645135),
                t[i] = this._lBlock,
                t[i + 1] = this._rBlock
            },
            keySize: 2,
            ivSize: 2,
            blockSize: 2
        });
        i.DES = s._createHelper(d);
        var v = a.TripleDES = s.extend({
            _doReset: function() {
                var t = this._key
                  , r = t.words;
                this._des1 = d.createEncryptor(o.create(r.slice(0, 2))),
                this._des2 = d.createEncryptor(o.create(r.slice(2, 4))),
                this._des3 = d.createEncryptor(o.create(r.slice(4, 6)))
            },
            encryptBlock: function(t, r) {
                this._des1.encryptBlock(t, r),
                this._des2.decryptBlock(t, r),
                this._des3.encryptBlock(t, r)
            },
            decryptBlock: function(t, r) {
                this._des3.decryptBlock(t, r),
                this._des2.encryptBlock(t, r),
                this._des1.decryptBlock(t, r)
            },
            keySize: 6,
            ivSize: 2,
            blockSize: 2
        });
        i.TripleDES = s._createHelper(v)
    }(),
    function() {
        function r() {
            for (var t = this._S, r = this._i, e = this._j, i = 0, n = 0; n < 4; n++) {
                r = (r + 1) % 256,
                e = (e + t[r]) % 256;
                var o = t[r];
                t[r] = t[e],
                t[e] = o,
                i |= t[(t[r] + t[e]) % 256] << 24 - 8 * n
            }
            return this._i = r,
            this._j = e,
            i
        }
        var e = t
          , i = e.lib
          , n = i.StreamCipher
          , o = e.algo
          , s = o.RC4 = n.extend({
            _doReset: function() {
                for (var t = this._key, r = t.words, e = t.sigBytes, i = this._S = [], n = 0; n < 256; n++)
                    i[n] = n;
                for (var n = 0, o = 0; n < 256; n++) {
                    var s = n % e
                      , a = r[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                    o = (o + i[n] + a) % 256;
                    var c = i[n];
                    i[n] = i[o],
                    i[o] = c
                }
                this._i = this._j = 0
            },
            _doProcessBlock: function(t, e) {
                t[e] ^= r.call(this)
            },
            keySize: 8,
            ivSize: 0
        });
        e.RC4 = n._createHelper(s);
        var a = o.RC4Drop = s.extend({
            cfg: s.cfg.extend({
                drop: 192
            }),
            _doReset: function() {
                s._doReset.call(this);
                for (var t = this.cfg.drop; t > 0; t--)
                    r.call(this)
            }
        });
        e.RC4Drop = n._createHelper(a)
    }(),
    t.mode.CTRGladman = function() {
        function r(t) {
            if (255 === (t >> 24 & 255)) {
                var r = t >> 16 & 255
                  , e = t >> 8 & 255
                  , i = 255 & t;
                255 === r ? (r = 0,
                255 === e ? (e = 0,
                255 === i ? i = 0 : ++i) : ++e) : ++r,
                t = 0,
                t += r << 16,
                t += e << 8,
                t += i
            } else
                t += 1 << 24;
            return t
        }
        function e(t) {
            return 0 === (t[0] = r(t[0])) && (t[1] = r(t[1])),
            t
        }
        var i = t.lib.BlockCipherMode.extend()
          , n = i.Encryptor = i.extend({
            processBlock: function(t, r) {
                var i = this._cipher
                  , n = i.blockSize
                  , o = this._iv
                  , s = this._counter;
                o && (s = this._counter = o.slice(0),
                this._iv = void 0),
                e(s);
                var a = s.slice(0);
                i.encryptBlock(a, 0);
                for (var c = 0; c < n; c++)
                    t[r + c] ^= a[c]
            }
        });
        return i.Decryptor = n,
        i
    }(),
    function() {
        function r() {
            for (var t = this._X, r = this._C, e = 0; e < 8; e++)
                a[e] = r[e];
            r[0] = r[0] + 1295307597 + this._b | 0,
            r[1] = r[1] + 3545052371 + (r[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0,
            r[2] = r[2] + 886263092 + (r[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0,
            r[3] = r[3] + 1295307597 + (r[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0,
            r[4] = r[4] + 3545052371 + (r[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0,
            r[5] = r[5] + 886263092 + (r[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0,
            r[6] = r[6] + 1295307597 + (r[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0,
            r[7] = r[7] + 3545052371 + (r[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0,
            this._b = r[7] >>> 0 < a[7] >>> 0 ? 1 : 0;
            for (var e = 0; e < 8; e++) {
                var i = t[e] + r[e]
                  , n = 65535 & i
                  , o = i >>> 16
                  , s = ((n * n >>> 17) + n * o >>> 15) + o * o
                  , h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                c[e] = s ^ h
            }
            t[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0,
            t[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0,
            t[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0,
            t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0,
            t[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0,
            t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0,
            t[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0,
            t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0
        }
        var e = t
          , i = e.lib
          , n = i.StreamCipher
          , o = e.algo
          , s = []
          , a = []
          , c = []
          , h = o.Rabbit = n.extend({
            _doReset: function() {
                for (var t = this._key.words, e = this.cfg.iv, i = 0; i < 4; i++)
                    t[i] = 16711935 & (t[i] << 8 | t[i] >>> 24) | 4278255360 & (t[i] << 24 | t[i] >>> 8);
                var n = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16]
                  , o = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                this._b = 0;
                for (var i = 0; i < 4; i++)
                    r.call(this);
                for (var i = 0; i < 8; i++)
                    o[i] ^= n[i + 4 & 7];
                if (e) {
                    var s = e.words
                      , a = s[0]
                      , c = s[1]
                      , h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                      , l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                      , f = h >>> 16 | 4294901760 & l
                      , u = l << 16 | 65535 & h;
                    o[0] ^= h,
                    o[1] ^= f,
                    o[2] ^= l,
                    o[3] ^= u,
                    o[4] ^= h,
                    o[5] ^= f,
                    o[6] ^= l,
                    o[7] ^= u;
                    for (var i = 0; i < 4; i++)
                        r.call(this)
                }
            },
            _doProcessBlock: function(t, e) {
                var i = this._X;
                r.call(this),
                s[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16,
                s[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16,
                s[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16,
                s[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                for (var n = 0; n < 4; n++)
                    s[n] = 16711935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8),
                    t[e + n] ^= s[n]
            },
            blockSize: 4,
            ivSize: 2
        });
        e.Rabbit = n._createHelper(h)
    }(),
    t.mode.CTR = function() {
        var r = t.lib.BlockCipherMode.extend()
          , e = r.Encryptor = r.extend({
            processBlock: function(t, r) {
                var e = this._cipher
                  , i = e.blockSize
                  , n = this._iv
                  , o = this._counter;
                n && (o = this._counter = n.slice(0),
                this._iv = void 0);
                var s = o.slice(0);
                e.encryptBlock(s, 0),
                o[i - 1] = o[i - 1] + 1 | 0;
                for (var a = 0; a < i; a++)
                    t[r + a] ^= s[a]
            }
        });
        return r.Decryptor = e,
        r
    }(),
    function() {
        function r() {
            for (var t = this._X, r = this._C, e = 0; e < 8; e++)
                a[e] = r[e];
            r[0] = r[0] + 1295307597 + this._b | 0,
            r[1] = r[1] + 3545052371 + (r[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0,
            r[2] = r[2] + 886263092 + (r[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0,
            r[3] = r[3] + 1295307597 + (r[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0,
            r[4] = r[4] + 3545052371 + (r[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0,
            r[5] = r[5] + 886263092 + (r[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0,
            r[6] = r[6] + 1295307597 + (r[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0,
            r[7] = r[7] + 3545052371 + (r[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0,
            this._b = r[7] >>> 0 < a[7] >>> 0 ? 1 : 0;
            for (var e = 0; e < 8; e++) {
                var i = t[e] + r[e]
                  , n = 65535 & i
                  , o = i >>> 16
                  , s = ((n * n >>> 17) + n * o >>> 15) + o * o
                  , h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                c[e] = s ^ h
            }
            t[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0,
            t[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0,
            t[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0,
            t[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0,
            t[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0,
            t[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0,
            t[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0,
            t[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0
        }
        var e = t
          , i = e.lib
          , n = i.StreamCipher
          , o = e.algo
          , s = []
          , a = []
          , c = []
          , h = o.RabbitLegacy = n.extend({
            _doReset: function() {
                var t = this._key.words
                  , e = this.cfg.iv
                  , i = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16]
                  , n = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                this._b = 0;
                for (var o = 0; o < 4; o++)
                    r.call(this);
                for (var o = 0; o < 8; o++)
                    n[o] ^= i[o + 4 & 7];
                if (e) {
                    var s = e.words
                      , a = s[0]
                      , c = s[1]
                      , h = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                      , l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                      , f = h >>> 16 | 4294901760 & l
                      , u = l << 16 | 65535 & h;
                    n[0] ^= h,
                    n[1] ^= f,
                    n[2] ^= l,
                    n[3] ^= u,
                    n[4] ^= h,
                    n[5] ^= f,
                    n[6] ^= l,
                    n[7] ^= u;
                    for (var o = 0; o < 4; o++)
                        r.call(this)
                }
            },
            _doProcessBlock: function(t, e) {
                var i = this._X;
                r.call(this),
                s[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16,
                s[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16,
                s[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16,
                s[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                for (var n = 0; n < 4; n++)
                    s[n] = 16711935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8),
                    t[e + n] ^= s[n]
            },
            blockSize: 4,
            ivSize: 2
        });
        e.RabbitLegacy = n._createHelper(h)
    }(),
    t.pad.ZeroPadding = {
        pad: function(t, r) {
            var e = 4 * r;
            t.clamp(),
            t.sigBytes += e - (t.sigBytes % e || e)
        },
        unpad: function(t) {
            for (var r = t.words, e = t.sigBytes - 1; !(r[e >>> 2] >>> 24 - e % 4 * 8 & 255); )
                e--;
            t.sigBytes = e + 1
        }
    },
    t
});
//# sourceMappingURL=crypto-js.min.js.map
function reLineNumbering(tableId) {
    var table = document.getElementById(tableId);
    if (table != null) {
        var total = table.rows.length;
        for (var i = 0; i < total; i++) {
            if (i > 0) {
                table.rows[i].cells[0].innerHTML = i;
            }
        }
    }
}

$(document).ready(function() {
    reLineNumbering("autoNumberTable");
});
$(document).ready(function() {
    var pagePath = window.location.href;
    var previousPage = document.referrer;

    // Store the current page as the last visited page
    if (!pagePath.includes("microsites") && (previousPage.includes("google") || previousPage.includes("bing") || previousPage.includes("yahoo"))) {
        $.ajax({
            url: "/bin/utmsource?page=" + encodeURIComponent(pagePath) + "&referer=" + previousPage,
            type: "GET",
            success: function(response) {

                console.log("Servlet responses:", response);
                let newURL = response;
                let stateObj = {
                    id: "100"
                };
                // State object can store any relevant data

                // Modify the URL by pushing a new state
                window.history.pushState(stateObj, "New Page Title", newURL);
            },
            error: function(xhr, status, error) {
                console.error("Error occurred:", status, error);
            }

        });
    }
});