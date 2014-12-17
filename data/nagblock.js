
/* at the time of writing, the following script was 
responsible for setting up the nag screen:

(function (l, m) {
    function n(a) {
        a && OePqZWsauoUeUBGQQNqyfxA.nextFunction()
    }
    var h = l.document,
        p = ["i", "s", "u"],
        ttt = false;
    var wdt = document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
    var hgt = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
    n.prototype = {
        rand: function (a) {
            return Math.floor(Math.random() * a)
        },
        getElementBy: function (a, c) {
            return a ? h.getElementById(a) : h.getElementsByTagName(c)
        },
        getStyle: function (a) {
            var c = h.defaultView;
            return c && c.getComputedStyle ? c.getComputedStyle(a, null) : a.currentStyle
        },
        deferExecution: function (a) {
            setTimeout(a, 2E3)
        },
        insert: function (a, c) {
            var e = h.createElement("Kz"),
                d = window.document.getElementById("documentCanvas"),
                b = d.childNodes.length,
                g = d.style,
                f = 0,
                k = 0;
            if ("OePqZWsauoUeUBGQQNqyfxA" == c) {
                e.setAttribute("id", c);
                var fixedbar = window.document.getElementById("weiterLesen");
                var timeout = hgt <= 730 ? 100 : 100;
                e.setAttribute("style", "position:fixed;top:80px;z-index:426;display:block !important;");
                if (fixedbar) {
                    fixedbar.style.zIndex = "99";
                    oWeiterlesen.setUpperSujetHeight(260);
                }
                setTimeout(function () {
                    var lyrel = window.document.getElementById("OePqZWsauoUeUBGQQNqyfxA");
                    if (lyrel) {
                        lyrel.style.position = "relative";
                        lyrel.style.top = "";
                        lyrel.style.zIndex = "426";
                    }
                }, timeout);
                for (b = this.rand(b); f < b; f++) 1 == d.childNodes[f].nodeType && (k = Math.max(k, parseFloat(this.getStyle(d.childNodes[f]).zIndex) || 0));
                k && (e.style.zIndex = k + 1);
                b++
            }
            e.innerHTML = a;
            document.body.insertBefore(e, d)
        },
        r: function (a) {
            var c = h.body.style;
            this.getElementBy(a).parentNode.removeChild(this.getElementBy(a));
        },
        h: function (a) {
            this.getElementBy(a + "_vZf").style.display = "none";
            this.getElementBy(a + "_vZf02").style.display = "block";
        },
        j: function (a) {
            this.getElementBy(a + "_vZf").style.display = "none";
            this.getElementBy(a + "_vZf03").style.display = "block";
        },
        displayMessage: function (a) {
            ttt = true;
            try {
                STD.CommunityActivity.voez(1, 1);
            } catch (d) {
                var c = ""
            }
            a = "abisuq".charAt(this.rand(5));
            var prefix = "<" + a + ">";
            if (wdt <= 1350) prefix = "<" + a + ">";
            this.insert(prefix + '<div id="OePqZWsauoUeUBGQQNqyfxA_vZf" style="display:block;">' + ('<input id="OePqZWsauoUeUBGQQNqyfxA_btn2" type="button" onclick="OePqZWsauoUeUBGQQNqyfxA.h(\'OePqZWsauoUeUBGQQNqyfxA\')" value="Ja, zu einem fairen Preis."><input id="OePqZWsauoUeUBGQQNqyfxA_btn1" type="button" onclick="OePqZWsauoUeUBGQQNqyfxA.j(\'OePqZWsauoUeUBGQQNqyfxA\')" value="Ja, aber ohne Zusatzkosten."></div><div id="OePqZWsauoUeUBGQQNqyfxA_vZf02" style="display:none;"><input id="OePqZWsauoUeUBGQQNqyfxA_btn3" type="button" onclick="location.href=\'https://derstandard.at/digital/formular.aspx?form=FairnessAbo\'" value="Jetzt bestellen."></div><div id="OePqZWsauoUeUBGQQNqyfxA_vZf03" style="display:none;"><input id="OePqZWsauoUeUBGQQNqyfxA_btn4" type="button" onclick="location.href=\'http://derstandard.at/2000005895465\'" value="Das ist fair. Jetzt deaktivieren."><input id="OePqZWsauoUeUBGQQNqyfxA_btn5" type="button" onclick="OePqZWsauoUeUBGQQNqyfxA.r(\'OePqZWsauoUeUBGQQNqyfxA\')" value="Nein, danke!"></div></' + a + ">"), "OePqZWsauoUeUBGQQNqyfxA");
        },
        i: function () {
            for (var a = "ad-minibar,ad_stream11,adspace-1,bn_ad,content_adv,middleads,rightskyad,ad,ads,adsense".split(","), c = a.length, e = "", d = this, b = 0, g = "abisuq".charAt(d.rand(5)); b < c; b++) d.getElementBy(a[b]) || (e += "<" + g + ' id="' + a[b] + '"></' + g + ">");
            d.insert(e);
            d.deferExecution(function () {
                for (b = 0; b < c; b++) if (null == d.getElementBy(a[b]).offsetParent || "none" == d.getStyle(d.getElementBy(a[b])).display) return d.displayMessage("#" + a[b] + "(" + b + ")");
                d.nextFunction()
            })
        },
        s: function () {
            var a = {
                'pagead2.googlesyndic': 'google_ad_client',
                'js.adscale.de/getads': 'adscale_slot_id',
                'get.mirando.de/miran': 'adPlaceId'
            }, c = this,
                e = c.getElementBy(0, "script"),
                d = e.length - 1,
                b, g, f, k;
            h.write = null;
            for (h.writeln = null; 0 <= d; --d) if (b = e[d].src.substr(7, 20), a[b] !== m) {
                f = h.createElement("script");
                f.type = "text/javascript";
                f.src = e[d].src;
                g = a[b];
                l[g] = m;
                f.onload = f.onreadystatechange = function () {
                    k = this;
                    l[g] !== m || k.readyState && "loaded" !== k.readyState && "complete" !== k.readyState || (l[g] = f.onload = f.onreadystatechange = null, e[0].parentNode.removeChild(f))
                };
                e[0].parentNode.insertBefore(f, e[0]);
                c.deferExecution(function () {
                    if (l[g] === m) return c.displayMessage(f.src);
                    c.nextFunction()
                });
                return
            }
            c.nextFunction()
        },
        u: function () {
            var a = ".ad.page.,/ad300x.,/adLink728.,/bbad.,/bytemark_ad.,/floater_ad.,/uplimg/ads/ad,_ad_render_,/760x120_,/ban468.".split(","),
                c = this,
                e = c.getElementBy(0, "img"),
                d, b;
            e[0] !== m && e[0].src !== m && (d = new Image, d.onload = function () {
                b = this;
                b.onload = null;
                b.onerror = function () {
                    p = null;
                    c.displayMessage(b.src)
                };
                b.src = e[0].src + "#" + a.join("")
            }, d.src = e[0].src);
            c.deferExecution(function () {
                c.nextFunction()
            })
        },
        nextFunction: function () {
            var a = p[0];
            a !== m && (p.shift(), this[a]()) if (!a && !ttt) try {
                STD.CommunityActivity.voez(0, 1);
            } catch (d) {
                var c = ""
            }
        }
    };
    l.OePqZWsauoUeUBGQQNqyfxA = OePqZWsauoUeUBGQQNqyfxA = new n;
    h.addEventListener ? l.addEventListener("load", n, !1) : l.attachEvent("onload", n)
})(window);

our current simplistic approach is to hide the document canvas from the script.
*/

var canvas = window.document.getElementById('documentCanvas');
canvas.id = 'documentCanvas' + Math.random();
