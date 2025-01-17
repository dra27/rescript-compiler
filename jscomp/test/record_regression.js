'use strict';

var Caml_obj = require("../../lib/js/caml_obj.js");
var Caml_option = require("../../lib/js/caml_option.js");

var f1 = {
  x: 3,
  z: 2
};

var newrecord = Caml_obj.obj_dup(f1);

newrecord.y = 3;

var newrecord$1 = Caml_obj.obj_dup(newrecord);

newrecord$1.yy = Caml_option.some(undefined);

var theseTwoShouldBeIdentical = [
  newrecord$1.yy,
  Caml_option.some(undefined)
];

var v = {
  x: 2,
  z: 3
};

var newrecord$2 = Caml_obj.obj_dup(v);

newrecord$2.y1 = 22;

var v1 = {
  x: 2,
  z: 3
};

var newrecord$3 = Caml_obj.obj_dup(v1);

newrecord$3.y1 = 22;

function h11(v1) {
  var newrecord = Caml_obj.obj_dup(v1);
  newrecord.y1 = 22;
  return newrecord;
}

var po = {
  aa: 3,
  bb: 4
};

var newrecord$4 = Caml_obj.obj_dup(po);

newrecord$4.aa = undefined;

function setAA(ao) {
  return {
          aa: ao
        };
}

var ir0 = {
  TAG: /* V0 */0,
  x0: "v0",
  x3: 3
};

var ir1 = {
  TAG: /* V0 */0,
  x0: "v0",
  x1: "v1",
  x3: 3
};

var ir2 = {
  TAG: /* V0 */0,
  x0: "v0",
  x1: "v1",
  x2: 2,
  x3: 3
};

var ir3 = {
  TAG: /* V1 */1,
  y0: "v0",
  y1: 1
};

var pm0;

pm0 = ir0.TAG === /* V0 */0 ? [
    "v0",
    3
  ] : [
    "v0",
    undefined
  ];

var pm1;

if (ir1.TAG === /* V0 */0) {
  var x1 = "v1";
  var x0 = "v0";
  pm1 = x1 !== undefined ? [
      x0,
      x1,
      3
    ] : [
      x0,
      "n/a",
      3
    ];
} else {
  pm1 = [
    "v0",
    "n/a",
    "v1"
  ];
}

var pm2;

if (ir2.TAG === /* V0 */0) {
  var x1$1 = "v1";
  var x0$1 = "v0";
  if (x1$1 !== undefined) {
    var x2 = 2;
    pm2 = x2 !== undefined ? [
        x0$1,
        x1$1,
        x2,
        3
      ] : [
        x0$1,
        x1$1,
        0,
        3
      ];
  } else {
    var x2$1 = 2;
    pm2 = x2$1 !== undefined ? [
        x0$1,
        "n/a",
        x2$1,
        3
      ] : [
        x0$1,
        "n/a",
        0,
        3
      ];
  }
} else {
  pm2 = [
    "v0",
    "n/a",
    0,
    "v1"
  ];
}

function inlinedRecord(ir) {
  if (ir.TAG !== /* V0 */0) {
    return [
            ir.y0,
            "n/a",
            0,
            ir.y1
          ];
  }
  var x1 = ir.x1;
  var x0 = ir.x0;
  if (x1 !== undefined) {
    switch (x1) {
      case "x1" :
          var x2 = ir.x2;
          if (x2 !== undefined) {
            return [
                    x0,
                    "x1",
                    x2,
                    ir.x3
                  ];
          }
          break;
      case "xx1" :
          var x2$1 = ir.x2;
          if (x2$1 !== undefined) {
            return [
                    x0,
                    "xx1",
                    x2$1,
                    ir.x3
                  ];
          }
          break;
      default:
        
    }
    var x2$2 = ir.x2;
    if (x2$2 !== undefined) {
      return [
              x0,
              x1,
              x2$2,
              ir.x3
            ];
    } else {
      return [
              x0,
              x1,
              0,
              ir.x3
            ];
    }
  }
  var x2$3 = ir.x2;
  if (x2$3 !== undefined) {
    return [
            x0,
            "n/a",
            x2$3,
            ir.x3
          ];
  } else {
    return [
            x0,
            "n/a",
            0,
            ir.x3
          ];
  }
}

var pm3 = inlinedRecord(ir2);

var pm4 = inlinedRecord(ir3);

var f2 = {
  x: 3,
  y: 3,
  z: 3
};

var f3 = newrecord;

var f4 = newrecord$1;

var v2 = {
  x: 3,
  y: undefined,
  z: 2
};

var h = newrecord$2;

var h10 = newrecord$3;

var ir4 = /* V0 */{
  x: 3
};

var ir5 = /* V0 */{};

exports.f1 = f1;
exports.f2 = f2;
exports.f3 = f3;
exports.f4 = f4;
exports.theseTwoShouldBeIdentical = theseTwoShouldBeIdentical;
exports.v2 = v2;
exports.v = v;
exports.h = h;
exports.v1 = v1;
exports.h10 = h10;
exports.h11 = h11;
exports.po = po;
exports.setAA = setAA;
exports.ir0 = ir0;
exports.ir1 = ir1;
exports.ir2 = ir2;
exports.ir3 = ir3;
exports.pm0 = pm0;
exports.pm1 = pm1;
exports.pm2 = pm2;
exports.inlinedRecord = inlinedRecord;
exports.pm3 = pm3;
exports.pm4 = pm4;
exports.ir4 = ir4;
exports.ir5 = ir5;
/*  Not a pure module */
