'use strict';


function u(x, y) {
  return x + y | 0;
}

var h = 3;

function max2(x, y) {
  return x + y;
}

var hh = 1 + 2;

function f(x) {
  des(x, (function () {
          console.log("hei");
        }));
}

exports.u = u;
exports.h = h;
exports.max2 = max2;
exports.hh = hh;
exports.f = f;
/* No side effect */
