// var stop, staticx;
// var img = new Image();
// img.src = "";

// function Sakura(x, y, s, r, fn) {
//     this.x = x;
//     this.y = y;
//     this.s = s;
//     this.r = r;
//     this.fn = fn;
// }
// Sakura.prototype.draw = function (cxt) {
//     cxt.save();
//     var xc = 40 * this.s / 4;
//     cxt.translate(this.x, this.y);
//     cxt.rotate(this.r);
//     cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
//     cxt.restore();
// }
// Sakura.prototype.update = function () {
//     this.x = this.fn.x(this.x, this.y);
//     this.y = this.fn.y(this.y, this.y);
//     this.r = this.fn.r(this.r);
//     if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
//         this.r = getRandom('fnr');
//         if (Math.random() > 0.4) {
//             this.x = getRandom('x');
//             this.y = 0;
//             this.s = getRandom('s');
//             this.r = getRandom('r');
//         } else {
//             this.x = window.innerWidth;
//             this.y = getRandom('y');
//             this.s = getRandom('s');
//             this.r = getRandom('r');
//         }
//     }
// }
// SakuraList = function () {
//     this.list = [];
// }
// SakuraList.prototype.push = function (sakura) {
//     this.list.push(sakura);
// }
// SakuraList.prototype.update = function () {
//     for (var i = 0, len = this.list.length; i < len; i++) {
//         this.list[i].update();
//     }
// }
// SakuraList.prototype.draw = function (cxt) {
//     for (var i = 0, len = this.list.length; i < len; i++) {
//         this.list[i].draw(cxt);
//     }
// }
// SakuraList.prototype.get = function (i) {
//     return this.list[i];
// }
// SakuraList.prototype.size = function () {
//     return this.list.length;
// }

// function getRandom(option) {
//     var ret, random;
//     switch (option) {
//         case 'x':
//             ret = Math.random() * window.innerWidth;
//             break;
//         case 'y':
//             ret = Math.random() * window.innerHeight;
//             break;
//         case 's':
//             ret = Math.random();
//             break;
//         case 'r':
//             ret = Math.random() * 6;
//             break;
//         case 'fnx':
//             random = -0.5 + Math.random() * 1;
//             ret = function (x, y) {
//                 return x + 0.5 * random - 1.7;
//             };
//             break;
//         case 'fny':
//             random = 1.5 + Math.random() * 0.7
//             ret = function (x, y) {
//                 return y + random;
//             };
//             break;
//         case 'fnr':
//             random = Math.random() * 0.03;
//             ret = function (r) {
//                 return r + random;
//             };
//             break;
//     }
//     return ret;
// }

// function startSakura() {
//     requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
//     var canvas = document.createElement('canvas'),
//         cxt;
//     staticx = true;
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
//     canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
//     canvas.setAttribute('id', 'canvas_sakura');
//     document.getElementsByTagName('body')[0].appendChild(canvas);
//     cxt = canvas.getContext('2d');
//     var sakuraList = new SakuraList();
//     for (var i = 0; i < 50; i++) {
//         var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
//         randomX = getRandom('x');
//         randomY = getRandom('y');
//         randomR = getRandom('r');
//         randomS = getRandom('s');
//         randomFnx = getRandom('fnx');
//         randomFny = getRandom('fny');
//         randomFnR = getRandom('fnr');
//         sakura = new Sakura(randomX, randomY, randomS, randomR, {
//             x: randomFnx,
//             y: randomFny,
//             r: randomFnR
//         });
//         sakura.draw(cxt);
//         sakuraList.push(sakura);
//     }
//     stop = requestAnimationFrame(function () {
//         cxt.clearRect(0, 0, canvas.width, canvas.height);
//         sakuraList.update();
//         sakuraList.draw(cxt);
//         stop = requestAnimationFrame(arguments.callee);
//     })
// }
// window.onresize = function () {
//     var canvasSnow = document.getElementById('canvas_snow');
// }
// img.onload = function () {
//     startSakura();
// }

// function stopp() {
//     if (staticx) {
//         var child = document.getElementById("canvas_sakura");
//         child.parentNode.removeChild(child);
//         window.cancelAnimationFrame(stop);
//         staticx = false;
//     } else {
//         startSakura();
//     }
// }
$(function(){

    // 气泡
    function bubble() {
        $('#page-header').circleMagic({
            radius: 10,
            density: .2,
            color: 'rgba(255,255,255,.4)',
            clearOffset: 0.99
        });
    }! function(p) {
        p.fn.circleMagic = function(t) {
            var o, a, n, r, e = !0,
                i = [],
                d = p.extend({ color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2 }, t),
                l = this[0];
    
            function c() { e = !(document.body.scrollTop > a) }
    
            function s() { o = l.clientWidth, a = l.clientHeight, l.height = a + "px", n.width = o, n.height = a }
    
            function h() {
                if (e)
                    for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
                requestAnimationFrame(h)
            }
    
            function f() {
                var t = this;
    
              function e() { t.pos.x = Math.random() * o, t.pos.y = a + 100 * Math.random(), t.alpha = .1 + Math.random() * d.clearOffset, t.scale = .1 + .3 * Math.random(), t.speed = Math.random(), "random" === d.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = d.color }
              t.pos = {}, e(), this.draw = function() { t.alpha <= 0 && e(), t.pos.y -= t.speed, t.alpha -= 5e-4, r.beginPath(), r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1), r.fillStyle = t.color, r.fill(), r.closePath() }
            }! function() {
                o = l.offsetWidth, a = l.offsetHeight,
                    function() {
                        var t = document.createElement("canvas");
                        t.id = "canvas", t.style.top = 0, t.style.zIndex = 0, t.style.position = "absolute", l.appendChild(t), t.parentElement.style.overflow = "hidden"
                    }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
              for (var t = 0; t < o * d.density; t++) {
                    var e = new f;
                    i.push(e)
                }
                h()
            }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
        }
    }(jQuery);
    
    // 调用气泡方法
    bubble();
    
    /* xkTool */
    var chocolate = new xkTool();
    chocolate.footFish();
    })