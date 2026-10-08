// Automatically generated file.  Do not edit!
'use strict';
var g, m = this;

function aa(a) {
    a = a.split(".");
    for (var b = m, c; c = a.shift();)
        if (null != b[c]) b = b[c];
        else return null;
    return b
}

function ba() {}

function ca(a) {
    a.Ob = function () {
        return a.Dh ? a.Dh : a.Dh = new a
    }
}

function da(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function n(a) {
    return "array" == da(a)
}

function ea(a) {
    var b = da(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function r(a) {
    return "string" == typeof a
}

function fa(a) {
    return "number" == typeof a
}

function s(a) {
    return "function" == da(a)
}

function ga(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ha(a) {
    return a[ia] || (a[ia] = ++ja)
}
var ia = "closure_uid_" + (1E9 * Math.random() >>> 0),
    ja = 0;

function ka(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function la(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function () {
        return a.apply(b, arguments)
    }
}

function ma(a, b, c) {
    ma = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
    return ma.apply(null, arguments)
}

function na(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}
var oa = Date.now || function () {
    return +new Date
};

function v(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.m = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.kl = function (a, c, f) {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
    }
};

function pa(a, b) {
    null != a && this.append.apply(this, arguments)
}
g = pa.prototype;
g.U = "";
g.set = function (a) {
    this.U = "" + a
};
g.append = function (a, b, c) {
    this.U += a;
    if (null != b)
        for (var d = 1; d < arguments.length; d++) this.U += arguments[d];
    return this
};
g.clear = function () {
    this.U = ""
};
g.toString = function () {
    return this.U
};
var qa;

function ra(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, ra);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
}
v(ra, Error);
ra.prototype.name = "CustomError";

function sa(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
    return d + c.join("%s")
}

function ta(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
var ua = String.prototype.trim ? function (a) {
    return a.trim()
} : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};

function va(a, b) {
    var c = String(a).toLowerCase(),
        d = String(b).toLowerCase();
    return c < d ? -1 : c == d ? 0 : 1
}

function xa(a) {
    if (!ya.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(za, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Aa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ba, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ca, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Da, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ea, "&#0;"));
    return a
}
var za = /&/g,
    Aa = /</g,
    Ba = />/g,
    Ca = /"/g,
    Da = /'/g,
    Ea = /\x00/g,
    ya = /[\x00&<>"']/;

function Fa(a) {
    var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        },
        c;
    c = m.document.createElement("div");
    return a.replace(Ga, function (a, e) {
        var f = b[a];
        if (f) return f;
        if ("#" == e.charAt(0)) {
            var h = Number("0" + e.substr(1));
            isNaN(h) || (f = String.fromCharCode(h))
        }
        f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = f
    })
}

function Ha(a) {
    return a.replace(/&([^;]+);/g, function (a, c) {
        switch (c) {
        case "amp":
            return "&";
        case "lt":
            return "<";
        case "gt":
            return ">";
        case "quot":
            return '"';
        default:
            if ("#" == c.charAt(0)) {
                var d = Number("0" + c.substr(1));
                if (!isNaN(d)) return String.fromCharCode(d)
            }
            return a
        }
    })
}
var Ga = /&([^;\s<&]+);?/g;

function Ia(a, b) {
    return -1 != a.indexOf(b)
}

function Ja(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
};

function Ka(a, b) {
    b.unshift(a);
    ra.call(this, sa.apply(null, b));
    b.shift()
}
v(Ka, ra);
Ka.prototype.name = "AssertionError";

function La(a, b) {
    throw new Ka("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
};

function Ma() {
    this.tg = "";
    this.Ai = Na
}
Ma.prototype.pe = !0;
Ma.prototype.ie = function () {
    return this.tg
};
Ma.prototype.toString = function () {
    return "Const{" + this.tg + "}"
};

function Oa(a) {
    if (a instanceof Ma && a.constructor === Ma && a.Ai === Na) return a.tg;
    La("expected object of type Const, got '" + a + "'");
    return "type_error:Const"
}
var Na = {};

function Pa() {
    this.Ub = "";
    this.yi = Qa
}
g = Pa.prototype;
g.pe = !0;
g.ie = function () {
    return this.Ub
};
g.Bh = !0;
g.ae = function () {
    return 1
};
g.toString = function () {
    return "SafeUrl{" + this.Ub + "}"
};
var Qa = {};
var Ra = Array.prototype,
    Sa = Ra.indexOf ? function (a, b, c) {
        return Ra.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (r(a)) return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    Ta = Ra.forEach ? function (a, b, c) {
        Ra.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Ua = Ra.filter ? function (a, b, c) {
        return Ra.filter.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = [], f =
            0, h = r(a) ? a.split("") : a, k = 0; k < d; k++)
            if (k in h) {
                var l = h[k];
                b.call(c, l, k, a) && (e[f++] = l)
            }
        return e
    },
    Va = Ra.map ? function (a, b, c) {
        return Ra.map.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = Array(d), f = r(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    },
    Wa = Ra.every ? function (a, b, c) {
        return Ra.every.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };

function Xa(a, b) {
    return 0 <= Sa(a, b)
}

function Ya(a, b) {
    var c = Sa(a, b),
        d;
    (d = 0 <= c) && Ra.splice.call(a, c, 1);
    return d
}

function Za(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function $a(a, b, c, d) {
    Ra.splice.apply(a, ab(arguments, 1))
}

function ab(a, b, c) {
    return 2 >= arguments.length ? Ra.slice.call(a, b) : Ra.slice.call(a, b, c)
};

function bb() {
    this.Ie = "";
    this.xi = cb
}
bb.prototype.pe = !0;
var cb = {};
bb.prototype.ie = function () {
    return this.Ie
};
bb.prototype.toString = function () {
    return "SafeStyle{" + this.Ie + "}"
};

function db(a) {
    var b = new bb;
    b.Ie = a;
    return b
}
var eb = db("");

function fb(a) {
    var b = "",
        c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        null != d && (d instanceof Ma ? d = Oa(d) : gb.test(d) || (La("String value allows only [-.%_!# a-zA-Z0-9], got: " + d), d = "zClosurez"), b += c + ":" + d + ";")
    }
    return b ? db(b) : eb
}
var gb = /^[-.%_!# a-zA-Z0-9]+$/;

function hb(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a)
}
var ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function jb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < ib.length; f++) c = ib[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}

function kb(a) {
    var b = arguments.length;
    if (1 == b && n(arguments[0])) return kb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
    return c
};
var lb = kb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));

function nb() {
    this.Ub = "";
    this.wi = ob;
    this.oh = null
}
g = nb.prototype;
g.Bh = !0;
g.ae = function () {
    return this.oh
};
g.pe = !0;
g.ie = function () {
    return this.Ub
};
g.toString = function () {
    return "SafeHtml{" + this.Ub + "}"
};

function pb(a) {
    if (a instanceof nb && a.constructor === nb && a.wi === ob) return a.Ub;
    La("expected object of type SafeHtml, got '" + a + "'");
    return "type_error:SafeHtml"
}

function qb(a) {
    if (a instanceof nb) return a;
    var b = null;
    a.Bh && (b = a.ae());
    return rb(xa(a.pe ? a.ie() : String(a)), b)
}
var sb = /^[a-zA-Z0-9-]+$/,
    tb = kb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src"),
    ub = kb("link", "script", "style");

function vb(a, b, c) {
    if (!sb.test(a)) throw Error("Invalid tag name <" + a + ">.");
    if (a.toLowerCase() in ub) throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
    var d = null,
        e = "<" + a;
    if (b)
        for (var f in b) {
            if (!sb.test(f)) throw Error('Invalid attribute name "' + f + '".');
            var h = b[f];
            if (null != h) {
                if (h instanceof Ma) h = Oa(h);
                else if ("style" == f.toLowerCase()) {
                    if (!ga(h)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof h + " given: " + h);
                    h instanceof bb || (h = fb(h));
                    h instanceof
                    bb && h.constructor === bb && h.xi === cb ? h = h.Ie : (La("expected object of type SafeStyle, got '" + h + "'"), h = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(f)) throw Error('Attribute "' + f + '" requires goog.string.Const value, "' + h + '" given.');
                    if (h instanceof Pa) h instanceof Pa && h.constructor === Pa && h.yi === Qa ? h = h.Ub : (La("expected object of type SafeUrl, got '" + h + "'"), h = "type_error:SafeUrl");
                    else if (f.toLowerCase() in tb) throw Error('Attribute "' + f + '" requires goog.string.Const or goog.html.SafeUrl value, "' + h + '" given.');
                }
                e += " " + f + '="' + xa(String(h)) + '"'
            }
        }
    void 0 !== c ? n(c) || (c = [c]) : c = [];
    !0 === lb[a.toLowerCase()] ? e += ">" : (d = wb(c), e += ">" + pb(d) + "</" + a + ">", d = d.ae());
    (a = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(a) ? 0 : null);
    return rb(e, d)
}

function wb(a) {
    function b(a) {
        n(a) ? Ta(a, b) : (a = qb(a), d += pb(a), a = a.ae(), 0 == c ? c = a : 0 != a && c != a && (c = null))
    }
    var c = 0,
        d = "";
    Ta(arguments, b);
    return rb(d, c)
}
var ob = {};

function rb(a, b) {
    var c = new nb;
    c.Ub = a;
    c.oh = b;
    return c
}
var xb = rb("", 0);
var yb = {
    Nl: !0
};
var zb;
a: {
    var Ab = m.navigator;
    if (Ab) {
        var Bb = Ab.userAgent;
        if (Bb) {
            zb = Bb;
            break a
        }
    }
    zb = ""
};
var Cb, Db, Eb, Fb, Gb = Ia(zb, "Opera") || Ia(zb, "OPR"),
    w = Ia(zb, "Trident") || Ia(zb, "MSIE"),
    Hb = Ia(zb, "Gecko") && !Ia(zb.toLowerCase(), "webkit") && !(Ia(zb, "Trident") || Ia(zb, "MSIE")),
    x = Ia(zb.toLowerCase(), "webkit"),
    Ib = m.navigator || null;
Cb = Ia(Ib && Ib.platform || "", "Mac");
var Jb = zb;
Db = !!Jb && Ia(Jb, "Android");
Eb = !!Jb && Ia(Jb, "iPhone");
Fb = !!Jb && Ia(Jb, "iPad");

function Kb() {
    var a = m.document;
    return a ? a.documentMode : void 0
}
var Lb = function () {
        var a = "",
            b;
        if (Gb && m.opera) return a = m.opera.version, s(a) ? a() : a;
        Hb ? b = /rv\:([^\);]+)(\)|;)/ : w ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : x && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(zb)) ? a[1] : "");
        return w && (b = Kb(), b > parseFloat(a)) ? String(b) : a
    }(),
    Mb = {};

function y(a) {
    var b;
    if (!(b = Mb[a])) {
        b = 0;
        for (var c = ua(String(Lb)).split("."), d = ua(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "",
                k = d[f] || "",
                l = /(\d*)(\D*)/g,
                q = /(\d*)(\D*)/g;
            do {
                var p = l.exec(h) || ["", "", ""],
                    u = q.exec(k) || ["", "", ""];
                if (0 == p[0].length && 0 == u[0].length) break;
                b = Ja(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || Ja(0 == p[2].length, 0 == u[2].length) || Ja(p[2], u[2])
            } while (0 == b)
        }
        b = Mb[a] = 0 <= b
    }
    return b
}
var Nb = m.document,
    Ob = Nb && w ? Kb() || ("CSS1Compat" == Nb.compatMode ? parseInt(Lb, 10) : 5) : void 0;

function Pb(a, b) {
    this.width = a;
    this.height = b
}
g = Pb.prototype;
g.clone = function () {
    return new Pb(this.width, this.height)
};
g.toString = function () {
    return "(" + this.width + " x " + this.height + ")"
};
g.Eh = function () {
    return !(this.width * this.height)
};
g.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.scale = function (a, b) {
    var c = fa(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};
var Qb = !w || w && 9 <= Ob,
    Rb = !Hb && !w || w && w && 9 <= Ob || Hb && y("1.9.1"),
    Sb = w && !y("9");

function Tb(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}
g = Tb.prototype;
g.clone = function () {
    return new Tb(this.x, this.y)
};
g.toString = function () {
    return "(" + this.x + ", " + this.y + ")"
};
g.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
g.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
g.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
g.translate = function (a, b) {
    a instanceof Tb ? (this.x += a.x, this.y += a.y) : (this.x += a, fa(b) && (this.y += b));
    return this
};
g.scale = function (a, b) {
    var c = fa(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};

function Ub(a) {
    return a ? new Vb(Wb(a)) : qa || (qa = new Vb)
}

function Xb(a, b) {
    hb(b, function (b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Yb ? a.setAttribute(Yb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var Yb = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function Zb() {
    var a = window.document,
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Pb(a.clientWidth, a.clientHeight)
}

function $b(a, b, c) {
    return ac(document, arguments)
}

function ac(a, b) {
    var c = b[0],
        d = b[1];
    if (!Qb && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', xa(d.name), '"');
        if (d.type) {
            c.push(' type="', xa(d.type), '"');
            var e = {};
            jb(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (r(d) ? c.className = d : n(d) ? c.className = d.join(" ") : Xb(c, d));
    2 < b.length && bc(a, c, b, 2);
    return c
}

function bc(a, b, c, d) {
    function e(c) {
        c && b.appendChild(r(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
        var f = c[d];
        !ea(f) || ga(f) && 0 < f.nodeType ? e(f) : Ta(cc(f) ? Za(f) : f, e)
    }
}

function dc(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}

function ec(a) {
    var b = z.g;
    b.parentNode && b.parentNode.insertBefore(a, b)
}

function A(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
}

function fc(a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function Wb(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var gc = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    hc = {
        IMG: " ",
        BR: "\n"
    };

function ic(a) {
    a = a.getAttributeNode("tabindex");
    return null != a && a.specified
}

function jc(a) {
    a = a.tabIndex;
    return fa(a) && 0 <= a && 32768 > a
}

function kc(a) {
    var b = [];
    lc(a, b, !1);
    return b.join("")
}

function lc(a, b, c) {
    if (!(a.nodeName in gc))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in hc) b.push(hc[a.nodeName]);
    else
        for (a = a.firstChild; a;) lc(a, b, c), a = a.nextSibling
}

function cc(a) {
    if (a && "number" == typeof a.length) {
        if (ga(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (s(a)) return "function" == typeof a.item
    }
    return !1
}

function Vb(a) {
    this.Bb = a || m.document || document
}
g = Vb.prototype;
g.gb = Ub;
g.i = function (a) {
    return r(a) ? this.Bb.getElementById(a) : a
};
g.G = function (a, b, c) {
    return ac(this.Bb, arguments)
};
g.createElement = function (a) {
    return this.Bb.createElement(a)
};
g.createTextNode = function (a) {
    return this.Bb.createTextNode(String(a))
};
g.appendChild = function (a, b) {
    a.appendChild(b)
};
g.append = function (a, b) {
    bc(Wb(a), a, arguments, 1)
};
g.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
        return !1
    }
    return !0
};
g.Vh = dc;
g.removeNode = A;
g.Nb = function (a) {
    return Rb && void 0 != a.children ? a.children : Ua(a.childNodes, function (a) {
        return 1 == a.nodeType
    })
};
g.contains = fc;
g.Qb = function (a) {
    var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!ic(a) || jc(a)) : ic(a) && jc(a)) && w ? (a = s(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
        height: a.offsetHeight,
        width: a.offsetWidth
    }, a = null != a && 0 < a.height && 0 < a.width) : a = b;
    return a
};
w && y(8);

function mc(a) {
    return a && a.Ri && a.Ri === yb ? a.content : String(a).replace(nc, oc)
}
var pc = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function oc(a) {
    return pc[a]
}
var nc = /[\x00\x22\x26\x27\x3c\x3e]/g;
var qc = {};

function rc() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'
};
var sc = {},
    B, tc, uc, C, D, F, vc;

function wc() {
    return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">\u0413\u043e\u043b\u043e\u0432\u043e\u043b\u043e\u043c\u043a\u0430</span><span id="Games_maze">\u041b\u0430\u0431\u0438\u0440\u0438\u043d\u0442</span><span id="Games_bird">Bird</span><span id="Games_turtle">\u0427\u0435\u0440\u0435\u043f\u0430\u0448\u043a\u0430</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">'+finishText(G,0)+'</span><span id="Games_linesOfCode2">'+finishText(G,0)+'</span><span id="Games_nextLevel">'+finishText(G,2)+'</span><span id="Games_finalLevel">'+finishText(G,2)+'</span><span id="Games_linkTooltip">\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0431\u043b\u043e\u043a\u0438.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c</span><span id="Games_help">\u041f\u043e\u043c\u043e\u0449\u044c</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">\u041e\u0442\u043c\u0435\u043d\u0430</span><span id="Games_catLogic">\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435</span><span id="Games_catLoops">\u0426\u0438\u043a\u043b\u044b</span><span id="Games_catMath">\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430</span><span id="Games_catText">\u0422\u0435\u043a\u0441\u0442</span><span id="Games_catLists">\u0421\u043f\u0438\u0441\u043a\u0438</span><span id="Games_catColour">\u0426\u0432\u0435\u0442</span><span id="Games_catVariables">\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435</span><span id="Games_catProcedures">\u0424\u0443\u043d\u043a\u0446\u0438\u0438</span><span id="Games_httpRequestError">\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435.</span><span id="Games_linkAlert">\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0441\u0432\u043e\u0438\u043c\u0438 \u0431\u043b\u043e\u043a\u0430\u043c\u0438 \u043f\u043e \u044d\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435:\n\n%1</span><span id="Games_hashError">\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u00ab%1\u00bb \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u043c\u0443 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u043e\u043c\u0443 \u0444\u0430\u0439\u043b\u0443 \u0411\u043b\u043e\u043a\u043b\u0438.</span><span id="Games_xmlError">\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432\u0430\u0448 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b.  \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043e\u043d \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0411\u043b\u043e\u043a\u043b\u0438?</span><span id="Games_listVariable">\u0441\u043f\u0438\u0441\u043e\u043a</span><span id="Games_textVariable">\u0442\u0435\u043a\u0441\u0442</span></div><div style="display: none"><span id="Maze_moveForward">\u0448\u0430\u0433\u043d\u0443\u0442\u044c \u0432\u043f\u0435\u0440\u0435\u0434</span><span id="Maze_turnLeft">\u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043d\u0430\u043b\u0435\u0432\u043e</span><span id="Maze_turnRight">\u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043d\u0430\u043f\u0440\u0430\u0432\u043e</span><span id="Maze_doCode">\u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c</span><span id="Maze_elseCode">\u0438\u043d\u0430\u0447\u0435</span><span id="Maze_helpIfElse">\u041a\u043e\u043c\u0430\u043d\u0434\u0430 "\u0435\u0441\u043b\u0438-\u0438\u043d\u0430\u0447\u0435" \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442 \u043e\u0434\u043d\u043e \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.</span><span id="Maze_pathAhead">\u0435\u0441\u043b\u0438 \u043f\u0443\u0442\u044c \u0432\u043f\u0435\u0440\u0435\u0434\u0438</span><span id="Maze_pathLeft">\u0435\u0441\u043b\u0438 \u043f\u0443\u0442\u044c c\u043b\u0435\u0432\u0430</span><span id="Maze_pathRight">\u0435\u0441\u043b\u0438 \u043f\u0443\u0442\u044c c\u043f\u0440\u0430\u0432\u0430</span><span id="Maze_repeatUntil">\u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c, \u043f\u043e\u043a\u0430 \u043d\u0435</span><span id="Maze_moveForwardTooltip">\u041f\u0440\u043e\u0434\u0432\u0438\u0433\u0430\u0435\u0442 \u043f\u0443\u0442\u043d\u0438\u043a\u0430 \u0432\u043f\u0435\u0440\u0451\u0434 \u043d\u0430 \u043e\u0434\u0438\u043d \u0448\u0430\u0433.</span><span id="Maze_turnTooltip">\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u0443\u0442\u043d\u0438\u043a\u0430 \u043d\u0430 90 \u0433\u0440\u0430\u0434\u0443\u0441\u043e\u0432 \u0432\u043b\u0435\u0432\u043e \u0438\u043b\u0438 \u0432\u043f\u0440\u0430\u0432\u043e.</span><span id="Maze_ifTooltip">\u0415\u0441\u043b\u0438 \u043f\u0443\u0442\u044c \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0442, \\n\u0442\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. </span><span id="Maze_ifelseTooltip">\u0415\u0441\u043b\u0438 \u043f\u0443\u0442\u044c \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0442, \\n\u0442\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u0439 \u0431\u043b\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439. \\n\u0418\u043d\u0430\u0447\u0435, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u0442\u043e\u0440\u043e\u0439 \u0431\u043b\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439. </span><span id="Maze_whileTooltip">\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0435, \\n\u0434\u043e \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0438. </span><span id="Maze_capacity0">Осталось %0 блоков.</span><span id="Maze_capacity1">Остался %1 блок.</span><span id="Maze_capacity2">Осталось %2 блока.</span></div>'
}
function closeDialog2(){
	document.getElementById('dialog').style.visibility='hidden';
	document.getElementById('dialogShadow').style.visibility='hidden';
}

function historyClear(){

    for(var i=1;i<=10;i++){
        delete(window.localStorage["maze"+i]);
        //console.log('-> window.localStorage["maze"+i]:',"maze"+i);
    }

}

var lessonHelp = {
    onScreen:[
        '<h3>Помоги Ам Няму добраться до леденца!</h3><p>Составь вместе несколько блоков "Шагнуть вперёд" и нажми кнопку "Запустить программу".</p><p>Каждый блок - это одна команда, которую послушно выполнит Ам Ням, при этом продвинувшись на один шаг.</p>',
        '<h3>Одной конфетой сыт не будешь!</h3><p>Проведи меня к следующей!</p><p>Мне кажется, что она скрывается где-то за поворотом.</p>',
        '<h3>Ты знаешь, что полноценный обед должен состоять из трех блюд?</h3><p>Помоги мне добраться до третьей конфеты.</p><p>Есть способ добраться до нее, используя всего два блока. Догадываешься как?</p>',
        '<h3>После сытного обеда полагается ДЕСЕРТ!</h3><p>Где мой десерт?</p>',
        '<h3>Уважаемый программист, покажи, чему ты научился.</h3><p>Спорим на конфету, что ты сумеешь привести  меня к ней, используя только пять блоков?</p>',
        '<h3>Ты не поверишь, но я снова проголодался. Веди меня к конфете!</h3><p>Лабиринты становятся сложнее, поэтому, чтобы быстрее добраться до конфеты, нам очень пригодится так называемый “условный оператор” «Если, то», который очень часто используется программистами в своей работе.</p>',
        '<h3>Я вижу, что ты отлично справляешься!</h3><p>Пока ты трудился над заданием, у меня освободилось место для новой конфетки. В следующем лабиринте у тебя есть 5 блоков, но попробуй привести  меня к леденцу, используя только четыре.</p>',
        '<h3>Кажется, я объелся!</h3><p>Шучу! Веди меня скорей к конфете</p>',
        '<h3>Этот лабиринт посложнее, а мне снова хочется конфету.</h3><p>Скорее освой новый блок “Если-иначе”, ИНАЧЕ я останусь голодным!</p>',
        '<h3>Теперь ты знаешь достаточно, чтобы пройти этот сложный лабиринт!</h3><p>Не торопись -  даже опытным программистам приходится подумать над этой задачей.  У этой головоломки есть несколько решений.</p><p>Если лабиринт никак не поддается, посоветуйся с друзьями. Вместе вы быстрее найдете правильное решение.</p>'
    ],
    finishHeader:[
        'Поздравляю! Головоломка №%1 решена.',
        'Поздравляю! Головоломка №%1 решена.',
        'Поздравляю! Головоломка №%1 решена.',
        'Поздравляю! Я еще никогда так быстро не бегал за конфетами. Головоломка №%1 решена.',
        'Поздравляю! Ты сумел привести меня к конфете, используя всего 5 блоков.  Мы выиграли! Было очень вкусно! Головоломка №%1 решена.',
        'Поздравляю! Ты отлично справился с заданием! Даже такой сложный лабиринт оказался тебе по зубам. Головоломка №%1 решена.',
        'Поздравляю! Ты принял верное решение и помог мне быстро добраться до конфеты! Головоломка №%1 решена.',
        'Поздравляю! У тебя отлично получилось! Головоломка №%1 решена.',
        'Ты и в этот раз не оставил меня голодным. Уважаю! Головоломка №%1 решена.',
        'Поздравляю! Сегодня ты самостоятельно написал море кода!'
    ],
    finishBody:[
        '<p>Ты только что написал %1 кода!</p><p>Знаем-знаем, двигать блоки мышкой не сложно. Но не поверишь, даже в лучших университетах по всему миру начинают обучать студентов с помощью визуального программирования - программирования при помощи блоков.</p><p>Хочешь почувствовать себя настоящим программистом? Посмотри, как выглядит программа из блоков, которую ты только что создал, на  JavaScript (ЯваСкрипт) -  самом используемом в мире языке программирования.</p>',
        '<p>Ты только что написал %1 кода!</p>',
        '<p>Ты только что написал %1 кода!</p><p>Вот что важно: в следующих головоломках мы можем помещать любое количество блоков-команд внутрь блока "повторять, пока не", и они все будут повторяться в той последовательности, которую мы зададим.</p>',
        '<p>Ты только что написал %1 кода!</p>',
        '<p>Ты только что написал %1 кода!</p>',
        '<p>Ты только что написал %1 кода!</p>',
        '<p>Ты только что написал %1 кода!</p>',
        '<p>Ты только что написал %1 кода!</p>',
        '<p>Ты только что написал %1 кода!</p>',
        '<p>Ты  - талантливый программист. По созданному тобой в последнем задании коду, не только Ам Ням, но и ЛЮБОЙ робот может найти дорогу через линейный лабиринт или туннель любого размера. Это может быть квадрокоптер, луноход или даже самоуправляемый автомобиль.</p><p>Понятия и блоки, которые ты использовал сегодня, составляют основу любой программы.Мы изучили циклы ("ПОВТОРЯТЬ, ПОКА НЕ") и условные операторы "ЕСЛИ -ТО" и "ЕСЛИ-ИНАЧЕ".</p><p>Ты доказал всем, что программирование - увлекательное занятие и этому может обучиться каждый в любом возрасте!</p><p>Если тебе понравился час кода, продолжай изучать языки программирования и компьютерные науки! Попроси учителя порекомендовать тебе полезные ресурсы.</p><p>В программировании еще много всего интересного! Ты сможешь научиться писать собственные игры или приложения для телефонов, программы для роботов или создать что-то свое особенное.</p>'
    ],
    finishFooter:[
        'Готов к следующему заданию?',
        'Готов к следующему заданию?',
        'Готов к следующему заданию?',
        'Готов к следующему заданию?',
        'Готов к следующему заданию?',
        'Готов к следующему заданию?',
        'Готов к следующему заданию?',
        'Готов к следующему заданию?',
        'Осталось последняя головоломка. Ты готов?',
        'Желаем удачи!'
    ]
};


function screenHelp(lessonNumber){

    return lessonHelp.onScreen[lessonNumber-1];

}

function finishText(lessonNumber,piece){

    var rText;

    switch (piece) {
        case 1:
            rText=lessonHelp.finishHeader[lessonNumber-1].replace("%1", G );
        break;
        case 2:
            rText=lessonHelp.finishFooter[lessonNumber-1];
        break;
        default:
            rText=lessonHelp.finishBody[lessonNumber-1];
    }

    //finishText(b,1)
    return rText;

}

function xc() {
    var a = yc,
        b = G,
        c = zc,
        d = wc() + '<table width="100%"><tr><td><h1>',
        e = '<span id="title"><a href="../../hoc2014.html"><img style ="height: 108px;" src="maze/logo.png"></a></span>';
//    e = '<span id="title">' + (Ac ? '<a href="index.html?lang=' + mc(a) + '">' : '<a href="./?lang=' + mc(a) + '">') + "Blockly Games</a> : " + mc("\u041b\u0430\u0431\u0438\u0440\u0438\u043d\u0442") + "</span>";
    d += e;
//    c = "&skin=" + mc(c);

    e = " &nbsp; ";
    for (var f = 1; 11 > f; f++) e += " " + (f == b ? '<span class="level_number level_dot" id="level' + mc(f) + '">' + mc(f) + "</span>" : '<a class="level_dot" id="level' + mc(f) + '" href="?lang=' + mc(a) + "&level=" + mc(f) /*+ mc(c)*/ + '">'+mc(f)+'</a>');
    return d + e + '<a class="primary" style="margin-left:10px" onclick="historyClear();" href="../../share.html">Завершить</a>' + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0431\u043b\u043e\u043a\u0438."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton" style="display:none;"><img src="media/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id=turnCount></div><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 140px; text-align: center; vertical-align: top;"><td style="text-align:right"><button id="runButton" class="primary" title="\u041f\u0443\u0442\u043d\u0438\u043a \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0441\u0451, \u0447\u0442\u043e \u0441\u043a\u0430\u0436\u0443\u0442 \u0435\u043c\u0443 \u0431\u043b\u043e\u043a\u0438."><img src="media/1x1.gif" class="run icon21" style="display: none;"> \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443</button><button id="resetButton" class="primary" style="display: none" title="\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u0443\u0442\u043d\u0438\u043a\u0430 \u0432 \u043d\u0430\u0447\u0430\u043b\u043e \u043b\u0430\u0431\u0438\u0440\u0438\u043d\u0442\u0430."><img src="media/1x1.gif" class="stop icon21"> \u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c</button></td></tr><tr><div class="screenHelp">'+screenHelp(b)+'</div></tr></table>' +
        ('<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + (2 < b ? '<block type="maze_forever"></block>' + (6 == b ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : 6 < b ? '<block type="maze_if"></block>' + (8 < b ? '<block type="maze_ifElse"></block>' : "") : "") : "") + "</xml>") + '<div id="blockly"></div><div id="pegmanMenu"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">'+finishText(b,1)+'</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel" >\u041e\u0442\u043c\u0435\u043d\u0430</button><button id="doneOk" class="secondary">Дальше</button></div></div><div id="dialogAbort" class="dialogHiddenContent">Этот уровень чрезвычайно сложен. Желаете ли вы пропустить его и перейти к следующей игре? Вы всегда сможете вернутся позже.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u041e\u0442\u043c\u0435\u043d\u0430</button><button id="abortOk" class="secondary">Да</button></div></div>' +
        ('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + rc() + "</div>") + (1 == b ? '<div id="dialogHelpStack" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u0421\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0431\u043b\u043e\u043a\u043e\u0432 "\u0448\u0430\u0433\u043d\u0443\u0442\u044c \u0432\u043f\u0435\u0440\u0451\u0434", \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u043e\u0447\u044c \u043c\u043d\u0435 \u0434\u043e\u0441\u0442\u0438\u0447\u044c \u0446\u0435\u043b\u0438.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u041d\u0430 \u0434\u0430\u043d\u043d\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043b\u043e\u0436\u0438\u0442\u044c \u0432\u043c\u0435\u0441\u0442\u0435 \u0432\u0441\u0435 \u0431\u043b\u043e\u043a\u0438 \u043d\u0430 \u0431\u0435\u043b\u043e\u043c \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u043f\u043e\u043b\u0435.<iframe id="iframeOneTopBlock" style="height: 80px; width: 100%; border: none;" src=""></iframe></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td>\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c, \u0447\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' :
            2 == b ? '<div id="dialogHelpReset" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td>\u0412\u0430\u0448\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043d\u0435 \u0440\u0435\u0448\u0438\u043b\u0430 \u0437\u0430\u0434\u0430\u0447\u0443. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u00ab\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c\u00bb \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' :
            3 == b ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td><img src="maze/help_up.png"></td><td>\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u0434\u043e \u043a\u043e\u043d\u0446\u0430 \u044d\u0442\u043e\u0433\u043e \u043f\u0443\u0442\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0432\u0430 \u0431\u043b\u043e\u043a\u0430. \u0414\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0431\u043b\u043e\u043a\u0430 \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 "\u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c".</td><td><img src="common/help.png"></td></tr></table></div>' :
            4 == b ? '<div id="dialogHelpCapacity" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u0412\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 \u0432\u0441\u0435 \u0431\u043b\u043e\u043a\u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f. \u0427\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a, \u0432\u043d\u0430\u0447\u0430\u043b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td><img src="maze/help_up.png"></td><td>\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u0431\u043b\u043e\u043a\u0430 \u00ab\u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c\u00bb.</td><td><img src="common/help.png"></td></tr></table></div>' :
            5 == b ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td><img src="common/help.png"></td><td>\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432 \u044d\u0442\u043e\u043c \u043c\u0435\u043d\u044e \u0441\u0432\u043e\u0435\u0433\u043e \u043b\u044e\u0431\u0438\u043c\u043e\u0433\u043e \u043f\u0443\u0442\u043d\u0438\u043a\u0430.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : 6 == b ? '<div id="dialogHelpIf" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td><img src="maze/help_up.png"></td><td>\u0411\u043b\u043e\u043a "\u0435\u0441\u043b\u0438" \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442 \u0447\u0442\u043e-\u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0443\u0441\u043b\u043e\u0432\u0438\u044f. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043d\u0430\u043b\u0435\u0432\u043e, \u0435\u0441\u043b\u0438 \u043f\u0443\u0442\u044c \u0432\u043b\u0435\u0432\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d.</td><td><img src="common/help.png"></td></tr></table></div>' :
            7 == b ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 %1 \u0432 \u0431\u043b\u043e\u043a\u0435 "\u0435\u0441\u043b\u0438" \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0435\u0433\u043e \u0443\u0441\u043b\u043e\u0432\u0438\u044f.</td><td><img src="common/help.png"></td></tr></table></div>' : 9 == b ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td><img src="maze/help_down.png"></td><td>\u041a\u043e\u043c\u0430\u043d\u0434\u0430 "\u0435\u0441\u043b\u0438-\u0438\u043d\u0430\u0447\u0435" \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442 \u043e\u0434\u043d\u043e \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.</td><td><img src="common/help.png"></td></tr></table></div>' :
            10 == b ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><span class="closeDialogButton" onclick="closeDialog2()">&times;</span><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u041c\u043e\u0436\u0435\u0442\u0435 \u043b\u0438 \u0432\u044b \u0440\u0435\u0448\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u043b\u0430\u0431\u0438\u0440\u0438\u043d\u0442? \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043b\u0435\u0432\u043e\u0439 \u0441\u0442\u0435\u043d\u044b.' +
            rc() + "</td></tr></table></div>" : "")
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Bc = {},
    H, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc;

function Qc(a) {
    this.Wh = Object.create(null);
    if (a) {
        a = a.split(",");
        for (var b = 0; b < a.length; b++) this.Wh[a[b]] = !0
    }
    this.reset()
}
Qc.prototype.reset = function () {
    this.qf = Object.create(null);
    this.jh = Object.create(null)
};
Qc.prototype.getName = function (a, b) {
    var c = a.toLowerCase() + "_" + b;
    if (c in this.qf) return this.qf[c];
    var d;
    (d = a) ? (d = encodeURI(d.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(d[0]) && (d = "my_" + d)) : d = "unnamed";
    for (var e = ""; this.jh[d + e] || d + e in this.Wh;) e = e ? e + 1 : 2;
    d += e;
    this.jh[d] = !0;
    return this.qf[c] = d
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Rc(a) {
    var b;
    H && (b = a.Db().Q);
    var c = $b("xml");

    if (navigator.appName.indexOf('Explorer')==-1){
        a = Sc(a, !0);
        for (var d = 0, e; e = a[d]; d++) {
            var f = Tc(e);
            e = I(e);
            f.setAttribute("x", H ? b - e.x : e.x);
            f.setAttribute("y", e.y);
            //console.log('------',f);
            c.appendChild.call(c,f)
        }
    }
    return c
}

function Tc(a) {
    var b = $b("block");
    b.setAttribute("type", a.type);
    b.setAttribute("id", a.id);
    if (a.Kh) {
        var c = a.Kh();
        c && b.appendChild(c)
    }
    for (var d = 0; c = a.N[d]; d++)
        for (var e = 0, f; f = c.ua[e]; e++)
            if (f.name && f.xc) {
                var h = $b("field", null, f.Gc());
                h.setAttribute("name", f.name);
                b.appendChild(h)
            }
    a.ha && (c = $b("comment", null, a.ha.hb()), c.setAttribute("pinned", a.ha.v()), d = a.ha.dc(), c.setAttribute("h", d.height), c.setAttribute("w", d.width), b.appendChild(c));
    d = !1;
    for (e = 0; c = a.N[e]; e++) {
        var k;
        f = !0;
        5 != c.type && (h = J(c.o), 1 == c.type ?
            (k = $b("value"), d = !0) : 3 == c.type && (k = $b("statement")), h && (k.appendChild(Tc(h)), f = !1), k.setAttribute("name", c.name), f || b.appendChild(k))
    }
    d && b.setAttribute("inline", a.qd);
    a.isCollapsed() && b.setAttribute("collapsed", !0);
    a.disabled && b.setAttribute("disabled", !0);
    a.ac && !K || b.setAttribute("deletable", !1);
    a.Fb && !K || b.setAttribute("movable", !1);
    a.Cc && !K || b.setAttribute("editable", !1);
    if (a = Uc(a)) k = $b("next", null, Tc(a)), b.appendChild(k);
    return b
}

function Vc(a) {
    return (new XMLSerializer).serializeToString(a)
}

function Wc(a) {
    a = (new DOMParser).parseFromString(a, "text/xml");
    if (!a || !a.firstChild || "xml" != a.firstChild.nodeName.toLowerCase() || a.firstChild !== a.lastChild) throw "Blockly.Xml.textToDom did not obtain a valid XML tree.";
    return a.firstChild
}

function Xc(a, b) {
    if (H) var c = a.Db().Q;
    for (var d = 0, e; e = b.childNodes[d]; d++)
        if ("block" == e.nodeName.toLowerCase()) {
            var f = Yc(a, e),
                h = parseInt(e.getAttribute("x"), 10);
            e = parseInt(e.getAttribute("y"), 10);
            isNaN(h) || isNaN(e) || f.moveBy(H ? c - h : h, e)
        }
}

function Yc(a, b, c) {
    var d = null,
        e = b.getAttribute("type");
    if (!e) throw "Block type unspecified: \n" + b.outerHTML;
    var f = b.getAttribute("id");
    if (c && f) {
        d = Zc(f, a);
        if (!d) throw "Couldn't get Block with id: " + f;
        f = d.getParent();
        d.s && d.j(!0, !1, !0);
        d.fill(a, e);
        d.xa = f
    } else d = $c(a, e);
    d.k || ad(d);
    (f = b.getAttribute("inline")) && bd(d, "true" == f);
    (f = b.getAttribute("disabled")) && cd(d, "true" == f);
    (f = b.getAttribute("deletable")) && dd(d, "true" == f);
    if (f = b.getAttribute("movable")) d.Fb = "true" == f;
    (f = b.getAttribute("editable")) && ed(d,
        "true" == f);
    for (var h = null, f = 0, k; k = b.childNodes[f]; f++)
        if (3 != k.nodeType || !k.data.match(/^\s*$/)) {
            for (var h = null, l = 0, q; q = k.childNodes[l]; l++) 3 == q.nodeType && q.data.match(/^\s*$/) || (h = q);
            l = k.getAttribute("name");
            switch (k.nodeName.toLowerCase()) {
            case "mutation":
                d.dj && d.dj(k);
                break;
            case "comment":
                fd(d, k.textContent);
                var p = k.getAttribute("pinned");
                p && setTimeout(function () {
                    d.ha.K("true" == p)
                }, 1);
                h = parseInt(k.getAttribute("w"), 10);
                k = parseInt(k.getAttribute("h"), 10);
                isNaN(h) || isNaN(k) || d.ha.pc(h, k);
                break;
            case "title":
            case "field":
                gd(d,
                    l).ob(k.textContent);
                break;
            case "value":
            case "statement":
                k = hd(d, l);
                if (!k) throw "Input " + l + " does not exist in block " + e;
                if (h && "block" == h.nodeName.toLowerCase())
                    if (h = Yc(a, h, c), h.I) id(k.o, h.I);
                    else if (h.C) id(k.o, h.C);
                else throw "Child block does not have output or previous statement.";
                break;
            case "next":
                if (h && "block" == h.nodeName.toLowerCase()) {
                    if (!d.J) throw "Next statement does not exist.";
                    if (d.J.p) throw "Next statement is already connected.";
                    h = Yc(a, h, c);
                    if (!h.C) throw "Next block does not have previous statement.";
                    id(d.J, h.C)
                }
            }
        }(a = b.getAttribute("collapsed")) && d.zd("true" == a);
    (a = Uc(d)) ? a.B() : d.B();
    return d
}

function jd(a) {
    for (var b = 0, c; c = a.childNodes[b]; b++)
        if ("next" == c.nodeName.toLowerCase()) {
            a.removeChild(c);
            break
        }
}
window.Blockly || (window.Blockly = {});
window.Blockly.Xml || (window.Blockly.Xml = {});
window.Blockly.Xml.domToText = Vc;
window.Blockly.Xml.domToWorkspace = Xc;
window.Blockly.Xml.textToDom = Wc;
window.Blockly.Xml.workspaceToDom = Rc;
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function kd(a) {
    this.t = a;
    this.P = null;
    this.kd = new ld(a, !0, !0);
    this.Id = new ld(a, !1, !0);
    this.$c = L("rect", {
        height: M,
        width: M,
        style: "fill: #fff"
    }, null);
    md(this.$c, a.Uc)
}
kd.prototype.j = function () {
    N(this.Ge);
    this.Ge = null;
    A(this.$c);
    this.P = this.t = this.$c = null;
    this.kd.j();
    this.kd = null;
    this.Id.j();
    this.Id = null
};
kd.prototype.resize = function () {
    var a = this.t.Db();
    if (a) {
        var b = !1,
            c = !1;
        this.P && this.P.Q == a.Q && this.P.za == a.za && this.P.Za == a.Za && this.P.Ya == a.Ya ? (this.P && this.P.Ac == a.Ac && this.P.Fa == a.Fa && this.P.zb == a.zb || (b = !0), this.P && this.P.Sa == a.Sa && this.P.xb == a.xb && this.P.cb == a.cb || (c = !0)) : c = b = !0;
        b && this.kd.resize(a);
        c && this.Id.resize(a);
        this.P && this.P.Q == a.Q && this.P.Ya == a.Ya || this.$c.setAttribute("x", this.Id.Xb);
        this.P && this.P.za == a.za && this.P.Za == a.Za || this.$c.setAttribute("y", this.kd.We);
        this.P = a
    }
};
kd.prototype.set = function (a, b) {
    this.kd.set(a);
    this.Id.set(b)
};

function ld(a, b, c) {
    this.t = a;
    this.He = c || !1;
    this.Ba = b;
    this.nf();
    b ? (this.Wa.setAttribute("height", M), this.$.setAttribute("height", M - 6), this.$.setAttribute("y", 3)) : (this.Wa.setAttribute("width", M), this.$.setAttribute("width", M - 6), this.$.setAttribute("x", 3));
    this.Nh = O(this.Wa, "mousedown", this, this.Pj);
    this.Oh = O(this.$, "mousedown", this, this.Qj)
}
var nd, od, M = "ontouchstart" in document.documentElement ? 25 : 15;
g = ld.prototype;
g.j = function () {
    this.Fe();
    this.Ge && (N(this.Ge), this.Ge = null);
    N(this.Nh);
    this.Nh = null;
    N(this.Oh);
    this.Oh = null;
    A(this.g);
    this.t = this.$ = this.Wa = this.g = null
};
g.resize = function (a) {
    if (!a && (a = this.t.Db(), !a)) return;
    if (this.Ba) {
        var b = a.Q;
        this.He ? b -= M : this.K(b < a.Sa);
        this.Ja = b / a.Ac;
        if (-Infinity === this.Ja || Infinity === this.Ja || isNaN(this.Ja)) this.Ja = 0;
        var c = a.Q * this.Ja,
            d = (a.Fa - a.zb) * this.Ja;
        this.$.setAttribute("width", Math.max(0, c));
        this.Xb = a.Ya;
        this.He && H && (this.Xb += a.Ya + M);
        this.We = a.Za + a.za - M;
        this.g.setAttribute("transform", "translate(" + this.Xb + ", " + this.We + ")");
        this.Wa.setAttribute("width", Math.max(0, b));
        this.$.setAttribute("x", pd(this, d))
    } else {
        b = a.za;
        this.He ?
            b -= M : this.K(b < a.Sa);
        this.Ja = b / a.Sa;
        if (-Infinity === this.Ja || Infinity === this.Ja || isNaN(this.Ja)) this.Ja = 0;
        c = a.za * this.Ja;
        d = (a.xb - a.cb) * this.Ja;
        this.$.setAttribute("height", Math.max(0, c));
        this.Xb = a.Ya;
        H || (this.Xb += a.Q - M);
        this.We = a.Za;
        this.g.setAttribute("transform", "translate(" + this.Xb + ", " + this.We + ")");
        this.Wa.setAttribute("height", Math.max(0, b));
        this.$.setAttribute("y", pd(this, d))
    }
    qd(this)
};
g.nf = function () {
    this.g = L("g", {}, null);
    this.Wa = L("rect", {
        "class": "blocklyScrollbarBackground"
    }, this.g);
    var a = Math.floor((M - 6) / 2);
    this.$ = L("rect", {
        "class": "blocklyScrollbarKnob",
        rx: a,
        ry: a
    }, this.g);
    md(this.g, this.t.Uc)
};
g.v = function () {
    return "none" != this.g.getAttribute("display")
};
g.K = function (a) {
    if (a != this.v()) {
        if (this.He) throw "Unable to toggle visibility of paired scrollbars.";
        a ? this.g.setAttribute("display", "block") : (this.t.ai({
            x: 0,
            y: 0
        }), this.g.setAttribute("display", "none"))
    }
};
g.Pj = function (a) {
    this.Fe();
    if (!rd(a)) {
        var b = sd(a),
            b = this.Ba ? b.x : b.y,
            c = td(this.$),
            c = this.Ba ? c.x : c.y,
            d = parseFloat(this.$.getAttribute(this.Ba ? "width" : "height")),
            e = parseFloat(this.$.getAttribute(this.Ba ? "x" : "y")),
            f = .95 * d;
        b <= c ? e -= f : b >= c + d && (e += f);
        this.$.setAttribute(this.Ba ? "x" : "y", pd(this, e));
        qd(this)
    }
    a.stopPropagation()
};
g.Qj = function (a) {
    this.Fe();
    rd(a) || (this.hk = parseFloat(this.$.getAttribute(this.Ba ? "x" : "y")), this.jk = this.Ba ? a.clientX : a.clientY, nd = O(document, "mouseup", this, this.Fe), od = O(document, "mousemove", this, this.Sj));
    a.stopPropagation()
};
g.Sj = function (a) {
    this.$.setAttribute(this.Ba ? "x" : "y", pd(this, this.hk + ((this.Ba ? a.clientX : a.clientY) - this.jk)));
    qd(this)
};
g.Fe = function () {
    ud();
    vd(!0);
    nd && (N(nd), nd = null);
    od && (N(od), od = null)
};

function pd(a, b) {
    if (0 >= b || isNaN(b)) b = 0;
    else {
        var c = a.Ba ? "width" : "height",
            d = parseFloat(a.Wa.getAttribute(c)),
            c = parseFloat(a.$.getAttribute(c));
        b = Math.min(b, d - c)
    }
    return b
}

function qd(a) {
    var b = parseFloat(a.$.getAttribute(a.Ba ? "x" : "y")),
        c = parseFloat(a.Wa.getAttribute(a.Ba ? "width" : "height")),
        b = b / c;
    isNaN(b) && (b = 0);
    c = {};
    a.Ba ? c.x = b : c.y = b;
    a.t.ai(c)
}
g.set = function (a) {
    this.$.setAttribute(this.Ba ? "x" : "y", a * this.Ja);
    qd(this)
};

function md(a, b) {
    var c = b.nextSibling,
        d = b.parentNode;
    if (!d) throw "Reference node has no parent.";
    c ? d.insertBefore(a, c) : d.appendChild(a)
};

function wd() {
    0 != xd && (yd[ha(this)] = this);
    this.ad = this.ad;
    this.De = this.De
}
var xd = 0,
    yd = {};
wd.prototype.ad = !1;
wd.prototype.j = function () {
    if (!this.ad && (this.ad = !0, this.V(), 0 != xd)) {
        var a = ha(this);
        delete yd[a]
    }
};
wd.prototype.V = function () {
    if (this.De)
        for (; this.De.length;) this.De.shift()()
};
var zd = "closure_listenable_" + (1E6 * Math.random() | 0),
    Ad = 0;

function Bd(a, b, c, d, e) {
    this.hc = a;
    this.Je = null;
    this.src = b;
    this.type = c;
    this.Qd = !!d;
    this.ke = e;
    this.key = ++Ad;
    this.Pc = this.Pd = !1
}

function Cd(a) {
    a.Pc = !0;
    a.hc = null;
    a.Je = null;
    a.src = null;
    a.ke = null
};

function Dd(a) {
    this.src = a;
    this.Ca = {};
    this.Hd = 0
}
Dd.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.Ca[f];
    a || (a = this.Ca[f] = [], this.Hd++);
    var h = Ed(a, b, d, e); - 1 < h ? (b = a[h], c || (b.Pd = !1)) : (b = new Bd(b, this.src, f, !!d, e), b.Pd = c, a.push(b));
    return b
};
Dd.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.Ca)) return !1;
    var e = this.Ca[a];
    b = Ed(e, b, c, d);
    return -1 < b ? (Cd(e[b]), Ra.splice.call(e, b, 1), 0 == e.length && (delete this.Ca[a], this.Hd--), !0) : !1
};

function Fd(a, b) {
    var c = b.type;
    if (!(c in a.Ca)) return !1;
    var d = Ya(a.Ca[c], b);
    d && (Cd(b), 0 == a.Ca[c].length && (delete a.Ca[c], a.Hd--));
    return d
}
Dd.prototype.Ne = function (a) {
    a = a && a.toString();
    var b = 0,
        c;
    for (c in this.Ca)
        if (!a || c == a) {
            for (var d = this.Ca[c], e = 0; e < d.length; e++)++b, Cd(d[e]);
            delete this.Ca[c];
            this.Hd--
        }
    return b
};
Dd.prototype.gd = function (a, b, c, d) {
    a = this.Ca[a.toString()];
    var e = -1;
    a && (e = Ed(a, b, c, d));
    return -1 < e ? a[e] : null
};

function Ed(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Pc && f.hc == b && f.Qd == !!c && f.ke == d) return e
    }
    return -1
};

function Gd(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.kc = !1;
    this.Xh = !0
}
Gd.prototype.V = function () {};
Gd.prototype.j = function () {};
Gd.prototype.stopPropagation = function () {
    this.kc = !0
};
Gd.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.Xh = !1
};
var Hd = !w || w && 9 <= Ob,
    Id = !w || w && 9 <= Ob,
    Jd = w && !y("9");
!x || y("528");
Hb && y("1.9b") || w && y("8") || Gb && y("9.5") || x && y("528");
Hb && !y("8") || w && y("9");
var Kd = "ontouchstart" in m || !!(m.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!m.navigator || !m.navigator.msMaxTouchPoints);

function Ld(a) {
    Ld[" "](a);
    return a
}
Ld[" "] = ba;

function Md(a, b) {
    Gd.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.ag = !1;
    this.Cb = null;
    a && this.H(a, b)
}
v(Md, Gd);
var Nd = [1, 4, 2];
Md.prototype.H = function (a, b) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (Hb) {
            var e;
            a: {
                try {
                    Ld(d.nodeName);
                    e = !0;
                    break a
                } catch (f) {}
                e = !1
            }
            e || (d = null)
        }
    } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.offsetX = x || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = x || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.ag = Cb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.Cb = a;
    a.defaultPrevented && this.preventDefault()
};

function Od(a) {
    return Hd ? 0 == a.Cb.button : "click" == a.type ? !0 : !!(a.Cb.button & Nd[0])
}
Md.prototype.stopPropagation = function () {
    Md.m.stopPropagation.call(this);
    this.Cb.stopPropagation ? this.Cb.stopPropagation() : this.Cb.cancelBubble = !0
};
Md.prototype.preventDefault = function () {
    Md.m.preventDefault.call(this);
    var a = this.Cb;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Jd) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
Md.prototype.V = function () {};
var Pd = "closure_lm_" + (1E6 * Math.random() | 0),
    Qd = {},
    Rd = 0;

function Sd(a, b, c, d, e) {
    if (n(b)) {
        for (var f = 0; f < b.length; f++) Sd(a, b[f], c, d, e);
        return null
    }
    c = Td(c);
    if (a && a[zd]) a = a.A(b, c, d, e);
    else {
        if (!b) throw Error("Invalid event type");
        var f = !!d,
            h = Ud(a);
        h || (a[Pd] = h = new Dd(a));
        c = h.add(b, c, !1, d, e);
        c.Je || (d = Vd(), c.Je = d, d.src = a, d.hc = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(Wd(b.toString()), d), Rd++);
        a = c
    }
    return a
}

function Vd() {
    var a = Xd,
        b = Id ? function (c) {
            return a.call(b.src, b.hc, c)
        } : function (c) {
            c = a.call(b.src, b.hc, c);
            if (!c) return c
        };
    return b
}

function Yd(a, b, c, d, e) {
    if (n(b))
        for (var f = 0; f < b.length; f++) Yd(a, b[f], c, d, e);
    else c = Td(c), a && a[zd] ? a.Xa(b, c, d, e) : a && (a = Ud(a)) && (b = a.gd(b, c, !!d, e)) && Zd(b)
}

function Zd(a) {
    if (fa(a) || !a || a.Pc) return !1;
    var b = a.src;
    if (b && b[zd]) return Fd(b.Mb, a);
    var c = a.type,
        d = a.Je;
    b.removeEventListener ? b.removeEventListener(c, d, a.Qd) : b.detachEvent && b.detachEvent(Wd(c), d);
    Rd--;
    (c = Ud(b)) ? (Fd(c, a), 0 == c.Hd && (c.src = null, b[Pd] = null)) : Cd(a);
    return !0
}

function Wd(a) {
    return a in Qd ? Qd[a] : Qd[a] = "on" + a
}

function $d(a, b, c, d) {
    var e = 1;
    if (a = Ud(a))
        if (b = a.Ca[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.Qd == c && !f.Pc && (e &= !1 !== ae(f, d))
            }
        return Boolean(e)
}

function ae(a, b) {
    var c = a.hc,
        d = a.ke || a.src;
    a.Pd && Zd(a);
    return c.call(d, b)
}

function Xd(a, b) {
    if (a.Pc) return !0;
    if (!Id) {
        var c = b || aa("window.event"),
            d = new Md(c, this),
            e = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            a: {
                var f = !1;
                if (0 == c.keyCode) try {
                    c.keyCode = -1;
                    break a
                } catch (h) {
                    f = !0
                }
                if (f || void 0 == c.returnValue) c.returnValue = !0
            }
            c = [];
            for (f = d.currentTarget; f; f = f.parentNode) c.push(f);
            for (var f = a.type, k = c.length - 1; !d.kc && 0 <= k; k--) d.currentTarget = c[k], e &= $d(c[k], f, !0, d);
            for (k = 0; !d.kc && k < c.length; k++) d.currentTarget = c[k], e &= $d(c[k], f, !1, d)
        }
        return e
    }
    return ae(a, new Md(b, this))
}

function Ud(a) {
    a = a[Pd];
    return a instanceof Dd ? a : null
}
var be = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function Td(a) {
    if (s(a)) return a;
    a[be] || (a[be] = function (b) {
        return a.handleEvent(b)
    });
    return a[be]
};

function ce() {
    wd.call(this);
    this.Mb = new Dd(this);
    this.Ci = this;
    this.Zf = null
}
v(ce, wd);
ce.prototype[zd] = !0;
g = ce.prototype;
g.fe = function () {
    return this.Zf
};
g.lg = function (a) {
    this.Zf = a
};
g.addEventListener = function (a, b, c, d) {
    Sd(this, a, b, c, d)
};
g.removeEventListener = function (a, b, c, d) {
    Yd(this, a, b, c, d)
};
g.dispatchEvent = function (a) {
    var b, c = this.fe();
    if (c)
        for (b = []; c; c = c.fe()) b.push(c);
    var c = this.Ci,
        d = a.type || a;
    if (r(a)) a = new Gd(a, c);
    else if (a instanceof Gd) a.target = a.target || c;
    else {
        var e = a;
        a = new Gd(d, c);
        jb(a, e)
    }
    var e = !0,
        f;
    if (b)
        for (var h = b.length - 1; !a.kc && 0 <= h; h--) f = a.currentTarget = b[h], e = de(f, d, !0, a) && e;
    a.kc || (f = a.currentTarget = c, e = de(f, d, !0, a) && e, a.kc || (e = de(f, d, !1, a) && e));
    if (b)
        for (h = 0; !a.kc && h < b.length; h++) f = a.currentTarget = b[h], e = de(f, d, !1, a) && e;
    return e
};
g.V = function () {
    ce.m.V.call(this);
    this.Mb && this.Mb.Ne(void 0);
    this.Zf = null
};
g.A = function (a, b, c, d) {
    return this.Mb.add(String(a), b, !1, c, d)
};
g.Xa = function (a, b, c, d) {
    return this.Mb.remove(String(a), b, c, d)
};

function de(a, b, c, d) {
    b = a.Mb.Ca[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.Pc && h.Qd == c) {
            var k = h.hc,
                l = h.ke || h.src;
            h.Pd && Fd(a.Mb, h);
            e = !1 !== k.call(l, d) && e
        }
    }
    return e && 0 != d.Xh
}
g.gd = function (a, b, c, d) {
    return this.Mb.gd(String(a), b, c, d)
};

function ee(a, b, c) {
    if (s(a)) c && (a = ma(a, c));
    else if (a && "function" == typeof a.handleEvent) a = ma(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : m.setTimeout(a, b || 0)
};
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function fe(a) {
    this.t = a
}
g = fe.prototype;
g.Yc = 47;
g.Xe = 45;
g.Xc = 15;
g.ui = 35;
g.Fg = 35;
g.Kd = 25;
g.tb = !1;
g.g = null;
g.Te = null;
g.Pf = 0;
g.Tb = 0;
g.Hh = 0;
g.li = 0;
g.G = function () {
    this.g = L("g", {
        filter: "url(#blocklyTrashcanShadowFilter)"
    }, null);
    var a = L("clipPath", {
        id: "blocklyTrashBodyClipPath"
    }, this.g);
    L("rect", {
        width: this.Yc,
        height: this.Xe,
        y: this.Xc
    }, a);
    L("image", {
        width: ge,
        height: he,
        y: -32,
        "clip-path": "url(#blocklyTrashBodyClipPath)"
    }, this.g).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", ie + je);
    a = L("clipPath", {
        id: "blocklyTrashLidClipPath"
    }, this.g);
    L("rect", {
        width: this.Yc,
        height: this.Xc
    }, a);
    this.Te = L("image", {
            width: ge,
            height: he,
            y: -32,
            "clip-path": "url(#blocklyTrashLidClipPath)"
        },
        this.g);
    this.Te.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", ie + je);
    return this.g
};
g.H = function () {
    ke(this, !1);
    this.wd();
    O(window, "resize", this, this.wd)
};
g.j = function () {
    this.g && (A(this.g), this.g = null);
    this.t = this.Te = null;
    m.clearTimeout(this.Pf)
};
g.wd = function () {
    var a = this.t.Db();
    a && (this.Hh = H ? this.Fg : a.Q + a.Ya - this.Yc - this.Fg, this.li = a.za + a.Za - (this.Xe + this.Xc) - this.ui, this.g.setAttribute("transform", "translate(" + this.Hh + "," + this.li + ")"))
};

function ke(a, b) {
    a.tb != b && (m.clearTimeout(a.Pf), a.tb = b, a.Lg())
}
g.Lg = function () {
    this.Tb += this.tb ? 10 : -10;
    this.Tb = Math.max(0, this.Tb);
    this.Te.setAttribute("transform", "rotate(" + (H ? -this.Tb : this.Tb) + ", " + (H ? 4 : this.Yc - 4) + ", " + (this.Xc - 2) + ")");
    if (this.tb ? 45 > this.Tb : 0 < this.Tb) this.Pf = ee(this.Lg, 5, this)
};
g.close = function () {
    ke(this, !1)
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function le(a, b) {
    this.Db = a;
    this.ai = b;
    this.Fh = !1;
    this.Vc = [];
    this.Tf = Infinity;
    var c = [];
    c[1] = new me;
    c[2] = new me;
    c[3] = new me;
    c[4] = new me;
    this.Qi = c
}
g = le.prototype;
g.wf = !1;
g.scrollX = 0;
g.scrollY = 0;
g.Ma = null;
g.yf = null;
g.Vb = null;
g.G = function () {
    this.g = L("g", {}, null);
    this.Z = L("g", {}, this.g);
    this.Uc = L("g", {}, this.g);
    ne(this);
    return this.g
};
g.j = function () {
    this.g && (A(this.g), this.g = null);
    this.Uc = this.Z = null;
    this.Ma && (this.Ma.j(), this.Ma = null)
};

function oe() {
    var a = z;
    if (Cc && !K) {
        a.Ma = new fe(a);
        var b = a.Ma.G();
        a.g.insertBefore(b, a.Z);
        a.Ma.H()
    }
}

function pe(a, b) {
    a.Vc.push(b);
    qe && a == z && -1 == re.indexOf(b) && re.push(b);
    ne(a)
}

function se(a, b) {
    for (var c = !1, d, e = 0; d = a.Vc[e]; e++)
        if (d == b) {
            a.Vc.splice(e, 1);
            c = !0;
            break
        }
    if (!c) throw "Block not present in workspace's list of top-most blocks.";
    qe && a == z && re.Kl(b);
    ne(a)
}

function Sc(a, b) {
    var c = [].concat(a.Vc);
    if (b && 1 < c.length) {
        var d = Math.sin(3 / 180 * Math.PI);
        H && (d *= -1);
        c.sort(function (a, b) {
            var c = I(a),
                k = I(b);
            return c.y + d * c.x - (k.y + d * k.x)
        })
    }
    return c
}

function te(a) {
    a = Sc(a, !1);
    for (var b = 0; b < a.length; b++) a.push.apply(a, a[b].Nb());
    return a
}
g.clear = function () {
    for (vd(); this.Vc.length;) this.Vc[0].j()
};
g.B = function () {
    for (var a = te(this), b = 0, c; c = a[b]; b++) c.Nb().length || c.B()
};

function ue(a, b) {
    for (var c = te(a), d = 0, e; e = c[d]; d++)
        if (e.id == b) return e;
    return null
}

function ve(a, b) {
    a.xg = b;
    a.yg && (N(a.yg), a.yg = null);
    b && (a.yg = O(a.Z, "blocklySelectChange", a, function () {
        this.xg = !1
    }))
}

function we(a) {
    var b = z;
    b.xg && 0 != xe && ve(b, !1);
    if (b.xg) {
        var c = null;
        if (a && (c = ue(b, a), !c)) return;
        ve(b, !1);
        c ? c.select() : P && ye();
        setTimeout(function () {
            ve(b, !0)
        }, 1)
    }
}

function ne(a) {
    a.yf && window.clearTimeout(a.yf);
    var b = a.Z;
    b && (a.yf = window.setTimeout(function () {
        ze(b, "blocklyWorkspaceChange")
    }, 0))
}

function Ae(a) {
	//console.log("Ae",a.Tf)
    return Infinity == a.Tf ? Infinity : a.Tf - te(a).length
}
le.prototype.clear = le.prototype.clear;

function Be(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
g = Be.prototype;
g.clone = function () {
    return new Be(this.top, this.right, this.bottom, this.left)
};
g.toString = function () {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
g.contains = function (a) {
    return this && a ? a instanceof Be ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
g.expand = function (a, b, c, d) {
    ga(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
    return this
};
g.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
g.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
g.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
g.translate = function (a, b) {
    a instanceof Tb ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, fa(b) && (this.top += b, this.bottom += b));
    return this
};
g.scale = function (a, b) {
    var c = fa(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};

function Ce(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
g = Ce.prototype;
g.clone = function () {
    return new Ce(this.left, this.top, this.width, this.height)
};
g.toString = function () {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
g.contains = function (a) {
    return a instanceof Ce ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
g.wh = function () {
    return new Pb(this.width, this.height)
};
g.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.translate = function (a, b) {
    a instanceof Tb ? (this.left += a.x, this.top += a.y) : (this.left += a, fa(b) && (this.top += b));
    return this
};
g.scale = function (a, b) {
    var c = fa(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};

function De(a, b) {
    var c = Wb(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function Ee(a, b) {
    return De(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function Fe() {
    var a = document,
        b = a.body,
        a = a.documentElement;
    return new Tb(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
}

function Ge(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    w && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function He(a) {
    if (w && !(w && 8 <= Ob)) return a.offsetParent;
    var b = Wb(a),
        c = Ee(a, "position"),
        d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = Ee(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return null
}

function Ie(a) {
    var b, c = Wb(a),
        d = Ee(a, "position"),
        e = Hb && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
        f = new Tb(0, 0),
        h;
    b = c ? Wb(c) : document;
    (h = !w || w && 9 <= Ob) || (h = "CSS1Compat" == Ub(b).Bb.compatMode);
    h = h ? b.documentElement : b.body;
    if (a == h) return f;
    if (a.getBoundingClientRect) b = Ge(a), c = Ub(c).Bb, a = x || "CSS1Compat" != c.compatMode ? c.body || c.documentElement : c.documentElement, c = c.parentWindow || c.defaultView, a = w && y("10") && c.pageYOffset != a.scrollTop ? new Tb(a.scrollLeft,
        a.scrollTop) : new Tb(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (x && "fixed" == Ee(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while (b && b != a);
        if (Gb || x && "absolute" == d) f.y -= c.body.offsetTop;
        for (b = a;
            (b = He(b)) &&
            b != c.body && b != h;) f.x -= b.scrollLeft, Gb && "TR" == b.tagName || (f.y -= b.scrollTop)
    }
    return f
}

function Je(a) {
    var b = Ke;
    if ("none" != Ee(a, "display")) return b(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}

function Ke(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = x && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ge(a), new Pb(a.right - a.left, a.bottom - a.top)) : new Pb(b, c)
}

function Le(a) {
    var b = Ie(a);
    a = Je(a);
    return new Ce(b.x, b.y, a.width, a.height)
}

function Me(a, b) {
    a.style.display = b ? "" : "none"
}
var Ne = Hb ? "MozUserSelect" : x ? "WebkitUserSelect" : null;

function Oe(a, b, c) {
    c = c ? null : a.getElementsByTagName("*");
    if (Ne) {
        if (b = b ? "none" : "", a.style[Ne] = b, c) {
            a = 0;
            for (var d; d = c[a]; a++) d.style[Ne] = b
        }
    } else if (w || Gb)
        if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
            for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
}
var Pe = {
    thin: 2,
    medium: 4,
    thick: 6
};

function Qe(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null,
        d;
    if (c in Pe) d = Pe[c];
    else if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
    else {
        d = a.style.left;
        var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = d;
        a.runtimeStyle.left = e;
        d = c
    }
    return d
}

function Re(a) {
    if (w && !(w && 9 <= Ob)) {
        var b = Qe(a, "borderLeft"),
            c = Qe(a, "borderRight"),
            d = Qe(a, "borderTop");
        a = Qe(a, "borderBottom");
        return new Be(d, c, a, b)
    }
    b = De(a, "borderLeftWidth");
    c = De(a, "borderRightWidth");
    d = De(a, "borderTopWidth");
    a = De(a, "borderBottomWidth");
    return new Be(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
};

function Se(a) {
    wd.call(this);
    this.zh = a;
    this.we = {}
}
v(Se, wd);
var Te = [];
g = Se.prototype;
g.A = function (a, b, c, d) {
    n(b) || (b && (Te[0] = b.toString()), b = Te);
    for (var e = 0; e < b.length; e++) {
        var f = Sd(a, b[e], c || this.handleEvent, d || !1, this.zh || this);
        if (!f) break;
        this.we[f.key] = f
    }
    return this
};
g.Xa = function (a, b, c, d, e) {
    if (n(b))
        for (var f = 0; f < b.length; f++) this.Xa(a, b[f], c, d, e);
    else c = c || this.handleEvent, e = e || this.zh || this, c = Td(c), d = !!d, b = a && a[zd] ? a.gd(b, c, d, e) : a ? (a = Ud(a)) ? a.gd(b, c, d, e) : null : null, b && (Zd(b), delete this.we[b.key]);
    return this
};
g.Ne = function () {
    hb(this.we, Zd);
    this.we = {}
};
g.V = function () {
    Se.m.V.call(this);
    this.Ne()
};
g.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
};

function Ue() {}
ca(Ue);
Ue.prototype.Nj = 0;

function Ve(a) {
    ce.call(this);
    this.Vd = a || Ub();
    this.Qe = We;
    this.ne = null;
    this.w = !1;
    this.u = null;
    this.Pb = void 0;
    this.Jb = this.R = this.xa = this.Ae = null;
    this.rk = !1
}
v(Ve, ce);
Ve.prototype.Aj = Ue.Ob();
var We = null;

function Xe(a, b) {
    switch (a) {
    case 1:
        return b ? "disable" : "enable";
    case 2:
        return b ? "highlight" : "unhighlight";
    case 4:
        return b ? "activate" : "deactivate";
    case 8:
        return b ? "select" : "unselect";
    case 16:
        return b ? "check" : "uncheck";
    case 32:
        return b ? "focus" : "blur";
    case 64:
        return b ? "open" : "close"
    }
    throw Error("Invalid component state");
}

function Ye(a) {
    return a.ne || (a.ne = ":" + (a.Aj.Nj++).toString(36))
}
g = Ve.prototype;
g.i = function () {
    return this.u
};

function Ze(a) {
    a.Pb || (a.Pb = new Se(a));
    return a.Pb
}
g.Qa = function (a) {
    if (this == a) throw Error("Unable to set parent component");
    if (a && this.xa && this.ne && $e(this.xa, this.ne) && this.xa != a) throw Error("Unable to set parent component");
    this.xa = a;
    Ve.m.lg.call(this, a)
};
g.getParent = function () {
    return this.xa
};
g.lg = function (a) {
    if (this.xa && this.xa != a) throw Error("Method not supported");
    Ve.m.lg.call(this, a)
};
g.gb = function () {
    return this.Vd
};
g.G = function () {
    this.u = this.Vd.createElement("div")
};
g.B = function (a) {
    this.yd(a)
};
g.yd = function (a, b) {
    if (this.w) throw Error("Component already rendered");
    this.u || this.G();
    a ? a.insertBefore(this.u, b || null) : this.Vd.Bb.body.appendChild(this.u);
    this.xa && !this.xa.w || this.na()
};
g.na = function () {
    this.w = !0;
    af(this, function (a) {
        !a.w && a.i() && a.na()
    })
};
g.Ua = function () {
    af(this, function (a) {
        a.w && a.Ua()
    });
    this.Pb && this.Pb.Ne();
    this.w = !1
};
g.V = function () {
    this.w && this.Ua();
    this.Pb && (this.Pb.j(), delete this.Pb);
    af(this, function (a) {
        a.j()
    });
    !this.rk && this.u && A(this.u);
    this.xa = this.Ae = this.u = this.Jb = this.R = null;
    Ve.m.V.call(this)
};
g.Ld = function (a, b) {
    this.yc(a, bf(this), b)
};
g.yc = function (a, b, c) {
    if (a.w && (c || !this.w)) throw Error("Component already rendered");
    if (0 > b || b > bf(this)) throw Error("Child component index out of bounds");
    this.Jb && this.R || (this.Jb = {}, this.R = []);
    if (a.getParent() == this) {
        var d = Ye(a);
        this.Jb[d] = a;
        Ya(this.R, a)
    } else {
        var d = this.Jb,
            e = Ye(a);
        if (e in d) throw Error('The object already contains the key "' + e + '"');
        d[e] = a
    }
    a.Qa(this);
    $a(this.R, b, 0, a);
    a.w && this.w && a.getParent() == this ? (c = this.fb(), c.insertBefore(a.i(), c.childNodes[b] || null)) : c ? (this.u || this.G(), b = Q(this,
        b + 1), a.yd(this.fb(), b ? b.u : null)) : this.w && !a.w && a.u && a.u.parentNode && 1 == a.u.parentNode.nodeType && a.na()
};
g.fb = function () {
    return this.u
};

function cf(a) {
    null == a.Qe && (a.Qe = "rtl" == Ee(a.w ? a.u : a.Vd.Bb.body, "direction"));
    return a.Qe
}
g.Bd = function (a) {
    if (this.w) throw Error("Component already rendered");
    this.Qe = a
};

function df(a) {
    return !!a.R && 0 != a.R.length
}

function bf(a) {
    return a.R ? a.R.length : 0
}

function $e(a, b) {
    var c;
    a.Jb && b ? (c = a.Jb, c = (b in c ? c[b] : void 0) || null) : c = null;
    return c
}

function Q(a, b) {
    return a.R ? a.R[b] || null : null
}

function af(a, b, c) {
    a.R && Ta(a.R, b, c)
}

function ef(a, b) {
    return a.R && b ? Sa(a.R, b) : -1
}
g.removeChild = function (a, b) {
    if (a) {
        var c = r(a) ? a : Ye(a);
        a = $e(this, c);
        if (c && a) {
            var d = this.Jb;
            c in d && delete d[c];
            Ya(this.R, a);
            b && (a.Ua(), a.u && A(a.u));
            a.Qa(null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
g.Vh = function (a) {
    for (var b = []; df(this);) b.push(this.removeChild(Q(this, 0), a));
    return b
};

function ff(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return r(a) && a.match(/\S+/g) || []
}

function gf(a, b) {
    return a.classList ? a.classList.contains(b) : Xa(ff(a), b)
}

function hf(a, b) {
    a.classList ? a.classList.add(b) : gf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}

function jf(a, b) {
    if (a.classList) Ta(b, function (b) {
        hf(a, b)
    });
    else {
        var c = {};
        Ta(ff(a), function (a) {
            c[a] = !0
        });
        Ta(b, function (a) {
            c[a] = !0
        });
        a.className = "";
        for (var d in c) a.className += 0 < a.className.length ? " " + d : d
    }
}

function kf(a, b) {
    a.classList ? a.classList.remove(b) : gf(a, b) && (a.className = Ua(ff(a), function (a) {
        return a != b
    }).join(" "))
}

function lf(a, b) {
    a.classList ? Ta(b, function (b) {
        kf(a, b)
    }) : a.className = Ua(ff(a), function (a) {
        return !Xa(b, a)
    }).join(" ")
};

function mf(a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!s(b)) throw Error("Invalid decorator function " + b);
}
var nf = {};
var of;

function pf(a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role")
}

function qf(a, b, c) {
    n(c) && (c = c.join(" "));
    var d = "aria-" + b;
    "" === c || void 0 == c ? (of || (of = {
        atomic: !1,
        autocomplete: "none",
        dropeffect: "none",
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: "none",
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
    }), c = of, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
};

function rf() {}
var sf;
ca(rf);
var tf = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
g = rf.prototype;
g.Xd = function () {};
g.G = function (a) {
    var b = a.gb().G("div", this.$d(a).join(" "), a.Ab);
    uf(a, b);
    return b
};
g.fb = function (a) {
    return a
};
g.bd = function (a, b, c) {
    if (a = a.i ? a.i() : a) {
        var d = [b];
        w && !y("7") && (d = vf(ff(a), b), d.push(b));
        (c ? jf : lf)(a, d)
    }
};
g.pd = function (a) {
    cf(a) && this.Bd(a.i(), !0);
    a.isEnabled() && this.qc(a, a.v())
};

function wf(a, b, c) {
    if (a = c || a.Xd()) c = b.getAttribute("role") || null, a != c && pf(b, a)
}

function uf(a, b) {
    a.v() || qf(b, "hidden", !a.v());
    a.isEnabled() || xf(b, 1, !a.isEnabled());
    a.T & 8 && xf(b, 8, a.te());
    a.T & 16 && xf(b, 16, !!(a.Y & 16));
    a.T & 64 && xf(b, 64, a.tb())
}
g.ig = function (a, b) {
    Oe(a, !b, !w && !Gb)
};
g.Bd = function (a, b) {
    this.bd(a, this.va() + "-rtl", b)
};
g.Qb = function (a) {
    var b;
    return a.T & 32 && (b = a.ea()) ? ic(b) && jc(b) : !1
};
g.qc = function (a, b) {
    var c;
    if (a.T & 32 && (c = a.ea())) {
        if (!b && a.Y & 32) {
            try {
                c.blur()
            } catch (d) {}
            a.Y & 32 && a.ld(null)
        }(ic(c) && jc(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
    }
};
g.K = function (a, b) {
    Me(a, b);
    a && qf(a, "hidden", !b)
};
g.mb = function (a, b, c) {
    var d = a.i();
    if (d) {
        var e = this.Zd(b);
        e && this.bd(a, e, c);
        xf(d, b, c)
    }
};

function xf(a, b, c) {
    sf || (sf = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    b = sf[b];
    var d = a.getAttribute("role") || null;
    d && (d = tf[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && qf(a, b, c)
}
g.ea = function (a) {
    return a.i()
};
g.va = function () {
    return "goog-control"
};
g.$d = function (a) {
    var b = this.va(),
        c = [b],
        d = this.va();
    d != b && c.push(d);
    b = a.Y;
    for (d = []; b;) {
        var e = b & -b;
        d.push(this.Zd(e));
        b &= ~e
    }
    c.push.apply(c, d);
    (a = a.rb) && c.push.apply(c, a);
    w && !y("7") && c.push.apply(c, vf(c));
    return c
};

function vf(a, b) {
    var c = [];
    b && (a = a.concat([b]));
    Ta([], function (d) {
        !Wa(d, na(Xa, a)) || b && !Xa(d, b) || c.push(d.join("_"))
    });
    return c
}
g.Zd = function (a) {
    if (!this.Sg) {
        var b = this.va();
        b.replace(/\xa0|\s/g, " ");
        this.Sg = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    }
    return this.Sg[a]
};

function yf(a, b, c, d, e) {
    if (!(w || x && y("525"))) return !0;
    if (Cb && e) return zf(a);
    if (e && !d) return !1;
    fa(b) && (b = Af(b));
    if (!c && (17 == b || 18 == b || Cb && 91 == b)) return !1;
    if (x && d && c) switch (a) {
    case 220:
    case 219:
    case 221:
    case 192:
    case 186:
    case 189:
    case 187:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
        return !1
    }
    if (w && d && b == a) return !1;
    switch (a) {
    case 13:
        return !0;
    case 27:
        return !x
    }
    return zf(a)
}

function zf(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || x && 0 == a) return !0;
    switch (a) {
    case 32:
    case 63:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
        return !0;
    default:
        return !1
    }
}

function Af(a) {
    if (Hb) a = Bf(a);
    else if (Cb && x) a: switch (a) {
    case 93:
        a = 91;
        break a
    }
    return a
}

function Bf(a) {
    switch (a) {
    case 61:
        return 187;
    case 59:
        return 186;
    case 173:
        return 189;
    case 224:
        return 91;
    case 0:
        return 224;
    default:
        return a
    }
};

function Cf(a, b) {
    ce.call(this);
    a && Df(this, a, b)
}
v(Cf, ce);
g = Cf.prototype;
g.u = null;
g.ue = null;
g.Nf = null;
g.ve = null;
g.Oa = -1;
g.Sb = -1;
g.df = !1;
var Ef = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    Ff = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    Gf = w || x && y("525"),
    Hf = Cb && Hb;
g = Cf.prototype;
g.sj = function (a) {
    x && (17 == this.Oa && !a.ctrlKey || 18 == this.Oa && !a.altKey || Cb && 91 == this.Oa && !a.metaKey) && (this.Sb = this.Oa = -1); - 1 == this.Oa && (a.ctrlKey && 17 != a.keyCode ? this.Oa = 17 : a.altKey && 18 != a.keyCode ? this.Oa = 18 : a.metaKey && 91 != a.keyCode && (this.Oa = 91));
    Gf && !yf(a.keyCode, this.Oa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Sb = Af(a.keyCode), Hf && (this.df = a.altKey))
};
g.tj = function (a) {
    this.Sb = this.Oa = -1;
    this.df = a.altKey
};
g.handleEvent = function (a) {
    var b = a.Cb,
        c, d, e = b.altKey;
    w && "keypress" == a.type ? (c = this.Sb, d = 13 != c && 27 != c ? b.keyCode : 0) : x && "keypress" == a.type ? (c = this.Sb, d = 0 <= b.charCode && 63232 > b.charCode && zf(c) ? b.charCode : 0) : Gb ? (c = this.Sb, d = zf(c) ? b.keyCode : 0) : (c = b.keyCode || this.Sb, d = b.charCode || 0, Hf && (e = this.df), Cb && 63 == d && 224 == c && (c = 191));
    var f = c = Af(c),
        h = b.keyIdentifier;
    c ? 63232 <= c && c in Ef ? f = Ef[c] : 25 == c && a.shiftKey && (f = 9) : h && h in Ff && (f = Ff[h]);
    a = f == this.Oa;
    this.Oa = f;
    b = new Jf(f, d, a, b);
    b.altKey = e;
    this.dispatchEvent(b)
};
g.i = function () {
    return this.u
};

function Df(a, b, c) {
    a.ve && a.detach();
    a.u = b;
    a.ue = Sd(a.u, "keypress", a, c);
    a.Nf = Sd(a.u, "keydown", a.sj, c, a);
    a.ve = Sd(a.u, "keyup", a.tj, c, a)
}
g.detach = function () {
    this.ue && (Zd(this.ue), Zd(this.Nf), Zd(this.ve), this.ve = this.Nf = this.ue = null);
    this.u = null;
    this.Sb = this.Oa = -1
};
g.V = function () {
    Cf.m.V.call(this);
    this.detach()
};

function Jf(a, b, c, d) {
    Md.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
}
v(Jf, Md);

function R(a, b, c) {
    Ve.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = ha(b);
            if (d = nf[d]) break;
            b = b.m ? b.m.constructor : null
        }
        b = d ? s(d.Ob) ? d.Ob() : new d : null
    }
    this.F = b;
    this.ek(void 0 !== a ? a : null)
}
v(R, Ve);
g = R.prototype;
g.Ab = null;
g.Y = 0;
g.T = 39;
g.Ji = 255;
g.Ed = 0;
g.aa = !0;
g.rb = null;
g.nd = !0;
g.cf = !1;
g.Wj = null;
g.ea = function () {
    return this.F.ea(this)
};
g.ee = function () {
    return this.wa || (this.wa = new Cf)
};
g.bd = function (a, b) {
    b ? a && (this.rb ? Xa(this.rb, a) || this.rb.push(a) : this.rb = [a], this.F.bd(this, a, !0)) : a && this.rb && Ya(this.rb, a) && (0 == this.rb.length && (this.rb = null), this.F.bd(this, a, !1))
};
g.G = function () {
    var a = this.F.G(this);
    this.u = a;
    wf(this.F, a, this.ge());
    this.cf || this.F.ig(a, !1);
    this.v() || this.F.K(a, !1)
};
g.ge = function () {
    return this.Wj
};
g.fb = function () {
    return this.F.fb(this.i())
};
g.na = function () {
    R.m.na.call(this);
    this.F.pd(this);
    if (this.T & -2 && (this.nd && Kf(this, !0), this.T & 32)) {
        var a = this.ea();
        if (a) {
            var b = this.ee();
            Df(b, a);
            Ze(this).A(b, "key", this.ib).A(a, "focus", this.je).A(a, "blur", this.ld)
        }
    }
};

function Kf(a, b) {
    var c = Ze(a),
        d = a.i();
    b ? (c.A(d, "mouseover", a.Jf).A(d, "mousedown", a.Hc).A(d, "mouseup", a.od).A(d, "mouseout", a.If), a.md != ba && c.A(d, "contextmenu", a.md), w && c.A(d, "dblclick", a.xh)) : (c.Xa(d, "mouseover", a.Jf).Xa(d, "mousedown", a.Hc).Xa(d, "mouseup", a.od).Xa(d, "mouseout", a.If), a.md != ba && c.Xa(d, "contextmenu", a.md), w && c.Xa(d, "dblclick", a.xh))
}
g.Ua = function () {
    R.m.Ua.call(this);
    this.wa && this.wa.detach();
    this.v() && this.isEnabled() && this.F.qc(this, !1)
};
g.V = function () {
    R.m.V.call(this);
    this.wa && (this.wa.j(), delete this.wa);
    delete this.F;
    this.rb = this.Ab = null
};
g.ek = function (a) {
    this.Ab = a
};
g.Cf = function () {
    var a = this.Ab;
    if (!a) return "";
    if (!r(a))
        if (n(a)) a = Va(a, kc).join("");
        else {
            if (Sb && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
            else {
                var b = [];
                lc(a, b, !0);
                a = b.join("")
            }
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            Sb || (a = a.replace(/ +/g, " "));
            " " != a && (a = a.replace(/^\s*/, ""))
        }
    return ta(a)
};
g.Bd = function (a) {
    R.m.Bd.call(this, a);
    var b = this.i();
    b && this.F.Bd(b, a)
};
g.ig = function (a) {
    this.cf = a;
    var b = this.i();
    b && this.F.ig(b, a)
};
g.v = function () {
    return this.aa
};
g.K = function (a, b) {
    if (b || this.aa != a && this.dispatchEvent(a ? "show" : "hide")) {
        var c = this.i();
        c && this.F.K(c, a);
        this.isEnabled() && this.F.qc(this, a);
        this.aa = a;
        return !0
    }
    return !1
};
g.isEnabled = function () {
    return !(this.Y & 1)
};
g.Ad = function (a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Lf(this, 1, !a) || (a || (this.setActive(!1), this.kb(!1)), this.v() && this.F.qc(this, a), this.mb(1, !a, !0))
};
g.kb = function (a) {
    Lf(this, 2, a) && this.mb(2, a)
};
g.setActive = function (a) {
    Lf(this, 4, a) && this.mb(4, a)
};
g.te = function () {
    return !!(this.Y & 8)
};
g.fk = function () {
    Lf(this, 8, !0) && this.mb(8, !0)
};

function Mf(a, b) {
    Lf(a, 16, b) && a.mb(16, b)
}
g.tb = function () {
    return !!(this.Y & 64)
};

function Nf(a, b) {
    Lf(a, 64, b) && a.mb(64, b)
}
g.mb = function (a, b, c) {
    c || 1 != a ? this.T & a && b != !!(this.Y & a) && (this.F.mb(this, a, b), this.Y = b ? this.Y | a : this.Y & ~a) : this.Ad(!b)
};
g.Ra = function (a, b) {
    if (this.w && this.Y & a && !b) throw Error("Component already rendered");
    !b && this.Y & a && this.mb(a, !1);
    this.T = b ? this.T | a : this.T & ~a
};

function Of(a, b) {
    return !!(a.Ji & b) && !!(a.T & b)
}

function Lf(a, b, c) {
    return !!(a.T & b) && !!(a.Y & b) != c && (!(a.Ed & b) || a.dispatchEvent(Xe(b, c))) && !a.ad
}
g.Jf = function (a) {
    !Pf(a, this.i()) && this.dispatchEvent("enter") && this.isEnabled() && Of(this, 2) && this.kb(!0)
};
g.If = function (a) {
    !Pf(a, this.i()) && this.dispatchEvent("leave") && (Of(this, 4) && this.setActive(!1), Of(this, 2) && this.kb(!1))
};
g.md = ba;

function Pf(a, b) {
    return !!a.relatedTarget && fc(b, a.relatedTarget)
}
g.Hc = function (a) {
    this.isEnabled() && (Of(this, 2) && this.kb(!0), !Od(a) || x && Cb && a.ctrlKey || (Of(this, 4) && this.setActive(!0), this.F.Qb(this) && this.ea().focus()));
    this.cf || !Od(a) || x && Cb && a.ctrlKey || a.preventDefault()
};
g.od = function (a) {
    this.isEnabled() && (Of(this, 2) && this.kb(!0), this.Y & 4 && this.vd(a) && Of(this, 4) && this.setActive(!1))
};
g.xh = function (a) {
    this.isEnabled() && this.vd(a)
};
g.vd = function (a) {
    Of(this, 16) && Mf(this, !(this.Y & 16));
    Of(this, 8) && this.fk();
    Of(this, 64) && Nf(this, !this.tb());
    var b = new Gd("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.ag = a.ag);
    return this.dispatchEvent(b)
};
g.je = function () {
    Of(this, 32) && Lf(this, 32, !0) && this.mb(32, !0)
};
g.ld = function () {
    Of(this, 4) && this.setActive(!1);
    Of(this, 32) && Lf(this, 32, !1) && this.mb(32, !1)
};
g.ib = function (a) {
    return this.v() && this.isEnabled() && this.ec(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.ec = function (a) {
    return 13 == a.keyCode && this.vd(a)
};
if (!s(R)) throw Error("Invalid component class " + R);
if (!s(rf)) throw Error("Invalid renderer class " + rf);
var Qf = ha(R);
nf[Qf] = rf;
mf("goog-control", function () {
    return new R(null)
});

function Rf() {
    this.Tg = []
}
v(Rf, rf);
ca(Rf);

function Sf(a, b) {
    var c = a.Tg[b];
    if (!c) {
        switch (b) {
        case 0:
            c = a.va() + "-highlight";
            break;
        case 1:
            c = a.va() + "-checkbox";
            break;
        case 2:
            c = a.va() + "-content"
        }
        a.Tg[b] = c
    }
    return c
}
g = Rf.prototype;
g.Xd = function () {
    return "menuitem"
};
g.G = function (a) {
    var b = a.gb().G("div", this.$d(a).join(" "), Tf(this, a.Ab, a.gb()));
    Uf(this, a, b, !!(a.T & 8) || !!(a.T & 16));
    return b
};
g.fb = function (a) {
    return a && a.firstChild
};

function Tf(a, b, c) {
    a = Sf(a, 2);
    return c.G("div", a, b)
}
g.bi = function (a, b, c) {
    a && b && Uf(this, a, b, c)
};
g.jg = function (a, b, c) {
    a && b && Uf(this, a, b, c)
};

function Uf(a, b, c, d) {
    wf(a, c, b.ge());
    uf(b, c);
    var e;
    if (e = a.fb(c)) {
        e = e.firstChild;
        var f = Sf(a, 1);
        e = !!e && ga(e) && 1 == e.nodeType && gf(e, f)
    } else e = !1;
    d != e && (d ? hf(c, "goog-option") : kf(c, "goog-option"), c = a.fb(c), d ? (a = Sf(a, 1), c.insertBefore(b.gb().G("div", a), c.firstChild || null)) : c.removeChild(c.firstChild))
}
g.Zd = function (a) {
    switch (a) {
    case 2:
        return Sf(this, 0);
    case 16:
    case 8:
        return "goog-option-selected";
    default:
        return Rf.m.Zd.call(this, a)
    }
};
g.va = function () {
    return "goog-menuitem"
};

function Vf(a, b, c, d) {
    R.call(this, a, d || Rf.Ob(), c);
    this.ob(b)
}
v(Vf, R);
g = Vf.prototype;
g.Gc = function () {
    var a = this.Ae;
    return null != a ? a : this.Cf()
};
g.ob = function (a) {
    this.Ae = a
};
g.Ra = function (a, b) {
    Vf.m.Ra.call(this, a, b);
    switch (a) {
    case 8:
        this.Y & 16 && !b && Mf(this, !1);
        var c = this.i();
        c && this.F.bi(this, c, b);
        break;
    case 16:
        (c = this.i()) && this.F.jg(this, c, b)
    }
};
g.bi = function (a) {
    this.Ra(8, a)
};
g.jg = function (a) {
    this.Ra(16, a)
};
g.Cf = function () {
    var a = this.Ab;
    return n(a) ? (a = Va(a, function (a) {
        return ga(a) && 1 == a.nodeType && (gf(a, "goog-menuitem-accel") || gf(a, "goog-menuitem-mnemonic-separator")) ? "" : kc(a)
    }).join(""), ta(a)) : Vf.m.Cf.call(this)
};
g.od = function (a) {
    var b = this.getParent();
    if (b) {
        var c = b.Ph;
        b.Ph = null;
        if (b = c && fa(a.clientX)) b = new Tb(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
        if (b) return
    }
    Vf.m.od.call(this, a)
};
g.ec = function (a) {
    return a.keyCode == this.Jh && this.vd(a) ? !0 : Vf.m.ec.call(this, a)
};
g.kj = function () {
    return this.Jh
};
mf("goog-menuitem", function () {
    return new Vf(null)
});
Vf.prototype.ge = function () {
    return this.T & 16 ? "menuitemcheckbox" : this.T & 8 ? "menuitemradio" : Vf.m.ge.call(this)
};
Vf.prototype.getParent = function () {
    return R.prototype.getParent.call(this)
};
Vf.prototype.fe = function () {
    return R.prototype.fe.call(this)
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Wf(a) {
    this.n = a;
    this.g = L("g", {}, null);
    this.Ue = L("path", {
        "class": "blocklyPathDark",
        transform: "translate(1, 1)"
    }, this.g);
    this.Ib = L("path", {
        "class": "blocklyPath"
    }, this.g);
    this.Ve = L("path", {
        "class": "blocklyPathLight"
    }, this.g);
    this.Ib.Ea = this.n;
    Xf(this.Ib);
    Yf(this)
}
Wf.prototype.height = 0;
Wf.prototype.width = 0;
Wf.prototype.H = function () {
    var a = this.n;
    this.vc();
    for (var b = 0, c; c = a.N[b]; b++) c.H();
    a.Be && a.Be.sl()
};

function Yf(a) {
    a.n.Fb && !K ? Zf(a.g, "blocklyDraggable") : $f(a.g, "blocklyDraggable")
}
Wf.prototype.oa = function () {
    return this.g
};
var ag = 7 * (1 - Math.SQRT1_2) + 1,
    bg = 9 * (1 - Math.SQRT1_2) - 1,
    cg = "m " + ag + "," + ag,
    dg = "a 9,9 0 0,0 " + (-bg - 1) + "," + (8 - bg),
    eg = "a 9,9 0 0,0 " + (8 - bg) + "," + (bg + 1);
g = Wf.prototype;
g.j = function () {
    A(this.g);
    this.n = this.Ue = this.Ve = this.Ib = this.g = null
};

function fg(a) {
    var b = (new Date - a.qg) / 150;
    1 < b ? A(a) : (a.setAttribute("transform", "translate(" + (a.mi + (H ? -1 : 1) * a.Ng.width / 2 * b + ", " + (a.ni + a.Ng.height * b)) + ") scale(" + (1 - b) + ")"), window.setTimeout(function () {
        fg(a)
    }, 10))
}

function gg(a) {
    var b = (new Date - a.qg) / 150;
    1 < b ? A(a) : (a.setAttribute("r", 25 * b), a.style.opacity = 1 - b, window.setTimeout(function () {
        gg(a)
    }, 10))
}
g.vc = function () {
    if (!this.n.disabled) {
        var a = hg(ig(this.n.lf)),
            b, c;
        c = a;
        if (!jg.test(c)) throw Error("'" + c + "' is not a valid hex color");
        4 == c.length && (c = c.replace(kg, "#$1$1$2$2$3$3"));
        c = c.toLowerCase();
        b = [parseInt(c.substr(1, 2), 16), parseInt(c.substr(3, 2), 16), parseInt(c.substr(5, 2), 16)];
        c = lg([255, 255, 255], b, .3);
        b = lg([0, 0, 0], b, .4);
        this.Ve.setAttribute("stroke", hg(c));
        this.Ue.setAttribute("fill", hg(b));
        this.Ib.setAttribute("fill", a)
    }
};

function mg(a) {
    a.n.disabled || ng(a.n) ? (Zf(a.g, "blocklyDisabled"), a.Ib.setAttribute("fill", "url(#blocklyDisabledPattern)")) : ($f(a.g, "blocklyDisabled"), a.vc());
    a = a.n.Nb();
    for (var b = 0, c; c = a[b]; b++) mg(c.k)
}
g.$e = function () {
    Zf(this.g, "blocklySelected");
    this.g.parentNode.appendChild(this.g)
};
g.Oe = function () {
    $f(this.g, "blocklySelected")
};
g.B = function () {
    this.n.L = !0;
    var a = 10;
    H && (a = -a);
    for (var b = og(this.n), c = 0; c < b.length; c++) {
        var d = b[c];
        d.n.isCollapsed() ? d.Ia.setAttribute("display", "none") : (d.Ia.setAttribute("display", "block"), H && (a -= 16), d.Ia.setAttribute("transform", "translate(" + a + ", 5)"), pg(d), a = H ? a - 10 : a + 26)
    }
    var e = a += H ? 10 : -10,
        f = this.n.N,
        b = [];
    b.S = e + 20;
    if (this.n.C || this.n.J) b.S = Math.max(b.S, 40);
    for (var d = c = 0, h = !1, k = !1, l = !1, q = void 0, p = this.n.qd && !this.n.isCollapsed(), u = 0, t; t = f[u]; u++)
        if (t.v()) {
            var E;
            p && q && 3 != q && 3 != t.type ? E = b[b.length -
                1] : (q = t.type, E = [], E.type = p && 3 != t.type ? -1 : t.type, E.height = 0, b.push(E));
            E.push(t);
            t.mc = 25;
            t.ra = p && 1 == t.type ? 20.5 : 0;
            if (t.o && t.o.p) {
                var wa = qg(J(t.o));
                t.mc = Math.max(t.mc, wa.height);
                t.ra = Math.max(t.ra, wa.width)
            }
            u == f.length - 1 && t.mc--;
            E.height = Math.max(E.height, t.mc);
            t.eb = 0;
            1 == b.length && (t.eb += H ? -e : e);
            for (var wa = !1, If = 0, mb; mb = t.ua[If]; If++) {
                0 != If && (t.eb += 10);
                var li = mb.wh();
                mb.ra = li.width;
                mb.Pe = wa && mb.xc ? 10 : 0;
                t.eb += mb.ra + mb.Pe;
                E.height = Math.max(E.height, li.height);
                wa = mb.xc
            } - 1 != E.type && (3 == E.type ? (k = !0, d = Math.max(d,
                t.eb)) : (1 == E.type ? h = !0 : 5 == E.type && (l = !0), c = Math.max(c, t.eb)))
        }
    for (e = 0; E = b[e]; e++)
        if (E.ki = !1, -1 == E.type)
            for (f = 0; t = E[f]; f++)
                if (1 == t.type) {
                    E.height += 10;
                    E.ki = !0;
                    break
                }
    b.Se = 20 + d;
    k && (b.S = Math.max(b.S, b.Se + 30));
    h ? b.S = Math.max(b.S, c + 20 + 8) : l && (b.S = Math.max(b.S, c + 20));
    b.xj = h;
    b.Dl = k;
    b.Cl = l;
    d = a;
    this.n.I ? this.pg = this.Re = !0 : (this.pg = this.Re = !1, this.n.C && (a = J(this.n.C)) && Uc(a) == this.n && (this.Re = !0), Uc(this.n) && (this.pg = !0));
    h = I(this.n);
    k = [];
    l = [];
    a = [];
    c = [];
    t = b.S;
    this.Re ? (k.push("m 0,0"), a.push("m 1,1")) : (k.push("m 0,8"),
        a.push(H ? cg : "m 1,7"), k.push("A 8,8 0 0,1 8,0"), a.push("A 7,7 0 0,1 8,1"));
    this.n.C && (k.push("H", 15), a.push("H", 15), k.push("l 6,4 3,0 6,-4"), a.push("l 6.5,4 2,0 6.5,-4"), this.n.C.moveTo(h.x + (H ? -30 : 30), h.y));
    k.push("H", t);
    a.push("H", t + (H ? -1 : 0));
    this.width = t;
    for (E = t = 0; e = b[E]; E++) {
        p = 10;
        0 == E && (p += H ? -d : d);
        a.push("M", b.S - 1 + "," + (t + 1));
        if (this.n.isCollapsed()) f = e[0], u = t + 18, rg(f.ua, p, u), k.push("l 8,0 0,4 8,4 -16,8 8,4"), H ? a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4") : a.push("h 8"), f = e.height - 20, k.push("v", f),
            H && a.push("v", f - 2), this.width += 15;
        else if (-1 == e.type) {
            for (q = 0; f = e[q]; q++) u = t + 18, e.ki && (u += 5), p = rg(f.ua, p, u), 5 != f.type && (p += f.ra + 10), 1 == f.type && (l.push("M", p - 10 + "," + (t + 5)), l.push("h", 6 - f.ra), l.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), l.push("v", f.mc + 1 - 20), l.push("h", f.ra + 2 - 8), l.push("z"), H ? (c.push("M", p - 10 - 3 + 8 - f.ra + "," + (t + 5 + 1)), c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"), c.push("v", f.mc - 20 + 3), c.push("h", f.ra - 8 + 1)) : (c.push("M", p - 10 + 1 + "," + (t + 5 + 1)), c.push("v", f.mc + 1), c.push("h",
                6 - f.ra), c.push("M", p - f.ra - 10 + .8 + "," + (t + 5 + 20 - .4)), c.push("l", "3.36,-1.8")), u = H ? h.x - p - 8 + 10 + f.ra + 1 : h.x + p + 8 - 10 - f.ra - 1, wa = h.y + t + 5 + 1, f.o.moveTo(u, wa), f.o.p && sg(f.o));
            p = Math.max(p, b.S);
            this.width = Math.max(this.width, p);
            k.push("H", p);
            a.push("H", p + (H ? -1 : 0));
            k.push("v", e.height);
            H && a.push("v", e.height - 2)
        } else 1 == e.type ? (f = e[0], u = t + 18, -1 != f.align && (q = b.S - f.eb - 8 - 20, 1 == f.align ? p += q : 0 == f.align && (p += (q + p) / 2)), rg(f.ua, p, u), k.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), q = e.height - 20, k.push("v", q), H ? (a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
            a.push("v", q)) : (a.push("M", b.S - 4.2 + "," + (t + 20 - .4)), a.push("l", "3.36,-1.8")), u = h.x + (H ? -b.S - 1 : b.S + 1), wa = h.y + t, f.o.moveTo(u, wa), f.o.p && (sg(f.o), this.width = Math.max(this.width, b.S + qg(J(f.o)).width - 8 + 1))) : 5 == e.type ? (f = e[0], u = t + 18, -1 != f.align && (q = b.S - f.eb - 20, b.xj && (q -= 8), 1 == f.align ? p += q : 0 == f.align && (p += (q + p) / 2)), rg(f.ua, p, u), k.push("v", e.height), H && a.push("v", e.height - 2)) : 3 == e.type && (f = e[0], 0 == E && (k.push("v", 10), H && a.push("v", 9), t += 10), u = t + 18, -1 != f.align && (q = b.Se - f.eb - 20, 1 == f.align ? p += q : 0 == f.align && (p +=
            (q + p) / 2)), rg(f.ua, p, u), p = b.Se + 30, k.push("H", p), k.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), k.push("v", e.height - 16), k.push("a 8,8 0 0,0 8,8"), k.push("H", b.S), H ? (a.push("M", p - 30 + bg + "," + (t + bg)), a.push(dg), a.push("v", e.height - 16), a.push("a 9,9 0 0,0 9,9"), a.push("H", b.S - 1)) : (a.push("M", p - 30 + bg + "," + (t + e.height - bg)), a.push(eg), a.push("H", b.S)), u = h.x + (H ? -p : p), wa = h.y + t + 1, f.o.moveTo(u, wa), f.o.p && (sg(f.o), this.width = Math.max(this.width, b.Se + qg(J(f.o)).width)), E == b.length - 1 || 3 == b[E + 1].type) && (k.push("v",
            10), H && a.push("v", 9), t += 10);
        t += e.height
    }
    b.length || (t = 25, k.push("V", t), H && a.push("V", t - 1));
    b = t;
    this.height = b + 1;
    this.n.J && (k.push("H", "30 l -6,4 -3,0 -6,-4"), this.n.J.moveTo(H ? h.x - 30 : h.x + 30, h.y + b + 1), this.n.J.p && sg(this.n.J), this.height += 4);
    this.pg ? (k.push("H 0"), H || a.push("M", "1," + b)) : (k.push("H", 8), k.push("a", "8,8 0 0,1 -8,-8"), H || (a.push("M", ag + "," + (b - ag)), a.push("A", "7,7 0 0,1 1," + (b - 8))));
    this.n.I ? (this.n.I.moveTo(h.x, h.y), k.push("V", 20), k.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"), H ? (a.push("M",
        "-2.4,8.9"), a.push("l", "-3.6,-2.1")) : (a.push("V", 19), a.push("m", "-7.36,-1 q -1.52,-5.5 0,-11"), a.push("m", "7.36,1 V 1 H 2")), this.width += 8) : H || (this.Re ? a.push("V", 1) : a.push("V", 8));
    k.push("z");
    b = k.join(" ") + "\n" + l.join(" ");
    this.Ib.setAttribute("d", b);
    this.Ue.setAttribute("d", b);
    b = a.join(" ") + "\n" + c.join(" ");
    this.Ve.setAttribute("d", b);
    H && (this.Ib.setAttribute("transform", "scale(-1 1)"), this.Ve.setAttribute("transform", "scale(-1 1)"), this.Ue.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    (b = this.n.getParent()) ? b.B() : ze(window, "resize")
};

function rg(a, b, c) {
    H && (b = -b);
    for (var d = 0, e; e = a[d]; d++) H ? (b -= e.Pe + e.ra, e.oa().setAttribute("transform", "translate(" + b + ", " + c + ")"), e.ra && (b -= 10)) : (e.oa().setAttribute("transform", "translate(" + (b + e.Pe) + ", " + c + ")"), e.ra && (b += e.Pe + e.ra + 10));
    return H ? -b : b
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function tg(a) {
    this.h = null;
    this.W = L("g", {}, null);
    this.Zc = L("rect", {
        rx: 4,
        ry: 4,
        x: -5,
        y: -12,
        height: 16
    }, this.W);
    this.ya = L("text", {
        "class": "blocklyText"
    }, this.W);
    this.Sc = {
        height: 25,
        width: 0
    };
    this.Ka(a);
    this.aa = !0
}
g = tg.prototype;
g.clone = function () {
    La("There should never be an instance of Field, only its derived classes.")
};
g.xc = !0;
g.H = function (a) {
    if (this.h) throw "Field has already been initialized once.";
    this.h = a;
    this.wc();
    S(a).appendChild(this.W);
    this.Uf = O(this.W, "mouseup", this, this.Yf);
    this.Ka(null)
};
g.j = function () {
    this.Uf && (N(this.Uf), this.Uf = null);
    this.h = null;
    A(this.W);
    this.Zc = this.ya = this.W = null
};
g.wc = function () {
    this.xc && (this.h.Cc && !K ? (Zf(this.W, "blocklyEditableText"), $f(this.W, "blocklyNoNEditableText"), this.W.style.cursor = this.qi) : (Zf(this.W, "blocklyNonEditableText"), $f(this.W, "blocklyEditableText"), this.W.style.cursor = ""))
};
g.v = function () {
    return this.aa
};
g.K = function (a) {
    this.aa = a;
    this.oa().style.display = a ? "block" : "none";
    this.yd()
};
g.oa = function () {
    return this.W
};
g.yd = function () {
    try {
        var a = this.ya.getComputedTextLength()
    } catch (b) {
        a = 8 * this.ya.childNodes[0].length
    }
    this.Zc && this.Zc.setAttribute("width", a + 10);
    this.Sc.width = a
};
g.wh = function () {
    this.Sc.width || this.yd();
    return this.Sc
};
g.hb = function () {
    return this.Da
};
g.Ka = function (a) {
    null !== a && a !== this.Da && (this.Da = a, ug(this), this.h && this.h.L && (this.h.B(), this.h.Ga(), ne(this.h.s)))
};

function ug(a) {
    var b = a.Da;
    dc(a.ya);
    b = b.replace(/\s/g, "\u00a0");
    H && b && (b += "\u200f");
    b || (b = "\u00a0");
    a.ya.appendChild(document.createTextNode(b));
    a.Sc.width = 0
}
g.Gc = function () {
    return this.hb()
};
g.ob = function (a) {
    this.Ka(a)
};
g.Yf = function (a) {
    if (!Eb && !Fb || 0 === a.layerX || 0 === a.layerY) rd(a) || 2 != xe && this.h.Cc && !K && vg(this)
};
g.wb = function () {};

function wg(a) {
    this.Mg = a
}
ca(wg);
g = wg.prototype;
g.Xd = function () {
    return this.Mg
};

function xg(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
}
g.G = function (a) {
    return a.gb().G("div", this.$d(a).join(" "))
};
g.fb = function (a) {
    return a
};
g.pd = function (a) {
    a = a.i();
    Oe(a, !0, Hb);
    w && (a.hideFocus = !0);
    var b = this.Xd();
    b && pf(a, b)
};
g.ea = function (a) {
    return a.i()
};
g.va = function () {
    return "goog-container"
};
g.$d = function (a) {
    var b = this.va(),
        c = [b, a.Nc == yg ? b + "-horizontal" : b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c
};

function zg() {}
v(zg, rf);
ca(zg);
zg.prototype.G = function (a) {
    return a.gb().G("div", this.va())
};
zg.prototype.va = function () {
    return "goog-menuseparator"
};

function Ag(a, b) {
    R.call(this, null, a || zg.Ob(), b);
    this.Ra(1, !1);
    this.Ra(2, !1);
    this.Ra(4, !1);
    this.Ra(32, !1);
    this.Y = 1
}
v(Ag, R);
Ag.prototype.na = function () {
    Ag.m.na.call(this);
    var a = this.i();
    pf(a, "separator")
};
mf("goog-menuseparator", function () {
    return new Ag
});

function Bg(a) {
    this.Mg = a || "menu"
}
v(Bg, wg);
ca(Bg);
Bg.prototype.va = function () {
    return "goog-menu"
};
Bg.prototype.pd = function (a) {
    Bg.m.pd.call(this, a);
    a = a.i();
    qf(a, "haspopup", "true")
};
mf("goog-menuseparator", function () {
    return new Ag
});

function Cg(a, b, c) {
    Ve.call(this, c);
    this.F = b || wg.Ob();
    this.Nc = a || Dg
}
v(Cg, Ve);
var yg = "horizontal",
    Dg = "vertical";
g = Cg.prototype;
g.Of = null;
g.wa = null;
g.F = null;
g.Nc = null;
g.aa = !0;
g.bc = !0;
g.Af = !0;
g.M = -1;
g.X = null;
g.Mc = !1;
g.Ei = !1;
g.Uj = !0;
g.yb = null;
g.ea = function () {
    return this.Of || this.F.ea(this)
};
g.ee = function () {
    return this.wa || (this.wa = new Cf(this.ea()))
};
g.G = function () {
    this.u = this.F.G(this)
};
g.fb = function () {
    return this.F.fb(this.i())
};
g.na = function () {
    Cg.m.na.call(this);
    af(this, function (a) {
        a.w && Eg(this, a)
    }, this);
    var a = this.i();
    this.F.pd(this);
    this.K(this.aa, !0);
    Ze(this).A(this, "enter", this.Gf).A(this, "highlight", this.rj).A(this, "unhighlight", this.wj).A(this, "open", this.uj).A(this, "close", this.oj).A(a, "mousedown", this.Hc).A(Wb(a), "mouseup", this.pj).A(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.nj);
    this.Qb() && Fg(this, !0)
};

function Fg(a, b) {
    var c = Ze(a),
        d = a.ea();
    b ? c.A(d, "focus", a.je).A(d, "blur", a.ld).A(a.ee(), "key", a.ib) : c.Xa(d, "focus", a.je).Xa(d, "blur", a.ld).Xa(a.ee(), "key", a.ib)
}
g.Ua = function () {
    this.Rc(-1);
    this.X && Nf(this.X, !1);
    this.Mc = !1;
    Cg.m.Ua.call(this)
};
g.V = function () {
    Cg.m.V.call(this);
    this.wa && (this.wa.j(), this.wa = null);
    this.F = this.X = this.yb = this.Of = null
};
g.Gf = function () {
    return !0
};
g.rj = function (a) {
    var b = ef(this, a.target);
    if (-1 < b && b != this.M) {
        var c = Q(this, this.M);
        c && c.kb(!1);
        this.M = b;
        c = Q(this, this.M);
        this.Mc && c.setActive(!0);
        this.Uj && this.X && c != this.X && (c.T & 64 ? Nf(c, !0) : Nf(this.X, !1))
    }
    b = this.i();
    null != a.target.i() && qf(b, "activedescendant", a.target.i().id)
};
g.wj = function (a) {
    a.target == Q(this, this.M) && (this.M = -1);
    this.i().removeAttribute("aria-activedescendant")
};
g.uj = function (a) {
    (a = a.target) && a != this.X && a.getParent() == this && (this.X && Nf(this.X, !1), this.X = a)
};
g.oj = function (a) {
    a.target == this.X && (this.X = null)
};
g.Hc = function (a) {
    this.bc && (this.Mc = !0);
    var b = this.ea();
    b && ic(b) && jc(b) ? b.focus() : a.preventDefault()
};
g.pj = function () {
    this.Mc = !1
};
g.nj = function (a) {
    var b = Gg(this, a.target);
    if (b) switch (a.type) {
    case "mousedown":
        b.Hc(a);
        break;
    case "mouseup":
        b.od(a);
        break;
    case "mouseover":
        b.Jf(a);
        break;
    case "mouseout":
        b.If(a);
        break;
    case "contextmenu":
        b.md(a)
    }
};

function Gg(a, b) {
    if (a.yb)
        for (var c = a.i(); b && b !== c;) {
            var d = b.id;
            if (d in a.yb) return a.yb[d];
            b = b.parentNode
        }
    return null
}
g.je = function () {};
g.ld = function () {
    this.Rc(-1);
    this.Mc = !1;
    this.X && Nf(this.X, !1)
};
g.ib = function (a) {
    return this.isEnabled() && this.v() && (0 != bf(this) || this.Of) && this.ec(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.ec = function (a) {
    var b = Q(this, this.M);
    if (b && "function" == typeof b.ib && b.ib(a) || this.X && this.X != b && "function" == typeof this.X.ib && this.X.ib(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
    case 27:
        if (this.Qb()) this.ea().blur();
        else return !1;
        break;
    case 36:
        Hg(this);
        break;
    case 35:
        Ig(this);
        break;
    case 38:
        if (this.Nc == Dg) Jg(this);
        else return !1;
        break;
    case 37:
        if (this.Nc == yg) cf(this) ? Kg(this) : Jg(this);
        else return !1;
        break;
    case 40:
        if (this.Nc == Dg) Kg(this);
        else return !1;
        break;
    case 39:
        if (this.Nc ==
            yg) cf(this) ? Jg(this) : Kg(this);
        else return !1;
        break;
    default:
        return !1
    }
    return !0
};

function Eg(a, b) {
    var c = b.i(),
        c = c.id || (c.id = Ye(b));
    a.yb || (a.yb = {});
    a.yb[c] = b
}
g.Ld = function (a, b) {
    Cg.m.Ld.call(this, a, b)
};
g.yc = function (a, b, c) {
    a.Ed |= 2;
    a.Ed |= 64;
    !this.Qb() && this.Ei || a.Ra(32, !1);
    a.w && 0 != a.nd && Kf(a, !1);
    a.nd = !1;
    var d = a.getParent() == this ? ef(this, a) : -1;
    Cg.m.yc.call(this, a, b, c);
    a.w && this.w && Eg(this, a);
    a = d; - 1 == a && (a = bf(this));
    a == this.M ? this.M = Math.min(bf(this) - 1, b) : a > this.M && b <= this.M ? this.M++ : a < this.M && b > this.M && this.M--
};
g.removeChild = function (a, b) {
    if (a = r(a) ? $e(this, a) : a) {
        var c = ef(this, a); - 1 != c && (c == this.M ? (a.kb(!1), this.M = -1) : c < this.M && this.M--);
        var d = a.i();
        d && d.id && this.yb && (c = this.yb, d = d.id, d in c && delete c[d])
    }
    c = a = Cg.m.removeChild.call(this, a, b);
    c.w && 1 != c.nd && Kf(c, !0);
    c.nd = !0;
    return a
};
g.v = function () {
    return this.aa
};
g.K = function (a, b) {
    if (b || this.aa != a && this.dispatchEvent(a ? "show" : "hide")) {
        this.aa = a;
        var c = this.i();
        c && (Me(c, a), this.Qb() && xg(this.ea(), this.bc && this.aa), b || this.dispatchEvent(this.aa ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
g.isEnabled = function () {
    return this.bc
};
g.Ad = function (a) {
    this.bc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.bc = !0, af(this, function (a) {
        a.oi ? delete a.oi : a.Ad(!0)
    })) : (af(this, function (a) {
        a.isEnabled() ? a.Ad(!1) : a.oi = !0
    }), this.Mc = this.bc = !1), this.Qb() && xg(this.ea(), a && this.aa))
};
g.Qb = function () {
    return this.Af
};
g.qc = function (a) {
    a != this.Af && this.w && Fg(this, a);
    this.Af = a;
    this.bc && this.aa && xg(this.ea(), a)
};
g.Rc = function (a) {
    (a = Q(this, a)) ? a.kb(!0) : -1 < this.M && Q(this, this.M).kb(!1)
};
g.kb = function (a) {
    this.Rc(ef(this, a))
};

function Hg(a) {
    Lg(a, function (a, c) {
        return (a + 1) % c
    }, bf(a) - 1)
}

function Ig(a) {
    Lg(a, function (a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, 0)
}

function Kg(a) {
    Lg(a, function (a, c) {
        return (a + 1) % c
    }, a.M)
}

function Jg(a) {
    Lg(a, function (a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, a.M)
}

function Lg(a, b, c) {
    c = 0 > c ? ef(a, a.X) : c;
    var d = bf(a);
    c = b.call(a, c, d);
    for (var e = 0; e <= d;) {
        var f = Q(a, c);
        if (f && a.Rg(f)) {
            a.Rc(c);
            break
        }
        e++;
        c = b.call(a, c, d)
    }
}
g.Rg = function (a) {
    return a.v() && a.isEnabled() && !!(a.T & 2)
};

function Mg() {}
v(Mg, rf);
ca(Mg);
Mg.prototype.va = function () {
    return "goog-menuheader"
};

function Ng(a, b, c) {
    R.call(this, a, c || Mg.Ob(), b);
    this.Ra(1, !1);
    this.Ra(2, !1);
    this.Ra(4, !1);
    this.Ra(32, !1);
    this.Y = 1
}
v(Ng, R);
mf("goog-menuheader", function () {
    return new Ng(null)
});

function Og(a, b) {
    Cg.call(this, Dg, b || Bg.Ob(), a);
    this.qc(!1)
}
v(Og, Cg);
g = Og.prototype;
g.bf = !0;
g.Fi = !1;
g.va = function () {
    return this.F.va()
};
g.removeItem = function (a) {
    (a = this.removeChild(a, !0)) && a.j()
};

function Pg(a) {
    a.bf = !0;
    a.qc(!0)
}
g.K = function (a, b, c) {
    (b = Og.m.K.call(this, a, b)) && a && this.w && this.bf && this.ea().focus();
    this.Ph = a && c && fa(c.clientX) ? new Tb(c.clientX, c.clientY) : null;
    return b
};
g.Gf = function (a) {
    this.bf && this.ea().focus();
    return Og.m.Gf.call(this, a)
};
g.Rg = function (a) {
    return (this.Fi || a.isEnabled()) && a.v() && !!(a.T & 2)
};
g.ec = function (a) {
    var b = Og.m.ec.call(this, a);
    b || af(this, function (c) {
        !b && c.kj && c.Jh == a.keyCode && (this.isEnabled() && this.kb(c), b = c.ib(a))
    }, this);
    return b
};
g.Rc = function (a) {
    Og.m.Rc.call(this, a);
    if (a = Q(this, a)) {
        var b = a.i();
        a = this.i();
        var c = Ie(b),
            d = Ie(a),
            e = Re(a),
            f = c.x - d.x - e.left,
            c = c.y - d.y - e.top,
            d = a.clientHeight - b.offsetHeight,
            e = a.scrollLeft,
            h = a.scrollTop,
            e = e + Math.min(f, Math.max(f - (a.clientWidth - b.offsetWidth), 0)),
            h = h + Math.min(c, Math.max(c - d, 0)),
            b = new Tb(e, h);
        a.scrollLeft = b.x;
        a.scrollTop = b.y
    }
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Qg(a, b) {
    this.Lc = a;
    this.jf = b;
    Rg(this);
    var c = Sg(this)[0];
    this.Na = c[1];
    this.Md = L("tspan", {}, null);
    this.Md.appendChild(document.createTextNode(H ? Tg + " " : " " + Tg));
    Qg.m.constructor.call(this, c[0])
}
v(Qg, tg);
var Tg = Db ? "\u25bc" : "\u25be";
g = Qg.prototype;
g.clone = function () {
    return new Qg(this.Lc, this.jf)
};
g.qi = "default";

function vg(a) {
    Ug(a);
    for (var b = new Og, c = Sg(a), d = 0; d < c.length; d++) {
        var e = c[d][1],
            f = new Vf(c[d][0]);
        f.ob(e);
        f.jg(!0);
        b.Ld(f, !0);
        Mf(f, e == a.Na)
    }
    Sd(b, "action", function (b) {
        if (b = b.target) {
            b = b.Gc();
            if (a.jf) {
                var c = a.jf(b);
                void 0 !== c && (b = c)
            }
            null !== b && a.ob(b)
        }
        Vg == a && Wg()
    });
    Ze(b).A(b.i(), "touchstart", function (a) {
        Gg(this, a.target).Hc(a)
    });
    Ze(b).A(b.i(), "touchend", function (a) {
        Gg(this, a.target).vd(a)
    });
    c = Zb();
    d = Fe();
    e = Xg(a.Zc);
    f = a.Zc.getBBox();
    b.B(Yg);
    var h = b.i();
    Zf(h, "blocklyDropdownMenu");
    var k = Je(h);
    e.y = e.y +
        k.height + f.height >= c.height + d.y ? e.y - k.height : e.y + f.height;
    H ? (e.x += f.width, e.x += 25, e.x < d.x + k.width && (e.x = d.x + k.width)) : (e.x -= 25, e.x > c.width + d.x - k.width && (e.x = c.width + d.x - k.width));
    Zg(e.x, e.y, c, d);
    Pg(b);
    h.focus()
}

function Rg(a) {
    a.bg = null;
    a.ug = null;
    var b = a.Lc;
    if (n(b) && !(2 > b.length)) {
        var c = b.map(function (a) {
                return a[0]
            }),
            d = $g(c),
            e = ah(c, d),
            f = bh(c, d);
        if ((e || f) && !(d <= e + f)) {
            e && (a.bg = c[0].substring(0, e - 1));
            f && (a.ug = c[0].substr(1 - f));
            c = [];
            for (d = 0; d < b.length; d++) {
                var h = b[d][0],
                    k = b[d][1],
                    h = h.substring(e, h.length - f);
                c[d] = [h, k]
            }
            a.Lc = c
        }
    }
}

function Sg(a) {
    return s(a.Lc) ? a.Lc.call(a) : a.Lc
}
g.Gc = function () {
    return this.Na
};
g.ob = function (a) {
    this.Na = a;
    for (var b = Sg(this), c = 0; c < b.length; c++)
        if (b[c][1] == a) {
            this.Ka(b[c][0]);
            return
        }
    this.Ka(a)
};
g.Ka = function (a) {
    this.h && (this.Md.style.fill = hg(ig(this.h.lf)));
    null !== a && a !== this.Da && (this.Da = a, ug(this), H ? this.ya.insertBefore(this.Md, this.ya.firstChild) : this.ya.appendChild(this.Md), this.h && this.h.L && (this.h.B(), this.h.Ga(), ne(this.h.s)))
};
g.j = function () {
    Vg == this && Wg();
    Qg.m.j.call(this)
};
/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function ch(a, b) {
    a.innerHTML = pb(b)
};

function dh(a, b, c) {
    Ve.call(this, c);
    this.ma = b || eh;
    this.Kf = a instanceof nb ? a : rb(a, null)
}
v(dh, Ve);
var fh = {};
g = dh.prototype;
g.hg = !1;
g.cd = !1;
g.qk = null;
g.Di = xb;
g.sd = !0;
g.Td = -1;
g.V = function () {
    dh.m.V.call(this);
    this.uc && (this.uc.removeNode(this), this.uc = null);
    this.u = null
};
g.re = function () {
    var a = this.i();
    if (a) {
        var b = gh(this);
        b && !b.id && (b.id = Ye(this) + ".label");
        pf(a, "treeitem");
        qf(a, "selected", !1);
        qf(a, "expanded", !1);
        qf(a, "level", this.Ec());
        b && qf(a, "labelledby", b.id);
        (a = this.ce()) && pf(a, "presentation");
        (a = this.be()) && pf(a, "presentation");
        if (a = hh(this))
            if (pf(a, "group"), a.hasChildNodes())
                for (a = bf(this), b = 1; b <= a; b++) {
                    var c = Q(this, b - 1).i();
                    qf(c, "setsize", a);
                    qf(c, "posinset", b)
                }
    }
};
g.G = function () {
    var a = this.gb(),
        b = pb(this.wg());
    var c = a.Bb,
        a = c.createElement("div");
    w ? (a.innerHTML = "<br>" + b, a.removeChild(a.firstChild)) : a.innerHTML = b;
    if (1 == a.childNodes.length) b = a.removeChild(a.firstChild);
    else
        for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
    this.u = b
};
g.na = function () {
    dh.m.na.call(this);
    fh[Ye(this)] = this;
    this.re()
};
g.Ua = function () {
    dh.m.Ua.call(this);
    delete fh[Ye(this)]
};
g.yc = function (a, b) {
    var c = Q(this, b - 1),
        d = Q(this, b);
    dh.m.yc.call(this, a, b);
    a.jc = c;
    a.jb = d;
    c ? c.jb = a : this.uh = a;
    d ? d.jc = a : this.Gh = a;
    var e = this.Aa();
    e && ih(a, e);
    jh(a, this.Ec() + 1);
    if (this.i() && (this.Wc(), this.Ha())) {
        e = hh(this);
        a.i() || a.G();
        var f = a.i(),
            h = d && d.i();
        e.insertBefore(f, h);
        this.w && a.na();
        d || (c ? c.Wc() : (Me(e, !0), this.Hb(this.Ha())))
    }
};
g.add = function (a, b) {
    a.getParent() && a.getParent().removeChild(a);
    this.yc(a, b ? ef(this, b) : bf(this));
    return a
};
g.removeChild = function (a) {
    var b = this.Aa(),
        c = b ? b.Pa : null;
    if (c == a || a.contains(c)) b.hasFocus() ? (this.select(), ee(this.Tj, 10, this)) : this.select();
    dh.m.removeChild.call(this, a);
    this.Gh == a && (this.Gh = a.jc);
    this.uh == a && (this.uh = a.jb);
    a.jc && (a.jc.jb = a.jb);
    a.jb && (a.jb.jc = a.jc);
    c = !a.jb;
    a.uc = null;
    a.Td = -1;
    if (b && (b.removeNode(this), this.w)) {
        b = hh(this);
        if (a.w) {
            var d = a.i();
            b.removeChild(d);
            a.Ua()
        }
        c && (c = Q(this, bf(this) - 1)) && c.Wc();
        df(this) || (b.style.display = "none", this.Wc(), this.ce().className = this.Yd())
    }
    return a
};
g.remove = dh.prototype.removeChild;
g.Tj = function () {
    this.select()
};
g.Ec = function () {
    var a = this.Td;
    0 > a && (a = (a = this.getParent()) ? a.Ec() + 1 : 0, jh(this, a));
    return a
};

function jh(a, b) {
    if (b != a.Td) {
        a.Td = b;
        var c = kh(a);
        if (c) {
            var d = lh(a) + "px";
            cf(a) ? c.style.paddingRight = d : c.style.paddingLeft = d
        }
        af(a, function (a) {
            jh(a, b + 1)
        })
    }
}
g.contains = function (a) {
    for (; a;) {
        if (a == this) return !0;
        a = a.getParent()
    }
    return !1
};
g.Nb = function () {
    var a = [];
    af(this, function (b) {
        a.push(b)
    });
    return a
};
g.te = function () {
    return this.hg
};
g.select = function () {
    var a = this.Aa();
    a && a.rc(this)
};

function mh(a, b) {
    if (a.hg != b) {
        a.hg = b;
        nh(a);
        var c = a.i();
        c && (qf(c, "selected", b), b && (c = a.Aa().i(), qf(c, "activedescendant", Ye(a))))
    }
}
g.Ha = function () {
    return this.cd
};
g.Hb = function (a) {
    var b = a != this.cd;
    if (!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) {
        var c;
        this.cd = a;
        c = this.Aa();
        var d = this.i();
        if (df(this)) {
            if (!a && c && this.contains(c.Pa) && this.select(), d) {
                if (c = hh(this))
                    if (Me(c, a), a && this.w && !c.hasChildNodes()) {
                        var e = [];
                        af(this, function (a) {
                            e.push(a.wg())
                        });
                        ch(c, wb(e));
                        af(this, function (a) {
                            a.na()
                        })
                    }
                this.Wc()
            }
        } else(c = hh(this)) && Me(c, !1);
        d && (this.ce().className = this.Yd(), qf(d, "expanded", a));
        b && this.dispatchEvent(a ? "expand" : "collapse")
    }
};
g.toggle = function () {
    this.Hb(!this.Ha())
};
g.expand = function () {
    this.Hb(!0)
};
g.collapse = function () {
    this.Hb(!1)
};
g.gg = function () {
    var a = this.getParent();
    a && (a.Hb(!0), a.gg())
};
g.wg = function () {
    var a = this.Aa(),
        b = !a.Dd || a == this.getParent() && !a.og ? this.ma.Wg : this.ma.Vg,
        a = this.Ha() && df(this),
        b = {
            "class": b,
            style: oh(this)
        },
        c = [];
    a && af(this, function (a) {
        c.push(a.wg())
    });
    a = vb("div", b, c);
    return vb("div", {
        "class": this.ma.eh,
        id: Ye(this)
    }, [ph(this), a])
};

function lh(a) {
    return Math.max(0, (a.Ec() - 1) * a.ma.Mf)
}

function ph(a) {
    var b = {};
    b["padding-" + (cf(a) ? "right" : "left")] = lh(a) + "px";
    var b = {
            "class": a.hd(),
            style: b
        },
        c = a.Df(),
        d = vb("span", {
            style: {
                display: "inline-block"
            },
            "class": a.Yd()
        }),
        e = vb("span", {
            "class": a.ma.fh,
            title: a.qk || null
        }, a.Kf);
    a = wb(e, vb("span", {}, a.Di));
    return vb("div", b, [c, d, a])
}
g.hd = function () {
    return this.ma.ih + (this.te() ? " " + this.ma.hh : "")
};
g.Df = function () {
    return vb("span", {
        type: "expand",
        style: {
            display: "inline-block"
        },
        "class": qh(this)
    })
};

function qh(a) {
    var b = a.Aa(),
        c = !b.Dd || b == a.getParent() && !b.og,
        d = a.ma,
        e = new pa;
    e.append(d.$b, " ", d.Si, " ");
    if (df(a)) {
        var f = 0;
        b.ng && a.sd && (f = a.Ha() ? 2 : 1);
        c || (f = a.jb ? f + 8 : f + 4);
        switch (f) {
        case 1:
            e.append(d.Wi);
            break;
        case 2:
            e.append(d.Vi);
            break;
        case 4:
            e.append(d.$g);
            break;
        case 5:
            e.append(d.Ui);
            break;
        case 6:
            e.append(d.Ti);
            break;
        case 8:
            e.append(d.ah);
            break;
        case 9:
            e.append(d.Yi);
            break;
        case 10:
            e.append(d.Xi);
            break;
        default:
            e.append(d.Zg)
        }
    } else c ? e.append(d.Zg) : a.jb ? e.append(d.ah) : e.append(d.$g);
    return e.toString()
}

function oh(a) {
    var b = a.Ha() && df(a);
    return fb({
        "background-position": rh(a),
        display: b ? null : "none"
    })
}

function rh(a) {
    return (a.jb ? (a.Ec() - 1) * a.ma.Mf : "-100") + "px 0"
}
g.i = function () {
    var a = dh.m.i.call(this);
    a || (this.u = a = this.gb().i(Ye(this)));
    return a
};

function kh(a) {
    return (a = a.i()) ? a.firstChild : null
}
g.be = function () {
    var a = kh(this);
    return a ? a.firstChild : null
};
g.ce = function () {
    var a = kh(this);
    return a ? a.childNodes[1] : null
};

function gh(a) {
    return (a = kh(a)) && a.lastChild ? a.lastChild.previousSibling : null
}

function hh(a) {
    return (a = a.i()) ? a.lastChild : null
}
g.Ka = function (a) {
    this.Kf = a = qb(a);
    var b = gh(this);
    b && ch(b, a);
    (a = this.Aa()) && sh(a, this)
};
g.hb = function () {
    var a = pb(this.Kf);
    return Ia(a, "&") ? "document" in m ? Fa(a) : Ha(a) : a
};

function nh(a) {
    var b = kh(a);
    b && (b.className = a.hd())
}
g.Wc = function () {
    var a = this.be();
    a && (a.className = qh(this));
    if (a = hh(this)) a.style.backgroundPosition = rh(this)
};
g.Wf = function (a) {
    "expand" == a.target.getAttribute("type") && df(this) ? this.sd && this.toggle() : (this.select(), nh(this))
};
g.Lh = function (a) {
    "expand" == a.target.getAttribute("type") && df(this) || this.sd && this.toggle()
};

function th(a) {
    return a.Ha() && df(a) ? th(Q(a, bf(a) - 1)) : a
}

function ih(a, b) {
    a.uc != b && (a.uc = b, sh(b, a), af(a, function (a) {
        ih(a, b)
    }))
}
var eh = {
    Mf: 19,
    gh: "goog-tree-root goog-tree-item",
    dh: "goog-tree-hide-root",
    eh: "goog-tree-item",
    Vg: "goog-tree-children",
    Wg: "goog-tree-children-nolines",
    ih: "goog-tree-row",
    fh: "goog-tree-item-label",
    $b: "goog-tree-icon",
    Si: "goog-tree-expand-icon",
    Wi: "goog-tree-expand-icon-plus",
    Vi: "goog-tree-expand-icon-minus",
    Yi: "goog-tree-expand-icon-tplus",
    Xi: "goog-tree-expand-icon-tminus",
    Ui: "goog-tree-expand-icon-lplus",
    Ti: "goog-tree-expand-icon-lminus",
    ah: "goog-tree-expand-icon-t",
    $g: "goog-tree-expand-icon-l",
    Zg: "goog-tree-expand-icon-blank",
    of: "goog-tree-expanded-folder-icon",
    Xg: "goog-tree-collapsed-folder-icon",
    pf: "goog-tree-file-icon",
    bh: "goog-tree-expanded-folder-icon",
    Yg: "goog-tree-collapsed-folder-icon",
    hh: "selected"
};

function uh(a, b, c) {
    dh.call(this, a, b, c)
}
v(uh, dh);
uh.prototype.Aa = function () {
    if (this.uc) return this.uc;
    var a = this.getParent();
    return a && (a = a.Aa()) ? (ih(this, a), a) : null
};
uh.prototype.Yd = function () {
    var a = this.Ha(),
        b = this.gj;
    if (a && b) return b;
    b = this.yj;
    if (!a && b) return b;
    b = this.ma;
    if (df(this)) {
        if (a && b.of) return b.$b + " " + b.of;
        if (!a && b.Xg) return b.$b + " " + b.Xg
    } else if (b.pf) return b.$b + " " + b.pf;
    return ""
};
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var vh = {
    Sd: null,
    show: function (a, b) {
        Ug(vh);
        if (b.length) {
            for (var c = new Og, d = 0, e; e = b[d]; d++) {
                var f = new Vf(e.text);
                c.Ld(f, !0);
                f.Ad(e.enabled);
                e.enabled && Sd(f, "action", function (a) {
                    return function () {
                        a()
                    }
                }(e.bb))
            }
            Sd(c, "action", vh.Eb);
            e = Zb();
            f = Fe();
            c.B(Yg);
            var h = c.i();
            Zf(h, "blocklyContextMenu");
            var k = Je(h),
                d = a.clientX + f.x,
                l = a.clientY + f.y;
            a.clientY + k.height >= e.height && (l -= k.height);
            H ? k.width >= a.clientX && (d += k.width) : a.clientX + k.width >= e.width && (d -= k.width);
            Zg(d, l, e, f);
            Pg(c);
            setTimeout(function () {
                    h.focus()
                },
                1);
            vh.Sd = null
        } else vh.Eb()
    },
    Eb: function () {
        Vg == vh && Wg();
        vh.Sd = null
    },
    ql: function (a, b) {
        return function () {
            var c = Yc(a.s, b),
                d = I(a);
            d.x = H ? d.x - T : d.x + T;
            d.y += 2 * T;
            c.moveBy(d.x, d.y);
            c.select()
        }
    }
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function wh(a, b, c, d, e, f, h) {
    var k = xh;
    H && (k = -k);
    this.Hi = k / 360 * Math.PI * 2;
    this.t = a;
    this.Ab = b;
    this.ci = c;
    a.Uc.appendChild(this.nf(b, !(!f || !h)));
    yh(this, d, e);
    f && h || (a = this.Ab.getBBox(), f = a.width + 2 * zh, h = a.height + 2 * zh);
    this.pc(f, h);
    Ah(this);
    Bh(this);
    this.fg = !0;
    K || (O(this.Od, "mousedown", this, this.Li), this.Gb && O(this.Gb, "mousedown", this, this.bk))
}
var zh = 6,
    xh = 20,
    Ch = null,
    Dh = null;

function Eh() {
    Ch && (N(Ch), Ch = null);
    Dh && (N(Dh), Dh = null)
}
g = wh.prototype;
g.fg = !1;
g.$a = 0;
g.ef = 0;
g.lc = 0;
g.xd = 0;
g.D = 0;
g.qa = 0;
g.gf = !0;
g.nf = function (a, b) {
    this.ab = L("g", {}, null);
    var c = L("g", {
        filter: "url(#blocklyEmboss)"
    }, this.ab);
    this.Og = L("path", {}, c);
    this.Od = L("rect", {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: zh,
        ry: zh
    }, c);
    b ? (this.Gb = L("g", {
        "class": H ? "blocklyResizeSW" : "blocklyResizeSE"
    }, this.ab), c = 2 * zh, L("polygon", {
        points: "0,x x,x x,0".replace(/x/g, c.toString())
    }, this.Gb), L("line", {
        "class": "blocklyResizeLine",
        x1: c / 3,
        y1: c - 1,
        x2: c - 1,
        y2: c / 3
    }, this.Gb), L("line", {
        "class": "blocklyResizeLine",
        x1: 2 * c / 3,
        y1: c - 1,
        x2: c - 1,
        y2: 2 * c / 3
    }, this.Gb)) : this.Gb =
        null;
    this.ab.appendChild(a);
    return this.ab
};
g.Li = function (a) {
    Fh(this);
    Eh();
    rd(a) || Gh(a) || (Hh(!0), this.ph = H ? this.lc + a.clientX : this.lc - a.clientX, this.ej = this.xd - a.clientY, Ch = O(document, "mouseup", this, Eh), Dh = O(document, "mousemove", this, this.Mi), vd(), a.stopPropagation())
};
g.Mi = function (a) {
    this.gf = !1;
    this.lc = H ? this.ph - a.clientX : this.ph + a.clientX;
    this.xd = this.ej + a.clientY;
    Ah(this);
    Bh(this)
};
g.bk = function (a) {
    Fh(this);
    Eh();
    rd(a) || (Hh(!0), this.ak = H ? this.D + a.clientX : this.D - a.clientX, this.$j = this.qa - a.clientY, Ch = O(document, "mouseup", this, Eh), Dh = O(document, "mousemove", this, this.ck), vd(), a.stopPropagation())
};
g.ck = function (a) {
    this.gf = !1;
    var b = this.ak,
        c = this.$j + a.clientY,
        b = H ? b - a.clientX : b + a.clientX;
    this.pc(b, c);
    H && Ah(this)
};

function Fh(a) {
    a.ab.parentNode.appendChild(a.ab)
}

function yh(a, b, c) {
    a.$a = b;
    a.ef = c;
    a.fg && Ah(a)
}

function Ah(a) {
    a.ab.setAttribute("transform", "translate(" + (H ? a.$a - a.lc - a.D : a.$a + a.lc) + ", " + (a.xd + a.ef) + ")")
}
g.dc = function () {
    return {
        width: this.D,
        height: this.qa
    }
};
g.pc = function (a, b) {
    var c = 2 * zh;
    a = Math.max(a, c + 45);
    b = Math.max(b, c + 18);
    this.D = a;
    this.qa = b;
    this.Od.setAttribute("width", a);
    this.Od.setAttribute("height", b);
    this.Gb && (H ? this.Gb.setAttribute("transform", "translate(" + 2 * zh + ", " + (b - c) + ") scale(-1 1)") : this.Gb.setAttribute("transform", "translate(" + (a - c) + ", " + (b - c) + ")"));
    if (this.fg) {
        if (this.gf) {
            var c = -this.D / 4,
                d = -this.qa - 25,
                e = this.t.Db();
            H ? this.$a - e.Fa - c - this.D < M ? c = this.$a - e.Fa - this.D - M : this.$a - e.Fa - c > e.Q && (c = this.$a - e.Fa - e.Q) : this.$a + c < e.Fa ? c = e.Fa - this.$a :
                e.Fa + e.Q < this.$a + c + this.D + 10 + M && (c = e.Fa + e.Q - this.$a - this.D - M);
            this.ef + d < e.xb && (d = this.ci.getBBox().height);
            this.lc = c;
            this.xd = d
        }
        Ah(this);
        Bh(this)
    }
    ze(this.ab, "resize")
};

function Bh(a) {
    var b = [],
        c = a.D / 2,
        d = a.qa / 2,
        e = -a.lc,
        f = -a.xd;
    if (c == e && d == f) b.push("M " + c + "," + d);
    else {
        f -= d;
        e -= c;
        H && (e *= -1);
        var h = Math.sqrt(f * f + e * e),
            k = Math.acos(e / h);
        0 > f && (k = 2 * Math.PI - k);
        var l = k + Math.PI / 2;
        l > 2 * Math.PI && (l -= 2 * Math.PI);
        var q = Math.sin(l),
            p = Math.cos(l),
            u = a.dc(),
            l = (u.width + u.height) / 10,
            l = Math.min(l, u.width, u.height) / 2,
            u = 1 - 8 / h,
            e = c + u * e,
            f = d + u * f,
            u = c + l * p,
            t = d + l * q,
            c = c - l * p,
            d = d - l * q,
            q = k + a.Hi;
        q > 2 * Math.PI && (q -= 2 * Math.PI);
        k = Math.sin(q) * h / 4;
        h = Math.cos(q) * h / 4;
        b.push("M" + u + "," + t);
        b.push("C" + (u + h) + "," + (t + k) +
            " " + e + "," + f + " " + e + "," + f);
        b.push("C" + e + "," + f + " " + (c + h) + "," + (d + k) + " " + c + "," + d)
    }
    b.push("z");
    a.Og.setAttribute("d", b.join(" "))
}
g.Wb = function (a) {
    this.Od.setAttribute("fill", a);
    this.Og.setAttribute("fill", a)
};
g.j = function () {
    Eh();
    A(this.ab);
    this.ci = this.Ab = this.t = this.ab = null
};
/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ih(a) {
    this.n = a
}
g = Ih.prototype;
g.ga = null;
g.Ic = 0;
g.Jc = 0;
g.Bc = function () {
    this.Ia = L("g", {}, null);
    S(this.n).appendChild(this.Ia);
    O(this.Ia, "mouseup", this, this.zj);
    this.wc()
};
g.j = function () {
    A(this.Ia);
    this.Ia = null;
    this.K(!1);
    this.n = null
};
g.wc = function () {
    this.n.Rb ? $f(this.Ia, "blocklyIconGroup") : Zf(this.Ia, "blocklyIconGroup")
};
g.v = function () {
    return !!this.ga
};
g.zj = function () {
    this.n.Rb || this.K(!this.v())
};
g.vc = function () {
    if (this.v()) {
        var a = hg(ig(this.n.lf));
        this.ga.Wb(a)
    }
};

function pg(a) {
    var b = I(a.n),
        c = Jh(a.Ia),
        d = b.x + c.x + 8,
        b = b.y + c.y + 8;
    if (d !== a.Ic || b !== a.Jc) a.Ic = d, a.Jc = b, a.v() && yh(a.ga, d, b)
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Kh(a, b) {
    this.h = a;
    this.p = null;
    this.type = b;
    this.O = this.pb = 0;
    this.sb = !1;
    this.Lb = this.h.s.Qi
}
g = Kh.prototype;
g.j = function () {
    if (this.p) throw "Disconnect connection before disposing of it.";
    this.sb && Lh(this.Lb[this.type], this);
    this.sb = !1;
    Mh == this && (Mh = null);
    Nh == this && (Nh = null)
};

function Oh(a) {
    return 1 == a.type || 3 == a.type
}

function id(a, b) {
    if (a.h == b.h) throw "Attempted to connect a block to itself.";
    if (a.h.s !== b.h.s) throw "Blocks are on different workspaces.";
    if (Ph[a.type] != b.type) throw "Attempt to connect incompatible types.";
    if (1 == a.type || 2 == a.type) {
        if (a.p) throw "Source connection already connected (value).";
        if (b.p) {
            var c = J(b);
            c.Qa(null);
            if (!c.I) throw "Orphan block does not have an output connection.";
            for (var d = a.h; d = Qh(d, c);)
                if (J(d)) d = J(d);
                else {
                    id(d, c.I);
                    c = null;
                    break
                }
            c && window.setTimeout(function () {
                Rh(c.I, b)
            }, Sh)
        }
    } else {
        if (a.p) throw "Source connection already connected (block).";
        if (b.p) {
            if (4 != a.type) throw "Can only do a mid-stack connection with the top of a block.";
            c = J(b);
            c.Qa(null);
            if (!c.C) throw "Orphan block does not have a previous connection.";
            for (d = a.h; d.J;)
                if (d.J.p) d = Uc(d);
                else {
                    Th(c.C, d.J) && (id(d.J, c.C), c = null);
                    break
                }
            c && window.setTimeout(function () {
                Rh(c.C, b)
            }, Sh)
        }
    }
    var e;
    Oh(a) ? (d = a.h, e = b.h) : (d = b.h, e = a.h);
    a.p = b;
    b.p = a;
    e.Qa(d);
    d.L && mg(d.k);
    e.L && mg(e.k);
    d.L && e.L && (3 == a.type || 4 == a.type ? e.B() : d.B())
}

function Qh(a, b) {
    for (var c = !1, d = 0; d < a.N.length; d++) {
        var e = a.N[d].o;
        if (e && 1 == e.type && Th(b.I, e)) {
            if (c) return null;
            c = e
        }
    }
    return c
}
g.disconnect = function () {
    var a = this.p;
    if (!a) throw "Source connection not connected.";
    if (a.p != this) throw "Target connection not connected to source connection.";
    this.p = a.p = null;
    var b;
    Oh(this) ? (b = this.h, a = a.h) : (b = a.h, a = this.h);
    b.L && b.B();
    a.L && (mg(a.k), a.B())
};

function J(a) {
    return a.p ? a.p.h : null
}

function Rh(a, b) {
    if (0 == xe) {
        var c = Uh(a.h);
        if (!c.Rb) {
            var d = !1;
            if (!c.Fb || K) {
                c = Uh(b.h);
                if (!c.Fb || K) return;
                b = a;
                d = !0
            }
            S(c).parentNode.appendChild(S(c));
            var e = b.pb + T - a.pb,
                f = b.O + T - a.O;
            d && (f = -f);
            H && (e = -e);
            c.moveBy(e, f)
        }
    }
}
g.moveTo = function (a, b) {
    this.sb && Lh(this.Lb[this.type], this);
    this.pb = a;
    this.O = b;
    Vh(this.Lb[this.type], this)
};
g.moveBy = function (a, b) {
    this.moveTo(this.pb + a, this.O + b)
};
g.le = function () {
    var a;
    1 == this.type || 2 == this.type ? (a = H ? -8 : 8, a = "m 0,0 v 5 c 0,10 " + -a + ",-8 " + -a + ",7.5 s " + a + ",-2.5 " + a + ",7.5 v 5") : a = H ? "m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5";
    var b = I(this.h);
    Kh.me = L("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: a,
        transform: "translate(" + (this.pb - b.x) + ", " + (this.O - b.y) + ")"
    }, S(this.h))
};

function sg(a) {
    var b = Math.round(a.p.pb - a.pb),
        c = Math.round(a.p.O - a.O);
    if (0 != b || 0 != c) {
        a = J(a);
        var d = S(a);
        if (!d) throw "block is not rendered.";
        d = Jh(d);
        S(a).setAttribute("transform", "translate(" + (d.x - b) + ", " + (d.y - c) + ")");
        Wh(a, -b, -c)
    }
}

function Xh(a, b, c, d) {
    function e(a) {
        var c = f[a];
        if ((2 == c.type || 4 == c.type) && c.p || 1 == c.type && c.p && (!J(c).Fb || K) || !Th(u, c)) return !0;
        c = c.h;
        do {
            if (p == c) return !0;
            c = c.getParent()
        } while (c);
        var d = h - f[a].pb,
            c = k - f[a].O,
            d = Math.sqrt(d * d + c * c);
        d <= b && (q = f[a], b = d);
        return c < b
    }
    if (a.p) return {
        o: null,
        Sh: b
    };
    var f = a.Lb[Ph[a.type]],
        h = a.pb + c,
        k = a.O + d;
    c = 0;
    for (var l = d = f.length - 2; c < l;) f[l].O < k ? c = l : d = l, l = Math.floor((c + d) / 2);
    d = c = l;
    var q = null,
        p = a.h,
        u = a;
    if (f.length) {
        for (; 0 <= c && e(c);) c--;
        do d++; while (d < f.length && e(d))
    }
    return {
        o: q,
        Sh: b
    }
}

function Th(a, b) {
    if (!a.zc || !b.zc) return !0;
    for (var c = 0; c < a.zc.length; c++)
        if (-1 != b.zc.indexOf(a.zc[c])) return !0;
    return !1
}
g.Qc = function (a) {
    a ? (n(a) || (a = [a]), this.zc = a, this.p && !Th(this, this.p) && (Oh(this) ? J(this).Qa(null) : this.h.Qa(null), this.h.Ga())) : this.zc = null;
    return this
};

function Yh(a) {
    var b = T;

    function c(a) {
        var c = e - d[a].pb,
            h = f - d[a].O;
        Math.sqrt(c * c + h * h) <= b && l.push(d[a]);
        return h < b
    }
    var d = a.Lb[Ph[a.type]],
        e = a.pb,
        f = a.O;
    a = 0;
    for (var h = d.length - 2, k = h; a < k;) d[k].O < f ? a = k : h = k, k = Math.floor((a + h) / 2);
    var h = a = k,
        l = [];
    if (d.length) {
        for (; 0 <= a && c(a);) a--;
        do h++; while (h < d.length && c(h))
    }
    return l
}

function Zh(a) {
    a.sb || Vh(a.Lb[a.type], a);
    var b = [];
    if (1 != a.type && 3 != a.type) return b;
    if (a = J(a)) {
        var c;
        a.isCollapsed() ? (c = [], a.I && c.push(a.I), a.J && c.push(a.J), a.C && c.push(a.C)) : c = $h(a, !0);
        for (var d = 0; d < c.length; d++) b.push.apply(b, Zh(c[d]));
        0 == b.length && (b[0] = a)
    }
    return b
}

function me() {}
me.prototype = [];

function Vh(a, b) {
    if (b.sb) throw "Connection already in database.";
    for (var c = 0, d = a.length; c < d;) {
        var e = Math.floor((c + d) / 2);
        if (a[e].O < b.O) c = e + 1;
        else if (a[e].O > b.O) d = e;
        else {
            c = e;
            break
        }
    }
    a.splice(c, 0, b);
    b.sb = !0
}

function Lh(a, b) {
    if (!b.sb) throw "Connection not in database.";
    b.sb = !1;
    for (var c = 0, d = a.length - 2, e = d; c < e;) a[e].O < b.O ? c = e : d = e, e = Math.floor((c + d) / 2);
    for (d = c = e; 0 <= c && a[c].O == b.O;) {
        if (a[c] == b) {
            a.splice(c, 1);
            return
        }
        c--
    }
    do {
        if (a[d] == b) {
            a.splice(d, 1);
            return
        }
        d++
    } while (d < a.length && a[d].O == b.O);
    throw "Unable to find connection in connectionDB.";
};
/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var ei = {
    il: function (a) {
        var b = {
            H: function () {
                var b = this;
                this.Wb(a.rl);
                this.fc = a.fc;
                "string" == typeof a.Ea ? this.wb(a.Ea) : "function" == typeof a.Ea && this.wb(function () {
                    return a.Ea(b)
                });
                "undefined" != a.Vj ? ai(this, a.Vj) : (bi(this, "undefined" == typeof a.Xj ? !0 : a.Xj), ci(this, "undefined" == typeof a.Oj ? !0 : a.Oj));
                var d = [];
                d.push(a.text);
                a.Gi && a.Gi.forEach(function (a) {
                    "undefined" == a.type || 1 == a.type ? d.push([a.name, a.check, "undefined" == typeof a.align ? 1 : a.align]) : La("addTemplate() can only handle value inputs.")
                });
                d.push(1);
                a.Ej && this.Ql(a.Ej);
                di.prototype.rd.apply(this, d)
            }
        };
        b.Kh = a.Sl ? function () {
            var b = a.Lj ? a.Gl() : document.createElement("mutation");
            b.setAttribute("is_statement", this.isStatement || !1);
            return b
        } : a.Lj;
        ei[a.ol] = b
    }
};
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function fi(a) {
    fi.m.constructor.call(this, a);
    this.Bc()
}
v(fi, Ih);
g = fi.prototype;
g.Da = "";
g.D = 160;
g.qa = 80;
g.Bc = function () {
    Ih.prototype.Bc.call(this);
    L("circle", {
        "class": "blocklyIconShield",
        r: 8,
        cx: 8,
        cy: 8
    }, this.Ia);
    this.Lf = L("text", {
        "class": "blocklyIconMark",
        x: 8,
        y: 13
    }, this.Ia);
    this.Lf.appendChild(document.createTextNode("?"))
};
g.wc = function () {
    this.v() && (this.K(!1), this.K(!0));
    Ih.prototype.wc.call(this)
};
g.Zj = function () {
    var a = this.ga.dc(),
        b = 2 * zh;
    this.fd.setAttribute("width", a.width - b);
    this.fd.setAttribute("height", a.height - b);
    this.La.style.width = a.width - b - 4 + "px";
    this.La.style.height = a.height - b - 4 + "px"
};
g.K = function (a) {
    if (a != this.v())
        if ((!this.n.Cc || K) && !this.La || w) gi.prototype.K.call(this, a);
        else {
            var b = this.hb(),
                c = this.dc();
            if (a) {
                a = this.n.s;
                this.fd = L("foreignObject", {
                    x: zh,
                    y: zh
                }, null);
                var d = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
                d.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
                d.className = "blocklyMinimalBody";
                this.La = document.createElementNS("http://www.w3.org/1999/xhtml", "textarea");
                this.La.className = "blocklyCommentTextarea";
                this.La.setAttribute("dir", H ? "RTL" : "LTR");
                d.appendChild(this.La);
                this.fd.appendChild(d);
                O(this.La, "mouseup", this, this.pk);
                this.ga = new wh(a, this.fd, this.n.k.Ib, this.Ic, this.Jc, this.D, this.qa);
                O(this.ga.ab, "resize", this, this.Zj);
                this.vc();
                this.Da = null
            } else this.ga.j(), this.fd = this.La = this.ga = null;
            this.Ka(b);
            this.pc(c.width, c.height)
        }
};
g.pk = function () {
    Fh(this.ga);
    this.La.focus()
};
g.dc = function () {
    return this.v() ? this.ga.dc() : {
        width: this.D,
        height: this.qa
    }
};
g.pc = function (a, b) {
    this.La ? this.ga.pc(a, b) : (this.D = a, this.qa = b)
};
g.hb = function () {
    return this.La ? this.La.value : this.Da
};
g.Ka = function (a) {
    this.La ? this.La.value = a : this.Da = a
};
g.j = function () {
    this.n.ha = null;
    Ih.prototype.j.call(this)
};
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var hi = !1,
    ii = 0,
    ji = 0,
    ki = {
        x: 0,
        y: 0
    },
    mi = null,
    ni = null,
    oi = null,
    pi = null,
    qi = null,
    ri = null;

function si() {
    var a = L("g", {
        "class": "blocklyHidden"
    }, null);
    oi = a;
    ri = L("rect", {
        "class": "blocklyTooltipShadow",
        x: 2,
        y: 2
    }, a);
    qi = L("rect", {
        "class": "blocklyTooltipBackground"
    }, a);
    pi = L("text", {
        "class": "blocklyTooltipText"
    }, a);
    return a
}

function Xf(a) {
    O(a, "mouseover", null, ti);
    O(a, "mouseout", null, ui);
    O(a, "mousemove", null, vi)
}

function ti(a) {
    for (a = a.target; !r(a.Ea) && !s(a.Ea);) a = a.Ea;
    mi != a && (wi(), ni = null, mi = a);
    window.clearTimeout(ii)
}

function ui() {
    ii = window.setTimeout(function () {
        ni = mi = null;
        wi()
    }, 1);
    window.clearTimeout(ji)
}

function vi(a) {
    mi && mi.Ea && 0 == xe && !Vg && (hi ? (a = sd(a), 10 < Math.sqrt(Math.pow(ki.x - a.x, 2) + Math.pow(ki.y - a.y, 2)) && wi()) : ni != mi && (window.clearTimeout(ji), ki = sd(a), ji = window.setTimeout(xi, 1E3)))
}

function wi() {
    hi && (hi = !1, oi && (oi.style.display = "none"));
    window.clearTimeout(ji)
}

function xi() {
    ni = mi;
    if (oi) {
        dc(pi);
        var a = mi.Ea;
        s(a) && (a = a());
        var b = a,
            a = 50;
        if (b.length <= a) a = b;
        else {
            for (var c = b.trim().split(/\s+/), d = 0; d < c.length; d++) c[d].length > a && (a = c[d].length);
            var e, d = -Infinity,
                f, h = 1;
            do {
                e = d;
                f = b;
                for (var b = [], k = c.length / h, l = 1, d = 0; d < c.length - 1; d++) l < (d + 1.5) / k ? (l++, b[d] = !0) : b[d] = !1;
                for (var b = yi(c, b, a), d = zi(c, b, a), k = c, l = [], q = 0; q < k.length; q++) l.push(k[q]), void 0 !== b[q] && l.push(b[q] ? "\n" : " ");
                b = l.join("");
                h++
            } while (d > e);
            a = f
        }
        a = a.split("\n");
        for (c = 0; c < a.length; c++) L("tspan", {
                dy: "1em",
                x: 5
            },
            pi).appendChild(document.createTextNode(a[c]));
        hi = !0;
        oi.style.display = "block";
        a = pi.getBBox();
        c = 10 + a.width;
        e = a.height;
        qi.setAttribute("width", c);
        qi.setAttribute("height", e);
        ri.setAttribute("width", c);
        ri.setAttribute("height", e);
        if (H)
            for (e = a.width, f = 0; h = pi.childNodes[f]; f++) h.setAttribute("text-anchor", "end"), h.setAttribute("x", e + 5);
        e = ki.x;
        e = H ? e - (0 + c) : e + 0;
        c = ki.y + 10;
        f = Ai();
        c + a.height > f.height && (c -= a.height + 20);
        H ? e = Math.max(5, e) : e + a.width > f.width - 10 && (e = f.width - a.width - 10);
        oi.setAttribute("transform",
            "translate(" + e + "," + c + ")")
    }
}

function zi(a, b, c) {
    for (var d = [0], e = [], f = 0; f < a.length; f++) d[d.length - 1] += a[f].length, !0 === b[f] ? (d.push(0), e.push(a[f].charAt(a[f].length - 1))) : !1 === b[f] && d[d.length - 1]++;
    a = Math.max.apply(Math, d);
    for (f = b = 0; f < d.length; f++) b -= 2 * Math.pow(Math.abs(c - d[f]), 1.5), b -= Math.pow(a - d[f], 1.5), -1 != ".?!".indexOf(e[f]) ? b += c / 3 : -1 != ",;)]}".indexOf(e[f]) && (b += c / 4);
    1 < d.length && d[d.length - 1] <= d[d.length - 2] && (b += .5);
    return b
}

function yi(a, b, c) {
    for (var d = zi(a, b, c), e, f = 0; f < b.length - 1; f++)
        if (b[f] != b[f + 1]) {
            var h = [].concat(b);
            h[f] = !h[f];
            h[f + 1] = !h[f + 1];
            var k = zi(a, h, c);
            k > d && (d = k, e = h)
        }
    return e ? yi(a, e, c) : b
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Bi(a) {
    this.h = null;
    this.ya = L("text", {
        "class": "blocklyText"
    }, null);
    this.Sc = {
        height: 25,
        width: 0
    };
    this.Ka(a)
}
v(Bi, tg);
g = Bi.prototype;
g.clone = function () {
    return new Bi(this.hb())
};
g.xc = !1;
g.H = function (a) {
    if (this.h) throw "Text has already been initialized once.";
    this.h = a;
    S(a).appendChild(this.ya);
    this.ya.Ea = this.h;
    Xf(this.ya)
};
g.j = function () {
    A(this.ya);
    this.ya = null
};
g.oa = function () {
    return this.ya
};
g.wb = function (a) {
    this.ya.Ea = a
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ci(a, b, c, d) {
    this.type = a;
    this.name = b;
    this.h = c;
    this.o = d;
    this.ua = [];
    this.align = -1;
    this.aa = !0
}

function Di(a, b, c) {
    if (!b && !c) return a;
    r(b) && (b = new Bi(b));
    a.h.k && b.H(a.h);
    b.name = c;
    b.bg && Di(a, b.bg);
    a.ua.push(b);
    b.ug && Di(a, b.ug);
    a.h.L && (a.h.B(), a.h.Ga());
    return a
}
g = Ci.prototype;
g.v = function () {
    return this.aa
};
g.K = function (a) {
    var b = [];
    if (this.aa == a) return b;
    for (var c = (this.aa = a) ? "block" : "none", d = 0, e; e = this.ua[d]; d++) e.K(a);
    if (this.o) {
        if (a) b = Zh(this.o);
        else if (d = this.o, d.sb && Lh(d.Lb[d.type], d), d.p) {
            e = Ei(J(d));
            for (var f = 0; f < e.length; f++) {
                for (var h = e[f], k = $h(h, !0), l = 0; l < k.length; l++) {
                    var q = k[l];
                    q.sb && Lh(d.Lb[q.type], q)
                }
                h = og(h);
                for (k = 0; k < h.length; k++) h[k].K(!1)
            }
        }
        if (d = J(this.o)) d.k.oa().style.display = c, a || (d.L = !1)
    }
    return b
};
g.Qc = function (a) {
    if (!this.o) throw "This input does not have a connection.";
    this.o.Qc(a);
    return this
};

function Fi(a, b) {
    a.align = b;
    a.h.L && a.h.B();
    return a
}
g.H = function () {
    for (var a = 0; a < this.ua.length; a++) this.ua[a].H(this.h)
};
g.j = function () {
    for (var a = 0, b; b = this.ua[a]; a++) b.j();
    this.o && this.o.j();
    this.h = null
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function gi(a) {
    gi.m.constructor.call(this, a);
    this.Bc()
}
v(gi, Ih);
g = gi.prototype;
g.Da = "";
g.Bc = function () {
    Ih.prototype.Bc.call(this);
    L("path", {
        "class": "blocklyIconShield",
        d: "M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"
    }, this.Ia);
    this.Lf = L("text", {
        "class": "blocklyIconMark",
        x: 8,
        y: 13
    }, this.Ia);
    this.Lf.appendChild(document.createTextNode("!"))
};
g.K = function (a) {
    if (a != this.v())
        if (a) {
            var b = this.Da;
            a = L("text", {
                "class": "blocklyText blocklyBubbleText",
                y: zh
            }, null);
            for (var b = b.split("\n"), c = 0; c < b.length; c++) L("tspan", {
                dy: "1em",
                x: zh
            }, a).appendChild(document.createTextNode(b[c]));
            this.ga = new wh(this.n.s, a, this.n.k.Ib, this.Ic, this.Jc, null, null);
            if (H)
                for (var b = a.getBBox().width, c = 0, d; d = a.childNodes[c]; c++) d.setAttribute("text-anchor", "end"), d.setAttribute("x", b + zh);
            this.vc();
            a = this.ga.dc();
            this.ga.pc(a.width, a.height)
        } else this.ga.j(), this.ga = null
};
g.Ka = function (a) {
    this.Da != a && (this.Da = a, this.v() && (this.K(!1), this.K(!0)))
};
g.j = function () {
    this.n.Jd = null;
    Ih.prototype.j.call(this)
};
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Gi = 0;

function di() {}

function $c(a, b) {
    if (qe) return Hi.create(di, a, b);
    var c = new di;
    c.initialize(a, b);
    return c
}
g = di.prototype;
g.initialize = function (a, b) {
    var c = (++Gi).toString();
    this.id = qe ? Ii(c) : c;
    pe(a, this);
    this.fill(a, b);
    s(this.onchange) && O(a.Z, "blocklyWorkspaceChange", this, this.onchange)
};
g.fill = function (a, b) {
    this.C = this.J = this.I = null;
    this.N = [];
    this.disabled = this.L = this.qd = !1;
    this.Ea = "";
    this.contextMenu = !0;
    this.Oc = null;
    this.qb = [];
    this.Cc = this.Fb = this.ac = !0;
    this.Zb = !1;
    this.s = a;
    this.Rb = a.Fh;
    if (b) {
        this.type = b;
        var c = ei[b],
            d;
        for (d in c) this[d] = c[d]
    }
    s(this.H) && this.H()
};

function Zc(a, b) {
    return qe ? Ji.get(a) : ue(b, a)
}
g.k = null;
g.Be = null;
g.ha = null;
g.Jd = null;

function og(a) {
    var b = [];
    a.Be && b.push(a.Be);
    a.ha && b.push(a.ha);
    a.Jd && b.push(a.Jd);
    return b
}

function ad(a) {
    a.k = new Wf(a);
    a.k.H();
    K || O(a.k.oa(), "mousedown", a, a.Ee);
    a.s.Z.appendChild(a.k.oa())
}

function S(a) {
    return a.k && a.k.oa()
}
var xe = 0,
    Ki = null,
    Li = null;
g = di.prototype;
g.select = function () {
    P && ye();
    P = this;
    this.k.$e();
    ze(this.s.Z, "blocklySelectChange")
};

function ye() {
    var a = P;
    P = null;
    a.k.Oe();
    ze(a.s.Z, "blocklySelectChange")
}
g.j = function (a, b, c) {
    this.L = !1;
    var d;
    d = !1;
    if (this.I) this.I.p && this.Qa(null);
    else {
        var e = null;
        this.C && this.C.p && (e = this.C.p, this.Qa(null));
        var f = Uc(this);
        a && f && (a = this.J.p, f.Qa(null), e && id(e, a))
    }
    d && this.moveBy(T * (H ? -1 : 1), 2 * T);
    b && this.k && (d = this.k, Mi("delete"), b = td(d.g), d = d.g.cloneNode(!0), d.mi = b.x, d.ni = b.y, d.setAttribute("transform", "translate(" + d.mi + "," + d.ni + ")"), Dc.appendChild(d), d.Ng = d.getBBox(), d.qg = new Date, fg(d));
    this.s && !c && (se(this.s, this), this.s = null);
    P == this && (P = null, Ni());
    vh.Sd == this && vh.Eb();
    for (c = this.qb.length - 1; 0 <= c; c--) this.qb[c].j(!1);
    b = og(this);
    for (c = 0; c < b.length; c++) b[c].j();
    for (c = 0; b = this.N[c]; c++) b.j();
    this.N = [];
    b = $h(this, !0);
    for (c = 0; c < b.length; c++) d = b[c], d.p && d.disconnect(), b[c].j();
    this.k && (this.k.j(), this.k = null);
    if (qe && !Oi) Ji["delete"](this.id.toString())
};

function I(a) {
    var b = 0,
        c = 0;
    if (a.k) {
        var d = a.k.oa();
        do var e = Jh(d),
            b = b + e.x,
            c = c + e.y,
            d = d.parentNode; while (d && d != a.s.Z)
    }
    return {
        x: b,
        y: c
    }
}
g.moveBy = function (a, b) {
    var c = I(this);
    this.k.oa().setAttribute("transform", "translate(" + (c.x + a) + ", " + (c.y + b) + ")");
    Wh(this, a, b);
    Pi(this)
};

function qg(a) {
    var b = a.k.height,
        c = a.k.width;
    if (a = Uc(a)) a = qg(a), b += a.height - 4, c = Math.max(c, a.width);
    return {
        height: b,
        width: c
    }
}
g.Ee = function (a) {
    if (!this.Rb) {
        Qi();
        Ni();
        this.select();
        vd();
        if (rd(a)) Ri(this, a);
        else if (this.Fb && !K) {
            ud();
            Hh(!0);
            var b = I(this);
            this.gi = b.x;
            this.ii = b.y;
            this.rg = a.clientX;
            this.sg = a.clientY;
            xe = 1;
            Ki = O(document, "mouseup", this, this.Yf);
            Li = O(document, "mousemove", this, this.Xf);
            this.Wd = [];
            for (var b = Ei(this), c = 0, d; d = b[c]; c++) {
                d = og(d);
                for (var e = 0; e < d.length; e++) {
                    var f;
                    f = d[e];
                    f = {
                        x: f.Ic,
                        y: f.Jc
                    };
                    f.Ki = d[e];
                    this.Wd.push(f)
                }
            }
        } else return;
        a.stopPropagation()
    }
};
g.Yf = function () {
    var a = this;
    Si(function () {
        Ni();
        if (P && Mh) {
            id(Nh, Mh);
            if (a.k) {
                var b = (Oh(Nh) ? Mh : Nh).h.k;
                Mi("click");
                var c = td(b.g);
                b.n.I ? (c.x += H ? 3 : -3, c.y += 13) : b.n.C && (c.x += H ? -23 : 23, c.y += 3);
                b = L("circle", {
                    cx: c.x,
                    cy: c.y,
                    r: 0,
                    fill: "none",
                    stroke: "#888",
                    "stroke-width": 10
                }, Dc);
                b.qg = new Date;
                gg(b)
            }
            a.s.Ma && a.s.Ma.tb && a.s.Ma.close()
        } else a.s.Ma && a.s.Ma.tb && (b = a.s.Ma, ee(b.close, 100, b), P.j(!1, !0), ze(window, "resize"));
        Mh && (A(Kh.me), delete Kh.me, Mh = null)
    })
};

function Ri(a, b) {
    if (!K && a.contextMenu) {
        var c = [];
        if (a.ac && !K && a.Fb && !K && !a.Rb) {
            var d = {
                text: Ti,
                enabled: !0,
                bb: function () {
                    var b = Tc(a);
                    jd(b);
                    var b = Yc(a.s, b),
                        c = I(a);
                    c.x = H ? c.x - T : c.x + T;
                    c.y += 2 * T;
                    b.moveBy(c.x, c.y);
                    b.select()
                }
            };
            Ei(a).length > Ae(a.s) && (d.enabled = !1);
            c.push(d);
            a.Cc && !K && !a.Zb && Ec && (d = {
                enabled: !0
            }, a.ha ? (d.text = Ui, d.bb = function () {
                fd(a, null)
            }) : (d.text = Vi, d.bb = function () {
                fd(a, "")
            }), c.push(d));
            if (!a.Zb)
                for (d = 0; d < a.N.length; d++)
                    if (1 == a.N[d].type) {
                        d = {
                            enabled: !0
                        };
                        d.text = a.qd ? Wi : Xi;
                        d.bb = function () {
                            bd(a, !a.qd)
                        };
                        c.push(d);
                        break
                    }
            Fc && (a.Zb ? (d = {
                enabled: !0
            }, d.text = Yi, d.bb = function () {
                a.zd(!1)
            }) : (d = {
                enabled: !0
            }, d.text = Zi, d.bb = function () {
                a.zd(!0)
            }), c.push(d));
            Gc && (d = {
                text: a.disabled ? $i : aj,
                enabled: !ng(a),
                bb: function () {
                    cd(a, !a.disabled)
                }
            }, c.push(d));
            var d = Ei(a).length,
                e = Uc(a);
            e && (d -= Ei(e).length);
            d = {
                text: 1 == d ? bj : cj.replace("%1", String(d)),
                enabled: !0,
                bb: function () {
                    a.j(!0, !0)
                }
            };
            c.push(d)
        }
        d = {
            enabled: !(s(a.fc) ? !a.fc() : !a.fc)
        };
        d.text = dj;
        d.bb = function () {
            var b = s(a.fc) ? a.fc() : a.fc;
            b && window.open(b)
        };
        c.push(d);
        a.Zi &&
            !a.Rb && a.Zi(c);
        vh.show(b, c);
        vh.Sd = a
    }
}

function $h(a, b) {
    var c = [];
    if (b || a.L)
        if (a.I && c.push(a.I), a.J && c.push(a.J), a.C && c.push(a.C), b || !a.Zb)
            for (var d = 0, e; e = a.N[d]; d++) e.o && c.push(e.o);
    return c
}

function Wh(a, b, c) {
    if (a.L) {
        for (var d = $h(a, !1), e = 0; e < d.length; e++) d[e].moveBy(b, c);
        d = og(a);
        for (e = 0; e < d.length; e++) pg(d[e]);
        for (e = 0; e < a.qb.length; e++) Wh(a.qb[e], b, c)
    }
}

function ej(a, b) {
    b ? Zf(a.k.g, "blocklyDragging") : $f(a.k.g, "blocklyDragging");
    for (var c = 0; c < a.qb.length; c++) ej(a.qb[c], b)
}
g.Xf = function (a) {
    var b = this;
    Si(function () {
        if (!("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button)) {
            ud();
            var c = a.clientX - b.rg,
                d = a.clientY - b.sg;
            1 == xe && Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2)) > fj && (xe = 2, b.Qa(null), ej(b, !0));
            if (2 == xe) {
                b.k.oa().setAttribute("transform", "translate(" + (b.gi + c) + ", " + (b.ii + d) + ")");
                for (var e = 0; e < b.Wd.length; e++) {
                    var f = b.Wd[e],
                        h = f.Ki,
                        k = f.x + c,
                        f = f.y + d;
                    h.Ic = k;
                    h.Jc = f;
                    h.v() && yh(h.ga, k, f)
                }
                for (var h = $h(b, !1), f = k = null, l = T, e = 0; e < h.length; e++) {
                    var q = h[e],
                        p = Xh(q, l, c, d);
                    p.o && (k =
                        p.o, f = q, l = p.Sh)
                }
                Mh && Mh != k && (A(Kh.me), delete Kh.me, Nh = Mh = null);
                k && k != Mh && (k.le(), Mh = k, Nh = f);
                b.s.Ma && b.ac && !K && (c = b.s.Ma, c.g && (d = sd(a), e = td(c.g), d = d.x > e.x - c.Kd && d.x < e.x + c.Yc + c.Kd && d.y > e.y - c.Kd && d.y < e.y + c.Xe + c.Xc + c.Kd, c.tb != d && ke(c, d)))
            }
        }
        a.stopPropagation()
    })
};
g.Ga = function () {
    if (0 == xe) {
        var a = Uh(this);
        if (!a.Rb)
            for (var b = $h(this, !1), c = 0; c < b.length; c++) {
                var d = b[c];
                d.p && Oh(d) && J(d).Ga();
                for (var e = Yh(d), f = 0; f < e.length; f++) {
                    var h = e[f];
                    d.p && h.p || Uh(h.h) != a && (Oh(d) ? Rh(h, d) : Rh(d, h))
                }
            }
    }
};
g.getParent = function () {
    return this.Oc
};

function Uc(a) {
    return a.J && J(a.J)
}

function Uh(a) {
    var b = a;
    do a = b, b = a.Oc; while (b);
    return a
}
g.Nb = function () {
    return this.qb
};
g.Qa = function (a) {
    if (this.Oc) {
        for (var b = this.Oc.qb, c, d = 0; c = b[d]; d++)
            if (c == this) {
                b.splice(d, 1);
                break
            }
        b = I(this);
        this.s.Z.appendChild(this.k.oa());
        this.k.oa().setAttribute("transform", "translate(" + b.x + ", " + b.y + ")");
        this.Oc = null;
        this.C && this.C.p && this.C.disconnect();
        this.I && this.I.p && this.I.disconnect()
    } else Xa(Sc(this.s, !1), this) && se(this.s, this);
    (this.Oc = a) ? (a.qb.push(this), b = I(this), a.k && this.k && a.k.oa().appendChild(this.k.oa()), a = I(this), Wh(this, a.x - b.x, a.y - b.y)) : pe(this.s, this)
};

function Ei(a) {
    for (var b = [a], c, d = 0; c = a.qb[d]; d++) b.push.apply(b, Ei(c));
    return b
}

function dd(a, b) {
    a.ac = b;
    a.k && Yf(a.k)
}

function ed(a, b) {
    a.Cc = b;
    for (var c = 0, d; d = a.N[c]; c++)
        for (var e = 0, f; f = d.ua[e]; e++) f.wc();
    d = og(a);
    for (c = 0; c < d.length; c++) d[c].wc()
}
g.Wb = function (a) {
    this.lf = a;
    this.k && this.k.vc();
    var b = og(this);
    for (a = 0; a < b.length; a++) b[a].vc();
    if (this.L) {
        for (a = 0; b = this.N[a]; a++)
            for (var c = 0, d; d = b.ua[c]; c++) d.Ka(null);
        this.B()
    }
};

function gd(a, b) {
    for (var c = 0, d; d = a.N[c]; c++)
        for (var e = 0, f; f = d.ua[e]; e++)
            if (f.name === b) return f;
    return null
}

function gj(a) {
    return (a = gd(a, "DIR")) ? a.Gc() : null
}
g.wb = function (a) {
    this.Ea = a
};

function bi(a, b) {
    var c;
    a.C && (a.C.j(), a.C = null);
    b && (void 0 === c && (c = null), a.C = new Kh(a, 4), a.C.Qc(c));
    a.L && (a.B(), a.Ga())
}

function ci(a, b) {
    var c;
    a.J && (a.J.j(), a.J = null);
    b && (void 0 === c && (c = null), a.J = new Kh(a, 3), a.J.Qc(c));
    a.L && (a.B(), a.Ga())
}

function ai(a, b) {
    a.I && (a.I.j(), a.I = null);
    void 0 === b && (b = null);
    a.I = new Kh(a, 2);
    a.I.Qc(b);
    a.L && (a.B(), a.Ga())
}

function bd(a, b) {
    a.qd = b;
    a.L && (a.B(), a.Ga(), ne(a.s))
}

function cd(a, b) {
    a.disabled != b && (a.disabled = b, mg(a.k), ne(a.s))
}

function ng(a) {
    for (;;) {
        a: for (;;) {
            do {
                var b = a;
                a = a.getParent();
                if (!a) {
                    a = null;
                    break a
                }
            } while (Uc(a) == b);
            break a
        }
        if (!a) return !1;
        if (a.disabled) return !0
    }
}
g.isCollapsed = function () {
    return this.Zb
};
g.zd = function (a) {
    if (this.Zb != a) {
        this.Zb = a;
        for (var b = [], c = 0, d; d = this.N[c]; c++) b.push.apply(b, d.K(!a));
        if (a) {
            a = og(this);
            for (c = 0; c < a.length; c++) a[c].K(!1);
            c = this.toString(hj);
            Di(ij(this, "_TEMP_COLLAPSED_INPUT"), c)
        } else a: {
            for (c = 0; a = this.N[c]; c++)
                if ("_TEMP_COLLAPSED_INPUT" == a.name) {
                    a.o && a.o.p && J(a.o).Qa(null);
                    a.j();
                    this.N.splice(c, 1);
                    this.L && (this.B(), this.Ga());
                    break a
                }
            La('Input "%s" not found.', "_TEMP_COLLAPSED_INPUT")
        }
        b.length || (b[0] = this);
        if (this.L) {
            for (c = 0; a = b[c]; c++) a.B();
            this.Ga()
        }
    }
};
g.toString = function (a) {
    for (var b = [], c = 0, d; d = this.N[c]; c++) {
        for (var e = 0, f; f = d.ua[e]; e++) b.push(f.hb());
        d.o && ((d = J(d.o)) ? b.push(d.toString()) : b.push("?"))
    }
    b = ua(b.join(" ")) || "???";
    a && b.length > a && (b = b.substring(0, a - 3) + "...");
    return b
};

function ij(a, b) {
    return jj(a, 5, b || "")
}
g.rd = function (a, b) {
    function c(a) {
        a instanceof tg ? Di(this, a) : Di(this, a[1], a[0])
    }
    var d = arguments[arguments.length - 1];
    --arguments.length;
    for (var e = a.split(this.rd.zi), f = [], h = 0; h < e.length; h += 2) {
        var k = ua(e[h]),
            l = void 0;
        k && f.push(new Bi(k));
        if ((k = e[h + 1]) && "%" == k.charAt(0)) {
            var k = parseInt(k.substring(1), 10),
                q = arguments[k];
            q[1] instanceof tg ? f.push([q[0], q[1]]) : l = Fi(jj(this, 1, q[0]).Qc(q[1]), q[2]);
            arguments[k] = null
        } else "\n" == k && f.length && (l = ij(this));
        l && f.length && (f.forEach(c, l), f = [])
    }
    f.length && (l = Fi(ij(this),
        d), f.forEach(c, l));
    for (h = 1; h < arguments.length - 1; h++);
    bd(this, !a.match(this.rd.ti))
};
g.rd.zi = /(%\d+|\n)/;
g.rd.ti = /%1\s*$/;

function jj(a, b, c) {
    var d = null;
    if (1 == b || 3 == b) d = new Kh(a, b);
    b = new Ci(b, c, a, d);
    a.N.push(b);
    a.L && (a.B(), a.Ga());
    return b
}

function hd(a, b) {
    for (var c = 0, d; d = a.N[c]; c++)
        if (d.name == b) return d;
    return null
}

function kj(a) {
    return a.ha ? a.ha.hb().replace(/\s+$/, "").replace(/ +\n/g, "\n") : ""
}

function fd(a, b) {
    var c = !1;
    r(b) ? (a.ha || (a.ha = new fi(a), c = !0), a.ha.Ka(b)) : a.ha && (a.ha.j(), c = !0);
    a.L && (a.B(), c && a.Ga())
}
g.B = function () {
    this.k.B();
    Pi(this)
};
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function lj() {
    var a = this;
    this.t = new le(function () {
        return mj(a)
    }, function (b) {
        var c = mj(a);
        c && (fa(b.y) && (a.t.scrollY = -c.Sa * b.y - c.cb), a.t.Z.setAttribute("transform", "translate(0," + (a.t.scrollY + c.Za) + ")"))
    });
    this.t.Fh = !0;
    this.qh = [];
    this.qa = this.D = 0;
    this.hf = [];
    this.ub = []
}
var nj, oj, pj, qj, rj, sj;
g = lj.prototype;
g.Nd = !0;
g.sa = 8;
g.G = function () {
    this.g = L("g", {}, null);
    this.Wa = L("path", {
        "class": "blocklyFlyoutBackground"
    }, this.g);
    this.g.appendChild(this.t.G());
    return this.g
};
g.j = function () {
    this.Eb();
    N(this.qh);
    this.qh.length = 0;
    this.nc && (this.nc.j(), this.nc = null);
    this.t = null;
    this.g && (A(this.g), this.g = null);
    this.Fd = this.Wa = null
};

function mj(a) {
    if (!a.v()) return null;
    var b = a.qa - 2 * a.sa,
        c = a.D;
    try {
        var d = a.t.Z.getBBox()
    } catch (e) {
        d = {
            height: 0,
            y: 0
        }
    }
    return {
        za: b,
        Q: c,
        Sa: d.height + d.y,
        xb: -a.t.scrollY,
        cb: 0,
        Za: a.sa,
        Ya: 0
    }
}
g.H = function (a) {
    this.Fd = a;
    this.nc = new ld(this.t, !1, !1);
    this.Eb();
    O(window, "resize", this, this.wd);
    this.wd();
    O(this.g, "wheel", this, this.pi);
    O(this.g, "mousewheel", this, this.pi);
    O(this.Fd.Z, "blocklyWorkspaceChange", this, this.xf);
    O(this.g, "mousedown", this, this.Ee)
};
g.wd = function () {
    if (this.v()) {
        var a = this.Fd.Db();
        if (a) {
            var b = this.D - this.sa;
            H && (b *= -1);
            var c = ["M " + (H ? this.D : 0) + ",0"];
            c.push("h", b);
            c.push("a", this.sa, this.sa, 0, 0, H ? 0 : 1, H ? -this.sa : this.sa, this.sa);
            c.push("v", Math.max(0, a.za - 2 * this.sa));
            c.push("a", this.sa, this.sa, 0, 0, H ? 0 : 1, H ? this.sa : -this.sa, this.sa);
            c.push("h", -b);
            c.push("z");
            this.Wa.setAttribute("d", c.join(" "));
            b = a.Ya;
            H && (b += a.Q, b -= this.D);
            this.g.setAttribute("transform", "translate(" + b + "," + a.Za + ")");
            this.qa = a.za;
            this.nc && this.nc.resize()
        }
    }
};
g.pi = function (a) {
    var b = a.deltaY || -a.wheelDeltaY;
    if (b) {
        Hb && (b *= 10);
        var c = mj(this),
            b = c.xb + b,
            b = Math.min(b, c.Sa - c.za),
            b = Math.max(b, 0);
        this.nc.set(b);
        a.preventDefault()
    }
};
g.v = function () {
    return this.g && "block" == this.g.style.display
};
g.Eb = function () {
    if (this.v()) {
        this.g.style.display = "none";
        for (var a = 0, b; b = this.ub[a]; a++) N(b);
        this.ub.length = 0;
        this.eg && (N(this.eg), this.eg = null)
    }
};
g.show = function (a) {
    this.Eb();
    for (var b = Sc(this.t, !1), c = 0, d; d = b[c]; c++) d.s == this.t && d.j(!1, !1);
    for (var c = 0, e; e = this.hf[c]; c++) A(e);
    this.hf.length = 0;
    var f = this.sa;
    this.g.style.display = "block";
    var b = [],
        h = [];
    if (a == tj) uj(b, h, f, this.t);
    else if (a == vj) wj(b, h, f, this.t);
    else
        for (var k = 0; d = a[k]; k++) d.tagName && "BLOCK" == d.tagName.toUpperCase() && (d = Yc(this.t, d), b.push(d), h.push(3 * f));
    a = f;
    for (k = 0; d = b[k]; k++) {
        c = Ei(d);
        e = 0;
        for (var l; l = c[e]; e++) l.Rb = !0, fd(l, null);
        d.B();
        l = S(d);
        e = qg(d);
        c = H ? 0 : f + 8;
        d.moveBy(c, a);
        a += e.height +
            h[k];
        e = L("rect", {
            "fill-opacity": 0
        }, null);
        this.t.Z.insertBefore(e, S(d));
        d.dd = e;
        this.hf[k] = e;
        this.Nd ? this.ub.push(O(l, "mousedown", null, xj(this, d))) : this.ub.push(O(l, "mousedown", null, yj(this, d)));
        this.ub.push(O(l, "mouseover", d.k, d.k.$e));
        this.ub.push(O(l, "mouseout", d.k, d.k.Oe));
        this.ub.push(O(e, "mousedown", null, xj(this, d)));
        this.ub.push(O(e, "mouseover", d.k, d.k.$e));
        this.ub.push(O(e, "mouseout", d.k, d.k.Oe))
    }
    this.ub.push(O(this.Wa, "mouseover", this, function () {
        for (var a = Sc(this.t, !1), b = 0, c; c = a[b]; b++) c.k.Oe()
    }));
    this.D = 0;
    this.Th();
    this.xf();
    zj(window, "resize");
    this.eg = O(this.t.Z, "blocklyWorkspaceChange", this, this.Th);
    ne(this.t)
};
g.Th = function () {
    for (var a = 0, b = this.sa, c = Sc(this.t, !1), d = 0, e; e = c[d]; d++) var f = qg(e),
        a = Math.max(a, f.width);
    a += b + 8 + b / 2 + M;
    if (this.D != a) {
        for (d = 0; e = c[d]; d++) {
            var f = qg(e),
                h = I(e);
            if (H) {
                var k = a - b - 8 - h.x;
                e.moveBy(k, 0);
                h.x += k
            }
            e.dd && (e.dd.setAttribute("width", f.width), e.dd.setAttribute("height", f.height), e.dd.setAttribute("x", H ? h.x - f.width : h.x), e.dd.setAttribute("y", h.y))
        }
        this.D = a;
        ze(window, "resize")
    }
};
di.prototype.moveTo = function (a, b) {
    var c = I(this);
    this.k.oa().setAttribute("transform", "translate(" + a + ", " + b + ")");
    Wh(this, a - c.x, b - c.y)
};

function yj(a, b) {
    return function (c) {
        Ni();
        vd();
        rd(c) ? Ri(b, c) : (ud(), Hh(!0), nj = c, oj = b, pj = a, qj = O(document, "mouseup", this, Ni), rj = O(document, "mousemove", this, a.Rj));
        c.stopPropagation()
    }
}
lj.prototype.Ee = function (a) {
    rd(a) || (vd(!0), Aj(), this.ei = a.clientY, sj = O(document, "mousemove", this, this.Xf), qj = O(document, "mouseup", this, Aj), a.preventDefault(), a.stopPropagation())
};
lj.prototype.Xf = function (a) {
    var b = a.clientY - this.ei;
    this.ei = a.clientY;
    a = mj(this);
    b = a.xb - b;
    b = Math.min(b, a.Sa - a.za);
    b = Math.max(b, 0);
    this.nc.set(b)
};
lj.prototype.Rj = function (a) {
    "mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button ? a.stopPropagation() : (ud(), Math.sqrt(Math.pow(a.clientX - nj.clientX, 2) + Math.pow(a.clientY - nj.clientY, 2)) > fj && xj(pj, oj)(nj))
};

function xj(a, b) {
    return function (c) {
        if (!rd(c) && !b.disabled) {
            var d = Tc(b),
                d = Yc(a.Fd, d),
                e = S(b);
            if (!e) throw "originBlock is not rendered.";
            var e = td(e),
                f = S(d);
            if (!f) throw "block is not rendered.";
            f = td(f);
            d.moveBy(e.x - f.x, e.y - f.y);
            a.Nd ? a.Eb() : a.xf();
            d.Ee(c)
        }
    }
}
lj.prototype.xf = function () {
    for (var a = Ae(this.Fd), b = Sc(this.t, !1), c = 0, d; d = b[c]; c++) {
        var e = Ei(d).length > a;
        cd(d, e)
    }
};

function Aj() {
    qj && (N(qj), qj = null);
    rj && (N(rj), rj = null);
    sj && (N(sj), sj = null);
    qj && (N(qj), qj = null);
    pj = oj = nj = null
};

function Bj(a) {
    if ("function" == typeof a.Ff) return a.Ff();
    if (r(a)) return a.split("");
    if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    b = [];
    c = 0;
    for (d in a) b[c++] = a[d];
    return b
};

function Cj(a) {
    this.Na = void 0;
    this.ta = {};
    if (a) {
        var b;
        if ("function" == typeof a.Ef) b = a.Ef();
        else if ("function" != typeof a.Ff)
            if (ea(a) || r(a)) {
                b = [];
                for (var c = a.length, d = 0; d < c; d++) b.push(d)
            } else
                for (d in b = [], c = 0, a) b[c++] = d;
        else b = void 0;
        a = Bj(a);
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    }
}
g = Cj.prototype;
g.set = function (a, b) {
    Dj(this, a, b, !1)
};
g.add = function (a, b) {
    Dj(this, a, b, !0)
};

function Dj(a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        a.ta[f] || (a.ta[f] = new Cj);
        a = a.ta[f]
    }
    if (d && void 0 !== a.Na) throw Error('The collection already contains the key "' + b + '"');
    a.Na = c
}
g.get = function (a) {
    a: {
        for (var b = this, c = 0; c < a.length; c++)
            if (b = b.ta[a.charAt(c)], !b) {
                a = void 0;
                break a
            }
        a = b
    }
    return a ? a.Na : void 0
};
g.Ff = function () {
    var a = [];
    Ej(this, a);
    return a
};

function Ej(a, b) {
    void 0 !== a.Na && b.push(a.Na);
    for (var c in a.ta) Ej(a.ta[c], b)
}
g.Ef = function (a) {
    var b = [];
    if (a) {
        for (var c = this, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if (!c.ta[e]) return [];
            c = c.ta[e]
        }
        Fj(c, a, b)
    } else Fj(this, "", b);
    return b
};

function Fj(a, b, c) {
    void 0 !== a.Na && c.push(b);
    for (var d in a.ta) Fj(a.ta[d], b + d, c)
}
g.clear = function () {
    this.ta = {};
    this.Na = void 0
};
g.remove = function (a) {
    for (var b = this, c = [], d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (!b.ta[e]) throw Error('The collection does not have the key "' + a + '"');
        c.push([b, e]);
        b = b.ta[e]
    }
    a = b.Na;
    for (delete b.Na; 0 < c.length;)
        if (e = c.pop(), b = e[0], e = e[1], b.ta[e].Eh()) delete b.ta[e];
        else break;
    return a
};
g.clone = function () {
    return new Cj(this)
};
g.Eh = function () {
    var a;
    if (a = void 0 === this.Na) a: {
        a = this.ta;
        for (var b in a) {
            a = !1;
            break a
        }
        a = !0
    }
    return a
};

function Gj() {
    this.ic = new Cj
}
g = Gj.prototype;
g.U = "";
g.Sf = null;
g.ze = null;
g.ud = 0;
g.Kc = 0;

function Hj(a, b) {
    var c = !1,
        d = a.ic.Ef(b);
    d && d.length && (a.Kc = 0, a.ud = 0, c = a.ic.get(d[0]), c = Ij(a, c)) && (a.Sf = d);
    return c
}

function Ij(a, b) {
    var c;
    b && (a.Kc < b.length && (c = b[a.Kc], a.ze = b), c && (c.gg(), c.select()));
    return !!c
}
g.clear = function () {
    this.U = ""
};

function Jj(a) {
    var b;
    b || (b = Kj(a || arguments.callee.caller, []));
    return b
}

function Kj(a, b) {
    var c = [];
    if (Xa(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
        c.push(Lj(a) + "(");
        for (var d = a.arguments, e = 0; d && e < d.length; e++) {
            0 < e && c.push(", ");
            var f;
            f = d[e];
            switch (typeof f) {
            case "object":
                f = f ? "object" : "null";
                break;
            case "string":
                break;
            case "number":
                f = String(f);
                break;
            case "boolean":
                f = f ? "true" : "false";
                break;
            case "function":
                f = (f = Lj(f)) ? f : "[fn]";
                break;
            default:
                f = typeof f
            }
            40 < f.length && (f = f.substr(0, 40) + "...");
            c.push(f)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push(Kj(a.caller, b))
        } catch (h) {
            c.push("[exception trying to get caller]\n")
        }
    } else a ?
        c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
}

function Lj(a) {
    if (Mj[a]) return Mj[a];
    a = String(a);
    if (!Mj[a]) {
        var b = /function ([^\(]+)/.exec(a);
        Mj[a] = b ? b[1] : "[Anonymous]"
    }
    return Mj[a]
}
var Mj = {};

function Nj(a, b, c, d, e) {
    this.reset(a, b, c, d, e)
}
Nj.prototype.sh = null;
Nj.prototype.rh = null;
var Oj = 0;
Nj.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || Oj++;
    d || oa();
    this.td = a;
    this.Kj = b;
    delete this.sh;
    delete this.rh
};
Nj.prototype.$h = function (a) {
    this.td = a
};

function Pj(a) {
    this.Ce = a;
    this.Ah = this.R = this.td = this.xa = null
}

function Qj(a, b) {
    this.name = a;
    this.value = b
}
Qj.prototype.toString = function () {
    return this.name
};
var Rj = new Qj("WARNING", 900),
    Sj = new Qj("INFO", 800),
    Tj = new Qj("CONFIG", 700),
    Uj = new Qj("FINE", 500);
g = Pj.prototype;
g.getName = function () {
    return this.Ce
};
g.getParent = function () {
    return this.xa
};
g.Nb = function () {
    this.R || (this.R = {});
    return this.R
};
g.$h = function (a) {
    this.td = a
};

function Vj(a) {
    if (a.td) return a.td;
    if (a.xa) return Vj(a.xa);
    La("Root logger has no level set.");
    return null
}
g.log = function (a, b, c) {
    if (a.value >= Vj(this).value)
        for (s(b) && (b = b()), a = this.jj(a, b, c, Pj.prototype.log), b = "log:" + a.Kj, m.console && (m.console.timeStamp ? m.console.timeStamp(b) : m.console.markTimeline && m.console.markTimeline(b)), m.msWriteProfilerMark && m.msWriteProfilerMark(b), b = this; b;) {
            c = b;
            var d = a;
            if (c.Ah)
                for (var e = 0, f = void 0; f = c.Ah[e]; e++) f(d);
            b = b.getParent()
        }
};
g.jj = function (a, b, c, d) {
    var e = new Nj(a, String(b), this.Ce);
    if (c) {
        var f;
        f = d || arguments.callee.caller;
        e.sh = c;
        var h;
        try {
            var k;
            var l = aa("window.location.href");
            if (r(c)) k = {
                message: c,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: l,
                stack: "Not available"
            };
            else {
                var q, p, u = !1;
                try {
                    q = c.lineNumber || c.Fl || "Not available"
                } catch (t) {
                    q = "Not available", u = !0
                }
                try {
                    p = c.fileName || c.filename || c.sourceURL || m.$googDebugFname || l
                } catch (E) {
                    p = "Not available", u = !0
                }
                k = !u && c.lineNumber && c.fileName && c.stack && c.message && c.name ?
                    c : {
                        message: c.message || "Not available",
                        name: c.name || "UnknownError",
                        lineNumber: q,
                        fileName: p,
                        stack: c.stack || "Not available"
                }
            }
            h = "Message: " + xa(k.message) + '\nUrl: <a href="view-source:' + k.fileName + '" target="_new">' + k.fileName + "</a>\nLine: " + k.lineNumber + "\n\nBrowser stack:\n" + xa(k.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + xa(Jj(f) + "-> ")
        } catch (wa) {
            h = "Exception trying to expose exception! You win, we lose. " + wa
        }
        e.rh = h
    }
    return e
};
g.Jd = function (a, b) {
    this.log(Rj, a, b)
};
g.info = function (a, b) {
    this.log(Sj, a, b)
};
var Wj = {},
    Xj = null;

function Yj(a) {
    Xj || (Xj = new Pj(""), Wj[""] = Xj, Xj.$h(Tj));
    var b;
    if (!(b = Wj[a])) {
        b = new Pj(a);
        var c = a.lastIndexOf("."),
            d = a.substr(c + 1),
            c = Yj(a.substr(0, c));
        c.Nb()[d] = b;
        b.xa = c;
        Wj[a] = b
    }
    return b
};

function Zj(a) {
    ce.call(this);
    this.u = a;
    a = w ? "focusout" : "blur";
    this.Hj = Sd(this.u, w ? "focusin" : "focus", this, !w);
    this.Ij = Sd(this.u, a, this, !w)
}
v(Zj, ce);
Zj.prototype.handleEvent = function (a) {
    var b = new Md(a.Cb);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    this.dispatchEvent(b)
};
Zj.prototype.V = function () {
    Zj.m.V.call(this);
    Zd(this.Hj);
    Zd(this.Ij);
    delete this.u
};

function ak(a, b, c) {
    dh.call(this, a, b, c);
    this.cd = !0;
    mh(this, !0);
    this.Pa = this;
    this.Gd = new Gj;
    if (w) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (d) {
        (a = this.Ih) && a.Jd("Failed to enable background image cache", void 0)
    }
}
v(ak, dh);
ak.prototype.wa = null;
ak.prototype.zf = null;
var bk = ak.prototype,
    ck = Yj("goog.ui.tree.TreeControl");
bk.Ih = ck;
g = ak.prototype;
g.Bf = !1;
g.hj = null;
g.Dd = !0;
g.ng = !0;
g.tc = !0;
g.og = !0;
g.Aa = function () {
    return this
};
g.Ec = function () {
    return 0
};
g.gg = function () {};
g.qj = function () {
    this.Bf = !0;
    hf(this.i(), "focused");
    this.Pa && this.Pa.select()
};
g.mj = function () {
    this.Bf = !1;
    kf(this.i(), "focused")
};
g.hasFocus = function () {
    return this.Bf
};
g.Ha = function () {
    return !this.tc || ak.m.Ha.call(this)
};
g.Hb = function (a) {
    this.tc ? ak.m.Hb.call(this, a) : this.cd = a
};
g.Df = function () {
    return xb
};
g.ce = function () {
    var a = kh(this);
    return a ? a.firstChild : null
};
g.be = function () {
    return null
};
g.Wc = function () {};
g.hd = function () {
    return ak.m.hd.call(this) + (this.tc ? "" : " " + this.ma.dh)
};
g.Yd = function () {
    var a = this.Ha(),
        b = this.gj;
    if (a && b) return b;
    b = this.yj;
    if (!a && b) return b;
    b = this.ma;
    return a && b.bh ? b.$b + " " + b.bh : !a && b.Yg ? b.$b + " " + b.Yg : ""
};
g.rc = function (a) {
    if (this.Pa != a) {
        var b = !1;
        this.Pa && (b = this.Pa == this.hj, mh(this.Pa, !1));
        if (this.Pa = a) mh(a, !0), b && a.select();
        this.dispatchEvent("change")
    }
};

function dk(a) {
    function b(a) {
        var h = hh(a);
        if (h) {
            var k = !d || c == a.getParent() && !e ? a.ma.Wg : a.ma.Vg;
            h.className = k;
            if (h = a.be()) h.className = qh(a)
        }
        af(a, b)
    }
    var c = a,
        d = c.Dd,
        e = c.og;
    b(a)
}
g.re = function () {
    ak.m.re.call(this);
    var a = this.i();
    pf(a, "tree");
    qf(a, "labelledby", gh(this).id)
};
g.na = function () {
    ak.m.na.call(this);
    var a = this.i();
    a.className = this.ma.gh;
    a.setAttribute("hideFocus", "true");
    a = this.i();
    a.tabIndex = 0;
    var b = this.wa = new Cf(a),
        c = this.zf = new Zj(a);
    Ze(this).A(c, "focusout", this.mj).A(c, "focusin", this.qj).A(b, "key", this.ib).A(a, "mousedown", this.Hf).A(a, "click", this.Hf).A(a, "dblclick", this.Hf);
    this.re()
};
g.Ua = function () {
    ak.m.Ua.call(this);
    this.wa.j();
    this.wa = null;
    this.zf.j();
    this.zf = null
};
g.Hf = function (a) {
    var b = this.Ih;
    b && b.log(Uj, "Received event " + a.type, void 0);
    if (b = ek(this, a)) switch (a.type) {
    case "mousedown":
        b.Wf(a);
        break;
    case "click":
        a.preventDefault();
        break;
    case "dblclick":
        b.Lh(a)
    }
};
g.ib = function (a) {
    var b = !1,
        b = this.Gd,
        c = !1;
    switch (a.keyCode) {
    case 40:
    case 38:
        if (a.ctrlKey) {
            var c = 40 == a.keyCode ? 1 : -1,
                d = b.Sf;
            if (d) {
                var e = null,
                    f = !1;
                if (b.ze) {
                    var h = b.Kc + c;
                    0 <= h && h < b.ze.length ? (b.Kc = h, e = b.ze) : f = !0
                }
                e || (h = b.ud + c, 0 <= h && h < d.length && (b.ud = h), d.length > b.ud && (e = b.ic.get(d[b.ud])), e && e.length && f && (b.Kc = -1 == c ? e.length - 1 : 0));
                Ij(b, e) && (b.Sf = d)
            }
            c = !0
        }
        break;
    case 8:
        d = b.U.length - 1;
        c = !0;
        0 < d ? (b.U = b.U.substring(0, d), Hj(b, b.U)) : 0 == d ? b.U = "" : c = !1;
        break;
    case 27:
        b.U = "", c = !0
    }
    if (!(b = c) && (b = this.Pa)) {
        b = this.Pa;
        c = !0;
        switch (a.keyCode) {
        case 39:
            if (a.altKey) break;
            df(b) && (b.Ha() ? Q(b, 0).select() : b.Hb(!0));
            break;
        case 37:
            if (a.altKey) break;
            df(b) && b.Ha() && b.sd ? b.Hb(!1) : (d = b.getParent(), e = b.Aa(), d && (e.tc || d != e) && d.select());
            break;
        case 40:
            a: if (df(b) && b.Ha()) d = Q(b, 0);
            else {
                for (d = b; d != b.Aa();) {
                    e = d.jb;
                    if (null != e) {
                        d = e;
                        break a
                    }
                    d = d.getParent()
                }
                d = null
            }
            d && d.select();
            break;
        case 38:
            d = b.jc;
            null != d ? d = th(d) : (d = b.getParent(), e = b.Aa(), d = !e.tc && d == e || b == e ? null : d);
            d && d.select();
            break;
        default:
            c = !1
        }
        c && (a.preventDefault(), (e = b.Aa()) && e.Gd.clear());
        b = c
    }
    b || (b = this.Gd, c = !1, a.ctrlKey || a.altKey || (d = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == d.length && " " <= d && "~" >= d || "\u0080" <= d && "\ufffd" >= d) && (" " != d || b.U) && (b.U += d, c = Hj(b, b.U))), b = c);
    b && a.preventDefault();
    return b
};

function ek(a, b) {
    for (var c = null, d = b.target; null != d;) {
        if (c = fh[d.id]) return c;
        if (d == a.i()) break;
        d = d.parentNode
    }
    return null
}
g.createNode = function (a) {
    return new uh(a || xb, this.ma, this.gb())
};

function sh(a, b) {
    var c = a.Gd,
        d = b.hb();
    if (d && !/^[\s\xa0]*$/.test(null == d ? "" : String(d))) {
        var d = d.toLowerCase(),
            e = c.ic.get(d);
        e ? e.push(b) : c.ic.set(d, [b])
    }
}
g.removeNode = function (a) {
    var b = this.Gd,
        c = a.hb();
    if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        var c = c.toLowerCase(),
            d = b.ic.get(c);
        d && (Ya(d, a), d.length && b.ic.remove(c))
    }
};
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var fk, gk, hk, ik = 0,
    jk = {
        Mf: 19,
        gh: "blocklyTreeRoot",
        dh: "blocklyHidden",
        eh: "",
        ih: "blocklyTreeRow",
        fh: "blocklyTreeLabel",
        $b: "blocklyTreeIcon",
        of: "blocklyTreeIconOpen",
        pf: "blocklyTreeIconNone",
        hh: "blocklyTreeSelected"
    };

function kk(a, b) {
    fk = $b("div", "blocklyToolboxDiv");
    fk.setAttribute("dir", H ? "RTL" : "LTR");
    b.appendChild(fk);
    gk = new lj;
    a.appendChild(gk.G());
    O(fk, "mousedown", null, function (a) {
        rd(a) || a.target == fk ? vd(!1) : vd(!0)
    })
}

function lk() {
    jk.cleardotPath = ie + "media/1x1.gif";
    jk.cssCollapsedFolderIcon = "blocklyTreeIconClosed" + (H ? "Rtl" : "Ltr");
    var a = new mk(xb, jk);
    hk = a;
    if (0 != a.tc) {
        a.tc = !1;
        if (a.w) {
            var b = kh(a);
            b && (b.className = a.hd())
        }
        a.Pa == a && Q(a, 0) && a.rc(Q(a, 0))
    }
    0 != a.Dd && (a.Dd = !1, a.w && dk(a));
    0 != a.ng && (a.ng = !1, a.w && dk(a));
    a.rc(null);
    fk.style.display = "block";
    gk.H(z);
    nk();
    a.B(fk);
    Sd(window, "resize", ok);
    ok()
}

function ok() {
    var a = fk,
        b = Re(Dc),
        c = Ai();
    H ? (b = pk(0, 0, !1), a.style.left = b.x + c.width - a.offsetWidth + "px") : a.style.marginLeft = b.left;
    a.style.height = c.height + 1 + "px";
    ik = a.offsetWidth;
    H || --ik
}

function nk() {
    function a(c, d) {
        for (var e = 0, f; f = c.childNodes[e]; e++)
            if (f.tagName) {
                var h = f.tagName.toUpperCase();
                if ("CATEGORY" == h) {
                    h = b.createNode(f.getAttribute("name"));
                    h.Yb = [];
                    d.add(h);
                    var k = f.getAttribute("custom");
                    k ? h.Yb = k : a(f, h)
                } else "BLOCK" == h && d.Yb.push(f)
            }
    }
    var b = hk;
    b.Vh();
    b.Yb = [];
    a(Hc, hk);
    if (b.Yb.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    ze(window, "resize")
}

function mk(a, b, c) {
    ak.call(this, a, b, c)
}
v(mk, ak);
mk.prototype.na = function () {
    mk.m.na.call(this);
    if (Kd) {
        var a = this.i();
        O(a, "touchstart", this, this.vj)
    }
};
mk.prototype.vj = function (a) {
    a.preventDefault();
    var b = ek(this, a);
    b && "touchstart" === a.type && window.setTimeout(function () {
        b.Wf(a)
    }, 1)
};
mk.prototype.createNode = function (a) {
    return new qk(a ? qb(a) : xb, this.ma, this.gb())
};
mk.prototype.rc = function (a) {
    this.Pa != a && (ak.prototype.rc.call(this, a), a && a.Yb && a.Yb.length ? gk.show(a.Yb) : gk.Eb())
};

function qk(a, b, c) {
    function d() {
        ze(window, "resize")
    }
    dh.call(this, a, b, c);
    Sd(hk, "expand", d);
    Sd(hk, "collapse", d)
}
v(qk, uh);
dh.prototype.Df = function () {
    return vb("span")
};
qk.prototype.Wf = function () {
    df(this) && this.sd ? (this.toggle(), this.select()) : this.te() ? this.Aa().rc(null) : this.select();
    nh(this)
};
qk.prototype.Lh = function () {};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var tj = "VARIABLE";

function rk() {
    var a;
    a = te(z);
    for (var b = Object.create(null), c = 0; c < a.length; c++) {
        var d = a[c].lj;
        if (d)
            for (var d = d.call(a[c]), e = 0; e < d.length; e++) {
                var f = d[e];
                f && (b[f.toLowerCase()] = f)
            }
    }
    a = [];
    for (var h in b) a.push(b[h]);
    return a
}

function uj(a, b, c, d) {
    var e = rk();
    e.sort(va);
    e.unshift(null);
    for (var f = void 0, h = 0; h < e.length; h++)
        if (e[h] !== f) {
            var k = ei.variables_get ? $c(d, "variables_get") : null;
            k && ad(k);
            var l = ei.variables_set ? $c(d, "variables_set") : null;
            l && ad(l);
            null === e[h] ? f = (k || l).lj()[0] : (k && gd(k, "VAR").ob(e[h]), l && gd(l, "VAR").ob(e[h]));
            l && a.push(l);
            k && a.push(k);
            k && l ? b.push(c, 3 * c) : b.push(2 * c)
        }
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var vj = "PROCEDURE";

function sk() {
    for (var a = te(z), b = [], c = [], d = 0; d < a.length; d++) {
        var e = a[d].Al;
        e && (e = e.call(a[d])) && (e[2] ? b.push(e) : c.push(e))
    }
    c.sort(tk);
    b.sort(tk);
    return [c, b]
}

function tk(a, b) {
    var c = a[0].toLowerCase(),
        d = b[0].toLowerCase();
    return c > d ? 1 : c < d ? -1 : 0
}

function wj(a, b, c, d) {
    function e(e, f) {
        for (var l = 0; l < e.length; l++) {
            var q = $c(d, f);
            gd(q, "NAME").ob(e[l][0]);
            for (var p = [], u = 0; u < e[l][1].length; u++) p[u] = "ARG" + u;
            q.Rl(e[l][1], p);
            ad(q);
            a.push(q);
            b.push(2 * c)
        }
    }
    if (ei.procedures_defnoreturn) {
        var f = $c(d, "procedures_defnoreturn");
        ad(f);
        a.push(f);
        b.push(2 * c)
    }
    ei.procedures_defreturn && (f = $c(d, "procedures_defreturn"), ad(f), a.push(f), b.push(2 * c));
    ei.procedures_ifreturn && (f = $c(d, "procedures_ifreturn"), ad(f), a.push(f), b.push(2 * c));
    b.length && (b[b.length - 1] = 3 * c);
    f = sk();
    e(f[0], "procedures_callnoreturn");
    e(f[1], "procedures_callreturn")
};
var kg = /#(.)(.)(.)/;

function hg(a) {
    var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a);
    if (isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c || isNaN(a) || 0 > a || 255 < a) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = uk(b.toString(16));
    c = uk(c.toString(16));
    a = uk(a.toString(16));
    return "#" + b + c + a
}
var jg = /^#(?:[0-9a-f]{3}){1,2}$/i;

function uk(a) {
    return 1 == a.length ? "0" + a : a
}

function ig(a) {
    var b = 0,
        c = 0,
        d = 0,
        e = Math.floor(a / 60),
        f = a / 60 - e;
    a = 166.4 * .55;
    var h = 166.4 * (1 - .45 * f),
        f = 166.4 * (1 - .45 * (1 - f));
    switch (e) {
    case 1:
        b = h;
        c = 166.4;
        d = a;
        break;
    case 2:
        b = a;
        c = 166.4;
        d = f;
        break;
    case 3:
        b = a;
        c = h;
        d = 166.4;
        break;
    case 4:
        b = f;
        c = a;
        d = 166.4;
        break;
    case 5:
        b = 166.4;
        c = a;
        d = h;
        break;
    case 6:
    case 0:
        b = 166.4, c = f, d = a
    }
    return [Math.floor(b), Math.floor(c), Math.floor(d)]
}

function lg(a, b, c) {
    c = Math.min(Math.max(c, 0), 1);
    return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])]
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Zf(a, b) {
    var c = a.getAttribute("class") || ""; - 1 == (" " + c + " ").indexOf(" " + b + " ") && (c && (c += " "), a.setAttribute("class", c + b))
}

function $f(a, b) {
    var c = a.getAttribute("class");
    if (-1 != (" " + c + " ").indexOf(" " + b + " ")) {
        for (var c = c.split(/\s+/), d = 0; d < c.length; d++) c[d] && c[d] != b || (c.splice(d, 1), d--);
        c.length ? a.setAttribute("class", c.join(" ")) : a.removeAttribute("class")
    }
}

function O(a, b, c, d) {
    function e(a) {
        d.apply(c, arguments)
    }
    a.addEventListener(b, e, !1);
    var f = [[a, b, e]];
    if (b in vk)
        for (var e = function (a) {
            if (1 == a.changedTouches.length) {
                var b = a.changedTouches[0];
                a.clientX = b.clientX;
                a.clientY = b.clientY
            }
            d.apply(c, arguments);
            a.preventDefault()
        }, h = 0, k; k = vk[b][h]; h++) a.addEventListener(k, e, !1), f.push([a, k, e]);
    return f
}
var vk = {};
"ontouchstart" in document.documentElement && (vk = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});

function N(a) {
    for (; a.length;) {
        var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1)
    }
}

function zj(a, b) {
    var c = document;
    if (c.createEvent) c = c.createEvent("UIEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c);
    else if (c.createEventObject) c = c.createEventObject(), a.fireEvent("on" + b, c);
    else throw "FireEvent: No event creation mechanism.";
}

function ze(a, b) {
    setTimeout(function () {
        zj(a, b)
    }, 0)
}

function Jh(a) {
    var b = {
            x: 0,
            y: 0
        },
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10));
    if (c = a.getAttribute("y")) b.y = parseInt(c, 10);
    if (a = (a = a.getAttribute("transform")) && a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/)) b.x += parseInt(a[1], 10), a[3] && (b.y += parseInt(a[3], 10));
    return b
}

function td(a) {
    var b = 0,
        c = 0;
    do {
        var d = Jh(a),
            b = b + d.x,
            c = c + d.y;
        a = a.parentNode
    } while (a && a != Dc);
    return {
        x: b,
        y: c
    }
}

function Xg(a) {
    a = td(a);
    return pk(a.x, a.y, !1)
}

function L(a, b, c) {
    a = document.createElementNS("http://www.w3.org/2000/svg", a);
    for (var d in b) a.setAttribute(d, b[d]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a);
    return a
}

function rd(a) {
    return 2 == a.button || a.ctrlKey
}

function pk(a, b, c) {
    c && (a -= window.scrollX || window.pageXOffset, b -= window.scrollY || window.pageYOffset);
    var d = Dc.createSVGPoint();
    d.x = a;
    d.y = b;
    a = Dc.getScreenCTM();
    c && (a = a.inverse());
    d = d.matrixTransform(a);
    c || (d.x += window.scrollX || window.pageXOffset, d.y += window.scrollY || window.pageYOffset);
    return d
}

function sd(a) {
    return pk(a.clientX + (window.scrollX || window.pageXOffset), a.clientY + (window.scrollY || window.pageYOffset), !0)
}

function $g(a) {
    if (!a.length) return 0;
    for (var b = a[0].length, c = 1; c < a.length; c++) b = Math.min(b, a[c].length);
    return b
}

function ah(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || $g(a), e = 0; e < d; e++) {
        for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e]) return c;
            " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f) return c;
    return d
}

function bh(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || $g(a), e = 0; e < d; e++) {
        for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1)) return c;
            " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c;
    return d
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function wk() {
    function a(a) {
        a = a.slice(1).split("&");
        for (var c = 0; c < a.length; c++) {
            var f = a[c].split("=");
            b[decodeURIComponent(f[0])] = decodeURIComponent(f[1])
        }
    }
    var b = {},
        c = window.location.hash;
    c && a(c);
    (c = window.location.search) && a(c);
    return b
}
var xk = wk();

function U(a, b, c) {
    if (a.hasOwnProperty(b)) return a[b];
    void 0 === c && console.error(b + " should be present in the options.");
    return c
}

function yk(a) {
    this.Oi = U(a, "clientId");
    this.zg = xk.userId;
    document.getElementById(U(a, "authButtonElementId"));
    document.getElementById(U(a, "authDivElementId"))
}
yk.prototype.start = function () {
    gapi.load("auth:client,drive-realtime,drive-share", function () {})
};

function zk(a, b, c, d) {
    function e(c) {
        gapi.Kb.ba.files.se({
            resource: {
                mimeType: b,
                title: a,
                parents: [{
                    id: c
                }]
            }
        }).cc(d)
    }

    function f() {
        function a(b) {
            gapi.Kb.ba.Yj.se({
                fileId: "appdata",
                resource: {
                    key: "folderId",
                    value: b
                }
            }).cc(function () {
                e(b)
            })
        }

        function b() {
            gapi.Kb.ba.files.se({
                resource: {
                    mimeType: "application/vnd.google-apps.folder",
                    title: c
                }
            }).cc(function (b) {
                a(b.id)
            })
        }
        gapi.Kb.ba.Yj.get({
            fileId: "appdata",
            propertyKey: "folderId"
        }).cc(function (d) {
            if (d.error) c ? b() : a("root");
            else {
                var f = d.result.value;
                gapi.Kb.ba.files.get({
                    fileId: f
                }).cc(function (a) {
                    a.error ||
                        a.labels.Tl ? b() : e(f)
                })
            }
        })
    }
    gapi.Kb.load("drive", "v2", function () {
        f()
    })
}

function Ak(a) {
    this.Mh = U(a, "onFileLoaded");
    this.Mj = U(a, "newFileMimeType", "application/vnd.google-apps.drive-sdk");
    this.Ch = U(a, "initializeModel");
    this.Uh = U(a, "registerTypes", function () {});
    this.Jg = U(a, "afterAuth", function () {});
    this.Ii = U(a, "autoCreate", !1);
    this.aj = U(a, "defaultTitle", "New Realtime File");
    this.$i = U(a, "defaultFolderTitle", "");
    this.Kg = U(a, "afterCreate", function () {});
    this.ff = new yk(a)
}

function Bk(a, b, c) {
    var d = [];
    b && d.push("fileIds=" + b.join(","));
    c && d.push("userId=" + c);
    c = 0 == d.length ? window.location.pathname : window.location.pathname + "#" + d.join("&");
    window.history && window.history.replaceState ? window.history.replaceState("Google Drive Realtime API Playground", "Google Drive Realtime API Playground", c) : window.location.href = c;
    xk = wk();
    for (var e in b) gapi.ba.vb.load(b[e], a.Mh, a.Ch, a.yh)
}
Ak.prototype.start = function () {
    var a = this;
    this.ff.start(function () {
        a.Uh && a.Uh();
        a.Jg && a.Jg();
        a.load()
    })
};
Ak.prototype.yh = function (a) {
    a.type != gapi.ba.vb.Dg.fl && (a.type == gapi.ba.vb.Dg.tk ? (alert("An Error happened: " + a.message), window.location.href = "/") : a.type == gapi.ba.vb.Dg.xk && (alert("The file was not found. It does not exist or you do not have read access to the file."), window.location.href = "/"))
};
Ak.prototype.load = function () {
    var a = xk.fileIds;
    a && (a = a.split(","));
    var b = this.ff.zg,
        b = xk.state;
    if (a)
        for (var c in a) gapi.ba.vb.load(a[c], this.Mh, this.Ch, this.yh);
    else {
        if (b) {
            var d;
            try {
                d = JSON.parse(b)
            } catch (e) {
                d = null
            }
            if ("open" == d.action) {
                a = d.El;
                b = d.zg;
                Bk(this, a, b);
                return
            }
        }
        this.Ii && Ck(this)
    }
};

function Ck(a) {
    zk(a.aj, a.Mj, a.$i, function (b) {
        b.id ? (a.Kg && a.Kg(b.id), Bk(a, [b.id], a.ff.zg)) : (console.error("Error creating file."), console.error(b))
    })
};
/*

 Visual Blocks Editor

 Copyright 2014 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var re, Dk, Ek = "media/progress.gif",
    qe = !1,
    Fk = null,
    Hi = null,
    Gk = null,
    Hk = null,
    Ji = null,
    Oi = !1,
    Ik = null,
    Jk = null,
    Kk = null,
    Ek = "media/progress.gif";

function Lk(a) {
    var b = a.fj;
    a = a.fj.length;
    for (var c = 0; c < a; c++) {
        var d = b[c];
        if (!d.Fj) {
            var e = d.target;
            "value_changed" == d.type && ("xmlDom" == d.Rh ? Mk(function () {
                Nk(e, !1);
                Ok(e)
            }) : "relativeX" != d.Rh && "relativeY" != d.Rh || Mk(function () {
                e.k || Nk(e, !1);
                Ok(e)
            }))
        }
    }
}

function Pk(a) {
    if (!a.Fj) {
        var b = a.newValue;
        b ? Nk(b, !a.oldValue) : (b = a.oldValue, Qk(b))
    }
}

function Mk(a) {
    if (Oi) a();
    else try {
        Oi = !0, a()
    } finally {
        Oi = !1
    }
}

function Nk(a, b) {
    Mk(function () {
        var c = Wc(a.Cg).firstChild;
        if (c = Yc(z, c, !0)) b && pe(c.s, c), (b || Xa(re, c)) && Ok(c)
    })
}

function Ok(a) {
    if (!isNaN(a.Le) && !isNaN(a.Me)) {
        var b = Ai().width,
            c = I(a),
            d = a.Le - c.x;
        a.moveBy(H ? b - d : d, a.Me - c.y)
    }
}

function Qk(a) {
    Mk(function () {
        a.j(!0, !0, !0)
    })
}

function Pi(a) {
    if (a.s == z && qe && !Oi) {
        a = Uh(a);
        var b = I(a),
            c = !1,
            d = Tc(a);
        d.setAttribute("id", a.id);
        var e = $b("xml");
        e.appendChild(d);
        d = Vc(e);
        d != a.Cg && (c = !0, a.Cg = d);
        if (a.Le != b.x || a.Me != b.y) a.Le = b.x, a.Me = b.y, c = !0;
        c && Ji.set(a.id.toString(), a)
    }
}

function Rk(a, b) {
    gapi.Kb.ba.Qh.list({
        fileId: a
    }).cc(function (a) {
        for (var d = 0; d < a.items.length; d++) {
            var e = a.items[d];
            if ("owner" == e.Ll) {
                b(e.domain);
                break
            }
        }
    })
}
var Vk = {
    clientId: null,
    authButtonElementId: "authorizeButton",
    authDivElementId: "authButtonDiv",
    initializeModel: function (a) {
        Hi = a;
        var b = a.vl();
        a.Fc().set("blocks", b);
        b = a.ul();
        a.Fc().set("topBlocks", b);
        Jk && a.Fc().set(Jk, a.wl(Kk))
    },
    autoCreate: !0,
    defaultTitle: "Realtime Blockly File",
    defaultFolderTitle: "Realtime Blockly Folder",
    newFileMimeType: null,
    onFileLoaded: function (a) {
        Fk = a;
        a: {
            for (var b = a.ij(), c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.Gj) {
                    Gk = d.Ol;
                    break a
                }
            }
            Gk = void 0
        }
        Hi = a.Ae;
        Ji = Hi.Fc().get("blocks");
        re = Hi.Fc().get("topBlocks");
        Hi.Fc().addEventListener(gapi.ba.vb.Ye.yk, Lk);
        Ji.addEventListener(gapi.ba.vb.Ye.hl, Pk);
        Hk();
        a.addEventListener(gapi.ba.vb.Ye.vk, Sk);
        a.addEventListener(gapi.ba.vb.Ye.wk, Tk);
        Uk();
        a = re;
        for (b = 0; b < a.length; b++) c = a.get(b), Nk(c, !0)
    },
    registerTypes: function () {
        var a = gapi.ba.vb.xl;
        a.Jl(di, "Block");
        di.prototype.id = a.kf("id");
        di.prototype.Cg = a.kf("xmlDom");
        di.prototype.Le = a.kf("relativeX");
        di.prototype.Me = a.kf("relativeY");
        a.Pl(di, di.prototype.initialize)
    },
    afterAuth: function () {
        window.setTimeout(function () {}, 18E5)
    },
    afterCreate: function (a) {
        var b = gapi.Kb.ba.Qh.se({
            fileId: a,
            resource: {
                type: "anyone",
                role: "writer",
                value: "default",
                withLink: !0
            }
        });
        b.cc(function (c) {
            c.error && Rk(a, function (c) {
                b = gapi.Kb.ba.Qh.se({
                    fileId: a,
                    resource: {
                        type: "domain",
                        role: "writer",
                        value: c,
                        withLink: !0
                    }
                });
                b.cc(function () {})
            })
        })
    }
};

function Wk() {
    var a = Jc,
        b = U(a, "chatbox");
    b && (Jk = U(b, "elementId"), Kk = U(b, "initText", Xk));
    Vk.Oi = U(a, "clientId");
    Dk = U(a, "collabElementId")
}

function Yk(a, b) {
    Wk();
    qe = !0;
    Zk(b);
    Hk = function () {
        a();
        if (Jk) {
            var b = Hi.Fc().get(Jk),
                d = document.getElementById(Jk);
            gapi.ba.vb.yl.ll(b, d);
            d.disabled = !1
        }
    };
    Ik = new Ak(Vk);
    Ik.start()
}

function Zk(a) {
    a.style.background = "url(" + ie + Ek + ") no-repeat center center";
    var b = Le(a),
        c = $b("div");
    c.id = Vk.authDivElementId;
    var d = $b("p", null, $k);
    c.appendChild(d);
    d = $b("button", null, "Authorize");
    d.id = Vk.jl;
    c.appendChild(d);
    a.appendChild(c);
    c.style.display = "none";
    c.style.position = "relative";
    c.style.textAlign = "center";
    c.style.border = "1px solid";
    c.style.backgroundColor = "#f6f9ff";
    c.style.borderRadius = "15px";
    c.style.boxShadow = "10px 10px 5px #888";
    c.style.width = b.width / 3 + "px";
    a = Le(c);
    c.style.left = (b.width -
        a.width) / 3 + "px";
    c.style.top = (b.height - a.height) / 4 + "px"
}

function Uk() {
    if (Dk) {
        var a;
        a = Dk;
        a = r(a) ? document.getElementById(a) : a;
        dc(a);
        for (var b = Fk.ij(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = $b("img", {
                    src: d.Hl || ie + "media/anon.jpeg",
                    alt: d.displayName,
                    title: d.displayName + (d.Gj ? " (" + al + ")" : "")
                });
            e.style.backgroundColor = d.color;
            a.appendChild(e)
        }
    }
}

function Sk() {
    Uk()
}

function Tk() {
    Uk()
}

function Ii(a) {
    var b = Gk + "-" + a;
    return Ji.has(b) ? Ii("-" + a) : b
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function bl(a) {
    this.Ce = a;
    this.Ze = ""
}
bl.prototype.Eg = null;
bl.prototype.Gg = null;

function cl() {
    var a = V,
        b = [];
    a.H();
    for (var c = Sc(z, !0), d = 0, e; e = c[d]; d++) {
        var f = dl(a, e);
        n(f) && (f = f[0]);
        f && (e.I && a.Yh && (f = a.Yh(f)), b.push(f))
    }
    b = b.join("\n");
    b = a.finish(b);
    b = b.replace(/^\s+\n/, "");
    b = b.replace(/\n\s+$/, "\n");
    return b = b.replace(/[ \t]+\n/g, "\n")
}

function el(a, b) {
    return b + a.replace(/\n(.)/g, "\n" + b + "$1")
}

function dl(a, b) {
    if (!b) return "";
    if (b.disabled) return dl(a, Uc(b));
    var c = a[b.type];
    if (!c) throw 'Language "' + a.Ce + '" does not know how to generate code for block type "' + b.type + '".';
    c = c.call(b, b);
    if (n(c)) return [a.Zh(b, c[0]), c[1]];
    if (r(c)) return a.Gg && (c = a.Gg.replace(/%1/g, "'" + b.id + "'") + c), a.Zh(b, c);
    if (null === c) return "";
    throw "Invalid code generated: " + c;
}

function fl(a, b) {
    var c = V,
        d;
    d = (d = hd(a, b)) && d.o && J(d.o);
    var e = dl(c, d);
    if (!r(e)) throw 'Expecting code from statement block "' + d.type + '".';
    e && (e = el(e, c.ri));
    return e
}
bl.prototype.ri = "  ";

function gl(a) {
    var b = V;
    b.Ze += a + ","
};
/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function hl() {
    var a = il.join("\n"),
        b = ie.replace(/[\\\/]$/, ""),
        a = a.replace(/<<<PATH>>>/g, b),
        b = document,
        c = b.createElement("style");
    c.type = "text/css";
    b.getElementsByTagName("head")[0].appendChild(c);
    c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(b.createTextNode(a))
}
var il = [".blocklySvg {", "  background-color: #fff;", "  border: 1px solid #ddd;", "  overflow: hidden;", "}", ".blocklyWidgetDiv {", "  position: absolute;", "  display: none;", "  z-index: 999;", "}", ".blocklyDraggable {", "  cursor: url(<<<PATH>>>/media/handopen.cur) 8 5, auto;", "}", ".blocklyResizeSE {", "  fill: #aaa;", "  cursor: se-resize;", "}", ".blocklyResizeSW {", "  fill: #aaa;", "  cursor: sw-resize;", "}", ".blocklyResizeLine {", "  stroke-width: 1;", "  stroke: #888;", "}", ".blocklyHighlightedConnectionPath {",
"  stroke-width: 4px;", "  stroke: #fc3;", "  fill: none;", "}", ".blocklyPathLight {", "  fill: none;", "  stroke-width: 2;", "  stroke-linecap: round;", "}", ".blocklySelected>.blocklyPath {", "  stroke-width: 3px;", "  stroke: #fc3;", "}", ".blocklySelected>.blocklyPathLight {", "  display: none;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {", "  fill-opacity: .8;", "  stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "  display: none;", "}", ".blocklyDisabled>.blocklyPath {",
"  fill-opacity: .5;", "  stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "  display: none;", "}", ".blocklyText {", "  cursor: default;", "  font-family: sans-serif;", "  font-size: 11pt;", "  fill: #fff;", "}", ".blocklyNonEditableText>text {", "  pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {", "  fill: #fff;", "  fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "  fill: #000;",
"}", ".blocklyEditableText:hover>rect {", "  stroke-width: 2;", "  stroke: #fff;", "}", ".blocklyBubbleText {", "  fill: #000;", "}", ".blocklySvg text {", "  -moz-user-select: none;", "  -webkit-user-select: none;", "  user-select: none;", "  cursor: inherit;", "}", ".blocklyHidden {", "  display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "  display: block;", "}", ".blocklyTooltipBackground {", "  fill: #ffffc7;", "  stroke-width: 1px;", "  stroke: #d8d8d8;", "}", ".blocklyTooltipShadow,", ".blocklyDropdownMenuShadow {",
"  fill: #bbb;", "  filter: url(#blocklyShadowFilter);", "}", ".blocklyTooltipText {", "  font-family: sans-serif;", "  font-size: 9pt;", "  fill: #000;", "}", ".blocklyIconShield {", "  cursor: default;", "  fill: #00c;", "  stroke-width: 1px;", "  stroke: #ccc;", "}", ".blocklyIconGroup:hover>.blocklyIconShield {", "  fill: #00f;", "  stroke: #fff;", "}", ".blocklyIconGroup:hover>.blocklyIconMark {", "  fill: #fff;", "}", ".blocklyIconMark {", "  cursor: default !important;", "  font-family: sans-serif;", "  font-size: 9pt;",
"  font-weight: bold;", "  fill: #ccc;", "  text-anchor: middle;", "}", ".blocklyWarningBody {", "}", ".blocklyMinimalBody {", "  margin: 0;", "  padding: 0;", "}", ".blocklyCommentTextarea {", "  margin: 0;", "  padding: 2px;", "  border: 0;", "  resize: none;", "  background-color: #ffc;", "}", ".blocklyHtmlInput {", "  font-family: sans-serif;", "  font-size: 11pt;", "  border: none;", "  outline: none;", "  width: 100%", "}", ".blocklyMutatorBackground {", "  fill: #fff;", "  stroke-width: 1;", "  stroke: #ddd;", "}", ".blocklyFlyoutBackground {",
"  fill: #ddd;", "  fill-opacity: .8;", "}", ".blocklyColourBackground {", "  fill: #666;", "}", ".blocklyScrollbarBackground {", "  fill: #fff;", "  stroke-width: 1;", "  stroke: #e4e4e4;", "}", ".blocklyScrollbarKnob {", "  fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarKnob,", ".blocklyScrollbarKnob:hover {", "  fill: #bbb;", "}", ".blocklyInvalidInput {", "  background: #faa;", "}", ".blocklyAngleCircle {", "  stroke: #444;", "  stroke-width: 1;", "  fill: #ddd;", "  fill-opacity: .8;", "}", ".blocklyAngleMarks {",
"  stroke: #444;", "  stroke-width: 1;", "}", ".blocklyAngleGauge {", "  fill: #f88;", "  fill-opacity: .8;  ", "}", ".blocklyAngleLine {", "  stroke: #f00;", "  stroke-width: 2;", "  stroke-linecap: round;", "}", ".blocklyContextMenu {", "  border-radius: 4px;", "}", ".blocklyDropdownMenu {", "  padding: 0 !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "  background: url(<<<PATH>>>/media/sprites.png) no-repeat -48px -16px !important;",
"}", ".blocklyToolboxDiv {", "  background-color: #ddd;", "  display: none;", "  overflow-x: visible;", "  overflow-y: auto;", "  position: absolute;", "}", ".blocklyTreeRoot {", "  padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "  outline: none;", "}", ".blocklyTreeRow {", "  line-height: 22px;", "  height: 22px;", "  padding-right: 1em;", "  white-space: nowrap;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "  padding-right: 0;", "  padding-left: 1em !important;", "}", ".blocklyTreeRow:hover {", "  background-color: #e4e4e4;",
"}", ".blocklyTreeIcon {", "  height: 16px;", "  width: 16px;", "  vertical-align: middle;", "  background-image: url(<<<PATH>>>/media/sprites.png);", "}", ".blocklyTreeIconClosedLtr {", "  background-position: -32px -1px;", "}", ".blocklyTreeIconClosedRtl {", "  background-position: 0px -1px;", "}", ".blocklyTreeIconOpen {", "  background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "  background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "  background-position: 0px -17px;",
"}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "  background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "  background-position: -48px -1px;", "}", ".blocklyTreeLabel {", "  cursor: default;", "  font-family: sans-serif;", "  font-size: 16px;", "  padding: 0 3px;", "  vertical-align: middle;", "}", ".blocklyTreeSelected  {", "  background-color: #57e !important;", "}", ".blocklyTreeSelected .blocklyTreeLabel {", "  color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {",
"  outline: none;", "  cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {", "  border: 1px solid #666;", "  border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "  height: 13px;", "  width: 15px;", "  margin: 0;", "  border: 0;", "  text-align: center;", "  vertical-align: middle;", "  border-right: 1px solid #666;", "  font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "  position: relative;", "  height: 13px;", "  width: 15px;", "  border: 1px solid #666;", "}",
".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "  border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {", "  border: 1px solid #000;", "  color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "  background: #fff;", "  border-color: #ccc #666 #666 #ccc;", "  border-style: solid;", "  border-width: 1px;", "  cursor: default;", "  font: normal 13px Arial, sans-serif;", "  margin: 0;", "  outline: none;", "  padding: 4px 0;", "  position: absolute;",
"  z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "  color: #000;", "  font: normal 13px Arial, sans-serif;", "  list-style: none;", "  margin: 0;", "  padding: 4px 7em 4px 28px;", "  white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "  padding-left: 7em;", "  padding-right: 28px;", "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "  padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {",
"  padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "  color: #000;", "  font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "  color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {", "  opacity: 0.3;", "  -moz-opacity: 0.3;", "  filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {",
"  background-color: #d6e9f8;", "  border-color: #d6e9f8;", "  border-style: dotted;", "  border-width: 1px 0;", "  padding-bottom: 3px;", "  padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {", "  background-repeat: no-repeat;", "  height: 16px;", "  left: 6px;", "  position: absolute;", "  right: auto;", "  vertical-align: middle;", "  width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {",
"  left: auto;", "  right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "  background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;", "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "  color: #999;", "  direction: ltr;", "  left: auto;", "  padding: 0 6px;", "  position: absolute;", "  right: 0;", "  text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "  left: 0;",
"  right: auto;", "  text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "  text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "  color: #999;", "  font-size: 12px;", "  padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {", "  border-top: 1px solid #ccc;", "  margin: 4px 0;", "  padding: 0;", "}", ""];
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function jl(a, b) {
    function c() {
        kl(a);
        ll()
    }
    if (!fc(document, a)) throw "Error: container is not in current document.";
    b && ml(b);
    if (Ic) {
        var d = document.getElementById("realtime");
        d && (d.style.display = "block");
        Yk(c, a)
    } else c()
}

function ml(a) {
    var b = !!a.readOnly;
    if (b) var c = !1,
        d = !1,
        e = !1,
        f = !1,
        h = !1,
        k = null;
    else(c = a.toolbox) ? ("string" != typeof c && "undefined" == typeof XSLTProcessor && (c = c.outerHTML), "string" == typeof c && (c = Wc(c))) : c = null, k = c, c = Boolean(k && k.getElementsByTagName("category").length), d = a.trashcan, void 0 === d && (d = c), e = a.collapse, void 0 === e && (e = c), f = a.comments, void 0 === f && (f = c), h = a.disable, void 0 === h && (h = c); if (k && !c) var l = !1;
    else l = a.scrollbars, void 0 === l && (l = !0);
    var q = a.sounds;
    void 0 === q && (q = !0);
    var p = !!a.realtime,
        u = p ? a.realtimeOptions :
        void 0;
    H = !!a.rtl;
    Fc = e;
    Ec = f;
    Gc = h;
    K = b;
    Kc = a.maxBlocks || Infinity;
    ie = a.path || "./";
    Lc = c;
    Mc = l;
    Cc = d;
    Nc = q;
    Hc = k;
    Ic = p;
    Jc = u
}

function kl(a) {
    a.setAttribute("dir", "LTR");
    We = H;
    hl();
    var b = L("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:html": "http://www.w3.org/1999/xhtml",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            version: "1.1",
            "class": "blocklySvg"
        }, null),
        c = L("defs", {}, b),
        d, e;
    d = L("filter", {
        id: "blocklyEmboss"
    }, c);
    L("feGaussianBlur", {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, d);
    e = L("feSpecularLighting", {
        "in": "blur",
        surfaceScale: 1,
        specularConstant: .5,
        specularExponent: 10,
        "lighting-color": "white",
        result: "specOut"
    }, d);
    L("fePointLight", {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, e);
    L("feComposite", {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, d);
    L("feComposite", {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, d);
    d = L("filter", {
        id: "blocklyTrashcanShadowFilter"
    }, c);
    L("feGaussianBlur", {
        "in": "SourceAlpha",
        stdDeviation: 2,
        result: "blur"
    }, d);
    L("feOffset", {
        "in": "blur",
        dx: 1,
        dy: 1,
        result: "offsetBlur"
    }, d);
    d = L("feMerge", {}, d);
    L("feMergeNode", {
        "in": "offsetBlur"
    }, d);
    L("feMergeNode", {
            "in": "SourceGraphic"
        },
        d);
    d = L("filter", {
        id: "blocklyShadowFilter"
    }, c);
    L("feGaussianBlur", {
        stdDeviation: 2
    }, d);
    c = L("pattern", {
        id: "blocklyDisabledPattern",
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, c);
    L("rect", {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, c);
    L("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, c);
    z = new le(nl, ol);
    b.appendChild(z.G());
    z.Tf = Kc;
    K || (Lc ? kk(b, a) : (z.ed = new lj, c = z.ed, d = c.G(), c.Nd = !1, ec(d), pl(function () {
        if (0 == xe) {
            var a = z.Db();
            if (0 > a.cb || a.cb + a.Sa > a.za + a.xb || a.zb < (H ? a.Fa : 0) || a.zb + a.Ac > (H ? a.Q : a.Q + a.Fa))
                for (var b =
                    Sc(z, !1), c = 0, d; d = b[c]; c++) {
                    var e = I(d),
                        p = qg(d),
                        u = a.xb + 25 - p.height - e.y;
                    0 < u && d.moveBy(0, u);
                    u = a.xb + a.za - 25 - e.y;
                    0 > u && d.moveBy(0, u);
                    u = 25 + a.Fa - e.x - (H ? 0 : p.width);
                    0 < u && d.moveBy(u, 0);
                    u = a.Fa + a.Q - 25 - e.x + (H ? p.width : 0);
                    0 > u && d.moveBy(u, 0);
                    d.ac && !K && 50 < (H ? e.x - a.Q : -e.x) && d.j(!1, !0)
                }
        }
    })));
    b.appendChild(si());
    a.appendChild(b);
    Dc = b;
    Qi();
    Yg = $b("div", "blocklyWidgetDiv");
    Yg.style.direction = H ? "rtl" : "ltr";
    document.body.appendChild(Yg)
}

function ll() {
    O(Dc, "mousedown", null, ql);
    O(Dc, "contextmenu", null, rl);
    O(Yg, "contextmenu", null, rl);
    Oc || (O(window, "resize", document, Qi), O(document, "keydown", null, sl), document.addEventListener("mouseup", tl, !1), Fb && O(window, "orientationchange", document, function () {
        ze(window, "resize")
    }), Oc = !0);
    if (Hc)
        if (Lc) lk();
        else {
            z.ed.H(z);
            z.ed.show(Hc.childNodes);
            z.scrollX = z.ed.D;
            H && (z.scrollX *= -1);
            var a = "translate(" + z.scrollX + ", 0)";
            z.Z.setAttribute("transform", a);
            z.Uc.setAttribute("transform", a)
        }
    Mc && (z.Vb = new kd(z),
        z.Vb.resize());
    oe();
    if (Nc) {
        ul(["media/click.mp3", "media/click.wav", "media/click.ogg"], "click");
        ul(["media/delete.mp3", "media/delete.ogg", "media/delete.wav"], "delete");
        var b = [],
            a = function () {
                for (; b.length;) N(b.pop());
                for (var a in vl) {
                    var d = vl[a];
                    d.volume = .01;
                    d.play();
                    d.pause();
                    if (Fb || Eb) break
                }
            };
        b.push(O(document, "mousemove", null, a));
        b.push(O(document, "touchstart", null, a))
    }
};
/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Yg = null,
    Vg = null,
    wl = null;

function Ug(a) {
    Wg();
    Vg = a;
    wl = null;
    Yg.style.display = "block"
}

function Wg() {
    Vg && (Yg.style.display = "none", wl && wl(), wl = Vg = null, dc(Yg))
}

function Zg(a, b, c, d) {
    b < d.y && (b = d.y);
    H ? a > c.width + d.x && (a = c.width + d.x) : a < d.x && (a = d.x);
    Yg.style.left = a + "px";
    Yg.style.top = b + "px"
};
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function xl(a, b, c, d) {
    this.h = null;
    this.qa = Number(c);
    this.D = Number(b);
    this.Sc = {
        height: this.qa + 10,
        width: this.D
    };
    this.Da = d || "";
    this.W = L("g", {}, null);
    this.oe = L("image", {
        height: this.qa + "px",
        width: this.D + "px",
        y: -12
    }, this.W);
    this.ob(a);
    Hb && (this.Ke = L("rect", {
        height: this.qa + "px",
        width: this.D + "px",
        y: -12,
        "fill-opacity": 0
    }, this.W))
}
v(xl, tg);
g = xl.prototype;
g.clone = function () {
    return new xl(this.Bl(), this.D, this.qa, this.hb())
};
g.Ke = null;
g.xc = !1;
g.H = function (a) {
    if (this.h) throw "Image has already been initialized once.";
    this.h = a;
    S(a).appendChild(this.W);
    a = this.Ke || this.oe;
    a.Ea = this.h;
    Xf(a)
};
g.j = function () {
    A(this.W);
    this.Ke = this.oe = this.W = null
};
g.wb = function (a) {
    (this.Ke || this.oe).Ea = a
};
g.Gc = function () {
    return this.gk
};
g.ob = function (a) {
    null !== a && (this.gk = a, this.oe.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r(a) ? a : ""))
};
g.Ka = function (a) {
    null !== a && (this.Da = a)
};
/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var ie = "./",
    ge = 64,
    he = 92,
    je = "media/sprites.png",
    Ph = [, 2, 1, 4, 3],
    vl = Object.create(null),
    P = null,
    K = !1,
    Mh = null,
    Nh = null,
    fj = 5,
    T = 20,
    Sh = 250,
    hj = 30,
    z = null,
    yl = null,
    zl = null;

function Ai() {
    return {
        width: Dc.Qg,
        height: Dc.Pg
    }
}

function Qi() {
    var a = Dc,
        b = a.parentNode,
        c = b.offsetWidth,
        b = b.offsetHeight;
    a.Qg != c && (a.setAttribute("width", c + "px"), a.Qg = c);
    a.Pg != b && (a.setAttribute("height", b + "px"), a.Pg = b);
    z.Vb && z.Vb.resize()
}

function ql(a) {
    Qi();
    Ni();
    vd();
    var b = a.target && a.target.nodeName && "svg" == a.target.nodeName.toLowerCase();
    !K && P && b && ye();
    a.target == Dc && rd(a) ? Al(a) : (K || b) && z.Vb && (z.wf = !0, z.rg = a.clientX, z.sg = a.clientY, z.ik = z.Db(), z.kk = z.scrollX, z.lk = z.scrollY, "mouseup" in vk && (zl = O(document, "mouseup", null, tl)), Pc = O(document, "mousemove", null, Bl))
}

function tl() {
    Hh(!1);
    z.wf = !1;
    zl && (N(zl), zl = null);
    Pc && (N(Pc), Pc = null)
}

function Bl(a) {
    if (z.wf) {
        ud();
        var b = z.ik,
            c = z.kk + (a.clientX - z.rg),
            d = z.lk + (a.clientY - z.sg),
            c = Math.min(c, -b.zb),
            d = Math.min(d, -b.cb),
            c = Math.max(c, b.Q - b.zb - b.Ac),
            d = Math.max(d, b.za - b.cb - b.Sa);
        z.Vb.set(-c - b.zb, -d - b.cb);
        a.stopPropagation()
    }
}

function sl(a) {
    if (!Gh(a))
        if (27 == a.keyCode) vd();
        else if (8 == a.keyCode || 46 == a.keyCode) try {
        P && P.ac && !K && (vd(), P.j(!0, !0))
    } finally {
        a.preventDefault()
    } else if (a.altKey || a.ctrlKey || a.metaKey)
        if (P && P.ac && !K && P.Fb && !K && P.s == z && (vd(), 67 == a.keyCode ? Cl() : 88 == a.keyCode && (Cl(), P.j(!0, !0))), 86 == a.keyCode && yl) {
            a = z;
            var b = yl;
            if (!(b.getElementsByTagName("block").length >= Ae(a))) {
                var c = Yc(a, b),
                    d = parseInt(b.getAttribute("x"), 10),
                    b = parseInt(b.getAttribute("y"), 10);
                if (!isNaN(d) && !isNaN(b)) {
                    H && (d = -d);
                    do
                        for (var e = !1, f = te(a),
                            h = 0, k; k = f[h]; h++) k = I(k), 1 >= Math.abs(d - k.x) && 1 >= Math.abs(b - k.y) && (d = H ? d - T : d + T, b += 2 * T, e = !0); while (e);
                    c.moveBy(d, b)
                }
                c.select()
            }
        }
}

function Ni() {
    Ki && (N(Ki), Ki = null);
    Li && (N(Li), Li = null);
    var a = P;
    if (2 == xe && a) {
        var b = I(a);
        Wh(a, b.x - a.gi, b.y - a.ii);
        delete a.Wd;
        ej(a, !1);
        a.B();
        ee(a.Ga, Sh, a);
        ze(window, "resize")
    }
    a && ne(a.s);
    xe = 0;
    Aj()
}

function Cl() {
    var a = P,
        b = Tc(a);
    jd(b);
    a = I(a);
    b.setAttribute("x", H ? -a.x : a.x);
    b.setAttribute("y", a.y);
    yl = b
}

function Al(a) {
    if (!K) {
        var b = [];
        if (Fc) {
            for (var c = !1, d = !1, e = Sc(z, !1), f = 0; f < e.length; f++)
                for (var h = e[f]; h;) h.isCollapsed() ? c = !0 : d = !0, h = Uc(h);
            d = {
                enabled: d
            };
            d.text = Dl;
            d.bb = function () {
                for (var a = 0, b = 0; b < e.length; b++)
                    for (var c = e[b]; c;) setTimeout(c.zd.bind(c, !0), a), c = Uc(c), a += 10
            };
            b.push(d);
            c = {
                enabled: c
            };
            c.text = El;
            c.bb = function () {
                for (var a = 0, b = 0; b < e.length; b++)
                    for (var c = e[b]; c;) setTimeout(c.zd.bind(c, !1), a), c = Uc(c), a += 10
            };
            b.push(c)
        }
        vh.show(a, b)
    }
}

function rl(a) {
    Gh(a) || a.preventDefault()
}

function vd(a) {
    wi();
    Wg();
    !a && gk && gk.Nd && hk.rc(null)
}

function ud() {
    if (window.getSelection) {
        var a = window.getSelection();
        a && a.removeAllRanges && (a.removeAllRanges(), window.setTimeout(function () {
            try {
                window.getSelection().removeAllRanges()
            } catch (a) {}
        }, 0))
    }
}

function Gh(a) {
    return "textarea" == a.target.type || "text" == a.target.type
}

function ul(a, b) {
    if (window.Audio && a.length) {
        for (var c, d = new window.Audio, e = 0; e < a.length; e++) {
            var f = a[e],
                h = f.match(/\.(\w+)$/);
            if (h && d.canPlayType("audio/" + h[1])) {
                c = new window.Audio(ie + f);
                break
            }
        }
        c && c.play && (vl[b] = c)
    }
}

function Mi(a, b) {
    var c = vl[a];
    c && (c = Ob && 9 === Ob || Fb || Db ? c : c.cloneNode(), c.volume = void 0 === b ? 1 : b, c.play())
}

function Hh(a) {
    if (!K) {
        var b = "";
        a && (b = "url(" + ie + "media/handclosed.cur) 7 3, auto");
        P && (S(P).style.cursor = b);
        Dc.style.cursor = b
    }
}

function nl() {
    var a = Ai();
    a.width -= ik;
    var b = a.width - M,
        c = a.height - M;
    try {
        var d = z.Z.getBBox()
    } catch (e) {
        return null
    }
    if (z.Vb) var f = Math.min(d.x - b / 2, d.x + d.width - b),
        b = Math.max(d.x + d.width + b / 2, d.x + b),
        h = Math.min(d.y - c / 2, d.y + d.height - c),
        c = Math.max(d.y + d.height + c / 2, d.y + c);
    else f = d.x, b = f + d.width, h = d.y, c = h + d.height;
    return {
        za: a.height,
        Q: a.width,
        Sa: c - h,
        Ac: b - f,
        xb: -z.scrollY,
        Fa: -z.scrollX,
        cb: h,
        zb: f,
        Za: 0,
        Ya: H ? 0 : ik
    }
}

function ol(a) {
    if (!z.Vb) throw "Attempt to set main workspace scroll without scrollbars.";
    var b = nl();
    fa(a.x) && (z.scrollX = -b.Ac * a.x - b.zb);
    fa(a.y) && (z.scrollY = -b.Sa * a.y - b.cb);
    a = "translate(" + (z.scrollX + b.Ya) + "," + (z.scrollY + b.Za) + ")";
    z.Z.setAttribute("transform", a);
    z.Uc.setAttribute("transform", a)
}

function Si(a) {
    a()
}

function pl(a) {
    return O(z.Z, "blocklyWorkspaceChange", null, a)
}
window.Blockly || (window.Blockly = {});
window.Blockly.getMainWorkspace = function () {
    return z
};
window.Blockly.addChangeListener = pl;
window.Blockly.removeChangeListener = function (a) {
    N(a)
};
var Vi = "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
    $k = "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435 \u044d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0447\u0442\u043e\u0431 \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0432\u0430\u0448\u0443 \u0440\u0430\u0431\u043e\u0442\u0443 \u0438 \u0447\u0442\u043e\u0431\u044b \u0434\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u0430\u043c \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0435\u0439.",
    Xk = "\u041e\u0431\u0449\u0430\u0439\u0442\u0435\u0441\u044c \u0441\u043e \u0441\u0432\u043e\u0438\u043c \u043a\u043e\u043b\u043b\u0435\u0433\u043e\u0439, \u043f\u0435\u0447\u0430\u0442\u0430\u044f \u0432 \u044d\u0442\u043e\u043c \u043f\u043e\u043b\u0435!",
    Dl = "\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0431\u043b\u043e\u043a\u0438",
    Zi = "\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0431\u043b\u043e\u043a",
    bj = "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0431\u043b\u043e\u043a",
    cj = "\u0423\u0434\u0430\u043b\u0438\u0442\u044c %1 \u0431\u043b\u043e\u043a\u043e\u0432",
    aj = "\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0431\u043b\u043e\u043a",
    Ti = "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c",
    $i = "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0431\u043b\u043e\u043a",
    El = "\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0431\u043b\u043e\u043a\u0438",
    Yi = "\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0431\u043b\u043e\u043a",
    Wi = "\u0412\u0441\u0442\u0430\u0432\u043a\u0438 \u0441\u043d\u0430\u0440\u0443\u0436\u0438",
    dj = "\u0421\u043f\u0440\u0430\u0432\u043a\u0430",
    Xi = "\u0412\u0441\u0442\u0430\u0432\u043a\u0438 \u0432\u043d\u0443\u0442\u0440\u0438",
    al = "\u042f",
    Ui = "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439";

function Fl(a, b) {
    var c;
    c = a.className;
    for (var d = c = r(c) && c.match(/\S+/g) || [], e = ab(arguments, 1), f = 0; f < e.length; f++) Xa(d, e[f]) || d.push(e[f]);
    a.className = c.join(" ")
};
var Gl = {
        ace: "\u0628\u0647\u0633\u0627 \u0627\u0686\u064a\u0647",
        af: "Afrikaans",
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        az: "Az\u0259rbaycanca",
        "be-tarask": "Tara\u0161kievica",
        br: "Brezhoneg",
        ca: "Catal\u00e0",
        cdo: "\u95a9\u6771\u8a9e",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        es: "Espa\u00f1ol",
        eu: "Euskara",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fo: "F\u00f8royskt",
        fr: "Fran\u00e7ais",
        frr: "Frasch",
        gl: "Galego",
        hak: "\u5ba2\u5bb6\u8a71",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hrx: "Hunsrik",
        hu: "Magyar",
        ia: "Interlingua",
        id: "Bahasa Indonesia",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        ka: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",
        km: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
        ko: "\ud55c\uad6d\uc5b4",
        ksh: "Ripoar\u0117sch",
        ky: "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",
        la: "Latine",
        lb: "L\u00ebtzebuergesch",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        mg: "Malagasy",
        ml: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
        mk: "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
        mr: "\u092e\u0930\u093e\u0920\u0940",
        ms: "Bahasa Melayu",
        mzn: "\u0645\u0627\u0632\u0650\u0631\u0648\u0646\u06cc",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        oc: "Lenga d'\u00f2c",
        pa: "\u092a\u0902\u091c\u093e\u092c\u0940",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        ps: "\u067e\u069a\u062a\u0648",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ro: "Rom\u00e2n\u0103",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sco: "Scots",
        si: "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
        sk: "Sloven\u010dina",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        sw: "Kishwahili",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        tl: "Tagalog",
        tlh: "tlhIngan Hol",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        "zh-hans": "\u7c21\u9ad4\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    Hl = "ace ar fa he mzn ps".split(" "),
    yc = window.BlocklyGamesLang,
    Il = window.BlocklyGamesLanguages,
    Ac = !!window.location.pathname.match(/\.html$/);

function Jl(a, b) {
    var c = window.location.search.match(new RegExp("[?&]" + a + "=([^&]+)"));
    return c ? decodeURIComponent(c[1].replace(/\+/g, "%20")) : b
}

function Kl(a, b, c) {
    a = Number(Jl(a, "NaN"));
    return isNaN(a) ? b : Math.min(Math.max(b, a), c)
}
var G = Kl("level", 1, 10);

function Ll() {
    document.title = document.getElementById("title").textContent;
    document.head.parentElement.setAttribute("dir", -1 != Hl.indexOf(yc) ? "rtl" : "ltr");
    document.head.parentElement.setAttribute("lang", yc);
    for (var a = [], b = 0; b < Il.length; b++) {
        var c = Il[b];
        a.push([Gl[c], c])
    }
    a.sort(function (a, b) {
        return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
    });
    for (var d = document.getElementById("languageMenu"), b = d.options.length = 0; b < a.length; b++) {
        var e = a[b],
            c = e[1],
            e = new Option(e[0], c);
        c == yc && (e.selected = !0);
        d.options.add(e)
    }
    1 >= d.options.length &&
        (d.style.display = "none");
    for (b = 1; 10 >= b; b++) a = document.getElementById("level" + b), c = !!Ml(b), a && c && Fl(a, "level_done");
    (b = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && b.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(Nl, 1)
}

function Ml(a) {
    var b = Ol,
        c;
    try {
        //console.log('-> b + a:',b + a);
        c = window.localStorage[b + a];

    } catch (d) {}
    return c
}

function W(a,iHtml) {
    var b;

    b = document.getElementById(a);

    //console.log('-> b:',b);
    //
    //console.log('->  b.textContent:', b.innerHTML);
    if(iHtml){
        b ? (b = b.innerHTML, b = b.replace(/\\n/g, "\n")) : b = null;
    }else{
        b ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null;
    }



    return null === b ? "[Unknown message: " + a + "]" : b;
}

function Pl(a, b) {
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0)
}

function Nl() {
    if (!Ac) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function () {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
var X = {
    Dc: null,
    H: function () {
        Ll();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = W("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = W("Games_linkAlert"), BlocklyStorage.HASH_ERROR = W("Games_hashError"), BlocklyStorage.XML_ERROR = W("Games_xmlError"), BlocklyStorage.alert = qc.nk, a && Pl(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        document.getElementById("languageMenu").addEventListener("change", X.Ni, !0)
    },
    Dj: function (a) {
        document.body.innerHTML =
            a;
        a = document.getElementById("blockly");
        a.style.height = window.innerHeight + "px";
        jl(a, {
            path: "./",
            readOnly: !0,
            Ml: -1 != Hl.indexOf(yc),
            scrollbars: !1
        });
        a = Jl("xml", "");
        X.kg("<xml>" + a + "</xml>")
    },
    Jj: function (a, b) {
        if ("BlocklyStorage" in window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else {
            var c = null;
            try {
                c = window.sessionStorage.Qf
            } catch (d) {}
            c && delete window.sessionStorage.Qf;
            var e = Ml(G),
                f = b && Ml(G - 1);
            (c = c || e || f || a) && X.kg(c)
        }
    },
    kg: function (a) {
        X.Dc ? X.Dc.setValue(a, -1) : (a = Wc(a), Xc(z, a))
    },
    dk: function () {
        if (void 0 != typeof Bc && window.localStorage) {
            var a = Ol + G;
            if (X.Dc) var b = X.Dc.getValue();
            else b = Rc(z), b = Vc(b);
            window.localStorage[a] = b
        }
    },
    qe: function () {
        historyClear();
        window.location = '/share.html';
    },
    Ni: function () {
        if (window.sessionStorage) {
            if (X.Dc) var a = X.Dc.getValue();
            else a = Rc(z), a = Vc(a);
            window.sessionStorage.Qf = a
        }
        var a = document.getElementById("languageMenu"),
            a = encodeURIComponent(a.options[a.selectedIndex].value),
            b = window.location.search,
            b = 1 >= b.length ? "?lang=" +
            a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    le: function (a) {
        if (a) {
            var b = a.match(/^block_id_(\d+)$/);
            b && (a = b[1])
        }
        we(a)
    },
    ok: function (a) {
        return a.replace(/(,\s*)?'block_id_\d+'\)/g, ")");
    },
    Ta: function (a) {
        if ("click" == a.type && "touchend" == X.Ta.dg && X.Ta.cg + 2E3 > Date.now() || X.Ta.dg == a.type && X.Ta.cg + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
        X.Ta.dg = a.type;
        X.Ta.cg = Date.now();
        return !1
    }
};
X.Ta.dg = null;
X.Ta.cg = 0;
X.Bj = function () {
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "js-read-only/JS-Interpreter/compiled.js");
    document.head.appendChild(a)
};
X.Cj = function () {
    var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a)
};
window.BlocklyInterface = X;
X.setCode = X.kg;
var Y = {
    gc: !1,
    lh: null,
    Ud: null,
    Cd: function (a, b, c, d, e, f) {
        function h() {
            Y.gc && (k.style.visibility = "visible", k.style.zIndex = 10, l.style.visibility = "hidden")
        }
        Y.gc && Y.Va(!1);
        vd(!0);
        Y.gc = !0;
        Y.lh = b;
        Y.Ud = f;
        var k = document.getElementById("dialog");
        f = document.getElementById("dialogShadow");
        var l = document.getElementById("dialogBorder"),
            q;
        for (q in e) k.style[q] = e[q];
        d && (f.style.visibility = "visible", f.style.opacity = .3, f.style.zIndex = 9, d = document.createElement("div"), d.id = "dialogHeader", k.appendChild(d), Y.sf = O(d, "mousedown",
            null, Y.bj));
        k.appendChild(a);

        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (Y.ye(b, !1, .2), Y.ye(k, !0, .8), setTimeout(h, 175)) : h()
    },
    mh: 0,
    nh: 0,
    bj: function (a) {
        Y.vf();
        if (!rd(a)) {
            var b = document.getElementById("dialog");
            Y.mh = b.offsetLeft - a.clientX;
            Y.nh = b.offsetTop - a.clientY;
            Y.uf = O(document, "mouseup", null, Y.vf);
            Y.tf = O(document, "mousemove", null, Y.cj);
            a.stopPropagation()
        }
    },
    cj: function (a) {
        var b = document.getElementById("dialog"),
            c = Y.mh + a.clientX;
        a = Y.nh + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight -
            b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    vf: function () {
        Y.uf && (N(Y.uf), Y.uf = null);
        Y.tf && (N(Y.tf), Y.tf = null)
    },
    Va: function (a) {
        function b() {
            d.style.zIndex = -1;
            d.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (Y.gc) {
            Y.vf();
            Y.sf && (N(Y.sf), Y.sf = null);
            Y.gc = !1;
            Y.Ud && Y.Ud();
            Y.Ud = null;
            var c = !1 === a ? null : Y.lh;
            a = document.getElementById("dialog");
            var d = document.getElementById("dialogShadow");
            d.style.opacity = 0;
            c ? (Y.ye(a, !1, .8), Y.ye(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    ye: function (a, b, c) {
        function d() {
            e.style.width = f.width + "px";
            e.style.height = f.height + "px";
            e.style.left = f.x + "px";
            e.style.top = f.y + "px";
            e.style.opacity = c
        }
        if (a) {
            var e = document.getElementById("dialogBorder"),
                f = Y.vh(a);
            b ? (e.className = "dialogAnimate", setTimeout(d, 1)) : (e.className = "", d());
            e.style.visibility = "visible"
        }
    },
    vh: function (a) {
        if (a.getBBox) {
            var b = a.getBBox(),
                c = b.height,
                b = b.width;
            a = Xg(a);
            var d = a.x,
                e = a.y
        } else {
            c = a.offsetHeight;
            b = a.offsetWidth;
            e = d = 0;
            do d += a.offsetLeft, e += a.offsetTop, a = a.offsetParent; while (a)
        }
        return {
            height: c,
            width: b,
            x: d,
            y: e
        }
    },
    nk: function (a) {
        var b = document.getElementById("containerStorage");
        b.textContent = "";
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("p");
            d.appendChild(document.createTextNode(a[c]));
            b.appendChild(d)
        }
        b = document.getElementById("dialogStorage");
        a = document.getElementById("linkButton");
        Y.Cd(b, a, !0, !0, {
            width: "50%",
            left: "25%",
            top: "5em"
        }, Y.ji);
        Y.di()
    },
    Ig: function () {
        if (!Ml(G))
            if (Y.gc || 0 != xe) setTimeout(Y.Ig, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", Y.Va, !0);
                b.addEventListener("touchend", Y.Va, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", X.qe, !0);
                b.addEventListener("touchend", X.qe, !0);
                Y.Cd(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function () {
                    document.body.removeEventListener("keydown", Y.Hg, !0)
                });
                document.body.addEventListener("keydown", Y.Hg, !0)
            }
    },
    Pi: function () {
        var a = document.getElementById("dialogDone");
        if (z) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = cl(),
                c = X.ok(c),
                d = c.split("\n").length,
                e = document.getElementById("containerCode");


            //console.log('-> c1:',c);



            e.textContent = c;
            "function" == typeof prettyPrintOne && (c = e.innerHTML, c = prettyPrintOne(c, "js"), e.innerHTML = c);

            //console.log('-> c2:',c);

            c = d-1>3 ?
                W("Games_linesOfCode1",true).replace("%1", d-1 +" строк") : W("Games_linesOfCode2",true).replace("%1", d-1 +" строки");



            //b.appendChild(document.createTextNode(c))

            b.innerHTML = c;

        }

        //console.log('-> W("Games_nextLevel"):',W("Games_nextLevel"));

        c = 10 > G ? W("Games_nextLevel").replace("%1", G + 1) : W("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click", Y.Va, !0);
        b.addEventListener("touchend", Y.Va, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", X.Vf, !0);
        b.addEventListener("touchend", X.Vf, !0);
        Y.Cd(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function () {
            document.body.removeEventListener("keydown",
                Y.Ug, !0)
        });
        document.body.addEventListener("keydown", Y.Ug, !0);
        document.getElementById("dialogDoneText").textContent = c
    },
    kh: function (a) {
        !Y.gc || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (Y.Va(!0), a.stopPropagation(), a.preventDefault())
    },
    di: function () {
        document.body.addEventListener("keydown", Y.kh, !0)
    },
    ji: function () {
        document.body.removeEventListener("keydown", Y.kh, !0)
    },
    Ug: function (a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.Va(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && X.Vf()
    },
    Hg: function (a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.Va(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && X.qe()
    }
};
window.BlocklyDialogs = Y;
Y.hideDialog = Y.Va;
/*

 Visual Blocks Language

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var V = new bl("JavaScript");
gl("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
V.Bk = 0;
V.Uk = 1;
V.Xk = 1;
V.Nk = 2;
V.Pk = 3;
V.Jk = 3;
V.Sk = 4;
V.Dk = 4;
V.cl = 4;
V.bl = 4;
V.al = 4;
V.dl = 4;
V.Kk = 4;
V.Wk = 5;
V.Lk = 5;
V.Vk = 5;
V.zk = 6;
V.$k = 6;
V.Fk = 7;
V.Zk = 8;
V.Ok = 8;
V.Qk = 8;
V.Mk = 9;
V.Ck = 10;
V.Gk = 11;
V.Ek = 12;
V.Rk = 13;
V.Tk = 14;
V.Ik = 15;
V.Ak = 16;
V.Hk = 17;
V.Yk = 99;
V.H = function () {
    V.rf = Object.create(null);
    V.zl = Object.create(null);
    V.Ag ? V.Ag.reset() : V.Ag = new Qc(V.Ze);
    for (var a = [], b = rk(), c = 0; c < b.length; c++) a[c] = "var " + V.Ag.getName(b[c], tj) + ";";
    V.rf.variables = a.join("\n")
};
V.finish = function (a) {
    var b = [],
        c;
    for (c in V.rf) b.push(V.rf[c]);
    return b.join("\n\n") + "\n\n\n" + a
};
V.Yh = function (a) {
    return a + ";\n"
};
V.Il = function (a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
V.Zh = function (a, b) {
    var c = "";
    if (!a.I || !a.I.p) {
        var d = kj(a);
        d && (c += el(d, "// ") + "\n");
        for (var e = 0; e < a.N.length; e++)
            if (1 == a.N[e].type) {
                var f = J(a.N[e].o);
                if (f) {
                    for (var d = [], f = Ei(f), h = 0; h < f.length; h++) {
                        var k = kj(f[h]);
                        k && d.push(k)
                    }
                    d.length && d.push("");
                    (d = d.join("\n")) && (c += el(d, "// "))
                }
            }
    }
    e = dl(V, a.J && J(a.J));
    return c + b + e
};
ei.maze_moveForward = {
    H: function () {
        this.Wb(290);
        Di(ij(this), W("Maze_moveForward"));
        bi(this, !0);
        ci(this, !0);
        this.wb(W("Maze_moveForwardTooltip"))
    }
};
V.maze_moveForward = function (a) {
    return "moveForward('block_id_" + a.id + "');\n"
};
ei.maze_turn = {
    H: function () {
        var a = [[W("Maze_turnLeft"), "turnLeft"], [W("Maze_turnRight"), "turnRight"]];
        a[0][0] += " \u21ba";
        a[1][0] += " \u21bb";
        this.Wb(290);
        Di(ij(this), new Qg(a), "DIR");
        bi(this, !0);
        ci(this, !0);
        this.wb(W("Maze_turnTooltip"))
    }
};
V.maze_turn = function (a) {
    return gj(a) + "('block_id_" + a.id + "');\n"
};
ei.maze_if = {
    H: function () {
        var a = [[W("Maze_pathAhead"), "isPathForward"], [W("Maze_pathLeft"), "isPathLeft"], [W("Maze_pathRight"), "isPathRight"]];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.Wb(210);
        Di(ij(this), new Qg(a), "DIR");
        Di(jj(this, 3, "DO"), W("Maze_doCode"));
        this.wb(W("Maze_ifTooltip"));
        bi(this, !0);
        ci(this, !0)
    }
};
V.maze_if = function (a) {
    var b = gj(a) + "('block_id_" + a.id + "')";
    a = fl(a, "DO");
    return "if (" + b + ") {\n" + a + "}\n"
};
ei.maze_ifElse = {
    H: function () {
        var a = [[W("Maze_pathAhead"), "isPathForward"], [W("Maze_pathLeft"), "isPathLeft"], [W("Maze_pathRight"), "isPathRight"]];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.Wb(210);
        Di(ij(this), new Qg(a), "DIR");
        Di(jj(this, 3, "DO"), W("Maze_doCode"));
        Di(jj(this, 3, "ELSE"), W("Maze_elseCode"));
        this.wb(W("Maze_ifelseTooltip"));
        bi(this, !0);
        ci(this, !0)
    }
};
V.maze_ifElse = function (a) {
    var b = gj(a) + "('block_id_" + a.id + "')",
        c = fl(a, "DO");
    a = fl(a, "ELSE");
    return "if (" + b + ") {\n" + c + "} else {\n" + a + "}\n"
};
ei.maze_forever = {
    H: function () {
        this.Wb(120);
        Di(Di(ij(this), W("Maze_repeatUntil")), new xl(Z.xe, 12, 16));
        Di(jj(this, 3, "DO"), W("Maze_doCode"));
        bi(this, !0);
        this.wb(W("Maze_whileTooltip"))
    }
};
V.maze_forever = function (a) {
    var b = fl(a, "DO");
    V.Eg && (b = V.Eg.replace(/%1/g, "'block_id_" + a.id + "'") + b);
    return "while (notDone()) {\n" + b + "}\n"
};
var Ol = "maze";
X.Vf = function () {
    10 > G ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + yc + "&level=" + (G + 1) + "&skin=" + zc : X.qe()
};
var Ql = [void 0, 2, 5, 2, 5, 5, 5, 5, 10, 7, 10][G],//Infinity
    Rl = [{
        Tc: "maze/pegman.png",
        vg: "maze/tiles_pegman.png",
        xe: "maze/marker.png",
        background: "maze/bg_hoc.png",
        jd: !1,
        Rf: "#000",
        Bg: ["maze/win.mp3", "maze/win.ogg"],
        mf: ["maze/fail_pegman.mp3", "maze/fail_pegman.ogg"],
        Rd: 1
    }, {
        Tc: "maze/astro.png",
        vg: "maze/tiles_astro.png",
        xe: "maze/marker.png",
        background: "maze/bg_astro.jpg",
        jd: !1,
        Rf: "#fff",
        Bg: ["maze/win.mp3", "maze/win.ogg"],
        mf: ["maze/fail_astro.mp3", "maze/fail_astro.ogg"],
        Rd: 2
    }, {
        Tc: "maze/panda.png",
        vg: "maze/tiles_panda.png",
        xe: "maze/marker.png",
        background: "maze/bg_panda.jpg",
        jd: !1,
        Rf: "#000",
        Bg: ["maze/win.mp3", "maze/win.ogg"],
        mf: ["maze/fail_panda.mp3", "maze/fail_panda.ogg"],
        Rd: 3
    }],
    zc = Kl("skin", 0, Rl.length),
    Z = Rl[zc],//YA это лабиринты
    Sl = [void 0, [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 3, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 3, 0, 0, 0], [0, 0, 2, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 1, 1, 1, 3, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 3, 1, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0], [0, 2, 1, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 3, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 2, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 1, 0, 0, 0, 1, 0, 0], [0, 1, 1, 3, 0, 1, 0, 0], [0, 0, 0, 0,
0, 1, 0, 0], [0, 2, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0], [0, 2, 1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0], [0, 1, 1, 3, 0, 1, 0, 0], [0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0], [0, 1, 1, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 1, 0, 0], [0, 2, 1, 1, 0, 3, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [3, 1, 1, 1, 1, 1, 1, 0], [0, 1, 0, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 0, 1, 0], [0, 1, 0, 1, 0, 2, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 1, 0, 3, 0, 1, 0], [0, 1, 1, 0, 1, 1, 1, 0], [0, 1, 0, 1, 0, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 1, 0], [0, 2, 1, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0]]][G],
    Tl = Sl.length,
    Ul = Sl[0].length,
    Vl = 50 * Ul,
    Wl = 50 * Tl,
    Xl = 0,
    $ = [],
    Yl = {
        10010: [4, 0],
        10001: [3, 3],
        11E3: [0, 1],
        10100: [0, 2],
        11010: [4, 1],
        10101: [3, 2],
        10110: [0, 0],
        10011: [2, 0],
        11001: [4, 2],
        11100: [2, 3],
        11110: [1, 1],
        10111: [1, 0],
        11011: [2, 1],
        11101: [1, 2],
        11111: [2, 2],
        null0: [4, 3],
        null1: [3, 0],
        null2: [3, 1],
        null3: [0, 3],
        null4: [1, 3]
    };

function Zl() {
    function a(a, b) {
        return 0 > a || a >= Ul || 0 > b || b >= Tl ? "0" : 0 == Sl[b][a] ? "0" : "1"
    }
    var b = document.getElementById("svgMaze"),
        c = 50 * Math.max(Tl, Ul);
    b.setAttribute("viewBox", "0 0 " + c + " " + c);
    c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    c.setAttribute("width", Vl);
    c.setAttribute("height", Wl);
    c.setAttribute("fill", "#F1EEE7");
    c.setAttribute("stroke-width", 1);
    c.setAttribute("stroke", "#CCB");
    b.appendChild(c);
    if (Z.background) {
        var d = document.createElementNS("http://www.w3.org/2000/svg", "image");
        d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Z.background);
        d.setAttribute("height", '400');//Wl);
        d.setAttribute("width", '923');
        d.setAttribute("x", 0);
        d.setAttribute("y", 0);
        b.appendChild(d)
    }
    if (Z.jd) {
        for (c = 0; c < Tl; c++) {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
            e.setAttribute("y1", 50 * c + 25.5);
            e.setAttribute("x2", Vl);
            e.setAttribute("y2", 50 * c + 25.5);
            e.setAttribute("stroke", Z.jd);
            e.setAttribute("stroke-width", 1);
            b.appendChild(e)
        }
        for (c = 0; c < Ul; c++) e = document.createElementNS("http://www.w3.org/2000/svg",
            "line"), e.setAttribute("x1", 50 * c + 25.5), e.setAttribute("x2", 50 * c + 25.5), e.setAttribute("y2", Wl), e.setAttribute("stroke", Z.jd), e.setAttribute("stroke-width", 1), b.appendChild(e)
    }
    for (e = c = 0; e < Tl; e++)
        for (var f = 0; f < Ul; f++) {
            d = a(f, e) + a(f, e - 1) + a(f + 1, e) + a(f, e + 1) + a(f - 1, e);
            Yl[d] || (d = "00000" == d && .3 < Math.random() ? "null0" : "null" + Math.floor(1 + 4 * Math.random()));
            var h = Yl[d][0],
                k = Yl[d][1],
                l = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
            l.setAttribute("id", "tileClipPath" + c);
            d = document.createElementNS("http://www.w3.org/2000/svg",
                "rect");
            d.setAttribute("width", 50);
            d.setAttribute("height", 50);
            d.setAttribute("x", 50 * f);
            d.setAttribute("y", 50 * e);
            l.appendChild(d);
            b.appendChild(l);
            d = document.createElementNS("http://www.w3.org/2000/svg", "image");
            d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Z.vg);
            d.setAttribute("height", 200);
            d.setAttribute("width", 250);
            d.setAttribute("clip-path", "url(#tileClipPath" + c + ")");
            d.setAttribute("x", 50 * (f - h));
            d.setAttribute("y", 50 * (e - k));
            b.appendChild(d);
            c++
        }
    c = document.createElementNS("http://www.w3.org/2000/svg",
        "image");
    c.setAttribute("id", "finish");
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Z.xe);
    c.setAttribute("height", 34);
    c.setAttribute("width", '34');
    b.appendChild(c);
    c = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    c.setAttribute("id", "pegmanClipPath");
    d = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    d.setAttribute("id", "clipRect");
    d.setAttribute("width", 49);
    d.setAttribute("height", 52);
    c.appendChild(d);
    b.appendChild(c);
    c = document.createElementNS("http://www.w3.org/2000/svg",
        "image");
    c.setAttribute("id", "pegman");
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Z.Tc);
    c.setAttribute("height", 52);
    c.setAttribute("width", 1029);
    c.setAttribute("clip-path", "url(#pegmanClipPath)");
    b.appendChild(c)
}

function $l() {
    function a() {
        k.style.top = Math.max(10, l.offsetTop - window.pageYOffset) + "px";
        k.style.left = h ? "10px" : "420px";
        k.style.width = window.innerWidth - 440 + "px"
    }

    function b(a) {
        return function () {
            if (void 0 != typeof Bc && window.sessionStorage) {
                var b = Rc(z),
                    b = Vc(b);
                window.sessionStorage.Qf = b
            }
            window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + yc + "&level=" + G + "&skin=" + a
        }
    }
    document.body.innerHTML = xc();
    X.H();
    document.querySelector("#pegmanButton>img").style.backgroundImage =
        "url(" + Z.Tc + ")";
    for (var c = document.getElementById("pegmanMenu"), d = 0; d < Rl.length; d++)
        if (d != zc) {
            var e = document.createElement("div"),
                f = document.createElement("img");
            f.src = "media/1x1.gif";
            f.style.backgroundImage = "url(" + Rl[d].Tc + ")";
            e.appendChild(f);
            c.appendChild(e);
            O(e, "mousedown", null, b(d))
        }
    O(window, "resize", null, am);
    c = document.getElementById("pegmanButton");
    O(c, "mousedown", null, bm);
    document.getElementById("pegmanButtonArrow").appendChild(document.createTextNode(Tg));
    var h = -1 != Hl.indexOf(yc),
        k = document.getElementById("blockly"),
        l = document.getElementById("visualization");
    window.addEventListener("scroll", function () {
        a();
        ze(window, "resize")
    });
    window.addEventListener("resize", a);
    a();
    c = document.getElementById("toolbox");
    jl(document.getElementById("blockly"), {
        path: "./",
        maxBlocks: Ql,
        rtl: h,
        toolbox: c,
        trashcan: !0
    });
    ul(Z.Bg, "win");
    ul(Z.mf, "fail");
    gl("moveForward,moveBackward,turnRight,turnLeft,isPathForward,isPathRight,isPathBackward,isPathLeft");
    Zl();
    X.Jj('<xml>  <block movable="' + (1 != G) + '" type="maze_moveForward" x="70" y="70"></block></xml>', !1);
    for (c = 0; c < Tl; c++)
        for (d = 0; d < Ul; d++) 2 == Sl[c][d] ? tc = {
            x: d,
            y: c
        } : 3 == Sl[c][d] && (uc = {
            x: d,
            y: c
        });
    cm(!0);
    pl(function () {
        var a = Ae(z),
            b = document.getElementById("capacity");
        if (Infinity == a) b.style.display = "none";
        else {
            b.style.display = "inline";
            b.innerHTML = "";
			
            var a = Number(a),
                c = document.createElement("span");
            c.className = "capacityNumber";
            c.appendChild(document.createTextNode(a));
            for (var a = (0 == a || a >4 ? W("Maze_capacity0") : 1 == a ? W("Maze_capacity1") : W("Maze_capacity2")).split(/%\d/), d = 0; d < a.length; d++)
			b.appendChild(document.createTextNode(a[d])),
			d != a.length - 1 && b.appendChild(c.cloneNode(!0))
        }
    });
    document.body.addEventListener("mousemove", dm, !0);
    Pl("runButton", em);
    Pl("resetButton", fm);
    1 == G && (T *= 2);
    10 == G ? Ml(G) || (c = document.getElementById("dialogHelpWallFollow"), Y.Cd(c, null, !1, !0, {
        width: "30%",
        left: "35%",
        top: "12em"
    }, Y.ji), Y.di(), setTimeout(Y.Ig, 3E5)) : setTimeout(function () {
        pl(function () {
            gm()
        });
        gm()
    }, 5E3);
    c = document.getElementById("dialogDoneButtons");
    d = document.createElement("img");
    d.id = "pegSpin";
    d.src = "media/1x1.gif";
    d.style.backgroundImage = "url(" +
        Z.Tc + ")";
    c.parentNode.insertBefore(d, c);
    setTimeout(X.Bj, 1);
    setTimeout(X.Cj, 1)

}
window.location.pathname.match(/readonly.html$/) ? window.addEventListener("load", function () {
    X.Dj(wc() + '<div id="blockly"></div>')
}) : window.addEventListener("load", $l);

function gm() {
    if (0 == xe && 1 != Xl && !Ml(G)) {
        var a = Vc(Rc(z)),
            b = Sc(z.ed.t, !0),
            c = null,
            d = null,
            e = null;
        if (1 == G) 2 > te(z).length ? (c = document.getElementById("dialogHelpStack"), e = {
            width: "370px",
            top: "70px"
        }, e[H ? "right" : "left"] = "35px", d = S(b[0])) : (b = Sc(z, !0), 1 < b.length ? (document.getElementById("iframeOneTopBlock").src = "readonly.html?app=maze&lang=" + encodeURIComponent(yc) + "&xml=" + encodeURIComponent('<block type="maze_moveForward" x="10" y="10"><next><block type="maze_moveForward"></block></next></block>'), c = document.getElementById("dialogHelpOneTopBlock"),
            e = {
                width: "360px",
                top: "120px"
            }, e[H ? "right" : "left"] = "225px", d = S(b[0])) : 0 == Xl && (c = document.getElementById("dialogHelpRun"), e = {
            width: "360px",
            top: "410px"
        }, e[H ? "right" : "left"] = "400px", d = document.getElementById("runButton")));
        else if (2 == G) 0 != Xl && "none" == document.getElementById("runButton").style.display && (c = document.getElementById("dialogHelpReset"), e = {
            width: "360px",
            top: "410px"
        }, e[H ? "right" : "left"] = "400px", d = document.getElementById("resetButton"));
        else if (3 == G) - 1 == a.indexOf("maze_forever") && (0 == Ae(z) ? (c =
            document.getElementById("dialogHelpCapacity"), e = {
                width: "430px",
                top: "310px"
            }, e[H ? "right" : "left"] = "50px", d = document.getElementById("capacityBubble")) : (c = document.getElementById("dialogHelpRepeat"), e = {
            width: "360px",
            top: "360px"
        }, e[H ? "right" : "left"] = "425px", d = S(b[3])));
        else if (4 == G)
            if (0 == Ae(z) && (-1 == a.indexOf("maze_forever") || 1 < Sc(z, !1).length)) c = document.getElementById("dialogHelpCapacity"), e = {
                width: "430px",
                top: "310px"
            }, e[H ? "right" : "left"] = "50px", d = document.getElementById("capacityBubble");
            else {
                for (var a = !0, f = te(z), h = 0; h < f.length; h++) {
                    var k = f[h];
                    if ("maze_forever" == k.type) {
                        for (var l = 0; k;) k = k.Nb(), k = k.length ? k[0] : null, l++;
                        if (2 < l) {
                            a = !1;
                            break
                        }
                    }
                }
                a && (c = document.getElementById("dialogHelpRepeatMany"), e = {
                    width: "360px",
                    top: "360px"
                }, e[H ? "right" : "left"] = "425px", d = S(b[3]))
            } 
//        else if (5 == G) 0 != zc || bm.Bi || (c = document.getElementById("dialogHelpSkins"), e = {
//            width: "360px",
//            top: "60px"
//        }, e[H ? "left" : "right"] = "20px", d = document.getElementById("pegmanButton"));
        else if (6 == G) - 1 == a.indexOf("maze_if") && (c = document.getElementById("dialogHelpIf"),
            e = {
                width: "360px",
                top: "400px"
            }, e[H ? "right" : "left"] = "425px", d = S(b[4]));
        else if (7 == G) {
            if (!hm) {
                f = document.createElement("span");
                f.className = "helpMenuFake";
                h = [W("Maze_pathAhead"), W("Maze_pathLeft"), W("Maze_pathRight")];
                l = ah(h);
                k = bh(h);
                f.textContent = (k ? h[0].slice(l, -k) : h[0].substring(l)) + " " + Tg;
                l = document.getElementById("helpMenuText");
                h = l.textContent;
                l.textContent = "";
                k = h.split(/%\d/);
                for (h = 0; h < k.length; h++) l.appendChild(document.createTextNode(k[h])), h != k.length - 1 && l.appendChild(f.cloneNode(!0));
                hm = !0
            } - 1 ==
                a.indexOf("isPathRight") && (c = document.getElementById("dialogHelpMenu"), e = {
                    width: "360px",
                    top: "400px"
                }, e[H ? "right" : "left"] = "425px", d = S(b[4]))
        } else 9 == G && -1 == a.indexOf("maze_ifElse") && (c = document.getElementById("dialogHelpIfElse"), e = {
            width: "360px",
            top: "345px"
        }, e[H ? "right" : "left"] = "425px", d = S(b[5]));
        c ? c.parentNode != document.getElementById("dialog") && Y.Cd(c, d, !0, !1, e, null) : Y.Va(!1)
    }
}
var hm;

function bm(a) {
    var b = document.getElementById("pegmanMenu");
    "block" == b.style.display ? am(a) : X.Ta(a) || (a = document.getElementById("pegmanButton"), Zf(a, "buttonHover"), b.style.top = a.offsetTop + a.offsetHeight + "px", b.style.left = a.offsetLeft + "px", b.style.display = "block", sc.$f = O(document.body, "mousedown", null, am), (b = document.getElementById("dialogHelpSkins")) && "dialogHiddenContent" != b.className && Y.Va(!1), bm.Bi = !0)
}

function am(a) {
    X.Ta(a) || (document.getElementById("pegmanMenu").style.display = "none", $f(document.getElementById("pegmanButton"), "buttonHover"), sc.$f && (N(sc.$f), delete sc.$f))
}

function cm(a) {
	
    for (var b = 0; b < $.length; b++) window.clearTimeout($[b]);
    $ = [];
    C = tc.x;
    D = tc.y;
    a ? (F = 2, im(!1), $.push(setTimeout(function () {
        B = 100;
        jm([C, D, 4 * F - 4]);
        F++
    }, 5 * B))) : (F = 1, km(C, D, 4 * F));
    a = document.getElementById("finish");
    a.setAttribute("x", 50 * (uc.x + .5) - a.getAttribute("width") / 2);
    a.setAttribute("y", 50 * (uc.y + .6) - a.getAttribute("height"));
    a = document.getElementById("look");
    a.style.display = "none";
    a.parentNode.appendChild(a);
    a = a.getElementsByTagName("path");
    for (var b = 0, c; c = a[b]; b++) c.setAttribute("stroke",
        Z.Rf)
}

function em(a) {
	window.turncount=0
    if (!X.Ta(a))
        if (Y.Va(!1), 1 == G && 1 < Sc(z).length && 1 != Xl && !Ml(G)) gm();
        else {
            a = document.getElementById("runButton");
            var b = document.getElementById("resetButton");
            b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
            a.style.display = "none";
            b.style.display = "inline";
            ve(z, !0);
            cm(!1);
            lm()
        }
}

function fm(a) {
    X.Ta(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", ve(z, !1), cm(!1), gm())
}

function mm(a, b) {
    var c;
    c = function (a) {
        nm(0, a.toString())
    };
    a.setProperty(b, "moveForward", a.createNativeFunction(c));
    c = function (a) {
        nm(2, a.toString())
    };
    a.setProperty(b, "moveBackward", a.createNativeFunction(c));
    c = function (a) {
        om(0, a.toString())
    };
    a.setProperty(b, "turnLeft", a.createNativeFunction(c));
    c = function (a) {
        om(1, a.toString())
    };
    a.setProperty(b, "turnRight", a.createNativeFunction(c));
    c = function (b) {
        return a.createPrimitive(pm(0, b.toString()))
    };
    a.setProperty(b, "isPathForward", a.createNativeFunction(c));
    c = function (b) {
        return a.createPrimitive(pm(1, b.toString()))
    };
    a.setProperty(b, "isPathRight", a.createNativeFunction(c));
    c = function (b) {
        return a.createPrimitive(pm(2, b.toString()))
    };
    a.setProperty(b, "isPathBackward", a.createNativeFunction(c));
    c = function (b) {
        return a.createPrimitive(pm(3, b.toString()))
    };
    a.setProperty(b, "isPathLeft", a.createNativeFunction(c));
    a.setProperty(b, "notDone", a.createNativeFunction(function () {
        return a.createPrimitive(C != uc.x || D != uc.y)
    }))
}

function lm() {
    if ("Interpreter" in window) {
        vc = [];
        var a = cl();
        Xl = 0;
        a = new Interpreter(a, mm);
        try {
            for (var b = 1E4; a.step();)
                if (0 == b--) throw Infinity;
            Xl = C != uc.x || D != uc.y ? -1 : 1
        } catch (c) {
            Infinity === c ? Xl = 2 : !1 === c ? Xl = -2 : (Xl = -2, alert(c))
        }
        1 == Xl ? (B = 100, vc.push(["finish", null])) : B = 150;
        cm(!1);
        $.push(setTimeout(qm, 100))
    } else setTimeout(lm, 250)
}

function qm() {
    var a = vc.shift();
    if (a) {
        X.le(a[1]);
        switch (a[0]) {
        case "north":
            jm([C, D - 1, 4 * F]);
            D--;
            break;
        case "east":
            jm([C + 1, D, 4 * F]);
            C++;
            break;
        case "south":
            jm([C, D + 1, 4 * F]);
            D++;
            break;
        case "west":
            jm([C - 1, D, 4 * F]);
            C--;
            break;
        case "look_north":
            rm(0);
            break;
        case "look_east":
            rm(1);
            break;
        case "look_south":
            rm(2);
            break;
        case "look_west":
            rm(3);
            break;
        case "fail_forward":
            sm(!0);
            break;
        case "fail_backward":
            sm(!1);
            break;
        case "left":
            jm([C, D, 4 * F - 4]);
            F = tm(F - 1);
            break;
        case "right":
            jm([C, D, 4 * F + 4]);
            F = tm(F + 1);
            break;
        case "finish":
            im(!0),
            X.dk(), heroAnimate() ,setTimeout(Y.Pi, 1E3)
        }
        $.push(setTimeout(qm, 5 * B))
				
		window.turncount++
		 redrawTurnCount()
		if(window.turncount>window.maxturncount)
		failGame()
    } else X.le(null), gm()
}

function heroAnimate(){

    var b = document.getElementById("pegman");


    b.setAttribute("x", 51);


    //console.log('---------');
}

window.turncount=0;
window.maxturncount=10;

function failGame(){
	//console.log('failGame')
}
function redrawTurnCount(){
	// document.getElementById('turnCount').innerText=turncount+'/'+maxturncount
	//YA
}
function dm(a) {
    if ("dialogHiddenContent" != document.getElementById("dialogDone").className) {
        var b = document.getElementById("pegSpin"),
            c = Y.vh(b),
            d = a.clientX - (c.x + c.width / 2 - window.pageXOffset);
        a = Math.atan((a.clientY - (c.y + c.height / 2 - window.pageYOffset)) / d);
        a = a / Math.PI * 180;
        d = Math.round((0 < d ? a + 90 : a + 270) / 360 * 16);
        16 == d && (d = 15);
        b.style.backgroundPosition = 49 * -d + "px 0px"
    }
}

function jm(a) {
    var b = [C, D, 4 * F],
        c = [(a[0] - b[0]) / 4, (a[1] - b[1]) / 4, (a[2] - b[2]) / 4];
    km(b[0] + c[0], b[1] + c[1], um(b[2] + c[2]));
    $.push(setTimeout(function () {
        km(b[0] + 2 * c[0], b[1] + 2 * c[1], um(b[2] + 2 * c[2]))
    }, B));
    $.push(setTimeout(function () {
        km(b[0] + 3 * c[0], b[1] + 3 * c[1], um(b[2] + 3 * c[2]))
    }, 2 * B));
    $.push(setTimeout(function () {
        km(a[0], a[1], um(a[2]))
    }, 3 * B))
}

function sm(a) {
    var b = 0,
        c = 0;
    switch (F) {
    case 0:
        c = -1;
        break;
    case 1:
        b = 1;
        break;
    case 2:
        c = 1;
        break;
    case 3:
        b = -1
    }
    a || (b = -b, c = -c);
    if (1 == Z.Rd) {
        var b = b / 4,
            c = c / 4,
            d = um(4 * F);
        km(C + b, D + c, d);
        Mi("fail", .5);
        $.push(setTimeout(function () {
            km(C, D, d)
        }, B));
        $.push(setTimeout(function () {
            km(C + b, D + c, d);
            Mi("fail", .5)
        }, 2 * B));
        $.push(setTimeout(function () {
            km(C, D, d)
        }, 3 * B))
    } else {
        var e = 10 * (Math.random() - .5),
            f = (Math.random() - .5) / 2,
            b = b + (Math.random() - .5) / 4,
            c = c + (Math.random() - .5) / 4,
            b = b / 8,
            c = c / 8,
            h = 0;
        3 == Z.Rd && (h = .01);
        $.push(setTimeout(function () {
            Mi("fail",
                .5)
        }, 2 * B));
        a = function (a) {
            return function () {
                var d = um(4 * F + f * a);
                km(C + b * a, D + c * a, d, e * a);
                c += h
            }
        };
        for (var k = 1; 100 > k; k++) $.push(setTimeout(a(k), B * k / 2))
    }
}

function im(a) {
    var b = um(4 * F);
    km(C, D, 16);
    a && Mi("win", .5);
    B = 150;
    $.push(setTimeout(function () {
        km(C, D, 18)
    }, B));
    $.push(setTimeout(function () {
        km(C, D, 16)
    }, 2 * B));
    $.push(setTimeout(function () {
        km(C, D, b)
    }, 3 * B))
}

function km(a, b, c, d) {
    var e = document.getElementById("pegman");
    e.setAttribute("x", 50 * a - 49 * c + 1);
    e.setAttribute("y", 50 * (b + .5) - 26 - 8);
    d ? e.setAttribute("transform", "rotate(" + d + ", " + (50 * a + 25) + ", " + (50 * b + 25) + ")") : e.setAttribute("transform", "rotate(0, 0, 0)");
    b = document.getElementById("clipRect");
    b.setAttribute("x", 50 * a + 1);
    b.setAttribute("y", e.getAttribute("y"))
}

function rm(a) {
    var b = C,
        c = D;
    switch (a) {
    case 0:
        b += .5;
        break;
    case 1:
        b += 1;
        c += .5;
        break;
    case 2:
        b += .5;
        c += 1;
        break;
    case 3:
        c += .5
    }
    b *= 50;
    c *= 50;
    a = 90 * a - 45;
    var d = document.getElementById("look");
    d.setAttribute("transform", "translate(" + b + ", " + c + ") rotate(" + a + " 0 0) scale(.4)");
    a = d.getElementsByTagName("path");
    d.style.display = "inline";
    for (b = 0; d = a[b]; b++) vm(d, B * b)
}

function vm(a, b) {
    $.push(setTimeout(function () {
        a.style.display = "inline";
        setTimeout(function () {
            a.style.display = "none"
        }, 2 * B)
    }, b))
}

function tm(a) {
    a = Math.round(a) % 4;
    0 > a && (a += 4);
    return a
}

function um(a) {
    a = Math.round(a) % 16;
    0 > a && (a += 16);
    return a
}

function nm(a, b) {
    if (!pm(a, null)) throw vc.push(["fail_" + (a ? "backward" : "forward"), b]), !1;
    var c;
    switch (tm(F + a)) {
    case 0:
        D--;
        c = "north";
        break;
    case 1:
        C++;
        c = "east";
        break;
    case 2:
        D++;
        c = "south";
        break;
    case 3:
        C--, c = "west"
    }
    vc.push([c, b])
}

function om(a, b) {
    a ? (F++, vc.push(["right", b])) : (F--, vc.push(["left", b]));
    F = tm(F)
}

function pm(a, b) {
    var c, d;
    switch (tm(F + a)) {
    case 0:
        c = Sl[D - 1] && Sl[D - 1][C];
        d = "look_north";
        break;
    case 1:
        c = Sl[D][C + 1];
        d = "look_east";
        break;
    case 2:
        c = Sl[D + 1] && Sl[D + 1][C];
        d = "look_south";
        break;
    case 3:
        c = Sl[D][C - 1], d = "look_west"
    }
    b && vc.push([d, b]);
    return 0 !== c && void 0 !== c
};