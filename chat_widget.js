    ! function(t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("IBMChat", [], e) : "object" == typeof exports ? exports.IBMChat = e() : t.IBMChat = e()
    }(this, function() {
        return function(t) {
            function e(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }(function(t) {
            for (var e in t)
                if (Object.prototype.hasOwnProperty.call(t, e)) switch (typeof t[e]) {
                    case "function":
                        break;
                    case "object":
                        t[e] = function(e) {
                            var n = e.slice(1),
                                r = t[e[0]];
                            return function(t, e, o) {
                                r.apply(this, [t, e, o].concat(n))
                            }
                        }(t[e]);
                        break;
                    default:
                        t[e] = t[t[e]]
                }
            return t
        }([function(t, e, n) {
            var r = n(54),
                o = {
                    init: r.init,
                    restart: r.restart,
                    destroy: r.destroy,
                    clear: r.clear,
                    send: function(t) {
                        return r.send(t), o
                    },
                    receive: function(t) {
                        return r.receive(t), o
                    },
                    sendMock: function(t) {
                        return r.sendMock(t), o
                    },
                    sendSilently: function(t) {
                        return r.sendSilently(t), o
                    },
                    registerLayout: function(t, e) {
                        return r.registerLayout(t, e), o
                    },
                    enableCustomInputHandler: function(t) {
                        return r.enableCustomInputHandler(t), o
                    },
                    disableCustomInputHandler: function() {
                        return r.disableCustomInputHandler(), o
                    },
                    focusInput: function() {
                        return r.focusInput(), o
                    },
                    disableInput: function() {
                        return r.disableInput(), o
                    },
                    enableInput: function() {
                        return r.enableInput(), o
                    },
                    subscribe: r.subscribe,
                    subscribeOnce: r.subscribeOnce,
                    publish: function(t, e) {
                        return r.publish(t, e), o
                    },
                    profile: {
                        get: r.profile.get,
                        set: r.profile.set,
                        has: r.profile.has,
                        clear: r.profile.clear,
                        "delete": r.profile["delete"],
                        forEach: r.profile.forEach
                    },
                    currentSubscriptions: r.currentSubscriptions,
                    state: {
                        get: r.state.get,
                        set: function(t) {
                            return r.state.set(t), o
                        }
                    },
                    context: {
                        get: r.context.get,
                        set: function(t) {
                            return r.context.set(t), o
                        }
                    },
                    debug: function() {
                        return r.debug(), o
                    },
                    version: "1.6.4"
                };
            t.exports = o
        }, function(t, e, n) {
            function r(t) {
                switch (t) {
                    case !0:
                        d("send", {
                            message: "success",
                            silent: !0
                        });
                        break;
                    case !1:
                        d("send", {
                            message: "failure",
                            silent: !0
                        });
                        break;
                    default:
                        d("send", {
                            message: "cancel",
                            silent: !0
                        })
                }
            }

            function o() {
                p = []
            }

            function i(t, e, n) {
                void 0 === typeof n && (n = e)
            }

            function a() {
                return p.slice(0)
            }

            function s(t) {
                for (var e = a(), n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (r && r.event === t) return !0;
                    if (n === e.length - 1) return !1
                }
            }

            function c(t, e, n, r) {
                void 0 === typeof n && (n = e);
                var o = p.push({
                    event: t,
                    handler: e.bind(n),
                    subscribeOnce: !!r
                }) - 1;
                if (!r) return {
                    remove: function() {
                        delete p[o]
                    }
                }
            }

            function l(t, e, n) {
                return c(t, e, n, !1)
            }

            function u(t, e, n) {
                c(t, e, n, !0)
            }

            function d(t, e, n) {
                for (var r = h.get(), o = !1, i = 0; i < p.length; i++) p[i] && p[i].event && p[i].event === t && (r.DEBUG && (o = !0, "resize" !== t && console.log("Subscription to " + t + " was called: ", e)), p[i].handler.call(void 0, e, n), p[i] && p[i].subscribeOnce === !0 && delete p[i]);
                r.DEBUG && t.indexOf("layout") == -1 && !o && console.warn("Nothing is subscribed to " + t)
            }
            var h = n(2),
                p = [];
            t.exports = {
                destroy: o,
                unsubscribe: i,
                currentSubscriptions: a,
                hasSubscription: s,
                subscribe: l,
                subscribeOnce: u,
                publish: d,
                completeEvent: r
            }
        }, function(t, e, n) {
            function r() {
                return s
            }

            function o() {
                s = {}, i({})
            }

            function i(t) {
                s = c({}, s, t), s.DEBUG && (a.push(s), console.log("STATE HISTORY: ", a), console.log("NEW STATE: ", s))
            }
            var a = [],
                s = {},
                c = n(6);
            t.exports = {
                get: r,
                set: i,
                destroy: o,
                getState: r,
                setState: i,
                destroyState: o
            }
        }, function(t, e, n) {
            function r(t, e) {
                var n = c.get().langBundle;
                return n && n[t] ? n[t] : e ? e : s[t] ? s[t] : null
            }

            function o(t, e) {
                var n, r = e ? s : c.get().langBundle;
                if (r && r[t]) {
                    if (n = r[t], "string" == typeof n) {
                        var i = c.get().locale;
                        n = new a(n, i, l), r[t] = n
                    }
                } else n = o(t, !0);
                return n
            }

            function i(t, e) {
                var n = o(t);
                return n.format(e)
            }
            var a = n(14),
                s = n(20).en,
                c = n(2),
                l = {
                    date: {
                        weekday_short: {
                            weekday: "short"
                        }
                    }
                };
            t.exports = r, t.exports.format = i
        }, function(t, e, n) {
            function r(t, e, n) {
                var r;
                return function() {
                    var o = this,
                        i = arguments,
                        a = function() {
                            r = null, n || t.apply(o, i)
                        },
                        s = n && !r;
                    clearTimeout(r), r = setTimeout(a, e), s && t.apply(o, i)
                }
            }

            function o(t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
                return e.join("&")
            }

            function i(t, e) {
                return e && Array.isArray(Object.keys(e)) && Object.keys(e).length > 0 && Object.keys(e).forEach(function(n) {
                    t = t.split("${" + n + "}").join(e[n])
                }), t
            }

            function a() {
                var t = (new Date).getTime();
                return window.performance && "function" == typeof window.performance.now && (t += performance.now()), "IBMChat-" + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var n = (t + 16 * Math.random()) % 16 | 0;
                    return t = Math.floor(t / 16), ("x" == e ? n : 3 & n | 8).toString(16)
                })
            }

            function s(t, e) {
                var n = " " + e + " ";
                return (" " + t.className + " ").replace(/[\n\t]/g, " ").indexOf(n) > -1
            }

            function c(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var r = e.cloneNode(!0);
                    t[n].appendChild(r)
                }
            }

            function l(t) {
                return !!t && !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            }

            function u() {
                var t = m.get();
                f && clearTimeout(f), l(t.root) ? (t.isVisible || m.set({
                    isVisible: !0
                }), v.publish("resize"), f = setTimeout(u, 1e3)) : (t.isVisible && m.set({
                    isVisible: !1
                }), f = setTimeout(u, 300))
            }

            function d() {
                f && clearTimeout(f)
            }

            function h(t) {
                return !("string" != typeof t || !document.getElementById(t)) || !(!t.nodeType || 1 !== t.nodeType)
            }

            function p(t) {
                var e = {},
                    n = "https://api.ibm.com/virtualagent/run/api/v1/";
                return e.baseURL = t.baseURL || n, t.withCredentials && (e.withCredentials = t.withCredentials), t.XIBMClientID && (e.XIBMClientID = t.XIBMClientID), t.XIBMClientSecret && (e.XIBMClientSecret = t.XIBMClientSecret), t.userID && (e.userID = t.userID), t.userLatLon && (e.userLatLon = t.userLatLon), e
            }
            var f, m = n(2),
                v = n(1),
                b = n(80);
            t.exports = {
                appendToEach: c,
                debounce: r,
                serialize: o,
                hasClass: s,
                getUUID: a,
                compile: i,
                writeMessage: b,
                isVisible: l,
                checkVisibility: u,
                checkRoot: h,
                getSDKConfig: p,
                endVisibilityCheck: d
            }
        }, function(t, e, n) {
            ! function(e, n) {
                t.exports = n()
            }(this, function() {
                return function(t) {
                    function e(r) {
                        if (n[r]) return n[r].exports;
                        var o = n[r] = {
                            exports: {},
                            id: r,
                            loaded: !1
                        };
                        return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
                    }
                    var n = {};
                    return e.m = t, e.c = n, e.p = "", e(0)
                }([function(t, e, n) {
                    t.exports = n(22)
                }, function(t, e) {
                    "use strict";

                    function n(t) {
                        return "[object Array]" === x.call(t)
                    }

                    function r(t) {
                        return "[object ArrayBuffer]" === x.call(t)
                    }

                    function o(t) {
                        return "undefined" != typeof FormData && t instanceof FormData
                    }

                    function i(t) {
                        var e;
                        return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
                    }

                    function a(t) {
                        return "string" == typeof t
                    }

                    function s(t) {
                        return "number" == typeof t
                    }

                    function c(t) {
                        return "undefined" == typeof t
                    }

                    function l(t) {
                        return null !== t && "object" == typeof t
                    }

                    function u(t) {
                        return "[object Date]" === x.call(t)
                    }

                    function d(t) {
                        return "[object File]" === x.call(t)
                    }

                    function h(t) {
                        return "[object Blob]" === x.call(t)
                    }

                    function p(t) {
                        return "[object Function]" === x.call(t)
                    }

                    function f(t) {
                        return l(t) && p(t.pipe)
                    }

                    function m(t) {
                        return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
                    }

                    function v(t) {
                        return t.replace(/^\s*/, "").replace(/\s*$/, "")
                    }

                    function b() {
                        return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
                    }

                    function g(t, e) {
                        if (null !== t && "undefined" != typeof t)
                            if ("object" == typeof t || n(t) || (t = [t]), n(t))
                                for (var r = 0, o = t.length; r < o; r++) e.call(null, t[r], r, t);
                            else
                                for (var i in t) t.hasOwnProperty(i) && e.call(null, t[i], i, t)
                    }

                    function y() {
                        function t(t, n) {
                            "object" == typeof e[n] && "object" == typeof t ? e[n] = y(e[n], t) : e[n] = t
                        }
                        for (var e = {}, n = 0, r = arguments.length; n < r; n++) g(arguments[n], t);
                        return e
                    }
                    var x = Object.prototype.toString;
                    t.exports = {
                        isArray: n,
                        isArrayBuffer: r,
                        isFormData: o,
                        isArrayBufferView: i,
                        isString: a,
                        isNumber: s,
                        isObject: l,
                        isUndefined: c,
                        isDate: u,
                        isFile: d,
                        isBlob: h,
                        isFunction: p,
                        isStream: f,
                        isURLSearchParams: m,
                        isStandardBrowserEnv: b,
                        forEach: g,
                        merge: y,
                        trim: v
                    }
                }, function(t, e) {
                    function n() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function r() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function o(t) {
                        if (u === setTimeout) return setTimeout(t, 0);
                        if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
                        try {
                            return u(t, 0)
                        } catch (e) {
                            try {
                                return u.call(null, t, 0)
                            } catch (e) {
                                return u.call(this, t, 0)
                            }
                        }
                    }

                    function i(t) {
                        if (d === clearTimeout) return clearTimeout(t);
                        if ((d === r || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
                        try {
                            return d(t)
                        } catch (e) {
                            try {
                                return d.call(null, t)
                            } catch (e) {
                                return d.call(this, t)
                            }
                        }
                    }

                    function a() {
                        m && p && (m = !1, p.length ? f = p.concat(f) : v = -1, f.length && s())
                    }

                    function s() {
                        if (!m) {
                            var t = o(a);
                            m = !0;
                            for (var e = f.length; e;) {
                                for (p = f, f = []; ++v < e;) p && p[v].run();
                                v = -1, e = f.length
                            }
                            p = null, m = !1, i(t)
                        }
                    }

                    function c(t, e) {
                        this.fun = t, this.array = e
                    }

                    function l() {}
                    var u, d, h = t.exports = {};
                    ! function() {
                        try {
                            u = "function" == typeof setTimeout ? setTimeout : n
                        } catch (t) {
                            u = n
                        }
                        try {
                            d = "function" == typeof clearTimeout ? clearTimeout : r
                        } catch (t) {
                            d = r
                        }
                    }();
                    var p, f = [],
                        m = !1,
                        v = -1;
                    h.nextTick = function(t) {
                        var e = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        f.push(new c(t, e)), 1 !== f.length || m || o(s)
                    }, c.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = l, h.addListener = l, h.once = l, h.off = l, h.removeListener = l, h.removeAllListeners = l, h.emit = l, h.binding = function(t) {
                        throw new Error("process.binding is not supported")
                    }, h.cwd = function() {
                        return "/"
                    }, h.chdir = function(t) {
                        throw new Error("process.chdir is not supported")
                    }, h.umask = function() {
                        return 0
                    }
                }, function(t, e, n) {
                    (function(e) {
                        "use strict";
                        var r = n(1),
                            o = n(12),
                            i = n(18),
                            a = n(4),
                            s = n(16),
                            c = "undefined" != typeof window && window.btoa || n(11),
                            l = n(19);
                        t.exports = function(t, u, d) {
                            var h = d.data,
                                p = d.headers;
                            r.isFormData(h) && delete p["Content-Type"];
                            var f = new XMLHttpRequest,
                                m = "onreadystatechange",
                                v = !1;
                            if ("test" === e.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in f || s(d.url) || (f = new window.XDomainRequest, m = "onload", v = !0, f.onprogress = function() {}, f.ontimeout = function() {}), d.auth) {
                                var b = d.auth.username || "",
                                    g = d.auth.password || "";
                                p.Authorization = "Basic " + c(b + ":" + g)
                            }
                            if (f.open(d.method.toUpperCase(), o(d.url, d.params, d.paramsSerializer), !0), f.timeout = d.timeout, f[m] = function() {
                                    if (f && (4 === f.readyState || v) && 0 !== f.status) {
                                        var e = "getAllResponseHeaders" in f ? i(f.getAllResponseHeaders()) : null,
                                            n = d.responseType && "text" !== d.responseType ? f.response : f.responseText,
                                            r = {
                                                data: a(n, e, d.transformResponse),
                                                status: 1223 === f.status ? 204 : f.status,
                                                statusText: 1223 === f.status ? "No Content" : f.statusText,
                                                headers: e,
                                                config: d,
                                                request: f
                                            };
                                        l(t, u, r), f = null
                                    }
                                }, f.onerror = function() {
                                    u(new Error("Network Error")), f = null
                                }, f.ontimeout = function() {
                                    var t = new Error("timeout of " + d.timeout + "ms exceeded");
                                    t.timeout = d.timeout, t.code = "ECONNABORTED", u(t), f = null
                                }, r.isStandardBrowserEnv()) {
                                var y = n(14),
                                    x = d.withCredentials || s(d.url) ? y.read(d.xsrfCookieName) : void 0;
                                x && (p[d.xsrfHeaderName] = x)
                            }
                            if ("setRequestHeader" in f && r.forEach(p, function(t, e) {
                                    "undefined" == typeof h && "content-type" === e.toLowerCase() ? delete p[e] : f.setRequestHeader(e, t)
                                }), d.withCredentials && (f.withCredentials = !0), d.responseType) try {
                                f.responseType = d.responseType
                            } catch (C) {
                                if ("json" !== f.responseType) throw C
                            }
                            d.progress && ("post" === d.method || "put" === d.method ? f.upload.addEventListener("progress", d.progress) : "get" === d.method && f.addEventListener("progress", d.progress)), void 0 === h && (h = null), f.send(h)
                        }
                    }).call(e, n(2))
                }, function(t, e, n) {
                    "use strict";
                    var r = n(1);
                    t.exports = function(t, e, n) {
                        return r.forEach(n, function(n) {
                            t = n(t, e)
                        }), t
                    }
                }, function(t, e, n) {
                    t.exports = n(6)
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        this.defaults = i.merge({}, t), this.interceptors = {
                            request: new s,
                            response: new s
                        }
                    }
                    var o = n(9),
                        i = n(1),
                        a = n(8),
                        s = n(7),
                        c = n(15),
                        l = n(13),
                        u = n(10),
                        d = n(4);
                    r.prototype.request = function(t) {
                        "string" == typeof t && (t = i.merge({
                            url: arguments[0]
                        }, arguments[1])), t = i.merge(o, this.defaults, {
                            method: "get"
                        }, t), t.baseURL && !c(t.url) && (t.url = l(t.baseURL, t.url)), t.withCredentials = t.withCredentials || this.defaults.withCredentials, t.data = d(t.data, t.headers, t.transformRequest), t.headers = i.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
                            delete t.headers[e]
                        });
                        var e = [a, void 0],
                            n = Promise.resolve(t);
                        for (this.interceptors.request.forEach(function(t) {
                                e.unshift(t.fulfilled, t.rejected)
                            }), this.interceptors.response.forEach(function(t) {
                                e.push(t.fulfilled, t.rejected)
                            }); e.length;) n = n.then(e.shift(), e.shift());
                        return n
                    };
                    var h = new r(o),
                        p = t.exports = u(r.prototype.request, h);
                    p.request = u(r.prototype.request, h), p.Axios = r, p.defaults = h.defaults, p.interceptors = h.interceptors, p.create = function(t) {
                        return new r(t)
                    }, p.all = function(t) {
                        return Promise.all(t)
                    }, p.spread = n(20), i.forEach(["delete", "get", "head"], function(t) {
                        r.prototype[t] = function(e, n) {
                            return this.request(i.merge(n || {}, {
                                method: t,
                                url: e
                            }))
                        }, p[t] = u(r.prototype[t], h)
                    }), i.forEach(["post", "put", "patch"], function(t) {
                        r.prototype[t] = function(e, n, r) {
                            return this.request(i.merge(r || {}, {
                                method: t,
                                url: e,
                                data: n
                            }))
                        }, p[t] = u(r.prototype[t], h)
                    })
                }, function(t, e, n) {
                    "use strict";

                    function r() {
                        this.handlers = []
                    }
                    var o = n(1);
                    r.prototype.use = function(t, e) {
                        return this.handlers.push({
                            fulfilled: t,
                            rejected: e
                        }), this.handlers.length - 1
                    }, r.prototype.eject = function(t) {
                        this.handlers[t] && (this.handlers[t] = null)
                    }, r.prototype.forEach = function(t) {
                        o.forEach(this.handlers, function(e) {
                            null !== e && t(e)
                        })
                    }, t.exports = r
                }, function(t, e, n) {
                    (function(e) {
                        "use strict";
                        t.exports = function(t) {
                            return new Promise(function(r, o) {
                                try {
                                    var i;
                                    "function" == typeof t.adapter ? i = t.adapter : "undefined" != typeof XMLHttpRequest ? i = n(3) : "undefined" != typeof e && (i = n(3)), "function" == typeof i && i(r, o, t)
                                } catch (a) {
                                    o(a)
                                }
                            })
                        }
                    }).call(e, n(2))
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        !o.isUndefined(t) && o.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
                    }
                    var o = n(1),
                        i = n(17),
                        a = /^\)\]\}',?\n/,
                        s = {
                            "Content-Type": "application/x-www-form-urlencoded"
                        };
                    t.exports = {
                        transformRequest: [function(t, e) {
                            return i(e, "Content-Type"), o.isFormData(t) || o.isArrayBuffer(t) || o.isStream(t) || o.isFile(t) || o.isBlob(t) ? t : o.isArrayBufferView(t) ? t.buffer : o.isURLSearchParams(t) ? (r(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : o.isObject(t) ? (r(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
                        }],
                        transformResponse: [function(t) {
                            if ("string" == typeof t) {
                                t = t.replace(a, "");
                                try {
                                    t = JSON.parse(t)
                                } catch (e) {}
                            }
                            return t
                        }],
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            patch: o.merge(s),
                            post: o.merge(s),
                            put: o.merge(s)
                        },
                        timeout: 0,
                        xsrfCookieName: "XSRF-TOKEN",
                        xsrfHeaderName: "X-XSRF-TOKEN",
                        maxContentLength: -1,
                        validateStatus: function(t) {
                            return t >= 200 && t < 300
                        }
                    }
                }, function(t, e) {
                    "use strict";
                    t.exports = function(t, e) {
                        return function() {
                            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                            return t.apply(e, n)
                        }
                    }
                }, function(t, e) {
                    "use strict";

                    function n() {
                        this.message = "String contains an invalid character"
                    }

                    function r(t) {
                        for (var e, r, i = String(t), a = "", s = 0, c = o; i.charAt(0 | s) || (c = "=", s % 1); a += c.charAt(63 & e >> 8 - s % 1 * 8)) {
                            if (r = i.charCodeAt(s += .75), r > 255) throw new n;
                            e = e << 8 | r
                        }
                        return a
                    }
                    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    n.prototype = new Error, n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", t.exports = r
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                    }
                    var o = n(1);
                    t.exports = function(t, e, n) {
                        if (!e) return t;
                        var i;
                        if (n) i = n(e);
                        else if (o.isURLSearchParams(e)) i = e.toString();
                        else {
                            var a = [];
                            o.forEach(e, function(t, e) {
                                null !== t && "undefined" != typeof t && (o.isArray(t) && (e += "[]"), o.isArray(t) || (t = [t]), o.forEach(t, function(t) {
                                    o.isDate(t) ? t = t.toISOString() : o.isObject(t) && (t = JSON.stringify(t)), a.push(r(e) + "=" + r(t))
                                }))
                            }), i = a.join("&")
                        }
                        return i && (t += (t.indexOf("?") === -1 ? "?" : "&") + i), t
                    }
                }, function(t, e) {
                    "use strict";
                    t.exports = function(t, e) {
                        return t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "")
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(1);
                    t.exports = r.isStandardBrowserEnv() ? function() {
                        return {
                            write: function(t, e, n, o, i, a) {
                                var s = [];
                                s.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), a === !0 && s.push("secure"), document.cookie = s.join("; ")
                            },
                            read: function(t) {
                                var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                                return e ? decodeURIComponent(e[3]) : null
                            },
                            remove: function(t) {
                                this.write(t, "", Date.now() - 864e5)
                            }
                        }
                    }() : function() {
                        return {
                            write: function() {},
                            read: function() {
                                return null
                            },
                            remove: function() {}
                        }
                    }()
                }, function(t, e) {
                    "use strict";
                    t.exports = function(t) {
                        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(1);
                    t.exports = r.isStandardBrowserEnv() ? function() {
                        function t(t) {
                            var e = t;
                            return n && (o.setAttribute("href", e), e = o.href), o.setAttribute("href", e), {
                                href: o.href,
                                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                                host: o.host,
                                search: o.search ? o.search.replace(/^\?/, "") : "",
                                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                                hostname: o.hostname,
                                port: o.port,
                                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                            }
                        }
                        var e, n = /(msie|trident)/i.test(navigator.userAgent),
                            o = document.createElement("a");
                        return e = t(window.location.href),
                            function(n) {
                                var o = r.isString(n) ? t(n) : n;
                                return o.protocol === e.protocol && o.host === e.host
                            }
                    }() : function() {
                        return function() {
                            return !0
                        }
                    }()
                }, function(t, e, n) {
                    "use strict";
                    var r = n(1);
                    t.exports = function(t, e) {
                        r.forEach(t, function(n, r) {
                            r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r])
                        })
                    }
                }, function(t, e, n) {
                    "use strict";
                    var r = n(1);
                    t.exports = function(t) {
                        var e, n, o, i = {};
                        return t ? (r.forEach(t.split("\n"), function(t) {
                            o = t.indexOf(":"), e = r.trim(t.substr(0, o)).toLowerCase(), n = r.trim(t.substr(o + 1)), e && (i[e] = i[e] ? i[e] + ", " + n : n)
                        }), i) : i
                    }
                }, function(t, e) {
                    "use strict";
                    t.exports = function(t, e, n) {
                        var r = n.config.validateStatus;
                        n.status && r && !r(n.status) ? e(n) : t(n)
                    }
                }, function(t, e) {
                    "use strict";
                    t.exports = function(t) {
                        return function(e) {
                            return t.apply(null, e)
                        }
                    }
                }, function(t, e, n) {
                    var r;
                    (function(t, o, i) {
                        (function() {
                            "use strict";

                            function a(t) {
                                return "function" == typeof t || "object" == typeof t && null !== t
                            }

                            function s(t) {
                                return "function" == typeof t
                            }

                            function c(t) {
                                K = t
                            }

                            function l(t) {
                                tt = t
                            }

                            function u() {
                                return function() {
                                    t.nextTick(m)
                                }
                            }

                            function d() {
                                return function() {
                                    W(m)
                                }
                            }

                            function h() {
                                var t = 0,
                                    e = new rt(m),
                                    n = document.createTextNode("");
                                return e.observe(n, {
                                        characterData: !0
                                    }),
                                    function() {
                                        n.data = t = ++t % 2
                                    }
                            }

                            function p() {
                                var t = new MessageChannel;
                                return t.port1.onmessage = m,
                                    function() {
                                        t.port2.postMessage(0)
                                    }
                            }

                            function f() {
                                return function() {
                                    setTimeout(m, 1)
                                }
                            }

                            function m() {
                                for (var t = 0; t < J; t += 2) {
                                    var e = at[t],
                                        n = at[t + 1];
                                    e(n), at[t] = void 0, at[t + 1] = void 0
                                }
                                J = 0
                            }

                            function v() {
                                try {
                                    var t = n(27);
                                    return W = t.runOnLoop || t.runOnContext, d()
                                } catch (e) {
                                    return f()
                                }
                            }

                            function b(t, e) {
                                var n = this,
                                    r = new this.constructor(y);
                                void 0 === r[lt] && F(r);
                                var o = n._state;
                                if (o) {
                                    var i = arguments[o - 1];
                                    tt(function() {
                                        $(o, r, i, n._result)
                                    })
                                } else A(n, r, t, e);
                                return r
                            }

                            function g(t) {
                                var e = this;
                                if (t && "object" == typeof t && t.constructor === e) return t;
                                var n = new e(y);
                                return E(n, t), n
                            }

                            function y() {}

                            function x() {
                                return new TypeError("You cannot resolve a promise with itself")
                            }

                            function C() {
                                return new TypeError("A promises callback cannot return that same promise.")
                            }

                            function _(t) {
                                try {
                                    return t.then
                                } catch (e) {
                                    return pt.error = e, pt
                                }
                            }

                            function I(t, e, n, r) {
                                try {
                                    t.call(e, n, r)
                                } catch (o) {
                                    return o
                                }
                            }

                            function w(t, e, n) {
                                tt(function(t) {
                                    var r = !1,
                                        o = I(n, e, function(n) {
                                            r || (r = !0, e !== n ? E(t, n) : S(t, n))
                                        }, function(e) {
                                            r || (r = !0, k(t, e))
                                        }, "Settle: " + (t._label || " unknown promise"));
                                    !r && o && (r = !0, k(t, o))
                                }, t)
                            }

                            function B(t, e) {
                                e._state === dt ? S(t, e._result) : e._state === ht ? k(t, e._result) : A(e, void 0, function(e) {
                                    E(t, e)
                                }, function(e) {
                                    k(t, e)
                                })
                            }

                            function M(t, e, n) {
                                e.constructor === t.constructor && n === st && constructor.resolve === ct ? B(t, e) : n === pt ? k(t, pt.error) : void 0 === n ? S(t, e) : s(n) ? w(t, e, n) : S(t, e)
                            }

                            function E(t, e) {
                                t === e ? k(t, x()) : a(e) ? M(t, e, _(e)) : S(t, e)
                            }

                            function L(t) {
                                t._onerror && t._onerror(t._result), T(t)
                            }

                            function S(t, e) {
                                t._state === ut && (t._result = e, t._state = dt, 0 !== t._subscribers.length && tt(T, t))
                            }

                            function k(t, e) {
                                t._state === ut && (t._state = ht, t._result = e, tt(L, t))
                            }

                            function A(t, e, n, r) {
                                var o = t._subscribers,
                                    i = o.length;
                                t._onerror = null, o[i] = e, o[i + dt] = n, o[i + ht] = r, 0 === i && t._state && tt(T, t)
                            }

                            function T(t) {
                                var e = t._subscribers,
                                    n = t._state;
                                if (0 !== e.length) {
                                    for (var r, o, i = t._result, a = 0; a < e.length; a += 3) r = e[a], o = e[a + n], r ? $(n, r, o, i) : o(i);
                                    t._subscribers.length = 0
                                }
                            }

                            function D() {
                                this.error = null
                            }

                            function H(t, e) {
                                try {
                                    return t(e)
                                } catch (n) {
                                    return ft.error = n, ft
                                }
                            }

                            function $(t, e, n, r) {
                                var o, i, a, c, l = s(n);
                                if (l) {
                                    if (o = H(n, r), o === ft ? (c = !0, i = o.error, o = null) : a = !0, e === o) return void k(e, C())
                                } else o = r, a = !0;
                                e._state !== ut || (l && a ? E(e, o) : c ? k(e, i) : t === dt ? S(e, o) : t === ht && k(e, o))
                            }

                            function q(t, e) {
                                try {
                                    e(function(e) {
                                        E(t, e)
                                    }, function(e) {
                                        k(t, e)
                                    })
                                } catch (n) {
                                    k(t, n)
                                }
                            }

                            function O() {
                                return mt++
                            }

                            function F(t) {
                                t[lt] = mt++, t._state = void 0, t._result = void 0, t._subscribers = []
                            }

                            function z(t) {
                                return new xt(this, t).promise
                            }

                            function j(t) {
                                var e = this;
                                return new e(Q(t) ? function(n, r) {
                                    for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
                                } : function(t, e) {
                                    e(new TypeError("You must pass an array to race."))
                                })
                            }

                            function N(t) {
                                var e = this,
                                    n = new e(y);
                                return k(n, t), n
                            }

                            function R() {
                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                            }

                            function P() {
                                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                            }

                            function U(t) {
                                this[lt] = O(), this._result = this._state = void 0, this._subscribers = [], y !== t && ("function" != typeof t && R(), this instanceof U ? q(this, t) : P())
                            }

                            function V(t, e) {
                                this._instanceConstructor = t, this.promise = new t(y), this.promise[lt] || F(this.promise), Q(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : k(this.promise, X())
                            }

                            function X() {
                                return new Error("Array Methods must be provided an Array")
                            }

                            function Y() {
                                var t;
                                if ("undefined" != typeof o) t = o;
                                else if ("undefined" != typeof self) t = self;
                                else try {
                                    t = Function("return this")()
                                } catch (e) {
                                    throw new Error("polyfill failed because global object is unavailable in this environment")
                                }
                                var n = t.Promise;
                                n && "[object Promise]" === Object.prototype.toString.call(n.resolve()) && !n.cast || (t.Promise = yt)
                            }
                            var G;
                            G = Array.isArray ? Array.isArray : function(t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            };
                            var W, K, Z, Q = G,
                                J = 0,
                                tt = function(t, e) {
                                    at[J] = t, at[J + 1] = e, J += 2, 2 === J && (K ? K(m) : Z())
                                },
                                et = "undefined" != typeof window ? window : void 0,
                                nt = et || {},
                                rt = nt.MutationObserver || nt.WebKitMutationObserver,
                                ot = "undefined" == typeof self && "undefined" != typeof t && "[object process]" === {}.toString.call(t),
                                it = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                                at = new Array(1e3);
                            Z = ot ? u() : rt ? h() : it ? p() : void 0 === et ? v() : f();
                            var st = b,
                                ct = g,
                                lt = Math.random().toString(36).substring(16),
                                ut = void 0,
                                dt = 1,
                                ht = 2,
                                pt = new D,
                                ft = new D,
                                mt = 0,
                                vt = z,
                                bt = j,
                                gt = N,
                                yt = U;
                            U.all = vt, U.race = bt, U.resolve = ct, U.reject = gt, U._setScheduler = c, U._setAsap = l, U._asap = tt, U.prototype = {
                                constructor: U,
                                then: st,
                                "catch": function(t) {
                                    return this.then(null, t)
                                }
                            };
                            var xt = V;
                            V.prototype._enumerate = function() {
                                for (var t = this.length, e = this._input, n = 0; this._state === ut && n < t; n++) this._eachEntry(e[n], n)
                            }, V.prototype._eachEntry = function(t, e) {
                                var n = this._instanceConstructor,
                                    r = n.resolve;
                                if (r === ct) {
                                    var o = _(t);
                                    if (o === st && t._state !== ut) this._settledAt(t._state, e, t._result);
                                    else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                                    else if (n === yt) {
                                        var i = new n(y);
                                        M(i, t, o), this._willSettleAt(i, e)
                                    } else this._willSettleAt(new n(function(e) {
                                        e(t)
                                    }), e)
                                } else this._willSettleAt(r(t), e)
                            }, V.prototype._settledAt = function(t, e, n) {
                                var r = this.promise;
                                r._state === ut && (this._remaining--, t === ht ? k(r, n) : this._result[e] = n), 0 === this._remaining && S(r, this._result)
                            }, V.prototype._willSettleAt = function(t, e) {
                                var n = this;
                                A(t, void 0, function(t) {
                                    n._settledAt(dt, e, t)
                                }, function(t) {
                                    n._settledAt(ht, e, t)
                                })
                            };
                            var Ct = Y,
                                _t = {
                                    Promise: yt,
                                    polyfill: Ct
                                };
                            n(25).amd ? (r = function() {
                                return _t
                            }.call(e, n, e, i), !(void 0 !== r && (i.exports = r))) : "undefined" != typeof i && i.exports ? i.exports = _t : "undefined" != typeof this && (this.ES6Promise = _t), Ct()
                        }).call(this)
                    }).call(e, n(2), function() {
                        return this
                    }(), n(26)(t))
                }, function(t, e, n) {
                    "undefined" == typeof Promise && n(21).polyfill();
                    var r = n(24),
                        o = n(5),
                        i = n(23),
                        a = {
                            baseURL: "https://dev.api.ibm.com/virtualagent/development/api/v1/",
                            timeout: 3e4,
                            userID: null,
                            withCredentials: !1,
                            XIBMClientID: !1,
                            XIBMClientSecret: !1
                        },
                        s = o.create(a),
                        c = /\|&(.*?)\|/g,
                        l = function(t) {
                            var e = "string" == typeof t ? t : JSON.stringify(t),
                                n = e.match(c) || [];
                            return e = n.reduce(function(t, e) {
                                const n = e.slice(2, -1),
                                    r = i.get(n) || n;
                                return t.replace(e, r)
                            }, e), "string" == typeof t ? e : JSON.parse(e)
                        },
                        u = t.exports = {
                            configure: function(t) {
                                return r(a, t), s = o.create({
                                    baseURL: a.baseURL,
                                    timeout: a.timeout,
                                    withCredentials: a.withCredentials,
                                    headers: a.XIBMClientID && a.XIBMClientSecret ? {
                                        "X-IBM-Client-Id": a.XIBMClientID,
                                        "X-IBM-Client-Secret": a.XIBMClientSecret
                                    } : {}
                                }), u
                            },
                            start: function(t) {
                                var e = d(),
                                    n = {
                                        userID: a.userID,
                                        userLatLon: a.userLatLon
                                    },
                                    r = "/bots/" + t + "/dialogs",
                                    o = {
                                        headers: {
                                            "X-Request-ID": e
                                        }
                                    };
                                return s.post(r, n, o).then(function(t) {
                                    return {
                                        chatID: t.data.dialog_id,
                                        message: l(t.data.message)
                                    }
                                })["catch"](function(t) {
                                    console.error("Request failed:", e), h(t)
                                })
                            },
                            send: function(t, e, n, r) {
                                var o = d(),
                                    i = {
                                        message: n,
                                        userID: a.userID,
                                        userLatLon: a.userLatLon,
                                        context: r
                                    },
                                    c = "/bots/" + t + "/dialogs/" + e + "/messages",
                                    u = {
                                        headers: {
                                            "X-Request-ID": o
                                        }
                                    };
                                return s.post(c, i, u).then(function(t) {
                                    return {
                                        message: l(t.data.message)
                                    }
                                })["catch"](function(t) {
                                    console.error("Request failed:", o), h(t)
                                })
                            },
                            parse: l,
                            profile: {
                                get: i.get,
                                set: i.set,
                                has: i.has,
                                clear: i.clear,
                                "delete": i["delete"],
                                forEach: i.forEach
                            }
                        },
                        d = function() {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                                var e = 16 * Math.random() | 0,
                                    n = "x" == t ? e : 3 & e | 8;
                                return n.toString(16)
                            })
                        },
                        h = function(t) {
                            if (!t.status) throw t;
                            var e = t.status,
                                n = t.statusText,
                                r = new Error(n);
                            throw r.status = e, r
                        }
                }, function(t, e) {
                    var n = {},
                        r = {
                            set: function(t, e) {
                                return n[t] = e, r
                            },
                            get: function(t) {
                                return n[t] || ""
                            },
                            has: function(t) {
                                return void 0 !== n[t]
                            },
                            clear: function() {
                                return n = {}, r
                            },
                            "delete": function(t) {
                                return delete n[t], r
                            },
                            forEach: function(t, e) {
                                return Object.keys(n).forEach(function(r) {
                                    e ? t(r, n[r]).bind(e) : t(r, n[r])
                                }), r
                            }
                        };
                    t.exports = r
                }, function(t, e) {
                    function n(t, e, n) {
                        switch (n.length) {
                            case 0:
                                return t.call(e);
                            case 1:
                                return t.call(e, n[0]);
                            case 2:
                                return t.call(e, n[0], n[1]);
                            case 3:
                                return t.call(e, n[0], n[1], n[2])
                        }
                        return t.apply(e, n)
                    }

                    function r(t) {
                        return function(e) {
                            return null == e ? void 0 : e[t]
                        }
                    }

                    function o(t, e) {
                        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                        return r
                    }

                    function i(t, e) {
                        return function(n) {
                            return t(e(n))
                        }
                    }

                    function a(t, e, n) {
                        var r = t[e];
                        T.call(t, e) && m(r, n) && (void 0 !== n || e in t) || (t[e] = n)
                    }

                    function s(t, e) {
                        return null != t && (T.call(t, e) || "object" == typeof t && e in t && null === N(t))
                    }

                    function c(t, e) {
                        return e = O(void 0 === e ? t.length - 1 : e, 0),
                            function() {
                                for (var r = arguments, o = -1, i = O(r.length - e, 0), a = Array(i); ++o < i;) a[o] = r[e + o];
                                o = -1;
                                for (var s = Array(e + 1); ++o < e;) s[o] = r[o];
                                return s[e] = a, n(t, this, s)
                            }
                    }

                    function l(t, e, n, r) {
                        n || (n = {});
                        for (var o = -1, i = e.length; ++o < i;) {
                            var s = e[o],
                                c = r ? r(n[s], t[s], s, n, t) : void 0;
                            a(n, s, void 0 === c ? t[s] : c)
                        }
                        return n
                    }

                    function u(t) {
                        return c(function(e, n) {
                            var r = -1,
                                o = n.length,
                                i = o > 1 ? n[o - 1] : void 0,
                                a = o > 2 ? n[2] : void 0;
                            for (i = t.length > 3 && "function" == typeof i ? (o--, i) : void 0, a && p(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), e = Object(e); ++r < o;) {
                                var s = n[r];
                                s && t(e, s, r, i)
                            }
                            return e
                        })
                    }

                    function d(t) {
                        var e = t ? t.length : void 0;
                        return x(e) && (R(t) || I(t) || v(t)) ? o(e, String) : null
                    }

                    function h(t, e) {
                        return e = null == e ? B : e, !!e && ("number" == typeof t || k.test(t)) && t > -1 && t % 1 == 0 && t < e
                    }

                    function p(t, e, n) {
                        if (!C(n)) return !1;
                        var r = typeof e;
                        return !!("number" == r ? b(n) && h(e, n.length) : "string" == r && e in n) && m(n[e], t)
                    }

                    function f(t) {
                        var e = t && t.constructor,
                            n = "function" == typeof e && e.prototype || A;
                        return t === n
                    }

                    function m(t, e) {
                        return t === e || t !== t && e !== e
                    }

                    function v(t) {
                        return g(t) && T.call(t, "callee") && (!H.call(t, "callee") || D.call(t) == M)
                    }

                    function b(t) {
                        return null != t && x(j(t)) && !y(t)
                    }

                    function g(t) {
                        return _(t) && b(t)
                    }

                    function y(t) {
                        var e = C(t) ? D.call(t) : "";
                        return e == E || e == L
                    }

                    function x(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= B
                    }

                    function C(t) {
                        var e = typeof t;
                        return !!t && ("object" == e || "function" == e)
                    }

                    function _(t) {
                        return !!t && "object" == typeof t
                    }

                    function I(t) {
                        return "string" == typeof t || !R(t) && _(t) && D.call(t) == S
                    }

                    function w(t) {
                        var e = f(t);
                        if (!e && !b(t)) return z(t);
                        var n = d(t),
                            r = !!n,
                            o = n || [],
                            i = o.length;
                        for (var a in t) !s(t, a) || r && ("length" == a || h(a, i)) || e && "constructor" == a || o.push(a);
                        return o
                    }
                    var B = 9007199254740991,
                        M = "[object Arguments]",
                        E = "[object Function]",
                        L = "[object GeneratorFunction]",
                        S = "[object String]",
                        k = /^(?:0|[1-9]\d*)$/,
                        A = Object.prototype,
                        T = A.hasOwnProperty,
                        D = A.toString,
                        H = A.propertyIsEnumerable,
                        $ = Object.getPrototypeOf,
                        q = Object.keys,
                        O = Math.max,
                        F = !H.call({
                            valueOf: 1
                        }, "valueOf"),
                        z = i(q, Object),
                        j = r("length"),
                        N = i($, Object),
                        R = Array.isArray,
                        P = u(function(t, e) {
                            if (F || f(e) || b(e)) return void l(e, w(e), t);
                            for (var n in e) T.call(e, n) && a(t, n, e[n])
                        });
                    t.exports = P
                }, function(t, e) {
                    t.exports = function() {
                        throw new Error("define cannot be used indirect")
                    }
                }, function(t, e) {
                    t.exports = function(t) {
                        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
                    }
                }, function(t, e) {}])
            })
        }, function(t, e, n) {
            var r = n(11),
                o = n(23),
                i = n(24),
                a = n(29),
                s = n(26),
                c = n(33),
                l = Object.prototype,
                u = l.hasOwnProperty,
                d = l.propertyIsEnumerable,
                h = !d.call({
                    valueOf: 1
                }, "valueOf"),
                p = i(function(t, e) {
                    if (h || s(e) || a(e)) return void o(e, c(e), t);
                    for (var n in e) u.call(e, n) && r(t, n, e[n])
                });
            t.exports = p
        }, function(t, e, n) {
            t.exports = {
                input: n(49),
                receive: n(51),
                send: n(52),
                start: n(53),
                loading: n(50)
            }
        }, function(t, e, n) {
            var r = n(5),
                o = r.profile;
            t.exports = o
        }, function(t, e, n) {
            function r(t, e) {
                var n = document.createElement("style");
                n.type = "text/css", n.classList.add("styles-" + e.chatStyleID), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), document.getElementsByTagName("head")[0].appendChild(n)
            }

            function o(t) {
                var e = "." + t.chatStyleID,
                    n = s(a(t.styles.background)),
                    r = "rgba(" + n[0] + "," + n[1] + "," + n[2] + ",0.8)",
                    o = "rgba(" + n[0] + "," + n[1] + "," + n[2] + ",0)",
                    c = "";
                return c += e + "{ overflow:hidden;}", c += e + " .IBMChat-outer-container {font-size: " + t.styles.fontSize + "; line-height: " + t.styles.fontSize + "; font-family: " + t.styles.fontFamily + ";}", c += e + " .IBMChat-outer-container textarea {font-size: " + t.styles.fontSize + "; font-family: " + t.styles.fontFamily + ";}", c += e + " .IBMChat-default-colors {background-color: " + t.styles.background + "; color: " + t.styles.text + ";}", c += e + " .IBMChat-secondary-colors {background-color: " + t.styles.secondaryBackground + "; color: " + t.styles.secondaryText + ";}", c += e + " .IBMChat-secondary-colors-button {background-color: transparent; border: 1px solid " + t.styles.secondaryBackground + "; color: " + t.styles.secondaryBackground + ";}", c += e + " .IBMChat-accent-colors {background-color: " + t.styles.accentBackground + "; border: 1px solid " + t.styles.accentBackground + "; color: " + t.styles.accentText + ";}", c += e + " .IBMChat-accent-colors-button {background-color: transparent; border: 1px solid " + t.styles.accentBackground + "; color: " + t.styles.accentBackground + ";}", c += e + " .IBMChat-accent-colors-button:hover {background-color: " + t.styles.accentBackground + "; border: 1px solid " + t.styles.accentBackground + "; color: " + t.styles.accentText + ";}", c += e + " .IBMChat-accent-colors-button[disabled]:hover {background-color: transparent; border: 1px solid " + t.styles.accentBackground + "; color: " + t.styles.accentBackground + ";}", c += e + " .IBMChat-error-colors {background-color: " + t.styles.errorBackground + "; color: " + t.styles.errorText + ";}", c += e + " .IBMChat-input-colors {background-color: " + t.styles.inputBackground + "; color: " + t.styles.inputText + "; border-bottom: 1px solid " + t.styles.inputText + ";}", c += e + " .IBMChat-watson-message-line {border-left: 3px solid " + t.styles.accentBackground + ";}", c += e + " a {border: 0; color: " + t.styles.link + "; font-weight: normal; text-decoration: none; font-size:1em;}", c += e + " a:hover, ", c += e + " a:visited, ", c += e + " a:active {color: " + t.styles.link + "; font-weight: normal; text-decoration: underline; font-size:1em;}", c += e + " .IBMChat-watson-intent a, .IBMChat-watson-intent a:hover, .IBMChat-watson-intent a:visited, .IBMChat-watson-intent a:active {   font-weight: bold; text-decoration: underline;", t.styles.intentLink && (c += "   color: " + t.styles.intentLink + ";"), c += " }", c += e + " .IBMChat-chat-textbox {border-bottom: solid 1px " + t.styles.text + ";}", c += e + " .IBMChat-chat-textbox:focus {border-bottom: solid 2px " + t.styles.accentBackground + ";}", c += e + " ::-webkit-input-placeholder {color: " + i(t.styles.inputText, t.styles.inputBackground) + ";}", c += e + " ::-moz-placeholder {color: " + i(t.styles.inputText, t.styles.inputBackground) + "; opacity: 1;}",
                    c += e + " :-ms-input-placeholder {color: " + i(t.styles.inputText, t.styles.inputBackground) + "; opacity: 1;}", c += e + " .IBMChat-ball {background-color: " + a(t.styles.accentBackground) + ";}", c += e + " .IBMChat-fade {left: 0; height: 10%; max-height: 32px; position: absolute; top: 0; width: 100%; z-index: 2; background: linear-gradient(to bottom, " + r + " 0%, " + o + " 100%);}", c += e + " .IBMChat-loading-message {color: " + i(t.styles.inputText, t.styles.inputBackground) + ";}"
            }

            function i(t, e) {
                var n = s(a(t)),
                    r = s(a(e)),
                    o = .6,
                    i = 2 * o - 1,
                    c = (i + 1) / 2,
                    l = 1 - c,
                    u = [parseInt(n[0] * c + r[0] * l), parseInt(n[1] * c + r[1] * l), parseInt(n[2] * c + r[2] * l)],
                    d = "rgb(" + u[0] + "," + u[1] + "," + u[2] + ")";
                return a(d)
            }

            function a(t) {
                function e(t) {
                    return t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i), t && 4 === t.length ? ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
                }
                return t.indexOf("#") > -1 ? t : "#" + e(t)
            }

            function s(t) {
                var e = [];
                return t = t.replace("#", ""), e.push(parseInt(t.substring(0, 2), 16)), e.push(parseInt(t.substring(2, 4), 16)), e.push(parseInt(t.substring(4, 6), 16)), e
            }

            function c(t, e) {
                var n = s(t),
                    r = n[0],
                    o = n[1],
                    i = n[2];
                return "rgba(" + r + "," + o + "," + i + "," + e / 100 + ")"
            }

            function l(t) {
                var e = h.get()[t],
                    n = o(e);
                r(n)
            }

            function u() {
                var t = h.get(),
                    e = o(t);
                r(p, t), r(e, t)
            }

            function d(t, e, n) {
                var r = document.querySelectorAll(".styles-" + e);
                if (r && r.length > 0)
                    for (var o = 0; r.length > o; o++) r[o].parentNode.removeChild(r[o]);
                t && t.classList.remove("IBMChat-isLarge", "IBMChat-relative", e, "chatID-" + n)
            }
            var h = n(2),
                p = n(48),
                f = {
                    background: "rgba(61, 61, 61, 1)",
                    accentBackground: "#BA8FF7",
                    accentText: "#ffffff",
                    text: "#ffffff",
                    link: "#AF6EE8",
                    secondaryBackground: "rgba(238,65,35, 1)",
                    secondaryText: "rgba(247, 247, 247, 1)",
                    inputBackground: "rgba(238,65,35, 1)",
                    inputText: "rgba(247, 247, 247, 1)",
                    errorBackground: "#e86e6e",
                    errorText: "#ffffff",
                    fontSize: "15px",
                    fontFamily: '"Helvetica Neue",HelveticaNeue,Helvetica,sans-serif'
                };
            t.exports = {
                defaultStyles: f,
                attachStyles: u,
                removeStyles: d,
                attachPlaybackStyles: l,
                convertHexToRGBA: c,
                normalizeToHex: a
            }
        }, function(t, e) {
            "use strict";

            function n(t) {
                var e, n, o, i, a = Array.prototype.slice.call(arguments, 1);
                for (e = 0, n = a.length; e < n; e += 1)
                    if (o = a[e])
                        for (i in o) r.call(o, i) && (t[i] = o[i]);
                return t
            }
            e.extend = n;
            var r = Object.prototype.hasOwnProperty;
            e.hop = r
        }, function(t, e, n) {
            function r(t, e, n) {
                var r = t[e];
                a.call(t, e) && o(r, n) && (void 0 !== n || e in t) || (t[e] = n)
            }
            var o = n(28),
                i = Object.prototype,
                a = i.hasOwnProperty;
            t.exports = r
        }, function(t, e, n) {
            "use strict";
            e = t.exports = n(13)["default"], e["default"] = e
        }, function(t, e) {
            "use strict";
            e["default"] = function() {
                function t(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    n.prototype = e.prototype, t.prototype = new n
                }

                function e(t, e, n, r, o, i) {
                    this.message = t, this.expected = e, this.found = n, this.offset = r, this.line = o, this.column = i, this.name = "SyntaxError"
                }

                function n(t) {
                    function n(e) {
                        function n(e, n, r) {
                            var o, i;
                            for (o = n; o < r; o++) i = t.charAt(o), "\n" === i ? (e.seenCR || e.line++, e.column = 1, e.seenCR = !1) : "\r" === i || "\u2028" === i || "\u2029" === i ? (e.line++, e.column = 1, e.seenCR = !0) : (e.column++, e.seenCR = !1)
                        }
                        return Wt !== e && (Wt > e && (Wt = 0, Kt = {
                            line: 1,
                            column: 1,
                            seenCR: !1
                        }), n(Kt, Wt, e), Wt = e), Kt
                    }

                    function r(t) {
                        Yt < Zt || (Yt > Zt && (Zt = Yt, Qt = []), Qt.push(t))
                    }

                    function o(r, o, i) {
                        function a(t) {
                            var e = 1;
                            for (t.sort(function(t, e) {
                                    return t.description < e.description ? -1 : t.description > e.description ? 1 : 0
                                }); e < t.length;) t[e - 1] === t[e] ? t.splice(e, 1) : e++
                        }

                        function s(t, e) {
                            function n(t) {
                                function e(t) {
                                    return t.charCodeAt(0).toString(16).toUpperCase()
                                }
                                return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(t) {
                                    return "\\x0" + e(t)
                                }).replace(/[\x10-\x1F\x80-\xFF]/g, function(t) {
                                    return "\\x" + e(t)
                                }).replace(/[\u0180-\u0FFF]/g, function(t) {
                                    return "\\u0" + e(t)
                                }).replace(/[\u1080-\uFFFF]/g, function(t) {
                                    return "\\u" + e(t)
                                })
                            }
                            var r, o, i, a = new Array(t.length);
                            for (i = 0; i < t.length; i++) a[i] = t[i].description;
                            return r = t.length > 1 ? a.slice(0, -1).join(", ") + " or " + a[t.length - 1] : a[0], o = e ? '"' + n(e) + '"' : "end of input", "Expected " + r + " but " + o + " found."
                        }
                        var c = n(i),
                            l = i < t.length ? t.charAt(i) : null;
                        return null !== o && a(o), new e(null !== r ? r : s(o, l), o, l, i, c.line, c.column)
                    }

                    function i() {
                        var t;
                        return t = a()
                    }

                    function a() {
                        var t, e, n;
                        for (t = Yt, e = [], n = s(); n !== k;) e.push(n), n = s();
                        return e !== k && (Gt = t, e = D(e)), t = e
                    }

                    function s() {
                        var t;
                        return t = l(), t === k && (t = d()), t
                    }

                    function c() {
                        var e, n, r, o, i, a;
                        if (e = Yt, n = [], r = Yt, o = _(), o !== k ? (i = E(), i !== k ? (a = _(), a !== k ? (o = [o, i, a], r = o) : (Yt = r, r = H)) : (Yt = r, r = H)) : (Yt = r, r = H), r !== k)
                            for (; r !== k;) n.push(r), r = Yt, o = _(), o !== k ? (i = E(), i !== k ? (a = _(), a !== k ? (o = [o, i, a], r = o) : (Yt = r, r = H)) : (Yt = r, r = H)) : (Yt = r, r = H);
                        else n = H;
                        return n !== k && (Gt = e, n = $(n)), e = n, e === k && (e = Yt, n = C(), n !== k && (n = t.substring(e, Yt)), e = n), e
                    }

                    function l() {
                        var t, e;
                        return t = Yt, e = c(), e !== k && (Gt = t, e = q(e)), t = e
                    }

                    function u() {
                        var e, n, o;
                        if (e = B(), e === k) {
                            if (e = Yt, n = [], O.test(t.charAt(Yt)) ? (o = t.charAt(Yt), Yt++) : (o = k, 0 === Jt && r(F)), o !== k)
                                for (; o !== k;) n.push(o), O.test(t.charAt(Yt)) ? (o = t.charAt(Yt), Yt++) : (o = k, 0 === Jt && r(F));
                            else n = H;
                            n !== k && (n = t.substring(e, Yt)), e = n
                        }
                        return e
                    }

                    function d() {
                        var e, n, o, i, a, s, c, l, d;
                        return e = Yt, 123 === t.charCodeAt(Yt) ? (n = z, Yt++) : (n = k, 0 === Jt && r(j)), n !== k ? (o = _(), o !== k ? (i = u(), i !== k ? (a = _(), a !== k ? (s = Yt, 44 === t.charCodeAt(Yt) ? (c = R, Yt++) : (c = k, 0 === Jt && r(P)), c !== k ? (l = _(), l !== k ? (d = h(), d !== k ? (c = [c, l, d], s = c) : (Yt = s, s = H)) : (Yt = s, s = H)) : (Yt = s, s = H), s === k && (s = N), s !== k ? (c = _(), c !== k ? (125 === t.charCodeAt(Yt) ? (l = U, Yt++) : (l = k, 0 === Jt && r(V)), l !== k ? (Gt = e, n = X(i, s), e = n) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H), e
                    }

                    function h() {
                        var t;
                        return t = p(), t === k && (t = f(), t === k && (t = m(), t === k && (t = v()))), t
                    }

                    function p() {
                        var e, n, o, i, a, s, c;
                        return e = Yt, t.substr(Yt, 6) === Y ? (n = Y, Yt += 6) : (n = k, 0 === Jt && r(G)), n === k && (t.substr(Yt, 4) === W ? (n = W, Yt += 4) : (n = k, 0 === Jt && r(K)), n === k && (t.substr(Yt, 4) === Z ? (n = Z, Yt += 4) : (n = k, 0 === Jt && r(Q)))), n !== k ? (o = _(), o !== k ? (i = Yt, 44 === t.charCodeAt(Yt) ? (a = R, Yt++) : (a = k, 0 === Jt && r(P)), a !== k ? (s = _(), s !== k ? (c = E(), c !== k ? (a = [a, s, c], i = a) : (Yt = i, i = H)) : (Yt = i, i = H)) : (Yt = i, i = H), i === k && (i = N), i !== k ? (Gt = e, n = J(n, i), e = n) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H), e
                    }

                    function f() {
                        var e, n, o, i, a, s;
                        return e = Yt, t.substr(Yt, 6) === tt ? (n = tt, Yt += 6) : (n = k, 0 === Jt && r(et)), n !== k ? (o = _(), o !== k ? (44 === t.charCodeAt(Yt) ? (i = R, Yt++) : (i = k, 0 === Jt && r(P)), i !== k ? (a = _(), a !== k ? (s = x(), s !== k ? (Gt = e, n = nt(s), e = n) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H), e
                    }

                    function m() {
                        var e, n, o, i, a, s;
                        return e = Yt, t.substr(Yt, 13) === rt ? (n = rt, Yt += 13) : (n = k, 0 === Jt && r(ot)), n !== k ? (o = _(), o !== k ? (44 === t.charCodeAt(Yt) ? (i = R, Yt++) : (i = k, 0 === Jt && r(P)), i !== k ? (a = _(), a !== k ? (s = x(), s !== k ? (Gt = e, n = it(s), e = n) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H), e
                    }

                    function v() {
                        var e, n, o, i, a, s, c;
                        if (e = Yt, t.substr(Yt, 6) === at ? (n = at, Yt += 6) : (n = k, 0 === Jt && r(st)), n !== k)
                            if (o = _(), o !== k)
                                if (44 === t.charCodeAt(Yt) ? (i = R, Yt++) : (i = k, 0 === Jt && r(P)), i !== k)
                                    if (a = _(), a !== k) {
                                        if (s = [], c = g(), c !== k)
                                            for (; c !== k;) s.push(c), c = g();
                                        else s = H;
                                        s !== k ? (Gt = e, n = ct(s), e = n) : (Yt = e, e = H)
                                    } else Yt = e, e = H;
                        else Yt = e, e = H;
                        else Yt = e, e = H;
                        else Yt = e, e = H;
                        return e
                    }

                    function b() {
                        var e, n, o, i;
                        return e = Yt, n = Yt, 61 === t.charCodeAt(Yt) ? (o = lt, Yt++) : (o = k, 0 === Jt && r(ut)), o !== k ? (i = B(), i !== k ? (o = [o, i], n = o) : (Yt = n, n = H)) : (Yt = n, n = H), n !== k && (n = t.substring(e, Yt)), e = n, e === k && (e = E()), e
                    }

                    function g() {
                        var e, n, o, i, s, c, l, u, d;
                        return e = Yt, n = _(), n !== k ? (o = b(), o !== k ? (i = _(), i !== k ? (123 === t.charCodeAt(Yt) ? (s = z, Yt++) : (s = k, 0 === Jt && r(j)), s !== k ? (c = _(), c !== k ? (l = a(), l !== k ? (u = _(), u !== k ? (125 === t.charCodeAt(Yt) ? (d = U, Yt++) : (d = k, 0 === Jt && r(V)), d !== k ? (Gt = e, n = dt(o, l), e = n) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H), e
                    }

                    function y() {
                        var e, n, o, i;
                        return e = Yt, t.substr(Yt, 7) === ht ? (n = ht, Yt += 7) : (n = k, 0 === Jt && r(pt)), n !== k ? (o = _(), o !== k ? (i = B(), i !== k ? (Gt = e, n = ft(i), e = n) : (Yt = e, e = H)) : (Yt = e, e = H)) : (Yt = e, e = H), e
                    }

                    function x() {
                        var t, e, n, r, o;
                        if (t = Yt, e = y(), e === k && (e = N), e !== k)
                            if (n = _(), n !== k) {
                                if (r = [], o = g(), o !== k)
                                    for (; o !== k;) r.push(o), o = g();
                                else r = H;
                                r !== k ? (Gt = t, e = mt(e, r), t = e) : (Yt = t, t = H)
                            } else Yt = t, t = H;
                        else Yt = t, t = H;
                        return t
                    }

                    function C() {
                        var e, n;
                        if (Jt++, e = [], bt.test(t.charAt(Yt)) ? (n = t.charAt(Yt), Yt++) : (n = k, 0 === Jt && r(gt)), n !== k)
                            for (; n !== k;) e.push(n), bt.test(t.charAt(Yt)) ? (n = t.charAt(Yt), Yt++) : (n = k, 0 === Jt && r(gt));
                        else e = H;
                        return Jt--, e === k && (n = k, 0 === Jt && r(vt)), e
                    }

                    function _() {
                        var e, n, o;
                        for (Jt++, e = Yt, n = [], o = C(); o !== k;) n.push(o), o = C();
                        return n !== k && (n = t.substring(e, Yt)), e = n, Jt--, e === k && (n = k, 0 === Jt && r(yt)), e
                    }

                    function I() {
                        var e;
                        return xt.test(t.charAt(Yt)) ? (e = t.charAt(Yt), Yt++) : (e = k, 0 === Jt && r(Ct)), e
                    }

                    function w() {
                        var e;
                        return _t.test(t.charAt(Yt)) ? (e = t.charAt(Yt), Yt++) : (e = k, 0 === Jt && r(It)), e
                    }

                    function B() {
                        var e, n, o, i, a, s;
                        if (e = Yt, 48 === t.charCodeAt(Yt) ? (n = wt, Yt++) : (n = k, 0 === Jt && r(Bt)), n === k) {
                            if (n = Yt, o = Yt, Mt.test(t.charAt(Yt)) ? (i = t.charAt(Yt), Yt++) : (i = k, 0 === Jt && r(Et)), i !== k) {
                                for (a = [], s = I(); s !== k;) a.push(s), s = I();
                                a !== k ? (i = [i, a], o = i) : (Yt = o, o = H)
                            } else Yt = o, o = H;
                            o !== k && (o = t.substring(n, Yt)), n = o
                        }
                        return n !== k && (Gt = e, n = Lt(n)), e = n
                    }

                    function M() {
                        var e, n, o, i, a, s, c, l;
                        return St.test(t.charAt(Yt)) ? (e = t.charAt(Yt), Yt++) : (e = k, 0 === Jt && r(kt)), e === k && (e = Yt, t.substr(Yt, 2) === At ? (n = At, Yt += 2) : (n = k, 0 === Jt && r(Tt)), n !== k && (Gt = e, n = Dt()), e = n, e === k && (e = Yt, t.substr(Yt, 2) === Ht ? (n = Ht, Yt += 2) : (n = k, 0 === Jt && r($t)), n !== k && (Gt = e, n = qt()), e = n, e === k && (e = Yt, t.substr(Yt, 2) === Ot ? (n = Ot, Yt += 2) : (n = k, 0 === Jt && r(Ft)), n !== k && (Gt = e, n = zt()), e = n, e === k && (e = Yt, t.substr(Yt, 2) === jt ? (n = jt, Yt += 2) : (n = k, 0 === Jt && r(Nt)), n !== k && (Gt = e, n = Rt()), e = n, e === k && (e = Yt, t.substr(Yt, 2) === Pt ? (n = Pt, Yt += 2) : (n = k, 0 === Jt && r(Ut)), n !== k ? (o = Yt, i = Yt, a = w(), a !== k ? (s = w(), s !== k ? (c = w(), c !== k ? (l = w(), l !== k ? (a = [a, s, c, l], i = a) : (Yt = i, i = H)) : (Yt = i, i = H)) : (Yt = i, i = H)) : (Yt = i, i = H), i !== k && (i = t.substring(o, Yt)), o = i, o !== k ? (Gt = e, n = Vt(o), e = n) : (Yt = e, e = H)) : (Yt = e, e = H)))))), e
                    }

                    function E() {
                        var t, e, n;
                        if (t = Yt, e = [], n = M(), n !== k)
                            for (; n !== k;) e.push(n), n = M();
                        else e = H;
                        return e !== k && (Gt = t, e = Xt(e)), t = e
                    }
                    var L, S = arguments.length > 1 ? arguments[1] : {},
                        k = {},
                        A = {
                            start: i
                        },
                        T = i,
                        D = function(t) {
                            return {
                                type: "messageFormatPattern",
                                elements: t
                            }
                        },
                        H = k,
                        $ = function(t) {
                            var e, n, r, o, i, a = "";
                            for (e = 0, r = t.length; e < r; e += 1)
                                for (o = t[e], n = 0, i = o.length; n < i; n += 1) a += o[n];
                            return a
                        },
                        q = function(t) {
                            return {
                                type: "messageTextElement",
                                value: t
                            }
                        },
                        O = /^[^ \t\n\r,.+={}#]/,
                        F = {
                            type: "class",
                            value: "[^ \\t\\n\\r,.+={}#]",
                            description: "[^ \\t\\n\\r,.+={}#]"
                        },
                        z = "{",
                        j = {
                            type: "literal",
                            value: "{",
                            description: '"{"'
                        },
                        N = null,
                        R = ",",
                        P = {
                            type: "literal",
                            value: ",",
                            description: '","'
                        },
                        U = "}",
                        V = {
                            type: "literal",
                            value: "}",
                            description: '"}"'
                        },
                        X = function(t, e) {
                            return {
                                type: "argumentElement",
                                id: t,
                                format: e && e[2]
                            }
                        },
                        Y = "number",
                        G = {
                            type: "literal",
                            value: "number",
                            description: '"number"'
                        },
                        W = "date",
                        K = {
                            type: "literal",
                            value: "date",
                            description: '"date"'
                        },
                        Z = "time",
                        Q = {
                            type: "literal",
                            value: "time",
                            description: '"time"'
                        },
                        J = function(t, e) {
                            return {
                                type: t + "Format",
                                style: e && e[2]
                            }
                        },
                        tt = "plural",
                        et = {
                            type: "literal",
                            value: "plural",
                            description: '"plural"'
                        },
                        nt = function(t) {
                            return {
                                type: t.type,
                                ordinal: !1,
                                offset: t.offset || 0,
                                options: t.options
                            }
                        },
                        rt = "selectordinal",
                        ot = {
                            type: "literal",
                            value: "selectordinal",
                            description: '"selectordinal"'
                        },
                        it = function(t) {
                            return {
                                type: t.type,
                                ordinal: !0,
                                offset: t.offset || 0,
                                options: t.options
                            }
                        },
                        at = "select",
                        st = {
                            type: "literal",
                            value: "select",
                            description: '"select"'
                        },
                        ct = function(t) {
                            return {
                                type: "selectFormat",
                                options: t
                            }
                        },
                        lt = "=",
                        ut = {
                            type: "literal",
                            value: "=",
                            description: '"="'
                        },
                        dt = function(t, e) {
                            return {
                                type: "optionalFormatPattern",
                                selector: t,
                                value: e
                            }
                        },
                        ht = "offset:",
                        pt = {
                            type: "literal",
                            value: "offset:",
                            description: '"offset:"'
                        },
                        ft = function(t) {
                            return t
                        },
                        mt = function(t, e) {
                            return {
                                type: "pluralFormat",
                                offset: t,
                                options: e
                            }
                        },
                        vt = {
                            type: "other",
                            description: "whitespace"
                        },
                        bt = /^[ \t\n\r]/,
                        gt = {
                            type: "class",
                            value: "[ \\t\\n\\r]",
                            description: "[ \\t\\n\\r]"
                        },
                        yt = {
                            type: "other",
                            description: "optionalWhitespace"
                        },
                        xt = /^[0-9]/,
                        Ct = {
                            type: "class",
                            value: "[0-9]",
                            description: "[0-9]"
                        },
                        _t = /^[0-9a-f]/i,
                        It = {
                            type: "class",
                            value: "[0-9a-f]i",
                            description: "[0-9a-f]i"
                        },
                        wt = "0",
                        Bt = {
                            type: "literal",
                            value: "0",
                            description: '"0"'
                        },
                        Mt = /^[1-9]/,
                        Et = {
                            type: "class",
                            value: "[1-9]",
                            description: "[1-9]"
                        },
                        Lt = function(t) {
                            return parseInt(t, 10)
                        },
                        St = /^[^{}\\\0-\x1F \t\n\r]/,
                        kt = {
                            type: "class",
                            value: "[^{}\\\\\\0-\\x1F \\t\\n\\r]",
                            description: "[^{}\\\\\\0-\\x1F \\t\\n\\r]"
                        },
                        At = "\\\\",
                        Tt = {
                            type: "literal",
                            value: "\\\\",
                            description: '"\\\\\\\\"'
                        },
                        Dt = function() {
                            return "\\"
                        },
                        Ht = "\\#",
                        $t = {
                            type: "literal",
                            value: "\\#",
                            description: '"\\\\#"'
                        },
                        qt = function() {
                            return "\\#"
                        },
                        Ot = "\\{",
                        Ft = {
                            type: "literal",
                            value: "\\{",
                            description: '"\\\\{"'
                        },
                        zt = function() {
                            return "{"
                        },
                        jt = "\\}",
                        Nt = {
                            type: "literal",
                            value: "\\}",
                            description: '"\\\\}"'
                        },
                        Rt = function() {
                            return "}"
                        },
                        Pt = "\\u",
                        Ut = {
                            type: "literal",
                            value: "\\u",
                            description: '"\\\\u"'
                        },
                        Vt = function(t) {
                            return String.fromCharCode(parseInt(t, 16))
                        },
                        Xt = function(t) {
                            return t.join("")
                        },
                        Yt = 0,
                        Gt = 0,
                        Wt = 0,
                        Kt = {
                            line: 1,
                            column: 1,
                            seenCR: !1
                        },
                        Zt = 0,
                        Qt = [],
                        Jt = 0;
                    if ("startRule" in S) {
                        if (!(S.startRule in A)) throw new Error("Can't start parsing from rule \"" + S.startRule + '".');
                        T = A[S.startRule]
                    }
                    if (L = T(), L !== k && Yt === t.length) return L;
                    throw L !== k && Yt < t.length && r({
                        type: "end",
                        description: "end of input"
                    }), o(null, Qt, Zt)
                }
                return t(e, Error), {
                    SyntaxError: e,
                    parse: n
                }
            }()
        }, function(t, e, n) {
            "use strict";
            var r = n(19)["default"];
            n(81), e = t.exports = r, e["default"] = e
        }, function(t, e) {
            "use strict";

            function n(t, e, n) {
                this.locales = t, this.formats = e, this.pluralFn = n
            }

            function r(t) {
                this.id = t
            }

            function o(t, e, n, r, o) {
                this.id = t, this.useOrdinal = e, this.offset = n, this.options = r, this.pluralFn = o
            }

            function i(t, e, n, r) {
                this.id = t, this.offset = e, this.numberFormat = n, this.string = r
            }

            function a(t, e) {
                this.id = t, this.options = e
            }
            e["default"] = n, n.prototype.compile = function(t) {
                return this.pluralStack = [], this.currentPlural = null, this.pluralNumberFormat = null, this.compileMessage(t)
            }, n.prototype.compileMessage = function(t) {
                if (!t || "messageFormatPattern" !== t.type) throw new Error('Message AST is not of type: "messageFormatPattern"');
                var e, n, r, o = t.elements,
                    i = [];
                for (e = 0, n = o.length; e < n; e += 1) switch (r = o[e], r.type) {
                    case "messageTextElement":
                        i.push(this.compileMessageText(r));
                        break;
                    case "argumentElement":
                        i.push(this.compileArgument(r));
                        break;
                    default:
                        throw new Error("Message element does not have a valid type")
                }
                return i
            }, n.prototype.compileMessageText = function(t) {
                return this.currentPlural && /(^|[^\\])#/g.test(t.value) ? (this.pluralNumberFormat || (this.pluralNumberFormat = new Intl.NumberFormat(this.locales)), new i(this.currentPlural.id, this.currentPlural.format.offset, this.pluralNumberFormat, t.value)) : t.value.replace(/\\#/g, "#")
            }, n.prototype.compileArgument = function(t) {
                var e = t.format;
                if (!e) return new r(t.id);
                var n, i = this.formats,
                    s = this.locales,
                    c = this.pluralFn;
                switch (e.type) {
                    case "numberFormat":
                        return n = i.number[e.style], {
                            id: t.id,
                            format: new Intl.NumberFormat(s, n).format
                        };
                    case "dateFormat":
                        return n = i.date[e.style], {
                            id: t.id,
                            format: new Intl.DateTimeFormat(s, n).format
                        };
                    case "timeFormat":
                        return n = i.time[e.style], {
                            id: t.id,
                            format: new Intl.DateTimeFormat(s, n).format
                        };
                    case "pluralFormat":
                        return n = this.compileOptions(t), new o(t.id, e.ordinal, e.offset, n, c);
                    case "selectFormat":
                        return n = this.compileOptions(t), new a(t.id, n);
                    default:
                        throw new Error("Message element does not have a valid format type")
                }
            }, n.prototype.compileOptions = function(t) {
                var e = t.format,
                    n = e.options,
                    r = {};
                this.pluralStack.push(this.currentPlural), this.currentPlural = "pluralFormat" === e.type ? t : null;
                var o, i, a;
                for (o = 0, i = n.length; o < i; o += 1) a = n[o], r[a.selector] = this.compileMessage(a.value);
                return this.currentPlural = this.pluralStack.pop(), r
            }, r.prototype.format = function(t) {
                return t ? "string" == typeof t ? t : String(t) : ""
            }, o.prototype.getOption = function(t) {
                var e = this.options,
                    n = e["=" + t] || e[this.pluralFn(t - this.offset, this.useOrdinal)];
                return n || e.other
            }, i.prototype.format = function(t) {
                var e = this.numberFormat.format(t - this.offset);
                return this.string.replace(/(^|[^\\])#/g, "$1" + e).replace(/\\#/g, "#")
            }, a.prototype.getOption = function(t) {
                var e = this.options;
                return e[t] || e.other
            }
        }, function(t, e, n) {
            "use strict";

            function r(t, e, n) {
                var o = "string" == typeof t ? r.__parse(t) : t;
                if (!o || "messageFormatPattern" !== o.type) throw new TypeError("A message must be provided as a String or AST.");
                n = this._mergeFormats(r.formats, n), i.defineProperty(this, "_locale", {
                    value: this._resolveLocale(e)
                });
                var a = this._findPluralRuleFunction(this._locale),
                    s = this._compilePattern(o, e, n, a),
                    c = this;
                this.format = function(t) {
                    return c._format(s, t)
                }
            }
            var o = n(10),
                i = n(18),
                a = n(15),
                s = n(12);
            e["default"] = r, i.defineProperty(r, "formats", {
                enumerable: !0,
                value: {
                    number: {
                        currency: {
                            style: "currency"
                        },
                        percent: {
                            style: "percent"
                        }
                    },
                    date: {
                        "short": {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit"
                        },
                        medium: {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        },
                        "long": {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        },
                        full: {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    },
                    time: {
                        "short": {
                            hour: "numeric",
                            minute: "numeric"
                        },
                        medium: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        },
                        "long": {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        },
                        full: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        }
                    }
                }
            }), i.defineProperty(r, "__localeData__", {
                value: i.objCreate(null)
            }), i.defineProperty(r, "__addLocaleData", {
                value: function(t) {
                    if (!t || !t.locale) throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");
                    r.__localeData__[t.locale.toLowerCase()] = t
                }
            }), i.defineProperty(r, "__parse", {
                value: s["default"].parse
            }), i.defineProperty(r, "defaultLocale", {
                enumerable: !0,
                writable: !0,
                value: void 0
            }), r.prototype.resolvedOptions = function() {
                return {
                    locale: this._locale
                }
            }, r.prototype._compilePattern = function(t, e, n, r) {
                var o = new a["default"](e, n, r);
                return o.compile(t)
            }, r.prototype._findPluralRuleFunction = function(t) {
                for (var e = r.__localeData__, n = e[t.toLowerCase()]; n;) {
                    if (n.pluralRuleFunction) return n.pluralRuleFunction;
                    n = n.parentLocale && e[n.parentLocale.toLowerCase()]
                }
                throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :" + t)
            }, r.prototype._format = function(t, e) {
                var n, r, i, a, s, c = "";
                for (n = 0, r = t.length; n < r; n += 1)
                    if (i = t[n], "string" != typeof i) {
                        if (a = i.id, !e || !o.hop.call(e, a)) throw new Error("A value must be provided for: " + a);
                        s = e[a], c += i.options ? this._format(i.getOption(s), e) : i.format(s)
                    } else c += i;
                return c
            }, r.prototype._mergeFormats = function(t, e) {
                var n, r, a = {};
                for (n in t) o.hop.call(t, n) && (a[n] = r = i.objCreate(t[n]), e && o.hop.call(e, n) && o.extend(r, e[n]));
                return a
            }, r.prototype._resolveLocale = function(t) {
                "string" == typeof t && (t = [t]), t = (t || []).concat(r.defaultLocale);
                var e, n, o, i, a = r.__localeData__;
                for (e = 0, n = t.length; e < n; e += 1)
                    for (o = t[e].toLowerCase().split("-"); o.length;) {
                        if (i = a[o.join("-")]) return i.locale;
                        o.pop()
                    }
                var s = t.pop();
                throw new Error("No locale data has been added to IntlMessageFormat for: " + t.join(", ") + ", or the default locale: " + s)
            }
        }, function(t, e) {
            "use strict";
            e["default"] = {
                locale: "en",
                pluralRuleFunction: function(t, e) {
                    var n = String(t).split("."),
                        r = !n[1],
                        o = Number(n[0]) == t,
                        i = o && n[0].slice(-1),
                        a = o && n[0].slice(-2);
                    return e ? 1 == i && 11 != a ? "one" : 2 == i && 12 != a ? "two" : 3 == i && 13 != a ? "few" : "other" : 1 == t && r ? "one" : "other"
                }
            }
        }, function(t, e, n) {
            "use strict";
            var r = n(10),
                o = function() {
                    try {
                        return !!Object.defineProperty({}, "a", {})
                    } catch (t) {
                        return !1
                    }
                }(),
                i = (!o && !Object.prototype.__defineGetter__, o ? Object.defineProperty : function(t, e, n) {
                    "get" in n && t.__defineGetter__ ? t.__defineGetter__(e, n.get) : (!r.hop.call(t, e) || "value" in n) && (t[e] = n.value)
                }),
                a = Object.create || function(t, e) {
                    function n() {}
                    var o, a;
                    n.prototype = t, o = new n;
                    for (a in e) r.hop.call(e, a) && i(o, a, e[a]);
                    return o
                };
            e.defineProperty = i, e.objCreate = a
        }, function(t, e, n) {
            "use strict";
            var r = n(16),
                o = n(17);
            r["default"].__addLocaleData(o["default"]), r["default"].defaultLocale = "en", e["default"] = r["default"]
        }, function(t, e) {
            t.exports = {
                en: {
                    prompt: "Enter message...",
                    thinking: "Agent is thinking...",
                    anything_else: "Is there anything else I can help you with?",
                    edit: "edit",
                    list_sep: ", ",
                    reconnect: "Attempting to reconnect...",
                    basic_err: "I am sorry, I am having difficulties.",
                    loading_failure1: '<span class="IBMChat-loading-failure-message-text">I cannot complete your request. You can try a new request or <a class="IBMChat-loading-retry-link" data-retry="true" href="javascript:void(false);">restart the conversation.</a></span>',
                    loading_failure2: '<span class="IBMChat-loading-failure-message-text">I cannot complete your request. Please <a class="IBMChat-loading-retry-link" data-retry="true" href="javascript:void(false);">restart the conversation.</a></span>',
                    submit: "Submit",
                    cancel: "Cancel",
                    required_field: "This field is required.",
                    placeholder_mon: "MM",
                    placeholder_year: "YYYY",
                    cc_name: "Name on Card",
                    cc_num: "Credit Card Number",
                    cc_exp_mon: "Expiration Date Month",
                    cc_exp_year: "Expiration Date Year",
                    cc_code: "CVV",
                    cc_code_alt: "",
                    cc_use_valid: "Please use a valid card. We accept the following: ",
                    cc_invalid: "Your credit card number is invalid.",
                    cc_invalid_exp: "Your credit card expiration date is invalid.",
                    cc_invalid_code: "Your CVV is invalid.",
                    loc_curr: "Current Location",
                    postal_code: "Zip Code",
                    loc_prompt: "Please share your current location.",
                    loc_share: "Your browser is asking you to share your location...",
                    loc_share_granted: "You have allowed your browser to share your current location.",
                    loc_looking: "Looking up your current location...",
                    loc_share_denied: "You have denied sharing your location on this website.",
                    loc_not_shared_prompt: "Please enable location sharing or continue with your Zip Code.",
                    loc_all: "All Locations",
                    loc_closed_today: "Closed today.",
                    loc_open_today: "Open today.",
                    loc_open_today_more: '<span class="{ns}-hours-open">Open today:</span><span class="{ns}-hours-today"> {open, time, short} &ndash; {close, time, short}</span>',
                    loc_hours_open: '<span class="{ns}-days-hours-day">{openDay, date, weekday_short}:</span>&nbsp;<span class="{ns}-days-hours-hours">{open, time, short} &ndash; {close, time, short}</span>',
                    loc_hours_open_multiday: '<span class="{ns}-days-hours-day">{openDay, date, weekday_short}&ndash;{closeDay, date, weekday_short}:</span>&nbsp;<span class="{ns}-days-hours-hours">{open, time, short} &ndash; {close, time, short}</span>',
                    loc_hours_unknown: '<span class="{ns}-days-hours-day">{day, date, weekday_short}:</span>&nbsp;<span class="{ns}-days-hours-hours">Hours unknown</span>',
                    loc_hours_closed: '<span class="{ns}-days-hours-day">{day, date, weekday_short}:</span>&nbsp;<span class="{ns}-days-hours-hours">Closed</span>',
                    loc_nearby_none: "We could not find any locations close to you.",
                    loc_nearby_single: "Here are the details for this location:",
                    loc_nearby_list: "Here are the locations I found close to you:",
                    google_maps_url: "https://maps.google.com/"
                }
            }
        }, function(t, e) {
            function n(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }
            t.exports = n
        }, function(t, e, n) {
            function r(t, e) {
                return e = i(void 0 === e ? t.length - 1 : e, 0),
                    function() {
                        for (var n = arguments, r = -1, a = i(n.length - e, 0), s = Array(a); ++r < a;) s[r] = n[e + r];
                        r = -1;
                        for (var c = Array(e + 1); ++r < e;) c[r] = n[r];
                        return c[e] = s, o(t, this, c)
                    }
            }
            var o = n(21),
                i = Math.max;
            t.exports = r
        }, function(t, e, n) {
            function r(t, e, n, r) {
                n || (n = {});
                for (var i = -1, a = e.length; ++i < a;) {
                    var s = e[i],
                        c = r ? r(n[s], t[s], s, n, t) : void 0;
                    o(n, s, void 0 === c ? t[s] : c)
                }
                return n
            }
            var o = n(11);
            t.exports = r
        }, function(t, e, n) {
            function r(t) {
                return o(function(e, n) {
                    var r = -1,
                        o = n.length,
                        a = o > 1 ? n[o - 1] : void 0,
                        s = o > 2 ? n[2] : void 0;
                    for (a = t.length > 3 && "function" == typeof a ? (o--, a) : void 0, s && i(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), e = Object(e); ++r < o;) {
                        var c = n[r];
                        c && t(e, c, r, a)
                    }
                    return e
                })
            }
            var o = n(22),
                i = n(25);
            t.exports = r
        }, function(t, e) {
            function n() {
                return !1
            }
            t.exports = n
        }, 25, function(t, e) {
            function n(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }
            t.exports = n
        }, function(t, e) {
            function n(t, e) {
                return t === e || t !== t && e !== e
            }
            t.exports = n
        }, function(t, e, n) {
            function r(t) {
                return null != t && i(t.length) && !o(t)
            }
            var o = n(30),
                i = n(31);
            t.exports = r
        }, function(t, e, n) {
            function r(t) {
                var e = o(t) ? c.call(t) : "";
                return e == i || e == a
            }
            var o = n(32),
                i = "[object Function]",
                a = "[object GeneratorFunction]",
                s = Object.prototype,
                c = s.toString;
            t.exports = r
        }, function(t, e) {
            function n(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
            }
            var r = 9007199254740991;
            t.exports = n
        }, function(t, e) {
            function n(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }
            t.exports = n
        }, function(t, e, n) {
            var r = n(27),
                o = r(Object.keys, Object);
            t.exports = o
        }, function(t, e) {
            t.exports = '<div class="${ns}-container IBMChat-secondary-colors"> <div class="${ns}-row"> <fieldset aria-describedby="cc_full_name_${uuid}_error"> <label class="IBMChat-screen-reader-text" for="cc_full_name_${uuid}">${cc_name}</label> <input type="text" class="IBMChat-input-colors" id="cc_full_name_${uuid}" name="cc_full_name" placeholder="${cc_name}"/> <div id="cc_full_name_${uuid}_error" class="IBMChat-validation-error IBMChat-error-colors" data-validation-for="cc_full_name" data-valid="true" style="display:none;"></div> </fieldset> </div> <div class="${ns}-row"> <fieldset aria-describedby="cc_number_${uuid}_error"> <label class="IBMChat-screen-reader-text" for="cc_number_${uuid}">${cc_num}</label> <input type="text" class="IBMChat-input-colors" id="cc_number_${uuid}" name="cc_number" placeholder="${cc_num}"/> <div id="cc_number_${uuid}_error" class="IBMChat-validation-error IBMChat-error-colors" data-validation-for="cc_number" data-valid="true" style="display:none;"></div> </fieldset> </div> <div class="${ns}-row"> <div class="${ns}-col"> <fieldset aria-describedby="cc_exp_date_${uuid}_error"> <label class="IBMChat-screen-reader-text" for="cc_exp_date_month_${uuid}">${cc_exp_mon}</label> <input class="${ns}-date IBMChat-input-colors" type="text" id="cc_exp_date_month_${uuid}" name="cc_exp_date_month" placeholder="${placeholder_mon}" size="3" /> <label class="IBMChat-screen-reader-text" for="cc_exp_date_year_${uuid}">${cc_exp_year}</label> <input class="${ns}-date IBMChat-input-colors" type="text" id="cc_exp_date_year_${uuid}" name="cc_exp_date_year" placeholder="${placeholder_year}" size="5" /> </fieldset> </div> <div class="${ns}-col"> <fieldset aria-describedby="cc_code_${uuid}_error"> <label class="IBMChat-screen-reader-text" for="cc_code_${uuid}">${cc_code_alt}</label> <input class="${ns}-cvv IBMChat-input-colors" type="text" id="cc_code_${uuid}" name="cc_code" placeholder="${cc_code}" size="6" title="${cc_code_alt}"/> </fieldset> </div> <div id="cc_exp_date_${uuid}_error" class="IBMChat-validation-error IBMChat-error-colors" data-validation-for="cc_exp_date" data-valid="true" style="display:none;"></div> <div id="cc_code_${uuid}_error" class="IBMChat-validation-error IBMChat-error-colors" data-validation-for="cc_code" data-valid="true" style="display:none;"></div> </div> <div class="IBMChat-form-buttons"> <button class="IBMChat-form-submit">${submit}</button> <button class="IBMChat-form-cancel">${cancel}</button> </div></div>'
        }, function(t, e) {
            t.exports = '<div class="${ns}-container"> <div><button class="IBMChat-accent-colors-button" data-input="latlong">${loc_curr}</button></div> <div><button class="IBMChat-accent-colors-button" data-input="zipcode">${postal_code}</button></div></div>'
        }, function(t, e) {
            t.exports = '<button class="IBMChat-accent-colors-button" data-input="${text}">${text}</button>'
        }, function(t, e) {
            t.exports = "<button>${text}</button>"
        }, function(t, e) {
            t.exports = '<div class="IBMChat-error IBMChat-error-colors"></div>'
        }, function(t, e) {
            t.exports = '<div class="IBMChat-form-container IBMChat-secondary-colors"> <div class="IBMChat-form-fields"></div> <div class="IBMChat-form-buttons"> <button class="IBMChat-form-submit">${submit}</button> <button class="IBMChat-form-cancel">${cancel}</button> </div></div>'
        }, function(t, e) {
            t.exports = '<fieldset aria-describedby="${name}_${uuid}_error"> <label for="${name}_${uuid}">${label}</label> <input type="${type}" class="IBMChat-input-colors" id="${name}_${uuid}" name="${name}" value="${value}" data-index="${index}"/> <div id="${name}_${uuid}_error" class="IBMChat-validation-error IBMChat-error-colors" style="display:none;" data-validation-for="${name}" data-valid="true"></div></fieldset>'
        }, function(t, e) {
            t.exports = '<div class="${ns}-locations-item ${ns}-data-section"> <div class="${ns}-locations-item-data-title"></div> <div class="${ns}-data-float-holder"> <div class="${ns}-locations-item-data"> <div class="${ns}-locations-item-data-items"> <div class="${ns}-locations-item-data-section"> <a class="${ns}-locations-item-data-address-link"> <div class="${ns}-locations-item-data-address"></div> </a> </div> <div class="IBMChat-small-hide"> <div class="${ns}-locations-item-data-hours"></div> <div class="${ns}-locations-item-data-timezone"></div> <div class="${ns}-locations-item-data-more-hours"></div> </div> </div> </div> <div class="${ns}-locations-item-data"> <div class="${ns}-locations-item-data-items"> <div class="${ns}-locations-item-data-phone"></div> <div class="${ns}-locations-item-data-email"></div> </div> </div> </div> <div> <div class="${ns}-locations-item-data-items"> <div class="IBMChat-small-show"> <div class="${ns}-locations-item-data-hours"></div> <div class="${ns}-locations-item-data-timezone"></div> <div class="${ns}-locations-item-data-more-hours"></div> </div> </div> <div class="${ns}-locations-all-holder"> <button class="${ns}-locations-all IBMChat-accent-colors-button">${loc_all}</button> </div> </div></div>'
        }, function(t, e) {
            t.exports = '<button aria-label="${address}" class="${ns}-locations-item ${ns}-multiple-locations ${ns}-data-section"> <div class="${ns}-locations-row"> <div class="${ns}-locations-item-icon-holder ${ns}-locations-cell"> <div class="${ns}-locations-item-icon" style="color: ${accentText}; background: ${accentBackground};">${iconText}</div> </div> <div class="${ns}-locations-cell"> <div class="${ns}-locations-item-data-title">${title}</div> <div class="${ns}-locations-item-data-items"> <div class="${ns}-locations-item-data-address">${address}</div> </div> </div> </div></button>'
        }, function(t, e) {
            t.exports = '<div class="${ns}"> <div class="${ns}-img"></div> <div class="${ns}-data"></div></div>'
        }, function(t, e) {
            t.exports = '<div class="${ns}-contact-type"></div><div class="${ns}-contact-data"></div>'
        }, function(t, e) {
            t.exports = '<div class="${ns}-hours-timezone">( ${timezone} )</div>'
        }, function(t, e) {
            t.exports = '<span class="${ns}-hours-open">${loc_closed_today}</span>'
        }, function(t, e) {
            t.exports = '<span class="${ns}-hours-open">${loc_open_today}</span>'
        }, function(t, e) {
            t.exports = '.IBMChat { height: 100%; width: 100%;}/* utils */.IBMChat-hidden { display: none;}.IBMChat-relative { position: relative;}.IBMChat-outer-container { border: none; box-sizing: border-box; display: table; table-layout: fixed; font-weight: normal; line-height: 1em; height: 100%; margin: 0 auto 0 auto; max-width: 768px; min-height: 300px; min-width: 288px; padding: 0; position: relative; text-align: left; width: 100%;}/* Agent Component */.IBMChat-inner-container { display: table-cell; height: 100%; margin: 0; padding: 0 1em 0 1em; vertical-align: bottom;}/* Chat Component */.IBMChat-chat-container { display: table-row; margin: 0; padding: 0;}/* Messages Component */.IBMChat-messages { height: auto; overflow-x: hidden; overflow-y: auto; padding: 0 1em 0 1em;}.IBMChat-messages label { display: block; font-weight: bold; text-transform: capitalize;}.IBMChat-messages input { border: 0; border-radius: 0; font-size: 1em; margin: 0; padding: 0 0 0.25em 0;}.IBMChat-messages button { background: none; border: 0; border-radius: 1em; color: inherit; cursor: pointer; font: inherit; line-height: 1.5em; margin: 0; padding: 0.25em 1em 0.25em 1em; text-align: left; -webkit-appearance: button; /* for input */ -webkit-user-select: none; /* for button */ -moz-user-select: none; -ms-user-select: none;}.IBMChat-messages button[disabled="true"] { cursor: default; opacity: .5;}.IBMChat-messages button[disabled="true"]:focus { outline: none;}.IBMChat-messages button::-moz-focus-inner { border: 0; padding: 0;}.IBMChat-watson-intent:not(:empty) { display: flex; align-items: baseline; margin: 1em; padding: 0.5em 0.75em 0.5em 0.75em; background-color: #595859; /* gray 60 */ border: 1px solid #777677; /* gray 50 */ border-radius: 4px; line-height: 1.1em; /* required due to `overflow` in `label` below */}.IBMChat-watson-intent label { flex: 1 1 auto; font-weight: normal; color: #eaeaea; /* gray 1 */ text-transform: none; overflow: hidden; word-wrap: break-word; /* old prop name; required by IE */ overflow-wrap: break-word; /* standard prop name */}.IBMChat-watson-intent a { margin-left: 0.5em;}/* WatsonMessage Component */.IBMChat-watson-message-container { margin: 1em 0 1em 0; position: relative;}.IBMChat-watson-message { line-height: 1.5em; min-height: 1.5em; padding: 0 0 0 1em; word-wrap: break-word;}.IBMChat-watson-message a { display: inline-block; word-break: break-all;}.IBMChat-watson-message-line { left: 0; height: 1.5em; position: absolute; top: 0;}.IBMChat-disabled-layout { opacity: 0.7;}/* UserMessage Component */.IBMChat-user-message-container {\tmargin: 1em 0 1em 2em;\ttext-align: right;}.IBMChat-user-message { border-radius: 4px; display: inline-block; line-height: 1.5em; padding: 0.5em 0.75em 0.5em 0.75em; text-align: left; max-width: 100%; overflow: hidden; word-wrap: break-word;}/* Input Component */.IBMChat-input-container { display: table-row; margin: 0; padding: 0;}.IBMChat-input-form { display: table-cell; position: relative; min-height: 30px;}.IBMChat-chat-textbox-container { min-height: 30px; padding: 1em 2em 2em 2em;}.IBMChat-chat-textbox-clone-holder { height: 0; overflow: hidden;}.IBMChat-chat-textbox-clone { border-bottom: 1px solid transparent; font-weight: normal; line-height: 1.5em; margin: 0; min-height: 26px; padding: 0; position: relative; white-space: pre-wrap; white-space: pre-line; word-wrap: break-word; visibility: hidden;}.IBMChat-chat-textbox { background: transparent; border: none; border-radius: 0; border-image-width: 0; color: inherit; font-weight: normal; height: 1.5em; line-height: 1.5em; margin: 0; min-height: 26px; overflow: hidden; padding: 0 0 3px 0; resize: none; text-wrap: unrestricted; vertical-align: bottom; width: 100%; white-space: pre-wrap; white-space: pre-line; word-wrap: break-word;}.IBMChat-chat-textbox[disabled=\'disabled\'] { opacity: 0.5;}.IBMChat-input-form::-webkit-input-placeholder { opacity: 1;}.IBMChat-chat-textbox:focus {\toutline: none;\tpadding: 0 0 2px 0;}/* Layout Component */.IBMChat-watson-layout { padding: 4px;}/* validation error message */.IBMChat-validation-error { padding: 0.5em; font-size: 0.9em;}/* class to hide an element from everyone but screen readers for visually impared */.IBMChat-screen-reader-text {\tclip: rect(1px, 1px, 1px, 1px);\theight: 1px;\twidth: 1px;\toverflow: hidden;\tposition: absolute !important;}/* Loading */.IBMChat-loading-container { margin-bottom: 1em;}.IBMChat-loading { min-height: 30px; position: relative;}.IBMChat-loading-icon { height: 30px; width: 10px; position: absolute; top: 0; left: -4px;}.IBMChat-ball { position: absolute; left: 5px; width: 5px; height: 5px; border-radius: 50%;}.IBMChat-ball:nth-child(1) { top: 7.5px;}.IBMChat-ball:nth-child(2) { top: 17.5px;}.IBMChat-ball:nth-child(3) { top: 12.5px;}.IBMChat-loading-message { display: inline-block; min-height: 30px; line-height: 1.2em; padding: 5px 1em 0 1em;}.IBMChat-bouncing { animation: bounceBack 420ms infinite; animation-direction: alternate; animation-timing-function: ease-in-out; animation-timing-function: cubic-bezier(.42,0,1,1);}.IBMChat-bouncing:nth-child(2) { animation: bounce 420ms infinite; animation-direction: alternate; animation-timing-function: ease-in-out; animation-timing-function: cubic-bezier(.42,0,1,1);}@keyframes bounce { 0% { transform: translateY(5px); } 72% { transform: translateY(-5px); } 72%,100%{ transform: translateY(-5px); }}@keyframes bounceBack { 0% { transform: translateY(-5px); } 72% { transform: translateY(5px); } 72%,100%{ transform: translateY(5px); }}/* responsive */.IBMChat-small-show { display: unset;}.IBMChat-small-hide { display: none;}.IBMChat-isLarge .IBMChat-small-show { display: none;}.IBMChat-isLarge .IBMChat-small-hide { display: unset;}/* cc-validator */.IBMChat-creditcard-container { margin-top: 1em; padding: 1em 1.5em 1em 1.5em; width: 240px;}.IBMChat-creditcard-container fieldset { border:none; margin:0; padding:0;}.IBMChat-creditcard-row { padding-bottom: 1em;}.IBMChat-creditcard-row input[name="cc_full_name"], .IBMChat-creditcard-row input[name="cc_number"] { width: 100%;}.IBMChat-creditcard-row input[name="cc_exp_date_month"] { max-width: 32px;}.IBMChat-creditcard-row input[name="cc_exp_date_year"], .IBMChat-creditcard-row input[name="cc_code"] { max-width: 64px;}.IBMChat-creditcard-col { display: inline-block;}.IBMChat-creditcard-col:nth-child(2) { padding-left:1.5em;}.IBMChat-creditcard-buttons:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0;}.IBMChat-creditcard-buttons button { width: 95px; float: left; text-overflow: clip;}.IBMChat-creditcard-buttons button:last-child { float: right; text-overflow: clip;}/* choose */.IBMChat-choose-container > div {\tmargin-top: 1em;}/* choose location type */.IBMChat-islocationapi-container > div {\tmargin-top: 1em;}/* error */.IBMChat-error { padding: 0.5em 1em 0.5em 1em;}/* form */.IBMChat-form-container { margin-top: 1em; padding: 1em 1.5em 1em 1.5em; width: 240px;}.IBMChat-form-container fieldset { border:none; margin:0; padding:0;}.IBMChat-form-fields { width:100%;}.IBMChat-form-fields-row { padding-bottom:1.5em;}.IBMChat-form-fields-row input { width: 100%;}.IBMChat-form-buttons { text-align:center; width: 100%;}.IBMChat-form-buttons:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0;}button.IBMChat-form-submit { margin-bottom: 1em; text-align: center; width: 100%;}button.IBMChat-form-cancel, button.IBMChat-form-cancel.IBMChat-accent-colors { border: 0 !important; border-radius:0; font-size: 0.8em; line-height:1em; padding: 2px 4px 2px 4px; text-align:center;}/* locations */.IBMChat-map { margin-top: 1em;}.IBMChat-map-data { font-size:0.85em;}.IBMChat-map-img { overflow: hidden;}.IBMChat-map-img img { margin: 0 0 0.5em 0; height: 120px;}.IBMChat-map-multiple-locations { cursor: default; display: table; width: 100%;}.IBMChat-map-multiple-locations .IBMChat-map-locations-row { display:table-row; width: 100%;}.IBMChat-map-multiple-locations .IBMChat-map-locations-cell { display: table-cell; overflow: hidden; word-wrap: break-word;}.IBMChat-map-location-active .IBMChat-map-multiple-locations { opacity: 1;}.IBMChat-map-locations-item.IBMChat-map-multiple-locations { padding: 0.5em 0 0.5em 0; white-space: normal;}.IBMChat-disabled-layout .IBMChat-map-locations-item.IBMChat-map-multiple-locations { cursor: default;}.IBMChat-map-data-section { margin-top:0.5em;}.IBMChat-map-data-float-holder:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0;}.IBMChat-map-locations-item { border-bottom:1px solid #505050; text-align:left; padding: 1em;}.IBMChat-map-locations-item-icon-holder { text-align:center; width: 40px;}.IBMChat-map-locations-item-icon { border-radius: 24px; height:24px; line-height: 24px; margin-right:8px; width:24px;}.IBMChat-map-locations-item-data {}.IBMChat-map-locations-item-data-title { font-size:1.3em; font-weight:300; line-height:1.2em;}.IBMChat-map-locations-item-data-section { padding-bottom:0.5em;}.IBMChat-map-locations-item-data-email { padding-bottom:0;}.IBMChat-map-locations-item-data-phone { display: table; max-width:400px; width: 100%;}.IBMChat-map-contact-row { padding-bottom:0.5em;}.IBMChat-map-contact-type { font-size:0.9em;}button.IBMChat-map-locations-all { font-size:0.9em; line-height:1.5em; margin: 1em 0 0 0; padding: 0 0.5em 0 0.5em;}.IBMChat-map-hours-open { font-weight: bold;}.IBMChat-map-days-hours-day, .IBMChat-map-days-hours-hours, .IBMChat-map-days-hours-closed { overflow: hidden; word-wrap: break-word;}.IBMChat-map-days-hours-day { font-weight: bold;}.IBMChat-map-hours-timezone { font-size: 0.8em; padding-bottom: 0.5em;}.IBMChat-map-locations-item-data-hours { margin-top:0.5em;}.IBMChat-isLarge .IBMChat-map-locations-item-data { float:left; padding-right:5%; width:45%;}.IBMChat-isLarge .IBMChat-map-locations-item-data-hours { margin-top:0;}.IBMChat-isLarge .IBMChat-map-locations-item-data-more-hours { margin-top:0.5em;}';
        }, function(t, e) {
            t.exports = '<form class="IBMChat-input-form"> <div class="IBMChat-chat-text-container"> <div class="IBMChat-chat-textbox-container"> <textarea aria-labelledby="Enter a Message" class="IBMChat-chat-textbox" placeholder="${placeholder}"></textarea> <div class="IBMChat-chat-textbox-clone-holder"> <div class="IBMChat-chat-textbox-clone" aria-hidden="true">${placeholder}</div> </div> </div> </div></form>'
        }, function(t, e) {
            t.exports = '<section class="IBMChat-loading-container"> <div class="IBMChat-loading IBMChat-hidden"> <div class="IBMChat-loading-icon" aria-hidden="true"> <div class="IBMChat-ball IBMChat-bouncing"></div> <div class="IBMChat-ball IBMChat-bouncing"></div> <div class="IBMChat-ball"></div> </div> <div class="IBMChat-loading-message"> <span class="IBMChat-loading-message-text"></span> <span class="IBMChat-loading-message-retry"> <span class="IBMChat-loading-retry-message IBMChat-hidden">${retryAttempt}</span> </span> </div> </div> <div class="IBMChat-loading-failure-message IBMChat-watson-message-container IBMChat-hidden"> <div class="IBMChat-watson-message-line"></div> <div class="IBMChat-watson-message"></div> </div></section>'
        }, function(t, e) {
            t.exports = '<div class="IBMChat-watson-message-container"></div>'
        }, function(t, e) {
            t.exports = '<div id="${data.uuid}" class="IBMChat-user-message-container"> <div class="IBMChat-user-message IBMChat-secondary-colors"></div></div>'
        }, function(t, e) {
            t.exports = '<div class="IBMChat"> <div class="IBMChat-outer-container IBMChat-default-colors"> <div class="IBMChat-fade"></div> <div class="IBMChat-chat-container"> <div class="IBMChat-inner-container"> <div class="IBMChat-messages"></div> </div> </div> </div></div>'
        }, function(t, e, n) {
            function r(t, e) {
                x.subscribe("start", C.start), x.subscribe("chatID", C.chatID), x.subscribe("resize", C.resize), x.subscribe("disable-input", C.input.disableInput), x.subscribe("enable-loading", C.input.enableLoadingInput), x.subscribe("disable-loading", C.input.disableLoadingInput), x.subscribe("scroll-to-bottom", C.scrollToBottom), x.subscribe("receive", C.receive), e === !0 ? x.subscribe("send", C.sendMock) : (x.subscribe("clear", C.clear), x.subscribe("send", C.send.send), x.subscribe("retry", C.send.retry), x.subscribe("send-input-message", C.sendInputMessage), x.subscribe("enable-retry", C.error.retry), x.subscribe("enable-input", C.input.enableInput), x.subscribe("focus-input", C.input.focusInput), x.subscribe("send-mock", C.sendMock), x.subscribe("error-clear", C.error.clearError), x.subscribe("reset", C.reset)), t === !0 && (x.subscribe("try-it-error", C.error.tryIt), x.subscribe("try-it-layout-subscription", C.tryIt.layoutError), x.subscribe("try-it-action-subscription", C.tryIt.actionError), x.subscribe("try-it-receive-intent-data", C.tryIt.intent))
            }

            function o() {
                a("show-locations", y.showLocations.init, !0), a("choose-location-type", y.chooseLocationType.init, !0), a("request-geolocation-latlong", y.requestGeolocationLatlong.init, !0), a("request-geolocation-zipcode", y.requestGeolocationZipcode.init, !0), a("choose", y.choose.init, !0), a("form", y.form.init, !0), a("cc-validator", y.creditCard.init, !0), a("error", y.error.init, !0);
                for (var t = 0; t < A.length; t++) k[A[t]]()
            }

            function i(t) {
                var e = I.get();
                if (e.active === !0) return b().then(function() {
                    return i(t)
                });
                var n = "string" == typeof t.el ? document.getElementById(t.el) : t.el,
                    a = B.getSDKConfig(t),
                    s = t.locale || "en";
                if (I.set({
                        locale: s
                    }), t.defaultCountry && I.set({
                        defaultCountry: t.defaultCountry
                    }), t.langBundle && "object" == typeof t.langBundle) {
                    var c = t.langBundle[s];
                    c || (console.warn("Could not find language bundle for " + s + ". Defaulting to English."), s = "en", c = t.langBundle.en), I.set({
                        locale: s,
                        langBundle: c
                    })
                }
                return new window.Promise(function(e, i) {
                    var s = {
                        active: !0,
                        root: n,
                        mapsServer: "https://dp1-i-serve-maps.mybluemix.net",
                        botID: t.botID,
                        styles: E({}, S, t.styles),
                        baseURL: a.baseURL || "https://api.ibm.com/virtualagent/run/api/v1/",
                        originalContent: n.innerHTML,
                        handleInput: {
                            "default": !0
                        },
                        minSeconds: t.minSeconds || 0 === t.minSeconds ? t.minSeconds : .75,
                        chatStyleID: "chatStyleID-" + B.getUUID(),
                        tryIt: t.tryIt || !1,
                        playback: t.playback || !1
                    };
                    B.checkRoot(n) ? (t.errorHandler ? x.subscribe("httpError", t.errorHandler, t.errorHandlerContext) : x.subscribe("httpError", C.error.httpError), r(t.tryIt, t.playback), o(), t.playback === !0 ? (x.publish("start", s), setTimeout(function() {
                        x.publish("chatID", "playback")
                    }, 0), setTimeout(function() {
                        e()
                    }, 0)) : t.botID ? (x.publish("start", s), x.publish("enable-loading"), x.publish("disable-input"), _.configure(a).start(t.botID).then(function(t) {
                        x.publish("chatID", t.chatID), x.publish("receive", t)
                    })["catch"](function(t) {
                        x.publish("httpError", t)
                    }).then(function() {
                        setTimeout(function() {
                            x.publish("enable-input"), e()
                        }, 0)
                    })) : (console.error("BotID is required!"), b(), i({
                        error: "BotID is required!"
                    }))) : (console.error("Element for chat does not exist!"), b(), i({
                        error: "Element for chat does not exist!"
                    }))
                })
            }

            function a(t, e, n) {
                t && e && "function" == typeof e ? A.indexOf(t) !== -1 && n || (A.push(t), k[t] = e) : console.error("registerLayout was configured incorrectly.")
            }

            function s(t) {
                if (t) {
                    var e = I.get();
                    e.active && x.publish("send", {
                        text: t
                    })
                } else console.error("The message was empty.")
            }

            function c(t) {
                if (t) {
                    var e = I.get();
                    e.active && x.publish("receive", t)
                } else console.error("The message was empty.")
            }

            function l(t) {
                if (t) {
                    var e = I.get();
                    e.active && x.publish("send-mock", {
                        text: t
                    })
                } else console.error("The message was empty.")
            }

            function u(t) {
                if (t) {
                    var e = I.get();
                    e.active && x.publish("send", {
                        text: t,
                        silent: !0
                    })
                } else console.error("The message was empty.")
            }

            function d(t) {
                t && t.callback && "function" == typeof t.callback ? I.set({
                    handleInput: {
                        "default": !1,
                        callback: t.callback,
                        context: t.context
                    }
                }) : console.error("Invalid configuration of enableCustomInputHandler")
            }

            function h() {
                I.set({
                    handleInput: {
                        "default": !0
                    }
                })
            }

            function p() {
                var t = I.get();
                t.active && x.publish("focus-input")
            }

            function f() {
                var t = I.get();
                t.active && x.publish("disable-input")
            }

            function m() {
                var t = I.get();
                t.active && x.publish("enable-input")
            }

            function v() {
                I.set({
                    DEBUG: !0
                })
            }

            function b() {
                return new window.Promise(function(t) {
                    var e = I.get();
                    e.active && (L.removeStyles(e.root, e.chatStyleID, e.chatID), e.root && e.onResize && (B.endVisibilityCheck(), "undefined" != typeof e.originalContent && e.root && (e.root.innerHTML = e.originalContent)), x.publish("destroy"), x.destroy(), I.destroy()), t()
                })
            }

            function g() {
                return console.warn("The IBMChat.restart method is deprecated. Use IBMChat.clear() instead."), new window.Promise(function(t, e) {
                    var n = I.get();
                    b().then(function() {
                        setTimeout(function() {
                            i({
                                el: n.root,
                                botID: n.botID,
                                baseURL: n.baseURL
                            }).then(function() {
                                t()
                            })["catch"](function(t) {
                                e(t)
                            })
                        }, 10)
                    })["catch"](function(t) {
                        e(t)
                    })
                })
            }
            var y = n(76),
                x = n(1),
                C = n(59),
                _ = n(5),
                I = n(2),
                w = n(55),
                B = n(4),
                M = n(8),
                E = n(6),
                L = n(9),
                S = L.defaultStyles,
                k = {},
                A = [];
            t.exports = {
                profile: M,
                init: i,
                registerLayout: a,
                send: s,
                receive: c,
                sendMock: l,
                sendSilently: u,
                enableCustomInputHandler: d,
                disableCustomInputHandler: h,
                focusInput: p,
                disableInput: f,
                enableInput: m,
                subscribe: x.subscribe,
                subscribeOnce: x.subscribeOnce,
                publish: x.publish,
                debug: v,
                destroy: b,
                restart: g,
                currentSubscriptions: x.currentSubscriptions,
                hasSubscription: x.hasSubscription,
                completeEvent: x.completeEvent,
                state: I,
                context: w,
                clear: function() {
                    x.publish("reset")
                }
            }
        }, function(t, e, n) {
            function r(t) {
                i.set({
                    context: t
                })
            }

            function o() {
                var t = i.get();
                return t.context
            }
            var i = n(2);
            t.exports = {
                set: r,
                get: o
            }
        }, function(t, e, n) {
            function r(t) {
                var e = o.get(),
                    n = "chatID-",
                    r = e.root.className.split(" ").filter(function(t) {
                        return 0 !== t.lastIndexOf(n, 0)
                    });
                o.set({
                    chatID: t
                }), e.root.className = r.join(" ").trim(), e.root.classList.add(n + t)
            }
            var o = n(2);
            t.exports = r
        }, function(t, e, n) {
            function r() {
                var t = o.get();
                o.set({
                    messages: []
                }), t.root.classList.add("chatID-" + t.chatID), t.input.value = "", t.inputClone.textContent = a("prompt"), t.chatHolder.innerHTML = "", i.publish("resize-input"), i.publish("resize")
            }
            var o = n(2),
                i = n(1),
                a = n(3);
            t.exports = r
        }, function(t, e, n) {
            function r() {
                setTimeout(function() {
                    var t = c.get(),
                        e = t.root.querySelector(".IBMChat-loading-container");
                    e && t.chatHolder.removeChild(e), c.set({
                        errorCount: 0
                    })
                }, 0)
            }

            function o(t) {
                setTimeout(function() {
                    console.error(t);
                    var e, n = c.get();
                    e = t.status && u[t.status] ? u[t.status]() : u.basic();
                    var r = n.errorCount || 0;
                    s.publish("enable-loading", e), c.set({
                        errorCount: r + 1
                    }), s.publish("enable-retry")
                }, 0)
            }

            function i() {
                setTimeout(function() {
                    var t = c.get(),
                        e = t.errorCount,
                        n = t.root.querySelector(".IBMChat-loading-retry-message"),
                        r = t.root.querySelector(".IBMChat-loading"),
                        o = t.root.querySelector(".IBMChat-loading-failure-message"),
                        i = o.querySelector(".IBMChat-watson-message");
                    if (e > 4) {
                        var a = l("loading_failure1");
                        t.chatID ? s.publish("enable-input") : (a = l("loading_failure2"), s.publish("disable-input")), r.classList.add("IBMChat-hidden"), i.innerHTML = a, o.classList.remove("IBMChat-hidden"), s.publish("scroll-to-bottom"), c.set({
                            sendQueue: [],
                            inProgress: !1
                        })
                    } else 0 !== e && (o.classList.add("IBMChat-hidden"), n.classList.remove("IBMChat-hidden"), setTimeout(function() {
                        s.publish("retry")
                    }, 5e3))
                }, 0)
            }

            function a(t) {
                s.publish("layout:error", t)
            }
            var s = n(1),
                c = n(2),
                l = n(3),
                u = {
                    basic: function() {
                        return l("basic_err")
                    }
                };
            t.exports = {
                httpError: o,
                retry: i,
                clearError: r,
                tryIt: a
            }
        }, function(t, e, n) {
            var r = n(68),
                o = n(63),
                i = n(61),
                a = n(67),
                s = n(66),
                c = n(65),
                l = n(60),
                u = n(58),
                d = n(64),
                h = n(69),
                p = n(57),
                f = n(62),
                m = n(56);
            t.exports = {
                resize: o,
                start: r,
                clear: p,
                send: a,
                sendMock: s,
                receive: i,
                input: l,
                error: u,
                scrollToBottom: d,
                sendInputMessage: c,
                tryIt: h,
                chatID: m,
                reset: f
            }
        }, function(t, e, n) {
            function r() {
                var t = c.get();
                c.set({
                    disableInput: !1
                }), t.input.removeAttribute("disabled")
            }

            function o() {
                var t = c.get();
                c.set({
                    disableInput: !0
                }), t.input.setAttribute("disabled", "disabled")
            }

            function i(t) {
                var e, n;
                setTimeout(function() {
                    e = c.get(), t = t || h("thinking"), n = e.root.querySelector(".IBMChat-loading-container"), n && e.chatHolder.removeChild(n)
                }, 0), setTimeout(function() {
                    e.chatHolder.innerHTML += u.compile(d.loading, {
                        retryAttempt: h("reconnect")
                    })
                }, 0), setTimeout(function() {
                    n = e.root.querySelector(".IBMChat-loading");
                    var r = e.root.querySelector(".IBMChat-loading-message-text");
                    n.classList.remove("IBMChat-hidden"), r.textContent = t, l.publish("resize")
                }, 0)
            }

            function a() {
                setTimeout(function() {
                    var t = c.get(),
                        e = t.root.querySelector(".IBMChat-loading-container");
                    e && t.chatHolder.removeChild(e), l.publish("resize")
                }, 0)
            }

            function s() {
                var t = c.get();
                t.input.focus()
            }
            var c = n(2),
                l = n(1),
                u = n(4),
                d = n(7),
                h = n(3);
            t.exports = {
                enableInput: r,
                disableInput: o,
                enableLoadingInput: i,
                disableLoadingInput: a,
                focusInput: s
            }
        }, function(t, e, n) {
            function r(t, e, n) {
                var r = t.message;
                if (r && r.action && r.action.name) {
                    var o = "action:" + r.action.name;
                    u.hasSubscription(o) ? (u.publish(o, t, u.completeEvent), n && console.log("Call to " + o)) : (n && console.warn("Nothing is subscribed to " + o), e && u.publish("try-it-action-subscription", o))
                }
                u.publish("enable-input"), u.publish("disable-loading"), u.publish("scroll-to-bottom"), d.isVisible() && u.publish("focus-input")
            }

            function o(t, e, n) {
                var r = t.message;
                if (r && r.layout && r.layout.name) {
                    var o = "layout:" + r.layout.name;
                    u.hasSubscription(o) ? setTimeout(function() {
                        u.publish(o, t), n && console.log("Call to " + o)
                    }, 10) : (n && console.warn("Nothing is subscribed to " + o), e && u.publish("try-it-layout-subscription", o))
                }
            }

            function i(t) {
                var e = t.message,
                    n = function(t) {
                        return !(!t || !t.log_data) && (t.log_data.wva_top_intent && "object" == typeof t.log_data.wva_top_intent && t.log_data.wva_top_intent.intent ? t.log_data.wva_top_intent.intent : !!(t.log_data.intents && t.log_data.intents.length > 0 && t.log_data.intents[0].intent) && t.log_data.intents[0].intent)
                    },
                    r = n(e);
                e && e.log_data && e.log_data.show_intent_link === !0 && r && u.publish("try-it-get-intent-data", {
                    element: t.intentElement,
                    intent: r
                })
            }

            function a(t) {
                setTimeout(function() {
                    s(t)
                }, 0)
            }

            function s(t) {
                var e = "string" == typeof t ? {
                    message: {
                        text: t
                    }
                } : t;
                e = c.parse(e);
                var n = l.get();
                l.set({
                    messages: [].concat(n.messages || [], e),
                    errorCount: 0
                });
                var a = e.message,
                    s = a && a.text ? Array.isArray(a.text) && a.text.length > 0 ? a.text : [a.text] : [""],
                    u = [],
                    f = [],
                    m = [],
                    v = [],
                    b = [],
                    g = document.createElement("div");
                g.classList.add("IBMChat-watson-turn"), n.chatHolder.appendChild(g);
                for (var y = 0; y < s.length; y++) {
                    var x = document.createElement("div"),
                        C = h({}, e, {
                            uuid: d.getUUID()
                        });
                    if (x.classList.add(C.uuid), x.innerHTML = p.receive, u.push(x.querySelector(".IBMChat-watson-message-container")), f.push(document.createElement("div")), m.push(document.createElement("div")), m[y].classList.add("IBMChat-watson-layout"), v.push(document.createElement("div")), v[y].classList.add("IBMChat-watson-intent"), s[y] && s[y].length > 0 || a && a.layout && a.layout.name && y === s.length - 1) {
                        var _ = document.createElement("div");
                        _.classList.add("IBMChat-watson-message-line"), u[y].appendChild(_), f[y].classList.add("IBMChat-watson-message"), d.writeMessage(f[y], s[y])
                    }
                    g.appendChild(x), u[y].appendChild(f[y]), u[y].appendChild(v[y]), u[y].appendChild(m[y]), C.element = u[y], C.layoutElement = m[y], C.msgElement = f[y], C.intentElement = v[y], b.push(C), n.tryIt && y === s.length - 1 && i(b[y]), a && a.layout && (void 0 !== a.layout.index && a.layout.index == y || void 0 === a.layout.index && y == s.length - 1) && o(b[y], n.tryIt, n.DEBUG), y === s.length - 1 && r(b[y], n.tryIt, n.DEBUG)
                }
            }
            var c = n(5),
                l = n(2),
                u = n(1),
                d = n(4),
                h = n(6),
                p = n(7);
            t.exports = a
        }, function(t, e, n) {
            function r() {
                return i.publish("clear-error"), i.publish("clear"), i.publish("scroll-to-bottom"), i.publish("enable-loading"), new window.Promise(function(t, e) {
                    var n = o.get(),
                        r = s.getSDKConfig(n);
                    s.checkRoot(n.root) || e({
                        error: "Element for chat does not exist!"
                    }), n.botID || e({
                        error: "BotID is required!"
                    }), a.configure(r).start(n.botID).then(function(t) {
                        i.publish("chatID", t.chatID), i.publish("receive", t)
                    })["catch"](function(t) {
                        i.publish("httpError", t)
                    }).then(function() {
                        setTimeout(function() {
                            t()
                        }, 0)
                    })
                })
            }
            var o = n(2),
                i = n(1),
                a = n(5),
                s = n(4);
            t.exports = r
        }, function(t, e, n) {
            function r(t) {
                return Math.floor(window.getComputedStyle(t).getPropertyValue("height").replace("px", ""))
            }

            function o() {
                clearTimeout(a), a = setTimeout(function() {
                    a = null, i()
                }, 150)
            }

            function i() {
                var t = s.get();
                if (t.isVisible && t.active) {
                    var e = 35,
                        n = {},
                        o = 0,
                        i = 0,
                        a = 0,
                        u = 0,
                        d = t.root.clientHeight,
                        h = t.root.clientWidth,
                        p = d * (e / 100),
                        f = p > 96 ? p : 96,
                        m = t.input ? r(t.inputClone) : null,
                        v = t.input ? r(t.input) : 0,
                        b = t.input && t.input.value && t.input.value.length > 0 ? t.input.value.replace(/\n/g, "<br />") : "Enter message...",
                        g = t.input ? t.inputClone.innerHTML : null,
                        y = function() {
                            return void 0 === n.chatHolderHeight && void 0 === n.containerHeight || c.publish("scroll-to-bottom"), void 0 !== n.rootWidth || void 0 !== n.chatHolderHeight || void 0 !== n.rootHeight || void 0 !== n.isLarge || void 0 !== n.containerHeight || void 0 !== n.inputHeight
                        };
                    setTimeout(function() {
                        t.rootHeight !== d && (l && console.log("New Root Height:", d), n.rootHeight = d), t.rootWidth !== h && (l && console.log("New Root Width:", h), n.rootWidth = h, t.chat.style.width = h + "px", n.rootWidth = h)
                    }, 0), setTimeout(function() {
                        t.input && (g !== b && (t.inputClone.textContent = b, m = r(t.inputClone)), t.inputHeight !== m && (l && console.log("Input height does not match:", t.inputHeight, v), v = f > m ? m : f), t.inputHeight !== v && (l && console.log("New Input Height:", t.inputHeight, v), t.input.style.height = v + "px", n.inputHeight = v))
                    }, 0), setTimeout(function() {
                        t.input && (u = r(t.inputContainer)), i = r(t.chatHolder), a = i, l && console.log("chatHolderHeight", i, "rootHeight", d, "inputHolderHeight", u), o = Math.floor(d - u), i < o ? (i = "auto", a = o + "px") : (i = o + "px", a = i), t.containerHeight !== o && (l && console.log("New Container Height:", o), t.innerContainer.style.height = o + "px", n.containerHeight = o), t.chatHolderHeight === i && t.chatHolderMaxHeight === a || (l && (console.log("New Chat Holder Height: " + i), console.log("New Chat Holder Max Height: " + a)), n.chatHolderHeight = i, n.chatHolderMaxHeight = a, t.chatHolder.style.height = i, t.chatHolder.style.maxHeight = a), h >= 480 ? (t.root.classList.add("IBMChat-isLarge"), t.isLarge || (n.isLarge = !0)) : (t.root.classList.remove("IBMChat-isLarge"), t.isLarge && (n.isLarge = !1)), y() && s.set(n)
                    }, 0)
                }
            }
            var a, s = n(2),
                c = n(1),
                l = !1;
            t.exports = o
        }, function(t, e, n) {
            function r() {
                setTimeout(function() {
                    var t = 300,
                        e = Date.now(),
                        n = e + t,
                        r = o.get(),
                        a = r.chatHolder.scrollTop,
                        s = a,
                        c = r.chatHolder.scrollHeight - a,
                        l = setInterval(function() {
                            var t = Date.now();
                            if (r.chatHolder.scrollTop != s) return void clearInterval(l);
                            if (t >= n) return clearInterval(l), void(r.chatHolder.scrollTop = r.chatHolder.scrollHeight);
                            if (r.chatHolder.scrollTop == r.chatHolder.scrollHeight) return void clearInterval(l);
                            var o = i(e, n, t),
                                u = Math.round(a + c * o);
                            r.chatHolder.scrollTop = u, s = r.chatHolder.scrollTop
                        }, 0)
                }, 100)
            }
            var o = n(2),
                i = function(t, e, n) {
                    if (n <= t) return 0;
                    if (n >= e) return 1;
                    var r = (n - t) / (e - t);
                    return r * r * (3 - 2 * r)
                };
            t.exports = r
        }, function(t, e, n) {
            function r() {
                var t = o.get();
                if (!t.inProgress && !t.disableInput) {
                    var e = t.root.querySelector(".IBMChat-chat-textbox").value.trim().replace(/(\r\n|\n|\r)/gm, "");
                    i.publish("send", {
                        text: e
                    }), e = ""
                }
            }
            var o = n(2),
                i = n(1);
            t.exports = r
        }, function(t, e, n) {
            function r(t) {
                setTimeout(function() {
                    o(t)
                }, 0)
            }

            function o(t) {
                if (t.text && t.text.length > 0) {
                    var e = i.get(),
                        n = c({}, t, {
                            uuid: s.getUUID()
                        });
                    e.chatHolder.innerHTML += s.compile(l.send, {
                        "data.uuid": n.uuid
                    }), e.chatHolder.querySelector("#" + n.uuid + " .IBMChat-user-message").textContent = t.text, a.publish("resize"), a.publish("scroll-to-bottom")
                }
            }
            var i = n(2),
                a = n(1),
                s = n(4),
                c = n(6),
                l = n(7);
            t.exports = r
        }, function(t, e, n) {
            function r(t) {
                setTimeout(function() {
                    o(t)
                }, 0)
            }

            function o(t) {
                if (t && t.text && t.text.length > 0) {
                    var e = d.get();
                    i(t), e.inProgress || l()
                }
            }

            function i(t) {
                var e = d.get(),
                    n = e.sendQueue || [],
                    r = n.slice(0);
                r.push(t), d.set({
                    sendQueue: r
                })
            }

            function a(t, e) {
                var n = d.get();
                d.set({
                    errorCount: 0,
                    sendQueue: n.sendQueue.slice(1, n.sendQueue.length),
                    messages: t ? [].concat(n.messages || [], t) : n.messages,
                    inProgress: !1
                }), e && h.publish("receive", e), h.publish("error-clear"), h.publish("disable-loading"), h.publish("scroll-to-bottom"), d.get().sendQueue.length > 0 && l()
            }

            function s() {
                h.publish("httpError", arguments)
            }

            function c(t, e) {
                function n(t) {
                    var e = Date.now(),
                        n = e - o,
                        r = 1e3 * i,
                        a = r - n;
                    a > 0 ? setTimeout(function() {
                        t()
                    }, a) : t()
                }
                var r = d.get(),
                    o = Date.now(),
                    i = r.minSeconds;
                e || h.publish("enable-loading"), h.publish("focus-input"), p.send(r.botID, r.chatID, t.text, r.context).then(function(e) {
                    n(function() {
                        a(t, e)
                    })
                })["catch"](function(t) {
                    n(function() {
                        s(t)
                    })
                })
            }

            function l(t) {
                var e = d.get(),
                    n = m({}, e.sendQueue[0], {
                        uuid: f.getUUID()
                    }),
                    r = n.label || n.text || "";
                d.set({
                    inProgress: !0
                }), e.root.querySelector(".IBMChat-chat-textbox").value = "", n.silent || t || (e.chatHolder.innerHTML += f.compile(v.send, {
                    "data.uuid": n.uuid
                }), e.chatHolder.querySelector("#" + n.uuid + " .IBMChat-user-message").textContent = r, h.publish("scroll-to-bottom")), e.handleInput["default"] ? c(n, t) : e.handleInput.context ? e.handleInput.callback.bind(e.handleInput.context, n.text, a, s) : e.handleInput.callback(n.text, a, s)
            }

            function u() {
                var t = d.get();
                t.sendQueue && t.sendQueue.length > 0 ? l(!0) : h.publish("reset")
            }
            var d = n(2),
                h = n(1),
                p = n(5),
                f = n(4),
                m = n(6),
                v = n(7);
            t.exports = {
                send: r,
                retry: u
            }
        }, function(t, e, n) {
            function r(t) {
                var e;
                o.set(t), e = o.get(), a.attachStyles(), e.root.classList.add(e.chatStyleID), e.root.innerHTML = c.start;
                var n = {
                    chat: e.root.querySelector(".IBMChat"),
                    outerContainer: e.root.querySelector(".IBMChat-outer-container"),
                    container: e.root.querySelector(".IBMChat-chat-container"),
                    chatHolder: e.root.querySelector(".IBMChat-messages"),
                    innerContainer: e.root.querySelector(".IBMChat-inner-container")
                };
                if (e.playback !== !0) {
                    var r = document.createElement("div");
                    r.classList.add("IBMChat-input-container"), r.classList.add("IBMChat-input-container-theme"), r.innerHTML = i.compile(c.input, {
                        placeholder: l("prompt")
                    }), n.outerContainer.appendChild(r), n.inputHolder = e.root.querySelector(".IBMChat-input-container form"), n.inputContainer = e.root.querySelector(".IBMChat-chat-text-container"), n.input = e.root.querySelector(".IBMChat-chat-textbox"), n.inputClone = e.root.querySelector(".IBMChat-chat-textbox-clone"), n.form = e.root.querySelector(".IBMChat-input-form"), n.form.addEventListener("submit", function(t) {
                        t.preventDefault()
                    }), n.onResize = function() {
                        s.publish("resize")
                    }, e.tryIt && n.chatHolder.addEventListener("click", function(t) {
                        if (t.target.dataset) {
                            var e = t.target.dataset;
                            if (e.intent) {
                                var n = e.intent,
                                    r = o.get();
                                t.preventDefault(), r.intents && r.intents[n] ? s.publish("try-it-show-intent", r.intents[n]) : console.error("Intent index is undefined", r.intents, n)
                            } else e["private"] && s.publish("try-it-show-private", e["private"])
                        }
                    }), n.chatHolder.addEventListener("click", function(t) {
                        t.target.dataset && t.target.dataset.retry && (s.publish("error-clear"), setTimeout(function() {
                            s.publish("enable-loading"), s.publish("reset")
                        }, 0))
                    }), n.input.addEventListener("keydown", function(t) {
                        var e = o.get();
                        13 === t.keyCode && (t.preventDefault(), e.inProgress || (s.publish("send-input-message"), n.inputClone.innerHTML = "", n.input.style.overflow = "hidden", n.input.style.height = n.originalInputHeight + "px", o.set({
                            inputHeight: n.originalInputHeight
                        }))), s.publish("resize")
                    }), n.input.addEventListener("focus", function() {
                        s.publish("resize")
                    }), n.input.addEventListener("blur", function() {
                        s.publish("resize")
                    })
                }
                window.addEventListener("resize", function() {
                    s.publish("resize")
                }), window.addEventListener("orientationchange", function() {
                    s.publish("resize")
                }), o.setState(n), i.checkVisibility(), s.publish("resize")
            }
            var o = n(2),
                i = n(4),
                a = n(9),
                s = n(1),
                c = n(7),
                l = n(3);
            t.exports = r
        }, function(t, e, n) {
            function r(t) {
                var e = l.get(),
                    n = e.intents || [],
                    r = n.slice(0),
                    o = r.push(t);
                return l.set({
                    intents: r
                }), o - 1
            }

            function o(t) {
                s.publish("receive", {
                    message: {
                        layout: {
                            name: "error",
                            message: "A subscription was called to " + t + ". Nothing is subscribed to this action in the Try-It interface. This is probably due to you using a custom workspace. On your own site, you should have code to handle this action."
                        }
                    }
                })
            }

            function i(t) {
                s.publish("receive", {
                    message: {
                        layout: {
                            name: "error",
                            message: "A subscription was called to " + t + ". Nothing is subscribed to this layout in the Try-It interface. This is probably due to you using a custom workspace. On your own site, you should have code to handle this layout."
                        }
                    }
                })
            }

            function a(t) {
                var e = t.element,
                    n = document.createElement("label"),
                    o = document.createElement("a");
                o.setAttribute("href", "javascript:void(0)"), o.textContent = c("edit"), t["private"] ? (n.textContent = "#" + t.intent, o.setAttribute("data-private", t.intent)) : (n.textContent = t.blueprint.label, o.setAttribute("data-intent", r(t))), e.appendChild(n), e.appendChild(o)
            }
            var s = n(1),
                c = n(3),
                l = n(2);
            t.exports = {
                actionError: o,
                layoutError: i,
                intent: a
            }
        }, function(t, e, n) {
            function r(t) {
                this.init(t)
            }
            var o = n(1),
                i = n(8),
                a = o.subscribe,
                s = o.publish,
                c = n(4),
                l = n(71),
                u = n(3),
                d = "IBMChat-accent-colors",
                h = "IBMChat-accent-colors-button",
                p = "IBMChat-creditcard",
                f = [],
                m = {
                    base: n(34)
                },
                v = {
                    init: function() {
                        a("layout:cc-validator", function(t) {
                            var e = new r(t);
                            f[t.uuid] = e
                        })
                    }
                };
            r.prototype.init = function(t) {
                this.acceptedCards = t.message.data, this.uuid = t.uuid, this.parentElement = t.element, this.layoutElement = t.layoutElement, this.msgElement = t.msgElement, this.formData = {}, this.drawForm(), this.subscribeSend = a("send", this.removeAllEventListeners.bind(this)), s("disable-input")
            }, r.prototype.drawForm = function() {
                var t = m.base;
                this.el = document.createElement("div"), t = c.compile(m.base, {
                    ns: p,
                    uuid: c.getUUID(),
                    cc_name: u("cc_name"),
                    cc_num: u("cc_num"),
                    cc_exp_mon: u("cc_exp_mon"),
                    cc_exp_year: u("cc_exp_year"),
                    cc_code: u("cc_code"),
                    cc_code_alt: u("cc_code_alt") || u("cc_code"),
                    placeholder_mon: u("placeholder_mon"),
                    placeholder_year: u("placeholder_year"),
                    cancel: u("cancel"),
                    submit: u("submit")
                }), this.el.innerHTML = t, this.layoutElement.appendChild(this.el), this.cancelButton = this.el.querySelector(".IBMChat-form-cancel"), this.submitButton = this.el.querySelector(".IBMChat-form-submit"), this.cancelButton.classList.add(h), this.submitButton.classList.add(h), this.formElements = {}, this.fields = this.el.querySelectorAll("input");
                for (var e = 0; e < this.fields.length; e++) {
                    var n = this.fields[e],
                        r = n.getAttribute("name");
                    this.formElements[r] = n
                }
                this.formElements.cc_full_name.focus(), this.addListeners()
            }, r.prototype.addError = function(t, e) {
                var n, r;
                "cc_exp_date" === t ? (n = this.formElements.cc_exp_date_month, n.setAttribute("aria-invalid", !0), n.dataset.valid = !1, n = this.formElements.cc_exp_date_year, n.setAttribute("aria-invalid", !0), n.dataset.valid = !1) : (n = this.formElements[t], n.setAttribute("aria-invalid", !0), n.dataset.valid = !1), r = this.el.querySelector('[data-validation-for="' + t + '"]'), r.style.display = "block", r.dataset.valid = !1, r.textContent = e
            }, r.prototype.removeError = function(t) {
                var e, n;
                "cc_exp_date" === t ? (e = this.formElements.cc_exp_date_month, e.removeAttribute("aria-invalid"), e.dataset.valid = !0, e = this.formElements.cc_exp_date_year, e.removeAttribute("aria-invalid"), e.dataset.valid = !0) : (e = this.formElements[t], e.removeAttribute("aria-invalid"), e.dataset.valid = !0), n = this.el.querySelector('[data-validation-for="' + t + '"]'), n.style.display = "none", n.dataset.valid = !0, n.textContent = ""
            }, r.prototype.validate_cc_full_name = function(t) {
                return 0 === this.formData.cc_full_name.trim().length ? (this.addError("cc_full_name", u("required_field")), t && this.formElements.cc_full_name.focus(), t = !1) : this.removeError("cc_full_name"), t
            }, r.prototype.validate_cc_number = function(t) {
                var e = l.validateCard(this.acceptedCards, this.formData.cc_number, this.formElements.cc_number);
                return e.valid ? this.removeError("cc_number") : (this.addError("cc_number", e.message), t && this.formElements.cc_number.focus(), t = !1), t
            }, r.prototype.validate_cc_exp_date = function(t) {
                var e = l.validateExp(this.formData.cc_exp_date_month, this.formData.cc_exp_date_year);
                return e.valid ? this.removeError("cc_exp_date") : (this.addError("cc_exp_date", e.message), t && this.formElements.cc_exp_date_month.focus(), t = !1), t
            }, r.prototype.validate_cc_code = function(t) {
                var e = l.validateCVV(this.formData.cc_code);
                return e.valid ? this.removeError("cc_code") : (this.addError("cc_code", e.message), t && this.formElements.cc_code.focus(), t = !1), t
            }, r.prototype.validate = function() {
                var t = !0;
                return t = this.validate_cc_full_name(t), t = this.validate_cc_number(t), t = this.validate_cc_exp_date(t), t = this.validate_cc_code(t)
            }, r.prototype.preprocessFormData = function() {
                this.formData = {};
                for (var t = 0; t < this.fields.length; t++) {
                    var e = this.fields[t],
                        n = e.getAttribute("name");
                    "cc_exp_date_month" === n && /^[1-9]$/.test(e.value) && (e.value = "0" + e.value), this.formData[n] = e.value
                }
            }, r.prototype.handleKeyup = function(t) {
                var e = t.target,
                    n = {
                        cc_full_name: this.validate_cc_full_name,
                        cc_number: this.validate_cc_number,
                        cc_exp_date_month: this.validate_cc_exp_date,
                        cc_exp_date_year: this.validate_cc_exp_date,
                        cc_code: this.validate_cc_code
                    },
                    r = e.getAttribute("name");
                13 === t.keyCode ? (t.preventDefault(), this.handleSubmit()) : "false" == e.dataset.valid && "function" == typeof n[r] && (this.formData[r] = e.value, n[r].call(this, !1))
            }, r.prototype.handleSubmit = function() {
                if (this.preprocessFormData(), this.validate()) {
                    var t = this.formData;
                    t.cc_exp_date = t.cc_exp_date_month + "/" + t.cc_exp_date_year, t.cc_last_four_digits = t.cc_number.substr(t.cc_number.length - 4), Object.keys(t).map(function(e) {
                        i.set(e, t[e])
                    }), this.submitButton.classList.remove(h), this.submitButton.classList.add(d), s("enable-input"), s("send", {
                        silent: !0,
                        text: "success"
                    })
                }
            }, r.prototype.handleCancel = function() {
                this.cancelButton.classList.remove(h), this.cancelButton.classList.add(d), s("enable-input"), s("send", {
                    silent: !0,
                    text: "cancel"
                })
            }, r.prototype.addListeners = function() {
                this.cancelButton.addEventListener("click", this.handleCancel.bind(this)), this.submitButton.addEventListener("click", this.handleSubmit.bind(this));
                for (var t = 0; t < this.fields.length; t++) this.fields[t].addEventListener("keyup", this.handleKeyup.bind(this))
            }, r.prototype.removeAllEventListeners = function() {
                this.cancelButton.removeEventListener("click", this.handleCancel.bind(this)), this.cancelButton.setAttribute("disabled", !0), this.submitButton.removeEventListener("click", this.handleSubmit.bind(this)), this.submitButton.setAttribute("disabled", !0);
                for (var t = 0; t < this.fields.length; t++) {
                    var e = this.fields[t];
                    e.removeEventListener("keyup", this.handleKeyup.bind(this)), e.setAttribute("disabled", !0)
                }
                this.subscribeSend.remove()
            }, t.exports = v
        }, function(t, e, n) {
            function r() {
                for (var t = 0; t < h.acceptedCards.length; t++)
                    for (var e = f[h.acceptedCards[t]], n = 0; n < e.prefixes.length; n++) {
                        var r = e.prefixes[n].toString();
                        if (h.cardNumber.substring(0, r.length) === r) return h.cardType = h.acceptedCards[t], !0
                    }
                return !1
            }

            function o() {
                for (var t, e = 0, n = 1, r = h.cardNumber.length - 1; r >= 0; r--) t = Number(h.cardNumber.charAt(r)) * n, t > 9 && (e += 1, t -= 10), e += t, n = 1 == n ? 2 : 1;
                return e % 10 == 0
            }

            function i(t) {
                return {
                    message: t,
                    valid: !1
                }
            }

            function a() {
                return {
                    valid: !0
                }
            }

            function s(t, e, n) {
                if (h.acceptedCards = t || [], h.cardNumber = e.replace(/\D/g, ""), 0 === e.length) return i(p.required());
                if (0 === h.cardNumber.length) return i(p.invalid());
                if (!r()) return i(h.acceptedCards.indexOf(h.cardType) === -1 ? p.acceptedCard() : p.invalid());
                if (f[h.cardType].lengths.indexOf(h.cardNumber.length) === -1) return i(p.invalid());
                if (o() === !1) return i(p.invalid());
                var s = a();
                return s && h.cardNumber !== e && n && (n.value = h.cardNumber), s
            }

            function c(t, e) {
                var n = /^(0[1-9]|1[012])$/,
                    r = /^(20)[0-9][0-9]$/,
                    o = new Date,
                    s = o.getMonth() + 1,
                    c = o.getFullYear();
                if (0 === t.length || 0 === e.length) return i(p.invalidExpiration());
                var l = !t.match(n) || !e.match(r);
                t = parseInt(t, 10), e = parseInt(e, 10);
                var u = e > c + 20 || e < c,
                    d = e === c && t < s;
                return l || u || d ? i(p.invalidExpiration()) : a()
            }

            function l(t) {
                var e = /^[0-9]{3,4}$/;
                return 0 === t.length ? i(p.invalidCvv()) : t.match(e) ? a() : i(p.invalidCvv())
            }
            var u, d = n(3),
                h = {
                    acceptedCards: [],
                    cardNumber: "",
                    cardType: ""
                },
                p = {
                    required: function() {
                        return d("required_field")
                    },
                    acceptedCard: function() {
                        var t = d("cc_use_valid");
                        return t += h.acceptedCards.map(function(t) {
                            return f[t].human
                        }).join(d("list_sep"))
                    },
                    invalid: function() {
                        return d("cc_invalid")
                    },
                    invalidExpiration: function() {
                        return d("cc_invalid_exp")
                    },
                    invalidCvv: function() {
                        return d("cc_invalid_code")
                    }
                },
                f = {
                    visa: {
                        human: "Visa",
                        prefixes: [4],
                        lengths: [13, 16, 19]
                    },
                    mastercard: {
                        human: "MasterCard",
                        prefixes: [51, 52, 53, 54, 55],
                        lengths: [16]
                    },
                    amex: {
                        human: "American Express",
                        prefixes: [34, 37],
                        lengths: [15]
                    },
                    discover: {
                        human: "Discover",
                        prefixes: [6011, 65],
                        lengths: [16, 19]
                    }
                };
            for (u = 2221; u <= 2720; u++) f.mastercard.prefixes.push(u);
            for (u = 622126; u <= 622925; u++) f.discover.prefixes.push(u);
            for (u = 644; u <= 649; u++) f.discover.prefixes.push(u);
            t.exports = {
                validateCard: s,
                validateExp: c,
                validateCVV: l,
                cardData: f
            }
        }, function(t, e, n) {
            function r(t) {
                this.init(t)
            }
            var o = n(1),
                i = o.subscribe,
                a = o.publish,
                s = n(4),
                c = n(3),
                l = "IBMChat-islocationapi",
                u = [],
                d = {
                    init: function() {
                        i("layout:choose-location-type", function(t) {
                            var e = new r(t);
                            u[t.uuid] = e
                        })
                    }
                },
                h = {
                    base: n(35)
                };
            r.prototype = {
                init: function(t) {
                    this.data = t.data, this.uuid = t.uuid;
                    var e = this.getButtonLabel(t.message, "postalcode");
                    if ("navigator" in window && "geolocation" in navigator) {
                        this.eventListeners = [], this.parentElement = t.element, this.layoutElement = t.layoutElement, this.el = document.createElement("div"), this.el.innerHTML = s.compile(h.base, {
                            ns: l,
                            loc_curr: this.getButtonLabel(t.message, "latlong"),
                            postal_code: e
                        }), this.layoutElement.appendChild(this.el), this.buttons = this.layoutElement.querySelectorAll("button"), this.buttons[0].focus();
                        for (var n = 0; n < this.buttons.length; n++) this.buttons[n].dataset.uuid = this.uuid, this.buttons[n].addEventListener("click", this.handleClick), this.eventListeners.push(this.buttons[n]);
                        this.eventListeners.length > 0 && (this.subscribeSend = i("send", this.removeAllEventListeners.bind(this)))
                    } else a("send", {
                        silent: !0,
                        text: e
                    })
                },
                getButtonLabel: function(t, e) {
                    if ("undefined" != typeof t.layout.latlongIdx) {
                        var n = t.layout.latlongIdx;
                        return "latlong" !== e && (n = 0 === n ? 1 : 0), t.inputvalidation.oneOf[n]
                    }
                    return c("latlong" === e ? "loc_curr" : "postal_code")
                },
                handleClick: function() {
                    a("send", {
                        silent: !0,
                        text: this.dataset.input
                    }), a("focus-input")
                },
                removeAllEventListeners: function() {
                    if (this.eventListeners.length > 0) {
                        for (var t = 0; t < this.eventListeners.length; t++) this.eventListeners[t].removeEventListener("click", this.handleClick), this.eventListeners[t].setAttribute("disabled", !0);
                        this.eventListeners = []
                    }
                    this.subscribeSend.remove()
                }
            }, t.exports = d
        }, function(t, e, n) {
            function r(t) {
                this.init(t)
            }
            var o = n(1),
                i = o.subscribe,
                a = o.publish,
                s = n(4),
                c = n(3),
                l = "IBMChat-choose",
                u = "IBMChat-accent-colors",
                d = "IBMChat-accent-colors-button",
                h = [],
                p = {
                    button: n(36),
                    submit: n(37)
                },
                f = {
                    init: function() {
                        i("layout:choose", function(t) {
                            var e = new r(t);
                            h[t.uuid] = e
                        }), i("layout:confirm", function(t) {
                            var e = new r(t);
                            h[t.uuid] = e
                        })
                    }
                };
            r.prototype.init = function(t) {
                this.allowMultiple = void 0 !== t.message.inputvalidation.someOf, this.values = [], this.data = this.allowMultiple ? t.message.inputvalidation.someOf : t.message.inputvalidation.oneOf, this.uuid = t.uuid, this.parentElement = t.element, this.layoutElement = t.layoutElement, this.msgElement = t.msgElement, this.drawButtons(), this.subscribeSend = i("send", this.removeAllEventListeners.bind(this))
            }, r.prototype.eventListeners = [], r.prototype.drawButtons = function() {
                var t = p.button;
                this.el = document.createElement("div"),
                    this.el.classList.add(l + "-container");
                for (var e = 0; e < this.data.length; e++) {
                    var n = this.data[e],
                        r = document.createElement("div");
                    r.classList.add(l + "-option");
                    var o, i = s.compile(t, {
                        text: n
                    });
                    r.innerHTML = i, this.el.appendChild(r), o = r.querySelector("button"), o.setAttribute("data-uuid", this.uuid), o.classList.add(d), this.addListener(o)
                }
                if (this.allowMultiple) {
                    var a = document.createElement("div"),
                        h = s.compile(p.submit, {
                            text: c("submit")
                        });
                    a.classList.add(l + "-submit"), a.innerHTML = h, this.submitButton = a.querySelector("button"), this.submitButton.classList.add(u), this.submitButton.setAttribute("disabled", !0), this.el.appendChild(a), this.addSubmitListener(this.submitButton)
                }
                this.layoutElement.appendChild(this.el), this.layoutElement.querySelectorAll("button")[0].focus()
            }, r.prototype.handleClick = function(t) {
                var e = t.target;
                e.classList.add(u), e.classList.add("IBMChat-accent-colors"), a("send", {
                    silent: !0,
                    text: e.dataset.input
                })
            }, r.prototype.handleMultiClick = function(t) {
                var e, n = t.target,
                    r = h[n.dataset.uuid];
                s.hasClass(n, u) ? (n.classList.add(d), n.classList.remove(u)) : (n.classList.add(u), n.classList.remove(d)), e = r.el.querySelectorAll("." + l + "-option ." + u), e.length > 0 ? r.submitButton.removeAttribute("disabled") : r.submitButton.setAttribute("disabled", !0)
            }, r.prototype.handleSubmit = function() {
                for (var t = this.el.querySelectorAll("." + u), e = 0; e < t.length; e++) this.values.push(t[e].dataset.input);
                a("send", {
                    silent: !0,
                    text: this.values.toString().slice(0, -1)
                })
            }, r.prototype.addListener = function(t) {
                var e = this.allowMultiple ? this.handleMultiClick : this.handleClick;
                t.addEventListener("click", e.bind(this)), this.eventListeners.push({
                    el: t,
                    cb: e
                })
            }, r.prototype.addSubmitListener = function(t) {
                var e = this.handleSubmit.bind(this);
                t.addEventListener("click", e), this.eventListeners.push({
                    el: t,
                    cb: e
                })
            }, r.prototype.removeAllEventListeners = function() {
                var t = this.eventListeners;
                if (t.length > 0) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e];
                        n.el.removeEventListener("click", n.cb), n.el.setAttribute("disabled", !0)
                    }
                    this.eventListeners = [], this.subscribeSend.remove()
                }
            }, t.exports = f
        }, function(t, e, n) {
            function r(t) {
                this.init(t)
            }
            var o = n(1),
                i = [],
                a = "IBMChat-error",
                s = {
                    init: function() {
                        o.subscribe("layout:error", function(t) {
                            var e = new r(t);
                            i[t.uuid] = e
                        })
                    }
                },
                c = {
                    base: n(38)
                };
            r.prototype.init = function(t) {
                this.message = t.message.layout.message, this.uuid = t.uuid, this.parentElement = t.element, this.layoutElement = t.layoutElement, this.layoutElement.innerHTML = c.base, this.layoutElement.querySelector("." + a).textContent = this.message
            }, t.exports = s
        }, function(t, e, n) {
            function r(t) {
                this.init(t)
            }
            var o = n(1),
                i = n(8),
                a = n(4),
                s = n(3),
                c = o.subscribe,
                l = o.publish,
                u = "IBMChat-form",
                d = "IBMChat-accent-colors",
                h = "IBMChat-accent-colors-button",
                p = {
                    base: n(39),
                    field: n(40)
                },
                f = [],
                m = {
                    init: function() {
                        c("layout:form", function(t) {
                            var e = new r(t);
                            f[t.uuid] = e
                        })
                    }
                };
            r.prototype.init = function(t) {
                this.data = t.message.store || [], this.action = t.message.action || "", this.label = t.message.layout.label || {}, this.repopulate = !!t.message.layout.repopulate, this.uuid = t.uuid, this.parentElement = t.element, this.layoutElement = t.layoutElement, this.msgElement = t.msgElement, this.drawForm(), this.subscribeSend = c("send", this.removeEventListeners.bind(this)), l("disable-input")
            }, r.prototype.drawForm = function() {
                var t, e = document.createElement("div");
                e.innerHTML = a.compile(p.base, {
                    submit: this.label.submit || s("submit"),
                    cancel: this.label.cancel || s("cancel")
                }), t = e.querySelector(".IBMChat-form-fields"), this.data.forEach(function(e, n) {
                    var r = document.createElement("div");
                    r.innerHTML = a.compile(p.field, {
                        label: e.label || "",
                        name: e.name,
                        uuid: a.getUUID(),
                        type: e.type || "text",
                        index: n,
                        value: this.repopulate ? i.get(e.name) || "" : ""
                    }), r.className = u + "-fields-row", t.appendChild(r)
                }, this), this.fields = t.querySelectorAll("input"), this.submitButton = e.querySelector("." + u + "-submit"), this.cancelButton = e.querySelector("." + u + "-cancel"), this.submitButton.classList.add(h), this.cancelButton.classList.add(h), this.layoutElement.appendChild(e), this.fields[0].focus(), this.addEventListeners()
            }, r.prototype.handleSubmit = function() {
                if (this.validateFields() === !0) {
                    for (var t = 0; t < this.fields.length; t++) i.set(this.fields[t].getAttribute("name"), this.fields[t].value || new String(""));
                    this.submitButton.classList.remove(h), this.submitButton.classList.add(d), l("send", {
                        silent: !0,
                        text: "success"
                    }), l("enable-input")
                } else this.setFocusOnError()
            }, r.prototype.setFocusOnError = function() {
                for (var t = 0; t < this.fields.length; t++) {
                    var e = this.fields[t].getAttribute("name"),
                        n = this.layoutElement.querySelector('[data-validation-for="' + e + '"]');
                    if ("false" === n.dataset.valid) {
                        this.fields[t].focus();
                        break
                    }
                }
            }, r.prototype.validateFields = function() {
                for (var t = !0, e = 0; e < this.data.length; e++) {
                    var n = this.validateField(this.fields[e], this.data[e]);
                    t = t && n
                }
                return t
            }, r.prototype.validateField = function(t, e) {
                var n = !0;
                if (t.value && 0 !== t.value.trim().length || "true" != e.required || (this.addError(t.getAttribute("name"), s("required_field")), n = !1), n === !0 && e.validations && 0 !== e.validations.length)
                    for (var r = 0; r < e.validations.length; r++) {
                        var o = e.validations[r],
                            i = o.regex,
                            a = new RegExp(i),
                            c = a.test(t.value);
                        if (!c) {
                            this.addError(t.getAttribute("name"), o.message), n = !1;
                            break
                        }
                    }
                return n
            }, r.prototype.addError = function(t, e) {
                var n = this.layoutElement.querySelector('[name="' + t + '"]');
                n.dataset.valid = !1;
                var r = this.layoutElement.querySelector('[data-validation-for="' + t + '"]');
                n.setAttribute("aria-invalid", !0), r.dataset.valid = !1, r.textContent = e, r.style.display = "block"
            }, r.prototype.removeError = function(t) {
                var e = this.layoutElement.querySelector('[name="' + t + '"]');
                e.dataset.valid = !0;
                var n = this.layoutElement.querySelector('[data-validation-for="' + t + '"]');
                e.removeAttribute("aria-invalid"), n.dataset.valid = !0, n.textContent = "", n.style.display = "none"
            }, r.prototype.removeAllErrors = function() {
                for (var t = this.layoutElement.querySelectorAll("[data-validation-for]"), e = 0; e < t.length; e++) this.removeError(t[e].attr("data-validation-for"))
            }, r.prototype.handleKeyup = function(t) {
                var e = t.target.dataset.index;
                if (13 === t.keyCode) t.preventDefault(), this.handleSubmit();
                else if ("false" === t.target.dataset.valid) {
                    var n = this.validateField(this.fields[e], this.data[e]);
                    n && this.removeError(t.target.getAttribute("name"))
                }
            }, r.prototype.handleCancel = function() {
                this.cancelButton.classList.remove(h), this.cancelButton.classList.add(d), l("enable-input"), l("send", {
                    silent: !0,
                    text: "cancel"
                })
            }, r.prototype.addEventListeners = function() {
                this.cancelButton.addEventListener("click", this.handleCancel.bind(this)), this.submitButton.addEventListener("click", this.handleSubmit.bind(this));
                for (var t = 0; t < this.fields.length; t++) {
                    var e = this.fields[t];
                    e.addEventListener("keyup", this.handleKeyup.bind(this))
                }
            }, r.prototype.removeEventListeners = function() {
                this.cancelButton.removeEventListener("click", this.handleCancel.bind(this)), this.cancelButton.setAttribute("disabled", !0), this.submitButton.removeEventListener("click", this.handleSubmit.bind(this)), this.submitButton.setAttribute("disabled", !0);
                for (var t = 0; t < this.fields.length; t++) {
                    var e = this.fields[t];
                    e.removeEventListener("keyup", this.handleKeyup.bind(this)), e.setAttribute("disabled", !0)
                }
                this.subscribeSend.remove()
            }, t.exports = m
        }, function(t, e, n) {
            var r = n(79),
                o = n(77),
                i = n(78),
                a = n(72),
                s = n(73),
                c = n(75),
                l = n(70),
                u = n(74);
            t.exports = {
                showLocations: r,
                requestGeolocationLatlong: o,
                requestGeolocationZipcode: i,
                chooseLocationType: a,
                choose: s,
                creditCard: l,
                form: c,
                error: u
            }
        }, function(t, e, n) {
            function r(t) {
                this.init(t)
            }
            var o = n(1),
                i = n(3),
                a = o.subscribe,
                s = o.publish,
                c = [],
                l = 3e4,
                u = {
                    init: function() {
                        a("layout:request-geolocation-latlong", function(t) {
                            var e = new r(t);
                            c[t.uuid] = e
                        })
                    }
                };
            r.prototype = {
                init: function(t) {
                    this.data = t.data, this.uuid = t.uuid, this.parentElement = t.element, this.layoutElement = t.layoutElement, this.msgElement = t.msgElement, this.timedOut = !1, this.timeoutCheck = setTimeout(function() {
                        this.timedOut = !0, this.handleLocationNotShared()
                    }.bind(this), l), s("enable-loading"), s("disable-input");
                    try {
                        navigator.permissions.query({
                            name: "geolocation"
                        }).then(function(e) {
                            "prompt" === e.state ? (t.msgElement.textContent = i("loc_prompt"), s("enable-loading", i("loc_share"))) : "granted" === e.state ? (t.msgElement.textContent = i("loc_share_granted"), s("enable-loading", i("loc_looking"))) : "denied" === e.state && (t.msgElement.textContent = i("loc_share_denied"))
                        })
                    } catch (e) {
                        console.log("navigator.permissions not supported.")
                    }
                    navigator.geolocation.getCurrentPosition(function(t) {
                        return !this.timedOut && (clearTimeout(this.timeoutCheck), void this.handleLocationShared(t))
                    }.bind(this), function() {
                        return !this.timedOut && (clearTimeout(this.timeoutCheck), void this.handleLocationNotShared())
                    }.bind(this))
                },
                handleLocationShared: function(t) {
                    s("enable-input"), s("disable-loading"), s("send", {
                        text: t.coords.latitude + "," + t.coords.longitude,
                        silent: !0
                    })
                },
                handleLocationNotShared: function() {
                    var t = i("loc_not_shared_prompt");
                    s("enable-input"), s("disable-loading"), s("receive", t), s("send", {
                        text: "failure",
                        silent: !0
                    })
                }
            }, t.exports = u
        }, function(t, e, n) {
            function r(t) {
                this.init(t)
            }
            var o = n(1),
                i = n(2),
                a = o.subscribe,
                s = o.publish,
                c = [],
                l = {
                    init: function() {
                        a("layout:request-geolocation-zipcode", function(t) {
                            var e = new r(t);
                            c[t.uuid] = e
                        })
                    }
                };
            r.prototype.init = function(t) {
                var e = i.get();
                e.defaultCountry && i.set({
                    handleInput: {
                        "default": !1,
                        callback: function(t, e, n) {
                            var r = i.get();
                            e(), i.set({
                                handleInput: {
                                    "default": !0,
                                    callback: void 0
                                }
                            }), s("send", {
                                text: t + ", " + r.defaultCountry,
                                silent: !0
                            })
                        }
                    }
                })
            }, t.exports = l
        }, function(t, e, n) {
            function r(t) {
                for (var e = 0; e < I.length; e++)
                    if (e === I.length - 1 || I[e] >= t) return void(M = e)
            }

            function o() {
                var t = b.get(),
                    e = t.chatHolder.querySelector("div:first-child");
                return e ? e.clientWidth : 0
            }

            function i() {
                return I[M] >= o()
            }

            function a() {
                if (B.length > 0 && !i())
                    for (var t = o(), e = 0; e < I.length; e++)
                        if (e === I.length - 1 || 0 === e && t >= I[e]) {
                            M = e;
                            for (var n = 0; n < B.length; n++) w[B[n]].data.length > 0 && w[B[n]].reDrawMap();
                            return
                        }
            }

            function s(t, e) {
                var n = document.createElement("a");
                if (n.setAttribute("href", "mailto:" + e.email), n.setAttribute("target", "_blank"), n.textContent = e.email, e.phones && e.phones.length > 0) {
                    var r = document.createElement("div"),
                        o = S.createDomArray;
                    r.className = L + "-contact-row", r.innerHTML = g.compile(o, {
                        ns: L
                    });
                    var i = r.querySelector("." + L + "-contact-type"),
                        a = r.querySelector("." + L + "-contact-data");
                    i.textContent = "Email", a.appendChild(n), t.appendChild(r)
                } else t.appendChild(n)
            }

            function c(t, e) {
                if (e)
                    for (var n = 0; n < e.length; n++) {
                        var r = document.createElement("div"),
                            o = S.createDomArray;
                        r.className = L + "-contact-row", r.innerHTML = g.compile(o, {
                            ns: L
                        });
                        var i = r.querySelector("." + L + "-contact-type"),
                            a = r.querySelector("." + L + "-contact-data");
                        i.textContent = e[n].type, a.textContent = e[n].number, t.appendChild(r)
                    }
            }

            function l(t, e, n, r, o) {
                if (n) {
                    var i = new Date,
                        a = i.toDateString(),
                        s = i.getDay(),
                        c = n[s],
                        l = document.createElement("div");
                    if (c && c.isOpen) {
                        var d = new Date(a + " " + c.open),
                            h = new Date(a + " " + c.close);
                        d && h ? l.innerHTML = x.format("loc_open_today_more", {
                            ns: L,
                            open: d,
                            close: h
                        }) : l.innerHTML = g.compile(S.hoursTodayUnknown, {
                            ns: L,
                            loc_open_today: x("loc_open_today")
                        })
                    } else l.innerHTML = g.compile(S.hoursTodayClosed, {
                        ns: L,
                        loc_closed_today: x("loc_closed_today")
                    });
                    if (g.appendToEach(t, l), r) {
                        var p = document.createElement("div");
                        p.innerHTML = g.compile(S.hoursTimezone, {
                            ns: L,
                            timezone: r
                        }), g.appendToEach(o, p)
                    } else
                        for (var f = 0; f < o.length; f++) o[f].parentNode.removeChild(o[f]);
                    for (var m = u(n), v = 0; v < m.length; v++) {
                        var b = document.createElement("span");
                        b.setAttribute("class", L + "-days-hours");
                        var y = m[v];
                        if (y && y.isOpen) {
                            var C = y.startDay,
                                _ = y.endDay;
                            if (C && _) {
                                var I = C.getDate() === _.getDate() ? "loc_hours_open" : "loc_hours_open_multiday";
                                b.innerHTML = x.format(I, {
                                    ns: L,
                                    openDay: C,
                                    closeDay: _,
                                    open: y.open,
                                    close: y.close
                                })
                            } else b.innerHTML = x.format("loc_hours_unknown", {
                                ns: L,
                                day: C
                            })
                        } else b.innerHTML = x.format("loc_hours_closed", {
                            ns: L,
                            day: y.startDay
                        });
                        v < m.length - 1 && (b.querySelector("." + L + "-days-hours-hours").innerHTML += "<br />"), g.appendToEach(e, b)
                    }
                }
            }

            function u(t) {
                for (var e = [], n = {}, r = 0; r < t.length; r++) {
                    var o, i, a = e.length > 0 && e[e.length - 1];
                    n = t[r] || {
                        isOpen: !1
                    }, o = a && a.isOpen === n.isOpen && n.isOpen === !1, i = a && a.open === n.open && a.close === n.close && a.isOpen === n.isOpen, e.length > 0 && a && (o || i) ? a.endDay = r : e.push({
                        isOpen: n.isOpen,
                        startDay: r,
                        endDay: r,
                        open: n.open,
                        close: n.close
                    })
                }
                var s = new Date;
                for (s.setHours(12), r = 0; r < e.length; r++) n = e[r], n.startDay = d(s, n.startDay), n.isOpen && (n.endDay = d(s, n.endDay), n.open = h(n.startDay, n.open), n.close = h(n.startDay, n.close));
                return e
            }

            function d(t, e) {
                var n = t.getDay() - e,
                    r = new Date(t);
                return r.setDate(r.getDate() - n), r
            }

            function h(t, e) {
                return new Date(t.toDateString() + " " + e)
            }

            function p(t) {
                this.init(t)
            }
            var f = n(1),
                m = f.subscribe,
                v = f.publish,
                b = n(2),
                g = n(4),
                y = n(9),
                x = n(3),
                C = !0,
                _ = 3,
                I = ["768", "640", "512", "480", "360"],
                w = {},
                B = [],
                M = 0,
                E = window.devicePixelRatio || 1,
                L = "IBMChat-map",
                S = {
                    base: n(43),
                    createDomArray: n(44),
                    addLocationsItem: n(42),
                    addLocationItem: n(41),
                    hoursTodayClosed: n(46),
                    hoursTodayUnknown: n(47),
                    hoursTimezone: n(45)
                },
                k = {
                    locations: {
                        none: function() {
                            return x("loc_nearby_none")
                        },
                        single: function() {
                            return x("loc_nearby_single")
                        },
                        list: function() {
                            return x("loc_nearby_list")
                        }
                    }
                },
                A = {
                    init: function() {
                        m("layout:show-locations", function(t) {
                            var e = new p(t);
                            0 === B.length && m("resize", a), B.push(t.uuid), w[t.uuid] = e
                        })
                    }
                },
                T = ["A", "B", "C", "D", "E", "F", "G"];
            p.prototype.init = function(t) {
                switch (this.data = void 0 !== t.message.data && void 0 !== t.message.data.location_data ? t.message.data.location_data : [], this.data.length > 1 && b.set({
                    location_data: this.data
                }), this.eventListeners = [], this.parentElement = t.element, this.layoutElement = t.layoutElement, this.msgElement = t.msgElement, this.data.length) {
                    case 0:
                        this.msgElement.textContent = k.locations.none();
                        break;
                    case 1:
                        this.msgElement.textContent = k.locations.single();
                        break;
                    default:
                        this.msgElement.textContent = k.locations.list()
                }
                if (this.data.length > 0) {
                    var e = S.base;
                    this.uuid = t.uuid, C && (r(o()), C = !1), this.map = document.createElement("div"), this.map.innerHTML = g.compile(e, {
                        ns: L
                    }), this.mapElement = this.map.querySelector("." + L + "-img"), this.dataElement = this.map.querySelector("." + L + "-data"), this.data.length > 1 && this.mapElement.appendChild(this.drawLocations()), this.dataElement.appendChild(this.addDetails()), this.layoutElement.appendChild(this.map), this.data.length > 1 && this.layoutElement.querySelectorAll("." + L + "-locations-item")[0].focus()
                }
                this.subscribeReceive = m("receive", this.removeAllEventListeners, this)
            }, p.prototype.reDrawMap = function() {
                this.mapElement.innerHTML = "", this.data.length > 1 && this.mapElement.appendChild(this.drawLocations())
            }, p.prototype.addDetails = function() {
                return this.data.length > 1 ? this.addLocations() : this.addLocation()
            }, p.prototype.convertColor = function(t) {
                return y.normalizeToHex(t).replace("#", "")
            }, p.prototype.drawLocations = function() {
                var t = b.get(),
                    e = document.createElement("img"),
                    n = o(),
                    r = {
                        size: n - 8 + "x120",
                        scale: E
                    };
                1 === this.data.length && (r.zoom = 12), this.uri = t.mapsServer + "?", this.uri += g.serialize(r), this.uri += "&locations=";
                for (var i = "", a = 0; a < _ && a < this.data.length; a++) {
                    var s = this.data[a];
                    i += 0 === a ? s.address.lat + "," + s.address.lng : "+" + s.address.lat + "," + s.address.lng
                }
                return this.uri += encodeURIComponent(i), this.uri += "&color=" + encodeURIComponent(this.convertColor(t.styles.accentBackground)), e.setAttribute("src", this.uri), e
            }, p.prototype.handleClick = function() {
                this.className = L + "-location-active", v("receive", {
                    message: {
                        text: [g.compile(k.locations.single(), {
                            location: w[this.dataset.uuid].data[this.dataset.id - 1].address.address
                        }), x("anything_else")],
                        layout: {
                            name: "show-locations",
                            index: 0
                        },
                        data: {
                            location_data: [w[this.dataset.uuid].data[this.dataset.id - 1]]
                        }
                    }
                })
            }, p.prototype.removeAllEventListeners = function() {
                var t = document.querySelector("." + this.uuid + " .IBMChat-watson-layout");
                if (t) {
                    t.classList.add("IBMChat-disabled-layout");
                    for (var e = t.querySelectorAll("input, button"), n = 0; n < e.length; n++) e[n].setAttribute("disabled", !0);
                    for (var r = 0; r < this.eventListeners.length; r++) this.eventListeners[r].removeEventListener("click", this.handleClick);
                    this.hoursFunction && this.hoursButton.removeEventListener("click", this.hoursFunction), this.locationsFunction && this.locationsButton.removeEventListener("click", this.locationsFunction), this.eventListeners = [], this.subscribeReceive.remove()
                }
            }, p.prototype.addLocation = function() {
                var t = document.createElement("div"),
                    e = document.createElement("div"),
                    n = b.get().location_data,
                    r = this.data[0],
                    o = function(t) {
                        return t.innerHTML = g.compile(S.addLocationItem, {
                            ns: L,
                            loc_all: x("loc_all")
                        }), {
                            link: t.querySelector("." + L + "-locations-item-data-address-link"),
                            label: t.querySelector("." + L + "-locations-item-data-title"),
                            address: t.querySelector("." + L + "-locations-item-data-address"),
                            phone: t.querySelector("." + L + "-locations-item-data-phone"),
                            email: t.querySelector("." + L + "-locations-item-data-email"),
                            hours: t.querySelectorAll("." + L + "-locations-item-data-hours"),
                            timezone: t.querySelectorAll("." + L + "-locations-item-data-timezone"),
                            moreHours: t.querySelectorAll("." + L + "-locations-item-data-more-hours"),
                            backHolder: t.querySelector("." + L + "-locations-all-holder"),
                            back: t.querySelector("." + L + "-locations-all"),
                            parentEl: t.querySelector("." + L + "-locations-item")
                        }
                    },
                    i = o(e);
                if (r.label ? i.label.textContent = r.label : i.parentEl.removeChild(i.label), i.address.textContent = r.address.address, i.link.setAttribute("href", x("google_maps_url") + "?q=" + encodeURIComponent(r.address.address)), i.link.setAttribute("target", "_blank"), r.email ? s(i.email, r) : i.email.parentNode.removeChild(i.email), r.phones && r.phones.length > 0 && r.hasPhones !== !1 ? c(i.phone, r.phones) : i.phone.parentNode.removeChild(i.phone), r.days && r.hasDays !== !1) l(i.hours, i.moreHours, r.days, r.address.timezone, i.timezone);
                else {
                    for (var a = 0; a < i.hours; a++) i.hours[a].parentNode.removeChild(i.hours[a]);
                    for (var u = 0; u < i.timezone; u++) i.timezone[u].parentNode.removeChild(i.timezone[u]);
                    for (var d = 0; d < i.moreHours; a++) i.moreHours[d].parentNode.removeChild(i.moreHours[d])
                }
                return n && n.length > 1 ? (this.locationsButton = i.back, this.locationsFunction = function(t) {
                    t.preventDefault(), v("receive", {
                        message: {
                            text: [k.locations.list(), x("anything_else")],
                            layout: {
                                name: "show-locations",
                                index: 0
                            },
                            data: {
                                location_data: n
                            }
                        }
                    })
                }, i.back.addEventListener("click", this.locationsFunction)) : i.backHolder.parentNode.removeChild(i.backHolder), t.appendChild(e), t
            }, p.prototype.addLocations = function() {
                for (var t = b.get(), e = function(e, n, r) {
                        e.addEventListener("click", this.handleClick), e.dataset.uuid = r, e.dataset.id = n + 1, e.innerHTML = g.compile(S.addLocationsItem, {
                            ns: L,
                            title: i.label || "",
                            address: i.address.address,
                            iconText: T[n],
                            accentText: t.styles.accentText,
                            accentBackground: t.styles.accentBackground
                        }), this.eventListeners.push(e)
                    }, n = document.createElement("div"), r = 0; r < _ && r < this.data.length; r++) {
                    var o = document.createElement("div"),
                        i = this.data[r];
                    e.call(this, o, r, this.uuid), n.appendChild(o)
                }
                return n
            }, t.exports = A
        }, function(t, e) {
            function n(t, e) {
                new r(t, e)
            }

            function r(t, e) {
                this.init(t, e)
            }

            function o(t) {
                return t.startsWith("http://") || t.startsWith("https://") ? t : "http://" + t
            }

            function i(t) {
                var e = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                return e.test(t)
            }
            r.prototype.init = function(t, e) {
                if (e) {
                    var n = this,
                        r = [{
                            type: "span",
                            content: e
                        }];
                    this.addLineEndings(r).then(n.addUrls).then(n.addEmails).then(function(e) {
                        n.writeMessage(t, e)
                    })["catch"](function(t) {
                        console.error(t)
                    })
                }
            }, r.prototype.writeMessage = function(t, e) {
                e.map(function(e) {
                    var n = document.createElement(e.type);
                    e.content && (n.textContent = e.content), e.attributes && Object.keys(e.attributes).map(function(t) {
                        n.setAttribute(t, e.attributes[t])
                    }), t.appendChild(n)
                })
            }, r.prototype.addLineEndings = function(t) {
                return new window.Promise(function(e, n) {
                    try {
                        for (var r = [], o = 0; o < t.length; o++) {
                            var i = t[o].content.split("\n");
                            i.map(function(t, e) {
                                t && r.push({
                                    content: t,
                                    type: "span"
                                }), i.length != e + 1 && r.push({
                                    type: "br"
                                })
                            })
                        }
                        e(r)
                    } catch (a) {
                        n(a)
                    }
                })
            }, r.prototype.addUrls = function(t) {
                return new window.Promise(function(e, n) {
                    try {
                        for (var r = [], a = 0; a < t.length; a++) {
                            t[a].content = t[a].content || "";
                            var s = /(\b((https?:\/\/)|(www\.))[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                                c = "|^|%|^|",
                                l = t[a].content.replace(s, c + "$1" + c),
                                u = l.split(c);
                            u.map(function(e) {
                                if (e.search(s) != -1 && i(e)) {
                                    var n = o(e);
                                    r.push({
                                        content: e,
                                        type: "a",
                                        attributes: {
                                            href: n,
                                            target: "_blank"
                                        }
                                    })
                                } else r.push({
                                    content: e,
                                    type: t[a].type,
                                    attributes: t[a].attributes
                                })
                            })
                        }
                        e(r)
                    } catch (d) {
                        n(d)
                    }
                })
            }, r.prototype.addEmails = function(t) {
                return new window.Promise(function(e, n) {
                    try {
                        for (var r = [], o = 0; o < t.length; o++)
                            if (t[o].content) {
                                var i = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,
                                    a = t[o].content.replace(i, "|||$1|||"),
                                    s = a.split("|||");
                                s.map(function(e) {
                                    var n = e.replace(i, '<a href="mailto:$1" target="_blank">$1</a>');
                                    n === e ? r.push({
                                        content: e,
                                        type: t[o].type,
                                        attributes: t[o].attributes
                                    }) : r.push({
                                        content: e,
                                        type: "a",
                                        attributes: {
                                            href: "mailto:" + e,
                                            target: "_blank"
                                        }
                                    })
                                })
                            } else r.push({
                                type: t[o].type,
                                content: t[o].content,
                                attributes: t[o].attributes
                            });
                        e(r)
                    } catch (c) {
                        n(c)
                    }
                })
            }, t.exports = n
        }, function(t, e) {}]))
    });
    //# sourceMappingURL=chat.min.js.map
